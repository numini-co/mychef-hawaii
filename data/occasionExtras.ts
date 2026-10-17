import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

/**
 * Remaining catalog EVENT_SLUGS except weddings (already a money door).
 * Titles must not use catering or private-chef money keywords.
 */

const desk = `${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}`;

export const OCCASION_EXTRA_SLUGS = ['anniversaries', 'corporate-events', 'villa-parties', 'brunch'] as const;
export type OccasionExtraSlug = (typeof OCCASION_EXTRA_SLUGS)[number];

export interface OccasionExtra extends UniqueCell {
  slug: OccasionExtraSlug;
}

export const occasionExtras: Record<IslandId, OccasionExtra[]> = {
  oahu: [
    {
      slug: 'anniversaries',
      name: 'Anniversaries',
      h1: 'Anniversary dinners in a Kahala dining room — two seats or a small table.',
      title: 'Anniversary dinners in a Kahala dining room | myCHEF',
      description:
        'Anniversary tables in Kahala dining rooms and Ko Olina villas. Two seats or a small list. Not a restaurant buyout.',
      lede:
        'Two plates, brass, Diamond Head faint. Or a small family table. This one is the year-mark.',
      photo: 'occAnniversaryOahu',
      body: [
        'Two place settings in a Kahala dining room, or a small table in a Ko Olina villa, start in the kitchen you hand over. The cook plates after any town freight window. Courses go to the table you named, then we clear the pass. Rain moves an outdoor Gold Coast plan indoors, and that backup is on the quote with 20% service and Hawaiʻi GET up to 4.712% on their own and a 50% deposit after you accept. Gratuity is never required. A larger list belongs with [all occasions](/events). Bands are on [pricing](/pricing). Send the house on [the quote form](/quote). See [staffing](/staffing).',
      ],
      faqs: [
        {
          q: 'Can an Oʻahu anniversary be just the two of us?',
          a: 'Yes. A two-seat dinner is a published band on [pricing](/pricing), not six empty chairs. A small family table can use the same dining room. Say which you mean. Quotes are open.',
        },
        {
          q: 'Can we bring a cake to a Kahala anniversary?',
          a: 'Yes. We can plate a dessert, or you can bring a bakery cake. We do not print a bakery brand we do not use. Tell us which, before the shop, so the pass is planned.',
        },
        {
          q: 'Where are two seats served inside a Honolulu house?',
          a: 'At the dining table, or on a quiet lānai if the house has one. The cook works the kitchen, plates, and clears. A tower still needs its freight window. A hotel room without a stove is declined.',
        },
        {
          q: 'How is a Ko Olina anniversary different from a house party the same week?',
          a: 'This page is the small table. A villa party is the larger list. They can share a coordinator across the week. They do not share one total. Town freight and a villa arrival stay different notes.',
        },
        {
          q: 'What does the anniversary quote include?',
          a: 'The dinner, then a server only if you asked for one. See [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows acceptance. Gratuity is never required. Send the house on [the quote form](/quote).',
        },
        {
          q: 'If rain is forecast, can two seats still happen outdoors on the Gold Coast?',
          a: `Dinner moves indoors. That sentence is on the quote before you accept. Two place settings fit a dining room that a lawn party would not. We do not add a tent for two. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/kahala', label: 'Kahala' },
      ],
    },
    {
      slug: 'corporate-events',
      name: 'Corporate events',
      h1: 'Oahu house offsites — not HCC citywides.',
      title: 'Oahu house offsites — not HCC citywides | myCHEF',
      description:
        'House offsites in Kahala and Ko Olina. HCC citywides are closed through 2027.',
      lede:
        'Laptops away from the pass. Breakfast in the house. Not the convention centre. The food line is on the corporate catering page.',
      photo: 'occCorporateOahu',
      body: [
        'The kitchen line for executive dinners is on the corporate catering page.',
        'Production crews in residences are this product. A stage downtown is not.',
      ],
      faqs: [
        {
          q: 'Sony Open week?',
          a: 'Calendar awareness, not an affiliation. Ask early.',
        },
      ],
      related: [
        { path: '/conventions', label: 'Not MICE' },
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/events/retreats', label: 'Retreats' },
      ],
    },
    {
      slug: 'villa-parties',
      name: 'Villa parties',
      h1: 'Villa parties in Ko Olina and Kahala — the house is the venue.',
      title: 'Villa parties in Ko Olina and Kahala | myCHEF',
      description:
        'Staffed villa parties in Ko Olina short-stay houses and Kahala dining rooms. About 10–75. Not a restaurant buyout.',
      lede:
        'The house, family-style fish, the guest list you actually have. Legal short-stay fact is on the Short-stay villas page.',
      photo: 'occVillaOahu',
      body: [
        'Ko Olina legal short-stay villas and Kahala Gold Coast dining rooms are the usual rooms. A villa week at Ko Olina and an estate table on the Gold Coast are both written quotes, not a restaurant buyout.',
        'At a Ko Olina party the house is the venue, so the cook sets the kitchen before guests arrive. A Gold Coast dining room in town still needs its freight window first. You hand over the cooktop, the fridge, and the table the list will use. Platters go out, we serve, and the kitchen is cleared before we leave. Rain sends an outdoor setup indoors or onto a covered lānai, written before you accept. The quote shows the food, any server hours, 20% service and Hawaiʻi GET up to 4.712% on their own, and a 50% deposit after you accept. Gratuity is never required. See [all occasions](/events) and [pricing](/pricing). Send the chair count on [the quote form](/quote). See [staffing](/staffing).',
      ],
      faqs: [
        {
          q: 'Can you serve a hundred guests on a Gold Coast lawn?',
          a: 'Not as a promise. Larger than about seventy-five is quoted or declined. Tell us the real chair count. We will not stretch a dining room past the seats it has.',
        },
        {
          q: 'Can a hotel suite in town hold this kind of party?',
          a: 'Only if there is a stove. Most suites do not. Residences and villas are the product. A coffee maker is not a kitchen. We decline that room before any deposit.',
        },
        {
          q: 'How does a Ko Olina party run from the moment you arrive until the kitchen is clear?',
          a: 'The cook sets the villa kitchen, sends family-style platters to the list you named, then clears. A short-stay house still needs a working stove. The freight clock is a town problem, not a Ko Olina one.',
        },
        {
          q: 'If rain hits an outdoor Gold Coast setup, where does the party go?',
          a: 'Indoors, or onto a covered lānai, and that move is written on the quote. We do not add a tent after the deposit. If the indoor chairs cannot hold the list, we say so before you accept.',
        },
        {
          q: 'How is a Kahala house party written up?',
          a: 'Food for the real list, then server and sous-chef hours if the floor needs them. See [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows acceptance. Gratuity is never required. The card is [pricing](/pricing).',
        },
        {
          q: 'What should I send for a Ko Olina party that is not a two-seat anniversary?',
          a: `The house, the date, the real headcount, and whether the table is inside or on the lānai. Quotes are open on [the quote form](/quote). Two seats belong on the anniversary page, not here. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/short-stay', label: 'Short-stay villas' },
        { path: '/gold-coast', label: 'Gold Coast' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'brunch',
      name: 'Brunch',
      h1: 'Brunch in an Oahu house — recovery morning, not a restaurant.',
      title: 'Brunch in an Oahu house | myCHEF',
      description:
        'Recovery brunch in Kahala houses and Ko Olina villas. Morning after the villa week or the wedding night. Not a restaurant brunch.',
      lede:
        'Fruit, eggs, last night’s fish recast. The house still waking.',
      photo: 'occBrunchOahu',
      body: [
        'Wedding recovery brunch stacks on the weddings page as its own line.',
      ],
      faqs: [
        {
          q: 'Same as the wedding brunch?',
          a: 'Same kitchen. Wedding brunch is a line on the weddings page.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Weddings' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/events', label: 'All occasions' },
      ],
    },
  ],
  maui: [
    {
      slug: 'anniversaries',
      name: 'Anniversaries',
      h1: 'Anniversary nights on a Wailea lanai — two plates, not a buyout.',
      title: 'Anniversary nights on a Wailea lanai | myCHEF',
      description:
        'Anniversary tables in Wailea, Kapalua and Kīhei. Two seats or a small list. Not a restaurant buyout.',
      lede:
        'Blue hour, two plated fish, Molokini faint. Or a small family table on the lawn.',
      photo: 'occAnniversaryMaui',
      body: [
        `Wet-weather backup is written for lawns.`,
        'A Wailea or Kapalua anniversary is two plates, or a very small table, cooked in the villa. The cook plates before blue hour, and a Saturday drive up from the south is already in that arrival. You hand over the cooktop and the seats. Courses go to the lanai, then we clear. Trade winds that close it move those seats into the dining room, written before you accept. The quote is that small table, then 20% service and GET up to 4.712% each alone, and a 50% deposit after you accept. Gratuity is never required. A full lawn belongs on [all occasions](/events). Numbers are on [pricing](/pricing). Name the shore on [the quote form](/quote). A full wedding week is [weddings](/weddings).',
      ],
      faqs: [
        {
          q: 'Can the anniversary be in Kapalua instead of Wailea?',
          a: 'Yes. Northwest bay houses with a kitchen. The Saturday drive up from the south is planned into arrival. Name the shore on [the quote form](/quote). Quotes are open.',
        },
        {
          q: 'Can a Wailea anniversary be just the two of us?',
          a: 'Yes. Two plates on the lanai, or a very small family table. Once the lanai becomes a gathering, use the villa-party page. The cooking does not rename itself. The page does.',
        },
        {
          q: 'What is served at a two-seat dinner above Wailea?',
          a: 'Plated fish, courses from the villa kitchen, and either a dessert we plate or a cake you bring. We do not invent a bakery name. Shared platters are the lawn party, not this table.',
        },
        {
          q: 'If the trade winds close the lanai, where do those two seats go?',
          a: 'Into the dining room, written before you accept. We do not invent a tent for two, and we do not move you into a resort restaurant. The backup is the house you already named.',
        },
        {
          q: 'How does a Kapalua anniversary get written up?',
          a: 'One small table. Food, then a server only if you ask. See [staffing](/staffing). 20% service and GET up to 4.712% print alone. A 50% deposit follows acceptance. Gratuity is never required. Bands are on [pricing](/pricing).',
        },
        {
          q: 'Is the anniversary the same night as the welcome dinner in that villa?',
          a: `Only if you mean the landing itself to be the two of you. A group arrival is the welcome page. Two seats marking a year are this page. Say which on the quote. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/wailea', label: 'Wailea' },
        { path: '/events/birthdays', label: 'Birthdays' },
      ],
    },
    {
      slug: 'corporate-events',
      name: 'Corporate events',
      h1: 'Maui villa offsites — South and West houses, not a ballroom.',
      title: 'Maui villa offsites in South and West houses | myCHEF',
      description:
        'Villa offsites in Wailea, Kapalua and Kīhei. Not hotel ballrooms.',
      lede:
        'A small offsite table, the lawn optional. We cook houses. We do not staff banquet rooms.',
      photo: 'occCorporateMaui',
      body: [
        'Production crews in residences are this product. Convention citywides are not.',
      ],
      faqs: [
        {
          q: 'Hotel conference?',
          a: 'No. Residences and villas.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/events/retreats', label: 'Retreats' },
      ],
    },
    {
      slug: 'villa-parties',
      name: 'Villa parties',
      h1: 'Villa parties in Wailea and West Maui — lawn or dining room.',
      title: 'Villa parties in Wailea and West Maui | myCHEF',
      description:
        'Staffed villa parties in Wailea, Kīhei, Kāʻanapali and Kapalua. About 10–75. Wet-weather backup written for lawns.',
      lede:
        'Grass, identical plates, the guest list you actually have. Saturday West Maui traffic is planned into arrival, not discovered on the invoice.',
      photo: 'occVillaMaui',
      body: [
        'A Wailea lawn party starts in the rental kitchen. The cook is on site in time to fire platters before guests reach the grass. You hand over the cooktop, the fridge, and a table that matches the list. We serve, then clear the kitchen. Trade winds move the night under the lanai roof or into the dining room, and that plan is on the quote before you accept. Saturday traffic between the shores changes the call time. The quote lists food, any server hours, 20% service and GET up to 4.712% each alone, and a 50% deposit after you accept. Gratuity is never required. See [all occasions](/events) and [pricing](/pricing). Send the shore on [the quote form](/quote). See [Maui catering](/catering).',
      ],
      faqs: [
        {
          q: 'What happens if rain hits a Wailea lawn during the party?',
          a: 'The backup is written before you accept: a covered lanai or the dining room. We do not pretend the weather is a surprise, and we do not add a tent on the day. If indoor seats run short, the quote says so.',
        },
        {
          q: 'How many people can a Kīhei or Wailea house actually seat for a party?',
          a: 'The list the house can seat, in the range this page already states, about ten to seventy-five. Beyond that we quote or decline. A lawn photo is not a chair count. Put the real number on [the quote form](/quote).',
        },
        {
          q: 'Should a Kāʻanapali party be plated courses or shared platters?',
          a: 'Shared platters suit a lawn table. Plated courses suit a dining room with a clear path from the kitchen. Pick one. Saturday traffic up from the south is planned into the call time.',
        },
        {
          q: 'Who is on the floor besides the chef at a Kapalua party?',
          a: 'A server and a sous chef if you ask, with hours separate from the food. See [staffing](/staffing). A lanai bartender is quoted in writing, with no hourly figure. 20% service and GET up to 4.712% follow. A 50% deposit comes after you accept. Gratuity is never required.',
        },
        {
          q: 'Is this lawn gathering the same night as the welcome dinner in that Wailea house?',
          a: 'No. Landing night stays on welcome dinners. The later lawn list is this page. Same villa, two notes, one coordinator. Do not merge them. Quotes are open. See [pricing](/pricing).',
        },
        {
          q: 'Which photos should a West Maui party note include?',
          a: `Cooktop, fridge, and the lawn or dining table you will use. A resort room with a minibar is declined. The wind backup belongs in the same note. Send them on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/south-maui', label: 'South Maui' },
        { path: '/west-maui', label: 'West Maui' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'brunch',
      name: 'Brunch',
      h1: 'Maui recovery brunch — the morning after the villa week.',
      title: 'Maui recovery brunch in the villa | myCHEF',
      description:
        'Recovery brunch in Wailea and West Maui villas. Morning after the week or the wedding night.',
      lede:
        'Coffee, fruit, grilled fish, the pool still.',
      photo: 'occBrunchMaui',
      body: [
        'Wedding-week brunch is a separate line on the wedding week page.',
      ],
      faqs: [
        {
          q: 'Same as wedding brunch?',
          a: 'Same kitchen.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/events', label: 'All occasions' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'anniversaries',
      name: 'Anniversaries',
      h1: 'Anniversary dinners on a Kauai estate — inquiry, both shores.',
      title: 'Anniversary dinners on a Kauai estate | myCHEF',
      description:
        'Anniversary tables in Princeville, Hanalei and Poʻipū. Inquiry stage. Two seats or a small list.',
      lede:
        'Two seats on wet North Shore stone, or a South Shore table. Inquiry. The road may decide the North.',
      photo: 'occAnniversaryKauai',
      body: [
        'Request availability with the shore.',
        'Request availability with the shore before an anniversary date is treated as held. In Hanalei the road has to be open, and a bridge closure moves the two seats rather than dropping them. In Poʻipū the drive from Līhuʻe is shorter, and rain still needs the indoor table named ahead. The cook sets the estate kitchen, plates, and clears. A cake you bring is welcome. The request shows the small table, 20% service and GET up to 4.712% each alone, and a 50% deposit only after a written yes. Gratuity is never required. A larger terrace is on [all occasions](/events). The card is [pricing](/pricing). Request availability on [the quote form](/quote). Extra hands are [staffing](/staffing).',
      ],
      faqs: [
        {
          q: 'Can I lock a Kauaʻi anniversary date today?',
          a: 'No. Request availability with the shore and the dates. An inquiry is not a confirmation. There is no instant-booking button.',
        },
        {
          q: 'Can it be just the two of us in Hanalei?',
          a: 'Yes, if a crew exists for that shore. The Hanalei bridge still applies. A closure moves the night. It does not forfeit it. Request availability with the road named.',
        },
        {
          q: 'What changes if those two seats are in Poʻipū instead?',
          a: 'The drive from Līhuʻe is shorter, and the bridge clause does not apply. Rain still needs an indoor table. It is not Hanalei with the name swapped. Request availability for the shore you will use.',
        },
        {
          q: 'What is on a Garden Isle anniversary table?',
          a: 'Two plated plates from the estate kitchen, or a very small family table. A dessert we plate, or a cake you bring. We do not print a bakery we do not use. A terrace full of guests belongs on the party page.',
        },
        {
          q: 'How do charges appear if that shore can be staffed?',
          a: 'The dinner, then a server only if you ask. See [staffing](/staffing). 20% service and GET up to 4.712% print alone. A 50% deposit waits for a written yes. Gratuity is never required. The card is [pricing](/pricing).',
        },
        {
          q: 'What do I send when I request availability for an anniversary?',
          a: `The shore, the dates, two seats or a small count, and the house. If you are north of the bridge, say so. Request availability on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/events/birthdays', label: 'Birthdays' },
      ],
    },
    {
      slug: 'corporate-events',
      name: 'Corporate events',
      h1: 'Kauai estate offsites — inquiry, not a convention play.',
      title: 'Kauai estate offsites — inquiry, not a convention | myCHEF',
      description:
        'Estate offsites in Princeville and Poʻipū. Inquiry stage. Not a MICE island.',
      lede:
        'A small estate table. Both shores. Inquiry. We do not pretend Kauaʻi is a convention product.',
      photo: 'occCorporateKauai',
      body: [
        'Inquiry stage. Published starting prices for dinners still apply when we cook.',
      ],
      faqs: [
        {
          q: 'Līhuʻe conference?',
          a: 'No. Estates and villas. Not a convention product.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/events/retreats', label: 'Retreats' },
      ],
    },
    {
      slug: 'villa-parties',
      name: 'Villa parties',
      h1: 'Estate parties on Kauai — Princeville and Poipu houses, inquiry.',
      title: 'Estate parties on Kauai — both shores, inquiry | myCHEF',
      description:
        'Staffed estate parties in Princeville, Hanalei and Poʻipū. About 10–75. Inquiry stage. Far-North inherits the bridge clause.',
      lede:
        'An estate dessert course looking into a valley, or a South Shore table. Inquiry. The road may decide the North.',
      photo: 'occVillaKauai',
      body: [
        'Inquiry stage.',
        'Request availability before you treat a Princeville or Poʻipū date as held. On an open road the cook sets the estate kitchen, sends the meal to the terrace or dining room you named, and clears before leaving. North of the Hanalei bridge, rain or a closure moves the night. It does not cancel it, and it does not relocate it south. Poʻipū is the shorter drive from Līhuʻe and still needs an indoor backup. The note shows food, any server hours, 20% service and GET up to 4.712% each alone, and a 50% deposit only after a written yes. Gratuity is never required. See [all occasions](/events) and [pricing](/pricing). Request availability on [the quote form](/quote). Extra hands are [staffing](/staffing).',
      ],
      faqs: [
        {
          q: 'Can I reserve a Kauaʻi estate-party date today?',
          a: 'No. Request availability with the shore and the dates. A named estate is not a confirmed crew. There is no instant-booking button.',
        },
        {
          q: 'Can children be on a north-shore terrace for the party?',
          a: 'Yes, if the house allows it. Weather still applies on the north, and a Hanalei bridge closure moves the whole night. The south shore does not inherit that clause. Say which shore you mean.',
        },
        {
          q: 'How does a Princeville party run when the road is actually open?',
          a: 'The cook sets the estate kitchen, serves the list you named, and clears. A covered backup is written before anyone travels. Request availability for that shore only. We do not quietly move the night to Poʻipū.',
        },
        {
          q: 'What is different about holding the party in Poʻipū the same week?',
          a: 'It is the shorter drive from Līhuʻe, and it is a separate request. Rain still needs an indoor plan. It is not the north shore with the place swapped. One coordinator can hold both notes. They are not one drive.',
        },
        {
          q: 'How do charges show if a crew can take the estate party?',
          a: 'Food, then server hours if you asked. Open [staffing](/staffing). A bartender is quoted in writing. 20% service and GET up to 4.712% print alone. A 50% deposit waits for a written yes. Gratuity is never required. The card is [pricing](/pricing).',
        },
        {
          q: 'What do I put in a request for a Garden Isle party?',
          a: `Shore, dates, seats, the house, and whether the table is a terrace or a dining room. Request availability on [the quote form](/quote). This page is not a booking. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/south-shore', label: 'South Shore' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'brunch',
      name: 'Brunch',
      h1: 'Kauai estate brunch — both shores, inquiry.',
      title: 'Kauai estate brunch — both shores, inquiry | myCHEF',
      description:
        'Estate brunch in Poʻipū and Princeville. Inquiry stage. Not a restaurant brunch.',
      lede:
        'Pool morning on the South, or misted North coffee. Inquiry.',
      photo: 'occBrunchKauai',
      body: [
        'Wedding-week brunch is on the wedding week page.',
        'Far-North brunch still inherits the Hanalei bridge notes. Inquiry list with the shore.',
      ],
      faqs: [
        {
          q: 'Same as wedding brunch?',
          a: 'Same kitchen. Wedding brunch is a line on the wedding week page.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/poipu', label: 'Poʻipū' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'anniversaries',
      name: 'Anniversaries',
      h1: 'Anniversary dinners on a Kohala lava terrace — west side first.',
      title: 'Anniversary dinners on a Kohala lava terrace | myCHEF',
      description:
        'Anniversary tables on Kona–Kohala terraces. Inquiry stage. Two seats or a small list. East side is a different day.',
      lede:
        'Two plates on lava, Mauna Kea faint. Not a Hilo add-on.',
      photo: 'occAnniversaryBigisland',
      body: [
        'West-side: Kona–Kohala corridor.',
        'Join the inquiry list for two plates on a Kona or Kohala terrace, or a small table in the great room. The cook plates before sunset. You hand over the cooktop and the seats. Wind that shuts the lava terrace moves dinner into that same great room, written before you accept. We clear when the courses are done. Hilo is a dedicated day and is not added onto this night. The inquiry shows the small table, 20% service and Hawaiʻi GET up to 4.712% each alone, and a 50% deposit after a written yes. Gratuity is never required. A full terrace belongs on [all occasions](/events). The card is [pricing](/pricing). Join the inquiry list on [the quote form](/quote). See [staffing](/staffing).',
      ],
      faqs: [
        {
          q: 'Can a Hilo anniversary be added onto a Waikoloa dinner?',
          a: 'No. Hilo is a dedicated day, never implied. Join the inquiry list for the west-side table, or send the east side alone. They are not one drive across the saddle.',
        },
        {
          q: 'Can a Waikoloa anniversary be just the two of us?',
          a: 'Yes. Two plates on the terrace, or a very small table in the great room. This island is at inquiry. Join the inquiry list. A published band is not a crew for that night.',
        },
        {
          q: 'What is served on a Kohala terrace for two?',
          a: 'Plated courses from the villa kitchen. If the wind comes up, the backup is the great room, written before you accept. A cake you bring is fine. We do not invent a bakery name. A larger terrace list is a villa party.',
        },
        {
          q: 'How does the drive from Kona town to Kohala change a two-seat night?',
          a: 'The cook still needs time on site before the first plate. Kona town and a Kohala resort share the west side and do not share a driveway. We do not come over from Hilo the same afternoon.',
        },
        {
          q: 'What does the inquiry show for charges on a small table?',
          a: 'The dinner, then a server only if you want one. See [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows a written yes. Gratuity is never required. See [pricing](/pricing).',
        },
        {
          q: 'How do I join the inquiry list for a Kona anniversary?',
          a: `West-side address, dates, two seats or the small count, and terrace or great room. Flag Ironman if the roads will be tight. Join the inquiry list on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/events/birthdays', label: 'Birthdays' },
      ],
    },
    {
      slug: 'corporate-events',
      name: 'Corporate events',
      h1: 'West-side villa offsites on Hawaiʻi Island — not a Hilo add-on.',
      title: 'West-side villa offsites on Hawaiʻi Island | myCHEF',
      description:
        'Villa offsites in Kona and Kohala. Inquiry stage. East side is a different day.',
      lede:
        'A small west-side table, hard sun. Not the whole island. Ironman weeks compress town.',
      photo: 'occCorporateBigisland',
      body: [
        'Inquiry stage. We will not pretend a Waikoloa offsite covers Hilo.',
      ],
      faqs: [
        {
          q: 'Can you add Volcano onto a Waikoloa week?',
          a: 'As its own dedicated team day, quoted. Not as an unpaid errand.',
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
        { path: '/kohala-corridor', label: 'West-side radius' },
      ],
    },
    {
      slug: 'villa-parties',
      name: 'Villa parties',
      h1: 'Villa parties on the Kohala Coast — lava terrace, west side.',
      title: 'Villa parties on the Kohala Coast | myCHEF',
      description:
        'Staffed villa parties on Kona–Kohala terraces, about 10–75 guests. Inquiry stage. East side is a different day.',
      lede:
        'Eight to forty on lava, plated kanpachi, Mauna Kea faint. Not a Hilo add-on. Hard sun is real.',
      photo: 'occVillaBigisland',
      body: [
        'West-side radius: Kona–Kohala corridor.',
        'Join the inquiry list with a Kona, Waikoloa, or Kohala address. The cook sets the kitchen before anyone sits. You hand over the cooktop, the fridge, and either the lava terrace or the great room. We cook, serve, and clear. Wind that shuts the terrace moves the party indoors in the same house, written in the inquiry before a yes. Hilo is a dedicated day and is never implied here. Flag Ironman weeks. The note shows food, any server hours, 20% service and Hawaiʻi GET up to 4.712% each alone, and a 50% deposit after a written yes. Gratuity is never required. See [all occasions](/events) and [pricing](/pricing). Join the inquiry list on [the quote form](/quote). See [staffing](/staffing).',
      ],
      faqs: [
        {
          q: 'Can a Hilo party sit on this west-side page?',
          a: 'No. Hilo is a dedicated day, never implied by a Kona or Kohala terrace. Join the inquiry list for the west side, or send the east side as its own day. We will not blend them.',
        },
        {
          q: 'Can children eat on a lava terrace in the middle of the day?',
          a: 'Shade and timing belong to the house. We cook the kitchen you have. Hard sun is real. If the terrace is too exposed, name the great room in the inquiry. We will not guess at noon.',
        },
        {
          q: 'How does a Waikoloa party run from setup through the clean-down?',
          a: 'The cook is on site with time to set the kitchen before service. Platters or plated courses go to the terrace or the great room you named. We clear before we leave. A Waikoloa night is not stacked onto a Kona clock.',
        },
        {
          q: 'If the wind shuts that terrace, where does the party move?',
          a: 'Into the great room, or to a covered edge of the same house, written in the inquiry before you accept. We do not add a tent after a yes. If those seats cannot hold the list, the reply says so.',
        },
        {
          q: 'What does a Kohala party show for charges once a crew can take it?',
          a: 'Food for the list, then server and sous-chef hours if you need a floor. See [staffing](/staffing). A bartender is quoted in writing. 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows a written yes. Gratuity is never required. See [pricing](/pricing).',
        },
        {
          q: 'How do I join the inquiry list for a Kona villa party?',
          a: `West-side address, dates, seats, and terrace or great room. Flag Ironman if the week touches the race. Join the inquiry list on [the quote form](/quote). There is no instant-booking button. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/waikoloa', label: 'Waikoloa' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'brunch',
      name: 'Brunch',
      h1: 'West-side brunch on Hawaiʻi Island — Kona and Kohala mornings.',
      title: 'West-side brunch on Hawaiʻi Island | myCHEF',
      description:
        'West-side brunch in Kona and Kohala villas. Inquiry stage. East side is a different day.',
      lede:
        'Breakfast fish, fruit, hard sun. Coffee cherries on a side board if the house has them — origin labeled when the law requires it.',
      photo: 'occBrunchBigisland',
      body: [
        'East-side brunch is quote-only dedicated staffing.',
      ],
      faqs: [
        {
          q: 'Same as wedding brunch?',
          a: 'Same kitchen. Wedding brunch is a line on the weddings page.',
        },
        {
          q: 'Kona coffee tasting with brunch?',
          a: 'Coffee may be on the crust.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Weddings' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
  ],
};
