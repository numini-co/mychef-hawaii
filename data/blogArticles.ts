import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';
import { EXTRA_BLOG_NOTES } from './extraBlogNotes';

/**
 * Live blog article URLs. First slice: dining-in notes for money corridors.
 * Distinct from /{slug} neighborhood pages, /locations, and /coverage.
 * Titles must not use money keywords or steal corridor titles.
 */

export interface BlogArticle extends UniqueCell {
  slug: string;
}

export const blogArticles: Record<IslandId, BlogArticle[]> = {
  oahu: [
    {
      slug: 'dining-in-honolulu',
      name: 'Dining in Honolulu',
      h1: 'A Honolulu table — kitchen notes for a private chef night in town.',
      title: 'Honolulu kitchen notes — a table, not the corridor page | myCHEF',
      description:
        'Short Honolulu kitchen notes: town apartments and Gold Coast-adjacent houses.',
      lede: 'Short Honolulu kitchen notes: town apartments and Gold Coast-adjacent houses.',
      photo: 'dinHonolulu',
      body: [
        'Town apartments with a real stove, and houses that actually cook. Hotel rooms without a cooktop are declined. Load-in and quiet hours go on the quote.',
        'Send the address type on the quote form.',
      ],
      faqs: [
        {
          q: 'Will you cook in a hotel room?',
          a: 'Not without a functioning cooktop.',
        },
      ],
      related: [
        { path: '/honolulu', label: 'Private chef Honolulu' },
        { path: '/locations', label: 'Corridor directory' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-waikiki',
      name: 'Dining in Waikīkī',
      h1: 'Waikiki notes — residences with a cooktop, not a hotel room.',
      title: 'Waikiki residence notes — cooktop required | myCHEF',
      description:
        'Short Waikīkī notes: tower residences, freight elevators, cooktops.',
      lede: 'Short Waikīkī notes: tower residences, freight elevators, cooktops.',
      photo: 'dinWaikiki',
      body: [
        'Freight elevators, COIs, and quiet hours are handled in advance. Compact kitchens get a menu that fits the range — not a brochure photo.',
        'If there is no cooktop, we decline. Open the Waikīkī page for the corridor page.',
      ],
      faqs: [
        {
          q: 'Can you impersonate room service?',
          a: 'No. We decline rooms without a functioning kitchen.',
        },
      ],
      related: [
        { path: '/waikiki', label: 'Private chef Waikīkī' },
        { path: '/short-stay', label: 'Short-stay villas' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-kailua',
      name: 'Dining in Kailua',
      h1: 'Kailua notes — 30-day houses, not a weekend drop-in.',
      title: 'Kailua kitchen notes — 30-day houses, not a weekend drop-in | myCHEF',
      description:
        'Short Kailua notes: windward 30-day estates, family weeks.',
      lede: 'Short Kailua notes: windward 30-day estates, family weeks.',
      photo: 'dinKailua',
      body: [
        'Windward 30-day-estate market. Multi-day packages, not weekend tourist drop-ins. Galley kitchens are common; we say so on the quote.',
        'Visitor dinners that actually have a stove sit on the Kailua / Lanikai page.',
        'Send the address and the stay length on the quote form. A one-night tourist dinner in a house without a range is declined.',
      ],
      faqs: [
        {
          q: 'Can you drop in for Saturday only?',
          a: 'Sometimes, if the kitchen holds it. Month-long estates are the usual fit. Send the dates.',
        },
      ],
      related: [
        { path: '/kailua', label: 'Private chef Kailua' },
        { path: '/kamaaina', label: 'Kamaʻāina line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-north-shore',
      name: 'Dining on the North Shore',
      h1: 'North Shore notes — Turtle Bay drive, written on the quote.',
      title: 'North Shore kitchen notes — Turtle Bay drive, written | myCHEF',
      description:
        'Short Oahu North Shore notes: surcharge drive, dedicated chef days.',
      lede: 'Short Oahu North Shore notes: surcharge drive, dedicated chef days.',
      photo: 'dinNorthShore',
      body: [
        'Surcharge zone. Sixty to ninety minutes from town. Dedicated chef days — not stacked with a Kahala lunch.',
        'Surf season books early. We still need a cooktop. Open the North Shore page for the corridor page.',
      ],
      faqs: [
        {
          q: 'Is the drive hidden in the menu?',
          a: 'No. It prints as its own line.',
        },
      ],
      related: [
        { path: '/north-shore', label: 'Private chef North Shore' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-kahala',
      name: 'Dining in Kahala',
      h1: 'Kahala notes — Gold Coast dining rooms that actually cook.',
      title: 'Kahala kitchen notes — Gold Coast dining rooms | myCHEF',
      description:
        'Short Kahala notes: Gold Coast dining rooms, resident and celebration tables.',
      lede: 'Short Kahala notes: Gold Coast dining rooms, resident and celebration tables.',
      photo: 'dinKahala',
      body: [
        'Gold Coast houses with real dining rooms. Weekly kamaʻāina tables and celebration dinners of 4–15. Hotel suites without a cooktop stay declined.',
        'Load-in is confirmed in writing.',
      ],
      faqs: [
      ],
      related: [
        { path: '/kahala', label: 'Private chef Kahala' },
        { path: '/gold-coast', label: 'Gold Coast estates' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-ko-olina',
      name: 'Dining in Ko Olina',
      h1: 'Ko Olina notes — villa weeks, not a one-off tourist dinner.',
      title: 'Ko Olina kitchen notes — villa weeks, not a one-off | myCHEF',
      description:
        'Short Ko Olina notes: legal short-stay villa weeks, west-side provisioning.',
      lede: 'Short Ko Olina notes: legal short-stay villa weeks, west-side provisioning.',
      photo: 'dinKoOlina',
      body: [
        'West-side legal short-stay villas. Multi-day packages lead. Provisioning stays west-side — not a town round-trip dressed up as a week.',
        '3–7 day villa weeks, families, celebration stays. A one-off tourist dinner in a house without a range is the wrong product.',
        'Open the Ko Olina page for the corridor page. Open the Stay Chef page if the week is the product.',
      ],
      faqs: [
      ],
      related: [
        { path: '/ko-olina', label: 'Private chef Ko Olina' },
        { path: '/short-stay', label: 'Short-stay villas' },
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
      ],
    },
    {
      slug: 'grocery-at-cost',
      name: 'Groceries at cost',
      h1: 'Oahu grocery line — shopped the day of, billed at cost.',
      title: 'Oahu groceries billed at cost — receipts on the quote | myCHEF',
      description:
        'Oahu groceries print at cost with receipts.',
      lede: 'Oahu groceries billed at cost: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogGroceryOahu',
      body: [
        'We shop the day of service. Groceries print at cost with receipts. They are not swallowed by the CORE band on a Kahala or Ko Olina night.',
        'Alcohol is a different line. The written quote is the contract.',
      ],
      faqs: [
        {
          q: 'Is there a grocery markup?',
          a: 'No. Cost plus receipts. Open the quote form — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Oahu rate card' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'wine-and-alcohol',
      name: 'Wine and alcohol',
      h1: 'Oahu wine and spirits — Kahala pours as their own line.',
      title: 'Oahu wine and spirits — Kahala pours as their own line | myCHEF',
      description:
        'Oahu wine, beer, and spirits never hide inside the dinner band.',
      lede: 'Oahu wine, beer, and spirits never hide inside the dinner band.',
      photo: 'blogWineOahu',
      body: [
        'Bring your own, or we quote a separate pour. Wine, beer, and spirits never hide inside the CORE band on a Gold Coast night.',
        'This piece is the alcohol line on the quote, not the person pouring it.',
      ],
      faqs: [
        {
          q: 'Can you bury wine in the menu price?',
          a: 'No. Open our journal note on What is included — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'weather-backup',
      name: 'Wet-weather backup',
      h1: 'Oahu lawn tables get a covered backup in writing.',
      title: 'Oahu lawn tables get a covered backup in writing | myCHEF',
      description:
        'Oahu outdoor tables get a written wet-weather backup before the day.',
      lede: 'Oahu outdoor tables get a written wet-weather backup before the day.',
      photo: 'blogWeatherOahu',
      body: [
        'Outdoor tables on the Gold Coast and Ko Olina lawns always have a written indoor backup. We do not discover rain at 4 p.m.',
        'North Shore wind is part of the dedicated-day plan. The backup is a room, not a tent we do not own.',
        'Send the address type on the quote form. If the house has no covered fallback, we say so before a deposit.',
      ],
      faqs: [
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/gold-coast', label: 'Gold Coast houses' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'sourcing-honesty',
      name: 'Sourcing honesty',
      h1: 'Oahu sourcing — most food still arrives by ship. We say so.',
      title: 'Oahu sourcing honesty — most food still arrives by ship | myCHEF',
      description:
        'Oahu sourcing honesty: Hawaiʻi still imports most of its food. Named farms only after written verification.',
      lede: 'Oahu sourcing honesty: Hawaiʻi still imports most of its food. Named farms only after written verification.',
      photo: 'blogSourceOahu',
      body: [
        'Hawaiʻi still imports most of its food. We cook what the shop and the boat actually hold that day. We do not invent a “farm-to-table” brand.',
        'Named farms only after written verification. Fish is named as food, not décor. The sample on the menus page is an example, not a standing carte.',
      ],
      faqs: [
        {
          q: 'Will you print a farm name on the menu?',
          a: 'Only after written verification. Otherwise the ingredient is named as food — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/menus', label: 'How a menu is written' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'cleanup-standard',
      name: 'Cleanup standard',
      h1: 'Oahu cleanup — Kahala kitchens left cleaner than we found them.',
      title: 'Oahu cleanup — Kahala kitchens left cleaner than we found them | myCHEF',
      description:
        'Oahu cleanup standard: shop, cook, serve, leave the kitchen cleaner.',
      lede: 'Oahu cleanup standard: shop, cook, serve, leave the kitchen cleaner.',
      photo: 'blogCleanupOahu',
      body: [
        'Cleanup is in. We do not leave a Gold Coast kitchen as we found it. That is the standard, not an add-on.',
        'Rentals and venue fees still print as their own lines. Cleanup is not a rental. Open our journal note on What is included for the split.',
      ],
      faqs: [
        {
          q: 'Is cleanup extra?',
          a: 'No. It is in. Open the quote form — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'condo-load-in',
      name: 'Condo load-in',
      h1: 'Oahu condo load-in — freight elevators and quiet hours in writing.',
      title: 'Oahu condo load-in — freight elevators and quiet hours in writing | myCHEF',
      description:
        'Oahu condo load-in: freight elevators, COIs, quiet hours.',
      lede: 'Oahu condo load-in: freight elevators, COIs, quiet hours.',
      photo: 'blogCondoOahu',
      body: [
        'Freight elevators, COIs, and quiet hours are handled in advance on towers. We do not discover building rules at 4 p.m.',
        'Hotel rooms without a cooktop are still declined. A tower residence with a range is the product. Send the building type on the quote form.',
        'Kakaʻako and downtown pied-à-terres inherit the same load-in honesty. Compact kitchens get a menu that fits the range.',
      ],
      faqs: [
        {
          q: 'Do you need a COI?',
          a: 'When the building requires one, we handle it in writing before the night — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/waikiki', label: 'Private chef Waikīkī' },
        { path: '/blog/dining-in-waikiki', label: 'Waikīkī kitchen notes' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'family-reunions',
      name: 'Family reunions',
      h1: 'Oahu family reunions — Gold Coast houses, not a ballroom.',
      title: 'Oahu family reunions — Gold Coast houses, not a ballroom | myCHEF',
      description:
        'Oahu family reunions in houses we actually staff.',
      lede: 'Oahu family reunions: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogReunionOahu',
      body: [
        'Dinners 2–15, receptions about 10–75. Larger formats are quoted, not promised. HCC citywides are closed and are not our product.',
        'Kids’ plates are planned with the adults’ menu. Multi-day weeks sit on the Stay Chef page.',
      ],
      faqs: [
        {
          q: 'Can you staff a ballroom reunion?',
          a: 'No. We staff houses. Open the guest-count guide — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/events', label: 'Events' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'photoshoot-catering',
      name: 'Production meals',
      h1: 'Oahu production meals — residences, not a craft-service tent.',
      title: 'Oahu production meals — residences, not a craft-service tent | myCHEF',
      description:
        'Oahu crew and production meals in residences with kitchens.',
      lede: 'Oahu crew and production meals in residences with kitchens.',
      photo: 'blogShootOahu',
      body: [
        'Film and stills crews in residences are the same staffed-room product as a villa event. We do not staff craft-service tents or convention holds.',
        'Identical plates, one dietary note on the quote. Guest counts we staff stay published.',
      ],
      faqs: [
        {
          q: 'Can you run craft service on a lot?',
          a: 'No. Residences with kitchens.',
        },
      ],
      related: [
        { path: '/catering', label: 'Catering' },
        { path: '/conventions', label: 'Conventions' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'proposal-dinners',
      name: 'Proposal dinners',
      h1: 'Oahu proposal dinners — Kahala tables for two, not a restaurant hold.',
      title: 'Oahu proposal dinners — Kahala tables for two, not a restaurant hold | myCHEF',
      description:
        'Oahu proposal dinners in a house kitchen.',
      lede: 'Oahu proposal dinners: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogProposalOahu',
      body: [
        'A proposal is two seats in a kitchen we can actually staff. We do not hold a restaurant table. We do not stage a public ask on a Waikīkī lawn.',
      ],
      faqs: [
        {
          q: 'Can you hold a restaurant table?',
          a: 'No. We cook in the house. Open the what-we-don’t-do list — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Honeymoon dinners' },
        { path: '/fine-dining/romantic-dinner', label: 'Romantic dinner' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'estate-logistics',
      name: 'Estate logistics',
      h1: 'Oahu estate logistics — Gold Coast driveways, generators, and the gate.',
      title: 'Oahu estate logistics — Gold Coast driveways, generators, and the gate | myCHEF',
      description:
        'Oahu estate logistics: driveways, generators, gates.',
      lede: 'Oahu estate logistics: driveways, generators, gates.',
      photo: 'blogEstateOahu',
      body: [
        'Estate nights need a driveway we can actually use, a gate code, and whether a generator will run the range. We do not discover those at 4 p.m.',
        'Gold Coast rooms sit on the Gold Coast page. Send the access packet on the quote form.',
        'A house without a functioning cooktop is still declined. Logistics do not invent a kitchen.',
      ],
      faqs: [
      ],
      related: [
        { path: '/blog/condo-load-in', label: 'Condo load-in' },
        { path: '/gold-coast', label: 'Gold Coast houses' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'shoulder-season',
      name: 'Shoulder season',
      h1: 'Oahu shoulder dates — April and November still need a written kitchen.',
      title: 'Oahu shoulder dates — April and November still need a written kitchen | myCHEF',
      description:
        'Oahu shoulder dates are not automatic availability.',
      lede: 'Oahu shoulder dates are not automatic availability.',
      photo: 'blogShoulderOahu',
      body: [
        'Shoulder months are quieter, not empty. A Kahala house in April still needs a cooktop, a count, and a written quote. We do not invent a last-minute roster because the calendar looks open.',
      ],
      faqs: [
        {
          q: 'Are April nights walk-in?',
          a: 'No. Send the quote form. We still write the kitchen — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/journal/how-far-ahead-to-book', label: 'How far ahead' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-lanikai',
      name: 'Dining in Lanikai',
      h1: 'Lanikai notes — 30-day houses, quieter than Kailua.',
      title: 'Lanikai kitchen notes — 30-day houses, quieter than Kailua | myCHEF',
      description:
        'Short Lanikai notes: quieter 30-day beach houses.',
      lede: 'Lanikai kitchen notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
      photo: 'dinLanikai',
      body: [
        'Same 30-day-estate rule as Kailua, quieter beach-house inventory. Galley kitchens are common; we say so on the quote. Weekend tourist drop-ins are declined.',
        'This piece is the kitchen note.',
        'Send the address and the stay length on the quote form. A one-night tourist dinner without a range is still declined.',
      ],
      faqs: [
      ],
      related: [
        { path: '/lanikai', label: 'Private chef Lanikai' },
        { path: '/kailua', label: 'Private chef Kailua' },
        { path: '/blog/dining-in-kailua', label: 'Kailua kitchen notes' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-hawaii-kai',
      name: 'Dining in Hawaiʻi Kai',
      h1: 'Hawaiʻi Kai notes — east Honolulu households, not a villa.',
      title: 'Hawaiʻi Kai kitchen notes — east Honolulu households | myCHEF',
      description:
        'Short Hawaiʻi Kai notes: resident entertaining more than tourist villas.',
      lede: 'Short Hawaiʻi Kai notes: resident entertaining more than tourist villas.',
      photo: 'dinHawaiiKai',
      body: [
        'East Honolulu households. Resident entertaining more than tourist villas. Traffic is planned into the chef day. A cooktop is still required.',
        'This piece is the kitchen note. Weekly resident service stays on the kamaʻāina page.',
      ],
      faqs: [
      ],
      related: [
        { path: '/hawaii-kai', label: 'Private chef Hawaiʻi Kai' },
        { path: '/honolulu', label: 'Private chef Honolulu' },
        { path: '/kamaaina', label: 'Kamaʻāina line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-diamond-head',
      name: 'Dining at Diamond Head',
      h1: 'Diamond Head notes — Gold Coast-adjacent rooms, not the Gold Coast page.',
      title: 'Diamond Head kitchen notes — Gold Coast-adjacent rooms | myCHEF',
      description:
        'Short Diamond Head notes: adjacent estates with real dining rooms.',
      lede: 'Short Diamond Head notes: adjacent estates with real dining rooms.',
      photo: 'dinDiamondHead',
      body: [
        'Gold Coast-adjacent estates and residences with real dining rooms. Building rules vary; we confirm load-in in writing. Celebration tables of 4–15.',
        'This piece is the kitchen note.',
        'Hotel suites without a cooktop stay declined. Send the building type on the quote form.',
      ],
      faqs: [
      ],
      related: [
        { path: '/diamond-head', label: 'Private chef Diamond Head' },
        { path: '/kahala', label: 'Private chef Kahala' },
        { path: '/gold-coast', label: 'Gold Coast estates' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-kakaako',
      name: 'Dining in Kakaʻako',
      h1: 'Kakaʻako notes — compact tower ranges, not a rooftop we do not own.',
      title: 'Kakaʻako kitchen notes — compact tower ranges | myCHEF',
      description:
        'Short Kakaʻako notes: tower residences, compact kitchens.',
      lede: 'Short Kakaʻako notes: tower residences, compact kitchens.',
      photo: 'dinKakaako',
      body: [
        'Tower residences. Kitchens are often compact; menus adapt. Freight elevators and quiet hours are handled in writing before the night.',
        'This piece is the kitchen note. We do not sell a rooftop we do not control.',
        'A unit without a functioning cooktop is declined. Send the building packet on the quote form.',
      ],
      faqs: [
        {
          q: 'Can you cook on a rooftop?',
          a: 'Not a rooftop we do not own. A tower residence with a range. Open the quote form.',
        },
      ],
      related: [
        { path: '/kakaako', label: 'Private chef Kakaʻako' },
        { path: '/honolulu', label: 'Private chef Honolulu' },
        { path: '/blog/condo-load-in', label: 'Condo load-in' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-downtown',
      name: 'Dining downtown',
      h1: 'Downtown notes — pied-à-terre ranges, not an HCC takeover.',
      title: 'Downtown Honolulu kitchen notes — pied-à-terre ranges, not HCC | myCHEF',
      description:
        'Short downtown Honolulu notes: compact kitchens, loading, not restaurant takeovers.',
      lede:
        'The conventions note says HCC citywides are closed.',
      photo: 'dinDowntown',
      body: [
        'Pied-à-terre kitchens and private dining rooms — not restaurant takeovers. Parking and loading are the constraint, not distance. Small celebrations and executive dinners off HCC.',
        'This piece is the kitchen note. HCC citywides stay closed through 2027. A unit without a cooktop is declined.',
      ],
      faqs: [
        {
          q: 'Can you take over a restaurant?',
          a: 'No.',
        },
      ],
      related: [
        { path: '/downtown', label: 'Private chef Downtown' },
        { path: '/honolulu', label: 'Private chef Honolulu' },
        { path: '/conventions', label: 'Conventions' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-kaneohe',
      name: 'Dining in Kāneʻohe',
      h1: 'Kāneʻohe notes — quieter windward town, published surcharge.',
      title: 'Kāneʻohe kitchen notes — quieter windward town, published surcharge | myCHEF',
      description:
        'Short Kāneʻohe notes: quieter than Kailua, still a drive.',
      lede: 'Short Kāneʻohe notes: quieter than Kailua, still a drive.',
      photo: 'dinKaneohe',
      body: [
        'Windward town — quieter than Kailua, still a drive from town. Published surcharge, quoted with the menu. Household dinners and multi-day stays.',
        'This piece is the kitchen note. A cooktop is still required.',
        'Send the address on the quote form. We will not hide the drive inside the menu.',
      ],
      faqs: [
        {
          q: 'Is the drive included?',
          a: 'No. It prints as a surcharge line.',
        },
      ],
      related: [
        { path: '/kaneohe', label: 'Private chef Kāneʻohe' },
        { path: '/kailua', label: 'Private chef Kailua' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-ewa',
      name: 'Dining in ʻEwa',
      h1: 'ʻEwa notes — leeward households, Ko Olina provisioning.',
      title: 'ʻEwa kitchen notes — leeward households, Ko Olina provisioning | myCHEF',
      description:
        'Short ʻEwa / Kapolei notes: leeward residential, west-side base.',
      lede: 'Short ʻEwa / Kapolei notes: leeward residential, west-side base.',
      photo: 'dinEwa',
      body: [
        'Leeward residential. Closer to Ko Olina provisioning than to Waikīkī. West-side base. No town surcharge. Resident households and west-side villa overflow.',
        'This piece is the kitchen note. A cooktop is still required.',
      ],
      faqs: [
      ],
      related: [
        { path: '/ewa', label: 'Private chef ʻEwa' },
        { path: '/ko-olina', label: 'Private chef Ko Olina' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'named-farms',
      name: 'Named farms',
      h1: 'Oahu farm names — Kahuku and Waimānalo only after written verification.',
      title: 'Oahu farm names — Kahuku and Waimānalo only after verification | myCHEF',
      description:
        'Oahu farm names print on the invoice only after written verification.',
      lede: 'Oahu farm names print on the invoice only after written verification.',
      photo: 'blogFarmsOahu',
      body: [
        'A draft that names a farm without a paper trail is a brochure. We will not print Kahuku greens or a Waimānalo citrus grower until the producer is verified in writing.',
        'Fish is a different honesty note.',
      ],
      faqs: [
        {
          q: 'Will you invent a farm for the menu card?',
          a: 'No. Unverified produce is named as food — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'fish-species',
      name: 'Fish species',
      h1: 'Oahu fish names — the species on the Honolulu invoice, not a guess.',
      title: 'Oahu fish names — the species on the Honolulu invoice | myCHEF',
      description:
        'Oahu fish is named as the species on the invoice.',
      lede: 'Oahu fish names: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogFishOahu',
      body: [
        'The Honolulu invoice names the fish we purchased that morning. We will not print a species we did not buy, and we will not dress a grocery-case fillet as a pier story.',
        'Produce names are a different note.',
      ],
      faqs: [
        {
          q: 'Will you guess the species for the menu card?',
          a: 'No. Unverified fish is named as fish — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/blog/named-farms', label: 'Named farms' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'coffee-labeling',
      name: 'Coffee labeling',
      h1: 'Oahu coffee names — Honolulu invoices still follow origin law.',
      title: 'Oahu coffee names — Honolulu invoices still follow origin law | myCHEF',
      description:
        'Oahu coffee names on the invoice follow origin law even off-island.',
      lede: 'Oahu coffee names on the invoice follow origin law even off-island.',
      photo: 'blogCoffeeOahu',
      body: [
        'A Kahala menu that prints a coffee name without a lot is a brochure. Act 198 still governs origin language even when we cook on Oahu. Unverified coffee is coffee.',
        'Peak months are a different note.',
      ],
      faqs: [
        {
          q: 'Will you print Kona coffee on an Oahu menu?',
          a: 'When the lot is documented. Otherwise it is coffee — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/blog/named-farms', label: 'Named farms' },
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'peak-season',
      name: 'Peak season',
      h1: 'Oahu peak months — Gold Coast and Ko Olina weeks fill first.',
      title: 'Oahu December through March — Gold Coast weeks fill first | myCHEF',
      description:
        'Oahu December–March: Gold Coast and Ko Olina weeks fill first.',
      lede: 'Oahu December–March: Gold Coast and Ko Olina weeks fill first.',
      photo: 'blogPeakOahu',
      body: [
        'December through March on this island is not a generic Hawaiʻi peak essay. Kahala and Ko Olina weeks move first. A Kailua Tuesday is a different clock. Convention-week access still is on the conventions note.',
        'How far ahead to send the form is on our journal note on How far ahead.',
      ],
      faqs: [
      ],
      related: [
        { path: '/journal/how-far-ahead-to-book', label: 'How far ahead' },
        { path: '/blog/shoulder-season', label: 'Shoulder dates' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'no-fake-reviews',
      name: 'No fake reviews',
      h1: 'Oahu has no star ratings yet. We will not invent them.',
      title: 'Why Oahu has no star ratings yet — zero guest reviews | myCHEF',
      description:
        'Why Oahu has no Hawaiʻi guest reviews yet: they publish after verified events.',
      lede: 'Why Oahu has no Hawaiʻi guest reviews yet: they publish after verified events.',
      photo: 'blogReviewsOahu',
      body: [
        'Hawaiʻi guest reviews on this site: none yet. They go up after verified events — never bought, never written here. Proof today is the rate card, the sample menu, cleanup, and a written quote.',
      ],
      faqs: [
      ],
      related: [
        { path: '/trust', label: 'Honesty register' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    ...EXTRA_BLOG_NOTES.oahu,
  ],
  maui: [
    {
      slug: 'dining-in-wailea',
      name: 'Dining in Wailea',
      h1: 'A Wailea table — kitchen notes, not the corridor page.',
      title: 'Wailea kitchen notes — villa table, not the corridor page | myCHEF',
      description:
        'Short Wailea kitchen notes: resort residences with real kitchens.',
      lede: 'Short Wailea kitchen notes: resort residences with real kitchens.',
      photo: 'dinWailea',
      body: [
        'Hotel-zoned residences with kitchens. December–March books early. We shop South Maui the day of service when the kitchen holds the draft.',
        'Send the address on the quote form.',
      ],
      faqs: [
        {
          q: 'Is this a resort chef’s table?',
          a: 'No. Those seat you with strangers. Ours is private, in your kitchen.',
        },
      ],
      related: [
        { path: '/wailea', label: 'Private chef Wailea' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-kaanapali',
      name: 'Dining in Kāʻanapali',
      h1: 'Kaanapali notes — West Maui timing written before arrival.',
      title: 'Kaanapali kitchen notes — West Maui timing on paper | myCHEF',
      description:
        'Short Kāʻanapali notes: West Maui traffic planned into arrival.',
      lede: 'Short Kāʻanapali notes: West Maui traffic planned into arrival.',
      photo: 'dinKaanapali',
      body: [
        'West Maui, named honestly. Same CORE band as Wailea. Traffic is planned into arrival — not a surprise line.',
        'Resort residences with kitchens. Family Feast and the bar add-on stack on the same quote when the room holds them.',
      ],
      faqs: [
      ],
      related: [
        { path: '/kaanapali', label: 'Private chef Kāʻanapali' },
        { path: '/west-maui', label: 'West Maui timing' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-lahaina',
      name: 'Dining near Lahaina',
      h1: 'Lahaina search notes — we cook next door, in kitchens that work.',
      title: 'Lahaina search notes — we cook next door | myCHEF',
      description:
        'Short Lahaina-search notes: West Maui residences with kitchens.',
      lede: 'Short Lahaina-search notes: West Maui residences with kitchens.',
      photo: 'dinLahaina',
      body: [
        'People search Lahaina. We cook in Kāʻanapali, Nāpili, and Kapalua residences with kitchens. We do not market a luxury-dining destination the town is not.',
        'If the kitchen works, we book it. If it does not, we say so before a deposit. Moving from Wailea to Lahaina after a deposit can change the travel line.',
        'Open the Lahaina / West Maui page for the corridor page. Open the West Maui page for Saturday timing.',
      ],
      faqs: [
        {
          q: 'Can you come to a Lahaina address?',
          a: 'Tell us the exact property. We serve West Maui residences with kitchens.',
        },
      ],
      related: [
        { path: '/lahaina', label: 'Private chef Lahaina' },
        { path: '/west-maui', label: 'West Maui timing' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-kihei',
      name: 'Dining in Kīhei',
      h1: 'Kihei notes — family tables, not a Wailea clone page.',
      title: 'Kihei kitchen notes — family tables, not a Wailea clone | myCHEF',
      description:
        'Short Kīhei notes: condos and vacation homes with kitchens.',
      lede: 'Short Kīhei notes: condos and vacation homes with kitchens.',
      photo: 'dinKihei',
      body: [
        'Service-led, not luxury-led. Condos and vacation homes with kitchens. Kids’ plates are normal here.',
        'The menu band is the Maui rate card. There is no “discount geography.” Kitchen constraints are stated on the quote.',
      ],
      faqs: [
        {
          q: 'Is Kīhei cheaper than Wailea?',
          a: 'The band is the Maui rate card. The kitchen is the constraint.',
        },
      ],
      related: [
        { path: '/kihei', label: 'Private chef Kīhei' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-kapalua',
      name: 'Dining in Kapalua',
      h1: 'Kapalua notes — dinners for two in the house.',
      title: 'Kapalua kitchen notes — dinners for two in the house | myCHEF',
      description:
        'Short Kapalua notes: northwest estates, dinners for two.',
      lede: 'Short Kapalua notes: northwest estates, dinners for two.',
      photo: 'dinKapalua',
      body: [
        'Northwest Maui estates. Date Night is the product this bay was built for. Wine is yours or quoted separately — never buried.',
        'Wedding-week satellite dinners sit on the wedding week page. This piece is one evening in the house.',
        'Florals and photography are add-on lines. Open the Kapalua page for the corridor page.',
      ],
      faqs: [
        {
          q: 'Dinner for two?',
          a: 'Yes — cooked in the villa.',
        },
      ],
      related: [
        { path: '/kapalua', label: 'Private chef Kapalua' },
        { path: '/west-maui', label: 'West Maui timing' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-makena',
      name: 'Dining in Makena',
      h1: 'Makena notes — quieter South Maui, wet-weather backup written.',
      title: 'Makena kitchen notes — quieter South Maui inventory | myCHEF',
      description:
        'Short Makena notes: south of Wailea, still base zone, outdoor backup.',
      lede: 'Short Makena notes: south of Wailea, still base zone, outdoor backup.',
      photo: 'dinMakena',
      body: [
        'South of Wailea, still base zone. Same CORE band. Outdoor tables always have a written wet-weather plan.',
        'Family weeks and celebration dinners. Not a surcharge corridor. Not a Wailea clone.',
        'Open the Makena page for the corridor page. Open the South Maui page.',
      ],
      faqs: [
        {
          q: 'Outdoor dinner?',
          a: 'Yes, with a written wet-weather plan before the day.',
        },
      ],
      related: [
        { path: '/makena', label: 'Private chef Makena' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'grocery-at-cost',
      name: 'Groceries at cost',
      h1: 'Maui grocery line — South Maui shop, billed at cost.',
      title: 'Maui groceries billed at cost — receipts on the quote | myCHEF',
      description:
        'Maui groceries print at cost with receipts.',
      lede: 'Maui groceries billed at cost: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogGroceryMaui',
      body: [
        'We shop the day of service. Groceries print at cost with receipts. They are not swallowed by the CORE band on a Wailea or Kapalua night.',
        'Alcohol is a different line. Saturday West Maui arrival is planned, not hidden.',
      ],
      faqs: [
        {
          q: 'Is there a grocery markup?',
          a: 'No. Cost plus receipts. Open the quote form — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Maui rate card' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'wine-and-alcohol',
      name: 'Wine and alcohol',
      h1: 'Maui wine and spirits — Wailea pours as their own line.',
      title: 'Maui wine and spirits — Wailea pours as their own line | myCHEF',
      description:
        'Maui wine, beer, and spirits never hide inside the dinner band.',
      lede: 'Maui wine, beer, and spirits never hide inside the dinner band.',
      photo: 'blogWineMaui',
      body: [
        'Bring your own, or we quote a separate pour. Wine, beer, and spirits never hide inside the CORE band on a Wailea night.',
        'This piece is the alcohol line on the quote, not the person pouring it.',
      ],
      faqs: [
        {
          q: 'Can you bury wine in the menu price?',
          a: 'No. Open our journal note on What is included — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'weather-backup',
      name: 'Wet-weather backup',
      h1: 'Maui lānai tables get a covered backup in writing.',
      title: 'Maui lānai tables get a covered backup in writing | myCHEF',
      description:
        'Maui outdoor tables get a written wet-weather backup before the day.',
      lede: 'Maui outdoor tables get a written wet-weather backup before the day.',
      photo: 'blogWeatherMaui',
      body: [
        'Outdoor tables on South Maui and West Maui always have a written indoor backup. We do not discover rain at 4 p.m.',
        'Makena outdoor setups inherit the same rule. The backup is a room, not a tent we do not own.',
        'Send the address type on the quote form. If the house has no covered fallback, we say so before a deposit.',
      ],
      faqs: [
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/makena', label: 'Private chef Makena' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'sourcing-honesty',
      name: 'Sourcing honesty',
      h1: 'Maui sourcing — most food still arrives by ship. We say so.',
      title: 'Maui sourcing honesty — most food still arrives by ship | myCHEF',
      description:
        'Maui sourcing honesty: Hawaiʻi still imports most of its food. Named farms only after written verification.',
      lede: 'Maui sourcing honesty: Hawaiʻi still imports most of its food. Named farms only after written verification.',
      photo: 'blogSourceMaui',
      body: [
        'Hawaiʻi still imports most of its food. We cook what the shop and the boat actually hold that day. We do not invent a “farm-to-table” brand for Wailea.',
        'Named farms only after written verification. Fish is named as food, not décor. Upcountry is a surcharge zone even when the draft names a producer.',
      ],
      faqs: [
        {
          q: 'Will you print a farm name on the menu?',
          a: 'Only after written verification. Otherwise the ingredient is named as food — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/menus', label: 'How a menu is written' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'cleanup-standard',
      name: 'Cleanup standard',
      h1: 'Maui cleanup — Wailea kitchens left cleaner than we found them.',
      title: 'Maui cleanup — Wailea kitchens left cleaner than we found them | myCHEF',
      description:
        'Maui cleanup standard: shop, cook, serve, leave the kitchen cleaner.',
      lede: 'Maui cleanup standard: shop, cook, serve, leave the kitchen cleaner.',
      photo: 'blogCleanupMaui',
      body: [
        'Cleanup is in. We do not leave a South Maui kitchen as we found it. That is the standard, not an add-on.',
        'Rentals and venue fees still print as their own lines. Cleanup is not a rental. Open our journal note on What is included for the split.',
      ],
      faqs: [
        {
          q: 'Is cleanup extra?',
          a: 'No. It is in. Open the quote form — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'condo-load-in',
      name: 'Condo load-in',
      h1: 'Maui condo load-in — South Maui quiet hours in writing.',
      title: 'Maui condo load-in — South Maui quiet hours in writing | myCHEF',
      description:
        'Maui condo load-in: freight elevators, COIs, quiet hours.',
      lede: 'Maui condo load-in: freight elevators, COIs, quiet hours.',
      photo: 'blogCondoMaui',
      body: [
        'Freight elevators, COIs, and quiet hours are handled in advance on towers. We do not discover building rules at 4 p.m.',
        'Hotel rooms without a cooktop are still declined. A tower residence with a range is the product. Send the building type on the quote form.',
        'West Maui stacks inherit the same load-in honesty. Compact kitchens get a menu that fits the range.',
      ],
      faqs: [
        {
          q: 'Do you need a COI?',
          a: 'When the building requires one, we handle it in writing before the night — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/kihei', label: 'Private chef Kīhei' },
        { path: '/blog/dining-in-kihei', label: 'Kīhei kitchen notes' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'family-reunions',
      name: 'Family reunions',
      h1: 'Maui family reunions — South Maui houses, not a ballroom.',
      title: 'Maui family reunions — South Maui houses, not a ballroom | myCHEF',
      description:
        'Maui family reunions in houses we actually staff.',
      lede: 'Maui family reunions: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogReunionMaui',
      body: [
        'Dinners 2–15, receptions about 10–75. Larger formats are quoted, not promised. Resort ballrooms are not our product.',
        'Kids’ plates are planned with the adults’ menu. Multi-day weeks sit on the Stay Chef page.',
      ],
      faqs: [
        {
          q: 'Can you staff a ballroom reunion?',
          a: 'No. We staff houses. Open the guest-count guide — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/events', label: 'Events' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'photoshoot-catering',
      name: 'Production meals',
      h1: 'Maui production meals — villas, not a craft-service tent.',
      title: 'Maui production meals — villas, not a craft-service tent | myCHEF',
      description:
        'Maui crew and production meals in villas with kitchens.',
      lede: 'Maui crew and production meals in villas with kitchens.',
      photo: 'blogShootMaui',
      body: [
        'Film and stills crews in villas are the same staffed-room product as a family event. We do not staff craft-service tents or resort holds.',
        'Identical plates, one dietary note on the quote. Guest counts we staff stay published.',
      ],
      faqs: [
        {
          q: 'Can you run craft service on a lot?',
          a: 'No. Villas with kitchens.',
        },
      ],
      related: [
        { path: '/catering', label: 'Catering' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'proposal-dinners',
      name: 'Proposal dinners',
      h1: 'Maui proposal dinners — Wailea tables for two, not a restaurant hold.',
      title: 'Maui proposal dinners — Wailea tables for two, not a restaurant hold | myCHEF',
      description:
        'Maui proposal dinners in a villa kitchen.',
      lede: 'Maui proposal dinners: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogProposalMaui',
      body: [
        'A proposal is two seats in a kitchen we can actually staff. We do not hold a restaurant table. We do not stage a public ask on a resort lawn.',
      ],
      faqs: [
        {
          q: 'Can you hold a restaurant table?',
          a: 'No. We cook in the house. Open the what-we-don’t-do list — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Honeymoon dinners' },
        { path: '/fine-dining/romantic-dinner', label: 'Romantic dinner' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'estate-logistics',
      name: 'Estate logistics',
      h1: 'Maui estate logistics — Wailea driveways, generators, and the gate.',
      title: 'Maui estate logistics — Wailea driveways, generators, and the gate | myCHEF',
      description:
        'Maui estate logistics: driveways, generators, gates.',
      lede: 'Maui estate logistics: driveways, generators, gates.',
      photo: 'blogEstateMaui',
      body: [
        'Estate nights need a driveway we can actually use, a gate code, and whether a generator will run the range. We do not discover those at 4 p.m.',
        'South Maui rooms sit on the South Maui page. Send the access packet on the quote form.',
        'A house without a functioning cooktop is still declined. Logistics do not invent a kitchen.',
      ],
      faqs: [
      ],
      related: [
        { path: '/blog/condo-load-in', label: 'Condo load-in' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'shoulder-season',
      name: 'Shoulder season',
      h1: 'Maui shoulder dates — April and November still need a written kitchen.',
      title: 'Maui shoulder dates — April and November still need a written kitchen | myCHEF',
      description:
        'Maui shoulder dates are not automatic availability.',
      lede: 'Maui shoulder dates are not automatic availability.',
      photo: 'blogShoulderMaui',
      body: [
        'Shoulder months are quieter, not empty. A Wailea house in April still needs a cooktop, a count, and a written quote. We do not invent a last-minute roster because the calendar looks open.',
        'Wedding-week houses stay on the wedding week page. This article is the quieter window beside them.',
      ],
      faqs: [
        {
          q: 'Are April nights walk-in?',
          a: 'No. Send the quote form. We still write the kitchen — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/journal/how-far-ahead-to-book', label: 'How far ahead' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-upcountry',
      name: 'Dining Upcountry',
      h1: 'Upcountry notes — elevation surcharge, farms only after verification.',
      title: 'Upcountry kitchen notes — elevation surcharge, verified farms | myCHEF',
      description:
        'Short Upcountry Maui notes: published surcharge, named farms only after written verification.',
      lede: 'Short Upcountry Maui notes: published surcharge, named farms only after written verification.',
      photo: 'dinUpcountry',
      body: [
        'Elevation and drive time. Published surcharge, quoted with the menu. Named farms only after written verification. Outdoor setups inherit a wet-weather backup.',
        'This piece is the kitchen note. Wailea stays the South Maui corridor. This article is why the drive is a line.',
      ],
      faqs: [
        {
          q: 'Will you print a farm name?',
          a: 'Only after written verification. Open our journal note on Sourcing honesty — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/upcountry', label: 'Private chef Upcountry' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-napili',
      name: 'Dining in Nāpili',
      h1: 'Nāpili notes — West Maui houses, never a Lahaina clone.',
      title: 'Nāpili kitchen notes — West Maui houses, never a Lahaina clone | myCHEF',
      description:
        'Short Nāpili notes: West Maui with Kāʻanapali and Kapalua.',
      lede: 'Short Nāpili notes: West Maui with Kāʻanapali and Kapalua.',
      photo: 'dinNapili',
      body: [
        'West Maui with Kāʻanapali and Kapalua — never a Lahaina destination page. Same West Maui timing rules. Villa weeks and small celebrations.',
        'This piece is the kitchen note. Saturday West Maui arrival is planned, not assumed.',
      ],
      faqs: [
        {
          q: 'Is this a Lahaina page?',
          a: 'No. Open the Lahaina / West Maui page for that corridor. This piece is Nāpili.',
        },
      ],
      related: [
        { path: '/napili', label: 'Private chef Nāpili' },
        { path: '/kapalua', label: 'Private chef Kapalua' },
        { path: '/west-maui', label: 'West Maui corridor' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-paia',
      name: 'Dining in Pāʻia',
      h1: 'Pāʻia notes — quote-only North Shore, not a doorway.',
      title: 'Pāʻia kitchen notes — quote-only North Shore, not a doorway | myCHEF',
      description:
        'Short Pāʻia / Haiku notes: quote-only, extended drive.',
      lede: 'Short Pāʻia / Haiku notes: quote-only, extended drive.',
      photo: 'dinPaia',
      body: [
        'North Shore module — quoted with the menu, not a doorway destination page. Extended drive. Estate dinners when the drive is planned, not stacked with Wailea.',
        'This area is quoted per address — we will not publish a flat fee. Send the address on the quote form.',
        'A cooktop is still required. We do not invent a same-day Wailea-plus-Pāʻia chef day.',
      ],
      faqs: [
        {
          q: 'Can you stack this with Wailea the same day?',
          a: 'No. The drive is planned, not stacked. Open the quote form.',
        },
      ],
      related: [
        { path: '/paia', label: 'Private chef Pāʻia' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/wailea', label: 'Private chef Wailea' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-honokowai',
      name: 'Dining in Honokōwai',
      h1: 'Honokōwai notes — West Maui condos, not a Kapalua clone.',
      title: 'Honokōwai kitchen notes — West Maui condos, not a Kapalua clone | myCHEF',
      description:
        'Short Honokōwai notes: residential strip, condo kitchens.',
      lede: 'Short Honokōwai notes: residential strip, condo kitchens.',
      photo: 'dinHonokowai',
      body: [
        'West Maui residential strip between Kāʻanapali and Kapalua. Condo kitchens common. Multi-day chef days more than one-off halo dinners.',
        'This piece is the kitchen note. Compact kitchens get a menu that fits the range. Load-in honesty sits on our journal note on Condo load-in.',
        'Hotel rooms without a cooktop are still declined. Send the building type on the quote form.',
      ],
      faqs: [
      ],
      related: [
        { path: '/honokowai', label: 'Private chef Honokōwai' },
        { path: '/kaanapali', label: 'Private chef Kāʻanapali' },
        { path: '/blog/condo-load-in', label: 'Condo load-in' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-makawao',
      name: 'Dining in Makawao',
      h1: 'Makawao notes — Upcountry town, not the Upcountry surcharge zone.',
      title: 'Makawao kitchen notes — Upcountry town, not the Upcountry surcharge zone | myCHEF',
      description:
        'Short Makawao notes: Upcountry town, elevation surcharge.',
      lede: 'Short Makawao notes: Upcountry town, elevation surcharge.',
      photo: 'dinMakawao',
      body: [
        'Upcountry town. Elevation surcharge applies. Weather can turn on outdoor setups. Retreat houses and estate tables that justify the drive.',
        'This piece is the kitchen note. Named farms only after written verification. A cooktop is still required.',
      ],
      faqs: [
      ],
      related: [
        { path: '/makawao', label: 'Private chef Makawao' },
        { path: '/blog/dining-in-upcountry', label: 'Upcountry kitchen notes' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-waikapu',
      name: 'Dining in Waikapū',
      h1: 'Waikapū notes — central valley estates, not a resort corridor.',
      title: 'Waikapū kitchen notes — central valley estates, not a resort corridor | myCHEF',
      description:
        'Short Waikapū notes: central valley, surcharge from Wailea/West.',
      lede: 'Short Waikapū notes: central valley, surcharge from Wailea/West.',
      photo: 'dinWaikapu',
      body: [
        'Central valley — not a resort corridor. Surcharge for drive time from Wailea or West Maui. Private estates, not visitor condos.',
        'This piece is the kitchen note. We will not stack a Wailea lunch with a Waikapū dinner as one chef day without writing it.',
        'A cooktop is still required. Send the address on the quote form.',
      ],
      faqs: [
        {
          q: 'Is the drive included?',
          a: 'No. It prints as a surcharge.',
        },
      ],
      related: [
        { path: '/waikapu', label: 'Private chef Waikapū' },
        { path: '/wailea', label: 'Private chef Wailea' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'dining-in-haleakala',
      name: 'Dining in Kula',
      h1: 'Haleakalā notes — Kula elevation, temperature changes the chef day.',
      title: 'Haleakalā kitchen notes — Kula elevation, temperature changes the chef day | myCHEF',
      description:
        'Short Haleakalā / Kula notes: high elevation, surcharge.',
      lede: 'Short Haleakalā / Kula notes: high elevation, surcharge.',
      photo: 'dinHaleakala',
      body: [
        'High elevation. Surcharge. Temperature and drive both change the chef day. Retreat and estate dinners. Named farms only with verification.',
        'This piece is the kitchen note. We will not print a farm name we have not verified.',
        'A cooktop is still required. Outdoor setups inherit a wet-weather backup. Send the address on the quote form.',
      ],
      faqs: [
      ],
      related: [
        { path: '/haleakala', label: 'Private chef Kula' },
        { path: '/blog/dining-in-upcountry', label: 'Upcountry kitchen notes' },
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'named-farms',
      name: 'Named farms',
      h1: 'Maui farm names — Kula and Hāna only after written verification.',
      title: 'Maui farm names — Kula and Hāna only after verification | myCHEF',
      description:
        'Maui farm names print on the invoice only after written verification.',
      lede: 'Maui farm names print on the invoice only after written verification.',
      photo: 'blogFarmsMaui',
      body: [
        'A draft that names a farm without a paper trail is a brochure. We will not print a Kula grower or a Hāna citrus name until the producer is verified in writing.',
        'Fish is a different honesty note.',
      ],
      faqs: [
        {
          q: 'Will you invent an Upcountry farm for the menu card?',
          a: 'No. Unverified produce is named as food — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'fish-species',
      name: 'Fish species',
      h1: 'Maui fish names — the species on the Wailea invoice, not a guess.',
      title: 'Maui fish names — the species on the Wailea invoice | myCHEF',
      description:
        'Maui fish is named as the species on the invoice.',
      lede: 'Maui fish names: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogFishMaui',
      body: [
        'The Wailea invoice names the fish we purchased that morning. We will not print a species we did not buy, and we will not dress a grocery-case fillet as a pier story.',
        'Produce names are a different note.',
      ],
      faqs: [
        {
          q: 'Will you guess the species for the menu card?',
          a: 'No. Unverified fish is named as fish — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/blog/named-farms', label: 'Named farms' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'coffee-labeling',
      name: 'Coffee labeling',
      h1: 'Maui coffee names — Wailea invoices still follow origin law.',
      title: 'Maui coffee names — Wailea invoices still follow origin law | myCHEF',
      description:
        'Maui coffee names on the invoice follow origin law even off-island.',
      lede: 'Maui coffee names on the invoice follow origin law even off-island.',
      photo: 'blogCoffeeMaui',
      body: [
        'A Wailea menu that prints a coffee name without a lot is a brochure. Origin law still governs even when we cook on Maui. Unverified coffee is coffee.',
        'Peak months are a different note.',
      ],
      faqs: [
        {
          q: 'Will you print Kona coffee on a Maui menu?',
          a: 'When the lot is documented. Otherwise it is coffee — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/blog/named-farms', label: 'Named farms' },
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'peak-season',
      name: 'Peak season',
      h1: 'Maui peak months — Wailea and wedding-week houses fill first.',
      title: 'Maui December through March — Wailea weeks fill first | myCHEF',
      description:
        'Maui December–March: Wailea and wedding-week houses fill first.',
      lede: 'Maui December–March: Wailea and wedding-week houses fill first.',
      photo: 'blogPeakMaui',
      body: [
        'December through March on this island is not a generic Hawaiʻi peak essay. Wailea weeks move first. Saturday West Maui traffic still is on the West Maui page.',
        'How far ahead to send the form is on our journal note on How far ahead.',
      ],
      faqs: [
      ],
      related: [
        { path: '/journal/how-far-ahead-to-book', label: 'How far ahead' },
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'no-fake-reviews',
      name: 'No fake reviews',
      h1: 'Maui has no star ratings yet. We will not invent them.',
      title: 'Why Maui has no star ratings yet — zero guest reviews | myCHEF',
      description:
        'Why Maui has no Hawaiʻi guest reviews yet: they publish after verified events.',
      lede: 'Why Maui has no Hawaiʻi guest reviews yet: they publish after verified events.',
      photo: 'blogReviewsMaui',
      body: [
        'Hawaiʻi guest reviews on this site: none yet. They go up after verified events — never bought, never written here. Proof today is the rate card, the sample menu, cleanup, and a written quote.',
      ],
      faqs: [
      ],
      related: [
        { path: '/trust', label: 'Honesty register' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    ...EXTRA_BLOG_NOTES.maui,
  ],
  kauai: [
    {
      slug: 'dining-in-princeville',
      name: 'Dining in Princeville',
      h1: 'Princeville notes — inquiry, North Shore estates, cooktop required.',
      title: 'Princeville kitchen notes — inquiry, North Shore estates | myCHEF',
      description:
        'Short Princeville notes at inquiry: North Shore estates, cooktops.',
      lede: 'Short Princeville notes at inquiry: North Shore estates, cooktops.',
      photo: 'dinPrinceville',
      body: [
        `Inquiry stage.`,
        'North Shore estate inventory. Surf-season winters book early. Hotel suites without a cooktop are declined even at inquiry.',
        'A band is not an instant-booking button. Send the address on the quote form. We write back with what we can staff.',
      ],
      faqs: [
        {
          q: 'Are you live?',
          a: 'Inquiry. We crew when we can staff. Send the date.',
        },
      ],
      related: [
        { path: '/princeville', label: 'Private chef Princeville' },
        { path: '/north-shore', label: 'Kauaʻi North Shore' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-poipu',
      name: 'Dining in Poʻipū',
      h1: 'Poipu notes — South Shore inquiry tables, shorter drive.',
      title: 'Poipu kitchen notes — South Shore inquiry tables | myCHEF',
      description:
        'Short Poʻipū notes at inquiry: South Shore kitchens, shorter drive from Līhuʻe.',
      lede: 'Short Poʻipū notes at inquiry: South Shore kitchens, shorter drive from Līhuʻe.',
      photo: 'dinPoipu',
      body: [
        'Sunnier than the North. Shorter drive from Līhuʻe. Same honesty: a cooktop, a written draft, inquiry until we can staff.',
        'Open the Poʻipū page for the corridor page. Open the South Shore page.',
      ],
      faqs: [
        {
          q: 'Is the South cheaper than the North?',
          a: 'The published band is the Kauai rate card. Drive time is the difference.',
        },
      ],
      related: [
        { path: '/poipu', label: 'Private chef Poʻipū' },
        { path: '/south-shore', label: 'South Shore kitchens' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-hanalei',
      name: 'Dining in Hanalei',
      h1: 'Hanalei notes — bridge weather on the draft, not the night.',
      title: 'Hanalei kitchen notes — bridge weather on the draft | myCHEF',
      description:
        'Short Hanalei notes at inquiry: bridge weather, 72-hour window.',
      lede: 'Short Hanalei notes at inquiry: bridge weather, 72-hour window.',
      photo: 'dinHanalei',
      body: [
        'North Shore town. Weather and road reality published up front. Far-North events inherit the bridge clause — 72-hour notice. Reschedule rather than forfeit.',
        'A closed bridge moves the night; it does not eat the deposit. Open the Hanalei bridge notes for the full clause.',
      ],
      faqs: [
      ],
      related: [
        { path: '/hanalei', label: 'Private chef Hanalei' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-kapaa',
      name: 'Dining in Kapaʻa',
      h1: 'Kapaa notes — east-side inquiry tables, not a shore clone.',
      title: 'Kapaa kitchen notes — east-side inquiry tables | myCHEF',
      description:
        'Short Kapaʻa notes at inquiry: east-side households, lower priority than the two shores.',
      lede: 'Short Kapaʻa notes at inquiry: east-side households, lower priority than the two shores.',
      photo: 'dinKapaa',
      body: [
        'East side town. Lower priority than the two shores. Household dinners at inquiry. A cooktop is still required.',
        'We will not pretend Kapaʻa is a North Shore estate page. Send the address. We write back with what we can staff.',
        'Open the Kapaʻa page for the corridor page. Open the locations list for the directory.',
      ],
      faqs: [
        {
          q: 'Do you staff every Saturday in Kapaʻa?',
          a: 'No. Inquiry. Send the date on the quote form.',
        },
      ],
      related: [
        { path: '/kapaa', label: 'Private chef Kapaʻa' },
        { path: '/locations', label: 'Corridor directory' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'grocery-at-cost',
      name: 'Groceries at cost',
      h1: 'Kauai grocery line — both shores, billed at cost when we staff.',
      title: 'Kauai groceries billed at cost — inquiry receipts | myCHEF',
      description:
        'Kauai groceries print at cost with receipts when we can staff.',
      lede: 'Kauai groceries print at cost with receipts when we can staff.',
      photo: 'blogGroceryKauai',
      body: [
        'When we can staff, we shop the day of service. Groceries print at cost with receipts. They are not swallowed by the band on a Princeville or Poʻipū night.',
        'A closed Hanalei bridge can move the shop as well as the night. Alcohol is a different line.',
      ],
      faqs: [
        {
          q: 'Are the receipts live if you cannot staff?',
          a: 'No shop until we can staff. Send the date on the quote form.',
        },
      ],
      related: [
        { path: '/pricing', label: 'Kauai rate card' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'wine-and-alcohol',
      name: 'Wine and alcohol',
      h1: 'Kauai wine and spirits — inquiry pours as their own line.',
      title: 'Kauai wine and spirits — inquiry pours as their own line | myCHEF',
      description:
        'Kauai wine, beer, and spirits never hide inside the dinner band.',
      lede: 'Kauai wine, beer, and spirits never hide inside the dinner band.',
      photo: 'blogWineKauai',
      body: [
        'Bring your own, or we quote a separate pour when we can staff. Wine, beer, and spirits never hide inside the band on a Princeville night.',
        'This piece is the alcohol line, not the person pouring it. Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Can you bury wine in the menu price?',
          a: 'No. Open our journal note on What is included — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'weather-backup',
      name: 'Wet-weather backup',
      h1: 'Kauai outdoor tables get a covered backup — and the bridge clause.',
      title: 'Kauai outdoor tables get a covered backup in writing | myCHEF',
      description:
        'Kauai outdoor tables get a written wet-weather backup. Far-North inherits the bridge clause.',
      lede: 'Kauai outdoor tables get a written wet-weather backup. Far-North inherits the bridge clause.',
      photo: 'blogWeatherKauai',
      body: [
        'Outdoor tables on both shores always have a written indoor backup. Far-North events also inherit the Hanalei bridge notes — reschedule rather than forfeit.',
        'We do not discover rain at 4 p.m. A closed bridge moves the night; it does not eat the deposit. Inquiry until we can staff.',
        'Send the address type on the quote form. If the house has no covered fallback, we say so in the inquiry reply.',
      ],
      faqs: [
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'sourcing-honesty',
      name: 'Sourcing honesty',
      h1: 'Kauai sourcing — most food still arrives by ship. We say so.',
      title: 'Kauai sourcing honesty — most food still arrives by ship | myCHEF',
      description:
        'Kauai sourcing honesty at inquiry: Hawaiʻi still imports most of its food. Named farms only after written verification.',
      lede: 'Kauai sourcing honesty at inquiry: Hawaiʻi still imports most of its food. Named farms only after written verification.',
      photo: 'blogSourceKauai',
      body: [
        'Hawaiʻi still imports most of its food. We cook what the shop and the boat actually hold that day — when we can staff. We do not invent a “farm-to-table” brand for Princeville.',
        'Named farms only after written verification. Fish is named as food, not décor. A theatrical luau menu is declined.',
      ],
      faqs: [
        {
          q: 'Will you print a farm name on the menu?',
          a: 'Only after written verification. Otherwise the ingredient is named as food — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/menus', label: 'How a menu is written' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'cleanup-standard',
      name: 'Cleanup standard',
      h1: 'Kauai cleanup — inquiry kitchens left cleaner than we found them.',
      title: 'Kauai cleanup — inquiry kitchens left cleaner than we found them | myCHEF',
      description:
        'Kauai cleanup standard at inquiry: shop, cook, serve, leave the kitchen cleaner.',
      lede: 'Kauai cleanup standard at inquiry: shop, cook, serve, leave the kitchen cleaner.',
      photo: 'blogCleanupKauai',
      body: [
        'Cleanup is in. We do not leave an inquiry kitchen as we found it. That is the standard, not an add-on. Inquiry until we can staff.',
        'Rentals and venue fees still print as their own lines. Cleanup is not a rental. Open our journal note on What is included for the split.',
      ],
      faqs: [
        {
          q: 'Is cleanup extra?',
          a: 'No. It is in, when we can staff. Open the quote form — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'condo-load-in',
      name: 'Condo load-in',
      h1: 'Kauai condo load-in — inquiry towers, quiet hours in writing.',
      title: 'Kauai condo load-in — inquiry towers, quiet hours in writing | myCHEF',
      description:
        'Kauai condo load-in at inquiry: freight elevators, COIs, quiet hours.',
      lede: 'Kauai condo load-in at inquiry: freight elevators, COIs, quiet hours.',
      photo: 'blogCondoKauai',
      body: [
        'Freight elevators, COIs, and quiet hours are handled in the inquiry reply. We do not discover building rules at 4 p.m. A band is not an instant-booking button.',
        'Hotel rooms without a cooktop are still declined. A tower residence with a range is the product. Send the building type on the quote form.',
        'North Shore stacks inherit the same load-in honesty. Compact kitchens get a menu that fits the range.',
      ],
      faqs: [
        {
          q: 'Do you need a COI?',
          a: 'When the building requires one, we handle it in writing before we can staff — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/poipu', label: 'Private chef Poʻipū' },
        { path: '/blog/dining-in-poipu', label: 'Poʻipū kitchen notes' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'family-reunions',
      name: 'Family reunions',
      h1: 'Kauai family reunions — inquiry estates, not a ballroom.',
      title: 'Kauai family reunions — inquiry estates, not a ballroom | myCHEF',
      description:
        'Kauai family reunions in estates we can actually staff.',
      lede: 'Kauai family reunions in estates we can actually staff.',
      photo: 'blogReunionKauai',
      body: [
        'Dinners 2–15, receptions about 10–75. Larger formats are quoted, not promised. Inquiry until we can staff. Resort ballrooms are not our product.',
        'Kids’ plates are planned with the adults’ menu. Multi-day weeks sit on the Stay Chef page.',
      ],
      faqs: [
        {
          q: 'Can you staff a ballroom reunion?',
          a: 'No. We staff houses, when we can staff. Open the guest-count guide — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/events', label: 'Events' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'photoshoot-catering',
      name: 'Production meals',
      h1: 'Kauai production meals — inquiry estates, not a craft-service tent.',
      title: 'Kauai production meals — inquiry estates, not a craft-service tent | myCHEF',
      description:
        'Kauai crew and production meals in estates with kitchens, at inquiry.',
      lede: 'Kauai crew and production meals in estates with kitchens, at inquiry.',
      photo: 'blogShootKauai',
      body: [
        'Film and stills crews in estates are the same staffed-room product as a family event — when we can staff. We do not staff craft-service tents.',
        'Identical plates, one dietary note on the quote. Guest counts we staff stay published. A band is not an instant-booking button.',
      ],
      faqs: [
        {
          q: 'Can you run craft service on a lot?',
          a: 'No. Estates with kitchens, when we can staff.',
        },
      ],
      related: [
        { path: '/catering', label: 'Catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'proposal-dinners',
      name: 'Proposal dinners',
      h1: 'Kauai proposal dinners — inquiry tables for two, not a restaurant hold.',
      title: 'Kauai proposal dinners — inquiry tables for two, not a restaurant hold | myCHEF',
      description:
        'Kauai proposal dinners in an estate kitchen, at inquiry.',
      lede: 'Kauai proposal dinners in an estate kitchen, at inquiry.',
      photo: 'blogProposalKauai',
      body: [
        'A proposal is two seats in a kitchen we can actually staff. Inquiry until we can. We do not hold a restaurant table. We do not stage a public ask on a resort lawn.',
      ],
      faqs: [
        {
          q: 'Can you hold a restaurant table?',
          a: 'No. We cook in the house, when we can staff. Open the what-we-don’t-do list — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Honeymoon dinners' },
        { path: '/fine-dining/romantic-dinner', label: 'Romantic dinner' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'estate-logistics',
      name: 'Estate logistics',
      h1: 'Kauai estate logistics — inquiry gates, generators, and the driveway.',
      title: 'Kauai estate logistics — inquiry gates, generators, and the driveway | myCHEF',
      description:
        'Kauai estate logistics at inquiry: driveways, generators, gates.',
      lede: 'Kauai estate logistics at inquiry: driveways, generators, gates.',
      photo: 'blogEstateKauai',
      body: [
        'Estate nights need a driveway we can actually use, a gate code, and whether a generator will run the range. We write those in the inquiry reply. A band is not an instant-booking button.',
        'Send the access packet on the quote form.',
        'A house without a functioning cooktop is still declined. Logistics do not invent a kitchen.',
      ],
      faqs: [
      ],
      related: [
        { path: '/blog/condo-load-in', label: 'Condo load-in' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'shoulder-season',
      name: 'Shoulder season',
      h1: 'Kauai shoulder dates — inquiry months still need a written kitchen.',
      title: 'Kauai shoulder dates — inquiry months still need a written kitchen | myCHEF',
      description:
        'Kauai shoulder dates are not automatic availability.',
      lede: 'Kauai shoulder dates are not automatic availability.',
      photo: 'blogShoulderKauai',
      body: [
        'Shoulder months are quieter, not empty. A Princeville house in April still needs a cooktop, a count, and an inquiry reply. We do not invent a last-minute roster because the calendar looks open.',
        'Far-North weather stays on the Hanalei bridge notes. This article is the quieter window beside them — at inquiry.',
      ],
      faqs: [
        {
          q: 'Are April nights walk-in?',
          a: 'No. Send the quote form. We still write the kitchen, when we can staff — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/journal/how-far-ahead-to-book', label: 'How far ahead' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-haena',
      name: 'Dining in Hāʻena',
      h1: 'Hāʻena notes — Far-North inquiry, 72-hour road clause.',
      title: 'Hāʻena kitchen notes — Far-North inquiry, 72-hour road clause | myCHEF',
      description:
        'Short Hāʻena notes at inquiry: quote-only Far North, 72-hour notice.',
      lede: 'Short Hāʻena notes at inquiry: quote-only Far North, 72-hour notice.',
      photo: 'dinHaena',
      body: [
        'Far North. Quote-only. Seventy-two-hour notice. Road closures reschedule rather than forfeit. Inquiry until we can staff.',
        'This piece is the kitchen note. A closed bridge moves the night; it does not eat the deposit. Open the Hanalei bridge notes for the full clause.',
      ],
      faqs: [
        {
          q: 'Can you take same-day Hāʻena?',
          a: 'No. Planned events only. Send the date on the quote form.',
        },
      ],
      related: [
        { path: '/haena', label: 'Private chef Hāʻena' },
        { path: '/hanalei', label: 'Private chef Hanalei' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-koloa',
      name: 'Dining in Kōloa',
      h1: 'Kōloa notes — South Shore town, inquiry, not a Poʻipū clone.',
      title: 'Kōloa kitchen notes — South Shore town, inquiry, not a Poʻipū clone | myCHEF',
      description:
        'Short Kōloa notes at inquiry: South Shore town adjacent to Poʻipū.',
      lede: 'Short Kōloa notes at inquiry: South Shore town adjacent to Poʻipū.',
      photo: 'dinKoloa',
      body: [
        'South Shore town adjacent to Poʻipū. Same South Shore surcharge map. Retreat houses and small weddings to about 75. Inquiry until we can staff.',
        'This piece is the kitchen note. We will not pretend Kōloa is a resort-residence page. A cooktop is still required.',
        'Open the Poʻipū page for the corridor. Send the address on the quote form. A band is not an instant-booking button.',
      ],
      faqs: [
      ],
      related: [
        { path: '/koloa', label: 'Private chef Kōloa' },
        { path: '/poipu', label: 'Private chef Poʻipū' },
        { path: '/blog/dining-in-poipu', label: 'Poʻipū kitchen notes' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-lihue',
      name: 'Dining in Līhuʻe',
      h1: 'Līhuʻe notes — staging town, not the villa product.',
      title: 'Līhuʻe kitchen notes — staging town, not the villa product | myCHEF',
      description:
        'Short Līhuʻe notes at inquiry: airport-adjacent households, not villa inventory.',
      lede: 'Short Līhuʻe notes at inquiry: airport-adjacent households, not villa inventory.',
      photo: 'dinLihue',
      body: [
        'Planned base. Airport-adjacent, not the villa inventory. In-town households and staging. Included when we launch. Inquiry until we can staff.',
        'This piece is the kitchen note. Princeville and Poʻipū stay the estate corridors. A cooktop is still required.',
        'We will not sell Līhuʻe as a North Shore estate page. Send the address on the quote form.',
      ],
      faqs: [
        {
          q: 'Is Līhuʻe the villa product?',
          a: 'No. Staging and in-town households. Open the Princeville page or the Poʻipū page for estates.',
        },
      ],
      related: [
        { path: '/lihue', label: 'Private chef Līhuʻe' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/poipu', label: 'Private chef Poʻipū' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-kalaheo',
      name: 'Dining in Kalāheo',
      h1: 'Kalāheo notes — south-west houses, inquiry.',
      title: 'Kalāheo kitchen notes — south-west houses, inquiry | myCHEF',
      description:
        'Short Kalāheo notes at inquiry: south-west residential tables.',
      lede: 'Short Kalāheo notes at inquiry: south-west residential tables.',
      photo: 'dinKalaheo',
      body: [
        'South-west residential. Between Līhuʻe and the South Shore villas. Surcharge, quoted with the menu. Inquiry until we can staff.',
        'This piece is the kitchen note. Residential tables, not visitor-villa inventory. A cooktop is still required.',
      ],
      faqs: [
        {
          q: 'Are you live?',
          a: 'Inquiry until we can staff. Send the quote form.',
        },
      ],
      related: [
        { path: '/kalaheo', label: 'Private chef Kalāheo' },
        { path: '/poipu', label: 'Private chef Poʻipū' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-waimea',
      name: 'Dining in Waimea, Kauaʻi',
      h1: 'Kauai Waimea notes — west-side distance from Līhuʻe, inquiry.',
      title: 'Kauai Waimea kitchen notes — west-side distance from Līhuʻe, inquiry | myCHEF',
      description:
        'Short Kauai Waimea notes at inquiry: west-side distance, extended surcharge.',
      lede: 'Short Kauai Waimea notes at inquiry: west-side distance, extended surcharge.',
      photo: 'dinKauaiWaimea',
      body: [
        'West side. Distance from Līhuʻe is the story. Extended surcharge. Advance notice. West-side estates. Inquiry until we can staff.',
        'This piece is the kitchen note. This is not the Hawaiʻi Island ranch note. A cooktop is still required.',
      ],
      faqs: [
        {
          q: 'Same as the Hawaiʻi Island Waimea note?',
          a: 'No. This piece is west Kauaʻi distance from Līhuʻe.',
        },
      ],
      related: [
        { path: '/waimea', label: 'Private chef Kauaʻi Waimea' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/poipu', label: 'Private chef Poʻipū' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-hanapepe',
      name: 'Dining in Hanapēpē',
      h1: 'Hanapēpē notes — west-side town houses, inquiry.',
      title: 'Hanapēpē kitchen notes — west-side town houses, inquiry | myCHEF',
      description:
        'Short Hanapēpē notes at inquiry: west-side town, not a visitor-villa cluster.',
      lede:
        'Not a visitor-villa cluster. Inquiry until we can staff.',
      photo: 'dinHanapepe',
      body: [
        'West-side town. Not a visitor-villa cluster. Surcharge, quoted. Private houses. Inquiry until we can staff.',
        'This piece is the kitchen note. We will not sell this as a North Shore estate page. A cooktop is still required.',
        'Send the address on the quote form. A band is not an instant-booking button.',
      ],
      faqs: [
        {
          q: 'Same as Kauai Waimea notes?',
          a: 'That piece is west-side distance. This piece is the town house.',
        },
      ],
      related: [
        { path: '/hanapepe', label: 'Private chef Hanapēpē' },
        { path: '/blog/dining-in-waimea', label: 'Kauai Waimea notes' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-anahola',
      name: 'Dining in Anahola',
      h1: 'Anahola notes — east-north coast, quieter than Kapaʻa.',
      title: 'Anahola kitchen notes — east-north coast, quieter than Kapaʻa | myCHEF',
      description:
        'Short Anahola notes at inquiry: quieter than Kapaʻa, still a drive.',
      lede: 'Short Anahola notes at inquiry: quieter than Kapaʻa, still a drive.',
      photo: 'dinAnahola',
      body: [
        'East-north coast. Quieter than Kapaʻa, still a drive from Līhuʻe staging. Surcharge at launch, quoted with the menu. Household dinners. Inquiry until we can staff.',
        'This piece is the kitchen note. A cooktop is still required.',
      ],
      faqs: [
      ],
      related: [
        { path: '/anahola', label: 'Private chef Anahola' },
        { path: '/kapaa', label: 'Private chef Kapaʻa' },
        { path: '/blog/dining-in-kapaa', label: 'Kapaʻa kitchen notes' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-eleele',
      name: 'Dining in ʻEleʻele',
      h1: 'ʻEleʻele notes — between Kalāheo and the west side, inquiry.',
      title: 'ʻEleʻele kitchen notes — between Kalāheo and the west side, inquiry | myCHEF',
      description:
        'Short ʻEleʻele notes at inquiry: south-west residential.',
      lede: 'Short ʻEleʻele notes at inquiry: south-west residential.',
      photo: 'dinEleele',
      body: [
        'South-west residential. Between Kalāheo and the west side. Surcharge. Advance notice. Private houses. Inquiry until we can staff.',
        'This piece is the kitchen note. We will not pretend this is a South Shore villa page. A cooktop is still required.',
        'Send the address on the quote form. A band is not an instant-booking button.',
      ],
      faqs: [
      ],
      related: [
        { path: '/eleele', label: 'Private chef ʻEleʻele' },
        { path: '/blog/dining-in-kalaheo', label: 'Kalāheo kitchen notes' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'named-farms',
      name: 'Named farms',
      h1: 'Kauai farm names — Kīlauea and Kōloa only after written verification.',
      title: 'Kauai farm names — Kīlauea and Kōloa only after verification | myCHEF',
      description:
        'Kauai farm names print on an inquiry invoice only after written verification.',
      lede: 'Kauai farm names print on an inquiry invoice only after written verification.',
      photo: 'blogFarmsKauai',
      body: [
        'A draft that names a farm without a paper trail is a brochure. We will not print a Kīlauea grower or a Kōloa citrus name until the producer is verified in writing. Inquiry until we can staff.',
        'Fish is a different honesty note.',
      ],
      faqs: [
        {
          q: 'Will you invent a North Shore farm for the menu card?',
          a: 'No. Unverified produce is named as food — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'fish-species',
      name: 'Fish species',
      h1: 'Kauai fish names — the species on the inquiry invoice, not a guess.',
      title: 'Kauai fish names — the species on the inquiry invoice | myCHEF',
      description:
        'Kauai fish is named as the species on the inquiry invoice.',
      lede: 'Kauai fish is named as the species on the inquiry invoice.',
      photo: 'blogFishKauai',
      body: [
        'The inquiry invoice names the fish we purchased that morning when we can staff. We will not print a species we did not buy, and we will not dress a grocery-case fillet as a pier story.',
        'Produce names are a different note.',
      ],
      faqs: [
        {
          q: 'Will you guess the species for the menu card?',
          a: 'No. Unverified fish is named as fish — Princeville kitchen at inquiry.',
        },
      ],
      related: [
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/blog/named-farms', label: 'Named farms' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'coffee-labeling',
      name: 'Coffee labeling',
      h1: 'Kauai coffee names — inquiry invoices still follow origin law.',
      title: 'Kauai coffee names — inquiry invoices still follow origin law | myCHEF',
      description:
        'Kauai coffee names on an inquiry invoice follow origin law.',
      lede: 'Kauai coffee names on an inquiry invoice follow origin law.',
      photo: 'blogCoffeeKauai',
      body: [
        'A Princeville draft that prints a coffee name without a lot is a brochure. Origin law still governs at inquiry. Unverified coffee is coffee. Inquiry until we can staff.',
        'Peak months are a different note.',
      ],
      faqs: [
        {
          q: 'Will you print Kona coffee on a Kauai menu?',
          a: 'When the lot is documented and we can staff. Otherwise it is coffee.',
        },
      ],
      related: [
        { path: '/blog/named-farms', label: 'Named farms' },
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'peak-season',
      name: 'Peak season',
      h1: 'Kauai peak months — both shores fill at inquiry, not instant booking calendar.',
      title: 'Kauai December through March — both shores fill at inquiry | myCHEF',
      description:
        'Kauai December–March at inquiry: both shores fill.',
      lede: 'Kauai December through March: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'blogPeakKauai',
      body: [
        'December through March on this island is not live instant booking calendar. Both shores fill at inquiry. Far-North weather is a clause — not a reason to invent a roster.',
        'How far ahead to enquire is on our journal note on How far ahead.',
      ],
      faqs: [
        {
          q: 'Are you live in December?',
          a: 'Inquiry. Send the dates on the quote form. We write back when we can staff.',
        },
      ],
      related: [
        { path: '/journal/how-far-ahead-to-book', label: 'How far ahead' },
        { path: '/hanalei-bridge', label: 'Hanalei bridge' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'no-fake-reviews',
      name: 'No fake reviews',
      h1: 'Kauai has no star ratings yet. Inquiry is not a five-star page.',
      title: 'Why Kauai has no star ratings yet — inquiry, zero reviews | myCHEF',
      description:
        'Why Kauai has no Hawaiʻi guest reviews yet at inquiry. Not instant booking rating.',
      lede: 'Why Kauai has no Hawaiʻi guest reviews yet at inquiry. Not instant booking rating.',
      photo: 'blogReviewsKauai',
      body: [
        'Hawaiʻi guest reviews on this site: none yet. Booking by inquiry is not a reason to invent stars. They go up after verified events — never bought, never written here.',
        'A named shore is not an instant-booking button.',
      ],
      faqs: [
        {
          q: 'Are you live?',
          a: 'Inquiry. Stars would be a lie. Send dates on the quote form.',
        },
      ],
      related: [
        { path: '/trust', label: 'Honesty register' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    ...EXTRA_BLOG_NOTES.kauai,
  ],
  bigisland: [
    {
      slug: 'dining-in-kona',
      name: 'Dining in Kona',
      h1: 'Kona notes — west-side inquiry tables, Hilo not implied.',
      title: 'Kona kitchen notes — west-side inquiry tables | myCHEF',
      description:
        'Short Kona notes at inquiry: west-side kitchens, Ironman weeks. East side is a different day.',
      lede: 'Short Kona notes at inquiry: west-side kitchens, Ironman weeks. East side is a different day.',
      photo: 'dinKona',
      body: [
        `Inquiry, west-side first.`,
        'A cooktop is still required. A band is not an instant-booking button.',
        'East side is a dedicated day. Open the Kailua-Kona / Keauhou page for the corridor page.',
      ],
      faqs: [
        {
          q: 'Can a Kona table cover Hilo?',
          a: 'Not the same day.',
        },
      ],
      related: [
        { path: '/kona', label: 'Private chef Kona' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-waimea',
      name: 'Dining in Waimea',
      h1: 'Waimea notes — ranch elevation, still west-side first.',
      title: 'Waimea kitchen notes — ranch elevation, west-side first | myCHEF',
      description:
        'Short Waimea / Kamuela notes at inquiry: cooler elevation, ranch houses.',
      lede: 'Short Waimea / Kamuela notes at inquiry: cooler elevation, ranch houses.',
      photo: 'dinWaimea',
      body: [
        'Upcountry. Ranch country. Surcharge at launch. Cooler evenings change the draft more than a brochure photo does.',
        'Estate and ranch houses. Inquiry. Named farms only after written verification — we will not invent a producer.',
        'Open the Waimea page for the corridor page. East side remains the east-side page, a different day.',
      ],
      faqs: [
        {
          q: 'Is Waimea the east side?',
          a: 'No. Ranch country on the west-side map.',
        },
      ],
      related: [
        { path: '/waimea', label: 'Private chef Waimea' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-waikoloa',
      name: 'Dining in Waikoloa',
      h1: 'Waikoloa notes — Kohala corridor inquiry, 30-minute radius.',
      title: 'Waikoloa kitchen notes — Kohala corridor inquiry | myCHEF',
      description:
        'Short Waikoloa notes at inquiry: Kohala resort residences inside the west-side radius.',
      lede: 'Short Waikoloa notes at inquiry: Kohala resort residences inside the west-side radius.',
      photo: 'dinWaikoloa',
      body: [
        'Kohala resort community. Seven resort communities share this radius. We will not pretend the island is 4,000 square miles of same-day coverage.',
        'Villa weeks when we can staff. A cooktop is required. Open the Waikoloa page for the corridor page.',
      ],
      faqs: [
      ],
      related: [
        { path: '/waikoloa', label: 'Private chef Waikoloa' },
        { path: '/kohala-corridor', label: 'Kohala corridor' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-kohala',
      name: 'Dining in Kohala',
      h1: 'Kohala notes — 30-minute west-side radius, not the mountain.',
      title: 'Kohala kitchen notes — 30-minute west-side radius | myCHEF',
      description:
        'Short Kohala Coast notes at inquiry: west-side radius, not the summit.',
      lede: 'Short Kohala Coast notes at inquiry: west-side radius, not the summit.',
      photo: 'dinKohala',
      body: [
        'West-side first. Thirty-minute radius. The island is 4,000 square miles; we will not pretend to cover it in a day.',
        'Estate and resort-residence dinners when we can staff. East side is a dedicated crossing.',
        'Open the Kohala Coast page for the corridor page. Open the Kona–Kohala corridor page.',
      ],
      faqs: [
        {
          q: 'Is this the mountain?',
          a: 'No. The resort belt.',
        },
      ],
      related: [
        { path: '/kohala', label: 'Private chef Kohala' },
        { path: '/kohala-corridor', label: 'Kohala corridor' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'grocery-at-cost',
      name: 'Groceries at cost',
      h1: 'West-side grocery line — Kona shop, billed at cost.',
      title: 'Hawaiʻi Island groceries billed at cost — west-side receipts | myCHEF',
      description:
        'West-side groceries print at cost with receipts when we can staff. East side is a different day.',
      lede: 'West-side groceries print at cost with receipts when we can staff. East side is a different day.',
      photo: 'blogGroceryBigisland',
      body: [
        'When we can staff, we shop the day of service on the west side. Groceries print at cost with receipts. They are not swallowed by the band on a Kona or Waikoloa night.',
        'East-side provisioning is a dedicated day. Alcohol is a different line.',
      ],
      faqs: [
        {
          q: 'Can a Kona shop cover Hilo?',
          a: 'Not the same day.',
        },
      ],
      related: [
        { path: '/pricing', label: 'West-side rate card' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'wine-and-alcohol',
      name: 'Wine and alcohol',
      h1: 'West-side wine and spirits — Kona pours as their own line.',
      title: 'Hawaiʻi Island wine and spirits — west-side pours as their own line | myCHEF',
      description:
        'West-side wine, beer, and spirits never hide inside the dinner band.',
      lede: 'West-side wine, beer, and spirits never hide inside the dinner band.',
      photo: 'blogWineBigisland',
      body: [
        'Bring your own, or we quote a separate pour when we can staff. Wine, beer, and spirits never hide inside the band on a Kona night.',
        'This piece is the alcohol line, not the person pouring it. Inquiry, west-side first.',
      ],
      faqs: [
        {
          q: 'Can you bury wine in the menu price?',
          a: 'No. Open our journal note on What is included — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'weather-backup',
      name: 'Wet-weather backup',
      h1: 'West-side outdoor tables get a covered backup in writing.',
      title: 'Hawaiʻi Island outdoor tables get a covered backup in writing | myCHEF',
      description:
        'West-side outdoor tables get a written wind and sun backup. East side is a different day.',
      lede: 'West-side outdoor tables get a written wind and sun backup. East side is a different day.',
      photo: 'blogWeatherBigisland',
      body: [
        'Outdoor tables on the west side always have a written indoor backup. Hard sun and afternoon wind are the usual reason — not a surprise at 4 p.m.',
        'East side is a dedicated day, not a same-day Kona–Hilo fantasy. The backup is a room, not a tent we do not own.',
        'Send the address type on the quote form. If the house has no covered fallback, we say so in the inquiry reply.',
      ],
      faqs: [
        {
          q: 'Does a Kona backup cover Hilo weather?',
          a: 'No. We quote a dedicated crossing.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'sourcing-honesty',
      name: 'Sourcing honesty',
      h1: 'West-side sourcing — most food still arrives by ship. We say so.',
      title: 'Hawaiʻi Island sourcing honesty — most food still arrives by ship | myCHEF',
      description:
        'West-side sourcing honesty: Hawaiʻi still imports most of its food. Named Kona coffee follows Act 198.',
      lede: 'West-side sourcing honesty: Hawaiʻi still imports most of its food. Named Kona coffee follows Act 198.',
      photo: 'blogSourceBigisland',
      body: [
        'Hawaiʻi still imports most of its food. We cook what the west-side shop actually holds that day — when we can staff. We do not invent a “farm-to-table” brand for Waikoloa.',
        'Named Kona and Kaʻū coffee follow Act 198 from 2027. Fish is named as food, not décor.',
      ],
      faqs: [
        {
          q: 'Will you print a farm name on the menu?',
          a: 'Only after written verification. Otherwise the ingredient is named as food — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/coffee-act-198', label: 'Coffee Act 198' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'cleanup-standard',
      name: 'Cleanup standard',
      h1: 'Hawaiʻi Island cleanup — west-side kitchens left cleaner than we found them.',
      title: 'Hawaiʻi Island cleanup — west-side kitchens left cleaner than we found them | myCHEF',
      description:
        'West-side cleanup standard at inquiry: shop, cook, serve, leave the kitchen cleaner.',
      lede: 'West-side cleanup standard at inquiry: shop, cook, serve, leave the kitchen cleaner.',
      photo: 'blogCleanupBigisland',
      body: [
        'Cleanup is in. We do not leave a west-side kitchen as we found it. That is the standard, not an add-on. Inquiry until we can staff.',
        'Rentals and venue fees still print as their own lines. Cleanup is not a rental. Open our journal note on What is included for the split. East side is a different day.',
      ],
      faqs: [
        {
          q: 'Is cleanup extra?',
          a: 'No. It is in, when we can staff. Open the quote form — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'What’s included' },
        { path: '/journal/what-is-included', label: 'What prints as a line' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'condo-load-in',
      name: 'Condo load-in',
      h1: 'Hawaiʻi Island condo load-in — west-side towers, quiet hours in writing.',
      title: 'Hawaiʻi Island condo load-in — west-side towers, quiet hours in writing | myCHEF',
      description:
        'West-side condo load-in at inquiry: freight elevators, COIs, quiet hours.',
      lede: 'West-side condo load-in at inquiry: freight elevators, COIs, quiet hours.',
      photo: 'blogCondoBigisland',
      body: [
        'Freight elevators, COIs, and quiet hours are handled in the inquiry reply. We do not discover building rules at 4 p.m. A band is not an instant-booking button.',
        'Hotel rooms without a cooktop are still declined. A tower residence with a range is the product. Send the building type on the quote form.',
        'Kona stacks inherit the same load-in honesty. Compact kitchens get a menu that fits the range. East side is a dedicated crossing.',
      ],
      faqs: [
        {
          q: 'Do you need a COI?',
          a: 'When the building requires one, we handle it in writing before we can staff — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/waikoloa', label: 'Private chef Waikoloa' },
        { path: '/blog/dining-in-waikoloa', label: 'Waikoloa kitchen notes' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'family-reunions',
      name: 'Family reunions',
      h1: 'Hawaiʻi Island family reunions — west-side houses, not a ballroom.',
      title: 'Hawaiʻi Island family reunions — west-side houses, not a ballroom | myCHEF',
      description:
        'West-side family reunions in houses we can actually staff.',
      lede: 'West-side family reunions in houses we can actually staff.',
      photo: 'blogReunionBigisland',
      body: [
        'Dinners 2–15, receptions about 10–75. Larger formats are quoted, not promised. Inquiry until we can staff. Resort ballrooms are not our product.',
        'Kids’ plates are planned with the adults’ menu. Multi-day weeks sit on the Stay Chef page.',
      ],
      faqs: [
        {
          q: 'Can you staff a ballroom reunion?',
          a: 'No. We staff houses, when we can staff. Open the guest-count guide — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/events', label: 'Events' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'photoshoot-catering',
      name: 'Production meals',
      h1: 'Hawaiʻi Island production meals — west-side houses, not a craft-service tent.',
      title: 'Hawaiʻi Island production meals — west-side houses, not a craft-service tent | myCHEF',
      description:
        'West-side crew and production meals in houses with kitchens, at inquiry.',
      lede: 'West-side crew and production meals in houses with kitchens, at inquiry.',
      photo: 'blogShootBigisland',
      body: [
        'Film and stills crews in west-side houses are the same staffed-room product as a family event — when we can staff. We do not staff craft-service tents.',
        'Identical plates, one dietary note on the quote. Guest counts we staff stay published. East side is a dedicated day.',
      ],
      faqs: [
        {
          q: 'Can you run craft service on a lot?',
          a: 'No. Houses with kitchens, when we can staff.',
        },
      ],
      related: [
        { path: '/catering', label: 'Catering' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'proposal-dinners',
      name: 'Proposal dinners',
      h1: 'Hawaiʻi Island proposal dinners — west-side tables for two, not a restaurant hold.',
      title: 'Hawaiʻi Island proposal dinners — west-side tables for two, not a restaurant hold | myCHEF',
      description:
        'West-side proposal dinners in a house kitchen, at inquiry.',
      lede: 'West-side proposal dinners in a house kitchen, at inquiry.',
      photo: 'blogProposalBigisland',
      body: [
        'A proposal is two seats in a kitchen we can actually staff. Inquiry until we can. We do not hold a restaurant table. East side is a dedicated day.',
      ],
      faqs: [
        {
          q: 'Can you hold a restaurant table?',
          a: 'No. We cook in the house, when we can staff. Open the what-we-don’t-do list — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Honeymoon dinners' },
        { path: '/fine-dining/romantic-dinner', label: 'Romantic dinner' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'estate-logistics',
      name: 'Estate logistics',
      h1: 'Hawaiʻi Island estate logistics — west-side gates, generators, and the driveway.',
      title: 'Hawaiʻi Island estate logistics — west-side gates, generators, and the driveway | myCHEF',
      description:
        'West-side estate logistics at inquiry: driveways, generators, gates.',
      lede: 'West-side estate logistics at inquiry: driveways, generators, gates.',
      photo: 'blogEstateBigisland',
      body: [
        'Estate nights need a driveway we can actually use, a gate code, and whether a generator will run the range. We write those in the inquiry reply. A band is not an instant-booking button.',
        'East side is a dedicated crossing. Send the access packet on the quote form.',
        'A house without a functioning cooktop is still declined. Logistics do not invent a kitchen.',
      ],
      faqs: [
      ],
      related: [
        { path: '/blog/condo-load-in', label: 'Condo load-in' },
        { path: '/east-side', label: 'East side' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'shoulder-season',
      name: 'Shoulder season',
      h1: 'Hawaiʻi Island shoulder dates — west-side months still need a written kitchen.',
      title: 'Hawaiʻi Island shoulder dates — west-side months still need a written kitchen | myCHEF',
      description:
        'West-side shoulder dates are not automatic availability.',
      lede: 'West-side shoulder dates are not automatic availability.',
      photo: 'blogShoulderBigisland',
      body: [
        'Shoulder months are quieter, not empty. A Kona house in April still needs a cooktop, a count, and an inquiry reply. We do not invent a last-minute roster because the calendar looks open.',
        'East side stays a dedicated day.',
      ],
      faqs: [
        {
          q: 'Are April nights walk-in?',
          a: 'No. Send the quote form. We still write the kitchen, when we can staff — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/journal/how-far-ahead-to-book', label: 'How far ahead' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-hilo',
      name: 'Dining in Hilo',
      h1: 'Hilo notes — east-side dedicated day, not a Kona add-on.',
      title: 'Hilo kitchen notes — east-side dedicated day, not a Kona add-on | myCHEF',
      description:
        'Short Hilo notes at inquiry: quote-only east side, dedicated staffing.',
      lede: 'Short Hilo notes at inquiry: quote-only east side, dedicated staffing.',
      photo: 'dinHilo',
      body: [
        'East side. Quote-only. Dedicated staffing. Two and a half to three hours from Kona. Inquiry until we can staff. Never squeezed into a west-side day.',
        'This piece is the kitchen note. A cooktop is still required.',
      ],
      faqs: [
        {
          q: 'Can a Kona table cover Hilo the same day?',
          a: 'No. We quote a dedicated crossing.',
        },
      ],
      related: [
        { path: '/hilo', label: 'Private chef Hilo' },
        { path: '/east-side', label: 'East side' },
        { path: '/kona', label: 'Private chef Kona' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-volcano',
      name: 'Dining in Volcano',
      h1: 'Volcano notes — east-side lodges, dedicated staffing.',
      title: 'Volcano kitchen notes — east-side lodges, dedicated staffing | myCHEF',
      description:
        'Short Volcano notes at inquiry: quote-only with Hilo, dedicated staffing.',
      lede: 'Short Volcano notes at inquiry: quote-only with Hilo, dedicated staffing.',
      photo: 'dinVolcano',
      body: [
        'East side with Hilo. Quote-only, never squeezed into a west-side day. Lodge and estate dinners with dedicated staffing. Inquiry until we can staff.',
        'This piece is the kitchen note. The drive is 2.5–3 hours from Kona. A cooktop is still required.',
        'Open the east-side page for the crossing. Send both dates on the quote form if you also want a west-side night.',
      ],
      faqs: [
      ],
      related: [
        { path: '/volcano', label: 'Private chef Volcano' },
        { path: '/east-side', label: 'East side' },
        { path: '/blog/dining-in-hilo', label: 'Hilo kitchen notes' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-keauhou',
      name: 'Dining in Keauhou',
      h1: 'Keauhou notes — south of town, still the west-side corridor.',
      title: 'Keauhou kitchen notes — south of town, still the west-side corridor | myCHEF',
      description:
        'Short Keauhou notes at inquiry: south of Kailua-Kona, still the corridor.',
      lede: 'Short Keauhou notes at inquiry: south of Kailua-Kona, still the corridor.',
      photo: 'dinKeauhou',
      body: [
        'South of town, still the Kona–Kohala corridor. Base zone at launch. Resort-residence dinners. Inquiry until we can staff.',
        'This piece is the kitchen note. East side stays a dedicated day.',
        'A cooktop is still required. A band is not an instant-booking button. Send the address on the quote form.',
      ],
      faqs: [
        {
          q: 'Can Keauhou cover Hilo?',
          a: 'No.',
        },
      ],
      related: [
        { path: '/keauhou', label: 'Private chef Keauhou' },
        { path: '/kona', label: 'Private chef Kona' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-holualoa',
      name: 'Dining in Hōlualoa',
      h1: 'Hōlualoa notes — mauka of Kona, named coffee only with origin.',
      title: 'Hōlualoa kitchen notes — mauka of Kona, named coffee only with origin | myCHEF',
      description:
        'Short Hōlualoa notes at inquiry: coffee-country elevation.',
      lede: 'Short Hōlualoa notes at inquiry: coffee-country elevation.',
      photo: 'dinHolualoa',
      body: [
        'Mauka of Kailua-Kona. Coffee-country elevation, still the west-side corridor. Cooler evenings. Named coffee only with origin labeling. Inquiry until we can staff.',
        'This piece is the kitchen note. We do not invent a farm brand for the hillside.',
      ],
      faqs: [
      ],
      related: [
        { path: '/holualoa', label: 'Private chef Hōlualoa' },
        { path: '/kona', label: 'Private chef Kona' },
        { path: '/coffee-act-198', label: 'Coffee Act 198' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-kailua-kona',
      name: 'Dining in Kailua-Kona',
      h1: 'Kailua-Kona notes — town at the south end of the corridor, inquiry.',
      title: 'Kailua-Kona kitchen notes — town at the south end of the corridor | myCHEF',
      description:
        'Short Kailua-Kona town notes at inquiry.',
      lede: 'Kailua-Kona kitchen notes: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
      photo: 'dinKailuaKona',
      body: [
        'West-side town at the south end of the planned corridor. Planned base zone. Inquiry until we can staff.',
        'This piece is the kitchen note. East side stays a dedicated day.',
        'A cooktop is still required. A band is not an instant-booking button. Send the address on the quote form.',
      ],
      faqs: [
      ],
      related: [
        { path: '/kailua-kona', label: 'Private chef Kailua-Kona' },
        { path: '/kona', label: 'Private chef Kona' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-mauna-lani',
      name: 'Dining at Mauna Lani',
      h1: 'Mauna Lani notes — Kohala community, not a second island.',
      title: 'Mauna Lani kitchen notes — Kohala community, not a second island | myCHEF',
      description:
        'Short Mauna Lani notes at inquiry: same corridor, not a separate island claim.',
      lede: 'Short Mauna Lani notes at inquiry: same corridor, not a separate island claim.',
      photo: 'dinMaunaLani',
      body: [
        'Kohala resort community. Same corridor, not a separate island claim. Base zone. Estate and resort-residence dinners. Inquiry until we can staff.',
        'This piece is the kitchen note.',
      ],
      faqs: [
        {
          q: 'Is this a different island?',
          a: 'No. Same west-side corridor.',
        },
      ],
      related: [
        { path: '/mauna-lani', label: 'Private chef Mauna Lani' },
        { path: '/waikoloa', label: 'Private chef Waikoloa' },
        { path: '/blog/dining-in-kohala', label: 'Kohala kitchen notes' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-mauna-kea',
      name: 'Dining at Mauna Kea resort',
      h1: 'Mauna Kea resort notes — the belt, not the summit.',
      title: 'Mauna Kea resort kitchen notes — the belt, not the summit | myCHEF',
      description:
        'Short Mauna Kea resort notes at inquiry: North Kohala belt, not the mountain.',
      lede:
        'We do not cook at the peak.',
      photo: 'dinMaunaKea',
      body: [
        'North Kohala resort belt. Corridor, not the mountain. Base zone. Villa dinners. Inquiry until we can staff.',
        'This piece is the kitchen note. We will not sell a summit dinner.',
        'A cooktop is still required. East side is a different day.',
      ],
      faqs: [
        {
          q: 'Do you cook at the summit?',
          a: 'No. The resort belt.',
        },
      ],
      related: [
        { path: '/mauna-kea', label: 'Private chef Mauna Kea resort' },
        { path: '/kohala', label: 'Private chef Kohala' },
        { path: '/blog/dining-in-kohala', label: 'Kohala kitchen notes' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-kau',
      name: 'Dining in Kaʻū',
      h1: 'Kaʻū notes — south-side estates, named coffee follows Act 198.',
      title: 'Kaʻū kitchen notes — south-side estates, named coffee follows Act 198 | myCHEF',
      description:
        'Short Kaʻū / South notes at inquiry: extended surcharge.',
      lede: 'Short Kaʻū / South notes at inquiry: extended surcharge.',
      photo: 'dinKau',
      body: [
        'South point direction. Extended surcharge, advance notice. South-side estates. Named Kaʻū coffee follows Act 198 from 2027. Inquiry until we can staff.',
        'This piece is the kitchen note. We do not invent a farm brand for the south. Open the Kona coffee labeling notes for the rule.',
      ],
      faqs: [
      ],
      related: [
        { path: '/kau', label: 'Private chef Kaʻū' },
        { path: '/coffee-act-198', label: 'Coffee Act 198' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-honokaa',
      name: 'Dining in Honokaʻa',
      h1: 'Honokaʻa notes — Hāmākua coast, named producers only after verification.',
      title: 'Honokaʻa kitchen notes — Hāmākua coast, verified producers only | myCHEF',
      description:
        'Short Honokaʻa / Hāmākua notes at inquiry: surcharge, named producers only after verification.',
      lede: 'Short Honokaʻa / Hāmākua notes at inquiry: surcharge, named producers only after verification.',
      photo: 'dinHonokaa',
      body: [
        'Hāmākua coast. Surcharge. Named producers only after written verification. Estate dinners. Inquiry until we can staff.',
        'This piece is the kitchen note. This is not a same-day Kona add-on and not a Hilo day unless we quote it that way.',
        'A cooktop is still required. Send the address on the quote form.',
      ],
      faqs: [
        {
          q: 'Will you print a farm name?',
          a: 'Only after written verification. Open our journal note on Sourcing honesty — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/honokaa', label: 'Private chef Honokaʻa' },
        { path: '/east-side', label: 'East side' },
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'dining-in-puako',
      name: 'Dining in Puakō',
      h1: 'Puakō notes — between Waikoloa and Mauna Lani, inquiry.',
      title: 'Puakō kitchen notes — between Waikoloa and Mauna Lani, inquiry | myCHEF',
      description:
        'Short Puakō notes at inquiry: Kohala coast residential.',
      lede: 'Short Puakō notes at inquiry: Kohala coast residential.',
      photo: 'dinPuako',
      body: [
        'Kohala coast residential between Waikoloa and Mauna Lani. Base zone inside the 30-minute corridor. Villa weeks. Inquiry until we can staff.',
        'This piece is the kitchen note. East side stays a dedicated day.',
        'A cooktop is still required. A band is not an instant-booking button. Send the address on the quote form.',
      ],
      faqs: [
      ],
      related: [
        { path: '/puako', label: 'Private chef Puakō' },
        { path: '/waikoloa', label: 'Private chef Waikoloa' },
        { path: '/kohala', label: 'Private chef Kohala' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'named-farms',
      name: 'Named farms',
      h1: 'West-side farm names — produce on the invoice, coffee follows Act 198.',
      title: 'Hawaiʻi Island farm names — produce on the invoice, coffee follows Act 198 | myCHEF',
      description:
        'West-side farm names print on the invoice only after written verification. Named coffee follows Act 198.',
      lede: 'West-side farm names print on the invoice only after written verification. Named coffee follows Act 198.',
      photo: 'blogFarmsBigisland',
      body: [
        'A draft that names a farm without a paper trail is a brochure. Produce prints as food until the producer is verified in writing. Named coffee follows Act 198 — that rule is on the Kona coffee labeling notes.',
        'Fish is a different honesty note. East side is a dedicated day.',
      ],
      faqs: [
      ],
      related: [
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/coffee-act-198', label: 'Coffee Act 198' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'fish-species',
      name: 'Fish species',
      h1: 'West-side fish names — the species on the Kona invoice, not a guess.',
      title: 'Hawaiʻi Island fish names — the species on the west-side invoice | myCHEF',
      description:
        'West-side fish is named as the species on the inquiry invoice.',
      lede: 'West-side fish is named as the species on the inquiry invoice.',
      photo: 'blogFishBigisland',
      body: [
        'The west-side invoice names the fish we purchased that morning when we can staff. We will not print a species we did not buy, and we will not dress a grocery-case fillet as a pier story.',
        'Produce names are a different note. East side is a dedicated day.',
      ],
      faqs: [
        {
          q: 'Will you guess the species for the menu card?',
          a: 'No. Unverified fish is named as fish — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/blog/sourcing-honesty', label: 'Sourcing honesty' },
        { path: '/blog/named-farms', label: 'Named farms' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'coffee-labeling',
      name: 'Coffee labeling',
      h1: 'West-side coffee lots — the bag we bought, not a second origin essay.',
      title: 'West-side coffee lots — the bag we bought, not a second origin essay | myCHEF',
      description:
        'West-side coffee on the invoice is a documented lot.',
      lede: 'West-side coffee on the invoice is a documented lot.',
      photo: 'blogCoffeeBigisland',
      body: [
        'The origin rule is on the Kona coffee labeling notes. We will not print a farm we do not have in writing. Inquiry until we can staff.',
        'Peak months are a different note. East side is a dedicated day.',
      ],
      faqs: [
      ],
      related: [
        { path: '/coffee-act-198', label: 'Coffee Act 198' },
        { path: '/blog/named-farms', label: 'Named farms' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'peak-season',
      name: 'Peak season',
      h1: 'West-side peak months — Ironman sits on the same December–March calendar.',
      title: 'West-side December through March — Ironman sits on the same calendar | myCHEF',
      description:
        'West-side December–March at inquiry, with Ironman on the same calendar.',
      lede: 'West-side December–March at inquiry, with Ironman on the same calendar.',
      photo: 'blogPeakBigisland',
      body: [
        'December through March on the west side is not a generic Hawaiʻi peak essay. Ironman week sits on the same calendar. East side is a dedicated day — not a Kona add-on.',
        'How far ahead to enquire is on our journal note on How far ahead.',
      ],
      faqs: [
      ],
      related: [
        { path: '/ironman-weeks', label: 'Ironman weeks' },
        { path: '/journal/how-far-ahead-to-book', label: 'How far ahead' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'no-fake-reviews',
      name: 'No fake reviews',
      h1: 'West side has no star ratings yet. We will not invent them.',
      title: 'Why the west side has no star ratings yet — zero guest reviews | myCHEF',
      description:
        'Why west-side Hawaiʻi Island has no guest reviews yet at inquiry.',
      lede: 'Why west-side Hawaiʻi Island has no guest reviews yet at inquiry.',
      photo: 'blogReviewsBigisland',
      body: [
        'Hawaiʻi guest reviews on this site: none yet. Booking by inquiry is not a reason to invent stars. They go up after verified events — never bought, never written here. West side first.',
        'East side is a dedicated day.',
      ],
      faqs: [
        {
          q: 'Does this cover Hilo reviews?',
          a: 'No. We will not invent those either.',
        },
      ],
      related: [
        { path: '/trust', label: 'Honesty register' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    ...EXTRA_BLOG_NOTES.bigisland,
  ],
};

export function getBlogArticle(islandId: IslandId, slug: string) {
  return blogArticles[islandId].find((row) => row.slug === slug);
}
