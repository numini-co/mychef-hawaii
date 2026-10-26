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
      h1: 'Kamaʻāina household chefs — weekly, not a tourist dinner.',
      title: 'Weekly chef for Oʻahu resident households | myCHEF',
      description:
        'Weekly cooking for Oʻahu residents in Honolulu, Kailua, and town apartments with a stove. A standing rhythm, not a visitor dinner. Request a written quote.',
      lede:
        'Resident kitchens. School nights. A fridge that actually gets used. This is not a one-off villa dinner dressed up as local.',
      photo: 'cellKamaaina',
      body: [
        'Kamaʻāina service is frequency: the same Oʻahu household, the same corridors, a standing shop-and-cook rhythm. Honolulu residences, Kailua households, and town apartments with a real stove are the fit. School nights and a fridge that gets used are the point. A one-off visitor dinner belongs on another page.',
        'Visitor weeks are [vacation chef weeks](/vacation-chef). What a single night includes is [Private chef Honolulu](/private-chef). Town residences are [Honolulu](/honolulu). Windward households are [Kailua](/kailua). Bands and fee lines are on [pricing](/pricing). Request a written quote on [the quote form](/quote) with the address and how often you want the cook.',
      ],
      faqs: [
        {
          q: 'Can a town apartment with a stove take a standing weekly cook?',
          a: 'It can, when the stove is real. Kailua weeks are often a longer estate stay. A Honolulu apartment can be a standing weeknight instead. Tell us the address and the rhythm on [the quote form](/quote). A room without a cooktop is declined.',
        },
        {
          q: 'Who should use the kamaʻāina line instead of a visitor week?',
          a: 'People who live in the house. The rhythm is the same household, week after week. Visitors open [vacation chef weeks](/vacation-chef). A one-off celebration is not this page. Request a written quote if the fridge is yours.',
        },
        {
          q: 'How does a school-night cook differ from a villa dinner?',
          a: 'The night is a household supper, then a clean kitchen, on a repeating calendar. It is not a tasting table for guests who leave on Sunday. Name how often you want the cook. The menu follows that household, not a resort seating.',
        },
        {
          q: 'Which Oʻahu neighborhoods fit this weekly rhythm?',
          a: 'Honolulu residences, Kailua households, and town apartments with a working stove. Open [Honolulu](/honolulu) or [Kailua](/kailua) for the street you mean. This page is the frequency, not a second map. Request a written quote for the address.',
        },
        {
          q: 'Where do I see prices for a resident week?',
          a: 'On [pricing](/pricing): the bands, then 20% service and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit follows acceptance. Gratuity is never required. Travel is confirmed on the written quote. We do not print a separate travel price here.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
        { path: '/private-chef', label: 'Private chef Honolulu' },
        { path: '/honolulu', label: 'Honolulu residences' },
        { path: '/kailua', label: 'Kailua households' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
    {
      slug: 'conventions',
      name: 'Conventions',
      h1: 'Convention calendars are closed — we cook houses.',
      title: 'House dinners while conventions are closed | myCHEF',
      description:
        'The Hawaiʻi Convention Center calendar is closed through 2027. We cook Oʻahu residences and villas, not a ballroom. Request a written quote for the house.',
      lede:
        'We cook houses. We do not staff ballrooms. That calendar is closed through 2027, and a ballroom is not our product anyway.',
      photo: 'cellConventions',
      body: [
        'The Hawaiʻi Convention Center calendar is closed through 2027. We cook houses. We do not staff a ballroom, and we will not pretend this department takes that work while the calendar is closed. A residence dinner stays a residence dinner even when a conference is in town.',
        'Offsites that happen in a house, with a kitchen and a lawn, are [villa events](/events). Staffed rooms are [Oahu catering](/catering). A busy January can press hospitality on this island. We name the calendar. We do not claim an affiliation. Bands are on [pricing](/pricing). Request a written quote on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Can you cater a lunch inside the convention building?',
          a: 'We cook houses, not a lunch in that building. A ballroom drop-off is a different company. The convention calendar is closed through 2027, and we do not staff it. Request a written quote only if the meal is in a residence.',
        },
        {
          q: 'Can a Kahala house host a board dinner during a conference week?',
          a: 'A Kahala house with a kitchen is a house booking. The conference across town is not part of the plate. Name the residence on [the quote form](/quote). We will not turn the house into a ballroom because a meeting is in town.',
        },
        {
          q: 'What still fits while that convention calendar is closed?',
          a: 'A dinner in a villa or a residence: a kitchen, a table, and the guest list you already have. Film and production crews in a house are the same staffed room. Open [villa events](/events). Request a written quote for the address, not the hall.',
        },
        {
          q: 'Do you claim a tie to a tournament or a conference brand?',
          a: 'We do not. A busy week on the calendar can press hotels and houses. We name that pressure. We do not print a logo or an affiliation. The booking is still the house. Request a written quote with the dates.',
        },
        {
          q: 'Where do I price a house dinner instead of a hall?',
          a: 'Bands and fee lines are on [pricing](/pricing). Staffed rooms are [Oahu catering](/catering). Request a written quote on [the quote form](/quote) with the residence, the date, and the headcount. The written total is the booking.',
        },
      ],
      related: [
        { path: '/events', label: 'Villa events' },
        { path: '/catering', label: 'Oahu catering' },
        { path: '/pricing', label: 'Rate card' },
        { path: '/quote', label: 'Written quote' },
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
      title: 'Legal short-stay villas in Ko Olina | myCHEF',
      description:
        'Ko Olina holds the legal short-stay villa pool on Oʻahu. Arrival nights and longer villa weeks use those kitchens. Request a written quote.',
      lede:
        'We say legal because the law does. Ko Olina is where visitor villas actually sit on this island. Town apartments are a different product.',
      photo: 'cellShortStay',
      body: [
        'Ko Olina holds the legal short-stay villa pool on this island. We say legal because the law does. Town apartments and unpermitted rentals are a different product, and we will not advertise them. A chef week here is a villa kitchen on the west side: an arrival night, then the days you actually book.',
        'The corridor page is [Ko Olina](/ko-olina). Multi-day visitor cooking is [vacation chef weeks](/vacation-chef). Resident weekly cooking is the [kamaʻāina line](/kamaaina). Grocery lines stay on [pricing](/pricing), not blended on this page. Request a written quote on [the quote form](/quote) with the villa and the length of the stay.',
      ],
      faqs: [
        {
          q: 'Will you cook in an unpermitted Honolulu vacation rental?',
          a: 'We will not advertise an unpermitted rental as a product. Permitting stays with the host. The legal pool we name is Ko Olina. If the kitchen is a town apartment, say so. Request a written quote only for a villa stay that is actually legal.',
        },
        {
          q: 'What does a Ko Olina short-stay week usually ask for first?',
          a: 'An arrival-night dinner, then the further days you want cooked. The villa needs a kitchen. West-side provisioning is planned before the rush, the same as a town night, on a different corridor. Put the landing time on [the quote form](/quote).',
        },
        {
          q: 'How is a short-stay villa week different from a kamaʻāina household?',
          a: 'This page is visitors in a legal Ko Olina villa. The [kamaʻāina line](/kamaaina) is residents on a repeating week. Do not file a household Tuesday as a villa arrival. Request a written quote for the stay you actually have.',
        },
        {
          q: 'What has to be true of the villa kitchen?',
          a: 'A working cooktop, cold storage, and room for the headcount. A lock-off without heat is declined before a deposit. Tell us the property type with the dates. We write the menu for the burners that are there.',
        },
        {
          q: 'Where are prices for a west-side villa week?',
          a: 'On [pricing](/pricing). Fee lines — 20% service and Hawaiʻi GET up to 4.712% — sit on their own rows, with a 50% deposit after you accept. Gratuity is never required. The corridor detail is [Ko Olina](/ko-olina). Request a written quote for the villa.',
        },
      ],
      related: [
        { path: '/ko-olina', label: 'Ko Olina corridor' },
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
        { path: '/kamaaina', label: 'Kamaʻāina line' },
        { path: '/pricing', label: 'Rate card' },
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
      title: 'Hanalei bridge weather clause, 72-hour notice | myCHEF',
      description:
        'Far-north Kauaʻi dates name the road and the weather. 72-hour notice. A closure reschedules the night rather than forfeiting it. Request availability.',
      lede:
        'The road decides the night. We write the weather clause instead of guessing. Request availability and name the shore.',
      photo: 'cellHanaleiBridge',
      body: [
        'The road is the constraint. Far-north addresses, including Hāʻena, are confirmed on the written quote with this weather clause. Notice is 72 hours. If the one-lane bridge closes, we reschedule rather than forfeit the food. Poʻipū does not inherit the clause. The quote names the shore.',
        'Princeville and Hanalei name their shore on that same written quote. The estate dinner itself is [Hanalei](/hanalei) or the [North Shore](/north-shore) page. Far-north houses are [Hāʻena](/haena). The map is [coverage](/coverage). Bands are on [pricing](/pricing). Request availability on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Does every Kauaʻi booking inherit the Hanalei bridge clause?',
          a: 'Far-north addresses inherit it. Poʻipū does not. The written quote names the shore, so a south-shore lawn is not given a north-shore weather plan. Request availability with the shore written on the form.',
        },
        {
          q: 'What does 72-hour notice change on a far-north date?',
          a: 'It gives the road a chance to be real before we shop. A far-north night is planned, not a same-afternoon add-on. Send the date with that notice when you request availability. We confirm a crew in writing.',
        },
        {
          q: 'If the bridge closes after the guests have already flown in, what moves?',
          a: 'The night moves. The island does not. Food that cannot be held is handled in writing on the quote, not as a surprise fee. A closure reschedules rather than forfeits. Request availability with the dates you can still hold.',
        },
        {
          q: 'Where is the estate dinner written, if this page is only the road?',
          a: 'Hanalei estates are [Hanalei](/hanalei). The three-place overview is [North Shore](/north-shore). This page is the weather clause those addresses carry. Request availability on the page that matches the house, and name the bridge if you are past it.',
        },
        {
          q: 'How do I request availability with the shore named?',
          a: 'Use [the quote form](/quote) and write Princeville, Hanalei, or Hāʻena, plus the dates. Bands are on [pricing](/pricing). The map is [coverage](/coverage). We confirm the clause with the shore, not as a guess on the night.',
        },
      ],
      related: [
        { path: '/hanalei', label: 'Hanalei corridor' },
        { path: '/north-shore', label: 'Kauaʻi North Shore' },
        { path: '/haena', label: 'Hāʻena dinners' },
        { path: '/coverage', label: 'Coverage map' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
    {
      slug: 'north-shore',
      name: 'North Shore',
      h1: 'Kauaʻi North Shore — Princeville, Hanalei, Hāʻena.',
      title: 'Kauaʻi North Shore dinners, Princeville to Hāʻena | myCHEF',
      description:
        'Princeville, Hanalei, and Hāʻena dinners on Kauaʻi North Shore. Winters book early. Far-north dates use the bridge weather clause. Request availability.',
      lede:
        'Misted mountains, wet stone, a covered lānai plan. The North is not the South. Winters book early because the weather is the calendar.',
      photo: 'cellKauaiNorth',
      body: [
        'The North Shore is three places with one weather problem: Princeville houses, Hanalei estates, and Hāʻena past the bridge. Winters book early because surf season is the calendar. A chef night can be in the kitchen or on a covered lānai. Outdoor fire is a weather call, not a promise.',
        'Hāʻena dates are confirmed on the written quote with the Hanalei-bridge weather clause. Read [Hāʻena](/haena) and [Hanalei bridge](/hanalei-bridge). Princeville is [Princeville](/princeville). Hanalei is [Hanalei](/hanalei). Bands are on [pricing](/pricing). Request availability on [the quote form](/quote) with the shore and the dates.',
      ],
      faqs: [
        {
          q: 'Do you cook in Princeville houses and in Hanalei estates?',
          a: 'Both, when the kitchen works and a crew can hold the week. Princeville and Hanalei are the North Shore houses we name. Request availability with which one you have. They are not the South Shore, and they are not the same driveway.',
        },
        {
          q: 'How are Hāʻena dates confirmed?',
          a: 'On the written quote, with the Hanalei-bridge weather clause. Hāʻena is past the bridge, so the road is part of the date. Read [Hāʻena](/haena) and [Hanalei bridge](/hanalei-bridge). Request availability rather than assuming the far north is a Princeville add-on.',
        },
        {
          q: 'Can a winter swell still leave the kitchen usable?',
          a: 'The kitchen and a covered lānai can still run. Outdoor fire is a weather call, not a promise. Surf season is why winters book early. Tell us the backup table when you request availability.',
        },
        {
          q: 'What should a North Shore availability request include?',
          a: 'The shore, the house, the dates, and the headcount. Princeville, Hanalei, or Hāʻena — write one. We staff the estate when a crew exists, and we confirm that in writing. A published band is not a held date.',
        },
        {
          q: 'Where are Kauaʻi prices for this shore?',
          a: 'On [pricing](/pricing). Service is 20% and Hawaiʻi GET up to 4.712%, each on its own line, with a 50% deposit after you accept. Gratuity is never required. Travel is confirmed on the written quote. Request availability on [the quote form](/quote).',
        },
      ],
      related: [
        { path: '/princeville', label: 'Princeville' },
        { path: '/hanalei', label: 'Hanalei' },
        { path: '/haena', label: 'Hāʻena' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/pricing', label: 'Rate card' },
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
      h1: 'Kona–Kohala west side — seven communities, not the whole island.',
      title: 'Kona–Kohala west side, seven communities | myCHEF',
      description:
        'Seven west-side communities from Kailua-Kona to Kohala, by inquiry. The island is larger than this belt. Hilo is a different day. Join the inquiry list.',
      lede:
        'Kailua-Kona, Keauhou, Waikoloa, Mauna Lani, the Mauna Kea resort belt, and Kohala Coast houses. Hilo is a different day.',
      photo: 'cellKohalaCorridor',
      body: [
        'This page names the west-side communities we actually staff: Kailua-Kona, Keauhou, Waikoloa, Mauna Lani, the Mauna Kea resort belt, Hualālai-area houses, and North Kohala coast homes. Hard sun and lava terraces are the setting. Kitchens run from a true pass to a galley. The rest of the island is not implied.',
        'Waimea is upcountry on the same side, with travel confirmed on the written quote, not one of these seven. Resort and house pages include [Mauna Kea](/mauna-kea), [Mauna Lani](/mauna-lani), and [Puakō](/puako). Hilo is a different day on [the east side](/east-side). The map is [coverage](/coverage). Bands are on [pricing](/pricing). Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Which seven communities are on this west-side page?',
          a: 'Kailua-Kona, Keauhou, Waikoloa, Mauna Lani, the Mauna Kea resort belt, Hualālai-area houses, and North Kohala coast homes. They are listed so Hilo cannot be quietly added. Join the inquiry list for the community you actually have.',
        },
        {
          q: 'Is Waimea one of those seven communities?',
          a: 'Waimea is upcountry ranch country on the same side, not this lava coast. Travel for a Waimea address is confirmed on the written quote. Open [Waimea](/waimea) if that is the house. Do not file it as a Kohala terrace.',
        },
        {
          q: 'What kinds of kitchens show up from Kona town to the Kohala Coast?',
          a: 'A true pass in some resort houses, a galley in others. The menu follows the burners on site. A unit without a cooktop is declined. Name the property type when you join the inquiry list.',
        },
        {
          q: 'Why is Hilo missing from this west-side list?',
          a: 'Hilo is its own dedicated day, never stacked on a west-side day. The rule lives on [the east side](/east-side). This page would be false if it absorbed that drive. Join the inquiry list for one side at a time.',
        },
        {
          q: 'Where do I read prices for a west-side night?',
          a: 'On [pricing](/pricing). After the food, 20% service and Hawaiʻi GET up to 4.712% are their own lines. A 50% deposit follows acceptance. Gratuity is never required. Travel is confirmed on the written quote. Join the inquiry list on [the quote form](/quote).',
        },
      ],
      related: [
        { path: '/kona', label: 'Kona' },
        { path: '/waikoloa', label: 'Waikoloa' },
        { path: '/kohala', label: 'Kohala Coast' },
        { path: '/mauna-lani', label: 'Mauna Lani' },
        { path: '/east-side', label: 'East-side day' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
    {
      slug: 'coffee-act-198',
      name: 'Coffee origin',
      h1: 'Coffee origin labeling — Act 198 from 2027.',
      title: 'Coffee origin labels for Kona and Kaʻū | myCHEF',
      description:
        'Named Kona and Kaʻū coffee follow Act 198 from 2027. Origin prints only when the lot is documented. Otherwise the menu says coffee. Join the inquiry list.',
      lede:
        'The plate can still have coffee. The menu card cannot have a farm we do not have in writing. Origin law is the honesty register for this island.',
      photo: 'cellCoffeeAct',
      body: [
        'Act 198 tightens origin labeling for named Kona and Kaʻū coffee from 2027. The plate can still include coffee. The menu card cannot name a farm we do not have in writing. Coffee-rubbed catch can stay on a west-side menu. Unlabeled cherries are produce, not an origin claim.',
        'South-side dinners that meet this rule are [Kaʻū](/kau). Hillside houses above Kona are [Hōlualoa](/holualoa). Sample plates are on [menus](/menus). We cook dinners. We do not add a farm tour. Bands are on [pricing](/pricing). Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Will you print “Kona coffee” on the menu card?',
          a: 'Only when that lot is documented. Otherwise the line says coffee. We would rather under-claim than invent a farm. Join the inquiry list if you want the plate, and we will say what the paper supports.',
        },
        {
          q: 'Does the same origin rule cover named Kaʻū coffee?',
          a: 'It does, from 2027, for a named Kaʻū origin. A south-side dinner does not get a decorative farm. Read [Kaʻū](/kau) for the place, and keep the label honest. Unlabeled coffee can still be served.',
        },
        {
          q: 'Do you take guests to farms as part of the dinner?',
          a: 'We cook dinners. A farm visit is not a course and not a booking on this page. If a name cannot be documented, it stays off the card. Join the inquiry list for the table, not a tour.',
        },
        {
          q: 'Can coffee still be on the plate without an origin?',
          a: 'It can. Coffee-rubbed catch can stay on a west-side menu. Cherries without paper are produce, not a claim. The honesty is the missing farm name, not a missing dessert. Sample plates are on [menus](/menus).',
        },
        {
          q: 'Which dinner pages use this labeling rule?',
          a: 'Any menu that would name Kona or Kaʻū coffee. Hillside houses are [Hōlualoa](/holualoa). The south is [Kaʻū](/kau). Bands are on [pricing](/pricing). Join the inquiry list on [the quote form](/quote) and we will match the card to the lot.',
        },
      ],
      related: [
        { path: '/menus', label: 'Menus' },
        { path: '/kau', label: 'Kaʻū dinners' },
        { path: '/holualoa', label: 'Hōlualoa' },
        { path: '/pricing', label: 'Rate card' },
      ],
    },
    {
      slug: 'ironman-weeks',
      name: 'Event weeks',
      h1: 'Kailua-Kona event weeks — the calendar compresses.',
      title: 'Kailua-Kona event weeks fill the town | myCHEF',
      description:
        'Event weeks in Kailua-Kona compress availability. Flag those dates on the inquiry. We do not claim an affiliation or print a logo. Join the inquiry list.',
      lede:
        'Town fills. Aliʻi Drive is not a quiet provisioning run. Villa breakfasts still happen — if we held the date. Inquiry stage.',
      photo: 'cellIronman',
      body: [
        'World Championship week and other pier-town events pack Kailua-Kona. Aliʻi Drive is not a quiet provisioning run. Villa breakfasts still happen when the date was held. We do not print event logos or claim an affiliation. This page is a calendar warning so we do not oversell.',
        'Flag those dates on the inquiry. A Waikoloa house is a different traffic story than a townhouse above Aliʻi Drive, and both stay on the west side. Read [Kailua-Kona](/kailua-kona), [Kona–Kohala communities](/kohala-corridor), and [how a night runs](/how-it-works). Bands are on [pricing](/pricing). Join the inquiry list on [the quote form](/quote).',
      ],
      faqs: [
        {
          q: 'Are you an official caterer for a pier-town race?',
          a: 'We cook villa kitchens. There is no affiliation, no logo, and no implied sponsorship. A packed week changes the calendar. It does not change who we cook for. Join the inquiry list for the house, not for a finish-line tent.',
        },
        {
          q: 'How early should an event-week villa breakfast be requested?',
          a: 'Earlier than an ordinary Tuesday. Those weeks compress, and a held date is the only breakfast we can cook. A normal west-side week uses a normal inquiry lead. Flag the event week on [the quote form](/quote).',
        },
        {
          q: 'Does a Waikoloa house face the same town crush as Aliʻi Drive?',
          a: 'It is a different traffic story, still on the west side. Townhouses above Aliʻi Drive feel the pier-town pack. A Waikoloa drive is not that street. Name which one you have. Both still need the date held.',
        },
        {
          q: 'Will an event logo appear on the menu or the quote?',
          a: 'It will not. We do not print logos or claim a tie to the week. The quote names your house, your dates, and the menu. Join the inquiry list if you want the villa breakfast while the town is full.',
        },
        {
          q: 'Where do ordinary west-side Tuesdays go when it is not an event week?',
          a: 'On [Kailua-Kona](/kailua-kona) or the [Kona–Kohala communities](/kohala-corridor), at a normal inquiry pace. This page is only the compressed weeks. Bands are on [pricing](/pricing). Join the inquiry list on [the quote form](/quote).',
        },
      ],
      related: [
        { path: '/kailua-kona', label: 'Kailua-Kona dinners' },
        { path: '/kohala-corridor', label: 'West-side communities' },
        { path: '/how-it-works', label: 'How a night runs' },
        { path: '/pricing', label: 'Rate card' },
        { path: '/quote', label: 'Inquiry list' },
      ],
    },
    {
      slug: 'east-side',
      name: 'East side',
      h1: 'Hilo and Volcano — a dedicated day, never a west-side round trip.',
      title: 'Hilo and Volcano as their own chef day | myCHEF',
      description:
        'Hilo and Volcano are quoted in writing as their own dedicated day, 2.5–3 hours from Kona. Never stacked on a west-side day. Join the inquiry list.',
      lede:
        'Rain, ʻōhiʻa, a different island climate. The east is not a Kohala add-on. If we staff it, it is its own team day.',
      photo: 'cellEastSide',
      body: [
        'Hilo and Volcano are quoted in writing as their own dedicated day. The drive from Kona is 2.5–3 hours, and that day is never stacked on a west-side day. Rain, ʻōhiʻa, and a different climate are the setting. If a crew can hold the date, the quote says so. We will not publish a live east-side calendar ahead of that crew.',
        'The west-side communities are [Kona–Kohala](/kohala-corridor). Town kitchens are [Hilo](/hilo). Lodge kitchens are [Volcano](/volcano). The map is [coverage](/coverage). Bands are on [pricing](/pricing). Join the inquiry list on [the quote form](/quote) and name the east-side address as its own day.',
      ],
      faqs: [
        {
          q: 'What is this page for, if Hilo and Volcano already have URLs?',
          a: 'This page is the rule those URLs share. [Hilo](/hilo) is the town kitchen. [Volcano](/volcano) is the lodge kitchen. Neither is a footnote on a Waikoloa brochure. Join the inquiry list for the address, and keep the day dedicated.',
        },
        {
          q: 'How is an east-side day kept from hiding inside a Kohala booking?',
          a: 'It is written as its own day, with its own crew note, 2.5–3 hours from Kona. A Kohala dinner does not absorb it. The west-side list stays on [Kona–Kohala](/kohala-corridor). Join the inquiry list for one side only.',
        },
        {
          q: 'When is an east-side date actually accepted?',
          a: 'When a crew can hold that side of the island. A published band is not a live calendar. We say so on the quote, or we decline. Do not treat “send the dates” as a promise that the week is already staffed.',
        },
        {
          q: 'What happens to an outdoor plan if Volcano weather turns?',
          a: 'Volcano weather is its own plan. We will not promise outdoor fire we cannot keep. A covered or indoor backup is written, or the lawn is declined. Put that preference on the inquiry so the day is honest before anyone shops.',
        },
        {
          q: 'How do I join the inquiry list for an east-side day only?',
          a: 'Use [the quote form](/quote) and name Hilo or Volcano, the dates, and the headcount as one dedicated day. Bands are on [pricing](/pricing). The map is [coverage](/coverage). A west-side afternoon is a different request.',
        },
      ],
      related: [
        { path: '/coverage', label: 'Coverage map' },
        { path: '/kohala-corridor', label: 'West-side communities' },
        { path: '/hilo', label: 'Hilo dinners' },
        { path: '/volcano', label: 'Volcano dinners' },
        { path: '/quote', label: 'Inquiry list' },
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
