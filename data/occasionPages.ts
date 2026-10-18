import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import { OCCASION_EXTRA_SLUGS, occasionExtras } from './occasionExtras';
import type { UniqueCell } from './uniqueCells';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

/**
 * Occasion cells under /events/:slug — not catering clones.
 * Do not put money catering keywords in titles.
 */

const desk = `${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}`;

export const OCCASION_SLUGS = ['birthdays', 'welcome-dinners', 'retreats', ...OCCASION_EXTRA_SLUGS] as const;
export type OccasionSlug = (typeof OCCASION_SLUGS)[number];

export interface OccasionPage extends UniqueCell {
  slug: OccasionSlug;
}

export const occasionPages: Record<IslandId, OccasionPage[]> = {
  oahu: [
    {
      slug: 'birthdays',
      name: 'Birthdays',
      h1: 'Birthday dinners in an Oahu house — not a restaurant buyout.',
      title: 'Birthday dinners in an Oahu house | myCHEF',
      description:
        'Staffed birthday tables in Kahala dining rooms and Ko Olina villas. About 10–75.',
      lede:
        'The house, a simple dessert, the guest list you actually have. Not a buyout downtown.',
      photo: 'occBirthdayOahu',
      body: [
        'Kahala dining rooms and Ko Olina villas are the usual rooms. Anniversaries run the same kitchen.',
        'A Kahala birthday waits on the freight window, then the cook sets the dining-room kitchen and plates. The cake you brought, or a dessert we plate, comes at the moment you set. Children can eat earlier from that same kitchen if you say so. We clear before we leave. Ko Olina can run later because the house is the venue. Rain moves a lawn indoors or onto a covered lānai. That backup is on the quote, with 20% service and Hawaiʻi GET up to 4.712% on their own and a 50% deposit after you accept. Gratuity is never required. Other nights are on [all occasions](/events). Bands are on [pricing](/pricing). Send the house on [the quote form](/quote). See [staffing](/staffing).',
      ],
      faqs: [
        {
          q: 'Can we bring a bakery cake to a Kahala birthday, or will you plate a dessert?',
          a: 'Either. We plate a dessert course, or you bring a bakery cake and we cut it. We do not print a bakery brand we do not use. Say which before the shop so the pass is planned. Quotes are open.',
        },
        {
          q: 'Can children eat earlier than the adult table in a Ko Olina villa?',
          a: 'Yes, if you name their hour. A simpler plate can go out first from the same kitchen, then the adult courses. The house still needs a stove. A hotel room is declined.',
        },
        {
          q: 'When does the cook arrive for a Honolulu birthday, and when is the kitchen clear?',
          a: 'After the freight window in a tower. The cook sets the kitchen, serves, and clears before that slot ends. Ko Olina can start earlier because the house is the venue. The quote states the window.',
        },
        {
          q: 'If rain hits a Gold Coast lawn, where does the birthday sit?',
          a: 'Indoors or on a covered lānai, written before you accept. We do not add a tent after the deposit. If those chairs cannot hold the list, we say so first. See [all occasions](/events).',
        },
        {
          q: 'What sits on a Kahala birthday quote besides the food?',
          a: 'Server hours only if you asked, separate from the dinner. See [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% are separate. A 50% deposit follows acceptance. Gratuity is never required. Bands are on [pricing](/pricing).',
        },
        {
          q: 'What should I send for a Ko Olina birthday that is not a two-seat anniversary?',
          a: `The house, the date, the headcount, whether children eat early, and cake or plated dessert. Quotes are open on [the quote form](/quote). A year-mark for two belongs on the anniversary page. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/events', label: 'All occasions' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/kahala', label: 'Kahala' },
      ],
    },
    {
      slug: 'welcome-dinners',
      name: 'Welcome dinners',
      h1: 'Oahu welcome dinners — first night of the villa week.',
      title: 'Oahu welcome dinners — first villa night | myCHEF',
      description:
        'Arrival-night grazing or family-style in Ko Olina, Kahala and Kailua.',
      lede:
        'Bags in the hall. The room still landing. Family-style fish, not a seated reception. The week itself is a different booking.',
      photo: 'occWelcomeOahu',
      body: [
        'Ko Olina short-stay weeks often start here. Kahala houses too.',
        'Legal short-stay rules for those Ko Olina villas are written on the short-stay page.',
        'The cook is in a Ko Olina villa or a Kahala house about three hours before food is wanted. A Honolulu tower waits on its freight window first. You hand over the cooktop, the fridge, and a clear counter. Family-style platters or a grazing board go out while bags are still in the hall. We serve and clear. Rain moves an outdoor setup into the dining room or onto a covered lānai, written on the quote with 20% service and Hawaiʻi GET up to 4.712% on their own and a 50% deposit after you accept. Gratuity is never required. See [all occasions](/events) and [pricing](/pricing). Send the landing time on [the quote form](/quote). A larger room is [Oahu catering](/catering).',
      ],
      faqs: [
        {
          q: 'Can the first Oʻahu dinner happen on the day the flight lands?',
          a: 'Yes, if we have the corridor and the headcount. We still arrive about three hours before service. A tower needs its freight window before that clock starts. Send the landing time on [the quote form](/quote).',
        },
        {
          q: 'Is an Oʻahu welcome dinner grazing, family-style, or a plated sitting?',
          a: 'Usually family-style or a grazing board while the room is still landing. Plated courses are a seated dinner, not this first night. Say which you want. The rest of the week is a different booking.',
        },
        {
          q: 'Where in a Ko Olina villa does the welcome food actually get served?',
          a: 'From the villa kitchen to the table or the lānai. Bags can stay in the hall. We clear before we leave. A hotel suite without a stove is declined. Legal short-stay rules stay on the short-stay page.',
        },
        {
          q: 'If rain hits a Kahala lawn on night one, where do we sit?',
          a: 'In the dining room or on a covered lānai. That backup is a sentence on the quote before you accept. We do not add a tent after the deposit. If the indoor chairs are short, we say so first.',
        },
        {
          q: 'How is this arrival written when later nights in the week are still open?',
          a: 'One line for this night. A later birthday is a second note, with one coordinator. See [pricing](/pricing). 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows acceptance. Gratuity is never required.',
        },
        {
          q: 'What do you need from us to quote a Honolulu landing night?',
          a: `The house, the landing time, the seats, and dietary limits. Quotes are open. If this is not the first night, start from [all occasions](/events). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/short-stay', label: 'Short-stay villas' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'retreats',
      name: 'Retreats',
      h1: 'Oahu retreat cooking — full-board days in houses.',
      title: 'Oahu retreat cooking — full-board days in houses | myCHEF',
      description:
        'Full-board chef days for Oahu villa offsites. Not HCC citywides. Dietary designed in. Ko Olina and Gold Coast houses.',
      lede:
        'Breakfast through dinner in the house. Laptops away from the pass. Not a convention-centre play while citywides are closed.',
      photo: 'occRetreatOahu',
      body: [
        'HCC citywides are closed through 2027 and are not our product. A house offsite of 10–75 is. Dietary is table stakes, claimed only when true.',
        'A retreat day in Kahala or Ko Olina is breakfast, lunch, and dinner from the house kitchen, not one board sitting. You hand over the cooktop for those days. Quiet hours are yours. We cook around them. A signature dinner inside the week includes the groceries. Stay Chef days are the daily chef fee plus groceries at cost with receipts. See [vacation chef](/vacation-chef) and [pricing](/pricing). Rain moves lunch indoors or onto a covered lānai, written before you accept, with 20% service and Hawaiʻi GET up to 4.712% on their own and a 50% deposit after you accept. Gratuity is never required. Send the dates on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can a production crew eat breakfast through dinner in a Kahala house?',
          a: 'Call-time breakfasts in a house, yes, and lunch and dinner if the group stays. A stage downtown, no. This is full-board days, not one board dinner. Quotes are open.',
        },
        {
          q: 'Does a retreat that overlaps Sony Open week need an earlier ask?',
          a: 'Yes, as calendar awareness, not an affiliation. Town hospitality is tighter that week. Ask early on [the quote form](/quote). We do not print a tournament logo or claim a partnership.',
        },
        {
          q: 'How are groceries handled on a multi-day Ko Olina retreat?',
          a: 'A signature dinner includes grocery procurement inside the per-guest band. Stay Chef days are the daily chef fee plus groceries at cost, with receipts. We do not put signature dinners on a groceries-at-cost label. The card is [pricing](/pricing).',
        },
        {
          q: 'Can the kitchen stay quiet between meals in a Gold Coast house?',
          a: 'Yes. Tell us the hours the pass should be still. We cook breakfast, lunch, and dinner around those hours. House rules stay yours. A hotel room without a stove is declined.',
        },
        {
          q: 'If rain closes the lawn at lunch, where does a Ko Olina retreat eat?',
          a: 'Indoors or on a covered lānai, written before you accept. We do not add a tent mid-week. The dinner that night uses the same backup. See [all occasions](/events). Quotes are open.',
        },
        {
          q: 'What should a Honolulu retreat quote include across the days?',
          a: `The house, the dates, meals each day, dietary limits, and quiet hours. Server hours are separate if you ask. See [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% are separate. A 50% deposit follows acceptance. Gratuity is never required. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/conventions', label: 'Not MICE' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    ...occasionExtras.oahu,
  ],
  maui: [
    {
      slug: 'birthdays',
      name: 'Birthdays',
      h1: 'Birthday gatherings on a Maui lawn — Wailea and West Maui houses.',
      title: 'Birthday gatherings on a Maui lawn | myCHEF',
      description:
        'Staffed birthday tables in Wailea, Kīhei and West Maui. About 10–75.',
      lede:
        'Grass, identical plates, a simple dessert. Not a restaurant buyout.',
      photo: 'occBirthdayMaui',
      body: [
        'Wet-weather backup is written for lawns. Kīhei family houses and Wailea residences.',
        'A Wailea birthday starts in the rental kitchen before anyone reaches the grass. The cake you brought, or a dessert we plate, comes at the moment you set. Children in a Kīhei house can eat earlier if you name the hour. We clear before we leave. Trade wind on a West Maui lawn moves the table under the lanai roof, and Saturday traffic from the south is already in the call time. The quote names that backup, then 20% service and Hawaiʻi GET up to 4.712% each alone, and a 50% deposit after you accept. Gratuity is never required. Other nights are on [all occasions](/events). Numbers are on [pricing](/pricing). Name the shore on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can the birthday be in a West Maui house rather than Wailea?',
          a: 'Yes. West Maui houses with kitchens. We do not sell a Lahaina dining brand. Name the shore. Saturday traffic is planned into arrival, not found on the invoice. Quotes are open on [the quote form](/quote).',
        },
        {
          q: 'Will you plate dessert above Wailea, or can the family bring the cake?',
          a: 'We plate a dessert, or we cut a cake you bring. We do not invent a bakery name. Say which so the pass is ready before blue hour. Quotes are open.',
        },
        {
          q: 'Can children in a Kīhei house eat before adults sit on the lawn?',
          a: 'Yes. Give us their hour. A simpler plate can leave the kitchen first, then the adult courses. The lawn still needs the wet-weather room named. A minibar suite is declined.',
        },
        {
          q: 'If the trade wind shuts a Kapalua lawn birthday, where do we move?',
          a: 'Under the lanai roof or into the dining room, written before you accept. We do not invent a tent that day. A south-shore breeze is a different note from a west-side gust. The backup is the house you named.',
        },
        {
          q: 'How is a Kāʻanapali birthday written when the drive from the south is long?',
          a: 'One birthday, with the Saturday call time already in it. Food, then a server only if you ask. See [staffing](/staffing). 20% service and GET up to 4.712% are separate. A 50% deposit follows acceptance. Gratuity is never required. See [pricing](/pricing).',
        },
        {
          q: 'What has to be true before a Wailea birthday quote is accepted?',
          a: `The villa, the shore, the date, the seats, kids’ timing if any, and cake or plated dessert. Quotes are open. A later gathering that is not this birthday belongs with [all occasions](/events). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/events', label: 'All occasions' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/kids-menus', label: 'Kids at the table' },
      ],
    },
    {
      slug: 'welcome-dinners',
      name: 'Welcome dinners',
      h1: 'Maui welcome dinners — first night in Wailea or West Maui.',
      title: 'Maui welcome dinners — first villa night | myCHEF',
      description:
        'Arrival-night grazing in Wailea, Kapalua and Kāʻanapali.',
      lede:
        'Travel clothes, family-style fish, the ice-breaker before the week. The reception is a different line.',
      photo: 'occWelcomeMaui',
      body: [
        'Wedding welcome nights stack on the wedding week page as their own line.',
        'A Wailea or Kapalua landing starts in the rental kitchen about three hours before platters. A Saturday crawl toward Kapalua is already in that call. You hand over the cooktop, cold storage, and a clear counter. Family-style fish goes to the lanai while people are still in travel clothes. We serve, then reset the kitchen. If a west-side gust closes the open lanai, dinner shifts under cover. The quote names that backup, then 20% service and Hawaiʻi GET up to 4.712% each alone, and a 50% deposit after you accept. Gratuity is never required. Other nights are on [all occasions](/events). Numbers are on [pricing](/pricing). Send the shore on [the quote form](/quote). A later lawn is [Maui catering](/catering).',
      ],
      faqs: [
        {
          q: 'Is a villa arrival the same booking as the wedding welcome?',
          a: 'Same kitchen. The wedding welcome is its own note on [wedding week](/weddings). This page is the first night of a villa stay, vows or not. Do not blend the two into one total.',
        },
        {
          q: 'Can we land at OGG and still eat in Kapalua that night?',
          a: 'If we have the crew and the corridor. Saturday West Maui traffic is planned into arrival, not discovered on the invoice. Put the landing time and the shore on [the quote form](/quote).',
        },
        {
          q: 'What is actually on the table the evening we reach Wailea?',
          a: 'Family-style fish and a grazing board, travel clothes still on. Plated courses are a later dinner. The lawn can wait. This night is the ice-breaker, not a reception.',
        },
        {
          q: 'Where does a windy West Maui welcome move if the open lanai is unusable?',
          a: 'Under the covered lanai or into the dining room, written before you accept. We do not invent a tent on landing day. A south-shore breeze is a different note from a Kapalua gust.',
        },
        {
          q: 'How does the paperwork split if brunch is already planned for the next morning?',
          a: 'Two notes, one coordinator. This page is only the landing night. Brunch is the morning. 20% service and GET up to 4.712% print alone. A 50% deposit follows acceptance. Gratuity is never required. Bands are on [pricing](/pricing).',
        },
        {
          q: 'Which facts have to be true before a Wailea arrival is accepted?',
          a: `The villa address, the flight time, the seats, and the dietary list. Quotes are open. A lawn party later in the stay belongs with [all occasions](/events), not on this arrival. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'retreats',
      name: 'Retreats',
      h1: 'Maui retreat cooking — full-board days in South and West Maui houses.',
      title: 'Maui retreat cooking — full-board days in houses | myCHEF',
      description:
        'Full-board days for Maui villa offsites. Not ballrooms. Dietary designed in. Wailea, Kapalua, Kīhei.',
      lede:
        'Three meals in the house. The lawn is optional. This is not a hotel conference.',
      photo: 'occRetreatMaui',
      body: [
        'South Maui and West Maui houses that actually cook.',
        'Production crews in residences are this product. Convention citywides are not.',
        'A Villa Week retreat is breakfast, lunch, and dinner in the rental, shore by shore. Quiet hours between meals are yours. A signature dinner inside the week includes the groceries. Stay Chef days are the daily chef fee plus groceries at cost with receipts. See [vacation chef](/vacation-chef) and [pricing](/pricing). Wind on a West Maui lanai moves lunch under cover. A Wailea lawn keeps an indoor backup in the same note, written before you accept, with 20% service and GET up to 4.712% each alone and a 50% deposit after you accept. Gratuity is never required. Name the shore on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can a Wailea retreat week be fully vegan?',
          a: 'Designed in advance, and claimed only when the kitchen can hold it. Tell us before the shop. We will not add it as theatre on the morning. Quotes are open.',
        },
        {
          q: 'Is an Upcountry house the same plan as a Wailea retreat?',
          a: 'No. Upcountry is a surcharge zone, quoted with the menu. Wailea and West Maui are the usual houses. Name the place. Saturday traffic does not turn Upcountry into a south-shore day.',
        },
        {
          q: 'Who pays for groceries when the group eats all day in Kapalua?',
          a: 'A signature dinner includes grocery procurement inside the per-guest band. The other days, as Stay Chef, are the daily chef fee plus groceries at cost with receipts. See [pricing](/pricing) and [vacation chef](/vacation-chef).',
        },
        {
          q: 'Can lunch on a Kīhei retreat finish before the group wants the kitchen quiet?',
          a: 'Yes. Set the quiet hours with the meal times. We cook breakfast, lunch, and dinner around them. The lawn is optional. A resort room with a minibar is declined.',
        },
        {
          q: 'Where does a windy West Maui lunch move during a retreat?',
          a: 'Under the covered lanai or into the dining room, written before you accept. We do not invent a tent mid-stay. South Maui wind is a separate note. See [all occasions](/events).',
        },
        {
          q: 'Does a Kapalua retreat quote change if Saturday crosses from Wailea?',
          a: `The call time does. The meals stay the days you named. Server hours are separate if you ask. See [staffing](/staffing). 20% service and GET up to 4.712% are separate. A 50% deposit follows acceptance. Gratuity is never required. Put the shore on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    ...occasionExtras.maui,
  ],
  kauai: [
    {
      slug: 'birthdays',
      name: 'Birthdays',
      h1: 'Birthday dinners on a Kauai estate — both shores, inquiry.',
      title: 'Birthday dinners on a Kauai estate | myCHEF',
      description:
        'Staffed birthday tables in Princeville, Hanalei and Poʻipū. About 10–75. Inquiry stage.',
      lede:
        'An estate dessert course looking into a valley, or a South Shore table. Inquiry. The road may decide the North.',
      photo: 'occBirthdayKauai',
      body: [
        'Inquiry stage.',
        'Request availability with the shore before a birthday is treated as held. The cook sets the estate kitchen, serves, and clears. The cake you brought, or a dessert we plate, comes at the moment you set. Children can eat earlier if the house allows it. Rain on the north moves the table under a covered lanai. A Hanalei bridge closure moves the whole night. It does not send it to Poʻipū. The note shows food, 20% service and GET up to 4.712% each alone, and a 50% deposit only after a written yes. Gratuity is never required. See [all occasions](/events) and [pricing](/pricing). Request availability on [the quote form](/quote). See [staffing](/staffing).',
      ],
      faqs: [
        {
          q: 'Can I hold a Princeville birthday date before anyone confirms a crew?',
          a: 'No. Request availability with the shore and the dates. A named estate is not a held night. There is no instant-booking button. This page is not a reservation.',
        },
        {
          q: 'Can children take the cake earlier on a north-shore terrace if the weather turns?',
          a: 'If the house allows children, yes. Weather still applies on the north. A covered lanai is the wet backup when the road is open. A Hanalei bridge closure moves the whole night. Say which shore. Request availability.',
        },
        {
          q: 'Can we bring a bakery cake to a Poʻipū birthday, or do you plate the dessert?',
          a: 'Either. A cake you bring, or a dessert we plate. We do not print a bakery we do not use. Tell us which when you request availability so the kitchen is planned. The south shore does not inherit the bridge clause.',
        },
        {
          q: 'How does a south-shore birthday run until the kitchen is clear?',
          a: 'The cook sets the house kitchen, serves the list you named, and clears before leaving. Rain needs the indoor table written before anyone travels. Request availability for Poʻipū only. We do not quietly move that night to Princeville.',
        },
        {
          q: 'If a crew can take a Hanalei birthday, what charges appear?',
          a: 'The dinner, then server hours only if you asked. Open [staffing](/staffing). A bartender is quoted in writing. 20% service and GET up to 4.712% are separate. A 50% deposit waits for a written yes. Gratuity is never required. The card is [pricing](/pricing).',
        },
        {
          q: 'What do I send when I request availability for a Garden Isle birthday?',
          a: `The shore, the dates, the seats, the house, and whether children eat before the cake. Request availability on [the quote form](/quote). A larger week of meals is [all occasions](/events), not this night. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/events', label: 'All occasions' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/guest-counts', label: 'Guest counts' },
      ],
    },
    {
      slug: 'welcome-dinners',
      name: 'Welcome dinners',
      h1: 'Kauai welcome dinners — first night, both shores.',
      title: 'Kauai welcome dinners — first estate night | myCHEF',
      description:
        'Arrival-night family-style in Poʻipū or Princeville. Inquiry stage.',
      lede:
        'The first evening after Līhuʻe. Family-style fish. The full wedding week is optional.',
      photo: 'occWelcomeKauai',
      body: [
        'Poʻipū pool kitchens are the usual South arrival. Princeville for the North. Far-North still inherits the bridge clause if you keep driving.',
        'Request availability with the shore.',
        'Request availability with the shore and the Līhuʻe flight. Poʻipū is the shorter hop. Princeville still depends on the road. The cook sets the estate kitchen, then family-style fish goes out while bags are by the door, and the counters are cleared before we leave. Rain on the north moves the table under a covered lanai. A Hanalei bridge closure moves the whole night rather than sending it south. The note shows food, any server hours, 20% service and GET up to 4.712% each alone, and a 50% deposit only after a written yes. Gratuity is never required. Other nights are on [all occasions](/events). The card is [pricing](/pricing). Request availability on [the quote form](/quote). Extra hands are [staffing](/staffing).',
      ],
      faqs: [
        {
          q: 'Can the welcome dinner be the same day the Līhuʻe flight lands?',
          a: 'Only if a crew exists and the shore is named. Request availability. It is not an instant confirm. Poʻipū is the shorter drive. Princeville still depends on the road.',
        },
        {
          q: 'Should a Garden Isle arrival say Poʻipū or Princeville before the menu?',
          a: 'Name the shore you will actually sleep on. A Poʻipū pool kitchen is the usual south arrival. Princeville is the north. Farther north still inherits the Hanalei bridge if you keep driving. Do not swap the shores.',
        },
        {
          q: 'What is served on a first night beside a Poʻipū pool?',
          a: 'Family-style fish from the house kitchen, not a seated reception. If a wedding week exists, it stays on [wedding week](/weddings). This page is only the landing evening.',
        },
        {
          q: 'What happens to a north-shore welcome if the Hanalei bridge closes?',
          a: 'The night moves. It is not forfeited, and it is not quietly handed to Poʻipū. A covered lanai is the wet-weather backup when the road is open. Say north or south in the request.',
        },
        {
          q: 'If a crew can take the arrival, what charges should I expect?',
          a: 'Food first, then server hours only if you asked. See [staffing](/staffing). 20% service and GET up to 4.712% print alone. A 50% deposit waits for a written yes. Gratuity is never required. The card is [pricing](/pricing).',
        },
        {
          q: 'What do I send when I request availability for that first night?',
          a: `Name the shore, the flight, the seats, and the house. Request availability on [the quote form](/quote). A printed page is not a crew. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/poipu', label: 'Poʻipū' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    {
      slug: 'retreats',
      name: 'Retreats',
      h1: 'Kauai retreat cooking — full-board days, inquiry.',
      title: 'Kauai retreat cooking — full-board days in houses | myCHEF',
      description:
        'Full-board chef days for Kauai estate offsites. Inquiry stage. Dietary designed in. Both shores. Not a ballroom.',
      lede:
        'Breakfast through dinner in the house. The mist and the fire plan follow the shore.',
      photo: 'occRetreatKauai',
      body: [
        'Inquiry stage. Dietary is table stakes, claimed only when true.',
        'Request availability for one shore before a retreat is treated as held. Breakfast, lunch, and dinner come from that estate kitchen. Quiet hours are yours. A signature dinner includes the groceries. Stay Chef days are the daily chef fee plus groceries at cost with receipts. See [vacation chef](/vacation-chef) and [pricing](/pricing). Rain on the north moves a meal under a covered lanai. A Hanalei bridge closure moves those days. It does not hand them to Poʻipū. The note shows 20% service and GET up to 4.712% each alone, and a 50% deposit only after a written yes. Gratuity is never required. Request availability on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can the kitchen stay silent between meals on a Princeville retreat?',
          a: 'We cook. House rules are yours. Tell us the hours the pass should be still. Breakfast, lunch, and dinner fit around them. Request availability. A silent rule is not a second crew.',
        },
        {
          q: 'Can a Poʻipū retreat be vegan for every meal?',
          a: 'Designed in advance. We will not claim it as theatre. Say so when you request availability, before any shop. Claimed only when that kitchen can hold it.',
        },
        {
          q: 'How do groceries work on a multi-day Garden Isle retreat?',
          a: 'A signature dinner includes grocery procurement. Stay Chef days add groceries at cost with receipts, beside the daily chef fee. See [pricing](/pricing) and [vacation chef](/vacation-chef). Request availability for one shore.',
        },
        {
          q: 'What happens to north-shore retreat meals if the Hanalei bridge closes?',
          a: 'Those days move. They are not forfeited, and they are not quietly cooked in Poʻipū. A covered lanai is the wet backup when the road is open. Say the shore in the request. See [all occasions](/events).',
        },
        {
          q: 'If a crew can hold a south-shore retreat, how do the days get charged?',
          a: 'Food for the meals you named, then server hours only if you asked. See [staffing](/staffing). 20% service and GET up to 4.712% are separate. A 50% deposit waits for a written yes. Gratuity is never required.',
        },
        {
          q: 'What do I send when I request availability for a retreat on one shore?',
          a: `The shore, the dates, which meals, dietary limits, and quiet hours. Request availability on [the quote form](/quote). A bridge note belongs on a north-shore ask only. There is no instant-booking button. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    ...occasionExtras.kauai,
  ],
  bigisland: [
    {
      slug: 'birthdays',
      name: 'Birthdays',
      h1: 'Birthday dinners on the Kohala Coast — west side first.',
      title: 'Birthday dinners on the Kohala Coast | myCHEF',
      description:
        'Staffed birthday tables on Kona–Kohala terraces. About 10–75. Inquiry stage. East side is a different day.',
      lede:
        'Eight to forty on lava, a simple dessert, Mauna Kea faint. Not a Hilo add-on.',
      photo: 'occBirthdayBigisland',
      body: [
        'West-side radius: Kona–Kohala corridor. Inquiry stage.',
        'Join the inquiry list with a Kona, Waikoloa, or Kohala address. The cook sets that kitchen, serves, and clears. The cake you brought, or a dessert we plate, comes at the moment you set. Children can take a smaller plate first if you say so. Wind moves a lava terrace into the great room, written before a yes. Hilo is a dedicated east-side day and is never implied. The inquiry shows 20% service and Hawaiʻi GET up to 4.712% each alone, and a 50% deposit only after a written yes. Gratuity is never required. See [all occasions](/events) and [pricing](/pricing). Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can a Hilo birthday ride along with a Kona or Waikoloa dinner?',
          a: 'No. Hilo is a dedicated east-side day, never implied by a west-side table. Join the inquiry list for Kona, Waikoloa, or the Kohala Coast, or send Hilo on its own. They are not one drive across the saddle.',
        },
        {
          q: 'What should we flag if the birthday is in Kailua-Kona during Ironman week?',
          a: 'Flag the dates. Town compresses and the grocery window tightens. We do not claim an affiliation or print a race logo. A Waikoloa house is a different drive from Aliʻi. Join the inquiry list with the week named.',
        },
        {
          q: 'Do you plate a dessert on a Kohala terrace, or can we bring a cake?',
          a: 'Either. We plate a dessert from the villa kitchen, or we cut a cake you bring. We do not invent a bakery name. If the wind is up, that moment moves into the great room with the dinner. Join the inquiry list.',
        },
        {
          q: 'Should children on a Kohala birthday eat a smaller plate before the adults?',
          a: 'Say which. A smaller plate can leave the kitchen first, then the cake moment you set. If the terrace is too bright, name the great room. We will not guess the room on the day.',
        },
        {
          q: 'What does a west-side birthday show for charges once a crew can take it?',
          a: 'The dinner for the list, then server hours if you asked. See [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% are separate. A 50% deposit follows a written yes. Gratuity is never required. Numbers are on [pricing](/pricing).',
        },
        {
          q: 'How do I join the inquiry list for a Keauhou birthday?',
          a: `West-side address, dates, seats, terrace or great room, and cake or plated dessert. Hilo stays its own day. Join the inquiry list on [the quote form](/quote). There is no instant-booking button. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/events', label: 'All occasions' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/guest-counts', label: 'Guest counts' },
      ],
    },
    {
      slug: 'welcome-dinners',
      name: 'Welcome dinners',
      h1: 'Hawaiʻi Island welcome dinners — first night, west side.',
      title: 'Big Island welcome dinners — first villa night | myCHEF',
      description:
        'Arrival-night family-style in Kona and Kohala villas. Inquiry stage. Not a Hilo add-on.',
      lede:
        'KOA to the villa. Family-style fish. Hard sun still in the window. East side is a different day.',
      photo: 'occWelcomeBigisland',
      body: [
        'Kona town and Kohala resort residences.',
        'Inquiry stage. Published starting prices from $210 a guest. Dinners from $165 a guest.',
        'Join the inquiry list with the KOA time and a west-side address. The cook sets the Kona or Waikoloa kitchen before family-style fish goes out. You hand over the cooktop, the fridge, and a clear counter. We serve, then clear. If the Kohala terrace shuts, dinner moves to the great room of that same house. Hilo is a dedicated day and is not implied by this landing. The inquiry shows that one night, 20% service and Hawaiʻi GET up to 4.712% each alone, and a 50% deposit only after a written yes. Gratuity is never required. Other nights are on [all occasions](/events). The card is [pricing](/pricing). Join the inquiry list on [the quote form](/quote). See [staffing](/staffing).',
      ],
      faqs: [
        {
          q: 'Can we land at KOA and eat in Waikoloa the same night?',
          a: 'If a crew can take the west side. It is not a round trip from Hilo. Join the inquiry list with the landing time and the villa. A published page is not a held crew.',
        },
        {
          q: 'Does a Hilo landing belong on this welcome page?',
          a: 'No. Hilo is a dedicated day, never implied by a Kona or Kohala landing. Send the east side as its own inquiry. This page is the west-side first night only.',
        },
        {
          q: 'What is on the table the first night in Kona or Keauhou?',
          a: 'Family-style fish, with hard sun still in the window. Plated courses are a later terrace dinner. The cook uses the villa kitchen, then clears it. Join the inquiry list with the dietary limits.',
        },
        {
          q: 'If wind hits a Kohala terrace on arrival night, where is dinner served?',
          a: 'In the great room or along a covered edge of the same house. That backup is in the inquiry before you accept. We do not add a tent on landing day. The open terrace is not assumed.',
        },
        {
          q: 'What does one west-side arrival show once a crew can take it?',
          a: 'One night, the west-side address, the food, then any server hours you asked for. See [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows a written yes. Gratuity is never required. Numbers are on [pricing](/pricing).',
        },
        {
          q: 'How do I join the inquiry list for a Kohala welcome dinner?',
          a: `West-side address, flight time, seats, and dietary limits. Flag Ironman if the week touches the race. Join the inquiry list on [the quote form](/quote). There is no instant-booking button. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/kona', label: 'Kona' },
        { path: '/events', label: 'All occasions' },
      ],
    },
    {
      slug: 'retreats',
      name: 'Retreats',
      h1: 'Hawaiʻi Island retreat cooking — full-board west-side days.',
      title: 'Big Island retreat cooking — full-board villa days | myCHEF',
      description:
        'Full-board chef days for Kona–Kohala villa offsites. Inquiry stage. Dietary designed in. East side is a different day.',
      lede:
        'Breakfast fish, a small offsite table, lava heat. Not the whole island. Not a ballroom.',
      photo: 'occRetreatBigisland',
      body: [
        'West-side first.',
        'Hilo is a dedicated east-side day, never implied by a Waikoloa week.',
        'Join the inquiry list for breakfast, lunch, and dinner in a Kona or Kohala house. Quiet hours are yours. A signature dinner includes the groceries. Stay Chef days are the daily chef fee plus groceries at cost with receipts. See [vacation chef](/vacation-chef) and [pricing](/pricing). Wind moves a terrace meal into the great room, written before a yes. A Volcano or Hilo day is its own dedicated day. The inquiry shows 20% service and Hawaiʻi GET up to 4.712% each alone, and a 50% deposit after a written yes. Gratuity is never required. Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can a Volcano day be added onto a Waikoloa retreat week?',
          a: 'Only as its own dedicated day, with its own staffing, not as an unpaid errand from the west side. Join the inquiry list for the Waikoloa days, and send Volcano separately. We will not imply both.',
        },
        {
          q: 'What should we flag if a Kohala retreat falls in Ironman week?',
          a: 'Flag the dates early. Kailua-Kona compresses, and grocery windows tighten. We do not claim an affiliation. A Kohala house is not an Aliʻi kitchen. Join the inquiry list with the week named.',
        },
        {
          q: 'How do groceries work across a west-side retreat?',
          a: 'A signature dinner includes grocery procurement inside the per-guest band. Stay Chef days are the daily chef fee plus groceries at cost with receipts. See [pricing](/pricing) and [vacation chef](/vacation-chef). Hilo is not inside that shop.',
        },
        {
          q: 'Can breakfast, lunch, and dinner in Waikoloa leave the afternoon quiet?',
          a: 'Yes. Name the quiet hours with the meals. We cook around them from the villa kitchen. Hard sun is real. If the terrace is the lunch room, say so. A minibar room is declined.',
        },
        {
          q: 'If wind shuts the terrace at lunch, where does a Kohala retreat eat?',
          a: 'In the great room or along a covered edge of the same house, written in the inquiry before a yes. We do not add a tent mid-week. See [all occasions](/events). The open terrace is not assumed.',
        },
        {
          q: 'What should a multi-day west-side retreat include when I join the inquiry list?',
          a: `The Kona or Kohala address, the dates, which meals, quiet hours, and dietary limits. Server hours are a separate ask. See [staffing](/staffing). Join the inquiry list on [the quote form](/quote). Hilo is not in that note. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    ...occasionExtras.bigisland,
  ],
};

export function getOccasionPage(island: IslandId, slug: string): OccasionPage | undefined {
  return occasionPages[island].find((row) => row.slug === slug);
}
