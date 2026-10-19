import type { IslandId } from './islands';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog FINE_SLUGS — halo formats, not Michelin claims, not money-keyword doors.
 * Distinct from /honeymoon-dinners, /omakase-at-home, /chefs-table, /events/villa-parties.
 */

export const FINE_DINING_SLUGS = [
  'romantic-dinner',
  'tasting-menu',
  'chefs-table-evening',
  'celebration-dinner',
] as const;
export type FineDiningSlug = (typeof FINE_DINING_SLUGS)[number];

export interface FineDiningPage extends UniqueCell {
  slug: FineDiningSlug;
}

export const fineDiningPages: Record<IslandId, FineDiningPage[]> = {
  oahu: [
    {
      slug: 'romantic-dinner',
      name: 'Romantic dinner',
      h1: 'A romantic dinner in a Kahala dining room — two seats, not a restaurant.',
      title: 'A romantic dinner in a Kahala dining room | myCHEF',
      description: 'Two-seat Kahala and Ko Olina dinners, not a restaurant reservation.',
      lede: 'Brass, two plates, Diamond Head faint.',
      photo: 'fineRomanticOahu',
      body: [
        'We do not claim stars we do not have. Sourcing is written on the menu or it is not claimed.',
        'The cook enters after the Kahala or Honolulu freight window, or at the gate time a Ko Olina villa gives. Two settings go on the dining table. Plates leave one at a time, with the pause you asked for, and the counters are wiped before the crew goes. Wind on a Ko Olina lānai moves the plates indoors, written before you accept. The published two-top is [honeymoon dinners](/honeymoon-dinners). The four formats sit on [fine dining](/fine-dining). The per-guest band, then 20% service and Hawaiʻi GET up to 4.712% on their own lines, is on [pricing](/pricing). Request a written quote on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'How is a Kahala romantic dinner different from the honeymoon dinner?',
          a: 'The honeymoon dinner is the published two-top. This format is the same Kahala or Ko Olina kitchen when you want the night described as a romantic dinner. Say which you mean. Request a written quote with the house.',
        },
        {
          q: 'Will two people in a Honolulu dining room get separate plates?',
          a: 'Separate plates are the usual pass. A shared dish is written if you ask before the shop, so the cook does not guess at the door. The quote names which.',
        },
        {
          q: 'Can one of us drop shellfish while the other keeps the catch?',
          a: 'A restriction is written into that plate, and the other plate stays as drafted. Send it with the house. We will not claim a separate allergen kitchen we do not have.',
        },
        {
          q: 'Do you bring wine for a Ko Olina two-top, or do we?',
          a: 'Bring the bottles for the two-top, or ask for a separate pour as its own line on the written quote. Wine, beer, and spirits never sit inside the per-guest band. Say if glasses go with the courses or the bottles stay on the sideboard.',
        },
        {
          q: 'How much time sits between courses when nobody else is at the table?',
          a: 'The next plate fires when you are ready, not on a banquet clock. A tower freight window still bounds arrival and the clean-down. The quote states that window.',
        },
        {
          q: 'What should a Ko Olina villa send before you price two seats?',
          a: 'The villa, the date, plated or shared, and any restriction. Building rules and a wind plan for the lānai belong in the same note. Request a written quote on [the quote form](/quote).',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/kahala', label: 'Kahala' },
      ],
    },
    {
      slug: 'tasting-menu',
      name: 'Tasting menu',
      h1: 'A tasting menu in an Oahu villa — written courses, not a star claim.',
      title: 'A tasting menu in an Oahu villa | myCHEF',
      description:
        'Written tasting arcs in Kahala and Ko Olina kitchens. Not a Michelin claim. Designed per table.',
      lede: 'Courses on paper, then on the island.',
      photo: 'fineTastingOahu',
      body: [
        'Menus are designed per table. We will not print a fake standing carte.',
        'A tasting night starts once the Honolulu freight slot or the Ko Olina gate time is open. The arc is already on paper. Courses go to the counter or the dining table in that order, slower for two, steadier when the table is full, and the pass is cleared before we leave. A windy lānai moves the seating inside. Fish or a farm is named only when the invoice stands behind it. A paced tasting at the kitchen island, on its own page, is [omakase at home](/omakase-at-home). Menu and sourcing verification are its launch gates. How a draft is built is on [menus](/menus). Formats are on [fine dining](/fine-dining). Bands and fee lines are on [pricing](/pricing). Request a written quote on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'How is this tasting arc different from omakase at home?',
          a: 'Omakase at home is a paced tasting at the kitchen island, on its own page. Menu and sourcing verification are its launch gates. This arc is the written sequence of courses. Say which night you want.',
        },
        {
          q: 'Are tasting courses plated, or passed for the table to share?',
          a: 'Each course is plated unless you ask for a shared bite in the draft. The quote records that choice. We do not switch it after the shop.',
        },
        {
          q: 'Can a gluten note change one course without scrapping the arc?',
          a: 'The change is written inside the arc before the Honolulu shop. That course moves. The sequence around it stays. We only stand behind a restriction the kitchen can keep.',
        },
        {
          q: 'If I want the Honolulu fish market credited, when does that happen?',
          a: 'Only after that morning’s invoice can stand behind the name. A Kahala card without the paperwork names the dish and stops. We do not decorate a draft with a boat we cannot show.',
        },
        {
          q: 'Who handles wine during a multi-course Kahala arc?',
          a: 'Bring the wine, or a pour beside each course is quoted as its own line. Wine, beer, and spirits stay out of the per-guest band. That note is not a license claim.',
        },
        {
          q: 'What do you need to write a Ko Olina tasting quote?',
          a: 'The house, the date, how many seats, and the restrictions. The per-guest band and the fee lines are on [pricing](/pricing). Request a written quote on [the quote form](/quote).',
        },
      ],
      related: [
        { path: '/omakase-at-home', label: 'Omakase at home' },
        { path: '/menus', label: 'How menus are designed' },
        { path: '/fine-dining/chefs-table-evening', label: "Chef's table evening" },
      ],
    },
    {
      slug: 'chefs-table-evening',
      name: "Chef's table evening",
      h1: 'A chef’s table evening in an Oahu kitchen — the pass is the table.',
      title: 'A chef’s table evening in an Oahu kitchen | myCHEF',
      description:
        'Evening seating at the Kahala or Ko Olina kitchen island. Not a restaurant pass. Not a star claim.',
      lede: 'Guests at the island. The sear in front of you.',
      photo: 'fineChefsEveOahu',
      body: [
        'Evening seating starts after the building lets the crew in. Guests sit where the Kahala or Ko Olina counter actually faces the cook. The sear happens in front of them, courses follow the written order, and pacing is looser for two than for a full counter. Clean-down is the counters and the pass, done before the freight window closes. A windy lānai is not the seat if the kitchen island is the table. How many seats that counter holds is confirmed on the written quote. The standing chef’s table page is [chef’s table](/chefs-table). Formats are on [fine dining](/fine-dining). Fee lines sit on [pricing](/pricing). Request a written quote on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'How is an evening at the kitchen island different from the chef’s table page?',
          a: 'The chef’s table page is the house pass as a product. This evening is that seating after dark, with guests at the counter while the cook works. Compact condos that cannot hold a pass are declined on the quote.',
        },
        {
          q: 'How many people can sit at a Kahala kitchen island?',
          a: 'As many as that kitchen and table hold, confirmed on the written quote. We do not print a seat count the house has not shown us. Past what the counter holds, it becomes a dining-room seating.',
        },
        {
          q: 'Do guests at the pass get plated courses or a platter between them?',
          a: 'Plated courses are the evening. A shared platter is written only if you ask for it. The cook is at the same counter, not in a closed restaurant kitchen.',
        },
        {
          q: 'Can one guest at the counter eat differently from the others?',
          a: 'A dietary change is marked on that setting inside the written arc. The other settings stay. Tell us before the shop so the pass is planned, not improvised.',
        },
        {
          q: 'Is wine service part of watching the sear?',
          a: 'Wine service is separate from watching the sear. You bring what is poured, or that pour is its own line on the written quote. Wine, beer, and spirits are not inside the food.',
        },
        {
          q: 'What should I send for a Ko Olina counter after dark?',
          a: 'The villa, the date, and a photo or note of the island if you have one. Seats are confirmed in the reply. Request a written quote on [the quote form](/quote). Bands are on [pricing](/pricing).',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/gold-coast', label: 'Gold Coast' },
      ],
    },
    {
      slug: 'celebration-dinner',
      name: 'Celebration dinner',
      h1: 'A celebration dinner in an Oahu dining room — plated, not a lawn party.',
      title: 'A celebration dinner in an Oahu dining room | myCHEF',
      description: 'Seated celebration dinners in Kahala dining rooms and Ko Olina villas.',
      lede: 'Eight plates, brass, a dining room. The villa party is a different booking.',
      photo: 'fineCelebrationOahu',
      body: [
        'A celebration dinner uses the dining room, not the lawn. The crew sets after the freight window, plates each course for the table you named, and clears the pass before leaving. Two people can move slower than a full table. Rain or wind sends a lānai plan into that dining room, written before you accept. Birthdays and anniversaries are the occasion pages under [events](/events). This page is the seated format. The other formats are on [fine dining](/fine-dining). The per-guest band and the fee lines are on [pricing](/pricing). Request a written quote on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'When is a celebration dinner the wrong page for a Kahala birthday?',
          a: 'Use the birthday page when the night is the occasion, cake included. Use this page when you want the seated format and the dining room. They can share a coordinator. They do not share one total.',
        },
        {
          q: 'Are celebration courses plated, or set down the middle?',
          a: 'Plated courses are this format. A shared platter is a different service and is written if you want it. A lawn of a hundred is not this booking. Larger than about seventy-five is quoted apart.',
        },
        {
          q: 'Can one guest at a Ko Olina table change a course for an allergy?',
          a: 'That plate is rewritten inside the arc. The other plates stay matched. Send the note with the headcount so the shop covers it. We do not invent a second kitchen.',
        },
        {
          q: 'Does the dining-room dinner include wine?',
          a: 'The dining room does not include wine. Bring it, or a separate pour is written as its own line. Wine, beer, and spirits stay outside the per-guest band. Say what you want poured.',
        },
        {
          q: 'How does pacing change between two people and a full dining table?',
          a: 'Two people can wait between plates. A full table keeps a steadier pass so courses land together. The quote states the call and the clean-down against the building window.',
        },
        {
          q: 'What belongs on a Honolulu celebration quote?',
          a: 'The house, the date, the headcount, plated or shared, and any restriction. Fee lines are on [pricing](/pricing). Request a written quote on [the quote form](/quote). A villa party is a different booking.',
        },
      ],
      related: [
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/catering/plated', label: 'Plated service' },
        { path: '/events/villa-parties', label: 'Villa parties' },
      ],
    },
  ],
  maui: [
    {
      slug: 'romantic-dinner',
      name: 'Romantic dinner',
      h1: 'A romantic dinner on a Wailea lanai — two plates, Molokini faint.',
      title: 'A romantic dinner on a Wailea lanai | myCHEF',
      description: 'Two-seat romantic dinners in Wailea and Kapalua. Not a restaurant reservation.',
      lede: 'Blue hour, two plated fish. The honeymoon page is the published two-top.',
      photo: 'fineRomanticMaui',
      body: [
        'Wet-weather backup is written for lanais that do not hold.',
        'On a Villa Week the cook reaches a Wailea or Kapalua kitchen before blue hour and sets two places on the lānai. Courses go out plated, with room to linger, and the counters are cleared once you are done. If the trade wind picks up, the same plates move to the dining table already named on the quote. This is the format. The published two-top is [honeymoon dinners](/honeymoon-dinners). The four formats are on [fine dining](/fine-dining). The per-guest band, with 20% service and Hawaiʻi GET up to 4.712% on their own lines, is on [pricing](/pricing). Quotes are open on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Is a Wailea lānai dinner the same booking as a honeymoon dinner?',
          a: 'The honeymoon dinner is the published two-top, often in Kapalua. This format is the romantic dinner on the lānai you actually have. Quotes are open. Say Wailea or Kapalua so the drive is planned.',
        },
        {
          q: 'Can two plates in Kapalua be shared instead of a formal pass?',
          a: 'A shared plate is written if you do not want a plated pass. The default on a Wailea lānai is two separate plates. The quote states which before the shop.',
        },
        {
          q: 'How is a gluten note handled for one person at a two-seat table?',
          a: 'That plate is adjusted inside the written menu. The other plate stays. Send the note with the villa. We will not promise a dedicated allergen kitchen.',
        },
        {
          q: 'Can wine stay on the lānai without a pairing list?',
          a: 'Leave the bottle on the lānai if it is yours. A pour with each course is a separate line on the quote, not a pairing list inside the food. Wine, beer, and spirits stay out of the per-guest band.',
        },
        {
          q: 'What happens to the courses if we want to linger at blue hour?',
          a: 'The cook holds the next plate. Two seats are not a banquet clock. The quote still names when the crew arrives and when the kitchen is clear.',
        },
        {
          q: 'If the trade winds rise, where do the Kapalua plates go?',
          a: 'Indoors, to the table already written as backup. We do not add a tent after you accept. Send the villa and the date on [the quote form](/quote). Quotes are open.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/wailea', label: 'Wailea' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
      ],
    },
    {
      slug: 'tasting-menu',
      name: 'Tasting menu',
      h1: 'A tasting menu in a Maui villa — written courses in Wailea.',
      title: 'A tasting menu in a Maui villa | myCHEF',
      description: 'Wailea and Kapalua tasting arcs. Not a Lotus Chefs impersonation.',
      lede: 'Courses at the open-kitchen counter.',
      photo: 'fineTastingMaui',
      body: [
        'We do not impersonate another kitchen.',
        'The arc is written for the Wailea or Kapalua kitchen you rented. The cook sets the counter, sends courses in that order, and gives two people more time between plates than a full table. Clean-down is the counter and the pass. If rain hits the lānai, the courses stay at that counter. A supplier is named only when the invoice stands behind it. The paced tasting at your kitchen island is [omakase at home](/omakase-at-home), and menu plus sourcing verification are what launch that page. Drafts are explained on [menus](/menus). Formats are on [fine dining](/fine-dining). The band and fee lines are on [pricing](/pricing). Quotes are open on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Is this the Lotus Chefs tasting, or your kitchen?',
          a: 'This is our kitchen. Lotus Chefs is another kitchen, a related search, not a name we use. The arc is written for your Wailea or Kapalua house. We do not impersonate them.',
        },
        {
          q: 'How is a written tasting different from omakase at home on Maui?',
          a: 'Omakase at home is the paced tasting at a Wailea or Kapalua kitchen island, on its own page. Menu and sourcing verification launch it. This page is the written sequence of courses. Quotes are open. Tell us which night.',
        },
        {
          q: 'Can one course in the arc be changed for a dairy note?',
          a: 'That course is rewritten before the shop. The rest of the sequence stays. We only keep a restriction the villa kitchen can actually hold.',
        },
        {
          q: 'Can a Wailea draft credit the morning’s catch with a person’s name?',
          a: 'The credit is the invoice, or it is absent. The fish is still served. We do not borrow someone else’s boat to make the arc sound specific.',
        },
        {
          q: 'Where do bottles sit during a long Wailea sequence?',
          a: 'On the counter if you brought them. A pour we buy is quoted as its own line, not folded into a course. Wine, beer, and spirits never sit inside the per-guest band. Say if a glass meets each plate or the bottle stays closed.',
        },
        {
          q: 'What turns a West Maui tasting into a written total?',
          a: 'The villa, the date, the seats, and the restrictions. Saturday traffic between Wailea and Kapalua belongs in the same note. Bands are on [pricing](/pricing). Send it on [the quote form](/quote).',
        },
      ],
      related: [
        { path: '/omakase-at-home', label: 'Omakase at home' },
        { path: '/menus', label: 'How menus are designed' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
      ],
    },
    {
      slug: 'chefs-table-evening',
      name: "Chef's table evening",
      h1: 'A chef’s table evening in a Maui kitchen — the counter is the table.',
      title: 'A chef’s table evening in a Maui kitchen | myCHEF',
      description:
        'Evening seating at a Wailea or Kapalua kitchen counter. Not a restaurant pass. Not a star claim.',
      lede: 'The sear in front of you. Molokini in the window if the house has it.',
      photo: 'fineChefsEveMaui',
      body: [
        'Guests sit at the Wailea or Kapalua counter that faces the cook, once the kitchen is theirs for the evening. The sear is in front of them. Courses follow the draft, with a looser gap for two than for a full counter, and the pass is wiped before the crew leaves. Rain keeps everyone at that counter rather than on the lānai. How many stools the kitchen holds is confirmed on the written reply. The standing product is [chef’s table](/chefs-table). Formats are on [fine dining](/fine-dining). Fees are on [pricing](/pricing). Quotes are open on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'What makes a Maui counter evening different from the chef’s table page?',
          a: 'The chef’s table page is the house pass. This evening is guests at that counter while dinner is fired, not a resort communal table. A lawn of forty is not this seating.',
        },
        {
          q: 'How many stools does a Wailea open kitchen actually take?',
          a: 'Whatever that counter and table hold, confirmed on the written reply. We do not publish a stool count for a kitchen we have not seen. If the galley is too tight, the quote says so.',
        },
        {
          q: 'Are courses at the counter plated, or shared off one board?',
          a: 'Plated, in the order on the draft. A shared board is written only when you ask. The cook stays at the same counter as the seats.',
        },
        {
          q: 'Can a guest at a Kapalua counter skip a course the others are eating?',
          a: 'That setting is changed inside the written arc. The other settings are not rebuilt. Send the note with the villa so the shop matches the pass.',
        },
        {
          q: 'Does watching the cook include a wine pairing?',
          a: 'Watching the cook does not include a pairing. Bring the bottles, or ask for pours as their own line in the same note as the seats. Wine, beer, and spirits stay outside the guest price.',
        },
        {
          q: 'What should a West Maui evening request include?',
          a: 'The house, the date, and whether the counter faces the cook. Seats are confirmed in the reply. Quotes are open on [the quote form](/quote). See [pricing](/pricing) for the band and the fee lines.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    {
      slug: 'celebration-dinner',
      name: 'Celebration dinner',
      h1: 'A celebration dinner in a Maui dining room — plated, not a lawn party.',
      title: 'A celebration dinner in a Maui dining room | myCHEF',
      description: 'Seated celebration dinners in Wailea and West Maui houses.',
      lede: 'A dining room, identical plates, a small list. The lawn party is a different booking.',
      photo: 'fineCelebrationMaui',
      body: [
        'Wet-weather backup is written if you move to a lawn.',
        'The evening is a dining room in Wailea or West Maui. The cook sets the kitchen, plates matching courses for the table, and clears before leaving. Two seats can pause. A fuller table keeps the courses together. If weather turns a lānai, the backup room on the quote is where the plates go. Anniversaries and birthdays live under [events](/events). This page is the seated format. The rest are on [fine dining](/fine-dining). The band and the separate fee lines are on [pricing](/pricing). Quotes are open on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Should a West Maui anniversary use this page or the occasion page?',
          a: 'The anniversary page is the year-mark. This page is the seated dining-room format. Open the occasion when the reason for the night is the point. Quotes are open either way.',
        },
        {
          q: 'Do Lahaina and Kapalua houses plate the celebration, or share it?',
          a: 'West Maui houses with kitchens plate this format. A shared service is written if you want platters. A lawn party is a different booking, and the rain plan is on the quote before you accept.',
        },
        {
          q: 'Can one cousin’s allergy be plated inside an otherwise matched menu?',
          a: 'That plate changes. The others stay matched. Write the restriction with the headcount. We design only what that kitchen can keep separate.',
        },
        {
          q: 'Is the wine included when the dining room is the celebration?',
          a: 'Wine is not included with the dining room. You bring it, or a pour is written apart from the plates. Wine, beer, and spirits do not sit in the per-guest band. Say if they are poured or left for the table.',
        },
        {
          q: 'Why would two people on a Wailea lānai be paced differently from twelve?',
          a: 'Two can wait on the view. Twelve need courses to land together so the table is not half-served. The quote names arrival, the last plate, and the clean-down.',
        },
        {
          q: 'What does a Kapalua celebration note need?',
          a: 'The house, the date, the seats, plated or shared, and the indoor backup. Saturday West Maui traffic belongs there too. Send it on [the quote form](/quote). Bands are on [pricing](/pricing).',
        },
      ],
      related: [
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/catering/plated', label: 'Plated service' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'romantic-dinner',
      name: 'Romantic dinner',
      h1: 'A romantic dinner on a Kauai estate — two seats, inquiry, both shores.',
      title: 'A romantic dinner on a Kauai estate | myCHEF',
      description:
        'Two-seat romantic dinners in Princeville and Poʻipū. Inquiry stage. Not a restaurant reservation.',
      lede: 'Wet North stone or South sun. Two plates. Inquiry. Far-North inherits the bridge clause.',
      photo: 'fineRomanticKauai',
      body: [
        'Request availability with the shore. We will not pretend a crew is already held.',
        'The cook sets two places after reaching the Princeville terrace or the Poʻipū kitchen you named. Courses are plated, with time between them, and the counters are cleared before the crew leaves. Rain moves a North Shore terrace under cover. A Hanalei-bridge closure moves the night. It does not cancel it in silence. A Poʻipū kitchen does not inherit that bridge. The published two-top is [honeymoon dinners](/honeymoon-dinners). Formats are on [fine dining](/fine-dining). The band and fee lines are on [pricing](/pricing). Request availability on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'How does a Princeville romantic dinner differ from the honeymoon dinner?',
          a: 'The honeymoon dinner is the two-top on either shore. This format is the romantic dinner, still two seats, still subject to the bridge past Hanalei. Request availability and name the shore. A date is not a held crew.',
        },
        {
          q: 'Can a Poʻipū two-top be served family-style?',
          a: 'Plated is the format. Family-style is written if you want platters instead. Say so when you request availability, before anyone shops.',
        },
        {
          q: 'What if one of us needs the fish changed after the draft exists?',
          a: 'Tell us before the shop. That plate is rewritten inside the arc. The other plate stays. We will not claim a separate allergen kitchen on either shore.',
        },
        {
          q: 'Are drinks included on a Garden Isle two-top?',
          a: 'Drinks are not included on the two-top. Bring wine, beer, and spirits, or request a separate pour as its own line when you request availability. They stay outside the dinner.',
        },
        {
          q: 'Does rain on a North Shore terrace stop the courses?',
          a: 'The plates move under cover, the plan already written. A Hanalei-bridge closure moves the night rather than dropping it. Request availability with that clause in mind.',
        },
        {
          q: 'How do I request availability for two seats on either shore?',
          a: 'Name Princeville or Poʻipū, the dates, and plated or shared on [the quote form](/quote). We reply when a crew can staff that shore. There is no instant confirmation.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
      ],
    },
    {
      slug: 'tasting-menu',
      name: 'Tasting menu',
      h1: 'A tasting menu on a Kauai estate — written courses, inquiry.',
      title: 'A tasting menu on a Kauai estate | myCHEF',
      description: 'Written tasting arcs in Princeville and Poʻipū. Inquiry stage. Not a restaurant claim.',
      lede: 'Courses at the estate counter. Inquiry.',
      photo: 'fineTastingKauai',
      body: [
        'The written arc waits until a crew can reach the shore you named. Courses go to the Princeville or Poʻipū counter in that order. Two people get a wider gap than a full table. The pass is cleared at the end. Rain keeps the seating off an open terrace. A Hanalei closure shifts the North Shore night. A name on a dish appears only when the invoice stands behind it. The paced tasting at the kitchen island is [omakase at home](/omakase-at-home), where menu and sourcing verification are the launch gates. Menu drafts are on [menus](/menus). Formats are on [fine dining](/fine-dining). Fees are on [pricing](/pricing). Request availability on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'What separates this estate arc from omakase at home?',
          a: 'Omakase at home is a paced tasting at the estate kitchen island, on its own page. Menu and sourcing verification are its launch gates. This arc is the written sequence at a Princeville or Poʻipū counter. Request availability for the shore.',
        },
        {
          q: 'Does a South Shore arc arrive as plated courses?',
          a: 'Each course is plated in the draft order. A shared course is written only if you ask when you request availability.',
        },
        {
          q: 'Can a shellfish note be swapped inside an arc that is already drafted?',
          a: 'That course changes. The sequence around it stays, if the estate kitchen can keep them apart. Send the note with the shore before the shop.',
        },
        {
          q: 'Can a North Shore arc name who caught the fish?',
          a: 'Request availability first. A name goes on the draft only if that shore’s shop invoice supports it. Weather and a bridge closure do not create a fisherman.',
        },
        {
          q: 'How should drinks be requested across a long estate arc?',
          a: 'Request the drinks with the shore. Bring the bottles, or a glass with each course is its own line on the reply. Wine, beer, and spirits are outside the food. Say which when you request availability.',
        },
        {
          q: 'What does a both-shores tasting request need?',
          a: 'The shore, the estate, the dates, and the seats. Bridge weather belongs in a North Shore note. Bands are on [pricing](/pricing). Request availability on [the quote form](/quote).',
        },
      ],
      related: [
        { path: '/omakase-at-home', label: 'Omakase at home' },
        { path: '/menus', label: 'How menus are designed' },
        { path: '/poipu', label: 'Poʻipū' },
      ],
    },
    {
      slug: 'chefs-table-evening',
      name: "Chef's table evening",
      h1: 'A chef’s table evening on Kauai — the estate counter, inquiry.',
      title: 'A chef’s table evening on Kauai | myCHEF',
      description:
        'Evening seating at a Princeville or Poʻipū kitchen counter. Inquiry stage. Not a restaurant pass.',
      lede: 'The sear, the mist or the pool. Inquiry.',
      photo: 'fineChefsEveKauai',
      body: [
        'Request availability before anyone treats the counter as booked. Guests sit where a Princeville or Poʻipū kitchen actually faces the cook. The sear is in the room. Courses follow the draft, looser for two, steadier for a full counter, and the pass is cleared before the drive back. Rain and a bridge closure are written into a North Shore evening. They move the night. They do not silently swap it to the other shore. Seats are what that counter holds, confirmed in the reply. The standing page is [chef’s table](/chefs-table). Formats are on [fine dining](/fine-dining). Fees are on [pricing](/pricing). Request availability on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'How is an estate-counter evening different from the chef’s table page?',
          a: 'The chef’s table page is the house pass. This evening is guests at that counter, and only after you request availability. A compact galley that cannot face the cook is declined in the reply.',
        },
        {
          q: 'How many guests fit a Poʻipū counter for the evening?',
          a: 'As many as that kitchen and table hold, confirmed in the written reply. We do not print a number for a counter we have not seen. Beyond it, the night becomes a dining-room seating.',
        },
        {
          q: 'Do people at the estate pass eat plated courses?',
          a: 'Plated courses are the evening. A shared plate is a change you must request. The cook is in the house, not at a ticketed restaurant pass.',
        },
        {
          q: 'Can one seat at a Princeville counter take a different protein?',
          a: 'That setting is rewritten inside the draft. The other settings stay. Send it with the shore when you request availability, before the shop.',
        },
        {
          q: 'Is a pairing poured while everyone watches the sear?',
          a: 'A pairing is not poured with the sear unless you ask. Bring it, or it is a separate line when you request availability. Wine, beer, and spirits stay off the per-guest band.',
        },
        {
          q: 'What should a North Shore counter request say about the bridge?',
          a: 'Name the estate and whether it sits past the Hanalei bridge. A closure moves the evening. It is not switched to Poʻipū without you. Request availability on [the quote form](/quote).',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
        { path: '/north-shore', label: 'North Shore' },
      ],
    },
    {
      slug: 'celebration-dinner',
      name: 'Celebration dinner',
      h1: 'A celebration dinner on a Kauai estate — plated, inquiry, both shores.',
      title: 'A celebration dinner on a Kauai estate | myCHEF',
      description: 'Seated celebration dinners in Princeville and Poʻipū. Inquiry stage.',
      lede: 'An estate table, plated fish, a small list. Inquiry. The estate party is a different booking.',
      photo: 'fineCelebrationKauai',
      body: [
        'A celebration dinner is the estate dining table, plated, on the shore you request. The cook sets that room, sends courses together when the table is full, and slows down for two. Clean-down finishes before the crew leaves. Rain moves an open terrace inside. A bridge closure moves a Hanalei night rather than handing it to Poʻipū. Birthdays and anniversaries are under [events](/events). This page is the format. The others are on [fine dining](/fine-dining). The band and fee lines are on [pricing](/pricing). Request availability on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'When should a Poʻipū birthday use the occasion page instead of this format?',
          a: 'Use the birthday page when the occasion is the point. Use this page for the seated estate table. Request availability either way, and name the shore. They are not the same total.',
        },
        {
          q: 'Is a Princeville celebration plated for the whole table?',
          a: 'Plated courses are the format, matched across the table. Platters are written if you want them. An estate party on the lawn is a different booking.',
        },
        {
          q: 'Can one guest’s restriction be kept inside a matched estate menu?',
          a: 'That plate is adjusted in the draft. The rest stay matched. Send the restriction with the headcount when you request availability.',
        },
        {
          q: 'Should bottles for an estate table be in the house before the crew arrives?',
          a: 'Have your bottles in the house if they are yours. A pour we supply is its own line on the written reply, still outside the dinner. Wine, beer, and spirits are not in the per-guest band. Say whether they are poured when you request availability.',
        },
        {
          q: 'How does a two-person celebration differ in pace from a full estate table?',
          a: 'Two can pause between plates. A full table is fired so courses arrive together. Rain backup and the bridge clause are on the same reply.',
        },
        {
          q: 'How do I request availability for an estate celebration?',
          a: 'Shore, estate, dates, seats, and plated or shared. North Shore notes should mention the bridge. Use [the quote form](/quote). The band is on [pricing](/pricing). A named date is not a confirmation.',
        },
      ],
      related: [
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/events/villa-parties', label: 'Estate parties' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'romantic-dinner',
      name: 'Romantic dinner',
      h1: 'A romantic dinner on a Kohala lava terrace — two seats, west side.',
      title: 'A romantic dinner on a Kohala lava terrace | myCHEF',
      description:
        'Two-seat romantic dinners in Kona and Kohala. Inquiry stage. East side is a different day.',
      lede: 'Two plates on lava, Mauna Kea faint. Not a Hilo add-on.',
      photo: 'fineRomanticBigisland',
      body: [
        'West-side: Kona–Kohala corridor.',
        'Join the inquiry list with a Kona, Waikoloa, or Kohala address. The cook sets two places on that terrace, plates the courses against the sunset you asked to keep, and clears the outdoor pass before leaving. Wind moves the plates into the house named as backup. Hilo is a separate dedicated east-side day, quoted in writing, and is never stacked on this night. The published two-top is [honeymoon dinners](/honeymoon-dinners). Formats are on [fine dining](/fine-dining). The band and fee lines are on [pricing](/pricing). Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'How is a Kohala romantic dinner different from the west-side honeymoon dinner?',
          a: 'The honeymoon dinner is the published two-top on the Kona–Kohala side. This format is the romantic dinner on that same terrace. Join the inquiry list and say which. Hilo is not part of either.',
        },
        {
          q: 'Are two plates on a lava terrace plated, or set down to share?',
          a: 'Plated is the format. A shared plate is written if you ask before the west-side shop. The reply confirms which, along with the wind backup into the house.',
        },
        {
          q: 'Can a dairy note be swapped inside a menu that is already drafted?',
          a: 'That plate is rewritten. The other stays. Send the note with the Kona or Kohala address. We will not claim a separate allergen kitchen.',
        },
        {
          q: 'Who supplies wine on a Waikoloa terrace?',
          a: 'You bring the wine for the terrace, or a sunset pour is its own line on the written reply. Wine, beer, and spirits stay outside the dinner. Join the inquiry list and say which.',
        },
        {
          q: 'How are courses timed when sunset is the clock?',
          a: 'The cook holds the next plate so the two of you can use the light. The inquiry still states arrival and when the terrace is cleared. It is not a banquet clock.',
        },
        {
          q: 'What if the couple is staying in Hilo and still wants this terrace?',
          a: 'The terrace is only a Kona–Kohala house. A Hilo stay is a separate dedicated east-side day, quoted in writing. Join the inquiry list for one side. The saddle is not a shuttle between them the same evening.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
      ],
    },
    {
      slug: 'tasting-menu',
      name: 'Tasting menu',
      h1: 'A tasting menu on west-side Hawaiʻi Island — written courses, Kona.',
      title: 'A tasting menu on west-side Hawaiʻi Island | myCHEF',
      description:
        'Written tasting arcs in Kona and Kohala kitchens. Inquiry stage. East side is a different day. Not a restaurant claim.',
      lede: 'Kanpachi in courses at the counter. Lava in the window.',
      photo: 'fineTastingBigisland',
      body: [
        'Join the inquiry list for a Kona or Kohala kitchen. The arc is written before the shop. Courses land at the counter in that order, with more air between plates for two than for a full counter, and the pass is cleared at the end. Wind off the lava moves seating indoors. A supplier is named only when the invoice stands behind it. Hilo is a separate dedicated east-side day, quoted in writing, not a course added after Waikoloa. The paced tasting at the kitchen island is [omakase at home](/omakase-at-home). Its launch gates are the menu and the sourcing verification. Drafts are on [menus](/menus). Formats are on [fine dining](/fine-dining). Fees are on [pricing](/pricing). Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'How is a Kona tasting arc different from omakase at home?',
          a: 'Omakase at home is a paced tasting at the west-side kitchen island, on its own page. Menu and sourcing verification are its launch gates. This arc is the written sequence of courses. Join the inquiry list and name which. A Hilo tasting is a separate dedicated east-side day.',
        },
        {
          q: 'Do west-side tasting courses come out plated?',
          a: 'Each course is plated in the draft order. A shared course is written only if you ask on the inquiry, before the Kona shop.',
        },
        {
          q: 'Can an allergy change one course and leave the rest of the arc?',
          a: 'That course is rewritten. The sequence around it stays if the kitchen can keep them apart. Send the note with the west-side address.',
        },
        {
          q: 'Does kanpachi on a Kohala arc come with a boat credit?',
          a: 'Join the inquiry list. The fish can be served with no boat attached. A credit appears only if the west-side invoice supports it. Coffee on a crust follows that same paperwork rule.',
        },
        {
          q: 'Can a Waikoloa tasting stay dry except for one toast?',
          a: 'One toast is enough. Bring that bottle, or the toast is quoted as its own line, and the rest of the arc stays food. Wine, beer, and spirits are not in the per-guest band. Put the limit on the inquiry.',
        },
        {
          q: 'Does a Hilo tasting ride along with a Kona arc the same evening?',
          a: 'Hilo stays off that evening. It is a separate dedicated east-side day, quoted in writing. Join the inquiry list for the Kona or Kohala kitchen alone.',
        },
      ],
      related: [
        { path: '/omakase-at-home', label: 'Omakase at home' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/kona', label: 'Kona' },
      ],
    },
    {
      slug: 'chefs-table-evening',
      name: "Chef's table evening",
      h1: 'A chef’s table evening in a Kona kitchen — the counter is the table.',
      title: 'A chef’s table evening in a Kona kitchen | myCHEF',
      description:
        'Evening seating at a Kona or Kohala kitchen counter. Inquiry stage. East side is a different day. Not a restaurant pass.',
      lede: 'The sear, hard sun cooling. Not Hilo.',
      photo: 'fineChefsEveBigisland',
      body: [
        'West-side first.',
        'Join the inquiry list, then the evening is the Kona or Kohala counter that faces the cook. Guests watch the sear. Courses follow the draft, slower for two, tighter when the counter is full, and the pass is wiped before the crew leaves. Wind moves the seat indoors. Hilo is a separate dedicated east-side day, quoted in writing, not a second counter the same night. How many seats that kitchen holds is confirmed in the reply. The standing page is [chef’s table](/chefs-table). Formats are on [fine dining](/fine-dining). Fees are on [pricing](/pricing). Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'What is different about a Kona counter evening and the chef’s table page?',
          a: 'The chef’s table page is the house pass on the west side. This evening is guests at that counter while the cook fires. Join the inquiry list. A galley that cannot hold the pass is declined.',
        },
        {
          q: 'How many seats does a Waikoloa kitchen counter hold?',
          a: 'What that kitchen and table hold, confirmed in the written reply. We do not print a count for a counter we have not seen. Past it, the night is a dining table, still on the west side.',
        },
        {
          q: 'Are courses at a Kohala pass plated in front of the guests?',
          a: 'Plated, at the counter, in draft order. A shared board is written only if the inquiry asks for it. This is not a ticketed restaurant pass.',
        },
        {
          q: 'Can one person at the counter eat a different protein?',
          a: 'That setting changes inside the written arc. The others stay. Put it on the inquiry before the west-side shop.',
        },
        {
          q: 'Is a wine pairing part of sitting at the Kona sear?',
          a: 'A pairing is not part of the Kona sear. Bring the wine, or it is quoted as its own line. Wine, beer, and spirits stay outside the food. Join the inquiry list if you want that line written.',
        },
        {
          q: 'Can the east side be a second seating after the Kona counter?',
          a: 'The counter evening ends on the west side. Hilo is a separate dedicated east-side day, quoted in writing. Join the inquiry list for the kitchen that faces the cook in Kona or Kohala.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/fine-dining/tasting-menu', label: 'Tasting menu' },
      ],
    },
    {
      slug: 'celebration-dinner',
      name: 'Celebration dinner',
      h1: 'A celebration dinner on the Kohala Coast — plated, west side.',
      title: 'A celebration dinner on the Kohala Coast | myCHEF',
      description:
        'Seated celebration dinners in Kona and Kohala houses. Inquiry stage. East side is a different day.',
      lede:
        'Eight plates on lava, Mauna Kea faint. The villa party is a different booking. Not a Hilo add-on.',
      photo: 'fineCelebrationBigisland',
      body: [
        'West-side: Kona–Kohala corridor.',
        'Join the inquiry list for a seated table in Kona, Waikoloa, or along the Kohala Coast. The cook sets that dining room, plates the courses so a full table is served together, and gives two people more time between plates. The room is cleared before the crew leaves. Wind off the terrace moves the table inside. Birthdays are under [events](/events). This page is the format. The others are on [fine dining](/fine-dining). The band and fee lines are on [pricing](/pricing). Hilo is a separate dedicated east-side day, quoted in writing. Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Should a Waikoloa birthday be booked here or on the birthday page?',
          a: 'The birthday page is the occasion. This page is the seated west-side format. Join the inquiry list for the one you mean. A Hilo birthday is not included in a Kohala night.',
        },
        {
          q: 'Are Kohala celebration courses plated for every seat?',
          a: 'Plated and matched, unless you ask for platters on the inquiry. A villa party on the lawn is a different booking. The wind backup into the house is written before you accept.',
        },
        {
          q: 'Can one guest’s restriction be plated without remaking every course?',
          a: 'That plate changes inside the arc. The other plates stay matched. Send the note with the west-side headcount before the shop.',
        },
        {
          q: 'Is a sunset toast on the Kohala terrace part of the food?',
          a: 'The toast is separate from the plates. Bring the bottle, or it is its own line on the written reply. Wine, beer, and spirits never sit inside the per-guest band. Join the inquiry list. A Hilo toast is not added to this terrace.',
        },
        {
          q: 'How does pacing for two on a lava terrace differ from a full table?',
          a: 'Two can wait on the light. A full table is fired so plates land together. The inquiry states arrival and clean-down for that Kona or Kohala house.',
        },
        {
          q: 'How do I join the inquiry list without pulling Hilo into the same night?',
          a: 'Send a Kona, Waikoloa, or Kohala address only. Hilo is a separate dedicated east-side day, quoted in writing. Use [the quote form](/quote). Bands are on [pricing](/pricing).',
        },
      ],
      related: [
        { path: '/events/birthdays', label: 'Birthdays' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/events/villa-parties', label: 'Villa parties' },
      ],
    },
  ],
};

export function getFineDiningPage(island: IslandId, slug: string): FineDiningPage | undefined {
  return fineDiningPages[island].find((row) => row.slug === slug);
}
