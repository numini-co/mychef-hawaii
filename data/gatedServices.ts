import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

/**
 * Catalog service cells that stay off the money-keyword doors.
 * Meal prep / classes / omakase are honesty pages until a bench exists.
 */

const desk = `${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}`;

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
          q: 'Will you staff a convention lunch at the Hawaiʻi Convention Center?',
          a: 'No. Citywides are closed through 2027 and are not our product. This page is one executive dinner in a Kahala or Ko Olina house, not a downtown ballroom.',
        },
        {
          q: 'Can a production crew eat in a Kahala house or a Ko Olina villa?',
          a: 'Call-time breakfasts in a residence, yes. A stage downtown, no. Send the house address, not a venue name, on [the quote form](/quote).',
        },
        {
          q: 'What does the menu for one Honolulu executive dinner actually contain?',
          a: 'A menu written for that table, not a standing carte. Say whether the board wants plated courses or shared platters, plus seats and the dietary list. Food bands sit on [pricing](/pricing).',
        },
        {
          q: 'When does the crew reach a Kahala board dinner?',
          a: 'About three hours before service, and only after a tower freight window is booked. A Ko Olina villa can sit later because the house itself is the venue. The quote states that window.',
        },
        {
          q: 'Who else is in the dining room besides the chef?',
          a: 'Ask for a server and a sous chef when the board table needs a floor. Their hours are separate from the food. See [staffing](/staffing). A bartender is quoted in writing, with no hourly figure. Then 20% service and Hawaiʻi GET up to 4.712% print alone, and a 50% deposit after you accept. Gratuity is never required.',
        },
        {
          q: 'What must the Honolulu kitchen have before that dinner is accepted?',
          a: `A cooktop, a fridge, and a table the board can use. A hotel suite with a coffee maker is declined. Send kitchen photos with the address on [the quote form](/quote). Quotes are open. Desk: ${desk}.`,
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
        'Premium tasting at home in Wailea and Kapalua. Sourcing verification is a launch gate. Not a star.',
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
          q: 'Will you serve a hotel conference lunch in Wailea or Kāʻanapali?',
          a: 'No. Residences and villas. Ballrooms are not the product. This page is one executive dinner in the rental kitchen. A resort name does not add a banquet floor.',
        },
        {
          q: 'Can a film or photo crew take breakfast in a South Maui house?',
          a: 'Call-time breakfasts in a residence, yes. We still need a cooktop in that house. Being on hotel property is not a kitchen. Name the rental on [the quote form](/quote).',
        },
        {
          q: 'How is one Wailea leadership menu different from cooking the whole week?',
          a: 'One designed dinner, plated on the lanai or shared down the table. A week of meals is a retreat, not this page. Put the shore and the seats on the quote. Bands are on [pricing](/pricing). Quotes are open.',
        },
        {
          q: 'What time does a West Maui executive dinner actually begin?',
          a: 'The cook is in the rental about three hours before the first plate. A Saturday drive from Wailea toward Kapalua is planned into that arrival. We will not discover Honoapiʻilani after you have accepted.',
        },
        {
          q: 'Who stands with the chef on a Kapalua leadership night?',
          a: 'A server and a sous chef if the lanai needs a floor, with hours apart from the food. Open [staffing](/staffing). A bartender is quoted in writing. 20% service and GET up to 4.712% follow, each alone. A 50% deposit comes after you accept. Gratuity is never required.',
        },
        {
          q: 'What does the Wailea villa kitchen need for that single dinner?',
          a: `A cooktop, a fridge, and a lanai or dining table the group can use. If trade winds close the lawn, the backup is the dining room, written before you accept. Send photos of both. Desk: ${desk}.`,
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
          q: 'Can you staff a conference in Līhuʻe?',
          a: 'No. Estates and villas. Not a convention product. Request availability for a house with a kitchen, and name the shore. A meeting room in town is a decline.',
        },
        {
          q: 'Can a production crew eat at a Princeville estate or in a Poʻipū house?',
          a: 'Call-time meals in an estate, yes, if a crew can take that shore. Request availability. A named house is not a confirmed team. South and north are different drives.',
        },
        {
          q: 'What does one Garden Isle executive dinner include?',
          a: 'One table, one shore, and a menu written for that kitchen. North mist and south sun are not interchangeable. Request availability on [the quote form](/quote). There is no instant confirm.',
        },
        {
          q: 'How do rain and the Hanalei bridge change the clock on a north-shore dinner?',
          a: 'We build the call around the road. A bridge closure moves the night. It does not forfeit the night, and it does not quietly become Poʻipū. The south shore does not inherit that clause. Name the shore before anyone shops.',
        },
        {
          q: 'How do I ask for servers at a Poʻipū executive dinner while Kauaʻi is still an inquiry?',
          a: 'Name them in the availability request. Server and sous-chef hours sit apart from the menu. See [staffing](/staffing). A bartender is quoted in writing. 20% service and GET up to 4.712% print alone. A 50% deposit waits for a written yes. Gratuity is never required.',
        },
        {
          q: 'What must a kitchen on either shore have before an executive dinner is considered?',
          a: `A cooktop, a fridge, and seats, shown in photos. The north also needs a covered backup. Poʻipū is the shorter drive from Līhuʻe and still needs a wet-weather note. Request availability. Desk: ${desk}.`,
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
          q: 'Can a Hilo day be added onto a Waikoloa executive dinner?',
          a: 'As its own dedicated day, with its own crew. Not as an unpaid errand, and not the same afternoon. Join the inquiry list for the west side, or send Hilo alone. We will not imply both.',
        },
        {
          q: 'What should we flag when an executive dinner falls in Ironman week?',
          a: 'Flag the dates on the inquiry. Kona roads and the grocery window compress. The kitchen does not grow. Join the inquiry list early. A published page is not a held crew.',
        },
        {
          q: 'What does one west-side executive dinner include, and what is left out?',
          a: 'One leadership table in Kona, Waikoloa, or along the Kohala Coast, with a menu for that house. Hilo is not inside it. Join the inquiry list on [the quote form](/quote) and give the west-side address.',
        },
        {
          q: 'How does the drive between Kona town and Kohala set the timing of a single dinner?',
          a: 'The cook is on site with time to set the kitchen before service. A Waikoloa night and a Kona town night are not stacked on one clock. We do not start that drive after a same-day stop in Hilo.',
        },
        {
          q: 'How do I request a server and a sous chef for a Kohala executive dinner?',
          a: 'Name them on the inquiry. Their hours are separate from the food. See [staffing](/staffing). A bartender is quoted in writing, with no hourly figure. 20% service and Hawaiʻi GET up to 4.712% follow, each alone. A 50% deposit applies after a written yes. Gratuity is never required.',
        },
        {
          q: 'Which Waikoloa rooms can hold the leadership dinner, and which are turned down?',
          a: `We need a cooktop, a fridge, and a table the group can use. A hotel room with a minibar is declined. Say terrace or great room. We confirm the room in the reply, before any deposit. Join the inquiry list. Desk: ${desk}.`,
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
