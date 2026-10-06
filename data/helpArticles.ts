import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog HELP_SLUGS — first-booking documents, not money-keyword doors.
 * Distinct from /faq, /how-it-works, /weddings, /corporate-catering,
 * /events/corporate-events, and /quote.
 */

export const HELP_SLUGS = [
  'getting-started',
  'menu-guide',
  'wedding-guide',
  'corporate-guide',
  'managing-booking',
] as const;
export type HelpSlug = (typeof HELP_SLUGS)[number];

export interface HelpArticle extends UniqueCell {
  slug: HelpSlug;
}

export const helpArticles: Record<IslandId, HelpArticle[]> = {
  oahu: [
    {
      slug: 'getting-started',
      name: 'Getting started',
      h1: 'First Oahu booking — name the corridor, then the kitchen.',
      title: 'First Oahu booking — corridor, kitchen, written quote | myCHEF',
      description:
        'How a first Oahu booking starts: Honolulu, Waikīkī, Kailua, North Shore, Kahala, or Ko Olina; a working kitchen; a written quote.',
      lede: 'How a first Oahu booking starts: Honolulu, Waikīkī, Kailua, North Shore, Kahala, or Ko Olina; a working kitchen; a written quote.',
      photo: 'helpStartOahu',
      body: [
        'Live corridors on this site: Honolulu, Waikīkī, Kailua / Lanikai, North Shore, Kahala / Gold Coast, Ko Olina. We do not invent a statewide Oahu kitchen.',
        'Send dates, headcount, dietary, and the address type on the quote form. Hotel suites without a cooktop are declined. Residences and villas are the product.',
      ],
      faqs: [
        {
          q: 'I am in Waikīkī.',
          a: 'High-rise suites without a stove are not a kitchen.',
        },
      ],
      related: [
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote' },
      ],
    },
    {
      slug: 'menu-guide',
      name: 'Menu guide',
      h1: 'How to read an Oahu menu draft — Honolulu fish, 48 hours.',
      title: 'How to read an Oahu menu draft | myCHEF',
      description:
        'How an Oahu menu draft arrives: 48 hours, Honolulu fish market, designed per table.',
      lede: 'How an Oahu menu draft arrives: 48 hours, Honolulu fish market, designed per table.',
      photo: 'helpMenuOahu',
      body: [
        'The sample on the menus page is an example, not a standing carte. We do not print farm names we have not verified.',
        'Kahala dining rooms and Ko Olina villas are the usual rooms. Gold Coast houses: Gold Coast. The draft names the catch and the fire, not a theatrical luau.',
      ],
      faqs: [
        {
          q: 'When does the draft arrive?',
          a: 'About 48 hours after a complete quote request. Then we refine in writing.',
        },
        {
          q: 'Can I pick from a printed carte?',
          a: 'No. Every table is designed.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/menus/three-course', label: 'Three-course' },
        { path: '/dietary', label: 'Dietary' },
      ],
    },
    {
      slug: 'wedding-guide',
      name: 'Wedding guide',
      h1: 'Planning an Oahu wedding week — welcome through brunch as lines.',
      title: 'Planning an Oahu wedding week | myCHEF',
      description:
        'Planner checklist for an Oahu wedding week: welcome, rehearsal, reception, recovery brunch as separate lines.',
      lede: 'Planner checklist for an Oahu wedding week: welcome, rehearsal, reception, recovery brunch as separate lines.',
      photo: 'helpWeddingOahu',
      body: [
        'Kahala dining rooms and Ko Olina villas. We do not staff HCC citywides.',
      ],
      faqs: [
        {
          q: 'Can you do the lawn and the dinner for two?',
          a: 'Different lines.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding week' },
        { path: '/rehearsal-dinners', label: 'Rehearsal' },
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
      ],
    },
    {
      slug: 'corporate-guide',
      name: 'Corporate guide',
      h1: 'Planning an Oahu house offsite — not a convention floor.',
      title: 'Planning an Oahu house offsite | myCHEF',
      description:
        'How to brief an Oahu executive dinner or house offsite. Not HCC citywides.',
      lede: 'How to brief an Oahu executive dinner or house offsite. Not HCC citywides.',
      photo: 'helpCorporateOahu',
      body: [
        'HCC citywides are closed through 2027 and are not our product.',
        'Kahala and Ko Olina houses. Larger than about seventy-five is quoted or declined.',
      ],
      faqs: [
        {
          q: 'Can you cater a citywide?',
          a: 'No. Residences and villas only.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/events/corporate-events', label: 'House offsites' },
        { path: '/conventions', label: 'Not MICE' },
      ],
    },
    {
      slug: 'managing-booking',
      name: 'Managing a booking',
      h1: 'After the Oahu quote — deposit, date lock, changes in writing.',
      title: 'After the Oahu quote — deposit and date lock | myCHEF',
      description:
        'How an Oahu booking is held: 50% deposit, written changes, GET and service as their own lines.',
      lede: 'How an Oahu booking is held: 50% deposit, written changes, GET and service as their own lines.',
      photo: 'helpBookingOahu',
      body: [
        'Fifty percent locks the date. Service 20% and GET up to 4.712% print as their own lines. Gratuity is voluntary.',
        'Headcount and dietary changes go in writing. Gold Coast houses: Gold Coast. Short-stay villas: Short-stay villas. We do not hold a date on a verbal yes.',
      ],
      faqs: [
        {
          q: 'Can I change the guest count the day of?',
          a: 'Write us as soon as you know. The quote is the contract, not the chat.',
        },
        {
          q: 'Where is the fee stack?',
          a: 'The tariff itself is the pricing page — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/quote', label: 'Quote form' },
        { path: '/private-chef-cost', label: 'Fee stack' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
  ],
  maui: [
    {
      slug: 'getting-started',
      name: 'Getting started',
      h1: 'First Maui booking — name the shore, then the kitchen.',
      title: 'First Maui booking — shore, kitchen, written quote | myCHEF',
      description:
        'How a first Maui booking starts: Wailea, Kāʻanapali, Lahaina, Kīhei, Kapalua, or Makena; a working kitchen; Saturday West Maui traffic planned in.',
      lede: 'How a first Maui booking starts: Wailea, Kāʻanapali, Lahaina, Kīhei, Kapalua, or Makena; a working kitchen; Saturday West Maui traffic planned in.',
      photo: 'helpStartMaui',
      body: [
        'We cook in Wailea, Kāʻanapali, Lahaina and West Maui, Kīhei, Kapalua and Makena.',
        'Lahaina is a named town on this site — not a find-and-replace of Wailea. Send the address type on the quote form.',
      ],
      faqs: [
        {
          q: 'Saturday in Kāʻanapali.',
          a: 'We plan the drive. It is not a hidden fee.',
        },
      ],
      related: [
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/west-maui', label: 'West Maui' },
        { path: '/quote', label: 'Quote' },
      ],
    },
    {
      slug: 'menu-guide',
      name: 'Menu guide',
      h1: 'How to read a Maui menu draft — Wailea kitchens, 48 hours.',
      title: 'How to read a Maui menu draft | myCHEF',
      description:
        'How a Maui menu draft arrives: 48 hours, Wailea and Kapalua kitchens, designed per table.',
      lede: 'How a Maui menu draft arrives: 48 hours, Wailea and Kapalua kitchens, designed per table.',
      photo: 'helpMenuMaui',
      body: [
        'The sample on the menus page is an example. We do not print a fake luau menu. Upcountry is a surcharge zone even when the draft looks simple.',
        'Wailea and Kapalua are the usual rooms. Kīhei houses: Kīhei.',
      ],
      faqs: [
        {
          q: 'When does the draft arrive?',
          a: 'About 48 hours after a complete quote request. Saturday West Maui nights still need the same window.',
        },
        {
          q: 'Can we run a printed steak-and-fish carte?',
          a: 'No. Every table is designed.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/menus/three-course', label: 'Three-course' },
        { path: '/dietary', label: 'Dietary' },
      ],
    },
    {
      slug: 'wedding-guide',
      name: 'Wedding guide',
      h1: 'Planning a Maui wedding week — Wailea lawns and West Maui houses.',
      title: 'Planning a Maui wedding week | myCHEF',
      description:
        'Planner checklist for a Maui wedding week: welcome, rehearsal, reception, recovery brunch as separate lines.',
      lede:
        'West Maui Saturday traffic is a logistics line, not a surprise.',
      photo: 'helpWeddingMaui',
      body: [
        'We do not sell a theatrical luau reception we do not run.',
      ],
      faqs: [
        {
          q: 'West Maui Saturday ceremony?',
          a: 'We plan arrival. Staffing hours still print as their own lines.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding week' },
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
    {
      slug: 'corporate-guide',
      name: 'Corporate guide',
      h1: 'Planning a Maui villa offsite — South and West houses, not a ballroom.',
      title: 'Planning a Maui villa offsite | myCHEF',
      description:
        'How to brief a Maui executive dinner or villa offsite. Not a hotel ballroom.',
      lede: 'How to brief a Maui executive dinner or villa offsite. Not a hotel ballroom.',
      photo: 'helpCorporateMaui',
      body: [
        'Upcountry is still a surcharge.',
        'We do not staff a Maui Convention Center floor we do not run.',
      ],
      faqs: [
        {
          q: 'Can you do a hotel ballroom?',
          a: 'No. Residences and villas.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/events/corporate-events', label: 'Villa offsites' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    {
      slug: 'managing-booking',
      name: 'Managing a booking',
      h1: 'After the Maui quote — deposit, date lock, West Maui changes in writing.',
      title: 'After the Maui quote — deposit and date lock | myCHEF',
      description:
        'How a Maui booking is held: 50% deposit, written changes, GET and service as their own lines. West Maui traffic is planned, not hidden.',
      lede: 'How a Maui booking is held: 50% deposit, written changes, GET and service as their own lines. West Maui traffic is planned, not hidden.',
      photo: 'helpBookingMaui',
      body: [
        'Fifty percent locks the date. Service 20% and GET up to 4.712% print as their own lines. Gratuity is voluntary.',
        'Shore and headcount changes go in writing. We do not hold a date on a verbal yes.',
      ],
      faqs: [
        {
          q: 'Can I move from Wailea to Lahaina after the deposit?',
          a: 'Write us. Lahaina is a different town — and the travel line may change.',
        },
        {
          q: 'Where is the fee stack?',
          a: 'The tariff itself is the pricing page — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/quote', label: 'Quote form' },
        { path: '/private-chef-cost', label: 'Fee stack' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'getting-started',
      name: 'Getting started',
      h1: 'First Kauai booking — name the shore, then ask if the road is open.',
      title: 'First Kauai booking — shore, inquiry, written quote | myCHEF',
      description:
        'How a first Kauai booking starts: Princeville, Poʻipū, Hanalei, or Kapaʻa; by inquiry; Hanalei-bridge weather.',
      lede: 'How a first Kauai booking starts: Princeville, Poʻipū, Hanalei, or Kapaʻa; by inquiry; Hanalei-bridge weather.',
      photo: 'helpStartKauai',
      body: [
        'We cook in Princeville, Poʻipū, Hanalei and Kapaʻa.',
        `We will not fake a live roster.`,
        'Send the shore and the address type on the quote form. Closures reschedule rather than forfeit.',
      ],
      faqs: [
        {
          q: 'Are you live on Kauaʻi?',
          a: 'Inquiry. We crew when we can staff. We will not invent a now-serving line.',
        },
        {
          q: 'Hanalei this weekend?',
          a: 'Weather can close the road. We reschedule; we do not pretend.',
        },
      ],
      related: [
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Quote' },
      ],
    },
    {
      slug: 'menu-guide',
      name: 'Menu guide',
      h1: 'How to read a Kauai menu draft — both shores, inquiry, 48 hours.',
      title: 'How to read a Kauai menu draft | myCHEF',
      description:
        'How a Kauai menu draft arrives: 48 hours, North Shore handshake or South Shore fire, by inquiry.',
      lede: 'How a Kauai menu draft arrives: 48 hours, North Shore handshake or South Shore fire, by inquiry.',
      photo: 'helpMenuKauai',
      body: [
        'The sample on the menus page is an example. Far-North drafts still inherit the Hanalei bridge notes. We do not print a theatrical luau.',
        'Princeville and Poʻipū are the usual rooms. Kapaʻa is closer to base — and still a real table, inquiry.',
      ],
      faqs: [
        {
          q: 'When does the draft arrive?',
          a: 'About 48 hours after a complete quote request, if we can staff the shore.',
        },
        {
          q: 'North Shore fish on a South Shore night?',
          a: 'We write what we can source. Origin-honest.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/south-shore', label: 'South Shore' },
      ],
    },
    {
      slug: 'wedding-guide',
      name: 'Wedding guide',
      h1: 'Planning a Kauai wedding week — both shores, inquiry, the bridge.',
      title: 'Planning a Kauai wedding week | myCHEF',
      description:
        'Planner checklist for a Kauai wedding week at inquiry: welcome, rehearsal, reception, brunch as separate lines. Hanalei-bridge weather is a clause.',
      lede:
        'We will not fake a live wedding roster.',
      photo: 'helpWeddingKauai',
      body: [
        'Princeville, Hanalei, Poʻipū. Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Hāʻena ceremony?',
          a: 'Quote-only with the bridge clause.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding week' },
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
      ],
    },
    {
      slug: 'corporate-guide',
      name: 'Corporate guide',
      h1: 'Planning a Kauai estate offsite — inquiry, not a convention.',
      title: 'Planning a Kauai estate offsite | myCHEF',
      description:
        'How to brief a Kauai executive dinner or estate offsite at inquiry. Not a convention floor.',
      lede: 'How to brief a Kauai executive dinner or estate offsite at inquiry. Not a convention floor.',
      photo: 'helpCorporateKauai',
      body: [
        'Inquiry.',
        'We do not staff a Kauaʻi convention we do not run.',
      ],
      faqs: [
        {
          q: 'Are corporate nights live?',
          a: 'Inquiry. We crew when we can staff.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/events/corporate-events', label: 'Estate offsites' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
      ],
    },
    {
      slug: 'managing-booking',
      name: 'Managing a booking',
      h1: 'After the Kauai quote — deposit, inquiry hold, bridge weather in writing.',
      title: 'After the Kauai quote — deposit and inquiry hold | myCHEF',
      description:
        'How a Kauai booking is held at inquiry: 50% deposit when we can staff, written changes, GET and service as their own lines.',
      lede: 'How a Kauai booking is held at inquiry: 50% deposit when we can staff, written changes, GET and service as their own lines.',
      photo: 'helpBookingKauai',
      body: [
        'Fifty percent locks a staffed date. Service 20% and GET up to 4.712% print as their own lines. Inquiry: we will not hold a fake roster.',
        'Shore and weather changes go in writing. We do not keep a deposit because the road closed.',
      ],
      faqs: [
        {
          q: 'Road closed the morning of?',
          a: 'We reschedule. The deposit follows the night, not the calendar.',
        },
        {
          q: 'Where is the fee stack?',
          a: 'The tariff itself is the pricing page — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/quote', label: 'Quote form' },
        { path: '/private-chef-cost', label: 'Fee stack' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'getting-started',
      name: 'Getting started',
      h1: 'First Hawaiʻi Island booking — west side first, then the kitchen.',
      title: 'First Hawaiʻi Island booking — west side, written quote | myCHEF',
      description:
        'How a first Hawaiʻi Island booking starts: Kona, Waimea, Waikoloa, Kohala; west side first; east side is a different day. Inquiry.',
      lede: 'How a first Hawaiʻi Island booking starts: Kona, Waimea, Waikoloa, Kohala; west side first; east side is a different day. Inquiry.',
      photo: 'helpStartBigisland',
      body: [
        'We cook in Kailua-Kona and Keauhou, Waimea, Waikoloa and Kohala Coast.',
        'Inquiry. Send the west-side address on the quote form. East side is a dedicated day — not a west-side round trip.',
      ],
      faqs: [
        {
          q: 'Can you cook in Hilo the same day as Waikoloa?',
          a: 'No. Crossing the island is a different day.',
        },
        {
          q: 'Are you are on the west side?',
          a: 'Inquiry. We crew when we can staff.',
        },
      ],
      related: [
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/east-side', label: 'East side' },
      ],
    },
    {
      slug: 'menu-guide',
      name: 'Menu guide',
      h1: 'How to read a Hawaiʻi Island menu draft — kanpachi, west side, 48 hours.',
      title: 'How to read a Hawaiʻi Island menu draft | myCHEF',
      description:
        'How a Hawaiʻi Island menu draft arrives: 48 hours, kanpachi and coffee crust, west-side kitchens. Origin-honest.',
      lede: 'How a Hawaiʻi Island menu draft arrives: 48 hours, kanpachi and coffee crust, west-side kitchens. Origin-honest.',
      photo: 'helpMenuBigisland',
      body: [
        'The sample on the menus page is an example. Coffee Act origin claims stay honest. We do not print a theatrical luau.',
        'Kona and Waikoloa are the usual rooms. East-side drafts are a different day.',
      ],
      faqs: [
        {
          q: 'When does the draft arrive?',
          a: 'About 48 hours after a complete quote request, if we can staff the west side.',
        },
        {
          q: 'Kona coffee on every plate?',
          a: 'Only when it is true.',
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/kohala-corridor', label: 'West-side radius' },
      ],
    },
    {
      slug: 'wedding-guide',
      name: 'Wedding guide',
      h1: 'Planning a Hawaiʻi Island wedding week — Kohala first, not a Hilo.',
      title: 'Planning a Hawaiʻi Island wedding week | myCHEF',
      description:
        'Planner checklist for a west-side wedding week at inquiry: welcome, rehearsal, reception, brunch as separate lines. East side is a different day.',
      lede:
        'Hilo is not implied.',
      photo: 'helpWeddingBigisland',
      body: [
        'Kohala Coast and Kona. Inquiry. We will not fake a live wedding roster.',
      ],
      faqs: [
        {
          q: 'Volcano ceremony?',
          a: 'Quote-only east side. Not a west-side round trip.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding week' },
        { path: '/kohala', label: 'Kohala' },
        { path: '/east-side', label: 'East side' },
      ],
    },
    {
      slug: 'corporate-guide',
      name: 'Corporate guide',
      h1: 'Planning a west-side villa offsite — Kohala, not a Hilo convention.',
      title: 'Planning a west-side villa offsite | myCHEF',
      description:
        'How to brief a Hawaiʻi Island executive dinner or villa offsite at inquiry. West side first.',
      lede: 'How to brief a Hawaiʻi Island executive dinner or villa offsite at inquiry. West side first.',
      photo: 'helpCorporateBigisland',
      body: [
        'Ironman weeks change lodging, not our kitchen promise.',
        'East side is a dedicated day. Inquiry. We do not staff a Hilo convention we do not run.',
      ],
      faqs: [
        {
          q: 'Hilo offsite same week as Waikoloa?',
          a: 'Different days.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/events/corporate-events', label: 'Villa offsites' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
      ],
    },
    {
      slug: 'managing-booking',
      name: 'Managing a booking',
      h1: 'After the west-side quote — deposit, inquiry hold, east-side days in writing.',
      title: 'After the west-side quote — deposit and inquiry hold | myCHEF',
      description:
        'How a Hawaiʻi Island booking is held at inquiry: 50% deposit when we can staff, written changes, GET and service as their own lines. East side is a different day.',
      lede: 'How a Hawaiʻi Island booking is held at inquiry: 50% deposit when we can staff, written changes, GET and service as their own lines. East side is a different day.',
      photo: 'helpBookingBigisland',
      body: [
        'Fifty percent locks a staffed west-side date. Service 20% and GET up to 4.712% print as their own lines. Inquiry: we will not hold a fake roster.',
        'Address and Ironman-week changes go in writing. We do not hold a date on a verbal yes.',
      ],
      faqs: [
        {
          q: 'Can I add a Hilo lunch after a Kona dinner?',
          a: 'Not the same day. Write us and we quote a dedicated crossing.',
        },
        {
          q: 'Where is the fee stack?',
          a: 'The tariff itself is the pricing page — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/quote', label: 'Quote form' },
        { path: '/private-chef-cost', label: 'Fee stack' },
        { path: '/east-side', label: 'East side' },
      ],
    },
  ],
};

export function getHelpArticle(island: IslandId, slug: string): HelpArticle | undefined {
  return helpArticles[island].find((row) => row.slug === slug);
}
