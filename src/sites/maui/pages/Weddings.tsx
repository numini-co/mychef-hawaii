/**
 * Maui /weddings (design/wedding.md — the network's wedding engine).
 * H1 "The week, not the plated hour." Golden-hour framed hero → five-meal
 * timeline in a dusk band → per-format cards → venue-corridor module →
 * worked budget panel → service-charge wedge → DLNR honesty → planner B2B
 * card → FAQ → quote. West Maui sensitivity line included.
 */
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { Seo, faqLd, breadcrumbLd } from '@/platform/seo';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import QuoteCTA from '@/components/QuoteCTA';
import { content } from '../content';
import WeddingTimeline from './WeddingTimeline';
import { MauiLink, MauiStyles } from './shared';

const record = content.find((r) => r.slug === 'weddings')!;

const FORMATS = [
  { name: 'The wedding week', line: 'Five meals, one contract — the Maui signature.', to: 'weddings/wedding-week' },
  { name: 'Welcome dinner', line: 'Family-style, 20–75 guests. The tone-setter.', to: 'weddings/welcome-dinner' },
  { name: 'Rehearsal dinner', line: 'Plated, 12–40 guests, in a villa — not a back room.', to: 'weddings/rehearsal-dinner' },
  { name: 'Reception catering', line: 'Plated or premium buffet, 30–75 guests.', to: 'weddings/reception-catering' },
  { name: 'Recovery brunch', line: '10–40 guests, the morning after, unhurried.', to: 'weddings/recovery-brunch' },
  { name: 'Elopement', line: 'The dinner after the vows, from $500 for two.', to: 'weddings/elopement' },
  { name: 'Micro wedding', line: 'Up to 30 guests — the good kind of small.', to: 'weddings/micro-wedding' },
  { name: 'Estate wedding', line: 'Kukahiko, Olowalu, Haiku Mill — private ground.', to: 'weddings/estate-wedding' },
];

const VENUES = [
  {
    name: 'Wailea–Mākena',
    note: 'The densest venue cluster on the island — plus Kukahiko Estate, whose kitchen was built for outside caterers.',
    to: 'weddings/venues/wailea-makena',
  },
  {
    name: 'Kapalua',
    note: 'The Ritz-Carlton’s 54 acres, Montage, Merriman’s, the Cliff House — with ridge villas for the week around them.',
    to: 'weddings/venues/kapalua',
  },
  {
    name: 'West Maui',
    note: 'The Kāʻanapali corridor and Olowalu’s estate ground — open, welcoming, rebuilding.',
    to: 'weddings/venues/west-maui',
  },
  {
    name: 'Upcountry & North Shore',
    note: 'Haiku Mill (preferred-vendor list, $650 outside-vendor fee — we tell you up front), Hui Noʻeau, private estates.',
    to: 'weddings/venues/upcountry-north-shore',
  },
];

const FAQ = [
  {
    q: 'What does a Maui wedding week cost in food?',
    a: 'From $150 a guest per event plus staffing. The worked 60-guest example totals $31,500 in food lines across four events — illustrative math on published rates — against resort F&B minimums of $7,500–$15,000 per event at 23–25% service. Our service charge is 20%, on its own line.',
  },
  {
    q: 'Can you cater on the beach?',
    a: 'No — and neither can anyone else, legally: DLNR permits cap beach ceremonies at roughly 20 people with no structures and a two-hour window. The pattern that works is the ceremony on the sand and the reception at an estate. That reception is our product.',
  },
  {
    q: 'Do you work with our planner and venue?',
    a: 'Yes — estate venues gate access through approved planners, and we work inside that channel, including honest disclosure of vendor-list fees (Haiku Mill’s is $650) before you commit.',
  },
  {
    q: 'How many guests can you serve at a reception?',
    a: 'Thirty to seventy-five is the staffed reception range; over 75 is a written exception, quoted, never implied.',
  },
];

export default function MauiWeddings() {
  const { link } = useSite();
  return (
    <article>
      <Seo
        title={record.title}
        description={record.meta.description}
        path={link('weddings')}
        ogImage="/img/maui/hero-weddings.jpg"
        jsonLd={[
          faqLd(FAQ),
          breadcrumbLd([{ name: 'Maui', path: link('') }, { name: record.h1, path: link('weddings') }]),
        ]}
      />
      <MauiStyles />

      <header className="section-pad mx-auto max-w-6xl px-6">
        <p className="eyebrow-site">WEDDINGS · MAUI</p>
        <h1 className="h1-site measure-site mt-4">The week, not the plated hour.</h1>
        <p className="measure-site mt-6 text-lg text-ink-2">
          Maui is a top-25 global destination-wedding market where every meal of the week already happens —
          just never under one contract. We sell the week as one culinary contract, at published per-guest
          lines.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link to={link('weddings/wedding-week')} className="cta-site">Plan the week</Link>
          <MauiLink to={link('quote')}>Get a written quote →</MauiLink>
        </div>
        <SectionReveal className="mt-12">
          <figure className="card-site overflow-hidden" style={{ boxShadow: 'var(--site-card-shadow)' }}>
            <img
              src="/img/maui/hero-weddings.jpg"
              alt="A wedding-week welcome dinner on a Maui estate lawn, shared platters passing in golden light"
              className="maui-hero-img h-full w-full object-cover"
              style={{ aspectRatio: '3/2' }}
            />
          </figure>
        </SectionReveal>
      </header>

      {/* Five-meal timeline — dusk band #1 */}
      <section className="band-site">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <p className="eyebrow-site" style={{ color: 'var(--site-accent-text)' }}>ONE CONTRACT</p>
          <h2 className="h2-site mt-4 max-w-2xl">The five meals the week already eats.</h2>
          <div className="mt-14">
            <WeddingTimeline />
          </div>
        </div>
      </section>

      {/* Per-format cards */}
      <section className="section-pad mx-auto max-w-6xl px-6">
        <h2 className="h2-site">Every format of the week.</h2>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FORMATS.map((f, i) => (
            <SectionReveal as="li" key={f.name} delay={(i % 4) * 120}>
              <Link to={link(f.to)} className="card-site block h-full p-6 no-underline motion-site">
                <h3 className="font-display text-xl" style={{ fontWeight: 400 }}>{f.name}</h3>
                <p className="mt-2 text-sm text-ink-2">{f.line}</p>
                <p className="mt-4 text-sm font-medium" style={{ color: 'var(--site-accent2)' }} aria-hidden="true">→</p>
              </Link>
            </SectionReveal>
          ))}
        </ul>
      </section>

      {/* Venue corridors */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <h2 className="h2-site">The venue corridors.</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {VENUES.map((v, i) => (
            <SectionReveal key={v.name} delay={i * 120}>
              <h3 className="font-display text-2xl" style={{ fontWeight: 400 }}>{v.name}</h3>
              <p className="mt-3 text-ink-2">{v.note}</p>
              <p className="mt-3">
                <MauiLink to={link(v.to)}>Venue notes →</MauiLink>
              </p>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Worked budget + wedge */}
      <section className="section-pad mx-auto max-w-4xl px-6">
        <SectionReveal>
          <div className="card-site p-8 md:p-10" style={{ background: 'var(--site-surface)' }}>
            <p className="eyebrow-site mb-4">THE ARITHMETIC</p>
            <p className="font-display text-xl md:text-2xl" style={{ fontWeight: 400 }}>
              A 60-guest week: $31,500 in food lines. The five-point service-charge gap is worth $1,575.
            </p>
            <p className="mt-4 text-ink-2">
              Welcome $9,000 + rehearsal $4,500 + reception $12,000 + brunch $6,000 — illustrative math on
              published rates. Resorts run $7,500–$15,000 F&amp;B minimums per event at 23–25% service. Ours
              is 20%, itemized, with no ballroom minimum because the venue is yours.
            </p>
            <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              <MauiLink to={link('weddings/wedding-week-budget')}>The worked budget →</MauiLink>
              <MauiLink to={link('weddings/service-charge-comparison')}>The service-charge comparison →</MauiLink>
            </p>
          </div>
        </SectionReveal>
        <SectionReveal className="mt-10">
          <p className="text-sm text-ink-2">
            The DLNR honesty note: beach permits cap ceremonies near 20 guests with no structures — the
            estate reception is the answer. And a standing line for this coast: we support West Maui’s
            recovery — book direct, tip well, tread gently.
          </p>
        </SectionReveal>
      </section>

      {/* Planner channel B2B card */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <SectionReveal>
          <div className="card-site p-8">
            <p className="eyebrow-site mb-3">FOR PLANNERS</p>
            <h2 className="h2-site">A separate door for the trade.</h2>
            <p className="mt-4 text-ink-2">
              Published rates your clients can verify, vendor-list cooperation, invoices that match the
              proposal. Planner inquiries route to a human with real availability — not the consumer
              estimator.
            </p>
            <p className="mt-5">
              <MauiLink to={link('weddings/planner-channel')}>The planner channel →</MauiLink>
            </p>
          </div>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16" aria-label="Frequently asked questions">
        <h2 className="h2-site mb-6">Questions, answered</h2>
        <FAQAccordion items={FAQ} />
      </section>

      <QuoteCTA cta={record.cta} heading="Plan the week" />
    </article>
  );
}
