/**
 * Network-wide constants — approved/published numbers ONLY (info.md).
 * Components never invent figures; they read from here.
 */

/** Contact endpoints for the quote handoff.
 *  The WhatsApp business number is provisioned at launch — update it here only. */
export const CONTACT = {
  whatsappNumber: '18084687748',
  whatsappDisplay: '+1 (808) 468-7748',
  phoneDisplay: '(808) 468-7748',
  email: 'quotes@mychef-hawaii.com',
  partnershipsEmail: 'partnerships@mychef-hawaii.com',
  pressEmail: 'press@mychef-hawaii.com',
} as const;

/** Per-island inbox, so a Waikīkī inquiry lands with the Oʻahu desk. */
export const ISLAND_EMAIL: Record<IslandId, string> = {
  oahu: 'oahu@mychef-hawaii.com',
  maui: 'maui@mychef-hawaii.com',
  kauai: 'kauai@mychef-hawaii.com',
  bigisland: 'bigisland@mychef-hawaii.com',
} as const;

export const SITE_URL = 'https://mychef-hawaii.com';

const ISLAND_HOSTS = ['oahu', 'maui', 'kauai', 'bigisland'] as const;
type IslandHost = (typeof ISLAND_HOSTS)[number];

function isIslandHost(id: string): id is IslandHost {
  return (ISLAND_HOSTS as readonly string[]).includes(id);
}

/**
 * Absolute public URL for a site path.
 * Island path URLs (/oahu/…) and bare island-site paths (/pricing on oahu host)
 * canonicalize to the flagship subdomain (NEO dual-journey).
 */
export function absoluteUrl(path: string, siteId?: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const prefixed = clean.match(/^\/(oahu|maui|kauai|bigisland)(\/.*)?$/);
  if (prefixed) {
    const rest = prefixed[2] && prefixed[2] !== '/' ? prefixed[2] : '/';
    return `https://${prefixed[1]}.mychef-hawaii.com${rest}`;
  }

  let island: IslandHost | undefined = siteId && isIslandHost(siteId) ? siteId : undefined;
  if (!island && typeof window !== 'undefined') {
    const sub = window.location.hostname.toLowerCase().split('.')[0];
    if (isIslandHost(sub)) island = sub;
  }
  if (island) {
    const rest = clean === '/' || clean === '' ? '/' : clean;
    return `https://${island}.mychef-hawaii.com${rest}`;
  }

  if (clean === '/' || clean === '') return `${SITE_URL}/`;
  return `${SITE_URL}${clean}`;
}

export function islandHostOfPath(path: string): IslandHost | null {
  const m = path.match(/^\/(oahu|maui|kauai|bigisland)(\/|$)/);
  return m ? (m[1] as IslandHost) : null;
}

/** The fee stack — identical words everywhere (legal). Skin only. */
export const FEE_STACK_LINES = [
  '20% service charge, always on its own line',
  'Hawaiʻi GET up to 4.7120%, on its own line (valid through 12/31/2030)',
  '50% deposit locks the date — only after you have seen the numbers',
  'Gratuity is always voluntary',
  'Stay Chef groceries at cost with merchant receipts (zero retail markup)',
] as const;

/** TrustStrip claims (design.md §4). */
export const TRUST_CLAIMS = [
  'Published prices, honored',
  'The written quote is the confirmed total',
  '20% service + GET up to 4.7120% on their own lines',
  'No fake reviews — ever',
] as const;

export interface IslandRateCard {
  /** Signature (primary) per-guest band, display string. Property key `coreBand` kept for internal compatibility. */
  coreBand: string;
  coreLow: number;
  coreHigh: number;
  stayChefDay: number;
  dateNight: string;
  barCart: string;
  travel: string;
}

import type { IslandId } from './tokens';

/** Format USD whole dollars with commas — use for all Stay Chef / worked-math display. */
export function formatMoney(n: number): string {
  return `$${Math.round(n).toLocaleString('en-US')}`;
}

/** Statewide published rate summary — mirrors public/pricing.json (audit Phase 4 SSOT). */
export const RATES: Record<IslandId, IslandRateCard> = {
  oahu: {
    coreBand: '$125–$190',
    coreLow: 125,
    coreHigh: 190,
    stayChefDay: 850,
    dateNight: 'from $450',
    barCart: '$650/4hr + $45/guest',
    travel: 'North Shore / Turtle Bay from $75',
  },
  maui: {
    coreBand: '$150–$250',
    coreLow: 150,
    coreHigh: 250,
    stayChefDay: 1050,
    dateNight: 'from $500',
    barCart: '$800/4hr',
    travel: 'Upcountry from $75 · Pāʻia/Haʻikū quoted at inquiry',
  },
  kauai: {
    coreBand: '$150–$250',
    coreLow: 150,
    coreHigh: 250,
    stayChefDay: 1100,
    dateNight: '$650–$950',
    barCart: '$850/4hr + $60/guest',
    travel: 'Shore surcharges $50–$75 · far-North quoted at inquiry, 72-hour notice',
  },
  bigisland: {
    coreBand: '$150–$225',
    coreLow: 150,
    coreHigh: 225,
    stayChefDay: 950,
    dateNight: 'from $550',
    barCart: '$725/4hr',
    travel: 'Outside Kona–Kohala from $75 · east side quoted at inquiry',
  },
};

/** Staffing SKUs, network-wide. */
export const STAFFING = {
  serverHourly: 55,
  sousChefHourly: 75,
  floorHours: 4,
  kamainaWeeklyOahu: 300,
  kamainaWeeklyKauai: '$550–$1,200',
} as const;
