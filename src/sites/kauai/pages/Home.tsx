/**
 * /kauai — homepage per home-kauai.md: framed veranda hero → two-shore
 * selector → full capability grid → worked event packages → canopy band
 * (stay chef / retreat) → local purveyors & resident leads → experience cards
 * → pricing-on-mist → bridge callout → how-it-works → weddings teaser →
 * trust strip → FAQ → inquiry band.
 */
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { useCrumbs } from '@/platform/templates/shared';
import { Seo, breadcrumbLd, faqLd, islandFoodServiceLd, serviceLd } from '@/platform/seo';
import { GBP_DESKS } from '@/data/trust-proof';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import { MultiIslandCrossSell } from '@/components/CrossHostSell';
import { TrustDeskLinks } from '@/components/TrustDeskLinks';
import FeeStack from '@/components/FeeStack';
import TrustStrip from '@/components/TrustStrip';
import { RateTable } from '@/components/RateTable';
import { content } from '../content';
import { BridgeCallout, CanopyBand, ExperienceCards, FramedHero, InquiryChip, ProvenanceLine, ShoreSelector } from './kit';

const record = content.find((r) => r.slug === '')!;

const HOME_FAQ = [
  {
    q: 'How much does a private chef cost on Kauaʻi?',
    a: 'Signature dinners run $150–$250 per guest with groceries included; the Table tier is $125–$150. Stay Chef multi-day service starts at $1,100 a day plus groceries at cost. The 20% service charge and Kauaʻi County General Excise Tax (4.7120%) always appear on their own lines.',
  },
  {
    q: 'Which shore should we book — and when?',
    a: 'Summer (June–September) is the North Shore’s prime (Hanalei, Princeville); the South Shore (Poʻipū, Kōloa) carries gentle ocean conditions November through March. We cook across both shores year-round and provide seasonal recommendations during inquiry.',
  },
  {
    q: 'Do you cater wellness and yoga retreats on Kauaʻi?',
    a: 'Yes, it is a Kauaʻi core specialty: 8–30 guests across 3–7 days, one contract, menus labeled by dietary protocol (plant-based, gluten-free, anti-inflammatory, pescatarian) with fully itemized written quotes and published baseline rates.',
  },
  {
    q: 'What happens if the Hanalei bridge closes due to weather?',
    a: 'Far-North service runs on a written contract clause: 72-hour notice, and documented highway closures reschedule rather than forfeit. Your deposit is protected.',
  },
  {
    q: 'Can you cook in our vacation rental or private estate?',
    a: 'Yes. Any private residence, villa, or estate with an operational kitchen in Poʻipū, Princeville, Hanalei, Kapaʻa, Kīlauea, or Kōloa. Base zones carry $0 travel fees; Far North (Hāʻena) carries a modest $95 travel surcharge.',
  },
];

const KAUAI_CAPABILITIES = [
  {
    title: 'North Shore & Poʻipū Estate Dinners',
    price: 'From $150 / guest',
    unit: '3–5 coursed dinner · groceries included',
    desc: 'Intimate fine dining inside your Hanalei beach house or Princeville cliffside estate with fresh island catch.',
    href: 'private-chef',
    tag: 'Estate Dining',
  },
  {
    title: 'Kauaʻi Stay Chef Residency',
    price: 'From $1,100 / day',
    unit: 'Dedicated chef in residence · groceries at cost',
    desc: 'Complete daily culinary management for extended family stays: breakfast on the lānai, picnic lunch, and sunset dinner.',
    href: 'stay-chef',
    tag: 'Villa Residency',
  },
  {
    title: 'Wellness & Yoga Retreat Catering',
    price: 'From $145 / guest / day',
    unit: 'Full board · dietary protocol labeled',
    desc: 'Organic, Ayurvedic, and plant-forward menus crafted specifically for wellness, meditation, and executive retreats.',
    href: 'retreat-catering',
    tag: 'Retreat Table',
  },
  {
    title: 'Garden Island Wedding Receptions',
    price: 'From $175 / guest',
    unit: 'Plated dining or passed canapés + staffing',
    desc: 'Bespoke culinary coordination for private estate weddings, welcome luaus, and morning-after recovery brunches.',
    href: 'weddings',
    tag: 'Bespoke Wedding',
  },
  {
    title: 'Live-Flame Open-Air Lanai BBQ',
    price: 'From $135 / guest',
    unit: 'Chef attended grill · artisanal communal sides',
    desc: 'Fresh Kauaʻi shrimp, teriyaki-glazed Makaweli beef, grilled island pineapple, and local greens passed on wooden platters.',
    href: 'catering',
    tag: 'Outdoor Grill',
  },
  {
    title: 'Romance & Sunset Cliffside Date Night',
    price: 'From $650',
    unit: 'Two guests · candlelit 4-course dining',
    desc: 'A private chef dedicates the entire evening to cooking and serving a bespoke four-course dinner for two on your veranda.',
    href: 'services/date-night',
    tag: 'Two Guests',
  },
  {
    title: 'Family-Style Passed Feasts',
    price: 'From $150 / guest',
    unit: 'Communal luxury · relaxed estate table',
    desc: 'Shared platters of day-boat fish, braised short ribs, and organic North Shore vegetables for lively family gatherings.',
    href: 'catering',
    tag: 'Communal Style',
  },
  {
    title: 'Private Surf & Adventure Provisioning',
    price: 'Custom Daily Tiers',
    unit: 'Packaged cooler packs & ready meals',
    desc: 'Prepared gourmet meals packed for boat charters to the Nāpali Coast, Kalalau trail staging, or surf safaris.',
    href: 'catering',
    tag: 'Adventure Dining',
  },
];

const PACKAGES = [
  {
    title: 'Princeville Bluff Sunset Plated Dinner',
    tier: 'Example Package · Signature Fine Dining',
    guests: '8 Guests',
    summary: 'A 4-course sunset dinner on a Princeville cliffside veranda overlooking the Pacific.',
    includes: [
      'Private Chef on-site for 4.5 hours with full table service',
      'Course 1: Kauaʻi sweet shrimp ceviche with passion fruit & avocado',
      'Course 2: Kīlauea organic mixed greens with citrus vinaigrette & macadamia nuts',
      'Course 3: Pan-roasted wild onaga or Makaweli beef tenderloin with taro purée',
      'Course 4: Warm dark chocolate cake with Hawaiian vanilla cream',
      'Pristine kitchen restoration and sparkling clean counter handover',
    ],
    total: '$1,850 estimated',
    note: 'Includes chef fee, groceries, 20% service, and 4.7120% Kauaʻi County GET. Gratuity voluntary.',
  },
  {
    title: 'Poʻipū Estate Multi-Family Feast',
    tier: 'Example Package · Family-Style Celebration',
    guests: '14 Guests',
    summary: 'An abundant, relaxed passed dinner on a covered South Shore lānai for an extended family.',
    includes: [
      'Lead Chef plus 1 dedicated service associate for 4 hours',
      'Passed welcome pūpū: poke spoons & grilled vegetable skewers',
      'Family-style mains: ginger-scallion catch of the day & guava-glazed baby back ribs',
      'Roasted sweet potatoes, coconut jasmine rice, and seasonal greens',
      'Continuous wine service, plate clearing, and complete kitchen cleanup',
    ],
    total: '$2,780 estimated',
    note: 'Includes chef, server, all food, 20% service, and tax. Zero unexpected additions.',
  },
  {
    title: 'Hanalei River Villa 5-Day Stay Chef',
    tier: 'Example Package · Stay Chef Multi-Day',
    guests: '6 Guests (5 Days)',
    summary: 'Complete culinary management for a private North Shore riverfront compound.',
    includes: [
      'Dedicated private chef stationed in your villa kitchen every day',
      'Daily morning tropical breakfasts, afternoon lunch, and coursed evening dinners',
      'Daily morning farm runs to Hanalei and Kīlauea organic farm stands',
      'Tailored handling of all dietary requests (gluten-free, vegan, pescatarian)',
      'Continual kitchen maintenance and pantry stocking throughout the trip',
    ],
    total: '$5,950 chef fee + groceries at cost',
    note: 'Daily chef fee $1,100/day (5 days) + 20% service + GET. Groceries billed with original receipts.',
  },
  {
    title: 'Kīlauea Plantation Garden Gathering',
    tier: 'Example Package · Estate Reception & Canapés',
    guests: '25 Guests',
    summary: 'An open-air garden party with passed hors d’oeuvres and chef-attended carving stations.',
    includes: [
      'Lead Chef plus 2 service associates for 4 hours',
      '5 passed warm and chilled canapés during sunset cocktail hour',
      'Carving station: whole roast ribeye & grilled island catch with fresh chimichurri',
      'Full tableware clearing and dishwashing service',
    ],
    total: '$4,650 estimated',
    note: 'Includes all chef labor, service staffing, groceries, 20% service, and county tax.',
  },
];

const PURVEYORS = [
  {
    name: 'Kauaʻi Shrimp (Kekaha)',
    role: 'Sweet Salt-Water Harvest',
    desc: 'Sustainably raised in pristine salt-water ponds on the sunny West Side of Kauaʻi. Sweet, firm, and harvested fresh — a signature element of our seafood courses.',
    badge: 'West Side Salt-Water',
  },
  {
    name: 'Makaweli Meat Company',
    role: '100% Pasture-Raised Island Meats',
    desc: 'Free-range cattle and lamb raised on West Kauaʻi pastures without hormones or antibiotics. Exceptionally tender grass-fed beef that anchors our braises and grilled steaks.',
    badge: 'Pasture-Raised Beef',
  },
  {
    name: 'Kīlauea Community Agriculture & Organic Farms',
    role: 'North Shore Organic Produce',
    desc: 'Organically grown baby lettuces, heirloom cherry tomatoes, rainbow chard, and tropical citrus harvested from North Shore volcanic gardens the morning of your dinner.',
    badge: 'North Shore Organic',
  },
  {
    name: 'Kauaʻi Coffee & Hanalei Apiaries',
    role: 'Estate Roasts & Wild Honey',
    desc: 'Single-estate estate coffees from the volcanic hills of Kalāheo paired with unfiltered raw wildflower honey from Hanalei valley hives for our desserts and marinades.',
    badge: 'Estate Single-Origin',
  },
];

const RESIDENT_LEADS = [
  {
    name: 'Garden Island Culinary Brigade',
    role: 'Vetted Kauaʻi Private Chefs',
    bio: 'Experienced resident private chefs living on Kauaʻi, with deep familiarity with both North Shore (Princeville, Hanalei) and South Shore (Poʻipū, Kōloa) kitchen logistics, local fish landings, and organic farm sourcing.',
  },
  {
    name: 'Kauaʻi Concierge & Logistics Desk',
    role: 'Estate Access & Shore Coordination',
    bio: 'Manages estate vendor clearances, road and weather timing around the Hanalei bridge, rental tableware logistics, and guest service staffing across both shores.',
  },
];

const STEPS = [
  { n: '01', t: 'Inquire', b: 'Dates, shore, headcount — two minutes. No account, no card.' },
  { n: '02', t: 'Written quote', b: 'Itemized: menu, staffing, travel, 20% service, GET. The quote is the confirmed total.' },
  { n: '03', t: '50% deposit', b: 'Locks the date — only ever after you’ve read the quote. We never hold a date we can’t crew.' },
  { n: '04', t: 'The table', b: 'We shop that day, cook in your kitchen, serve each course, and leave the kitchen cleaner than we found it.' },
];

export default function KauaiHome() {
  const { link } = useSite();
  const crumbs = useCrumbs(record, content);
  return (
    <article>
      <Seo
        title={record.title}
        description={record.meta.description}
        path={link('')}
        ogImage={record.meta.ogImage}
        jsonLd={[
          breadcrumbLd(crumbs),
          faqLd(HOME_FAQ),
          ...islandFoodServiceLd('kauai', {
            name: 'myCHEF Kauaʻi',
            description:
              'Private chef, catering, Stay Chef, and retreat catering across Kauaʻi — published rates, written quotes, both shores.',
            sameAs: [GBP_DESKS.kauai.mapsUrl],
          }),
          serviceLd(
            'Private Chef Kauaʻi',
            'Private chef, catering, Stay Chef, and retreat catering across Kauaʻi — published rates, written quotes, both shores.',
            link(''),
            'Kauaʻi',
            'kauai',
          ),
        ]}
      />

      <FramedHero
        image="/img/kauai/hero-home.jpg"
        alt="A framed veranda table set for dinner inside a misty Kauaʻi garden estate"
        eyebrow="Private chef · Kauaʻi"
        title="Kauaʻi, cooked in."
        sub="A private chef for your estate, your retreat, your whole stay — both shores. Signature dinners $150–$250 a guest; Stay Chef from $1,100 a day. The written quote is the confirmed total."
      >
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Link to={link('quote')} className="cta-site">
            Begin an inquiry
          </Link>
          <Link
            to="/calculator?island=kauai"
            className="cta-ghost-site"
            style={{ color: 'var(--site-ink)', borderColor: 'var(--site-accent)', backgroundColor: 'rgba(255,255,255,0.7)' }}
          >
            Kauaʻi Price Calculator ⚡
          </Link>
          <Link to={link('pricing')} className="cta-secondary-site">
            See rate card
          </Link>
        </div>
        <div className="mt-6">
          <InquiryChip>Inquiry-first on purpose — we never hold a date we can’t crew.</InquiryChip>
        </div>
      </FramedHero>

      {/* Two-shore selector */}
      <ShoreSelector />

      {/* Full Capability Grid */}
      <section className="section-pad mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="eyebrow-site text-accent-site uppercase tracking-wider text-xs">
            Kauaʻi Culinary Scope
          </p>
          <h2 className="h2-site mt-2">What we cook on the Garden Island</h2>
          <p className="mt-4 text-ink-2">
            From misty North Shore veranda dinners in Hanalei to sunny South Shore estate celebrations in Poʻipū. All dinner pricing includes chef on-site labor, fresh local grocery shopping, and complete kitchen cleanup.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {KAUAI_CAPABILITIES.map((cap, i) => (
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

      {/* Concrete Worked Event Packages */}
      <section className="section-pad rule-t bg-[#F0EBE1]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="eyebrow-site text-accent-site uppercase tracking-wider text-xs">
              Transparent Accounting
            </p>
            <h2 className="h2-site mt-2">Example event packages</h2>
            <p className="mt-4 text-ink-2 text-sm sm:text-base">
              Representative event formats we coordinate regularly across Kauaʻi with itemized pricing estimates.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {PACKAGES.map((pkg, i) => (
              <SectionReveal key={pkg.title} delay={i * 120}>
                <div className="card-site flex h-full flex-col justify-between p-7 bg-white shadow-sm border border-line-site">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-black/5 px-2.5 py-1 text-[11px] font-semibold text-accent-site uppercase tracking-wider">
                        {pkg.tier}
                      </span>
                      <span className="font-display text-sm font-semibold text-ink">
                        {pkg.guests}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-ink mt-4">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-ink-2 mt-2">{pkg.summary}</p>

                    <div className="mt-6 border-t border-line-site pt-4">
                      <p className="text-xs font-semibold text-ink uppercase tracking-wider">Inclusions:</p>
                      <ul className="mt-3 space-y-2 text-xs text-ink-2">
                        {pkg.includes.map((inc) => (
                          <li key={inc} className="flex items-start gap-2">
                            <span className="text-accent-site font-bold">✓</span>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-line-site pt-5 bg-[#FAF7F2] -mx-7 -mb-7 p-6 rounded-b-lg">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs uppercase tracking-wider text-ink-2 font-medium">Estimated Total</span>
                      <span className="font-display text-xl font-bold text-ink">{pkg.total}</span>
                    </div>
                    <p className="text-[11px] text-ink-2 mt-1 leading-relaxed">{pkg.note}</p>
                    <div className="mt-4 flex gap-3">
                      <Link
                        to={link(`quote?service=signature&package=${encodeURIComponent(pkg.title)}`)}
                        className="cta-site w-full text-center text-xs py-2.5 font-semibold"
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
              to="/calculator?island=kauai"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent-site"
            >
              <span>Need custom dates, guest counts, or staffing? Use our Live Kauaʻi Calculator</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Canopy band — the long-stay products */}
      <CanopyBand>
        <div className="grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow-site mb-3">The Kauaʻi stay</p>
            <h2 className="h2-site">The island’s visits run long. So does our chef.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Kauaʻi visits average over a week, and the bluff estates sleep 8–16. Stay Chef puts the same chef in
              your kitchen for the length of the trip — from $1,100 a day, groceries at cost with receipts. The only
              published multi-day chef rate on the island.
            </p>
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
              <Link to={link('stay-chef')} className="cta-site">
                Stay Chef, from $1,100/day
              </Link>
              <Link to={link('pricing/stay-chef-cost')} className="cta-secondary-site">
                The week, worked by the day →
              </Link>
            </div>
          </div>
          <SectionReveal className="md:col-span-5" delay={120}>
            <div className="card-site p-6">
              <p className="eyebrow-site mb-2">The retreat table</p>
              <p className="font-display text-2xl" style={{ fontWeight: 300 }}>
                8–30 guests · 3–7 days · one contract
              </p>
              <p className="mt-3 text-sm text-ink-2">
                Menus labeled by dietary protocol — plant-based, Ayurvedic-fluent, detox — from the island’s only
                published retreat rates.
              </p>
              <p className="mt-4">
                <Link to={link('retreat-catering')} className="link-site">
                  Retreat catering →
                </Link>
              </p>
            </div>
          </SectionReveal>
        </div>
      </CanopyBand>

      {/* Local Kauaʻi Purveyors & Resident Leads */}
      <section className="section-pad mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="eyebrow-site text-accent-site uppercase tracking-wider text-xs">
            Garden Island Provenance
          </p>
          <h2 className="h2-site mt-2">Kauaʻi earth, salt-water harvest</h2>
          <p className="mt-4 text-ink-2">
            We cook directly with Kauaʻi growers, ranchers, and fisheries.
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
        <div className="mt-16 rounded-xl border border-line-site bg-[#F0EBE1] p-8 sm:p-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-accent-site uppercase tracking-wider">On-Island Culinary Team</span>
            <h3 className="font-display text-2xl font-semibold text-ink mt-2">Resident Kauaʻi leadership</h3>
            <p className="text-xs sm:text-sm text-ink-2 mt-2">
              Our culinary leads live on the Garden Island, know estate kitchen layouts from Princeville to Poʻipū, and navigate island weather microclimates daily.
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

      {/* Experience cards */}
      <section className="section-pad rule-t" aria-label="The products">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="h2-site mb-8">Four ways to the table.</h2>
          <ExperienceCards
            cards={[
              {
                title: 'The estate dinner',
                body: 'A coursed evening in your own dining room — $150–$250 a guest, groceries inside the band.',
                image: '/img/kauai/card-estate-dinner.jpg',
                imageAlt: 'A coursed plate on a worn-wood estate table, garden beyond',
                slug: 'private-chef',
              },
              {
                title: 'Stay Chef',
                body: 'The same chef across your whole stay — from $1,100 a day, groceries at cost with receipts.',
                image: '/img/kauai/card-stay-chef.jpg',
                imageAlt: 'An estate kitchen with open windows to deep green',
                slug: 'stay-chef',
              },
              {
                title: 'The retreat table',
                body: 'One contract, every meal of the program — protocol-labeled menus for 8–30.',
                image: '/img/kauai/card-retreat.jpg',
                imageAlt: 'A communal retreat table set among plants in soft light',
                slug: 'retreat-catering',
              },
              {
                title: 'The estate wedding',
                body: 'Welcome dinner through recovery brunch, from $175 a guest plus staffing.',
                image: '/img/kauai/card-wedding.jpg',
                imageAlt: 'A small wedding table in a garden, rain-fresh leaves',
                slug: 'weddings',
              },
            ]}
          />
        </div>
      </section>

      {/* Pricing on mist */}
      <section className="bg-surface-site section-pad" aria-label="The rate card, briefly">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow-site mb-3">Published, like nothing else on the island</p>
              <h2 className="h2-site mb-6">The rate card, briefly.</h2>
              <RateTable
                rows={[
                  { label: 'Table — family-style', value: '$125–$150 / guest' },
                  { label: 'Signature — coursed', value: '$150–$250 / guest' },
                  { label: 'Premium — tasting', value: '$250–$350 / guest' },
                  { label: 'Date Night — for two', value: '$650–$950 fixed' },
                  { label: 'Stay Chef', value: 'from $1,100 / day' },
                  { label: 'Retreat full board', value: '$250–$300+ / person / day' },
                ]}
              />
              <p className="mt-5">
                <Link to={link('pricing')} className="link-site">
                  The full card, with staffing and travel →
                </Link>
              </p>
            </div>
            <div className="md:col-span-5">
              <FeeStack />
              <ProvenanceLine>
                Groceries inside the band on dinners; at cost with receipts on stays. The written quote is the
                confirmed total.
              </ProvenanceLine>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge callout */}
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid md:grid-cols-12">
          <BridgeCallout className="md:col-span-8 md:col-start-3" />
        </div>
      </div>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 pb-16" aria-labelledby="how">
        <h2 id="how" className="h2-site mb-10">From inquiry to first course.</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <SectionReveal key={s.n} delay={i * 90}>
              <p className="font-display text-3xl font-light text-ink-2">{s.n}</p>
              <p className="font-display text-xl mt-2 mb-2">{s.t}</p>
              <p className="text-sm text-ink-2">{s.b}</p>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <div className="rule-t">
        <TrustStrip />
      </div>

      <TrustDeskLinks accentIsland="kauai" className="mt-10 mb-4" />
      <MultiIslandCrossSell />

      {/* FAQ Accordion */}
      <section className="section-pad bg-[#F0EBE1] rule-t">
        <div className="mx-auto max-w-3xl px-6">
          <SectionReveal>
            <p className="eyebrow-site text-accent-site uppercase tracking-wider text-xs">
              Kauaʻi Logistics
            </p>
            <h2 className="h2-site mt-2 mb-8">Frequently asked questions</h2>
            <FAQAccordion items={HOME_FAQ} />
          </SectionReveal>
        </div>
      </section>

      {/* Final Inquiry band */}
      <section className="section-pad rule-t text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site">Begin your Kauaʻi reservation</h2>
          <p className="measure-site mx-auto mt-4 text-ink-2 text-sm sm:text-base">
            Tell us your shore, your dates, and your guest count. We reply with a complete written quote — never an estimate.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to={link('quote')} className="cta-site">
              Get Your Written Quote →
            </Link>
            <Link to="/calculator?island=kauai" className="cta-secondary-site">
              Model Budget on Calculator
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
