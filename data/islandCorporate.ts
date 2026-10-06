import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { IslandNestedIndexPage } from './islandHelpIndex';

/**
 * Island /corporate indexes. Distinct from hub /corporate, from
 * /corporate-catering (SKU), /events/corporate-events (occasion),
 * /help/corporate-guide, and /conventions. Titles must not use money keywords.
 */

export const CORPORATE_INDEX_LINKS: { path: string; label: string }[] = [
  { path: '/corporate-catering', label: 'Executive dinners' },
  { path: '/events/corporate-events', label: 'House offsites' },
  { path: '/help/corporate-guide', label: 'How to brief an offsite' },
  { path: '/retreat-catering', label: 'Full-board retreat food' },
  { path: '/events/retreats', label: 'Retreat occasion' },
  { path: '/quote', label: 'Quote / inquiry form' },
];

export const islandCorporate: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Oahu offsites — Kahala dining rooms, not the convention centre.',
    title: 'Oahu villa offsites — houses, not HCC citywides | myCHEF',
    description:
      'Oahu villa offsites: houses, not HCC citywides.',
    lede: 'Oahu villa offsites: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
    kicker: 'Oʻahu · Offsites',
    photo: 'corpIndexOahu',
    body: [
      `HCC citywides are closed through 2027.`,
      'Board dinners and house offsites sit in residences we can actually cook in. We do not staff a ballroom because a conference is in town.',
    ],
    faqs: [
    ],
  },
  maui: {
    h1: 'Maui offsites — Wailea houses, not a banquet floor.',
    title: 'Maui villa offsites — houses, not hotel ballrooms | myCHEF',
    description:
      'Maui villa offsites: houses, not hotel ballrooms.',
    lede: 'Maui villa offsites: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
    kicker: 'Maui · Offsites',
    photo: 'corpIndexMaui',
    body: [
      `Saturday West Maui traffic is planned on the West Maui page.`,
      'Villa offsites and crew meals sit in residences. We do not staff a resort banquet room because the group is already on property.',
    ],
    faqs: [
    ],
  },
  kauai: {
    h1: 'Kauai offsites — estate tables at inquiry, not a convention product.',
    title: 'Kauai estate offsites — inquiry, not a MICE island | myCHEF',
    description:
      'Kauai estate offsites at inquiry. Not an instant-booking button.',
    lede: 'Kauai estate offsites at inquiry. Not an instant-booking button.',
    kicker: 'Kauaʻi · Offsites',
    photo: 'corpIndexKauai',
    body: [
      `Inquiry stage. Kauaʻi is not a MICE island.`,
      'A named shore is not a confirmation. Send dates on the quote form.',
    ],
    faqs: [
      {
        q: 'Are you live?',
        a: 'Inquiry. These documents explain the ask. They are not an instant-booking button.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side offsites — Kona houses at inquiry. Hilo not implied.',
    title: 'West-side villa offsites — inquiry, not citywides | myCHEF',
    description:
      'Hawaiʻi Island west-side villa offsites at inquiry.',
    lede: 'Hawaiʻi Island west-side villa offsites at inquiry.',
    kicker: 'Hawaiʻi Island · Offsites',
    photo: 'corpIndexBigisland',
    body: [
      `West side first.`,
      'East side is a dedicated day. Ironman weeks compress lodging, not a fake kitchen promise.',
    ],
    faqs: [
      {
        q: 'Does this cover Hilo?',
        a: 'No. These are west-side villa offsites — Kona to Kohala. Hilo is a dedicated east-side day on the east-side page.',
      },
    ],
  },
};
