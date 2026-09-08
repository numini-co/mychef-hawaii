/**
 * Oʻahu /stay-chef (design/stay-chef.md — "the culinary residency").
 * Bespoke flagship for daily private chef residency:
 * Waikīkī, Ko Olina, Kahala, Kailua, North Shore, Turtle Bay.
 */
import { Link } from 'react-router';
import { Seo, faqLd, serviceLd, breadcrumbLd } from '@/platform/seo';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import QuoteCTA from '@/components/QuoteCTA';
import { RateTable } from '@/components/RateTable';

const H1 = 'A dedicated chef for your stay.';

const RHYTHM_DAYS = [
  {
    day: 'Day 01',
    title: 'Arrival & Welcome Dinner',
    desc: 'Pre-arrival pantry and fridge stocking timed to your flight landing. A relaxed multi-course island dinner plated an hour after you settle in — warm ahi poke, local greens, and seared Hawaiian catch.',
  },
  {
    day: 'Day 02',
    title: 'Morning Fuel & Lānai Feast',
    desc: 'Tropical fruit board, macadamia nut pancakes, and pasture eggs at 8:00 AM before the beach. Mid-afternoon poolside pupu, followed by a 4-course sunset dinner on the covered lānai.',
  },
  {
    day: 'Day 03',
    title: 'Custom Coastal Grilling',
    desc: 'Fresh morning smoothies and avocado toast. Afternoon live-flame grilling featuring island beef, fresh day-catch fish, and roasted Kahuku sweet corn, wrapped with coconut lilikoʻi tart.',
  },
];

const PACKAGES = [
  {
    title: 'Ko Olina 7-Day Villa Residency',
    tag: 'Example Package · 8 Guests · 7 Days',
    price: '$5,950 chef fee + groceries at cost',
    summary: 'Complete multi-meal residency for an extended family vacationing in a luxury Ko Olina resort villa.',
    includes: [
      'Chef dedicated to your villa for 7 consecutive days',
      'Daily breakfasts, afternoon pupus, and 4-course dinners',
      'Pre-arrival fridge stocking and daily grocery shopping with original receipts attached (zero markup)',
      'Custom menus tailored to all dietary requirements (gluten-free, kids, pescatarian)',
      'Complete daily kitchen cleanup, sanitization, and trash removal',
    ],
    idealFor: 'Multi-generational families staying in Ko Olina, Turtle Bay, or Kahala estates.',
  },
  {
    title: 'Kailua Beachfront 4-Day Stay Chef',
    tag: 'Example Package · 6 Guests · 4 Days',
    price: '$3,400 chef fee + groceries at cost',
    summary: 'Seamless private dining for a four-day Windward Oʻahu getaway right on Kailua beach.',
    includes: [
      'Dedicated private chef stationed in your residence kitchen',
      'Daily morning breakfasts, packed beach lunches, and coursed evening dinners',
      'Local market sourcing runs to Windward farms and morning fish wholesalers',
      'Full kitchen restoration after every single meal',
    ],
    idealFor: 'Executive retreats, couples trips, and small vacation families.',
  },
];

const RATE_ROWS = [
  { label: 'Chef Day Rate', value: '$850 / day', note: 'covers chef labor, menu design, shopping & daily service' },
  { label: 'Groceries', value: 'At cost', note: 'original receipts attached with 0% markup' },
  { label: 'Server / Bartender', value: '$55 / hour', note: 'recommended for groups of 8+ (4-hour floor)' },
  { label: 'Sous Chef', value: '$75 / hour', note: 'for groups of 12+ requiring dual kitchen stations' },
  { label: 'Service Charge', value: '20.0%', note: 'itemized on its own line' },
  { label: 'Hawaiʻi GET', value: '4.7120%', note: 'state tax pass-through on its own line' },
];

const FAQ = [
  {
    q: 'How much does Stay Chef on Oʻahu cost?',
    a: 'The chef day rate is $850 a day. Groceries are passed through directly at cost with receipts. The 20% service charge and Hawaiʻi GET (4.7120%) appear on their own lines. Staffing beyond the chef is quoted at $55/hr for servers.',
  },
  {
    q: 'Does the chef stay in the house overnight?',
    a: 'No. Your chef arrives in the morning before breakfast service and departs in the evening after dinner is plated, cleared, and the kitchen is sanitized. The house remains completely private.',
  },
  {
    q: 'Can the chef stock the villa before our flight lands?',
    a: 'Yes. Pre-arrival grocery stocking is standard: send your preferred beverages, snacks, breakfast items, and pantry goods. We stock the kitchen prior to your check-in and attach store receipts.',
  },
  {
    q: 'Can you handle multiple dietary restrictions across a family?',
    a: 'Yes. Stay Chef is built specifically for diverse household needs — preparing vegan, gluten-free, dairy-free, and dedicated children’s meals simultaneously without compromise.',
  },
  {
    q: 'What kitchen equipment is required?',
    a: 'A residential stove, oven, refrigerator, and standard counter space. We bring specialized chef knives, immersion blenders, and presentation cookware as needed.',
  },
];

export default function OahuStayChef() {
  return (
    <>
      <Seo
        title="Stay Chef Oʻahu — Private Chef for Your Whole Stay from $850/Day | myCHEF"
        description="Private chef daily residency across Oʻahu: Waikīkī, Ko Olina, Kahala, Kailua, and the North Shore. From $850/day plus groceries at cost with receipts. Breakfast, lunch, and coursed dinners."
        path="/oahu/stay-chef"
        ogImage="/img/oahu/stay-chef.jpg"
        jsonLd={[
          serviceLd('Stay Chef Oʻahu', 'Dedicated multi-day private chef culinary residency in your Oʻahu villa or estate kitchen.', '/oahu/stay-chef', 'Oʻahu'),
          faqLd(FAQ),
          breadcrumbLd([{ name: 'Oʻahu', path: '/oahu' }, { name: 'Stay Chef', path: '/oahu/stay-chef' }]),
        ]}
      />

      {/* Split editorial hero */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow-site">Stay Chef · Oʻahu</p>
            <h1 className="h1-site mt-5">{H1}</h1>
            <p className="measure-site mt-6 text-ink-2">
              One dedicated chef, your villa kitchen, every day of your stay. Breakfast on the lānai before the beach, afternoon pupus, and coursed dinners cooked around your schedule.
            </p>
            <p className="tabular-site mt-5 text-sm text-ink-2">
              From $850 a day · Groceries at cost with original receipts · Written quotes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link to="/oahu/quote?service=stay-chef" className="cta-site">Get a written quote</Link>
              <a href="https://wa.me/971551744849?text=Aloha%20myCHEF%20O%CA%BBahu%20—%20I%27d%20like%20to%20discuss%20Stay%20Chef%20dates." target="_blank" rel="noreferrer" className="cta-secondary-site">WhatsApp us →</a>
            </div>
          </div>
          <SectionReveal className="md:col-span-6">
            <figure className="card-site overflow-hidden">
              <img
                src="/img/oahu/stay-chef.jpg"
                alt="A chef working in a luxury villa kitchen during a multi-day stay on Oʻahu"
                className="h-full w-full object-cover"
                style={{ aspectRatio: '4/3' }}
                fetchPriority="high"
              />
            </figure>
          </SectionReveal>
        </div>
      </section>

      {/* S2 — Daily Rhythm */}
      <section className="section-pad rule-t bg-[#F7F5F0]">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">A Sample Vacation Cadence</p>
            <h2 className="h2-site mt-3">How a Stay Chef week flows.</h2>
            <p className="measure-site mt-4 text-ink-2">
              You choose the days and meals. Your chef takes care of menu planning, market runs, cooking, table service, and kitchen restoration:
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {RHYTHM_DAYS.map((r, i) => (
              <SectionReveal key={r.day} delay={i * 60}>
                <div className="card-site flex h-full flex-col justify-between p-7 bg-white">
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
            <p className="eyebrow-site">Example Packages</p>
            <h2 className="h2-site mt-3">Representative multi-day itineraries.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Modeled on our most requested island formats. All written quotes itemize exact chef days, staffing, and fee stack:
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {PACKAGES.map((pkg, i) => (
              <SectionReveal key={pkg.title} delay={i * 60}>
                <div className="card-site flex h-full flex-col justify-between p-7 bg-[#F7F5F0]">
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
                    <Link to="/oahu/quote?service=stay-chef" className="link-site text-xs font-semibold whitespace-nowrap">
                      Quote this format →
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* S4 — The Rate Card */}
      <section className="band-site section-pad">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <h2 className="h2-site">The Stay Chef rate card.</h2>
            <div className="mt-8">
              <RateTable rows={RATE_ROWS} footnote="Every fee published. Groceries billed at cost with original receipts. 50% deposit locks the date after written quote approval." />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/oahu/quote?service=stay-chef" className="cta-site" style={{ backgroundColor: 'var(--site-cta-ink)', color: 'var(--site-cta-bg)' }}>
                Request your dates
              </Link>
              <Link to="/oahu/pricing" className="cta-secondary-site">See all Oʻahu pricing →</Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* S5 — FAQ */}
      <section className="section-pad rule-t bg-[#F7F5F0]">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Stay Chef Operations</p>
            <h2 className="h2-site mt-2 mb-6">Frequently asked questions about multi-day stays</h2>
            <FAQAccordion items={FAQ} />
          </SectionReveal>
        </div>
      </section>

      <QuoteCTA
        heading="Book your Oʻahu chef residency."
        cta={{
          label: 'Get a written quote',
          href: '/oahu/quote?service=stay-chef',
          secondaryLabel: 'WhatsApp us',
          secondaryHref: 'https://wa.me/971551744849',
        }}
      />
    </>
  );
}
