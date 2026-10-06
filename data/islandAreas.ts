import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /areas indexes. Distinct from /locations (live dinner doors only)
 * and from /coverage (zone map). Titles must not use money keywords.
 */

export interface IslandAreasPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandAreas: Record<IslandId, IslandAreasPage> = {
  oahu: {
    h1: 'Oahu area guide — the places we cook and the rest of the island.',
    title: 'Oahu area guide — Honolulu plus the rest of the island | myCHEF',
    description: 'Oahu area guide: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
    lede: 'Oahu area guide: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
    kicker: 'Oʻahu · Areas',
    photo: 'areasIndexOahu',
    body: [
      'Dining-in blogs stay the kitchen notes beside them. North Shore is still a surcharge day.',
    ],
    faqs: [
    ],
  },
  maui: {
    h1: 'Maui area guide — the places we cook, plus Upcountry.',
    title: 'Maui area guide — Wailea plus Upcountry and the rest | myCHEF',
    description: 'Maui area guide: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
    lede: 'Maui area guide: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
    kicker: 'Maui · Areas',
    photo: 'areasIndexMaui',
    body: [
      'Dining-in blogs stay the kitchen notes. Saturday West Maui traffic still is on the West Maui page.',
    ],
    faqs: [
    ],
  },
  kauai: {
    h1: 'Kauai area guide — both shores plus west-side towns, inquiry.',
    title: 'Kauai area guide — both shores plus west-side towns, inquiry | myCHEF',
    description:
      'Inquiry is not an instant-booking button.',
    lede: 'Kauai area guide: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
    kicker: 'Kauaʻi · Areas',
    photo: 'areasIndexKauai',
    body: [
      `Inquiry stage.`,
      'Dining-in blogs stay the kitchen notes. A named place is not a live roster.',
    ],
    faqs: [
      {
        q: 'Are you live on every town below?',
        a: 'Inquiry. We crew when we can staff. Send the date on the quote form.',
      },
    ],
  },
  bigisland: {
    h1: 'Hawaiʻi Island area guide — west side first, then the rest.',
    title: 'Hawaiʻi Island area guide — west side first, then the rest | myCHEF',
    description:
      'Hilo is a different day.',
    lede: 'Hawaiʻi Island area guide: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
    kicker: 'Hawaiʻi Island · Areas',
    photo: 'areasIndexBigisland',
    body: [
      `West side first.`,
      'Dining-in blogs stay the kitchen notes.',
    ],
    faqs: [
      {
        q: 'Where is Hilo?',
        a: 'Not a Kona add-on.',
      },
    ],
  },
};
