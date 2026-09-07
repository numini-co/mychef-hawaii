/**
 * /bigisland/private-chef (archetype private-chef.md — "the ledger of services").
 * Order: manifesto hero → mono product index (rows, zero cards) → corridor
 * field-data → kitchen gate → included/separate twin lists → FAQ → light-band quote.
 */
import { Link } from 'react-router';
import { Seo, faqLd, serviceLd } from '@/platform/seo';
import { useSite } from '@/platform/IslandProvider';
import FAQAccordion from '@/components/FAQAccordion';
import { BandQuote, CORRIDOR, HeroPanel, LedgerRow, Mono } from './bits';

const FAQ = [
  {
    q: 'How much is a private chef on the Big Island?',
    a: 'CORE villa dinners run $150–$225 a guest with groceries inside the band; ENTRY starts from $110. Date Night from $550, Stay Chef from $950 a day. Staffing and travel are separate published lines — the written quote is the confirmed total.',
  },
  {
    q: 'Do you serve Hilo or Volcano?',
    a: 'Yes — quoted in writing. The east side is 2.5–3 hours from our Kona base over the Saddle, so east-side service is its own written quote. We would rather say so here than surprise you.',
  },
  {
    q: 'What about the gated communities?',
    a: 'Hualālai, Kukio, and Kohanaiki run on referrals — access comes through your host or concierge, and we coordinate entry and the kitchen walk-through directly with them.',
  },
  {
    q: 'Are groceries included?',
    a: 'Inside the per-guest band, yes. Stay Chef engagements bill groceries at cost with receipts. Receipts on request either way.',
  },
  {
    q: 'Can you handle dietary restrictions?',
    a: 'Eleven dietary flags, one kitchen, separate prep for allergens, no dietary surcharge. Flags are set at booking and repeated in the written quote.',
  },
  {
    q: 'How far ahead should I book?',
    a: 'Two to four weeks in normal weeks; six-plus for December–March, eight-plus for Ironman week in October. The 50% deposit locks the date after you have seen the quote.',
  },
];

const PRODUCTS = [
  { label: 'VILLA DINNER — CORE', value: '$150–$225/GUEST', to: 'services/fine-dining', note: 'Coursed, plated, in your kitchen. Groceries inside the band.' },
  { label: 'ENTRY', value: 'FROM $110/GUEST', to: 'menus/signature-three-course', note: 'The simplified arc — same kitchen, same standard.' },
  { label: 'DATE NIGHT', value: 'FROM $550', to: 'services/date-night', note: 'Two seats, coursed, sunset-timed.' },
  { label: 'STAY CHEF', value: 'FROM $950/DAY', to: 'stay-chef', note: 'The week, cooked. Groceries at cost with receipts.' },
  { label: 'WEDDING WEEK', value: 'FROM $150/GUEST + STAFFING', to: 'weddings/wedding-week', note: 'Five meals, one crew, one written quote.' },
] as const;

export default function BigIslandPrivateChef() {
  const { link } = useSite();
  return (
    <>
      <Seo
        title="Hire a Private Chef on the Big Island — Kona to the Kohala Coast"
        description="Villa dinners $150–$225 a guest, Date Night from $550, Stay Chef from $950 a day across the Kona–Kohala corridor. Published prices, groceries inside the band, the written quote is the confirmed total."
        path="/bigisland/private-chef"
        ogImage="/img/bigisland/hero-private-chef.jpg"
        jsonLd={[serviceLd('Hire a Private Chef on the Big Island', 'Villa dinners $150–$225 a guest, Date Night from $550, Stay Chef from $950 a day across the Kona–Kohala corridor.', '/bigisland/private-chef', 'Big Island'), faqLd(FAQ)]}
      />

      {/* Manifesto hero */}
      <HeroPanel
        src="/img/bigisland/hero-private-chef.jpg"
        alt="A chef's hands finishing a plate over a dark stone pass under hard rim light"
        eyebrow="Private chef · Kona–Kohala"
        title="A private chef in your Big Island kitchen."
      >
        <p className="measure-site mt-6 text-ink-2">
          Your chef shops that morning, arrives before service, cooks in your villa kitchen, serves each
          course, and leaves the kitchen clean. Villa dinners $150–$225 a guest; groceries inside the band.
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

      {/* Mono product index — rows, zero cards */}
      <section className="pb-[var(--site-section-pad)] md:pb-[var(--site-section-pad-desktop)]" aria-label="Services">
        <div className="mx-auto max-w-6xl px-6">
          <Mono className="text-[11px] text-ink-2">THE SERVICES — PUBLISHED LINES</Mono>
          <div className="mt-6">
            {PRODUCTS.map((p) => (
              <LedgerRow key={p.label} label={p.label} value={p.value} note={p.note} to={link(p.to)} />
            ))}
            <div className="rule-t" />
          </div>
        </div>
      </section>

      {/* Corridor field-data */}
      <section className="section-pad rule-t" aria-label="Corridor">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="h2-site">Where we cook.</h2>
          <div className="mt-8">
            {CORRIDOR.map((c) => (
              <LedgerRow key={c.name} label={`${c.tag} — ${c.name}`} value={c.meta} to={link(c.to)} />
            ))}
            <LedgerRow label="EAST SIDE — HILO · VOLCANO · WAIMEA" value="QUOTED IN WRITING" to={link('pricing/east-side-quote')} />
            <div className="rule-t" />
          </div>
          <p className="mt-6 max-w-xl text-sm text-ink-2">
            Gated note: Hualālai, Kukio, Kohanaiki — access comes through your host or concierge. We come
            with the referral.
          </p>
        </div>
      </section>

      {/* Kitchen gate */}
      <section className="section-pad rule-t" aria-label="Kitchen requirement">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site">The kitchen gate.</h2>
          <p className="measure-site mt-6 text-ink-2">
            We will not pretend a coffee maker and a minibar are a pass — hotel rooms without kitchens are
            declined. Villas, suites with kitchens, and estates are the stage. Send your listing link with
            the inquiry and we will tell you plainly.
          </p>
          <Link to={link('guides/villa-kitchen')} className="link-site mt-6 inline-block">
            The kitchen spec →
          </Link>
        </div>
      </section>

      {/* Twin lists */}
      <section className="section-pad rule-t" aria-label="Included and separate">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <Mono className="text-[11px] text-ink-2">INCLUDED</Mono>
            <ul className="mt-5 space-y-3">
              {['Menu design', 'Same-day shopping', 'Cooking', 'Table service', 'Cleanup', 'Groceries inside the band'].map((i) => (
                <li key={i} className="rule-t pt-3">{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <Mono className="text-[11px] text-ink-2">SEPARATE</Mono>
            <ul className="mt-5 space-y-3">
              {['Server — $55/hr', 'Sous chef — $75/hr', '4-hour staffing floor', 'Bar cart — from $725/4hr', 'Travel outside Kona–Kohala — from $75', 'Rentals at cost'].map((i) => (
                <li key={i} className="rule-t pt-3">{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad rule-t" aria-label="Frequently asked questions">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site mb-8">Questions, answered.</h2>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <BandQuote />
    </>
  );
}
