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
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import type { SiteId } from '@/platform/tokens';
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
  hub: [],
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

const SERVICES: ServiceOption[] = [
  {
    id: 'signature',
    label: 'One evening — Signature dinner',
    scope: 'A restaurant-grade dinner cooked and served in your kitchen.',
    price: (i) => `${RATES[i as keyof typeof RATES].coreBand} a guest`,
  },
  {
    id: 'date-night',
    label: 'Date Night for two',
    scope: 'The two-person format: one chef, one table, one evening.',
    price: (i) => RATES[i as keyof typeof RATES].dateNight,
  },
  {
    id: 'stay-chef',
    label: 'Multi-day — Stay Chef',
    scope: 'The same chef across the trip: breakfasts, kids’ meals, dinners.',
    price: (i) => `from $${RATES[i as keyof typeof RATES].stayChefDay}/day`,
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
  date: string;
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
  date: '',
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

const STORAGE_KEY = 'mychef-quote';

function track(event: string, detail?: Record<string, unknown>) {
  // Analytics contract (quote.md): quote_start, quote_step_complete{step},
  // quote_handoff{channel}, quote_decline_path{kitchen}
  const dl = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
  if (dl) dl.push({ event, ...detail });
}

/* ---------------- component ---------------- */

export default function QuoteFlow() {
  const { siteId, link } = useSite();
  const arrivingIsland = siteId !== 'hub' ? siteId : '';

  const [s, setS] = useState<QuoteState>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as QuoteState;
        return { ...parsed, island: parsed.island || arrivingIsland || parsed.island };
      }
    } catch {
      /* fresh state */
    }
    return initialState(arrivingIsland);
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
    switch (s.step) {
      case 1: return !!s.island;
      case 2: return !!s.service;
      case 3: return !!s.date && s.guests >= 2 && !!s.area;
      case 4: return !!s.kitchen;
      case 5: return s.name.trim().length > 1 && s.contact.trim().length > 3 && !!s.channel;
      default: return true;
    }
  }, [s]);

  /* The hub re-skin: from step 2 onward the chosen island's tokens apply. */
  const skinId: SiteId = siteId === 'hub' && s.island && s.step >= 2 ? (s.island as SiteId) : siteId;
  const skinVars = tokensToCssVars(TOKENS[skinId]) as React.CSSProperties;

  const area = AREAS[island]?.find((a) => a.label === s.area);
  const service = SERVICES.find((sv) => sv.id === s.service);

  const brief = useMemo(() => {
    const lines = [
      'myCHEF Hawaii — quote brief',
      `Island: ${SITE_META[island]?.name ?? '—'}`,
      `Service: ${service?.label ?? '—'}`,
      `Date: ${s.date || '—'}`,
      `Guests: ${s.guests}`,
      `Area: ${s.area || '—'}`,
      `Kitchen: ${s.kitchen === 'yes' ? 'Full kitchen' : s.kitchen === 'unsure' ? 'Not sure' : '—'}`,
      `Dietary: ${s.dietary.length ? s.dietary.join(', ') : 'none flagged'}`,
      s.occasion ? `Occasion: ${s.occasion}` : '',
      s.addons.length ? `Add-ons: ${s.addons.join(', ')}` : '',
      `Name: ${s.name}`,
      `Reply via: ${s.channel} — ${s.contact}`,
      '(The written quote is the confirmed total; ranges are estimates only.)',
    ].filter(Boolean);
    return lines.join('\n');
  }, [s, island, service]);

  const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(brief)}`;
  const mailtoHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `Quote brief — ${SITE_META[island]?.name ?? 'Hawaiʻi'} — ${s.date || 'dates flexible'}`,
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
          <ol className="flex flex-wrap items-center gap-2">
            {STEP_NAMES.map((name, i) => {
              const n = i + 1;
              const state = n < s.step ? 'done' : n === s.step ? 'current' : 'todo';
              return (
                <li key={name} className="flex items-center gap-2">
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
                  {n < STEP_NAMES.length ? <span aria-hidden="true" className="h-px w-4" style={{ backgroundColor: 'var(--site-line)' }} /> : null}
                </li>
              );
            })}
          </ol>
        </nav>

        <div aria-live="polite" className="sr-only">
          Step {s.step} of 6: {STEP_NAMES[s.step - 1]}
        </div>

        <div className="card-site mt-8 p-6 md:p-8">
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
  return (
    <fieldset>
      <legend className="font-display text-2xl">When, and how many?</legend>
      <div className="mt-5 space-y-5">
        <div>
          <label htmlFor="q-date" className="eyebrow-site mb-2 block">Date</label>
          <input
            id="q-date"
            type="date"
            className="input-site"
            value={s.date}
            onChange={(e) => set({ date: e.target.value })}
          />
          <p className="mt-2 text-sm text-ink-2">December–March and holiday weeks book first.</p>
        </div>
        <div>
          <span id="q-guests-label" className="eyebrow-site mb-2 block">Guests</span>
          <div className="flex items-center gap-4" role="group" aria-labelledby="q-guests-label">
            <button type="button" className="cta-secondary-site" aria-label="Fewer guests" onClick={() => set({ guests: Math.max(2, s.guests - 1) })}>−</button>
            <span className="tabular-site font-display text-3xl" aria-live="polite">{s.guests}</span>
            <button type="button" className="cta-secondary-site" aria-label="More guests" onClick={() => set({ guests: Math.min(80, s.guests + 1) })}>+</button>
          </div>
          {s.guests > 75 ? (
            <p className="mt-2 text-sm text-ink-2">Over 75 guests is a written exception — we confirm staffing in writing before taking the date.</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="q-area" className="eyebrow-site mb-2 block">Area</label>
          <select id="q-area" className="input-site" value={s.area} onChange={(e) => set({ area: e.target.value })}>
            <option value="">Choose an area…</option>
            {AREAS[island].map((a) => (
              <option key={a.label} value={a.label}>{a.label}</option>
            ))}
          </select>
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
  return (
    <fieldset>
      <legend className="font-display text-2xl">The details.</legend>
      <div className="mt-5 space-y-6">
        <div>
          <span id="q-kitchen-label" className="eyebrow-site mb-2 block">Does the property have a full kitchen?</span>
          <div className="flex flex-wrap gap-3" role="group" aria-labelledby="q-kitchen-label">
            {([
              ['yes', 'Yes — stove, oven, counter'],
              ['unsure', 'Not sure'],
              ['no', 'No — hotel room'],
            ] as const).map(([v, label]) => (
              <button
                key={v}
                type="button"
                aria-pressed={s.kitchen === v}
                className="cta-secondary-site"
                style={s.kitchen === v ? { borderColor: 'var(--site-accent-text)' } : undefined}
                onClick={() => set({ kitchen: v })}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <span id="q-dietary-label" className="eyebrow-site mb-2 block">Dietary flags</span>
          <div className="flex flex-wrap gap-2" role="group" aria-labelledby="q-dietary-label">
            {DIETARY_FLAGS.map((d) => (
              <button
                key={d}
                type="button"
                aria-pressed={s.dietary.includes(d)}
                className="border px-3 py-1.5 text-sm motion-site"
                style={{
                  borderRadius: 'var(--site-cta-radius)',
                  borderColor: s.dietary.includes(d) ? 'var(--site-accent-text)' : 'var(--site-line)',
                  color: s.dietary.includes(d) ? 'var(--site-accent-text)' : 'var(--site-ink2)',
                }}
                onClick={() => set({ dietary: toggle(s.dietary, d) })}
              >
                {d}
              </button>
            ))}
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
          <span id="q-addons-label" className="eyebrow-site mb-2 block">Add-ons</span>
          <div className="flex flex-wrap gap-2" role="group" aria-labelledby="q-addons-label">
            {['Bar cart', 'Server ($55/hr)', 'Sous chef ($75/hr)'].map((a) => (
              <button
                key={a}
                type="button"
                aria-pressed={s.addons.includes(a)}
                className="border px-3 py-1.5 text-sm motion-site"
                style={{
                  borderRadius: 'var(--site-cta-radius)',
                  borderColor: s.addons.includes(a) ? 'var(--site-accent-text)' : 'var(--site-line)',
                  color: s.addons.includes(a) ? 'var(--site-accent-text)' : 'var(--site-ink2)',
                }}
                onClick={() => set({ addons: toggle(s.addons, a) })}
              >
                {a}
              </button>
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
          <span id="q-channel-label" className="eyebrow-site mb-2 block">Preferred reply channel</span>
          <div className="flex gap-3" role="group" aria-labelledby="q-channel-label">
            {(['whatsapp', 'email'] as const).map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={s.channel === c}
                className="cta-secondary-site"
                style={s.channel === c ? { borderColor: 'var(--site-accent-text)' } : undefined}
                onClick={() => set({ channel: c })}
              >
                {c === 'whatsapp' ? 'WhatsApp' : 'Email'}
              </button>
            ))}
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
        <p className="font-display text-2xl">Your brief is with the {SITE_META[island].name} team.</p>
        <p className="mt-4 text-ink-2">
          The written quote you receive is the confirmed total. A 50% deposit locks the date — only after
          you’ve seen the numbers.
        </p>
      </div>
    );
  }

  const rows: [string, string][] = [
    ['Island', SITE_META[island].name],
    ['Service', service?.label ?? '—'],
    ['Date', s.date],
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
        Both doors send the same structured brief to the {SITE_META[island].name} team. Nothing is booked yet;
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
      className="card-site motion-site p-4 text-left"
      style={selected ? { borderColor: 'var(--site-accent-text)', borderWidth: 1 } : undefined}
    >
      <span className="block font-medium">{title}</span>
      {body ? <span className="mt-1 block text-sm text-ink-2">{body}</span> : null}
      {price ? <span className="tabular-site mt-2 block text-sm text-accent-site">{price}</span> : null}
    </button>
  );
}
