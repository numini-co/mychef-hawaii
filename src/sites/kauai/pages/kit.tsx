/**
 * Kauaʻi bespoke kit — "veranda in the garden" (design.md §3.4).
 * Framed hero (never full-bleed), mist ground, botanical tactility,
 * asymmetric margins, staggered soft motion via CSS word-rise.
 */
import { useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import SectionReveal from '@/components/SectionReveal';

/** Asymmetric framed container — the signature off-center margins. */
export function VerandaGrid({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>;
}

/** Fern-bordered provenance/inquiry tag. */
export function InquiryChip({ children }: { children: ReactNode }) {
  return (
    <p
      className="inline-block px-4 py-2 text-sm italic"
      style={{
        border: '1px solid var(--site-accent)',
        borderRadius: 'var(--site-card-radius)',
        color: 'var(--site-ink2)',
        fontFamily: 'var(--site-font-display)',
      }}
    >
      {children}
    </p>
  );
}

/**
 * Framed hero — image in a 14px-radius frame with asymmetric margins
 * (copy col-span-4 / image col-span-8 on desktop; stacked mobile-first).
 * Portrait 4/5 on mobile, configurable ratio on desktop via data attribute.
 */
export function FramedHero({
  image,
  alt,
  eyebrow,
  title,
  sub,
  ratio = '3/2',
  children,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  sub: string;
  ratio?: string;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pt-16">
      <div className="grid items-end gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow-site word-rise" style={{ ['--wr-delay' as string]: '0ms' }}>
            {eyebrow}
          </p>
          <h1 className="h1-site word-rise mt-4" style={{ ['--wr-delay' as string]: '90ms' }}>
            {title}
          </h1>
          <p className="measure-site word-rise mt-5 text-ink-2" style={{ ['--wr-delay' as string]: '180ms' }}>
            {sub}
          </p>
          {children && (
            <div className="word-rise mt-7" style={{ ['--wr-delay' as string]: '270ms' }}>
              {children}
            </div>
          )}
        </div>
        <figure
          data-hero-frame
          className="word-rise md:col-span-7 md:col-start-6"
          style={{ ['--wr-delay' as string]: '150ms' }}
        >
          <style>{`@media (min-width: 768px) { [data-hero-frame] img { aspect-ratio: ${ratio} !important; } }`}</style>
          <img
            src={image}
            alt={alt}
            className="w-full object-cover"
            style={{
              aspectRatio: '4/5',
              borderRadius: 'var(--site-card-radius)',
              boxShadow: 'var(--site-card-shadow)',
            }}
          />
        </figure>
      </div>
    </header>
  );
}

/** Italic Spectral provenance line. */
export function ProvenanceLine({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 text-sm italic" style={{ fontFamily: 'var(--site-font-display)', fontWeight: 300 }}>
      {children}
    </p>
  );
}

export interface Shore {
  id: string;
  label: string;
  areas: string;
  season: string;
  note: string;
  image: string;
  imageAlt: string;
  links: { label: string; slug: string }[];
}

export const SHORES: Shore[] = [
  {
    id: 'north',
    label: 'North Shore',
    areas: 'Princeville · Hanalei · Kīlauea',
    season: 'Summer is the North Shore’s prime — calm water, long light, June through September and the holidays.',
    note: 'Bluff estates above the bay, the retreat corridor, the Saturday market. Far-North service past the bridge runs on 72-hour notice with the written closure clause.',
    image: '/img/kauai/shore-north.jpg',
    imageAlt: 'Morning mist over Hanalei taro fields below waterfall-striped mountains',
    links: [
      { label: 'Princeville', slug: 'locations/princeville' },
      { label: 'Hanalei', slug: 'locations/hanalei' },
      { label: 'Kīlauea', slug: 'locations/kilauea' },
    ],
  },
  {
    id: 'south',
    label: 'South Shore',
    areas: 'Poʻipū · Kōloa',
    season: 'The dry side — the South Shore carries November through March, when the North gets its rain.',
    note: 'Garden estates and plantation architecture; the island’s steadiest year-round table. No bridge between us and dinner.',
    image: '/img/kauai/shore-south.jpg',
    imageAlt: 'A Poʻipū estate garden in soft post-rain light',
    links: [
      { label: 'Poʻipū', slug: 'locations/poipu' },
      { label: 'Kōloa', slug: 'locations/koloa' },
    ],
  },
];

/** June(5)–September(9) → north prime; months are 0-indexed. */
export function defaultShore(): string {
  const m = new Date().getMonth();
  return m >= 5 && m <= 8 ? 'north' : 'south';
}

/**
 * Two-shore selector — the Kauaʻi home signature. Season-aware default;
 * cross-fading framed image; corridor links re-order with the shore.
 */
export function ShoreSelector({ shores = SHORES, heading = 'Two shores, two seasons.' }: { shores?: Shore[]; heading?: string }) {
  const { link } = useSite();
  const [active, setActive] = useState(defaultShore());
  const shore = shores.find((s) => s.id === active) ?? shores[0]!;
  return (
    <section className="section-pad" aria-label="Choose your shore">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="h2-site mb-8">{heading}</h2>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div role="group" aria-label="Shore" className="flex gap-3">
              {shores.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  aria-pressed={s.id === active}
                  onClick={() => setActive(s.id)}
                  className="px-5 py-2.5 text-base italic transition-colors"
                  style={{
                    fontFamily: 'var(--site-font-display)',
                    fontWeight: 300,
                    borderRadius: 'var(--site-card-radius)',
                    border: '1px solid var(--site-accent)',
                    background: s.id === active ? 'var(--site-accent)' : 'transparent',
                    color: s.id === active ? 'var(--site-bg, #fff)' : 'inherit',
                    transitionDuration: 'var(--site-motion-ms)',
                    transitionTimingFunction: 'var(--site-motion-ease)',
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <p className="eyebrow-site mt-6">{shore.areas}</p>
            <p className="mt-3 text-ink-2">{shore.season}</p>
            <p className="mt-3 text-sm text-ink-2">{shore.note}</p>
            <ol className="mt-6 space-y-2">
              {shore.links.map((l) => (
                <li key={l.slug}>
                  <Link to={link(l.slug)} className="link-site">
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative md:col-span-7">
            {shores.map((s) => (
              <img
                key={s.id}
                src={s.image}
                alt={s.id === active ? s.imageAlt : ''}
                aria-hidden={s.id !== active}
                loading="lazy"
                className="w-full object-cover"
                style={{
                  aspectRatio: '3/2',
                  borderRadius: 'var(--site-card-radius)',
                  boxShadow: 'var(--site-card-shadow)',
                  position: s.id === active ? 'relative' : 'absolute',
                  inset: 0,
                  opacity: s.id === active ? 1 : 0,
                  transform: s.id === active ? 'scale(1)' : 'scale(0.985)',
                  transition: `opacity var(--site-motion-ms) var(--site-motion-ease), transform var(--site-motion-ms) var(--site-motion-ease)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Band with a photographic ground — mist + canopy at reduced opacity. */
export function CanopyBand({
  image = '/img/kauai/band-retreat.jpg',
  alt = '',
  children,
}: {
  image?: string;
  alt?: string;
  children: ReactNode;
}) {
  return (
    <section className="band-site relative overflow-hidden">
      <img
        src={image}
        alt={alt}
        aria-hidden={alt === ''}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.92 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'color-mix(in oklab, var(--site-bg, #f5f5f0) 66%, transparent)' }}
      />
      <div className="section-pad relative mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

/** 1:1 snap-x experience cards (the home/product feature strip). */
export function ExperienceCards({
  cards,
}: {
  cards: { title: string; body: string; image: string; imageAlt: string; slug: string; ctaLabel?: string }[];
}) {
  const { link } = useSite();
  return (
    <ul className="grid snap-x snap-mandatory grid-flow-col gap-5 overflow-x-auto pb-4 md:grid-flow-row md:grid-cols-2 lg:grid-cols-4">
      {cards.map((c, i) => (
        <SectionReveal as="li" key={c.slug} delay={i * 60} className="w-[78vw] shrink-0 snap-start md:w-auto">
          <Link to={link(c.slug)} className="card-site block h-full overflow-hidden no-underline">
            <img
              src={c.image}
              alt={c.imageAlt}
              loading="lazy"
              className="w-full object-cover"
              style={{ aspectRatio: '1/1' }}
            />
            <div className="p-5">
              <h3 className="font-display text-xl" style={{ fontWeight: 300 }}>
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-ink-2">{c.body}</p>
              <p className="link-site mt-4 text-sm">{c.ctaLabel ?? 'Explore'} →</p>
            </div>
          </Link>
        </SectionReveal>
      ))}
    </ul>
  );
}

/** The Hanalei bridge-clause callout panel. */
export function BridgeCallout({ className = '' }: { className?: string }) {
  const { link } = useSite();
  return (
    <aside
      className={`p-6 ${className}`}
      style={{
        borderLeft: '2px solid var(--site-accent)',
        background: 'var(--site-surface, transparent)',
        borderRadius: '0 var(--site-card-radius) var(--site-card-radius) 0',
      }}
    >
      <p className="eyebrow-site mb-2">Logistics honesty</p>
      <p className="text-sm text-ink-2">
        One bridge. One road. Everything past Hanalei runs on 72-hour notice — and documented closures reschedule
        rather than forfeit. Nobody else publishes this; we do.
      </p>
      <p className="mt-3">
        <Link to={link('guides/hanalei-bridge-clause')} className="link-site text-sm">
          The Hanalei bridge clause, in full →
        </Link>
      </p>
    </aside>
  );
}
