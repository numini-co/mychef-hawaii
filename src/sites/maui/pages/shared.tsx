/**
 * Maui bespoke-page building blocks — Cinematic Resort-Villa Hospitality
 * (design.md §3.3). All styling consumes platform tokens via the .site-shell
 * CSS variables; no hex values except the hero scrim gradient from the spec.
 *
 * Maui signatures: dusk dissolve reveals, 3:2 image-first cards that warm on
 * hover (never lift), dusk bands (max two per page), Fraunces feature rows,
 * ember CTAs. Text links use accent2 (dusk mauve) per §3.3.
 */
import { Link } from 'react-router';
import type { ReactNode } from 'react';
import SectionReveal from '@/components/SectionReveal';

/**
 * Scoped Maui motion/skin CSS (design.md §3.3): hero load scale, dusk
 * dissolve timings, card hover = warm (border deepens + saturation +6%,
 * never lift). All motion collapses under prefers-reduced-motion.
 * Scoped to .maui-* classes so no global CSS is touched.
 */
export function MauiStyles() {
  return (
    <style>{`
      .maui-hero-img { transform: scale(1.03); animation: maui-hero-settle 900ms cubic-bezier(0.4,0,0.2,1) forwards; }
      @keyframes maui-hero-settle { to { transform: scale(1); } }
      .maui-hero-h1 { opacity: 0; transform: translateY(4px); animation: maui-hero-rise 700ms cubic-bezier(0.4,0,0.2,1) 300ms forwards; }
      .maui-hero-sub { opacity: 0; transform: translateY(4px); animation: maui-hero-rise 700ms cubic-bezier(0.4,0,0.2,1) 420ms forwards; }
      @keyframes maui-hero-rise { to { opacity: 1; transform: translateY(0); } }
      .card-site .maui-card-img { transition: filter 500ms cubic-bezier(0.4,0,0.2,1); }
      .card-site:hover .maui-card-img { filter: saturate(1.06); }
      .card-site:has(> *) { transition: border-color 500ms cubic-bezier(0.4,0,0.2,1); }
      a.card-site:hover { border-color: var(--site-accent); }
      .maui-timeline-track { scrollbar-width: none; scroll-snap-type: x mandatory; }
      .maui-timeline-track::-webkit-scrollbar { display: none; }
      .maui-timeline-track > li { scroll-snap-align: start; }
      .maui-progress-line { transform-origin: left; transform: scaleX(0); transition: transform 150ms linear; }
      @media (prefers-reduced-motion: reduce) {
        .maui-hero-img, .maui-hero-h1, .maui-hero-sub { animation: none; opacity: 1; transform: none; }
        .card-site .maui-card-img, a.card-site { transition: none; }
        .maui-progress-line { transition: none; }
      }
    `}</style>
  );
}

/** Maui text link — dusk mauve per §3.3 (accent-2, 5.12:1). */
export function MauiLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="motion-site underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
      style={{ color: 'var(--site-accent2)' }}
    >
      {children}
    </Link>
  );
}

/**
 * The Maui hero treatment — full-bleed only on the homepage; every other page
 * uses a large framed 3:2. Image scales 1.03→1.0 over 900ms on load;
 * headline fades + 4px rise at 300ms. All reduced-motion safe via CSS.
 */
export function FramedHero({
  src,
  alt,
  eyebrow,
  h1,
  lede,
  children,
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  h1: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className="section-pad mx-auto max-w-6xl px-6">
      {eyebrow ? <p className="eyebrow-site mb-4">{eyebrow}</p> : null}
      <h1 className="h1-site measure-site">{h1}</h1>
      {lede ? <p className="measure-site mt-6 text-lg text-ink-2">{lede}</p> : null}
      {children ? <div className="mt-8">{children}</div> : null}
      <SectionReveal className="mt-12">
        <figure className="card-site overflow-hidden" style={{ boxShadow: 'var(--site-card-shadow)' }}>
          <img
            src={src}
            alt={alt}
            loading="eager"
            className="maui-hero-img h-full w-full object-cover"
            style={{ aspectRatio: '3/2' }}
          />
        </figure>
      </SectionReveal>
    </header>
  );
}

/** A 3:2 image-first card — Maui card grammar (warms on hover, never lifts). */
export function ExperienceCard({
  img,
  alt,
  name,
  price,
  bestFor,
  to,
  delay = 0,
}: {
  img: string;
  alt: string;
  name: string;
  price: string;
  bestFor: string;
  to: string;
  delay?: number;
}) {
  return (
    <SectionReveal as="article" delay={delay}>
      <Link
        to={to}
        className="card-site group block h-full overflow-hidden no-underline motion-site"
        aria-label={`${name} — ${price}`}
      >
        <div className="overflow-hidden" style={{ aspectRatio: '3/2' }}>
          <img
            src={img}
            alt={alt}
            loading="lazy"
            className="maui-card-img h-full w-full object-cover motion-site"
          />
        </div>
        <div className="p-6">
          <h3 className="font-display text-2xl" style={{ fontWeight: 400 }}>
            {name}
          </h3>
          <p className="font-display mt-2 text-lg tabular-site" style={{ color: 'var(--site-accent-text)' }}>
            {price}
          </p>
          <p className="mt-2 text-sm text-ink-2">Best for: {bestFor}</p>
          <p className="mt-4 text-sm font-medium" style={{ color: 'var(--site-accent2)' }} aria-hidden="true">
            →
          </p>
        </div>
      </Link>
    </SectionReveal>
  );
}

/** Fee-stack footnote line used across Maui pages. */
export const MAUI_FEE_NOTE =
  '20% service charge and Hawaiʻi GET up to 4.7120% always appear on their own lines. 50% deposit locks the date; gratuity is voluntary; groceries at cost with receipts.';
