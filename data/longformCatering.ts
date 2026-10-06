import type { CopyFaq, CopySection } from '@/components/Longform';
import type { IslandId } from '@/data/islands';

/*
 * Island catering pages — long-form copy. Each island page owns "{island} catering"
 * (Oʻahu also "Honolulu catering"; Hawaiʻi Island also "Kona catering").
 * Small private dinners link to the island home; weddings link to /weddings.
 * Facts only from the published rate card and existing site copy.
 * Inline links use `[anchor](/path)` and render as in-text links.
 */

const oahuSections: CopySection[] = [
  {
    h2: 'Oahu catering, cooked in your kitchen',
    paras: [
      'myCHEF Hawaii is an Oahu catering team for private events at home — villas, estates, residences and vacation rentals from Honolulu to Ko Olina. We plan the menu with you, shop the morning of the event, cook in the kitchen at the house, serve your guests and leave the kitchen clean. Most of our Oahu catering is for ten to seventy-five guests: milestone birthdays, welcome dinners, rehearsal dinners, retreats, family reunions and company dinners.',
      'We are not a hotel banquet department and we don’t drop off trays. Every event is staffed, every menu is written for that house and that guest list, and you get a written quote with every line on it before you pay a deposit. For a smaller table of six to ten, a [private chef dinner on Oahu](/) is usually the better fit — one chef, one table, the same food.',
    ],
  },
  {
    h2: 'Honolulu catering: towers, Kahala homes and Waikīkī residences',
    paras: [
      'A lot of our Honolulu catering happens in high-rise residences — Kakaʻako, downtown and Waikīkī apartments that have a real kitchen — and in the larger homes of Kahala, the Gold Coast, Diamond Head and Hawaiʻi Kai. Each comes with its own logistics. In a tower we book the freight elevator, work around quiet hours and send the building our certificate of insurance before the day. In Kahala the question is usually the dining room: how many people it seats and whether the night should be plated or served as a buffet.',
      'In town, parking and loading are often a bigger constraint than distance, so we plan arrival around them and aim to be in the kitchen about three hours before service. A hotel suite with only a coffee maker can’t host a catered dinner. We’ll tell you that before you pay anything, rather than improvise on the night.',
    ],
  },
  {
    h2: 'Kailua, Ko Olina and the rest of the island',
    paras: [
      'Outside Honolulu, Kailua and Lanikai homes tend to book longer stays and family weeks, so a catered party there often sits alongside a few chef days. Ko Olina villas on the west side are built for entertaining, and we shop for them on the west side rather than making round trips to town. ʻEwa and Kapolei are close to base, and Kāneʻohe is a quieter windward drive.',
      'The North Shore and Turtle Bay are sixty to ninety minutes or more from town. We cook there with a published travel surcharge that is printed on the quote, never added afterwards.',
    ],
  },
  {
    h2: 'Buffet, plated or family-style',
    paras: [
      'Most Honolulu homes don’t have a restaurant kitchen, and that shapes the format. A buffet works well for twenty to fifty guests in a residence: stations along the kitchen island or a lānai rail, hot pans kept topped up, and guests eating at their own pace. Plated service suits houses with a proper dining table, where courses leave the kitchen in order — Kahala and Gold Coast estates do this well. Family-style, with shared platters down a long table, sits in between and is lovely for ten to twenty.',
      'For the hour before dinner we can set grazing boards and passed pūpū. Styled grazing runs around $750–$950 as a market reference, and passed bites are $5–$7 a piece with a twenty-piece minimum. The format changes how many people we need on the floor, not the food price.',
    ],
  },
  {
    h2: 'What an Oahu catering menu looks like',
    paras: [
      'Every menu is written for the event, but a typical evening might open with ahi poke, local crudités and mango, move to kanpachi crudo or a chilled cucumber-crab first course, and land on wood-grilled catch with coconut rice and island greens — with a meat or vegetable main alongside, so the whole table isn’t eating fish. Lilikoi cheesecake or coconut haupia closes the night.',
      'We buy fish the morning of the event and cook it that afternoon. Allergies and dietary needs — vegan, gluten-free, nut-aware, children’s plates — are planned into the menu from the start instead of being swapped at the last minute. You can edit the draft until it feels like yours.',
    ],
  },
  {
    h2: 'Oahu catering prices',
    paras: [
      'Food is priced per guest at a published $195–$290 on Oahu. That covers menu design, same-day shopping, cooking, service and cleanup. Staff are listed separately: servers are $80 an hour and a sous-chef is $105 an hour, with four- to five-hour minimums. A 20% service charge and Hawaiʻi GET of up to 4.712% are added once, as their own lines. A 50% deposit holds the date once you accept the written total, and a tip is always up to you.',
      'Drinks are yours to bring, or we can add a [mobile bar](/mobile-bar) or a [villa bartender](/bar) as a separate line. Every Oahu number sits on one page in our [Oahu pricing](/pricing).',
    ],
  },
  {
    h2: 'Wedding weekends and company events',
    paras: [
      'On Oahu a wedding is often a weekend: a welcome dinner on Friday, the reception on Saturday and a recovery brunch on Sunday, each priced as its own line so you can drop one without renegotiating the rest. Reception food starts from $190 a guest plus staff. Our [Oahu wedding catering](/weddings) page covers the full week.',
      'For companies we cook board dinners, staff meals, film and photo crew meals with early call times, and retreat weeks where groceries for multi-day bookings are billed at cost with receipts. Invoices are itemised so a finance team can read them. January, around the Sony Open, and the December holidays are the busiest dates on the island, so ask early.',
    ],
  },
  {
    h2: 'How to book catering on Oahu',
    paras: [
      'Send five things on the [quote form](/quote): island, dates, guest count, the kind of event and how to reach you. Add the type of property and any allergies in the same message. We reply in Hawaii business hours with a menu direction, a staffing plan and a written quote. You can also call or WhatsApp (808) 468-7748, or email quotes@mychef-hawaii.com.',
      'We’re new in Hawaii, so you won’t find guest reviews here yet — they will go up after events we can verify. Until then, judge us on the published prices, the sample menu and a written quote you can read line by line before you commit.',
    ],
  },
];

const oahuFaqs: CopyFaq[] = [
  {
    q: 'How much does catering cost on Oahu?',
    a: 'Food is $195–$290 a guest, covering menu design, shopping, cooking, service and cleanup. Servers are $80 an hour and a sous-chef $105, with four- to five-hour minimums. A 20% service charge and GET up to 4.712% are added as their own lines on the written quote.',
  },
  {
    q: 'Do you cater in Honolulu high-rises and condos?',
    a: 'Yes, when the residence has a working kitchen. We book the freight elevator, work around quiet hours and send the building our certificate of insurance in advance. Hotel rooms without a cooktop are the one thing we decline.',
  },
  {
    q: 'How many guests can you cater on Oahu?',
    a: 'Usually ten to seventy-five. For six to ten guests, a [private chef dinner on Oahu](/) is the better fit. Larger events are possible as written exceptions.',
  },
  {
    q: 'Buffet or plated — which works better in a Honolulu home?',
    a: 'A buffet suits most residences and twenty to fifty guests. Plated service needs a dining table that seats the list, as in many Kahala and Gold Coast homes. Family-style works for ten to twenty. The food price stays the same; the staffing changes.',
  },
  {
    q: 'Do you cater on the North Shore?',
    a: 'Yes. The North Shore and Turtle Bay are sixty to ninety minutes or more from town, so a published travel surcharge is added to the quote.',
  },
  {
    q: 'Can you cater our wedding on Oahu?',
    a: 'Yes — welcome dinner, reception and recovery brunch, each priced separately, with reception food from $190 a guest plus staff. See [Oahu wedding catering](/weddings) for the full week.',
  },
  {
    q: 'Do you provide drinks or a bartender?',
    a: 'Drinks are yours to bring, or we add a [villa bartender](/bar) or the [mobile bar](/mobile-bar) as a separate line.',
  },
  {
    q: 'How far ahead should we book?',
    a: 'As soon as the date is firm. The December holidays and January are the busiest weeks on Oahu, and one crew holds one wedding weekend at a time.',
  },
];

const mauiSections: CopySection[] = [
  {
    h2: 'Maui catering at your villa',
    paras: [
      'myCHEF Hawaii caters private events in Maui villas, estates and vacation homes — Wailea and Makena, Kīhei, and West Maui from Kāʻanapali to Kapalua. Our Maui catering is staffed, not drop-off: we write the menu for your house, shop, cook in the villa kitchen, serve your guests and clean up. Most events are for about a dozen to seventy-five guests — family reunions, milestone birthdays, welcome dinners, rehearsal dinners and retreats.',
      'You book myCHEF Hawaii as one team, not a list of freelance names, and you get a written menu and a written total before any deposit. If you’re planning dinner for two to eight people, a [private chef on Maui](/) is usually the better choice — same kitchen standard, no reception crew.',
    ],
  },
  {
    h2: 'Wailea, West Maui and Kīhei',
    paras: [
      'Wailea is Maui’s resort-residence corridor and the first area to fill from December through March. Makena, just south, is quieter and still inside our base zone. Many Wailea great rooms can handle a plated dinner; a Wailea condo with a galley kitchen is better suited to a buffet, and we’ll say so.',
      'West Maui — Kāʻanapali, Kapalua, Nāpili and Honokōwai — is villa and estate work with traffic planned into arrival. Kīhei is mostly condos and vacation homes with smaller kitchens; the food price doesn’t change, but the format might. If a kitchen can’t hold a twenty-person dinner, we’ll suggest a different format before you commit.',
      'Upcountry — Makawao, Kula and the slopes of Haleakalā — carries a published travel surcharge, and Pāʻia and Haʻikū are quoted case by case because of the drive. Evenings Upcountry run cooler, so the station plan changes with the elevation.',
    ],
  },
  {
    h2: 'Buffet, plated or family-style on Maui',
    paras: [
      'Most Maui events happen outdoors, and the trade winds shape the service. A buffet is set where the wind drops, with lids that stay on and pans that stay hot when the breeze comes through the sliders. It suits a Wailea great room full of people standing, or a family week that doesn’t want a long, paced dinner.',
      'Plated dinners suit a dining room or a sheltered terrace — rehearsal dinners and celebrations in Kapalua or Wailea often go this way. Plated service needs more people on the floor for the same guest count, so the staffing line grows while the food price stays the same. Family-style, at a long outdoor table with platters down the middle, is the classic estate picture.',
      'Before dinner, we set grazing boards (around $750–$950 as a market reference) and passed bites at $5–$7 a piece with a twenty-piece minimum. A sushi-forward menu — nigiri, sashimi and hand rolls — is also a direction we can cook in the villa.',
    ],
  },
  {
    h2: 'What’s on a Maui catering menu',
    paras: [
      'A typical Maui evening might start with ahi poke and island crudités, move to kanpachi crudo, and serve wood-grilled catch with coconut rice and island greens alongside a meat or vegetable main. Lilikoi cheesecake or haupia finishes it. Farm names only appear on a menu after we have them confirmed in writing.',
      'Dietary needs are designed into the menu from the first draft. Multi-day retreat shopping is billed at cost with the receipts, so you can see exactly what was bought.',
    ],
  },
  {
    h2: 'Maui catering prices',
    paras: [
      'Food on Maui is published at $225–$375 a guest. That covers menu design, shopping, cooking, service and cleanup. Staff are separate and itemised: servers are $80 an hour and a sous-chef $105, with four- to five-hour minimums. A 20% service charge and GET of up to 4.712% are added once, and half the written total holds the date. Upcountry or Pāʻia travel, if any, is its own line. A tip is never required.',
      'Drinks are yours to bring, or we can quote a [villa bartender](/bar) or the [mobile bar](/mobile-bar). Our [Maui pricing](/pricing) page lists every number in one place.',
    ],
  },
  {
    h2: 'Wedding weeks on Maui',
    paras: [
      'A Maui wedding is often a week of events: welcome dinner, rehearsal, reception and recovery brunch, each a separate line on one proposal. Receptions we cater run from about ten to seventy-five guests at private estates rather than ballrooms, with food from $225 a guest plus staff. September, October and May are the busiest wedding months, and one crew holds one wedding week at a time.',
      'Every outdoor reception gets a written indoor or covered backup before the deposit. For the full picture, see [Maui wedding catering](/weddings).',
    ],
  },
  {
    h2: 'What happens on the day',
    paras: [
      'The crew arrives with the shopping done, sets up the kitchen and the stations, and cooks on site. Servers set and clear, keep a buffet topped up or pace the courses, and the kitchen is cleaned before we leave. Rentals such as extra tables or linens can be added when you want them.',
      'Before we quote, we ask the same kitchen questions for every Maui house: is there a working cooktop, enough fridge space, and a table or lānai that fits the guest list? Photos of the kitchen help. If the answer is no, we’ll suggest a format that works rather than promise a dinner the house can’t serve.',
    ],
  },
  {
    h2: 'How to book catering on Maui',
    paras: [
      'Send your island, dates, guest count, type of event and contact details on the [quote form](/quote), and tell us whether the house is in Wailea, West Maui, Kīhei or Upcountry. We reply in Hawaii business hours with a menu direction and a written quote. You can also call or WhatsApp (808) 468-7748. There’s no street office — the team comes to you.',
      'December through March fills first in the resort areas, so ask as soon as your dates are firm. If you’d rather have a chef for the whole stay than one big event, look at a [chef for the week on Maui](/vacation-chef), from $1,550 a day.',
    ],
  },
];

const mauiFaqs: CopyFaq[] = [
  {
    q: 'How much does catering cost on Maui?',
    a: 'Food is $225–$375 a guest. Servers are $80 an hour and a sous-chef $105, with four- to five-hour minimums. A 20% service charge and GET up to 4.712% are added once, as their own lines.',
  },
  {
    q: 'Which parts of Maui do you cater?',
    a: 'Wailea, Makena, Kīhei and West Maui (Kāʻanapali, Kapalua, Nāpili, Honokōwai) are base zone. Upcountry has a published surcharge; Pāʻia and Haʻikū are quoted case by case.',
  },
  {
    q: 'Can the event stay outdoors?',
    a: 'Usually, yes. Buffet stations are placed out of the wind, and every outdoor event gets a written wet-weather plan before the deposit.',
  },
  {
    q: 'How many guests can you cater on Maui?',
    a: 'About a dozen to seventy-five. For two to eight guests, book a [private chef on Maui](/) instead.',
  },
  {
    q: 'Do you cater weddings on Maui?',
    a: 'Yes — welcome dinner through recovery brunch, with reception food from $225 a guest plus staff. See [Maui wedding catering](/weddings).',
  },
  {
    q: 'Can you do a sushi-forward menu?',
    a: 'Yes. Nigiri, sashimi and hand rolls are a menu direction we can cook in the villa.',
  },
  {
    q: 'When should we book Maui catering?',
    a: 'As early as you can. December through March fills first in Wailea and West Maui, and September, October and May are the busiest wedding months.',
  },
];

const kauaiSections: CopySection[] = [
  {
    h2: 'Kauai catering on both shores',
    paras: [
      'myCHEF Hawaii caters private events in Kauai villas and estates on both shores — Princeville and Hanalei on the North Shore, Poʻipū and Kōloa on the South Shore, and Kapaʻa and Līhuʻe in between. Kauai catering with us means a staffed event, not a drop-off: we write the menu for your house, shop, cook in the kitchen, serve and clean up. Most events are for about ten to seventy-five guests.',
      'Send your dates and tell us which shore the house is on, and we’ll reply in writing with what we can staff. For a dinner of eight or fewer, a [private chef on Kauai](/) is usually the better fit — and if you want a cook for the week plus one bigger party, say so in your first note and we’ll quote both together.',
      'The events we cater most often on Kauai are family reunions in a rented estate, welcome dinners for a wedding group, milestone birthdays, retreat weeks and rehearsal dinners. Each one gets the same approach: a menu written for the house, a staffing plan sized to the guest list and the shore, and a written total with every line on it before you pay a deposit.',
    ],
  },
  {
    h2: 'Princeville and Hanalei',
    paras: [
      'Princeville holds most of the North Shore’s estate homes, and winter dates there book early. The North Shore is often misty, so outdoor events always come with a covered backup, and a buffet under a covered lānai is a common choice from November to March.',
      'Hanalei and the far North are beautiful and more complicated. If the Hanalei bridge closes, we move the event rather than keep your deposit. Hāʻena and the far North need seventy-two hours’ notice and are quoted case by case. Princeville and Hanalei carry a published travel surcharge of $50–$75, printed on the quote.',
    ],
  },
  {
    h2: 'Poʻipū, Kōloa and the South Shore',
    paras: [
      'Poʻipū and Kōloa are sunnier and closer to our Līhuʻe staging, and many South Shore homes can host a plated dinner on the lawn on more nights of the year. Arrival dinners, retreat weeks and small weddings of up to about seventy-five guests fit well when the house fits. Poʻipū also carries the published $50–$75 travel line.',
      'Kalāheo and the west side — Waimea and Hanapēpē — are farther again and quoted with advance notice. Līhuʻe and Kapaʻa are our base zone, with no travel surcharge.',
    ],
  },
  {
    h2: 'Buffet or plated on Kauai',
    paras: [
      'On Kauai the format often depends on the shore. A North Shore great room in January usually suits a buffet: pans can wait while the rain passes, and forty people can still eat well if the lawn is closed. On the South Shore, a plated dinner on the grass is realistic more often. Plated service needs more servers for the same number of guests, so the staffing line grows; the food price doesn’t.',
      'Family-style suits rehearsal-sized tables of under twenty. Before dinner, grazing boards run around $750–$950 as a market reference and passed bites are $5–$7 a piece with a twenty-piece minimum. Live-fire cooking works best at South Shore homes; on the North Shore we plan a covered version instead.',
    ],
  },
  {
    h2: 'A Kauai catering menu',
    paras: [
      'The sample estate menu on this page is a starting point, not a fixed list. Ahi poke with kukui and sweet onion, wood-grilled catch with mango and coconut rice, and a lilikoi or haupia dessert are typical, and your menu is written that week around the kitchen, the shore, the kids and any allergies. Farm names only appear once we have them confirmed in writing.',
      'Dietary needs are designed in from the first draft. Retreat weeks that need breakfast through dinner are shopped at cost with receipts, plus staff hours. Drinks are yours to bring, or a [villa bartender](/bar) can be added as its own line.',
    ],
  },
  {
    h2: 'Kauai catering prices',
    paras: [
      'Food on Kauai is published at $225–$375 a guest, covering menu design, shopping, cooking, service and cleanup. Staff are separate: servers are $80 an hour and a sous-chef $105, with four- to five-hour minimums. A 20% service charge and GET of up to 4.712% are added once, and a 50% deposit holds the date. Travel to Princeville, Hanalei or Poʻipū is a published $50–$75 line.',
      'Wedding catering on Kauai starts at $260 a guest plus staff. Every island number is listed on our [Kauai pricing](/pricing) page.',
    ],
  },
  {
    h2: 'What to tell us about the house',
    paras: [
      'The most useful first message names the shore, the town and the kind of property. Tell us whether there’s a working cooktop, how much fridge space there is, and where people will eat — a dining room, a covered lānai or the lawn. Photos of the kitchen help. For far-North homes, tell us the exact address so we can check the road plan.',
      'On the day, the crew arrives with the shopping done, sets the kitchen and the stations, cooks on site, serves and clears, and leaves the kitchen clean. Vacation rentals with a real kitchen are the norm; hotel rooms without a cooktop can’t host a catered event.',
    ],
  },
  {
    h2: 'Weddings and longer stays',
    paras: [
      'Kauai weddings run as a week of separate lines — welcome dinner, rehearsal, reception and recovery brunch — at estates on either shore, for about ten to seventy-five guests. North Shore winters fill first. See [Kauai wedding catering](/weddings) for how the week works.',
      'If the stay is the real event, a chef for the week may suit you better than one large party: [Stay Chef on Kauai](/vacation-chef) starts at $1,650 a day, with groceries at cost. Send your dates, your shore and your guest count on the [inquiry form](/quote), call or WhatsApp (808) 468-7748, or email quotes@mychef-hawaii.com.',
    ],
  },
];

const kauaiFaqs: CopyFaq[] = [
  {
    q: 'How much does catering cost on Kauai?',
    a: 'Food is $225–$375 a guest. Servers are $80 an hour and a sous-chef $105, with four- to five-hour minimums. A 20% service charge and GET up to 4.712% are added as their own lines, plus a $50–$75 travel line for Princeville, Hanalei or Poʻipū.',
  },
  {
    q: 'Do you cater in Princeville and Poʻipū?',
    a: 'Yes, both shores. Līhuʻe and Kapaʻa are base zone; Princeville, Hanalei and Poʻipū carry a published travel surcharge. Hāʻena and the far North need seventy-two hours’ notice.',
  },
  {
    q: 'What happens if the Hanalei bridge closes?',
    a: 'We reschedule the event rather than keep your deposit. The weather-and-road clause is written into the quote for far-North events.',
  },
  {
    q: 'Buffet or plated on the North Shore?',
    a: 'North Shore winters often suit a buffet under a covered lānai. Poʻipū lawns can host a plated dinner more often. Family-style works for groups under twenty.',
  },
  {
    q: 'How many guests can you cater on Kauai?',
    a: 'About ten to seventy-five. For eight or fewer, book a [private chef on Kauai](/) instead.',
  },
  {
    q: 'Do you cater weddings on Kauai?',
    a: 'Yes, from $260 a guest plus staff, with each event of the week priced separately. See [Kauai wedding catering](/weddings).',
  },
  {
    q: 'How do we start?',
    a: 'Send your dates, shore and guest count on the [inquiry form](/quote), or WhatsApp (808) 468-7748. We reply in writing in Hawaii business hours.',
  },
];

const bigislandSections: CopySection[] = [
  {
    h2: 'Big Island catering on the Kona–Kohala Coast',
    paras: [
      'myCHEF Hawaii caters private events in villas and estates on the Big Island’s west side: Kailua-Kona and Keauhou, Hōlualoa above town, and the Kohala Coast resort communities of Waikoloa, Mauna Lani, the Mauna Kea resort and Puakō. Our Big Island catering is staffed — we write the menu for your house, shop on the Kona side, cook in the villa, serve your guests and clean up.',
      'We focus on the west side because that’s where we can staff well. Hilo and Volcano are a different day, quoted separately with their own crew. For a dinner of six or so, a [private chef on the Big Island](/) is the simpler booking.',
      'Most of our Big Island catering is for ten to seventy-five guests: family reunions in a Kohala Coast villa, welcome dinners for a wedding group, milestone birthdays, retreat weeks and company offsites. Every event gets a menu written for the house, a staffing plan sized to the guest list and a written total with every line on it before you pay a deposit.',
    ],
  },
  {
    h2: 'Kona catering for villas and residences',
    paras: [
      'Kona catering covers Kailua-Kona town, Keauhou at the south end of the corridor and the coffee-country homes of Hōlualoa. Villa and residence kitchens here range from a full chef’s kitchen to a compact galley, so we check the kitchen before we suggest a format. Load-in is usually simple — resort-residence rules, HOA quiet hours and a driveway that fits a van are confirmed before the day.',
      'Evenings in Hōlualoa run cooler than on the coast and often call for a covered setup. Kona coffee on a dessert or a rub is labeled by origin when the rules require it.',
    ],
  },
  {
    h2: 'Kohala Coast estate events',
    paras: [
      'The Kohala Coast is seven resort communities within about a thirty-minute radius — Waikoloa, Mauna Lani, the Mauna Kea resort and Puakō among them. This is where most of our larger events happen: long tables on the lawn, warm evenings and kitchens that range from a true chef’s line to a resort-residence galley.',
      'Waimea and the Hāmākua coast are higher and cooler and carry a published travel surcharge; ranch houses there are quoted on that line. Kaʻū and the south carry an extended surcharge with advance notice.',
    ],
  },
  {
    h2: 'Buffet, plated or family-style',
    paras: [
      'On the Kohala Coast a buffet has to handle wind and heat: pans chosen for the breeze, stations set behind a wall, protein kept from drying out. It’s how a Waikoloa great room feeds thirty without asking a home range to fire thirty plated mains at once, and it suits reunions and relaxed receptions.',
      'Plated dinners suit a terrace table of about twelve in still air, with a kitchen that can pace courses. They need more servers for the same guest count, but the food price stays the same. Family-style, with platters down a teak table on the lawn, sits in between. Before dinner, grazing boards run around $750–$950 as a market reference and passed bites are $5–$7 a piece with a twenty-piece minimum.',
    ],
  },
  {
    h2: 'Big Island catering prices',
    paras: [
      'Food on the Big Island is published at $210–$325 a guest, with a lighter menu from $165 a guest when the menu and the house fit. That covers menu design, shopping, cooking, service and cleanup. Servers are $80 an hour and a sous-chef $105, with four- to five-hour minimums. A 20% service charge and GET of up to 4.712% are added once, and a 50% deposit holds the date.',
      'Travel outside the Kona–Kohala corridor starts from a published $75 line, and the east side is always its own quote. Drinks are yours to bring, or a [villa bartender](/bar) is added as a separate line. See every number on our [Big Island pricing](/pricing) page.',
    ],
  },
  {
    h2: 'Event weeks and the east side',
    paras: [
      'Ironman week in October and the Kona Coffee Festival in November fill the west side quickly, and Merrie Monarch in April fills the east side. Flag those dates early and we’ll confirm what’s possible in writing. One crew holds one heavy event week at a time.',
      'Hilo is two and a half to three hours from the west side, so a same-day Kona–Hilo round trip isn’t realistic. Events in Hilo or Volcano get a dedicated day — often with an overnight — quoted honestly from the start.',
    ],
  },
  {
    h2: 'What to tell us about the villa',
    paras: [
      'The first question we ask is west side or east side, because that answer changes the crew, not just the drive. After that: the town or resort community, whether there’s a working cooktop, how much fridge space there is, and where guests will eat. Photos of the kitchen help, and outdoor tables on lava rock get a wet-weather plan before anyone pays a deposit.',
      'On the day, the crew arrives with the shopping done, sets up, cooks on site, serves and clears, and leaves the kitchen clean. Multi-day retreat shopping is billed at cost with the receipts, so you can see every line.',
    ],
  },
  {
    h2: 'Weddings and how to book',
    paras: [
      'Big Island wedding receptions start from $225 a guest plus staff, with welcome dinners, rehearsals and brunches priced as separate lines. See [Big Island wedding catering](/weddings) for the full week.',
      'To start, send your dates, guest count, type of event and the villa’s location on the [inquiry form](/quote), or call or WhatsApp (808) 468-7748. We reply in Hawaii business hours. If you’d rather have a chef for the whole stay, [Stay Chef on the Big Island](/vacation-chef) starts at $1,450 a day.',
    ],
  },
];

const bigislandFaqs: CopyFaq[] = [
  {
    q: 'How much does catering cost on the Big Island?',
    a: 'Food is $210–$325 a guest, or from $165 for a lighter menu. Servers are $80 an hour and a sous-chef $105, with four- to five-hour minimums. A 20% service charge and GET up to 4.712% are added as their own lines.',
  },
  {
    q: 'Do you offer catering in Kona?',
    a: 'Yes. Kailua-Kona, Keauhou and Hōlualoa are part of our west-side base, along with the Kohala Coast resort communities.',
  },
  {
    q: 'Which Kohala Coast communities do you cater?',
    a: 'Waikoloa, Mauna Lani, the Mauna Kea resort and Puakō. Waimea carries a published surcharge; Kaʻū an extended one.',
  },
  {
    q: 'Can you cater in Hilo?',
    a: 'Yes, as a dedicated day. Hilo is two and a half to three hours from the west side, so it is quoted separately, often with an overnight.',
  },
  {
    q: 'What about Ironman week?',
    a: 'October fills the Kona side quickly, and the Kona Coffee Festival in November does the same. Tell us the dates early and we’ll confirm in writing.',
  },
  {
    q: 'Do you cater weddings on the Big Island?',
    a: 'Yes, with reception food from $225 a guest plus staff. See [Big Island wedding catering](/weddings).',
  },
  {
    q: 'How many guests can you cater?',
    a: 'About ten to seventy-five. For a smaller dinner, book a [private chef on the Big Island](/) instead.',
  },
];

export const cateringLongform: Record<IslandId, { sections: CopySection[]; faqs: CopyFaq[] }> = {
  oahu: { sections: oahuSections, faqs: oahuFaqs },
  maui: { sections: mauiSections, faqs: mauiFaqs },
  kauai: { sections: kauaiSections, faqs: kauaiFaqs },
  bigisland: { sections: bigislandSections, faqs: bigislandFaqs },
};
