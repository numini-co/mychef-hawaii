/**
 * Oʻahu /private-chef (design/private-chef.md — "the service directory").
 * Split-editorial hero → products as a RULED TABLE (Service · Format · Price)
 * → corridor index (Waikīkī COI note) → how-a-dinner-runs → kitchen gate →
 * included/separate twin lists → menu teaser → kamaʻāina panel → FAQ → quote.
 */
import { Link } from 'react-router';
import { Seo, faqLd, serviceLd, breadcrumbLd } from '@/platform/seo';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import QuoteCTA from '@/components/QuoteCTA';

const H1 = 'A chef for the house.';

const PRODUCTS = [
  { service: 'Signature dinner', format: 'Coursed dinner, cooked and served in your kitchen', price: '$125–$190 /guest', to: '/oahu/menus/signature-three-course' },
  { service: 'Date Night', format: 'Fixed-price evening for two', price: 'from $450', to: '/oahu/services/date-night' },
  { service: 'Stay Chef', format: 'A chef for every day of the stay', price: 'from $850 /day', to: '/oahu/stay-chef' },
  { service: 'Vacation chef, full board', format: 'Breakfasts, provisioning, dinners', price: '$179–$300+ /guest /day', to: '/oahu/services/vacation-chef' },
];

const CORRIDORS = [
  { name: 'Waikīkī', note: 'In-suite specialists — building COIs and freight elevators handled.', slug: 'locations/waikiki' },
  { name: 'Honolulu', note: 'Metro homes and estates across the city.', slug: 'locations/honolulu' },
  { name: 'Kahala–Gold Coast', note: 'Estate service, weekly cook days, butler-level tables.', slug: 'locations/kahala-gold-coast' },
  { name: 'Ko Olina', note: 'Resort residences with purpose-built chef kitchens.', slug: 'locations/ko-olina' },
  { name: 'Kailua–Lanikai', note: 'Windward beachfront estates.', slug: 'locations/kailua-lanikai' },
  { name: 'North Shore & Turtle Bay', note: 'Estate weeks; travel from $75, published.', slug: 'locations/north-shore' },
];

const FAQ = [
  {
    q: 'What does a private chef dinner cost on Oʻahu?',
    a: 'The Signature dinner runs $125–$190 a guest with groceries inside the band. Table menus start at $95–$125; Premium runs $190–$275; Chef’s table $275–$400+. The written quote is the confirmed total.',
  },
  {
    q: 'What is included in the per-guest price?',
    a: 'Menu design, same-day shopping, cooking, table service, cleanup, and groceries. Staffing beyond the chef, the bar cart, and travel zones are separate itemized lines.',
  },
  {
    q: 'Can you cook in our Waikīkī suite?',
    a: 'Yes — where the suite has a real kitchen and the building allows it. We issue the COI and book the freight elevator as standard practice.',
  },
  {
    q: 'Do you offer a resident weekly service?',
    a: 'Yes — the kamaʻāina weekly line runs from $300 a week plus groceries at cost: one standing cook day, a week of dinners. It is Oʻahu-exclusive in this network.',
  },
  {
    q: 'How far ahead should we book?',
    a: 'One to two weeks is comfortable for dinners; Stay Chef weeks want three to six. Last-minute requests are always worth sending.',
  },
  {
    q: 'Is gratuity expected?',
    a: 'No. Gratuity is always voluntary and never suggested by us. The 20% service charge is itemized separately on the quote.',
  },
];

export default function OahuPrivateChef() {
  return (
    <>
      <Seo
        title="Hire a Private Chef on Oʻahu — Dinners, Date Nights, Stay Chef | myCHEF"
        description="Signature dinners $125–$190 a guest, Date Night from $450, Stay Chef from $850 a day, vacation-chef full board $179–$300+ per guest per day. Serving Waikīkī, Honolulu, Kahala, Ko Olina, Kailua, and the North Shore."
        path="/oahu/private-chef"
        ogImage="/img/oahu/hero-private-chef.jpg"
        jsonLd={[
          serviceLd('Private chef Oʻahu', 'Private chef service across Oʻahu — Signature dinners, Date Nights, and Stay Chef weeks at published prices.', '/oahu/private-chef', 'Oʻahu'),
          faqLd(FAQ),
          breadcrumbLd([{ name: 'Oʻahu', path: '/oahu' }, { name: 'Private chef', path: '/oahu/private-chef' }]),
        ]}
      />

      {/* Split-editorial hero */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow-site">Private chef · Oʻahu</p>
            <h1 className="h1-site mt-5">{H1}</h1>
            <p className="measure-site mt-6 text-ink-2">
              Your chef shops that morning, arrives before service, cooks in your kitchen, serves each
              course, and leaves the kitchen clean. Groceries are inside the band; receipts on request.
            </p>
            <p className="tabular-site mt-5 text-sm text-ink-2">
              Signature $125–$190 a guest · Stay Chef from $850 a day.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link to="/oahu/quote" className="cta-site">Get a written quote</Link>
              <a href="https://wa.me/971551744849" target="_blank" rel="noreferrer" className="cta-secondary-site">WhatsApp us →</a>
            </div>
          </div>
          <SectionReveal className="md:col-span-6">
            <figure className="card-site overflow-hidden">
              <img
                src="/img/oahu/hero-private-chef.jpg"
                alt="A chef working at a modern Honolulu condo kitchen in blue-hour light, courses in progress on a stone counter"
                className="h-full w-full object-cover"
                style={{ aspectRatio: '4/3' }}
                fetchPriority="high"
              />
            </figure>
          </SectionReveal>
        </div>
      </section>

      {/* Products as a ruled table — Service · Format · Price */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <h2 className="h2-site">The service directory.</h2>
          </SectionReveal>
          <div className="mt-8" role="table" aria-label="Private chef services and prices">
            <div className="eyebrow-site hidden grid-cols-[1fr_1.6fr_auto] gap-6 pb-3 md:grid" role="row">
              <span role="columnheader">Service</span>
              <span role="columnheader">Format</span>
              <span role="columnheader" className="text-right">Price</span>
            </div>
            {PRODUCTS.map((p, i) => (
              <SectionReveal key={p.service} delay={i * 40}>
                <Link
                  to={p.to}
                  className="motion-site grid gap-1 border-t border-line-site py-5 hover:border-[#3D5A68] md:grid-cols-[1fr_1.6fr_auto] md:items-baseline md:gap-6"
                  role="row"
                >
                  <span className="font-display text-lg font-medium">{p.service}</span>
                  <span className="text-sm text-ink-2">{p.format}</span>
                  <span className="tabular-site font-medium md:text-right">{p.price}</span>
                </Link>
              </SectionReveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-2">
            日本語でのご相談も可能です —{' '}
            <Link to="/oahu/ja" className="link-site">日本語のページへ</Link>
          </p>
        </div>
      </section>

      {/* Corridor index */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <h2 className="h2-site">Corridors.</h2>
          </SectionReveal>
          <div className="mt-8">
            {CORRIDORS.map((c, i) => (
              <SectionReveal key={c.slug} delay={Math.min(i, 4) * 40}>
                <Link
                  to={`/oahu/${c.slug}`}
                  className="motion-site grid grid-cols-[1fr_auto] items-baseline gap-4 border-t border-line-site py-4 hover:border-[#3D5A68] md:grid-cols-[260px_1fr_auto]"
                >
                  <span className="font-display text-lg font-medium">{c.name}</span>
                  <span className="hidden text-sm text-ink-2 md:block">{c.note}</span>
                  <span aria-hidden="true" className="text-accent-site">→</span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How a dinner runs */}
      <section className="section-pad rule-t">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <SectionReveal>
            <h2 className="h2-site">How a dinner runs.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Your chef shops that morning, arrives before service, cooks in your villa kitchen, serves
              each course, and leaves the kitchen clean. You will not be asked to help, and you will not
              find a mess.
            </p>
          </SectionReveal>
          <SectionReveal delay={60}>
            <div className="card-site p-8">
              <p className="eyebrow-site mb-3">The kitchen gate</p>
              <p className="text-ink-2">
                We will not pretend a coffee maker and a minibar are a pass — hotel rooms without
                kitchens are declined. Villas, suites with kitchens, and estates are the stage.
              </p>
              <Link to="/oahu/guides/villa-kitchen" className="link-site mt-4 inline-block">The kitchen guide →</Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Included / Separate twin lists */}
      <section className="section-pad rule-t">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <SectionReveal>
            <h2 className="h2-site">Included.</h2>
            <ul className="mt-6 space-y-3">
              {['Menu design, written for your table', 'Same-day shopping — groceries inside the band', 'Cooking, table service, and full cleanup', 'Receipts on request, always'].map((x) => (
                <li key={x} className="flex gap-3 border-t border-line-site pt-3">
                  <span aria-hidden="true" className="text-accent-site">—</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>
          <SectionReveal delay={60}>
            <h2 className="h2-site">Separate lines.</h2>
            <ul className="mt-6 space-y-3">
              {['Staffing — server $55/hr, sous chef $75/hr, four-hour floor', 'Packaged bar cart — from $650/4hr + $45/guest', 'Travel zones — North Shore & Turtle Bay from $75', 'Rentals at cost, coordinated'].map((x) => (
                <li key={x} className="flex gap-3 border-t border-line-site pt-3">
                  <span aria-hidden="true" className="text-accent-site">—</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </section>

      {/* Menu teaser */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <h2 className="h2-site">Menus to start from.</h2>
          </SectionReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name: 'Signature three-course', to: '/oahu/menus/signature-three-course', img: '/img/oahu/menu-signature.jpg', alt: 'A plated Pacific Rim course — seared fish, bright vegetables — on a stone counter, editorial light' },
              { name: 'Tasting menu', to: '/oahu/menus/tasting-menu', img: '/img/oahu/hero-pricing.jpg', alt: 'A composed tasting course on ceramic, city lights blurred behind glass' },
              { name: 'Pacific Rim omakase', to: '/oahu/menus/pacific-rim-omakase', img: '/img/oahu/loc-waikiki.jpg', alt: 'A suite kitchen counter set for an omakase progression, Honolulu lights at night' },
            ].map((m, i) => (
              <SectionReveal key={m.to} delay={i * 40}>
                <Link to={m.to} className="card-site motion-site group block overflow-hidden hover:border-[#3D5A68]">
                  <img src={m.img} alt={m.alt} loading="lazy" className="w-full object-cover" style={{ aspectRatio: '3/2' }} />
                  <span className="block p-5 font-display text-lg font-medium">{m.name} →</span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kamaʻāina cross-link panel */}
      <section className="section-pad pt-0">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <div className="card-site p-8 md:p-10">
              <p className="eyebrow-site">For residents</p>
              <h2 className="h2-site mt-3 max-w-2xl">The weekly cook day, from $300 a week plus groceries.</h2>
              <p className="measure-site mt-4 text-ink-2">
                One chef, one standing day, a week of dinners cooked in your kitchen. Kahala to Hawaiʻi Kai.
              </p>
              <Link to="/oahu/services/personal-chef-weekly" className="link-site mt-5 inline-block">The kamaʻāina weekly line →</Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="h2-site mb-6">Questions, answered.</h2>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <QuoteCTA cta={{ label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: 'https://wa.me/971551744849' }} />
    </>
  );
}
