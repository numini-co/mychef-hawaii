import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

/**
 * Catalog service cells that stay off the money-keyword doors.
 * Meal prep and cooking classes stay unpublished until they are real products.
 */

const desk = `${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}`;

export const gatedServices: Record<IslandId, UniqueCell[]> = {
  oahu: [
    {
      slug: 'rehearsal-dinners',
      name: 'Rehearsal dinners',
      h1: 'Oʻahu rehearsal dinner — wedding party, the night before.',
      title: 'Night-before rehearsal dinner on Oahu | myCHEF',
      description:
        'Seated rehearsal dinner for the wedding party in a Kahala dining room or Ko Olina villa, the night before. Its own line. Request a written quote.',
      lede:
        'One seated dinner the night before the wedding, for the wedding party and family. Kahala dining rooms and Ko Olina villas. Not the reception, and not the night you land.',
      photo: 'svcRehearsalOahu',
      body: [
        'The table is in the rental’s dining room or on its lānai. Kahala seats that group inside. A Ko Olina villa keeps the lawn for the wedding and uses the dining room this night. A Honolulu tower still waits on the freight window before the cook comes up. Kailua is a driveway, and it is still one address.',
        'The night is its own line, apart from the reception. Plated and family-style are both possible. The written menu decides. The chef leaves before the night runs late. The next day’s crew is separate. See [weddings](/weddings) and [pricing](/pricing). Request a written quote on [the quote form](/quote) with the date, address, headcount, and the wedding date.',
      ],
      faqs: [
        {
          q: 'Can you cook our rehearsal dinner in a Kahala house the night before the wedding?',
          a: 'Yes, when that house has a dining room or a lānai for the wedding party and family. It is one seated night, not the reception and not the night you land. Send the address and the wedding date this dinner sits before.',
        },
        {
          q: 'Can an Oʻahu rehearsal be family-style, or only plated?',
          a: 'Either style can be written. A Kahala dining room can take courses. A Ko Olina table can take platters. The menu you accept is the one we cook. We will not call one style the usual rehearsal on this island.',
        },
        {
          q: 'Will the chef stay in a Honolulu tower if the toasts run late?',
          a: 'The cook finishes and leaves before the night runs late. A tower still has to clear its freight window before service starts. The next day’s crew is a separate booking. This page is not the whole wedding week. See [weddings](/weddings).',
        },
        {
          q: 'Is a Ko Olina rehearsal the same night as the welcome dinner?',
          a: 'No. The welcome dinner is the night guests land. This dinner is the night before the ceremony, for the wedding party and family, in the villa dining room or on the lānai. They are separate lines on the quote.',
        },
        {
          q: 'How is the rehearsal quoted against the Oʻahu reception?',
          a: 'As its own line. There is no separate published rehearsal price. Fee lines are on [pricing](/pricing): 20% service and Hawaiʻi GET up to 4.712% each alone. A 50% deposit follows acceptance. Gratuity is never required.',
        },
        {
          q: 'What should we send to request a written quote for a Kailua rehearsal?',
          a: `Name the building first: a Kailua driveway, a Kahala dining room, or a Ko Olina gate, plus any freight rule. Then the dinner date, the seats, and which wedding morning follows. Request a written quote on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/weddings', label: 'Weddings' },
        { path: '/pricing', label: 'Starting prices' },
        { path: '/kahala', label: 'Kahala' },
      ],
    },
    {
      slug: 'meal-prep',
      name: 'Meal prep',
      h1: 'Meal prep on Oʻahu — not a product we sell today.',
      title: 'Meal prep on Oʻahu: what we offer today | myCHEF',
      description:
        'Weekly meal prep is not sold on Oʻahu yet. Book a cook in the house (Stay Chef) or a signature dinner. If prep opens, the price is published here.',
      lede:
        'We don’t sell weekly meal prep on Oʻahu yet. If that changes, prices will be published here. A cook in the house is a different booking.',
      photo: 'svcMealprepOahu',
      body: [
        'Honolulu residents sometimes want a week of containers. Visitors in Kahala or Ko Olina want the fridge full before the first evening. Neither is a product on this page. A cook in the house is [Stay Chef](/vacation-chef): a daily chef fee plus groceries at cost with receipts. A one-night table is a signature dinner on [pricing](/pricing), groceries inside the band.',
        'A repeating cook for a home you live in is the [household line](/personal-chef), still a person at the stove, not a drop at the door. Building freight rules still apply if the kitchen is in a tower. We will not invent a rate for labeled meals. Request a written quote for the booking that exists today, on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Do you offer weekly meal prep on Oʻahu?',
          a: 'We don’t sell weekly meal prep on Oʻahu yet. If that changes, prices will be published on this page. There is no container program and no rate for one. For food this week, book a cook in the house instead.',
        },
        {
          q: 'Can a Honolulu resident get labeled lunches instead of a cook in the house?',
          a: 'Not from this page. The household line is a cook in the home on the nights you name, at [household cooking](/personal-chef). It is not containers by the door. Stay Chef is the visitor version: a daily chef fee plus groceries at cost with receipts.',
        },
        {
          q: 'Will the chef leave a week of meals in a Ko Olina fridge before we land?',
          a: 'No. On a Stay Chef day the chef cooks in the villa and shops for that cooking, groceries at cost with receipts. See [Stay Chef](/vacation-chef). Landing day does not become a labeled-meal drop, even when the fridge is empty.',
        },
        {
          q: 'Is a Kahala signature dinner the same invoice as meal prep?',
          a: 'No. A signature dinner is one service. Groceries for that menu sit inside the per-guest band on [pricing](/pricing). Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows acceptance. Gratuity is never required. It is not a week of lunches left behind.',
        },
        {
          q: 'How do I get told if weekly prep opens on Oʻahu?',
          a: 'This page is where a price would be published. We do not keep a waitlist for a product we do not sell. For a cook now, request a written quote for Stay Chef or a dinner on [the quote form](/quote).',
        },
        {
          q: 'What should we request if we need a cook in the house this month?',
          a: `The address, the dates, and that you want a cook at the stove, not containers. Honolulu, Kahala, Ko Olina, or Kailua. Request a written quote on [the quote form](/quote). Desk: ${desk}. There is no prep price to send.`,
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Stay Chef' },
        { path: '/pricing', label: 'Starting prices' },
        { path: '/personal-chef', label: 'Household line' },
      ],
    },
    {
      slug: 'cooking-classes',
      name: 'Cooking classes',
      h1: 'Cooking classes on Oʻahu — we do not run them.',
      title: 'Cooking classes on Oʻahu: not offered | myCHEF',
      description:
        'Cooking classes are not offered on Oʻahu. No instructor and no schedule. Watch the chef cook at the house counter. Request a written quote for a dinner.',
      lede:
        'We don’t run cooking classes on Oʻahu right now. There is no instructor and no schedule on this page. A dinner where you watch the cook is a different booking.',
      photo: 'svcClassesOahu',
      body: [
        'Honolulu guests sometimes ask to cook beside the chef. We do not sell that, and we do not publish a teacher, a length, or a date. The [chef’s table](/chefs-table) seats you at the house counter while the chef plates. You watch. It is not a class and not a lesson.',
        'A full dinner without the counter is a signature night on [pricing](/pricing). A cook in the Kahala, Ko Olina, or Kailua house for the stay is [Stay Chef](/vacation-chef): a daily chef fee plus groceries at cost with receipts. The chef cooks. Request a written quote on [the quote form](/quote). If a class ever opens, this page is where it would be published.',
      ],
      faqs: [
        {
          q: 'Is there a hands-on cooking class we can book on Oʻahu?',
          a: 'We don’t run cooking classes on Oʻahu right now. There is no schedule, no instructor, and no class price. You do not cook the meal. For a dinner the chef cooks, use [pricing](/pricing) or the quote form.',
        },
        {
          q: 'Can the chef explain the dishes while cooking in a Kahala kitchen?',
          a: 'On a chef’s table night, guests sit at the house counter and watch the chef cook and plate. That is what [chef’s table](/chefs-table) already promises. It is not a talk, a technique class, or a lesson. We do not add a narration this page does not have.',
        },
        {
          q: 'Will you publish an instructor name for a Honolulu class?',
          a: 'We will not publish an instructor we do not have. This page stays without a name, a format, or a date until a class is real. A crew on a dinner is not a teacher roster.',
        },
        {
          q: 'Can a Ko Olina Stay Chef day be turned into a family class?',
          a: 'No. Stay Chef is a cook in the house for the stay: a daily chef fee plus groceries at cost with receipts, on [Stay Chef](/vacation-chef). Then 20% service and Hawaiʻi GET up to 4.712% are separate lines. The chef cooks. It does not become a class.',
        },
        {
          q: 'How do I get told if a class opens on Oʻahu?',
          a: 'This page is where a class would be published, with a price, if it ever exists. We do not keep a class list. For a counter dinner now, request a written quote on [the quote form](/quote).',
        },
        {
          q: 'What should we send if we want a dinner where we watch the chef cook?',
          a: `The address, the date, who is eating, and that you want the chef at the counter. Kahala, Ko Olina, Kailua, or town. Open [chef’s table](/chefs-table). Request a written quote on [the quote form](/quote). Desk: ${desk}. There is no class time.`,
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/pricing', label: 'Starting prices' },
        { path: '/vacation-chef', label: 'Stay Chef' },
      ],
    },
    {
      slug: 'omakase-at-home',
      name: 'Omakase at home',
      h1: 'Omakase at home on Oahu — tasting in the villa, not a restaurant claim.',
      title: 'Omakase at home on Oahu — tasting in the villa | myCHEF',
      description:
        'A chef-chosen sequence in a Kahala or Ko Olina kitchen, set from that day’s market. Often raw fish. Not a star, and not a restaurant name.',
      lede:
        'The chef picks the sequence from what was bought that day, often raw fish, and plates it at your counter. We do not claim a star.',
      photo: 'svcOmakaseOahu',
      body: [
        'Request a written quote with the house. The cook arrives on the tower’s elevator slot and sets a cold board beside the range. The sequence comes from that day’s purchase, not a standing carte. Pieces go to the counter. A name is used only when the receipt supports it. The board is cleared before the crew leaves.',
        'Shellfish and raw-fish limits have to be in the note before the shop. A compact condo that cannot hold a cold board and a stool is declined from the photos. The planned course arc, if you want it written ahead, is the [tasting menu](/fine-dining/tasting-menu). This page is the market-led night.',
      ],
      faqs: [
        {
          q: 'How is Oʻahu omakase different from the tasting menu?',
          a: 'This night is picked after the Honolulu buy, often raw, and plated on your cold board. A paper order fixed before that buy is the [tasting menu](/fine-dining/tasting-menu). Use the paper arc when you want every course named in advance. Stay here when the chef should decide at the counter.',
        },
        {
          q: 'What does a Kahala kitchen need for a raw-fish sequence?',
          a: 'A cooktop, a fridge that can hold the fish cold, and a counter to plate on. A hotel suite is declined. A tower needs the elevator reservation in the same note. Photos of the fridge and the board decide it.',
        },
        {
          q: 'How many people suit an Oʻahu omakase counter?',
          a: 'As many as that counter and that fridge can hold, confirmed in writing. Raw fish does not scale just because the listing shows a long island. Past what the house can keep cold, we say so before you accept.',
        },
        {
          q: 'Where do shellfish and raw-fish limits go before the Honolulu shop?',
          a: 'In the first note, before anything is bought. That setting is rewritten. The rest of the sequence stays. We will not claim a separate allergen kitchen. If raw fish is off the table, say so before the market run.',
        },
        {
          q: 'How is one Oʻahu omakase night priced?',
          a: 'It uses this island’s per-guest signature band, groceries inside the band. There is no separate omakase price. Then 20% service and Hawaiʻi GET up to 4.712% print on their own lines. A 50% deposit follows acceptance. Gratuity is never required. The card is [pricing](/pricing).',
        },
        {
          q: 'When will a fish on an Oʻahu omakase carry a name, and what do we send?',
          a: `A name is printed only after the Honolulu receipt is in hand. Without that paper, the plate is just the fish. Send the house, the date, who is eating, and raw-fish limits. Request a written quote on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/pricing', label: 'Starting prices' },
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
        'Breakfast is set before the working session. Lunch feeds that room, on plates or platters. Dinner is the longer cook. A small savory stays in the fridge between, shopped the same day. A Kahala tower still uses its freight window. Ko Olina loads through the house.',
        'Vegan and other limits are written before the first shop. We cook only what we designed. Days and guests are what the kitchen and the house hold, confirmed in writing. [The retreat occasion](/events/retreats) stays next door.',
        'A per-guest dinner keeps groceries inside the signature band. Multi-day Stay Chef is the day rate plus groceries at cost with receipts. See [pricing](/pricing), [vacation chef](/vacation-chef), and [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% each stand alone. A 50% deposit follows acceptance. Gratuity is never required.',
      ],
      faqs: [
        {
          q: 'How does a full-board day run in a Kahala house?',
          a: 'Breakfast is set before people sit down to work. Lunch feeds that session. Dinner is the longer cook. A small savory stays in the fridge between. The tower cook uses the freight window already booked. Ko Olina loads through the villa. This page is the food.',
        },
        {
          q: 'What if the week needs to be fully vegan?',
          a: 'The vegan draft is written before the first shop. We only claim what that kitchen will cook. We will not build a show around it. Send the limits with the dates. See [dietary notes](/dietary). A per-guest dinner still keeps groceries inside the band.',
        },
        {
          q: 'How many days and guests can the house take?',
          a: 'As many as the kitchen and the house hold, confirmed in writing. This page does not print a headcount. Tell us the cooktop, the table, and the dates. If the room cannot hold the group, we say so before you accept.',
        },
        {
          q: 'When are dietary needs fixed for the first shop?',
          a: 'Before anyone buys. A change after that can miss the morning market. Children’s plates are written the same way, beside the adults. See [dietary notes](/dietary). Send the limits once, with the address, on the quote.',
        },
        {
          q: 'How does the quote separate dinner nights from Stay Chef days?',
          a: 'A per-guest dinner keeps groceries inside the signature band. Stay Chef days are the day rate plus groceries at cost with receipts. Staff hours are separate. See [pricing](/pricing), [vacation chef](/vacation-chef), and [staffing](/staffing). A 50% deposit follows acceptance. Gratuity is never required.',
        },
        {
          q: 'What should we send to request a written quote for the week?',
          a: 'The Kahala or Ko Olina address, the dates, which meals each day, dietary limits, and any building rules. Quotes are open. Use [the quote form](/quote). Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748. We write the total before a deposit.',
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
      h1: 'Maui villa rehearsal — one seated night before the ceremony.',
      title: 'Rehearsal dinner private chef on Maui | myCHEF',
      description:
        'One seated rehearsal dinner in a Wailea, Kapalua, or Kāʻanapali villa the night before the wedding. Own line. Request a written quote.',
      lede:
        'On a villa week this is one seated dinner the night before the ceremony, for the wedding party and family. Wailea, Kapalua, and Kāʻanapali. Not the lawn reception.',
      photo: 'svcRehearsalMaui',
      body: [
        'The wedding party and family sit in the rental’s dining room or on the lānai. Wailea houses often use the dining room. A Kapalua or Kāʻanapali villa can set the same table on a covered lānai and leave the lawn for the wedding. A Friday drive between those shores is written into this night’s arrival only.',
        'Saturday’s crew is a different line. Plated and family-style are both possible, and the written menu decides. The chef is out before the night runs late. The rest of the week is on [weddings](/weddings). Fee lines are on [pricing](/pricing). Request a written quote on [the quote form](/quote) with the villa, the dinner date, the headcount, and the wedding date this night sits before.',
      ],
      faqs: [
        {
          q: 'Can you cook our rehearsal dinner at the villa the night before the wedding?',
          a: 'Yes. It is one seated dinner for the wedding party and family, in the villa dining room or on the lānai. It is not the lawn reception and not the night you land. The written menu says whether that table is plated or family-style.',
        },
        {
          q: 'Is a Wailea rehearsal just the welcome dinner with a later name?',
          a: 'No. The welcome dinner is arrival night on a villa week. This one is the night before the ceremony. A Wailea dining room and a Kapalua lānai are both this booking when you name the house. The week is on [weddings](/weddings).',
        },
        {
          q: 'Can the Kapalua wedding party eat family-style, or only from plated courses?',
          a: 'Both are possible. The written menu decides for that table. A covered lānai and the dining room can hold either style. We do not call one of them the usual Maui rehearsal. The night stays its own line.',
        },
        {
          q: 'Does the Friday drive from Kāʻanapali change who cooks on Saturday?',
          a: 'Friday’s drive is planned into this night’s arrival only. Saturday’s crew is a separate line. The chef for the rehearsal leaves before the night runs late, so the wedding morning does not inherit the same shift.',
        },
        {
          q: 'Where does a villa-week rehearsal sit on the quote next to the reception?',
          a: 'On its own line. There is no separate published price for this night. Fee lines are on [pricing](/pricing): 20% service and Hawaiʻi GET up to 4.712% each alone, then a 50% deposit after you accept. Gratuity is never required.',
        },
        {
          q: 'What do we send when we request a written quote for this villa dinner?',
          a: `Start with the shore. A Friday drive to Kapalua is not a Wailea clock. Add the villa, how many are in the wedding party, the dinner date, and the ceremony date. Request a written quote on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/weddings', label: 'Weddings' },
        { path: '/pricing', label: 'Starting prices' },
        { path: '/wailea', label: 'Wailea' },
      ],
    },
    {
      slug: 'meal-prep',
      name: 'Meal prep',
      h1: 'Meal prep on Maui — not sold for a villa week.',
      title: 'Meal prep on Maui: not sold yet | myCHEF',
      description:
        'Weekly meal prep is not sold on Maui yet. A Wailea or Kapalua week can book Stay Chef or a signature dinner. A prep price would be published here.',
      lede:
        'We don’t sell weekly meal prep on Maui yet. If that changes, prices will be published here. Arrival day is not a fridge full of labeled meals.',
      photo: 'svcMealprepMaui',
      body: [
        'A villa week in Wailea, Kapalua, or Kāʻanapali often starts with an empty fridge and a late landing. We do not fill it with packed food. [Stay Chef](/vacation-chef) is a cook in the house: a daily chef fee plus groceries at cost with receipts. The shop is for meals cooked that day.',
        'An arrival-night table is a signature dinner. The groceries for that menu sit inside the per-guest band on [pricing](/pricing). Saturday road time between the shores is a drive, not a reason to leave containers and go. There is no prep price. Request a written quote on [the quote form](/quote) for the cook or the dinner.',
      ],
      faqs: [
        {
          q: 'Do you sell weekly meal prep for a Maui villa?',
          a: 'We don’t sell weekly meal prep on Maui yet. If that changes, prices will be published on this page. A villa week does not include a stack of labeled meals. Book a cook in the house, or one dinner.',
        },
        {
          q: 'Can the chef stock the fridge for our villa week before we land in Wailea?',
          a: 'Not with a week of packed food. Stay Chef shops for the meals cooked that day, groceries at cost with receipts, and the chef is in the villa to cook them. See [Stay Chef](/vacation-chef). An empty arrival fridge is not a prep order.',
        },
        {
          q: 'Is an arrival-night dinner in Kapalua a prep drop or a cooked service?',
          a: 'A cooked service. The chef works the villa kitchen and serves that night. Groceries for the menu sit inside the per-guest band on [pricing](/pricing). It is not containers left before you land. Saturday drive time is planned into the arrival.',
        },
        {
          q: 'What groceries are billed on a Stay Chef day in Kāʻanapali?',
          a: 'Groceries are at cost, with receipts, on top of the daily chef fee. See [Stay Chef](/vacation-chef) and [pricing](/pricing). Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows acceptance. Gratuity is never required. That is not a prep package.',
        },
        {
          q: 'How would a Maui prep price be published if you ever sell it?',
          a: 'On this page, as a real price, and not before. We do not keep a waitlist for containers we do not sell. Until then, request a written quote for Stay Chef or a signature dinner on [the quote form](/quote).',
        },
        {
          q: 'What do we send when we want a cook in the villa, not containers?',
          a: `The villa, the shore, the dates, and that you want the chef cooking, not a fridge drop. Wailea, Kapalua, or Kāʻanapali. Request a written quote on [the quote form](/quote). Desk: ${desk}. There is no prep rate to ask for.`,
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Stay Chef' },
        { path: '/pricing', label: 'Starting prices' },
        { path: '/wailea', label: 'Wailea' },
      ],
    },
    {
      slug: 'cooking-classes',
      name: 'Cooking classes',
      h1: 'Cooking classes on Maui — none are booked.',
      title: 'Cooking classes on Maui are not booked | myCHEF',
      description:
        'Cooking classes are not booked on Maui. No instructor and no farm class. Watch the chef cook at a Wailea or Kapalua counter. Request a written quote.',
      lede:
        'We don’t run cooking classes on Maui right now. There is no instructor name and no date. Watching the chef cook at the villa counter is a dinner, not a class.',
      photo: 'svcClassesMaui',
      body: [
        'A Wailea or Kapalua week is not a classroom, and we will not invent an Upcountry farm class. No teacher, length, or schedule is published here. Guests who want the pans in view book the [chef’s table](/chefs-table) and watch the chef plate. It is not a lesson.',
        'The rest of the week, a cook in the villa is [Stay Chef](/vacation-chef): a daily chef fee plus groceries at cost with receipts. One arrival dinner is the signature band on [pricing](/pricing). The chef holds the knife. Request a written quote on [the quote form](/quote). A class price, if one ever exists, would be printed on this page.',
      ],
      faqs: [
        {
          q: 'Is there a hands-on cooking class in a Wailea villa?',
          a: 'We don’t run cooking classes on Maui right now. There is no schedule and no class price. You do not cook the meal. A Wailea dinner the chef cooks is on [pricing](/pricing), not on this page.',
        },
        {
          q: 'Can the chef talk through each dish at a Kapalua counter?',
          a: 'The [chef’s table](/chefs-table) seats you at the villa counter while the chef cooks and plates in front of you. That is the promise. It is not a narration, a technique class, or a lesson. We do not add a talk the page does not have.',
        },
        {
          q: 'Will you name an instructor for an Upcountry farm class?',
          a: 'No. We do not publish an instructor, and we do not invent a farm name for a class we do not run. A farm is named on a dinner only when that day’s receipt supports it. This page stays without a teacher.',
        },
        {
          q: 'Does a villa-week Stay Chef include a lesson on arrival day?',
          a: 'No. Stay Chef is the chef cooking in the villa: a daily chef fee plus groceries at cost with receipts. See [Stay Chef](/vacation-chef). Arrival night can be a signature dinner. Neither one is a lesson, and neither one hands you the stove.',
        },
        {
          q: 'How would we know if Maui classes ever open?',
          a: 'This page would publish the class and the price. We do not keep a class list in the meantime. For a counter dinner in Wailea or Kapalua now, request a written quote on [the quote form](/quote).',
        },
        {
          q: 'What do we request if we want to watch the chef cook, not take a class?',
          a: `The villa, the date, who sits the counter, and a photo of the kitchen. Open [chef’s table](/chefs-table). Request a written quote on [the quote form](/quote). Desk: ${desk}. Do not send a class time. There is not one.`,
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/pricing', label: 'Starting prices' },
        { path: '/vacation-chef', label: 'Stay Chef' },
      ],
    },
    {
      slug: 'omakase-at-home',
      name: 'Omakase at home',
      h1: 'Omakase at home on Maui — the chef chooses from the day’s market.',
      title: 'Omakase at home on Maui — chef’s choice | myCHEF',
      description:
        'A chef-chosen sequence in a Wailea or Kapalua kitchen, set from that day’s market. Often raw fish. We do not claim a star.',
      lede:
        'The chef sets the sequence from what was bought that morning, often raw fish, at your open kitchen. We do not claim a star.',
      photo: 'svcOmakaseMaui',
      body: [
        'Request a written quote for the villa. The cook reaches Wailea or Kapalua with the day’s purchase and plates at the counter, not on the windward lānai. A Saturday drive is written into the arrival so the fish is not sitting in a car. The cold board is packed away before the crew leaves.',
        'Tell us if anyone skips raw fish or shellfish before the shop. A minibar room cannot hold this. If you want the courses locked on paper ahead of the market, that is the [tasting menu](/fine-dining/tasting-menu). This night lets the chef choose.',
      ],
      faqs: [
        {
          q: 'How is Maui omakase different from a tasting menu that is already written?',
          a: 'The villa night waits for the morning buy, then the pieces are set at the counter out of the wind. Locking every course before that buy is the [tasting menu](/fine-dining/tasting-menu). Open it for a Saturday order you want fixed. Stay here if the chef should choose.',
        },
        {
          q: 'What does a Wailea kitchen need to keep a raw sequence cold?',
          a: 'A fridge that can hold the fish, a cooktop, and a counter out of the trade wind. The lānai is not the board. Photos of the fridge decide the house. A coffee-maker room is declined before you accept.',
        },
        {
          q: 'How many guests can a Kapalua omakase counter take?',
          a: 'Only what that counter and that fridge hold, confirmed in writing. We do not stretch a raw sequence because the villa sleeps more people. If the cold space is short, the reply says so.',
        },
        {
          q: 'How do shellfish and raw-fish notes get onto a West Maui sequence?',
          a: 'They go in the first message, before the morning buy. That guest’s pieces change. The rest of the sequence stays. We will not claim a separate allergen kitchen in the villa.',
        },
        {
          q: 'Does Maui omakase have a price of its own?',
          a: 'It does not. The night uses Maui’s per-guest signature band, groceries inside the band. The highway time is not a food charge. Then 20% service and Hawaiʻi GET up to 4.712% each stand alone. A 50% deposit follows acceptance. Gratuity is never required. See [pricing](/pricing).',
        },
        {
          q: 'When is a fish named on a Wailea sequence, and what do we send?',
          a: `Wailea fish stays unnamed until the morning invoice lists it. If the invoice is silent, the dish stands alone. Send the villa, the date, who is eating, and raw-fish limits. Request a written quote on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/wailea', label: 'Wailea' },
        { path: '/pricing', label: 'Starting prices' },
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
        'Three meals in a Wailea or West Maui house. South and West are different drives.',
      photo: 'svcRetreatcatMaui',
      body: [
        'In Wailea, breakfast is set before the session. Lunch stays with the group. Dinner is the longer cook, indoors if the wind shuts the lānai. Kīhei uses the table the house has. Saturday arrival in West Maui includes Honoapiʻilani.',
        'South and West are the shores you name, not a surprise on the drive. Limits are written before that shore’s first shop. Days and guests are what the kitchen and the house hold, confirmed in writing. [The retreat occasion](/events/retreats) stays next door.',
        'A per-guest dinner keeps groceries inside the signature band. Stay Chef days are the day rate, then groceries at cost with receipts. See [pricing](/pricing), [vacation chef](/vacation-chef), and [staffing](/staffing). 20% service is its own item and Hawaiʻi GET up to 4.712% is the next. The 50% deposit comes after you accept. Gratuity is never required.',
      ],
      faqs: [
        {
          q: 'How does a full-board day run in a Wailea villa?',
          a: 'Breakfast lands before the working session. Lunch stays in the house with the group. Dinner is the longer cook. Snacks sit in the fridge between. If the wind closes the lānai, meals move inside, written before you accept. [Request a written quote](/quote) and name Wailea.',
        },
        {
          q: 'What changes when the house is in West Maui on a Saturday?',
          a: 'Honoapiʻilani is built into arrival before you accept. We do not find the traffic on the invoice later. Kapalua and Kāʻanapali are not a Wailea clock. Name the shore. Quotes are open. A Kīhei house does not inherit that Saturday drive.',
        },
        {
          q: 'Where does lunch go if the trade wind closes the lānai?',
          a: 'Into the dining room already named in the note. We do not add a tent mid-week. Wailea and Kapalua use that backup. Kīhei houses that eat indoors stay indoors. Send photos of both spots if the villa has them.',
        },
        {
          q: 'How are dietary needs written before a South Maui shop?',
          a: 'They are on the draft before the first buy for that shore. A West Maui week is a different shop. See [dietary notes](/dietary). We only keep a limit the villa kitchen can cook. Say so with the dates, not on the morning of.',
        },
        {
          q: 'How does a multi-day Maui quote split dinners, the day rate, and staff?',
          a: 'Per-guest dinners keep groceries inside the signature band. Stay Chef days are the day rate plus groceries at cost with receipts. Server hours are separate on [staffing](/staffing). See [pricing](/pricing). A 50% deposit follows acceptance. Gratuity is never required.',
        },
        {
          q: 'What should a Kapalua full-board request include?',
          a: 'The villa, the dates, meals each day, dietary limits, and whether lunch must be indoors. Quotes are open. Upcountry is a surcharge, quoted with the menu. Use [the quote form](/quote). Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748.',
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
      h1: 'Kauaʻi estate rehearsal — request availability for the night before.',
      title: 'Estate rehearsal dinner, request availability | myCHEF',
      description:
        'Estate rehearsal dinner in Princeville or Poʻipū the night before the wedding. Rain and the bridge stay in the note. Request availability.',
      lede:
        'One seated dinner the night before the ceremony, in a Princeville estate or a Poʻipū dining room. Request availability and name the shore. Not the reception.',
      photo: 'svcRehearsalKauai',
      body: [
        'The wedding party and family sit in the rental’s dining room or on a covered lānai. Rain moves a Poʻipū table indoors. It does not turn the night into the reception. A Princeville house past the Hanalei bridge still follows that clause: if the road closes, the night moves rather than jumping shores.',
        'Plated and family-style are both possible. The written menu decides. The chef leaves before the night runs late, and the next day’s crew is a separate line. The week is on [weddings](/weddings). Fee lines are on [pricing](/pricing). Request availability on [the quote form](/quote) with the shore, the date, the headcount, and the wedding date this dinner sits before.',
      ],
      faqs: [
        {
          q: 'Can you cook a rehearsal dinner in a Princeville estate the night before?',
          a: 'Request availability and name the shore. If a crew exists, it is one seated dinner for the wedding party and family, in the estate dining room or on a covered lānai. A printed page is not a held date.',
        },
        {
          q: 'If rain hits a Poʻipū lānai on the night before, where does the table go?',
          a: 'Indoors, or onto a covered lānai, written before you accept. Rain changes the room. It does not turn this night into the reception. The wedding party and family still sit for one dinner.',
        },
        {
          q: 'What happens to a Hanalei rehearsal if the bridge closes that afternoon?',
          a: 'The night moves. It is not handed to Poʻipū in silence, and it is not forfeited for weather. Say if the house sits past the bridge when you request availability. The next day’s crew stays a separate line.',
        },
        {
          q: 'Can the estate table be family-style for family, not only plated?',
          a: 'Rain does not pick the style. Say platters or courses when you request availability, and that choice is what we write. A covered Poʻipū lānai can hold platters. A Princeville dining room can hold courses. Neither is the default.',
        },
        {
          q: 'Is requesting availability for this dinner the same as booking the whole week?',
          a: 'No. This page is one night. The week is on [weddings](/weddings). Fee lines are on [pricing](/pricing): 20% service and Hawaiʻi GET up to 4.712% each alone. A 50% deposit follows a written yes. Gratuity is never required. There is no separate rehearsal price.',
        },
        {
          q: 'What do we send when we request availability for a south-shore rehearsal?',
          a: `Say Poʻipū or Princeville before the menu, and whether the house sits past the bridge. Add the estate, the dinner date, the seats, and the ceremony date that follows. Request availability on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/weddings', label: 'Weddings' },
        { path: '/pricing', label: 'Starting prices' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
      ],
    },
    {
      slug: 'meal-prep',
      name: 'Meal prep',
      h1: 'Meal prep on Kauaʻi — not offered on either shore.',
      title: 'Meal prep on Kauaʻi is not for sale | myCHEF',
      description:
        'Weekly meal prep is not sold on Kauaʻi yet. A Princeville or Poʻipū cook is Stay Chef, after you request availability. A prep price would publish here.',
      lede:
        'We don’t sell weekly meal prep on Kauaʻi yet. If that changes, prices will be published here. Request availability for a cook in the house, and name the shore.',
      photo: 'svcMealprepKauai',
      body: [
        'Princeville and Poʻipū are different shops. A week of packed food is not a product on either one, and it is not a way around the Hanalei bridge. If you want meals cooked in the estate, that is [Stay Chef](/vacation-chef): a daily chef fee plus groceries at cost with receipts, and only after you request availability for that shore.',
        'A single dinner uses the per-guest band on [pricing](/pricing), with groceries for that menu inside the band. Rain and a bridge closure move a cook night. They do not create a container drop on the other shore. There is no prep price. Request availability on [the quote form](/quote) with the shore named.',
      ],
      faqs: [
        {
          q: 'Do you offer weekly meal prep on Kauaʻi?',
          a: 'We don’t sell weekly meal prep on Kauaʻi yet. If that changes, prices will be published on this page. North and south are different shops, and neither one sells containers. Request availability for a cook in the house instead.',
        },
        {
          q: 'Can packed lunches for a Princeville hike week be ordered from this page?',
          a: 'No. Packed lunches are not a product, including for a north-shore week. A far-north house still follows the Hanalei bridge when a cook is booked. Meals cooked in the estate are Stay Chef, and you request availability first.',
        },
        {
          q: 'Does a Poʻipū Stay Chef day leave containers, or does the chef cook in the house?',
          a: 'The chef cooks in the house. Stay Chef is a daily chef fee plus groceries at cost with receipts. See [Stay Chef](/vacation-chef). Poʻipū is the shorter run from Līhuʻe. It is still not a bag left on the counter.',
        },
        {
          q: 'If the Hanalei bridge is closed, can prep be dropped on the south shore instead?',
          a: 'No. We do not sell a prep drop on either shore. A closure moves a cook night. It does not become containers in Poʻipū. A south-shore cook is a new request for availability, because that shop is different.',
        },
        {
          q: 'How do I hear if Kauaʻi meal prep ever goes on sale?',
          a: 'This page would show the price. We do not keep a waitlist for a product we do not sell. For a dinner now, the band is on [pricing](/pricing): groceries inside it, then 20% service and Hawaiʻi GET up to 4.712% alone. A 50% deposit follows a written yes. Gratuity is never required.',
        },
        {
          q: 'What do we put in a request for availability when we need a cook, not a fridge drop?',
          a: `Princeville, Poʻipū, or Kapaʻa, the estate, the dates, and that you want the chef cooking. Request availability on [the quote form](/quote). Desk: ${desk}. A reply is not a held cook. There is no prep price.`,
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Stay Chef' },
        { path: '/pricing', label: 'Starting prices' },
        { path: '/princeville', label: 'Princeville' },
      ],
    },
    {
      slug: 'cooking-classes',
      name: 'Cooking classes',
      h1: 'Cooking classes on Kauaʻi — closed on both shores.',
      title: 'Cooking classes on Kauaʻi stay closed | myCHEF',
      description:
        'Cooking classes are not offered on Kauaʻi. No instructor on either shore. Watch the chef cook at a Princeville or Poʻipū counter. Request availability.',
      lede:
        'We don’t run cooking classes on Kauaʻi right now. No teacher name, on the north shore or the south. Request availability if you want to watch the chef cook.',
      photo: 'svcClassesKauai',
      body: [
        'Princeville and Poʻipū do not have a standing class, and rain does not create one. We will not publish an instructor, a length, or a date. Book the [chef’s table](/chefs-table) and request availability for that shore. You sit the counter and watch the chef plate. It is not a lesson.',
        'A cook in the house for the stay is [Stay Chef](/vacation-chef): a daily chef fee plus groceries at cost with receipts, after you request availability. One dinner is the band on [pricing](/pricing). A Hanalei bridge closure moves a far-north night. It does not create a class on the other shore. If a class ever opens, the price would be on this page.',
      ],
      faqs: [
        {
          q: 'Is there a hands-on cooking class on Kauaʻi right now?',
          a: 'We don’t run cooking classes on Kauaʻi right now. There is no schedule and no class price on either shore. You do not cook the meal. Request availability for a dinner the chef cooks, on [pricing](/pricing).',
        },
        {
          q: 'Can guests at a Princeville counter hear the chef explain technique?',
          a: 'On the [chef’s table](/chefs-table), guests sit the estate counter and watch the chef cook and plate. That is the promise. It is not a technique talk and not a lesson. Request availability and name the shore. Rain keeps the stools inside.',
        },
        {
          q: 'Will a Poʻipū request for availability include a teacher name?',
          a: 'No. We will not publish an instructor we do not have, on the south shore or the north. A request for availability is for a cook night, not a roster. This page stays without a name until a class is real.',
        },
        {
          q: 'If rain closes the garden, does a class move inside?',
          a: 'There is no class to move. A chef’s table night already keeps the seats at the indoor counter when rain hits. A bridge closure moves a far-north dinner. It does not invent a class under the roof in Poʻipū.',
        },
        {
          q: 'How do I hear if cooking classes open on either shore?',
          a: 'This page would publish the class and the price. We do not keep a class list. For a counter dinner now, request availability on [the quote form](/quote). Fee lines for a dinner sit on [pricing](/pricing). Gratuity is never required.',
        },
        {
          q: 'What should a request for availability say if we want the chef’s table, not a class?',
          a: `Princeville or Poʻipū, the estate, the date, who sits the counter, and that you want to watch the chef cook. Open [chef’s table](/chefs-table). Request availability on [the quote form](/quote). Desk: ${desk}. Do not ask for a teacher.`,
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/pricing', label: 'Starting prices' },
        { path: '/vacation-chef', label: 'Stay Chef' },
      ],
    },
    {
      slug: 'omakase-at-home',
      name: 'Omakase at home',
      h1: 'Omakase at home on Kauai — chef’s choice, both shores.',
      title: 'Omakase at home on Kauai — both shores | myCHEF',
      description:
        'A chef-chosen sequence in a Princeville or Poʻipū kitchen, from that day’s buy. Request availability. We do not claim a star.',
      lede:
        'The chef chooses the sequence from that day’s purchase, often raw fish, at the estate counter. Request availability and name the shore.',
      photo: 'svcOmakaseKauai',
      body: [
        'Request availability with Princeville or Poʻipū named. The cook sets a cold board at the counter that faces the range, not on an open terrace if rain is forecast. A far-North house still follows the Hanalei bridge. If the road closes, the night moves. The board is packed before the drive back.',
        'Raw-fish and shellfish limits belong in the request, before any purchase. A galley without cold space is declined in the reply. A sequence planned on paper ahead of the market is the [tasting menu](/fine-dining/tasting-menu). This page is the chef’s choice for the shore you named.',
      ],
      faqs: [
        {
          q: 'How is a Kauaʻi omakase different from the tasting menu?',
          a: 'The estate night is chosen after the purchase for the shore you named, and the board stays indoors if rain is up. An order written before that purchase is the [tasting menu](/fine-dining/tasting-menu). Request availability here for the chef’s choice. Open that page if you want the arc fixed.',
        },
        {
          q: 'What does rain change about a Princeville raw-fish board?',
          a: 'The board stays at the indoor counter. An open terrace is not the pass in weather. The covered note is part of the request. If the Hanalei bridge closes, the night moves. We do not keep a deposit for a road that shut.',
        },
        {
          q: 'How many guests can sit a Poʻipū omakase counter?',
          a: 'Only what that counter and that fridge hold, confirmed in writing from photos. A request for availability is not a promise that a long island can take a raw sequence. If the cold space is short, the reply says so.',
        },
        {
          q: 'Where do raw-fish limits go on a both-shores request?',
          a: 'In the request for availability, before the purchase for that shore. That guest’s pieces change. The others stay. We will not claim a separate allergen kitchen in Princeville or Poʻipū.',
        },
        {
          q: 'Is a price held just because omakase is on this page?',
          a: 'A request for availability does not hold a price. If a crew can take the shore, the night uses this island’s per-guest signature band, groceries inside it. There is no separate omakase price. Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows a written yes. Gratuity is never required. See [pricing](/pricing).',
        },
        {
          q: 'When is a fish named, and how do I request availability?',
          a: `The shore’s fish stays a dish until the receipt for that purchase lists a name. Name Princeville or Poʻipū, the estate, the date, who is eating, and raw-fish limits. Request availability on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/poipu', label: 'Poʻipū' },
        { path: '/pricing', label: 'Starting prices' },
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
        'Breakfast through dinner in the house. Mist or sun follows the shore. Request availability.',
      photo: 'svcRetreatcatKauai',
      body: [
        'Name the shore first. Poʻipū breakfast uses the south sun. Princeville uses mist and a covered lānai. Lunch sits with the working session. Dinner is the longer cook. Rain moves a meal under cover and does not swap shores.',
        'Past the Hanalei bridge, a closure moves the days and does not hand them to Poʻipū. Limits are written before that shore’s shop. Days and guests are what the kitchen and the house hold, confirmed in writing. [Request availability](/quote). [The retreat occasion](/events/retreats) is next door.',
        'A per-guest dinner keeps groceries inside the signature band when a crew exists. Stay Chef days are the day rate plus groceries at cost with receipts. See [pricing](/pricing), [vacation chef](/vacation-chef), and [staffing](/staffing). 20% service and GET up to 4.712% each stand alone. A 50% deposit follows a written yes. Gratuity is never required.',
      ],
      faqs: [
        {
          q: 'How does a full-board day differ between Poʻipū and Princeville?',
          a: 'Poʻipū is south sun and a shorter drive from Līhuʻe. Princeville is mist and a covered roof from the start. Lunch and dinner follow that shore. Request availability for one of them. We do not treat the two kitchens as one shop.',
        },
        {
          q: 'What happens to a North Shore week if the Hanalei bridge closes?',
          a: 'The days move with the road. A closure does not cancel the food, and it does not become Poʻipū. Houses that are not past the bridge do not inherit the clause. Read the [bridge notes](/hanalei-bridge). Request availability with the bridge side named.',
        },
        {
          q: 'Can a vegan week be designed for the north?',
          a: 'It can, when the draft is written before the shop and the kitchen can keep it. We claim only what is true. The bridge clause still applies if the house is past Hanalei. See [dietary notes](/dietary). Request availability. A menu is not a performance.',
        },
        {
          q: 'How do you set days and guests without printing a headcount?',
          a: 'From the brief: what that kitchen and that house hold, confirmed in writing. We do not publish a capacity here. Photos of the cooktop and the table are the useful part. If the room is short, we say so before any yes.',
        },
        {
          q: 'How does the quote read while Kauaʻi availability is still a request?',
          a: 'The signature band is the shape of a dinner, groceries inside it, and it is not a hold. Stay Chef days are the day rate plus groceries at cost with receipts. See [pricing](/pricing) and [staffing](/staffing). A 50% deposit waits for a written yes. Gratuity is never required.',
        },
        {
          q: 'How do I request availability for full-board and name the shore?',
          a: 'Send the house, the dates, Poʻipū or Princeville, meals each day, and dietary limits on [the quote form](/quote). A request is not a held crew. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748. Say if the house sits past the bridge.',
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
      h1: 'Kohala rehearsal dinner — west-side night, on the inquiry list.',
      title: 'West-side rehearsal dinner before the wedding | myCHEF',
      description:
        'West-side rehearsal on a Kona–Kohala terrace the night before. Join the inquiry list. Hilo is a separate dedicated east-side day, quoted in writing.',
      lede:
        'One seated dinner the night before the ceremony, on a Kona, Waikoloa, or Kohala terrace. Join the inquiry list. Hilo is a separate dedicated east-side day, quoted in writing.',
      photo: 'svcRehearsalBigisland',
      body: [
        'The wedding party and family sit in the rental’s dining room, or on the terrace once the lava stone cools. Kona, Waikoloa, and the Kohala Coast come first. Hilo is not added onto that night. It is a separate dedicated east-side day, quoted in writing. Ironman week compresses Kailua-Kona. Flag the dates. The night does not grow into the reception.',
        'Plated and family-style are both possible. The written menu decides. The chef leaves before the night runs late. The next day’s crew is separate. See [weddings](/weddings) and [pricing](/pricing). Join the inquiry list on [the quote form](/quote) with the west-side address, the date, the headcount, and the wedding date.',
      ],
      faqs: [
        {
          q: 'Can you cook the rehearsal on a Kohala terrace the night before the wedding?',
          a: 'Join the inquiry list for a west-side house. It is one seated dinner for the wedding party and family, in the dining room or on the terrace once the stone cools. Kona, Waikoloa, and Kohala come first.',
        },
        {
          q: 'Can a Hilo rehearsal share the crew with a Kona dinner the same day?',
          a: 'No. Hilo is a separate dedicated east-side day, quoted in writing. It is not stacked onto a west-side night. Join the inquiry list with the Kona–Kohala address only.',
        },
        {
          q: 'Does Ironman week in Kailua-Kona turn the rehearsal into a larger party?',
          a: 'No. Town compresses that week. Flag the dates when you join the inquiry list. The night is still one seated dinner, quoted as its own line, and the next day’s crew is separate.',
        },
        {
          q: 'Who is at the table, and can the menu be family-style as well as plated?',
          a: 'The wedding party and family, not the full reception. Both plated and family-style are possible. The written menu decides. We do not call either style usual. The chef leaves before the night runs late.',
        },
        {
          q: 'Is this the welcome dinner for people who just landed in Kona?',
          a: 'No. The welcome dinner is the first night of the stay. This one is the night before the ceremony. The rest of the week is on [weddings](/weddings). This page does not plan that week.',
        },
        {
          q: 'What do we send to join the inquiry list for a west-side rehearsal?',
          a: `Send the west-side address only, the dinner date, the seats, and the ceremony date. Leave Hilo off. 20% service and Hawaiʻi GET up to 4.712% sit on [pricing](/pricing), each alone. Gratuity is never required. Join the inquiry list on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/weddings', label: 'Weddings' },
        { path: '/pricing', label: 'Starting prices' },
        { path: '/kohala-corridor', label: 'West-side radius' },
      ],
    },
    {
      slug: 'meal-prep',
      name: 'Meal prep',
      h1: 'Meal prep on Hawaiʻi Island — not sold on the west side.',
      title: 'Meal prep on Hawaiʻi Island, not yet | myCHEF',
      description:
        'Meal prep is not sold on Hawaiʻi Island yet. Join the inquiry list for a west-side cook. Hilo is a separate dedicated east-side day, quoted in writing.',
      lede:
        'We don’t sell weekly meal prep on Hawaiʻi Island yet. If that changes, prices will be published here. Join the inquiry list for a cook on the west side.',
      photo: 'svcMealprepBigisland',
      body: [
        'Kona, Waikoloa, and the Kohala Coast come first. A fridge of labeled meals is not a product there, including during Ironman week in Kailua-Kona. [Stay Chef](/vacation-chef) is a cook in the house: a daily chef fee plus groceries at cost with receipts. Join the inquiry list for that day. A signature dinner is on [pricing](/pricing), with groceries for that menu inside the band.',
        'Hilo is not a second stop on a Kona run. It is a separate dedicated east-side day, quoted in writing. Hard sun does not change the product. There is still no prep price. Join the inquiry list on [the quote form](/quote) with a west-side address only.',
      ],
      faqs: [
        {
          q: 'Do you offer weekly meal prep on the Kona–Kohala side?',
          a: 'We don’t sell weekly meal prep on Hawaiʻi Island yet. If that changes, prices will be published on this page. The west side can take a cook in the house. Join the inquiry list for that. Do not expect containers.',
        },
        {
          q: 'Can the chef pack Ironman-week lunches in a Kona fridge?',
          a: 'No. Ironman week compresses Kailua-Kona, and it still does not create a packed-lunch product. Flag the dates if you want a cook in the house. Stay Chef is that cook, not a fridge route. Join the inquiry list. A held crew is not implied.',
        },
        {
          q: 'Is Stay Chef on the west side a daily cook in the house, or a container route?',
          a: 'A daily cook in the house: the chef fee plus groceries at cost with receipts. See [Stay Chef](/vacation-chef). The shop is for food cooked that day. It is not labeled meals left in a Waikoloa fridge before you land.',
        },
        {
          q: 'Can Hilo be added as a meal-prep stop on a Waikoloa day?',
          a: 'No. Hilo is a separate dedicated east-side day, quoted in writing, and meal prep is not sold there either. A Waikoloa day stays on the west side. Do not stack Volcano onto a Kona note.',
        },
        {
          q: 'How do I get told if west-side meal prep opens?',
          a: 'This page would publish the price. We do not keep a waitlist. A dinner now uses the band on [pricing](/pricing), groceries inside it, then 20% service and Hawaiʻi GET up to 4.712% alone. A 50% deposit follows a written yes. Gratuity is never required. Join the inquiry list for a cook.',
        },
        {
          q: 'What do we send to join the inquiry list for a cook in the house?',
          a: `A Kona, Waikoloa, or Kohala address, the dates, and that you want the chef cooking, not containers. Leave Hilo off. Join the inquiry list on [the quote form](/quote). Desk: ${desk}. There is no prep price.`,
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Stay Chef' },
        { path: '/pricing', label: 'Starting prices' },
        { path: '/kona', label: 'Kona' },
      ],
    },
    {
      slug: 'cooking-classes',
      name: 'Cooking classes',
      h1: 'Cooking classes on Hawaiʻi Island — not offered.',
      title: 'Cooking classes, Kona side, not offered | myCHEF',
      description:
        'Cooking classes are not offered on Hawaiʻi Island. Watch the chef on the Kona side. Hilo is a separate dedicated east-side day, quoted in writing.',
      lede:
        'We don’t run cooking classes on Hawaiʻi Island right now. No instructor on the Kona–Kohala side. Join the inquiry list to watch the chef cook. Hilo is not a class day.',
      photo: 'svcClassesBigisland',
      body: [
        'A Kona or Kohala kitchen is not a classroom. We do not publish an instructor, a length, or a date. Coffee is labeled for origin when the receipt supports it, on [coffee origin](/coffee-act-198). That label is not a lesson. Join the inquiry list for the [chef’s table](/chefs-table) if you want to watch the chef plate.',
        'A cook in the house is [Stay Chef](/vacation-chef): a daily chef fee plus groceries at cost with receipts. One dinner is the band on [pricing](/pricing). Hilo is a separate dedicated east-side day, quoted in writing. If a class ever opens, the price would be printed here.',
      ],
      faqs: [
        {
          q: 'Is there a hands-on cooking class on the Kona side?',
          a: 'We don’t run cooking classes on Hawaiʻi Island right now. There is no schedule and no class price. You do not cook the meal. Join the inquiry list for a west-side dinner the chef cooks. See [pricing](/pricing).',
        },
        {
          q: 'Can the chef explain dishes while cooking at a Kohala counter?',
          a: 'On the [chef’s table](/chefs-table), guests sit the west-side counter and watch the chef cook and plate. That is the promise. It is not a talk and not a lesson. Join the inquiry list. Hard sun keeps the first courses inside.',
        },
        {
          q: 'Is a coffee-farm class something you sell, or only a label when the receipt supports it?',
          a: 'We do not sell a coffee-farm class, and we do not name a farm without the receipt. Origin is a label when the paper supports it. See [coffee origin](/coffee-act-198). This page has no instructor and no class date.',
        },
        {
          q: 'Can a Volcano lesson share the west-side crew the same day?',
          a: 'There is no lesson to share. Hilo and Volcano are a separate dedicated east-side day, quoted in writing, even for a dinner. They are not stacked onto a Kona class, because no class exists. Join the inquiry list for the west side only.',
        },
        {
          q: 'How do I get told if a west-side class opens?',
          a: 'This page would publish the class and the price. We do not keep a class list. A dinner now uses the band on [pricing](/pricing), then 20% service and Hawaiʻi GET up to 4.712% alone. A 50% deposit follows a written yes. Gratuity is never required.',
        },
        {
          q: 'What do we send to join the inquiry list if we want to watch the chef cook?',
          a: `A Kona or Kohala address, the date, who sits the counter, and a photo of it. Leave Hilo off. Open [chef’s table](/chefs-table). Join the inquiry list on [the quote form](/quote). Desk: ${desk}. Do not send a class time.`,
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/pricing', label: 'Starting prices' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
      ],
    },
    {
      slug: 'omakase-at-home',
      name: 'Omakase at home',
      h1: 'Omakase at home on Hawaiʻi Island — west-side chef’s choice.',
      title: 'Omakase at home on the Big Island | myCHEF',
      description:
        'Join the inquiry list for a chef-chosen sequence in a Kona or Kohala kitchen, often raw fish. Not a star claim. Hilo is a separate dedicated east-side day.',
      lede:
        'The chef chooses the sequence from that day’s purchase, often raw fish, at a west-side counter. Join the inquiry list. We do not claim a star.',
      photo: 'svcOmakaseBigisland',
      body: [
        'Join the inquiry list with a Kona or Kohala address. The cook sets a cold board indoors while the lava terrace is still hot. The sequence comes from that day’s purchase. A fish is named only when the receipt supports it. The board is cleared before the crew leaves the west side.',
        'Raw-fish and shellfish limits go in the inquiry before the shop. A minibar fridge cannot hold the sequence. Hilo is a separate dedicated east-side day, quoted in writing. A sequence locked on paper ahead of the market is the [tasting menu](/fine-dining/tasting-menu). This page is the chef’s choice on the west side.',
      ],
      faqs: [
        {
          q: 'How is west-side omakase different from the tasting menu?',
          a: 'The Kona night is set after the west-side buy and plated indoors, away from the hot stone. A sequence locked before that buy is the [tasting menu](/fine-dining/tasting-menu). Join the inquiry list here for the chef’s choice. That other page cannot pull Hilo into the same evening.',
        },
        {
          q: 'Can a Hilo omakase share the day with a Waikoloa counter?',
          a: 'It cannot. Hilo is a separate dedicated east-side day, quoted in writing. Join the inquiry list with the west-side address only. Do not add Volcano to the same afternoon.',
        },
        {
          q: 'What does a Kohala kitchen need for a raw sequence in the heat?',
          a: 'A fridge that can hold the fish cold, a cooktop, and an indoor counter. The lava terrace is the view after the stone cools, not the board. Photos of the fridge decide it. A minibar room is declined.',
        },
        {
          q: 'When are raw-fish limits locked for a Kona sequence?',
          a: 'In the inquiry, before the west-side shop. That setting changes. The rest of the sequence stays. We will not claim a separate allergen kitchen. If raw fish is off, say so before anyone buys.',
        },
        {
          q: 'Does west-side omakase have its own published price?',
          a: 'It does not. The night uses this island’s per-guest signature band, groceries inside it. The simpler table, where the house fits, is on the pricing page. Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows a written yes. Gratuity is never required. See [pricing](/pricing).',
        },
        {
          q: 'What do I send to join the inquiry list for a Kona omakase?',
          a: `The west-side address, the date, who is eating, raw-fish limits, and a photo of the fridge. A fish is named only when the receipt supports it. Hilo stays its own day. Join the inquiry list on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/kona', label: 'Kona' },
        { path: '/pricing', label: 'Starting prices' },
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
        'Breakfast fish, lunch in the shade, dinner on the west side. Hilo is a different day.',
      photo: 'svcRetreatcatBigisland',
      body: [
        'Join the inquiry list for a Kona or Kohala house first. Breakfast is inside, out of the hard sun. Lunch feeds the working session in that shade. Dinner is the longer cook. A small savory stays in the fridge between. Open lava is not the dining room.',
        'Hilo and Volcano are a separate dedicated east-side day, quoted in writing, not added to a west-side week. Limits are written before that shop. Days and guests are what the kitchen and the house hold, confirmed in writing. [The retreat occasion](/events/retreats) is next door.',
        'A per-guest dinner keeps groceries inside the signature band. Stay Chef days are the day rate, groceries at cost with receipts. See [pricing](/pricing), [vacation chef](/vacation-chef), and [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% are separate. A 50% deposit follows acceptance. Gratuity is never required.',
      ],
      faqs: [
        {
          q: 'How does a full-board day run in a Kona or Kohala house?',
          a: 'Breakfast is set in the shade before the session. Lunch stays with the group, indoors. Dinner is the longer cook that evening. Snacks wait in the fridge between. Join the inquiry list for the west side. The open rock is not where we serve.',
        },
        {
          q: 'Can Volcano full-board share a week with Waikoloa?',
          a: 'It cannot. Volcano and Hilo are a separate dedicated east-side day, quoted in writing, with its own crew. Join the inquiry list for Kona–Kohala, or send the east side alone. We will not drive a week across the island and call it one booking.',
        },
        {
          q: 'Where do meals sit when the lava terrace is too hot?',
          a: 'In the house, or on a covered lānai that is actually cool. Say which one you have. A picnic on the rock is not a kitchen. Photos of the cooktop and the shaded table belong with the address. We confirm the room before a shop.',
        },
        {
          q: 'When are dietary needs written for the west-side shops?',
          a: 'Before the first buy, for Kona–Kohala only. An east-side day gets its own draft. See [dietary notes](/dietary). We keep a limit only when that kitchen can cook it. Send the limits with the inquiry, not after the groceries are in.',
        },
        {
          q: 'How does the inquiry separate dinners from Stay Chef days?',
          a: 'A per-guest dinner keeps groceries inside the signature band. Stay Chef days are the day rate plus groceries at cost with receipts. Staff hours are separate. See [pricing](/pricing), [vacation chef](/vacation-chef), and [staffing](/staffing). A 50% deposit follows a written yes. Gratuity is never required.',
        },
        {
          q: 'What do I send to join the inquiry list for a west-side retreat?',
          a: 'The Kona, Waikoloa, or Kohala address, the dates, meals each day, and dietary limits on [the quote form](/quote). Leave Hilo and Volcano off that note. Desk: quotes@mychef-hawaii.com, +1 (808) 468-7748. Joining the inquiry list is not a held week.',
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
