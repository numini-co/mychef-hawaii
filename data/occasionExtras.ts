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
        'Anniversary tables in Kahala dining rooms and Ko Olina villas, two seats or a small list. Request a written quote. This is not a restaurant buyout.',
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
        'This page is one night in the house for the whole team. People can stand with plates or sit. Say which. The cook sets the Kahala or Ko Olina kitchen, sends the food, and clears before leaving. A town tower still needs its freight window first. Rain moves an outdoor setup indoors or onto a covered lānai, written before you accept. Server and sous-chef hours are separate from the food. A bartender is quoted in writing. See [staffing](/staffing). The quote shows 20% service and Hawaiʻi GET up to 4.712% on their own and a 50% deposit after you accept. Gratuity is never required. Days of meals are [retreats](/events/retreats). Bands are on [pricing](/pricing). Send the building on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Is a Kahala company night standing plates or a seated table?',
          a: 'Either. Standing plates suit a room where people move. A seated table suits the dining room. Pick one on the quote. This is the whole team, not a single board sitting. Quotes are open.',
        },
        {
          q: 'Who else is in a Ko Olina team night besides the chef?',
          a: 'A server and a sous chef if the floor needs them, with hours separate from the food. See [staffing](/staffing). A bartender is quoted in writing, with no hourly figure. If no one is free, the quote says so before a deposit.',
        },
        {
          q: 'Does a standing team night in a tower end sooner than a seated one?',
          a: 'The freight window still closes the night. Standing plates can move in a shorter pass. A seated table needs the dining room clear before that slot ends. Ko Olina is not on that clock, because the house is the venue. The quote states which.',
        },
        {
          q: 'Can a standing Gold Coast team night stay on the lawn once rain starts?',
          a: 'No. The indoor room or covered lānai is chosen before you accept. We do not add a tent after guests are outside. If those seats cannot hold people who planned to stand, the quote says so. See [all occasions](/events).',
        },
        {
          q: 'What does the quote for a Ko Olina team night list besides food?',
          a: 'Server and sous-chef hours if you asked, and a bartender only as a written figure. 20% service and Hawaiʻi GET up to 4.712% are separate. A 50% deposit follows acceptance. Gratuity is never required. See [pricing](/pricing).',
        },
        {
          q: 'What should I send for a house night that is the whole team, not one board table?',
          a: `The building, the date, the headcount, standing or seated, and dietary limits. Quotes are open on [the quote form](/quote). One leadership table is [executive dinners](/corporate-catering). Desk: ${desk}.`,
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
        'Staffed villa parties in Ko Olina houses and Kahala dining rooms. The house is the venue. Request a written quote. Not a restaurant buyout.',
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
        'A villa-week brunch starts in the morning, after any Honolulu freight window. Eggs and last night’s fish are cooked then. Fruit and a pot of coffee are set out. We finish before the afternoon so the kitchen is yours again. Rain keeps a Gold Coast table in the dining room or on a covered lānai, written on the quote before you accept, with 20% service and Hawaiʻi GET up to 4.712% on their own and a 50% deposit after you accept. Gratuity is never required. The wedding-week morning lives on [weddings](/weddings). Other nights are on [all occasions](/events). Bands are on [pricing](/pricing). Send the house on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'How is a villa-week brunch different from the wedding-week brunch on Oʻahu?',
          a: 'Same kitchen. The wedding brunch is its own note on [weddings](/weddings). This page is the morning after a villa week, vows or not. Do not blend the two into one total. Quotes are open.',
        },
        {
          q: 'What is cooked that morning in a Kahala house, and what is already set out?',
          a: 'Eggs and fish are cooked then. Fruit and coffee are set out. We do not run a restaurant carte. Say dietary limits on the quote so the shop matches the house.',
        },
        {
          q: 'What time do you arrive for a Ko Olina brunch, and when do you leave?',
          a: 'In the morning, with time to cook before people sit. A town tower still waits on its freight window. We clear and leave before the afternoon. The quote states that clock.',
        },
        {
          q: 'If the Gold Coast is wet, is brunch still outside?',
          a: 'No. It moves to the dining room or a covered lānai, written before you accept. We do not add a tent for a morning. See [all occasions](/events).',
        },
        {
          q: 'What does an Oʻahu brunch quote include besides the food?',
          a: 'The morning, then a server only if you asked. See [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% are separate. A 50% deposit follows acceptance. Gratuity is never required. See [pricing](/pricing).',
        },
        {
          q: 'What should I send to quote a Honolulu recovery morning?',
          a: `The house, the morning, the seats, and dietary limits. Quotes are open on [the quote form](/quote). If this morning belongs to a wedding week, start on [weddings](/weddings). Desk: ${desk}.`,
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
        'This page is one night in the rental for the whole team. The lawn can hold standing plates, or the dining room can seat them. Say which. The cook works the kitchen you hand over, serves, and clears. Saturday traffic toward Kapalua is already in the call time. Trade wind moves the night under the lanai roof, written before you accept. Server and sous-chef hours sit apart from the food. A lanai bartender is quoted in writing. See [staffing](/staffing). The quote lists 20% service and GET up to 4.712% each alone and a 50% deposit after you accept. Gratuity is never required. Days of cooking are [retreats](/events/retreats). Numbers are on [pricing](/pricing). Name the shore on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Will you move a Maui team night into a hotel conference room?',
          a: 'No. Residences and villas. This page is one night for the group in the house, not a banquet floor. If the listing has no cooktop, we decline. Quotes are open.',
        },
        {
          q: 'Should a Wailea team night be standing plates on the lawn or a seated table?',
          a: 'Standing plates suit the lawn. A seated table suits the dining room. Pick one. The wind backup is written with that choice. This is the wider group, not a two-person supper.',
        },
        {
          q: 'Who stands with the chef at a Kapalua night for the whole team?',
          a: 'A server and a sous chef if you ask, hours apart from the food. See [staffing](/staffing). A lanai bartender is quoted in writing, with no hourly figure. 20% service and GET up to 4.712% follow. Gratuity is never required.',
        },
        {
          q: 'How does Saturday traffic change the start of a West Maui team night?',
          a: 'The call time includes the drive up from the south. We do not discover it on the evening. The cook is in the kitchen before guests reach the lawn. The quote states that clock.',
        },
        {
          q: 'If the trade winds close the lawn, do we still keep the same team night?',
          a: 'Yes. The night stays in the house, under the lanai or in the dining room, written before you accept. We do not switch you into a ballroom. See [all occasions](/events).',
        },
        {
          q: 'Which shore details does a West Maui team night need that a Wailea night does not?',
          a: `The Saturday drive, and whether the lawn or the dining room is the room. Headcount and dietary limits still belong in the note. Quotes are open on [the quote form](/quote). One leadership dinner is [executive dinners](/corporate-catering). Desk: ${desk}.`,
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
        'Staffed villa parties in Wailea, Kāʻanapali, Kapalua, and Kīhei. Choose lawn or dining room before you accept. Quotes are open for a written total.',
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
        'A villa brunch on Maui starts in the morning, with the Saturday drive already in the call if the house is in Kapalua. Grilled fish is cooked then. Fruit and coffee are set on the counter. We finish before the afternoon so the pool kitchen is free. Trade wind that closes an open lanai moves the table under cover or into the dining room, written before you accept. The quote is that morning, then 20% service and GET up to 4.712% each alone, and a 50% deposit after you accept. Gratuity is never required. The wedding-week morning is [wedding week](/weddings). Other nights are on [all occasions](/events). Numbers are on [pricing](/pricing). Name the shore on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Where does the morning after vows live if this page is only the villa brunch?',
          a: 'On [wedding week](/weddings), as its own note. This page is the morning after a villa stay that is not that week. Same kitchen, separate notes. Quotes are open. Do not fold them together.',
        },
        {
          q: 'What is grilled fresh at a Wailea brunch, and what is simply set out?',
          a: 'Fish is grilled that morning. Fruit and coffee are set out. We do not run a standing restaurant carte. Put dietary limits on the quote before the shop.',
        },
        {
          q: 'How early is a Kapalua brunch if Saturday traffic is already on the road?',
          a: 'Early enough to cook before people sit, with the drive from the south in the call time. We clear before the afternoon. The quote states that clock. A minibar room is declined.',
        },
        {
          q: 'If the trade wind closes the lanai, where is West Maui brunch served?',
          a: 'Under the roof or in the dining room, written before you accept. We do not invent a tent for a morning. A south-shore breeze is a different note. See [all occasions](/events).',
        },
        {
          q: 'Are server hours part of a Kapalua brunch, or only the food?',
          a: 'Food first. A server only if you ask, and those hours are separate. See [staffing](/staffing). 20% service and GET up to 4.712% follow on their own. A 50% deposit comes after you accept. Gratuity is never required. The drive from Wailea is in the call time. See [pricing](/pricing).',
        },
        {
          q: 'Which facts does a Kīhei brunch need before it is accepted?',
          a: `The villa, the shore, the morning, the seats, and dietary limits. Quotes are open on [the quote form](/quote). A wedding-week morning belongs on [wedding week](/weddings). Desk: ${desk}.`,
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
        'Estate offsites in Princeville and Poʻipū. Inquiry. Not a MICE island.',
      lede:
        'A small estate table. Both shores. Inquiry. We do not pretend Kauaʻi is a convention product.',
      photo: 'occCorporateKauai',
      body: [
        'Inquiry stage. Published starting prices for dinners still apply when we cook.',
        'Request availability for one night in the estate, for the whole team. Standing plates on a terrace, or seats in the dining room: say which. The cook sets the kitchen, serves, and clears. Rain on the north moves the night under a covered lanai when the road is open. A Hanalei bridge closure moves that night. It does not become Poʻipū. Server and sous-chef hours are separate from the menu. A bartender is quoted in writing. See [staffing](/staffing). The note shows 20% service and GET up to 4.712% each alone, and a 50% deposit only after a written yes. Gratuity is never required. Full-board days are [retreats](/events/retreats). The card is [pricing](/pricing). Request availability on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Is a Līhuʻe conference the right room for this estate team night?',
          a: 'No. Estates and villas, not a convention product. Request availability with the shore and a house kitchen. A meeting floor is declined. There is no instant-booking button.',
        },
        {
          q: 'Can a Princeville team night be standing plates instead of a seated table?',
          a: 'Yes. Say terrace plates or dining-room seats. Weather on the north still applies. A covered backup is written before anyone travels. Request availability for that shore only.',
        },
        {
          q: 'How do I ask for people beyond the chef at a Poʻipū team night?',
          a: 'Ask for server hours and sous-chef hours apart from the food. A bartender is quoted in writing, with no hourly figure. Open [staffing](/staffing). Request availability. A printed page is not a crew.',
        },
        {
          q: 'What does rain do to a north-shore team night when the bridge is open?',
          a: 'The night moves under a covered lanai or indoors, written in the request. A closure of the Hanalei bridge moves the whole night. It does not hand the group to the south shore. See [all occasions](/events).',
        },
        {
          q: 'If a crew can take the estate night, what charges should I expect?',
          a: 'Food for the group, then the hours you asked for. 20% service and GET up to 4.712% are separate. A 50% deposit waits for a written yes. Gratuity is never required. The card is [pricing](/pricing).',
        },
        {
          q: 'What do I put in an availability request for a Garden Isle team night?',
          a: `Shore, date, seats, the house, standing or seated, and dietary limits. Request availability on [the quote form](/quote). One executive table is [executive dinners](/corporate-catering). Desk: ${desk}.`,
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
        'Far-North brunch still inherits the Hanalei bridge notes. Request availability with the shore.',
        'Request availability before a brunch morning is treated as held. On the south, the cook sets a Poʻipū kitchen, cooks eggs and fish then, and sets fruit and coffee out. We finish before the afternoon. Rain needs the indoor table named ahead. On the north, mist and a covered lanai are the wet plan when the road is open. A Hanalei bridge closure moves the morning. It does not send it south. The note shows the morning, any server hours, 20% service and GET up to 4.712% each alone, and a 50% deposit only after a written yes. Gratuity is never required. The wedding-week morning is [wedding week](/weddings). Request availability on [the quote form](/quote). The card is [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Is a Garden Isle villa brunch the same morning as the wedding-week brunch?',
          a: 'Same kitchen. Wedding brunch is its own note on [wedding week](/weddings). This page is a house morning that is not that week. Request availability. Do not blend them.',
        },
        {
          q: 'What is cooked at a Poʻipū pool brunch, and what is set on the counter?',
          a: 'Eggs and fish are cooked that morning. Fruit and coffee are set out. We finish before the afternoon. Request availability with dietary limits so the shop matches the house.',
        },
        {
          q: 'Can a Princeville brunch still happen if the morning is wet?',
          a: 'Yes, under a covered lanai or indoors, when the road is open. That backup is written before anyone travels. A Hanalei bridge closure moves the morning. It does not relocate it to Poʻipū.',
        },
        {
          q: 'Does a far-north brunch inherit the bridge even if the menu is only coffee and eggs?',
          a: 'Yes, if the house is past the bridge. The menu does not cancel the road. Request availability for that shore only. See [all occasions](/events). The south shore does not inherit the clause.',
        },
        {
          q: 'If a crew can take the morning, how are brunch charges written?',
          a: 'The food, then server hours only if you asked. See [staffing](/staffing). 20% service and GET up to 4.712% are separate. A 50% deposit waits for a written yes. Gratuity is never required. The card is [pricing](/pricing).',
        },
        {
          q: 'What do I send when I request availability for an estate brunch?',
          a: `The shore, the morning, the seats, the house, and dietary limits. Request availability on [the quote form](/quote). A wedding-week morning stays on [wedding week](/weddings). Desk: ${desk}.`,
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
        'Join the inquiry list for an anniversary table on the Kona–Kohala west side. Two seats or a small list. Hilo is a separate dedicated east-side day.',
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
        'Join the inquiry list for one night in a Kona or Kohala house, for the whole team. Standing plates on the terrace, or seats in the great room: say which. The cook sets the kitchen, serves, and clears. Wind moves the night indoors in that same house, written before a yes. Hilo is a dedicated day and is never implied. Server and sous-chef hours are separate asks. A bartender is quoted in writing. See [staffing](/staffing). The inquiry shows 20% service and Hawaiʻi GET up to 4.712% each alone and a 50% deposit after a written yes. Gratuity is never required. Full-board days are [retreats](/events/retreats). The card is [pricing](/pricing). Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'What does the evening look like for a whole team in a Waikoloa house?',
          a: 'One night. The cook sets the kitchen, food goes to the terrace or the great room you named, and we clear. It is not breakfast through dinner. Join the inquiry list. A hotel room with a minibar is declined.',
        },
        {
          q: 'Can the Kohala team stand with plates, or should everyone sit?',
          a: 'Say terrace plates or great-room seats. Hard sun and wind decide whether the terrace holds. The backup is written before a yes. Join the inquiry list. We will not guess the room.',
        },
        {
          q: 'How do I ask for servers at a Kona team night while we are still on the inquiry list?',
          a: 'As a separate ask: server, sous chef, and a bartender only if you want one quoted in writing. See [staffing](/staffing). There is no hourly bartender figure. A published page is not a crew.',
        },
        {
          q: 'If the wind shuts a lava terrace, where does the team night move?',
          a: 'Into the great room of the same house, written in the inquiry before a yes. We do not add a tent after that yes. If those seats cannot hold the group, the reply says so. See [all occasions](/events).',
        },
        {
          q: 'Can the team stop in Hilo for lunch on the way to a Waikoloa night?',
          a: 'No. Hilo is a dedicated east-side day, never a stop on the way. Join the inquiry list for the west-side night, or send Hilo alone. We will not imply both in one drive.',
        },
        {
          q: 'What belongs on the inquiry when the whole team eats in Kona or Kohala for one night?',
          a: `The address, the date, headcount, standing or seated, and dietary limits. Flag Ironman if town will be tight. Join the inquiry list on [the quote form](/quote). There is no instant-booking button. Desk: ${desk}.`,
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
        'Join the inquiry list for a villa party on a Kona–Kohala terrace or in the great room. Hilo is a separate dedicated east-side day, not an add-on.',
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
        'An east-side brunch is its own dedicated day. It is not implied by a Kona morning.',
        'Join the inquiry list for a west-side morning in Kona or along the Kohala Coast. Fish is cooked then. Fruit is set out. Coffee may be in the cup or on the crust, and a farm name is printed only when the lot is documented. We finish before the afternoon heat. Wind moves the table into the great room, written before a yes. Hilo is a dedicated day and is never implied. The inquiry shows 20% service and Hawaiʻi GET up to 4.712% each alone, and a 50% deposit after a written yes. Gratuity is never required. See [pricing](/pricing). Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'How is a west-side villa brunch different from the brunch on a wedding week?',
          a: 'Same kitchen. Wedding brunch is its own note on [weddings](/weddings). This page is a Kona or Kohala morning that is not that week. Join the inquiry list. Do not blend them.',
        },
        {
          q: 'Can brunch include a Kona coffee tasting, or is coffee just with the food?',
          a: 'Coffee may be on the crust or in the cup. We print a farm name only when the lot is documented. Otherwise it is coffee. We cook the morning. We do not run a farm visit. Join the inquiry list.',
        },
        {
          q: 'What is cooked fresh at a Waikoloa brunch, and what is set out?',
          a: 'Fish is cooked that morning. Fruit is set out. We finish before the hard afternoon sun. Say terrace or great room, and dietary limits, when you join the inquiry list.',
        },
        {
          q: 'Does a Hilo morning belong on this west-side brunch page?',
          a: 'No. Hilo is a dedicated east-side day, never implied by Kona or Kohala. Send it as its own inquiry. This page is the west-side morning only. See [all occasions](/events).',
        },
        {
          q: 'If wind shuts a Kohala terrace, where is brunch served?',
          a: 'In the great room of the same house, written in the inquiry before a yes. We do not add a tent for a morning. The open terrace is not assumed.',
        },
        {
          q: 'How do I join the inquiry list for a Kona brunch?',
          a: `West-side address, the morning, seats, and dietary limits. Join the inquiry list on [the quote form](/quote). 20% service and Hawaiʻi GET up to 4.712% are separate. A 50% deposit follows a written yes. Gratuity is never required. See [pricing](/pricing). Desk: ${desk}.`,
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
