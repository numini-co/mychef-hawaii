import type { SiteId } from '@/platform/tokens';
import { RATES } from '@/platform/config';

const GET_RATE = 0.04712;
const SERVICE_RATE = 0.2;
const MIN_LEAD_HOURS = 48;

/** Earliest bookable calendar day (local): today + 48 hours. */
export function minServiceDate(): string {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + Math.ceil(MIN_LEAD_HOURS / 24));
  return toIsoDate(d);
}

export function toIsoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function uniqueSortedDates(dates: string[]): string[] {
  return [...new Set(dates.map((d) => d.trim()).filter(Boolean))].sort();
}

export function datesAreValid(dates: string[], min = minServiceDate()): boolean {
  const filled = uniqueSortedDates(dates);
  if (!filled.length) return false;
  if (filled.length !== dates.map((d) => d.trim()).filter(Boolean).length) return false; // had dupes
  return filled.every((d) => d >= min);
}

export interface QuoteEstimate {
  label: string;
  foodLow: number;
  foodHigh: number;
  addons: number;
  subLow: number;
  subHigh: number;
  serviceLow: number;
  serviceHigh: number;
  getLow: number;
  getHigh: number;
  totalLow: number;
  totalHigh: number;
  quoteOnly: boolean;
  note: string;
}

function money(n: number): string {
  return `$${Math.round(n).toLocaleString('en-US')}`;
}

export function formatEstimateRange(est: QuoteEstimate): string {
  if (est.quoteOnly) return est.note;
  return `${money(est.totalLow)}–${money(est.totalHigh)} all-in ESTIMATE ONLY`;
}

/**
 * Indicative all-in range: guests × published band + add-ons + 20% service + GET.
 * Never the confirmed total — review copy must keep ESTIMATE ONLY language.
 */
export function computeQuoteEstimate(input: {
  island: SiteId;
  service: string;
  guests: number;
  dates: string[];
  addons: string[];
  quoteOnlyArea?: boolean;
}): QuoteEstimate {
  const { island, service, guests, dates, addons, quoteOnlyArea } = input;
  const rateIsland: SiteId = island === 'hub' ? 'maui' : island;
  const card = RATES[rateIsland as Exclude<SiteId, 'hub'>];
  const mealCount = Math.max(1, uniqueSortedDates(dates).length);

  if (quoteOnlyArea) {
    return {
      label: 'Quoted at inquiry',
      foodLow: 0,
      foodHigh: 0,
      addons: 0,
      subLow: 0,
      subHigh: 0,
      serviceLow: 0,
      serviceHigh: 0,
      getLow: 0,
      getHigh: 0,
      totalLow: 0,
      totalHigh: 0,
      quoteOnly: true,
      note: 'This area is quoted at inquiry — drive time and roster depth make a flat range dishonest here.',
    };
  }

  let foodLow = 0;
  let foodHigh = 0;
  let label = 'Signature dinner';

  if (service === 'date-night') {
    label = 'Date Night';
    const base = rateIsland === 'oahu' ? 450 : rateIsland === 'bigisland' ? 550 : rateIsland === 'kauai' ? 650 : 500;
    foodLow = base * mealCount;
    foodHigh = (base + 200) * mealCount;
  } else if (service === 'stay-chef') {
    label = 'Stay Chef residency';
    const days = Math.max(mealCount, 3);
    foodLow = card.stayChefDay * days + guests * 65 * days;
    foodHigh = card.stayChefDay * days + guests * 95 * days;
  } else if (service === 'wedding-week') {
    label = 'Wedding week (indicative)';
    foodLow = guests * card.coreLow * Math.max(mealCount, 3);
    foodHigh = guests * card.coreHigh * Math.max(mealCount, 5);
  } else if (service === 'event-catering' || service === 'retreat' || service === 'not-sure') {
    label = service === 'retreat' ? 'Retreat catering' : service === 'event-catering' ? 'Event catering' : 'Format TBD';
    foodLow = guests * card.coreLow * mealCount;
    foodHigh = guests * card.coreHigh * mealCount;
  } else if (service === 'weekly-resident') {
    label = 'Weekly resident';
    foodLow = rateIsland === 'oahu' ? 300 : 550;
    foodHigh = rateIsland === 'oahu' ? 600 : 1200;
  } else {
    // signature / default
    foodLow = guests * card.coreLow * mealCount;
    foodHigh = guests * card.coreHigh * mealCount;
  }

  let addonTotal = 0;
  for (const a of addons) {
    if (a.startsWith('Bar cart')) addonTotal += 650 + guests * 45;
    if (a.startsWith('Server')) addonTotal += 55 * 4;
    if (a.startsWith('Sous chef')) addonTotal += 75 * 4;
  }

  const subLow = foodLow + addonTotal;
  const subHigh = foodHigh + addonTotal;
  const serviceLow = subLow * SERVICE_RATE;
  const serviceHigh = subHigh * SERVICE_RATE;
  const getLow = (subLow + serviceLow) * GET_RATE;
  const getHigh = (subHigh + serviceHigh) * GET_RATE;
  const totalLow = subLow + serviceLow + getLow;
  const totalHigh = subHigh + serviceHigh + getHigh;

  return {
    label,
    foodLow,
    foodHigh,
    addons: addonTotal,
    subLow,
    subHigh,
    serviceLow,
    serviceHigh,
    getLow,
    getHigh,
    totalLow,
    totalHigh,
    quoteOnly: false,
    note: `${label} for ${guests} guests${mealCount > 1 ? ` across ${mealCount} dates` : ''}: food ${money(foodLow)}–${money(foodHigh)}${addonTotal ? ` + add-ons ${money(addonTotal)}` : ''} + 20% service + GET 4.7120%. ESTIMATE ONLY — the written quote is the confirmed total.`,
  };
}
