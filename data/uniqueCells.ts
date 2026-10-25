import type { IslandId } from './islands';
import type { PhotoKey } from './photos';
import { SEARCH_VOLUMES } from './offers';
import { AREA_CELLS } from './areaCells';

/**
 * Island-only commercial cells from the catalog UNIQUE map.
 * Skip slugs that already live as money neighborhoods (Maui /lahaina).
 * Titles must not steal /catering or / money keywords.
 */

export interface UniqueCell {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  lede: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
  related: { path: string; label: string }[];
}

export const uniqueCells: Record<IslandId, UniqueCell[]> = {
  oahu: [
    {
      slug: 'kamaaina',
      name: 'Kamaʻāina line',
      h1: 'Kamaʻāina household chefs — weekly, not a tourist.',
      title: 'Kamaʻāina weekly household chefs — Oʻahu residents | myCHEF',
      description:
        'Weekly household service for Oʻahu residents. Frequency, not yield. Not a visitor dinner. Personal-chef weeks sit next to the villa line.',
      lede:
        'Resident kitchens. School nights. A fridge that actually gets used. This is not a one-off villa dinner dressed up as local.',
      photo: 'cellKamaaina',
      body: [
        `Neither belongs in a tourist-dinner title.`,
        'Kamaʻāina is frequency: the same household, the same corridors, a standing shop-and-cook rhythm.',
        'Honolulu residences, Kailua households, town apartments with a real stove. We do not sell this as a yield product. If you are visiting, open the private chef page or the Stay Chef page.',
      ],
      faqs: [
        {
          q: 'Do you need a 30-day estate?',
          a: 'Kailua weeks often are. Town apartments with a kitchen can be a standing Tuesday. Tell us the address.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
        { path: '/private-chef', label: 'What’s included' },
        { path: '/honolulu', label: 'Honolulu residences' },
      ],
    },
    {
      slug: 'conventions',
      name: 'Conventions',
      h1: 'HCC citywides are closed — we are not a MICE kitchen.',
      title: 'HCC citywides are closed — not a MICE kitchen | myCHEF Oahu',
      description:
        'Hawaiʻi Convention Center citywides are closed through 2027. myCHEF Oahu cooks residences and villas, not convention citywides.',
      lede:
        'We cook houses. We do not staff ballrooms for citywide conventions. That is a closed market through 2027, and it is not our product anyway.',
      photo: 'cellConventions',
      body: [
        'The Hawaiʻi Convention Center citywide calendar is closed through 2027. This department will not pretend to be a MICE play while that is true — or after, unless we staff that work for real.',
        'Offsites that actually happen in houses — 10–75 guests, a kitchen, a lawn — are the occasions page and the catering page. Film and production crews in residences are the same staffed-room product, not a convention overlay.',
        'January around the Sony Open week presses hospitality on this island. We name the calendar. We do not claim an affiliation.',
      ],
      faqs: [
        {
          q: 'Can you cater a convention lunch downtown?',
          a: 'No. We staff villa and residence events. Drop-off for a ballroom is a different company.',
        },
        {
          q: 'What about a board dinner in Kahala during a conference?',
          a: 'A house with a kitchen is our product. The conference across town is not.',
        },
      ],
      related: [
        { path: '/events', label: 'Villa events' },
        { path: '/catering', label: 'Staffed catering' },
        { path: '/about', label: 'The Oahu crew' },
      ],
    },
    {
      slug: 'gold-coast',
      name: 'Gold Coast',
      h1: 'Gold Coast estate dining rooms — Kahala to Diamond Head.',
      title: 'Gold Coast estate chef dinners | myCHEF',
      description:
        'Private chef dinners in Gold Coast dining rooms from Kahala to Diamond Head. Base zone, no North Shore line. The house, not a hotel suite.',
      lede:
        'The dining room is the point. Brass, koa, a lawn that opens to one Diamond Head cone. This is estate entertaining on the Gold Coast.',
      photo: 'cellGoldCoast',
      body: [
        'The Gold Coast is the estate belt from Kahala to Diamond Head: houses with dining rooms, not a Waikīkī kitchenette. The dining room is the point. Name the house, not a nearby hotel. A Tuesday dinner for eight stays a house booking on this page. Wedding-weekend kitchens are on [weddings](/weddings). The crew follows the guest list already written for this coast. A seated reception is still that same house.',
        'This coast is base zone. There is no North Shore travel line on a Gold Coast address. Kahala holds the estate corridor and Diamond Head holds the adjacent residences, so a Tuesday dinner stays here while a wedding weekend is written apart. Kahala estates are [Kahala](/kahala). Residences beside the cone are [Diamond Head](/diamond-head). The wider town is [Honolulu](/honolulu). Oʻahu bands and fee lines are on [pricing](/pricing). Request a written quote on [the quote form](/quote) and name the house, not a hotel.',
      ],
      faqs: [
        {
          q: 'Can you cook in a hotel suite near the Gold Coast instead of the house?',
          a: 'Only if that suite has a kitchen. Most do not, and a suite without a cooktop is declined. The Gold Coast product is the house with a dining room. Request a written quote for the residence, and say if you are actually in a hotel.',
        },
        {
          q: 'What estate dining rooms sit between Kahala and Diamond Head?',
          a: 'Houses on this belt with a real dining room and a working kitchen. Kahala is the estate corridor. Diamond Head is the adjacent residences. This page is the belt as a whole. Open the URL that matches the house before you request a written quote.',
        },
        {
          q: 'Does the Gold Coast add a North Shore travel line?',
          a: 'A Gold Coast address does not add a North Shore travel line. These houses are base zone. A North Shore drive is a different page and a different line. We do not paste that surcharge onto Kahala or Diamond Head. Oʻahu bands and fee lines are on the pricing page.',
        },
        {
          q: 'Where does a wedding weekend go versus a Tuesday dinner?',
          a: 'A Tuesday dinner for eight stays a house booking on this page. A wedding weekend is written on the weddings page, as its own kitchen plan. They are not the same crew note. Request a written quote for the night you mean.',
        },
        {
          q: 'How is this page different from Kahala and from Diamond Head?',
          a: 'Kahala is the estate corridor. Diamond Head is the residences beside the cone. This URL is the belt that holds both, not a third company. Honolulu is the wider town. Request a written quote with the actual street.',
        },
      ],
      related: [
        { path: '/kahala', label: 'Kahala corridor' },
        { path: '/diamond-head', label: 'Diamond Head residences' },
        { path: '/weddings', label: 'Wedding weekends' },
        { path: '/honolulu', label: 'Honolulu residences' },
      ],
    },
    {
      slug: 'short-stay',
      name: 'Short-stay villas',
      h1: 'Legal short-stay villas in Ko Olina — the west-side pool.',
      title: 'Legal short-stay villas in Ko Olina | myCHEF Oahu',
      description:
        'Ko Olina holds the deepest legal short-stay villa pool on Oʻahu. Stay Chef weeks, arrival-night dinners, west-side provisioning.',
      lede:
        'We say legal because the law does. Ko Olina is where visitor villas actually sit on this island. Town apartments are a different product.',
      photo: 'cellShortStay',
      body: [
        'The legal short-stay fact: the west-side villa pool, not a wink at unpermitted town rentals.',
        'Stay Chef weeks and arrival-night dinners are the usual stack. Groceries at cost on multi-day.',
        'West-side provisioning. We are on-site before the rush the same way we are in town — the corridor is just different.',
      ],
      faqs: [
        {
          q: 'Will you cook in an unpermitted Honolulu vacation rental?',
          a: 'We cook in kitchens. Permitting is the host’s problem; we will not advertise illegal short-stay as a product. Ko Olina is the legal pool we name.',
        },
        {
          q: 'Is this a tourist dinner?',
          a: 'It is a villa week for people staying legally on the west side.',
        },
      ],
      related: [
        { path: '/ko-olina', label: 'Ko Olina corridor' },
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
        { path: '/kamaaina', label: 'Kamaʻāina line' },
      ],
    },
    ...AREA_CELLS.oahu,
  ],
  maui: [
    {
      slug: 'south-maui',
      name: 'South Maui',
      h1: 'South Maui corridor — Wailea, Makena, Kīhei logistics.',
      title: 'South Maui private chef corridor | myCHEF',
      description:
        'Private chef logistics for South Maui: Wailea resort residences, Makena houses, and Kīhei vacation homes. One team, three driveways, a written quote.',
      lede:
        'Same south shore. Not the same driveway. Wailea, Makena, and Kīhei each have a live URL.',
      photo: 'cellSouthMaui',
      body: [
        'Wailea, Makena, and Kīhei are three South Maui logistics stories and one team. Resort residences, lava-terrace houses, and residential vacation homes do not share a driveway. Kīhei family weeks and Wailea tasting tables can both be quoted. They are different houses, not a ranking. Makena stays the quieter inventory south of Wailea. This page names that south-shore drive. It does not replace the neighborhood pages: [Wailea](/wailea), [Makena](/makena), and [Kīhei](/kihei).',
        'Upcountry is not South Maui. Pāʻia and Haʻikū are quoted in writing as their own booking, on [Pāʻia](/paia), and they are not folded into a Wailea day. The climb is [Upcountry](/upcountry). Two services on this shore are quoted as two nights or a day rate. Fee lines are on [pricing](/pricing). Request a written quote on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Is a Kīhei family week a lesser Wailea booking?',
          a: 'It is a different house, not a lower crew. Family weeks are common in Kīhei vacation homes. Wailea is often the tasting table. Makena is the quieter inventory south of Wailea. Open the neighborhood page that matches the driveway.',
        },
        {
          q: 'Can Wailea and Kīhei share one unpaid chef day?',
          a: 'Two services in one day are quoted as two nights or a day rate. We will not squeeze a tasting and a family dinner into one unpaid sprint. Name both addresses if you want both. Request a written quote before anyone shops.',
        },
        {
          q: 'How is a Makena house different from Wailea on this shore?',
          a: 'Makena is still South Maui, with quieter houses south of the Wailea residences. It is not a second team. The driveway and the outdoor plan are what change. Read the Makena page for that inventory, then send the address.',
        },
        {
          q: 'Is Pāʻia part of a South Maui dinner?',
          a: 'Pāʻia and Haʻikū are quoted in writing as their own booking. They are not folded into a Wailea day, and this shore does not absorb that drive. Open the Pāʻia page if that is the house. Upcountry is a different climb.',
        },
        {
          q: 'Where are South Maui prices, and what is not this shore?',
          a: 'Maui bands and fee lines are on the pricing page. This URL is the south-shore drive across Wailea, Makena, and Kīhei. The climb is Upcountry. Request a written quote with the driveway you mean, not all three at once.',
        },
      ],
      related: [
        { path: '/wailea', label: 'Wailea' },
        { path: '/makena', label: 'Makena' },
        { path: '/kihei', label: 'Kīhei' },
        { path: '/paia', label: 'Pāʻia booking' },
      ],
    },
    {
      slug: 'west-maui',
      name: 'West Maui',
      h1: 'West Maui corridor — Kāʻanapali to Kapalua.',
      title: 'West Maui private chef houses | myCHEF',
      description:
        'Private chef houses from Kāʻanapali to Kapalua, including Nāpili and Honokōwai. Arrival traffic is planned. Not sold as a Lahaina dining brand.',
      lede:
        'The channel, the headland, the deck at west sunset. Kāʻanapali to Kapalua. We do not sell this corridor as a Lahaina dining brand.',
      photo: 'cellWestMaui',
      body: [
        'The channel, the headland, and the west sunset are the setting. The booking is still the kitchen in the house. West Maui runs from Kāʻanapali to Kapalua. Live neighborhood pages are [Kāʻanapali](/kaanapali), [Kapalua](/kapalua), and [Lahaina](/lahaina). Nāpili houses and Honokōwai condos sit between those names: [Nāpili](/napili) and [Honokōwai](/honokowai). We cook houses with kitchens. We do not sell this coast as a Lahaina dining brand.',
        'Traffic is planned into arrival, not discovered on the invoice. A Saturday here is not a South Maui Saturday. Kapalua is often a quieter dinner. Kāʻanapali is often a family deck. Read the neighborhood page that matches the house, then the Maui bands on [pricing](/pricing). Request a written quote on [the quote form](/quote) with the address.',
      ],
      faqs: [
        {
          q: 'Do you cook in Lahaina, or in West Maui houses?',
          a: 'We cook West Maui houses with kitchens. Tell us the address. We will not run a Lahaina dining ad, and the Lahaina page is the naming note. Nāpili and Honokōwai are the in-between houses. Request a written quote for the street you have.',
        },
        {
          q: 'How is a Kapalua night different from a Kāʻanapali deck?',
          a: 'Both sit in the base area. Kapalua is often a quieter dinner near the headland. Kāʻanapali is often a family deck. The menu still follows the kitchen in that house. Open the neighborhood URL before you request a written quote.',
        },
        {
          q: 'Where do Nāpili and Honokōwai sit on West Maui?',
          a: 'Between the named corridors. Nāpili is the house page. Honokōwai is the condo strip. This page is the overview from Kāʻanapali to Kapalua. Use the town URL that matches the building, then send that address.',
        },
        {
          q: 'How is Saturday traffic handled on a West Maui arrival?',
          a: 'It is planned into arrival, not discovered on the invoice. A Saturday here is not a South Maui Saturday. Name the landing time on the quote form so the shop clock is set before the drive fills in.',
        },
        {
          q: 'Where do I see West Maui prices before a written quote?',
          a: 'On the pricing page. Service, Hawaiʻi GET, the deposit, and gratuity stay on their own lines. This overview does not add a town fee. Request a written quote with the neighborhood and the address.',
        },
      ],
      related: [
        { path: '/kaanapali', label: 'Kāʻanapali' },
        { path: '/kapalua', label: 'Kapalua' },
        { path: '/napili', label: 'Nāpili houses' },
        { path: '/honokowai', label: 'Honokōwai condos' },
        { path: '/lahaina', label: 'How we name Lahaina' },
      ],
    },
    {
      slug: 'wedding-week',
      name: 'Wedding week',
      h1: 'Maui wedding week — four lines, one kitchen.',
      title: 'Maui wedding week — welcome dinner to brunch | myCHEF',
      description:
        'Primary wedding island. Welcome dinner, rehearsal, reception, and recovery brunch as separate lines.',
      lede:
        'The week is the product. Each night is its own line so the reception does not swallow the welcome dinner. One culinary team.',
      photo: 'cellMauiWeddingWeek',
      body: [
        'Welcome dinner. Rehearsal. Reception. Recovery brunch. Written as four lines — or however many nights you actually want. Guest counts we staff: receptions about 10–75.',
        'Wailea lawns, Kapalua houses, Makena terraces. Wet-weather backup is written for grass.',
      ],
      faqs: [
        {
          q: 'Is this the wedding catering page?',
          a: `No.`,
        },
        {
          q: 'Can we skip the reception and only do welcome + brunch?',
          a: 'Yes. Each night is a line. You do not buy a phantom reception to get a welcome dinner.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding catering' },
        { path: '/events', label: 'Occasion nights' },
        { path: '/bar', label: 'Villa cocktails' },
      ],
    },
    ...AREA_CELLS.maui,
  ],
  kauai: [
    {
      slug: 'hanalei-bridge',
      name: 'Hanalei bridge',
      h1: 'Hanalei bridge clause — 72-hour notice, reschedule not forfeit.',
      title: 'Hanalei bridge weather clause — 72-hour notice | myCHEF Kauai',
      description:
        'Far-North Kauai events inherit a written road and weather clause. 72-hour notice. Closures reschedule rather than forfeit.',
      lede:
        'The road is the product constraint. We write it down instead of shrugging on the night. Inquiry stage, both shores.',
      photo: 'cellHanaleiBridge',
      body: [
        'Hāʻena and the far North are quote-only. Princeville and Hanalei already carry a shore surcharge. Past the bridge, weather and the one-lane road decide whether we arrive.',
        '72-hour notice. If the road closes, we reschedule rather than forfeit the food. The clause is on the quote.',
        'This is not a North Shore postcard. It is logistics. The estate dinner itself is the Hanalei page or the North Shore page.',
      ],
      faqs: [
        {
          q: 'Does every Kauai booking get this clause?',
          a: 'No. Far-North addresses inherit it. Poʻipū does not. The quote names the shore.',
        },
        {
          q: 'What if we already flew in?',
          a: 'We move the night, not the island. Food that cannot be held is handled in writing on the quote — not as a surprise fee.',
        },
      ],
      related: [
        { path: '/hanalei', label: 'Hanalei corridor' },
        { path: '/north-shore', label: 'Kauaʻi North Shore' },
        { path: '/coverage', label: 'Coverage map' },
      ],
    },
    {
      slug: 'north-shore',
      name: 'North Shore',
      h1: 'Kauaʻi North Shore — Princeville, Hanalei, Hāʻena.',
      title: 'Kauaʻi North Shore — Princeville, Hanalei, Hāʻena | myCHEF',
      description:
        'Princeville, Hanalei, Hāʻena. Surf-season winters book early. Far-North inherits the bridge clause. Inquiry stage.',
      lede:
        'Misted mountains, wet stone, a covered lānai plan. The North is not the South. Winters book early because the weather is the calendar.',
      photo: 'cellKauaiNorth',
      body: [
        'We cook in Princeville and Hanalei. Hāʻena is quote-only with the Hanalei bridge notes.',
        `Private chef Poipu Kauai is a related South Shore phrase. Starting prices from $225 a guest — published, not invented.`,
        'Inquiry stage. We staff the estate when a crew exists.',
      ],
      faqs: [
        {
          q: 'Winter swell — can you still cook?',
          a: 'In the kitchen and on a covered terrace, yes. Outdoor fire is a weather call. Far-North still inherits the bridge clause.',
        },
      ],
      related: [
        { path: '/princeville', label: 'Princeville' },
        { path: '/hanalei', label: 'Hanalei' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
      ],
    },
    {
      slug: 'south-shore',
      name: 'South Shore',
      h1: 'Kauaʻi South Shore — Poʻipū and Kōloa.',
      title: 'Kauaʻi South Shore chef nights | myCHEF',
      description:
        'Private chef nights on the Kauaʻi South Shore: Poʻipū and Kōloa. Shorter drive from Līhuʻe than the North, same card. Request availability.',
      lede:
        'Kiawe, red dirt, pale cliffs, a pool kitchen in the morning. The South is sun and fire. It is still a published shore surcharge.',
      photo: 'cellKauaiSouth',
      body: [
        'The South Shore as a whole is Poʻipū and Kōloa, sun-side kitchens closer to Līhuʻe than Princeville. The drive is shorter than the North. The menu band is the same Kauaʻi card, and the shore line is still named on the written quote. Wood-grilled catch happens when that kitchen can take fire. Arrival mornings in a pool kitchen are the usual Poʻipū ask, while Kōloa is more often the town house beside that shore. This page is not a second company.',
        'Poʻipū is the resort-and-house page, [Poʻipū](/poipu). Kōloa is the town beside it, [Kōloa](/koloa). Kalāheo, ʻEleʻele, Hanapēpē, and Waimea sit off this villa belt: start at [Kalāheo](/kalaheo) or [Hanapēpē](/hanapepe) if that is the street. The other shore is [North Shore](/north-shore). Sample plates are on [menus](/menus). Bands are on [pricing](/pricing). Request availability on [the quote form](/quote) with the shore and the dates.',
      ],
      faqs: [
        {
          q: 'Is Poʻipū cheaper than Hanalei because the drive is shorter?',
          a: 'The starting band is the same Kauaʻi card. The South Shore drive from Līhuʻe is shorter than Princeville, and both shores still name their line on the quote. A shorter drive is not a discount on the fish. Request availability for the shore you mean.',
        },
        {
          q: 'Is the South Shore a separate chef brand from the rest of Kauaʻi?',
          a: 'It is the same Kauaʻi team, not a second company. Poʻipū and Kōloa share this overview. The North Shore is the other geography. One department, two shores. Request availability with the shore written on the form.',
        },
        {
          q: 'What is the difference between a Poʻipū kitchen and a Kōloa town house?',
          a: 'Poʻipū is the shore houses and resort-area kitchens. Kōloa is the town beside that shore. Both use this page as the overview and their own URL for the house type. Open the one that matches the driveway before you request availability.',
        },
        {
          q: 'When can a South Shore kitchen take wood-grilled catch?',
          a: 'When that kitchen can take fire. If the range cannot, the menu changes or we decline the plan. We do not promise a grill the house does not have. Say what the outdoor setup is when you request availability.',
        },
        {
          q: 'Where do Kalāheo and the west side sit relative to this shore?',
          a: 'Off the Poʻipū and Kōloa villa belt. Kalāheo is the residential stretch. Hanapēpē and Waimea continue west and need their own notice. This page does not absorb those streets. Request availability on the URL that matches the house.',
        },
      ],
      related: [
        { path: '/poipu', label: 'Poʻipū corridor' },
        { path: '/koloa', label: 'Kōloa town' },
        { path: '/kalaheo', label: 'Kalāheo houses' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/menus', label: 'Menus' },
      ],
    },
    {
      slug: 'wedding-week',
      name: 'Wedding week',
      h1: 'Kauaʻi wedding week — estate formats, inquiry.',
      title: 'Kauaʻi wedding week — estate formats, inquiry | myCHEF',
      description:
        'Estate wedding weeks on both shores to about 75 guests. Welcome, rehearsal, reception as separate lines. Inquiry stage.',
      lede:
        'Not a ballroom. An estate table looking into a valley, or a South Shore lawn. Inquiry stage. Each night is a line.',
      photo: 'cellKauaiWeddingWeek',
      body: [
        'Welcome, rehearsal, reception as separate lines. Estate formats to about 75.',
        'From $260 a guest plus staffing — published. Inquiry list with the shore and the dates.',
      ],
      faqs: [
        {
          q: 'Can I book the reception only?',
          a: 'Yes. The week is optional.',
        },
        {
          q: 'Ballroom at a resort?',
          a: 'Not our product. Houses and estates with kitchens. Guest counts about 10–75.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Wedding catering' },
        { path: '/events', label: 'Estate events' },
        { path: '/hanalei-bridge', label: 'Far-North clause' },
      ],
    },
    ...AREA_CELLS.kauai,
  ],
  bigisland: [
    {
      slug: 'kohala-corridor',
      name: 'Kona–Kohala corridor',
      h1: 'Kona–Kohala west-side radius — seven communities, not the whole island.',
      title: 'Kona–Kohala west-side radius — seven communities | myCHEF',
      description:
        'Seven resort communities inside a 30-minute west-side radius. The island is 4,000 square miles; we will not pretend to cover it.',
      lede:
        'Kailua-Kona, Keauhou, Waikoloa, Mauna Lani, the Mauna Kea resort belt, Kohala Coast houses. One radius. Hilo is a different day.',
      photo: 'cellKohalaCorridor',
      body: [
        'We cook in Kailua-Kona and Keauhou, Waikoloa and Kohala Coast.',
        'Hard sun, lava terraces, kitchens that range from a true pass to a galley. Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Is Waimea in this radius?',
          a: 'Waimea is a surcharge zone inland — ranch country, not this lava coast.',
        },
        {
          q: 'How many “seven communities”?',
          a: 'The west-side resort and town belt we actually staff: Kona town, Keauhou, Waikoloa, Mauna Lani, Mauna Kea resort, Hualālai-area houses, North Kohala coast homes. Named so we cannot quietly add Hilo.',
        },
      ],
      related: [
        { path: '/kona', label: 'Kona' },
        { path: '/waikoloa', label: 'Waikoloa' },
        { path: '/kohala', label: 'Kohala Coast' },
      ],
    },
    {
      slug: 'coffee-act-198',
      name: 'Coffee origin',
      h1: 'Coffee origin labeling — Act 198 from 2027.',
      title: 'Coffee origin labeling — Act 198 from 2027 | myCHEF Hawaiʻi Island',
      description:
        'Named Kaʻū and Kona coffee follow Act 198 from 2027. We do not invent farm names. Coffee on the crust is coffee until we can document origin.',
      lede:
        'The plate can still have coffee. The menu card cannot have a farm we do not have in writing. Origin law is the honesty register for this island.',
      photo: 'cellCoffeeAct',
      body: [
        'Act 198 tightens origin labeling for named Kona and Kaʻū coffee from 2027. We will not get ahead of it with decorative farm names.',
        'Coffee-rubbed catch is a west-side menu. Unlabeled cherries on the board are produce, not a claim.',
      ],
      faqs: [
        {
          q: 'Will you print “Kona coffee” on the menu?',
          a: 'When the lot is documented. Otherwise it is coffee. We would rather under-claim than invent.',
        },
        {
          q: 'Do you tour farms?',
          a: 'We cook dinners.',
        },
      ],
      related: [
        { path: '/menus', label: 'Menus' },
        { path: '/kona', label: 'Kona corridor' },
        { path: '/about', label: 'The west-side crew' },
      ],
    },
    {
      slug: 'ironman-weeks',
      name: 'Event weeks',
      h1: 'Kailua-Kona event weeks — the calendar compresses.',
      title: 'Kailua-Kona event weeks — calendar honesty | myCHEF',
      description:
        'Event weeks in Kailua-Kona compress availability. Flag those dates early. We publish the pressure instead of overselling.',
      lede:
        'Town fills. Aliʻi Drive is not a quiet provisioning run. Villa breakfasts still happen — if we held the date. Inquiry stage.',
      photo: 'cellIronman',
      body: [
        'World Championship week and other pier-town events pack Kailua-Kona. We do not print event logos or claim an affiliation. We print the calendar fact: availability compresses.',
        'Flag those dates on the inquiry. A Waikoloa house is a different traffic story than a townhouse above Aliʻi — still west side, still the Kona–Kohala corridor page.',
        'This is not a spectator-hospitality product. It is a warning so we do not oversell.',
      ],
      faqs: [
        {
          q: 'Are you an official caterer for the race?',
          a: 'No. We cook villa kitchens. No affiliation, no logos, no implied sponsorship.',
        },
        {
          q: 'Should I book a year out?',
          a: 'For those weeks, earlier is kinder. Ordinary west-side Tuesdays are a normal inquiry lead time.',
        },
      ],
      related: [
        { path: '/kona', label: 'Kona corridor' },
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/quote', label: 'Inquiry' },
      ],
    },
    {
      slug: 'east-side',
      name: 'East side',
      h1: 'Hilo and Volcano — quote-only, never a west-side round trip.',
      title: 'Hilo and Volcano — quote-only east side | myCHEF',
      description:
        '2.5–3 hours from Kona. Quote-only with dedicated staffing. We will not sell a same-day west-side round trip.',
      lede:
        'Rain, ʻōhiʻa, a different island climate. The east is not a Kohala add-on. If we staff it, it is its own team day.',
      photo: 'cellEastSide',
      body: [
        'The west-side radius is on the Kona–Kohala corridor page. This page exists so we cannot quietly claim Hilo on a Waikoloa brochure.',
        '2.5–3 hours. Dedicated staffing. Quoted with the menu. By inquiry — and more so than the west, because the bench has to exist on that side of the island.',
        'Volcano weather is its own plan. We will not promise outdoor fire we cannot keep.',
      ],
      faqs: [
        {
          q: 'Can you do breakfast in Hilo and dinner in Waikoloa?',
          a: 'Not as one unpaid day. That is two team days. We would rather decline than lie.',
        },
        {
          q: 'Is east side “coming soon”?',
          a: 'It is quote-only. When we have a crew, the quote says so. We will not publish “now serving Hilo” ahead of that.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage map' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/quote', label: 'Inquiry' },
      ],
    },
    ...AREA_CELLS.bigisland,
  ],
};

export function getUniqueCell(island: IslandId, slug: string): UniqueCell | undefined {
  return uniqueCells[island].find((cell) => cell.slug === slug);
}

export function uniqueCellSlugs(island: IslandId): string[] {
  return uniqueCells[island].map((cell) => cell.slug);
}
