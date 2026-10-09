import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';
import { EXTRA_JOURNAL_NOTES } from './extraJournalNotes';

/**
 * Live journal article URLs. Distinct from /pricing, /private-chef-cost,
 * /quote, /help/getting-started, /dietary, /private-chef, and /coverage.
 * Titles must not use money keywords.
 */

export const JOURNAL_ARTICLE_SLUGS = [
  'how-much-does-a-private-chef-cost',
  'how-to-hire-a-private-chef',
  'villa-kitchens',
  'dietary-needs',
  'what-is-included',
  'how-far-ahead-to-book',
  'private-chef-vs-restaurant',
  'wedding-week',
  'vacation-chef-week',
  'travel-zones',
] as const;
export type JournalArticleSlug = (typeof JOURNAL_ARTICLE_SLUGS)[number];

export interface JournalArticle extends UniqueCell {
  slug: JournalArticleSlug;
}

export const journalArticles: Record<IslandId, JournalArticle[]> = {
  oahu: [
    {
      slug: 'how-much-does-a-private-chef-cost',
      name: 'How a quote is built',
      h1: 'What an Oahu chef night costs — band, fee stack, travel.',
      title: 'How Much an Oahu Chef Night Costs, Line by Line | myCHEF',
      description:
        'An Oahu chef dinner runs $195–$290 a guest with groceries inside, Date Night from $675, Stay Chef from $1,250 a day. See how service, GET and travel stack.',
      lede: 'An Oahu chef dinner runs $195–$290 a guest with groceries inside, Date Night from $675, Stay Chef from $1,250 a day. See how service, GET and travel stack.',
      photo: 'jnlCostOahu',
      body: [
        'Start with the published band. A signature dinner in an Oʻahu house runs $195–$290 USD a guest, and the groceries for that menu sit inside the band. There is no separate “+ groceries” line on a dinner. Date Night for two is from $675.',
        'A chef for the week is a different model. Stay Chef is from $1,250 a day, and groceries are billed at cost with the original receipts, no markup. A standing weekly cook for Honolulu residents is from $450 a week plus groceries at cost. The two models never blend on one quote.',
        'After the food come two lines, printed once each: 20% service and Hawaiʻi GET up to 4.712%. Fifty percent locks the date. Gratuity is voluntary and never silent.',
        'Travel is the last variable. Kahala, Ko Olina, Kailua and Waikīkī residences with a working kitchen are base. The North Shore and Turtle Bay carry a published drive surcharge that appears on the quote, not on the night.',
        'The written quote is the contract. Bands on [private chef Oahu cost](/pricing) are starting prices, not a range read out in a chat. For a dinner in your Honolulu house, start at [private chef Honolulu](/private-chef); for the island overview, see [private chef Oahu](/).',
      ],
      faqs: [
        {
          q: 'Are groceries included in an Oahu chef dinner?',
          a: 'Yes on a signature dinner: the $195–$290 a guest band includes the groceries for that menu. On a Stay Chef week (from $1,250 a day) groceries are billed at cost with receipts.',
        },
        {
          q: 'What gets added on top of the band?',
          a: '20% service and Hawaiʻi GET up to 4.712%, each printed once. North Shore travel is a published surcharge when it applies. Alcohol is BYO or quoted.',
        },
        {
          q: 'Is there a deposit?',
          a: 'Fifty percent locks the date. The balance follows the written quote you accepted.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Oahu rate card' },
        { path: '/private-chef-cost', label: 'Fee stack' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'how-to-hire-a-private-chef',
      name: 'How to hire',
      h1: 'Hiring a chef on Oahu, without a mystery invoice.',
      title: 'Hiring a chef on Oahu without a mystery invoice | myCHEF',
      description:
        'How to hire on Oahu: name the corridor, confirm the kitchen, send five fields.',
      lede: 'How to hire on Oahu: name the corridor, confirm the kitchen, send five fields.',
      photo: 'jnlHireOahu',
      body: [
        'We cook in Honolulu, Waikīkī, Kailua and Lanikai, the North Shore, Kahala and the Gold Coast, and Ko Olina. Hotel suites without a cooktop are declined.',
        'Five fields. No account. No payment to ask. Fifty percent locks the date only after you accept the written total.',
        'When you are ready to book, the [private chef Oahu](/) page has the dinner prices and the Honolulu-to-Ko Olina coverage. Bigger parties with servers are [Oahu catering](/catering).',
        'Step one is the kitchen, not the menu. Tell us whether the house is a Kahala or Gold Coast home, a Ko Olina villa, a Kailua beach house or a Waikīkī residence, and whether there is a real cooktop, a fridge and a table for the list. A compact galley changes the menu and the crew size. A hotel room with a coffee maker is a no before anyone asks for a deposit.',
        'Step two is the five fields on the quote form: island, dates, headcount, the service you want, and how to reach you. A menu draft follows within forty-eight hours, designed for that list and that cooktop. Allergies and kids’ plates go in now, not at the pass.',
        'Step three is the written total. A signature dinner on Oʻahu runs $195–$290 a guest with groceries inside the band; 20% service and Hawaiʻi GET up to 4.712% print once, as their own lines; North Shore travel is a published surcharge. Nothing is booked until you accept that total and fifty percent locks the date.',
        'Questions in between go to the same desk on WhatsApp or by email. Replies come in Hawaii business hours. For what a Honolulu dinner in your own house looks like hour by hour, see [private chef Honolulu](/private-chef).',
      ],
      faqs: [
        {
          q: 'How do I hire a private chef on Oahu?',
          a: 'Send five fields on the quote form: island, dates, headcount, service and how to reach you. Name the kitchen. You get a menu draft and a written total; fifty percent locks the date once you accept it.',
        },
        {
          q: 'How much notice do you need on Oahu?',
          a: 'Weeks, not days, in December–March and the September, October and May wedding peaks. A quiet weeknight can sometimes work on shorter notice. Send the date and we answer honestly.',
        },
        {
          q: 'Do I need to pay to get a quote?',
          a: 'No. The quote is free and written. Payment starts with the deposit, after you accept the total.',
        },
      ],
      related: [
        { path: '/', label: 'Private chef Oahu' },
        { path: '/help/getting-started', label: 'First-booking checklist' },
        { path: '/quote', label: 'Quote form' },
        { path: '/locations', label: 'Towns we cook in' },
      ],
    },
    {
      slug: 'villa-kitchens',
      name: 'Villa kitchens',
      h1: 'Oahu villa kitchens — Gold Coast cooktops, not hotel suites.',
      title: 'Oahu villa kitchens — Gold Coast cooktops, not hotel suites | myCHEF',
      description:
        'What an Oahu villa kitchen can hold: Kahala and Ko Olina cooktops, Waikīkī suites we decline.',
      lede: 'What an Oahu villa kitchen can hold: Kahala and Ko Olina cooktops, Waikīkī suites we decline.',
      photo: 'jnlKitchenOahu',
      body: [
        'Hotel suites without a cooktop are declined. Gold Coast houses on the Gold Coast page and short-stay villas on the Short-stay villas page are the product. We design the menu around the range, not a brochure photo.',
        'Freight elevators and COIs are handled in advance on towers. If the kitchen cannot support the draft, that is on the quote — not discovered at 4 p.m.',
      ],
      faqs: [
        {
          q: 'Will you cook in a Waikīkī suite?',
          a: 'Not without a functioning cooktop. We decline rooms that impersonate room service.',
        },
      ],
      related: [
        { path: '/gold-coast', label: 'Gold Coast houses' },
        { path: '/short-stay', label: 'Short-stay villas' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dietary-needs',
      name: 'Dietary needs',
      h1: 'How allergies land on an Oahu menu draft.',
      title: 'How allergies land on an Oahu menu draft | myCHEF',
      description:
        'How an Oahu allergy note becomes a written course, not an improvisation.',
      lede: 'How an Oahu allergy note becomes a written course, not an improvisation.',
      photo: 'jnlDietOahu',
      body: [
        'Tell us in the five fields. The proposal names the constraint. We do not invent a “we can do anything” claim for a Gold Coast kitchen we have not seen.',
        'Cross-contact limits are stated if the room cannot hold them. The sample on the menus page is an example, not a standing carte.',
      ],
      faqs: [
        {
          q: 'Can you invent it on the night?',
          a: 'No. Designed ahead, or we decline the seat. Open the dietary page — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary service' },
        { path: '/menus', label: 'How a menu is written' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'what-is-included',
      name: 'What is included',
      h1: 'What an Oahu night includes — and what prints as its own line.',
      title: 'What an Oahu night includes — and what prints as its own line | myCHEF',
      description:
        'Shop, cook, serve, clean on Oahu. Alcohol, rentals, and GET print as their own lines.',
      lede: 'Shop, cook, serve, clean on Oahu. Alcohol, rentals, and GET print as their own lines.',
      photo: 'jnlInclOahu',
      body: [
        'Shopping, cooking, service, and cleanup are in. Alcohol, rentals, and venue fees are out — always their own lines on a Kahala or Ko Olina quote.',
        'Service 20% and GET up to 4.712% print beside the dinner band. North Shore travel is a surcharge day — not a surprise in the stack.',
        'In the price of a signature dinner: menu design for your list, same-day shopping at Honolulu markets, cooking on the cooktop you have, paced table service, and a kitchen left cleaner than we found it. Groceries for that menu sit inside the $195–$290 a guest band; there is no separate grocery line on a dinner.',
        'Printed as their own lines: alcohol (BYO or quoted), rentals, venue fees, a bartender, North Shore travel, 20% service and Hawaiʻi GET up to 4.712%. Gratuity is voluntary. Freight elevators and building COIs in Waikīkī and Kakaʻako are logistics we arrange, not hidden fees.',
        'On a Stay Chef week (from $1,250 a day) the model changes: chef fee plus groceries at cost with the original receipts. See [private chef Honolulu](/private-chef) for a dinner hour by hour, or [private chef Oahu cost](/pricing) for every line.',
      ],
      faqs: [
        {
          q: 'Are groceries included in an Oahu private chef dinner?',
          a: 'Yes on a signature dinner — they sit inside the $195–$290 a guest band. On Stay Chef weeks groceries are billed at cost with receipts.',
        },
        {
          q: 'Is cleanup included?',
          a: 'Yes. The crew leaves the kitchen cleaner than they found it.',
        },
        {
          q: 'Is alcohol included?',
          a: 'No. It is BYO or quoted as its own line.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/pricing', label: 'Oahu rate card' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'how-far-ahead-to-book',
      name: 'How far ahead',
      h1: 'How far ahead to book an Oahu night.',
      title: 'How far ahead to book an Oahu night | myCHEF',
      description:
        'Peak months and notice on Oahu: December–March, wedding peaks, convention-week access.',
      lede: 'Peak months and notice on Oahu: December–March, wedding peaks, convention-week access.',
      photo: 'jnlBookOahu',
      body: [
        'December–March and wedding peaks (September, October, May) move first on this island. January around the Sony Open week presses hospitality even when HCC citywides are closed.',
        'Gold Coast houses book earlier than a Kailua Tuesday. North Shore is a surcharge day with its own clock. We do not hold a date on a verbal yes.',
        'Five fields. Fifty percent locks the date only after you accept the written total. Far-notice is honesty, not a scarcity stunt.',
        'A practical rule: request a written quote as soon as the house is on hold. For December–March and the September, October and May wedding peaks, that usually means weeks ahead. Holiday weeks inside the winter peak go first. A Tuesday in Kailua in a quiet month can sometimes be turned around faster.',
        'What slows a booking down is rarely the chef. It is the building: freight elevator windows and certificates of insurance for Waikīkī and Kakaʻako towers need lead time, so name the property type on the quote form. North Shore and Turtle Bay dinners carry their own drive and their own clock.',
        'Once you accept the written total, fifty percent locks the date. For a dinner in your Honolulu house, start at [private chef Honolulu](/private-chef); the full card is on [private chef Oahu cost](/pricing).',
      ],
      faqs: [
        {
          q: 'How far in advance should I book a private chef on Oahu?',
          a: 'As soon as the house is on hold — weeks ahead for December–March and the wedding peaks. Quieter weeknights can sometimes work on shorter notice.',
        },
        {
          q: 'Can you take next Saturday?',
          a: 'Sometimes. Send the date on the quote form. We will not invent a roster.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/conventions', label: 'Convention weeks' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'private-chef-vs-restaurant',
      name: 'Chef versus a restaurant',
      h1: 'Oahu chef versus a restaurant — the table is the house.',
      title: 'Oahu chef versus a restaurant — the table is the house | myCHEF',
      description:
        'In-villa Oahu service compared with going out.',
      lede: 'Oahu chef versus a restaurant: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'jnlVsOahu',
      body: [
        'A restaurant is a room you do not have. We cook in a Kahala or Ko Olina kitchen, then leave it cleaner than we found it. If you want a dining room we do not own, book a restaurant.',
        'We do not hold restaurant tables. We do not walk a party into a hotel restaurant as a “chef night.” Open the what-we-don’t-do list.',
      ],
      faqs: [
        {
          q: 'Can you book us a restaurant?',
          a: 'No. We cook in the house. Open the quote form — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    ...EXTRA_JOURNAL_NOTES.oahu as JournalArticle[],
  ],
  maui: [
    {
      slug: 'how-much-does-a-private-chef-cost',
      name: 'How a quote is built',
      h1: 'What a Maui chef dinner costs — band, fee stack, shore.',
      title: 'Maui Chef Dinner Price Guide — Band to Final Total | myCHEF',
      description:
        'A Maui villa chef dinner runs $225–$375 a guest with groceries inside; Stay Chef is from $1,550 a day. How service, GET and Upcountry travel reach the total.',
      lede: 'A Maui villa chef dinner runs $225–$375 a guest with groceries inside; Stay Chef is from $1,550 a day. How service, GET and Upcountry travel reach the total.',
      photo: 'jnlCostMaui',
      body: [
        'The Maui band comes first. A signature villa dinner runs $225–$375 USD a guest in Wailea, Kāʻanapali, Kapalua or Makena, and the groceries for that menu sit inside the band. Date Night for two starts from $750.',
        'A chef for the whole stay is Stay Chef, from $1,550 a day. Groceries on a Stay Chef week are billed at cost with merchant receipts, no markup. Signature and Stay Chef never fold into each other on one quote.',
        'After the food: 20% service and Hawaiʻi GET up to 4.712% as their own lines. Fifty percent locks the date. Gratuity is voluntary.',
        'Travel: Wailea, Kāʻanapali, Nāpili and Makena are base zones. Upcountry is a published surcharge. Saturday West Maui traffic is planned into the arrival time, not billed as a surprise.',
        'The written quote is the contract. The full card is on [private chef Maui cost](/pricing). A villa dinner is [personal chef Maui](/private-chef); the island overview is [private chef Maui](/).',
      ],
      faqs: [
        {
          q: 'Is Saturday traffic a fee?',
          a: 'No. It is a planned drive, not a surprise line.',
        },
        {
          q: 'Does Wailea cost more than West Maui?',
          a: 'No. Both sit in the same $225–$375 a guest band. Upcountry is the published travel surcharge.',
        },
        {
          q: 'Are groceries extra on a Maui dinner?',
          a: 'Not on a signature dinner — they sit inside the band. On Stay Chef (from $1,550 a day) groceries are billed at cost with receipts.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Maui rate card' },
        { path: '/private-chef-cost', label: 'Fee stack' },
        { path: '/west-maui', label: 'West Maui timing' },
      ],
    },
    {
      slug: 'how-to-hire-a-private-chef',
      name: 'How to hire',
      h1: 'Hiring a chef on Maui, without a mystery invoice.',
      title: 'Hiring a chef on Maui without a mystery invoice | myCHEF',
      description:
        'How to hire on Maui: name the shore, confirm the kitchen, send five fields.',
      lede: 'How to hire on Maui: name the shore, confirm the kitchen, send five fields.',
      photo: 'jnlHireMaui',
      body: [
        'We cook in Wailea, Kāʻanapali, Lahaina and West Maui, Kīhei, Kapalua and Makena. Name the shore and describe the kitchen.',
        'Five fields. No payment to ask. Fifty percent locks the date only after you accept the written total.',
        'When you are ready to book, the [private chef Maui](/) page has the villa-dinner prices and Wailea-to-Kapalua coverage. Staffed parties are [Maui catering](/catering).',
      ],
      faqs: [
        {
          q: 'Lahaina after a Wailea deposit?',
          a: 'Write us. The travel line can change.',
        },
      ],
      related: [
        { path: '/', label: 'Private chef Maui' },
        { path: '/help/getting-started', label: 'First-booking checklist' },
        { path: '/quote', label: 'Quote form' },
        { path: '/locations', label: 'Towns we cook in' },
      ],
    },
    {
      slug: 'villa-kitchens',
      name: 'Villa kitchens',
      h1: 'Maui villa kitchens — Wailea cooktops, not hotel suites.',
      title: 'Maui villa kitchens — Wailea cooktops, not hotel suites | myCHEF',
      description:
        'What a Maui villa kitchen can hold: Wailea and Kapalua cooktops, walk-up suites we decline.',
      lede: 'What a Maui villa kitchen can hold: Wailea and Kapalua cooktops, walk-up suites we decline.',
      photo: 'jnlKitchenMaui',
      body: [
        'Hotel suites without a cooktop are declined. South Maui houses on the South Maui page and West Maui estates on the West Maui page are the product. We design around the range, not a listing photo.',
        'Moving from Wailea to Lahaina after a deposit can change the travel line. If the kitchen cannot support the draft, that is on the quote — not discovered at 4 p.m.',
      ],
      faqs: [
        {
          q: 'Will you cook in a resort suite?',
          a: 'Not without a functioning cooktop. We decline rooms that impersonate room service.',
        },
      ],
      related: [
        { path: '/south-maui', label: 'South Maui' },
        { path: '/west-maui', label: 'West Maui timing' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dietary-needs',
      name: 'Dietary needs',
      h1: 'How allergies land on a Maui menu draft.',
      title: 'How allergies land on a Maui menu draft | myCHEF',
      description:
        'How a Maui allergy note becomes a written course, not an improvisation.',
      lede: 'How a Maui allergy note becomes a written course, not an improvisation.',
      photo: 'jnlDietMaui',
      body: [
        'Tell us in the five fields. The proposal names the constraint. We do not invent a “we can do anything” claim for a Kapalua kitchen we have not seen.',
        'Identical event plates can carry one dietary note on the quote. Cross-contact limits are stated if the room cannot hold them.',
      ],
      faqs: [
        {
          q: 'Can you invent it on the night?',
          a: 'No. Designed ahead, or we decline the seat. Open the dietary page — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary service' },
        { path: '/menus', label: 'How a menu is written' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'what-is-included',
      name: 'What is included',
      h1: 'What a Maui night includes — and what prints as its own line.',
      title: 'What a Maui night includes — and what prints as its own line | myCHEF',
      description:
        'Shop, cook, serve, clean on Maui. Alcohol, rentals, and GET print as their own lines.',
      lede: 'Shop, cook, serve, clean on Maui. Alcohol, rentals, and GET print as their own lines.',
      photo: 'jnlInclMaui',
      body: [
        'Shopping, cooking, service, and cleanup are in. Alcohol, rentals, and venue fees are out — always their own lines on a Wailea or Kapalua quote.',
        'Service and GET print beside the dinner band. Saturday West Maui arrival is planned, not hidden — not a surprise in the stack.',
      ],
      faqs: [
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/pricing', label: 'Maui rate card' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'how-far-ahead-to-book',
      name: 'How far ahead',
      h1: 'How far ahead to book a Maui night.',
      title: 'How far ahead to book a Maui night | myCHEF',
      description:
        'Peak months and notice on Maui: December–March, wedding-week houses, Saturday West Maui drives.',
      lede: 'Peak months and notice on Maui: December–March, wedding-week houses, Saturday West Maui drives.',
      photo: 'jnlBookMaui',
      body: [
        'December–March and wedding peaks (September, October, May) move first. Wedding-week houses on the wedding week page are several nights, not one verbal yes.',
        'Saturday West Maui arrival is a planned drive. Upcountry is a surcharge zone even when the draft looks simple. We do not hold a date on a chat window.',
        'Five fields. Fifty percent locks the date only after you accept the written total. Far-notice is honesty, not a scarcity stunt.',
      ],
      faqs: [
        {
          q: 'Can you take next Saturday in Lahaina?',
          a: 'Sometimes. Send the date on the quote form. Saturday West Maui is planned, not assumed.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/wedding-week', label: 'Wedding-week houses' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'private-chef-vs-restaurant',
      name: 'Chef versus a restaurant',
      h1: 'Maui chef versus a restaurant — the table is the villa.',
      title: 'Maui chef versus a restaurant — the table is the villa | myCHEF',
      description:
        'In-villa Maui service compared with going out.',
      lede: 'Maui chef versus a restaurant: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'jnlVsMaui',
      body: [
        'A restaurant is a room you do not have. We cook in a Wailea or Kapalua kitchen, then leave it cleaner than we found it. If you want a dining room we do not own, book a restaurant.',
        'We do not hold restaurant tables. We do not walk a party into a resort restaurant as a “chef night.” Open the what-we-don’t-do list.',
      ],
      faqs: [
        {
          q: 'Can you book us a restaurant?',
          a: 'No. We cook in the house. Open the quote form — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    ...EXTRA_JOURNAL_NOTES.maui as JournalArticle[],
  ],
  kauai: [
    {
      slug: 'how-much-does-a-private-chef-cost',
      name: 'How a quote is built',
      h1: 'What a Kauai chef dinner costs — band, shore, fee stack.',
      title: 'Kauai Chef Dinner Costs: Bands, Shore Travel, Fees | myCHEF',
      description:
        'Kauaʻi chef dinners run $225–$375 a guest, Date Night $975–$1,425, Stay Chef from $1,650 a day. How shore travel, service and GET reach the written total.',
      lede: 'Kauaʻi chef dinners run $225–$375 a guest, Date Night $975–$1,425, Stay Chef from $1,650 a day. How shore travel, service and GET reach the written total.',
      photo: 'jnlCostKauai',
      body: [
        'Kauaʻi is by inquiry, but the numbers are published. A signature villa dinner runs $225–$375 USD a guest, groceries inside the band. Date Night for two is a fixed evening at $975–$1,425.',
        'Stay Chef, a chef for the week, is from $1,650 a day with groceries billed at cost on original receipts. The two models never blend.',
        'Shore travel is a published zone line off the Līhuʻe base, in a $50–$75 range, for Princeville, Hanalei and Poʻipū. Hāʻena is quote-only with 72-hour notice and a weather and road clause.',
        'After the food: 20% service and GET up to 4.712%. A band is not an instant-booking button. When we can staff, the written quote itemises menu, staffing, shore travel, service and GET, and it is the contract. Hanalei-bridge weather reschedules rather than forfeits.',
        'The card is on [private chef Kauai cost](/pricing). A villa dinner is [personal chef Kauai](/private-chef); both shores are on [private chef Kauai](/).',
      ],
      faqs: [
        {
          q: 'Are you live on Kauai?',
          a: 'Inquiry. We crew when we can staff. The numbers on the pricing page are still the published starting prices.',
        },
        {
          q: 'Does Princeville cost more than Poʻipū?',
          a: 'The food band is the same. Drive time is a published zone line in a $50–$75 range.',
        },
        {
          q: 'What if the Hanalei bridge closes?',
          a: 'The night is rescheduled rather than forfeited. The clause is on the quote before you deposit.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Kauai rate card' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'how-to-hire-a-private-chef',
      name: 'How to hire',
      h1: 'Hiring a chef on Kauai — inquiry, not a fake roster.',
      title: 'Hiring a chef on Kauai without a mystery invoice | myCHEF',
      description:
        'How to enquire on Kauai: name the shore, send five fields, wait for a written reply.',
      lede: 'How to enquire on Kauai: name the shore, send five fields, wait for a written reply.',
      photo: 'jnlHireKauai',
      body: [
        'We cook on both shores — Princeville, Hanalei, Poʻipū and Kapaʻa. Bookings start as an inquiry.',
        'Five fields. We write back with what we can staff. A closed Hanalei bridge moves the night; it does not eat the deposit.',
        'When you are ready to send dates, the [private chef Kauai](/) page has the both-shore prices and the Hanalei weather clause. Staffed parties of ten to seventy-five are [Kauai catering](/catering).',
        'Kauaʻi starts as an inquiry, so the order matters. First name the shore: Princeville and Hanalei on the north, Poʻipū on the south, or Kapaʻa on the east side. Shore travel is a published zone line off the Līhuʻe base, in a $50–$75 range, and Hāʻena is quote-only with 72-hour notice and a weather and road clause.',
        'Then tell us the house. A villa or estate with a working range, cold storage and a table for the list is what we cook in. Vacation rentals are fine when the kitchen is real. Hotel rooms without a cooktop are declined.',
        'Then send the five fields on the inquiry form: island, dates, headcount, service and how to reach you. We write back with what we can staff, not with a fake calendar. When we can staff, the written quote shows a signature dinner at $225–$375 a guest, groceries inside the band, or Date Night for two at a fixed $975–$1,425, plus 20% service and GET up to 4.712% as their own lines.',
        'For a personal chef at your villa, see [personal chef Kauai](/private-chef). For both shores, prices and the Hanalei weather clause in one place, see [private chef Kauai](/).',
      ],
      faqs: [
        {
          q: 'How do I hire a private chef on Kauai?',
          a: 'Name the shore and the house, then send five fields on the inquiry form. We reply in writing with what we can staff and a written total. Fifty percent locks the date once you accept it.',
        },
        {
          q: 'Is a Kauai private chef bookable instantly?',
          a: 'No. Kauaʻi is by inquiry. A published band is a starting price, not an instant confirmation.',
        },
        {
          q: 'What happens if the Hanalei bridge closes?',
          a: 'The night is rescheduled rather than forfeited. The clause is on the quote before you deposit.',
        },
        {
          q: 'Do you staff every Saturday?',
          a: 'No. We will not hold a fake roster. Send the date.',
        },
      ],
      related: [
        { path: '/', label: 'Private chef Kauai' },
        { path: '/help/getting-started', label: 'First-booking checklist' },
        { path: '/quote', label: 'Inquiry form' },
        { path: '/locations', label: 'Towns we cook in' },
      ],
    },
    {
      slug: 'villa-kitchens',
      name: 'Villa kitchens',
      h1: 'Kauai estate kitchens — both shores, not hotel suites.',
      title: 'Kauai estate kitchens — both shores, not hotel suites | myCHEF',
      description:
        'What a Kauai estate kitchen can hold at inquiry: Princeville and Poʻipū cooktops, hotel suites we decline.',
      lede: 'What a Kauai estate kitchen can hold at inquiry: Princeville and Poʻipū cooktops, hotel suites we decline.',
      photo: 'jnlKitchenKauai',
      body: [
        'Hotel suites without a cooktop are declined. North Shore estates on the North Shore page and south-shore houses on the South Shore page are the product. Inquiry stage does not mean we impersonate room service.',
        'A closed Hanalei bridge can move the night. If the kitchen cannot support the draft, that is on the inquiry quote, not discovered at 4 p.m.',
      ],
      faqs: [
        {
          q: 'Are you live on both shores?',
          a: 'Inquiry. We crew when we can staff. Send the address and the cooktop.',
        },
      ],
      related: [
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/south-shore', label: 'South Shore kitchens' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dietary-needs',
      name: 'Dietary needs',
      h1: 'How allergies land on a Kauai inquiry draft.',
      title: 'How allergies land on a Kauai inquiry draft | myCHEF',
      description:
        'How a Kauai allergy note becomes a written course at inquiry, not an improvisation.',
      lede: 'How a Kauai allergy note becomes a written course at inquiry, not an improvisation.',
      photo: 'jnlDietKauai',
      body: [
        'Tell us in the five fields. When we can staff, the proposal names the constraint. Inquiry stage does not mean a fake dietary promise.',
        'Far-North drafts still inherit the Hanalei bridge notes. Cross-contact limits are stated if the room cannot hold them.',
      ],
      faqs: [
        {
          q: 'Can you invent it on the night?',
          a: 'No. Designed ahead, or we decline the seat. Open the dietary page — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary service' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'what-is-included',
      name: 'What is included',
      h1: 'What a Kauai inquiry night includes — and what prints as its own line.',
      title: 'What a Kauai inquiry night includes — and what prints as its own line | myCHEF',
      description:
        'Shop, cook, serve, clean on Kauai when we can staff. Alcohol, rentals, shore travel, and GET print as their own lines.',
      lede: 'Shop, cook, serve, clean on Kauai when we can staff. Alcohol, rentals, shore travel, and GET print as their own lines.',
      photo: 'jnlInclKauai',
      body: [
        'When we can staff: shopping, cooking, service, and cleanup are in. Alcohol, rentals, and venue fees are out — always their own lines on a Princeville or Poʻipū quote.',
        'Both-shore travel, service, and GET print beside the dinner band. A band is not an instant-booking button. Hanalei-bridge weather reschedules rather than forfeits.',
      ],
      faqs: [
        {
          q: 'Are the numbers live?',
          a: 'The published starting prices on the pricing page are live. Staffing a Saturday is not assumed. Send the date.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/pricing', label: 'Kauai rate card' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'how-far-ahead-to-book',
      name: 'How far ahead',
      h1: 'How far ahead to enquire a Kauai night.',
      title: 'How far ahead to enquire a Kauai night | myCHEF',
      description:
        'Peak months and notice on Kauai at inquiry: December–March, wedding peaks, Far-North weather.',
      lede: 'Peak months and notice on Kauai at inquiry: December–March, wedding peaks, Far-North weather.',
      photo: 'jnlBookKauai',
      body: [
        'December–March and wedding peaks (September, October, May) move first when we can staff. Far-North Kauaʻi carries a published 72-hour weather window.',
        'Wedding-week houses on the wedding week page are several nights. We do not hold a fake instant-booking button. Five fields. We write back with what we can staff.',
        'A closed Hanalei bridge moves the night; it does not eat the deposit. Far-notice is honesty, not a scarcity stunt.',
        'Because Kauaʻi is by inquiry, earlier is better: it gives us time to staff the shore you are on. Send dates as soon as the villa is on hold, especially for December–March and the September, October and May wedding peaks.',
        'Far-North dinners toward Hāʻena need at least 72 hours’ notice and carry a weather and road clause. Wedding weeks with several nights should come in as one inquiry so the crew is planned across the week.',
        'For the prices and the Hanalei clause in one place, see [private chef Kauai](/); every line is on [private chef Kauai cost](/pricing).',
      ],
      faqs: [
        {
          q: 'How far ahead should I enquire for a Kauai private chef?',
          a: 'As soon as the villa is on hold. Far-North dinners need at least 72 hours’ notice; peak months and wedding weeks need more.',
        },
        {
          q: 'Do you staff every Saturday?',
          a: 'No. Send the date on the quote form. We will not invent a roster.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'private-chef-vs-restaurant',
      name: 'Chef versus a restaurant',
      h1: 'Kauai chef versus a restaurant — the table is the estate.',
      title: 'Kauai chef versus a restaurant — the table is the estate | myCHEF',
      description:
        'In-estate Kauai service at inquiry compared with going out.',
      lede: 'In-estate Kauai service at inquiry compared with going out.',
      photo: 'jnlVsKauai',
      body: [
        'A restaurant is a room you do not have. We cook in a Princeville or Poʻipū kitchen, then leave it cleaner than we found it — when we can staff. If you want a dining room we do not own, book a restaurant.',
        'We do not hold restaurant tables. We do not walk a party into a resort restaurant as a “chef night.” Open the what-we-don’t-do list. A band is not an instant-booking button.',
      ],
      faqs: [
        {
          q: 'Can you book us a restaurant?',
          a: 'No. We cook in the house, when we can staff. Open the quote form — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    ...EXTRA_JOURNAL_NOTES.kauai as JournalArticle[],
  ],
  bigisland: [
    {
      slug: 'how-much-does-a-private-chef-cost',
      name: 'How a quote is built',
      h1: 'What a Big Island chef dinner costs — band, stack, Kona–Kohala.',
      title: 'What a Big Island Chef Dinner Costs — Quote Guide | myCHEF',
      description:
        'Big Island chef dinners: ENTRY from $165, CORE $210–$325 a guest, Stay Chef from $1,450 a day. How service, GET and Waimea or Hilo travel reach the total.',
      lede: 'Big Island chef dinners: ENTRY from $165, CORE $210–$325 a guest, Stay Chef from $1,450 a day. How service, GET and Waimea or Hilo travel reach the total.',
      photo: 'jnlCostBigisland',
      body: [
        'West side first, published bands. A Kona or Kohala Coast villa dinner runs CORE $210–$325 USD a guest, groceries inside the band. ENTRY, the open west-side table, is from $165 a guest.',
        'A chef for the week is Stay Chef, from $1,450 a day, with groceries billed at cost on original receipts. Signature dinners and Stay Chef never blend on one quote.',
        'Kona–Kohala is the base zone. Waimea and Hāmākua carry a published surcharge. The east side is a dedicated day with its own travel line, never a west-side round trip. Ironman weeks change lodging and crew days, not the food band.',
        'After the food: 20% service and Hawaiʻi GET up to 4.712%, each printed once. A band is not an instant-booking button. When we can staff, the written quote is the contract.',
        'The card is on [private chef Big Island cost](/pricing). A Kona villa dinner is [private chef Kona](/private-chef); the island overview is [private chef Big Island](/).',
      ],
      faqs: [
        {
          q: 'Can a Kona total cover Hilo?',
          a: 'Not the same day. We quote a dedicated crossing.',
        },
        {
          q: 'What is ENTRY versus CORE?',
          a: 'ENTRY from $165 a guest is the open west-side table. CORE $210–$325 a guest is the usual Kona–Kohala villa night.',
        },
        {
          q: 'Does Ironman week change the price?',
          a: 'No. CORE stays $210–$325 a guest. Ironman compresses crew days; flag those dates early.',
        },
      ],
      related: [
        { path: '/pricing', label: 'West-side rate card' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'how-to-hire-a-private-chef',
      name: 'How to hire',
      h1: 'Hiring a west-side chef — inquiry, Hilo not implied.',
      title: 'Hiring a chef on Hawaiʻi Island without a mystery invoice | myCHEF',
      description:
        'How to enquire on Hawaiʻi Island: west-side address, five fields, written reply. East side is a different day.',
      lede: 'How to enquire on Hawaiʻi Island: west-side address, five fields, written reply. East side is a different day.',
      photo: 'jnlHireBigisland',
      body: [
        'We cook on the west side first — Kailua-Kona, Keauhou, Waimea, Waikoloa and the Kohala Coast.',
        'Five fields. We write back with what we can staff. Adding a Hilo lunch after a Kona dinner is a second day.',
        'When you are ready to send dates, the [private chef Big Island](/) page has the Kona–Kohala prices and the ENTRY and CORE bands. Staffed parties are [Big Island catering](/catering).',
        'Start with the address. Kona, Keauhou, Waikoloa and the Kohala Coast are the base zone. Waimea and Hāmākua carry a published surcharge. Hilo and the east side are a dedicated day with their own travel line, never folded into a Kona night.',
        'Then the kitchen: a working range, cold storage and a table for the list. Waikoloa condos and Airbnb kitchens are fine when they actually cook. Hotel rooms without a cooktop are declined before a deposit.',
        'Then the five fields on the inquiry form: island, dates, headcount, service and how to reach you. When we can staff, the written quote shows CORE $210–$325 a guest or ENTRY from $165, groceries inside the band, with 20% service and Hawaiʻi GET up to 4.712% printed once. Ironman weeks are possible with compressed availability; flag those dates early.',
        'For a villa dinner in Kona or on the Kohala Coast, see [private chef Kona](/private-chef). The full card is on [private chef Big Island cost](/pricing).',
      ],
      faqs: [
        {
          q: 'How do I hire a private chef on the Big Island?',
          a: 'Send the west-side address and five fields on the inquiry form. We reply in writing with what we can staff and a total; fifty percent locks the date once you accept it.',
        },
        {
          q: 'Can one chef cover Kona and Hilo on the same day?',
          a: 'No. The east side is 2.5–3 hours away and is quoted as a dedicated day.',
        },
        {
          q: 'Are you are on the west side?',
          a: 'Inquiry. We crew when we can staff. Send the address.',
        },
      ],
      related: [
        { path: '/', label: 'Private chef Big Island' },
        { path: '/help/getting-started', label: 'First-booking checklist' },
        { path: '/quote', label: 'Inquiry form' },
        { path: '/locations', label: 'Towns we cook in' },
      ],
    },
    {
      slug: 'villa-kitchens',
      name: 'Villa kitchens',
      h1: 'West-side villa kitchens — Kona cooktops, not hotel suites.',
      title: 'Hawaiʻi Island villa kitchens — Kona cooktops, not hotel suites | myCHEF',
      description:
        'What a west-side villa kitchen can hold at inquiry: Kona and Waikoloa cooktops, hotel suites we decline. East side is a different day.',
      lede: 'What a west-side villa kitchen can hold at inquiry: Kona and Waikoloa cooktops, hotel suites we decline. East side is a different day.',
      photo: 'jnlKitchenBigisland',
      body: [
        'Hotel suites without a cooktop are declined. Kohala houses on the Kona–Kohala corridor page and Kona villas on the Kailua-Kona / Keauhou page are the product. Inquiry stage does not mean we impersonate room service.',
        `A Hilo kitchen is a different day.`,
        'If the kitchen cannot support the draft, that is on the inquiry quote — not discovered at 4 p.m. West-side first.',
      ],
      faqs: [
        {
          q: 'Can a Kona cooktop cover Hilo?',
          a: 'Not the same day. We quote a dedicated crossing.',
        },
      ],
      related: [
        { path: '/kohala-corridor', label: 'Kohala corridor' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dietary-needs',
      name: 'Dietary needs',
      h1: 'How allergies land on a west-side menu draft.',
      title: 'How allergies land on a Hawaiʻi Island menu draft | myCHEF',
      description:
        'How a west-side allergy note becomes a written course at inquiry, not an improvisation. East side is a different day.',
      lede: 'How a west-side allergy note becomes a written course at inquiry, not an improvisation. East side is a different day.',
      photo: 'jnlDietBigisland',
      body: [
        'Tell us in the five fields. When we can staff, the proposal names the constraint. West-side provisioning for west-side nights.',
        'East-side dietary is its own team day. Coffee Act origin claims stay honest.',
      ],
      faqs: [
        {
          q: 'Can a Kona draft cover a Hilo allergy table?',
          a: 'Not the same day.',
        },
      ],
      related: [
        { path: '/dietary', label: 'Dietary service' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'what-is-included',
      name: 'What is included',
      h1: 'What a west-side night includes — and what prints as its own line.',
      title: 'What a Hawaiʻi Island night includes — and what prints as its own line | myCHEF',
      description:
        'Shop, cook, serve, clean on the west side when we can staff. Alcohol, rentals, GET, and east-side days print as their own lines.',
      lede: 'Shop, cook, serve, clean on the west side when we can staff. Alcohol, rentals, GET, and east-side days print as their own lines.',
      photo: 'jnlInclBigisland',
      body: [
        'When we can staff: shopping, cooking, service, and cleanup are in. Alcohol, rentals, and venue fees are out — always their own lines on a Kona or Waikoloa quote.',
        'Service and GET print beside the dinner band. East side is a dedicated day — never a west-side round trip hidden in the stack.',
      ],
      faqs: [
        {
          q: 'Does the CORE band cover the east side?',
          a: 'No. We quote a dedicated crossing.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/pricing', label: 'West-side rate card' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'how-far-ahead-to-book',
      name: 'How far ahead',
      h1: 'How far ahead to enquire a west-side night.',
      title: 'How far ahead to enquire a Hawaiʻi Island night | myCHEF',
      description:
        'Peak months and notice on Hawaiʻi Island at inquiry: December–March, Ironman weeks, east-side dedicated days.',
      lede: 'Peak months and notice on Hawaiʻi Island at inquiry: December–March, Ironman weeks, east-side dedicated days.',
      photo: 'jnlBookBigisland',
      body: [
        'December–March and wedding peaks (September, October, May) move first when we can staff. Ironman weeks change access — not a marketing slogan.',
        'East side is a dedicated day, not a same-day Kona–Hilo fantasy. Five fields. We write back with what we can staff. We do not hold a fake instant-booking button.',
        'Far-notice is honesty, not a scarcity stunt. Adding a Hilo lunch after a Kona dinner is a second day.',
        'Send dates as soon as the villa is on hold. December–March, the September, October and May wedding peaks, and Ironman weeks in Kona compress crew days first. Ironman is possible with compressed availability; flag those dates early rather than the week of the race.',
        'If the stay crosses to Hilo or the east side, send both dates in one inquiry. The east side is a dedicated day with its own travel line, so it needs its own slot on the calendar.',
        'For Kona and Kohala villa dinners, see [private chef Kona](/private-chef); every line is on [private chef Big Island cost](/pricing).',
      ],
      faqs: [
        {
          q: 'How early should I book for Ironman week in Kona?',
          a: 'As early as you can. We take Ironman week with compressed availability; flag the dates on the inquiry form when the villa is on hold.',
        },
        {
          q: 'Can you take next Saturday in Hilo after Kona?',
          a: 'Not the same day. Send both dates on the quote form.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'private-chef-vs-restaurant',
      name: 'Chef versus a restaurant',
      h1: 'Hawaiʻi Island chef versus a restaurant — the table is the west-side house.',
      title: 'Hawaiʻi Island chef versus a restaurant — the table is the west-side house | myCHEF',
      description:
        'West-side in-house service at inquiry compared with going out.',
      lede: 'West-side in-house service at inquiry compared with going out.',
      photo: 'jnlVsBigisland',
      body: [
        'A restaurant is a room you do not have. We cook in a Kona or Waikoloa kitchen, then leave it cleaner than we found it — when we can staff. If you want a dining room we do not own, book a restaurant. East side is a dedicated day.',
        'We do not hold restaurant tables. We do not walk a party into a resort restaurant as a “chef night.” Open the what-we-don’t-do list. A band is not an instant-booking button.',
        'The honest comparison is the evening, not the plate. In the house there is no drive back along Queen Kaʻahumanu Highway after dinner, no split checks, and kids can leave the table when they are done. Dietary needs are designed into the menu before the night instead of negotiated with a server.',
        'The price compares differently too. A west-side villa dinner runs CORE $210–$325 a guest, groceries inside the band, with 20% service and Hawaiʻi GET up to 4.712% on their own lines. That number covers shopping, cooking, service and cleanup in your kitchen. Alcohol is BYO or quoted, so the wine list is yours.',
        'A restaurant still wins when you want a room, a view you do not have, or a last-minute table. A chef in the house wins for a group, a celebration or a week of dinners. For a villa dinner in Kona or Kohala, see [private chef Kona](/private-chef); every line is on [private chef Big Island cost](/pricing).',
      ],
      faqs: [
        {
          q: 'Is a private chef more expensive than a restaurant on the Big Island?',
          a: 'It depends on the group. CORE is $210–$325 a guest including groceries, cooking, service and cleanup in your villa; service and GET are added once. Alcohol is BYO, which often closes the gap.',
        },
        {
          q: 'Can a private chef handle allergies better than a restaurant?',
          a: 'Allergies and dietary needs are designed into the menu before the night, with the crew, not swapped at the pass.',
        },
        {
          q: 'Can you book us a restaurant?',
          a: 'No. We cook in the house, when we can staff. Open the quote form — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    ...EXTRA_JOURNAL_NOTES.bigisland as JournalArticle[],
  ],
};

export function getJournalArticle(islandId: IslandId, slug: string) {
  return journalArticles[islandId].find((row) => row.slug === slug);
}
