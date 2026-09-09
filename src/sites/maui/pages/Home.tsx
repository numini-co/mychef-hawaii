/**
 * Maui homepage (design/home-maui.md) — "Maui, set for dinner."
 * The network's ONLY full-bleed hero. 13-section flagship wireframe:
 * header(transparent→sand) → hero → trust strip → full capability grid →
 * concrete worked event packages → wedding-week dusk band → local purveyors &
 * resident leads → zone strip → pricing scene → how it works → group
 * capability → FAQ → quote block.
 */
import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { Seo, islandFoodServiceLd, faqLd, breadcrumbLd } from '@/platform/seo';
import { CONTACT, TRUST_CLAIMS } from '@/platform/config';
import { GBP_DESKS } from '@/data/trust-proof';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import { MultiIslandCrossSell } from '@/components/CrossHostSell';
import { TrustDeskLinks } from '@/components/TrustDeskLinks';
import { RateTable } from '@/components/RateTable';
import WeddingTimeline from './WeddingTimeline';
import { ExperienceCard, MauiLink, MauiStyles, MAUI_FEE_NOTE } from './shared';

const HOME_FAQ = [
  {
    q: 'How much is a private chef dinner on Maui?',
    a: 'Signature dinners run $150–$250 a guest, groceries inside the band. Premium menus run $220–$325; chef’s-table formats $275–$400+. The 20% service charge and Hawaiʻi General Excise Tax (4.7120%) appear on their own lines in the written quote — which is the confirmed total.',
  },
  {
    q: 'Can you cater our whole wedding week?',
    a: 'Yes — that is the Maui signature: welcome dinner, rehearsal, ceremony-adjacent pūpū, reception, and recovery brunch as one unified contract, from $150 a guest per event plus staffing. One crew, one quote, one deposit.',
  },
  {
    q: 'Do you cook in our villa or resort residence?',
    a: 'Anywhere with a residential or commercial kitchen — Wailea, Mākena, Kīhei, Kāʻanapali, Kapalua, and the Nāpili–Honokōwai–Kahana belt are base zone ($0 travel fee). Upcountry carries travel from $65; Hāna Highway itineraries carry a $150 travel fee. Hotel rooms without kitchens are declined.',
  },
  {
    q: 'Can you cater on Maui public beaches?',
    a: 'Under Maui County Parks & Recreation rules and DLNR commercial restrictions, commercial catering setups and open-flame cooking are strictly prohibited directly on public beaches. We cater within permitted private oceanfront villas, estate lawns, and resort lānai spaces that legally front the shoreline.',
  },
  {
    q: 'What is the deposit and payment structure?',
    a: 'A 50% deposit locks your date on our executive chef’s calendar after you review and approve the written itemized quote. The remaining 50% balance is due 14 days prior to your initial event. Tips remain 100% voluntary.',
  },
];

const MAUI_CAPABILITIES = [
  {
    title: 'Wailea & Kapalua Villa Dinners',
    price: 'From $150 / guest',
    unit: '3–5 plated courses · groceries included',
    desc: 'Bespoke multi-course fine dining prepared and served inside your resort residence or oceanfront villa kitchen.',
    href: 'private-chef',
    tag: 'Flagship Dinner',
  },
  {
    title: 'Maui Wedding Week Catering',
    price: 'From $150 / guest',
    unit: 'Multi-event week package + staffing',
    desc: 'Welcome receptions, rehearsal dinners, ceremony canapés, formal reception dining, and recovery brunches.',
    href: 'weddings/wedding-week',
    tag: 'Signature Week',
  },
  {
    title: 'Vacation Stay Chef (Multi-Day)',
    price: 'From $1,050 / day',
    unit: 'Dedicated chef in residence · groceries at cost',
    desc: 'Complete daily culinary management: fresh tropical breakfast, poolside lunch, and coursed evening dinner.',
    href: 'stay-chef',
    tag: 'Villa Residency',
  },
  {
    title: 'Live-Flame Lanai BBQ & Feast',
    price: 'From $135 / guest',
    unit: 'Chef grill master · passed communal platters',
    desc: 'Outdoor grill station: fresh island catch, marinated Maui Cattle Co. ribs, charred local pineapple, and seasonal sides.',
    href: 'catering',
    tag: 'Outdoor Dining',
  },
  {
    title: 'Upcountry Wellness & Corporate Retreats',
    price: 'From $160 / guest',
    unit: 'Kula & Makawao estates · dietary protocol labeled',
    desc: 'Nourishing organic menus tailored for executive summits, yoga retreats, and extended family reunions.',
    href: 'catering',
    tag: 'Estate Retreat',
  },
  {
    title: 'Romance & Sunset Date Night',
    price: 'From $500',
    unit: 'Intimate dinner for two · candlelit lānai',
    desc: 'A dedicated private chef cooks an exclusive 4-course menu at the edge of your oceanfront lānai at sunset.',
    href: 'services/date-night',
    tag: 'Two Guests',
  },
  {
    title: 'Family-Style Passed Feasts',
    price: 'From $150 / guest',
    unit: 'Communal wooden platters · interactive dining',
    desc: 'Passed ocean catches, braised island meats, and garden platters designed for vibrant multi-generational conversation.',
    href: 'catering',
    tag: 'Communal Style',
  },
  {
    title: 'Private Yacht & Catamaran Charter Catering',
    price: 'Custom Daily Tiers',
    unit: 'Packaged chilled canapés or onboard chef',
    desc: 'Turnkey charter provisioning for Molokini snorkel excursions, sunset sails, and private boat charters out of Maʻalaea.',
    href: 'catering',
    tag: 'Maritime Service',
  },
];

const PACKAGES = [
  {
    title: 'Wailea Oceanfront Villa Dinner',
    tier: 'Example Package · Signature Fine Dining',
    guests: '8 Guests',
    summary: 'A 4-course sunset dinner in a private Wailea villa overlooking the Pacific.',
    includes: [
      'Dedicated Private Chef for 4.5 hours on-site',
      'Course 1: Fresh Pacific ahi crudo with finger lime & chili crunch',
      'Course 2: Kula baby greens with artisan goat chevre & macadamia crumble',
      'Course 3: Seared Pacific catch or Maui Cattle Co. beef tenderloin',
      'Course 4: Warm lilikoʻi tart with coconut gelato',
      'Complete table service and pristine kitchen restoration',
    ],
    total: '$1,850 estimated',
    note: 'Includes food, chef fee, 20% service, and 4.7120% Hawaiʻi GET. Gratuity voluntary.',
  },
  {
    title: 'Kapalua Estate Wedding Welcome Feast',
    tier: 'Example Package · Multi-Course Celebration',
    guests: '22 Guests',
    summary: 'A relaxed but elevated welcome dinner on an oceanview lawn for arriving wedding guests.',
    includes: [
      'Lead Chef plus 2 professional front-of-house service staff',
      'Passed welcome pūpū: coconut shrimp skewers & kalua pork bao buns',
      'Family-style communal mains: whole grilled snapper & ginger-soy braised short ribs',
      'Roasted Upcountry vegetables & jasmine rice with scallion butter',
      'Table wine service, clearing, and full kitchen cleanup',
    ],
    total: '$3,950 estimated',
    note: 'Includes food, all service staffing, 20% service, and Hawaiʻi GET. Zero surprise surcharges.',
  },
  {
    title: 'Upcountry Kula Farmstead Residency',
    tier: 'Example Package · Stay Chef Multi-Day',
    guests: '6 Guests (4 Days)',
    summary: 'Full private chef coverage for an extended multi-day retreat in Kula or Makawao.',
    includes: [
      'Dedicated private chef stationed in your estate kitchen',
      'Daily farm-fresh breakfasts, family-style lunch, and 3-course evening dinner',
      'Direct sourcing runs to Kula Country Farms and local farmers markets',
      'Customized menus matching individual allergies, keto, or vegan requests',
      'Pantry stocking and continuous kitchen cleanliness throughout the stay',
    ],
    total: '$4,650 chef fee + groceries at cost',
    note: 'Chef daily fee is $1,050/day (4 days) + 20% service + GET. Groceries billed with original receipts.',
  },
  {
    title: 'Mākena Sunset Lanai Live-Flame Grill',
    tier: 'Example Package · Estate Lanai BBQ',
    guests: '16 Guests',
    summary: 'Outdoor chef-attended grill station for a milestone anniversary or birthday gathering.',
    includes: [
      'Lead Chef attended grill station plus 1 service associate',
      'Grilled catch of the day with charred scallion oil',
      'Sweet chili glazed island ribs & Maui sweet onion skewers',
      'Charred corn salad with cotija & lime crema',
      'Island fruit platter with Hawaiian vanilla whipped cream',
    ],
    total: '$2,750 estimated',
    note: 'Complete food and staffing coverage. Equipment, gas/coals, and post-event cleanup included.',
  },
];

const PURVEYORS = [
  {
    name: 'Maʻalaea & Island Fishermen Fleet',
    role: 'Fresh Island Day Catch',
    desc: 'We source fresh Hawaiian ahi, mahimahi, onaga, and ʻōpakapaka landed by licensed commercial island fishermen and local Maui seafood wholesalers.',
    badge: 'Island Dock Sourced',
  },
  {
    name: 'Maui Cattle Company',
    role: 'Makawao Island Pasture Beef',
    desc: '100% grass-fed cattle born and raised on the high-altitude slopes of Haleakalā. Free-range, non-hormone, pasture-finished beef deliver unmatched flavor profiles for our braises and steaks.',
    badge: '100% Haleakalā Pasture',
  },
  {
    name: 'Kula Country Farms & Okoʻa Farms',
    role: 'Upcountry Heirloom Produce',
    desc: 'Grown in mineral-rich volcanic soil at 3,000 feet elevation. Sweet Kula onions, crisp baby gem lettuces, heirloom strawberries, and microgreens harvested the day of your dinner.',
    badge: 'Volcanic Soil Organics',
  },
  {
    name: 'Surfing Goat Dairy',
    role: 'Artisan Kula Chevre & Curds',
    desc: 'Award-winning goat cheeses hand-crafted in Omaopio, Kula. Used across our salad courses, savory tartlets, and artisanal cheese boards for sunset receptions.',
    badge: 'Artisan Chevre',
  },
];

const RESIDENT_LEADS = [
  {
    name: 'Maui Resident Culinary Brigade',
    role: 'Vetted Maui Private Chefs',
    bio: 'Professional resident private chefs with backgrounds across top Wailea resort kitchens and private oceanfront estates, specializing in Pacific Rim fine dining, wood-fired grilling, and multi-course wine pairings.',
  },
  {
    name: 'Maui Villa & Event Logistics Desk',
    role: 'Estate Access & Tableware Coordination',
    bio: 'Coordinates private estate access, venue compliance, rental tableware logistics, and guest service staffing across Wailea, Mākena, and Kapalua.',
  },
];

const EXPERIENCES = [
  {
    img: '/img/maui/card-villa-dinner.jpg',
    alt: 'A plated Pacific catch course on a Wailea villa lānai at golden hour',
    name: 'Villa Dinner',
    price: 'from $150/guest',
    bestFor: 'the first night in the house',
    to: 'private-chef',
  },
  {
    img: '/img/maui/card-stay-chef.jpg',
    alt: 'A quiet villa kitchen in the morning, market produce on the counter',
    name: 'Stay Chef',
    price: 'from $1,050/day',
    bestFor: 'the whole stay handled',
    to: 'stay-chef',
  },
  {
    img: '/img/maui/card-date-night.jpg',
    alt: 'A table for two at the edge of a lānai at dusk, candles lit',
    name: 'Date Night',
    price: 'from $500+',
    bestFor: 'two people, one sunset',
    to: 'services/date-night',
  },
  {
    img: '/img/maui/card-estate-catering.jpg',
    alt: 'A long estate reception table under trees in dappled golden light',
    name: 'Estate Catering',
    price: '10–75 guests, staffed',
    bestFor: 'receptions the beach permit can’t hold',
    to: 'catering',
  },
];

const ZONES = [
  {
    name: 'Wailea–Mākena',
    line: 'The resort corridor. Estate kitchens built for service.',
    note: 'Base zone — no travel line.',
    to: 'locations/wailea',
  },
  {
    name: 'Kāʻanapali–Kapalua',
    line: 'West Maui’s operating present.',
    note: 'Base zone — we work where we’re welcomed.',
    to: 'locations/kaanapali',
  },
  {
    name: 'Upcountry & North Shore',
    line: 'Kula, Pāʻia, Haʻikū — quoted honestly.',
    note: 'Travel from $65 Upcountry; Pāʻia/Haʻikū quoted at inquiry.',
    to: 'locations/kula-upcountry',
  },
];

const STEPS = [
  'Tell us the dates and the villa.',
  'We reply with a written quote — the confirmed total.',
  'A 50% deposit holds the week.',
  'You hear the ocean; we handle the rest.',
];

export default function MauiHome() {
  const { link } = useSite();
  const heroImgRef = useRef<HTMLImageElement | null>(null);

  // Hero parallax: translateY at ≤2% of scroll, desktop only, motion-safe.
  useEffect(() => {
    const img = heroImgRef.current;
    if (!img) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const desktop = window.matchMedia('(min-width: 768px)');
    if (!desktop.matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        img.style.transform = `scale(1) translateY(${Math.min(window.scrollY * 0.02, 24)}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <Seo
        title="Private Chef Maui — Villa Dinners, Weddings & Stay Chef | myCHEF"
        description="Private chef & catering across Maui. Wailea villa dinners from $150/guest; Stay Chef from $1,050/day; wedding week catering from $150/guest."
        path={link('')}
        ogImage="/img/maui/hero-home.webp"
        jsonLd={[
          ...islandFoodServiceLd('maui', {
            name: 'myCHEF Maui',
            description:
              'Private chef & catering across Maui. Wailea villa dinners from $150/guest; Stay Chef from $1,050/day; wedding week catering from $150/guest.',
            sameAs: [GBP_DESKS.maui.mapsUrl],
          }),
          faqLd(HOME_FAQ),
          breadcrumbLd([{ name: 'Maui', path: link('') }]),
        ]}
      />
      <MauiStyles />

      {/* S2 — Hero: full-bleed cinematic (Maui-only). */}
      <section className="relative -mt-[var(--nav-h)] flex min-h-[100dvh] items-end overflow-hidden" aria-label="Maui, set for dinner">
        <img
          ref={heroImgRef}
          src="/img/maui/hero-home.webp"
          alt="A lānai table set for eight at a Maui resort villa, low golden sun, ocean in the mid-ground"
          width={1920}
          height={1080}
          className="maui-hero-img absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(36,28,23,0.88) 0%, rgba(36,28,23,0.62) 34%, rgba(36,28,23,0.30) 58%, rgba(36,28,23,0.08) 78%, rgba(36,28,23,0) 92%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-[calc(var(--rate-bar-h)+2.5rem)] pt-28 md:pb-32 md:pt-40">
          <span className="text-xs uppercase tracking-widest text-[#FBF6EC]/80 font-medium">
            Wailea · Kāʻanapali · Kapalua · Upcountry
          </span>
          <h1
            className="maui-hero-h1 font-display mt-2"
            style={{
              fontSize: 'var(--site-h1)',
              lineHeight: 1.02,
              color: '#FBF6EC',
              maxWidth: '14ch',
            }}
          >
            Maui, set for dinner.
          </h1>
          <p className="maui-hero-sub mt-6 max-w-xl text-lg" style={{ color: 'rgba(251,246,236,0.95)' }}>
            A private chef for your Wailea villa, your Kapalua estate, your whole wedding week. Villa dinners
            $150–$250 a guest; Stay Chef from $1,050 a day; the written quote is the confirmed total.
          </p>
          <div className="maui-hero-sub mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link to={link('quote')} className="cta-site">
              Get Your Written Quote
            </Link>
            <Link
              to="/calculator?island=maui"
              className="cta-ghost-site"
              style={{ color: '#FBF3E8', borderColor: 'rgba(251,243,232,0.6)', backgroundColor: 'rgba(0,0,0,0.25)' }}
            >
              Maui Price Calculator ⚡
            </Link>
            <Link
              to={link('pricing')}
              className="cta-ghost-site"
              style={{ color: '#FBF3E8' }}
            >
              See Maui Rate Card
            </Link>
          </div>
        </div>
      </section>

      {/* S3 — Trust strip */}
      <section className="mx-auto max-w-6xl px-6 pt-20" aria-label="Our promises">
        <ul className="grid gap-x-8 gap-y-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_CLAIMS.map((claim, i) => (
            <SectionReveal as="li" key={claim} delay={i * 120}>
              <p className="text-[13px] text-ink-2">{claim}</p>
            </SectionReveal>
          ))}
        </ul>
      </section>

      {/* S4 — Full Capability Grid */}
      <section className="section-pad mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="eyebrow-site" style={{ color: 'var(--site-accent-text)' }}>
            MAUI CULINARY SCOPE
          </p>
          <h2 className="h2-site mt-2">What we cook on Maui</h2>
          <p className="mt-4 text-ink-2">
            From intimate sunset dinners in Wailea to week-long Kapalua estate wedding gatherings. All single-dinner pricing includes chef preparation, fresh island grocery shopping, and complete kitchen cleanup.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MAUI_CAPABILITIES.map((cap, i) => (
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

      {/* S5 — Concrete Worked Event Packages */}
      <section className="section-pad rule-t bg-[#F5EFE6]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="eyebrow-site text-accent-site uppercase tracking-wider text-xs">
              Transparent Accounting
            </p>
            <h2 className="h2-site mt-2">Example event packages</h2>
            <p className="mt-4 text-ink-2 text-sm sm:text-base">
              Wondering what your gathering will cost? Here are four representative event formats we coordinate regularly across Maui with their estimated all-inclusive pricing breakdown.
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

                  <div className="mt-8 border-t border-line-site pt-5 bg-[#FBF6EC] -mx-7 -mb-7 p-6 rounded-b-lg">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs uppercase tracking-wider text-ink-2 font-medium">Estimated Investment</span>
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
              to="/calculator?island=maui"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent-site"
            >
              <span>Need a custom guest count or format? Use our Interactive Maui Calculator</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* S6 — Wedding-week feature (DUSK BAND #1) */}
      <section className="band-site">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <p className="eyebrow-site" style={{ color: 'var(--site-accent-text)' }}>
            THE WEDDING WEEK
          </p>
          <h2 className="h2-site mt-4 max-w-2xl">Maui is a week, not a plated hour.</h2>
          <p className="mt-5 max-w-xl text-ink-2">
            Welcome dinner, rehearsal, ceremony-adjacent pūpū, the reception, and the morning after — five
            meals, one crew, one contract. From $150 a guest plus staffing.
          </p>
          <div className="mt-14">
            <WeddingTimeline />
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link to={link('weddings/wedding-week')} className="cta-site">
              Plan the week
            </Link>
            <MauiLink to={link('weddings')}>All wedding formats →</MauiLink>
          </div>
        </div>
      </section>

      {/* S7 — Local Sourcing Proof & Resident Leadership */}
      <section className="section-pad mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="eyebrow-site" style={{ color: 'var(--site-accent-text)' }}>
            LOCAL PROVENANCE
          </p>
          <h2 className="h2-site mt-2">Maui soil, Maui ocean</h2>
          <p className="mt-4 text-ink-2">
            Every dish we plate is rooted in direct relationships with Maui growers, cattle ranchers, and day-boat fishermen.
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
        <div className="mt-16 rounded-xl border border-line-site bg-[#FBF6EC] p-8 sm:p-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-accent-site uppercase tracking-wider">On-Island Culinary Leadership</span>
            <h3 className="font-display text-2xl font-semibold text-ink mt-2">Resident Maui culinary team</h3>
            <p className="text-xs sm:text-sm text-ink-2 mt-2">
              We do not fly in temporary mainland contractors. Your chef and service captain live on Maui, know island kitchen infrastructure, and maintain direct relationships with local dock markets.
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

      {/* S8 — Experience cards (3:2 image-first) */}
      <section className="section-pad rule-t mx-auto max-w-6xl px-6">
        <h2 className="h2-site">Four ways to have us.</h2>
        <ul className="maui-timeline-track mt-12 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {EXPERIENCES.map((c, i) => (
            <li key={c.name} className="min-w-[260px] md:min-w-0">
              <ExperienceCard {...c} to={link(c.to)} delay={i * 120} />
            </li>
          ))}
        </ul>
      </section>

      {/* S9 — Zone strip */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <h2 className="h2-site">Where we cook.</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {ZONES.map((z, i) => (
            <SectionReveal key={z.name} delay={i * 150}>
              <h3 className="font-display text-2xl" style={{ fontWeight: 400 }}>
                {z.name}
              </h3>
              <p className="mt-3 text-ink-2">{z.line}</p>
              <p className="mt-3 text-sm text-ink-2">{z.note}</p>
              <p className="mt-4">
                <MauiLink to={link(z.to)}>Explore →</MauiLink>
              </p>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* S10 — Pricing scene */}
      <section className="section-pad mx-auto max-w-4xl px-6">
        <h2 className="h2-site">What it costs, in writing.</h2>
        <div className="mt-12 space-y-6">
          {[
            'Villa dinner $150–$250 a guest',
            'Stay Chef from $1,050 a day',
            'Wedding week from $150 a guest + staffing',
            'Date night from $500',
          ].map((row, i) => (
            <SectionReveal key={row} delay={i * 150}>
              <p className="font-display tabular-site" style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 300 }}>
                {row}
              </p>
            </SectionReveal>
          ))}
        </div>

        <div className="mt-14">
          <RateTable
            rows={[
              { label: 'Signature Plated Dinner', value: '$150 – $250 / guest', note: 'Groceries inside the band; 3–5 courses' },
              { label: 'Stay Chef (Multi-Day)', value: 'From $1,050 / day', note: 'Daily chef fee + groceries at cost with receipts' },
              { label: 'Estate Wedding Reception', value: 'From $150 / guest + staff', note: 'Passed canapés, coursed dining, bar cart' },
              { label: 'Sunset Lanai BBQ', value: 'From $135 / guest', note: 'Chef grill master + seasonal communal sides' },
              { label: 'Date Night (Two Guests)', value: 'From $500 all-in', note: 'Dedicated chef, 4 courses, candlelit lānai' },
            ]}
          />
          <p className="mt-4 text-xs text-ink-2">{MAUI_FEE_NOTE}</p>
        </div>
      </section>

      {/* S11 — How it works */}
      <section className="section-pad rule-t mx-auto max-w-4xl px-6">
        <h2 className="h2-site">How it works.</h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <SectionReveal as="li" key={step} delay={i * 100} className="card-site p-5 bg-white border border-line-site">
              <span className="font-mono text-xs text-accent-site font-bold">0{i + 1}</span>
              <p className="mt-2 text-sm text-ink-2">{step}</p>
            </SectionReveal>
          ))}
        </ol>
      </section>

      <TrustDeskLinks accentIsland="maui" className="mt-10 mb-4" />
      {/* Cross-host sell — multi-island hub */}
      <MultiIslandCrossSell />

      {/* S12 — FAQ Accordion */}
      <section className="section-pad rule-t bg-[#FBF6EC]">
        <div className="mx-auto max-w-3xl px-6">
          <SectionReveal>
            <p className="eyebrow-site text-accent-site uppercase tracking-wider text-xs">
              Maui Logistics &amp; Guidelines
            </p>
            <h2 className="h2-site mt-2 mb-8">Frequently asked questions about Maui catering</h2>
            <FAQAccordion items={HOME_FAQ} />
          </SectionReveal>
        </div>
      </section>

      {/* S13 — Quote block */}
      <section className="section-pad rule-t mx-auto max-w-4xl px-6 text-center">
        <h2 className="h2-site">Ready to set the table on Maui?</h2>
        <p className="mt-4 text-ink-2 max-w-lg mx-auto text-sm sm:text-base">
          Send us your dates, group size, and villa location. We reply within hours with an itemized, confirmed written quote.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to={link('quote')} className="cta-site">
            Request a Written Quote →
          </Link>
          <a
            href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
              'Aloha myCHEF Maui — I would like to inquire about private chef services for an upcoming Maui trip.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary-site"
          >
            WhatsApp Maui Concierge Desk
          </a>
        </div>
      </section>
    </>
  );
}
