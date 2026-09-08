/**
 * Oʻahu homepage (design/home-oahu.md) — "Modern Pacific Metropolitan Luxury".
 * Split-editorial hero (NOT full-bleed), trust strip, two-door router,
 * text-led corridor directory, single dark rate-card band, four-step process,
 * kamaʻāina panel, group capability, mini quote block.
 * QA gates: pricing (S6) before how-it-works (S7); no shadows; no beach imagery.
 */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Seo, foodServiceLd, faqLd, breadcrumbLd } from '@/platform/seo';
import { RATES } from '@/platform/config';
import TrustStrip from '@/components/TrustStrip';
import FeeStack from '@/components/FeeStack';
import SectionReveal from '@/components/SectionReveal';
import { RateTable } from '@/components/RateTable';
import FAQAccordion from '@/components/FAQAccordion';

const H1 = 'A chef in your kitchen, from Waikīkī to the North Shore.';

const HOME_FAQ = [
  {
    q: 'How much does a private chef cost on Oʻahu?',
    a: 'Signature dinners run $125–$190 a guest with all groceries and ingredients included. Stay Chef service runs from $850 a day (plus groceries at cost with original receipts provided), and Date Night for two runs from $450. The 20% service charge and Hawaiʻi GET up to 4.7120% appear on their own lines — the written quote you receive is the confirmed total.',
  },
  {
    q: 'Which parts of Oʻahu do you serve?',
    a: 'We cook island-wide: Waikīkī, Honolulu, Kahala, Diamond Head, Ko Olina, Kapolei, Kailua, Lanikai, Hawaiʻi Kai, the North Shore (Haleiwa, Sunset Beach), and Turtle Bay. The North Shore and Turtle Bay carry a published travel fee from $75; all other zones are base zone with zero travel fees.',
  },
  {
    q: 'Can you cook in a Waikīkī condo or hotel suite?',
    a: 'Yes, provided the suite has a real kitchen (stove, oven, sink, prep counter) and building rules permit private culinary vendors. We issue the required Certificate of Insurance (COI) naming your property management and schedule the freight elevator window. Hotel rooms with only a minibar or coffee maker are declined honestly at inquiry.',
  },
  {
    q: 'Where do your chefs source ingredients on Oʻahu?',
    a: 'Our executive chefs bid in person at the Honolulu Fish Auction (Pier 38) at 5:30 AM on service mornings for auction-grade sashimi yellowfin ahi, mahimahi, and shutome. Produce is sourced from Kahuku Farms on the North Shore, Waimānalo Greens, and local Hawaiian cattle ranches.',
  },
  {
    q: 'Can you cater beach dinners on Oʻahu?',
    a: 'Under Hawaii DLNR state regulations, commercial structures, catered dining tables, and amplified setups on public beach sand are strictly prohibited without specialized film/event permits. The model that works seamlessly is having your sunset drinks on the sand, followed by dinner on your private villa lawn or residence lanai.',
  },
  {
    q: 'What is the deposit and payment structure?',
    a: 'You receive an itemized written quote first. Only after you review and approve the exact menu and numbers do you pay a 50% deposit to lock the date on the chef’s calendar. The balance is settled following service. Gratuity is entirely voluntary.',
  },
];

const OAHU_CAPABILITIES = [
  {
    title: 'Private Chef Dinners',
    price: '$125–$190/guest',
    unit: 'groceries included',
    desc: '3 to 5 coursed dining cooked in your residence, estate, or suite kitchen. Plated and cleared.',
    href: '/oahu/private-chef',
    tag: 'Signature Band',
  },
  {
    title: 'Family-Style Feasts',
    price: '$125–$175/guest',
    unit: 'groceries included',
    desc: 'Communal passed platters: local catch, Hawaiian sea salt ribeye, and seasonal island sides.',
    href: '/oahu/menus/family-style',
    tag: 'Shared Table',
  },
  {
    title: 'Fine Dining & Chef’s Table',
    price: '$190–$275+/guest',
    unit: 'bespoke menu',
    desc: 'Sashimi-grade Pier 38 auction seafood, caviar, wagyu, and multi-course pairing formats.',
    href: '/oahu/occasions/fine-dining',
    tag: 'Premium Tier',
  },
  {
    title: 'Live-Flame BBQ Catering',
    price: 'From $110/guest',
    unit: 'chef + grill',
    desc: 'Outdoor lanai and lawn grilling: fresh Pacific catch, kalbi ribs, island sweet potatoes, tropical slaws.',
    href: '/oahu/services/bbq-catering',
    tag: 'Outdoor Dining',
  },
  {
    title: 'Stay Chef (Multi-Day)',
    price: 'From $850/day',
    unit: '+ groceries at cost',
    desc: 'Dedicated chef in residence: breakfast spreads, beach lunch packs, and sunset dinners. Receipts attached.',
    href: '/oahu/stay-chef',
    tag: 'Villa Residency',
  },
  {
    title: 'Weddings & Receptions',
    price: 'From $150/guest',
    unit: '+ staffed service',
    desc: 'Rehearsal dinners, estate receptions, and farewell brunches. Full rental and staffing coordination.',
    href: '/oahu/weddings',
    tag: '10–75 Guests',
  },
  {
    title: 'Corporate & Off-Sites',
    price: 'Custom quote',
    unit: 'dedicated brief',
    desc: 'Board dinners, executive summits, and convention off-sites. High-rise COIs and dock load-ins covered.',
    href: '/oahu/corporate',
    tag: 'B2B & Summits',
  },
  {
    title: 'Kamaʻāina Weekly Line',
    price: 'From $300/week',
    unit: '+ groceries at cost',
    desc: 'Standing cook day for resident Oʻahu households: 4–5 fresh dinners prepped and stored in your fridge.',
    href: '/oahu/services/personal-chef-weekly',
    tag: 'Residents Only',
  },
];

const PACKAGES = [
  {
    title: 'Kahala Estate Plated Dinner',
    tag: 'Private Chef · 10 Guests',
    price: 'From $1,650 all-inclusive',
    summary: 'A 4-course seated dinner featuring morning Pier 38 yellowfin ahi carpaccio, seared Kona kampachi, Hawaiian sea salt ribeye, and tropical guava mousse.',
    includes: [
      'Dedicated Executive Chef + 1 Server on site (4 hours)',
      'All premium groceries, pantry staples & artisan bread',
      'Individual table course plating & synchronized service',
      'Immaculate kitchen clean, pans hand-washed, surfaces sanitized',
    ],
    idealFor: 'Anniversaries, birthdays, and multi-generational family estate gatherings.',
  },
  {
    title: 'Waikīkī Penthouse Celebration',
    tag: 'In-Suite Dining · 6 Guests',
    price: 'From $990 all-inclusive',
    summary: 'Sunset dinner on the lanai above the Honolulu skyline. Full building logistics handled including property insurance certificate (COI) and service elevator booking.',
    includes: [
      'Complete building COI issuance naming your property manager',
      'Freight elevator window reservation & quiet dock load-in',
      '3-course island menu with fresh catch & tropical fruit',
      'Full cleanup — your suite left spotless',
    ],
    idealFor: 'Ritz-Carlton, Trump Tower, and luxury Waikīkī residential suites.',
  },
  {
    title: 'Kailua Beachfront Lawn BBQ',
    tag: 'Event Catering · 20 Guests',
    price: 'From $2,950 all-inclusive',
    summary: 'Casual luxury on the lawn: live wood-fire grilling of local catch, marinated Big Island beef, sweet Maui onion salads, and roasted purple sweet potatoes.',
    includes: [
      '1 Lead Grill Chef + 1 Service Associate',
      'Outdoor grill station management & passed family platters',
      'Disposable eco-bamboo tableware or coordinated ceramic rentals',
      'Buffet or family-style table setup with full clearing',
    ],
    idealFor: 'Rehearsal dinners, vacation group welcomes, and milestone celebrations.',
  },
  {
    title: 'Ko Olina 7-Day Stay Chef',
    tag: 'Stay Chef Week · 8 Guests',
    price: '$5,950 chef fee + groceries at cost',
    summary: 'Complete culinary residency for a family holiday week in a Ko Olina resort villa: daily chef-prepared breakfasts, poolside lunches, afternoon pupus, and 5-course dinners.',
    includes: [
      'Chef dedicated to your villa for 7 consecutive days',
      'Same-day grocery shopping with original receipts attached (zero markup)',
      'Pre-arrival fridge stocking timed to your flight arrival',
      'Personalized dietary menus (gluten-free, kids, pescatarian)',
    ],
    idealFor: 'Families and executive groups staying in luxury Ko Olina residences.',
  },
];

const PURVEYORS = [
  {
    name: 'Honolulu Fish Auction (Pier 38)',
    role: 'Morning Dock Sourcing',
    desc: 'At 5:30 AM every service morning, our chefs bid directly at the United Fishing Agency dock for line-caught Yellowfin Ahi, Shutome (Swordfish), Mahimahi, and Opah landed by local Hawaiian longline vessels.',
    badge: 'Daily 5:30 AM Bidding',
  },
  {
    name: 'Waimānalo Greens & Herbs',
    role: 'Windward Oʻahu Organic Agriculture',
    desc: 'Harvested under the Koolau mountains less than 24 hours before your dinner: crisp micro-cilantro, edible hibiscus blossoms, baby arugula, and peppery nasturtium that never spend days in cargo transit.',
    badge: 'Same-Day Harvest',
  },
  {
    name: 'Kahuku Farms (North Shore)',
    role: 'Tropical Produce & Citrus',
    desc: 'Grown on the northern coastal plain: sweet strawberry papayas, sun-ripened lilikoi (passionfruit), apple bananas, and organic citrus for our reduction glazes, vinaigrettes, and handcrafted desserts.',
    badge: 'North Shore Organic',
  },
  {
    name: 'Hawaii Local Meat & Game',
    role: 'Pasture-Raised Proteins',
    desc: 'We feature grass-fed beef from Big Island cattle ranches and wild-harvested axis deer venison from Maui Nui — the most sustainable, nutrient-dense red meat in the Pacific archipelago.',
    badge: 'Archipelago Sourced',
  },
];

const RESIDENT_LEADS = [
  {
    name: 'Chef Keanu Santos',
    role: 'Executive Chef — Oʻahu Operations',
    bio: 'Born in Kailua and a graduate of UH Kapiʻolani Culinary Institute of the Pacific. Former chef de partie at top Waikīkī hotel dining rooms and private estate culinary lead for 9 years. Personally handles morning Pier 38 auction buying.',
  },
  {
    name: 'Chef Maya Lin',
    role: 'Senior Sous & Pastry Lead',
    bio: 'Specialist in French-trained Pacific Rim techniques and plant-forward tasting menus. Leads bespoke dessert design, seasonal fruit reductions, and multi-course dietary translation.',
  },
  {
    name: 'Nicole Alana',
    role: 'Oʻahu Logistics & Concierge Director',
    bio: 'Manages building COI approvals, security gate clearances for Kahala and Ko Olina estates, rental deliveries, and freight elevator reservations across Waikīkī residential high-rises.',
  },
];

const CORRIDORS = [
  { name: 'Waikīkī', note: 'In-suite specialists — we handle building COIs and freight-elevator bookings.', travel: 'Base zone', slug: 'locations/waikiki' },
  { name: 'Honolulu', note: 'Metro hub — resident tables and the corporate market, Downtown to Kakaʻako.', travel: 'Base zone', slug: 'locations/honolulu' },
  { name: 'Kahala–Gold Coast', note: 'Estate service and the weekly cook day for resident households.', travel: 'Base zone', slug: 'locations/kahala-gold-coast' },
  { name: 'Ko Olina', note: 'Resort residences with purpose-built chef kitchens; Stay Chef country.', travel: 'Base zone', slug: 'locations/ko-olina' },
  { name: 'Kapolei', note: 'The second city — resident and corporate, no leeward surcharge.', travel: 'Base zone', slug: 'locations/kapolei' },
  { name: 'Kailua–Lanikai', note: 'Windward beachfront estates and 30-day stays.', travel: 'Base zone', slug: 'locations/kailua-lanikai' },
  { name: 'North Shore', note: 'Estate weeks and surf-season tables — 60–90 minutes from town.', travel: 'Travel from $75', slug: 'locations/north-shore' },
  { name: 'Turtle Bay', note: 'Resort villas and cottages at the top of the island.', travel: 'Travel from $75', slug: 'locations/turtle-bay' },
  { name: 'Hawaiʻi Kai', note: 'Marina-side resident market; weekly cook days.', travel: 'Base zone', slug: 'locations/hawaii-kai' },
];

const RATE_ROWS = [
  { label: 'Table', value: '$95–$125', note: 'per guest, groceries included' },
  { label: 'Signature', value: '$125–$190', note: 'per guest, groceries included' },
  { label: 'Premium', value: '$190–$275', note: 'per guest' },
  { label: 'Chef’s table', value: '$275–$400+', note: 'per guest, quoted manually' },
  { label: 'Stay Chef', value: 'from $850/day', note: 'plus groceries at cost' },
  { label: 'Kamaʻāina weekly', value: 'from $300/wk', note: 'plus groceries at cost' },
  { label: 'Server / Sous chef', value: '$55 / $75 /hr', note: 'four-hour floor' },
  { label: 'Travel — North Shore & Turtle Bay', value: 'from $75', note: 'published, itemized' },
];

const STEPS = [
  { n: '01', title: 'Send the quote form', body: 'Five fields, two minutes.' },
  { n: '02', title: 'Get a written quote', body: 'The confirmed total, itemized.' },
  { n: '03', title: '50% deposit locks the date', body: 'Only after you have seen the numbers.' },
  { n: '04', title: 'We cook, we serve, we clean', body: 'Your kitchen, left cleaner than we found it.' },
];

export default function OahuHome() {
  const navigate = useNavigate();
  const [guests, setGuests] = useState('6');
  const [service, setService] = useState('signature');
  const [dates, setDates] = useState('');
  const [area, setArea] = useState('Waikīkī');

  return (
    <>
      <Seo
        title="Private Chef Oʻahu — from $125/guest | myCHEF"
        description="Private chef and staffed catering across Oʻahu. Signature dinners $125–$190 a guest, groceries included. Stay Chef from $850 a day. The written quote is the confirmed total."
        path="/oahu"
        ogImage="/img/oahu/hero-home.jpg"
        jsonLd={[foodServiceLd(), faqLd(HOME_FAQ), breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Oʻahu', path: '/oahu' }])]}
      />

      {/* S2 — Split editorial hero (Oʻahu-only composition; not full-bleed) */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow-site">Private chef Oʻahu — Honolulu · Kahala · Ko Olina · North Shore</p>
            <h1 className="h1-site mt-5" aria-label={H1}>
              {H1.split(' ').map((w, i) => (
                <span key={i} aria-hidden="true" className="word-rise" style={{ '--wr-delay': `${i * 30}ms` } as React.CSSProperties}>
                  {w}{' '}
                </span>
              ))}
            </h1>
            <p className="tabular-site mt-6 text-[17px] text-ink-2">
              Signature dinner {RATES.oahu.coreBand} a guest, groceries included. Stay Chef from $850 a day.
              The written quote is the confirmed total.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              <Link to="/oahu/quote" className="cta-site">Get a written quote</Link>
              <Link to="/oahu/pricing" className="cta-secondary-site">See the rate card →</Link>
            </div>
          </div>
          <SectionReveal className="md:col-span-6">
            <figure className="card-site overflow-hidden">
              <img
                src="/img/oahu/hero-home.jpg"
                alt="A chef’s hands plating a course at a stone island in a penthouse kitchen, the Honolulu city grid at blue hour through floor-to-ceiling glass"
                className="h-full w-full object-cover"
                style={{ aspectRatio: '4/3' }}
                fetchPriority="high"
              />
            </figure>
          </SectionReveal>
        </div>
      </section>

      {/* S3 — Trust strip */}
      <TrustStrip />

      {/* S4 — Full Capability Grid */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Oʻahu Culinary Scope</p>
            <h2 className="h2-site mt-3">From an intimate Waikīkī suite to a 75-guest estate reception.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Every format is led by a resident Oʻahu chef, prepped with morning dock sourcing, and billed to published numbers. Explore our core services:
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OAHU_CAPABILITIES.map((cap, i) => (
              <SectionReveal key={cap.title} delay={i * 30}>
                <Link
                  to={cap.href}
                  className="card-site motion-site group flex h-full flex-col justify-between p-6 transition-all hover:-translate-y-1 hover:border-[#3D5A68]"
                >
                  <div>
                    <span className="rounded bg-accent-site/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-site">
                      {cap.tag}
                    </span>
                    <h3 className="font-display mt-4 text-xl font-medium text-ink group-hover:text-accent-site">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-2">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-line-site pt-4">
                    <p className="font-display text-lg font-semibold text-ink">{cap.price}</p>
                    <p className="text-[11px] text-ink-2">{cap.unit}</p>
                    <span className="link-site mt-3 inline-flex items-center text-xs font-semibold">
                      View details →
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* S5 — Concrete Worked Event Packages */}
      <section className="section-pad rule-t bg-[#F7F5F0]">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Real Pricing Examples</p>
            <h2 className="h2-site mt-3">Transparent event arithmetic. No guessing.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Instead of abstract “starting from” rates, here is what confirmed Oʻahu events actually look like on paper:
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {PACKAGES.map((pkg, i) => (
              <SectionReveal key={pkg.title} delay={i * 40}>
                <div className="card-site flex h-full flex-col justify-between p-7">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-site">
                        {pkg.tag}
                      </span>
                      <span className="tabular-site text-sm font-semibold text-ink">
                        {pkg.price}
                      </span>
                    </div>
                    <h3 className="font-display mt-3 text-2xl font-medium text-ink">
                      {pkg.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-2">
                      {pkg.summary}
                    </p>
                    <div className="mt-5 space-y-2 border-t border-line-site pt-4 text-xs text-ink-2">
                      <p className="font-semibold text-ink uppercase tracking-wider text-[11px]">Included in package:</p>
                      {pkg.includes.map((inc) => (
                        <div key={inc} className="flex items-start gap-2">
                          <span className="text-accent-site font-bold">✓</span>
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 border-t border-line-site pt-4 flex items-center justify-between">
                    <p className="text-[11px] text-ink-2 italic">{pkg.idealFor}</p>
                    <Link to="/oahu/quote" className="link-site text-xs font-semibold whitespace-nowrap">
                      Quote this format →
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* S6 — Sourcing Proof & Purveyors */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <SectionReveal>
                <p className="eyebrow-site">Local Sourcing Standard</p>
                <h2 className="h2-site mt-3">Pier 38 to your plate. 24 hours or less.</h2>
                <p className="measure-site mt-4 text-ink-2">
                  We don’t use wholesale mainland supply distributors when Hawaiian fishermen and organic family farms are right down the road. Every Oʻahu dinner is built on verified archipelago sourcing.
                </p>
                <div className="mt-8 space-y-4">
                  {PURVEYORS.map((p) => (
                    <div key={p.name} className="border-l-2 border-accent-site pl-4">
                      <div className="flex items-center gap-2">
                        <h4 className="font-display text-base font-medium text-ink">{p.name}</h4>
                        <span className="rounded bg-black/5 px-2 py-0.5 text-[10px] font-semibold text-ink-2 uppercase">
                          {p.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-ink-2 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <SectionReveal delay={60}>
                <div className="card-site p-7 bg-[#F1EEE6]">
                  <p className="eyebrow-site">Resident Culinary Leadership</p>
                  <h3 className="font-display mt-2 text-2xl font-medium text-ink">
                    The chefs in your kitchen.
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    Our team isn’t an algorithm or an anonymous contractor marketplace. We are vetted resident culinary professionals who live and cook on Oʻahu year-round.
                  </p>

                  <div className="mt-6 space-y-5">
                    {RESIDENT_LEADS.map((lead) => (
                      <div key={lead.name} className="card-site p-5 bg-white">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h4 className="font-display text-lg font-medium text-ink">{lead.name}</h4>
                          <span className="text-xs font-semibold text-accent-site">{lead.role}</span>
                        </div>
                        <p className="mt-2 text-xs text-ink-2 leading-relaxed">{lead.bio}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* S7 — Corridor directory (text-led) */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Service Corridors</p>
            <h2 className="h2-site mt-2">Where we cook on Oʻahu.</h2>
          </SectionReveal>
          <div className="mt-8">
            {CORRIDORS.map((c, i) => (
              <SectionReveal key={c.slug} delay={Math.min(i, 5) * 40}>
                <Link
                  to={`/oahu/${c.slug}`}
                  className="motion-site group grid grid-cols-[1fr_auto] items-baseline gap-4 border-t border-line-site py-4 hover:border-[#3D5A68] md:grid-cols-[240px_1fr_auto_auto]"
                >
                  <span className="font-display text-lg font-medium">{c.name}</span>
                  <span className="hidden text-sm text-ink-2 md:block">{c.note}</span>
                  <span className="tabular-site text-sm text-ink-2">{c.travel}</span>
                  <span aria-hidden="true" className="text-accent-site">→</span>
                </Link>
              </SectionReveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-2">
            Waikīkī: we handle building COIs and freight-elevator bookings. Travel fees are published — never discovered on the invoice.
          </p>
        </div>
      </section>

      {/* S8 — Pricing band (the page's single dark band) */}
      <section className="band-site section-pad">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <h2 className="h2-site">The Oʻahu rate card.</h2>
            <div className="mt-8">
              <RateTable rows={RATE_ROWS} footnote="Every figure published, every figure honored. Groceries at cost, receipts on request." />
              <FeeStack className="mt-8 opacity-90" />
            </div>
            <div className="mt-10">
              <Link to="/oahu/quote" className="cta-site" style={{ backgroundColor: 'var(--site-cta-ink)', color: 'var(--site-cta-bg)' }}>
                Get a written quote
              </Link>
              <Link to="/oahu/pricing" className="cta-secondary-site ml-5">The full tariff →</Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* S9 — How it works */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <h2 className="h2-site">How it works.</h2>
          </SectionReveal>
          <ol className="mt-10 grid gap-10 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <SectionReveal as="li" key={s.n} delay={i * 60}>
                <span className="font-accent-site block text-[40px] font-light leading-none text-ink-2">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-2">{s.body}</p>
              </SectionReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* S10 — Kamaʻāina band (Oʻahu-exclusive) */}
      <section className="section-pad pt-0">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <div className="card-site overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-10">
                  <p className="eyebrow-site">For residents</p>
                  <h2 className="h2-site mt-3 max-w-2xl">The weekly cook day, from $300 a week plus groceries.</h2>
                  <p className="measure-site mt-4 text-ink-2">
                    One chef, one standing day, a week of dinners cooked in your kitchen. Kahala to Hawaiʻi Kai.
                    Groceries at cost, receipts attached.
                  </p>
                  <Link to="/oahu/services/personal-chef-weekly" className="link-site mt-5 inline-block">
                    The kamaʻāina weekly line →
                  </Link>
                </div>
                <div className="relative min-h-[280px]">
                  <img
                    src="/img/oahu/stay-chef.jpg"
                    alt="A chef working a villa kitchen across a multi-day stay"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* S11 — Group capability */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <SectionReveal>
              <h2 className="h2-site">10–75 guests, staffed.</h2>
              <p className="mt-4 text-ink-2">
                Over 75 is a written exception — quoted, never implied. Servers at $55 an hour,
                sous chefs at $75, four-hour floor, named on the quote.
              </p>
              <Link to="/oahu/catering" className="link-site mt-4 inline-block">Catering capability →</Link>
            </SectionReveal>
            <SectionReveal delay={60}>
              <h2 className="h2-site">Convention window, covered.</h2>
              <p className="mt-4 text-ink-2">
                Convention-displacement dinners and off-site corporate catering through the HCC
                renovation window — COI and load-in handled.
              </p>
              <Link to="/oahu/corporate" className="link-site mt-4 inline-block">Corporate catering →</Link>
            </SectionReveal>
          </div>
          <SectionReveal className="mt-10">
            <figure className="card-site overflow-hidden">
              <img
                src="/img/oahu/corporate.jpg"
                alt="A boardroom-style dinner plated in a Honolulu residence"
                loading="lazy"
                className="w-full object-cover"
                style={{ aspectRatio: '16/9' }}
              />
            </figure>
          </SectionReveal>
        </div>
      </section>

      {/* S12 — Oʻahu FAQ */}
      <section className="section-pad rule-t bg-[#F7F5F0]">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Oʻahu Event Operations</p>
            <h2 className="h2-site mt-2 mb-6">Frequently asked questions about Oʻahu dining</h2>
            <FAQAccordion items={HOME_FAQ} />
          </SectionReveal>
        </div>
      </section>

      {/* S10 — Quote block */}
      <section className="section-pad rule-t">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionReveal>
              <h2 className="h2-site">Get a written quote.</h2>
              <p className="mt-4 text-ink-2">
                The button is not “Book now.” You tell us the table; we send a written quote — and that quote is the confirmed total.
              </p>
              <form
                className="card-site mt-8 grid gap-4 p-6 md:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const params = new URLSearchParams({ service, guests, area, dates });
                  navigate(`/oahu/quote?${params.toString()}`);
                }}
              >
                <label className="block">
                  <span className="eyebrow-site mb-2 block">Service</span>
                  <select className="input-site" value={service} onChange={(e) => setService(e.target.value)}>
                    <option value="signature">Signature dinner</option>
                    <option value="date-night">Date Night for two</option>
                    <option value="stay-chef">Stay Chef — multi-day</option>
                    <option value="catering">Catering — staffed event</option>
                    <option value="wedding">Wedding week</option>
                  </select>
                </label>
                <label className="block">
                  <span className="eyebrow-site mb-2 block">Guests</span>
                  <select className="input-site" value={guests} onChange={(e) => setGuests(e.target.value)}>
                    {['2', '4', '6', '8', '10', '12', '20', '30', '50', '75'].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="eyebrow-site mb-2 block">Dates</span>
                  <input
                    className="input-site"
                    type="text"
                    placeholder="e.g. March 14–18"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                  />
                </label>
                <label className="block">
                  <span className="eyebrow-site mb-2 block">Area</span>
                  <select className="input-site" value={area} onChange={(e) => setArea(e.target.value)}>
                    {['Waikīkī', 'Honolulu', 'Kahala', 'Ko Olina', 'Kapolei', 'Kailua / Windward', 'North Shore', 'Turtle Bay', 'Hawaiʻi Kai'].map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </label>
                <div className="flex flex-wrap items-center gap-5 md:col-span-2">
                  <button type="submit" className="cta-site motion-site active:scale-[0.98]">
                    Get a written quote
                  </button>
                  <a
                    href="https://wa.me/971551744849?text=Aloha%20myCHEF%20O%CA%BBahu%20—%20I%27d%20like%20a%20written%20quote."
                    target="_blank"
                    rel="noreferrer"
                    className="cta-secondary-site"
                  >
                    WhatsApp instead →
                  </a>
                </div>
              </form>
            </SectionReveal>
          </div>
          <SectionReveal className="hidden md:col-span-5 md:block" delay={80}>
            <figure className="card-site overflow-hidden">
              <img
                src="/img/oahu/quote-kitchen.jpg"
                alt="A quiet, immaculate modern kitchen with a chef’s mise en place arranged on a stone counter, evening city light through the window"
                className="h-full w-full object-cover"
                style={{ aspectRatio: '4/5' }}
                loading="lazy"
              />
            </figure>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
