import type { IslandId } from './islands';
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
        'Gold Coast dining rooms in Honolulu and Kahala are where plated dinners sit. The food band does not change because a server is on the quote.',
        'The server is in a Kahala dining room or a Ko Olina villa before guests sit, once the freight window or the gate is open. They carry the courses, refill water, and clear between plates. Call time and end time are hours on the quote, apart from the food, sized to headcount and to plated or family-style. A sous chef is a separate set of hours if you ask. 20% service and Hawaiʻi GET up to 4.712% follow those hours, each alone. The published hour is on [staffing](/staffing) and [pricing](/pricing). Request a written quote on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'When does a plated Kahala dinner need a server in the room?',
          a: 'When guests sit for separate courses. Family-style at the same table can stay with the chef if the platters go out once. The food band does not move. Request a written quote and say which service you want.',
        },
        {
          q: 'What does the server do between the first course and the last plate?',
          a: 'They run each course, keep water on the table, and clear before the next plate. They are not the cook. Call time starts before guests and ends when the dining room is clear.',
        },
        {
          q: 'How are hours written if we also want a sous chef in Honolulu?',
          a: 'As two sets of hours, each with its own start and end. The server hour and the sous-chef hour are published on [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% follow both, each alone.',
        },
        {
          q: 'Does a family-style Ko Olina table use the same call as plated courses?',
          a: 'Platters shorten the time on the floor. Plated courses keep the server through every pass. Headcount still sets how many people we send. The menu price stays put.',
        },
        {
          q: 'Who decides how many people are on the floor?',
          a: 'We do, from the headcount and the service style you send. A dining room of twelve is not a lawn of forty. See [guest counts](/guest-counts). The hours come back on the quote.',
        },
        {
          q: 'What should a tower note include before you price the crew?',
          a: 'The building, the freight window, the date, the seats, and plated or family-style. Request a written quote on [the quote form](/quote). The hour itself is on [pricing](/pricing).',
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
      description: 'Bartender add-ons for Oahu houses. Hourly, itemised. No theatrical tiki service.',
      lede: 'Citrus, glassware, the lanai.',
      photo: 'staffBartendersOahu',
      body: [
        'The bartender add-on product is on the villa bar page.',
        'We do not sell a theatrical luau bar. Ko Olina and Kahala houses.',
        'A bartender arrives before guests, sets the bar the house asked for, mixes what you supply, and closes it down when the note says the night ends. Call time and end time are written as their own hours, sized to the headcount and to whether this is a cocktail hour or the whole dinner. There is no published bartender hour. The amount is quoted in writing. The villa bar product is [the bar](/bar). The four-hour cart is [the mobile bar](/mobile-bar). This page is the person, not those products. Request a written quote on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Is a Kahala bartender the same booking as the villa bar or the four-hour cart?',
          a: 'The villa bar is the add-on product on [the bar](/bar). The cart is the four-hour package on [the mobile bar](/mobile-bar). This page is the person, quoted in writing, for the hours you name.',
        },
        {
          q: 'What does the bartender set up, and what do we have to supply?',
          a: 'They set the station and mix what the house supplies. Spirits are billed at cost, or you bring your own. We do not retell the cart. Glassware and ice for the package live on the mobile bar page.',
        },
        {
          q: 'Why can’t I read an hourly figure for a Ko Olina bartender?',
          a: 'Because none is published. The night is quoted in writing. The only published staffing hours are the server and the sous chef, on [staffing](/staffing), plus 20% service and Hawaiʻi GET up to 4.712%.',
        },
        {
          q: 'Can you run a theatrical tiki bar on a Gold Coast lawn?',
          a: 'We will not staff a theatrical tiki bar. We mix what the house supplies, in the house, and we close the station when the hours end. That is the job.',
        },
        {
          q: 'When does a Honolulu bartender arrive, and when is the station closed?',
          a: 'Before guests, after the building’s freight window if there is one. Close-down is the end time on the quote. Both times are hours, separate from the food.',
        },
        {
          q: 'What do you need to quote a bartender beside an Oʻahu dinner?',
          a: 'The house, the date, the headcount, and whether you want the cocktail hour or the whole night. Request a written quote on [the quote form](/quote). The reply is the figure.',
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
      lede: 'Water poured, the table set, the pass left to the chef.',
      photo: 'staffButlersOahu',
      body: [
        'Gold Coast houses with real dining rooms are the usual rooms.',
        'A butler is house-level service across the stay, not the server on a single pass. They are in the Kahala or Ko Olina house before the day starts, set the rooms you named, and finish at the end time on the quote. Hours are written apart from the chef and apart from a dinner server, sized to how many people are in the house and to the style of service you want. We will not sell a butler we cannot staff. There is no published hourly figure. The amount is quoted in writing. Request a written quote on [the quote form](/quote). See [staffing](/staffing).',
      ],
      faqs: [
        {
          q: 'Is a butler the same job as the server on a Kahala dinner?',
          a: 'The server runs that night’s courses. A butler works at house level across the stay: rooms, timing, and the table before anyone sits. They are separate hours if you want both.',
        },
        {
          q: 'What does house-level service look like across a Ko Olina stay?',
          a: 'Call time before the house is up, the rooms and the table kept through the day, and an end time when we leave. It is not a hotel department. The quote names the days.',
        },
        {
          q: 'What does the quote say if Honolulu has nobody for that week?',
          a: 'It says the bench is empty, before any deposit. We will not sell a butler we cannot staff. When someone is free, the amount is quoted in writing rather than assumed.',
        },
        {
          q: 'How are butler hours written if the stay is several days?',
          a: 'Each day has a call time and an end time, separate from the chef and from a dinner server. There is no published butler hour. 20% service and Hawaiʻi GET up to 4.712% follow the written total, each alone.',
        },
        {
          q: 'Is this the butler desk of a Waikīkī hotel?',
          a: 'Residences and villas with a real house to run. We do not impersonate a hotel department, and we do not assume the building next door will lend someone.',
        },
        {
          q: 'What turns a Ko Olina butler ask into a written figure?',
          a: 'The villa, the dates, how many people are in the house, and the hours you want covered. Request a written quote on [the quote form](/quote). If we cannot staff it, we say so.',
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
        'On a Villa Week the server is on the property before guests, with Saturday traffic between Wailea and Kapalua already in the call time. They run courses, keep water moving, and clear. A lawn needs a longer call than a dining room. Family-style on the lānai is shorter than plated. End time is when the tables are clear. Hours are separate from the food and sized to headcount. A sous chef is another set of hours. 20% service and Hawaiʻi GET up to 4.712% follow, each alone. The hour is on [staffing](/staffing) and [pricing](/pricing). Quotes are open on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Does a plated Wailea lawn need more server time than the dining room?',
          a: 'A plated lawn takes a longer call when the passes are longer, and the hours say so. The food band does not rise because the lawn is wet or wide. Backup seating is written. Quotes are open. Send the layout.',
        },
        {
          q: 'What is the server doing on a Kapalua lānai during dinner?',
          a: 'Carrying courses, pouring water, and clearing between plates. They arrive before guests and finish when the lānai is clear. They are not the cook and not the bartender.',
        },
        {
          q: 'Where do sous-chef hours show if the server is already on the quote?',
          a: 'On a second line of hours. Both published rates are on [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% print after them, each alone. Do not blend the two jobs.',
        },
        {
          q: 'Why does Saturday change the call time and not the hour?',
          a: 'West Maui traffic changes when the server must leave, not the rate. The end time is still when service is done. Put the shore on the quote so arrival is planned.',
        },
        {
          q: 'How do you size a crew for ten at a table versus forty on the grass?',
          a: 'From the headcount and whether it is plated. See [guest counts](/guest-counts). Forty on a lawn is not ten in a dining room. We write the hours from that, not from a guess.',
        },
        {
          q: 'What should a West Maui server request include?',
          a: 'The house, the date, the seats, plated or family-style, and whether it is a lawn. Quotes are open on [the quote form](/quote). The hour is on [pricing](/pricing).',
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
      description: 'Bartender add-ons for Wailea and West Maui. Hourly, itemised. No theatrical tiki service.',
      lede: 'Citrus, the Pacific, the lanai.',
      photo: 'staffBartendersMaui',
      body: [
        'We do not staff a luau bar we do not run.',
        'The bartender is on the Wailea or West Maui lānai before guests, sets the station, mixes what the house supplies, and breaks it down at the end time. Saturday traffic changes when they roll, not whether the hours are written. Those hours are quoted in writing. There is no bartender figure on the card. This is not the villa bar product and not the four-hour cart. Read [the bar](/bar) and [the mobile bar](/mobile-bar) for those. Crew size follows headcount and how long you want the station open. Quotes are open on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'How is a lānai bartender different from the villa bar and the four-hour cart?',
          a: 'Those products live on [the bar](/bar) and [the mobile bar](/mobile-bar). This page is the person for the hours you name, quoted in writing. Do not treat the package price as this ask.',
        },
        {
          q: 'What gets mixed on a Kapalua lānai, and who brings the bottles?',
          a: 'The bartender mixes what the house supplies. Spirits are billed at cost, or you bring your own. Setup and close-down are part of the hours. The cart’s kit is a different page.',
        },
        {
          q: 'Why is a West Maui bartender quoted in writing instead of by the hour on the card?',
          a: 'No bartender hour is published. Server and sous-chef hours are the published ones, on [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% still apply to the written total, each alone.',
        },
        {
          q: 'Will a Wailea lawn get a staged bar show?',
          a: 'The lawn gets a working station, not a show. We will not staff a theatrical tiki bar. The bartender mixes what the house put out and packs it down at the end time.',
        },
        {
          q: 'How early should a Saturday bartender be on property?',
          a: 'Before guests, with West Maui traffic already in the call time. Close-down is the end time on the quote. The drive changes the clock. It does not hide a fee.',
        },
        {
          q: 'What does a Wailea bartender note need?',
          a: 'The villa, the date, the headcount, and cocktail hour or the full night. Quotes are open on [the quote form](/quote). The reply is the figure. There is nothing to read on the card.',
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
      lede: 'The table set, water poured, the chef left at the pass.',
      photo: 'staffButlersMaui',
      body: [
        'We do not impersonate a resort butler department.',
        'Across a Villa Week a butler runs the house, not a single course. They arrive before the day you named in Wailea or West Maui, keep the rooms and the table, and stop at the end time. Hours are written apart from the chef and from a dinner server, and they scale to how many people are in the villa. We will not sell a butler we cannot staff. There is no hourly figure. The stay is quoted in writing. Quotes are open on [the quote form](/quote). The staffing index is [staffing](/staffing).',
      ],
      faqs: [
        {
          q: 'How is a Wailea butler different from the server on dinner night?',
          a: 'The server has the courses that night. The butler has the house across the stay: timing, rooms, and the table before dinner. Ask for both only if you want two sets of hours.',
        },
        {
          q: 'What does a multi-day Kapalua butler actually cover?',
          a: 'Call time before guests need the house, service through the days you listed, and an end time. It is not a resort desk. The quote names those hours. Nothing is assumed.',
        },
        {
          q: 'What is written if a Villa Week wants a butler and that week is already full?',
          a: 'The quote says we cannot send one, and nothing is deposited against an empty week. We will not sell a butler we cannot staff. A later week can be asked again. The amount, if someone is free, is quoted in writing.',
        },
        {
          q: 'Are butler days lumped into the chef’s day fee?',
          a: 'They are separate hours on the quote. The chef’s day and a dinner server stay their own lines. 20% service and Hawaiʻi GET up to 4.712% follow the written total, each alone.',
        },
        {
          q: 'Is this the butler from the resort next to the villa?',
          a: 'We do not impersonate a resort department and we do not borrow their staff. Residences and villas only, and only when we can send someone.',
        },
        {
          q: 'What should I send for a butler on a Villa Week?',
          a: 'The shore, the villa, the dates, the headcount, and which hours of the day you want covered. Quotes are open on [the quote form](/quote). Saturday traffic belongs in that note.',
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
        'Request availability, then a server is on the Princeville or Poʻipū estate before guests, if a crew exists for that shore. They run courses, keep water on the table, and clear. Call time and end time are hours, separate from the food, sized to headcount and to plated or family-style. A bridge closure moves a North Shore call. It does not hand the night to the other shore. A sous chef is a second set of hours. 20% service and Hawaiʻi GET up to 4.712% follow, each alone. The hour is on [staffing](/staffing) and [pricing](/pricing). Request availability on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'What does request availability mean before a Princeville server is real?',
          a: 'The hour can be discussed. The person cannot be assumed. Name the shore and the date. We write back when a crew exists. A published rate is not a held booking.',
        },
        {
          q: 'What does a Poʻipū server handle once guests are sitting?',
          a: 'Courses, water, and clearing, from before they sit until the table is done. Family-style shortens that call. Plated keeps them through every pass. The menu price stays the same.',
        },
        {
          q: 'Are server hours and sous-chef hours one Garden Isle total?',
          a: 'They are requested separately. Both published rates are on [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% follow. Request availability does not merge them into one rate.',
        },
        {
          q: 'How should I describe the crew for a lawn versus a great room?',
          a: 'Write the seats and the room. A great room of twelve is not a lawn of fifty. See [guest counts](/guest-counts). We size from that note. We will not guess the shore.',
        },
        {
          q: 'What happens to a North Shore server call if the bridge closes?',
          a: 'The call moves with the closure. It is not forfeited and it is not quietly switched to Poʻipū. Say whether the estate is past Hanalei when you request availability.',
        },
        {
          q: 'How do I request availability for servers on either shore?',
          a: 'Shore, date, seats, and plated or family-style on [the quote form](/quote). The hour is on [pricing](/pricing). There is no instant confirmation.',
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
      description: 'Bartender add-ons for Kauai estates. Inquiry stage. No theatrical tiki service.',
      lede: 'Citrus on a wet terrace or a South Shore counter. Inquiry.',
      photo: 'staffBartendersKauai',
      body: [
        'Request availability for a bartender on the shore you named. They arrive before guests, set the station, mix what the house supplies, and close it down at the end time. A wet North Shore terrace and a Poʻipū counter are different setups. A bridge closure moves the North Shore night. Hours are quoted in writing. No bartender hour is published. This is not the villa bar and not the four-hour cart. Those are [the bar](/bar) and [the mobile bar](/mobile-bar). We will not staff a theatrical tiki bar. Request availability on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Is a Princeville bartender the villa bar, the cart, or this page?',
          a: 'This page is the person, quoted in writing, after you request availability. The product is [the bar](/bar). The four-hour package is [the mobile bar](/mobile-bar). A named shore is not a confirmed pour.',
        },
        {
          q: 'What does the bartender mix on a wet North Shore terrace?',
          a: 'What the house supplies. Spirits are billed at cost, or you bring your own. They set up and close down inside the hours. We do not restage that as a show.',
        },
        {
          q: 'Why is there no hourly bartender rate on a Garden Isle request?',
          a: 'None is published. The reply quotes the night in writing. Server and sous-chef hours are the published staffing rates, on [staffing](/staffing), with 20% service and GET up to 4.712% after.',
        },
        {
          q: 'Will you put a theatrical tiki bar on the North Shore?',
          a: 'We will not staff a theatrical tiki bar. We mix what you brought, on that terrace or counter, and we pack it down at the end time.',
        },
        {
          q: 'How do call time and close-down work if the bridge might shut?',
          a: 'Both times are on the reply for the shore you named. A closure moves the North Shore night. It does not silently become a Poʻipū pour. Request availability with that in the note.',
        },
        {
          q: 'What should a both-shores bartender request include?',
          a: 'The shore, the estate, the date, the headcount, and how long the station should stay open. Request availability on [the quote form](/quote). The figure comes back in writing.',
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
      lede: 'An empty Princeville table being set. Inquiry.',
      photo: 'staffButlersKauai',
      body: [
        'Request availability. We do not impersonate a resort butler department.',
        'A butler on either shore is house-level service across the stay, not the dinner server. They are at the Princeville or Poʻipū estate for the call time you requested, keep the house through those hours, and finish at the end time. A bridge closure moves a North Shore day. Hours are separate from the chef, sized to who is in the house. We will not sell a butler we cannot staff. There is no published hour. The stay is quoted in writing. Request availability on [the quote form](/quote). See [staffing](/staffing).',
      ],
      faqs: [
        {
          q: 'How is an estate butler different from the server at a Poʻipū dinner?',
          a: 'The server has that dinner’s courses. The butler has the house across the stay. Request availability for the one you need. They are not the same hours.',
        },
        {
          q: 'What does a Princeville butler cover between call time and end time?',
          a: 'The house: rooms, timing, and the table, for the hours on the reply. It is not a resort department. If the bridge closes, that day moves with it.',
        },
        {
          q: 'What comes back if Princeville wants a butler and that week is empty?',
          a: 'A refusal, not a placeholder name. We will not sell a butler we cannot staff. Request availability. When someone can cross to that shore, the amount is quoted in writing before any deposit.',
        },
        {
          q: 'If I request availability for a chef and a butler, do they share one clock?',
          a: 'Request availability for each. The butler’s call time can start at breakfast while the chef starts before dinner. 20% service and Hawaiʻi GET up to 4.712% still follow the written total, each alone.',
        },
        {
          q: 'Is this the hotel butler from a Princeville resort?',
          a: 'Estates we can actually staff. We do not impersonate a resort department and we do not borrow one. A named resort is not our bench.',
        },
        {
          q: 'How do I request availability for a butler on either shore?',
          a: 'Shore, estate, dates, who is in the house, and which hours. Use [the quote form](/quote). Mention the bridge if the estate is past Hanalei. There is no instant yes.',
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
        'Join the inquiry list for a server in Kona, Waikoloa, or on the Kohala Coast. They arrive before guests, run the courses, keep water on the table, and clear. Call time and end time are hours apart from the food, sized to headcount and to plated or family-style. A sous chef is a second set of hours. 20% service and Hawaiʻi GET up to 4.712% follow, each alone. Hilo is a separate dedicated east-side day, quoted in writing, not an afternoon on this crew. The hour is on [staffing](/staffing) and [pricing](/pricing). Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Which west-side dinners should ask for a server first?',
          a: 'Plated meals in Kona, Waikoloa, or on the Kohala Coast. Family-style may stay with the chef. Join the inquiry list for that house. Hilo is not one of the choices on this night.',
        },
        {
          q: 'What does the server do at a Waikoloa table?',
          a: 'Courses, water, and clearing, from before guests sit until the table is done. Plated keeps them longer than platters. They are not sent across the saddle afterward.',
        },
        {
          q: 'Why is the sous chef not inside the server hours on a Kona quote?',
          a: 'They are different jobs. Both published rates are on [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% follow, each alone. Join the inquiry list and name the lines you want.',
        },
        {
          q: 'How should Ironman week change a Kona server call?',
          a: 'Flag the dates. Town roads and the grocery window compress, so the call time is written for that week. The hour is the same published rate. The clock around it is not a quiet Tuesday.',
        },
        {
          q: 'Why can’t the Kona server drive to Hilo after the table is clear?',
          a: 'The east side is its own day, not the tail of a west-side shift. Hilo is a separate dedicated east-side day, quoted in writing. Join the inquiry list for Kona, Waikoloa, or Kohala only.',
        },
        {
          q: 'What belongs on a west-side server inquiry?',
          a: 'A Kona or Kohala address, the date, the seats, and plated or family-style. Join the inquiry list on [the quote form](/quote). The hour is on [pricing](/pricing).',
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
      lede: 'Citrus on lava, hard sun. Not Hilo.',
      photo: 'staffBartendersBigisland',
      body: [
        'Join the inquiry list. West-side first.',
        'We do not staff a theatrical tiki bar.',
        'A bartender for a Kona or Kohala terrace arrives before guests, sets the station, mixes what the house supplies, and closes it down at the end time. Hours are quoted in writing. No bartender hour exists. Headcount and how long the station stays open set the crew. This is not the villa bar product and not the four-hour cart. Those are [the bar](/bar) and [the mobile bar](/mobile-bar). Hilo is a separate dedicated east-side day, quoted in writing. Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Is a Kohala terrace bartender the same thing as the mobile bar package?',
          a: 'The package is [the mobile bar](/mobile-bar). The villa bar product is [the bar](/bar). This page is the person, quoted in writing, after you join the inquiry list for the west side.',
        },
        {
          q: 'Who stocks the spirits for a Kohala terrace station?',
          a: 'You do, or they are billed at cost on the written reply. The bartender only mixes that stock. Join the inquiry list. Close-down is the end time, not a second product.',
        },
        {
          q: 'Where would a bartender price sit if I looked at the west-side card?',
          a: 'It does not sit on the card. Join the inquiry list and the reply quotes the night in writing. Server and sous-chef hours are the published rates on [staffing](/staffing), with 20% service and GET up to 4.712% after them.',
        },
        {
          q: 'Can the lava terrace have a themed bar performance?',
          a: 'There is no performance. We will not staff a theatrical tiki bar on the west side. Join the inquiry list for a working station that mixes what you supplied, then closes.',
        },
        {
          q: 'How are call time and end time set for a Waikoloa pour?',
          a: 'Both are on the written reply, before guests and after the last drink you asked for. Ironman week should be flagged because town compresses. The figure is still quoted in writing.',
        },
        {
          q: 'Can a Hilo bartender be the same request as Kona?',
          a: 'A Hilo pour is not this request. It is a separate dedicated east-side day, quoted in writing. Join the inquiry list with a Kona or Kohala address and leave the east side off that night.',
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
      lede: 'A lava terrace table being set. Not a resort butler department.',
      photo: 'staffButlersBigisland',
      body: [
        'West-side first.',
        'Join the inquiry list. We do not impersonate a hotel butler line.',
        'A butler here is house-level service across a Kona or Kohala stay. They are on property for the call time, keep the house through those hours, and stop at the end time. Hours are separate from the chef and from a dinner server, sized to who is in the house. We will not sell a butler we cannot staff. There is no published hour. Hilo is a separate dedicated east-side day, quoted in writing, even for a dinner. Join the inquiry list on [the quote form](/quote). See [staffing](/staffing).',
      ],
      faqs: [
        {
          q: 'If the house already has a dinner server, why add a butler in Waikoloa?',
          a: 'Only when you want the house covered outside that dinner. The server stops when the courses end. The butler’s hours run the stay. Join the inquiry list and name the gap you want filled.',
        },
        {
          q: 'What hours does a Kohala butler actually stand?',
          a: 'The call time and end time on the reply, across the days you named. Rooms, timing, and the table. Not a resort department, and not a Hilo afternoon after Kona.',
        },
        {
          q: 'Will you sell a butler for a Kona week if the bench is empty?',
          a: 'We will not sell a butler we cannot staff. Join the inquiry list. An empty bench is said in the reply before a deposit. When someone can work, the amount is quoted in writing.',
        },
        {
          q: 'Are butler hours inside the west-side chef fee?',
          a: 'They are separate start and end times. A dinner server stays separate too. 20% service and Hawaiʻi GET up to 4.712% follow the written total, each alone.',
        },
        {
          q: 'Is a Hilo butler included if I book the Kohala house?',
          a: 'A Kohala booking leaves Hilo off the week. Even a dinner-only ask on the east side is a separate dedicated east-side day, quoted in writing. Join the inquiry list for the west side, or send Hilo by itself.',
        },
        {
          q: 'What should a west-side butler inquiry say?',
          a: 'A Kona or Kohala address, the dates, who is in the house, and which hours. Join the inquiry list on [the quote form](/quote). Do not write Hilo into the same day.',
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
