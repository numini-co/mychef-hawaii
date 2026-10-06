import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog /personal-chef — resident household line, not the tourist dinner door.
 * Must not steal /private-chef titles or “private chef {island}” money keywords.
 * Oʻahu already has /kamaaina; this page is the Honolulu household phrasing beside it.
 */

export const residentLine: Record<IslandId, UniqueCell> = {
  oahu: {
    slug: 'personal-chef',
    name: 'Personal chef',
    h1: 'Personal chef Honolulu — school nights, not a villa one-off.',
    title: 'Personal chef Honolulu — school-night households | myCHEF',
    description:
      'Weekly household cooking for Honolulu and Kailua residents.',
    lede:
      'A used fridge. School nights.',
    photo: 'svcPersonalOahu',
    body: [
      `Neither belongs in a tourist-dinner title.`,
    ],
    faqs: [
      {
        q: 'Personal chef to cook in my home?',
        a: 'Related search. Yes, when you live here. “Hire a chef for home” is the same ask. Hotel rooms without a cooktop are declined.',
      },
    ],
    related: [
      { path: '/kamaaina', label: 'Kamaʻāina line' },
      { path: '/vacation-chef', label: 'Vacation chef' },
      { path: '/private-chef', label: 'Visitor dinner' },
    ],
  },
  maui: {
    slug: 'personal-chef',
    name: 'Personal chef',
    h1: 'Personal chef Maui — weekly, not a Wailea.',
    title: 'Personal chef Maui — weekly household cooking | myCHEF',
    description:
      'Weekly household cooking for Maui residents. Not a visitor dinner.',
    lede:
      'A Kīhei fridge that actually gets used. Not a Wailea one-off dressed up as local.',
    photo: 'svcPersonalMaui',
    body: [
      'We do not sell this as yield.',
    ],
    faqs: [
      {
        q: 'Upcountry household?',
        a: 'Surcharge zone even for dinners. Resident weekly is still quoted, not assumed.',
      },
    ],
    related: [
      { path: '/vacation-chef', label: 'Vacation chef' },
      { path: '/south-maui', label: 'South Maui' },
      { path: '/private-chef', label: 'Visitor dinner' },
    ],
  },
  kauai: {
    slug: 'personal-chef',
    name: 'Personal chef',
    h1: 'Kauai resident household cooking — inquiry, both shores.',
    title: 'Personal chef Kauai — households on both shores | myCHEF',
    description:
      'Weekly household cooking for Kauai residents. Inquiry stage. Not a visitor dinner.',
    lede:
      'East-side Kapaʻa weeknights, or a South Shore household. Inquiry. We will not fake a live resident roster.',
    photo: 'svcPersonalKauai',
    body: [
      `Inquiry stage.`,
      'Far-North households still inherit the Hanalei bridge notes.',
    ],
    faqs: [
      {
        q: 'I am visiting Princeville.',
        a: 'Inquiry.',
      },
      {
        q: 'Can I start weekly service this month?',
        a: 'Join the inquiry. We will not fake a live roster.',
      },
    ],
    related: [
      { path: '/vacation-chef', label: 'Vacation chef' },
      { path: '/kapaa', label: 'Kapaʻa' },
      { path: '/private-chef', label: 'Visitor dinner' },
    ],
  },
  bigisland: {
    slug: 'personal-chef',
    name: 'Personal chef',
    h1: 'Hawaiʻi Island resident household cooking — west side, inquiry.',
    title: 'Personal chef Big Island — west-side households | myCHEF',
    description:
      'Weekly household cooking for Kona-side residents. Inquiry stage. East side is a different day.',
    lede:
      'A Kona town fridge. Weeknights. Not a resort villa one-off. East side is not implied.',
    photo: 'svcPersonalBigisland',
    body: [
      'West-side: Kona–Kohala corridor. Inquiry stage.',
    ],
    faqs: [
      {
        q: 'Hilo household weekly?',
        a: 'Quote-only east side. Not a west-side round trip.',
      },
    ],
    related: [
      { path: '/vacation-chef', label: 'Vacation chef' },
      { path: '/kohala-corridor', label: 'West-side radius' },
      { path: '/east-side', label: 'East side' },
    ],
  },
};

export const residentLineList: Record<IslandId, UniqueCell[]> = {
  oahu: [residentLine.oahu],
  maui: [residentLine.maui],
  kauai: [residentLine.kauai],
  bigisland: [residentLine.bigisland],
};
