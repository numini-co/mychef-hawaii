/**
 * MultiIslandPage — dedicated commercial landing page for multi-island catering across Hawaii.
 * Slug: /multi-island-catering-hawaii
 *
 * Positions Multi-Island Catering as a turnkey, premium product for:
 * Corporate retreats, Destination weddings, Luxury travel advisors, Film & production crews,
 * Multi-villa family itineraries, Tour & hospitality groups, Brand activations.
 */
import { Link } from 'react-router';
import { Seo, organizationLd, foodServiceLd, faqLd } from '@/platform/seo';
import { CONTACT, TRUST_CLAIMS } from '@/platform/config';
import IslandMark from '@/components/IslandMark';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import FeeStack from '@/components/FeeStack';

const WHO_ITS_FOR = [
  {
    title: 'Corporate Retreats & Summits',
    desc: 'Executive board meetings, founder retreats, and leadership offsites hopping from Oʻahu boardrooms to Maui or Kauaʻi estates.',
    scope: 'All-day meal plans, staggered session breaks, private chef dinners & corporate invoicing with verified COIs.',
  },
  {
    title: 'Destination Wedding Weeks',
    desc: 'Multi-day celebrations spanning islands: welcome party on Maui, recovery beach day on Kauaʻi, or Oahu bachelor/bachelorette dining.',
    scope: 'Rehearsal banquets, bridal morning breakfasts, ceremony catering & post-wedding family brunches.',
  },
  {
    title: 'Luxury Travel Advisors & DMCs',
    desc: 'Virtuoso, Signature, and independent luxury concierges needing one reliable culinary partner across all Hawaiian islands.',
    scope: 'Single point of contact, wholesale/client billing, NDA compliance & white-glove guest intake.',
  },
  {
    title: 'Film & Commercial Productions',
    desc: 'Location shoots moving between islands on tight filming schedules requiring early call times and hot on-set dining.',
    scope: 'Craft service trailers, mobile hot lunch lines, confidential cast private chefs & staggered wrap dinners.',
  },
  {
    title: 'Multi-Villa Family Groups',
    desc: 'Extended families and multigenerational reunions booking separate luxury estates across two or three islands.',
    scope: 'Consistent dietary protocols (gluten-free, kosher-style, vegan, allergies) carried automatically across every kitchen.',
  },
  {
    title: 'Brand Activations & VIP Groups',
    desc: 'Product launches, influencer trips, incentive tours, and high-touch private client gatherings.',
    scope: 'Custom printed menus, branded cocktail mixology, bespoke course staging & discreet service.',
  },
];

const SAMPLE_ITINERARY = [
  {
    stop: 'Stop 1: Oʻahu',
    islandId: 'oahu' as const,
    days: 'Days 1–3 · Kahala & North Shore',
    meals: 'Arrival Oceanfront Welcome Dinner + Daily Tropical Breakfasts',
    highlight: 'Kona Kampachi crudo, seared Hawaiian ahi, and 100% Kona morning coffee service on the lānai as the group arrives and settles.',
    chefTeam: 'Oʻahu Resident Culinary Team (Honolulu)',
  },
  {
    stop: 'Stop 2: Maui',
    islandId: 'maui' as const,
    days: 'Days 4–6 · Wailea & Kapalua Estates',
    meals: 'Private Villa Chef Night + Sunset Open-Flame BBQ Gathering',
    highlight: 'Grass-fed Big Island ribeye, grilled Kauai prawns, charred local pineapple, and craft cocktail bar cart service under the stars.',
    chefTeam: 'Maui Resident Culinary Team (Wailea & Upcountry)',
  },
  {
    stop: 'Stop 3: Kauaʻi',
    islandId: 'kauai' as const,
    days: 'Days 7–8 · Hanalei / Princeville Veranda',
    meals: 'Organic Botanical Estate Dinner + Wellness Lunch Spread',
    highlight: 'Kauai farm-to-table tasting menu, local breadfruit gnocchi, edible flowers, and conscious dietary-tailored courses.',
    chefTeam: 'Kauaʻi Resident Culinary Team (North Shore & Poʻipū)',
  },
  {
    stop: 'Stop 4: Hawaiʻi Island (Big Island)',
    islandId: 'bigisland' as const,
    days: 'Days 9–10 · Kona–Kohala Coast',
    meals: 'Volcanic Lava Farewell Feast + Starlight Tasting Menu',
    highlight: 'Catch-of-the-day crusted in macadamia nuts, Waimea baby greens, Hamakua mushrooms, and celebratory closing toasts.',
    chefTeam: 'Big Island Resident Culinary Team (Kona–Kohala)',
  },
];

const COMPARISON = [
  {
    feature: 'Number of Vendors to Manage',
    traditional: '3 to 4 separate caterers or private chefs',
    mychef: '1 central coordinator across all islands',
  },
  {
    feature: 'Dietary & Allergy Tracking',
    traditional: 'Re-explain allergies & preferences to 4 different teams',
    mychef: 'Single unified dietary ledger shared across all chefs',
  },
  {
    feature: 'Contracts & Invoicing',
    traditional: 'Multiple contracts, varying terms, 4 separate deposits',
    mychef: 'One master contract, one itemized invoice, one confirmed total',
  },
  {
    feature: 'Logistics & Inter-Island Travel',
    traditional: 'High flight/hotel buyouts if flying mainland/single island chefs',
    mychef: 'Zero inter-island travel surcharges — 100% resident island chefs',
  },
  {
    feature: 'Consistent Quality Standard',
    traditional: 'Mixed culinary levels, conflicting tableware & staffing quality',
    mychef: 'Unified myCHEF luxury standards, tableware & vetted staffing',
  },
];

const FAQ = [
  {
    q: 'How does multi-island catering coordination actually work?',
    a: 'You submit your itinerary once — dates, islands, guest count, and dining preferences. Our statewide desk assigns you a dedicated coordinator who builds a unified proposal. When you approve, your coordinator briefs our resident culinary teams on Oʻahu, Maui, Kauaʻi, and Hawaiʻi Island. Each local team sources ingredients that morning and executes on-site, while you manage only one point of contact and one invoice.',
  },
  {
    q: 'Do you fly the same chef from island to island, or use local chefs?',
    a: 'We use vetted, insured culinary teams who permanently reside on each respective island. Flying chefs between islands creates major flight delays, costly flight/hotel buyouts, and supply issues. By maintaining resident teams across Oʻahu, Maui, Kauaʻi, and Big Island, you receive authentic local island sourcing, punctual service, and zero unnecessary travel surcharges.',
  },
  {
    q: 'How are dietary restrictions and guest preferences handled across islands?',
    a: 'Our desk creates a master guest ledger during your initial onboarding. Whether a guest is celiac, vegan, kosher-style, or allergic to tree nuts, that profile is integrated into each island kitchen’s prep plan. You never have to repeat dietary requirements to four separate chefs.',
  },
  {
    q: 'Can we have different formats on different islands (e.g., BBQ on Maui, fine dining on Oʻahu)?',
    a: 'Absolutely. That is the exact strength of the multi-island program. You can schedule an informal welcome BBQ on Oʻahu, an all-day wellness retreat meal plan on Kauaʻi, a 40-guest gala dinner on Maui, and intimate private chef dining on the Big Island.',
  },
  {
    q: 'How does billing and deposits work for a multi-island trip?',
    a: 'You receive one consolidated written quote itemizing every meal, staffing hours, and service charge. A single 50% deposit secures your dates across all islands. Final balance is billed as one master payment after your itinerary is finalized.',
  },
];

export default function MultiIslandPage() {
  return (
    <>
      <Seo
        title="Multi-Island Catering Hawaii — One Partner Across 4 Islands | myCHEF"
        description="Multi-island catering Hawaii: one coordinator, one master quote, unified dietary ledger, resident culinary teams on every island."
        path="/multi-island-catering-hawaii"
        ogImage="/img/hub/multi-island-itinerary.jpg"
        jsonLd={[organizationLd(), foodServiceLd(), faqLd(FAQ)]}
      />

      {/* HERO SECTION */}
      <section className="relative isolate flex min-h-[82vh] items-end overflow-hidden bg-[#12100D]">
        <img
          src="/img/hub/multi-island-itinerary.webp"
          alt="A multi-island dining setup on a Hawaiian villa terrace overlooking the Pacific"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: 'brightness(0.38) contrast(1.04)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(16,14,11,0.96) 0%, rgba(16,14,11,0.85) 45%, rgba(16,14,11,0.40) 80%, rgba(16,14,11,0.20) 100%), linear-gradient(to top, rgba(16,14,11,0.98) 0%, rgba(16,14,11,0.80) 35%, rgba(16,14,11,0.30) 100%)',
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-28 sm:pt-36">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-accent-site" />
            <span className="text-xs uppercase tracking-widest text-[#EDE8DB] font-medium">
              The Statewide Product
            </span>
          </div>

          <h1
            className="h1-site mt-4 max-w-4xl text-white"
            style={{ textShadow: '0 2px 14px rgba(0,0,0,0.85)' }}
          >
            Multi-Island Catering &amp; Private Chef Service Across Hawaii
          </h1>

          <p
            className="measure-site mt-6 text-base sm:text-xl leading-relaxed text-[#F7F5F0]"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.75)' }}
          >
            Planning events, retreats, or private villa dining across more than one Hawaiian island?
            Stop coordinating separate vendors. myCHEF Hawaii delivers a turnkey culinary program
            across Oʻahu, Maui, Kauaʻi, and Hawaiʻi Island through <strong>one inquiry, one central coordinator, and four resident island teams.</strong>
          </p>

          {/* Quick Metrics Strip */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-3xl">
            <div className="rounded border border-white/15 bg-black/45 p-3 backdrop-blur-sm">
              <span className="block text-xs uppercase tracking-wider text-[#DDD8CC]">Reach</span>
              <span className="font-display text-lg font-semibold text-white">4 Hawaiian Islands</span>
            </div>
            <div className="rounded border border-white/15 bg-black/45 p-3 backdrop-blur-sm">
              <span className="block text-xs uppercase tracking-wider text-[#DDD8CC]">Contact</span>
              <span className="font-display text-lg font-semibold text-white">1 Central Lead</span>
            </div>
            <div className="rounded border border-white/15 bg-black/45 p-3 backdrop-blur-sm">
              <span className="block text-xs uppercase tracking-wider text-[#DDD8CC]">Kitchen Staff</span>
              <span className="font-display text-lg font-semibold text-white">100% Resident Chefs</span>
            </div>
            <div className="rounded border border-white/15 bg-black/45 p-3 backdrop-blur-sm">
              <span className="block text-xs uppercase tracking-wider text-[#DDD8CC]">Invoicing</span>
              <span className="font-display text-lg font-semibold text-white">1 Master Quote</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <Link
              to="/quote?itinerary=multi"
              className="cta-site w-full sm:w-auto text-center"
              style={{ backgroundColor: '#F7F5F0', color: '#23201A' }}
            >
              Plan Your Multi-Island Program
            </Link>
            <a
              href="#how-it-works"
              className="cta-ghost-site w-full sm:w-auto text-center"
              style={{ color: '#EDE8DB', borderColor: 'rgba(237,232,219,0.45)' }}
            >
              See Sample 4-Island Itinerary ↓
            </a>
          </div>
        </div>
      </section>

      {/* TRUST TICKER */}
      <section className="rule-y bg-[#F1EEE6]">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-medium">
          {TRUST_CLAIMS.map((claim) => (
            <span key={claim} className="flex items-center gap-2">
              <span className="text-accent-site font-bold">✓</span> {claim}
            </span>
          ))}
        </div>
      </section>

      {/* SECTION 1: THE PROBLEM VS THE SOLUTION */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">The Operational Challenge</p>
            <h2 className="h2-site mt-3">Why island-hopping events break traditional catering.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Hawaii is separated by ocean channels with no vehicle ferries. Coordinating luxury
              catering on multiple islands typically means juggling four independent caterers, four
              separate contracts, four minimum spend regimes, and constantly re-explaining guest
              allergies.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-12 card-site overflow-hidden">
            <div className="table-scroll-site">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-line-site bg-[#F1EEE6] text-ink">
                    <th scope="col" className="px-6 py-4 font-semibold">Challenge</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-ink-2">Traditional Multi-Vendor Approach</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-accent-site">The myCHEF Hawaii Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line-site">
                  {COMPARISON.map((row) => (
                    <tr key={row.feature}>
                      <td className="px-6 py-4 font-display text-base font-semibold">{row.feature}</td>
                      <td className="px-6 py-4 text-ink-2">{row.traditional}</td>
                      <td className="px-6 py-4 font-medium text-ink bg-accent-site/5">
                        <span className="text-accent-site font-bold mr-2">✓</span>
                        {row.mychef}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* SECTION 2: WHO THIS SERVICE IS BUILT FOR */}
      <section className="section-pad rule-t bg-[#F7F5F0]">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Built for Scale &amp; Discretion</p>
            <h2 className="h2-site mt-3">Who books multi-island catering?</h2>
            <p className="measure-site mt-4 text-ink-2">
              From corporate leadership summits hopping between islands to high-profile production
              crews and extended family reunions, we support groups that need flawless execution
              without logistical friction.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHO_ITS_FOR.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 50}>
                <div className="card-site flex h-full flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm text-ink-2 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 border-t border-line-site pt-4">
                    <span className="block text-xs uppercase tracking-wider text-accent-site font-semibold">
                      Scope Included
                    </span>
                    <p className="mt-1 text-xs text-ink-2 leading-normal">{item.scope}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: STEP-BY-STEP SAMPLE ITINERARY */}
      <section id="how-it-works" className="band-site py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <span className="eyebrow-site text-accent-site">Turnkey Execution</span>
            <h2 className="h2-site mt-3 text-white">
              Example: The 10-Day, 4-Island Executive Program
            </h2>
            <p className="measure-site mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
              Here is how a real multi-island itinerary operates under one myCHEF Hawaii brief.
              Four distinct island culinary styles, zero vendor friction:
            </p>
          </SectionReveal>

          <div className="mt-12 space-y-6">
            {SAMPLE_ITINERARY.map((step, i) => (
              <SectionReveal
                key={step.stop}
                delay={i * 60}
                className="rounded-lg border border-white/20 bg-black/40 p-6 sm:p-8 backdrop-blur-sm"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <IslandMark siteId={step.islandId} className="h-6 w-6 shrink-0 text-white" />
                      <span className="font-display text-2xl text-white font-medium">{step.stop}</span>
                    </div>
                    <span className="mt-1 block text-xs font-semibold uppercase tracking-widest text-[#DDD8CC]">
                      {step.days}
                    </span>
                  </div>
                  <span className="inline-block rounded bg-accent-site/25 border border-accent-site/40 px-3 py-1 text-xs font-medium text-white">
                    {step.chefTeam}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 border-t border-white/15 pt-4 text-sm">
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-wider text-[#DDD8CC]/80">
                      Dining Program
                    </span>
                    <p className="mt-1 font-medium text-white">{step.meals}</p>
                  </div>
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-wider text-[#DDD8CC]/80">
                      Culinary Highlights
                    </span>
                    <p className="mt-1 text-white/80 leading-relaxed">{step.highlight}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-white/30 bg-black/50 p-6 text-center">
            <h3 className="font-display text-2xl text-white">Customized to your exact flight schedule</h3>
            <p className="mt-2 text-sm text-[#DDD8CC] max-w-2xl mx-auto">
              Your dates, guest counts, and villa locations determine the plan. We coordinate 2-island,
              3-island, or full 4-island programs with equal precision.
            </p>
            <div className="mt-6">
              <Link
                to="/quote?itinerary=multi"
                className="cta-site inline-flex items-center justify-center"
                style={{ backgroundColor: '#F7F5F0', color: '#23201A' }}
              >
                Submit Your Itinerary for a Written Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW WE RUN IT — THE FOUR PILLARS */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <img
              src="/img/hub/pedigree-discretion.webp"
              alt="Our executive chef plating synchronized courses for a high-demand multi-island party"
              className="w-full object-cover card-site"
              style={{ aspectRatio: '16/11' }}
            />
          </SectionReveal>

          <div className="lg:col-span-7">
            <SectionReveal>
              <p className="eyebrow-site">Operational Integrity</p>
              <h2 className="h2-site mt-3">Four islands. One operating standard.</h2>
              <p className="mt-4 text-ink-2 leading-relaxed">
                We built myCHEF Hawaii specifically to solve the inter-island coordination void.
                Here is why leading event agencies and families trust our statewide desk:
              </p>
            </SectionReveal>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <SectionReveal>
                <h3 className="font-display text-xl">100% Resident Island Chefs</h3>
                <p className="mt-2 text-sm text-ink-2">
                  No airport delays, missed connections, or island-hopping luggage lost with knives.
                  Local chefs who live on that island source directly from morning farmers and docks.
                </p>
              </SectionReveal>
              <SectionReveal delay={60}>
                <h3 className="font-display text-xl">Unified Dietary Master Ledger</h3>
                <p className="mt-2 text-sm text-ink-2">
                  All allergies, food dislikes, children’s preferences, and wine notes are recorded
                  once and transferred automatically to all 4 island kitchen teams.
                </p>
              </SectionReveal>
              <SectionReveal delay={120}>
                <h3 className="font-display text-xl">Single Point of Contact</h3>
                <p className="mt-2 text-sm text-ink-2">
                  One dedicated project lead manages scheduling, menu revisions, staffing calls,
                  and special requests, available via phone, WhatsApp, and email.
                </p>
              </SectionReveal>
              <SectionReveal delay={180}>
                <h3 className="font-display text-xl">Corporate Billing &amp; COIs</h3>
                <p className="mt-2 text-sm text-ink-2">
                  $2M general liability coverage across all Hawaiian counties. Consolidated corporate
                  invoicing with standard payment terms available for qualified accounts.
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRICING ARCHITECTURE FOR MULTI-ISLAND */}
      <section className="section-pad rule-t bg-[#F1EEE6]">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Financial Transparency</p>
            <h2 className="h2-site mt-3">Published tariffs, consolidated quotes.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Multi-island catering quotes follow our network-wide published rate cards. Every island
              segment itemizes its meal tiers, staffing hours, 20% service charge, and local county
              GET. No coordination markups, no hidden agency fees.
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <FeeStack />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link to="/pricing" className="cta-site text-center">
                Review the statewide tariff
              </Link>
              <Link to="/pricing/cost-by-island" className="cta-secondary-site text-center">
                Compare island cost differences →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FREQUENTLY ASKED QUESTIONS */}
      <section className="section-pad rule-t">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <img
              src="/img/hub/faq-guest-brief.webp"
              alt="Our chef team conducting a pre-service briefing on estate lawn"
              className="w-full object-cover card-site"
              style={{ aspectRatio: '16/10' }}
            />
          </SectionReveal>
          <div className="lg:col-span-7">
            <p className="eyebrow-site">Multi-Island FAQs</p>
            <h2 className="h2-site mt-2 mb-6">Frequently asked questions</h2>
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      {/* FINAL CTA STRIP */}
      <section className="relative isolate overflow-hidden">
        <img
          src="/img/hub/cta-take-the-table.webp"
          alt="Golden-hour estate dinner on oceanfront Hawaiian lawn"
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
            One Coordinator · Four Islands
          </span>
          <h2 className="h2-site mt-3" style={{ color: '#F7F5F0' }}>
            Ready to plan your multi-island catering program?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(247,245,240,0.90)' }}>
            Tell us your island stops, travel dates, guest counts, and dining visions. We build a
            complete multi-island proposal with published numbers and zero hidden fees.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/quote?itinerary=multi"
              className="cta-site w-full sm:w-auto"
              style={{ backgroundColor: '#F7F5F0', color: '#23201A' }}
            >
              Get Multi-Island Written Quote
            </Link>
            <a
              className="cta-ghost-site w-full sm:w-auto"
              style={{ color: '#EDE8DB', borderColor: 'rgba(237,232,219,0.5)' }}
              href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('myCHEF Hawaii — Multi-Island Catering Inquiry\nItinerary / Islands: \nDates: \nGuest Count: \nEvent Types: ')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Statewide Desk →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
