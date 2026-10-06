import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { IslandNestedIndexPage } from './islandHelpIndex';

/**
 * Island /staffing indexes. Distinct from nested /staffing/:role pages,
 * from /bar (bartender product) and /mobile-bar (4-hour package).
 * Titles must not use money keywords.
 */

export const islandStaffingIndex: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Oahu add-ons — servers, bartenders, butlers when a bench exists.',
    title: 'Oahu event staffing — servers & bartenders | myCHEF',
    description:
      'Oahu staffing add-ons: servers, bartenders, butlers quoted only when a bench exists. Hourly lines, never buried in the plate.',
    lede: 'Oahu staffing add-ons: servers, bartenders, butlers quoted only when a bench exists. Hourly lines, never buried in the plate.',
    kicker: 'Oʻahu · Staffing',
    photo: 'staffIndexOahu',
    body: [
      'A plated twelve needs more hands than a family-style eight. Butlers stay honesty/quoted — only when a bench exists. Gold Coast dining rooms: Gold Coast.',
    ],
    faqs: [
      {
        q: 'Are butlers always available?',
        a: 'No. We quote only when a Gold Coast bench exists.',
      },
    ],
  },
  maui: {
    h1: 'Maui add-ons — servers, lanai bartenders, butlers when a bench exists.',
    title: 'Maui event staffing — servers & bartenders | myCHEF',
    description:
      'Maui staffing add-ons: servers, lanai bartenders, butlers quoted only when a bench exists. Hourly lines.',
    lede: 'Maui staffing add-ons: servers, lanai bartenders, butlers quoted only when a bench exists. Hourly lines.',
    kicker: 'Maui · Staffing',
    photo: 'staffIndexMaui',
    body: [
      'Saturday West Maui traffic is planned on the West Maui page. Butlers stay honesty/quoted — only when a bench exists.',
    ],
    faqs: [
      {
        q: 'Are butlers always available?',
        a: 'No. We quote only when a Wailea bench exists.',
      },
    ],
  },
  kauai: {
    h1: 'Kauai add-ons — hourly lines, inquiry, no fake roster.',
    title: 'Kauai staffing add-ons — hourly lines at inquiry | myCHEF',
    description:
      'Kauai staffing add-ons at inquiry: servers, bartenders, butlers quoted only when a bench exists. Not a fake roster.',
    lede: 'Kauai staffing add-ons at inquiry: servers, bartenders, butlers quoted only when a bench exists. Not a fake roster.',
    kicker: 'Kauaʻi · Staffing',
    photo: 'staffIndexKauai',
    body: [
      `Inquiry stage.`,
      'A named shore is not a confirmation. Hanalei-bridge weather is a clause. Butlers stay honesty/quoted.',
    ],
    faqs: [
      {
        q: 'Are you live?',
        a: 'Inquiry. Hourly lines exist when we can staff. They are not a fake roster.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side add-ons — hourly lines, inquiry. Hilo not implied.',
    title: 'Big Island event staffing — servers & bartenders | myCHEF',
    description:
      'Hawaiʻi Island west-side staffing add-ons at inquiry.',
    lede: 'Hawaiʻi Island west-side staffing add-ons at inquiry.',
    kicker: 'Hawaiʻi Island · Staffing',
    photo: 'staffIndexBigisland',
    body: [
      `West side first.`,
      'East side is a dedicated day. Ironman weeks compress the calendar. Butlers stay honesty/quoted.',
    ],
    faqs: [
      {
        q: 'Does this cover Hilo?',
        a: 'No. These are west-side hourly add-ons — Kona to Kohala. Hilo is a dedicated east-side day on the east-side page.',
      },
    ],
  },
};
