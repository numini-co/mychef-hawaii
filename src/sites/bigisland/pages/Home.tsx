/**
 * Big Island homepage (design/home-bigisland.md — 13-section flagship wireframe).
 * Sequence tell: corridor → capabilities → worked packages → ledger →
 * geography → provenance & team → weddings → experience index → how-it-works →
 * FAQ → quote ledger. Basalt default; the light band interrupts with high contrast.
 */
import { Link } from 'react-router';
import { Seo, islandFoodServiceLd, faqLd } from '@/platform/seo';
import { GBP_DESKS } from '@/data/trust-proof';
import { useSite } from '@/platform/IslandProvider';
import TrustStrip from '@/components/TrustStrip';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import { MultiIslandCrossSell } from '@/components/CrossHostSell';
import { TrustDeskLinks } from '@/components/TrustDeskLinks';
import { BandQuote, CORRIDOR, EAST, LedgerRow, Mono, HeroPanel, Panel, RATE_ROWS } from './bits';

const HOME_FAQ = [
  {
    q: 'How much is a private chef on the Big Island?',
    a: 'Signature villa dinners run $150–$225 a guest with groceries inside the band; the Entry tier under Signature starts from $110. Date Night starts from $550. Stay Chef runs from $950 a day plus groceries at cost with receipts. The written quote is the confirmed total.',
  },
  {
    q: 'Can you cook inside gated communities like Kūkiʻo, Hualālai, and Kohanaiki?',
    a: 'Yes — access comes through your host or concierge reservation. We handle commercial vendor registration, vehicle gate passes, and required Certificate of Insurance (COI) filings directly with security.',
  },
  {
    q: 'Do you serve Hilo and the east side?',
    a: 'Yes — quoted in writing, never implied. Kona to Hilo is 2.5–3 hours over the Saddle, so east-side service carries transit logistics ($85–$120 travel line). The food and chef rates are identical island-wide.',
  },
  {
    q: 'Are groceries included in Big Island dinners?',
    a: 'On all single-event dinner formats (Signature, Family-Style, BBQ, Chef’s Table), all groceries are 100% included in the quoted rate. On multi-day Stay Chef bookings, groceries are billed at cost with original receipts provided.',
  },
  {
    q: 'What is the service charge and GET tax?',
    a: 'Every written quote includes a separate 20% service charge (operations, equipment, insurance) and Hawaiʻi County General Excise Tax (4.7120%). Gratuity is completely voluntary.',
  },
];

const BIGISLAND_CAPABILITIES = [
  {
    title: 'Kona & Kohala Coast Estate Dinners',
    price: 'From $150 / guest',
    unit: '3–5 coursed dinner · groceries included',
    desc: 'Bespoke multi-course fine dining inside your oceanfront villa along the Kohala gold coast.',
    href: 'private-chef',
    tag: 'Estate Dining',
  },
  {
    title: 'Gated Community Residency',
    price: 'From $950 / day',
    unit: 'Dedicated chef in residence · groceries at cost',
    desc: 'Hualālai, Kūkiʻo, Mauna Kea, and Kohanaiki private estates. Turnkey daily breakfasts, lunches, and sunset dinners.',
    href: 'stay-chef',
    tag: 'Villa Residency',
  },
  {
    title: 'Kona Sunset Lanai Live-Flame BBQ',
    price: 'From $125 / guest',
    unit: 'Chef grill master · passed communal platters',
    desc: 'Live-flame grill station: grilled Kawaihae day-boat catch, glazed Parker Ranch ribs, and tropical farm sides.',
    href: 'catering',
    tag: 'Outdoor Dining',
  },
  {
    title: 'Big Island Oceanfront Weddings',
    price: 'From $160 / guest',
    unit: 'Plated dining or passed canapés + staffing',
    desc: 'Full-service catering for private oceanfront estates and venues under resort food & beverage minimums.',
    href: 'weddings',
    tag: 'Bespoke Wedding',
  },
  {
    title: 'Mauna Kea Film & Expedition Basecamp',
    price: 'Custom Daily Tiers',
    unit: 'Hot field meals & high-altitude provisions',
    desc: 'Turnkey mobile catering for production crews, astronomy teams, and commercial media shoots.',
    href: 'catering',
    tag: 'Production Catering',
  },
  {
    title: 'Stargazing Date Night on the Lava',
    price: 'From $550',
    unit: 'Two guests · candlelit 4-course dinner',
    desc: 'Private chef dedicated to an intimate candlelit dinner on your lava-rock terrace under the Big Island night sky.',
    href: 'services/date-night',
    tag: 'Two Guests',
  },
  {
    title: 'Hāmākua Coast Harvest Feasts',
    price: 'From $145 / guest',
    unit: 'Family-style communal platters',
    desc: 'Communal wooden boards featuring fresh local harvest, aliʻi mushrooms, braised meats, and island greens.',
    href: 'catering',
    tag: 'Communal Style',
  },
  {
    title: 'Extended Multi-Day Vacation Chef',
    price: 'From $950 / day',
    unit: 'Whole stay handled · custom grocery sourcing',
    desc: 'Complete culinary coverage for family gatherings and retreats across Kona, Waikoloa, and Waimea.',
    href: 'stay-chef',
    tag: 'Multi-Day Stay',
  },
];

const PACKAGES = [
  {
    title: 'Kūkiʻo Estate Plated Oceanview Dinner',
    tier: 'Example Package · Signature Fine Dining',
    guests: '8 Guests',
    summary: 'A 4-course sunset dinner in a private gated Kūkiʻo estate overlooking the Kohala Coast.',
    includes: [
      'Private Chef on-site for 4.5 hours with full table service',
      'Course 1: Fresh Kawaihae day-boat ahi sashimi with white truffle ponzu',
      'Course 2: Hāmākua aliʻi mushroom tart with microgreens & herb oil',
      'Course 3: Seared island beef tenderloin or local wild onaga',
      'Course 4: Big Island chocolate lava cake with Kona coffee anglaise',
      'Pristine kitchen restoration and complete post-dinner cleaning',
    ],
    total: '$1,800 estimated',
    note: 'Includes food, chef fee, 20% service, and 4.7120% Hawaiʻi County GET. Gratuity voluntary.',
  },
  {
    title: 'Mauna Lani Lanai Sunset BBQ',
    tier: 'Example Package · Lanai Live-Flame Feast',
    guests: '16 Guests',
    summary: 'An outdoor chef-attended grill evening on a resort residence lānai for family & friends.',
    includes: [
      'Lead Chef attended grill station plus 1 service associate',
      'Grilled catch of the day with charred lime and herb butter',
      'Kalbi-marinated island beef skewers & glazed pork ribs',
      'Waimea roasted sweet corn & island greens with lilikoʻi dressing',
      'Complete table clearing and dishwashing service',
    ],
    total: '$2,650 estimated',
    note: 'Includes chef, server, all food, 20% service, and tax. Zero unexpected additions.',
  },
  {
    title: 'Kohala Coast 4-Day Villa Residency',
    tier: 'Example Package · Stay Chef Multi-Day',
    guests: '6 Guests (4 Days)',
    summary: 'Full private chef coverage for an extended multi-day luxury stay on the Kohala Coast.',
    includes: [
      'Dedicated private chef stationed in your estate kitchen every day',
      'Daily morning tropical breakfasts, poolside lunch, and coursed evening dinner',
      'Direct sourcing runs to Waimea farmers markets and local butcheries',
      'Bespoke menus matching all dietary preferences (keto, vegan, pescatarian)',
      'Pantry stocking, snack setups, and continuous kitchen cleanliness',
    ],
    total: '$4,250 chef fee + groceries at cost',
    note: 'Chef fee $950/day (4 days) + 20% service + GET. Groceries billed with original receipts.',
  },
  {
    title: 'Waikoloa Family Reunion Gathering',
    tier: 'Example Package · Communal Celebration',
    guests: '28 Guests',
    summary: 'An abundant buffet and passed canapé celebration for a multi-generational family reunion.',
    includes: [
      'Lead Chef plus 2 service associates for 4 hours',
      'Passed welcome pūpū: poke cones & grilled chicken satay',
      'Buffet feast: roasted island pork, grilled mahimahi, coconut rice, and seasonal vegetables',
      'Dessert table: Hawaiian fruit pavlova & warm bread pudding',
      'Tableware clearing, bar glassware support, and kitchen sanitization',
    ],
    total: '$4,350 estimated',
    note: 'Includes all chef labor, service staffing, groceries, 20% service, and county tax.',
  },
];

const PURVEYORS = [
  {
    name: 'Kawaihae & Honokōhau Day-Boat Landings',
    role: 'Deep Ocean Pacific Catch',
    desc: 'Ahi, mahimahi, ono, and deep-water onaga hooked by licensed local fishermen on day-boats out of Kawaihae and Honokōhau harbors. Sourced fresh the morning of service.',
    badge: 'Day-Boat Fresh Catch',
  },
  {
    name: 'Parker Ranch & Island Cattle Co.',
    role: 'High-Country Grass-Fed Beef',
    desc: 'Raised on the volcanic foothills of Mauna Kea. Free-roaming pasture-raised cattle produce exceptionally tender, rich, and ethical Hawaiian beef.',
    badge: '100% Pasture-Raised Beef',
  },
  {
    name: 'Hāmākua Heritage Farm',
    role: 'Specialty Volcano Mushrooms & Produce',
    desc: 'Cultivated in the misty rainforests of the Hāmākua Coast. Premium aliʻi, shiitake, and oyster mushrooms, alongside fresh local ginger and sweet heart of palm.',
    badge: 'Rainforest Organics',
  },
  {
    name: 'Kona Coffee Belt Roasters & Big Island Bees',
    role: 'Single-Estate Roasts & Organic Honey',
    desc: 'Single-origin Arabica coffee grown in volcanic shade at 2,000 feet, paired with certified organic lehua and macadamia nut blossom honey from Captain Cook.',
    badge: 'Volcanic Single-Estate',
  },
];

const RESIDENT_LEADS = [
  {
    name: 'Hawaiʻi Island Culinary Brigade',
    role: 'Vetted Big Island Private Chefs',
    bio: 'Experienced resident private chefs specializing in Kohala Coast luxury compound dining, open-fire live grilling, and local ranch-to-table cuisine from Waimea to Kona.',
  },
  {
    name: 'Big Island Logistics & Gated Access Desk',
    role: 'Estate Clearance & Inter-District Coordination',
    bio: 'Coordinates gated community access protocols (Kūkiʻo, Hualālai, Kohanaiki, Mauna Lani), vendor insurance certificates, and inter-district travel schedules across both coasts.',
  },
];

const PANELS = [
  { label: 'VILLA DINNER', line: 'Coursed, in your kitchen, kitchen left clean.', price: 'FROM $150/GUEST', img: '/img/bigisland/panel-villa-dinner.jpg', alt: 'A plated course on dark stone at night under a single practical light', to: 'private-chef' },
  { label: 'STAY CHEF', line: 'One chef, your kitchen, the whole week.', price: 'FROM $950/DAY', img: '/img/bigisland/panel-stay-chef.jpg', alt: 'A villa kitchen at dawn with black counters in hard side light', to: 'stay-chef' },
  { label: 'DATE NIGHT', line: 'Two seats, the sunset, nobody else.', price: 'FROM $550', img: '/img/bigisland/panel-date-night.jpg', alt: 'Two plates on a dark basalt table with a single candle', to: 'services/date-night' },
  { label: 'WEDDING WEEK', line: 'Five meals, one crew, one written quote.', price: 'FROM $150/GUEST + STAFFING', img: '/img/bigisland/panel-wedding.jpg', alt: 'A long reception table at night lit by candles on a lava-rock estate', to: 'weddings' },
] as const;

export default function BigIslandHome() {
  const { link } = useSite();
  return (
    <>
      <Seo
        title="Private Chef Big Island — Kona–Kohala & Gated Estates | myCHEF"
        description="Private chef service on Hawaiʻi Island, Kona–Kohala first. Villa dinners from $150/guest, Stay Chef from $950/day."
        path="/bigisland"
        ogImage="/img/bigisland/hero-home.webp"
        jsonLd={[
          ...islandFoodServiceLd('bigisland', {
            name: 'myCHEF Big Island',
            description:
              'Private chef service on Hawaiʻi Island, Kona–Kohala first. Villa dinners from $150/guest, Stay Chef from $950/day.',
            sameAs: [GBP_DESKS.bigisland.mapsUrl],
          }),
          faqLd(HOME_FAQ),
        ]}
      />

      {/* S2 — Hero: the image carries the headline, the price and the way in */}
      <HeroPanel
        src="/img/bigisland/hero-home.jpg"
        alt="A private chef finishing a coursed dinner on a modern lava-stone estate terrace, Kona sunset in the background"
        eyebrow="Private chef · Hawaiʻi Island"
        title="Private chef, Big Island."
      >
        <p className="measure-site mt-6 text-ink-2">
          <Link to={link('locations')} className="link-site">
            Kona–Kohala
          </Link>{' '}
          first. Villa dinners $150–$225 a guest, Entry from $110 under Signature. Stay Chef from $950 a day. The written
          quote is the confirmed total.
        </p>
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Link to={link('quote')} className="cta-site">
            Get a written quote
          </Link>
          <Link
            to="/calculator?island=bigisland"
            className="cta-ghost-site"
            style={{ color: '#FBF3E8', borderColor: 'rgba(251,243,232,0.6)', backgroundColor: 'rgba(0,0,0,0.3)' }}
          >
            Big Island Price Calculator ⚡
          </Link>
          <Link to={link('pricing')} className="cta-secondary-site">
            The rate card →
          </Link>
        </div>
      </HeroPanel>

      {/* S3 — Trust strip, mono hairline rows on basalt */}
      <div className="font-accent-site text-[12px] uppercase tracking-[0.12em] text-ink-2">
        <TrustStrip />
      </div>

      {/* Full Capability Grid */}
      <section className="section-pad mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Mono className="text-[11px] text-ink-2">HAWAIʻI ISLAND CAPABILITIES</Mono>
          <h2 className="h2-site mt-3">What we cook on the Big Island</h2>
          <p className="mt-4 text-ink-2">
            From oceanfront estate dinners along the Kohala Coast to private compound stays in Kūkiʻo and Hualālai. All dinner pricing includes chef on-site cooking, fresh grocery shopping, and complete kitchen cleanup.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BIGISLAND_CAPABILITIES.map((cap, i) => (
            <SectionReveal key={cap.title} delay={i * 80}>
              <div className="card-site flex h-full flex-col justify-between p-6 bg-white border border-line-site hover:border-accent-site transition-colors">
                <div>
                  <span className="text-[10px] font-semibold tracking-wider text-accent-site uppercase">
                    {cap.tag}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink mt-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-ink-2 mt-2 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-line-site">
                  <p className="font-display text-sm font-bold text-ink">{cap.price}</p>
                  <p className="text-[11px] text-ink-2 mt-0.5">{cap.unit}</p>
                  <Link
                    to={link(cap.href)}
                    className="mt-3 inline-block text-xs font-semibold text-accent-site hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Example Event Packages */}
      <section className="section-pad rule-t bg-[#1C1A17] text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <Mono className="text-[11px] text-accent-site">TRANSPARENT ACCOUNTING</Mono>
            <h2 className="h2-site mt-3 text-white">Example Big Island event packages</h2>
            <p className="mt-4 text-white/80 text-sm sm:text-base">
              Representative event formats we coordinate across Kona and Kohala with estimated all-inclusive pricing breakdown.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {PACKAGES.map((pkg, i) => (
              <SectionReveal key={pkg.title} delay={i * 120}>
                <div className="card-site flex h-full flex-col justify-between p-7 bg-[#23201A] shadow-sm border border-white/10 text-white">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-accent-site uppercase tracking-wider">
                        {pkg.tier}
                      </span>
                      <span className="font-display text-sm font-semibold text-white/90">
                        {pkg.guests}
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
                      <span className="text-xs uppercase tracking-wider text-white/60 font-medium">Estimated Investment</span>
                      <span className="font-display text-xl font-bold text-accent-site">{pkg.total}</span>
                    </div>
                    <p className="text-[11px] text-white/60 mt-1 leading-relaxed">{pkg.note}</p>
                    <div className="mt-4 flex gap-3">
                      <Link
                        to={link(`quote?service=signature&package=${encodeURIComponent(pkg.title)}`)}
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

          <div className="mt-10 text-center">
            <Link
              to="/calculator?island=bigisland"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-accent-site"
            >
              <span>Need custom dates or format? Use our Live Big Island Calculator</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* S4 — Corridor band: mono field-data index */}
      <section className="section-pad" aria-label="Service corridor">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="h2-site">The corridor.</h2>
          <div className="mt-10 grid gap-x-16 md:grid-cols-2">
            <div>
              <Mono className="text-[11px] text-ink-2">WEST — KONA–KOHALA · BASE ZONE</Mono>
              <div className="mt-4">
                {CORRIDOR.map((c) => (
                  <LedgerRow key={c.name} label={`${c.tag} — ${c.name}`} value={c.meta} to={link(c.to)} />
                ))}
                <div className="rule-t" />
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <Mono className="text-[11px] text-ink-2">EAST — ITS OWN WRITTEN QUOTE</Mono>
              <div className="mt-4">
                {EAST.map((c) => (
                  <LedgerRow key={c.name} label={`${c.tag} — ${c.name}`} value={c.meta} to={link(c.to)} />
                ))}
                <div className="rule-t" />
              </div>
              <p className="mt-6 max-w-md text-sm text-ink-2">
                Hualālai, Kukio, Kohanaiki: access comes through your host or concierge. We come with the
                referral and commercial vendor permits.
              </p>
            </div>
          </div>
          <Panel
            src="/img/bigisland/corridor-kona.jpg"
            alt="Low horizontal resort architecture against a cooled lava field at dusk on the Kona coast"
            className="mt-16"
          />
        </div>
      </section>

      {/* Local Purveyors & Resident Leadership */}
      <section className="section-pad rule-t mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Mono className="text-[11px] text-ink-2">LOCAL PROVENANCE</Mono>
          <h2 className="h2-site mt-3">Volcanic soil, open ocean</h2>
          <p className="mt-4 text-ink-2">
            We partner directly with Big Island farms, day-boat fishermen, and historic cattle ranches.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PURVEYORS.map((p, i) => (
            <SectionReveal key={p.name} delay={i * 100}>
              <div className="card-site h-full p-6 bg-white border border-line-site">
                <span className="rounded bg-accent-site/10 px-2 py-0.5 text-[10px] font-semibold text-accent-site uppercase tracking-wider">
                  {p.badge}
                </span>
                <h3 className="font-display text-lg font-semibold text-ink mt-3">
                  {p.name}
                </h3>
                <p className="text-xs font-medium text-accent-site mt-1">{p.role}</p>
                <p className="text-xs text-ink-2 mt-3 leading-relaxed">{p.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Resident Chefs */}
        <div className="mt-16 rounded-xl border border-line-site bg-[#F7F5F0] p-8 sm:p-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-accent-site uppercase tracking-wider">Resident Culinary Team</span>
            <h3 className="font-display text-2xl font-semibold text-ink mt-2">Big Island culinary leadership</h3>
            <p className="text-xs sm:text-sm text-ink-2 mt-2">
              Our chefs and service leads live on Hawaiʻi Island, know the microclimates between Kona and Waimea, and manage gated community security logistics seamlessly.
            </p>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {RESIDENT_LEADS.map((lead) => (
              <div key={lead.name} className="border-l-2 border-accent-site pl-4">
                <p className="font-display text-lg font-semibold text-ink">{lead.name}</p>
                <p className="text-xs font-medium text-accent-site mt-0.5">{lead.role}</p>
                <p className="text-xs text-ink-2 mt-2 leading-relaxed">{lead.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5 — The rate card */}
      <section className="band-site" aria-label="Rate card">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <h2 className="h2-site">The rate card.</h2>
          <div className="mt-10 grid gap-x-16 gap-y-4 md:grid-cols-2">
            {RATE_ROWS.map((r) => (
              <LedgerRow key={r.label} label={r.label} value={r.value} />
            ))}
          </div>
          <div className="rule-t mt-4" />
          <p className="mt-6 max-w-xl text-sm text-ink-2">
            Groceries inside the per-guest band. Receipts on request. 20% service and Hawaiʻi GET up to
            4.7120% always on their own lines.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link to={link('pricing')} className="cta-site">
              The full rate card
            </Link>
            <Link to={link('pricing/travel-zones')} className="cta-secondary-site">
              Travel zones →
            </Link>
          </div>
        </div>
      </section>

      {/* S6 — Geography honesty panel */}
      <section className="section-pad" aria-label="Geography">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="h2-site">4,028 square miles.</h2>
          <p className="measure-site mt-8 text-ink-2">
            Kona to Hilo is 2.5–3 hours over the Saddle. East-side service — Hilo, Volcano, Waimea — is its
            own written quote, never implied. We would rather tell you that here than surprise you in one.
          </p>
          <div className="mt-10 space-y-0">
            <LedgerRow label="WHALE SEASON" value="DEC → APR" />
            <LedgerRow label="IRONMAN WORLD CHAMPIONSHIP" value="OCT" />
            <LedgerRow label="MERRIE MONARCH" value="SPRING · HILO" />
            <div className="rule-t" />
          </div>
          <Link to={link('guides/kona-hilo-logistics')} className="link-site mt-8 inline-block">
            The Kona–Hilo logistics guide →
          </Link>
        </div>
      </section>

      {/* S7 — Wedding & event band */}
      <section className="section-pad rule-t" aria-label="Weddings">
        <div className="mx-auto max-w-6xl px-6">
          <Mono className="text-[11px] text-ink-2">WEDDINGS</Mono>
          <h3 className="h2-site mt-4">The wedding week, under the resort minimums.</h3>
          <p className="measure-site mt-6 text-ink-2">
            From $150 a guest + staffing. Resort F&amp;B minimums run $7,500–$15,000 per event with 23–25%
            service charges. Our service charge is 20%, on its own line.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link to={link('weddings/wedding-week')} className="link-site">
              The wedding week →
            </Link>
            <Link to={link('compare/resort-wedding-vs-estate')} className="link-site">
              Resort vs estate, the math →
            </Link>
          </div>
        </div>
      </section>

      {/* S8 — Experience index */}
      <section aria-label="Experiences">
        {PANELS.map((p) => (
          <SectionReveal key={p.label}>
            <Link to={link(p.to)} className="group block" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Panel src={p.img} alt={p.alt} />
              <div className="rule-t flex flex-wrap items-baseline gap-x-8 gap-y-2 px-6 py-5 transition-colors duration-100 group-hover:border-[var(--site-accent)]">
                <Mono className="text-[12px]">{p.label}</Mono>
                <span className="text-sm text-ink-2">{p.line}</span>
                <Mono className="ml-auto text-[12px] text-ink-2">{p.price}</Mono>
              </div>
            </Link>
          </SectionReveal>
        ))}
      </section>

      {/* S9 — How it works */}
      <section className="section-pad" aria-label="How it works">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site">How it works.</h2>
          <ol className="mt-12 space-y-10">
            {[
              'Six steps, two minutes.',
              'Written quote — the confirmed total.',
              '50% deposit locks the date.',
              'We cook. We clean. We go.',
            ].map((step, i) => (
              <li key={step} className="flex items-baseline gap-8">
                <Mono className="text-[13px] text-ink-2">{String(i + 1).padStart(2, '0')}</Mono>
                <span className="font-display text-2xl md:text-3xl" style={{ letterSpacing: 'var(--site-display-tracking)' }}>
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TrustDeskLinks accentIsland="bigisland" className="mt-10 mb-4" />
      <MultiIslandCrossSell />

      {/* FAQ Accordion */}
      <section className="section-pad rule-t bg-[#F7F5F0]">
        <div className="mx-auto max-w-3xl px-6">
          <SectionReveal>
            <Mono className="text-[11px] text-accent-site">BIG ISLAND LOGISTICS</Mono>
            <h2 className="h2-site mt-3 mb-8">Frequently asked questions</h2>
            <FAQAccordion items={HOME_FAQ} />
          </SectionReveal>
        </div>
      </section>

      {/* S10 — Quote block: second light band */}
      <BandQuote />
    </>
  );
}
