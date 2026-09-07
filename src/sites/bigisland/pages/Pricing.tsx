/**
 * /bigisland/pricing (archetype pricing.md — "the ledger").
 * The light band IS the page body: full IBM Plex Mono ledger, tier rows in
 * caps, every fee its own line. Basalt intro above, geography honesty panel
 * adjacent, estimator hand-off in mono.
 */
import { Link } from 'react-router';
import { Seo, faqLd } from '@/platform/seo';
import { useSite } from '@/platform/IslandProvider';
import FeeStack from '@/components/FeeStack';
import FAQAccordion from '@/components/FAQAccordion';
import { BandQuote, LedgerRow, Mono, Panel, RATE_ROWS } from './bits';

const FAQ = [
  {
    q: 'Is this really every charge?',
    a: 'Yes. Per-guest band, staffing hourlys, travel line, 20% service charge, GET up to 4.7120% — every line that can appear on an invoice appears on this page first. The written quote assembled from them is the confirmed total.',
  },
  {
    q: 'Why is the east side “quoted”?',
    a: 'Kona to Hilo is 2.5–3 hours over the Saddle. A flat surcharge would overcharge Waimea and underprice Volcano, so east-side work is priced per engagement — in writing, with the crew logistics stated as a readable line.',
  },
  {
    q: 'Are groceries included?',
    a: 'Inside the per-guest band for dinners, yes — Hawaiʻi grocery prices run roughly 31–53% above the mainland and the band absorbs that. Stay Chef weeks bill groceries at cost with receipts.',
  },
  {
    q: 'Is there a deposit?',
    a: '50%, and only after you have seen the written quote. The deposit locks the date; the quote is the confirmed total it commits you to.',
  },
];

const MATH = [
  { guests: '2 GUESTS', core: '$300–$450', entry: 'FROM $220', note: 'Date Night fixed from $550 usually wins at two' },
  { guests: '4 GUESTS', core: '$600–$900', entry: 'FROM $440', note: '' },
  { guests: '8 GUESTS', core: '$1,200–$1,800', entry: 'FROM $880', note: '' },
  { guests: '12 GUESTS', core: '$1,800–$2,700', entry: 'FROM $1,320', note: 'Staffing lines add from here' },
] as const;

export default function BigIslandPricing() {
  const { link } = useSite();
  return (
    <>
      <Seo
        title="Private Chef Big Island Cost — The Rate Card"
        description="The only full published private-chef rate card on Hawaiʻi Island: ENTRY from $110, CORE $150–$225 a guest, Stay Chef from $950 a day, travel from $75, 20% service and GET on their own lines."
        path="/bigisland/pricing"
        ogImage="/img/bigisland/hero-pricing-ledger.jpg"
        jsonLd={[faqLd(FAQ)]}
      />

      {/* Basalt intro */}
      <section className="section-pad" aria-label="Introduction">
        <div className="mx-auto max-w-6xl px-6">
          <Mono className="text-[11px] text-ink-2">PUBLISHED PRICES — HAWAIʻI ISLAND</Mono>
          <h1 className="h1-site mt-4">The rate card.</h1>
          <p className="measure-site mt-6 text-ink-2">
            Every number on this page is published policy. The written quote you receive is built from these
            lines — and that quote is the confirmed total, never a chat estimate.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link to={link('quote')} className="cta-site">Get a written quote</Link>
            <Link to={link('private-chef')} className="cta-secondary-site">What we cook →</Link>
          </div>
        </div>
      </section>

      {/* The light band IS the page body */}
      <section className="band-site" aria-label="The ledger">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <Panel
            src="/img/bigisland/hero-pricing-ledger.jpg"
            alt="A blank ledger sheet and pen on black basalt under a single hard light"
          />
          <h2 className="sr-only">Rate ledger</h2>
          <div className="mt-14 grid gap-x-16 gap-y-0 md:grid-cols-2">
            {RATE_ROWS.map((r) => (
              <LedgerRow key={r.label} label={r.label} value={r.value} />
            ))}
          </div>
          <div className="rule-t" />

          {/* Worked math — illustrative on published rates */}
          <h3 className="mt-16 font-accent-site text-[11px] uppercase tracking-[0.14em] text-ink-2">
            ILLUSTRATIVE MATH ON PUBLISHED RATES
          </h3>
          <div className="mt-4">
            {MATH.map((m) => (
              <div key={m.guests} className="rule-t grid grid-cols-2 items-baseline gap-4 py-4 font-accent-site text-[12px] uppercase tracking-[0.14em] md:grid-cols-4">
                <span>{m.guests}</span>
                <span>CORE {m.core}</span>
                <span className="text-ink-2">ENTRY {m.entry}</span>
                <span className="text-[11px] normal-case tracking-normal text-ink-2">{m.note}</span>
              </div>
            ))}
            <div className="rule-t" />
          </div>

          {/* Twin lists */}
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div>
              <Mono className="text-[11px] text-ink-2">INSIDE THE BAND</Mono>
              <ul className="mt-5 space-y-3 text-[15px]">
                {['Menu design', 'Same-day shopping', 'Cooking', 'Table service', 'Cleanup', 'Groceries'].map((i) => (
                  <li key={i} className="rule-t pt-3">{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <Mono className="text-[11px] text-ink-2">SEPARATE LINES</Mono>
              <ul className="mt-5 space-y-3 text-[15px]">
                {['Staffing hourlys — $55 / $75, 4-hr floor', 'Bar cart — from $725/4hr', 'Travel outside Kona–Kohala — from $75', 'East side — quoted in writing', 'Rentals at cost'].map((i) => (
                  <li key={i} className="rule-t pt-3">{i}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cost drivers + comparison */}
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div>
              <Mono className="text-[11px] text-ink-2">WHAT MOVES THE PRICE</Mono>
              <p className="mt-5 text-[15px] text-ink-2">
                Guest count, menu ambition, the date (December–March and Ironman week compress first), crew
                size, and Hawaiʻi grocery prices — roughly 31–53% above mainland. The band absorbs the
                grocery market; the quote fixes the rest.
              </p>
            </div>
            <div>
              <Mono className="text-[11px] text-ink-2">THE COMPARISON LINE</Mono>
              <p className="mt-5 text-[15px] text-ink-2">
                Resort and venue caterers on this island run 23–25% service charges and F&amp;B minimums of
                $7,500–$15,000 per event. Our service charge is 20%, on its own line, where you can audit it.
              </p>
              <Link to={link('compare/resort-wedding-vs-estate')} className="link-site mt-4 inline-block">
                The quantified comparison →
              </Link>
            </div>
          </div>

          {/* Estimator handoff */}
          <div className="rule-t mt-16 pt-8">
            <Mono className="text-[11px] text-ink-2">ESTIMATE ONLY — THE WRITTEN QUOTE IS THE CONFIRMED TOTAL</Mono>
            <p className="mt-4 max-w-xl text-[15px] text-ink-2">
              Run your own arithmetic on the card, or send the five fields and get the number in writing.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <Link to={link('pricing/estimate')} className="cta-site">
                Run the estimate
              </Link>
              <Link to={link('quote')} className="cta-secondary-site">
                Get the written quote →
              </Link>
            </div>
          </div>

          <FeeStack mono className="mt-14" />
        </div>
      </section>

      {/* Geography honesty panel — back to basalt */}
      <section className="section-pad" aria-label="Geography honesty">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site">The east side is its own quote.</h2>
          <p className="measure-site mt-6 text-ink-2">
            Hilo, Volcano, Waimea — real service, honestly priced. The island is 4,028 square miles; Kona to
            Hilo is 2.5–3 hours over the Saddle. East-side engagements are quoted in writing with the crew
            logistics stated as a line you can read. We would rather publish that than bury it.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link to={link('pricing/travel-zones')} className="link-site">
              Travel zones →
            </Link>
            <Link to={link('pricing/east-side-quote')} className="link-site">
              The east-side posture →
            </Link>
            <Link to={link('guides/kona-hilo-logistics')} className="link-site">
              Kona → Hilo logistics →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad rule-t" aria-label="Pricing questions">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site mb-8">Pricing questions.</h2>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <BandQuote heading="The estimate is arithmetic. The quote is the number." />
    </>
  );
}
