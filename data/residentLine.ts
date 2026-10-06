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
      'A used fridge. School nights. /kamaaina is the resident frequency line. This URL is the Honolulu household phrasing so /private-chef keeps the visitor dinner.',
    photo: 'svcPersonalOahu',
    body: [
      `Neither belongs in a tourist-dinner title.`,
      'Kamaʻāina weekly service: /kamaaina. Stay Chef weeks for visitors: /vacation-chef.',
    ],
    faqs: [
      {
        q: 'Same as /kamaaina?',
        a: 'That page is the resident frequency product. This page is the Honolulu household phrasing. Visitors open / or /vacation-chef.',
      },
      {
        q: 'Same as /private-chef?',
        a: 'That door is the visitor dinner. This URL is weekly household cooking.',
      },
      {
        q: 'Personal chef to cook in my home?',
        a: 'Related search. Yes, when you live here. Weekly Honolulu household cooking is this URL. “Hire a chef for home” is the same ask. A visitor dinner is /private-chef. Hotel rooms without a cooktop are declined.',
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
    h1: 'Personal chef Maui — weekly, not a Wailea SKU.',
    title: 'Personal chef Maui — weekly household cooking | myCHEF',
    description:
      'Weekly household cooking for Maui residents. Not a visitor dinner.',
    lede:
      'A Kīhei fridge that actually gets used. Not a Wailea one-off dressed up as local. Visitors open / or /vacation-chef.',
    photo: 'svcPersonalMaui',
    body: [
      `This URL is the resident line.`,
      'Stay Chef weeks for visitors: /vacation-chef. South Maui logistics: /south-maui. We do not sell this as yield.',
    ],
    faqs: [
      {
        q: 'I am visiting Wailea for a week.',
        a: 'Open / or /vacation-chef. This page is for Wailea-area residents.',
      },
      {
        q: 'Upcountry household?',
        a: 'Surcharge zone even for dinners. See /coverage. Resident weekly is still quoted, not assumed.',
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
    title: 'Kauai resident household cooking — inquiry, both shores | myCHEF',
    description:
      'Weekly household cooking for Kauai residents. Inquiry stage. Not a visitor dinner.',
    lede:
      'East-side Kapaʻa weeknights, or a South Shore household. Inquiry. Visitors open / or /vacation-chef. We will not fake a live resident roster.',
    photo: 'svcPersonalKauai',
    body: [
      `This URL is the resident line. Inquiry stage.`,
      'Stay Chef for visitors: /vacation-chef. Kapaʻa: /kapaa. Far-North households still inherit /hanalei-bridge.',
    ],
    faqs: [
      {
        q: 'I am visiting Princeville.',
        a: 'Open / or /vacation-chef. This page is residents. Inquiry.',
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
    title: 'Hawaiʻi Island resident household cooking — west side | myCHEF',
    description:
      'Weekly household cooking for Kona-side residents. Inquiry stage. Not a Waikoloa tourist SKU. East side is a different day.',
    lede:
      'A Kona town fridge. Weeknights. Not a resort villa one-off. Visitors open / or /vacation-chef. East side is not implied.',
    photo: 'svcPersonalBigisland',
    body: [
      `This URL is the resident line.`,
      'Stay Chef for visitors: /vacation-chef. West-side: /kohala-corridor. East side: /east-side. Inquiry stage.',
    ],
    faqs: [
      {
        q: 'I am visiting Waikoloa.',
        a: 'Open / or /vacation-chef. This page is for west-side residents.',
      },
      {
        q: 'Hilo household weekly?',
        a: 'Quote-only east side. See /east-side. Not a west-side round trip.',
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
