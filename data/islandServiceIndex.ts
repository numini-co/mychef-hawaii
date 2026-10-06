import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /services indexes. Distinct from hub /services, from money doors
 * (/, /catering, /private-chef), and from /sitemap. Titles must not use
 * money keywords.
 */

export interface IslandServiceIndexPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_INDEX_LINKS: { path: string; label: string }[] = [
  { path: '/private-chef', label: 'What’s included' },
  { path: '/vacation-chef', label: 'Stay Chef week' },
  { path: '/personal-chef', label: 'Household line' },
  { path: '/catering', label: 'Staffed catering' },
  { path: '/weddings', label: 'Wedding week' },
  { path: '/events', label: 'Occasions' },
  { path: '/bar', label: 'Bartender add-on' },
  { path: '/mobile-bar', label: 'The packaged cart' },
  { path: '/fine-dining', label: 'In-villa formats' },
  { path: '/staffing', label: 'Staffing add-ons' },
  { path: '/help', label: 'Help desk' },
  { path: '/corporate', label: 'Villa offsites' },
  { path: '/gatherings', label: 'House gatherings' },
  { path: '/pricing', label: 'What a night costs' },
  { path: '/quote', label: 'Quote / inquiry form' },
];

export const islandServiceIndex: Record<IslandId, IslandServiceIndexPage> = {
  oahu: {
    h1: 'Oahu services — villa dinners, Stay Chef weeks, staffed rooms.',
    title: 'Oahu chef services — dinners & weeks | myCHEF',
    description:
      'Oahu service list: villa dinners, Stay Chef weeks, staffed catering, bar.',
    lede: 'Oahu service list: villa dinners, Stay Chef weeks, staffed catering, bar.',
    kicker: 'Oʻahu · Services',
    photo: 'svcIndexOahu',
    body: [
      'Each name below is a live URL on this site. Hotel suites without a cooktop are still declined.',
    ],
    faqs: [
    ],
  },
  maui: {
    h1: 'Maui services — Wailea dinners, villa weeks, staffed rooms.',
    title: 'Maui chef services — villa dinners & weeks | myCHEF',
    description:
      'Maui service list: villa dinners, Stay Chef weeks, staffed catering, bar.',
    lede: 'Maui service list: villa dinners, Stay Chef weeks, staffed catering, bar.',
    kicker: 'Maui · Services',
    photo: 'svcIndexMaui',
    body: [
      'Each name below is a live URL on this site. Saturday West Maui traffic is planned on the West Maui page.',
    ],
    faqs: [
    ],
  },
  kauai: {
    h1: 'Kauai services — both-shore inquiry dinners and staffed rooms.',
    title: 'Kauai chef services — dinners & weeks | myCHEF',
    description:
      'Kauai service list at inquiry: dinners, weeks, staffed rooms, bar. Not an instant-booking button.',
    lede: 'Kauai service list at inquiry: dinners, weeks, staffed rooms, bar. Not an instant-booking button.',
    kicker: 'Kauaʻi · Services',
    photo: 'svcIndexKauai',
    body: [
      `Inquiry stage.`,
      'Each name below is a live URL at inquiry. A named shore is not an instant-booking button. Hanalei-bridge weather is a clause.',
    ],
    faqs: [
      {
        q: 'Are you live?',
        a: 'Inquiry. Send the dates on the quote form. We write back when we can staff.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side services — inquiry dinners, weeks, staffed rooms. Hilo not implied.',
    title: 'Big Island chef services — Kona & Kohala | myCHEF',
    description:
      'Hawaiʻi Island west-side service list at inquiry.',
    lede: 'West-side service list across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    kicker: 'Hawaiʻi Island · Services',
    photo: 'svcIndexBigisland',
    body: [
      `West side first.`,
      'Each name below is a live URL at inquiry. East side is a dedicated day. Ironman weeks compress the calendar.',
    ],
    faqs: [
      {
        q: 'Does this list cover Hilo?',
        a: 'No. These are west-side service names — Kona to Kohala. Hilo is a dedicated east-side day on the east-side page.',
      },
    ],
  },
};
