/**
 * Network-wide constants — approved/published numbers ONLY (info.md).
 * Components never invent figures; they read from here.
 */

/** Contact endpoints for the quote handoff.
 *  The WhatsApp business number is provisioned at launch — update it here only. */
export const CONTACT = {
  whatsappNumber: '971551744849',
  whatsappDisplay: '+971 55 174 4849',
  email: 'quotes@mychef-hawaii.com',
} as const;

/** Per-island inbox, so a Waikīkī inquiry lands with the Oʻahu desk. */
export const ISLAND_EMAIL: Record<IslandId, string> = {
  oahu: 'oahu@mychef-hawaii.com',
  maui: 'maui@mychef-hawaii.com',
  kauai: 'kauai@mychef-hawaii.com',
  bigisland: 'bigisland@mychef-hawaii.com',
} as const;

export const SITE_URL = 'https://mychef-hawaii.com';

/** The fee stack — identical words everywhere (legal). Skin only. */
export const FEE_STACK_LINES = [
  '20% service charge, always on its own line',
  'Hawaiʻi GET up to 4.7120%, on its own line (valid through 12/31/2030)',
  '50% deposit locks the date — only after you have seen the numbers',
  'Gratuity is always voluntary',
  'Groceries at cost, receipts on request',
] as const;

/** TrustStrip claims (design.md §4). */
export const TRUST_CLAIMS = [
  'Published prices, honored',
  'The written quote is the confirmed total',
  '20% service + GET up to 4.7120% on their own lines',
  'No fake reviews — ever',
] as const;

export interface IslandRateCard {
  /** CORE/Signature per-guest band, display string. */
  coreBand: string;
  coreLow: number;
  coreHigh: number;
  stayChefDay: number;
  dateNight: string;
  barCart: string;
  travel: string;
}

import type { IslandId } from './tokens';

/** Statewide published rate summary (info.md / pricing.md data table). */
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
