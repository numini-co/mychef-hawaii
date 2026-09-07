/**
 * /bigisland/weddings (archetype wedding.md — "the ledger wedding").
 * Edge-to-edge candlelit hero → mono budget grid (static; numbers don't
 * dance) → per-format mono index → corridor emphasis → east-side quote-only
 * line → FAQ → light-band quote. The darkest wedding page on the internet.
 */
import { Link } from 'react-router';
import { Seo, faqLd } from '@/platform/seo';
import { useSite } from '@/platform/IslandProvider';
import FAQAccordion from '@/components/FAQAccordion';
import { BandQuote, HeroPanel, LedgerRow, Mono } from './bits';

const FAQ = [
  {
    q: 'What does Big Island wedding catering cost?',
    a: 'From $150 a guest for food plus staffing (server $55/hr, sous chef $75/hr), with 20% service and GET up to 4.7120% itemized on their own lines. The venue-caterer market runs from a $75/person floor to $120–$250 a person at resorts — before their 23–25% service charges.',
  },
  {
    q: 'Can you cater a wedding at a private estate or rental?',
    a: 'Yes — that is precisely our lane. Estates and villas have kitchens, sit outside resort catering contracts, and let the whole week happen in one place. We confirm the property’s event rules before quoting.',
  },
  {
    q: 'Do you work with wedding planners?',
    a: 'Constantly. Planners get itemized quotes that drop straight into a budget deck, and a crew that knows the corridor venues. East-side venues are quoted with travel stated plainly.',
  },
  {
    q: 'Will you cater a wedding in Hilo, Volcano, or Waimea?',
    a: 'Yes, as a written quote. The east side is 2.5–3 hours from Kona over the Saddle; the quote accounts for crew travel honestly instead of hiding it.',
  },
];

const BUDGET = [
  { label: 'WELCOME DINNER — 60 GUESTS × $150', value: '$9,000' },
  { label: 'REHEARSAL DINNER — 30 GUESTS × $150', value: '$4,500' },
  { label: 'RECEPTION — 60 GUESTS × $200 (MID-BAND)', value: '$12,000' },
  { label: 'RECOVERY BRUNCH — 40 GUESTS × $150', value: '$6,000' },
  { label: 'FOOD LINES', value: '$31,500' },
  { label: 'STAFFING — PUBLISHED HOURLYS', value: 'ITEMIZED' },
  { label: 'SERVICE', value: '20% · OWN LINE' },
  { label: 'GET', value: '≤ 4.7120% · OWN LINE' },
] as const;

const FORMATS = [
  { label: 'WELCOME DINNER', to: 'weddings/welcome-dinner' },
  { label: 'REHEARSAL DINNER', to: 'weddings/rehearsal-dinner' },
  { label: 'RECEPTION', to: 'weddings/reception-catering' },
  { label: 'RECOVERY BRUNCH', to: 'weddings/recovery-brunch' },
  { label: 'ELOPEMENT — FROM $550', to: 'weddings/elopement' },
  { label: 'ESTATE WEDDING', to: 'weddings/estate-wedding' },
  { label: 'THE FULL WEDDING WEEK', to: 'weddings/wedding-week' },
  { label: 'WHAT IT COSTS, ITEMIZED', to: 'weddings/wedding-cost' },
] as const;

export default function BigIslandWeddings() {
  const { link } = useSite();
  return (
    <>
      <Seo
        title="Big Island Wedding Catering — The Wedding Week, in Writing"
        description="Big Island wedding catering from $150 a guest plus staffing: welcome dinner, rehearsal, reception, recovery brunch. 20% service on its own line — against resort minimums of $7,500–$15,000 at 23–25%."
        path="/bigisland/weddings"
        ogImage="/img/bigisland/hero-weddings.jpg"
        jsonLd={[faqLd(FAQ)]}
      />

      {/* Hero */}
      <HeroPanel
        src="/img/bigisland/hero-weddings.jpg"
        alt="A candlelit wedding table in black-and-bone styling at a lava-coast estate at night"
        eyebrow="Wedding catering · Hawaiʻi Island"
        title="The wedding week, in writing."
      >
        <p className="measure-site mt-6 text-ink-2">
          Every meal from the welcome dinner to the recovery brunch, one written quote, from $150 a guest
          plus staffing — against resort minimums of $7,500–$15,000 at 23–25% service.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link to={link('quote')} className="cta-site">
            Get a written quote
          </Link>
          <Link to={link('pricing')} className="cta-secondary-site">
            The rate card →
          </Link>
        </div>
      </HeroPanel>

      {/* Mono budget grid — static */}
      <section className="pb-[var(--site-section-pad)] md:pb-[var(--site-section-pad-desktop)]" aria-label="Worked budget">
        <div className="mx-auto max-w-6xl px-6">
          <Mono className="text-[11px] text-ink-2">A WORKED WEEK — ILLUSTRATIVE MATH ON PUBLISHED RATES</Mono>
          <div className="mt-6">
            {BUDGET.map((b) => (
              <LedgerRow key={b.label} label={b.label} value={b.value} />
            ))}
            <div className="rule-t" />
          </div>
          <div className="mt-10">
            <Mono className="text-[11px] text-ink-2">THE RESORT ALTERNATIVE</Mono>
            <div className="mt-4">
              <LedgerRow label="F&B MINIMUMS" value="$7,500–$15,000 PER EVENT" />
              <LedgerRow label="SERVICE CHARGE" value="23–25%" />
              <div className="rule-t" />
            </div>
          </div>
          <p className="measure-site mt-8 text-ink-2">
            Four catered events at a resort can carry $30,000–$60,000 in minimums before a single staffing
            hour. The villa wedding week undercuts that structure by not having minimums at all.
          </p>
          <Link to={link('compare/resort-wedding-vs-estate')} className="link-site mt-6 inline-block">
            Resort vs estate, the full math →
          </Link>
        </div>
      </section>

      {/* Per-format mono index */}
      <section className="section-pad rule-t" aria-label="Wedding formats">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="h2-site">The formats.</h2>
          <div className="mt-8 grid gap-x-16 md:grid-cols-2">
            {FORMATS.map((f) => (
              <LedgerRow key={f.label} label={f.label} to={link(f.to)} />
            ))}
          </div>
          <div className="rule-t" />
        </div>
      </section>

      {/* Corridor emphasis + east-side line */}
      <section className="section-pad rule-t" aria-label="Where">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site">Corridor first. East side quoted.</h2>
          <p className="measure-site mt-6 text-ink-2">
            Most wedding weeks we run are on the Kona–Kohala corridor — Puako estates, Mauna Lani and Mauna
            Kea resort-residences, Waikoloa villas, Kona coffee-farm venues. Waimea ranch venues and Volcano
            lodges are quoted with east-side travel accounted in writing.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <Link to={link('locations/kohala-coast/wedding-catering')} className="link-site">
              Kohala Coast wedding catering →
            </Link>
            <Link to={link('weddings/venues')} className="link-site">
              Venue notes →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad rule-t" aria-label="Wedding questions">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site mb-8">Wedding questions.</h2>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <BandQuote heading="The wedding week, in writing." />
    </>
  );
}
