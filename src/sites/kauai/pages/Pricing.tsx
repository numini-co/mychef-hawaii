/**
 * /kauai/pricing — "the published card" (pricing.md Kauaʻi column).
 * Type-only hero → rate card → worked math → travel/estate logistics →
 * the Kauaʻi Estimator → cost drivers + the 20% wedge → FAQ → inquiry.
 */
import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { PageSeo, useCrumbs } from '@/platform/templates/shared';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import FeeStack from '@/components/FeeStack';
import { RateTable } from '@/components/RateTable';
import { content } from '../content';
import { BridgeCallout, InquiryChip, ProvenanceLine } from './kit';

const record = content.find((r) => r.slug === 'pricing')!;

/* ------------------------------------------------------------------ */
/* Kauaʻi Estimator — honest ranges from the published card            */
/* ------------------------------------------------------------------ */

const TIERS = [
  { id: 'table', label: 'Table — family-style', low: 125, high: 150 },
  { id: 'signature', label: 'Signature — coursed', low: 150, high: 250 },
  { id: 'premium', label: 'Premium — tasting', low: 250, high: 350 },
] as const;

const SERVICES = [
  { id: 'evening', label: 'A dinner evening' },
  { id: 'stay', label: 'Stay Chef — per day' },
  { id: 'wedding', label: 'Wedding reception' },
  { id: 'bar', label: 'Bar cart add-on' },
] as const;

const ZONES = [
  { id: 'base', label: 'Kāpaʻa–Līhuʻe · East Side (base)', fee: 0 },
  { id: 'north', label: 'North Shore — Princeville · Hanalei · Kīlauea', fee: 62.5 },
  { id: 'south', label: 'South Shore — Poʻipū · Kōloa', fee: 62.5 },
  { id: 'farnorth', label: 'Far North — past the Hanalei bridge', fee: -1 },
] as const;

const SERVICE_PCT = 0.2;
const GET = 0.04712;

function usd(n: number): string {
  return `$${Math.round(n).toLocaleString('en-US')}`;
}

function Estimator() {
  const { link } = useSite();
  const [service, setService] = useState<string>('evening');
  const [tier, setTier] = useState<string>('signature');
  const [guests, setGuests] = useState(8);
  const [zone, setZone] = useState<string>('base');

  const result = useMemo(() => {
    const z = ZONES.find((x) => x.id === zone)!;
    if (z.fee < 0) return null; // far-North: quoted at inquiry — never fake precision
    const t = TIERS.find((x) => x.id === tier)!;
    let low = 0;
    let high = 0;
    if (service === 'stay') {
      low = 1100;
      high = 1100 + guests * 15; // staffing headroom on larger tables
    } else if (service === 'bar') {
      low = 850 + 60 * guests;
      high = low;
    } else {
      const perLow = service === 'wedding' ? Math.max(175, t.low) : t.low;
      const perHigh = service === 'wedding' ? Math.max(250, t.high) : t.high;
      low = perLow * guests;
      high = perHigh * guests;
      if (guests > 8) {
        low += 220; // one server, 4-hr floor
        high += 520; // server + sous
      }
    }
    low += z.fee;
    high += z.fee;
    const totalLow = low * (1 + SERVICE_PCT) * (1 + GET);
    const totalHigh = high * (1 + SERVICE_PCT) * (1 + GET);
    return { low, high, totalLow, totalHigh };
  }, [service, tier, guests, zone]);

  const selectCls =
    'w-full rounded-md border bg-transparent px-3 py-2.5 text-sm';
  const selectStyle = { borderColor: 'var(--site-line)', borderRadius: 'var(--site-card-radius)' } as const;

  return (
    <div className="card-site p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow-site mb-2 block">Service</span>
          <select className={selectCls} style={selectStyle} value={service} onChange={(e) => setService(e.target.value)}>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="eyebrow-site mb-2 block">Menu tier</span>
          <select
            className={selectCls}
            style={selectStyle}
            value={tier}
            onChange={(e) => setTier(e.target.value)}
            disabled={service === 'stay' || service === 'bar'}
          >
            {TIERS.map((t) => (
              <option key={t.id} value={t.id}>{t.label}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="eyebrow-site mb-2 block">Guests — {guests}</span>
          <input
            type="range"
            min={2}
            max={75}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="mt-3 w-full"
            aria-label="Guest count"
          />
        </label>
        <label className="block">
          <span className="eyebrow-site mb-2 block">Shore</span>
          <select className={selectCls} style={selectStyle} value={zone} onChange={(e) => setZone(e.target.value)}>
            {ZONES.map((z) => (
              <option key={z.id} value={z.id}>{z.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="rule-t mt-6 pt-5">
        {result === null ? (
          <div>
            <p className="font-display text-xl italic" style={{ fontWeight: 300 }}>
              Far-North service is quoted at inquiry.
            </p>
            <p className="mt-2 text-sm text-ink-2">
              Past the Hanalei bridge the road is the variable — 72-hour notice, and documented closures reschedule
              rather than forfeit. We quote it in writing rather than fake a number here.
            </p>
            <p className="mt-4">
              <Link to={link('quote')} className="cta-site">
                Begin an inquiry
              </Link>
            </p>
          </div>
        ) : (
          <div>
            <p className="eyebrow-site mb-2">Estimated range</p>
            <p className="font-display text-4xl tabular-site" style={{ fontWeight: 300 }}>
              {usd(result.totalLow)}–{usd(result.totalHigh)}
            </p>
            <p className="mt-2 text-sm text-ink-2">
              Includes 20% service and GET up to 4.7120%, shown on their own lines.{' '}
              <strong>Estimate only — the written quote is the confirmed total.</strong>
            </p>
            <p className="mt-4">
              <Link to={link('quote')} className="cta-site">
                Get the written quote
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function KauaiPricing() {
  const { link } = useSite();
  const crumbs = useCrumbs(record, content);
  return (
    <article>
      <PageSeo record={record} crumbs={crumbs} />

      {/* Type-only hero — the card is the image */}
      <header className="mx-auto max-w-6xl px-6 pt-10 pb-12 md:pt-16">
        <p className="eyebrow-site word-rise" style={{ ['--wr-delay' as string]: '0ms' }}>
          Pricing · Kauaʻi
        </p>
        <h1 className="h1-site word-rise mt-4 max-w-3xl" style={{ ['--wr-delay' as string]: '90ms' }}>
          The Kauaʻi rate card.
        </h1>
        <p className="measure-site word-rise mt-5 text-ink-2" style={{ ['--wr-delay' as string]: '180ms' }}>
          Two of Kauaʻi’s fourteen operators publish any price at all. This is the whole card — per-guest tiers, the
          day rate, staffing, travel — framed by where the food comes from and what the island’s logistics honestly
          cost.
        </p>
        <div className="word-rise mt-7 flex flex-wrap items-center gap-x-6 gap-y-3" style={{ ['--wr-delay' as string]: '270ms' }}>
          <Link to={link('quote')} className="cta-site">Begin an inquiry</Link>
          <Link to={link('private-chef')} className="cta-secondary-site">What the estate week includes →</Link>
        </div>
        <div className="word-rise mt-6" style={{ ['--wr-delay' as string]: '330ms' }}>
          <InquiryChip>The written quote is the confirmed total — this card exists so it never surprises you.</InquiryChip>
        </div>
      </header>

      {/* The card itself */}
      <section className="mx-auto max-w-6xl px-6 pb-16" aria-label="The rate card">
        {record.priceTable && <RateTable title={record.priceTable.title} rows={record.priceTable.rows} footnote={record.priceTable.footnote} />}
      </section>

      {/* Worked math */}
      <section className="bg-surface-site section-pad" aria-label="Worked math">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="h2-site mb-6">Worked math on published rates.</h2>
              <RateTable
                rows={[
                  { label: '4 guests · Signature mid-band', value: '$800', note: 'Groceries included' },
                  { label: '8 guests · Table top + server', value: '$1,420', note: '$1,200 + $220 (4-hr floor)' },
                  { label: '12 guests · Premium + server & sous', value: '$4,120', note: '$3,600 + $520' },
                  { label: 'Stay Chef, 7 days', value: 'from $7,700', note: 'Plus groceries at cost, receipts attached' },
                ]}
                footnote="Illustrative math, not a quote. 20% service and GET up to 4.7120% then appear on their own lines."
              />
            </div>
            <div className="md:col-span-5">
              <h3 className="font-display text-2xl" style={{ fontWeight: 300 }}>
                Where the food comes from
              </h3>
              <p className="mt-3 text-sm text-ink-2">
                Sourcing is named, not implied: goat cheese from Kunana Dairy, greens from the Saturday Hanalei
                Farmers’ Market and its growers, Kauaʻi grass-fed beef, day-boat fish when the boats go out. When a
                farm name appears on a menu, the box came from that farm.
              </p>
              <ProvenanceLine>Provenance is a discipline, not a garnish.</ProvenanceLine>
              <p className="mt-4">
                <Link to={link('menus/farm-to-table')} className="link-site text-sm">
                  The Hanalei Table menu →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel as estate logistics */}
      <section className="mx-auto max-w-6xl px-6 py-16" aria-label="Travel zones">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="h2-site mb-5">Travel, as estate logistics.</h2>
            <p className="text-ink-2">
              Kauaʻi is one island and two commitments. Base service covers Kāpaʻa–Līhuʻe; Princeville and Poʻipū
              carry a $50–$75 shore surcharge — the honest cost of an hour each way with a cooler and a kit. Past
              Hanalei the geography turns binary: one bridge, one road.
            </p>
            <p className="mt-4 text-ink-2">
              West-side requests — Waimea, Hanapēpē, Kalāheo — are quoted at inquiry; the rental stock there is thin
              and we’d rather quote honestly than imply a fleet.
            </p>
            <p className="mt-5">
              <Link to={link('pricing/travel-zones')} className="link-site">
                Travel zones, line by line →
              </Link>
            </p>
          </div>
          <BridgeCallout className="md:col-span-5" />
        </div>
      </section>

      {/* The estimator */}
      <section className="band-site" aria-labelledby="estimator">
        <div className="section-pad mx-auto max-w-3xl px-6">
          <p className="eyebrow-site mb-3">Two minutes, no email required</p>
          <h2 id="estimator" className="h2-site mb-8">
            The Kauaʻi estimator.
          </h2>
          <Estimator />
        </div>
      </section>

      {/* Cost drivers + the wedge */}
      <section className="section-pad" aria-label="Cost drivers">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="h2-site mb-6">What moves the number.</h2>
              <ol className="space-y-4">
                {[
                  ['Guest count', 'Per-guest pricing means headcount is the multiplier.'],
                  ['Menu tier', 'Table to Chef’s Table is a $125-to-$350+ spread per guest.'],
                  ['Hawaiʻi grocery prices', 'Roughly a third to a half above the mainland — why groceries sit inside dinner bands and at cost on stays.'],
                  ['Date', 'December and holiday weeks book first; the calendar is the honest December price.'],
                  ['Crew size', 'Servers $55/hr, sous chefs $75/hr, 4-hour floor — quoted in front of you.'],
                ].map(([t, b], i) => (
                  <SectionReveal as="li" key={t} delay={i * 60} className="rule-t pt-4">
                    <h3 className="font-display text-xl" style={{ fontWeight: 300 }}>{t}</h3>
                    <p className="mt-1 text-sm text-ink-2">{b}</p>
                  </SectionReveal>
                ))}
              </ol>
            </div>
            <div className="md:col-span-5">
              <SectionReveal>
                <div className="card-site p-6">
                  <p className="eyebrow-site mb-3">The wedge</p>
                  <p className="font-display text-4xl" style={{ fontWeight: 300 }}>
                    20% <span className="text-xl text-ink-2">service, itemized</span>
                  </p>
                  <p className="mt-3 text-sm text-ink-2">
                    Island venues and resorts run 23–25%; one Kauaʻi caterer adds 25% gratuity to all food and drink.
                    On a $10,000 event week the difference is $500 — visible, because every line on our quote is
                    visible.
                  </p>
                </div>
              </SectionReveal>
              <FeeStack className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + inquiry */}
      <section className="mx-auto max-w-3xl px-6 pb-20" aria-label="Frequently asked questions">
        <h2 className="h2-site mb-8">Questions, answered.</h2>
        <FAQAccordion items={record.faq ?? []} />
      </section>
      <section className="band-site" aria-label="Get a written quote">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <h2 className="h2-site">Get the written quote.</h2>
          <p className="mt-4 max-w-xl text-ink-2">
            Six steps, two minutes. The quote itemizes every line — and it is the confirmed total.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to={link('quote')} className="cta-site">
              Begin an inquiry
            </Link>
            <Link to={link('private-chef-cost')} className="cta-secondary-site">
              Cost anatomy →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
