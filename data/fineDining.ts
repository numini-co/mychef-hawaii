import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog FINE_SLUGS — halo formats, not Michelin claims, not money-keyword doors.
 * Distinct from /honeymoon-dinners, /omakase-at-home, /chefs-table, /events/villa-parties.
 */

export const FINE_DINING_SLUGS = [
  'romantic-dinner',
  'tasting-menu',
  'chefs-table-evening',
  'celebration-dinner',
] as const;
export type FineDiningSlug = (typeof FINE_DINING_SLUGS)[number];

export interface FineDiningPage extends UniqueCell {
  slug: FineDiningSlug;
}

export const fineDiningPages: Record<IslandId, FineDiningPage[]> = {
  oahu: [
    {
      slug: 'romantic-dinner',
      name: 'Romantic dinner',
      h1: 'A romantic dinner in a Kahala dining room — two seats, not a restaurant.',
      title: 'A romantic dinner in a Kahala dining room | myCHEF',
      description:
        'Two-seat romantic dinners in Kahala and Ko Olina houses. Not a restaurant reservation.',
      lede:
        'Brass, two plates, Diamond Head faint.',
      photo: 'fineRomanticOahu',
      body: [
        'We do not claim stars we do not have. Sourcing is written on the menu or it is not claimed.',
      ],
      faqs: [
        {
          q: 'Same as honeymoon dinner?',
          a: 'Same kitchen.',
        },
        {
          q: 'Can it be plated?',
          a: 'Usually.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/kahala', label: 'Kahala' },
      ],
    },
    {
      slug: 'tasting-menu',
      name: 'Tasting menu',
      h1: 'A tasting menu in an Oahu villa — written courses, not a star claim.',
      title: 'A tasting menu in an Oahu villa | myCHEF',
      description:
        'Written tasting arcs in Kahala and Ko Olina kitchens. Not a Michelin claim. Designed per table.',
      lede:
        'Courses on paper, then on the island.',
      photo: 'fineTastingOahu',
      body: [
        'Menus are designed per table. We will not print a fake standing carte.',
      ],
      faqs: [
        {
          q: 'Will you name a fishmonger?',
          a: 'When the invoice can stand behind it. We do not invent farm names.',
        },
      ],
      related: [
        { path: '/omakase-at-home', label: 'Omakase at home' },
        { path: '/menus', label: 'How menus are designed' },
        { path: '/fine-dining/chefs-table-evening', label: "Chef's table evening" },
      ],
    },
    {
      slug: 'chefs-table-evening',
      name: "Chef's table evening",
      h1: 'A chef’s table evening in an Oahu kitchen — the pass is the table.',
      title: 'A chef’s table evening in an Oahu kitchen | myCHEF',
      description:
        'Evening seating at the Kahala or Ko Olina kitchen island. Not a restaurant pass. Not a star claim.',
      lede:
        'Guests at the island. The sear in front of you.',
      photo: 'fineChefsEveOahu',
      body: [
      ],
      faqs: [
        {
          q: 'How many seats at the island?',
          a: 'What the kitchen holds. Usually a small list.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/gold-coast', label: 'Gold Coast' },
      ],
    },
    {
      slug: 'celebration-dinner',
      name: 'Celebration dinner',
      h1: 'A celebration dinner in an Oahu dining room — plated, not a lawn party.',
      title: 'A celebration dinner in an Oahu dining room | myCHEF',
      description:
        'Seated celebration dinners in Kahala dining rooms and Ko Olina villas.',
      lede:
        'Eight plates, brass, a dining room. The villa party is a different booking.',
      photo: 'fineCelebrationOahu',
      body: [
      ],
      faqs: [
        {
          q: 'Can it be a hundred on the lawn?',
          a: 'Not as a promise. Larger than about seventy-five is quoted.',
        },
      ],
      related: [
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/catering/plated', label: 'Plated service' },
        { path: '/events/villa-parties', label: 'Villa parties' },
      ],
    },
  ],
  maui: [
    {
      slug: 'romantic-dinner',
      name: 'Romantic dinner',
      h1: 'A romantic dinner on a Wailea lanai — two plates, Molokini faint.',
      title: 'A romantic dinner on a Wailea lanai | myCHEF',
      description:
        'Two-seat romantic dinners in Wailea and Kapalua. Not a restaurant reservation.',
      lede:
        'Blue hour, two plated fish. The honeymoon page is the published two-top.',
      photo: 'fineRomanticMaui',
      body: [
        'Wet-weather backup is written for lanais that do not hold.',
      ],
      faqs: [
        {
          q: 'Kapalua instead of Wailea?',
          a: 'Yes. Northwest bay houses.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/wailea', label: 'Wailea' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
      ],
    },
    {
      slug: 'tasting-menu',
      name: 'Tasting menu',
      h1: 'A tasting menu in a Maui villa — written courses in Wailea.',
      title: 'A tasting menu in a Maui villa | myCHEF',
      description:
        'Written tasting arcs in Wailea and Kapalua kitchens. Not a Michelin claim. Not a Lotus Chefs impersonation.',
      lede:
        'Courses at the open-kitchen counter.',
      photo: 'fineTastingMaui',
      body: [
        'We do not impersonate another kitchen.',
      ],
      faqs: [
        {
          q: 'Lotus Chefs tasting?',
          a: 'Related search, not us. Lotus Chefs is another kitchen.',
        },
        {
          q: 'Same as omakase?',
          a: 'This is the written arc — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/omakase-at-home', label: 'Omakase at home' },
        { path: '/menus', label: 'How menus are designed' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
      ],
    },
    {
      slug: 'chefs-table-evening',
      name: "Chef's table evening",
      h1: 'A chef’s table evening in a Maui kitchen — the counter is the table.',
      title: 'A chef’s table evening in a Maui kitchen | myCHEF',
      description:
        'Evening seating at a Wailea or Kapalua kitchen counter. Not a restaurant pass. Not a star claim.',
      lede:
        'The sear in front of you. Molokini in the window if the house has it.',
      photo: 'fineChefsEveMaui',
      body: [
      ],
      faqs: [
        {
          q: 'How many at the counter?',
          a: 'What the kitchen holds.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    {
      slug: 'celebration-dinner',
      name: 'Celebration dinner',
      h1: 'A celebration dinner in a Maui dining room — plated, not a lawn party.',
      title: 'A celebration dinner in a Maui dining room | myCHEF',
      description:
        'Seated celebration dinners in Wailea and West Maui houses.',
      lede:
        'A dining room, identical plates, a small list. The lawn party is a different booking.',
      photo: 'fineCelebrationMaui',
      body: [
        'Wet-weather backup is written if you move to a lawn.',
      ],
      faqs: [
        {
          q: 'Lahaina celebration?',
          a: 'West Maui houses with kitchens.',
        },
      ],
      related: [
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/catering/plated', label: 'Plated service' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'romantic-dinner',
      name: 'Romantic dinner',
      h1: 'A romantic dinner on a Kauai estate — two seats, inquiry, both shores.',
      title: 'A romantic dinner on a Kauai estate | myCHEF',
      description:
        'Two-seat romantic dinners in Princeville and Poʻipū. Inquiry stage. Not a restaurant reservation.',
      lede:
        'Wet North stone or South sun. Two plates. Inquiry. Far-North inherits the bridge clause.',
      photo: 'fineRomanticKauai',
      body: [
        'Inquiry list with the shore. We will not fake a live roster.',
      ],
      faqs: [
        {
          q: 'Can I book this month?',
          a: 'Join the inquiry with the shore and the dates.',
        },
        {
          q: 'Hanalei two-top in surf season?',
          a: 'Bridge clause still applies.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
      ],
    },
    {
      slug: 'tasting-menu',
      name: 'Tasting menu',
      h1: 'A tasting menu on a Kauai estate — written courses, inquiry.',
      title: 'A tasting menu on a Kauai estate | myCHEF',
      description:
        'Written tasting arcs in Princeville and Poʻipū. Inquiry stage. Not a restaurant claim.',
      lede:
        'Courses at the estate counter. Inquiry.',
      photo: 'fineTastingKauai',
      body: [
      ],
      faqs: [
        {
          q: 'Same as omakase?',
          a: 'This is the written arc — Princeville kitchen at inquiry.',
        },
        {
          q: 'Can I book a tasting this month?',
          a: 'Inquiry list with the shore.',
        },
      ],
      related: [
        { path: '/omakase-at-home', label: 'Omakase at home' },
        { path: '/menus', label: 'How menus are designed' },
        { path: '/poipu', label: 'Poʻipū' },
      ],
    },
    {
      slug: 'chefs-table-evening',
      name: "Chef's table evening",
      h1: 'A chef’s table evening on Kauai — the estate counter, inquiry.',
      title: 'A chef’s table evening on Kauai | myCHEF',
      description:
        'Evening seating at a Princeville or Poʻipū kitchen counter. Inquiry stage. Not a restaurant pass.',
      lede:
        'The sear, the mist or the pool. Inquiry.',
      photo: 'fineChefsEveKauai',
      body: [
        'Inquiry stage.',
      ],
      faqs: [
        {
          q: 'How many at the counter?',
          a: 'What the kitchen holds. Inquiry.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/north-shore', label: 'North Shore' },
      ],
    },
    {
      slug: 'celebration-dinner',
      name: 'Celebration dinner',
      h1: 'A celebration dinner on a Kauai estate — plated, inquiry, both shores.',
      title: 'A celebration dinner on a Kauai estate | myCHEF',
      description:
        'Seated celebration dinners in Princeville and Poʻipū. Inquiry stage.',
      lede:
        'An estate table, plated fish, a small list. Inquiry. The estate party is a different booking.',
      photo: 'fineCelebrationKauai',
      body: [
        'Inquiry list with the shore.',
      ],
      faqs: [
        {
          q: 'Can I book a date now?',
          a: 'Join the inquiry with the shore and the dates.',
        },
      ],
      related: [
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/events/villa-parties', label: 'Estate parties' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'romantic-dinner',
      name: 'Romantic dinner',
      h1: 'A romantic dinner on a Kohala lava terrace — two seats, west side.',
      title: 'A romantic dinner on a Kohala lava terrace | myCHEF',
      description:
        'Two-seat romantic dinners in Kona and Kohala. Inquiry stage. East side is a different day.',
      lede:
        'Two plates on lava, Mauna Kea faint. Not a Hilo add-on.',
      photo: 'fineRomanticBigisland',
      body: [
        `West-side: Kona–Kohala corridor.`,
        'Inquiry stage. We will not fake a live west-side roster.',
      ],
      faqs: [
        {
          q: 'Hilo two-top?',
          a: 'Quote-only dedicated staffing.',
        },
        {
          q: 'Same as honeymoon?',
          a: 'Hilo is never implied.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
      ],
    },
    {
      slug: 'tasting-menu',
      name: 'Tasting menu',
      h1: 'A tasting menu on west-side Hawaiʻi Island — written courses, Kona.',
      title: 'A tasting menu on west-side Hawaiʻi Island | myCHEF',
      description:
        'Written tasting arcs in Kona and Kohala kitchens. Inquiry stage. East side is a different day. Not a restaurant claim.',
      lede:
        'Kanpachi in courses at the counter. Lava in the window.',
      photo: 'fineTastingBigisland',
      body: [
      ],
      faqs: [
        {
          q: 'Same as omakase?',
          a: 'This is the written arc — Waikoloa kitchen. Hilo is never implied.',
        },
        {
          q: 'Hilo tasting?',
          a: 'Quote-only dedicated day.',
        },
      ],
      related: [
        { path: '/omakase-at-home', label: 'Omakase at home' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/kona', label: 'Kona' },
      ],
    },
    {
      slug: 'chefs-table-evening',
      name: "Chef's table evening",
      h1: 'A chef’s table evening in a Kona kitchen — the counter is the table.',
      title: 'A chef’s table evening in a Kona kitchen | myCHEF',
      description:
        'Evening seating at a Kona or Kohala kitchen counter. Inquiry stage. East side is a different day. Not a restaurant pass.',
      lede:
        'The sear, hard sun cooling. Not Hilo.',
      photo: 'fineChefsEveBigisland',
      body: [
        'West-side first.',
      ],
      faqs: [
        {
          q: 'Hilo counter?',
          a: 'Quote-only east side.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
      ],
    },
    {
      slug: 'celebration-dinner',
      name: 'Celebration dinner',
      h1: 'A celebration dinner on the Kohala Coast — plated, west side.',
      title: 'A celebration dinner on the Kohala Coast | myCHEF',
      description:
        'Seated celebration dinners in Kona and Kohala houses. Inquiry stage. East side is a different day.',
      lede:
        'Eight plates on lava, Mauna Kea faint. The villa party is a different booking. Not a Hilo add-on.',
      photo: 'fineCelebrationBigisland',
      body: [
        'West-side: Kona–Kohala corridor.',
      ],
      faqs: [
        {
          q: 'Hilo celebration?',
          a: 'Quote-only dedicated staffing.',
        },
        {
          q: 'Birthday instead?',
          a: 'Hilo is never implied.',
        },
      ],
      related: [
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/events/villa-parties', label: 'Villa parties' },
      ],
    },
  ],
};

export function getFineDiningPage(island: IslandId, slug: string): FineDiningPage | undefined {
  return fineDiningPages[island].find((row) => row.slug === slug);
}
