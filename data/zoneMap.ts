import type { IslandId } from './islands';

/**
 * Canonical zone map — per-island base / surcharge / quote-only zones with
 * drive-time notes (design.md §3.2). No page may claim flat statewide
 * coverage; all logistics language renders from this object.
 */

export type ZoneClass = 'base' | 'surcharge' | 'quote-only';

export interface Zone {
  name: string;
  class: ZoneClass;
  /** Mono short code used on the diagram (A/B/C/D) */
  code: string;
  note: string;
  driveTime?: string;
  /** Surcharge values are published on the rate card */
  feeChip?: 'PUBLISHED';
}

export interface IslandZones {
  island: IslandId;
  headline: string;
  zones: Zone[];
  honestyLine: string;
}

export const zoneMap: Record<IslandId, IslandZones> = {
  oahu: {
    island: 'oahu',
    headline: 'Town and the villa belt are the base. North Shore travel is a quote line.',
    zones: [
      { name: 'Waikīkī', class: 'base', code: 'A', note: 'Resort residences with kitchens — base area; most hotel suites lack kitchens, we adapt.' },
      { name: 'Kahala / Gold Coast', class: 'base', code: 'A', note: 'Estate entertaining — base area.' },
      { name: 'Ko Olina', class: 'base', code: 'A', note: "The island’s deepest legal short-stay villa pool — base area, west-side provisioning." },
      { name: 'Kailua / Lanikai', class: 'base', code: 'A', note: '30-day-estate market — built for multi-day packages, not one-off dinners.' },
      { name: 'North Shore / Turtle Bay', class: 'surcharge', code: 'B', note: 'Travel is its own line on the written quote before any deposit. The amount is on the pricing page. 60–90+ min from town; surf-season dates book early.', driveTime: '60–90+ min', feeChip: 'PUBLISHED' },
    ],
    honestyLine: 'We schedule around the neighborhood — on-site before the rush, about 3 hours pre-service.',
  },
  maui: {
    island: 'maui',
    headline: 'Villa shores are the base. Other travel is a line on the quote.',
    zones: [
      { name: 'Wailea', class: 'base', code: 'A', note: 'Resort residences — base area.' },
      { name: 'Kāʻanapali', class: 'base', code: 'A', note: 'Base area.' },
      { name: 'Kapalua', class: 'base', code: 'A', note: 'Base area.' },
      { name: 'Makena', class: 'base', code: 'A', note: 'Base area.' },
      { name: 'Upcountry', class: 'surcharge', code: 'B', note: 'Travel is its own line on the written quote. The amount is on the pricing page. Elevation is why it is not a Wailea driveway.', feeChip: 'PUBLISHED' },
      { name: 'Paia / Haiku (North Shore)', class: 'quote-only', code: 'C', note: 'Pāʻia and Haʻikū travel is confirmed on the written quote with the menu.' },
    ],
    honestyLine: 'Travel outside the base shores is its own line on the written quote before any deposit. The amount is on the pricing page.',
  },
  kauai: {
    island: 'kauai',
    headline: 'Līhuʻe and Kapaʻa are the base. Both shores add travel.',
    zones: [
      { name: 'Līhuʻe & Kapaʻa', class: 'base', code: 'A', note: 'Base area — no travel line.' },
      { name: 'Princeville / Hanalei & Poʻipū', class: 'surcharge', code: 'B', note: 'Travel is its own line on the written quote before any deposit. The amount is on the pricing page.', feeChip: 'PUBLISHED' },
      { name: 'Haʻena & the far North', class: 'quote-only', code: 'C', note: 'Hāʻena and the far North are confirmed on the written quote with 72-hour notice and a Hanalei-bridge weather clause. Road closures reschedule rather than forfeit.', driveTime: '72-hr notice' },
    ],
    honestyLine: 'Travel outside Līhuʻe and Kapaʻa is its own line on the written quote before any deposit. The amount is on the pricing page.',
  },
  bigisland: {
    island: 'bigisland',
    headline: 'West side first. East side is its own day.',
    zones: [
      { name: 'Kona–Kohala corridor', class: 'base', code: 'A', note: 'Base area — Kailua-Kona, Keauhou, Kohala resorts, Waikōloa.' },
      { name: 'Waimea / Hāmākua', class: 'surcharge', code: 'B', note: 'Travel is its own line on the written quote. The amount is on the pricing page.', feeChip: 'PUBLISHED' },
      { name: 'Kaʻū / South', class: 'surcharge', code: 'C', note: 'Extended travel, with advance notice, as its own line on the written quote.', feeChip: 'PUBLISHED' },
      { name: 'Hilo / Volcano (east side)', class: 'quote-only', code: 'D', note: 'Hilo and Volcano are quoted in writing as their own dedicated day, never stacked on a west-side day. The drive is 2.5–3 hours.', driveTime: '2.5–3 hrs' },
    ],
    honestyLine: 'A same-day Kona–Hilo round trip is not a plan we sell. East side is its own dedicated day on the written quote.',
  },
};
