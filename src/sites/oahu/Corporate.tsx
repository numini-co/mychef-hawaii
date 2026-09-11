/**
 * Oʻahu /corporate (design/corporate.md — "the executive & production catering engine").
 * Bespoke flagship for executive dinners, convention catering, board meetings,
 * corporate retreats, and production/film crew catering in Honolulu and across Oʻahu.
 */
import { Link } from 'react-router';
import { Seo, faqLd, serviceLd, breadcrumbLd } from '@/platform/seo';
import { CONTACT } from '@/platform/config';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import QuoteCTA from '@/components/QuoteCTA';
import { RateTable } from '@/components/RateTable';

const H1 = 'Corporate catering that clears the loading dock.';

const CORPORATE_LINES = [
  {
    title: 'Executive Boardroom & Penthouse Dinners',
    tag: '10–25 Guests · Plated Courses',
    price: 'From $135 / guest + staffing',
    desc: 'Bespoke multi-course fine dining for senior leadership, board dinners, and client entertainment in private penthouse suites, luxury estates, or executive office boardrooms.',
  },
  {
    title: 'Convention Dining & Off-Site Receptions',
    tag: '20–75 Guests · Stations or Buffet',
    price: 'From $125 / guest + staffing',
    desc: 'Full-service catering for convention attendees, industry receptions, and corporate hospitality suites during the Hawaiʻi Convention Center window. Building COIs and loading dock access handled.',
  },
  {
    title: 'Multi-Day Executive Retreat Catering',
    tag: '8–30 Guests · All-Day Coverage',
    price: 'From $140 / guest / day',
    desc: 'Seamless breakfast, working lunch, afternoon refreshments, and seated evening dinner for company retreats in Kahala, Kailua, and North Shore estates.',
  },
  {
    title: 'Film & Media Production Crew Catering',
    tag: '15–60 Guests · Location Catering',
    price: 'Itemized written proposals',
    desc: 'Punctual, hot location catering tailored to filming call-sheets on soundstages, private properties, and remote Oʻahu locations. Dietary-labeled hot boxes or staffed buffet setups.',
  },
];

const SPECS = [
  { label: 'COI & Insurance', value: 'Included', note: 'Certificate of Insurance naming building management or venue issued before event' },
  { label: 'Loading Dock & Freight', value: 'Pre-scheduled', note: 'Direct coordination with building engineers and dock superintendents across Honolulu' },
  { label: 'Professional Servers', value: '$55 / hour', note: 'Quiet, professional service staff in corporate attire (4-hour floor)' },
  { label: 'Sous Chefs', value: '$75 / hour', note: 'Kitchen production specialists for large seated cadences (4-hour floor)' },
  { label: 'Service Charge', value: '20.0%', note: 'Itemized transparently on its own line' },
  { label: 'Hawaiʻi GET', value: '4.7120%', note: 'State tax pass-through on its own line' },
];

const FAQ = [
  {
    q: 'Can you provide a Certificate of Insurance (COI) for our building?',
    a: 'Yes. We carry comprehensive commercial general liability insurance and routinely issue certificates naming your property manager, landlord, or venue as additional insureds at no additional fee.',
  },
  {
    q: 'How do you handle loading dock and freight elevator logistics?',
    a: 'Our logistics desk handles dock master communications, freight elevator bookings, and security clearance for Downtown Honolulu office towers, Kakaʻako venues, and Waikīkī high-rises.',
  },
  {
    q: 'What is the maximum group size you can accommodate?',
    a: 'Our standard staffed capacity covers up to 75 guests for seated and reception formats. Larger corporate gatherings over 75 guests are quoted as written exceptions with dedicated dual-station culinary teams.',
  },
  {
    q: 'Can you accommodate executive dietary restrictions?',
    a: 'Yes. All dietary requirements (vegan, gluten-free, kosher-style, halal-friendly, severe allergies) are pre-collected and prepared on distinct culinary lines with personalized plating labels.',
  },
  {
    q: 'How does corporate billing work?',
    a: 'We provide itemized written quotes suitable for corporate purchase orders, corporate cards, and ACH transfers. An initial 50% deposit locks the date, with the balance due before the event.',
  },
];

export default function OahuCorporate() {
  return (
    <>
      <Seo
        title="Corporate Catering Honolulu — Executive Dinners, Retreats & Conventions | myCHEF"
        description="Corporate catering across Oʻahu: executive dinners, convention receptions, corporate retreats, and film production catering for 10–75 guests."
        path="/oahu/corporate"
        ogImage="/img/oahu/corporate.jpg"
        jsonLd={[
          serviceLd('Corporate Catering Honolulu', 'Executive boardroom catering, convention off-site dinners, and corporate retreat dining across Oʻahu.', '/oahu/corporate', 'Oʻahu'),
          faqLd(FAQ),
          breadcrumbLd([{ name: 'Oʻahu', path: '/oahu' }, { name: 'Corporate Catering', path: '/oahu/corporate' }]),
        ]}
      />

      {/* Hero section */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow-site">Corporate & Convention Catering · Honolulu</p>
            <h1 className="h1-site mt-5">{H1}</h1>
            <p className="measure-site mt-6 text-ink-2">
              From high-stakes board dinners in Downtown penthouses to off-site convention receptions and film crew location catering. We handle the paperwork, load-in timing, and culinary execution so your event runs without interruption.
            </p>
            <p className="tabular-site mt-5 text-sm text-ink-2">
              10–75 guests · Insured with COI · Itemized written proposals.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link to="/oahu/quote?service=catering" className="cta-site">Request a corporate quote</Link>
              <a href={`https://wa.me/${CONTACT.whatsappNumber}?text=Aloha%20myCHEF%20O%CA%BBahu%20—%20I%27d%20like%20a%20corporate%20catering%20proposal.`} target="_blank" rel="noreferrer" className="cta-secondary-site">WhatsApp our team →</a>
            </div>
          </div>
          <SectionReveal className="md:col-span-6">
            <figure className="card-site overflow-hidden">
              <img
                src="/img/oahu/corporate.jpg"
                alt="A boardroom-style executive dinner plated in a Honolulu residence with city views"
                className="h-full w-full object-cover"
                style={{ aspectRatio: '4/3' }}
                fetchPriority="high"
              />
            </figure>
          </SectionReveal>
        </div>
      </section>

      {/* S2 — Capability grid */}
      <section className="section-pad rule-t bg-[#F7F5F0]">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Corporate Service Lines</p>
            <h2 className="h2-site mt-3">Built for business execution across Oʻahu.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Whether you are hosting an intimate investor dinner or fueling an all-day executive summit:
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {CORPORATE_LINES.map((line, i) => (
              <SectionReveal key={line.title} delay={i * 50}>
                <div className="card-site flex h-full flex-col justify-between p-7 bg-white">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-site">
                        {line.tag}
                      </span>
                      <span className="tabular-site text-sm font-semibold text-ink">
                        {line.price}
                      </span>
                    </div>
                    <h3 className="font-display mt-3 text-xl font-medium text-ink">
                      {line.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-ink-2">
                      {line.desc}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-line-site pt-4 flex items-center justify-between">
                    <span className="text-[11px] text-ink-2">Itemized written proposal</span>
                    <Link to="/oahu/quote?service=catering" className="link-site text-xs font-semibold">
                      Inquire now →
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* S3 — Operations & Specs Table */}
      <section className="band-site section-pad">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <h2 className="h2-site">Operational specifications.</h2>
            <p className="measure-site mt-3 text-ink-2">
              Accounting-ready fee stacks with zero surprises. Everything itemized on your written proposal:
            </p>
            <div className="mt-8">
              <RateTable rows={SPECS} footnote="50% deposit locks date upon proposal approval. Corporate POs and corporate credit cards accepted." />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/oahu/quote?service=catering" className="cta-site" style={{ backgroundColor: 'var(--site-cta-ink)', color: 'var(--site-cta-bg)' }}>
                Get an itemized proposal
              </Link>
              <Link to="/oahu/pricing" className="cta-secondary-site">See all Oʻahu rate cards →</Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* S4 — Corporate FAQ */}
      <section className="section-pad rule-t bg-[#F7F5F0]">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Corporate Logistics</p>
            <h2 className="h2-site mt-2 mb-6">Frequently asked questions about corporate events</h2>
            <FAQAccordion items={FAQ} />
          </SectionReveal>
        </div>
      </section>

      <QuoteCTA
        heading="Plan your corporate or convention event."
        cta={{
          label: 'Request a corporate quote',
          href: '/oahu/quote?service=catering',
          secondaryLabel: 'WhatsApp our team',
          secondaryHref: `https://wa.me/${CONTACT.whatsappNumber}`,
        }}
      />
    </>
  );
}
