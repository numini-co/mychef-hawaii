import { RATES, STAFFING } from '@/platform/config';
import type { IslandId } from '@/platform/tokens';
import type { SiteId } from '@/platform/tokens';

export interface IslandFacts {
  id: SiteId;
  name: string;
  english: string;
  world: string;
  coreBand: string;
  stayChef: number;
  dateNight: string;
  barCart: string;
  travel: string;
  weddingFrom: string;
  extras: string[];
  areas: string[];
  decline: string[];
}

export const ISLAND_FACTS: Record<SiteId, IslandFacts> = {
  hub: {
    id: 'hub',
    name: 'Hawaiʻi',
    english: 'Hawaii',
    world: 'The Atlas Desk',
    coreBand: '$125–$250',
    stayChef: 850,
    dateNight: 'from $450',
    barCart: 'from $650/4hr',
    travel: 'published per island',
    weddingFrom: 'from $125/guest + staffing',
    extras: [
      'The hub owns statewide terms: private chef Hawaii, the tariff, the fee stack, and the decision guides.',
      'Commercial booking always happens on an island site — Oʻahu, Maui, Kauaʻi, or the Big Island — because permits, travel, and rosters are per-island.',
    ],
    areas: ['Oʻahu', 'Maui', 'Kauaʻi', 'Big Island'],
    decline: ['hotel rooms without kitchens', 'ballrooms that lock their caterer list', 'named-chef marketplace bookings'],
  },
  oahu: {
    id: 'oahu',
    name: 'Oʻahu',
    english: 'Oahu',
    world: 'Modern Pacific metropolitan luxury',
    coreBand: RATES.oahu.coreBand,
    stayChef: RATES.oahu.stayChefDay,
    dateNight: RATES.oahu.dateNight,
    barCart: RATES.oahu.barCart,
    travel: RATES.oahu.travel,
    weddingFrom: 'from $125/person + staffing',
    extras: [
      'Oʻahu runs two economies on one card: visitors in Waikīkī and Ko Olina, and residents from Kahala to Hawaiʻi Kai on the kamaʻāina weekly line from $300/week.',
      'Corporate and convention displacement through the Hawaiʻi Convention Center window is an Oʻahu-only line — COI and load-in are written into the quote.',
      'Legal short-term rentals concentrate in Waikīkī and Ko Olina; we cook there when the kitchen is real and the building allows it.',
    ],
    areas: ['Waikīkī', 'Honolulu', 'Kahala', 'Ko Olina', 'Kapolei', 'Kailua–Lanikai', 'North Shore', 'Turtle Bay', 'Hawaiʻi Kai'],
    decline: ['hotel rooms without kitchens', 'buildings that refuse a COI', 'same-week convention overflow we cannot staff honestly'],
  },
  maui: {
    id: 'maui',
    name: 'Maui',
    english: 'Maui',
    world: 'Cinematic resort-villa hospitality',
    coreBand: RATES.maui.coreBand,
    stayChef: RATES.maui.stayChefDay,
    dateNight: RATES.maui.dateNight,
    barCart: RATES.maui.barCart,
    travel: RATES.maui.travel,
    weddingFrom: 'from $150/guest + staffing',
    extras: [
      'Maui carries the network’s deepest wedding-week cluster — welcome dinner, rehearsal, reception, and recovery brunch as one contract.',
      'Wailea, Kāʻanapali, and Kapalua are base resort corridors; Upcountry carries a published travel fee from $75; Pāʻia and Haʻikū are quoted at inquiry.',
      'We buy from Maui farmers and fishers first when the week’s menu allows it — that is a sourcing habit, not a slogan.',
    ],
    areas: ['Wailea', 'Mākena', 'Kāʻanapali', 'Lahaina', 'Kapalua', 'Upcountry', 'Pāʻia', 'Haʻikū'],
    decline: ['hotel rooms without kitchens', 'Haleakalā summit events', 'venues that lock an exclusive caterer'],
  },
  kauai: {
    id: 'kauai',
    name: 'Kauaʻi',
    english: 'Kauai',
    world: 'Organic estate luxury',
    coreBand: RATES.kauai.coreBand,
    stayChef: RATES.kauai.stayChefDay,
    dateNight: RATES.kauai.dateNight,
    barCart: RATES.kauai.barCart,
    travel: RATES.kauai.travel,
    weddingFrom: 'from $175/person + staffing',
    extras: [
      'Kauaʻi is two shores and one roster: Princeville and Hanalei on the north, Poʻipū and Kōloa on the south, Kapaʻa and Līhuʻe on the east.',
      'The Hanalei bridge is a real constraint — far-North dates need 72-hour notice, and the quote says why instead of inventing a flat number.',
      'Retreat catering is a Kauaʻi growth line: communal tables, dietary protocols, and one contract for the week.',
    ],
    areas: ['Princeville', 'Hanalei', 'Poʻipū', 'Kōloa', 'Kapaʻa', 'Līhuʻe'],
    decline: ['hotel rooms without kitchens', 'west-side dates we cannot staff from the current roster', 'same-day far-North requests'],
  },
  bigisland: {
    id: 'bigisland',
    name: 'the Big Island',
    english: 'Big Island',
    world: 'Volcanic minimalism',
    coreBand: RATES.bigisland.coreBand,
    stayChef: RATES.bigisland.stayChefDay,
    dateNight: RATES.bigisland.dateNight,
    barCart: RATES.bigisland.barCart,
    travel: RATES.bigisland.travel,
    weddingFrom: 'from $150/guest + staffing',
    extras: [
      'Visitors search “Big Island”; the official name is Hawaiʻi Island. We use both, honestly, and cook from a Kona–Kohala roster.',
      'The east side — Hilo and Volcano — sits 2.5–3 hours from that roster. Those dates are quoted at inquiry, never implied as same-day.',
      'Signature dinners are $150–$225 a guest. There is no “from $125” on this island. ENTRY starts at $110 where that tier is offered.',
    ],
    areas: ['Kailua-Kona', 'Kohala Coast', 'Waikōloa', 'Keauhou', 'Hilo', 'Volcano'],
    decline: ['hotel rooms without kitchens', 'same-day Kona-to-Hilo turns', 'invented east-side day rates'],
  },
};

export const FEE = {
  service: '20% service charge',
  get: 'Hawaiʻi GET up to 4.7120% (valid through 12/31/2030)',
  deposit: '50% deposit after you have seen the written quote',
  gratuity: 'gratuity is always voluntary',
  groceries: 'groceries at cost, receipts on request',
};

export const STAFF = {
  server: `$${STAFFING.serverHourly}/hr`,
  sous: `$${STAFFING.sousChefHourly}/hr`,
  floor: `${STAFFING.floorHours}-hour floor`,
};

export function islandOf(id: SiteId): IslandFacts {
  return ISLAND_FACTS[id];
}

export function islandId(id: SiteId): IslandId | null {
  return id === 'hub' ? null : id;
}
