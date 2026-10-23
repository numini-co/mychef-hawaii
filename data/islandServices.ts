import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import { gatedServices } from './gatedServices';
import { residentLineList } from './residentLine';
import { feeStackList } from './feeStackPages';
import type { UniqueCell } from './uniqueCells';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

const desk = `${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}`;

/**
 * Catalog service cells that are not money-keyword doors.
 * Titles must not steal /catering or / private-chef keywords.
 */

export const islandServices: Record<IslandId, UniqueCell[]> = {
  oahu: [
    {
      slug: 'what-we-dont-do',
      name: 'What we will not claim',
      h1: 'What we will not claim on Oʻahu — houses, not ballrooms.',
      title: 'What we will not claim on Oahu | myCHEF',
      description:
        'No invented Oʻahu reviews, no hotel room without a kitchen, no ballroom catering. Service and tax sit on their own lines. Request a written quote.',
      lede:
        'We cook Oʻahu houses with kitchens. We do not invent reviews, licenses, or a “now serving” line ahead of a staffed kitchen. The proof is the published card and a written quote.',
      photo: 'svcHonestyOahu',
      body: [
        'We do not invent guest reviews, chef names, or licenses. A hotel room without a stove is declined. Residences and villas with kitchens are the work, in Kahala, Ko Olina, Kailua, and Honolulu. Hawaiʻi Convention Center citywides are closed through 2027 and are not our product. We do not staff a ballroom.',
        'We do not cook on another island the same day. A farm is named only when that day’s receipt supports it. Nothing is hidden in the price: 20% service and Hawaiʻi GET up to 4.712% sit on their own lines. A 50% deposit follows acceptance. Gratuity is never required. Request a written quote on [the quote form](/quote). The card is on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Do you have Oʻahu guest reviews I can read before I book?',
          a: 'A Gold Coast dinner does not come with stars. Nothing is published yet, and we will not write a review or buy one. Verified events are the only later path. Use the card on [pricing](/pricing) and the written quote.',
        },
        {
          q: 'Will you cook in a Waikīkī hotel room that has no kitchen?',
          a: 'Only if there is a stove we can work. Most suites do not have one. Residences and villas with a real cooktop are the booking. A coffee maker is not a kitchen, and a building rule does not create a stove.',
        },
        {
          q: 'Filipino catering Oahu, or bento and catering Oahu?',
          a: 'Those phrases are searches, not a bento counter and not a banquet hall. We cook dinners in houses with kitchens in Kahala, Ko Olina, Kailua, and Honolulu. We do not staff a ballroom or a convention floor. Request a written quote for the house.',
        },
        {
          q: 'Can the same crew cook a Kahala dinner and fly to another island the same day?',
          a: 'No. There is no same-day inter-island crossing. A Honolulu day stays on Oʻahu. Name one island and one kitchen. We will not write a second island onto the same crew.',
        },
        {
          q: 'Will you name an Oʻahu farm, or say you are now serving a hotel?',
          a: 'A farm is named only when that day’s receipt supports it. We do not print “now serving” ahead of a staffed kitchen, and we do not imply a hotel affiliation. The house with the kitchen is the booking.',
        },
        {
          q: 'Are the service charge and a tip already inside the Oʻahu price?',
          a: `The service charge is not hidden, and a tip is not required. 20% service and Hawaiʻi GET up to 4.712% each print on their own line. A 50% deposit follows acceptance. Gratuity is never required. Request a written quote on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/pricing', label: 'Starting prices' },
        { path: '/conventions', label: 'Not a convention kitchen' },
        { path: '/quote', label: 'The quote form' },
      ],
    },
    {
      slug: 'guest-counts',
      name: 'Guest counts',
      h1: 'Oʻahu guest counts — Kahala rooms, Ko Olina villas, condo kitchens.',
      title: 'Kahala and Ko Olina guest counts | myCHEF',
      description:
        'Oʻahu dinners for 2–15 guests and receptions about 10–75. Kahala rooms, Ko Olina villas, Waikīkī condo kitchens. Larger formats are quoted, not promised.',
      lede:
        'A dinner for two is the chef and the shopping. A seated twelve is a different crew. We write the Oʻahu headcount before the deposit.',
      photo: 'svcCountsOahu',
      body: [
        'Dinners run from two to fifteen. Receptions are about ten to seventy-five. A Kahala dining room holds a seated table. A Ko Olina villa can hold a larger lawn when the house allows it. A Waikīkī condo kitchen holds what the galley and the building rules allow.',
        'Children are part of the headcount on the quote. What that does to the total is set out in the written quote. There is no separate published kids’ price and no age cut-off. A plated Gold Coast list may add a server. See [staffing](/staffing). If the seats change, tell us and we re-quote in writing. Bands are on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Can you staff 200 guests on a Gold Coast lawn?',
          a: 'Not as a promise. Receptions are about ten to seventy-five. A larger list is quoted as its own format or declined. We would rather decline than invent a crew the house cannot hold.',
        },
        {
          q: 'Is a dinner for two in Honolulu too small to book?',
          a: 'No. A dinner for two is a normal booking, with the chef and the shopping. It lives on [honeymoon dinners](/honeymoon-dinners). It is not a reception, and it is not too small for this page.',
        },
        {
          q: 'Do kids in a Waikīkī condo get left off the Kahala headcount?',
          a: 'No. A condo galley and a Kahala dining room use one list. Children are part of the headcount on the island quote. What that does to the total is set out in the written quote. The building does not get a second, smaller count.',
        },
        {
          q: 'What changes when a Kahala dinner grows from a table of eight into a seated reception?',
          a: 'The headcount is written again before the deposit. A small dinner is the chef. A plated reception can add a server or a sous chef as its own line on [staffing](/staffing). We do not publish a crew ratio on this page.',
        },
        {
          q: 'What if the Ko Olina count changes after we already have a quote?',
          a: 'Tell us and we re-quote in writing. The deposit covers the headcount on the total you accepted, not a larger list, until you accept the rewrite. A day-of text does not change the shop.',
        },
        {
          q: 'What should a Waikīkī condo note include before we request a written quote?',
          a: `The building, any kitchen rule, the date, and the headcount, with children included. Dinners are two to fifteen. Receptions are about ten to seventy-five. Request a written quote on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/staffing', label: 'Staffing' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'dietary',
      name: 'Dietary',
      h1: 'Allergy-aware dinners in Oʻahu houses — written before the shop.',
      title: 'Allergy-aware dinners in Oʻahu houses | myCHEF',
      description:
        'Oʻahu allergies and diets go into the menu before the Kahala, Ko Olina, or Kailua shop. No certified allergen-free kitchen. Request a written quote.',
      lede:
        'Nut-free, gluten-free, vegan, and religious limits are written before the Honolulu shop. A Kahala tower and a Kailua driveway are not the same kitchen.',
      photo: 'svcDietaryOahu',
      body: [
        'List every limit with the address: gluten-free, dairy-free, nut-free, shellfish, vegan or vegetarian, pescatarian, and any religious diet. Those plates are written before the Kahala, Ko Olina, Honolulu, or Kailua shop. A tower freight window means the list is done before the crew comes up. Draft steps are the [menu guide](/help/menu-guide).',
        'The kitchen you hand us is a rental, not a certified allergen-free room. The cook can keep a wiped board and a separate pan when that kitchen has the space. If a compact condo cannot hold the limit, we say so before you accept. We do not make a medical claim, and we do not name a farm. Request a written quote on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can you cook nut-free for our whole group on Oʻahu?',
          a: 'A nut-free table is written into the shop before we buy, for every plate. A Kahala condo or a Ko Olina villa is still a rental that may have held nuts before we arrived. We will not claim a certified allergen-free kitchen. If the board is too small to keep that separation, we say so before you accept.',
        },
        {
          q: 'How does a shellfish limit change one Honolulu plate without rewriting the table?',
          a: 'That guest’s course is rewritten before the shop. The other plates stay as drafted. We keep the change only when that kitchen can hold it. Send the person and the limit together. We do not claim a separate allergen room behind the condo.',
        },
        {
          q: 'Can a Kailua week be gluten-free and dairy-free for two people and unchanged for the rest?',
          a: 'Name both people before the first shop and their plates are rewritten. The rest of the house stays on the drafted menu. A Kailua driveway is not a tower freight slot, but the list still has to land before we buy. We will not promise a medical outcome.',
        },
        {
          q: 'Will you name an Oʻahu farm for vegan produce?',
          a: 'No. A vegan or vegetarian menu is designed before the shop, not swapped at the pass. A farm, a boat, or a market is named only when that day’s receipt supports it. Put the limit on the quote with the Honolulu or Kailua address.',
        },
        {
          q: 'How should we send a religious diet for a Ko Olina dinner?',
          a: 'Write what that person eats and what they skip, with the villa and the date, before the shop. Kosher, halal, or another religious limit is a menu constraint, same as a food allergy. We do not claim a certified religious kitchen. If the house cannot hold it, the quote says so.',
        },
        {
          q: 'What do we send, and where is the price for an allergy-aware Oʻahu night?',
          a: `Send the address, the date, who eats, and every limit. No separate dietary price. The night uses this island’s per-guest band, groceries inside it, on [pricing](/pricing). Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows acceptance. Gratuity is never required. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/help/menu-guide', label: 'Menu guide' },
        { path: '/menus', label: 'Menus' },
        { path: '/kids-menus', label: 'Kids at the table' },
      ],
    },
    {
      slug: 'honeymoon-dinners',
      name: 'Honeymoon dinners',
      h1: 'Honeymoon dinners on Oahu — two seats, one kitchen.',
      title: 'Honeymoon dinners on Oahu — two seats, one kitchen | myCHEF',
      description:
        'A private dinner for two in a Kahala, Ko Olina, Kailua, or Honolulu rental. The night and the room. Request a written quote.',
      lede:
        'Two people at the rental’s dining table, the rest of the house quiet. This is the honeymoon or anniversary booking, not the course list.',
      photo: 'svcHoneymoonOahu',
      body: [
        'The cook comes in on the elevator slot a Honolulu tower already booked and works the range in that kitchen. Plates go to the dining table. A Kailua lānai is used only when the house can cover it. Service stays with the couple. Counters are reset before the crew leaves the building.',
        'Kahala houses are judged from photos of the stove, not the listing headline. Building rules belong in the same note as the date. If you want the courses named as a format, open the romantic dinner. This page holds the evening and the room.',
      ],
      faqs: [
        {
          q: 'How is this Oʻahu dinner for two different from the romantic-dinner courses?',
          a: 'This page books the night: the rental, the two seats, and the honeymoon or anniversary reason. The [romantic dinner](/fine-dining/romantic-dinner) is the course format. Open that page for the plates. Send the house here when you want the evening held.',
        },
        {
          q: 'What does a Honolulu or Ko Olina kitchen need before two people can be served?',
          a: 'A working cooktop, a fridge, and a table for two. A hotel suite with a coffee maker is declined. A tower also needs its elevator reservation and the building rules in the note. Photos of the kitchen decide it. Request a written quote with those photos.',
        },
        {
          q: 'Can anyone besides the couple sit this honeymoon night?',
          a: 'The booking is built for two. Extra family changes it into a different table, confirmed in writing from what that dining room holds. We do not print a seat count the house has not shown. Say who is actually eating on [the quote form](/quote).',
        },
        {
          q: 'Where do allergies go before the Oʻahu shop for a dinner for two?',
          a: 'In the first note, before anyone buys food. Shellfish, nuts, and gluten are written onto those two plates. We will not claim a separate allergen kitchen. The shop follows the list you send, not a guess at the door.',
        },
        {
          q: 'How is one Oʻahu night for two priced, including a bartender?',
          a: 'One night uses this island’s per-guest signature band, groceries inside that band. There is no separate honeymoon price. A bartender is quoted in writing, with no hourly figure. Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows once you accept. Gratuity is never required. See [pricing](/pricing).',
        },
        {
          q: 'What should we send if a proposal on Oʻahu needs to stay quiet?',
          a: `Say so in the note and the moment stays between the two of you. We do not announce it, and we do not publish past proposals. Send dates, the address, who is eating, and dietary limits. Request a written quote on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/fine-dining/romantic-dinner', label: 'Romantic dinner courses' },
        { path: '/pricing', label: 'Starting prices' },
        { path: '/events/anniversaries', label: 'Anniversary dinners' },
      ],
    },
    {
      slug: 'chefs-table',
      name: 'Chef’s table',
      h1: 'Chef’s table in an Oahu villa — the island, not a restaurant pass.',
      title: 'Chef’s table in an Oahu villa | myCHEF',
      description:
        'The chef cooks and plates at your Oʻahu kitchen island while guests watch. Kahala, Ko Olina, Kailua. Not a restaurant counter.',
      lede:
        'Guests sit the house counter. The cook plates in front of them. This is the evening’s format, not a ticketed restaurant pass.',
      photo: 'svcChefsTableOahu',
      body: [
        'People take stools at the kitchen island while the cook works the range in front of them. The crew enters on the elevator reservation a tower booked. Plates are set on that counter, not walked to a dining room. After the last course, the pass is scrubbed before the crew leaves.',
        'A Kailua galley is accepted only when the island is deep enough for guests to sit. A photo of the counter and the building rules belong in the request. The course order is the [chef’s table evening](/fine-dining/chefs-table-evening). This page is the format: the cook, the counter, the house.',
      ],
      faqs: [
        {
          q: 'How is an Oʻahu counter night different from the chef’s table evening?',
          a: 'This page is the format: the chef cooks and plates at the house counter while you sit there. The [chef’s table evening](/fine-dining/chefs-table-evening) is the course arc. Link that page for the sequence. Send the kitchen here when the seat is the island.',
        },
        {
          q: 'What has to be true of a Kahala or Ko Olina counter before anyone sits it?',
          a: 'The island needs a clear run to the range, a fridge, and room for stools. A compact condo that cannot hold a pass is declined on the written quote. Send a photo. Building rules and the elevator slot go in the same note.',
        },
        {
          q: 'How many guests suit an Oʻahu kitchen island?',
          a: 'As many as that counter and that house hold, confirmed in writing. We do not print a seat count from a listing photo. Past what the island can seat, the night becomes a dining-room dinner. Say who is sitting.',
        },
        {
          q: 'Can one person at an Oʻahu counter skip shellfish while the others keep it?',
          a: 'Write the limit before the shop. That setting changes. The others stay as drafted. We will not claim a separate allergen kitchen. Raw fish is named on the draft only when you have already cleared it.',
        },
        {
          q: 'How is a counter night in a Honolulu house priced?',
          a: 'It uses this island’s per-guest signature band, with groceries inside the band. There is no separate counter price. Then 20% service and Hawaiʻi GET up to 4.712% each stand alone. A 50% deposit follows acceptance. Gratuity is never required. The card is [pricing](/pricing).',
        },
        {
          q: 'What do I send to request a written quote for an Oʻahu counter?',
          a: `The address, the date, who is sitting, dietary notes, and a photo of the island if you have one. A quiet proposal can be flagged in the same note. We do not publish past proposals. Request a written quote on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/fine-dining/chefs-table-evening', label: 'Chef’s table evening' },
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'kids-menus',
      name: 'Kids at the table',
      h1: 'Children’s plates on Oʻahu — same kitchen, simpler food.',
      title: 'Children’s plates at an Oʻahu table | myCHEF',
      description:
        'Children on Oʻahu eat simpler plates, or earlier, in Kailua, Ko Olina, and Kahala. They count in the headcount. The price is in the written quote.',
      lede:
        'Children eat from the same Oʻahu kitchen as the adults. Say if they need a simpler plate or an earlier hour. High chairs stay with the household.',
      photo: 'svcKidsOahu',
      body: [
        'In a Kailua week or a Ko Olina villa, children’s plates are simpler versions of the adult menu, beside them or earlier if you name the hour. A Kahala tower still has a freight window, so the plate plan is finished before the crew comes up. We do not bring a second restaurant list.',
        'Children are part of the headcount you send. There is no separate published price for a child’s plate, and this page has no age cut-off. What that headcount does to the total is set out in the written quote. A child’s allergy is a [dietary note](/dietary), sent before the shop. Chairs and boosters are the household’s. Request a written quote on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can children in a Kailua house eat simpler plates beside the adults?',
          a: 'Yes. Their plates are a simpler version of the same menu, served at the same table, not after the adults are finished. Tell us who is eating so portions fit. We do not publish an age cut-off, and we do not bring a separate children’s list.',
        },
        {
          q: 'Can kids in a Kahala tower eat earlier than the main table?',
          a: 'If you want an earlier hour, name it on the quote. The crew still has to clear the building’s freight window, so that hour is written before the shop. Otherwise children eat with the adults. We cook the kitchen the tower actually has.',
        },
        {
          q: 'Do children count toward the Oʻahu guest number and the price?',
          a: 'Children are part of the headcount you send with the adults. There is no separate published price for a child’s plate. What that headcount does to the total is set out in the written quote. Bands and fee lines are on [pricing](/pricing).',
        },
        {
          q: 'Who brings a high chair for a Ko Olina villa?',
          a: 'The household does. High chairs and boosters are yours, or already in the villa. We cook for the table that is there. We do not deliver seating, and we do not invent a furniture line on the quote.',
        },
        {
          q: 'Where do we put a child’s nut allergy before the Honolulu shop?',
          a: 'On the same note as the adult limits, before anyone buys. Name the child and the food. That plate is written with the others. The kitchen rules live on [dietary notes](/dietary). We will not claim a certified allergen-free condo.',
        },
        {
          q: 'What should an Oʻahu family send with the quote?',
          a: `The address, the date, adults and children in one headcount, whether anyone eats earlier, and any allergy. Kahala, Ko Olina, Kailua, or town. Request a written quote on [the quote form](/quote). Desk: ${desk}. The written quote sets the total. Gratuity is never required.`,
        },
      ],
      related: [
        { path: '/kailua', label: 'Kailua' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    ...gatedServices.oahu,
    ...residentLineList.oahu,
    ...feeStackList.oahu,
  ],
  maui: [
    {
      slug: 'what-we-dont-do',
      name: 'What we will not claim',
      h1: 'What a Maui villa week will not pretend.',
      title: 'What a Maui villa week will not claim | myCHEF',
      description:
        'No invented Maui reviews, no ballroom, no hotel room without a kitchen. Fee lines stay visible. Request a written quote for the villa week.',
      lede:
        'A villa week in Wailea, Kapalua, or Kāʻanapali is a house with a kitchen. We do not invent reviews, and we do not staff a ballroom. Request a written quote.',
      photo: 'svcHonestyMaui',
      body: [
        'We do not invent chef names or guest reviews. We do not imply a hotel affiliation. A room without a stove is declined. We do not staff a ballroom. Wailea, Kapalua, and Kāʻanapali villas with kitchens are the work.',
        'Upcountry is a surcharge, written on the quote, not a surprise after you accept. A farm is named only when the receipt supports it. We do not cross to another island the same day. 20% service and Hawaiʻi GET up to 4.712% sit on their own lines. A 50% deposit follows acceptance. Gratuity is never required. Request a written quote on [the quote form](/quote). The card is on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Lotus Chefs or elite Maui chef?',
          a: 'Related searches “lotus chefs maui” and “elite maui chef” are other kitchens. We do not impersonate them.',
        },
        {
          q: 'Do you publish Maui guest reviews for a villa week?',
          a: 'A Wailea or Kapalua week does not include a review packet. We will not draft one. Later notes wait for verified events. What you can use now is the written quote for that villa, with the card on [pricing](/pricing).',
        },
        {
          q: 'Will you cook a Wailea hotel room that has no kitchen?',
          a: 'No. The villa needs a stove, a fridge, and a table. A room without those is declined before a deposit. Resort residences that actually cook are a yes. A minibar is not a kitchen.',
        },
        {
          q: 'Can you staff a ballroom or a convention lunch on Maui?',
          a: 'No. We do not staff a ballroom or a convention floor. The booking is a house with a kitchen in Wailea, Kapalua, or Kāʻanapali. If the address has no cooktop, the quote says so before you accept.',
        },
        {
          q: 'Is an Upcountry drive folded into the villa price after we accept?',
          a: 'No. Upcountry is a surcharge, written on the quote, not a surprise after you accept. We also do not fly the same crew to another island that day. The town and the kitchen are named before the deposit.',
        },
        {
          q: 'What is printed on its own line, and is a tip required on Maui?',
          a: `On a villa week the 20% service line prints by itself, then Hawaiʻi GET up to 4.712% on the next line. Half the accepted total is the deposit. A tip is never required and is not tucked into a Wailea band. Request a written quote on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/pricing', label: 'Starting prices' },
        { path: '/west-maui', label: 'West Maui' },
        { path: '/quote', label: 'The quote form' },
      ],
    },
    {
      slug: 'guest-counts',
      name: 'Guest counts',
      h1: 'Maui guest counts — Wailea lawns and villa kitchens.',
      title: 'Wailea lawn and villa guest counts | myCHEF',
      description:
        'Maui dinners for 2–15 and lawn receptions about 10–75 in Wailea and Kapalua. Larger formats are quoted, not promised. Request a written quote.',
      lede:
        'A dinner for two in Kapalua is not a Wailea lawn. We write the headcount before the deposit. Quotes are open for the villa week.',
      photo: 'svcCountsMaui',
      body: [
        'Villa dinners run from two to fifteen, in the kitchen you name. Lawn receptions are about ten to seventy-five when that Wailea or Kapalua house can hold them. A Kīhei lot is not an automatic seventy-five. Saturday traffic changes the drive, not the number of seats.',
        'Children are part of the headcount on the quote. What that does to the total is set out in the written quote. There is no separate published kids’ price and no age cut-off. A plated Wailea lawn may need another pair of hands. See [staffing](/staffing). If the lawn grows, we re-quote in writing. Bands are on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Can you seat about seventy-five guests on a Kīhei lot?',
          a: 'Only if that house can hold them. The quote names the address. About seventy-five is the reception band, not a promise for every lot. A larger list is quoted as its own format or declined.',
        },
        {
          q: 'Does a growing Wailea lawn use the same crew call as a villa dinner for eight?',
          a: 'No. A dinner for eight is the chef at the villa table. A plated lawn can add a server or a sous chef as its own line on [staffing](/staffing). Family-style on the lānai is a different call. We do not publish a ratio here.',
        },
        {
          q: 'Do children on a Kapalua lawn sit outside the villa headcount?',
          a: 'They do not. They sit in the same number as the adults on that Wailea or Kapalua note. Children are part of the headcount on the island quote. There is no age cut-off on this page. The written quote sets the total.',
        },
        {
          q: 'What happens when the headcount changes after the Maui quote is out?',
          a: 'Tell us and we re-quote in writing. The deposit covers the headcount on the total you accepted. It does not cover a larger lawn until you accept the rewrite. A morning-of text does not resize the shop.',
        },
        {
          q: 'Is a dinner for two on a villa week too small to book?',
          a: 'No. A dinner for two is a normal booking. It lives on [honeymoon dinners](/honeymoon-dinners). Dinners on this page run from two to fifteen. A lawn reception is a different number.',
        },
        {
          q: 'What do we send to request a written quote for a lawn and a villa kitchen?',
          a: `The shore, the villa, the date, whether it is the dining room or the lawn, and the headcount with children included. Wailea, Kapalua, or Kāʻanapali. Request a written quote on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/staffing', label: 'Staffing' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'dietary',
      name: 'Dietary',
      h1: 'Allergy notes for a Maui villa week — before arrival night.',
      title: 'Allergy notes for a Maui villa week | myCHEF',
      description:
        'Wailea, Kapalua, and Kāʻanapali kitchens write gluten-free, shellfish, vegan, and religious limits before the shop. No farm names. Request a written quote.',
      lede:
        'A villa week has one kitchen and one first shop. Shellfish, gluten-free, vegan, and religious limits have to be in that note before arrival night.',
      photo: 'svcDietaryMaui',
      body: [
        'Send the limits with the villa: gluten-free, dairy-free, nut-free, shellfish, vegan or vegetarian, pescatarian, and any religious diet. Wailea, Kapalua, and Kāʻanapali are written before the shop, not swapped on the lānai. A Saturday drive is already in the arrival, so a late note misses the buy. Draft steps are the [menu guide](/help/menu-guide).',
        'The villa kitchen is a rental. Cross-contact is handled with a wiped board and a separate pan when the house has room. We will not claim a certified allergen-free kitchen, a medical outcome, or a named Upcountry farm. If the kitchen cannot hold the limit, the quote says so. Request a written quote on [the quote form](/quote). Numbers are on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Can the whole Wailea villa be pescatarian without a last-minute swap?',
          a: 'Only if pescatarian is on the note before the shop. The menu is written that way for the villa, not adjusted on the lānai after guests sit. A lawn and a dining room use the same written list. If the kitchen cannot hold it, we say so before you accept.',
        },
        {
          q: 'How is a shellfish allergy handled on a Kapalua arrival night?',
          a: 'That guest’s course changes before the West Maui buy. The other plates stay. Saturday road time is already in the arrival, so the limit has to be in the first note. We will not claim a certified allergen-free villa kitchen.',
        },
        {
          q: 'Can two guests in Kāʻanapali be vegan while the table stays as drafted?',
          a: 'Name those two before the shop. Their plates are designed. The rest of the table stays. Vegan is not a garnish swap at the pass. We do not name an Upcountry farm unless that day’s receipt supports it.',
        },
        {
          q: 'Will a Maui menu name an Upcountry farm for vegetarian produce?',
          a: 'No. Vegetarian and vegan plates are designed before the shop. A farm is named only when the receipt supports the name. Put the limit on the quote with the villa. We do not decorate a Wailea draft with a supplier we cannot show.',
        },
        {
          q: 'Where do we put a religious diet before the first villa shop?',
          a: 'In the quote, with the villa and the arrival date: what that person eats and what they skip. Kosher, halal, or another religious limit is written like any other constraint. We do not claim a certified religious kitchen. A late text does not catch the buy.',
        },
        {
          q: 'Is there a separate price for allergy changes on Maui?',
          a: `No. The night uses this island’s per-guest signature band, groceries inside it, on [pricing](/pricing). Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows acceptance. Gratuity is never required. Request a written quote on [the quote form](/quote) with the shore and the limits. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/help/menu-guide', label: 'Menu guide' },
        { path: '/kids-menus', label: 'Kids at the table' },
        { path: '/wailea', label: 'Wailea' },
      ],
    },
    {
      slug: 'honeymoon-dinners',
      name: 'Honeymoon dinners',
      h1: 'Honeymoon dinners on Maui — two seats, Wailea or Kapalua.',
      title: 'Honeymoon dinners on Maui — two seats | myCHEF',
      description:
        'A private dinner for two in a Wailea, Kapalua, or Kāʻanapali rental. The villa night, not the course list. Request a written quote.',
      lede:
        'Two plates on a West Maui lānai at blue hour, or inside if the trade wind rises. This is the honeymoon booking, not a wedding week on one line.',
      photo: 'svcHoneymoonMaui',
      body: [
        'The cook reaches a Wailea or Kapalua kitchen before blue hour and sets the range there. Plates land on the lānai table when the wind allows, and move under the roof when it does not. Service stays with the couple. The stove is wiped and the outdoor table is cleared before the crew drives out.',
        'A Saturday in Kāʻanapali needs the highway time written into the arrival, not discovered when the plates are late. Photos of the cooktop decide the house. The course format is the [romantic dinner](/fine-dining/romantic-dinner). This page is the villa night for two.',
      ],
      faqs: [
        {
          q: 'Is a Wailea lānai dinner for two the same booking as the romantic-dinner format?',
          a: 'The lānai night is this booking: the rental, the couple, the honeymoon or anniversary. The [romantic dinner](/fine-dining/romantic-dinner) names the courses. Use that page for the plate order. Use this page to hold the villa evening.',
        },
        {
          q: 'What does a Kapalua kitchen need if we eat outside at blue hour?',
          a: 'A real cooktop, cold storage, and a covered place if the trade wind shuts the lānai. The backup is written before you accept. A room with only a coffee maker is declined. Send photos with the address.',
        },
        {
          q: 'Can parents in the same Maui villa join the honeymoon table?',
          a: 'Only if you add them before the shop. The night is planned for two. More seats are confirmed in writing from what that dining room holds. We do not invent a capacity the villa has not shown.',
        },
        {
          q: 'How is one shellfish limit handled on a two-plate Maui night?',
          a: 'It is written on that plate before the shop. The other plate stays as drafted. We will not claim a separate allergen kitchen. Say it on the first note, not when the cook is already in Wailea.',
        },
        {
          q: 'What lands on the invoice for a single Villa Week dinner for two?',
          a: 'Maui’s per-guest signature band, with the groceries for that menu inside the band. A Saturday drive is not a second food charge. Then 20% service and Hawaiʻi GET up to 4.712% each stand alone. A 50% deposit follows acceptance. Gratuity is never required. The lines are on [pricing](/pricing).',
        },
        {
          q: 'How do we ask for a quiet proposal on a Kāʻanapali lānai?',
          a: `Flag it in the note and we keep it between you. We do not stage an announcement, and we do not publish past proposals. Send the villa, the date, who is eating, and dietary limits. Request a written quote on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/fine-dining/romantic-dinner', label: 'Romantic dinner courses' },
        { path: '/pricing', label: 'Starting prices' },
        { path: '/kapalua', label: 'Kapalua' },
      ],
    },
    {
      slug: 'chefs-table',
      name: 'Chef’s table',
      h1: 'Chef’s table in a Maui villa — the counter, not a resort communal table.',
      title: 'Chef’s table in a Maui villa | myCHEF',
      description:
        'The chef cooks and plates at a Wailea or Kapalua counter while you sit there. The house pass, not a resort communal table.',
      lede:
        'Stools at the open kitchen. The cook plates where you can see the pans. The lānai is the view, not the pass.',
      photo: 'svcChefsTableMaui',
      body: [
        'Guests sit the Wailea or Kapalua counter while the cook fires in front of them. Arrival is set so a Saturday highway does not collide with the first plate. The wind plan says whether a course may pause on the lānai. It does not move the seats off the island. Cleanup is the pass.',
        'A lawn is a different booking. This format needs a counter that faces the range. The sequence of courses lives on the [chef’s table evening](/fine-dining/chefs-table-evening). Here you are booking the cook at the island.',
      ],
      faqs: [
        {
          q: 'What makes a Maui counter different from the chef’s table evening?',
          a: 'You are booking the cook at the house island, plating while you watch. The [chef’s table evening](/fine-dining/chefs-table-evening) is the course arc. Open it for the sequence. Keep this page for the counter and the villa.',
        },
        {
          q: 'Can a Wailea open kitchen stay the seat if the trade wind rises?',
          a: 'The stools stay at the counter. A course may step onto the lānai only when the wind plan allows it. If the island cannot face the range, we say so from the photos before you accept. A coffee-maker room is declined.',
        },
        {
          q: 'How many people can a Kapalua counter actually take?',
          a: 'Whatever that island and that house hold, confirmed in writing after we see the kitchen. A listing photo is not a seat count. When the stools run out, the night moves to the dining table as a different format.',
        },
        {
          q: 'Can a dairy note change one stool at a West Maui counter?',
          a: 'A dairy note is written onto that setting before the shop. The rest of the counter stays as drafted. We cook the kitchen you have. We do not claim a separate allergen room behind the villa.',
        },
        {
          q: 'Does a chef’s table in Wailea have its own price?',
          a: 'It does not. The night uses Maui’s per-guest signature band, groceries inside it. Wind backup is not a food upcharge. Then 20% service and Hawaiʻi GET up to 4.712% print on their own lines. A 50% deposit follows acceptance. Gratuity is never required. See [pricing](/pricing).',
        },
        {
          q: 'What should a West Maui counter request include?',
          a: `The villa, the date, who sits the island, dietary notes, and a photo of the counter. Mention Saturday if the drive crosses the island. Request a written quote on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/fine-dining/chefs-table-evening', label: 'Chef’s table evening' },
        { path: '/wailea', label: 'Wailea' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'kids-menus',
      name: 'Kids at the table',
      h1: 'Kids’ plates on a Maui villa week — arrival night included.',
      title: 'Kids’ plates on a Maui villa week | myCHEF',
      description:
        'Children on a Wailea, Kapalua, or Kāʻanapali week eat simpler plates, or earlier on arrival night. The price is set out in the written quote.',
      lede:
        'Arrival night in a Maui villa often includes children who are still on the road clock. Their plates are planned with the adults, not after the platters are gone.',
      photo: 'svcKidsMaui',
      body: [
        'Name Wailea, Kāʻanapali, or Kapalua, and say whether children need simpler plates from that night’s menu or an earlier sitting while adults are still coming in from the road. A Kīhei family house and a Wailea lawn are different rooms. The chair is the villa’s or yours. We cook the table that is already there. Saturday traffic does not create a second menu.',
        'Children count in the guest number on the quote. There is no published kids’ price and no age cut-off here. The written quote sets out what the headcount does to the total. A child’s shellfish or dairy limit goes on [dietary notes](/dietary) before the shop. Request a written quote on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can children eat on arrival night in a Wailea villa, before the adults sit?',
          a: 'Yes, if you name that earlier hour with the villa. Their plates are simpler versions of the same menu, served in the house, not after the lawn is cleared. Saturday arrival time is already in the plan. We do not invent a second list for the children.',
        },
        {
          q: 'Are kids’ plates on a Kapalua lānai a smaller version of the same menu?',
          a: 'They are a simpler version of the menu the adults are eating, plated for the children and served with them unless you asked for an earlier hour. The lānai is the room when the wind allows. It is not a different kitchen.',
        },
        {
          q: 'How do children affect the Maui headcount and the written total?',
          a: 'They are part of the guest number you send. There is no separate published kids’ price and no age cut-off on this page. What the headcount does to the total is set out in the written quote. Fee lines are on [pricing](/pricing).',
        },
        {
          q: 'Does myCHEF bring high chairs to a Kāʻanapali rental?',
          a: 'No. High chairs and boosters are the household’s, or already in the villa. We cook for the seats that are there. Tell us if children need an earlier hour. We do not add a furniture charge because a chair was missing.',
        },
        {
          q: 'Can a child’s dairy limit be on the draft before the South Maui shop?',
          a: 'Put the child and the dairy limit on the quote before the buy, with the villa named. That plate changes. The adult plates stay. The kitchen rules are on [dietary notes](/dietary). We will not claim a certified allergen-free villa.',
        },
        {
          q: 'What do we include when we request a written quote for a family week?',
          a: `The villa, the shore, the dates, adults and children in one count, any earlier hour, and allergies. Wailea, Kapalua, or Kāʻanapali. Request a written quote on [the quote form](/quote). Desk: ${desk}. The written total is the price. Gratuity is never required.`,
        },
      ],
      related: [
        { path: '/kihei', label: 'Kīhei' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    ...gatedServices.maui,
    ...residentLineList.maui,
    ...feeStackList.maui,
  ],
  kauai: [
    {
      slug: 'what-we-dont-do',
      name: 'What we will not claim',
      h1: 'What both Kauaʻi shores will not claim while you request availability.',
      title: 'What both Kauai shores will not claim | myCHEF',
      description:
        'No invented Kauaʻi reviews and no “now serving” line ahead of a crew. Both shores. Request availability. Service and tax stay on their own lines.',
      lede:
        'Princeville and Poʻipū are one department. Request availability. We confirm a crew before we take the night. We will not print “now serving Kauaʻi” ahead of that.',
      photo: 'svcHonestyKauai',
      body: [
        'We do not invent guest reviews or a live roster. A page is not a held date. We do not invent a flat driving fee for the whole island. The Hanalei bridge is a written clause. Rain can move a table indoors. It does not move the crew to the other shore.',
        'A farm is named only when the receipt supports it. We do not impersonate another kitchen. A hotel room without a stove is declined. There is no same-day trip to another island. 20% service and Hawaiʻi GET up to 4.712% sit on their own lines. A 50% deposit follows a written yes. Gratuity is never required. Request availability on [the quote form](/quote). The card is on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Is a request for availability the same as a held Kauaʻi date?',
          a: 'No. You request availability, and we confirm a crew before we take the night. You still get a written reply. A page on this site is not a booked roster, and it is not a waitlist dressed up as booked.',
        },
        {
          q: 'Do you have Kauaʻi guest reviews yet?',
          a: 'Not yet. We do not invent them. We also do not print “now serving Kauaʻi” ahead of a staffed crew. The proof today is the published card and the written reply after you request availability.',
        },
        {
          q: 'Will you invent a farm name, or a flat fee that covers both shores?',
          a: 'No. A farm is named only when the receipt supports it. We do not impersonate another kitchen, and we do not invent a flat driving fee for the whole island. Princeville and Poʻipū are different drives. The bridge is a written clause.',
        },
        {
          q: 'Can one crew cook Poʻipū and then another island the same day?',
          a: 'No. There is no same-day inter-island crossing. A south-shore night stays on Kauaʻi. Rain may move the table indoors. It does not move the crew off the island or across the bridge in silence.',
        },
        {
          q: 'Will you cook a hotel room on either shore that has no kitchen?',
          a: 'No. The estate needs a stove. A room without one is declined. Princeville and Poʻipū houses with kitchens are the work. Request availability and name the shore before any deposit.',
        },
        {
          q: 'Are service, tax, and a tip bundled into one Kauaʻi figure?',
          a: `They are not. 20% service and Hawaiʻi GET up to 4.712% each stand alone. A 50% deposit follows a written yes. Gratuity is never required. Request availability on [the quote form](/quote). See [pricing](/pricing). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/pricing', label: 'Starting prices' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/quote', label: 'The quote form' },
      ],
    },
    {
      slug: 'guest-counts',
      name: 'Guest counts',
      h1: 'Kauaʻi guest counts — both shores, estate tables, rain indoors.',
      title: 'Guest counts for both Kauai shores | myCHEF',
      description:
        'Kauaʻi dinners for 2–15 and estate receptions about 10–75 on both shores. Rain can move a table indoors. Larger formats are quoted. Request availability.',
      lede:
        'An estate table is not a ballroom. Dinners run from two to fifteen. Receptions are about ten to seventy-five when a crew exists. Request availability and name the shore.',
      photo: 'svcCountsKauai',
      body: [
        'Princeville and Poʻipū use the same bands. The house decides, not the shore. Rain can move a north-shore table indoors without changing the headcount. A closure on the Hanalei bridge moves the night. It does not silently resize the list onto the south shore. A list past about seventy-five is quoted as its own format or declined.',
        'Children are part of the headcount on the quote. What that does to the total is set out in the written quote. There is no separate published kids’ price and no age cut-off. A plated estate table may add a server or a sous chef on [staffing](/staffing). Tell us if the count changes and we re-quote in writing. Bands are on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Can you staff a hundred guests on a North Shore lawn?',
          a: 'That list is quoted as its own format or declined. About seventy-five is the published reception band, and only when the house and a crew can hold it. The road may still move a far-north night. Request availability with the address.',
        },
        {
          q: 'If rain moves a Princeville table indoors, does the headcount change?',
          a: 'No. Rain changes the room, not the number. The indoor table has to hold the count you already sent. If the dining room is short, we say so before you accept. We do not shrink the list in silence.',
        },
        {
          q: 'Are children outside the count when rain moves a Princeville table indoors?',
          a: 'No. Request availability with one number for the room you will actually use. Children are part of the headcount on the island quote. What that does to the total is set out in the written quote. Rain does not drop them off the list.',
        },
        {
          q: 'Does a Poʻipū estate use a different guest band than a north-shore table?',
          a: 'No. Both shores use dinners from two to fifteen and receptions about ten to seventy-five. The house decides what it can hold. A south-shore lawn is not a larger product than a Princeville dining room.',
        },
        {
          q: 'What if the count changes after we request availability?',
          a: 'Tell us and we re-quote in writing. The reply covers the headcount you named. A larger list is not covered until you accept the rewrite. Request availability again if the shore changes too.',
        },
        {
          q: 'What do we send when we request availability for an estate table?',
          a: `The shore, the estate, the date, indoors or lawn, and the headcount with children included. Princeville or Poʻipū. Request availability on [the quote form](/quote). Bands are on [pricing](/pricing). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/staffing', label: 'Staffing' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'dietary',
      name: 'Dietary',
      h1: 'Allergy-aware meals on Kauaʻi — name the shore first.',
      title: 'Allergy-aware meals on Kauaʻi shores | myCHEF',
      description:
        'Princeville and Poʻipū write shellfish, gluten-free, vegan, and religious limits before the shop. Rain and the bridge stay noted. Request availability.',
      lede:
        'North and south do not share a shop. A shellfish limit in Princeville is not the same buy as a Poʻipū dinner. Request availability and name the shore.',
      photo: 'svcDietaryKauai',
      body: [
        'Put gluten-free, dairy-free, nut-free, shellfish, vegan or vegetarian, pescatarian, and any religious diet in the request, with Princeville or Poʻipū named. The rain plan is written with that list. A house past the Hanalei bridge still moves if the road closes. The other shore is a new request. Draft steps are the [menu guide](/help/menu-guide).',
        'Each estate kitchen is a rental. A wiped board and a separate pan are used when that kitchen can keep them. We will not claim a certified allergen-free kitchen or a medical result, and we will not name a farm. A retreat week is a different page at [retreats](/events/retreats). Request availability on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can you keep a shellfish allergy off a Princeville catch menu?',
          a: 'Yes, when the allergy is in the request before that north-shore shop. That guest’s plate changes. The rest of the table stays. We will not run a mixed grill the kitchen cannot keep separate. We will not claim a certified allergen-free estate.',
        },
        {
          q: 'Do a north-shore nut limit and a south-shore gluten-free note share one shop?',
          a: 'No. Princeville and Poʻipū are different buys. Send the limit with the shore you want. A Poʻipū gluten-free plan does not travel north on the same draft. Changing shores means you request availability again.',
        },
        {
          q: 'What happens to a nut-free Poʻipū dinner if rain moves the table inside?',
          a: 'The plates move under the roof with the same nut-free plan. Rain changes the room, not the shop. The covered note is written with the request. We still will not claim a certified allergen-free kitchen in that dining room.',
        },
        {
          q: 'Can a Hanalei bridge closure carry a gluten-free plan onto the south shore the same night?',
          a: 'No. A closure moves the night. It does not silently rebuild the menu in Poʻipū. The gluten-free list stays with the shore you named. A south-shore evening is a new request for availability, with its own shop.',
        },
        {
          q: 'How do vegan or religious limits get into a retreat week on Kauaʻi?',
          a: 'They go in the request for availability, with the shore, before that shop. The retreat booking itself is [retreats](/events/retreats). This page is the limit, not the week. We do not claim a certified religious kitchen, and we do not name a farm.',
        },
        {
          q: 'What belongs in a request for availability when the table has mixed diets?',
          a: `The shore, the estate, the dates, who eats, and each limit: gluten-free, shellfish, vegan, or a religious diet. Say if rain backup is a covered lānai. Request availability on [the quote form](/quote). Desk: ${desk}. There is no separate dietary price. Bands are on [pricing](/pricing). Gratuity is never required.`,
        },
      ],
      related: [
        { path: '/help/menu-guide', label: 'Menu guide' },
        { path: '/south-shore', label: 'South Shore' },
        { path: '/events/retreats', label: 'Retreats' },
      ],
    },
    {
      slug: 'honeymoon-dinners',
      name: 'Honeymoon dinners',
      h1: 'Honeymoon dinners on Kauai — two seats, both shores.',
      title: 'Honeymoon dinners on Kauai — two seats | myCHEF',
      description:
        'A private dinner for two in Princeville or Poʻipū. Rain plan and the Hanalei bridge stay in the note. Request availability.',
      lede:
        'Two plates under a covered Princeville terrace, or on a Poʻipū evening when the sky holds. Request availability. The week is a separate ask.',
      photo: 'svcHoneymoonKauai',
      body: [
        'Name the shore when you request availability. The cook sets the range in that estate kitchen and plates at a covered table if rain is forecast. A far-North house still follows the Hanalei bridge. If the road closes, the night moves. Service stays with the couple. The kitchen is left clean before the drive back.',
        'Poʻipū is the shorter run from Līhuʻe and still needs a wet-weather note. Princeville needs the bridge called out in the same request. The course format is the [romantic dinner](/fine-dining/romantic-dinner). This page is the two-person night on the shore you named.',
      ],
      faqs: [
        {
          q: 'How does a Princeville dinner for two differ from the romantic-dinner format?',
          a: 'This page is the booking: two people, the estate, the honeymoon or anniversary, on the shore you name. The [romantic dinner](/fine-dining/romantic-dinner) is the course format. Request availability here for the night. Open that page if you are choosing plates.',
        },
        {
          q: 'What happens to a Poʻipū terrace if rain starts after we sit?',
          a: 'The covered plan is written before you accept. Plates move under the roof. They do not stay in the weather. A North Shore closure moves the night rather than keeping the deposit for a road we cannot drive. Say which shore.',
        },
        {
          q: 'Is a Kauaʻi honeymoon night only the couple?',
          a: 'It is planned for two. More people are confirmed in writing from what that estate table holds. We do not print a seat count off a rental photo. Put who is eating in the request for availability.',
        },
        {
          q: 'Where do allergy notes go before a South Shore shop?',
          a: 'In the request, before any food is bought. A shellfish limit changes that plate only. The other plate stays. We will not claim a separate allergen kitchen on either shore.',
        },
        {
          q: 'How is a two-person Kauaʻi night priced while availability is still a request?',
          a: 'A request for availability is not a held price. If a crew can take the shore, the night uses this island’s per-guest signature band, groceries inside it. Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows a written yes. Gratuity is never required. See [pricing](/pricing).',
        },
        {
          q: 'What should a request for availability include if the moment should stay quiet?',
          a: `The shore, the estate, the dates, who is eating, dietary notes, and a line that a proposal stays between you. We do not announce it and we do not publish past proposals. Request availability on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/fine-dining/romantic-dinner', label: 'Romantic dinner courses' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'chefs-table',
      name: 'Chef’s table',
      h1: 'Chef’s table in a Kauai villa — the counter facing the mountains.',
      title: 'Chef’s table in a Kauai villa | myCHEF',
      description:
        'The chef cooks and plates at a Princeville or Poʻipū counter. Request availability. Rain and the bridge stay in the note.',
      lede:
        'Stools at the estate counter, peaks or cliffs in the glass. The cook plates there. Request availability for the shore.',
      photo: 'svcChefsTableKauai',
      body: [
        'Request availability with the shore named. Guests sit the counter that faces the cook. If rain hits a Princeville garden, the stools stay inside. The covered note is part of the request. A Hanalei bridge closure moves a far-North night. The pass is wiped before the crew leaves.',
        'A narrow galley that cannot seat anyone at the range is declined in the reply. Poʻipū counters are the same format with a shorter drive. The course arc is the [chef’s table evening](/fine-dining/chefs-table-evening). This page is the cook at the estate island.',
      ],
      faqs: [
        {
          q: 'How is an estate counter different from the chef’s table evening on Kauaʻi?',
          a: 'The counter is this format: you watch the cook plate at the house island. The [chef’s table evening](/fine-dining/chefs-table-evening) is the course arc. Request availability for the counter. Open that page when you are choosing the sequence.',
        },
        {
          q: 'What does rain do to a Princeville counter if the stools face the garden?',
          a: 'The seats stay at the indoor island. The garden is the view, not the pass. The covered plan is written with the request. If the Hanalei bridge closes, the night moves. We do not keep a deposit because the road shut.',
        },
        {
          q: 'How many stools does a Poʻipū counter need before you will take it?',
          a: 'As many as that counter and that house hold, confirmed in writing from photos. A galley with no place to sit the pass is declined. We do not publish a stool count the estate has not shown.',
        },
        {
          q: 'Can one guest at a Princeville counter drop raw fish?',
          a: 'Write it before the shop for that shore. That setting changes. The other settings stay. We will not claim a separate allergen kitchen. The request for availability is the place to say it.',
        },
        {
          q: 'Is a Kauaʻi counter a different price from a seated estate dinner?',
          a: 'It is the same per-guest signature band, groceries inside it, once a crew can take the shore. There is no counter surcharge. Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows a written yes. Gratuity is never required. Bands are on [pricing](/pricing).',
        },
        {
          q: 'How do I request availability for a counter and name the shore?',
          a: `Say Princeville or Poʻipū, the estate, the date, who sits the island, and dietary notes. Add the bridge if the house is past it. Request availability on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/fine-dining/chefs-table-evening', label: 'Chef’s table evening' },
        { path: '/poipu', label: 'Poʻipū' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'kids-menus',
      name: 'Kids at the table',
      h1: 'Kids’ plates on Kauaʻi — both shores, one request.',
      title: 'Kids’ plates on Kauaʻi, both shores | myCHEF',
      description:
        'Children in Princeville, Poʻipū, and Kapaʻa eat simpler plates or an earlier hour. Rain or the bridge moves the plan indoors. Request availability.',
      lede:
        'Children eat with the booking on the shore you named. Rain moves the plates under cover. A bridge closure moves the night. Request availability.',
      photo: 'svcKidsKauai',
      body: [
        'Say Princeville, Poʻipū, or Kapaʻa, and whether children need simpler plates from the same menu or an earlier hour. A Kapaʻa town house and a Princeville estate do not share one draft. If rain hits the garden, plates move under the roof with the adults. If the Hanalei bridge closes, the children’s night moves too. It is not left behind on the far side.',
        'Children are part of the headcount in the request. There is no separate published kids’ price and no age cut-off on this page. The written reply sets out the total. Allergies for a child belong on [dietary notes](/dietary) before that shore’s shop. High chairs are the household’s. Request availability on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can children at a Princeville estate eat an earlier plate if rain is already in the forecast?',
          a: 'Yes, if you name the earlier hour when you request availability. The plates are a simpler version of the same menu, served under cover with the rain plan. Rain moves the room. It does not create a second menu. The bridge still decides whether the crew can reach a far-north house.',
        },
        {
          q: 'Are kids’ plates in Poʻipū simpler versions of the adult menu, or a separate list?',
          a: 'Simpler versions of the menu the adults are eating, served beside them unless you named an earlier hour. Poʻipū is its own shop, shorter from Līhuʻe than Princeville. We do not print a separate children’s list for the south shore.',
        },
        {
          q: 'If the Hanalei bridge closes, do the children’s plates move with the night?',
          a: 'They move with the adults. A closure reschedules the night. It does not leave the children on a plan the crew cannot drive. A switch to Poʻipū is a new request for availability, because that shore is a different shop.',
        },
        {
          q: 'How are kids counted when we request availability for a Kapaʻa house?',
          a: 'Children are part of the headcount in that request, with the adults. There is no separate published kids’ price and no age cut-off here. The written reply sets out the total. Fee lines are on [pricing](/pricing). A request is not a held crew.',
        },
        {
          q: 'Who supplies a high chair on either shore?',
          a: 'The household does. High chairs and boosters are yours, or already in the estate. We cook for the table that is there, in Kapaʻa, Poʻipū, or Princeville. We do not haul seating over the bridge.',
        },
        {
          q: 'Where does a child’s shellfish note go before the shore’s shop?',
          a: `In the request, with the child named, before that shore’s buy. The plate is written with the adults. Kitchen rules are on [dietary notes](/dietary). Request availability on [the quote form](/quote) and name Princeville, Poʻipū, or Kapaʻa. Desk: ${desk}. Gratuity is never required.`,
        },
      ],
      related: [
        { path: '/kapaa', label: 'Kapaʻa' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    ...gatedServices.kauai,
    ...residentLineList.kauai,
    ...feeStackList.kauai,
  ],
  bigisland: [
    {
      slug: 'what-we-dont-do',
      name: 'What we will not claim',
      h1: 'What the west side will not claim, and what Hilo is not.',
      title: 'What the west side will not claim | myCHEF',
      description:
        'No invented reviews and no same-day Kona–Hilo trip. West side first. Join the inquiry list. Hilo is a separate dedicated east-side day, quoted in writing.',
      lede:
        'We cook the Kona–Kohala side first. We do not claim the whole island. Hilo is a separate dedicated east-side day, quoted in writing. Join the inquiry list.',
      photo: 'svcHonestyBigisland',
      body: [
        'We do not invent guest reviews, chef names, or licenses. We do not print “now serving Hilo” ahead of a staffed kitchen. A hotel room without a stove is declined. Kona, Waikoloa, and Kohala houses with kitchens are the west-side work. There is no same-day round trip to Hilo, and no same-day hop to another island.',
        'A farm is named only when the receipt supports it. Coffee origin follows the note on [coffee origin](/coffee-act-198). 20% service and Hawaiʻi GET up to 4.712% sit on their own lines. A 50% deposit follows a written yes. Gratuity is never required. Join the inquiry list on [the quote form](/quote). The card is on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Are you now serving Hilo on the same crew as Kona?',
          a: 'No. We will not print “now serving Hilo” ahead of a staffed kitchen. Hilo is a separate dedicated east-side day, quoted in writing. It is not a same-day round trip from the west side.',
        },
        {
          q: 'Will a named Kona farm appear on the menu card?',
          a: 'Only when the receipt supports the name. We do not invent farm names. Coffee origin follows the note on [coffee origin](/coffee-act-198). A label without that paper does not go on the card.',
        },
        {
          q: 'Do you have Hawaiʻi Island guest reviews?',
          a: 'Not yet. We do not invent them. West-side work is Kona, Waikoloa, and Kohala first. Join the inquiry list. A review page is not a substitute for the written reply.',
        },
        {
          q: 'Will you cook a Kona hotel room that has no stove?',
          a: 'No. The test is a working kitchen. A room without a cooktop is declined before a deposit. Resort residences and houses that actually cook are the west-side booking.',
        },
        {
          q: 'Can the same crew cover a Kohala dinner and Hilo on one Saturday?',
          a: 'No. There is no same-day Kona–Hilo round trip, and no same-day hop to another island. Join the inquiry list for the west side only. Hilo is a separate dedicated east-side day, quoted in writing.',
        },
        {
          q: 'What sits on its own line, and is gratuity required?',
          a: `The west-side reply lists 20% service alone and Hawaiʻi GET up to 4.712% alone. Half of what you accept is the deposit. Gratuity is never required, including on a Kohala terrace. Join the inquiry list on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/pricing', label: 'Starting prices' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/east-side', label: 'East side' },
      ],
    },
    {
      slug: 'guest-counts',
      name: 'Guest counts',
      h1: 'Hawaiʻi Island guest counts — west-side terraces first.',
      title: 'Kona–Kohala guest counts, Hilo separate | myCHEF',
      description:
        'West-side dinners for 2–15 and receptions about 10–75. Join the inquiry list. Hilo is a separate dedicated east-side day, quoted in writing.',
      lede:
        'A terrace dinner on the Kona–Kohala side is the booking. Hilo is a separate dedicated east-side day, quoted in writing. Join the inquiry list with the west-side address.',
      photo: 'svcCountsBigisland',
      body: [
        'Dinners run from two to fifteen. Receptions are about ten to seventy-five, on Kona, Waikoloa, and Kohala terraces and dining rooms first. Ironman week compresses Kailua-Kona. Flag the dates. The bands do not grow. A larger list is quoted as its own format or declined. Hilo and Volcano are not added onto a west-side count.',
        'Children are part of the headcount on the quote. What that does to the total is set out in the written quote. There is no separate published kids’ price and no age cut-off. A plated terrace may add a server or a sous chef on [staffing](/staffing). Tell us if the count changes and we re-quote in writing. Bands are on [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'Do Ironman-week lists in Kailua-Kona get a larger guest band?',
          a: 'No. Town compresses that week. Flag the dates when you join the inquiry list. Dinners stay two to fifteen. Receptions stay about ten to seventy-five. A larger list is quoted as its own format or declined.',
        },
        {
          q: 'Can a Volcano dinner for twelve share a west-side day?',
          a: 'No. Hilo and Volcano are a separate dedicated east-side day, quoted in writing. Twelve on the Kona–Kohala side is a normal dinner. Twelve in Volcano is not stacked onto a Waikoloa count.',
        },
        {
          q: 'How do children count on a Kohala terrace, and can Hilo share that number?',
          a: 'Join the inquiry list with one west-side number. Children are part of the headcount on the island quote for that terrace. Hilo is not added to the same count. The written quote sets out the total. There is no age cut-off.',
        },
        {
          q: 'When does a Waikoloa dinner add a server or a sous chef?',
          a: 'When the written headcount and the service style need them. A small dinner is the chef. A plated reception can add those roles as their own lines on [staffing](/staffing). This page does not publish a crew ratio.',
        },
        {
          q: 'What if the west-side count changes after the written reply?',
          a: 'Tell us and we re-quote in writing. The reply covers the headcount you named. A larger terrace is not covered until you accept the rewrite. Leave Hilo off that same note.',
        },
        {
          q: 'What do we send to join the inquiry list with a headcount?',
          a: `The Kona, Waikoloa, or Kohala address, the date, dining room or terrace, and the headcount with children included. Join the inquiry list on [the quote form](/quote). Bands are on [pricing](/pricing). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/staffing', label: 'Staffing' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'dietary',
      name: 'Dietary',
      h1: 'Allergy-aware dinners on the Kona–Kohala side.',
      title: 'Allergy-aware dinners, Kona to Kohala | myCHEF',
      description:
        'Kona, Waikoloa, and Kohala write gluten-free, shellfish, and vegan limits before the shop. Hilo is a separate dedicated east-side day, quoted in writing.',
      lede:
        'Join the inquiry list with a west-side address. Gluten-free, shellfish, vegan, and religious limits are written before that shop. Hilo is a separate dedicated east-side day, quoted in writing.',
      photo: 'svcDietaryBigisland',
      body: [
        'Name Kona, Waikoloa, or Kohala, and list gluten-free, dairy-free, nut-free, shellfish, vegan or vegetarian, pescatarian, and any religious diet before the west-side shop. Hard sun keeps the work in the kitchen. A gluten-free crust and a coffee label are different facts. Origin is printed when the receipt supports it. Draft steps are the [menu guide](/help/menu-guide).',
        'The house is a rental kitchen. Cross-contact is a wiped board and a separate pan when the counter allows it. We will not claim a certified allergen-free kitchen or a medical result. Hilo and Volcano are not added to a Waikoloa note. They are a separate dedicated east-side day, quoted in writing. Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can you cook gluten-free on the Kohala Coast without treating the crust as a coffee label?',
          a: 'Yes. Gluten-free is a recipe written before the west-side shop. Coffee origin is a separate label, printed only when the receipt supports it. We do not mix those two facts, and we do not name a farm we cannot document.',
        },
        {
          q: 'How is a shellfish limit written for a Waikoloa kitchen?',
          a: 'It goes in the inquiry before the buy. That guest’s course changes. The other plates stay. The cook works the rental kitchen you have, out of the hard sun. We will not claim a certified allergen-free room on the Kohala side.',
        },
        {
          q: 'Can one Kona guest be vegan while the rest of the table is not?',
          a: 'Name that guest before the west-side shop. Their plate is designed. The rest stays as drafted. Vegan is not a swap after the bags are in the house. We do not name a farm unless the receipt supports it.',
        },
        {
          q: 'Will you name a Kona farm, or only label coffee when the receipt supports it?',
          a: 'Only the receipt. Coffee on a crust is labeled for origin when the paper supports it. A farm name without that paper does not go on the menu. See [coffee origin](/coffee-act-198). The dietary limit is still written before the shop.',
        },
        {
          q: 'Can a religious diet in Hilo share the west-side shop the same day?',
          a: 'No. Hilo is a separate dedicated east-side day, quoted in writing. A religious limit on the Kona–Kohala side is written into that west-side inquiry only. We do not claim a certified religious kitchen, and we do not stack the shores.',
        },
        {
          q: 'What do we send to join the inquiry list for an allergy-aware west-side night?',
          a: `The Kona, Waikoloa, or Kohala address, the date, who eats, and every limit. Leave Hilo off. No separate dietary price. Bands are on [pricing](/pricing). Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows a written yes. Gratuity is never required. Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/help/menu-guide', label: 'Menu guide' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/kona', label: 'Kona' },
      ],
    },
    {
      slug: 'honeymoon-dinners',
      name: 'Honeymoon dinners',
      h1: 'Honeymoon dinners on Hawaiʻi Island — two seats, west-side lava.',
      title: 'Honeymoon dinners on Hawaiʻi Island — two seats | myCHEF',
      description:
        'A private dinner for two on the Kona–Kohala side. Join the inquiry list. Hilo is a separate dedicated east-side day, quoted in writing.',
      lede:
        'Two plates on a west-side terrace after the sun drops. Join the inquiry list. Hilo is a separate dedicated east-side day, quoted in writing.',
      photo: 'svcHoneymoonBigisland',
      body: [
        'Join the inquiry list with a Kona, Waikoloa, or Kohala address. The cook sets up in that kitchen and plates indoors when the lava terrace is still hot, or outside once the stone cools. Service stays with the couple. The range is cleaned before the crew leaves the west side. A Volcano evening does not share that day.',
        'Published starting prices from $210 a guest on this island, groceries inside the band, and dinners from $165 a guest. Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows a written yes. Gratuity is never required. The course format is the [romantic dinner](/fine-dining/romantic-dinner). See [pricing](/pricing).',
      ],
      faqs: [
        {
          q: 'How is a Kohala dinner for two different from the romantic-dinner courses?',
          a: 'This page is the west-side booking: the villa, the couple, the honeymoon or anniversary. The [romantic dinner](/fine-dining/romantic-dinner) is the course format. Join the inquiry list here for the night. Open that page for the plates.',
        },
        {
          q: 'Can a Volcano evening share the crew with a Waikoloa dinner for two?',
          a: 'It cannot. Hilo and Volcano are a separate dedicated east-side day, quoted in writing. They are not stacked on a west-side night. Join the inquiry list with the Kona–Kohala address only.',
        },
        {
          q: 'What does a lava-terrace kitchen need before two plates go out?',
          a: 'A working cooktop, a fridge, and shade or an indoor table while the stone is still hot. Photos decide it. A minibar room is declined. The terrace is the setting after the heat drops, not a second kitchen.',
        },
        {
          q: 'When do dietary notes have to reach the west-side shop?',
          a: 'With the inquiry, before any food is bought. A shellfish limit is written onto that plate. The other plate stays. We will not claim a separate allergen kitchen on the Kohala side.',
        },
        {
          q: 'How is one west-side night for two priced?',
          a: 'From $210 a guest on the signature band, groceries inside it, or the simpler table from $165 a guest when the menu and the house fit. There is no separate honeymoon price. Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows a written yes. Gratuity is never required. The card is [pricing](/pricing).',
        },
        {
          q: 'What do we send to join the inquiry list if a proposal should stay private?',
          a: `The west-side address, the dates, who is eating, dietary notes, and a line that the moment stays between you. We do not announce it and we do not publish past proposals. Hilo stays its own day. Join the inquiry list on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/fine-dining/romantic-dinner', label: 'Romantic dinner courses' },
        { path: '/kohala', label: 'Kohala Coast' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'chefs-table',
      name: 'Chef’s table',
      h1: 'Chef’s table in a Kona villa — the counter, lava in the window.',
      title: 'Chef’s table in a Kona villa | myCHEF',
      description:
        'The chef cooks and plates at a Kona or Kohala counter. Join the inquiry list. Hilo is a separate dedicated east-side day, quoted in writing.',
      lede:
        'Stools at a west-side counter, the sear in front of you. Join the inquiry list. The east side is not this seating.',
      photo: 'svcChefsTableBigisland',
      body: [
        'Join the inquiry list for a Kona or Kohala kitchen with a real counter. Guests sit that island while the cook works the range in front of them. Hard afternoon sun keeps the first courses inside. The lava terrace is a view, not the pass. The counter is scrubbed before the crew leaves the west side.',
        'A galley with no place to sit the cook is declined in the reply. Coffee on a crust is a recipe, and a farm is named only when the receipt supports it. The course arc is the [chef’s table evening](/fine-dining/chefs-table-evening). This page is the cook at the west-side island. Hilo is a separate dedicated east-side day, quoted in writing.',
      ],
      faqs: [
        {
          q: 'What is different about a Kona counter and the chef’s table evening?',
          a: 'This page books the format: the chef plates at the house counter while you sit there. The [chef’s table evening](/fine-dining/chefs-table-evening) is the course arc. Join the inquiry list for the counter. Open that page for the sequence.',
        },
        {
          q: 'What does a Waikoloa counter need, and can Hilo be a second seating the same day?',
          a: 'The counter needs a clear run to the range and room for stools, confirmed from photos. Hilo cannot be a second seating. It is a separate dedicated east-side day, quoted in writing. Join the inquiry list for the west side only.',
        },
        {
          q: 'How many people fit a Kohala kitchen island?',
          a: 'As many as that counter and that house hold, confirmed in writing. We do not print a stool count from a resort brochure. Past what the island seats, the night becomes a dining-room dinner on the same west-side day.',
        },
        {
          q: 'Can one person at a Kona counter skip the raw fish?',
          a: 'Put it in the inquiry before the shop. That setting changes. The others stay. We will not claim a separate allergen kitchen. A fish is named only when that day’s receipt supports the name.',
        },
        {
          q: 'How is a west-side counter night priced?',
          a: 'On this island’s per-guest signature band, groceries inside it, once a crew can take the day. The simpler table, where it exists, is on the pricing page. There is no separate counter price. Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows a written yes. Gratuity is never required. See [pricing](/pricing).',
        },
        {
          q: 'What do I include to join the inquiry list for a Kona counter?',
          a: `The west-side address, the date, who sits the island, dietary notes, and a photo of the counter. Do not add Hilo to the same note. Join the inquiry list on [the quote form](/quote). Desk: ${desk}.`,
        },
      ],
      related: [
        { path: '/fine-dining/chefs-table-evening', label: 'Chef’s table evening' },
        { path: '/kona', label: 'Kona' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'kids-menus',
      name: 'Kids at the table',
      h1: 'Kids’ plates on the Kona–Kohala side — shade first.',
      title: 'Kids’ plates on the Kona–Kohala side | myCHEF',
      description:
        'Children on the Kona–Kohala side eat simpler plates in the shade and count in the headcount. Hilo is a separate dedicated east-side day, quoted in writing.',
      lede:
        'Join the inquiry list for the west side. Children eat simpler plates from the same menu, indoors while the lava terrace is still hot. Hilo is not this day.',
      photo: 'svcKidsBigisland',
      body: [
        'A noon terrace on the Kohala side is too hot for a children’s table. Plates are served in the shade or inside, as simpler versions of the adult menu, or earlier if you name the hour. Kona and Waikoloa do not share a Hilo shop. Ironman week compresses Kailua-Kona, so flag those dates. Do not add Volcano to the same note.',
        'Children are part of the west-side headcount. There is no published kids’ price and no age cut-off here. The written reply sets out the total. A child’s fish limit is a [dietary note](/dietary) before the shop. Chairs are the household’s. Hilo is a separate dedicated east-side day, quoted in writing. Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can children eat on a lava terrace at noon on the Kohala Coast?',
          a: 'Not while the stone is still hot. Children’s plates are served in the shade or indoors, as a simpler version of the same menu. The terrace can be the room after the heat drops, for the adults as well. Join the inquiry list with that timing named.',
        },
        {
          q: 'Are kids’ plates in Kona a simpler cut of the same menu, served out of the sun?',
          a: 'Yes. Simpler versions of the adult menu, in the house, beside the adults unless you named an earlier hour. Kona town is a west-side day. It is not a Hilo stop on the way back. We do not print a separate children’s list.',
        },
        {
          q: 'How do children change the west-side headcount and the quote?',
          a: 'They are part of the headcount on the inquiry, with the adults. There is no published kids’ price and no age cut-off on this page. The written reply sets out the total. Fee lines are on [pricing](/pricing). Joining the inquiry list is not a held crew.',
        },
        {
          q: 'Can a Hilo family week share the Kona crew on the same day?',
          a: 'No. Hilo is a separate dedicated east-side day, quoted in writing. A family dinner in Kona, Waikoloa, or Kohala stays on the west side. Do not add Volcano to the bottom of a Kona note and expect one crew to cover both.',
        },
        {
          q: 'Who brings seating for small children in a Waikoloa house?',
          a: 'The household does. High chairs and boosters are yours, or already in the house. We cook for the shaded table that is there. We do not deliver furniture, and we do not set a children’s table on open lava at noon.',
        },
        {
          q: 'What do we send to join the inquiry list for a west-side family dinner?',
          a: `The Kona, Waikoloa, or Kohala address, the date, adults and children in one count, any earlier hour, and allergies. Leave Hilo off. Join the inquiry list on [the quote form](/quote). Desk: ${desk}. The written reply sets the total. Gratuity is never required.`,
        },
      ],
      related: [
        { path: '/waikoloa', label: 'Waikoloa' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    ...gatedServices.bigisland,
    ...residentLineList.bigisland,
    ...feeStackList.bigisland,
  ],
};

export function getIslandService(island: IslandId, slug: string): UniqueCell | undefined {
  return islandServices[island].find((row) => row.slug === slug);
}

export function islandServiceSlugs(island: IslandId): string[] {
  return islandServices[island].map((row) => row.slug);
}
