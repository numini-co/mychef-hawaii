/**
 * Maui /weddings/wedding-week — the signature page: "the page IS the
 * product" (§9 wedding row). WeddingTimeline as motion centerpiece over the
 * wedding-week-band imagery, worked budget, booking mechanics, FAQ, quote.
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

const record = content.find((r) => r.slug === 'weddings/wedding-week')!;

const MECHANICS = [
  {
    h: 'One quote, one deposit',
    p: 'The week writes as a single written quote — the confirmed total — with every event itemized. A 50% deposit holds the week.',
  },
  {
    h: 'One crew, learned once',
    p: 'The same servers and sous chefs follow the week from welcome dinner to recovery brunch. The dietary map is written on day one and never re-explained.',
  },
  {
    h: 'One shopping rhythm',
    p: 'Menus across five events share sourcing — Maui farmers and fishers first, groceries at cost with receipts, nothing bought twice.',
  },
  {
    h: 'Weather and the permit',
    p: 'Every outdoor event names its covered backup in the quote. Beach ceremonies run under the DLNR permit — roughly 20 people, no structures — and the estate holds everything else.',
  },
];

export default function MauiWeddingWeek() {
  const { link } = useSite();
  return (
    <article>
      <Seo
        title={record.title}
        description={record.meta.description}
        path={link('weddings/wedding-week')}
        ogImage="/img/maui/wedding-week-band.jpg"
        jsonLd={[
          faqLd(record.faq ?? []),
          breadcrumbLd([
            { name: 'Maui', path: link('') },
            { name: 'Weddings', path: link('weddings') },
            { name: record.h1, path: link('weddings/wedding-week') },
          ]),
        ]}
      />
      <MauiStyles />

      <header className="section-pad mx-auto max-w-6xl px-6">
        <p className="eyebrow-site">THE WEDDING WEEK · MAUI</p>
        <h1 className="h1-site measure-site mt-4">Maui is a week, not a plated hour.</h1>
        <p className="measure-site mt-6 text-lg text-ink-2">
          Welcome dinner, rehearsal, ceremony-adjacent pūpū, the reception, and the morning after — five
          meals, one crew, one culinary contract. From $150 a guest per event plus staffing.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link to={link('quote')} className="cta-site">Plan the week</Link>
          <MauiLink to={link('weddings/wedding-week-budget')}>See the worked budget →</MauiLink>
        </div>
      </header>

      {/* The timeline as the page's centerpiece — dusk band with the
          wedding-week imagery held low behind the left edge */}
      <section className="band-site relative overflow-hidden">
        <img
          src="/img/maui/wedding-week-band.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/2 object-cover opacity-20"
          style={{ maskImage: 'linear-gradient(to right, black, transparent)' }}
        />
        <div className="section-pad relative mx-auto max-w-6xl px-6">
          <h2 className="h2-site max-w-2xl">Five days, day by day.</h2>
          <div className="mt-14">
            <WeddingTimeline />
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link to={link('quote')} className="cta-site">Plan the week</Link>
            <MauiLink to={link('weddings')}>All wedding formats →</MauiLink>
          </div>
        </div>
      </section>

      {/* Mechanics */}
      <section className="section-pad mx-auto max-w-6xl px-6">
        <h2 className="h2-site">Why one contract beats five vendors.</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {MECHANICS.map((m, i) => (
            <SectionReveal key={m.h} delay={i * 120}>
              <h3 className="font-display text-2xl" style={{ fontWeight: 400 }}>{m.h}</h3>
              <p className="mt-3 text-ink-2">{m.p}</p>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Worked budget */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <SectionReveal>
          <div className="card-site p-8 md:p-10" style={{ background: 'var(--site-surface)' }}>
            <p className="eyebrow-site mb-4">ILLUSTRATIVE MATH ON PUBLISHED RATES</p>
            <p className="font-display text-xl md:text-2xl" style={{ fontWeight: 400 }}>
              60 guests: welcome $9,000 + rehearsal $4,500 + reception $12,000 + brunch $6,000 = $31,500 in
              food lines
            </p>
            <p className="mt-4 text-ink-2">
              Before staffing, 20% service, and GET up to 4.7120% — each on its own line. The resort
              alternative starts at $7,500–$15,000 F&amp;B minimums per event with 23–25% service; the
              five-point gap on this week is $1,575.
            </p>
            <p className="mt-5">
              <MauiLink to={link('weddings/wedding-week-budget')}>Every line, shown →</MauiLink>
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* Meals grid */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="h2-site mb-10">Each meal, in depth.</h2>
        <ul className="space-y-8">
          {[
            { n: 'Welcome dinner', s: 'weddings/welcome-dinner', d: 'Family-style for 20–75 — the week’s tone-setter.' },
            { n: 'Rehearsal dinner', s: 'weddings/rehearsal-dinner', d: 'Plated, 12–40 — smaller, sharper, in a villa.' },
            { n: 'The reception', s: 'weddings/reception-catering', d: 'Plated or premium buffet for 30–75, staffed.' },
            { n: 'Recovery brunch', s: 'weddings/recovery-brunch', d: '10–40, late morning — the secret best meal.' },
            { n: 'Beach ceremony, estate reception', s: 'weddings/beach-ceremony-reception', d: 'The DLNR permit reality, solved.' },
          ].map((m, i) => (
            <SectionReveal as="li" key={m.n} delay={i * 80} className="flex items-baseline justify-between gap-6">
              <div>
                <h3 className="font-display text-xl" style={{ fontWeight: 400 }}>{m.n}</h3>
                <p className="mt-1 text-sm text-ink-2">{m.d}</p>
              </div>
              <MauiLink to={link(m.s)}>→</MauiLink>
            </SectionReveal>
          ))}
        </ul>
      </section>

      {record.faq?.length ? (
        <section className="mx-auto max-w-3xl px-6 pb-16" aria-label="Frequently asked questions">
          <h2 className="h2-site mb-6">Questions, answered</h2>
          <FAQAccordion items={record.faq} />
        </section>
      ) : null}

      <QuoteCTA cta={record.cta} heading="Plan the week" />
    </article>
  );
}
