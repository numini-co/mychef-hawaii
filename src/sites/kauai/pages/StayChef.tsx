/**
 * /kauai/stay-chef — Kauaʻi Long-Stay & Estate Residency Flagship:
 * "Private chef residency built around the Garden Island."
 * Hanalei, Princeville, Poʻipū, Kōloa estate weeks.
 */
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { Seo, faqLd, serviceLd, breadcrumbLd } from '@/platform/seo';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import { RateTable } from '@/components/RateTable';
import { BridgeCallout, CanopyBand, FramedHero, InquiryChip } from './kit';

const H1 = 'Private dining built around your Kauaʻi stay.';

const SHORE_LOGISTICS = [
  {
    shore: 'North Shore: Hanalei, Princeville & Kīlauea',
    season: 'Prime May–September (Summer Surf & Calm Waters)',
    logistics: 'Riverfront compounds, bluff verandas, and gated estates. Far-North itineraries (Hāʻena) run on a written 72-hour notice protocol with documented Hanalei bridge closure protection.',
  },
  {
    shore: 'South Shore: Poʻipū, Kōloa & Kukuiʻula',
    season: 'Prime November–March (Gentle Winter Swells & Sun)',
    logistics: 'Open-air estate lānais and resort residences with purpose-built culinary kitchens. Zero bridge or river bottlenecks; reliable sunshine and immediate access to sunny South Shore markets.',
  },
];

const SCHEDULES = [
  {
    duration: '3–4 Days',
    title: 'Weekend Estate Escape',
    desc: 'Arrival evening dinner, slow veranda breakfasts, packed beach-day coolers for Polihale or Keʻe, and a signature plated dinner overlooking the sunset.',
  },
  {
    duration: '5–7 Days',
    title: 'The Full Garden Island Week',
    desc: 'Daily breakfasts, garden-fresh lunches, and diverse evening dining: family-style grill nights, fresh local shrimp feasts, and a multi-course celebration dinner.',
  },
  {
    duration: '10+ Days',
    title: 'Extended Residence Program',
    desc: 'Continuous household culinary management with rotating farm sourcing, customized dietary menus, and flexible off-days agreed upon in your written quote.',
  },
];

const PACKAGES = [
  {
    title: 'Hanalei River Villa 5-Day Stay Chef',
    tag: 'Example Package · 6 Guests · 5 Days',
    price: '$5,950 chef fee + groceries at cost',
    summary: 'Complete culinary management for a private North Shore riverfront compound.',
    includes: [
      'Dedicated private chef stationed in your villa kitchen every day ($1,100/day)',
      'Daily morning tropical breakfasts, afternoon lunch, and coursed evening dinners',
      'Daily morning farm runs to Hanalei and Kīlauea organic farm stands',
      'Tailored handling of all dietary requests (gluten-free, vegan, pescatarian)',
      'Continual kitchen maintenance and pantry stocking throughout the trip',
    ],
    idealFor: 'Families and executive groups staying in Hanalei or Princeville estates.',
  },
  {
    title: 'Poʻipū Oceanfront 7-Day Residency',
    tag: 'Example Package · 10 Guests · 7 Days',
    price: '$7,700 chef fee + groceries at cost',
    summary: 'Seamless private dining for an extended multi-generational family vacation on the South Shore.',
    includes: [
      'Chef dedicated to your estate kitchen across 7 days',
      'Breakfasts, poolside lunch platters, afternoon refreshments, and seated dinners',
      'Direct sourcing runs to West Side fishermen and local Kauaʻi cattle companies',
      'Full kitchen restoration and pantry maintenance',
    ],
    idealFor: 'Multi-family groups and milestone celebration stays.',
  },
];

const RATE_ROWS = [
  { label: 'Chef Day Rate', value: '$1,100 / day', note: 'covers chef labor, menu design, provisioning & daily service' },
  { label: 'Groceries', value: 'At cost', note: 'original receipts attached with 0% markup' },
  { label: 'Server / Bartender', value: '$55 / hour', note: 'recommended for groups of 8+ (4-hour floor)' },
  { label: 'Sous Chef', value: '$75 / hour', note: 'for groups of 12+ requiring dual kitchen stations' },
  { label: 'Service Charge', value: '20.0%', note: 'itemized on its own line' },
  { label: 'Hawaiʻi GET', value: '4.7120%', note: 'state tax pass-through on its own line' },
];

const FAQ = [
  {
    q: 'How much does Stay Chef on Kauaʻi cost?',
    a: 'The Stay Chef day rate is $1,100 a day. Groceries are passed through directly at cost with receipts. The 20% service charge and Kauaʻi County GET (4.7120%) appear on their own lines.',
  },
  {
    q: 'What happens if heavy rains close the Hanalei bridge?',
    a: 'Far-North service includes written bridge-closure terms: documented highway closures reschedule without forfeit rather than penalizing clients.',
  },
  {
    q: 'Does the chef live in our house?',
    a: 'No. Your chef arrives before breakfast service and departs in the evening after dinner is plated and the kitchen is sanitized. The house remains yours.',
  },
  {
    q: 'Can the chef stock the villa before our flight arrives at Līhuʻe (LIH)?',
    a: 'Yes. Pre-arrival grocery stocking is standard: send your preferred beverages, fruits, and staples, and the kitchen will be stocked before you arrive.',
  },
  {
    q: 'Can you cater across both shores during our stay?',
    a: 'Yes. We cook in Hanalei, Princeville, Poʻipū, Kōloa, and Kīlauea year-round. Base zones carry $0 travel fees.',
  },
];

export default function KauaiStayChef() {
  const { link } = useSite();
  return (
    <article>
      <Seo
        title="Stay Chef Kauaʻi — Private Chef for Your Whole Stay from $1,100/Day | myCHEF"
        description="Private chef daily residency across Kauaʻi: Hanalei, Princeville, Poʻipū, and Kīlauea. From $1,100/day plus groceries at cost with receipts. 3, 5, 7, and 10+ day schedules."
        path={link('stay-chef')}
        ogImage="/img/kauai/hero-stay-chef.jpg"
        jsonLd={[
          serviceLd('Stay Chef Kauaʻi', 'Dedicated multi-day private chef culinary residency in your Kauaʻi villa or estate kitchen.', link('stay-chef'), 'Kauaʻi'),
          faqLd(FAQ),
          breadcrumbLd([
            { name: 'Kauaʻi', path: link('') },
            { name: 'Stay Chef', path: link('stay-chef') },
          ]),
        ]}
      />

      <FramedHero
        image="/img/kauai/hero-stay-chef.jpg"
        alt="Our chef preparing a fresh morning tropical fruit spread on a Hanalei riverfront estate lānai"
        eyebrow="Stay Chef · Kauaʻi"
        title={H1}
        sub="One dedicated chef, your estate kitchen, every day of the stay. Breakfast on the veranda, beach-day coolers, and coursed dinners cooked around your schedule. From $1,100 a day plus groceries at cost."
      >
        <div className="flex flex-wrap items-center gap-5">
          <Link to={link('quote?service=stay-chef')} className="cta-site">
            Begin an inquiry
          </Link>
          <Link to={link('pricing')} className="cta-secondary-site">
            The rate card →
          </Link>
        </div>
        <div className="mt-6">
          <InquiryChip>From $1,100/day · Groceries at cost with receipts · Itemized written quotes</InquiryChip>
        </div>
      </FramedHero>

      {/* The Two-Shore Model */}
      <section className="mx-auto max-w-6xl px-6 py-16" aria-labelledby="two-shores">
        <div className="max-w-2xl">
          <p className="eyebrow-site text-accent-site">LOCAL LOGISTICAL MASTERY</p>
          <h2 id="two-shores" className="h2-site mt-3">The Two-Shore Model.</h2>
          <p className="measure-site mt-4 text-ink-2">
            Kauaʻi has two distinct resort coasts separated by mountains and microclimates. We plan your menus and logistics around the reality of your shore:
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SHORE_LOGISTICS.map((shore) => (
            <div key={shore.shore} className="card-site p-7 bg-[#F7F5F0] border border-line-site">
              <h3 className="font-display text-xl font-medium text-ink">{shore.shore}</h3>
              <p className="mt-2 text-xs font-semibold text-accent-site uppercase tracking-wider">{shore.season}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-2">{shore.logistics}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <BridgeCallout />
        </div>
      </section>

      {/* Canopy Band — Length of Stay Schedules */}
      <CanopyBand>
        <div className="max-w-2xl">
          <p className="eyebrow-site">Stay Lengths & Schedules</p>
          <h2 className="h2-site mt-3">From a 3-day weekend to a 2-week residency.</h2>
          <p className="measure-site mt-4 text-ink-2">
            Flexible culinary schedules designed around your vacation activities:
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SCHEDULES.map((sched) => (
            <div key={sched.duration} className="card-site p-6 bg-white/95">
              <span className="font-accent-site text-sm font-semibold tracking-wider text-accent-site">
                {sched.duration}
              </span>
              <h3 className="font-display mt-2 text-lg font-medium text-ink">{sched.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-ink-2">{sched.desc}</p>
            </div>
          ))}
        </div>
      </CanopyBand>

      {/* Example Packages */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="eyebrow-site text-accent-site">Example Packages</p>
          <h2 className="h2-site mt-2">Representative multi-day itineraries.</h2>
          <p className="measure-site mt-4 text-ink-2">
            Model budgets based on real Kauaʻi estate stays. All written quotes itemize exact chef days, staffing, and fee stack:
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {PACKAGES.map((pkg, i) => (
            <SectionReveal key={pkg.title} delay={i * 60}>
              <div className="card-site flex h-full flex-col justify-between p-7 bg-[#F7F5F0] border border-line-site">
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
      </section>

      {/* Rate Card */}
      <section className="band-site section-pad">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <h2 className="h2-site">The Kauaʻi Stay Chef rate card.</h2>
            <div className="mt-8">
              <RateTable rows={RATE_ROWS} footnote="Every fee published. Groceries billed at cost with original receipts. 50% deposit locks the date after written quote approval." />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to={link('quote?service=stay-chef')} className="cta-site">
                Request your stay dates
              </Link>
              <Link to={link('pricing')} className="cta-secondary-site">See full Kauaʻi rate card →</Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad rule-t bg-[#F7F5F0]">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <p className="eyebrow-site text-accent-site">Stay Chef Operations</p>
            <h2 className="h2-site mt-2 mb-6">Frequently asked questions about Kauaʻi residencies</h2>
            <FAQAccordion items={FAQ} />
          </SectionReveal>
        </div>
      </section>
    </article>
  );
}
