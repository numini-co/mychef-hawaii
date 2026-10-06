import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /locations indexes. Distinct from /coverage (zone map) and from
 * Middleware must not 301 this index to home.
 * Titles must not use money keywords.
 */

export interface IslandLocationsPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandLocations: Record<IslandId, IslandLocationsPage> = {
  oahu: {
    h1: 'Where we cook on Oahu — Honolulu to Ko Olina.',
    title: 'Oahu corridors we cook — Honolulu to Ko Olina | myCHEF',
    description:
      'The Oahu neighborhoods we cook in: Honolulu, Waikīkī, Kahala and the Gold Coast, Kailua and Lanikai, Ko Olina and the North Shore.',
    lede: 'Honolulu, Waikīkī, Kahala and the Gold Coast, Kailua and Lanikai, Ko Olina and the North Shore — each with its own page, kitchens and travel notes.',
    kicker: 'Oʻahu · Locations',
    photo: 'locIndexOahu',
    body: [
      'Hotel suites without a cooktop are declined on the Waikīkī page. North Shore is a surcharge day.',
    ],
    faqs: [
    ],
  },
  maui: {
    h1: 'Where we cook on Maui — South Shore, West Maui and the towns between.',
    title: 'Maui corridors we cook — Wailea to Kapalua | myCHEF',
    description:
      'The Maui neighborhoods we cook in: Wailea, Makena, Kīhei, Kāʻanapali, Lahaina and Kapalua, with travel printed as its own line.',
    lede:
      'Wailea, Makena, Kīhei, Kāʻanapali, Lahaina and Kapalua — Lahaina is a town on this list, not a mystery fee.',
    kicker: 'Maui · Locations',
    photo: 'locIndexMaui',
    body: [
      'Saturday West Maui traffic is planned into arrival.',
    ],
    faqs: [
      {
        q: 'Is Lahaina a separate fee?',
        a: 'No. Travel prints as its own line when it applies.',
      },
    ],
  },
  kauai: {
    h1: 'Where we cook on Kauai — North Shore and South Shore.',
    title: 'Kauai corridors we cook — both shores | myCHEF',
    description:
      'The Kauai neighborhoods we cook in: Princeville, Hanalei, Kapaʻa and Poʻipū. Bookings start as an inquiry.',
    lede:
      'Princeville, Hanalei, Kapaʻa and Poʻipū. Bookings start as an inquiry — send the shore and the dates.',
    kicker: 'Kauaʻi · Locations',
    photo: 'locIndexKauai',
    body: [
      'Hanalei-bridge weather is a clause. Princeville and Poʻipū are not the same drive.',
    ],
    faqs: [
      {
        q: 'Are you live on both shores?',
        a: 'Bookings start as an inquiry. We crew when we can staff. The places below are the ones we quote.',
      },
    ],
  },
  bigisland: {
    h1: 'Where we cook on the Big Island — Kona to Kohala.',
    title: 'Hawaiʻi Island corridors we cook — Kona to Kohala | myCHEF',
    description:
      'The Big Island neighborhoods we cook in: Kailua-Kona, Keauhou, Waikoloa, the Kohala Coast and Waimea. West side first.',
    lede:
      'Kailua-Kona, Keauhou, Waikoloa, the Kohala Coast and Waimea. Hilo is a separate east-side day.',
    kicker: 'Hawaiʻi Island · Locations',
    photo: 'locIndexBigisland',
    body: [
      'West side first. East side is a dedicated day.',
    ],
    faqs: [
      {
        q: 'Where is Hilo?',
        a: 'Not on this list. It is a different chef day.',
      },
    ],
  },
};
