import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/** DataForSEO Google Ads US — 4 Sep 2026. Do not invent. Catering > chef on Oʻahu and Maui. */
export const CATERING_VOLUMES = {
  'oahu catering': 720,
  'maui catering': 480,
  'kauai catering': 210,
  'hawaii catering': 210,
  'wedding catering oahu': 140,
  'big island catering': 50,
  'wedding catering maui': 30,
  'wedding catering hawaii': 30,
  'kauai wedding catering': 10,
} as const;

export interface CateringOffer {
  keyword: string;
  volume: number;
  h1: string;
  title: string;
  description: string;
  lede: string;
  fromPp: number;
  weddingFrom: number;
  places: string;
  photo: PhotoKey;
  faqs: { q: string; a: string }[];
}

export const cateringOffers: Record<IslandId, CateringOffer> = {
  oahu: {
    keyword: 'oahu catering',
    volume: CATERING_VOLUMES['oahu catering'],
    h1: 'Oahu catering — staffed events from Honolulu to Ko Olina.',
    title: 'Oahu Catering | Honolulu to Ko Olina Events | myCHEF',
    description:
      'Oahu catering from $195 a guest — staffed villa and estate events from Honolulu and Kahala to Ko Olina, 10–75 guests. Buffet or plated. Request a quote.',
    lede:
      'Staffed Oahu catering for villas, estates and residences — buffet, plated or family-style for 10–75 guests. Honolulu catering from Kahala to Ko Olina, with published prices and a written menu.',
    fromPp: 195,
    weddingFrom: 190,
    places: 'Honolulu, Waikīkī residences, Kahala, Kailua, Ko Olina',
    photo: 'cateringOahu',
    faqs: [],
  },
  maui: {
    keyword: 'maui catering',
    volume: CATERING_VOLUMES['maui catering'],
    h1: 'Maui catering — staffed villa events, not drop-off.',
    title: 'Maui Catering Menus | Villa Receptions & Events | myCHEF',
    description:
      'Sample Maui catering menus for villa events of 10–75 guests — buffet, plated, or family-style in Wailea and West Maui. The menu is written for that house.',
    lede:
      'Staffed Maui catering for villa receptions, reunions and wedding weeks in Wailea, Kīhei and West Maui. Buffet or plated for 10–75 guests, from $225 a guest.',
    fromPp: 225,
    weddingFrom: 225,
    places: 'Wailea, Kāʻanapali, Lahaina / West Maui, Kīhei, Kapalua',
    photo: 'cateringMaui',
    faqs: [],
  },
  kauai: {
    keyword: 'kauai catering',
    volume: SEARCH_VOLUMES['kauai catering'],
    h1:
      'Kauai catering — staffed estate events on both shores.',
    title: 'Kauai Catering | Princeville & Poipu Estate Events | myCHEF',
    description:
      'Kauai catering from $225 a guest — staffed estate and villa events in Princeville, Hanalei and Poʻipū, 10–75 guests. Buffet or plated. Inquiry stage.',
    lede:
      'Staffed Kauai catering for estates and villas from Princeville to Poʻipū — buffet or plated for 10–75 guests, from $225 a guest. Send your dates for a written reply.',
    fromPp: 225,
    weddingFrom: 260,
    places: 'Princeville, Poʻipū, Hanalei, Kapaʻa',
    photo: 'cateringKauai',
    faqs: [],
  },
  bigisland: {
    keyword: 'big island catering',
    volume: CATERING_VOLUMES['big island catering'],
    h1: 'Big Island catering — Kona and Kohala Coast villa events.',
    title: 'Big Island Catering | Kona & Kohala Villa Events | myCHEF',
    description:
      'Big Island catering from $210 a guest — staffed Kona and Kohala Coast villa receptions, buffet or plated. Inquiry stage; ask for a written quote.',
    lede:
      'Big Island catering on Hawaiʻi Island (the Big Island): staffed villa events on the Kona–Kohala Coast, buffet or plated, from $210 a guest. Kona catering included; Hilo is quoted as its own day.',
    fromPp: 210,
    weddingFrom: 225,
    places: 'Kohala Coast, Waikoloa, Kailua-Kona',
    photo: 'cateringBigisland',
    faqs: [],
  },
};

export const HUB_CATERING = {
  keyword: 'hawaii catering',
  volume: CATERING_VOLUMES['hawaii catering'],
  h1: 'Hawaii catering — villas and estates, not ballrooms.',
  title: 'Hawaii Catering | Staffed Villa Events 10–75 | myCHEF',
  description:
    'Hawaii catering for villa and estate events of 10–75 guests. Buffet or plated. Oahu, Maui, Kauaʻi, Big Island. Not ballrooms. Request a quote.',
  lede:
    'Staffed villa and estate events of 10–75 guests on four islands — not ballrooms. Buffet or plated. Published starting prices. Open the island page for the house you booked.',
  faqs: [
    {
      q: 'How much is Hawaii catering?',
      a: 'Signature food from $195 a guest on Oʻahu, $225 on Maui and Kauaʻi, and $210 on Hawaiʻi Island (ENTRY from $165). Wedding catering from $190–$260 a guest plus staffing, depending on the island. 20% service and Hawaiʻi GET up to 4.712% sit on their own lines, once.',
    },
    {
      q: 'Buffet or plated?',
      a: 'Buffet is the volume format. Plated is the restaurant arc. Family-style sits between. The food band is the island CORE card; staffing is itemised.',
    },
    {
      q: 'Which island should I open?',
      a: 'Open the island where the villa is. Oʻahu, Maui, Kauaʻi, and Hawaiʻi Island each publish starting prices and a sample menu. West-side first on Hawaiʻi Island — Kona and Kohala.',
    },
    {
      q: 'Do you publish a Hawaii catering menu?',
      a: 'The written menu is for that house and that guest list — not a statewide carte. Sample courses and formats are on each island page: [Oʻahu catering menus](oahu:/catering), [Maui catering menus](maui:/catering), [Kauaʻi catering menus](kauai:/catering), and [Big Island catering menus](bigisland:/catering).',
    },
  ],
} as const;
