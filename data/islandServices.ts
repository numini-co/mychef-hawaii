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
      h1: 'What we will not claim on Oahu.',
      title: 'What we will not claim on Oahu | myCHEF',
      description:
        'No invented Oahu guest reviews, no fake licenses, no “now serving” language ahead of a staffed kitchen. Published prices and a written quote are the proof.',
      lede:
        'Hawaii is launching. We will not invent stars or chef names. The published line is (808) 468-7748. The Gold Coast dinner is real. The Yelp page is not.',
      photo: 'svcHonestyOahu',
      body: [
        'We do not invent guest reviews. We do not sell chef bios. HCC citywides are closed through 2027 and are not our product. Hotel suites without kitchens are not a kitchen.',
        'Proof today: published starting prices on the pricing page, a sample menu on the menus page, cleanup, a written quote.',
      ],
      faqs: [
        {
          q: 'Do you have Oʻahu reviews?',
          a: 'Not yet. They publish after verified events. Until then the proof is the card and the quote.',
        },
        {
          q: 'Will you cook a hotel room?',
          a: 'If there is a stove we can work. Most suites do not. Residences and villas are the product.',
        },
        {
          q: 'Filipino catering Oahu, or bento and catering Oahu?',
          a: 'Related searches, not a bento mill. We cook villa dinners and staffed estate events. We do not run a banquet hall.',
        },
      ],
      related: [
        { path: '/faq', label: 'FAQ' },
        { path: '/about', label: 'The Oahu crew' },
        { path: '/conventions', label: 'Not MICE' },
      ],
    },
    {
      slug: 'guest-counts',
      name: 'Guest counts',
      h1: 'Guest counts we staff on Oahu — two to fifteen, ten to seventy-five.',
      title: 'Guest counts we staff on Oahu | myCHEF',
      description:
        'Oahu dinners 2–15. Receptions about 10–75. Larger formats are quoted, not promised. Kahala dining rooms and Ko Olina villas are the usual rooms.',
      lede:
        'A dinner for two is a chef and the shopping. A seated twelve is a different crew. We write the headcount before the deposit.',
      photo: 'svcCountsOahu',
      body: [
        'Dinners two to fifteen. Receptions about ten to seventy-five. A hundred-guest lawn is quoted as its own format or declined — not stretched from a Tuesday dinner.',
        'Kahala dining rooms hold a seated table. Ko Olina villas hold a week. Waikīkī residences hold what the kitchen can hold.',
      ],
      faqs: [
        {
          q: 'Can you do 200 on a Gold Coast lawn?',
          a: 'Not as a promise. Larger than about seventy-five is quoted. We would rather decline than lie.',
        },
        {
          q: 'Is a dinner for two too small?',
          a: 'No. Date night is a published band.',
        },
        {
          q: 'Small catering Honolulu?',
          a: 'A house dinner for two to fifteen is on the in-villa dinner page. About ten to seventy-five is on the catering page. This page names the headcount so those pages stay distinct.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/events', label: 'Occasions' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'dietary',
      name: 'Dietary',
      h1: 'Dietary on Oahu — designed in, not theatre.',
      title: 'Dietary on Oahu — designed in, not theatre | myCHEF',
      description:
        'Vegan, gluten-free, allergy-aware Oahu menus designed in advance. Claimed only when the Kahala, Ko Olina or Kailua kitchen can do it that night.',
      lede:
        'A separate board when wheat cannot share a pan. Kids’ plates planned with the adults. We do not print “we do everything” and hope.',
      photo: 'svcDietaryOahu',
      body: [
        'Tell us allergies on the quote form. The designed menu in 48 hours names what we can hold. Compact condos change what we can fire.',
        'This is not a dietary brand. It is the same per-table menu on the menus page with the constraint written in.',
      ],
      faqs: [
        {
          q: 'Nut-free on Oahu?',
          a: 'When the kitchen and the shop can hold it. We will not claim a dedicated allergen kitchen we do not have.',
        },
        {
          q: 'Kids and allergies together?',
          a: 'Yes — planned with the kids’ menus page, not as an afterthought plate from the freezer.',
        },
      ],
      related: [
        { path: '/menus', label: 'Menus' },
        { path: '/kids-menus', label: 'Kids at the table' },
        { path: '/faq', label: 'FAQ' },
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
      h1: 'Kids at the Oahu table — planned with the adults.',
      title: 'Kids at the Oahu table | myCHEF',
      description:
        'Children’s plates on Oahu planned with the adults’ menu. Kailua weeks and Ko Olina villas. Not a freezer afterthought.',
      lede:
        'The kids eat when the adults eat. Simpler plates, same kitchen, same night. Kailua family weeks are built for this.',
      photo: 'svcKidsOahu',
      body: [
        'Kailua and Lanikai houses often hold multi-day packages. Town apartments can too if the stove is real.',
        'We do not print a fake kids’ carte.',
      ],
      faqs: [
        {
          q: 'Separate kids’ sitting?',
          a: 'If the house wants it. Usually one service, two plate styles.',
        },
      ],
      related: [
        { path: '/kailua', label: 'Kailua' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
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
      h1: 'What we will not claim on Maui.',
      title: 'What we will not claim on Maui | myCHEF',
      description:
        'No invented Maui guest reviews, no Lahaina luxury-dining brand, no ballroom citywides. Published prices and a written quote are the proof.',
      lede:
        'We cook villas. We do not staff ballrooms. We do not market West Maui as a Lahaina dining brand. Reviews publish after verified events.',
      photo: 'svcHonestyMaui',
      body: [
        'No invented chef names. No implied hotel affiliation. Upcountry is a surcharge, not a surprise.',
      ],
      faqs: [
        {
          q: 'Lotus Chefs or elite Maui chef?',
          a: 'Related searches “lotus chefs maui” and “elite maui chef” are other kitchens. We do not impersonate them.',
        },
        {
          q: 'Do you have Maui reviews?',
          a: 'Not yet. We will not invent them.',
        },
      ],
      related: [
        { path: '/faq', label: 'FAQ' },
        { path: '/lahaina', label: 'How we name Lahaina' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
    {
      slug: 'guest-counts',
      name: 'Guest counts',
      h1: 'Guest counts we staff on Maui — lawns about ten to seventy-five.',
      title: 'Guest counts we staff on Maui | myCHEF',
      description:
        'Maui dinners 2–15. Lawn receptions about 10–75. Larger formats quoted. Wailea, Kapalua, Makena.',
      lede:
        'A tasting for two in Kapalua is not a Wailea lawn. We write the headcount and the crew before the deposit.',
      photo: 'svcCountsMaui',
      body: [
        'Hotel-zoned residences with kitchens. Identical event plates for a lawn. Date Night stays a dinner band.',
        'West Maui Saturday traffic is planned into arrival. Headcount does not change the corridor.',
      ],
      faqs: [
        {
          q: 'Seventy-five on a Kīhei lot?',
          a: 'Only if the house and the county allow it. The quote names the address. Larger is quoted or declined.',
        },
        {
          q: 'Same crew as catering?',
          a: 'Same department.',
        },
      ],
      related: [
        { path: '/events', label: 'Occasions' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'dietary',
      name: 'Dietary',
      h1: 'Dietary on Maui — designed in Wailea and West Maui kitchens.',
      title: 'Dietary on Maui — designed in, not theatre | myCHEF',
      description:
        'Vegan, gluten-free, allergy-aware Maui menus designed in advance. Claimed only when the villa kitchen can hold it.',
      lede:
        'Catch-led plates can still be gluten-free. Vegan is a designed tasting, not a garnish swap at the pass.',
      photo: 'svcDietaryMaui',
      body: [
        'Tell us on the quote. The 48-hour menu names the constraint. Sushi-forward is a direction, not a separate allergen kitchen.',
        'Kids’ plates with allergies sit on the kids’ menus page. Lawn identical plates still honor the list — or we do not take the night.',
      ],
      faqs: [
        {
          q: 'Pescatarian lawn of forty?',
          a: 'Yes when designed. Identical event plates, one dietary note on the quote.',
        },
        {
          q: 'Farm names for vegan produce?',
          a: 'Only in writing. We do not invent Upcountry farms.',
        },
      ],
      related: [
        { path: '/menus', label: 'Menus' },
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
      h1: 'Kids at the Maui table — Kīhei weeks and Wailea houses.',
      title: 'Kids at the Maui table | myCHEF',
      description:
        'Children’s plates on Maui planned with the adults’ menu. Kīhei vacation homes and Wailea villas. Not a freezer afterthought.',
      lede:
        'South Maui family weeks are built for this. Adult catch, simpler plates beside. One service.',
      photo: 'svcKidsMaui',
      body: [
        'Kīhei is often the family house. Wailea can be too. West Maui decks as well.',
      ],
      faqs: [
        {
          q: 'Kids on a lawn reception?',
          a: 'Yes as plated or buffet lines designed in.',
        },
        {
          q: 'High chairs?',
          a: 'The house provides them. We cook around the table that exists.',
        },
      ],
      related: [
        { path: '/kihei', label: 'Kīhei' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
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
      h1: 'What we will not claim on Kauai.',
      title: 'What we will not claim on Kauai | myCHEF',
      description:
        'Inquiry stage. No fake live roster, no invented Kauai guest reviews, no waitlist dressed as booked. The bridge clause is written. Published prices.',
      lede:
        'Both shores. Inquiry. We staff the estate when a crew exists. We will not print “now serving Kauaʻi” ahead of that.',
      photo: 'svcHonestyKauai',
      body: [
        'We do not invent a flat driving fee that covers the island. Guest reviews: none yet.',
      ],
      faqs: [
        {
          q: 'Is inquiry a waitlist?',
          a: 'Inquiry means we confirm a crew before we take the night. You still get a written quote.',
        },
        {
          q: 'South Shore chef as a brand?',
          a: 'No. One department, two shores.',
        },
        {
          q: 'Farm cook Kauai?',
          a: 'Related search, not us. We do not impersonate another kitchen or invent farm names. Inquiry-stage estate cooking on both shores is this department.',
        },
      ],
      related: [
        { path: '/faq', label: 'FAQ' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/coverage', label: 'Coverage' },
      ],
    },
    {
      slug: 'guest-counts',
      name: 'Guest counts',
      h1: 'Guest counts we staff on Kauai — estate formats to about seventy-five.',
      title: 'Guest counts we staff on Kauai | myCHEF',
      description:
        'Kauai dinners 2–15. Estate receptions about 10–75. Inquiry stage. Larger formats quoted. Princeville, Hanalei, Poʻipū.',
      lede:
        'An estate table looking into a valley is not a ballroom. We staff to about seventy-five when a crew exists.',
      photo: 'svcCountsKauai',
      body: [
        'Inquiry stage. Headcount is still written. Far-North weather can shrink the outdoor table — the clause is on the Hanalei bridge notes.',
      ],
      faqs: [
        {
          q: 'A hundred on a North Shore lawn?',
          a: 'Quoted or declined. About seventy-five is the published hold. The road may decide.',
        },
        {
          q: 'South Shore larger than North?',
          a: 'The house decides, not the shore. Poʻipū still sits in the same guest-count bands.',
        },
      ],
      related: [
        { path: '/events', label: 'Estate events' },
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/north-shore', label: 'North Shore' },
      ],
    },
    {
      slug: 'dietary',
      name: 'Dietary',
      h1: 'Dietary on Kauai — designed for the shore you are on.',
      title: 'Dietary on Kauai — designed in, not theatre | myCHEF',
      description:
        'Vegan, gluten-free, allergy-aware Kauai menus designed in advance. North Shore covered plan, South Shore fire. Inquiry stage.',
      lede:
        'The handshake poke can be gluten-free. Wood-grilled catch is a South Shore fire question. We design it before we claim it.',
      photo: 'svcDietaryKauai',
      body: [
        'Inquiry stage does not mean a fake dietary promise. The 48-hour menu names the shore and the constraint.',
      ],
      faqs: [
        {
          q: 'Shellfish allergy on the North Shore?',
          a: 'Designed in. We will not run a mixed grill that cannot be held.',
        },
        {
          q: 'Vegan retreat days?',
          a: 'Full-board retreats are the Retreats page — dietary is table stakes, claimed only when true.',
        },
      ],
      related: [
        { path: '/menus', label: 'Menus' },
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
      h1: 'Kids at the Kauai table — Kapaʻa houses and both shores.',
      title: 'Kids at the Kauai table | myCHEF',
      description:
        'Children’s plates on Kauai planned with the adults’ menu. Kapaʻa, Poʻipū, Princeville. Inquiry stage. Not a freezer afterthought.',
      lede:
        'East-side town houses often hold families. The North and South do too. One service, two plate styles.',
      photo: 'svcKidsKauai',
      body: [
        'We cook in Kapaʻa, Poʻipū pool kitchens and Princeville estates. Bookings start as an inquiry.',
      ],
      faqs: [
        {
          q: 'Kids and the bridge clause?',
          a: 'Far-North still inherits weather. We move the night rather than forfeit.',
        },
        {
          q: 'Simple pasta?',
          a: 'If it fits the designed menu. We do not print a fake kids’ carte.',
        },
      ],
      related: [
        { path: '/kapaa', label: 'Kapaʻa' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
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
      h1: 'What we will not claim on Hawaiʻi Island.',
      title: 'What we will not claim on Hawaiʻi Island | myCHEF',
      description:
        'No whole-island coverage, no invented farm names, no fake guest reviews, no same-day Kona–Hilo round trip. West side first. Inquiry stage.',
      lede:
        'Four thousand square miles. We cook the west-side radius. Hilo is a different day. Coffee origin is labeled when the law requires it.',
      photo: 'svcHonestyBigisland',
      body: [
        'Reviews: none yet.',
      ],
      faqs: [
        {
          q: 'Now serving Hilo?',
          a: 'Quote-only with dedicated staffing. We will not publish that ahead of a crew.',
        },
        {
          q: 'Named Kona farm on the card?',
          a: 'Only in writing. Act 198 from 2027.',
        },
      ],
      related: [
        { path: '/faq', label: 'FAQ' },
        { path: '/east-side', label: 'East side' },
        { path: '/coverage', label: 'Coverage' },
      ],
    },
    {
      slug: 'guest-counts',
      name: 'Guest counts',
      h1: 'Guest counts we staff on Hawaiʻi Island — west-side tables, not the whole island.',
      title: 'Guest counts we staff on Hawaiʻi Island | myCHEF',
      description:
        'West-side dinners 2–15. Receptions about 10–75. Hilo is a different day. Inquiry stage. Larger formats quoted.',
      lede:
        'Eight on a lava terrace is a night we know. A hundred across two climate zones is not. Headcount is written with the address.',
      photo: 'svcCountsBigisland',
      body: [
        'West-side first. Waikoloa, Mauna Lani, Kona town. East side is dedicated staffing — not added onto a Waikoloa count.',
      ],
      faqs: [
        {
          q: 'Ironman week larger lists?',
          a: 'Town compresses. Flag dates early. Headcount still has a ceiling.',
        },
        {
          q: 'Volcano dinner for twelve?',
          a: 'Quote-only east side.',
        },
      ],
      related: [
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/events', label: 'Occasions' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'dietary',
      name: 'Dietary',
      h1: 'Dietary on Hawaiʻi Island — designed west-side first.',
      title: 'Dietary menus on the Big Island — designed in | myCHEF',
      description:
        'Vegan, gluten-free, allergy-aware Kona–Kohala menus designed in advance. Claimed only when the west-side kitchen can hold it. Inquiry stage.',
      lede:
        'Kanpachi can be dairy-free. Coffee on the crust is coffee, origin when documented. We design the constraint before we print it.',
      photo: 'svcDietaryBigisland',
      body: [
        'West-side provisioning for west-side nights. East-side dietary is its own team day.',
        'Retreat full-board dietary is table stakes on the Retreats page — claimed only when true.',
      ],
      faqs: [
        {
          q: 'Gluten-free coffee crust?',
          a: 'The crust is a recipe question. Origin labeling is a different law. We will not confuse the two.',
        },
        {
          q: 'Vegan Hilo?',
          a: 'East side is quote-only. Do not assume a west-side vegan menu travels.',
        },
      ],
      related: [
        { path: '/menus', label: 'Menus' },
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
      h1: 'Kids at the Hawaiʻi Island table — west-side family nights.',
      title: 'Kids at the Hawaiʻi Island table | myCHEF',
      description:
        'Children’s plates on the Kona–Kohala corridor planned with the adults’ menu. Inquiry stage. Not a freezer afterthought.',
      lede:
        'Waikoloa residences and Kona houses. Adult kanpachi, simpler plates beside. East side is a different day.',
      photo: 'svcKidsBigisland',
      body: [
        'West-side first. Inquiry stage.',
        'Ironman weeks pack town — flag those dates.',
      ],
      faqs: [
        {
          q: 'Kids on a lava terrace at noon?',
          a: 'Shade and timing are the house. Hard sun is real. We cook the kitchen you have.',
        },
        {
          q: 'Hilo family week?',
          a: 'Quote-only east side.',
        },
      ],
      related: [
        { path: '/waikoloa', label: 'Waikoloa' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
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
