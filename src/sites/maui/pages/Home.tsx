/**
 * Maui homepage (design/home-maui.md) — "Maui, set for dinner."
 * The network's ONLY full-bleed hero. 11-section wireframe, exact order:
 * header(transparent→sand) → hero → trust strip → wedding-week dusk band →
 * experience cards → zone strip → pricing scene → how it works → group
 * capability → quote block → (footer = dusk band #2, platform-owned).
 * Sequence tell: dream → week → price.
 */
import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { Seo, foodServiceLd, faqLd, breadcrumbLd } from '@/platform/seo';
import { CONTACT, TRUST_CLAIMS } from '@/platform/config';
import SectionReveal from '@/components/SectionReveal';
import { RateTable } from '@/components/RateTable';
import WeddingTimeline from './WeddingTimeline';
import { ExperienceCard, MauiLink, MauiStyles, MAUI_FEE_NOTE } from './shared';

const HOME_FAQ = [
  {
    q: 'How much is a private chef dinner on Maui?',
    a: 'Signature dinners run $150–$250 a guest, groceries inside the band. Premium menus $190–$275; chef’s-table formats $275–$400+. The 20% service charge and Hawaiʻi GET up to 4.7120% appear on their own lines in the written quote — which is the confirmed total.',
  },
  {
    q: 'Can you cater our whole wedding week?',
    a: 'Yes — that is the Maui signature: welcome dinner, rehearsal, ceremony-adjacent pūpū, reception, and recovery brunch as one contract, from $150 a guest per event plus staffing. One crew, one quote, one deposit.',
  },
  {
    q: 'Do you cook in our villa or condo?',
    a: 'Anywhere with a real kitchen — Wailea, Mākena, Kīhei, Kāʻanapali, Kapalua, and the Nāpili–Honokōwai–Kahana belt are base zone. Upcountry carries travel from $75; Pāʻia and Haʻikū are quoted at inquiry. Hotel rooms without kitchens are declined.',
  },
];

const EXPERIENCES = [
  {
    img: '/img/maui/card-villa-dinner.jpg',
    alt: 'A plated Pacific catch course on a Wailea villa lānai at golden hour',
    name: 'Villa Dinner',
    price: 'from $150/guest',
    bestFor: 'the first night in the house',
    to: 'private-chef',
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
    img: '/img/maui/card-date-night.jpg',
    alt: 'A table for two at the edge of a lānai at dusk, candles lit',
    name: 'Date Night',
    price: 'from $500+',
    bestFor: 'two people, one sunset',
    to: 'services/date-night',
  },
  {
    img: '/img/maui/card-estate-catering.jpg',
    alt: 'A long estate reception table under trees in dappled golden light',
    name: 'Estate Catering',
    price: '10–75 guests, staffed',
    bestFor: 'receptions the beach permit can’t hold',
    to: 'catering',
  },
];

const ZONES = [
  {
    name: 'Wailea–Mākena',
    line: 'The resort corridor. Estate kitchens built for service.',
    note: 'Base zone — no travel line.',
    to: 'locations/wailea',
  },
  {
    name: 'Kāʻanapali–Kapalua',
    line: 'West Maui’s operating present.',
    note: 'Base zone — we work where we’re welcomed.',
    to: 'locations/kaanapali',
  },
  {
    name: 'Upcountry & North Shore',
    line: 'Kula, Pāʻia, Haʻikū — quoted honestly.',
    note: 'Travel from $75 Upcountry; Pāʻia/Haʻikū quoted at inquiry.',
    to: 'locations/kula-upcountry',
  },
];

const STEPS = [
  'Tell us the dates and the villa.',
  'We reply with a written quote — the confirmed total.',
  'A 50% deposit holds the week.',
  'You hear the ocean; we handle the rest.',
];

export default function MauiHome() {
  const { link } = useSite();
  const heroImgRef = useRef<HTMLImageElement | null>(null);

  // Hero parallax: translateY at ≤2% of scroll, desktop only, motion-safe.
  useEffect(() => {
    const img = heroImgRef.current;
    if (!img) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const desktop = window.matchMedia('(min-width: 768px)');
    if (!desktop.matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        img.style.transform = `scale(1) translateY(${Math.min(window.scrollY * 0.02, 24)}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <Seo
        title="Private Chef Maui — Villa Dinners & Wedding Weeks | myCHEF"
        description="A private chef for your Wailea villa, your Kapalua estate, your whole wedding week. Villa dinners $150–$250 a guest; Stay Chef from $1,050 a day; the written quote is the confirmed total."
        path={link('')}
        ogImage="/img/maui/hero-home.jpg"
        jsonLd={[foodServiceLd(), faqLd(HOME_FAQ), breadcrumbLd([{ name: 'Maui', path: link('') }])]}
      />
      <MauiStyles />

      {/* S2 — Hero: full-bleed cinematic (Maui-only). Opts out of the nav
          offset with -mt-[var(--nav-h)] per the Layout contract. */}
      <section className="relative -mt-[var(--nav-h)] flex min-h-[100dvh] items-end overflow-hidden" aria-label="Maui, set for dinner">
        <img
          ref={heroImgRef}
          src="/img/maui/hero-home.jpg"
          alt="A lānai table set for eight at a Maui resort villa, low golden sun, ocean in the mid-ground"
          className="maui-hero-img absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(36,28,23,0.88) 0%, rgba(36,28,23,0.62) 34%, rgba(36,28,23,0.30) 58%, rgba(36,28,23,0.08) 78%, rgba(36,28,23,0) 92%)',
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-40 md:pb-32">
          <h1
            className="maui-hero-h1 font-display"
            style={{
              fontSize: 'var(--site-h1)',
              lineHeight: 1.02,
              color: '#FBF6EC',
              maxWidth: '12ch',
            }}
          >
            Maui, set for dinner.
          </h1>
          <p className="maui-hero-sub mt-6 max-w-xl text-lg" style={{ color: 'rgba(251,246,236,0.95)' }}>
            A private chef for your Wailea villa, your Kapalua estate, your whole wedding week. Villa dinners
            $150–$250 a guest; the written quote is the confirmed total.
          </p>
          <div className="maui-hero-sub mt-8 flex flex-wrap items-center gap-6">
            <Link to={link('weddings/wedding-week')} className="cta-site">
              Plan your week
            </Link>
            <Link
              to={link('pricing')}
              className="motion-site underline underline-offset-4"
              style={{ color: '#FBF3E8' }}
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* S3 — Trust strip (hairline-free — space alone, per Maui spec) */}
      <section className="mx-auto max-w-6xl px-6 pt-20" aria-label="Our promises">
        <ul className="grid gap-x-8 gap-y-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_CLAIMS.map((claim, i) => (
            <SectionReveal as="li" key={claim} delay={i * 120}>
              <p className="text-[13px] text-ink-2">{claim}</p>
            </SectionReveal>
          ))}
        </ul>
      </section>

      {/* S4 — Wedding-week feature (DUSK BAND #1) */}
      <section className="band-site mt-24">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <p className="eyebrow-site" style={{ color: 'var(--site-accent-text)' }}>
            THE WEDDING WEEK
          </p>
          <h2 className="h2-site mt-4 max-w-2xl">Maui is a week, not a plated hour.</h2>
          <p className="mt-5 max-w-xl text-ink-2">
            Welcome dinner, rehearsal, ceremony-adjacent pūpū, the reception, and the morning after — five
            meals, one crew, one contract. From $150 a guest plus staffing.
          </p>
          <div className="mt-14">
            <WeddingTimeline />
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link to={link('weddings/wedding-week')} className="cta-site">
              Plan the week
            </Link>
            <MauiLink to={link('weddings')}>All wedding formats →</MauiLink>
          </div>
        </div>
      </section>

      {/* S5 — Experience cards (3:2 image-first, snap-scroll mobile) */}
      <section className="section-pad mx-auto max-w-6xl px-6">
        <h2 className="h2-site">Four ways to have us.</h2>
        <ul className="maui-timeline-track mt-12 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {EXPERIENCES.map((c, i) => (
            <li key={c.name} className="min-w-[260px] md:min-w-0">
              <ExperienceCard {...c} to={link(c.to)} delay={i * 120} />
            </li>
          ))}
        </ul>
      </section>

      {/* S6 — Zone strip (atmospheric text panels, space-separated) */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <h2 className="h2-site">Where we cook.</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {ZONES.map((z, i) => (
            <SectionReveal key={z.name} delay={i * 150}>
              <h3 className="font-display text-2xl" style={{ fontWeight: 400 }}>
                {z.name}
              </h3>
              <p className="mt-3 text-ink-2">{z.line}</p>
              <p className="mt-3 text-sm text-ink-2">{z.note}</p>
              <p className="mt-4">
                <MauiLink to={link(z.to)}>Explore →</MauiLink>
              </p>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* S7 — Pricing scene (sand ground): Fraunces feature rows → detail table */}
      <section className="section-pad mx-auto max-w-4xl px-6">
        <h2 className="h2-site">What it costs, in writing.</h2>
        <div className="mt-12 space-y-6">
          {[
            'Villa dinner $150–$250 a guest',
            'Stay Chef from $1,050 a day',
            'Wedding week from $150 a guest + staffing',
            'Date night from $500',
          ].map((row, i) => (
            <SectionReveal key={row} delay={i * 150}>
              <p className="font-display tabular-site" style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 300 }}>
                {row}
              </p>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal className="mt-14">
          <RateTable
            rows={[
              { label: 'Signature dinner', value: '$150–$250 /guest' },
              { label: 'Premium menu', value: '$190–$275 /guest' },
              { label: 'Chef’s table', value: '$275–$400+ /guest' },
              { label: 'Packaged bar cart', value: 'from $800 /4hr' },
              { label: 'Server', value: '$55 /hr' },
              { label: 'Sous chef', value: '$75 /hr' },
            ]}
            footnote={MAUI_FEE_NOTE}
          />
        </SectionReveal>
        {/* Worked-math panel — the punchline, fades last */}
        <SectionReveal delay={200} className="mt-14">
          <div className="card-site p-8" style={{ background: 'var(--site-surface)' }}>
            <p className="eyebrow-site mb-4">A 60-GUEST WEDDING WEEK, WORKED</p>
            <p className="font-display text-xl" style={{ fontWeight: 400 }}>
              Welcome $9,000 + rehearsal $4,500 + reception $12,000 + brunch $6,000 = $31,500 in food lines
            </p>
            <p className="mt-4 text-ink-2">
              Before staffing, service, and GET — illustrative math on published rates. The resort alternative
              runs $7,500–$15,000 F&amp;B minimums per event at 23–25% service. Ours is 20%, on its own line.
            </p>
            <p className="mt-5">
              <MauiLink to={link('weddings/wedding-week-budget')}>The full budget, line by line →</MauiLink>
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* S8 — How it works (calm full-width rows) */}
      <section className="mx-auto max-w-3xl px-6 pb-8">
        <h2 className="h2-site mb-14">How it works.</h2>
        <ol className="space-y-24">
          {STEPS.map((s, i) => (
            <SectionReveal as="li" key={s} className="flex items-baseline gap-6">
              <span className="font-display tabular-site text-3xl" style={{ fontWeight: 300, color: 'var(--site-accent-text)' }} aria-hidden="true">
                {i + 1}
              </span>
              <p className="text-lg">{s}</p>
            </SectionReveal>
          ))}
        </ol>
      </section>

      {/* S9 — Group capability */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <SectionReveal>
          <h2 className="h2-site">And when the house fills up.</h2>
          <p className="measure-site mt-6 text-lg text-ink-2">
            Estate receptions run to 75 guests, staffed — servers at $55 an hour, sous chefs at $75, four-hour
            floors. Over 75 is a written exception, quoted, never implied. And the service charge is 20%, on
            its own line — resorts charge 23–25%.
          </p>
          <p className="mt-6">
            <MauiLink to={link('catering')}>Catering for 10–75 →</MauiLink>
          </p>
        </SectionReveal>
      </section>

      {/* S10 — Quote block */}
      <section className="mx-auto max-w-3xl px-6 pb-28">
        <SectionReveal>
          <div className="card-site p-8 md:p-12" style={{ background: 'var(--site-surface)' }}>
            <h2 className="h2-site">Tell us the dates and the villa.</h2>
            <p className="mt-4 text-ink-2">
              We reply with a written quote — the confirmed total. Five fields, about a minute, no number
              invented on the spot.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link to={link('quote')} className="cta-site">
                Start the quote
              </Link>
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Aloha — Maui inquiry: dates, villa, headcount.')}`}
                className="cta-secondary-site"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us →
              </a>
            </div>
            <dl className="rule-t mt-10 space-y-6 pt-8">
              {HOME_FAQ.map((f) => (
                <div key={f.q}>
                  <dt className="font-medium">{f.q}</dt>
                  <dd className="mt-2 text-sm text-ink-2">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
