/**
 * Oʻahu /catering (design/catering.md — "the capability statement").
 * Corporate/convention lead; spec-sheet card language (typography only);
 * capability spec table with staffing math; staffing SKU table; load-in/COI
 * notes; the 20% vs 23–25% wedge; FAQ; quote.
 */
import { Link } from 'react-router';
import { Seo, faqLd, serviceLd, breadcrumbLd } from '@/platform/seo';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import QuoteCTA from '@/components/QuoteCTA';

const CAPACITY = [
  { guests: '10 guests', crew: '1 chef · 1 server', note: 'Private dining rooms, suite buyouts' },
  { guests: '25 guests', crew: '1 chef · 1 sous · 2 servers', note: 'Offices, estate dinners' },
  { guests: '50 guests', crew: '1 chef · 1 sous · 4–5 servers', note: 'Receptions, convention off-sites' },
  { guests: '75 guests', crew: '1 chef · 2 sous · 6–7 servers', note: 'The published ceiling — over 75 is a written exception' },
];

const FORMATS = [
  { name: 'Buffet', band: 'Table–Signature bands', best: 'Graduations, reunions, open-house formats', to: '/oahu/menus/family-style' },
  { name: 'Family-style', band: 'Signature band', best: 'Rehearsal dinners, reunion tables', to: '/oahu/menus/family-style' },
  { name: 'Plated coursed', band: 'Signature–Premium bands', best: 'Corporate dinners, wedding receptions', to: '/oahu/weddings/reception-catering' },
  { name: 'Pūpū & grazing', band: 'Per-guest, quoted', best: 'Standing receptions, ceremony-adjacent hours', to: '/oahu/menus/pupu-and-grazing' },
  { name: 'Chef-attended stations', band: 'Premium band', best: 'Villa parties, showcase events', to: '/oahu/occasions/villa-party' },
];

const FAQ = [
  {
    q: 'What group sizes do you cater?',
    a: '10–75 guests, staffed. Over 75 is a written exception — we will quote it honestly when the venue and menu allow, but we never imply capacity we cannot staff.',
  },
  {
    q: 'Do you handle venue paperwork?',
    a: 'Yes — certificates of insurance naming the building or venue, freight-elevator and dock scheduling, and rentals coordination are standard for us across Waikīkī, Kakaʻako, and Downtown.',
  },
  {
    q: 'Can you serve alcohol at our event?',
    a: 'We do not sell alcohol. It is client-supplied or poured by a licensed referral bartender; the packaged bar cart (from $650/4hr + $45 a guest) covers mixers, ice, and garnishes.',
  },
  {
    q: 'How is catering priced?',
    a: 'Per-guest food lines from the published card, staffing at $55/$75 an hour with a four-hour floor, travel where it applies, then 20% service and GET up to 4.7120% — every charge on its own line.',
  },
  {
    q: 'What about dietary restrictions in a large group?',
    a: 'Protocols are collected in advance and designed into the menu — vegan, gluten-free, and allergy guests eat the same standard as the table, not a workaround.',
  },
  {
    q: 'Do you cater outside Honolulu?',
    a: 'Yes — Ko Olina, Kapolei, Kailua, and the North Shore (published travel fee from $75 on the North Shore and Turtle Bay).',
  },
];

export default function OahuCatering() {
  return (
    <>
      <Seo
        title="Catering on Oʻahu — Staffed Events for 10–75 Guests | myCHEF"
        description="Staffed catering across Oʻahu for 10–75 guests: buffets, family-style, plated courses, pūpū and grazing, chef-attended stations. Servers $55/hr, published per-guest lines, written quotes."
        path="/oahu/catering"
        ogImage="/img/oahu/hero-catering.jpg"
        jsonLd={[
          serviceLd('Catering Oʻahu', 'Staffed event catering across Oʻahu for 10–75 guests with published per-guest pricing and itemized staffing.', '/oahu/catering', 'Oʻahu'),
          faqLd(FAQ),
          breadcrumbLd([{ name: 'Oʻahu', path: '/oahu' }, { name: 'Catering', path: '/oahu/catering' }]),
        ]}
      />

      {/* Hero — capability lead */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow-site">Catering · Oʻahu</p>
            <h1 className="h1-site mt-5">Catering for the event.</h1>
            <p className="measure-site mt-6 text-ink-2">
              10–75 guests, staffed. Over 75 is a written exception — quoted, never implied.
              The Hawaiʻi Convention Center runs a modified schedule through 2027; the dinners moved
              out, and we cook where they land.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link to="/oahu/quote" className="cta-site">Get a written quote</Link>
              <Link to="/oahu/corporate" className="cta-secondary-site">Corporate & convention →</Link>
            </div>
          </div>
          <SectionReveal className="md:col-span-6">
            <figure className="card-site overflow-hidden">
              <img
                src="/img/oahu/hero-catering.jpg"
                alt="A staffed evening reception in a Honolulu penthouse venue, a server passing pūpū against blue-hour city light"
                className="h-full w-full object-cover"
                style={{ aspectRatio: '4/3' }}
                fetchPriority="high"
              />
            </figure>
          </SectionReveal>
        </div>
      </section>

      {/* Capability spec table */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <h2 className="h2-site">The capability spec.</h2>
            <p className="mt-3 text-sm text-ink-2">Staffing math at one server per 10–12 guests — named on every quote.</p>
            <div className="mt-8">
              {CAPACITY.map((row, i) => (
                <SectionReveal key={row.guests} delay={i * 40}>
                  <div className="grid gap-1 border-t border-line-site py-4 md:grid-cols-[140px_1fr_1fr] md:items-baseline md:gap-6">
                    <span className="tabular-site font-display text-lg font-medium">{row.guests}</span>
                    <span className="text-sm">{row.crew}</span>
                    <span className="text-sm text-ink-2">{row.note}</span>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Format spec sheets — typography only */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <h2 className="h2-site">Five formats.</h2>
          </SectionReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FORMATS.map((f, i) => (
              <SectionReveal key={f.name} delay={Math.min(i, 4) * 40}>
                <Link to={f.to} className="card-site motion-site block h-full p-6 hover:border-[#3D5A68]">
                  <h3 className="font-display text-lg font-medium">{f.name}</h3>
                  <p className="tabular-site mt-2 text-sm">{f.band}</p>
                  <p className="mt-3 text-sm text-ink-2">Best for: {f.best}.</p>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Staffing SKU table + load-in notes */}
      <section className="section-pad rule-t">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <SectionReveal>
            <h2 className="h2-site">Staffing, by the hour.</h2>
            <ul className="mt-6 space-y-3">
              {[
                'Servers — $55/hr, four-hour floor',
                'Sous chefs — $75/hr, four-hour floor',
                'Bartenders — via licensed referral; we do not sell alcohol',
                'Packaged bar cart — from $650/4hr + $45/guest',
                'Rentals coordinated at cost',
              ].map((x) => (
                <li key={x} className="flex gap-3 border-t border-line-site pt-3">
                  <span aria-hidden="true" className="text-accent-site">—</span><span>{x}</span>
                </li>
              ))}
            </ul>
            <Link to="/oahu/services/staffing" className="link-site mt-5 inline-block">The staffing hub →</Link>
          </SectionReveal>
          <SectionReveal delay={60}>
            <h2 className="h2-site">Load-in, handled.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Waikīkī towers and Kakaʻako offices run on paperwork: a COI naming the building,
              freight-elevator windows, dock scheduling. We issue, book, and arrive through the
              service corridor — your event starts on time because the logistics happened days earlier.
            </p>
            <Link to="/oahu/guides/condo-load-in-coi" className="link-site mt-5 inline-block">The COI & load-in guide →</Link>
          </SectionReveal>
        </div>
        <div className="mx-auto mt-12 max-w-6xl px-6">
          <SectionReveal>
            <p className="rule-y py-5 text-center text-lg">
              Our service charge is <span className="tabular-site font-medium">20%, itemized</span> — resorts and venues charge <span className="tabular-site">23–25%</span>.
            </p>
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

      <QuoteCTA
        cta={{
          label: 'Get a written quote',
          href: '/oahu/quote',
          secondaryLabel: 'WhatsApp us',
          secondaryHref: 'https://wa.me/971551744849',
          note: 'Tell us the headcount, the venue, and the date — the written quote comes back itemized, and it is the confirmed total.',
        }}
      />
    </>
  );
}
