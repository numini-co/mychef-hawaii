import {
  formatBand,
  getDayRate,
  getMobileBar,
  getOtherOffer,
  getTiers,
  type RateCardEntry,
} from '@/data/rateCard';
import { islands, type IslandId } from '@/data/islands';

/**
 * Estimator model. Every number is derived from the canonical rate card
 * (data/rateCard.ts) — the single source of truth. This produces a *range*,
 * never a booking price: the written quote is always the confirmed total.
 *
 * Groceries follow the dual model:
 *   - Signature dinner / dinner for two / wedding: groceries are inside the
 *     per-guest band, so they are part of the estimated subtotal.
 *   - Stay Chef (multi-day) / weekly household: chef fee is estimated here,
 *     groceries bill separately at cost with receipts (an at-cost line).
 * Mobile bar spirits are billed at cost or BYO — an at-cost line, never in
 * the estimated total.
 */

/** 20% market-convention service charge — see data/rateCard.ts feeStack. */
export const SERVICE_RATE = 0.2;
/** Hawaiʻi GET up to 4.712% incl. county surcharge — matches FEE_DISCLOSURE. */
export const GET_RATE = 0.047120;
export const GET_LABEL = '4.712%';

export type EstimateService =
  | 'signature-dinner'
  | 'dinner-for-two'
  | 'wedding'
  | 'vacation-chef'
  | 'mobile-bar'
  | 'weekly-household';

export type DinnerTier = 'ENTRY' | 'CORE' | 'PREMIUM' | 'ULTRA';

export interface ServiceDef {
  value: EstimateService;
  label: string;
  /** Which extra input this service needs beyond the island. */
  needs: 'guests-tier' | 'fixed-two' | 'guests' | 'days' | 'guests-bar' | 'weeks';
  /** Where groceries / spirits sit. */
  costModel: 'included' | 'chef-fee-plus-groceries' | 'spirits-separate';
  blurb: string;
}

export const ESTIMATE_SERVICES: ServiceDef[] = [
  {
    value: 'signature-dinner',
    label: 'Signature in-villa dinner',
    needs: 'guests-tier',
    costModel: 'included',
    blurb: 'A chef in your kitchen for one dinner. Groceries are inside the per-guest band.',
  },
  {
    value: 'dinner-for-two',
    label: 'Dinner for two / elopement',
    needs: 'fixed-two',
    costModel: 'included',
    blurb: 'A fixed per-event price for a table for two. Groceries included.',
  },
  {
    value: 'wedding',
    label: 'Wedding reception / wedding week',
    needs: 'guests',
    costModel: 'included',
    blurb: 'Per guest for the food, plus event staffing quoted with the plan.',
  },
  {
    value: 'vacation-chef',
    label: 'Vacation chef (Stay Chef, multi-day)',
    needs: 'days',
    costModel: 'chef-fee-plus-groceries',
    blurb: 'A chef for the villa week — chef fee per day, groceries billed at cost with receipts.',
  },
  {
    value: 'mobile-bar',
    label: 'Mobile bar (4-hour package)',
    needs: 'guests-bar',
    costModel: 'spirits-separate',
    blurb: 'A four-hour cart and bartender. Spirits billed at cost or BYO.',
  },
  {
    value: 'weekly-household',
    label: 'Weekly household service',
    needs: 'weeks',
    costModel: 'chef-fee-plus-groceries',
    blurb: 'The resident kamaʻāina line — a weekly chef fee, groceries at cost with receipts.',
  },
];

export function getServiceDef(service: EstimateService): ServiceDef {
  return ESTIMATE_SERVICES.find((s) => s.value === service)!;
}

export interface EstimateInput {
  island: IslandId;
  service: EstimateService;
  guests: number;
  tier: DinnerTier;
  days: number;
  weeks: number;
}

export interface EstimateLine {
  label: string;
  value: string;
}

export interface EstimateResult {
  /** Human label for the base charge. */
  baseLabel: string;
  /** Subtotal range before service + GET, in USD. Equal ends = a single "from". */
  subtotalLow: number;
  subtotalHigh: number;
  /** True when the rate card only publishes a floor for this service. */
  fromOnly: boolean;
  serviceLow: number;
  serviceHigh: number;
  getLow: number;
  getHigh: number;
  totalLow: number;
  totalHigh: number;
  /** At-cost lines that are NOT in the total (groceries, spirits). */
  atCost: string[];
  /** Short model sentence for the base. */
  baseModel: string;
  /** Any input notes (minimum party, inquiry stage). */
  notes: string[];
}

export const MIN_GUESTS = 2;
export const MAX_GUESTS = 75;

function money(n: number): string {
  return `$${Math.round(n).toLocaleString('en-US')}`;
}

function range(low: number, high: number, fromOnly: boolean): string {
  if (fromOnly || low === high) return `from ${money(low)}`;
  return `${money(low)}–${money(high)}`;
}

export function formatEstimateRange(low: number, high: number, fromOnly: boolean): string {
  return range(low, high, fromOnly);
}

function tierEntry(island: IslandId, tier: DinnerTier): RateCardEntry {
  const tiers = getTiers(island);
  return tiers.find((t) => t.tier === tier) ?? tiers.find((t) => t.tier === 'CORE') ?? tiers[0];
}

export function tierOptions(island: IslandId): { value: DinnerTier; label: string }[] {
  return getTiers(island).map((t) => ({ value: t.tier, label: `${t.tier} · ${formatBand(t)} /guest` }));
}

/** Compute the estimate range from the canonical rate card. Pure. */
export function computeEstimate(input: EstimateInput): EstimateResult {
  const { island, service, tier } = input;
  const guests = Math.max(MIN_GUESTS, Math.min(MAX_GUESTS, Math.round(input.guests) || MIN_GUESTS));
  const days = Math.max(1, Math.round(input.days) || 1);
  const weeks = Math.max(1, Math.round(input.weeks) || 1);
  const inquiry = islands[island].state === 'inquiry';

  let baseLabel = '';
  let baseModel = '';
  let subtotalLow = 0;
  let subtotalHigh = 0;
  let fromOnly = false;
  const atCost: string[] = [];
  const notes: string[] = [];

  if (inquiry) {
    notes.push(
      `${islands[island].name} is inquiry stage — published prices hold, and we confirm what we can staff in writing.`,
    );
  }

  switch (service) {
    case 'signature-dinner': {
      const entry = tierEntry(island, tier);
      subtotalLow = entry.band[0] * guests;
      subtotalHigh = entry.band[1] * guests;
      fromOnly = Boolean(entry.highPlus) && entry.band[0] === entry.band[1];
      baseLabel = `Signature dinner · ${entry.tier} · ${guests} guests`;
      baseModel = `${formatBand(entry)} per guest × ${guests}. Groceries are inside the band.`;
      if (guests < entry.minimumParty) {
        notes.push(
          `Below the ${entry.minimumParty}-guest minimum this tier still runs, quoted to the minimum spend.`,
        );
      }
      break;
    }
    case 'dinner-for-two': {
      const offer = getOtherOffer('dinner-for-two').byIsland[island];
      subtotalLow = offer.from;
      subtotalHigh = offer.to ?? offer.from;
      fromOnly = offer.to == null;
      baseLabel = 'Dinner for two · fixed per event';
      baseModel = `${range(subtotalLow, subtotalHigh, fromOnly)} for the table. Groceries included.`;
      break;
    }
    case 'wedding': {
      const offer = getOtherOffer('wedding').byIsland[island];
      subtotalLow = offer.from * guests;
      subtotalHigh = offer.from * guests;
      fromOnly = true;
      baseLabel = `Wedding food · ${guests} guests`;
      baseModel = `from ${money(offer.from)} per guest × ${guests}. Event staffing is quoted with the plan.`;
      atCost.push('Event staffing (servers, sous, bar) — quoted per the run of show, on its own line.');
      break;
    }
    case 'vacation-chef': {
      const day = getDayRate(island);
      subtotalLow = day.from * days;
      subtotalHigh = day.from * days;
      fromOnly = true;
      baseLabel = `Stay Chef · ${days} ${days === 1 ? 'day' : 'days'}`;
      baseModel = `from ${money(day.from)} a day (${day.model}) × ${days}.`;
      atCost.push('Groceries — billed at cost with receipts, never marked up.');
      break;
    }
    case 'mobile-bar': {
      const bar = getMobileBar(island);
      const base = bar.packageFrom + bar.packagePerGuest * guests;
      subtotalLow = base;
      subtotalHigh = base;
      fromOnly = true;
      baseLabel = `Mobile bar · 4 hours · ${guests} guests`;
      baseModel = `from ${money(bar.packageFrom)} for the 4-hour cart + ${money(bar.packagePerGuest)} per guest × ${guests}.`;
      atCost.push('Spirits — billed at cost or BYO. Not in this estimate.');
      break;
    }
    case 'weekly-household': {
      const offer = getOtherOffer('weekly-meal-prep').byIsland[island];
      subtotalLow = offer.from * weeks;
      subtotalHigh = (offer.to ?? offer.from) * weeks;
      fromOnly = offer.to == null;
      baseLabel = `Weekly household · ${weeks} ${weeks === 1 ? 'week' : 'weeks'}`;
      baseModel = `${range(offer.from, offer.to ?? offer.from, offer.to == null)} per week × ${weeks}.`;
      atCost.push('Groceries — billed at cost with receipts, never marked up.');
      break;
    }
  }

  const serviceLow = subtotalLow * SERVICE_RATE;
  const serviceHigh = subtotalHigh * SERVICE_RATE;
  const getLow = (subtotalLow + serviceLow) * GET_RATE;
  const getHigh = (subtotalHigh + serviceHigh) * GET_RATE;
  const totalLow = subtotalLow + serviceLow + getLow;
  const totalHigh = subtotalHigh + serviceHigh + getHigh;

  return {
    baseLabel,
    subtotalLow,
    subtotalHigh,
    fromOnly,
    serviceLow,
    serviceHigh,
    getLow,
    getHigh,
    totalLow,
    totalHigh,
    atCost,
    baseModel,
    notes,
  };
}

export function formatMoney(n: number): string {
  return money(n);
}
