import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog STAFF_SLUGS — quoted add-ons, never buried in a menu price.
 * Distinct from /bar (bartender add-on product) and /mobile-bar (4-hour package).
 */

export const STAFFING_SLUGS = ['servers', 'bartenders', 'butlers'] as const;
export type StaffingSlug = (typeof STAFFING_SLUGS)[number];

export interface StaffingPage extends UniqueCell {
  slug: StaffingSlug;
}

export const staffingPages: Record<IslandId, StaffingPage[]> = {
  oahu: [
    {
      slug: 'servers',
      name: 'Servers',
      h1: 'Servers on Oahu — quoted hourly, never buried in the plate.',
      title: 'Servers on Oahu — quoted hourly | myCHEF',
      description:
        'Server add-ons for Kahala dining rooms and Ko Olina villas. Hourly, itemised. Not folded into the food band. Guest counts decide the crew.',
      lede:
        'A plated twelve needs more hands than a family-style eight. We write the hours. We do not hide them in the catch.',
      photo: 'staffServersOahu',
      body: [
        'Gold Coast dining rooms: Gold Coast. The food band does not change because a server is on the quote.',
      ],
      faqs: [
        {
          q: 'How many servers for twelve plated?',
          a: 'More than a buffet for the same headcount. We write it on the quote.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Starting prices' },
        { path: '/staffing/bartenders', label: 'Bartenders' },
        { path: '/guest-counts', label: 'Guest counts' },
      ],
    },
    {
      slug: 'bartenders',
      name: 'Bartenders',
      h1: 'Bartenders on Oahu — an hourly line, not the 4-hour package.',
      title: 'Bartenders on Oahu — an hourly line | myCHEF',
      description:
        'Bartender add-ons for Oahu houses. Hourly, itemised. No theatrical tiki service.',
      lede:
        'Citrus, glassware, the lanai.',
      photo: 'staffBartendersOahu',
      body: [
        'The bartender add-on product is on the villa bar page.',
        'We do not sell a theatrical luau bar. Ko Olina and Kahala houses.',
      ],
      faqs: [
        {
          q: 'Tiki drinks?',
          a: 'We mix what the house wants. We do not staff a theatrical tiki bar we do not run.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/mobile-bar', label: '4-hour package' },
        { path: '/staffing/servers', label: 'Servers' },
      ],
    },
    {
      slug: 'butlers',
      name: 'Butlers',
      h1: 'Butlers on Oahu — quoted only when a bench exists.',
      title: 'Butlers on Oahu — quoted only when a bench exists | myCHEF',
      description:
        'Butler add-ons for Oahu houses. Quoted as a line, never assumed. We will not sell a butler we cannot staff.',
      lede:
        'Water poured, the table set, the pass left to the chef.',
      photo: 'staffButlersOahu',
      body: [
        'Gold Coast houses with real dining rooms are the usual rooms.',
      ],
      faqs: [
        {
          q: 'Do you always send a butler?',
          a: 'No. It is a quoted add-on. If the bench is empty we say so.',
        },
        {
          q: 'Is this a hotel butler?',
          a: 'No. Residences and villas. We do not impersonate a hotel department.',
        },
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/gold-coast', label: 'Gold Coast' },
      ],
    },
  ],
  maui: [
    {
      slug: 'servers',
      name: 'Servers',
      h1: 'Servers on Maui — quoted hourly for Wailea and West Maui houses.',
      title: 'Servers on Maui — quoted hourly | myCHEF',
      description:
        'Server add-ons for Wailea, Kapalua and Kīhei. Hourly, itemised. Not folded into the food band. Lawn service is a different count than a dining room.',
      lede:
        'A plated lawn needs more hands than family-style on the lanai. We write the hours. Saturday West Maui traffic is planned into arrival, not into a hidden fee.',
      photo: 'staffServersMaui',
      body: [
      ],
      faqs: [
        {
          q: 'Servers on a wet Wailea lawn?',
          a: 'Backup is written. We still quote the hours.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Starting prices' },
        { path: '/west-maui', label: 'West Maui' },
        { path: '/staffing/bartenders', label: 'Bartenders' },
      ],
    },
    {
      slug: 'bartenders',
      name: 'Bartenders',
      h1: 'Bartenders on Maui — hourly on the lanai, not the 4-hour package.',
      title: 'Bartenders on Maui — hourly on the lanai | myCHEF',
      description:
        'Bartender add-ons for Wailea and West Maui. Hourly, itemised. No theatrical tiki service.',
      lede:
        'Citrus, the Pacific, the lanai.',
      photo: 'staffBartendersMaui',
      body: [
        'We do not staff a luau bar we do not run.',
      ],
      faqs: [
        {
          q: 'West Maui Saturday bartender?',
          a: 'Arrival is planned.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/mobile-bar', label: '4-hour package' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    {
      slug: 'butlers',
      name: 'Butlers',
      h1: 'Butlers on Maui — quoted only when a bench exists.',
      title: 'Butlers on Maui — quoted only when a bench exists | myCHEF',
      description:
        'Butler add-ons for Maui houses. Quoted as a line, never assumed. We will not sell a butler we cannot staff in Wailea or West Maui.',
      lede:
        'The table set, water poured, the chef left at the pass.',
      photo: 'staffButlersMaui',
      body: [
        'We do not impersonate a resort butler department.',
      ],
      faqs: [
        {
          q: 'Always a butler on a Wailea night?',
          a: 'No. Quoted add-on. Empty Wailea bench means we say so.',
        },
        {
          q: 'Hotel butler?',
          a: 'No. Residences and villas.',
        },
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'servers',
      name: 'Servers',
      h1: 'Servers on Kauai — quoted hourly, inquiry, both shores.',
      title: 'Servers on Kauai — quoted hourly, inquiry | myCHEF',
      description:
        'Server add-ons for Princeville and Poʻipū. Inquiry stage. Hourly, itemised. Far-North inherits the bridge clause.',
      lede:
        'An estate table needs hands. Inquiry. We write the hours when the crew exists. We will not fake a roster.',
      photo: 'staffServersKauai',
      body: [
      ],
      faqs: [
        {
          q: 'Can I book servers this month?',
          a: 'Inquiry list with the shore. We will not fake instant confirm.',
        },
        {
          q: 'Hanalei in surf season?',
          a: 'Bridge clause still applies.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Starting prices' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/staffing/bartenders', label: 'Bartenders' },
      ],
    },
    {
      slug: 'bartenders',
      name: 'Bartenders',
      h1: 'Bartenders on Kauai — hourly, inquiry, not the 4-hour package.',
      title: 'Bartenders on Kauai — hourly, inquiry | myCHEF',
      description:
        'Bartender add-ons for Kauai estates. Inquiry stage. No theatrical tiki service.',
      lede:
        'Citrus on a wet terrace or a South Shore counter. Inquiry.',
      photo: 'staffBartendersKauai',
      body: [
        'Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Tiki bar on the North?',
          a: 'We do not staff a theatrical tiki bar.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/mobile-bar', label: '4-hour package' },
        { path: '/north-shore', label: 'North Shore' },
      ],
    },
    {
      slug: 'butlers',
      name: 'Butlers',
      h1: 'Butlers on Kauai — quoted only when a bench exists, inquiry.',
      title: 'Butlers on Kauai — quoted only when a bench exists | myCHEF',
      description:
        'Butler add-ons for Kauai estates. Inquiry stage. Quoted as a line. We will not sell a butler we cannot staff.',
      lede:
        'An empty Princeville table being set. Inquiry.',
      photo: 'staffButlersKauai',
      body: [
        'Inquiry stage. We do not impersonate a resort butler department.',
        'Both shores.',
      ],
      faqs: [
        {
          q: 'Always a butler?',
          a: 'No. Quoted add-on. Empty Princeville bench means we say so. Inquiry.',
        },
        {
          q: 'Can I book a butler now?',
          a: 'Inquiry. We will not fake a live roster.',
        },
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/south-shore', label: 'South Shore' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'servers',
      name: 'Servers',
      h1: 'Servers on the Kohala Coast — quoted hourly, west side, inquiry.',
      title: 'Servers on the Kohala Coast — quoted hourly | myCHEF',
      description:
        'Server add-ons for Kona and Kohala houses. Inquiry stage. Hourly, itemised. East side is a different day.',
      lede:
        'Lava, plated kanpachi, extra hands. Inquiry. We write the hours. We will not send a west-side crew to Hilo as an errand.',
      photo: 'staffServersBigisland',
      body: [
        'West-side: Kona–Kohala corridor.',
      ],
      faqs: [
        {
          q: 'Hilo servers from Kona?',
          a: 'No. East side is dedicated staffing.',
        },
        {
          q: 'Ironman week?',
          a: 'Flag dates. Town compresses.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Starting prices' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/staffing/bartenders', label: 'Bartenders' },
      ],
    },
    {
      slug: 'bartenders',
      name: 'Bartenders',
      h1: 'Bartenders on the Kohala Coast — hourly, west side, inquiry.',
      title: 'Bartenders on the Kohala Coast — hourly, inquiry | myCHEF',
      description:
        'Bartender add-ons for Kona and Kohala. Inquiry stage. East side is a different day. No theatrical tiki service.',
      lede:
        'Citrus on lava, hard sun. Not Hilo.',
      photo: 'staffBartendersBigisland',
      body: [
        'Inquiry stage. West-side first.',
        'We do not staff a theatrical tiki bar.',
      ],
      faqs: [
        {
          q: 'Hilo bartender?',
          a: 'Quote-only dedicated staffing.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/mobile-bar', label: '4-hour package' },
        { path: '/kohala-corridor', label: 'West-side radius' },
      ],
    },
    {
      slug: 'butlers',
      name: 'Butlers',
      h1: 'Butlers on Hawaiʻi Island — quoted only when a bench exists.',
      title: 'Butlers on the Big Island — quoted on request | myCHEF',
      description:
        'Butler add-ons for Kona and Kohala houses. Inquiry stage. Quoted as a line. East side is a different day. We will not sell a butler we cannot staff.',
      lede:
        'A lava terrace table being set. Not a resort butler department.',
      photo: 'staffButlersBigisland',
      body: [
        'West-side first.',
        'Inquiry stage. We do not impersonate a hotel butler line.',
      ],
      faqs: [
        {
          q: 'Always a butler in Waikoloa?',
          a: 'No. Quoted add-on. Empty Waikoloa bench means we say so.',
        },
        {
          q: 'Hilo butler?',
          a: 'Quote-only east side even for dinners.',
        },
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/east-side', label: 'East side' },
      ],
    },
  ],
};

export function getStaffingPage(island: IslandId, slug: string): StaffingPage | undefined {
  return staffingPages[island].find((row) => row.slug === slug);
}
