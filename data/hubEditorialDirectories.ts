import { SEARCH_VOLUMES } from './offers';
import type { HubDirectory } from './hubDirectories';

/** Hub pickers for journal and shared-blog URLs that already 200 on every island host. */
export const HUB_EDITORIAL_PATHS = [
  '/journal/how-much-does-a-private-chef-cost',
  '/journal/how-to-hire-a-private-chef',
  '/journal/villa-kitchens',
  '/journal/dietary-needs',
  '/journal/what-is-included',
  '/journal/how-far-ahead-to-book',
  '/journal/private-chef-vs-restaurant',
  '/journal/wedding-week',
  '/journal/vacation-chef-week',
  '/journal/travel-zones',
  '/blog/grocery-at-cost',
  '/blog/wine-and-alcohol',
  '/blog/weather-backup',
  '/blog/sourcing-honesty',
  '/blog/cleanup-standard',
  '/blog/condo-load-in',
  '/blog/family-reunions',
  '/blog/photoshoot-catering',
  '/blog/proposal-dinners',
  '/blog/estate-logistics',
  '/blog/shoulder-season',
  '/blog/named-farms',
  '/blog/fish-species',
  '/blog/coffee-labeling',
  '/blog/peak-season',
  '/blog/no-fake-reviews',
  '/blog/anniversary-dinners',
  '/blog/kids-at-the-table',
  '/blog/breakfast-in-the-villa',
  '/blog/lunch-service',
  '/blog/staffing-servers',
  '/blog/bartender-add-on',
  '/blog/welcome-dinner',
  '/blog/day-after-brunch',
  '/blog/rehearsal-dinner',
  '/blog/corporate-offsites',
  '/blog/retreat-full-board',
] as const;

export type HubEditorialId =
  | 'jnlCost'
  | 'jnlHire'
  | 'jnlKitchens'
  | 'jnlDietary'
  | 'jnlIncluded'
  | 'jnlBook'
  | 'jnlVsrest'
  | 'jnlWedding'
  | 'jnlVacweek'
  | 'jnlZones'
  | 'blogGrocery'
  | 'blogWine'
  | 'blogWeather'
  | 'blogSourcing'
  | 'blogCleanup'
  | 'blogCondo'
  | 'blogReunions'
  | 'blogPhotoshoot'
  | 'blogProposal'
  | 'blogEstate'
  | 'blogShoulder'
  | 'blogFarms'
  | 'blogFish'
  | 'blogCoffee'
  | 'blogPeak'
  | 'blogReviews'
  | 'blogAnniv'
  | 'blogKids'
  | 'blogBreakfast'
  | 'blogLunch'
  | 'blogServers'
  | 'blogBartender'
  | 'blogWelcome'
  | 'blogBrunch'
  | 'blogRehearsal'
  | 'blogOffsites'
  | 'blogRetreat';

export const hubEditorialDirectories: Record<HubEditorialId, HubDirectory> = {
  jnlCost: {
    path: '/journal/how-much-does-a-private-chef-cost',
    h1: 'How a quote is built, by island.',
    title: 'How a quote is built, by island | myCHEF Hawaii',
    description:
      'Each island writes how the rate card, fee stack, and corridor become one total.',
    lede:
      'Each island journal piece is how those two become a written total.',
    kicker: 'Statewide · Quote notes',
    photo: 'hubJnlCost',
    cardLabel: 'How a quote is built',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  jnlHire: {
    path: '/journal/how-to-hire-a-private-chef',
    h1: 'How to hire, by island.',
    title: 'How to hire, by island | myCHEF Hawaii',
    description:
      'Each island writes why the five-field form exists.',
    lede:
      'Each island journal piece is why those two exist.',
    kicker: 'Statewide · Hiring notes',
    photo: 'hubJnlHire',
    cardLabel: 'How to hire',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  jnlKitchens: {
    path: '/journal/villa-kitchens',
    h1: 'Villa kitchens, by island.',
    title: 'Villa kitchens, by island | myCHEF Hawaii',
    description:
      'Each island writes the kitchen as the constraint — galley, condo, estate.',
    lede:
      'The room you have is the menu you can have. Each island writes that constraint.',
    kicker: 'Statewide · Kitchens',
    photo: 'hubJnlKitchens',
    cardLabel: 'Villa kitchens',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  jnlDietary: {
    path: '/journal/dietary-needs',
    h1: 'Allergy notes, by island.',
    title: 'Allergy notes, by island | myCHEF Hawaii',
    description:
      'Each island writes allergies as a menu, not an improvisation.',
    lede:
      'Each island journal piece is how allergies print on that island’s quote.',
    kicker: 'Statewide · Allergies',
    photo: 'hubJnlDietary',
    cardLabel: 'Allergy notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Do you claim you can cook anything?',
        a: 'No. Cross-contact limits are stated if the kitchen cannot support them. Each island writes that.',
      },
    ],
  },
  jnlIncluded: {
    path: '/journal/what-is-included',
    h1: 'What prints on the quote, by island.',
    title: 'What prints on the quote, by island | myCHEF Hawaii',
    description:
      'Each island writes the included/excluded split.',
    lede:
      'Shop, cook, serve, clean — in. Alcohol, rentals, venue fees — out. Each island writes the split.',
    kicker: 'Statewide · Included',
    photo: 'hubJnlIncluded',
    cardLabel: 'What prints',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  jnlBook: {
    path: '/journal/how-far-ahead-to-book',
    h1: 'Notice windows, by island.',
    title: 'Notice windows, by island | myCHEF Hawaii',
    description:
      'Each island writes how far ahead to send the form.',
    lede:
      'Peak weeks compress. Far zones carry published notice. Each island writes the window.',
    kicker: 'Statewide · Notice',
    photo: 'hubJnlBook',
    cardLabel: 'Notice windows',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  jnlVsrest: {
    path: '/journal/private-chef-vs-restaurant',
    h1: 'House table vs going out, by island.',
    title: 'House table vs going out, by island | myCHEF Hawaii',
    description:
      'Each island writes in-villa service against a restaurant reservation.',
    lede:
      'A restaurant reservation is a different product. Each island writes when the house is the better table.',
    kicker: 'Statewide · House vs out',
    photo: 'hubJnlVsrest',
    cardLabel: 'House vs going out',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  jnlWedding: {
    path: '/journal/wedding-week',
    h1: 'Wedding-week kitchen notes, by island.',
    title: 'Wedding-week kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes how welcome, rehearsal, reception, and brunch stack beside the weddings page.',
    lede:
      'Maui and Kauaʻi each publish a wedding week. Each island journal piece covers the kitchen timing.',
    kicker: 'Statewide · Wedding-week notes',
    photo: 'hubJnlWedding',
    cardLabel: 'Wedding-week kitchen notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  jnlVacweek: {
    path: '/journal/vacation-chef-week',
    h1: 'Stay Chef week notes, by island.',
    title: 'Stay Chef week notes, by island | myCHEF Hawaii',
    description:
      'Each island writes how a villa week stacks beside the Stay Chef page.',
    lede:
      'Each island journal piece is the crate-and-plate kitchen.',
    kicker: 'Statewide · Stay Chef weeks',
    photo: 'hubJnlVacweek',
    cardLabel: 'Stay Chef week notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  jnlZones: {
    path: '/journal/travel-zones',
    h1: 'Travel-zone kitchen notes, by island.',
    title: 'Travel-zone kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes why two corridors are not one cooler, beside the coverage map.',
    lede:
      'Each island journal piece is the cooler-load honesty.',
    kicker: 'Statewide · Travel zones',
    photo: 'hubJnlZones',
    cardLabel: 'Travel-zone kitchen notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries. Hilo stays a dedicated day.',
    ],
    faqs: [
    ],
  },
  blogGrocery: {
    path: '/blog/grocery-at-cost',
    h1: 'Groceries at cost, by island.',
    title: 'Groceries at cost, by island | myCHEF Hawaii',
    description:
      'Each island writes groceries billed at cost with receipts.',
    lede:
      'Shopped the day of. Billed at cost. Never a hidden markup. Each island writes the grocery line.',
    kicker: 'Statewide · Groceries',
    photo: 'hubBlogGrocery',
    cardLabel: 'Groceries at cost',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Is there a grocery markup?',
        a: 'No. Cost plus receipts. Each island says so. Open the quote form on the island host.',
      },
    ],
  },
  blogWine: {
    path: '/blog/wine-and-alcohol',
    h1: 'Wine as its own line, by island.',
    title: 'Wine as its own line, by island | myCHEF Hawaii',
    description:
      'Each island writes wine, beer, and spirits as a separate quote line.',
    lede:
      'Pours are never swallowed by the dinner band. Each island writes the alcohol line.',
    kicker: 'Statewide · Alcohol line',
    photo: 'hubBlogWine',
    cardLabel: 'Wine as its own line',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogWeather: {
    path: '/blog/weather-backup',
    h1: 'Wet-weather backups, by island.',
    title: 'Wet-weather backups, by island | myCHEF Hawaii',
    description:
      'Each island writes the indoor backup for an outdoor table.',
    lede:
      'Outdoor tables need a real indoor plan. Each island writes the backup.',
    kicker: 'Statewide · Weather',
    photo: 'hubBlogWeather',
    cardLabel: 'Wet-weather backups',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogSourcing: {
    path: '/blog/sourcing-honesty',
    h1: 'Sourcing honesty, by island.',
    title: 'Sourcing honesty, by island | myCHEF Hawaii',
    description:
      'Each island writes that Hawaiʻi still imports most of its food.',
    lede:
      'We do not invent a local-only kitchen. Each island writes what we actually buy.',
    kicker: 'Statewide · Sourcing',
    photo: 'hubBlogSourcing',
    cardLabel: 'Sourcing honesty',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogCleanup: {
    path: '/blog/cleanup-standard',
    h1: 'Cleanup standard, by island.',
    title: 'Cleanup standard, by island | myCHEF Hawaii',
    description:
      'Each island writes how the kitchen is left.',
    lede:
      'The house is left cleaner than we found it. Each island writes the standard.',
    kicker: 'Statewide · Cleanup',
    photo: 'hubBlogCleanup',
    cardLabel: 'Cleanup standard',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Do you do dishes the next morning?',
        a: 'Service includes cleanup that night. Each island writes the standard. Overnight stays are a different quote.',
      },
    ],
  },
  blogCondo: {
    path: '/blog/condo-load-in',
    h1: 'Condo load-in notes, by island.',
    title: 'Condo load-in notes, by island | myCHEF Hawaii',
    description:
      'Each island writes freight elevators, quiet hours, and tower kitchens.',
    lede:
      'Towers are not estates. Each island writes the load-in.',
    kicker: 'Statewide · Condo load-in',
    photo: 'hubBlogCondo',
    cardLabel: 'Condo load-in',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogReunions: {
    path: '/blog/family-reunions',
    h1: 'Family reunion tables, by island.',
    title: 'Family reunion tables, by island | myCHEF Hawaii',
    description:
      'Each island writes multi-household tables in houses.',
    lede:
      'Several households, one house, guest counts we actually staff. Each island writes the reunion table.',
    kicker: 'Statewide · Reunions',
    photo: 'hubBlogReunions',
    cardLabel: 'Family reunions',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogPhotoshoot: {
    path: '/blog/photoshoot-catering',
    h1: 'Crew meals, by island.',
    title: 'Crew meals, by island | myCHEF Hawaii',
    description:
      'Each island writes production and crew meals in residences.',
    lede:
      'Crew meals are a staffed-room product, not a ballroom overlay. Each island writes the production note.',
    kicker: 'Statewide · Crew meals',
    photo: 'hubBlogPhotoshoot',
    cardLabel: 'Crew meals',
    body: [
      `HCC citywides are closed and are not the product.`,
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Do you staff convention citywides?',
        a: 'No. Other islands say it on the what-we-don’t-do list.',
      },
    ],
  },
  blogProposal: {
    path: '/blog/proposal-dinners',
    h1: 'Proposal dinners, by island.',
    title: 'Proposal dinners, by island | myCHEF Hawaii',
    description:
      'Each island writes a dinner-for-two with a question.',
    lede:
      'Not a tasting menu. Each island writes the proposal table.',
    kicker: 'Statewide · Proposals',
    photo: 'hubBlogProposal',
    cardLabel: 'Proposal dinners',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogEstate: {
    path: '/blog/estate-logistics',
    h1: 'Estate load-in notes, by island.',
    title: 'Estate load-in notes, by island | myCHEF Hawaii',
    description:
      'Each island writes driveway, kit, and lawn logistics for estates.',
    lede:
      'Estates are a different kit. Each island writes the driveway.',
    kicker: 'Statewide · Estates',
    photo: 'hubBlogEstate',
    cardLabel: 'Estate load-in',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogShoulder: {
    path: '/blog/shoulder-season',
    h1: 'Shoulder months, by island.',
    title: 'Shoulder months, by island | myCHEF Hawaii',
    description:
      'Each island writes April and November.',
    lede:
      'Quieter months are not empty months. Each island writes April and November.',
    kicker: 'Statewide · Shoulder',
    photo: 'hubBlogShoulder',
    cardLabel: 'Shoulder months',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogFarms: {
    path: '/blog/named-farms',
    h1: 'Named farms only when verified, by island.',
    title: 'Named farms only when verified, by island | myCHEF Hawaii',
    description:
      'Each island writes that farm names print only after written verification.',
    lede:
      'We do not invent farm names. Each island writes the verification rule.',
    kicker: 'Statewide · Named farms',
    photo: 'hubBlogFarms',
    cardLabel: 'Named farms',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogFish: {
    path: '/blog/fish-species',
    h1: 'Fish named as food, by island.',
    title: 'Fish named as food, by island | myCHEF Hawaii',
    description:
      'Each island writes fish as food, not décor.',
    lede:
      'Species print as what is on the plate. Each island writes that.',
    kicker: 'Statewide · Fish',
    photo: 'hubBlogFish',
    cardLabel: 'Fish named as food',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Do you garnish with decorative fish?',
        a: 'No. Fish is food. Each island says so.',
      },
    ],
  },
  blogCoffee: {
    path: '/blog/coffee-labeling',
    h1: 'Coffee origin notes, by island.',
    title: 'Coffee origin notes, by island | myCHEF Hawaii',
    description:
      'Each island writes coffee origin labeling.',
    lede:
      'Named Kona and Kaʻū coffee follow the law. Each island writes the labeling note.',
    kicker: 'Statewide · Coffee',
    photo: 'hubBlogCoffee',
    cardLabel: 'Coffee origin notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Do you invent farm names on coffee?',
        a: 'No. Named origin follows verification and the labeling law.',
      },
    ],
  },
  blogPeak: {
    path: '/blog/peak-season',
    h1: 'Peak weeks, by island.',
    title: 'Peak weeks, by island | myCHEF Hawaii',
    description:
      'Each island writes which weeks actually compress.',
    lede:
      'December–March and wedding peaks move first. Each island writes which weeks.',
    kicker: 'Statewide · Peak weeks',
    photo: 'hubBlogPeak',
    cardLabel: 'Peak weeks',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogReviews: {
    path: '/blog/no-fake-reviews',
    h1: 'Why the review count is zero, by island.',
    title: 'Why the review count is zero, by island | myCHEF Hawaii',
    description:
      'Each island writes why the guest-review count is still zero.',
    lede:
      'We do not invent Hawaiʻi star ratings. Each island writes that.',
    kicker: 'Statewide · Reviews',
    photo: 'hubBlogReviews',
    cardLabel: 'Why the count is zero',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogAnniv: {
    path: '/blog/anniversary-dinners',
    h1: 'Anniversary kitchen notes, by island.',
    title: 'Anniversary kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes the anniversary kitchen beside the Anniversaries page.',
    lede:
      'Each island blog note is the two-top kitchen.',
    kicker: 'Statewide · Anniversary notes',
    photo: 'hubBlogAnniv',
    cardLabel: 'Anniversary kitchen notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogKids: {
    path: '/blog/kids-at-the-table',
    h1: 'Kids-plate kitchen notes, by island.',
    title: 'Kids-plate kitchen notes, by island | myCHEF Hawaii',
    description: 'Each island blog note is how a kids plate actually lands.',
    lede:
      'Each island blog note is how a kids plate actually lands.',
    kicker: 'Statewide · Kids plates',
    photo: 'hubBlogKids',
    cardLabel: 'Kids-plate kitchen notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Do you run a kids station?',
        a: 'No. One kitchen, two plate sizes. Open the island note.',
      },
    ],
  },
  blogBreakfast: {
    path: '/blog/breakfast-in-the-villa',
    h1: 'Villa-breakfast kitchen notes, by island.',
    title: 'Villa-breakfast kitchen notes, by island | myCHEF Hawaii',
    description: 'Villa-breakfast kitchen notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Each island blog note is the morning call.',
    kicker: 'Statewide · Breakfast notes',
    photo: 'hubBlogBreakfast',
    cardLabel: 'Villa-breakfast notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogLunch: {
    path: '/blog/lunch-service',
    h1: 'In-villa lunch notes, by island.',
    title: 'In-villa lunch notes, by island | myCHEF Hawaii',
    description: 'Each island blog note is why midday is not an unpaid dinner add-on.',
    lede:
      'Each island blog note is why midday is not an unpaid dinner add-on.',
    kicker: 'Statewide · Lunch notes',
    photo: 'hubBlogLunch',
    cardLabel: 'In-villa lunch notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Lunch and dinner as one unpaid day?',
        a: 'No. Both print. Open the island note.',
      },
    ],
  },
  blogServers: {
    path: '/blog/staffing-servers',
    h1: 'Server-add kitchen notes, by island.',
    title: 'Server-add kitchen notes, by island | myCHEF Hawaii',
    description: 'Server-add kitchen notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Each island blog note is when we add the person.',
    kicker: 'Statewide · Servers',
    photo: 'hubBlogServers',
    cardLabel: 'Server-add notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogBartender: {
    path: '/blog/bartender-add-on',
    h1: 'Bartender-add kitchen notes, by island.',
    title: 'Bartender-add kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes the bartender add-on kitchen beside the villa bar page.',
    lede:
      'Each island blog note is the pour.',
    kicker: 'Statewide · Bartender notes',
    photo: 'hubBlogBartender',
    cardLabel: 'Bartender-add notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogWelcome: {
    path: '/blog/welcome-dinner',
    h1: 'Arrival-night kitchen notes, by island.',
    title: 'Arrival-night kitchen notes, by island | myCHEF Hawaii',
    description: 'Arrival-night kitchen notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Each island blog note is the arrival kitchen.',
    kicker: 'Statewide · Arrival nights',
    photo: 'hubBlogWelcome',
    cardLabel: 'Arrival-night notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Same as the reception?',
        a: 'No. Separate line. Open the weddings page if that is the night you mean.',
      },
    ],
  },
  blogBrunch: {
    path: '/blog/day-after-brunch',
    h1: 'Day-after brunch notes, by island.',
    title: 'Day-after brunch notes, by island | myCHEF Hawaii',
    description:
      'Each island writes the recovery-morning kitchen beside the Brunch page.',
    lede:
      'Each island blog note is the recovery morning.',
    kicker: 'Statewide · Brunch notes',
    photo: 'hubBlogBrunch',
    cardLabel: 'Day-after brunch notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogRehearsal: {
    path: '/blog/rehearsal-dinner',
    h1: 'Rehearsal-night kitchen notes, by island.',
    title: 'Rehearsal-night kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes the night-before kitchen beside the rehearsal dinners page.',
    lede:
      'Each island blog note is the night-before kitchen.',
    kicker: 'Statewide · Rehearsal notes',
    photo: 'hubBlogRehearsal',
    cardLabel: 'Rehearsal-night notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogOffsites: {
    path: '/blog/corporate-offsites',
    h1: 'House-offsite kitchen notes, by island.',
    title: 'House-offsite kitchen notes, by island | myCHEF Hawaii',
    description:
      'Each island writes the house-table kitchen beside the Corporate events page.',
    lede:
      'Each island blog note is the house table.',
    kicker: 'Statewide · Offsite notes',
    photo: 'hubBlogOffsites',
    cardLabel: 'House-offsite notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  blogRetreat: {
    path: '/blog/retreat-full-board',
    h1: 'Retreat-day meal notes, by island.',
    title: 'Retreat-day meal notes, by island | myCHEF Hawaii',
    description:
      'Each island writes how full-board meals stack beside the retreat catering page.',
    lede:
      'Each island blog note is the meal stack.',
    kicker: 'Statewide · Retreat notes',
    photo: 'hubBlogRetreat',
    cardLabel: 'Retreat-day meal notes',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
};

export function nestedHubEditorials(kind: 'journal' | 'blog'): HubDirectory[] {
  const prefix = `/${kind}/`;
  const byPath = new Map(
    (Object.values(hubEditorialDirectories) as HubDirectory[]).map((row) => [row.path, row]),
  );
  return HUB_EDITORIAL_PATHS.filter((path) => path.startsWith(prefix)).map((path) => {
    const row = byPath.get(path);
    if (!row) throw new Error(`Missing hub editorial for ${path}`);
    return row;
  });
}
