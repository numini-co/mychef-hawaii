import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /help indexes. Distinct from nested /help/:slug articles, from
 * /faq, /how-it-works, and /quote. Titles must not use money keywords.
 */

export interface IslandNestedIndexPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandHelpIndex: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Oahu help — the first ask, then the draft, then the hold.',
    title: 'Oahu help desk — first booking, menu draft, after the quote | myCHEF',
    description:
      'Oahu help desk: first booking, how to read a menu draft, wedding week, house offsite, after the quote.',
    lede: 'Oahu help desk: first booking, how to read a menu draft, wedding week, house offsite, after the quote.',
    kicker: 'Oʻahu · Help',
    photo: 'helpIndexOahu',
    body: [
      'Start below. Getting started names the corridor. The menu guide is how to read the draft. Managing a booking is after the written quote.',
    ],
    faqs: [
    ],
  },
  maui: {
    h1: 'Maui help — shore, kitchen, written quote, then the hold.',
    title: 'Maui help desk — first booking, menu draft, after the quote | myCHEF',
    description:
      'Maui help desk: first booking, menu draft, wedding week, villa offsite, after the quote.',
    lede: 'Maui help desk: first booking, menu draft, wedding week, villa offsite, after the quote.',
    kicker: 'Maui · Help',
    photo: 'helpIndexMaui',
    body: [
      'Start below. Getting started names the shore. The menu guide is how to read the draft. West Maui traffic is planned on the West Maui page, not discovered on the invoice.',
    ],
    faqs: [
    ],
  },
  kauai: {
    h1: 'Kauai help — both-shore inquiry, then the draft.',
    title: 'Kauai help desk — first inquiry, menu draft, after the quote | myCHEF',
    description:
      'Kauai help desk at inquiry: first booking, menu draft, wedding week, estate offsite, after the quote. Not an instant-booking button.',
    lede: 'Kauai help desk at inquiry: first booking, menu draft, wedding week, estate offsite, after the quote. Not an instant-booking button.',
    kicker: 'Kauaʻi · Help',
    photo: 'helpIndexKauai',
    body: [
      `Inquiry stage.`,
      'A named shore is not an instant-booking button. Hanalei-bridge weather is a clause. Send dates on the quote form. We write back when we can staff.',
    ],
    faqs: [
      {
        q: 'Are you live?',
        a: 'Inquiry. These documents explain the ask. They are not a confirmation.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side help — Kona first, then the draft. Hilo not implied.',
    title: 'West-side help desk — first inquiry, menu draft, after the quote | myCHEF',
    description:
      'Hawaiʻi Island west-side help desk at inquiry.',
    lede: 'West-side help desk across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    kicker: 'Hawaiʻi Island · Help',
    photo: 'helpIndexBigisland',
    body: [
      `West side first.`,
      'East side is a dedicated day. Ironman weeks compress the calendar. Send dates on the quote form.',
    ],
    faqs: [
      {
        q: 'Does this cover Hilo?',
        a: 'No. These are west-side first-inquiry documents — Kona to Kohala. Hilo is a dedicated east-side day on the east-side page.',
      },
    ],
  },
};
