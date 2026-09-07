/**
 * Maui /private-chef (design/private-chef.md — "the villa week essay").
 * Order: framed 3:2 hero → scene essay → experience cards → Stay Chef dusk
 * band ($1,050 Fraunces numeral) → zones → twin lists → FAQ → quote.
 */
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { Seo, faqLd, serviceLd, breadcrumbLd } from '@/platform/seo';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import QuoteCTA from '@/components/QuoteCTA';
import { content } from '../content';
import { ExperienceCard, MauiLink, MauiStyles } from './shared';

const record = content.find((r) => r.slug === 'private-chef')!;

const CARDS = [
  {
    img: '/img/maui/card-villa-dinner.jpg',
    alt: 'A plated Pacific catch course on a villa lānai at golden hour',
    name: 'Signature Dinner',
    price: '$150–$250/guest',
    bestFor: 'the night that matters',
    to: 'menus/signature-three-course',
  },
  {
    img: '/img/maui/card-date-night.jpg',
    alt: 'A table for two at the lānai’s edge at dusk',
    name: 'Date Night',
    price: 'from $500',
    bestFor: 'two people, one sunset',
    to: 'services/date-night',
  },
  {
    img: '/img/maui/card-stay-chef.jpg',
    alt: 'A quiet villa kitchen in the morning, market produce on the counter',
    name: 'Stay Chef',
    price: 'from $1,050/day',
    bestFor: 'the whole stay handled',
    to: 'stay-chef',
  },
  {
    img: '/img/maui/hero-catering.jpg',
    alt: 'A server passing a tray of small plates at a dusk estate reception',
    name: 'Vacation-Chef Week',
    price: 'per-guest + day-rate blend',
    bestFor: 'groups of 8–14, one kitchen',
    to: 'services/vacation-chef',
  },
];

export default function MauiPrivateChef() {
  const { link } = useSite();
  return (
    <article>
      <Seo
        title={record.title}
        description={record.meta.description}
        path={link('private-chef')}
        ogImage="/img/maui/hero-private-chef.jpg"
        jsonLd={[
          serviceLd(record.h1, record.meta.description, link('private-chef'), 'Maui'),
          faqLd(record.faq ?? []),
          breadcrumbLd([{ name: 'Maui', path: link('') }, { name: record.h1, path: link('private-chef') }]),
        ]}
      />
      <MauiStyles />

      {/* Hero — framed 3:2, large; full-bleed belongs to the homepage only */}
      <header className="section-pad mx-auto max-w-6xl px-6">
        <p className="eyebrow-site">PRIVATE CHEF · MAUI</p>
        <h1 className="h1-site measure-site mt-4">The house is yours. The kitchen is ours.</h1>
        <p className="measure-site mt-6 text-lg text-ink-2">
          Your chef shops that morning, arrives before service, cooks in your villa kitchen, serves each
          course, and leaves the kitchen clean. Signature dinners $150–$250 a guest; Stay Chef from $1,050 a
          day.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link to={link('quote')} className="cta-site">
            Get a written quote
          </Link>
          <MauiLink to={link('menus')}>See the menus →</MauiLink>
        </div>
        <SectionReveal className="mt-12">
          <figure className="card-site overflow-hidden" style={{ boxShadow: 'var(--site-card-shadow)' }}>
            <img
              src="/img/maui/hero-private-chef.jpg"
              alt="A chef’s hands finishing a plate in an open-air Maui pavilion kitchen at golden hour"
              className="maui-hero-img h-full w-full object-cover"
              style={{ aspectRatio: '3/2' }}
            />
          </figure>
        </SectionReveal>
      </header>

      {/* Scene essay */}
      <section className="section-pad mx-auto max-w-3xl px-6">
        <SectionReveal>
          <p className="font-display text-2xl md:text-3xl" style={{ fontWeight: 300, lineHeight: 1.35, fontStyle: 'italic' }}>
            The best table on Maui this week is the one eight steps from your bedroom.
          </p>
          <p className="measure-site mt-6 text-ink-2">
            A menu is agreed in writing before anyone shops. On the day, your chef buys from Maui growers and
            fishers first, cooks in your kitchen, plates and introduces each course, and resets the kitchen
            before leaving. Groceries are inside the published band; receipts on request.
          </p>
          <p className="measure-site mt-4 text-ink-2">
            The rhythm suits the way Maui stays actually work: an arrival-night dinner after the flight, a
            date night while the grandparents hold the fort, then the whole week handed to a Stay Chef if the
            house deserves it.
          </p>
        </SectionReveal>
      </section>

      {/* Experience cards */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <h2 className="h2-site">The formats.</h2>
        <ul className="maui-timeline-track mt-12 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <li key={c.name} className="min-w-[260px] md:min-w-0">
              <ExperienceCard {...c} to={link(c.to)} delay={i * 120} />
            </li>
          ))}
        </ul>
      </section>

      {/* Stay Chef feature — dusk band */}
      <section className="band-site mt-16">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <p className="eyebrow-site" style={{ color: 'var(--site-accent-text)' }}>
            STAY CHEF
          </p>
          <div className="mt-6 grid items-end gap-10 md:grid-cols-2">
            <div>
              <p className="font-display tabular-site" style={{ fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: 300, lineHeight: 1 }}>
                $1,050
              </p>
              <p className="mt-2 text-ink-2">a day, plus groceries at cost with receipts</p>
            </div>
            <div>
              <h2 className="h2-site">The week, handled.</h2>
              <p className="mt-4 text-ink-2">
                Breakfast before the beach. The cooler packed while you are out. Dinner timed to the light.
                One chef learns the household by day two — and by day four the week runs itself.
              </p>
              <p className="mt-4 text-ink-2">
                There is no published weekly discount; the written quote is the confirmed total. That
                discipline is why the number you are quoted is the number you pay.
              </p>
              <div className="mt-6">
                <MauiLink to={link('stay-chef')}>Stay Chef, in full →</MauiLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones strip */}
      <section className="section-pad mx-auto max-w-3xl px-6">
        <h2 className="h2-site">Where the kitchen is.</h2>
        <p className="measure-site mt-5 text-ink-2">
          Wailea–Mākena and Kāʻanapali–Kapalua are base zone — no travel line. Upcountry carries a published
          line from $75. Pāʻia and Haʻikū are quoted at inquiry, with the reason attached. Hotel rooms without
          kitchens are declined — that is the kitchen gate, and it protects the dinner.
        </p>
        <p className="mt-6">
          <MauiLink to={link('locations')}>All locations →</MauiLink>
        </p>
      </section>

      {/* Twin lists */}
      <section className="mx-auto grid max-w-4xl gap-10 px-6 pb-20 md:grid-cols-2">
        <SectionReveal>
          <h2 className="h2-site">Included</h2>
          <ul className="mt-5 space-y-2">
            {[
              'Menu design, agreed in writing',
              'Same-day shopping, Maui farms and fishers first',
              'Cooking, table service, and course introductions',
              'Groceries inside the band',
              'A kitchen left cleaner than we found it',
            ].map((x) => (
              <li key={x} className="flex gap-3">
                <span aria-hidden="true" style={{ color: 'var(--site-accent-text)' }}>—</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>
        <SectionReveal delay={120}>
          <h2 className="h2-site">Separate, itemized</h2>
          <ul className="mt-5 space-y-2">
            {[
              'Staffing hourlys — server $55/hr, sous $75/hr',
              'Packaged bar cart from $800/4hr',
              'Travel zones (Upcountry from $75)',
              'Rentals, coordinated and quoted',
              '20% service and GET up to 4.7120% — own lines',
            ].map((x) => (
              <li key={x} className="flex gap-3">
                <span aria-hidden="true" style={{ color: 'var(--site-accent-text)' }}>—</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </section>

      {/* FAQ */}
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
