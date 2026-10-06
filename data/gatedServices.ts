import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog service cells that stay off the money-keyword doors.
 * Meal prep / classes / omakase are honesty pages until a bench exists.
 */

export const gatedServices: Record<IslandId, UniqueCell[]> = {
  oahu: [
    {
      slug: 'rehearsal-dinners',
      name: 'Rehearsal dinners',
      h1: 'Oahu rehearsal dinners — the night before, as its own line.',
      title: 'Oahu rehearsal dinners as their own line | myCHEF',
      description:
        'Seated rehearsal dinners in Kahala dining rooms and Ko Olina villas. Not the reception.',
      lede:
        'Twelve seats, plated fish, the night before. The lawn reception is a different booking. We write this line separately so the quote is honest.',
      photo: 'svcRehearsalOahu',
      body: [
        'Kahala dining rooms hold a table. Ko Olina villas hold a week.',
      ],
      faqs: [
        {
          q: 'Can it be family-style?',
          a: 'Yes. Plated is the usual rehearsal.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Weddings' },
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/kahala', label: 'Kahala' },
      ],
    },
    {
      slug: 'meal-prep',
      name: 'Meal prep',
      h1: 'Oahu meal prep stays gated until utilization is proven.',
      title: 'Oahu meal prep is gated until proven | myCHEF',
      description:
        'Inquiry only until utilization is proven.',
      lede:
        'Labeled containers are not a product we sell today. A fridge program needs a bench we will not invent. Ask; do not expect a rate card.',
      photo: 'svcMealprepOahu',
      body: [
        'Those are cooked in the house, not packed for the week ahead.',
        'If utilization is later proven, prices publish here. Until then the honest answer is inquiry.',
      ],
      faqs: [
        {
          q: 'Can I order five days of lunches?',
          a: 'Not as a published product. Join the inquiry. We will not invent a fridge program.',
        },
        {
          q: 'Is this the resident line?',
          a: 'No.',
        },
      ],
      related: [
        { path: '/kamaaina', label: 'Kamaʻāina line' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    {
      slug: 'cooking-classes',
      name: 'Cooking classes',
      h1: 'Oahu cooking classes publish only with a real instructor bench.',
      title: 'Oahu cooking classes wait on a real instructor bench | myCHEF',
      description:
        'Experience classes on Oahu stay unpublished until a named instructor bench exists. We will not sell a class we cannot staff.',
      lede:
        'Empty boards. A stove. No standing class. When a real instructor exists, this page will name the format — not before.',
      photo: 'svcClassesOahu',
      body: [
        'Halo products stay labeled as posture. A cooking class is an instructor product.',
        'Private chef dinners are / and the in-villa dinner page. Those are service, not a class.',
      ],
      faqs: [
        {
          q: 'Can the chef teach us to make poke?',
          a: 'Not as a published class. A dinner can include a short pass at the counter. That is on the chef’s table page, not this page.',
        },
        {
          q: 'Will you invent a teacher name?',
          a: 'No.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/about', label: 'The Oahu crew' },
      ],
    },
    {
      slug: 'omakase-at-home',
      name: 'Omakase at home',
      h1: 'Omakase at home on Oahu — tasting in the villa, not a restaurant claim.',
      title: 'Omakase at home on Oahu — tasting in the villa | myCHEF',
      description:
        'Premium tasting at home in Kahala and Ko Olina. Menu and sourcing verification are launch gates. Not a Michelin claim.',
      lede:
        'A paced tasting at the kitchen island. We will not borrow a restaurant’s name. Sourcing is written on the menu or it is not claimed.',
      photo: 'svcOmakaseOahu',
      body: [
        'Proof: a written quote.',
      ],
      faqs: [
        {
          q: 'Is this omakase like a restaurant?',
          a: 'It is a tasting in your kitchen. We do not claim stars we do not have.',
        },
        {
          q: 'Will you name a fishmonger?',
          a: 'When the invoice can stand behind it. We do not invent farm names.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/menus', label: 'Menus' },
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
      ],
    },
    {
      slug: 'corporate-catering',
      name: 'Corporate catering',
      h1: 'Executive dinners in Oahu houses — not citywides.',
      title: 'Executive dinners in Oahu houses — not citywides | myCHEF',
      description:
        'Offsites and executive dinners in Kahala and Ko Olina houses. HCC citywides are closed through 2027 and are not our product.',
      lede:
        'A house, a small offsite table, the guest list you actually have. Not the Hawaiʻi Convention Center. Not a MICE play while citywides are closed.',
      photo: 'svcCorpcatOahu',
      body: [
      ],
      faqs: [
        {
          q: 'Can you staff a convention lunch?',
          a: 'No. Citywides are closed through 2027 and are not our product.',
        },
        {
          q: 'Production crew in a house?',
          a: 'Call-time breakfasts in a residence, yes. A stage downtown, no.',
        },
      ],
      related: [
        { path: '/conventions', label: 'Not MICE' },
        { path: '/events/corporate-events', label: 'House offsites' },
        { path: '/catering', label: 'Staffed catering' },
      ],
    },
    {
      slug: 'retreat-catering',
      name: 'Retreat catering',
      h1: 'Oahu full-board retreat kitchens — food as its own line.',
      title: 'Oahu retreat catering — full-board villa days | myCHEF',
      description:
        'Full-board retreat days in Oahu houses. Dietary designed in.',
      lede:
        'Breakfast through dinner as a food line. The occasion lives next door. We split them so a planner can buy the kitchen without buying the story.',
      photo: 'svcRetreatcatOahu',
      body: [
      ],
      faqs: [
        {
          q: 'Full-board vegan week?',
          a: 'Designed in advance. We will not claim theatre.',
        },
      ],
      related: [
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
  ],
  maui: [
    {
      slug: 'rehearsal-dinners',
      name: 'Rehearsal dinners',
      h1: 'Maui rehearsal dinners — a seated night, not the reception.',
      title: 'Maui rehearsal dinners — a seated night | myCHEF',
      description:
        'Seated rehearsal dinners in Wailea, Kapalua and Kāʻanapali houses. Not the lawn reception.',
      lede:
        'A table, paced courses, the night before. The reception is a different line on the week. West Maui Saturday traffic is planned into arrival.',
      photo: 'svcRehearsalMaui',
      body: [
        'Kapalua lanais and Wailea dining rooms.',
      ],
      faqs: [
        {
          q: 'Is this the welcome dinner?',
          a: 'Rehearsal is the seated night before the ceremony.',
        },
        {
          q: 'Lahaina rehearsal?',
          a: 'West Maui houses with kitchens.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/west-maui', label: 'West Maui' },
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
      ],
    },
    {
      slug: 'meal-prep',
      name: 'Meal prep',
      h1: 'Maui meal prep stays gated — inquiry, not a standing.',
      title: 'Maui meal prep is gated until proven | myCHEF',
      description:
        'Inquiry only until utilization is proven.',
      lede:
        'We will not sell a fridge program we cannot staff in Wailea or West Maui. Ask. Do not expect a published band.',
      photo: 'svcMealprepMaui',
      body: [
        'Stay Chef weeks cook in the house each day. That is not packed lunches.',
      ],
      faqs: [
        {
          q: 'Can you fill the villa fridge on landing day?',
          a: 'A shop-and-stock for a Stay Chef week, yes. A five-day packed program, not as a published product.',
        },
        {
          q: 'Upcountry prep?',
          a: 'Surcharge zone even for dinners. Prep stays gated everywhere.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    {
      slug: 'cooking-classes',
      name: 'Cooking classes',
      h1: 'Maui cooking classes wait on a named instructor — none published yet.',
      title: 'Maui cooking classes wait on a named instructor | myCHEF',
      description:
        'Experience classes on Maui stay unpublished until a named instructor exists. We will not sell a class we cannot staff in Wailea or West Maui.',
      lede:
        'Open kitchen, unused stations. When an instructor is real, this page will say so. Until then it is a refusal.',
      photo: 'svcClassesMaui',
      body: [
        'A counter pass during dinner is on the chef’s table page. A class is an instructor product. Halo language stays labeled as posture.',
      ],
      faqs: [
        {
          q: 'Farm-to-table class in Upcountry?',
          a: 'We do not invent farm names.',
        },
        {
          q: 'Can dinner include a lesson?',
          a: 'A short pass at the counter, yes. Not this page.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/about', label: 'The Maui crew' },
      ],
    },
    {
      slug: 'omakase-at-home',
      name: 'Omakase at home',
      h1: 'Omakase at home on Maui — a tasting arc in Wailea, not a Michelin claim.',
      title: 'Omakase at home on Maui — a tasting arc in Wailea | myCHEF',
      description:
        'Premium tasting at home in Wailea and Kapalua. Sourcing verification is a launch gate. Not a star claim.',
      lede:
        'Courses at the open-kitchen counter. Molokini in the window if the house has it. We will not borrow a restaurant’s name.',
      photo: 'svcOmakaseMaui',
      body: [
      ],
      faqs: [
        {
          q: 'Lotus Chefs or elite Maui chef omakase?',
          a: 'Related searches, not a stolen brand. We will not borrow Lotus Chefs or an “elite Maui chef” name.',
        },
        {
          q: 'Will you claim a fisherman?',
          a: 'When the invoice can stand behind it. Otherwise the dish is the dish.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/wailea', label: 'Wailea' },
        { path: '/menus', label: 'Menus' },
      ],
    },
    {
      slug: 'corporate-catering',
      name: 'Corporate catering',
      h1: 'Executive dinners in Maui villas — not a ballroom.',
      title: 'Executive dinners in Maui villas — not a ballroom | myCHEF',
      description:
        'Offsites and executive dinners in Wailea, Kapalua and Kīhei houses. Not hotel ballrooms.',
      lede:
        'A villa kitchen, a small offsite list, South or West. We cook houses. We do not staff banquet rooms.',
      photo: 'svcCorpcatMaui',
      body: [
      ],
      faqs: [
        {
          q: 'Hotel conference lunch?',
          a: 'No. Residences and villas. Ballrooms are not the product.',
        },
        {
          q: 'Production in a South Maui house?',
          a: 'Call-time breakfasts in a residence, yes.',
        },
      ],
      related: [
        { path: '/events/corporate-events', label: 'Villa offsites' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/catering', label: 'Staffed catering' },
      ],
    },
    {
      slug: 'retreat-catering',
      name: 'Retreat catering',
      h1: 'Maui full-board retreat kitchens — South and West houses.',
      title: 'Maui retreat catering — full-board villa days | myCHEF',
      description:
        'Full-board retreat days in Wailea, Kapalua and Kīhei. Dietary designed in.',
      lede:
        'Three meals in the house.',
      photo: 'svcRetreatcatMaui',
      body: [
        `Upcountry is a surcharge.`,
      ],
      faqs: [
        {
          q: 'West Maui full-board in Saturday traffic?',
          a: 'Arrival is planned. We do not discover Honoapiʻilani on the invoice.',
        },
      ],
      related: [
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'rehearsal-dinners',
      name: 'Rehearsal dinners',
      h1: 'Kauai rehearsal dinners — estate table, inquiry.',
      title: 'Kauai rehearsal dinners — estate table, inquiry | myCHEF',
      description:
        'Seated rehearsal dinners in Princeville, Hanalei and Poʻipū. Inquiry stage. Not the reception.',
      lede:
        'An estate table looking into a valley, or a South Shore dining room. Inquiry. Far-North inherits the bridge clause.',
      photo: 'svcRehearsalKauai',
      body: [
        'Inquiry list with the shore.',
      ],
      faqs: [
        {
          q: 'Can I book a date now?',
          a: 'Join the inquiry with the shore and the dates. We will not fake instant confirm.',
        },
        {
          q: 'Hanalei rehearsal in surf season?',
          a: 'The bridge clause still applies.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/princeville', label: 'Princeville' },
      ],
    },
    {
      slug: 'meal-prep',
      name: 'Meal prep',
      h1: 'Kauai meal prep stays gated — inquiry, not a standing.',
      title: 'Kauai meal prep is gated until proven | myCHEF',
      description:
        'Inquiry only.',
      lede:
        'Unused containers in a Poʻipū kitchen. We will not invent a fridge program while this department is inquiry.',
      photo: 'svcMealprepKauai',
      body: [
        'That is cooked daily, not packed.',
        'Inquiry stage. Published starting prices for dinners still apply when we cook. Prep is not one of those products.',
      ],
      faqs: [
        {
          q: 'North Shore packed lunches for a hike week?',
          a: 'Far-North still inherits the Hanalei bridge notes even for dinners.',
        },
        {
          q: 'When will this open?',
          a: 'When utilization is proven and the crew exists. This page will change in public.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/south-shore', label: 'South Shore' },
      ],
    },
    {
      slug: 'cooking-classes',
      name: 'Cooking classes',
      h1: 'Kauai cooking classes stay unpublished until a bench exists.',
      title: 'Kauai cooking classes stay unpublished until a bench exists | myCHEF',
      description:
        'Experience classes on Kauai stay unpublished until a real instructor bench exists. Inquiry stage. We will not sell a class we cannot staff.',
      lede:
        'Empty Princeville boards. Mist in the window. No standing class. When an instructor is real, the page will say so.',
      photo: 'svcClassesKauai',
      body: [
        'A class is an instructor product. Inquiry stage does not get a fake teacher name.',
      ],
      faqs: [
        {
          q: 'Hanalei cooking lesson?',
          a: 'Not a published class. Far-North dinners still inherit the Hanalei bridge notes.',
        },
        {
          q: 'Will you name an instructor?',
          a: 'When one exists.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/about', label: 'The Kauai crew' },
      ],
    },
    {
      slug: 'omakase-at-home',
      name: 'Omakase at home',
      h1: 'Omakase at home on Kauai — inquiry tasting, both shores.',
      title: 'Omakase at home on Kauai — both shores | myCHEF',
      description:
        'Premium tasting at home in Princeville and Poʻipū. Inquiry stage. Sourcing verification is a launch gate. Not a restaurant claim.',
      lede:
        'A paced tasting at the estate counter. South sun or North mist. We will not borrow a restaurant’s name while we are inquiry.',
      photo: 'svcOmakaseKauai',
      body: [
      ],
      faqs: [
        {
          q: 'Can I book omakase this month?',
          a: 'Inquiry list with the shore. We will not fake a live roster.',
        },
        {
          q: 'Will you claim a Hanalei fisherman?',
          a: 'When the invoice can stand behind it. We do not invent names.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/poipu', label: 'Poʻipū' },
        { path: '/menus', label: 'Menus' },
      ],
    },
    {
      slug: 'corporate-catering',
      name: 'Corporate catering',
      h1: 'Executive dinners on Kauai estates — inquiry.',
      title: 'Executive dinners on Kauai estates — inquiry | myCHEF',
      description:
        'Offsites and executive dinners in Princeville and Poʻipū houses. Inquiry stage. Not a convention play.',
      lede:
        'A small estate table. Both shores. Inquiry. We do not pretend Kauaʻi is a MICE island.',
      photo: 'svcCorpcatKauai',
      body: [
        'Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Can you staff a Līhuʻe conference?',
          a: 'No. Estates and villas. Not a convention product.',
        },
      ],
      related: [
        { path: '/events/corporate-events', label: 'Estate offsites' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/catering', label: 'Staffed catering' },
      ],
    },
    {
      slug: 'retreat-catering',
      name: 'Retreat catering',
      h1: 'Kauai full-board retreat kitchens — inquiry, both shores.',
      title: 'Kauai retreat catering — full-board, both shores | myCHEF',
      description:
        'Full-board retreat days in Kauai houses. Inquiry stage. Dietary designed in.',
      lede:
        'Breakfast through dinner in the house. The mist and the fire plan follow the shore.',
      photo: 'svcRetreatcatKauai',
      body: [
        `Inquiry stage.`,
      ],
      faqs: [
        {
          q: 'Vegan full-board on the North?',
          a: 'Designed in advance, claimed only when true. Bridge clause still applies.',
        },
      ],
      related: [
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'rehearsal-dinners',
      name: 'Rehearsal dinners',
      h1: 'Kohala rehearsal dinners — west-side night before, inquiry.',
      title: 'Kohala rehearsal dinners — west-side night before | myCHEF',
      description:
        'Seated rehearsal dinners on Kona–Kohala terraces. Inquiry stage. Not the reception. East side is a different day.',
      lede:
        'Eight seats on lava, plated kanpachi, Mauna Kea faint. The reception is a different line. East side is not an add-on.',
      photo: 'svcRehearsalBigisland',
      body: [
        'West-side radius: Kona–Kohala corridor. Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Hilo rehearsal?',
          a: 'Quote-only dedicated staffing. Not a west-side round trip.',
        },
        {
          q: 'Ironman week?',
          a: 'Flag the dates. Town compresses.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Weddings' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/kona', label: 'Kona' },
      ],
    },
    {
      slug: 'meal-prep',
      name: 'Meal prep',
      h1: 'Hawaiʻi Island meal prep stays gated — west side, inquiry.',
      title: 'Hawaiʻi Island meal prep is gated until proven | myCHEF',
      description:
        'Inquiry only. East side is a different day.',
      lede:
        'Unused containers in a Kona kitchen. Hard sun. We will not invent a fridge program while this department is inquiry.',
      photo: 'svcMealprepBigisland',
      body: [
        'Cooked daily, not packed.',
        'West-side first. East-side prep is not a product. Coffee origin labeling is the Kona coffee labeling notes — we do not invent farm names on a packed lunch either.',
      ],
      faqs: [
        {
          q: 'Can you pack Ironman week lunches?',
          a: 'Event weeks compress dinners too.',
        },
        {
          q: 'Hilo fridge program?',
          a: 'No. East side is quote-only dedicated days even for dinners.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/kohala-corridor', label: 'West-side radius' },
      ],
    },
    {
      slug: 'cooking-classes',
      name: 'Cooking classes',
      h1: 'Hawaiʻi Island cooking classes stay unpublished until a bench exists.',
      title: 'Hawaiʻi Island cooking classes wait on a named instructor | myCHEF',
      description:
        'Experience classes on Hawaiʻi Island stay unpublished until a named instructor exists. Inquiry stage. We will not sell a class we cannot staff.',
      lede:
        'Empty Kona stools. Coffee slopes in the window. No standing class. When an instructor is real, this page will change.',
      photo: 'svcClassesBigisland',
      body: [
        'A class is an instructor product. We will not invent a Kona coffee-class brand.',
      ],
      faqs: [
        {
          q: 'Coffee farm class?',
          a: 'Named coffee follows Act 198. We do not invent farms.',
        },
        {
          q: 'Volcano cooking lesson?',
          a: 'East side is quote-only even for dinners. No class product.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
      ],
    },
    {
      slug: 'omakase-at-home',
      name: 'Omakase at home',
      h1: 'Omakase at home on Hawaiʻi Island — west-side tasting.',
      title: 'Omakase at home on the Big Island | myCHEF',
      description:
        'Premium tasting at home in Kona and Kohala. Inquiry stage. Sourcing verification is a launch gate. East side is a different day. Not a restaurant claim.',
      lede:
        'Kanpachi in courses at the kitchen counter. Lava in the window. We will not borrow a restaurant’s name. East side is not implied.',
      photo: 'svcOmakaseBigisland',
      body: [
        'Coffee on a crust follows the Kona coffee labeling notes.',
      ],
      faqs: [
        {
          q: 'Can I book this month?',
          a: 'Inquiry. We will not fake a live west-side roster.',
        },
        {
          q: 'Hilo tasting?',
          a: 'Quote-only dedicated day.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/kona', label: 'Kona' },
        { path: '/kohala-corridor', label: 'West-side radius' },
      ],
    },
    {
      slug: 'corporate-catering',
      name: 'Corporate catering',
      h1: 'Executive dinners on the Kohala Coast — inquiry.',
      title: 'Executive dinners on the Kohala Coast — inquiry | myCHEF',
      description:
        'Offsites and executive dinners in Kona and Kohala houses. Inquiry stage. Not a Hilo add-on.',
      lede:
        'A west-side villa table. Hard sun. Not the whole island. Not a ballroom. Inquiry.',
      photo: 'svcCorpcatBigisland',
      body: [
      ],
      faqs: [
        {
          q: 'Can you add a Hilo day onto a Waikoloa offsite?',
          a: 'As its own dedicated team day, quoted. Not as an unpaid errand.',
        },
        {
          q: 'Ironman week offsite?',
          a: 'Flag dates early. Town compresses.',
        },
      ],
      related: [
        { path: '/events/corporate-events', label: 'Villa offsites' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/catering', label: 'Staffed catering' },
      ],
    },
    {
      slug: 'retreat-catering',
      name: 'Retreat catering',
      h1: 'Hawaiʻi Island full-board retreat kitchens — west side.',
      title: 'Big Island retreat catering — full-board | myCHEF',
      description:
        'Full-board retreat days in Kona–Kohala houses. Inquiry stage. East side is a different day.',
      lede:
        'Breakfast fish, a small offsite table, lava heat.',
      photo: 'svcRetreatcatBigisland',
      body: [
        'West-side first.',
        `Hilo retreats are quote-only dedicated days.`,
      ],
      faqs: [
        {
          q: 'Volcano full-board?',
          a: 'Quote-only east side with dedicated staffing. Not a west-side round trip.',
        },
      ],
      related: [
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/east-side', label: 'East side' },
      ],
    },
  ],
};
