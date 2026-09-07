/**
 * Maui /catering (design/catering.md — "the estate reception").
 * Order: golden-hour framed hero → format cards (3:2 soft) → estate-reception
 * feature (dusk band: rentals, staffing, timeline) → capacity + wedge →
 * zone note → FAQ → quote. Image-first; receptions as golden-hour theater.
 */
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { Seo, faqLd, serviceLd, breadcrumbLd } from '@/platform/seo';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import QuoteCTA from '@/components/QuoteCTA';
import { content } from '../content';
import { ExperienceCard, MauiLink, MauiStyles } from './shared';

const record = content.find((r) => r.slug === 'catering')!;

const FORMATS = [
  {
    img: '/img/maui/hero-weddings.jpg',
    alt: 'Family-style shared platters being passed at a Maui estate welcome dinner',
    name: 'Family-style',
    price: 'from $150/guest',
    bestFor: 'welcome dinners, reunions, the long table',
    to: 'menus/family-style',
  },
  {
    img: '/img/maui/card-villa-dinner.jpg',
    alt: 'A plated course set on a lānai table at golden hour',
    name: 'Plated coursed',
    price: 'from $150/guest',
    bestFor: 'receptions where toasts pace the kitchen',
    to: 'weddings/reception-catering',
  },
  {
    img: '/img/maui/card-estate-catering.jpg',
    alt: 'A long estate reception table under trees in dappled light',
    name: 'Premium buffet',
    price: 'from $150/guest',
    bestFor: 'estate lawns, generous and fast',
    to: 'estate-events',
  },
  {
    img: '/img/maui/hero-catering.jpg',
    alt: 'A server passing a tray of small plates at dusk',
    name: 'Pūpū & stations',
    price: 'per-guest, quoted by depth',
    bestFor: 'cocktail hours and standing parties',
    to: 'menus/pupu-and-grazing',
  },
];

const TIMELINE = [
  ['Early afternoon', 'Load-in coordinated with the venue; rentals land first'],
  ['Golden hour', 'Pūpū and the bar cart open as the light peaks'],
  ['Dusk', 'Dinner service — plated or premium buffet'],
  ['Last plate', 'Kitchen reset; the estate left as found'],
] as const;

export default function MauiCatering() {
  const { link } = useSite();
  return (
    <article>
      <Seo
        title={record.title}
        description={record.meta.description}
        path={link('catering')}
        ogImage="/img/maui/hero-catering.jpg"
        jsonLd={[
          serviceLd('Catering Maui', record.meta.description, link('catering'), 'Maui'),
          faqLd(record.faq ?? []),
          breadcrumbLd([{ name: 'Maui', path: link('') }, { name: record.h1, path: link('catering') }]),
        ]}
      />
      <MauiStyles />

      <header className="section-pad mx-auto max-w-6xl px-6">
        <p className="eyebrow-site">CATERING · MAUI</p>
        <h1 className="h1-site measure-site mt-4">
          The reception moved to the estate. Good — bring the kitchen crew.
        </h1>
        <p className="measure-site mt-6 text-lg text-ink-2">
          Beach permits cap ceremonies at roughly twenty people with no structures. The reception moves to
          the estate — and the estate needs a kitchen crew. 10–75 guests, staffed. Over 75 is a written
          exception — quoted, never implied.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link to={link('quote')} className="cta-site">Get a written quote</Link>
          <MauiLink to={link('estate-events')}>The estate-reception case →</MauiLink>
        </div>
        <SectionReveal className="mt-12">
          <figure className="card-site overflow-hidden" style={{ boxShadow: 'var(--site-card-shadow)' }}>
            <img
              src="/img/maui/hero-catering.jpg"
              alt="A server passing a tray of small plates at a Maui estate reception at dusk"
              className="maui-hero-img h-full w-full object-cover"
              style={{ aspectRatio: '3/2' }}
            />
          </figure>
        </SectionReveal>
      </header>

      {/* Format cards */}
      <section className="section-pad mx-auto max-w-6xl px-6">
        <h2 className="h2-site">The formats.</h2>
        <ul className="maui-timeline-track mt-12 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {FORMATS.map((c, i) => (
            <li key={c.name} className="min-w-[260px] md:min-w-0">
              <ExperienceCard {...c} to={link(c.to)} delay={i * 120} />
            </li>
          ))}
        </ul>
      </section>

      {/* Estate-reception feature — dusk band */}
      <section className="band-site">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <p className="eyebrow-site" style={{ color: 'var(--site-accent-text)' }}>THE ESTATE RECEPTION</p>
          <h2 className="h2-site mt-4 max-w-2xl">From first setup to last plate.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <ol className="space-y-6">
              {TIMELINE.map(([t, d], i) => (
                <SectionReveal as="li" key={t} delay={i * 120} className="flex gap-5">
                  <span className="font-display text-lg tabular-site" style={{ color: 'var(--site-accent-text)', fontWeight: 400 }}>
                    {t}
                  </span>
                  <span className="text-ink-2">{d}</span>
                </SectionReveal>
              ))}
            </ol>
            <div>
              <p className="text-ink-2">
                Servers at $55 an hour, sous chefs at $75, four-hour floors — scaled one server per 10–12
                guests and written into the quote. Rentals — tables, linens, glassware — coordinate into the
                same document. The packaged bar cart runs from $800 per four hours; alcohol is
                client-supplied or via licensed bartending referral. We do not sell alcohol.
              </p>
              <p className="mt-4 text-ink-2">
                Estates rebook vendors they trust. Kitchens are left reset, lawns unmarked, load-in
                documented — that is how a caterer stays on Maui’s venue lists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity + wedge */}
      <section className="section-pad mx-auto max-w-3xl px-6">
        <SectionReveal>
          <h2 className="h2-site">The numbers, against the market’s.</h2>
          <p className="measure-site mt-6 text-ink-2">
            Maui’s published wedding-catering norm is $120–$200 a head plated with 18–22% service; resorts
            layer $7,500–$15,000 F&amp;B minimums at 23–25%. Our wedding lines start at $150 a guest with 20%
            service on its own line — the market’s plated band, itemized instead of bundled.
          </p>
          <p className="measure-site mt-4 text-ink-2">
            Capacity is honest: 10–75 guests staffed. Over 75 is a written exception — we assess kitchen,
            power, and crew reality and quote it, rather than implying a capacity we cannot serve.
          </p>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <MauiLink to={link('weddings/service-charge-comparison')}>The 20% vs 23–25% arithmetic →</MauiLink>
            <MauiLink to={link('pricing')}>The full rate card →</MauiLink>
          </p>
        </SectionReveal>
      </section>

      {/* Zone note */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <SectionReveal>
          <p className="text-sm text-ink-2">
            Zones: Wailea–Mākena and Kāʻanapali–Kapalua are base zone; Upcountry carries travel from $75;
            Pāʻia and Haʻikū are quoted at inquiry with the reason attached.{' '}
            <MauiLink to={link('pricing/travel-zones')}>Travel zones, priced →</MauiLink>
          </p>
        </SectionReveal>
      </section>

      {record.faq?.length ? (
        <section className="mx-auto max-w-3xl px-6 pb-16" aria-label="Frequently asked questions">
          <h2 className="h2-site mb-6">Questions, answered</h2>
          <FAQAccordion items={record.faq} />
        </section>
      ) : null}

      <QuoteCTA cta={record.cta} />
    </article>
  );
}
