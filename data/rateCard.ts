import type { IslandId } from './islands';

/**
 * Canonical rate card — the single source of truth for every price shown
 * on the site (anti-drift rule). Core offers are published starting prices
 * in USD, Hawaii labor. Quotes are confirmed
 * in writing; the fee stack is always disclosed as its own lines.
 */

export type RateTier = 'ENTRY' | 'CORE' | 'PREMIUM' | 'ULTRA';
export type RateOffer =
  | 'signature-dinner'
  | 'villa-day-rate'
  | 'mobile-bar'
  | 'dinner-for-two'
  | 'wedding'
  | 'vacation-chef'
  | 'weekly-meal-prep'
  | 'event-staffing'
  | 'travel-beyond-base';

export type RateStatus = 'PUBLISHED';

export interface RateCardEntry {
  island: IslandId;
  offer: 'signature-dinner';
  tier: RateTier;
  /** Per-person band in USD: [low, high]. `highPlus` flags an open-ended top (e.g. "$275–$400+"). */
  band: [number, number];
  highPlus?: boolean;
  model: string;
  minimumParty: number;
  minimumSpendNote: string;
  status: RateStatus;
}

const PER_PERSON = 'per guest · groceries included in the dinner band';
const MIN_PARTY = 'Minimum party 6 · neighbor-island ENTRY 8+';
const PUBLISHED: RateStatus = 'PUBLISHED';

export const rateCard: RateCardEntry[] = [
  // Oʻahu (live) — signature in-villa dinner tiers
  { island: 'oahu', offer: 'signature-dinner', tier: 'ENTRY', band: [145, 195], model: PER_PERSON, minimumParty: 8, minimumSpendNote: MIN_PARTY, status: PUBLISHED },
  { island: 'oahu', offer: 'signature-dinner', tier: 'CORE', band: [195, 290], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },
  { island: 'oahu', offer: 'signature-dinner', tier: 'PREMIUM', band: [290, 425], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },
  { island: 'oahu', offer: 'signature-dinner', tier: 'ULTRA', band: [425, 550], highPlus: true, model: "per guest · chef's-table halo, quoted manually", minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },

  // Maui (live)
  { island: 'maui', offer: 'signature-dinner', tier: 'ENTRY', band: [190, 225], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },
  { island: 'maui', offer: 'signature-dinner', tier: 'CORE', band: [225, 375], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },
  { island: 'maui', offer: 'signature-dinner', tier: 'PREMIUM', band: [375, 525], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },
  { island: 'maui', offer: 'signature-dinner', tier: 'ULTRA', band: [475, 675], highPlus: true, model: "per guest · private chef's table", minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },

  // Hawaiʻi Island — west-side first; CORE specified $210–$325
  { island: 'bigisland', offer: 'signature-dinner', tier: 'ENTRY', band: [165, 210], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },
  { island: 'bigisland', offer: 'signature-dinner', tier: 'CORE', band: [210, 325], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },
  { island: 'bigisland', offer: 'signature-dinner', tier: 'PREMIUM', band: [325, 475], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },
  { island: 'bigisland', offer: 'signature-dinner', tier: 'ULTRA', band: [475, 475], highPlus: true, model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },

  // Kauaʻi — Maui-class CORE ($225–$375). Not a waitlist island.
  { island: 'kauai', offer: 'signature-dinner', tier: 'ENTRY', band: [190, 225], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },
  { island: 'kauai', offer: 'signature-dinner', tier: 'CORE', band: [225, 375], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },
  { island: 'kauai', offer: 'signature-dinner', tier: 'PREMIUM', band: [375, 525], model: PER_PERSON, minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },
  { island: 'kauai', offer: 'signature-dinner', tier: 'ULTRA', band: [525, 525], highPlus: true, model: 'per guest · North Shore estate product', minimumParty: 6, minimumSpendNote: MIN_PARTY, status: PUBLISHED },
];

/** Villa chef day rate — chef + assistant, one meal, groceries billed at cost. */
export interface DayRate {
  island: IslandId;
  from: number;
  meals: 1;
  model: string;
  includes: string;
  status: RateStatus;
}

export const dayRates: DayRate[] = [
  {
    island: 'oahu',
    from: 1250,
    meals: 1,
    model: 'chef + assistant · 1 meal · groceries at cost',
    includes: 'Menu design, shopping, cooking, service and cleanup. Extra meals quoted on the same day.',
    status: PUBLISHED,
  },
  {
    island: 'maui',
    from: 1550,
    meals: 1,
    model: 'chef + assistant · 1 meal · groceries at cost',
    includes: 'Menu design, shopping, cooking, service and cleanup. Extra meals quoted on the same day.',
    status: PUBLISHED,
  },
  {
    island: 'kauai',
    from: 1650,
    meals: 1,
    model: 'chef + assistant · 1 meal · groceries at cost',
    includes: 'Menu design, shopping, cooking, service and cleanup. Extra meals quoted on the same day.',
    status: PUBLISHED,
  },
  {
    island: 'bigisland',
    from: 1450,
    meals: 1,
    model: 'chef + assistant · 1 meal · groceries at cost',
    includes: 'Menu design, shopping, cooking, service and cleanup. Extra meals quoted on the same day.',
    status: PUBLISHED,
  },
];

/** Mobile cocktail bar — stacked with chef/catering or booked alone. */
export interface MobileBarRate {
  island: IslandId;
  perGuest: [number, number];
  packageFrom: number;
  packageHours: 4;
  packagePerGuest: number;
  model: string;
  note: string;
  status: RateStatus;
}

export const mobileBarRates: MobileBarRate[] = [
  {
    island: 'oahu',
    perGuest: [125, 165],
    packageFrom: 975,
    packageHours: 4,
    packagePerGuest: 65,
    model: '4-hour villa bar · bartender + setup · spirits billed at cost or BYO',
    note: 'Stacks with a chef night or books as a terrace cocktail hour. Waikīkī, Kahala, Ko Olina, Kailua.',
    status: PUBLISHED,
  },
  {
    island: 'maui',
    perGuest: [145, 185],
    packageFrom: 1200,
    packageHours: 4,
    packagePerGuest: 85,
    model: '4-hour villa bar · bartender + setup · spirits billed at cost or BYO',
    note: 'Wedding-week welcome pours and villa nights in Wailea, Kapalua, Kāʻanapali, Makena.',
    status: PUBLISHED,
  },
  {
    island: 'kauai',
    perGuest: [150, 185],
    packageFrom: 1275,
    packageHours: 4,
    packagePerGuest: 90,
    model: '4-hour villa bar · bartender + setup · spirits billed at cost or BYO',
    note: 'Princeville, Hanalei and Poʻipū estates. Inquiry-stage until a staffed Kauaʻi team launches.',
    status: PUBLISHED,
  },
  {
    island: 'bigisland',
    perGuest: [135, 180],
    packageFrom: 1100,
    packageHours: 4,
    packagePerGuest: 75,
    model: '4-hour villa bar · bartender + setup · spirits billed at cost or BYO',
    note: 'Kohala Coast and Kona first. Inquiry-stage until the west-side team launches.',
    status: PUBLISHED,
  },
];

export interface IslandAmount {
  from: number;
  to?: number;
  highPlus?: boolean;
  unit: string;
}

export interface OtherOffer {
  offer: string;
  key: Exclude<RateOffer, 'signature-dinner' | 'villa-day-rate' | 'mobile-bar'>;
  model: string;
  byIsland: Record<IslandId, IslandAmount>;
  /** Statewide published summary — prefer formatOtherOffer(island) in UI. */
  orientation: string;
  status: RateStatus;
}

/**
 * Beyond-the-dinner published starting prices. Derived from the dinner bands
 * and the existing orientation.
 */
export const otherOffers: OtherOffer[] = [
  {
    offer: 'Dinner for two / elopement',
    key: 'dinner-for-two',
    model: 'Fixed per event',
    byIsland: {
      oahu: { from: 675, unit: 'per event' },
      maui: { from: 750, highPlus: true, unit: 'per event' },
      kauai: { from: 975, to: 1425, unit: 'per event' },
      bigisland: { from: 825, unit: 'per event' },
    },
    orientation: 'from $675 Oʻahu · from $750+ Maui · $975–$1,425 Kauaʻi · from $825 Hawaiʻi Island',
    status: PUBLISHED,
  },
  {
    offer: 'Wedding reception / wedding week',
    key: 'wedding',
    model: 'Per person + staffing',
    byIsland: {
      oahu: { from: 190, unit: 'per person + staffing' },
      maui: { from: 225, unit: 'per person + staffing' },
      kauai: { from: 260, unit: 'per person + staffing' },
      bigisland: { from: 225, unit: 'per person + staffing' },
    },
    orientation: 'from $190 Oʻahu · from $225 Maui / Hawaiʻi Island · from $260 Kauaʻi · plus staffing',
    status: PUBLISHED,
  },
  {
    offer: 'Vacation chef / multi-day',
    key: 'vacation-chef',
    model: 'Per person per day + groceries at cost',
    byIsland: {
      oahu: { from: 275, to: 450, highPlus: true, unit: 'per person / day' },
      maui: { from: 350, to: 450, highPlus: true, unit: 'per person / day' },
      kauai: { from: 375, to: 450, highPlus: true, unit: 'per person / day' },
      bigisland: { from: 300, to: 450, highPlus: true, unit: 'per person / day' },
    },
    orientation: 'from $275 Oʻahu · from $350 Maui · from $375 Kauaʻi · from $300 Hawaiʻi Island / person / day',
    status: PUBLISHED,
  },
  {
    offer: 'Weekly meal prep (kamaʻāina line)',
    key: 'weekly-meal-prep',
    model: 'Fixed weekly + groceries at cost',
    byIsland: {
      oahu: { from: 450, to: 1800, unit: 'per week' },
      maui: { from: 675, to: 1800, unit: 'per week' },
      kauai: { from: 825, to: 1800, unit: 'per week' },
      bigisland: { from: 600, to: 1800, unit: 'per week' },
    },
    orientation: 'from $450/week Oʻahu · island-adjusted on Maui, Kauaʻi and Hawaiʻi Island · groceries at cost',
    status: PUBLISHED,
  },
  {
    offer: 'Event staffing',
    key: 'event-staffing',
    model: 'Hourly, 4–5 hr minimums',
    byIsland: {
      oahu: { from: 80, unit: 'per hour (server) · sous-chef $105/hr' },
      maui: { from: 80, unit: 'per hour (server) · sous-chef $105/hr' },
      kauai: { from: 80, unit: 'per hour (server) · sous-chef $105/hr' },
      bigisland: { from: 80, unit: 'per hour (server) · sous-chef $105/hr' },
    },
    orientation: '$80/hr server · $105/hr sous-chef · 4–5 hour minimums',
    status: PUBLISHED,
  },
  {
    offer: 'Travel beyond base zone',
    key: 'travel-beyond-base',
    model: 'Published zone surcharge',
    byIsland: {
      oahu: { from: 75, unit: 'North Shore / Turtle Bay surcharge, quoted with the menu' },
      maui: { from: 75, unit: 'Upcountry surcharge · Pāʻia / North Shore quoted with the menu' },
      kauai: { from: 50, to: 75, unit: 'Princeville / Poʻipū surcharge · far-North quote-only' },
      bigisland: { from: 75, unit: 'outside Kona–Kohala corridor · east side quote-only' },
    },
    orientation: 'Published per island zone map — only outside base zones, never silent',
    status: PUBLISHED,
  },
];

export const STAFFING = {
  serverHourly: 80,
  sousHourly: 105,
  minimumHours: 4,
} as const;

export type FeeChip = 'PUBLISHED' | 'RPR — ATTORNEY' | 'RPR — CPA' | 'VERIFIED — POLICY' | 'RPR';

export interface FeeStackRow {
  label: string;
  chip: FeeChip;
}

/** Canonical fee stack — disclosed line items on every quote. */
export const feeStack: FeeStackRow[] = [
  { label: 'Menu price (per guest, day rate, or fixed) — published starting price', chip: 'PUBLISHED' },
  {
    label: 'Service charge — 20% market convention; distributed to staff or disclosed in writing (HRS §481B-14 posture)',
    chip: 'RPR — ATTORNEY',
  },
  {
    label: 'GET — up to 4.7120% incl. county surcharge, shown as its own line, valid through Dec 31, 2030',
    chip: 'RPR — CPA',
  },
  { label: 'Booking deposit — 50% market norm, locks your date', chip: 'VERIFIED — POLICY' },
  { label: 'Travel zone fee — only outside base zones, published per island', chip: 'PUBLISHED' },
  { label: 'Gratuity — always voluntary, never hidden in the bill', chip: 'VERIFIED — POLICY' },
];

export const FEE_DISCLOSURE =
  'Starting prices. 20% service charge and GET up to 4.712% are added as their own lines. 50% deposit locks the date. Gratuity is voluntary. Quote confirmed in writing.';

export function getTiers(island: IslandId, offer: 'signature-dinner' = 'signature-dinner'): RateCardEntry[] {
  return rateCard.filter((e) => e.island === island && e.offer === offer);
}

export function getDayRate(island: IslandId): DayRate {
  return dayRates.find((d) => d.island === island)!;
}

export function getMobileBar(island: IslandId): MobileBarRate {
  return mobileBarRates.find((d) => d.island === island)!;
}

export function getOtherOffer(key: OtherOffer['key']): OtherOffer {
  return otherOffers.find((o) => o.key === key)!;
}

export function formatBand(entry: RateCardEntry): string {
  if (entry.highPlus && entry.band[0] === entry.band[1]) return `$${entry.band[0]}+`;
  return `$${entry.band[0]}–$${entry.band[1]}${entry.highPlus ? '+' : ''}`;
}

export function formatFrom(amount: number, highPlus = false): string {
  return `from $${amount.toLocaleString('en-US')}${highPlus ? '+' : ''}`;
}

export function formatRange(low: number, high: number, highPlus = false): string {
  return `$${low}–$${high}${highPlus ? '+' : ''}`;
}

export function formatIslandAmount(amount: IslandAmount): string {
  if (amount.to != null) {
    return `${formatFrom(amount.from)}–$${amount.to.toLocaleString('en-US')}${amount.highPlus ? '+' : ''}`;
  }
  return formatFrom(amount.from, amount.highPlus);
}

export function formatOtherOffer(offer: OtherOffer, island: IslandId): string {
  const amount = offer.byIsland[island];
  return `${formatIslandAmount(amount)} ${amount.unit}`;
}

export function formatDayRate(island: IslandId): string {
  return `${formatFrom(getDayRate(island).from)} / day`;
}

export function formatMobileBarGuest(island: IslandId): string {
  const bar = getMobileBar(island);
  return `${formatRange(bar.perGuest[0], bar.perGuest[1])} / guest`;
}

export function formatMobileBarPackage(island: IslandId): string {
  const bar = getMobileBar(island);
  return `${formatFrom(bar.packageFrom)} / ${bar.packageHours} hr + $${bar.packagePerGuest}/guest`;
}

export function coreDinnerFrom(island: IslandId): string {
  const core = getTiers(island).find((t) => t.tier === 'CORE');
  return core ? `${formatFrom(core.band[0])} a guest` : '';
}
