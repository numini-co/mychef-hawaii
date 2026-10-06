import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { IslandNestedIndexPage } from './islandHelpIndex';

/**
 * Island /gatherings indexes. Distinct from hub /gatherings, from /events,
 * /blog/family-reunions, /events/birthdays, and /rehearsal-dinners.
 * Titles must not use money keywords.
 */

export const GATHERINGS_INDEX_LINKS: { path: string; label: string }[] = [
  { path: '/events', label: 'Occasions' },
  { path: '/events/birthdays', label: 'Birthdays' },
  { path: '/blog/family-reunions', label: 'Family reunions' },
  { path: '/rehearsal-dinners', label: 'Rehearsal dinners' },
  { path: '/events/brunch', label: 'Day-after brunch' },
  { path: '/guest-counts', label: 'Guest counts we staff' },
  { path: '/quote', label: 'Quote / inquiry form' },
];

export const islandGatherings: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Oahu gatherings — the house, not a Gold Coast ballroom.',
    title: 'Oahu house gatherings — birthdays & reunions | myCHEF',
    description:
      'Oahu house gatherings: birthdays and reunions in the room.',
    lede: 'Oahu house gatherings: birthdays and reunions in the room.',
    kicker: 'Oʻahu · Gatherings',
    photo: 'gatherIndexOahu',
    body: [
      `Wedding-week formats are on the weddings page.`,
      'Birthdays, reunions, and rehearsal dinners sit in residences we can actually cook in. Guest counts we staff: dinners 2–15, receptions about 10–75.',
    ],
    faqs: [
    ],
  },
  maui: {
    h1: 'Maui gatherings — the villa, not a Wailea banquet.',
    title: 'Maui house gatherings — birthdays & reunions | myCHEF',
    description:
      'Maui house gatherings: birthdays and reunions in the villa.',
    lede: 'Maui house gatherings: birthdays and reunions in the villa.',
    kicker: 'Maui · Gatherings',
    photo: 'gatherIndexMaui',
    body: [
      `Wedding-week formats are on the weddings page and the wedding week page.`,
      'Birthdays, reunions, and rehearsal dinners sit in South Maui and West Maui houses. Guest counts we staff are on the guest-count guide.',
    ],
    faqs: [
    ],
  },
  kauai: {
    h1: 'Kauai gatherings — the estate at inquiry, not a ballroom.',
    title: 'Kauai house gatherings — estate parties | myCHEF',
    description:
      'Kauai house gatherings at inquiry. Not an instant-booking button.',
    lede: 'Kauai house gatherings at inquiry. Not an instant-booking button.',
    kicker: 'Kauaʻi · Gatherings',
    photo: 'gatherIndexKauai',
    body: [
      `Wedding-week formats are on the weddings page and the wedding week page. Inquiry stage.`,
      'A named shore is not a confirmation. Guest counts we staff are on the guest-count guide.',
    ],
    faqs: [
      {
        q: 'Are you live?',
        a: 'Inquiry. House gatherings exist when we can staff. Send the dates on the quote form.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side gatherings — the house at inquiry. Hilo not implied.',
    title: 'Big Island house gatherings — Kona & Kohala | myCHEF',
    description:
      'Hawaiʻi Island west-side house gatherings at inquiry.',
    lede: 'Hawaiʻi Island west-side house gatherings at inquiry.',
    kicker: 'Hawaiʻi Island · Gatherings',
    photo: 'gatherIndexBigisland',
    body: [
      `West side first. East side is a dedicated day.`,
      'Birthdays and reunions sit in west-side houses we can actually staff. Ironman weeks compress the calendar.',
    ],
    faqs: [
      {
        q: 'Does this cover Hilo?',
        a: 'No. These are west-side house gatherings — Kona to Kohala. Hilo is a dedicated east-side day on the east-side page.',
      },
    ],
  },
};
