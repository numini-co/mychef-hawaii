/**
 * myCHEF Hawaii — Theme engine contract (design.md §3).
 *
 * THE CRITICAL CONTRACT for island agents:
 * - Shared components consume ONLY these CSS custom properties.
 * - Zero color / radius / motion literals in shared components.
 * - Island agents skin by editing their token set below (or adding
 *   components that read the same vars) — never by hardcoding values.
 *
 * Every value set is the EXACT token table from design.md §3.1–§3.5.
 */

export type SiteId = 'hub' | 'oahu' | 'maui' | 'kauai' | 'bigisland';
/** The four island sites (hub excluded). */
export type IslandId = Exclude<SiteId, 'hub'>;

export const SITE_IDS: SiteId[] = ['hub', 'oahu', 'maui', 'kauai', 'bigisland'];
export const ISLAND_IDS: IslandId[] = ['oahu', 'maui', 'kauai', 'bigisland'];

export interface SiteTokens {
  /** Page ground */
  bg: string;
  /** Raised surface (panels, wells) */
  surface: string;
  /** Card background */
  card: string;
  cardBorder: string;
  cardRadius: string;
  /** 'none' where shadows are banned (Oʻahu, Big Island) */
  cardShadow: string;
  /** Primary text */
  ink: string;
  /** Secondary text */
  ink2: string;
  /** Hairline */
  line: string;
  /** Links / functional accent */
  accent: string;
  /** Secondary accent (Maui dusk mauve text links; others = accent) */
  accent2: string;
  /** Text-safe accent for dark grounds (Big Island split; others = accent) */
  accentText: string;
  ctaBg: string;
  ctaInk: string;
  ctaRadius: string;
  ctaFont: string; // e.g. '500 13px/1 var(--font-body)' — per §3
  ctaTransform: 'none' | 'uppercase';
  ctaTracking: string;
  /** The one dark (BI: light) band */
  bandBg: string;
  bandInk: string;
  /** accentText re-cut for the band ground — links/eyebrows must clear AA there. */
  bandAccent: string;
  /** Footer ground/ink (design.md §2.3 — differs from page ground per site) */
  footerBg: string;
  footerInk: string;
  /** accentText re-cut for the footer ground. */
  footerAccent: string;
  focusRing: string;
  fontDisplay: string;
  fontBody: string;
  /** Accent/mono family (BI: IBM Plex Mono; others = caps label sans) */
  fontAccent: string;
  displayWeight: number;
  displayTracking: string;
  /** H1 clamp: min px / max px (from §3 type rows) */
  h1Min: number;
  h1Max: number;
  h2Min: number;
  h2Max: number;
  bodySize: string;
  bodyLeading: string;
  /** Max body measure */
  measure: string;
  /** Section padding Y: mobile / desktop */
  sectionPadMobile: string;
  sectionPadDesktop: string;
  /** Motion signature */
  motionMs: number;
  motionEase: string;
  /** Scroll-reveal rise distance */
  revealRise: string;
  /** Nav behavior */
  navTransparentOverHero: boolean;
  /** 'dark' = page ground is dark (Big Island) */
  ground: 'light' | 'dark';
}

export const TOKENS: Record<SiteId, SiteTokens> = {
  /* §3.1 Hub — The Atlas Desk */
  hub: {
    bg: '#F7F5F0',
    surface: '#FFFFFF',
    card: '#FFFFFF',
    cardBorder: '#DDD8CC',
    cardRadius: '6px',
    cardShadow: '0 1px 2px rgba(35,32,26,0.06)',
    ink: '#23201A',
    ink2: '#5E584C',
    line: '#DDD8CC',
    accent: '#8A6D3B',
    accent2: '#8A6D3B',
    accentText: '#826738',
    ctaBg: '#23201A',
    ctaInk: '#F7F5F0',
    ctaRadius: '6px',
    ctaFont: "500 13px/1 var(--font-body)",
    ctaTransform: 'none',
    ctaTracking: '0.01em',
    bandBg: '#2A2620',
    bandInk: '#EDE8DB',
    bandAccent: '#A38C63',
    footerBg: '#F1EEE6',
    footerInk: '#23201A',
    footerAccent: '#826738',
    focusRing: '#8A6D3B',
    fontDisplay: "'Cormorant Garamond', Georgia, serif",
    fontBody: "'Work Sans', system-ui, sans-serif",
    fontAccent: "'Work Sans', system-ui, sans-serif",
    displayWeight: 500,
    displayTracking: '-0.01em',
    h1Min: 42,
    h1Max: 72,
    h2Min: 30,
    h2Max: 44,
    bodySize: '17px',
    bodyLeading: '28px',
    measure: '64ch',
    sectionPadMobile: '72px',
    sectionPadDesktop: '120px',
    motionMs: 250,
    motionEase: 'cubic-bezier(0.3, 0.5, 0.2, 1)',
    revealRise: '10px',
    navTransparentOverHero: false,
    ground: 'light',
  },
  /* §3.2 Oʻahu — Modern Pacific Metropolitan Luxury */
  oahu: {
    bg: '#FAF9F6',
    surface: '#FFFFFF',
    card: '#FFFFFF',
    cardBorder: '#E3E1DA',
    cardRadius: '2px',
    cardShadow: 'none',
    ink: '#191C20',
    ink2: '#5A616B',
    line: '#E3E1DA',
    accent: '#3D5A68',
    accent2: '#3D5A68',
    accentText: '#3D5A68',
    ctaBg: '#191C20',
    ctaInk: '#FAF9F6',
    ctaRadius: '2px',
    ctaFont: "500 12px/1 var(--font-body)",
    ctaTransform: 'uppercase',
    ctaTracking: '0.08em',
    bandBg: '#191C20',
    bandInk: '#EDEBE4',
    bandAccent: '#7E9099',
    footerBg: '#191C20',
    footerInk: '#EDEBE4',
    footerAccent: '#7E9099',
    focusRing: '#3D5A68',
    fontDisplay: "'Inter Tight', system-ui, sans-serif",
    fontBody: "'Inter Tight', system-ui, sans-serif",
    fontAccent: "'Newsreader', Georgia, serif",
    displayWeight: 600,
    displayTracking: '-0.02em',
    h1Min: 44,
    h1Max: 84,
    h2Min: 30,
    h2Max: 44,
    bodySize: '17px',
    bodyLeading: '28px',
    measure: '66ch',
    sectionPadMobile: '64px',
    sectionPadDesktop: '96px',
    motionMs: 150,
    motionEase: 'cubic-bezier(0.2, 0.6, 0.2, 1)',
    revealRise: '8px',
    navTransparentOverHero: false,
    ground: 'light',
  },
  /* §3.3 Maui — Cinematic Resort-Villa Hospitality */
  maui: {
    bg: '#F4EDE2',
    surface: '#FBF6EC',
    card: '#FBF6EC',
    cardBorder: '#E5D9C6',
    cardRadius: '10px',
    cardShadow: '0 18px 40px -24px rgba(44,34,26,0.35)',
    ink: '#2C221A',
    ink2: '#6E5F52',
    line: '#E5D9C6',
    accent: '#A65B38',
    accent2: '#7A5C60',
    accentText: '#9F5836',
    ctaBg: '#A65B38',
    ctaInk: '#FBF3E8',
    ctaRadius: '10px',
    ctaFont: "600 13px/1 var(--font-body)",
    ctaTransform: 'none',
    ctaTracking: '0.01em',
    bandBg: '#241C17',
    bandInk: '#F0E4D3',
    bandAccent: '#BC8062',
    footerBg: '#241C17',
    footerInk: '#F0E4D3',
    footerAccent: '#BC8062',
    focusRing: '#A65B38',
    fontDisplay: "'Fraunces', Georgia, serif",
    fontBody: "'Source Sans 3', system-ui, sans-serif",
    fontAccent: "'Source Sans 3', system-ui, sans-serif",
    displayWeight: 300,
    displayTracking: '-0.01em',
    h1Min: 40,
    h1Max: 88,
    h2Min: 30,
    h2Max: 48,
    bodySize: '17px',
    bodyLeading: '29px',
    measure: '62ch',
    sectionPadMobile: '96px',
    sectionPadDesktop: '160px',
    motionMs: 600,
    motionEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    revealRise: '4px',
    navTransparentOverHero: true,
    ground: 'light',
  },
  /* §3.4 Kauaʻi — Organic Estate Luxury */
  kauai: {
    bg: '#EFEEE3',
    surface: '#F7F6EC',
    card: '#F7F6EC',
    cardBorder: '#D8D6C4',
    cardRadius: '14px',
    cardShadow: '0 24px 48px -28px rgba(32,41,29,0.4)',
    ink: '#24301F',
    ink2: '#57624C',
    line: '#D8D6C4',
    accent: '#4E6B44',
    accent2: '#4E6B44',
    accentText: '#4E6B44',
    ctaBg: '#2E4028',
    ctaInk: '#F2F1E6',
    ctaRadius: '14px',
    ctaFont: "500 13px/1 var(--font-body)",
    ctaTransform: 'none',
    ctaTracking: '0.01em',
    bandBg: '#20291D',
    bandInk: '#E9E8DA',
    // Lifted for the canopy band, whose photographic ground reads lighter
    // than the flat band colour.
    bandAccent: '#9AA98E',
    footerBg: '#20291D',
    footerInk: '#E9E8DA',
    footerAccent: '#9AA98E',
    focusRing: '#4E6B44',
    fontDisplay: "'Spectral', Georgia, serif",
    fontBody: "'Karla', system-ui, sans-serif",
    fontAccent: "'Karla', system-ui, sans-serif",
    displayWeight: 300,
    displayTracking: '0',
    h1Min: 38,
    h1Max: 76,
    h2Min: 28,
    h2Max: 42,
    bodySize: '17px',
    bodyLeading: '29px',
    measure: '64ch',
    sectionPadMobile: '96px',
    sectionPadDesktop: '128px',
    motionMs: 400,
    motionEase: 'cubic-bezier(0.45, 0, 0.3, 1)',
    revealRise: '12px',
    navTransparentOverHero: false,
    ground: 'light',
  },
  /* §3.5 Big Island — Volcanic Minimalism (default ground is DARK) */
  bigisland: {
    bg: '#151412',
    surface: '#1E1C1A',
    card: '#1E1C1A',
    cardBorder: '#34302B',
    cardRadius: '0px',
    cardShadow: 'none',
    ink: '#ECE6DA',
    ink2: '#9C9488',
    line: '#34302B',
    accent: '#A24A2E', // non-text only on basalt (map pins, focus, one price figure)
    accent2: '#C8603F',
    accentText: '#CB6B4B', // text-safe lehua on dark (basalt page + surface card)
    ctaBg: '#ECE6DA',
    ctaInk: '#151412',
    ctaRadius: '0px',
    ctaFont: "500 12px/1 var(--font-accent)",
    ctaTransform: 'uppercase',
    ctaTracking: '0.1em',
    bandBg: '#E8E2D4', // light band: pricing, quote form, long-form
    bandInk: '#181614',
    bandAccent: '#96482F', // lehua darkened for the light band
    footerBg: '#151412', // same as page — separated only by a hairline
    footerInk: '#ECE6DA',
    footerAccent: '#CB6B4B',
    focusRing: '#A24A2E',
    fontDisplay: "'Archivo', system-ui, sans-serif",
    fontBody: "'Archivo', system-ui, sans-serif",
    fontAccent: "'IBM Plex Mono', ui-monospace, monospace",
    displayWeight: 300,
    displayTracking: '-0.015em',
    h1Min: 42,
    h1Max: 92,
    h2Min: 30,
    h2Max: 46,
    bodySize: '17px',
    bodyLeading: '28px',
    measure: '60ch',
    sectionPadMobile: '112px',
    sectionPadDesktop: '176px',
    motionMs: 100, // hard cut — effectively instant
    motionEase: 'cubic-bezier(0.2, 0.6, 0.2, 1)',
    revealRise: '0px',
    navTransparentOverHero: true,
    ground: 'dark',
  },
};

/** Display names (copy carries diacritics; URL slugs stay ASCII). */
export const SITE_META: Record<SiteId, { name: string; shortName: string; basePath: string; world: string }> = {
  hub: { name: 'myCHEF Hawaii', shortName: 'Hub', basePath: '', world: 'The Atlas Desk' },
  oahu: { name: 'Oʻahu', shortName: 'Oʻahu', basePath: '/oahu', world: 'Modern Pacific Metropolitan Luxury' },
  maui: { name: 'Maui', shortName: 'Maui', basePath: '/maui', world: 'Cinematic Resort-Villa Hospitality' },
  kauai: { name: 'Kauaʻi', shortName: 'Kauaʻi', basePath: '/kauai', world: 'Organic Estate Luxury' },
  bigisland: { name: 'Big Island', shortName: 'Big Island', basePath: '/bigisland', world: 'Volcanic Minimalism' },
};

/** Convert a token set to the CSS custom property map injected on the scoped wrapper. */
export function tokensToCssVars(t: SiteTokens): Record<string, string> {
  return {
    '--site-bg': t.bg,
    '--site-surface': t.surface,
    '--site-card': t.card,
    '--site-card-border': t.cardBorder,
    '--site-card-radius': t.cardRadius,
    '--site-card-shadow': t.cardShadow,
    '--site-ink': t.ink,
    '--site-ink2': t.ink2,
    '--site-line': t.line,
    '--site-accent': t.accent,
    '--site-accent2': t.accent2,
    '--site-accent-text': t.accentText,
    '--site-cta-bg': t.ctaBg,
    '--site-cta-ink': t.ctaInk,
    '--site-cta-radius': t.ctaRadius,
    '--site-cta-font': t.ctaFont,
    '--site-cta-transform': t.ctaTransform,
    '--site-cta-tracking': t.ctaTracking,
    '--site-band-bg': t.bandBg,
    '--site-band-ink': t.bandInk,
    '--site-band-accent': t.bandAccent,
    '--site-footer-bg': t.footerBg,
    '--site-footer-ink': t.footerInk,
    '--site-footer-accent': t.footerAccent,
    // Base copies survive the band/footer remaps, so a card that keeps the page
    // ground inside a band can restore page ink instead of inheriting band ink.
    '--site-ink-base': t.ink,
    '--site-ink2-base': t.ink2,
    '--site-line-base': t.line,
    '--site-accent-text-base': t.accentText,
    '--site-accent2-base': t.accent2,
    '--site-focus': t.focusRing,
    '--font-display': t.fontDisplay,
    '--font-body': t.fontBody,
    '--font-accent': t.fontAccent,
    '--site-display-weight': String(t.displayWeight),
    '--site-display-tracking': t.displayTracking,
    '--site-h1': `clamp(${t.h1Min}px, ${(t.h1Min / 375) * 100}vw + ${(t.h1Max - t.h1Min) / 2}px, ${t.h1Max}px)`,
    '--site-h2': `clamp(${t.h2Min}px, ${(t.h2Min / 375) * 100}vw + ${(t.h2Max - t.h2Min) / 2}px, ${t.h2Max}px)`,
    '--site-body-size': t.bodySize,
    '--site-body-leading': t.bodyLeading,
    '--site-measure': t.measure,
    '--site-section-pad': t.sectionPadMobile,
    '--site-section-pad-desktop': t.sectionPadDesktop,
    '--site-motion-ms': `${t.motionMs}ms`,
    '--site-motion-ease': t.motionEase,
    '--site-reveal-rise': t.revealRise,
  };
}
