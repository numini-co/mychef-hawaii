/**
 * Oʻahu /weddings (design/wedding.md — "the estate & elopement wedge").
 * Typographic tables instead of imagery; venue-exclusivity honesty; ruled
 * wedding-week table; per-format ruled rows; elopement module; cost
 * benchmarks; corridor links; resident-volume honesty; FAQ; quote.
 */
import { Link } from 'react-router';
import { Seo, faqLd, breadcrumbLd } from '@/platform/seo';
import { RateTable } from '@/components/RateTable';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import QuoteCTA from '@/components/QuoteCTA';

const WEEK_ROWS = [
  { label: 'Welcome dinner', value: 'from $125/guest', note: 'family-style or buffet · 20–75 guests · + staffing' },
  { label: 'Rehearsal dinner', value: 'from $125/guest', note: 'plated or family · 12–40 guests · + staffing' },
  { label: 'Ceremony-adjacent', value: 'per guest + staffing', note: 'pūpū & cocktail service for the gap hour' },
  { label: 'Reception', value: 'from $125/guest', note: 'plated 2–3 courses or premium buffet · 30–75 · >75 written exception' },
  { label: 'Recovery brunch', value: 'from $95/guest', note: 'day-after · 10–40 guests · late morning' },
];

const FORMATS = [
  { name: 'The wedding week', note: 'One contract, every meal, one chef team.', to: '/oahu/weddings/wedding-week' },
  { name: 'Welcome dinner', note: 'The first night, built for arrivals.', to: '/oahu/weddings/welcome-dinner' },
  { name: 'Rehearsal dinner', note: '12–40 of the closest people.', to: '/oahu/weddings/rehearsal-dinner' },
  { name: 'Reception catering', note: 'Estates and villas, not ballrooms.', to: '/oahu/weddings/reception-catering' },
  { name: 'Recovery brunch', note: 'The morning after, handled.', to: '/oahu/weddings/recovery-brunch' },
  { name: 'Elopement dinners', note: 'Dinner for two from $450.', to: '/oahu/weddings/elopement' },
  { name: 'Estate weddings', note: 'Private property is our ground.', to: '/oahu/weddings/estate-wedding' },
  { name: 'What it costs', note: 'Real benchmarks, worked math.', to: '/oahu/weddings/wedding-cost' },
  { name: 'Venues with kitchens', note: 'What to ask before you book.', to: '/oahu/weddings/venues' },
];

const FAQ = [
  {
    q: 'Can you cater at any Oʻahu venue?',
    a: 'No — and we say so early. Some marquee venues hold exclusive caterers. Estates, villas, and private property are where an outside chef wins, and that is where we work.',
  },
  {
    q: 'What does wedding catering cost on Oʻahu?',
    a: 'Our staffed lines start at $125 a guest plus staffing at $55/$75 an hour, with 20% service and GET itemized. Planner benchmarks for basic buffet service run $60–$75 a head — a different product, quoted honestly against ours.',
  },
  {
    q: 'What is the wedding week?',
    a: 'Every meal from the welcome dinner to the recovery brunch under one contract with one chef team — per-event guest counts, menus matched per moment, and a single written quote for the whole week.',
  },
  {
    q: 'Do you cater elopements?',
    a: 'Yes — the unbundled micro-wedding is a coursed dinner for two from $450, in your suite, villa, or estate kitchen.',
  },
];

export default function OahuWeddings() {
  return (
    <>
      <Seo
        title="Wedding Catering Oʻahu — Estates, Villas, Elopements | myCHEF"
        description="Estate, villa, and elopement wedding catering on Oʻahu. The wedding week as one contract — welcome dinner to recovery brunch, from $125 a guest plus staffing. Written quotes, itemized fees."
        path="/oahu/weddings"
        ogImage="/img/oahu/hero-weddings.jpg"
        jsonLd={[faqLd(FAQ), breadcrumbLd([{ name: 'Oʻahu', path: '/oahu' }, { name: 'Weddings', path: '/oahu/weddings' }])]}
      />

      {/* Split-editorial hero */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow-site">Weddings · Oʻahu</p>
            <h1 className="h1-site mt-5">Wedding catering, outside the ballroom.</h1>
            <p className="measure-site mt-6 text-ink-2">
              Some marquee venues hold exclusive caterers — we say so plainly. Estates, villas, and
              private property are where an outside chef wins. That is our ground.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link to="/oahu/quote" className="cta-site">Get a written quote</Link>
              <Link to="/oahu/weddings/wedding-week" className="cta-secondary-site">The wedding week →</Link>
            </div>
          </div>
          <SectionReveal className="md:col-span-6">
            <figure className="card-site overflow-hidden">
              <img
                src="/img/oahu/hero-weddings.jpg"
                alt="A long dinner table set for a wedding at a Kahala estate at dusk, linen and low floral arrangements, editorial light"
                className="h-full w-full object-cover"
                style={{ aspectRatio: '4/3' }}
                fetchPriority="high"
              />
            </figure>
          </SectionReveal>
        </div>
      </section>

      {/* Resident-volume honesty */}
      <section className="rule-t">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="measure-site text-sm text-ink-2">
            Honolulu recorded 9,943 weddings in 2021 — most of them local. We serve the ones with a
            kitchen: estates, villas, and private property across the island.
          </p>
        </div>
      </section>

      {/* Wedding-week ruled table */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <h2 className="h2-site">The wedding week, one contract.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Four events, four caterers, four contracts is the old way. Every meal of the week under
              one quote — from $125 a guest plus staffing, itemized per event.
            </p>
            <div className="mt-8">
              <RateTable
                rows={WEEK_ROWS}
                footnote="Staffing at $55/$75 per hour, four-hour floor. 20% service and GET up to 4.7120% on their own lines."
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <Link to="/oahu/weddings/wedding-week" className="link-site">How the week works →</Link>
              <Link to="/oahu/pricing/wedding-week-budget" className="link-site">A week, budgeted line by line →</Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Per-format ruled rows */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <h2 className="h2-site">Formats.</h2>
          </SectionReveal>
          <div className="mt-8">
            {FORMATS.map((f, i) => (
              <SectionReveal key={f.to} delay={Math.min(i, 4) * 40}>
                <Link
                  to={f.to}
                  className="motion-site grid grid-cols-[1fr_auto] items-baseline gap-4 border-t border-line-site py-4 hover:border-[#3D5A68] md:grid-cols-[280px_1fr_auto]"
                >
                  <span className="font-display text-lg font-medium">{f.name}</span>
                  <span className="hidden text-sm text-ink-2 md:block">{f.note}</span>
                  <span aria-hidden="true" className="text-accent-site">→</span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Elopement module + cost benchmarks */}
      <section className="section-pad rule-t">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <SectionReveal>
            <div className="card-site h-full p-8">
              <p className="eyebrow-site mb-3">The unbundled micro-wedding</p>
              <h2 className="h2-site">Dinner for two, from $450.</h2>
              <p className="mt-4 text-ink-2">
                The ceremony somewhere that means something; the reception a coursed dinner for two in
                your suite or villa. No chair covers were harmed.
              </p>
              <Link to="/oahu/weddings/elopement" className="link-site mt-5 inline-block">The elopement dinner →</Link>
            </div>
          </SectionReveal>
          <SectionReveal delay={60}>
            <h2 className="h2-site">The honest benchmarks.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Planner benchmarks put Oʻahu buffet catering at $60–$75 a head — drop-off service, chafing
              dishes, and a 23–25% venue service charge on top. Our lines start at $125 a guest: a chef
              cooking on site, full staffing, and a 20% service charge itemized on its own line.
              Different products; your quote shows exactly which one you are buying.
            </p>
            <Link to="/oahu/weddings/wedding-cost" className="link-site mt-5 inline-block">Wedding costs, worked →</Link>
          </SectionReveal>
        </div>
      </section>

      {/* Corridor links */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <h2 className="h2-site">Wedding corridors.</h2>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
              <Link to="/oahu/locations/honolulu/wedding-catering" className="link-site">Honolulu →</Link>
              <Link to="/oahu/locations/ko-olina/wedding-catering" className="link-site">Ko Olina →</Link>
              <Link to="/oahu/locations/north-shore/catering" className="link-site">North Shore estates →</Link>
              <Link to="/oahu/weddings/venues" className="link-site">Venues with kitchens →</Link>
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

      <QuoteCTA
        cta={{
          label: 'Get a written quote',
          href: '/oahu/quote',
          secondaryLabel: 'WhatsApp us',
          secondaryHref: 'https://wa.me/971551744849',
          note: 'Tell us the venue (or the shortlist), the guest counts per event, and the dates — the written quote itemizes the whole week.',
        }}
      />
    </>
  );
}
