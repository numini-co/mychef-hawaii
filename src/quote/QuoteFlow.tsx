/**
 * The quote flow (design/quote.md) — ONE state machine, skinned by tokens.
 *
 * Steps: island → service → date+guests → details → contact → review/handoff.
 * Behavior law: linear with back-editing; state survives reload
 * (sessionStorage); keyboard-complete; aria-live announces step changes;
 * one primary + one secondary action per step; ranges and ESTIMATE ONLY
 * labels only — the flow NEVER computes a final total; quote-only zones
 * never show a number; ends in WhatsApp / mailto handoff, not a fake
 * "booked" state.
 */
import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { Link } from 'react-router';
import type { IslandId, SiteId } from '@/platform/tokens';
import { ISLAND_IDS, SITE_META, TOKENS, tokensToCssVars } from '@/platform/tokens';
import { CONTACT, RATES } from '@/platform/config';
import { useSite } from '@/platform/IslandProvider';
import { Seo } from '@/platform/seo';
import LongformArticle from '@/platform/longform/LongformArticle';
import type { ContentRecord } from '@/platform/types';

/* ---------------- data ---------------- */

interface AreaOption {
  label: string;
  /** Quote-only zone: never shows a number, prints the reason instead. */
  quoteOnly?: string;
  surcharge?: string;
}

const AREAS: Record<SiteId, AreaOption[]> = {
  hub: [
    { label: 'Two islands' },
    { label: 'Three islands' },
    { label: 'All four islands' },
    { label: 'Wedding week across islands' },
  ],
  oahu: [
    { label: 'Honolulu / Waikīkī' },
    { label: 'Kahala' },
    { label: 'Ko Olina' },
    { label: 'Kailua / Windward' },
    { label: 'North Shore / Turtle Bay', surcharge: 'Travel from $75 applies' },
  ],
  maui: [
    { label: 'Wailea / Mākena' },
    { label: 'Kapalua' },
    { label: 'Kāʻanapali / Lahaina' },
    { label: 'Upcountry', surcharge: 'Travel from $75 applies' },
    { label: 'Pāʻia / Haʻikū', quoteOnly: 'Quoted at inquiry — drive time and roster depth make a flat number dishonest here.' },
  ],
  kauai: [
    { label: 'Princeville' },
    { label: 'Hanalei' },
    { label: 'Poʻipū / Kōloa' },
    { label: 'Kapaʻa / Līhuʻe' },
    { label: 'Far North (past Hanalei)', quoteOnly: 'Quoted at inquiry — one bridge in and out; we need 72 hours’ notice and the quote shows why.' },
  ],
  bigisland: [
    { label: 'Kailua-Kona' },
    { label: 'Kohala Coast' },
    { label: 'Waikōloa' },
    { label: 'Hilo', quoteOnly: 'Quoted at inquiry — the east side sits 2.5–3 hours from the Kona roster.' },
    { label: 'Volcano', quoteOnly: 'Quoted at inquiry — the east side sits 2.5–3 hours from the Kona roster.' },
  ],
};

interface ServiceOption {
  id: string;
  label: string;
  scope: string;
  /** From-price line per island, or null for per-event quoting. */
  price: (island: SiteId) => string | null;
  islands?: SiteId[]; // restricted services (weekly resident)
}

function rateOf(island: SiteId) {
  return island === 'hub' ? null : RATES[island];
}

const SERVICES: ServiceOption[] = [
  {
    id: 'signature',
    label: 'One evening — Signature dinner',
    scope: 'A restaurant-grade dinner cooked and served in your kitchen.',
    price: (i) => `${rateOf(i)?.coreBand ?? '$125–$250'} a guest`,
  },
  {
    id: 'date-night',
    label: 'Date Night for two',
    scope: 'The two-person format: one chef, one table, one evening.',
    price: (i) => rateOf(i)?.dateNight ?? 'from $450',
  },
  {
    id: 'stay-chef',
    label: 'Multi-day — Stay Chef',
    scope: 'The same chef across the trip: breakfasts, kids’ meals, dinners.',
    price: (i) => `from $${rateOf(i)?.stayChefDay ?? 850}/day`,
  },
  {
    id: 'wedding-week',
    label: 'Wedding week',
    scope: 'Welcome dinner to recovery brunch — five meals, one contract.',
    price: () => 'per-guest bands apply',
  },
  {
    id: 'event-catering',
    label: 'Event catering',
    scope: 'Staffed service for 10–75 guests; over 75 by written exception.',
    price: () => 'quoted per event',
  },
  {
    id: 'retreat',
    label: 'Retreat',
    scope: 'Communal tables and dietary protocols, 8–30+ guests.',
    price: () => 'quoted per event',
  },
  {
    id: 'weekly-resident',
    label: 'Weekly resident service',
    scope: 'The kamaʻāina line: a week of prepared meals on a schedule.',
    price: (i) => (i === 'oahu' ? 'from $300/wk' : '$550–$1,200/wk'),
    islands: ['oahu', 'kauai'],
  },
  {
    id: 'not-sure',
    label: 'Not sure — point us at the table',
    scope: 'Tell us the occasion; the quote recommends the format.',
    price: () => null,
  },
];

const DIETARY_FLAGS = [
  'Vegetarian', 'Vegan', 'Gluten-free', 'Dairy-free', 'Nut allergy', 'Shellfish allergy',
  'Halal', 'Kosher-style', 'Keto', 'Low-FODMAP', 'Other',
];

const STEP_NAMES = ['Island', 'Service', 'Date & guests', 'Details', 'Contact', 'Review'];

/* ---------------- state ---------------- */

interface QuoteState {
  step: number;
  island: SiteId | '';
  service: string;
  /** One or more service dates (YYYY-MM-DD). */
  dates: string[];
  guests: number;
  area: string;
  kitchen: 'yes' | 'no' | 'unsure' | '';
  dietary: string[];
  occasion: string;
  addons: string[];
  name: string;
  contact: string;
  channel: 'whatsapp' | 'email' | '';
  sent: '' | 'whatsapp' | 'email';
}

const initialState = (island: SiteId | ''): QuoteState => ({
  step: island && island !== 'hub' ? 2 : 1,
  island: island && island !== 'hub' ? island : '',
  service: '',
  dates: [''],
  guests: 6,
  area: '',
  kitchen: '',
  dietary: [],
  occasion: '',
  addons: [],
  name: '',
  contact: '',
  channel: '',
  sent: '',
});

function formatDates(dates: string[]): string {
  const filled = dates.map((d) => d.trim()).filter(Boolean);
  if (!filled.length) return '—';
  return filled.join(', ');
}

function normalizeQuoteState(raw: Partial<QuoteState> & { date?: string }): QuoteState {
  const base = initialState('');
  const datesFromLegacy =
    Array.isArray(raw.dates) && raw.dates.length
      ? raw.dates
      : typeof raw.date === 'string' && raw.date
        ? [raw.date]
        : [''];
  return {
    ...base,
    ...raw,
    dates: datesFromLegacy.length ? datesFromLegacy : [''],
  };
}

const STORAGE_KEY = 'mychef-quote';

function track(event: string, detail?: Record<string, unknown>) {
  // Analytics contract (quote.md): quote_start, quote_step_complete{step},
  // quote_handoff{channel}, quote_decline_path{kitchen}
  const dl = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
  if (dl) dl.push({ event, ...detail });
}

/* ---------------- component ---------------- */

function arrivingInitialState(arrivingIsland: SiteId | ''): QuoteState {
  if (typeof window === 'undefined') return initialState(arrivingIsland);
  const params = new URLSearchParams(window.location.search);
  const isMulti = params.get('itinerary') === 'multi' || params.get('multi') === 'true';
  const paramIsland = params.get('island') as SiteId | null;
  const paramService = params.get('service') || '';
  const paramGuests = parseInt(params.get('guests') || '', 10);
  const paramDates = params.get('dates') || params.get('date') || '';
  const paramArea = params.get('area') || '';
  const paramDietary = params.get('dietary') ? params.get('dietary')!.split(',') : [];
  const paramAddons = params.get('addons') ? params.get('addons')!.split(',') : [];

  const effectiveIsland: SiteId | '' = isMulti
    ? 'hub'
    : paramIsland && (ISLAND_IDS.includes(paramIsland as IslandId) || paramIsland === 'hub')
      ? paramIsland
      : arrivingIsland && arrivingIsland !== 'hub'
        ? arrivingIsland
        : '';

  const initial = initialState(effectiveIsland);

  if (paramService) initial.service = paramService;
  if (!isNaN(paramGuests) && paramGuests >= 2) initial.guests = paramGuests;
  if (paramDates) {
    initial.dates = paramDates
      .split(/[,|]/)
      .map((d) => d.trim())
      .filter(Boolean);
    if (!initial.dates.length) initial.dates = [''];
  }
  if (paramArea) initial.area = paramArea;
  if (paramDietary.length) initial.dietary = paramDietary;
  if (paramAddons.length) initial.addons = paramAddons;

  if (effectiveIsland && initial.service) {
    initial.step = 3;
  }

  return initial;
}

export default function QuoteFlow() {
  const { siteId, link } = useSite();
  const arrivingIsland = siteId !== 'hub' ? siteId : '';

  const [s, setS] = useState<QuoteState>(() => {
    try {
      const urlHasPrefills = typeof window !== 'undefined' && window.location.search.length > 1;
      if (urlHasPrefills) {
        return arrivingInitialState(arrivingIsland);
      }
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<QuoteState> & { date?: string };
        const normalized = normalizeQuoteState(parsed);
        return {
          ...normalized,
          island: normalized.island || arrivingIsland || normalized.island,
        };
      }
    } catch {
      /* fresh state */
    }
    return arrivingInitialState(arrivingIsland);
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    } catch {
      /* private mode */
    }
  }, [s]);

  useEffect(() => {
    track('quote_start', { island: arrivingIsland || undefined });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const set = (patch: Partial<QuoteState>) => setS((prev) => ({ ...prev, ...patch }));
  const island = (s.island || arrivingIsland || 'oahu') as SiteId;

  const goTo = (step: number) => {
    track(`quote_step_complete`, { step: s.step });
    set({ step });
  };

  const stepValid = useMemo(() => {
    const hasDate = s.dates.some((d) => d.trim().length > 0);
    switch (s.step) {
      case 1: return !!s.island;
      case 2: return !!s.service;
      case 3: return hasDate && s.guests >= 2 && !!s.area;
      case 4: return !!s.kitchen;
      case 5: return s.name.trim().length > 1 && s.contact.trim().length > 3 && !!s.channel;
      default: return true;
    }
  }, [s]);

  /* The hub re-skin: from step 2 onward the chosen island's tokens apply. */
  const skinId: SiteId =
    siteId === 'hub' && s.island && s.island !== 'hub' && s.step >= 2 ? (s.island as SiteId) : siteId;
  const islandLabel = s.island === 'hub' ? 'Multi-island itinerary' : SITE_META[island]?.name ?? '—';
  const skinVars = tokensToCssVars(TOKENS[skinId]) as CSSProperties;

  const area = AREAS[island]?.find((a) => a.label === s.area);
  const service = SERVICES.find((sv) => sv.id === s.service);

  const brief = useMemo(() => {
    const lines = [
      'myCHEF Hawaii — quote brief',
      `Island: ${islandLabel}`,
      `Service: ${service?.label ?? '—'}`,
      `Date(s): ${formatDates(s.dates)}`,
      `Guests: ${s.guests}`,
      `Area: ${s.area || '—'}`,
      `Kitchen: ${s.kitchen === 'yes' ? 'Full kitchen' : s.kitchen === 'unsure' ? 'Not sure' : s.kitchen === 'no' ? 'No kitchen' : '—'}`,
      `Dietary: ${s.dietary.length ? s.dietary.join(', ') : 'none flagged'}`,
      s.occasion ? `Occasion: ${s.occasion}` : '',
      s.addons.length ? `Add-ons: ${s.addons.join(', ')}` : '',
      `Name: ${s.name}`,
      `Reply via: ${s.channel} — ${s.contact}`,
      '(The written quote is the confirmed total; ranges are estimates only.)',
    ].filter(Boolean);
    return lines.join('\n');
  }, [s, service, islandLabel]);

  const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(brief)}`;
  const mailtoHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `Quote brief — ${islandLabel} — ${formatDates(s.dates) === '—' ? 'dates flexible' : formatDates(s.dates)}`,
  )}&body=${encodeURIComponent(brief)}`;

  const indicative = useMemo(() => {
    if (area?.quoteOnly) return null;
    if (!service) return null;
    return service.price(island);
  }, [area, service, island]);

  const declineKitchen = s.kitchen === 'no';

  return (
    <div className="section-pad" style={skinVars}>
      <Seo
        title="Get a Written Quote"
        description="Six steps, two minutes, one written quote. The written quote you receive is the confirmed total — never a chat estimate."
        path={link('quote')}
      />
      <div className="mx-auto max-w-2xl px-6">
        <p className="eyebrow-site">The quote desk</p>
        <h1 className="h1-site mt-3">Tell us about the table.</h1>
        <p className="mt-4 text-ink-2">The button is not “Book now.” You get a written quote.</p>

        {/* Progress */}
        <nav aria-label="Quote progress" className="mt-8">
          <p className="mb-3 text-sm text-ink-2 sm:hidden">
            Step {s.step} of 6 · {STEP_NAMES[s.step - 1]}
          </p>
          <ol className="flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {STEP_NAMES.map((name, i) => {
              const n = i + 1;
              const state = n < s.step ? 'done' : n === s.step ? 'current' : 'todo';
              return (
                <li key={name} className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    disabled={n > s.step}
                    onClick={() => goTo(n)}
                    aria-current={state === 'current' ? 'step' : undefined}
                    aria-label={`Step ${n}: ${name}`}
                    className="flex h-11 w-11 items-center justify-center border text-xs sm:h-8 sm:w-8"
                    style={{
                      borderRadius: 'var(--site-cta-radius)',
                      borderColor: 'var(--site-line)',
                      backgroundColor: state === 'done' || state === 'current' ? 'var(--site-cta-bg)' : 'transparent',
                      color: state === 'done' || state === 'current' ? 'var(--site-cta-ink)' : 'var(--site-ink2)',
                    }}
                  >
                    {n}
                  </button>
                  {n < STEP_NAMES.length ? <span aria-hidden="true" className="hidden h-px w-4 sm:block" style={{ backgroundColor: 'var(--site-line)' }} /> : null}
                </li>
              );
            })}
          </ol>
        </nav>

        <div aria-live="polite" className="sr-only">
          Step {s.step} of 6: {STEP_NAMES[s.step - 1]}
        </div>

        <div className="card-site mt-8 p-4 sm:p-6 md:p-8">
          {s.step === 1 ? (
            <StepIsland s={s} set={set} />
          ) : s.step === 2 ? (
            <StepService s={s} set={set} island={island} />
          ) : s.step === 3 ? (
            <StepDateGuests s={s} set={set} island={island} area={area} />
          ) : s.step === 4 ? (
            <StepDetails s={s} set={set} />
          ) : s.step === 5 ? (
            <StepContact s={s} set={set} />
          ) : (
            <StepReview
              s={s}
              set={set}
              island={island}
              area={area}
              service={service}
              indicative={indicative}
              whatsappHref={whatsappHref}
              mailtoHref={mailtoHref}
            />
          )}

          {/* Decline path — kitchen */}
          {declineKitchen && s.step >= 4 ? (
            <div role="alert" className="rule-t mt-6 pt-5 text-sm">
              <p className="font-medium">A hotel room without a kitchen is one we have to decline.</p>
              <p className="mt-2 text-ink-2">
                A coffee maker is not a kitchen — we can’t cook safely or well in one. Alternatives: a private
                dining room booking, a venue with a kitchen, or a catered drop-off where the island allows it.
                The team will offer options in the reply.
              </p>
            </div>
          ) : null}

          {/* Nav */}
          {s.step < 6 ? (
            <div className="mt-8 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              {s.step > (arrivingIsland ? 2 : 1) ? (
                <button type="button" className="cta-secondary-site" onClick={() => goTo(s.step - 1)}>
                  ← Back
                </button>
              ) : (
                <Link to={link('pricing')} className="cta-secondary-site">See the tariff first</Link>
              )}
              <button
                type="button"
                className="cta-site w-full sm:w-auto"
                disabled={!stepValid}
                aria-disabled={!stepValid}
                style={!stepValid ? { opacity: 0.45, cursor: 'not-allowed' } : undefined}
                onClick={() => {
                  if (s.step === 4 && s.kitchen === 'no') track('quote_decline_path', { kitchen: 'none' });
                  if (stepValid) goTo(s.step + 1);
                }}
              >
                {s.step === 5 ? 'Review the brief' : 'Continue'}
              </button>
            </div>
          ) : null}
        </div>

        <p className="mt-6 text-sm text-ink-2">
          Ranges shown are ESTIMATE ONLY — the written quote you receive is the confirmed total. A 50% deposit
          locks the date, only after you have seen the numbers.
        </p>
      </div>
      <LongformArticle record={quoteRecord(siteId)} />
    </div>
  );
}

function quoteRecord(siteId: SiteId): ContentRecord {
  const label =
    siteId === 'hub' ? 'Hawaii' : siteId === 'oahu' ? 'Oahu' : siteId === 'maui' ? 'Maui' : siteId === 'kauai' ? 'Kauai' : 'Big Island';
  return {
    slug: 'quote',
    category: 'core',
    title: `Get a Written Quote — Private Chef ${label}`,
    h1: 'Tell us about the table.',
    meta: {
      description: `Six steps, two minutes, one written quote for ${label}. The written quote is the confirmed total — never a chat estimate.`,
    },
    sections: [],
    cta: { label: 'Start the quote', href: 'quote' },
    keywords: [`book a private chef ${label}`],
  };
}

/* ---------------- steps ---------------- */

interface StepProps {
  s: QuoteState;
  set: (patch: Partial<QuoteState>) => void;
}

function StepIsland({ s, set }: StepProps) {
  return (
    <fieldset>
      <legend className="font-display text-2xl">Which island?</legend>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {ISLAND_IDS.map((id) => (
          <ChoiceCard
            key={id}
            selected={s.island === id}
            onSelect={() => set({ island: id, area: '' })}
            title={SITE_META[id].name}
            body={`Signature ${RATES[id].coreBand} a guest · Stay Chef from $${RATES[id].stayChefDay}/day`}
          />
        ))}
        <ChoiceCard
          selected={s.island === 'hub'}
          onSelect={() => set({ island: 'hub', area: '' })}
          title="More than one island"
          body="We staff every table on the itinerary — one brief, one written quote."
        />
      </div>
    </fieldset>
  );
}

function StepService({ s, set, island }: StepProps & { island: SiteId }) {
  const options = SERVICES.filter((sv) => !sv.islands || sv.islands.includes(island));
  return (
    <fieldset>
      <legend className="font-display text-2xl">What kind of service?</legend>
      <div className="mt-5 grid gap-3">
        {options.map((sv) => (
          <ChoiceCard
            key={sv.id}
            selected={s.service === sv.id}
            onSelect={() => set({ service: sv.id })}
            title={sv.label}
            body={sv.scope}
            price={sv.price(island)}
          />
        ))}
      </div>
    </fieldset>
  );
}

function StepDateGuests({ s, set, island, area }: StepProps & { island: SiteId; area?: AreaOption }) {
  const updateDate = (index: number, value: string) => {
    const next = [...s.dates];
    next[index] = value;
    set({ dates: next });
  };
  const addDate = () => {
    if (s.dates.length >= 8) return;
    set({ dates: [...s.dates, ''] });
  };
  const removeDate = (index: number) => {
    if (s.dates.length <= 1) {
      set({ dates: [''] });
      return;
    }
    set({ dates: s.dates.filter((_, i) => i !== index) });
  };

  return (
    <fieldset>
      <legend className="font-display text-2xl">When, and how many?</legend>
      <div className="mt-5 space-y-6">
        <div>
          <div className="mb-2 flex items-end justify-between gap-3">
            <label className="eyebrow-site !mb-0 block">Service date(s)</label>
            <span className="text-xs text-ink-2">{s.dates.filter((d) => d).length || 0} selected</span>
          </div>
          <div className="space-y-3">
            {s.dates.map((date, index) => (
              <div key={`date-${index}`} className="flex items-center gap-2">
                <input
                  id={index === 0 ? 'q-date' : `q-date-${index}`}
                  type="date"
                  className="input-site flex-1"
                  value={date}
                  onChange={(e) => updateDate(index, e.target.value)}
                  aria-label={index === 0 ? 'Primary service date' : `Additional service date ${index + 1}`}
                />
                {s.dates.length > 1 ? (
                  <button
                    type="button"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-line-site text-lg text-ink-2 hover:border-accent-site hover:text-ink"
                    style={{ borderRadius: 'var(--site-cta-radius)' }}
                    aria-label={`Remove date ${index + 1}`}
                    onClick={() => removeDate(index)}
                  >
                    ×
                  </button>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-[var(--site-cta-radius)] border border-line-site bg-surface-site px-3.5 text-sm font-medium text-ink hover:border-accent-site"
              onClick={addDate}
              disabled={s.dates.length >= 8}
            >
              + Add another date
            </button>
            <p className="text-sm text-ink-2">Stay Chef, wedding weeks, and multi-meal trips can list several evenings.</p>
          </div>
          <p className="mt-2 text-sm text-ink-2">December–March and holiday weeks book first.</p>
        </div>

        <div>
          <span id="q-guests-label" className="eyebrow-site mb-2 block">Guests</span>
          <div className="flex items-center gap-4" role="group" aria-labelledby="q-guests-label">
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center border-2 border-line-site bg-surface-site text-xl font-medium text-ink hover:border-accent-site"
              style={{ borderRadius: 'var(--site-cta-radius)' }}
              aria-label="Fewer guests"
              onClick={() => set({ guests: Math.max(2, s.guests - 1) })}
            >
              −
            </button>
            <span className="tabular-site font-display text-3xl" aria-live="polite">{s.guests}</span>
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center border-2 border-line-site bg-surface-site text-xl font-medium text-ink hover:border-accent-site"
              style={{ borderRadius: 'var(--site-cta-radius)' }}
              aria-label="More guests"
              onClick={() => set({ guests: Math.min(80, s.guests + 1) })}
            >
              +
            </button>
          </div>
          {s.guests > 75 ? (
            <p className="mt-2 text-sm text-ink-2">Over 75 guests is a written exception — we confirm staffing in writing before taking the date.</p>
          ) : null}
        </div>

        <div>
          <span id="q-area-label" className="eyebrow-site mb-2 block">Area</span>
          <div className="grid gap-2 sm:grid-cols-2" role="group" aria-labelledby="q-area-label">
            {AREAS[island].map((a) => (
              <ChoiceCard
                key={a.label}
                selected={s.area === a.label}
                onSelect={() => set({ area: a.label })}
                title={a.label}
                body={a.surcharge ?? a.quoteOnly ?? undefined}
              />
            ))}
          </div>
          {area?.surcharge ? <p className="mt-2 text-sm text-ink-2">{area.surcharge}.</p> : null}
          {area?.quoteOnly ? (
            <p className="mt-2 text-sm text-ink-2">{area.quoteOnly} Your brief goes to the island team as-is.</p>
          ) : null}
        </div>
      </div>
    </fieldset>
  );
}

function StepDetails({ s, set }: StepProps) {
  const toggle = (list: string[], item: string) =>
    list.includes(item) ? list.filter((x) => x !== item) : [...list, item];

  const kitchenOptions = [
    {
      id: 'yes' as const,
      title: 'Yes — full kitchen',
      body: 'Stove, oven, and counter space we can cook in.',
    },
    {
      id: 'unsure' as const,
      title: 'Not sure yet',
      body: 'Send photos later — we will confirm before locking a menu.',
    },
    {
      id: 'no' as const,
      title: 'No — hotel room / no kitchen',
      body: 'We decline coffee-maker rooms and offer safer alternatives.',
    },
  ];

  return (
    <fieldset>
      <legend className="font-display text-2xl">The details.</legend>
      <div className="mt-5 space-y-7">
        <div>
          <span id="q-kitchen-label" className="eyebrow-site mb-3 block">Does the property have a full kitchen?</span>
          <div className="grid gap-3" role="radiogroup" aria-labelledby="q-kitchen-label">
            {kitchenOptions.map((opt) => (
              <ChoiceCard
                key={opt.id}
                selected={s.kitchen === opt.id}
                onSelect={() => set({ kitchen: opt.id })}
                title={opt.title}
                body={opt.body}
              />
            ))}
          </div>
        </div>

        <div>
          <span id="q-dietary-label" className="eyebrow-site mb-3 block">Dietary flags</span>
          <div className="flex flex-wrap gap-2.5" role="group" aria-labelledby="q-dietary-label">
            {DIETARY_FLAGS.map((d) => {
              const on = s.dietary.includes(d);
              return (
                <button
                  key={d}
                  type="button"
                  aria-pressed={on}
                  className="motion-site inline-flex min-h-[44px] items-center rounded-[var(--site-cta-radius)] border-2 px-3.5 text-sm font-medium"
                  style={{
                    borderColor: on ? 'var(--site-accent-text)' : 'var(--site-line)',
                    backgroundColor: on ? 'color-mix(in srgb, var(--site-accent) 14%, var(--site-card))' : 'var(--site-card)',
                    color: on ? 'var(--site-ink)' : 'var(--site-ink2)',
                  }}
                  onClick={() => set({ dietary: toggle(s.dietary, d) })}
                >
                  {on ? '✓ ' : ''}{d}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="q-occasion" className="eyebrow-site mb-2 block">Occasion note (optional)</label>
          <input
            id="q-occasion"
            type="text"
            className="input-site"
            placeholder="Anniversary, board retreat, the big five-oh…"
            value={s.occasion}
            onChange={(e) => set({ occasion: e.target.value })}
          />
        </div>

        <div>
          <span id="q-addons-label" className="eyebrow-site mb-3 block">Add-ons</span>
          <div className="grid gap-3 sm:grid-cols-3" role="group" aria-labelledby="q-addons-label">
            {['Bar cart', 'Server ($55/hr)', 'Sous chef ($75/hr)'].map((a) => (
              <ChoiceCard
                key={a}
                selected={s.addons.includes(a)}
                onSelect={() => set({ addons: toggle(s.addons, a) })}
                title={a}
              />
            ))}
          </div>
        </div>
      </div>
    </fieldset>
  );
}

function StepContact({ s, set }: StepProps) {
  return (
    <fieldset>
      <legend className="font-display text-2xl">Where does the quote go?</legend>
      <div className="mt-5 space-y-5">
        <div>
          <label htmlFor="q-name" className="eyebrow-site mb-2 block">Name</label>
          <input id="q-name" type="text" autoComplete="name" className="input-site" value={s.name} onChange={(e) => set({ name: e.target.value })} />
        </div>
        <div>
          <label htmlFor="q-contact" className="eyebrow-site mb-2 block">Email or WhatsApp number</label>
          <input id="q-contact" type="text" autoComplete="email" className="input-site" value={s.contact} onChange={(e) => set({ contact: e.target.value })} />
        </div>
        <div>
          <span id="q-channel-label" className="eyebrow-site mb-3 block">Preferred reply channel</span>
          <div className="grid gap-3 sm:grid-cols-2" role="radiogroup" aria-labelledby="q-channel-label">
            <ChoiceCard
              selected={s.channel === 'whatsapp'}
              onSelect={() => set({ channel: 'whatsapp' })}
              title="WhatsApp"
              body="Fastest reply on the island desk."
            />
            <ChoiceCard
              selected={s.channel === 'email'}
              onSelect={() => set({ channel: 'email' })}
              title="Email"
              body="Full written quote in your inbox."
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
}

function StepReview({
  s,
  set,
  island,
  area,
  service,
  indicative,
  whatsappHref,
  mailtoHref,
}: {
  s: QuoteState;
  set: (patch: Partial<QuoteState>) => void;
  island: SiteId;
  area?: AreaOption;
  service?: ServiceOption;
  indicative: string | null;
  whatsappHref: string;
  mailtoHref: string;
}) {
  if (s.sent) {
    return (
      <div role="status">
        <p className="font-display text-2xl">
          Your brief is with the {island === 'hub' ? 'statewide' : SITE_META[island].name} desk.
        </p>
        <p className="mt-4 text-ink-2">
          The written quote you receive is the confirmed total. A 50% deposit locks the date — only after
          you’ve seen the numbers.
        </p>
      </div>
    );
  }

  const rows: [string, string][] = [
    ['Island', island === 'hub' ? 'Multi-island itinerary' : SITE_META[island].name],
    ['Service', service?.label ?? '—'],
    ['Date(s)', formatDates(s.dates)],
    ['Guests', String(s.guests)],
    ['Area', s.area],
    ['Kitchen', s.kitchen === 'yes' ? 'Full kitchen' : s.kitchen === 'unsure' ? 'Not sure' : 'No kitchen'],
    ['Dietary', s.dietary.length ? s.dietary.join(', ') : 'None flagged'],
    ...(s.addons.length ? ([['Add-ons', s.addons.join(', ')]] as [string, string][]) : []),
    ...(s.occasion ? ([['Occasion', s.occasion]] as [string, string][]) : []),
    ['Reply via', `${s.channel === 'whatsapp' ? 'WhatsApp' : 'Email'} — ${s.contact}`],
  ];

  return (
    <div>
      <p className="font-display text-2xl">The brief, before it flies.</p>
      <dl className="mt-5 space-y-0">
        {rows.map(([k, v]) => (
          <div key={k} className="rule-t flex items-baseline justify-between gap-6 py-2.5 text-sm">
            <dt className="text-ink-2">{k}</dt>
            <dd className="text-right font-medium">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="rule-y mt-6 py-4">
        {area?.quoteOnly ? (
          <p className="text-sm text-ink-2">
            <span className="font-medium text-ink">Quoted at inquiry.</span> {area.quoteOnly}
          </p>
        ) : indicative ? (
          <p className="text-sm">
            Indicative range: <span className="tabular-site font-medium">{indicative}</span>{' '}
            <span className="text-ink-2">— ESTIMATE ONLY. The written quote is the confirmed total.</span>
          </p>
        ) : (
          <p className="text-sm text-ink-2">Priced per event — the written quote carries the numbers.</p>
        )}
      </div>

      <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-site w-full sm:w-auto"
          onClick={() => {
            track('quote_handoff', { channel: 'whatsapp' });
            set({ sent: 'whatsapp' });
          }}
        >
          Send via WhatsApp
        </a>
        <a
          href={mailtoHref}
          className="cta-secondary-site"
          onClick={() => {
            track('quote_handoff', { channel: 'email' });
            set({ sent: 'email' });
          }}
        >
          Send by email →
        </a>
      </div>
      <p className="mt-4 text-sm text-ink-2">
        Both doors send the same structured brief to the {island === 'hub' ? 'statewide' : SITE_META[island].name} desk. Nothing is booked yet;
        nothing is charged.
      </p>
    </div>
  );
}

function ChoiceCard({
  selected,
  onSelect,
  title,
  body,
  price,
}: {
  selected: boolean;
  onSelect: () => void;
  title: string;
  body?: string;
  price?: string | null;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className="motion-site min-h-12 w-full border-2 p-4 text-left"
      style={{
        borderRadius: 'var(--site-card-radius)',
        borderColor: selected ? 'var(--site-accent-text)' : 'var(--site-line)',
        backgroundColor: selected
          ? 'color-mix(in srgb, var(--site-accent) 16%, var(--site-card))'
          : 'var(--site-card)',
        boxShadow: selected ? 'inset 0 0 0 1px color-mix(in srgb, var(--site-accent-text) 35%, transparent)' : 'var(--site-card-shadow)',
        color: 'var(--site-ink)',
      }}
    >
      <span className="flex items-start justify-between gap-3">
        <span className="block font-medium leading-snug">{title}</span>
        {selected ? (
          <span
            aria-hidden="true"
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
            style={{ backgroundColor: 'var(--site-accent-text)', color: 'var(--site-card)' }}
          >
            ✓
          </span>
        ) : null}
      </span>
      {body ? <span className="mt-1.5 block text-sm leading-relaxed text-ink-2">{body}</span> : null}
      {price ? <span className="tabular-site mt-2 block text-sm font-medium text-accent-site">{price}</span> : null}
    </button>
  );
}
