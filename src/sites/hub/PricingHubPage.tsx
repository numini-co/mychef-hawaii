/**
 * PricingHubPage — Comprehensive statewide pricing specification for myCHEF Hawaii.
 * Slug: /pricing
 *
 * Details:
 * 1. Exactly what $125/person actually buys (inclusions vs separate lines).
 * 2. 4-island comparison table across all core services.
 * 3. Add-on lines, minimums, and travel zone tariffs.
 * 4. Dual conversion paths: Single-island local tariff vs Multi-island combined proposal.
 */
import { Link } from 'react-router';
import { Seo, organizationLd, foodServiceLd, faqLd } from '@/platform/seo';
import { CONTACT, STAFFING, TRUST_CLAIMS } from '@/platform/config';
import { ISLAND_IDS, SITE_META } from '@/platform/tokens';
import IslandMark from '@/components/IslandMark';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';

interface PricingInclusion {
  item: string;
  included: boolean;
  notes: string;
}

const INCLUSIONS: PricingInclusion[] = [
  { item: 'Chef on-site in your kitchen', included: true, notes: 'Professional chef dedicated to your residence or villa for 3–5 hours' },
  { item: 'Custom menu design', included: true, notes: 'Tailored courses built around your group preferences and dietary needs' },
  { item: 'Grocery shopping & procurement', included: true, notes: 'Morning sourcing from local docks, organic farms, and artisan purveyors' },
  { item: 'Food & ingredients inside the band', included: true, notes: 'All standard proteins, produce, pantry staples, and garnishes included' },
  { item: 'Scratch preparation & multi-course cooking', included: true, notes: 'Fresh cooking on-site with full presentation' },
  { item: 'Table service & course plating', included: true, notes: 'Synchronized plating and presentation for all seated guests' },
  { item: 'Full kitchen cleanup & sanitation', included: true, notes: 'Counters wiped, cookware washed, trash bagged, kitchen left immaculate' },
  { item: '20% Service charge', included: false, notes: 'Appears on its own separate line; covers insurance, admin & kitchen ops' },
  { item: 'Hawaiʻi GET (State Excise Tax)', included: false, notes: '4.0% to 4.7120% depending on county, itemized on its own line' },
  { item: 'Dedicated front-of-house servers', included: false, notes: 'Optional or required for 10+ guests: published $55/hr (4-hr floor)' },
  { item: 'Mobile bar carts & bartenders', included: false, notes: 'From $650/4hr + setup; alcohol client-supplied or licensed referral' },
  { item: 'Specialty tableware & plate rentals', included: false, notes: 'Villa kitchenware used by default; specialty rentals quoted at cost' },
];

const COMPARISON_SERVICES = [
  {
    service: 'Private Chef Dinner',
    scope: '3–5 course bespoke dining in villa',
    oahu: '$125–$190',
    maui: '$150–$250',
    kauai: '$150–$250',
    bigisland: '$150–$225',
    basis: 'per guest',
  },
  {
    service: 'Stay Chef (Multi-Day)',
    scope: 'Dedicated chef: breakfast to dinner',
    oahu: 'From $850',
    maui: 'From $1,050',
    kauai: 'From $1,100',
    bigisland: 'From $950',
    basis: 'per day + groceries',
  },
  {
    service: 'Family-Style Dinner',
    scope: 'Communal passed platters & sides',
    oahu: '$125–$190',
    maui: '$150–$250',
    kauai: '$150–$250',
    bigisland: '$150–$225',
    basis: 'per guest · Signature band',
  },
  {
    service: 'Live-Flame BBQ Catering',
    scope: 'Grilled local catch, beef & sides',
    oahu: 'Table $95–$125',
    maui: 'From $150',
    kauai: 'From $150',
    bigisland: 'Entry from $110',
    basis: 'per guest · under Signature',
  },
  {
    service: 'Wedding & Celebration',
    scope: 'Rehearsal, reception & brunch',
    oahu: 'From $150',
    maui: 'From $150',
    kauai: 'From $150',
    bigisland: 'From $150',
    basis: 'per guest',
  },
  {
    service: 'Cooking Masterclass',
    scope: 'Hands-on Hawaiian culinary demo',
    oahu: 'From $125',
    maui: 'From $150',
    kauai: 'From $150',
    bigisland: 'From $150',
    basis: 'per guest',
  },
  {
    service: 'Corporate & Production',
    scope: 'Board dinners, summits & shoots',
    oahu: 'Custom quoted',
    maui: 'Custom quoted',
    kauai: 'Custom quoted',
    bigisland: 'Custom quoted',
    basis: 'custom program',
  },
  {
    service: 'Multi-Island Catering',
    scope: 'Turnkey coordination across islands',
    oahu: 'One master brief',
    maui: 'One master brief',
    kauai: 'One master brief',
    bigisland: 'One master brief',
    basis: 'consolidated quote',
  },
];

const PRICING_FAQ = [
  {
    q: 'What does the starting price of $125 per person include?',
    a: 'On Oʻahu (and starting at $150 on Maui, Kauaʻi, and Big Island), the per-person price includes your dedicated private chef, custom menu design, grocery procurement, all fresh food and ingredients inside the chosen tier, multi-course preparation, table plating, and thorough kitchen cleanup. The 20% service charge and Hawaiʻi GET are itemized on separate lines.',
  },
  {
    q: 'Why do prices differ between Oʻahu, Maui, Kauaʻi, and the Big Island?',
    a: 'Each Hawaiian county is a distinct market separated by ocean channels. Maui, Kauaʻi, and Hawaiʻi Island carry higher grocery freight surcharges (groceries typically cost 35–50% more than mainland baselines), smaller chef rosters, and longer travel distances between coastal estates. Instead of falsely averaging these costs into an inflated statewide figure, we publish four transparent, honest rate cards.',
  },
  {
    q: 'What are the minimum guest requirements?',
    a: 'Per-guest published bands assume groups of 6 or more. For intimate parties of 2 to 5 guests, our chefs have minimum service booking thresholds or our dedicated Date Night format ($450 on Oʻahu, $500 on Maui, $550 on Big Island, $650 on Kauaʻi), which includes complete private chef service for two.',
  },
  {
    q: 'How does Stay Chef pricing work compared to single dinners?',
    a: 'Stay Chef service is billed as a flat daily chef rate (from $850/day on Oʻahu, $950/day on Big Island, $1,050/day on Maui, and $1,100/day on Kauaʻi) plus groceries at cost with original receipts provided. This is significantly more economical for families and retreats requiring breakfast, lunch, poolside snacks, and dinners every day.',
  },
  {
    q: 'Is the written quote really the final price I pay?',
    a: 'Yes. We do not use teaser estimates or unexpected line items. Your written quote itemizes the exact menu tier, guest count, staffing hours, travel zone, the 20% service charge, and Hawaiʻi GET. That approved document is the confirmed final total. A 50% deposit locks your date only after you have reviewed and signed off on the numbers.',
  },
];

export default function PricingHubPage() {
  return (
    <>
      <Seo
        title="Hawaii Private Chef & Catering Pricing — The Statewide Tariff | myCHEF"
        description="Statewide tariff: signature dinners $125–$250/guest by island, Stay Chef $850–$1,100/day, Date Night $450–$950. 20% service and GET itemized."
        path="/pricing"
        ogImage="/img/hub/pricing-statewide.jpg"
        jsonLd={[organizationLd(), foodServiceLd(), faqLd(PRICING_FAQ)]}
      />

      {/* HEADER SECTION */}
      <section className="relative isolate overflow-hidden bg-[#181613] pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="eyebrow-site text-accent-site uppercase tracking-widest text-xs font-semibold">
            Statewide Tariff &amp; Fee Transparency
          </span>
          <h1 className="h1-site mt-4 max-w-4xl text-white">
            Published prices. Written quotes. Zero hidden fees.
          </h1>
          <p className="measure-site mt-6 text-base sm:text-lg text-[#F7F5F0]/90 leading-relaxed">
            Most catering companies hide their numbers behind contact forms and phone sales. At
            myCHEF Hawaii, every island publishes its rate card. Below is the complete statewide
            tariff, an exact breakdown of what $125 per person buys, and a four-island comparison table.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/calculator"
              className="cta-site"
              style={{ backgroundColor: '#F7F5F0', color: '#23201A' }}
            >
              Interactive Price Calculator ⚡
            </Link>
            <a
              href="#what-it-buys"
              className="cta-ghost-site"
              style={{ color: '#EDE8DB', borderColor: 'rgba(237,232,219,0.45)' }}
            >
              What $125 Buys (Inclusions) ↓
            </a>
            <a
              href="#comparison-table"
              className="cta-ghost-site"
              style={{ color: '#EDE8DB', borderColor: 'rgba(237,232,219,0.45)' }}
            >
              4-Island Comparison Table ↓
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="rule-y bg-[#F1EEE6]">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-medium">
          {TRUST_CLAIMS.map((claim) => (
            <span key={claim} className="flex items-center gap-2">
              <span className="text-accent-site font-bold">✓</span> {claim}
            </span>
          ))}
        </div>
      </section>

      {/* SECTION 1: WHAT $125 ACTUALLY BUYS (INCLUSIONS MATRIX) */}
      <section id="what-it-buys" className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Clear Accounting</p>
            <h2 className="h2-site mt-3">What does $125 per person actually buy?</h2>
            <p className="measure-site mt-4 text-ink-2">
              A published price only creates value if you know what is included and what is billed
              separately. Here is the standardized inclusion matrix across our entire network:
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-8 card-site overflow-hidden">
              <div className="p-6 bg-[#F1EEE6] border-b border-line-site flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl">The Inclusion Standard</h3>
                  <p className="text-xs text-ink-2 mt-0.5">Signature dinner format (per-guest band)</p>
                </div>
                <span className="rounded bg-accent-site/10 px-3 py-1 text-xs font-semibold text-accent-site">
                  All 4 Islands
                </span>
              </div>

              <div className="divide-y divide-line-site">
                {INCLUSIONS.map((inc) => (
                  <div key={inc.item} className="p-4 sm:p-5 flex items-start gap-4">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        inc.included
                          ? 'bg-accent-site/15 text-accent-site'
                          : 'bg-black/10 text-ink-2'
                      }`}
                    >
                      {inc.included ? '✓' : '+'}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <span className="font-medium text-sm sm:text-base text-ink">
                          {inc.item}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-ink-2">
                          {inc.included ? 'Included in Band' : 'Billed on Own Line'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-ink-2 mt-1">{inc.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Tariff Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="card-site p-6">
                <h3 className="font-display text-xl">The Itemized Fee Stack</h3>
                <p className="mt-2 text-xs text-ink-2 leading-relaxed">
                  Every quote separates operations and taxes into transparent, unpadded lines:
                </p>
                <div className="mt-4 space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-line-site pb-2">
                    <span className="text-ink-2">Service Charge:</span>
                    <span className="font-semibold text-ink">20% (always on own line)</span>
                  </div>
                  <div className="flex justify-between border-b border-line-site pb-2">
                    <span className="text-ink-2">Hawaiʻi GET:</span>
                    <span className="font-semibold text-ink">Up to 4.7120% (county tax)</span>
                  </div>
                  <div className="flex justify-between border-b border-line-site pb-2">
                    <span className="text-ink-2">Date Lock Deposit:</span>
                    <span className="font-semibold text-ink">50% (after written quote)</span>
                  </div>
                  <div className="flex justify-between border-b border-line-site pb-2">
                    <span className="text-ink-2">Gratuity:</span>
                    <span className="font-semibold text-ink">100% Voluntary</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-ink-2">Groceries (Stay Chef):</span>
                    <span className="font-semibold text-ink">At cost, receipts attached</span>
                  </div>
                </div>
              </div>

              <div className="card-site p-6 bg-[#F7F5F0]">
                <h3 className="font-display text-xl">Staffing Hourly Lines</h3>
                <p className="mt-2 text-xs text-ink-2">
                  When guest count or multi-course plating requires additional front or back of house:
                </p>
                <ul className="mt-4 space-y-2 text-xs sm:text-sm">
                  <li className="flex justify-between">
                    <span>Dedicated Server:</span>
                    <span className="font-semibold">${STAFFING.serverHourly}/hour (4-hr floor)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sous Chef:</span>
                    <span className="font-semibold">${STAFFING.sousChefHourly}/hour (4-hr floor)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mobile Bar Cart:</span>
                    <span className="font-semibold">From $650 / 4 hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4-ISLAND CROSS-SERVICE COMPARISON TABLE */}
      <section id="comparison-table" className="section-pad rule-t bg-[#F7F5F0]">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Cross-Island Tariff</p>
            <h2 className="h2-site mt-3">Four Hawaiian Islands side by side.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Compare baseline starting prices across all four islands. Click on any island to open
              its dedicated local site with regional menus, local travel zones, and specific packages:
            </p>
          </SectionReveal>

          <SectionReveal className="mt-10 card-site overflow-hidden">
            <div className="table-scroll-site">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-line-site bg-[#F1EEE6] text-ink">
                    <th scope="col" className="px-5 py-4 font-semibold">Service</th>
                    <th scope="col" className="px-5 py-4 font-semibold">
                      <Link to="/oahu/pricing" className="link-site inline-flex items-center gap-1.5">
                        <IslandMark siteId="oahu" className="h-4 w-4" /> Oʻahu
                      </Link>
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold">
                      <Link to="/maui/pricing" className="link-site inline-flex items-center gap-1.5">
                        <IslandMark siteId="maui" className="h-4 w-4" /> Maui
                      </Link>
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold">
                      <Link to="/kauai/pricing" className="link-site inline-flex items-center gap-1.5">
                        <IslandMark siteId="kauai" className="h-4 w-4" /> Kauaʻi
                      </Link>
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold">
                      <Link to="/bigisland/pricing" className="link-site inline-flex items-center gap-1.5">
                        <IslandMark siteId="bigisland" className="h-4 w-4" /> Big Island
                      </Link>
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold">Billing Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line-site">
                  {COMPARISON_SERVICES.map((row) => (
                    <tr key={row.service} className="hover:bg-white/60">
                      <td className="px-5 py-4 font-display text-base font-semibold text-ink">
                        {row.service}
                        <span className="block text-xs font-normal text-ink-2">{row.scope}</span>
                      </td>
                      <td className="tabular-site px-5 py-4 font-medium">{row.oahu}</td>
                      <td className="tabular-site px-5 py-4 font-medium">{row.maui}</td>
                      <td className="tabular-site px-5 py-4 font-medium">{row.kauai}</td>
                      <td className="tabular-site px-5 py-4 font-medium">{row.bigisland}</td>
                      <td className="px-5 py-4 text-xs text-ink-2 uppercase tracking-wider">{row.basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>

          {/* DUAL PATHWAYS SECTION */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="card-site p-8">
              <span className="text-xs uppercase tracking-wider text-ink-2 font-medium">Path A</span>
              <h3 className="font-display text-2xl mt-1">Visiting only one island?</h3>
              <p className="mt-3 text-sm text-ink-2 leading-relaxed">
                Open that island’s dedicated website for local seasonal menus, travel surcharge
                maps, and regional chef availability:
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {ISLAND_IDS.map((id) => (
                  <Link
                    key={id}
                    to={`${SITE_META[id].basePath}/pricing`}
                    className="cta-secondary-site text-xs"
                  >
                    {SITE_META[id].shortName} Rate Card →
                  </Link>
                ))}
              </div>
            </div>

            <div className="card-site p-8 border-accent-site/40 bg-accent-site/5">
              <span className="text-xs uppercase tracking-wider text-accent-site font-medium">Path B</span>
              <h3 className="font-display text-2xl mt-1">Planning across multiple islands?</h3>
              <p className="mt-3 text-sm text-ink-2 leading-relaxed">
                Coordinate your multi-island trip through one central team, one master proposal,
                and one unified invoice:
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/quote?itinerary=multi" className="cta-site">
                  Request Combined Proposal →
                </Link>
                <Link to="/multi-island-catering-hawaii" className="cta-secondary-site">
                  Multi-Island Product Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY PRICES DIFFER PER ISLAND */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">County Realities</p>
            <h2 className="h2-site mt-3">Why prices differ across Hawaiian islands.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Mainland companies often attempt to paste a single statewide rate across all Hawaiian
              islands. In reality, four independent counties dictate four distinct cost structures:
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card-site p-6">
              <div className="flex items-center gap-2">
                <IslandMark siteId="oahu" className="h-5 w-5" />
                <h3 className="font-display text-lg">Oʻahu</h3>
              </div>
              <p className="mt-3 text-xs text-ink-2 leading-relaxed">
                Commercial port hub. Deepest chef talent pool and lower grocery freight surcharges allow
                the lowest entry bands ($125/guest, $850/day Stay Chef).
              </p>
            </div>

            <div className="card-site p-6">
              <div className="flex items-center gap-2">
                <IslandMark siteId="maui" className="h-5 w-5" />
                <h3 className="font-display text-lg">Maui</h3>
              </div>
              <p className="mt-3 text-xs text-ink-2 leading-relaxed">
                Resort corridor logistics across Wailea, Mākena, and Kapalua. Premium island freight
                and high seasonal villa demand structure bands from $150/guest.
              </p>
            </div>

            <div className="card-site p-6">
              <div className="flex items-center gap-2">
                <IslandMark siteId="kauai" className="h-5 w-5" />
                <h3 className="font-display text-lg">Kauaʻi</h3>
              </div>
              <p className="mt-3 text-xs text-ink-2 leading-relaxed">
                Smallest resident culinary roster. North shore one-lane bridge logistics (Hanalei/Princeville)
                require dedicated travel planning ($150/guest, $1,100/day Stay Chef).
              </p>
            </div>

            <div className="card-site p-6">
              <div className="flex items-center gap-2">
                <IslandMark siteId="bigisland" className="h-5 w-5" />
                <h3 className="font-display text-lg">Hawaiʻi Island</h3>
              </div>
              <p className="mt-3 text-xs text-ink-2 leading-relaxed">
                Massive landmass with 45–90 minute drive corridors along the Kona–Kohala coast.
                Estate travel zones clearly mapped ($150/guest, $950/day Stay Chef).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FREQUENTLY ASKED PRICING QUESTIONS */}
      <section className="section-pad rule-t bg-[#F1EEE6]">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <img
              src="/img/hub/rate-card-quote.webp"
              alt="Itemized written quote packet and chef notes on Hawaiian villa island"
              className="w-full object-cover card-site"
              style={{ aspectRatio: '16/11' }}
            />
          </SectionReveal>
          <div className="lg:col-span-7">
            <p className="eyebrow-site">Pricing Details</p>
            <h2 className="h2-site mt-2 mb-6">Frequently asked questions about pricing</h2>
            <FAQAccordion items={PRICING_FAQ} />
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="relative isolate overflow-hidden">
        <img
          src="/img/hub/cta-take-the-table.webp"
          alt="Written quote confirmed into private villa dinner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(20,18,14,0.96) 0%, rgba(20,18,14,0.82) 45%, rgba(20,18,14,0.60) 100%)',
          }}
        />
        <div className="relative z-10 section-pad mx-auto max-w-3xl px-6 text-center">
          <span className="eyebrow-site uppercase tracking-widest text-[#EDE8DB]">
            Confirmed Total · No Hidden Costs
          </span>
          <h2 className="h2-site mt-3" style={{ color: '#F7F5F0' }}>
            Ready for your itemized written quote?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(247,245,240,0.90)' }}>
            Tell us your island(s), date(s), and guest count. We send a verified written quote
            with published numbers, exact staffing, and the fee stack itemized.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/quote"
              className="cta-site w-full sm:w-auto"
              style={{ backgroundColor: '#F7F5F0', color: '#23201A' }}
            >
              Get a Written Quote
            </Link>
            <Link
              to="/quote?itinerary=multi"
              className="cta-ghost-site w-full sm:w-auto"
              style={{ color: '#EDE8DB', borderColor: 'rgba(237,232,219,0.5)' }}
            >
              Multi-Island Quote
            </Link>
            <a
              className="cta-ghost-site w-full sm:w-auto"
              style={{ color: '#EDE8DB', borderColor: 'rgba(237,232,219,0.5)' }}
              href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('myCHEF Hawaii — pricing inquiry\nIsland / itinerary: \nService: \nDates: \nGuests: ')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Desk →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
