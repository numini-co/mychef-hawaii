/**
 * Oʻahu /pricing (design/pricing.md — "tariff-first").
 * The ruled table IS the hero, in the page's single dark band. Worked-math
 * grid as a second ruled table. hero-pricing.jpg used small (4:3, right
 * column of intro — never a background). Estimator links to /oahu/pricing/estimate.
 */
import { Link } from 'react-router';
import { Seo, faqLd, breadcrumbLd } from '@/platform/seo';
import { RateTable } from '@/components/RateTable';
import FeeStack from '@/components/FeeStack';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import QuoteCTA from '@/components/QuoteCTA';

const TIERS = [
  { label: 'Table', value: '$95–$125', note: 'per guest · groceries inside the band' },
  { label: 'Signature', value: '$125–$190', note: 'per guest · groceries inside the band' },
  { label: 'Premium', value: '$190–$275', note: 'per guest' },
  { label: 'Chef’s table', value: '$275–$400+', note: 'per guest · quoted manually' },
  { label: 'Stay Chef', value: 'from $850/day', note: 'plus groceries at cost' },
  { label: 'Date Night for two', value: 'from $450', note: 'fixed price, the whole evening' },
  { label: 'Kamaʻāina weekly', value: 'from $300/wk', note: 'residents · plus groceries at cost' },
  { label: 'Packaged bar cart', value: '$650/4hr + $45/guest', note: 'alcohol client-supplied or licensed referral' },
  { label: 'Server / Sous chef', value: '$55 / $75 /hr', note: 'four-hour floor' },
  { label: 'Travel — North Shore & Turtle Bay', value: 'from $75', note: 'published zone fee' },
];

/* Worked math on the Signature band — labeled illustrative. */
const MATH = [125, 157, 190].map((price) => ({ price }));
const GUEST_COUNTS = [2, 4, 8, 12];

const FAQ = [
  {
    q: 'Are these prices real, or “from” prices?',
    a: 'Published and honored. The written quote is built from these bands, itemizes every charge, and is the confirmed total — nothing grows between this page and the invoice.',
  },
  {
    q: 'Are groceries included?',
    a: 'Inside the per-guest bands, yes. Stay Chef and the weekly line bill groceries at cost with receipts attached — never marked up.',
  },
  {
    q: 'What is the 20% service charge?',
    a: 'The operational charge on food and staffing, always on its own line. Resorts and venues commonly run 23–25%; ours is 20%, itemized, with Hawaiʻi GET up to 4.7120% on a separate line.',
  },
  {
    q: 'Do you charge to travel?',
    a: 'Only where the drive is real: the North Shore and Turtle Bay run from $75, published. Everywhere else on Oʻahu is base zone.',
  },
];

export default function OahuPricing() {
  return (
    <>
      <Seo
        title="Private Chef Oʻahu Cost — The Rate Card | myCHEF"
        description="Every published Oʻahu price: Table $95–$125, Signature $125–$190, Premium $190–$275, Chef’s table $275–$400+ a guest. Stay Chef from $850/day, servers $55/hr, travel from $75. 20% service and GET on their own lines."
        path="/oahu/pricing"
        ogImage="/img/oahu/hero-pricing.jpg"
        jsonLd={[faqLd(FAQ), breadcrumbLd([{ name: 'Oʻahu', path: '/oahu' }, { name: 'Pricing', path: '/oahu/pricing' }])]}
      />

      {/* Intro — small 4:3 image right column, never a background */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow-site">Published prices</p>
            <h1 className="h1-site mt-5">The Oʻahu rate card.</h1>
            <p className="measure-site mt-6 text-ink-2">
              Every figure below is published and honored. The written quote you approve is the
              confirmed total — never a chat estimate, never a “from” price that grows.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link to="/oahu/quote" className="cta-site">Get a written quote</Link>
              <Link to="/oahu/pricing/estimate" className="cta-secondary-site">Run the estimator →</Link>
            </div>
          </div>
          <SectionReveal className="md:col-span-5">
            <figure className="card-site overflow-hidden">
              <img
                src="/img/oahu/hero-pricing.jpg"
                alt="A composed plate on a dark stone counter beside a window of blue-hour city lights"
                className="h-full w-full object-cover"
                style={{ aspectRatio: '4/3' }}
                loading="lazy"
              />
            </figure>
          </SectionReveal>
        </div>
      </section>

      {/* The single dark band — tiers in tabular figures */}
      <section className="band-site section-pad">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <h2 className="h2-site">Per-guest bands & standing rates.</h2>
            <div className="mt-8">
              <RateTable rows={TIERS} footnote="Groceries at cost, receipts on request. Nothing on this page is a starting-at fiction." />
              <FeeStack className="mt-8 opacity-90" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Worked-math grid — the second ruled table */}
      <section className="section-pad">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <h2 className="h2-site">Worked math on the Signature band.</h2>
            <p className="mt-3 text-sm text-ink-2">Illustrative math on published rates — the written quote is the confirmed total.</p>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="rule-b">
                    <th className="eyebrow-site py-3 pr-4">Guests</th>
                    {MATH.map((m) => (
                      <th key={m.price} className="eyebrow-site py-3 pr-4 text-right">${m.price}/guest</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {GUEST_COUNTS.map((g) => (
                    <tr key={g} className="rule-t">
                      <th scope="row" className="py-3 pr-4 font-normal">{g} guests</th>
                      {MATH.map((m) => (
                        <td key={m.price} className="tabular-site py-3 pr-4 text-right font-medium">
                          ${(g * m.price).toLocaleString('en-US')}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-ink-2">
              Food only — before staffing, travel where it applies, 20% service, and GET up to 4.7120%, each on its own line.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Included / separate + cost drivers */}
      <section className="section-pad rule-t">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <SectionReveal>
            <h2 className="h2-site">Inside the band.</h2>
            <ul className="mt-6 space-y-3">
              {['Menu design and same-day shopping', 'Cooking, table service, cleanup', 'Groceries — inside per-guest bands, at cost for Stay Chef'].map((x) => (
                <li key={x} className="flex gap-3 border-t border-line-site pt-3">
                  <span aria-hidden="true" className="text-accent-site">—</span><span>{x}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>
          <SectionReveal delay={60}>
            <h2 className="h2-site">Separate lines.</h2>
            <ul className="mt-6 space-y-3">
              {['Staffing — $55/$75 per hour, four-hour floor', 'Travel zones — North Shore & Turtle Bay from $75', '20% service + GET up to 4.7120%, itemized'].map((x) => (
                <li key={x} className="flex gap-3 border-t border-line-site pt-3">
                  <span aria-hidden="true" className="text-accent-site">—</span><span>{x}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
        <div className="mx-auto mt-14 max-w-6xl px-6">
          <SectionReveal>
            <h2 className="h2-site">What moves a quote.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Guest count first, menu band second. Then the Hawaiʻi realities: groceries run roughly
              31–53% above mainland prices, holiday dates carry published premiums, and crew size
              follows the menu. And the comparison worth making: our 20% service charge, itemized,
              against the 23–25% resort and venue norm.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <Link to="/oahu/private-chef-cost" className="link-site">The full cost anatomy →</Link>
              <Link to="/oahu/pricing/fee-stack" className="link-site">The fee stack, explained →</Link>
              <Link to="/oahu/pricing/travel-zones" className="link-site">Travel zones →</Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Estimator panel */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <div className="card-site p-8 md:p-10">
              <p className="eyebrow-site">Estimate only</p>
              <h2 className="h2-site mt-3">Run your own numbers.</h2>
              <p className="measure-site mt-4 text-ink-2">
                The estimator multiplies these published rates by your party and shows the service
                charge and GET as separate computed lines — arithmetic, not a promise. The written
                quote is the confirmed total.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Link to="/oahu/pricing/estimate" className="cta-site">Open the estimator</Link>
                <Link to="/oahu/quote" className="cta-secondary-site">Skip to the written quote →</Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site mb-6">Questions, answered.</h2>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <QuoteCTA cta={{ label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: 'https://wa.me/971551744849' }} />
    </>
  );
}
