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
        'Staffed birthday tables in Kahala dining rooms and Ko Olina villas. About 10–75 guests.',
      lede:
        'The house, a simple dessert, the guest list you actually have. Not a buyout downtown.',
      photo: 'occBirthdayOahu',
      body: [
        'Kahala dining rooms and Ko Olina villas are the usual rooms. Anniversaries run the same kitchen.',
      ],
      faqs: [
        {
          q: 'Cake?',
          a: 'A dessert course we plate. A bakery cake you bring is fine. We do not print a fake bakery brand.',
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
      ],
      faqs: [
        {
          q: 'Can you feed a production crew?',
          a: 'Call-time breakfasts in a house, yes. A stage downtown, no.',
        },
        {
          q: 'Sony Open week?',
          a: 'Calendar awareness, not an affiliation. Ask early.',
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
      ],
      faqs: [
        {
          q: 'Lahaina birthday?',
          a: 'West Maui houses with kitchens.',
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
        'Full-board chef days for Maui villa offsites. Not ballrooms. Dietary designed in. Wailea, Kapalua, Kīhei.',
      lede:
        'Three meals in the house. The lawn is optional. This is not a hotel conference.',
      photo: 'occRetreatMaui',
      body: [
        'South Maui and West Maui houses that actually cook.',
        'Production crews in residences are this product. Convention citywides are not.',
      ],
      faqs: [
        {
          q: 'Full-board vegan week?',
          a: 'Designed in advance. Claimed only when the kitchen can hold it.',
        },
        {
          q: 'Upcountry retreat?',
          a: 'Surcharge zone. Quoted with the menu.',
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
      ],
      faqs: [
        {
          q: 'Can I book a date now?',
          a: 'Join the inquiry list with the shore and the dates.',
        },
        {
          q: 'Kids on the terrace?',
          a: 'Weather still applies on the North.',
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
          q: 'Should a Garden Isle arrival name Poʻipū or Princeville before the menu?',
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
          q: 'If a crew can take the arrival, how do the charges show?',
          a: 'Food first, then server hours only if you asked. See [staffing](/staffing). 20% service and GET up to 4.712% print alone. A 50% deposit waits for a written yes. Gratuity is never required. The card is [pricing](/pricing).',
        },
        {
          q: 'How do I request availability for that first night without treating this page as a hold?',
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
      ],
      faqs: [
        {
          q: 'Can you hold a silent retreat kitchen?',
          a: 'We cook. House rules are yours. Tell us the hours.',
        },
        {
          q: 'Vegan full-board?',
          a: 'Designed in advance. We will not claim it as theatre.',
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
      ],
      faqs: [
        {
          q: 'Hilo birthday?',
          a: 'Quote-only with dedicated staffing.',
        },
        {
          q: 'Ironman week birthday?',
          a: 'Flag the dates. Town compresses.',
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
        'Hilo retreats are quote-only dedicated days.',
      ],
      faqs: [
        {
          q: 'Can you add a Volcano day onto a Waikoloa week?',
          a: 'As its own team day, quoted. Not as an unpaid errand.',
        },
        {
          q: 'Ironman week retreat?',
          a: 'Flag dates early.',
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
