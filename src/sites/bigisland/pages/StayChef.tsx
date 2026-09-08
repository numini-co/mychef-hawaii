/**
 * /bigisland/stay-chef — Big Island Long-Stay & Estate Residency Flagship:
 * "Private chef residency across Kona–Kohala resort compounds and private estates."
 * Gated communities (Kūkiʻo, Hualālai, Kohanaiki, Mauna Lani), open-fire grilling,
 * geographic distance transparency, and published tariff numbers.
 */
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { Seo, faqLd, serviceLd, breadcrumbLd } from '@/platform/seo';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import { BandQuote, HeroPanel, LedgerRow, Mono } from './bits';

const H1 = 'A dedicated chef for your Big Island stay.';

const GATED_COMMUNITIES = [
  {
    name: 'Kūkiʻo & Maniniʻōwali',
    note: 'Ultra-private oceanfront compounds. Gate access credentials, kitchen walk-throughs, and staff clearance coordinated with property concierges.',
  },
  {
    name: 'Hualālai Resort & Four Seasons Estates',
    note: 'Resort villa chef kitchens with commercial hoods and outdoor grills. Seamless service timed around golf rounds and ocean excursions.',
  },
  {
    name: 'Kohanaiki',
    note: 'Custom modern residences built on ancient lava flows. Full pantry stocking, sunset cocktail pupus, and private lanai dining.',
  },
  {
    name: 'Mauna Lani & Mauna Kea Resort Residences',
    note: 'Cape residences, Pauoa Beach estates, and oceanfront bluff villas. Open-fire live grilling and coursed family dining.',
  },
];

const GEOGRAPHY_ZONES = [
  {
    zone: 'Kona–Kohala Coast (Core Zone)',
    travel: 'Base Zone ($0 Travel)',
    detail: 'Kailua-Kona to Kawaihae: Keauhou, Hualālai, Kūkiʻo, Waikoloa Beach, Mauna Lani, and Mauna Kea.',
  },
  {
    zone: 'Waimea / Kamuela Upcountry',
    travel: 'Travel from $65 / day',
    detail: 'Historic ranch lands, cool high-country elevation, and immediate access to Parker Ranch grass-fed beef.',
  },
  {
    zone: 'East Side: Hilo & Hāmākua Coast',
    travel: 'Quoted at Inquiry (2.5–3 hrs over Saddle)',
    detail: 'Rainforest estates, waterfall retreats, and botanical compounds. Extended travel time transparently itemized.',
  },
  {
    zone: 'Volcano Village & South Point',
    travel: 'Quoted at Inquiry',
    detail: 'High-elevation volcanic rainforest retreats. Multi-day residencies require minimum 3 consecutive days.',
  },
];

const SCHEDULES = [
  {
    title: 'Morning Fuel & Lānai Breakfast',
    desc: 'Waimea pasture eggs, tropical fruit platters, macadamia nut pancakes, and freshly ground 100% Kona estate coffee served on the ocean terrace.',
  },
  {
    title: 'Poolside Lunches & Adventure Coolers',
    desc: 'Chilled Kawaihae day-boat ahi poke bowls, crisp Upcountry farm salads, and packed coolers with refreshments for beach outings.',
  },
  {
    title: 'Live-Flame Grilling & Sunset Dinners',
    desc: 'Open-fire grilling of local island beef, grilled Pacific catch with herb chimichurri, roasted Waimea sweet corn, and Kona coffee chocolate lava cakes.',
  },
];

const PACKAGES = [
  {
    title: 'Kohala Coast 4-Day Villa Residency',
    tag: 'Example Package · 6 Guests · 4 Days',
    price: '$4,250 chef fee + groceries at cost',
    summary: 'Full private chef coverage for an extended luxury stay on the Kohala Coast.',
    includes: [
      'Dedicated private chef stationed in your estate kitchen every day ($950/day)',
      'Daily morning tropical breakfasts, poolside lunch, and coursed evening dinner',
      'Direct sourcing runs to Waimea farmers markets and local butcheries',
      'Bespoke menus matching all dietary preferences (keto, vegan, pescatarian)',
      'Pantry stocking, snack setups, and continuous kitchen cleanliness',
    ],
    idealFor: 'Families and executive groups staying in Kūkiʻo, Mauna Lani, or Hualālai.',
  },
  {
    title: 'Kona Oceanfront 7-Day Compound Stay',
    tag: 'Example Package · 10 Guests · 7 Days',
    price: '$6,650 chef fee + groceries at cost',
    summary: 'Complete multi-meal management for an extended family vacation week.',
    includes: [
      'Chef dedicated to your villa for 7 consecutive days',
      'Full breakfasts, light midday lunches, afternoon refreshments, and dinners',
      'Pre-arrival fridge stocking and grocery shopping with receipts at 0% markup',
      'Full kitchen restoration and sanitization after each meal',
    ],
    idealFor: 'Multi-family gatherings, golf trips, and milestone celebrations.',
  },
];

const FAQ = [
  {
    q: 'How much does Stay Chef on the Big Island cost?',
    a: 'The Stay Chef day rate is $950 a day. Groceries are passed through directly at cost with receipts. The 20% service charge and Hawaiʻi County GET (4.7120%) appear on their own lines. Staffing beyond the chef is quoted at $55/hr for servers.',
  },
  {
    q: 'How do you handle gate access in Kūkiʻo, Hualālai, and Kohanaiki?',
    a: 'We coordinate entry credentials directly with your host, property manager, or security office prior to the date. We arrive in professional attire with proper identification and vendor documentation.',
  },
  {
    q: 'Can the chef do live-flame grilling on our lanai?',
    a: 'Yes. Most luxury Big Island villas feature outdoor gas or wood-fired grills. Our chefs specialize in live-flame cookery of local pasture beef, fresh catch, and charred island produce.',
  },
  {
    q: 'Do you cook in Hilo, Waimea, or Volcano?',
    a: 'Yes. Kona–Kohala is our base zone ($0 travel fee). Waimea carries a modest $65 travel line. Hilo and Volcano require crossing the Saddle (2.5–3 hours) and are quoted with transparent travel lines.',
  },
  {
    q: 'Does the chef sleep in our villa?',
    a: 'No. Your chef arrives before breakfast service and departs after dinner is finished, dishes are cleaned, and surfaces are sanitized. Your estate remains completely private overnight.',
  },
];

export default function BigIslandStayChef() {
  const { link } = useSite();
  return (
    <>
      <Seo
        title="Stay Chef Big Island — Private Chef for Your Whole Stay from $950/Day | myCHEF"
        description="Private chef daily residency across the Big Island: Kona, Kohala Coast, Kūkiʻo, Hualālai, and Mauna Lani. From $950/day plus groceries at cost with receipts. Open-fire grilling and estate dining."
        path={link('stay-chef')}
        ogImage="/img/bigisland/panel-stay-chef.jpg"
        jsonLd={[
          serviceLd('Stay Chef Big Island', 'Dedicated multi-day private chef culinary residency across Kona and Kohala Coast estates.', link('stay-chef'), 'Big Island'),
          faqLd(FAQ),
          breadcrumbLd([
            { name: 'Big Island', path: link('') },
            { name: 'Stay Chef', path: link('stay-chef') },
          ]),
        ]}
      />

      {/* Hero */}
      <HeroPanel
        src="/img/bigisland/panel-stay-chef.jpg"
        alt="Our chef working through the villa kitchen during a multi-meal family stay on the Kohala Coast"
        eyebrow="Stay Chef · Hawaiʻi Island"
        title={H1}
      >
        <p className="measure-site mt-6 text-ink-2">
          One dedicated chef stationed in your villa kitchen every day. Breakfast on the basalt terrace, chilled beach-day coolers, afternoon pupus, and open-fire dinners cooked around your schedule.
        </p>
        <p className="tabular-site mt-5 text-sm text-ink-2">
          From $950 a day · Groceries at cost with original receipts · Written quotes.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link to={link('quote?service=stay-chef')} className="cta-site">
            Get a written quote
          </Link>
          <Link to={link('pricing')} className="cta-secondary-site">
            The rate card →
          </Link>
        </div>
      </HeroPanel>

      {/* Gated Communities */}
      <section className="section-pad mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Mono className="text-[11px] text-ink-2">GATED COMMUNITY PROTOCOL</Mono>
          <h2 className="h2-site mt-3">Discreet execution across Kohala gated estates.</h2>
          <p className="mt-4 text-ink-2">
            Private properties across the Gold Coast operate under strict security and noise protocols. We coordinate clearances and vendor guidelines before arrival:
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {GATED_COMMUNITIES.map((c) => (
            <div key={c.name} className="card-site p-6 bg-white border border-line-site">
              <h3 className="font-display text-lg font-semibold text-ink">{c.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-2">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* S2 — Daily Schedule Cadence */}
      <section className="section-pad rule-t bg-[#1C1A17] text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <Mono className="text-[11px] text-accent-site">DAILY CULINARY RHYTHM</Mono>
            <h2 className="h2-site mt-3 text-white">How a Big Island stay unfolds.</h2>
            <p className="mt-4 text-white/80">
              Live-flame cookery, pasture-raised beef, and deep-ocean catch tailored to your vacation schedule:
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SCHEDULES.map((s) => (
              <div key={s.title} className="card-site p-6 bg-[#23201A] border border-white/10 text-white">
                <h3 className="font-display text-lg font-medium text-white">{s.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Logistics & Distances */}
      <section className="section-pad mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Mono className="text-[11px] text-ink-2">GEOGRAPHIC LOGISTICS</Mono>
          <h2 className="h2-site mt-3">Distance transparency across 4,000 square miles.</h2>
          <p className="mt-4 text-ink-2">
            The Big Island is larger than all other Hawaiian islands combined. We publish our travel boundaries so there are never unexpected invoice surprises:
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {GEOGRAPHY_ZONES.map((z) => (
            <div key={z.zone} className="card-site p-6 bg-[#FAF7F2] border border-line-site">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-ink">{z.zone}</h3>
                <span className="text-xs font-semibold text-accent-site">{z.travel}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-ink-2">{z.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Example Packages */}
      <section className="section-pad rule-t bg-[#1C1A17] text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <Mono className="text-[11px] text-accent-site">TRANSPARENT ACCOUNTING</Mono>
            <h2 className="h2-site mt-3 text-white">Example Big Island Stay Chef packages.</h2>
            <p className="mt-4 text-white/80">
              Representative multi-day budgets. All written quotes itemize exact chef days, staffing, and fee stack:
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {PACKAGES.map((pkg, i) => (
              <SectionReveal key={pkg.title} delay={i * 120}>
                <div className="card-site flex h-full flex-col justify-between p-7 bg-[#23201A] border border-white/10 text-white">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-accent-site uppercase tracking-wider">
                        {pkg.tag}
                      </span>
                      <span className="font-display text-sm font-semibold text-white/90">
                        {pkg.price}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-white mt-4">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-white/70 mt-2">{pkg.summary}</p>

                    <div className="mt-6 border-t border-white/10 pt-4">
                      <p className="text-xs font-semibold text-white uppercase tracking-wider">Inclusions:</p>
                      <ul className="mt-3 space-y-2 text-xs text-white/80">
                        {pkg.includes.map((inc) => (
                          <li key={inc} className="flex items-start gap-2">
                            <span className="text-accent-site font-bold">✓</span>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-5 bg-[#181613] -mx-7 -mb-7 p-6 rounded-b-lg">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs uppercase tracking-wider text-white/60 font-medium italic">{pkg.idealFor}</span>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <Link
                        to={link(`quote?service=stay-chef&package=${encodeURIComponent(pkg.title)}`)}
                        className="cta-site w-full text-center text-xs py-2.5 font-semibold"
                        style={{ backgroundColor: '#F7F5F0', color: '#23201A' }}
                      >
                        Request This Package →
                      </Link>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Table */}
      <section className="section-pad mx-auto max-w-4xl px-6">
        <Mono className="text-[11px] text-ink-2">PUBLISHED TARIFF</Mono>
        <h2 className="h2-site mt-3">The Big Island Stay Chef rate card.</h2>
        <div className="mt-8 space-y-0">
          <LedgerRow label="STAY CHEF — DAILY RESIDENCY" value="$950 / DAY" note="Chef labor, menu design, provisioning & daily service" />
          <LedgerRow label="GROCERIES" value="AT COST" note="Store receipts attached with 0% markup" />
          <LedgerRow label="PROFESSIONAL SERVER" value="$55 / HOUR" note="Recommended for 8+ guests (4-hour floor)" />
          <LedgerRow label="SOUS CHEF" value="$75 / HOUR" note="For large groups or dual stations (4-hour floor)" />
          <LedgerRow label="SERVICE CHARGE" value="20.0%" note="Itemized on its own line" />
          <LedgerRow label="HAWAIʻI GET" value="4.7120%" note="County general excise tax on its own line" />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad rule-t bg-[#FAF7F2]">
        <div className="mx-auto max-w-4xl px-6">
          <Mono className="text-[11px] text-ink-2">STAY CHEF FAQ</Mono>
          <h2 className="h2-site mt-2 mb-6">Frequently asked questions about island stays</h2>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <BandQuote
        heading="Book your Big Island chef residency."
        note="Share your dates and gated community location. We provide an itemized written quote with confirmed chef availability."
      />
    </>
  );
}
