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
      h1: 'How an Oahu quote is built — band, stack, corridor.',
      title: 'How an Oahu chef quote is built | myCHEF',
      description:
        'How an Oahu written quote is built: published dinner band, fee stack, North Shore travel if any.',
      lede: 'How an Oahu written quote is built: published dinner band, fee stack, North Shore travel if any.',
      photo: 'jnlCostOahu',
      body: [
        'CORE on this island is the published dinner band. Service 20% and GET up to 4.712% print as their own lines. North Shore is a surcharge day.',
        'The written quote is the contract. Indicative bands on the pricing page are starting prices, not a verbal range in a chat window.',
      ],
      faqs: [
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
      ],
      faqs: [
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
      ],
      faqs: [
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
      ],
      faqs: [
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
      h1: 'How a Maui quote is built — band, stack, shore.',
      title: 'How a Maui chef quote is built | myCHEF',
      description:
        'How a Maui written quote is built: published dinner band, fee stack, Upcountry travel if any.',
      lede: 'How a Maui written quote is built: published dinner band, fee stack, Upcountry travel if any.',
      photo: 'jnlCostMaui',
      body: [
        'CORE on this island is the published dinner band. Saturday West Maui arrival is planned, not hidden. Service and GET print as their own lines.',
        'The written quote is the contract. Moving from Wailea to Lahaina after a deposit can change the travel line.',
      ],
      faqs: [
        {
          q: 'Is Saturday traffic a fee?',
          a: 'It is a planned drive, not a surprise line.',
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
      h1: 'How a Kauai inquiry quote is built — band, stack, shore.',
      title: 'How a Kauai chef quote is built | myCHEF',
      description:
        'How a Kauai written quote is built at inquiry: published dinner band, both-shore travel, fee stack.',
      lede: 'How a Kauai written quote is built at inquiry: published dinner band, both-shore travel, fee stack.',
      photo: 'jnlCostKauai',
      body: [
        `Inquiry stage.`,
        'A band is not an instant-booking button. When we can staff, the written quote itemises menu, staffing, shore travel, 20% service, GET.',
        'Hanalei-bridge weather reschedules rather than forfeits.',
      ],
      faqs: [
        {
          q: 'Are you live?',
          a: 'Inquiry. We crew when we can staff. The numbers on the pricing page are still the published starting prices.',
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
      ],
      faqs: [
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
      ],
      faqs: [
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
      h1: 'How a west-side quote is built — band, stack, Kona–Kohala.',
      title: 'How a Hawaiʻi Island chef quote is built | myCHEF',
      description:
        'How a west-side Hawaiʻi Island written quote is built at inquiry. East side is a different day.',
      lede: 'How a west-side Hawaiʻi Island written quote is built at inquiry. East side is a different day.',
      photo: 'jnlCostBigisland',
      body: [
        `Inquiry, west-side first.`,
        'East side is a dedicated day. Never a west-side round trip. Service and GET print as their own lines.',
        'A band is not an instant-booking button. When we can staff, the written quote is the contract.',
      ],
      faqs: [
        {
          q: 'Can a Kona total cover Hilo?',
          a: 'Not the same day. We quote a dedicated crossing.',
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
      ],
      faqs: [
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
      ],
      faqs: [
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
      ],
      faqs: [
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
