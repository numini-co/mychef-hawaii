import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

/**
 * Catalog HELP_SLUGS — first-booking documents, not money-keyword doors.
 * Distinct from /faq, /how-it-works, /weddings, /corporate-catering,
 * /events/corporate-events, and /quote.
 */

const desk = `${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}`;

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
      title: 'First Oʻahu booking — what to send | myCHEF',
      description:
        'What a first Oʻahu note needs: dates, address, guests, dietary limits, and the occasion. Then a written quote. Hotel suites without a stove are declined.',
      lede:
        'The first note names the corridor, the kitchen, and who is eating. A written quote follows a complete request. This page is that note, not the night itself.',
      photo: 'helpStartOahu',
      body: [
        'Send five things on the quote form: dates, the address or the corridor, who is eating, dietary notes, and the occasion. Honolulu, Waikīkī, Kahala, Ko Olina, Kailua, and the North Shore are the corridors on this site. A tower also needs the elevator reservation and the building rules.',
        'What happens next is a written total if the kitchen can hold the night, then a menu draft about 48 hours after that complete request. The sequence of the evening itself stays on how it works. A suite with a coffee maker is declined before any deposit.',
        'The first note is a checklist, not a menu. Put the date, a Honolulu, Kahala, Ko Olina, or Kailua address, the guest count, the format, every allergy, and a budget band from [pricing](/pricing). A tower also needs its freight window and the building rule at the curb. What happens next is a written quote if that kitchen has a cooktop. A suite with only a coffee maker is declined before any deposit. Photos of the burners belong with the note. Request a written quote on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can you cook a Waikīkī high-rise if the listing is a hotel suite?',
          a: 'Only when the residence has a cooktop, a fridge, and a table. A standard suite with a coffee maker is declined. Send photos and the building’s elevator rules with the address. Request a written quote on [the quote form](/quote).',
        },
        {
          q: 'What has to be in the first Oʻahu message?',
          a: 'Dates, the address or the corridor, who is eating, dietary notes, and the occasion. Kahala, Ko Olina, Kailua, and town are enough to place the house. A resort slogan is not an address. Quotes are open.',
        },
        {
          q: 'What happens after a complete Oʻahu request?',
          a: 'Photos of a real cooktop produce a written total in Hawaii business hours, and a tower’s elevator slot is on that total. The draft follows about 48 hours after the note is complete. A 50% deposit locks the date only after you accept. The evening’s order is on [how it works](/how-it-works).',
        },
        {
          q: 'Do I need a separate note for dietary limits and for children?',
          a: 'Put both in the first message. Allergies are designed into the plates. Children’s plates are planned with the adults, not added from a freezer later. The [menu guide](/help/menu-guide) is where the draft is read.',
        },
        {
          q: 'Which Oʻahu page is the price, and which is this guide?',
          a: 'This guide is the first note. Prices are on [pricing](/pricing): the per-guest signature band, groceries inside it, then 20% service and Hawaiʻi GET up to 4.712% on their own lines. Gratuity is never required. Common questions live on the [FAQ](/faq).',
        },
        {
          q: 'Who should be on the Oʻahu email that asks for the quote?',
          a: `The person who can accept the written total. A planner may send the photos. The approval still has to be in writing. Request a written quote on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/quote', label: 'Written quote' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'menu-guide',
      name: 'Menu guide',
      h1: 'How to read an Oahu menu draft — one table, then revisions.',
      title: 'How to read an Oʻahu menu draft | myCHEF',
      description:
        'How an Oʻahu menu draft is written for one house, how you revise it, and what a name on a fish cannot promise. About 48 hours after a complete request.',
      lede:
        'The draft is written for your table. The sample on the menus page is an example, not a fixed restaurant menu you order from.',
      photo: 'helpMenuOahu',
      body: [
        'A complete quote request comes first. The draft follows about 48 hours later and names courses for that Kahala dining room or Ko Olina kitchen, not a standing list. You approve it in writing. A revision of a course, a headcount, or a dietary note goes back in writing before the shop.',
        'Children’s plates are planned in the same draft as the adults. A fish, a farm, or a shop is named only when the receipt supports it. We do not print a supplier we cannot show. The three-course example, if that is the shape you want, lives on its own page.',
        'Read the draft as courses for one Kahala or Ko Olina kitchen, not a standing list. Groceries for that signature dinner sit inside the per-guest band. A Stay Chef day is different: the daily chef fee, then groceries at cost with receipts, on [Stay Chef](/vacation-chef). An allergy is a flag on the course it changes, written before the Honolulu shop. If the market lacks the fish the draft named, the swap is marked on the same thread before the buy. Reply there to ask for a change. The card is [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'How long after a complete Honolulu request does the menu draft show up?',
          a: 'About 48 hours after the request has dates, the house, who is eating, and the dietary list. Then you revise in writing. A partial note does not start that clock. The sample courses are on [menus](/menus).',
        },
        {
          q: 'Can I choose an Oʻahu dinner off a printed menu?',
          a: 'Every table is designed. The menus page shows examples, including a [three-course](/menus/three-course) shape. It is not a list you tick. Say the direction you want in the note, and the draft is written for the house.',
        },
        {
          q: 'How do I ask for a revision on an Oʻahu draft?',
          a: 'Reply in writing on the same thread. A swapped course or a new restriction is marked before the shop. Once the shop is done, the draft is what was bought. The quote is the record, not a side text.',
        },
        {
          q: 'Where do a shellfish note and a child’s plate sit in the Oʻahu draft?',
          a: 'Both are written before the shop, on the same draft as the adults. The child’s plate is planned, not a freezer extra. We will not claim a separate allergen kitchen. Dietary limits also have their own page at [dietary](/dietary).',
        },
        {
          q: 'Will the Oʻahu draft name a market, a boat, or a farm?',
          a: 'Only when that day’s receipt supports the name. Otherwise the dish is the dish. We do not decorate a Kahala draft with a supplier we cannot show. Coffee, fish, and produce follow that same rule.',
        },
        {
          q: 'Does the draft include the Oʻahu price?',
          a: `The draft is the food. The price is the per-guest signature band on [pricing](/pricing), groceries inside it, then 20% service and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit follows acceptance. Gratuity is never required. Desk: ${desk}.`,
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
        'Planner checklist for an Oahu wedding week: welcome, rehearsal, reception, recovery brunch as separate lines. Published prices.',
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
      h1: 'How to brief an Oʻahu corporate dinner.',
      title: 'How to brief an Oʻahu corporate dinner | myCHEF',
      description:
        'What an Oʻahu brief needs: dates, the house address, headcount, and who can approve. The quote shows the band, service, and tax on separate lines.',
      lede: 'What to put in an Oʻahu brief before a menu exists: the house, the dates, the headcount, and who can approve.',
      photo: 'helpCorporateOahu',
      body: [
        'The useful Oʻahu note names a Kahala, Ko Olina, Kailua, or Honolulu address, the dates, and the headcount, plus who can approve a written total. A tower also needs its freight window and the building rule the crew will meet at the curb. Kitchen photos matter more than a listing headline. Request a written quote on [the quote form](/quote).',
        'The quote comes back line by line. The rate-card band is the food, and groceries for a signature dinner stay inside it. Then 20% service. Then Hawaiʻi GET up to 4.712%. A 50% deposit is collected after acceptance. Gratuity is never required. The person who accepts should receive the invoice. A mixed team’s dietary list is part of the brief, written before the shop. We do not claim a separate allergen kitchen. HCC citywides are closed through 2027. Larger than about seventy-five is quoted or declined. Bands are on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'If the brief is a citywide at the convention centre, will you take it?',
          a: 'No. Residences and villas only. Send a house address in Kahala, Ko Olina, or town. A conference title is not a brief we can cook from.',
        },
        {
          q: 'What do I put in an Oʻahu offsite brief?',
          a: 'Dates, headcount, the house address, kitchen photos, the dietary list, and the person who can approve the total. A tower also needs the freight window. Use [the quote form](/quote). We do not draft a menu from a ballroom name.',
        },
        {
          q: 'When should that brief go in, and when does a written quote come back?',
          a: 'Send it once the house and the dates are held. We reply in Hawaii business hours. The menu draft follows about 48 hours after a complete request. A 50% deposit holds the date after you accept. A verbal yes does not.',
        },
        {
          q: 'What do you check in the house before an Oʻahu quote is accepted?',
          a: 'A cooktop, a fridge, and a table, judged from the photos rather than the listing headline. A hotel room with a coffee maker is declined before any deposit. Kahala dining rooms and Ko Olina villas are the usual yes.',
        },
        {
          q: 'How do we sign off the menu and lock the final headcount?',
          a: 'Approve the draft in writing. Headcount and dietary changes go in writing after that. The quote is the contract, not the chat. If the seats change, the total is rewritten before the deposit.',
        },
        {
          q: 'Who is allowed to accept the Honolulu total?',
          a: `The person who can say yes to the written quote. A coordinator may send the photos. The approval still has to be in writing. Quotes are open. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/corporate-catering', label: 'Executive dinners' },
        { path: '/events/corporate-events', label: 'House offsites' },
        { path: '/conventions', label: 'Conventions' },
      ],
    },
    {
      slug: 'managing-booking',
      name: 'Managing a booking',
      h1: 'After the Oahu quote — deposit, date lock, changes in writing.',
      title: 'After the Oʻahu quote — deposit and changes | myCHEF',
      description:
        'How an Oʻahu booking is held: a 50% deposit after you accept, written changes to date, address, or headcount, and service and tax on their own lines.',
      lede:
        'A 50% deposit locks an Oʻahu date only after you accept the written total. Later changes go back in writing.',
      photo: 'helpBookingOahu',
      body: [
        'Fifty percent locks the date you accepted. It does not lock a different night, a different tower, or a longer guest list. Service at 20% and Hawaiʻi GET up to 4.712% print as their own lines. Gratuity is never required. A verbal yes does not hold the calendar.',
        'Headcount, date, and address changes are written on the same thread. A Gold Coast house and a Ko Olina villa keep separate quotes. If the seats change, the total is rewritten before the deposit is treated as covering the new plan. The quote is the record.',
        'After you accept, 50% holds the Kahala, Ko Olina, or Honolulu date on that total, not a different tower and not a longer list. A new headcount, date, or address goes back on the same thread. The invoice then shows the food, then 20% service, then Hawaiʻi GET up to 4.712%, each on its own line. Gratuity is optional and is never required. The deposit covers the new plan only after you accept the rewrite. A chat does not move a freight window. Send the change on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'How do I change the Oʻahu guest count after I have accepted?',
          a: 'Write the new count on the same thread as soon as you know it. The quote is the record. A day-of text does not rewrite the shop. The total is updated before the deposit is treated as holding the new list.',
        },
        {
          q: 'Can I move an Oʻahu date or switch from Kahala to Ko Olina?',
          a: 'Both are written changes. A new date is locked only if that day can be staffed, and only after you accept the rewritten total. A different address can change the building rules and the travel line. A chat message does not move the hold.',
        },
        {
          q: 'What does the 50% deposit actually lock on Oʻahu?',
          a: 'A date you have accepted in writing, for the house and the headcount on that total. The other half is the balance of the same quote. It does not lock a verbal plan. Gratuity is never required and is not inside the deposit.',
        },
        {
          q: 'Where do the service charge and the tax sit on a Kahala total?',
          a: 'They follow the food as separate lines: 20% service, then Hawaiʻi GET up to 4.712%. Neither is folded into the Kahala band. Groceries for that signature dinner stay inside the band. Read the card on [pricing](/pricing) and the line order on [service and tax lines](/private-chef-cost).',
        },
        {
          q: 'What happens to the Oʻahu deposit if the date has to move?',
          a: 'The 50% deposit locks the date you already accepted. A different night is a written rewrite of the total, and it is held only if that day can be staffed and you accept again. A chat does not move the hold. Send the new date on [the quote form](/quote).',
        },
        {
          q: 'Who can approve an Oʻahu change after the quote is out?',
          a: `The person who can accept the rewritten total. A planner may send the new headcount. The approval is still in writing. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/quote', label: 'Quote form' },
        { path: '/private-chef-cost', label: 'Service and tax lines' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
  ],
  maui: [
    {
      slug: 'getting-started',
      name: 'Getting started',
      h1: 'First Maui booking — name the shore, then the kitchen.',
      title: 'First Maui booking — what the note needs | myCHEF',
      description:
        'What a first Maui note needs: shore, dates, villa, guests, and dietary limits. Saturday West Maui drives are planned in. Request a written quote.',
      lede:
        'Name the shore and the villa kitchen before the menu. A written quote follows a complete note. Saturday traffic is part of that note.',
      photo: 'helpStartMaui',
      body: [
        'Put the shore in the first line: Wailea, Kāʻanapali, Lahaina, Kīhei, Kapalua, or Makena. Then dates, the rental address, who is eating, dietary notes, and the occasion. Lahaina is its own town on this site. It is not a stand-in for Wailea. A Saturday crossing West Maui needs the drive time in the same note.',
        'A complete request becomes a written total if the kitchen has a cooktop. The menu draft follows about 48 hours after that. The shape of the evening stays on how it works. A minibar room is declined before a deposit.',
        'Open a Villa Week note with the shore, then the checklist: the date, a Wailea, Kapalua, or Kāʻanapali address, the guest count, the format, allergies, and a budget band from [pricing](/pricing). Say whether Saturday crosses Honoapiʻilani. A resort name is not the kitchen. What comes back is a written quote when the villa has a cooktop. A minibar room stops there. Photos of the range go with the rental address. Request a written quote on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Does a Saturday dinner in Kāʻanapali need the drive planned before the quote?',
          a: 'It does. Say whether the crew is crossing from the south shore. That drive changes the arrival. It is not a hidden food charge. Request a written quote with the villa address on [the quote form](/quote).',
        },
        {
          q: 'What belongs in a first Maui message besides the resort name?',
          a: 'The rental address, the dates, who is eating, dietary notes, and the occasion. A resort name is not a kitchen. Photos of the cooktop help. Quotes are open for Wailea, Kapalua, Kāʻanapali, Kīhei, Lahaina, and Makena.',
        },
        {
          q: 'What comes back after a complete Villa Week request?',
          a: 'A real villa cooktop brings a written total in Hawaii business hours, and a Saturday drive you flagged is named on it. The draft follows about 48 hours later. A 50% deposit locks the date only after you accept. The lānai plan lives on [how it works](/how-it-works), not here.',
        },
        {
          q: 'Should children’s plates and a gluten note wait until the Maui draft exists?',
          a: 'They should be in the first note. Both are designed with the adult menu. The [menu guide](/help/menu-guide) is where you read the draft. Waiting until the cook is on the lānai is too late for the shop.',
        },
        {
          q: 'Which page holds Maui prices if this guide does not?',
          a: 'The [pricing](/pricing) page. This guide is only the first note. A signature dinner keeps groceries inside the per-guest band. Then 20% service and Hawaiʻi GET up to 4.712% print alone. Gratuity is never required. Broader answers are on the [FAQ](/faq).',
        },
        {
          q: 'If a planner and the host both write, who sends the Maui note?',
          a: `Either can send the photos. Name one person who can accept the total. Request a written quote on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/west-maui', label: 'West Maui' },
        { path: '/quote', label: 'Written quote' },
      ],
    },
    {
      slug: 'menu-guide',
      name: 'Menu guide',
      h1: 'How to read a Maui menu draft — the villa, then the revisions.',
      title: 'How to read a Maui villa menu draft | myCHEF',
      description:
        'How a Maui draft is written for one villa, how revisions work, and why a supplier name is not promised. About 48 hours after a complete request.',
      lede:
        'A Maui draft is written for one villa kitchen. It is not a steak-and-fish card, and it does not borrow another kitchen’s name.',
      photo: 'helpMenuMaui',
      body: [
        'After a complete quote request, the draft follows about 48 hours later for that Wailea or Kapalua kitchen. Saturday West Maui still uses the same window. You approve courses in writing. A wind note belongs in the draft if dinner was planned on the lānai, so the backup is not invented at dusk.',
        'A child’s plate and a dietary limit are lines in that same draft. Upcountry remains a travel line even when the food looks simple. A farm or a boat is named only when the receipt supports it. The three-course shape, if you want that length, is its own page.',
        'A Villa Week draft is courses for the Wailea or Kapalua kitchen you named, plus a wind backup if dinner was the lānai. Groceries for a signature dinner stay inside the per-guest band. On a Stay Chef day the fee is the day, and groceries are at cost with receipts. See [Stay Chef](/vacation-chef). A shellfish or dairy flag sits on that guest’s course before the shop. A substitution is a written swap when that morning’s market misses the draft, not a surprise at the table. Ask on the same thread. Bands are on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Does a Saturday Kāʻanapali dinner still get the draft on the same clock as a midweek Wailea table?',
          a: 'It does. About 48 hours after a complete request, including the shore and the drive. The highway does not add a second drafting clock. Examples of plates are on [menus](/menus).',
        },
        {
          q: 'Can a Wailea table order from a printed menu?',
          a: 'The draft is designed for the villa. A [three-course](/menus/three-course) page shows one shape. It is not a card you tick. Tell us the direction, and the courses are written for that kitchen.',
        },
        {
          q: 'How are Maui draft revisions sent back?',
          a: 'On the same written thread, before the shop. A course swap or a new allergy is marked there. After the shop, the draft is what was bought. A lānai wind backup is part of that writing, not a dusk decision.',
        },
        {
          q: 'How do kids’ plates and a dairy note share a South Maui draft?',
          a: 'They are written together, before the shop, beside the adult courses. The child’s plate is planned. We will not claim a separate allergen kitchen. More on limits is on [dietary](/dietary).',
        },
        {
          q: 'Will a Maui draft credit a boat or a farm?',
          a: 'Only when that day’s receipt supports the name. Otherwise the dish is the dish. We do not print a supplier, and we do not cook from another kitchen’s menu. Kīhei and Kapalua follow the same rule.',
        },
        {
          q: 'Is the Maui price inside the draft?',
          a: `The draft lists food. The money is on [pricing](/pricing): the per-guest signature band with groceries inside it, then 20% service and Hawaiʻi GET up to 4.712% alone. A 50% deposit follows acceptance. Gratuity is never required. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/menus/three-course', label: 'Three-course' },
        { path: '/kihei', label: 'Kīhei' },
      ],
    },
    {
      slug: 'wedding-guide',
      name: 'Wedding guide',
      h1: 'Planning a Maui wedding week — Wailea lawns and West Maui houses.',
      title: 'Planning a Maui wedding week | myCHEF',
      description:
        'Maui wedding-week checklist: welcome, rehearsal, reception, recovery brunch as separate lines.',
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
      h1: 'How to brief a Maui villa offsite.',
      title: 'How to brief a Maui villa offsite | myCHEF',
      description:
        'What a Maui villa brief needs: the shore, the rental address, headcount, and any Saturday drive. Request a written quote before the menu is discussed.',
      lede: 'What a Villa Week brief needs before dishes are discussed: the shore, the rental, and whether Saturday crosses West Maui.',
      photo: 'helpCorporateMaui',
      body: [
        'Write Wailea, Kapalua, or Kāʻanapali, then the rental’s street address, the dates, and how many seats. Say whether Saturday crosses from the south shore toward West Maui. That drive sets the call time. One person still has to accept the total. Request a written quote on [the quote form](/quote) when the villa contract is signed.',
        'Food is the rate-card band, groceries inside it for that one dinner. Service at 20% is not folded into the guest price. Hawaiʻi GET up to 4.712% is its own line. The 50% deposit waits until you accept. Gratuity is never required. That total is what finance files. Put dietary needs for the mixed team in the same brief, before any dish is discussed. We do not claim a separate allergen kitchen. If the house is Upcountry, the travel line is on [pricing](/pricing), not guessed here. Send the dates, the villa address, and the headcount.',
      ],
      faqs: [
        {
          q: 'Will you cook a hotel ballroom if the brief only names the resort?',
          a: 'No. Residences and villas. A resort name is not a kitchen. Put the rental address, not the banquet office, in the brief.',
        },
        {
          q: 'What belongs in a Maui offsite brief before any dishes are discussed?',
          a: 'The shore, dates, headcount, house address, kitchen photos, dietary list, and who approves. Say whether Saturday crosses from Wailea toward Kapalua. That drive changes the call time. Send it on [the quote form](/quote).',
        },
        {
          q: 'When do I send a Wailea brief, and when is the date actually held?',
          a: 'Send it when the villa contract is signed. We reply in Hawaii business hours. The menu draft follows about 48 hours after a complete request. A 50% deposit holds the date after you accept. A verbal yes does not hold it.',
        },
        {
          q: 'What do you look at in a West Maui rental before writing the quote?',
          a: 'Cooktop, fridge, and whether dinner is the lawn or the dining room. Photos of both. A minibar room is declined. The wind backup is written before you accept, not discovered when the grass is wet.',
        },
        {
          q: 'How does menu sign-off work on a Villa Week offsite?',
          a: 'You approve the draft in writing. Final headcount and dietary edits stay in writing. If the Saturday drive changes the shore, say so before you accept. A new seat count rewrites the total.',
        },
        {
          q: 'If a planner and the host are both on the email, who accepts the Kapalua total?',
          a: `Name one decision-maker who can accept it. The planner can gather the photos and the dietary list. Quotes are open. Desk: ${desk}.`,
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
      title: 'After the Maui quote — written changes | myCHEF',
      description:
        'How a Maui booking is held after you accept: 50% deposit, written changes of shore or headcount, and service and tax on their own lines.',
      lede:
        'The 50% deposit locks the Maui date you accepted. A new shore or a new headcount is a written rewrite, not a text.',
      photo: 'helpBookingMaui',
      body: [
        'Fifty percent locks the date on the total you accepted. Service at 20% and Hawaiʻi GET up to 4.712% stay their own lines. Gratuity is never required. A verbal yes does not hold a Saturday.',
        'A move from Wailea to Lahaina, a different headcount, or a new date goes back in writing. The travel line can change with the town. West Maui traffic stays a planning note. It is not invented on the invoice after you have paid. The quote remains the record.',
        'After you accept, 50% locks the Wailea or Kapalua date and the headcount on that total. Moving the villa toward Lahaina, or adding seats, is a written rewrite before the deposit is treated as the new week. The invoice keeps 20% service on its own line and Hawaiʻi GET up to 4.712% on the next. Gratuity stays optional and is never required. A Saturday drive change belongs in that note, because the call time can move with the town. Use [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can I move a Maui booking from Wailea to Lahaina after the deposit?',
          a: 'Write the new address. Lahaina is a different town, and the travel line may change. The total is rewritten before that deposit is treated as holding the new house. A text the morning of does not move the crew.',
        },
        {
          q: 'How does a Maui headcount change get onto the quote?',
          a: 'As a written edit on the same thread. The per-guest band is applied to the new count, groceries still inside the band. Then 20% service and Hawaiʻi GET up to 4.712% are recalculated on their own lines. You accept the rewrite before it replaces the old total.',
        },
        {
          q: 'What does the Maui deposit lock, and what does it leave open?',
          a: 'It locks the date you accepted, for that villa and that headcount. It does not lock a different Saturday. The balance is the rest of the same quote. Gratuity is never required and is not part of the deposit.',
        },
        {
          q: 'Are the service charge and the Hawaiʻi tax folded into a Wailea guest price?',
          a: 'They are not. They print after the food: 20% service and Hawaiʻi GET up to 4.712%, each alone. The guest price on [pricing](/pricing) is the band with groceries inside it. A Saturday drive is a travel note, not a fold-in to the food.',
        },
        {
          q: 'If the Maui date slips, how is the hold rewritten?',
          a: 'Send the new date in writing. It is held only when that day can be staffed and you accept the rewritten total. The original deposit locked the original date. The [quote form](/quote) is the place to send the change.',
        },
        {
          q: 'Who accepts a rewritten Kapalua total?',
          a: `The person named to approve it. A planner can gather the new count. The yes is still in writing. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/quote', label: 'Quote form' },
        { path: '/private-chef-cost', label: 'Service and tax lines' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'getting-started',
      name: 'Getting started',
      h1: 'First Kauai booking — name the shore, then request availability.',
      title: 'First Kauaʻi note — request availability | myCHEF',
      description:
        'What a first Kauaʻi request needs: the shore, dates, the estate, guests, and dietary notes. Request availability. The Hanalei bridge stays in the note.',
      lede:
        'Request availability and name the shore. Princeville, Poʻipū, Hanalei, and Kapaʻa are different drives. A request is not a held date.',
      photo: 'helpStartKauai',
      body: [
        'The first request names the shore, the dates, the estate address, who is eating, dietary notes, and the occasion. Princeville and Hanalei need the bridge called out. Poʻipū and Kapaʻa still need the address, not just the town. We will not pretend a published page is a roster.',
        'If a crew can take that shore, a written total follows, and a menu draft follows about 48 hours after the request is complete. If the road closes, the night moves rather than forfeiting. How the evening runs is on how it works. Send the request on the quote form.',
        'Request availability with the shore named first, then the checklist. Princeville or Hanalei needs the bridge. Poʻipū and Kapaʻa still need the estate address, the date, the guest count, the format, allergies, and a budget band from [pricing](/pricing). A request is not a held date. If that shore can be cooked, what comes back is a written total. If the road closes, the night moves rather than forfeiting. Send the covered plan with the estate on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'How do I request availability for a first Kauaʻi booking?',
          a: 'Name the shore, the dates, the estate, who is eating, dietary notes, and the occasion on [the quote form](/quote). A request for availability is not a confirmation. We answer when that shore can be cooked. We will not invent a now-serving line.',
        },
        {
          q: 'What changes if the first night is in Hanalei rather than Poʻipū?',
          a: 'Hanalei adds the bridge and a covered plan. Weather can close the road, and the night moves rather than forfeiting. Poʻipū is the shorter drive and still needs the estate address. Say which shore in the request.',
        },
        {
          q: 'What comes back after a complete Kauaʻi request for availability?',
          a: 'If that shore can be cooked, Hawaii business hours bring a written total that names Princeville or Poʻipū. The draft follows about 48 hours after the request is complete. A bridge note does not hold the date. A 50% deposit follows the written yes. Service order is on [how it works](/how-it-works).',
        },
        {
          q: 'Do dietary notes and children’s plates belong in the Kauaʻi request?',
          a: 'They do, before any shop. Both shores use the same rule. The [menu guide](/help/menu-guide) is where the draft is read. A request that skips the limits makes the draft late.',
        },
        {
          q: 'Does a Kauaʻi help page hold a price?',
          a: 'It does not. Prices are on [pricing](/pricing). A band is not a held crew. If the shore is staffed, 20% service and Hawaiʻi GET up to 4.712% print alone. Gratuity is never required. Other questions are on the [FAQ](/faq).',
        },
        {
          q: 'Who should sign the Kauaʻi request for availability?',
          a: `The person who can accept a written total if a crew can take the shore. A planner may send photos. Request availability on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Request availability' },
      ],
    },
    {
      slug: 'menu-guide',
      name: 'Menu guide',
      h1: 'How to read a Kauai menu draft — the shore is part of the draft.',
      title: 'How to read a Kauaʻi menu draft | myCHEF',
      description:
        'How a Kauaʻi draft is written after a request for availability, how you revise it, and why a supplier is not promised. The shore is part of the draft.',
      lede:
        'A Kauaʻi draft names the shore. It is written only if a crew can take that estate. There is no fixed restaurant menu.',
      photo: 'helpMenuKauai',
      body: [
        'Request availability first. If that shore can be cooked, the draft follows about 48 hours after the request is complete. Princeville drafts carry the bridge note. Poʻipū drafts carry the wet-weather note. Kapaʻa is closer to Līhuʻe and still a real table. You approve the courses in writing.',
        'A revision stays on that thread before the shop. Children’s plates and dietary limits are in the same draft. Fish is described as the dish unless that day’s receipt supports a name. We do not promise a boat. The three-course shape is a separate page if you want that length.',
        'A Princeville draft carries the bridge. A Poʻipū draft carries the wet-weather note. Both are courses for that shore, and only if a crew can take it. Groceries for the signature dinner sit inside the per-guest band. A Stay Chef day is the daily chef fee plus groceries at cost with receipts. See [Stay Chef](/vacation-chef). An allergy flag is on the course it changes, before that shore’s buy. If the purchase cannot match a named dish, mark the swap on the request before the shop. Ask there. See [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'If we request availability on Tuesday, when is a Princeville draft actually written?',
          a: 'About 48 hours after the request is complete, and only if a crew can take that shore. A bridge note does not start the clock by itself. Sample plates are on [menus](/menus).',
        },
        {
          q: 'Is a Kauaʻi draft a menu I can reorder on the other shore?',
          a: 'It is written for the shore you named. A Princeville draft does not become Poʻipū if the road closes. The night moves, or a new draft is written. A [three-course](/menus/three-course) page shows a shape. There is no fixed restaurant menu.',
        },
        {
          q: 'How do I revise a Kauaʻi draft before the shop?',
          a: 'Reply in writing on the request. A course change or a new limit is marked there. After the purchase, the draft is what was bought for that shore. The covered plan stays in the same note.',
        },
        {
          q: 'How are children’s plates handled on a North Shore draft versus a South Shore draft?',
          a: 'Both are planned with the adults before the shop. The shore changes the drive and the weather note, not whether a child gets a separate plate. Limits are also on [dietary](/dietary).',
        },
        {
          q: 'Can the Kauaʻi draft name who caught the fish?',
          a: 'Only when that day’s receipt supports the name. Otherwise the dish is the dish. We do not promise a boat, a farm, or a shop on either shore. A North Shore draft does not invent a name a South Shore draft skipped.',
        },
        {
          q: 'Does a request for availability include the price inside the draft?',
          a: `The draft is the food. The band is on [pricing](/pricing), groceries inside it, and it is not held until a crew can take the shore. Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows a written yes. Gratuity is never required. Desk: ${desk}.`,
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
      h1: 'How to request a Kauaʻi estate dinner.',
      title: 'How to request a Kauaʻi estate dinner | myCHEF',
      description:
        'What a Kauaʻi estate request needs: Princeville or Poʻipū, the bridge if you are north, dates, and headcount. Request availability before any menu.',
      lede: 'What a request for availability must name: the shore, the estate, and the Hanalei bridge if the house is north.',
      photo: 'helpCorporateKauai',
      body: [
        'Request availability with the shore in the first sentence. Princeville and Hanalei need the bridge named, plus a covered backup when rain is the forecast. Poʻipū needs the estate address and a wet-weather note. Dates, headcount, and kitchen photos travel with that shore. Put the approver’s name on the note. A printed page is not a held crew.',
        'If the shore can be staffed, the reply is a written total: the rate-card band, a 20% service charge, and Hawaiʻi GET up to 4.712%, each on its own line. The 50% deposit comes after the written yes. Gratuity is never required. The approver’s finance desk receives that total. Dietary limits for a mixed team go in the request, before the shop, with the headcount. We do not claim a separate allergen kitchen. Send the dates, the estate address, and the headcount. Request availability on [the quote form](/quote). Bands are on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Are Kauaʻi corporate nights already confirmed, or do I request availability?',
          a: 'Request availability. We crew a shore only when we can staff it. A printed guide is not a held date. Send the shore and the dates. There is no instant-booking button.',
        },
        {
          q: 'What must a Garden Isle offsite brief include?',
          a: 'The shore, dates, headcount, estate address, kitchen photos, dietary list, and who can approve. If the house is past the Hanalei bridge, say so. We do not staff from a conference title. Request availability on [the quote form](/quote). Extra hands are [staffing](/staffing).',
        },
        {
          q: 'When should a Kauaʻi brief be sent, and what comes back?',
          a: 'Send it as soon as the house is held. We reply in Hawaii business hours if a crew can take that shore. The menu draft follows about 48 hours after a complete request. A 50% deposit holds a staffed date after a written yes. We will not hold a fake roster.',
        },
        {
          q: 'How do kitchen checks differ for a Hanalei brief and a Poʻipū brief?',
          a: 'Both need photos of a cooktop, a fridge, and the seats. Hanalei also needs a covered backup and the bridge note. Poʻipū is the shorter drive from Līhuʻe and still needs a wet-weather note. A room without a stove is declined on either shore.',
        },
        {
          q: 'How do we approve a menu while the shore is still only an inquiry?',
          a: 'Only after we write that a crew can take the night. You approve the draft in writing. The final headcount follows in writing. A bridge closure moves a north-shore night. It does not silently become Poʻipū.',
        },
        {
          q: 'Who should be named as the approver on a Princeville availability request?',
          a: `The person who can accept the written total. A planner may send the photos. Request availability with that name on the note. Desk: ${desk}.`,
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
      h1: 'After the Kauai quote — deposit, weather, and written changes.',
      title: 'After a Kauaʻi yes — deposit and weather | myCHEF',
      description:
        'How a Kauaʻi date is held after a written yes: a 50% deposit, headcount or shore changes in writing, and a road closure that moves the night.',
      lede:
        'A 50% deposit locks a Kauaʻi date only after a written yes, and only for a shore a crew can take. Weather changes go in writing.',
      photo: 'helpBookingKauai',
      body: [
        'Fifty percent locks a staffed date you have accepted. Service at 20% and Hawaiʻi GET up to 4.712% print as their own lines. Gratuity is never required. A request for availability is not itself a hold, and we will not keep a roster we do not have.',
        'Shore, headcount, and weather changes go in writing. If the Hanalei bridge closes, the night moves. The deposit follows the night, not the calendar. We do not keep a deposit because the road closed. A north-shore house does not silently become Poʻipū.',
        'A written yes, then 50%, is what holds a Princeville or Poʻipū date a crew can actually take. Requesting availability is not that hold. Change the headcount or the shore in writing. The invoice lists the food, then 20% service, then Hawaiʻi GET up to 4.712%, each alone. Gratuity is optional and is never required. If the Hanalei bridge closes, the night moves and the deposit follows the night, not the calendar. It does not become Poʻipū unless you write that shore. Send the change on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'What happens to a Princeville date if the road is closed that morning?',
          a: 'The night moves. The deposit follows the night, not the calendar. We do not keep a deposit because the road closed. Write the new timing on the same thread. It does not silently become a Poʻipū dinner.',
        },
        {
          q: 'How do I change a Kauaʻi headcount after I have accepted?',
          a: 'Write the new count. The total is rewritten for that shore before the deposit is treated as covering the new list. A morning text does not resize the shop. The quote stays the record.',
        },
        {
          q: 'What does a Kauaʻi deposit lock if availability was only a request?',
          a: 'Nothing, until you accept a written total for a shore a crew can take. Then 50% locks that date. Gratuity is never required and is not inside the deposit. A published band is not the lock.',
        },
        {
          q: 'Which lines on a Poʻipū total are the service charge and the tax?',
          a: 'The lines after the food: 20% service and Hawaiʻi GET up to 4.712%, each alone. Groceries for a signature dinner stay inside the per-guest band on [pricing](/pricing). A travel line, if the shore has one, is separate again. Gratuity is never required.',
        },
        {
          q: 'Can I switch the estate from Princeville to Poʻipū after a yes?',
          a: 'Only as a written change. The drive, the weather note, and sometimes the travel line change with the shore. You accept the rewritten total before the deposit is treated as holding the new house. Use [the quote form](/quote).',
        },
        {
          q: 'Who confirms a Kauaʻi change when the bridge is the reason?',
          a: `The person who can accept the rewritten total. Request the change in writing and name the shore. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/quote', label: 'Request availability' },
        { path: '/private-chef-cost', label: 'Service and tax lines' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'getting-started',
      name: 'Getting started',
      h1: 'First Hawaiʻi Island booking — west side first, then the kitchen.',
      title: 'First west-side note — join the list | myCHEF',
      description:
        'A first west-side note needs a Kona–Kohala address, dates, guests, and dietary limits. Join the inquiry list. Hilo is its own east-side day.',
      lede:
        'Join the inquiry list with a west-side address. Hilo is a separate dedicated east-side day, quoted in writing.',
      photo: 'helpStartBigisland',
      body: [
        'The first note names a Kona, Keauhou, Waikoloa, Waimea, or Kohala address, the dates, who is eating, dietary notes, and the occasion. Join the inquiry list with that west-side house only. Ironman weeks should be flagged because Kona roads and the grocery window compress. They do not add an east-side stop.',
        'If a crew can take the day, a written total follows, and a menu draft follows about 48 hours after the note is complete. A minibar room is declined before a deposit. How the night runs is on how it works. Hilo, if you need it, is its own note.',
        'Join the inquiry list with a west-side checklist only: a Kona, Waikoloa, or Kohala address, the date, the guest count, the format, allergies, and a budget band from [pricing](/pricing). Flag Ironman if the dates touch the race in Kailua-Kona. Hilo is not a line on this note. It stays a separate dedicated east-side day. If that day can be staffed, what comes back is a written total for the kitchen you named. A minibar room is declined. Use [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can a Hilo dinner share the day with a Waikoloa booking?',
          a: 'It cannot. Hilo is a separate dedicated east-side day, quoted in writing. Join the inquiry list with the west-side address only. Crossing the island is not an afternoon add-on.',
        },
        {
          q: 'How do I join the inquiry list for the west side?',
          a: 'Send the Kona, Waikoloa, or Kohala address, the dates, who is eating, dietary notes, and the occasion on [the quote form](/quote). A published page is not a held crew. There is no instant-booking button.',
        },
        {
          q: 'What happens after a complete west-side inquiry?',
          a: 'If that Kona or Kohala day can be staffed, Hawaii business hours bring a written total for that kitchen only. The draft follows about 48 hours after the note is complete. Ironman, if you flagged it, narrows the shop on that total. A 50% deposit follows the written yes. Service order is on [how it works](/how-it-works).',
        },
        {
          q: 'Should Ironman week and a child’s plate be in the first west-side note?',
          a: 'Both, before the shop. Ironman changes the roads and the grocery window. The child’s plate is planned with the adults. Read the draft on the [menu guide](/help/menu-guide). Do not leave the side of the island unstated.',
        },
        {
          q: 'Which page has west-side prices if this guide does not list them?',
          a: 'The [pricing](/pricing) page, including the simpler table on this island only. Groceries for a signature dinner sit inside the band. Then 20% service and Hawaiʻi GET up to 4.712% print alone. Gratuity is never required. Wider answers are on the [FAQ](/faq).',
        },
        {
          q: 'Who sends the west-side inquiry if the host is not on island?',
          a: `Whoever can accept the written total. Join the inquiry list with the west-side address. Hilo stays its own day. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/quote', label: 'Join the inquiry list' },
      ],
    },
    {
      slug: 'menu-guide',
      name: 'Menu guide',
      h1: 'How to read a west-side menu draft — one kitchen, then revisions.',
      title: 'How to read a west-side menu draft | myCHEF',
      description:
        'How a Kona–Kohala draft is written after you join the inquiry list, how revisions work, and why a farm name is not promised. Hilo is a separate day.',
      lede:
        'A west-side draft is written for one kitchen if a crew can take the day. It is not a printed restaurant menu, and it does not include Hilo.',
      photo: 'helpMenuBigisland',
      body: [
        'Join the inquiry list first. If the west side can be staffed, the draft follows about 48 hours after the note is complete. It names courses for that Kona or Waikoloa kitchen. You approve it in writing. A revision goes back before the shop. Hard sun may move a plate inside, and that backup is in the draft.',
        'Coffee is labeled when the receipt supports the origin. A farm is not printed because the slope is visible. Children’s plates sit in the same draft. An east-side menu is a separate dedicated day, quoted in writing. The three-course shape is its own page.',
        'The west-side draft is courses for one Kona or Waikoloa kitchen. It does not draft Hilo on the back. Groceries for a signature dinner sit inside the band. The simpler table, only when that house fits, is on [pricing](/pricing) too. A Stay Chef day is the daily chef fee plus groceries at cost with receipts. See [Stay Chef](/vacation-chef). An allergy is flagged on the course before the west-side shop. If the buy cannot match the draft, write the substitution on the inquiry before anyone cooks. Hard sun that moves a plate inside belongs in that same note.',
      ],
      faqs: [
        {
          q: 'When does a west-side draft get written after we join the inquiry list?',
          a: 'About 48 hours after the note is complete, if a crew can take that day. An incomplete address does not start the clock. Sample courses are on [menus](/menus). Hilo is not drafted on the back of a Waikoloa note.',
        },
        {
          q: 'Is the kanpachi example the menu for every Kohala table?',
          a: 'It is an example. The draft is written for the house. A [three-course](/menus/three-course) page shows one length. It is not a printed menu. Say the direction you want, and the courses are written for that kitchen.',
        },
        {
          q: 'How do west-side revisions work once a draft exists?',
          a: 'Reply in writing before the shop. A swapped course or a new limit is marked there. After the purchase, the draft is what was bought on that side of the island. Ironman week may narrow what the shop can hold. The note should say so.',
        },
        {
          q: 'When are a child’s plate and an allergy locked for a Kona draft?',
          a: 'In the inquiry, before the shop, on the same draft as the adults. We will not claim a separate allergen kitchen. More on limits is on [dietary](/dietary). Do not add them when the cook is already at the range.',
        },
        {
          q: 'Will a west-side draft name a coffee farm or a boat?',
          a: 'Only when that day’s receipt supports the name. Coffee origin follows the paperwork, not the view. Otherwise the dish is the dish. We do not promise a farm, a boat, or a market. See [coffee origin](/coffee-act-198) for the labeling rule.',
        },
        {
          q: 'Does the west-side draft carry the price?',
          a: `The draft lists food. The band, and the simpler table on this island only, are on [pricing](/pricing). Groceries for a signature dinner sit inside the band. Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows a written yes. Gratuity is never required. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/menus', label: 'How menus are designed' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/menus/three-course', label: 'Three-course' },
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
      h1: 'How to brief a Kohala Coast offsite.',
      title: 'How to brief a Kohala Coast offsite | myCHEF',
      description:
        'What a Kohala Coast brief needs: a Kona or Waikoloa address, dates, and headcount. Join the inquiry list. Hilo stays a separate dedicated day.',
      lede: 'What a west-side brief must name before a menu exists: the Kona or Kohala address. Hilo is its own day.',
      photo: 'helpCorporateBigisland',
      body: [
        'Join the inquiry list with a west-side address only. Write Kona, Waikoloa, or the Kohala Coast, then the dates and the headcount. Photos should show the cooktop, the fridge, and whether the night is the lava terrace or the great room. Flag Ironman if the week touches the race. Hilo is a second note and a dedicated east-side day. Name the person who can approve.',
        'The answer is a written total the approver can hand to finance. The rate-card band is the food line, groceries inside it. The 20% service charge follows. Hawaiʻi GET up to 4.712% follows that. A 50% deposit applies after the written yes. Gratuity is never required. Dietary needs for a mixed team are in the brief before the west-side shop. We do not claim a separate allergen kitchen. Send the dates, the house address, and the headcount. Bands are on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Can one brief cover a Hilo offsite and a Waikoloa offsite in the same week?',
          a: 'They are different days. Put the west-side address in one note. Send Hilo, if you need it, as its own dedicated day. Do not imply both in one dinner. Join the inquiry list for the west side.',
        },
        {
          q: 'What goes into a west-side offsite brief before a menu exists?',
          a: 'The Kona, Waikoloa, or Kohala address, the dates, headcount, kitchen photos, dietary list, and who approves. Flag Ironman if the week touches the race. Do not leave the side unstated. Use [the quote form](/quote).',
        },
        {
          q: 'When do I send that brief, and when does an inquiry answer arrive?',
          a: 'Send it once the west-side house is held. We reply in Hawaii business hours if a crew can staff the day. The menu draft follows about 48 hours after a complete request. A 50% deposit holds a staffed date after a written yes. There is no instant-booking button.',
        },
        {
          q: 'What do you inspect in a Waikoloa kitchen before drafting?',
          a: 'The cooktop, the fridge, and whether the night is the lava terrace or the great room. We trust the photos, not the listing headline. A minibar room is declined. The room is confirmed in the reply, before any deposit.',
        },
        {
          q: 'How are the draft menu and the final headcount locked while we are still on the inquiry list?',
          a: 'You approve the draft in writing after we say a crew can take the day. Seat changes go in writing. If Ironman week tightens the grocery window, the draft may narrow. The deposit follows that written yes.',
        },
        {
          q: 'Does the person who approves the total have to be on Hawaiʻi Island?',
          a: `No. Name whoever can accept the total. Join the inquiry list with the west-side address only. Hilo stays its own dedicated day. Desk: ${desk}.`,
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
      h1: 'After the west-side quote — deposit, changes, and a separate Hilo day.',
      title: 'After a west-side yes — deposit, changes | myCHEF',
      description:
        'How a west-side date is held after a written yes: 50% deposit, written changes, and Hilo as a separate dedicated east-side day, quoted in writing.',
      lede:
        'A 50% deposit locks a west-side date only after a written yes. Hilo is a separate dedicated east-side day, quoted in writing.',
      photo: 'helpBookingBigisland',
      body: [
        'Fifty percent locks a staffed west-side date you have accepted. Service at 20% and Hawaiʻi GET up to 4.712% print as their own lines. Gratuity is never required. Joining the inquiry list is not itself a hold. A verbal yes does not keep the day.',
        'Address, headcount, and Ironman-week changes go in writing. The total is rewritten before the deposit is treated as covering the new plan. Adding Hilo is not a change to the west-side quote. It is a separate dedicated east-side day, quoted in writing.',
        'Joining the inquiry list does not hold a day. A written yes, then 50%, locks the Kona, Waikoloa, or Kohala date on that total. A new headcount or a new west-side address is rewritten before the deposit is treated as the new plan. The invoice shows the food, then 20% service, then Hawaiʻi GET up to 4.712%, each on its own line. Gratuity is optional and is never required. Adding Hilo is not a change on this quote. It is a separate dedicated east-side day. Send the rewrite on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can I add a Hilo lunch onto a Kona dinner that is already accepted?',
          a: 'Not the same day. Hilo is a separate dedicated east-side day, quoted in writing. Send it as its own note. The Kona deposit does not stretch across the island.',
        },
        {
          q: 'How do I change a Waikoloa headcount after a written yes?',
          a: 'Write the new count on the same thread. The total is rewritten before the deposit is treated as holding the new list. Ironman week, if it applies, belongs in that same note because the grocery window is tighter.',
        },
        {
          q: 'What does a west-side deposit lock while we are still on the inquiry list?',
          a: 'Nothing, until you accept a written total for a day a crew can take. Then 50% locks that west-side date. Gratuity is never required and is not part of the deposit. The inquiry itself is not a hold.',
        },
        {
          q: 'How do the service charge and the tax print on a Waikoloa total?',
          a: 'Hilo is not a line on this total. Food is the west-side band, groceries inside it, with the simpler table only when that house fits, both on [pricing](/pricing). 20% service and Hawaiʻi GET up to 4.712% print after the food, each alone. A 50% deposit follows a written yes. Gratuity is never required.',
        },
        {
          q: 'If the west-side date moves, what is rewritten?',
          a: 'The total, in writing, and only if the new day can be staffed. You accept it again before the deposit is treated as holding the new date. The original yes locked the original day. Send the change on [the quote form](/quote).',
        },
        {
          q: 'Who can accept a rewritten Kohala total?',
          a: `Whoever can say yes to it, on island or not. Keep the address on the west side. Hilo stays its own day. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/quote', label: 'Join the inquiry list' },
        { path: '/private-chef-cost', label: 'Service and tax lines' },
        { path: '/east-side', label: 'East side' },
      ],
    },
  ],
};

export function getHelpArticle(island: IslandId, slug: string): HelpArticle | undefined {
  return helpArticles[island].find((row) => row.slug === slug);
}
