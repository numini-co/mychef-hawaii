/**
 * Maui /stay-chef — Bespoke Stay Chef Flagship:
 * "Your Maui stay, cooked around you."
 * Wailea, Kapalua, Mākena, Kāʻanapali, Upcountry villa residencies.
 */
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { CONTACT } from '@/platform/config';
import { Seo, faqLd, serviceLd, breadcrumbLd } from '@/platform/seo';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import QuoteCTA from '@/components/QuoteCTA';
import { RateTable } from '@/components/RateTable';
import { MauiStyles } from './shared';

const H1 = 'Your Maui stay, cooked around you.';

const STAY_DAYS = [
  {
    day: 'Morning',
    title: 'Lānai Breakfast & Farm Fruit',
    desc: 'Tropical papaya with lime, macadamia nut granola, pasture eggs, and fresh baked scones served on your oceanview lānai as the sun hits the water.',
  },
  {
    day: 'Midday',
    title: 'Poolside Lunches & Provisioning',
    desc: 'Chilled local catch poke bowls, fresh Upcountry heirloom salads, and packed gourmet coolers ready for your beach excursions.',
  },
  {
    day: 'Evening',
    title: 'Sunset Fine Dining',
    desc: 'Multi-course dinner paired with golden hour views: seared island fish, Maui pasture beef, Kula vegetables, and warm tropical desserts.',
  },
];

const PACKAGES = [
  {
    title: 'Wailea Villa 5-Day Stay Chef',
    tag: 'Example Package · 8 Guests · 5 Days',
    price: '$5,250 chef fee + groceries at cost',
    summary: 'Dedicated private chef stationed in your Wailea or Mākena villa across a five-night stay.',
    includes: [
      'Chef dedicated to your villa for 5 consecutive days ($1,050/day)',
      'Daily morning tropical breakfasts, poolside lunches, and 4-course sunset dinners',
      'Pre-arrival fridge stocking and daily grocery shopping with original receipts attached (zero markup)',
      'Personalized menus matching keto, vegan, gluten-free, and children’s preferences',
      'Pristine kitchen restoration after every service',
    ],
    idealFor: 'Multi-generational families vacationing in South Maui resort residences.',
  },
  {
    title: 'Kapalua Coastal 7-Day Residency',
    tag: 'Example Package · 10 Guests · 7 Days',
    price: '$7,350 chef fee + groceries at cost',
    summary: 'Full culinary management for a multi-family vacation week in Kapalua or Kāʻanapali.',
    includes: [
      'Chef dedicated to your estate kitchen for 7 consecutive days',
      'Breakfast, lunch, afternoon pupus, and coursed evening dinners',
      'Sourcing runs to West Maui day-boat fishermen and Upcountry farmers markets',
      'Pantry stocking and full kitchen maintenance throughout the trip',
    ],
    idealFor: 'Extended family reunions, golf groups, and celebration weeks.',
  },
];

const RATE_ROWS = [
  { label: 'Stay Chef Day Rate', value: '$1,050 / day', note: 'covers chef labor, menu design, provisioning & daily service' },
  { label: 'Groceries', value: 'At cost', note: 'original receipts attached with 0% markup' },
  { label: 'Server / Bartender', value: '$55 / hour', note: 'recommended for groups of 8+ (4-hour floor)' },
  { label: 'Sous Chef', value: '$75 / hour', note: 'for groups of 12+ requiring dual kitchen stations' },
  { label: 'Service Charge', value: '20.0%', note: 'itemized on its own line' },
  { label: 'Hawaiʻi GET', value: '4.7120%', note: 'state tax pass-through on its own line' },
];

const FAQ = [
  {
    q: 'How much does Stay Chef on Maui cost?',
    a: 'The Stay Chef day rate is $1,050 a day. Groceries are passed through directly at cost with receipts. The 20% service charge and Hawaiʻi GET (4.7120%) appear on their own lines. Staffing beyond the chef is quoted at $55/hr for servers.',
  },
  {
    q: 'Does the chef live in our villa?',
    a: 'No. Your chef arrives before breakfast service and departs after dinner is finished and the kitchen is cleaned. Your villa remains private throughout the night.',
  },
  {
    q: 'Can the chef stock groceries before we land at Kahului (OGG)?',
    a: 'Yes. Pre-arrival pantry stocking is standard practice: send your preferred beverages, fruits, snacks, and staples in advance, and the kitchen is stocked before you check in.',
  },
  {
    q: 'What kitchen setup is required?',
    a: 'Any residential or commercial villa kitchen in Wailea, Mākena, Kapalua, Kāʻanapali, or Upcountry. We bring specialized chef knives, immersion blenders, and presentation cookware as needed.',
  },
  {
    q: 'Can we take days off from chef service during the stay?',
    a: 'Yes. Stay Chef schedules can be designed for full weeks or selected days (e.g., 4 days out of a 7-day stay) with the schedule fixed and confirmed in your written quote.',
  },
];

export default function MauiStayChef() {
  const { link } = useSite();
  return (
    <>
      <Seo
        title="Stay Chef Maui — Private Chef for Your Whole Stay from $1,050/Day | myCHEF"
        description="Private chef daily residency across Maui: Wailea, Kapalua, Mākena, Kāʻanapali, and Upcountry. From $1,050/day plus groceries at cost with receipts."
        path={link('stay-chef')}
        ogImage="/img/maui/hero-stay-chef.jpg"
        jsonLd={[
          serviceLd('Stay Chef Maui', 'Dedicated multi-day private chef culinary residency in your Maui villa or estate kitchen.', link('stay-chef'), 'Maui'),
          faqLd(FAQ),
          breadcrumbLd([
            { name: 'Maui', path: link('') },
            { name: 'Stay Chef', path: link('stay-chef') },
          ]),
        ]}
      />
      <MauiStyles />

      {/* Hero */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow-site text-accent-site">Stay Chef · Maui</p>
            <h1 className="h1-site mt-4">{H1}</h1>
            <p className="measure-site mt-6 text-ink-2">
              One dedicated chef, your villa kitchen, every day of your stay. Breakfast on the lānai before the beach, afternoon pupus, and coursed dinners cooked around your schedule.
            </p>
            <p className="tabular-site mt-5 text-sm text-ink-2">
              From $1,050 a day · Groceries at cost with receipts · Itemized written quotes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link to={link('quote?service=stay-chef')} className="cta-site">Get a written quote</Link>
              <a href={`https://wa.me/${CONTACT.whatsappNumber}?text=Aloha%20myCHEF%20Maui%20—%20I%27d%20like%20to%20discuss%20Stay%20Chef%20dates.`} target="_blank" rel="noreferrer" className="cta-secondary-site">WhatsApp our team →</a>
            </div>
          </div>
          <SectionReveal className="md:col-span-6">
            <figure className="card-site overflow-hidden shadow-sm">
              <img
                src="/img/maui/hero-stay-chef.jpg"
                alt="A chef plating an oceanfront dinner in a luxury Wailea villa during an extended stay"
                className="h-full w-full object-cover"
                style={{ aspectRatio: '4/3' }}
                fetchPriority="high"
              />
            </figure>
          </SectionReveal>
        </div>
      </section>

      {/* S2 — Daily Rhythm */}
      <section className="section-pad rule-t bg-[#F5EFE6]">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site text-accent-site uppercase tracking-wider text-xs">A Vacation Culinary Cadence</p>
            <h2 className="h2-site mt-2">How a Maui villa stay runs.</h2>
            <p className="measure-site mt-4 text-ink-2">
              You choose the days and meals. Your chef takes care of menu planning, market runs, cooking, table service, and kitchen restoration:
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STAY_DAYS.map((r, i) => (
              <SectionReveal key={r.day} delay={i * 60}>
                <div className="card-site flex h-full flex-col justify-between p-7 bg-white border border-line-site">
                  <div>
                    <span className="font-accent-site text-sm font-semibold tracking-wider text-accent-site">
                      {r.day}
                    </span>
                    <h3 className="font-display mt-3 text-xl font-medium text-ink">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-ink-2">
                      {r.desc}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-line-site pt-4">
                    <span className="text-[11px] font-semibold text-accent-site uppercase tracking-wider">
                      Tailored Daily
                    </span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* S3 — Example Packages */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site text-accent-site">Example Packages</p>
            <h2 className="h2-site mt-2">Representative multi-day itineraries.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Modeled on our most requested Maui formats. All written quotes itemize exact chef days, staffing, and fee stack:
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {PACKAGES.map((pkg, i) => (
              <SectionReveal key={pkg.title} delay={i * 60}>
                <div className="card-site flex h-full flex-col justify-between p-7 bg-[#F5EFE6] border border-line-site">
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
                      <p className="font-semibold text-ink uppercase tracking-wider text-[11px]">Inclusions:</p>
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
                    <Link to={link('quote?service=stay-chef')} className="link-site text-xs font-semibold whitespace-nowrap">
                      Quote this format →
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* S4 — Rate Card */}
      <section className="band-site section-pad">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <h2 className="h2-site">The Maui Stay Chef rate card.</h2>
            <div className="mt-8">
              <RateTable rows={RATE_ROWS} footnote="Every fee published. Groceries billed at cost with original receipts. 50% deposit locks the date after written quote approval." />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to={link('quote?service=stay-chef')} className="cta-site">
                Request your stay dates
              </Link>
              <Link to={link('pricing')} className="cta-secondary-site">See all Maui pricing →</Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* S5 — FAQ */}
      <section className="section-pad rule-t bg-[#F5EFE6]">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <p className="eyebrow-site text-accent-site">Stay Chef Operations</p>
            <h2 className="h2-site mt-2 mb-6">Frequently asked questions about multi-day stays</h2>
            <FAQAccordion items={FAQ} />
          </SectionReveal>
        </div>
      </section>

      <QuoteCTA
        heading="Book your Maui chef residency."
        cta={{
          label: 'Get a written quote',
          href: link('quote?service=stay-chef'),
          secondaryLabel: 'WhatsApp us',
          secondaryHref: `https://wa.me/${CONTACT.whatsappNumber}`,
        }}
      />
    </>
  );
}
