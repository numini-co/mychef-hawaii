/**
 * Unique titles and descriptions per master-map URL.
 * One primary keyword per URL. Neighborhood doorway titles live on
 * moneyNeighborhoods (data/offers.ts) and win in resolveDocumentSeo.
 */

export interface PageMetaRecord {
  title: string;
  description: string;
}

const DEFAULT: PageMetaRecord = {
  title: 'Private Chef Hawaii | Four Island Villa Chefs | myCHEF',
  description:
    'Private chef Hawaii for villa dinner and in-home service. Oahu from $195 a guest. Maui, Kauaʻi, and the Big Island. Request a quote.',
};

export const PAGE_META: Record<string, PageMetaRecord> = {
  '/': {
    title: 'Private Chef Hawaii | 4 Islands, Published Prices | myCHEF',
    description:
      'Private chefs and catering across Oʻahu, Maui, Kauaʻi and the Big Island. From $195 a guest, published. Written quote; 20% service and GET itemized.',
  },
  '/islands': {
    title: 'The Four Islands We Cook On | myCHEF Hawaii',
    description:
      'Each island is its own host — own chefs, zones and pricing. Oʻahu and Maui take quotes. Kauaʻi and Hawaiʻi Island are inquiry. Island money titles stay on those hosts.',
  },
  '/areas': {
    title: 'Where we cook, by island | myCHEF',
    description:
      'Choose an island, then the geography.',
  },
  '/services': {
    title: 'Villa dinners, catering, weddings and bar — by island | myCHEF',
    description:
      'Pick your island for in-villa dinners, staffed catering, wedding weeks or a bartender add-on. WhatsApp for a quote.',
  },
  '/private-chef': {
    title: 'Villa Chef Hawaii | In-Villa Dinners by Island | myCHEF',
    description:
      'An in-villa chef for your Hawaii stay: dinners cooked and served in your villa or vacation rental on Oʻahu, Maui, Kauaʻi or the Big Island. From $195 a guest.',
  },
  '/catering': {
    title: 'Hawaii Catering | Staffed Villa Events 10–75 | myCHEF',
    description:
      'Hawaii catering for villa and estate events of 10–75 guests. Buffet or plated. Oahu, Maui, Kauaʻi, Big Island. Not ballrooms. Request a quote.',
  },
  '/vacation-chef': {
    title: 'Vacation chef Hawaii — Stay Chef from $1,250/day | myCHEF',
    description: 'A chef for the villa week. Day rates from $1,250 Oʻahu / $1,550 Maui. Groceries at cost.',
  },
  '/how-it-works': {
    title: 'How a booking works in Hawaii | myCHEF',
    description:
      'WhatsApp or quote, menu in 48 hours, written price, we cook and leave it clean. Typical reply in Hawaii business hours.',
  },
  '/pricing': {
    title: 'Private Chef & Catering Prices in Hawaii | myCHEF',
    description:
      'Chef prices by island in USD. Oʻahu $195–$290 a guest. Maui and Kauaʻi $225–$375. Hawaiʻi Island $210–$325. 20% service and GET up to 4.712%.',
  },
  '/quote': {
    title: 'Get a quote — myCHEF Hawaii',
    description: 'Five fields, two minutes. WhatsApp or this form. Typical reply in Hawaii business hours.',
  },
  '/estimate': {
    title: 'Hawaiʻi private chef cost estimator | myCHEF',
    description:
      'Estimate a villa chef night across four islands from published starting prices. Groceries dual-model, 20% service and Hawaiʻi GET itemized. An estimate — the written quote is the total.',
  },
  '/in-villa-services': {
    title: 'In-Villa Services Hawaii — Chefs, Butlers & Teams | myCHEF',
    description:
      'In-villa services for your whole stay across four islands: villa chefs, lead hosts, servers, bartenders, baristas and provisioning. One coordinator, one written quote, groceries at cost with receipts.',
  },
  '/in-villa-services/villa-team': {
    title: 'Villa Team Hawaii — One Coordinator, One Quote | myCHEF',
    description:
      'Tell us your stay — dates, guests, island, meals — and we build your complete villa team: chef, host, servers, barista and bar. Built from published rates, groceries at cost with receipts.',
  },
  '/in-villa-services/weekly-private-chef': {
    title: 'Private Chef for Your Whole Stay in Hawaiʻi | myCHEF',
    description:
      'A chef and assistant at your villa every day of the stay — breakfast, lunch and dinner cooked in, groceries billed at cost with receipts. Published Stay Chef day rates across four islands.',
  },
  '/in-villa-services/butlers': {
    title: 'Villa Butler & Lead Host Service in Hawaiʻi | myCHEF',
    description:
      'A dedicated lead host for table, meal and drinks service in your villa — by the day, shift, event or whole stay. Published service-staff rates; 20% service and Hawaiʻi GET itemized.',
  },
  '/in-villa-services/waiters': {
    title: 'Villa Waiters & Service Staff in Hawaiʻi | myCHEF',
    description:
      'Uniformed servers for villa dinners, parties, weddings and multi-day stays across the islands. Published hourly rates, minimum-hours booking, written quote is the total.',
  },
  '/in-villa-services/bartenders': {
    title: 'Villa Bartender & Bar Service in Hawaiʻi | myCHEF',
    description:
      'A private bartender and full bar in your villa — tools, glassware, ice and garnishes. Hourly or packaged four-hour bar, spirits at cost or BYO. Published rates across four islands.',
  },
  '/in-villa-services/barista': {
    title: 'Villa Barista & Morning Coffee Service in Hawaiʻi | myCHEF',
    description:
      'A barista at your villa each morning — espresso machine, freshly ground beans, oat, almond and soy milks as standard. Quoted per session; a lower per-morning rate on weekly stays.',
  },
  '/in-villa-services/villa-provisioning': {
    title: 'Villa Provisioning & Fridge Stocking in Hawaiʻi | myCHEF',
    description:
      'Your villa kitchen stocked before you arrive — fridge, pantry, breakfast and beverages. Groceries at cost with receipts; the service fee is confirmed in writing, free with a stay chef.',
  },
  '/in-villa-services/breakfast-service': {
    title: 'Daily Villa Breakfast Service in Hawaiʻi | myCHEF',
    description:
      'A chef-cooked breakfast in your villa every morning of the stay — eggs, pancakes, island fruit, proper coffee, kitchen cleaned. Published one-meal Stay Chef rate; groceries at cost with receipts.',
  },
  '/oahu/estimate': {
    title: 'Town & west cost range — Oʻahu estimator | myCHEF',
    description:
      'Estimate an Oʻahu villa dinner or Stay Chef week from town and west CORE bands ($195–$290 a guest, Stay Chef from $1,250). Groceries dual-model, 20% service and GET itemized. Not a quote.',
  },
  '/maui/estimate': {
    title: 'Villa-week cost range — Maui estimator | myCHEF',
    description:
      'Estimate a Maui villa-week dinner or Stay Chef stay from Wailea and West bands ($225–$375 a guest, Stay Chef from $1,550). Groceries dual-model, 20% service and GET itemized. Not a quote.',
  },
  '/kauai/estimate': {
    title: 'Both-shore inquiry range — Kauaʻi estimator | myCHEF',
    description:
      'Estimate a Kauaʻi inquiry dinner or week from both-shore bands ($225–$375 a guest, Stay Chef from $1,650). Inquiry stage. Groceries dual-model, 20% service and GET itemized. The written quote is the total.',
  },
  '/bigisland/estimate': {
    title: 'West-side inquiry range — Hawaiʻi Island estimator | myCHEF',
    description:
      'Estimate a west-side Hawaiʻi Island dinner or week (CORE $210–$325 a guest, Stay Chef from $1,450). Inquiry. Hilo is not in this range. Groceries dual-model, 20% service and GET itemized.',
  },
  '/about': {
    title: 'About myCHEF Hawaii | Island Chef Teams',
    description:
      'myCHEF Hawaii is a four-island villa chef team. We staff a brigade to the size of the house — chef, sous, service, bar, shopper. Request a quote.',
  },
  '/weddings': {
    title: 'Wedding Catering Hawaii | Wedding-Week Chefs | myCHEF',
    description:
      'Wedding catering Hawaii: one team for the whole week. Welcome dinner, ceremony, and the days after. Request a quote.',
  },
  '/bar': {
    title: 'Villa bartender add-on — terrace cocktails, by island | myCHEF',
    description:
      'A bartender stacked with dinner or booked as its own hour. Starting prices published per island.',
  },
  '/mobile-bar': {
    title: 'Mobile bar Hawaii | 4-hour villa package | myCHEF',
    description:
      'Mobile bar Hawaii: a four-hour cart, bartender, citrus and ice. Starting prices published per island.',
  },
  '/trust': {
    title: 'Trust standards — Honesty register | myCHEF Hawaii',
    description:
      'Hawaii is launching. Reviews publish only after verified events. No fabricated local proof.',
  },
  '/legal': {
    title: 'Booking notes — quotes, GET, deposits | myCHEF Hawaii',
    description:
      'Published starting prices, service 20% and GET up to 4.712%, 50% deposit. Written quote is the confirmed total.',
  },
  '/journal': {
    title: 'The journal, by island | myCHEF Hawaii',
    description:
      'Each island department publishes its own journal.',
  },
  '/blog': {
    title: 'Guides and notes, by island | myCHEF Hawaii',
    description:
      'Each island department publishes its own blog. Statewide Hawaii catering stays on the hub catering page, not this directory.',
  },
  '/thank-you': {
    title: 'Enquiry received — myCHEF Hawaii',
    description: 'Your enquiry is in. A coordinator replies in Hawaii Standard Time, typically within one business day.',
  },
  '/corporate': {
    title: 'Corporate catering for Hawaii villa offsites | myCHEF Hawaii',
    description:
      'Staffed chef catering for villa offsites and production crews of 10–75. Not a convention-centre play while HCC citywides are closed through 2027.',
  },
  '/gatherings': {
    title: 'Private gatherings and family villa dinners | myCHEF Hawaii',
    description:
      'Birthdays, reunions, and rehearsal dinners in Hawaiian villas. Staffed 10–75.',
  },
  '/faq': {
    title: 'Questions, by island | myCHEF Hawaii',
    description: 'Answers to common questions about booking a private chef or catering with myCHEF Hawaii on Oʻahu, Maui, Kauaʻi and the Big Island.',
  },
  '/coverage': {
    title: 'Coverage maps, by island | myCHEF Hawaii',
    description: 'Where myCHEF Hawaii cooks on each island: base zones, published travel surcharges and the areas we quote case by case.',
  },
  '/contact': {
    title: 'How to reach a desk, by island | myCHEF Hawaii',
    description:
      'Quote form, WhatsApp, (808) 468-7748, and quotes@mychef-hawaii.com — Hawaii Standard Time. Open the island desk that holds the house. Not a walk-in office.',
  },
  '/locations': {
    title: 'Private chef towns, by island | myCHEF Hawaii',
    description: 'The towns and neighborhoods where myCHEF Hawaii private chefs cook on Oʻahu, Maui, Kauaʻi and the Big Island, with travel notes.',
  },
  '/menus': {
    title: 'How menus are designed, by island | myCHEF Hawaii',
    description:
      'Oʻahu, Maui, Kauaʻi and Hawaiʻi Island menus — designed per table, not a standing carte. Published USD prices in writing.',
  },
  '/help': {
    title: 'Help desks, by island | myCHEF Hawaii',
    description: 'Help desks across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/fine-dining': {
    title: 'In-villa formats, by island | myCHEF Hawaii',
    description:
      'Each island lists in-villa formats — not a Michelin claim.',
  },
  '/staffing': {
    title: 'Staffing add-ons, by island | myCHEF Hawaii',
    description:
      'Each island lists hourly add-ons: servers, bartenders, quoted butlers.',
  },
  '/events': {
    title: 'Villa occasions, by island | myCHEF Hawaii',
    description: 'Villa occasions across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/what-we-dont-do': {
    title: 'What we will not claim, by island | myCHEF Hawaii',
    description:
      'Each island publishes its own claim list.',
  },
  '/guest-counts': {
    title: 'Guest counts we staff, by island | myCHEF Hawaii',
    description:
      'Each island publishes dinners 2–15 and receptions about 10–75.',
  },
  '/dietary': {
    title: 'Dietary design, by island | myCHEF Hawaii',
    description:
      'Each island designs vegan, gluten-free, and allergy plates in advance.',
  },
  '/honeymoon-dinners': {
    title: 'Dinner for two, by island | myCHEF Hawaii',
    description: 'Dinner for two across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/chefs-table': {
    title: 'Chef’s table nights, by island | myCHEF Hawaii',
    description: 'Chef’s table nights across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/kids-menus': {
    title: 'Kids at the table, by island | myCHEF Hawaii',
    description:
      'Each island plans children’s plates with the adults’ menu.',
  },
  '/personal-chef': {
    title: 'Household chef line, by island | myCHEF Hawaii',
    description:
      'Each island keeps a resident household line.',
  },
  '/private-chef-cost': {
    title: 'Fee stack explainers, by island | myCHEF Hawaii',
    description:
      'What a private chef costs in Hawaii: the per-guest band, 20% service, GET up to 4.712%, and a 50% deposit. Each island writes the total before you pay.',
  },
  '/meal-prep': {
    title: 'Meal prep honesty, by island | myCHEF Hawaii',
    description:
      'Each island gates volume meal prep until utilization is proven.',
  },
  '/cooking-classes': {
    title: 'Cooking classes honesty, by island | myCHEF Hawaii',
    description:
      'Each island keeps classes unpublished until a real instructor bench exists.',
  },
  '/omakase-at-home': {
    title: 'Omakase-at-home notes, by island | myCHEF Hawaii',
    description: 'Omakase-at-home notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/rehearsal-dinners': {
    title: 'Rehearsal dinners, by island | myCHEF Hawaii',
    description:
      'Each island quotes the night before as its own line.',
  },
  '/retreat-catering': {
    title: 'Retreat full-board, by island | myCHEF Hawaii',
    description:
      'Each island quotes full-board retreat days in houses.',
  },
  '/corporate-catering': {
    title: 'House offsite catering, by island | myCHEF Hawaii',
    description:
      'Each island quotes executive dinners in houses.',
  },
  '/events/birthdays': {
    title: 'Birthday dinners, by island | myCHEF Hawaii',
    description: 'Birthday dinners across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/events/welcome-dinners': {
    title: 'Arrival-night dinners, by island | myCHEF Hawaii',
    description: 'Arrival-night dinners across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/events/retreats': {
    title: 'Retreat cooking notes, by island | myCHEF Hawaii',
    description: 'Retreat cooking notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/events/anniversaries': {
    title: 'Anniversary nights, by island | myCHEF Hawaii',
    description: 'Anniversary nights across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/events/corporate-events': {
    title: 'House offsite nights, by island | myCHEF Hawaii',
    description: 'House offsite nights across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/events/villa-parties': {
    title: 'Villa parties, by island | myCHEF Hawaii',
    description: 'Villa parties across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/events/brunch': {
    title: 'Day-after brunch, by island | myCHEF Hawaii',
    description: 'Day-after brunch across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/catering/bbq': {
    title: 'Lawn BBQ service, by island | myCHEF Hawaii',
    description: 'Lawn BBQ service across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/catering/plated': {
    title: 'Plated villa service, by island | myCHEF Hawaii',
    description:
      'Plated villa service across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/catering/family-style': {
    title: 'Family-style service, by island | myCHEF Hawaii',
    description: 'Family-style service across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/catering/buffet': {
    title: 'Buffet service, by island | myCHEF Hawaii',
    description: 'Buffet service across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/catering/grazing': {
    title: 'Grazing boards, by island | myCHEF Hawaii',
    description: 'Grazing boards across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/catering/drop-off': {
    title: 'Drop-off is not staffed, by island | myCHEF Hawaii',
    description:
      'Each island says drop-off is not staffed service.',
  },
  '/fine-dining/romantic-dinner': {
    title: 'Romantic villa dinners, by island | myCHEF Hawaii',
    description: 'Romantic villa dinners across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/fine-dining/tasting-menu': {
    title: 'Tasting menus, by island | myCHEF Hawaii',
    description: 'Tasting menus across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/fine-dining/chefs-table-evening': {
    title: 'Evening chef’s-table formats, by island | myCHEF Hawaii',
    description: 'Evening chef’s-table formats across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/fine-dining/celebration-dinner': {
    title: 'Celebration dinners, by island | myCHEF Hawaii',
    description: 'Celebration dinners across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/staffing/servers': {
    title: 'Server add-ons, by island | myCHEF Hawaii',
    description:
      'Each island quotes servers hourly.',
  },
  '/staffing/bartenders': {
    title: 'Bartender hourly lines, by island | myCHEF Hawaii',
    description:
      'Each island quotes bartenders hourly.',
  },
  '/staffing/butlers': {
    title: 'Quoted butler lines, by island | myCHEF Hawaii',
    description:
      'Each island quotes butlers only when a bench exists.',
  },
  '/menus/three-course': {
    title: 'Three-course tables, by island | myCHEF Hawaii',
    description: 'Three-course tables across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/menus/family-style-menu': {
    title: 'Family-style menus, by island | myCHEF Hawaii',
    description: 'Family-style menus across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/menus/breakfast': {
    title: 'Breakfast in the house, by island | myCHEF Hawaii',
    description:
      'Each island designs breakfast per table.',
  },
  '/menus/lunch': {
    title: 'Lunch in the house, by island | myCHEF Hawaii',
    description:
      'Each island designs lunch per table.',
  },
  '/help/getting-started': {
    title: 'First booking notes, by island | myCHEF Hawaii',
    description: 'First booking notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/help/menu-guide': {
    title: 'How to read a menu draft, by island | myCHEF Hawaii',
    description: 'How to read a menu draft across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/help/wedding-guide': {
    title: 'Wedding-week planning notes, by island | myCHEF Hawaii',
    description: 'Wedding-week planning notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/help/corporate-guide': {
    title: 'Offsite planning notes, by island | myCHEF Hawaii',
    description: 'Offsite planning notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
  },
  '/help/managing-booking': {
    title: 'After the quote, by island | myCHEF Hawaii',
    description: 'What happens after your written quote: deposit, menu edits, changes and the night itself, for myCHEF Hawaii bookings on every island.',
  },
  '/oahu': {
    title: 'Private Chef Oahu | Resident Villa and Home Chefs | myCHEF',
    description:
      'Private chef Oahu from $195 a guest — Honolulu, Waikīkī, Kahala, Kailua and Ko Olina. Villa dinners and household weeks. Request a written quote.',
  },
  '/maui': {
    title: 'Private Chef Maui | In-Villa Week Dinners | myCHEF',
    description:
      'Private chef Maui from $225 a guest. In-villa dinners and chef-for-the-week stays in Wailea, Kīhei, Kāʻanapali and Kapalua. Published prices, written quote.',
  },
  '/kauai': {
    title: 'Private Chef Kauai | Personal Chef, Both Shores | myCHEF',
    description:
      'Private chef Kauai from $225 a guest — a personal chef for villa dinners in Princeville, Hanalei and Poʻipū. By inquiry: send dates and shore for a written reply.',
  },
  '/bigisland': {
    title: 'Private Chef Big Island | Kona & Kohala Villas | myCHEF',
    description:
      'Private chef Big Island from $210 a guest — in-villa dinners in Kona, Waikoloa, Waimea and the Kohala Coast. By inquiry: send your dates for a written reply.',
  },
  '/oahu/private-chef': {
    title: 'Visitor dinners in the Oahu house | myCHEF',
    description:
      'In-home visitor dinners on Oahu. WhatsApp for a quote.',
  },
  '/oahu/vacation-chef': {
    title: 'Oʻahu vacation chef — Stay Chef villa weeks | myCHEF',
    description: 'A chef for the Oʻahu villa week. Stay Chef from $1,250 a day, groceries at cost.',
  },
  '/oahu/catering': {
    title: 'Oahu Catering | Honolulu to Ko Olina Events | myCHEF',
    description:
      'Oahu catering and Honolulu catering from $195 a guest — staffed villa and estate events from Honolulu and Kahala to Ko Olina, 10–75 guests. Buffet or plated. Request a quote.',
  },
  '/oahu/weddings': {
    title: 'Wedding Catering Oahu | Gold Coast Weekends | myCHEF',
    description:
      'Wedding catering Oahu — one kitchen for the weekend. Kahala, Ko Olina and Kailua estates. Starting prices published.',
  },
  '/oahu/bar': {
    title: 'Oʻahu villa cocktails — bartender on the lānai | myCHEF',
    description:
      'A bartender on your lānai. Published starting prices. Stack with a private chef in Waikīkī, Kahala, Ko Olina or Kailua.',
  },
  '/oahu/mobile-bar': {
    title: 'Oʻahu 4-hour mobile bar package | myCHEF',
    description: 'A four-hour cart — ice, citrus, glassware, bartender — from Waikīkī to Ko Olina. Quote in writing.',
  },
  '/oahu/events': {
    title: 'Oahu villa events — birthdays & retreats | myCHEF',
    description:
      'Staffed villa events on Oahu: birthdays, retreats and welcome nights from Honolulu to Ko Olina. Request a quote.',
  },
  '/oahu/about': {
    title: 'About myCHEF Oahu — Honolulu to Ko Olina crew | myCHEF',
    description:
      'myCHEF Oahu staffs a brigade to the house: chef, sous, service, bar, shopper. Honolulu, Waikīkī residences, Kahala, Kailua, Ko Olina. Request a quote.',
  },
  '/oahu/pricing': {
    title: 'Oahu Private Chef Prices — Stay Chef from $1,250 | myCHEF',
    description:
      'Oʻahu town and west CORE $195–$290 a guest. Stay Chef from $1,250 a day. Date Night from $675. Service and GET print after the band.',
  },
  '/oahu/quote': {
    title: 'Oahu quote form — corridor, kitchen, written total | myCHEF',
    description:
      'Five fields for an Oahu villa dinner or staffed room. Name the corridor and the kitchen. A written quote follows.',
  },
  '/oahu/legal': {
    title: 'Oahu booking notes — quotes, GET, Gold Coast kitchens | myCHEF',
    description:
      'Oahu booking notes: written quote, 50% deposit, 20% service, GET up to 4.712%. Gold Coast kitchens are the product. Hotel suites without a cooktop are declined.',
  },
  '/oahu/thank-you': {
    title: 'Oahu enquiry received | myCHEF',
    description: 'The Oahu coordinator has the corridor, the kitchen note, and the dates. Reply in Hawaii business hours.',
  },
  '/oahu/journal': {
    title: 'Oahu journal — villa kitchen notes | myCHEF',
    description:
      'Notes from Oʻahu villa and home kitchens — Kahala and Gold Coast counters, Waikīkī apartments, Ko Olina villas — and how a written quote is built.',
  },
  '/oahu/blog': {
    title: 'Oahu blog — Honolulu kitchens | myCHEF',
    description:
      'Short, plain-language posts on Oʻahu home and villa dinners — Honolulu kitchens, timing, cleanup and what goes on the written quote.',
  },
  '/oahu/locations': {
    title: 'Oahu towns we cook in — Honolulu to Ko Olina | myCHEF',
    description:
      'Every page on our Oahu site: Honolulu, Waikīkī, Kailua, North Shore, Kahala, Ko Olina, services and occasions.',
  },
  '/oahu/sitemap': {
    title: 'Oahu HTML sitemap — live URLs on this site | myCHEF',
    description: 'Oahu sitemap: neighborhoods, services, occasions and guides.',
  },
  '/maui/private-chef': {
    title: 'Visitor dinners in the Maui villa | myCHEF',
    description:
      'In-home visitor dinners on Maui. WhatsApp for a quote.',
  },
  '/maui/vacation-chef': {
    title: 'Maui vacation chef — Multi-day villa service | myCHEF',
    description: 'A chef for the whole Maui stay — provisioning, full-board days and retreat service.',
  },
  '/maui/weddings': {
    title: 'Wedding Catering Maui | Wedding-Week Chefs | myCHEF',
    description:
      'Wedding catering Maui — one team for the week. Welcome dinner through recovery brunch. Starting prices published. Request a quote.',
  },
  '/maui/bar': {
    title: 'Maui villa cocktails — Wailea and Kapalua terraces | myCHEF',
    description:
      'Terrace cocktail add-on for Maui villas and wedding weeks. Published starting prices. Stack with the chef.',
  },
  '/maui/mobile-bar': {
    title: 'Maui 4-hour mobile bar package | myCHEF',
    description: 'A four-hour cart for Wailea, Kapalua, Kāʻanapali and Makena. Starting prices published.',
  },
  '/maui/events': {
    title: 'Maui villa events — Wailea & West Maui | myCHEF',
    description:
      'Staffed villa events on Maui: birthdays, retreats and welcome nights in Wailea, Kīhei and West Maui.',
  },
  '/maui/about': {
    title: 'About myCHEF Maui — Wailea to West Maui crew | myCHEF',
    description:
      'myCHEF Maui staffs villa dinners and lawn receptions. Wailea, Kīhei, Kāʻanapali, Kapalua, Makena. Staffed catering for bigger parties. Request a quote.',
  },
  '/maui/pricing': {
    title: 'Maui villa-week bands — Wailea & West from $225 | myCHEF',
    description:
      'Maui villa-week CORE $225–$375 a guest. Stay Chef from $1,550 a day. Upcountry and West Maui travel print as their own lines.',
  },
  '/maui/quote': {
    title: 'Maui quote form — shore, kitchen, written total | myCHEF',
    description:
      'Five fields for a Maui villa dinner or staffed room. Name the shore and the kitchen. Saturday West Maui traffic is planned in.',
  },
  '/maui/legal': {
    title: 'Maui booking notes — quotes, GET, West Maui travel | myCHEF',
    description:
      'Maui booking notes: written quote, 50% deposit, 20% service, GET up to 4.712%. Saturday West Maui traffic is planned into arrival. Lahaina is a town, not a mystery fee.',
  },
  '/maui/thank-you': {
    title: 'Maui enquiry received | myCHEF',
    description: 'The Maui coordinator has the shore, the kitchen note, and the dates. Saturday West Maui traffic is planned into the reply.',
  },
  '/maui/journal': {
    title: 'Maui journal — South and West | myCHEF',
    description:
      'Notes from Maui villa kitchens in Wailea and Kāʻanapali — kitchen limits, wedding-week pacing and how a written quote is built.',
  },
  '/maui/blog': {
    title: 'Maui blog — villa nights | myCHEF',
    description:
      'Short posts on Maui villa dinners in Wailea and Kāʻanapali — timing, kitchens, cleanup and what goes on the written quote.',
  },
  '/maui/locations': {
    title: 'Maui towns we cook in — Wailea to Kapalua | myCHEF',
    description:
      'Every page on our Maui site: Wailea, Kāʻanapali, Lahaina, Kīhei, Kapalua, Makena, services and occasions.',
  },
  '/maui/sitemap': {
    title: 'Maui HTML sitemap — live URLs on this site | myCHEF',
    description: 'Maui sitemap: neighborhoods, services, occasions and guides.',
  },
  '/maui/catering': {
    title: 'Maui Catering Menus | Villa Receptions & Events | myCHEF',
    description:
      'Sample Maui catering menus for villa events of 10–75 guests — buffet, plated, or family-style in Wailea and West Maui. The menu is written for that house.',
  },
  '/kauai/private-chef': {
    title: 'Visitor dinners on Kauai — both shores, inquiry | myCHEF',
    description:
      'In-home visitor dinners on Kauai at inquiry.',
  },
  '/kauai/vacation-chef': {
    title: 'Vacation chef Kauai — Stay Chef from $1,650/day | myCHEF',
    description: 'A chef for your Kauaʻi week. Arrival-night dinner, provisioning, retreat full-board. Inquiry stage.',
  },
  '/kauai/events': {
    title: 'Kauai estate events — both shores, inquiry | myCHEF',
    description:
      'Staffed estate events on Kauai: Princeville, Hanalei and Poʻipū. Inquiry stage.',
  },
  '/kauai/about': {
    title: 'About myCHEF Kauai — both-shore inquiry crew | myCHEF',
    description:
      'myCHEF Kauai is by inquiry only on both shores: Princeville, Hanalei, Poʻipū. We staff the estate to the guest list when a crew exists.',
  },
  '/kauai/catering': {
    title: 'Kauai Catering | Princeville & Poipu Estate Events | myCHEF',
    description:
      'Kauai catering from $225 a guest — staffed estate and villa events in Princeville, Hanalei and Poʻipū, 10–75 guests. Buffet or plated. Inquiry stage.',
  },
  '/kauai/weddings': {
    title: 'Kauai Wedding Catering | Both-Shore Estate Weeks | myCHEF',
    description:
      'Kauai wedding catering from $260/pp plus staffing. Princeville, Hanalei and Poʻipū. Inquiry stage.',
  },
  '/kauai/bar': {
    title: 'Kauaʻi villa cocktails — Princeville and Poʻipū | myCHEF',
    description: 'Terrace cocktail add-on on both Kauaʻi shores. Inquiry stage.',
  },
  '/kauai/mobile-bar': {
    title: 'Kauaʻi 4-hour mobile bar package | myCHEF',
    description: 'A four-hour cart for Princeville, Hanalei and Poʻipū. Starting prices published. Inquiry stage.',
  },
  '/kauai/pricing': {
    title: 'Kauaʻi inquiry rate card — both shores, $225–$375 | myCHEF',
    description:
      'Kauaʻi inquiry CORE $225–$375 a guest. Stay Chef from $1,650 a day. Both-shore travel prints. A published band is not instant booking.',
  },
  '/kauai/quote': {
    title: 'Kauai inquiry form — both shores, written reply | myCHEF',
    description:
      'Inquiry form for Kauai estate dinners. Name the shore. Hanalei-bridge weather is a clause. We will not fake a live instant-booking button.',
  },
  '/kauai/legal': {
    title: 'Kauai booking notes — quotes, GET, Hanalei-bridge weather | myCHEF',
    description:
      'Kauai booking notes at inquiry: written quote when we can staff, 50% deposit, GET up to 4.712%. Hanalei-bridge closures reschedule rather than forfeit. We will not fake a live roster.',
  },
  '/kauai/thank-you': {
    title: 'Kauai inquiry received | myCHEF',
    description: 'The Kauai inquiry list has the shore and the dates. We write back with what we can staff. Hanalei-bridge weather is a clause.',
  },
  '/kauai/journal': {
    title: 'Kauai journal — both shores | myCHEF',
    description:
      'Notes from Kauaʻi kitchens on both shores — Hanalei-bridge weather in the north, Poʻipū villa kitchens in the south, and how inquiry dates are confirmed.',
  },
  '/kauai/blog': {
    title: 'Kauai blog — inquiry notes | myCHEF',
    description:
      'Short posts for Kauaʻi villa dinners in Princeville and Poʻipū — how inquiry dates work, kitchens, and what the written quote includes.',
  },
  '/kauai/locations': {
    title: 'Kauai towns we cook in — both shores | myCHEF',
    description:
      'Every page on our Kauai site: Princeville, Poʻipū, Hanalei, Kapaʻa, services and occasions.',
  },
  '/kauai/sitemap': {
    title: 'Kauai HTML sitemap — live URLs on this site | myCHEF',
    description:
      'Kauai sitemap: both shores, services, occasions and guides.',
  },
  '/bigisland/private-chef': {
    title: 'Visitor dinners on Hawaiʻi Island — west side, inquiry | myCHEF',
    description:
      'In-home visitor dinners on the west side at inquiry.',
  },
  '/bigisland/vacation-chef': {
    title: 'Vacation chef Big Island — from $1,450/day | myCHEF',
    description: 'Multi-day chef residencies for Kohala and Waimea weeks. Groceries at cost. Inquiry stage.',
  },
  '/bigisland/catering': {
    title: 'Big Island Catering | Kona & Kohala Villa Events | myCHEF',
    description:
      'Big Island catering from $210 a guest — staffed Kona and Kohala Coast villa receptions, buffet or plated. Inquiry stage; ask for a written quote.',
  },
  '/bigisland/weddings': {
    title: 'Wedding Catering Big Island | Kohala & Kona Weeks | myCHEF',
    description: 'Wedding catering Big Island — Kohala and Kona estate weeks. Starting prices published. Inquiry stage.',
  },
  '/bigisland/bar': {
    title: 'Hawaiʻi Island villa cocktails — Kohala terraces | myCHEF',
    description: 'Sunset pours on Kona–Kohala terraces. Bartender add-on.',
  },
  '/bigisland/mobile-bar': {
    title: 'Hawaiʻi Island 4-hour mobile bar package | myCHEF',
    description: 'A four-hour cart for the Kohala Coast and Kona. Inquiry-stage. Starting prices published.',
  },
  '/bigisland/events': {
    title: 'Big Island villa events — Kohala and Kona | myCHEF',
    description:
      'Staffed villa events on Hawaiʻi Island: Kohala Coast and Kona. Inquiry stage. East side is quote-only.',
  },
  '/bigisland/about': {
    title: 'About myCHEF Big Island — Kona–Kohala crew | myCHEF',
    description:
      'myCHEF Hawaiʻi Island is west-side first: Kona, Waikoloa, the Kohala Coast. Inquiry stage. Hilo is a different day.',
  },
  '/bigisland/pricing': {
    title: 'West-side rate card — Kona–Kohala CORE $210–$325 | myCHEF',
    description:
      'West-side Hawaiʻi Island CORE $210–$325 a guest. Stay Chef inquiry from $1,450 a day. Hilo is a dedicated day, never a Kona round trip.',
  },
  '/bigisland/quote': {
    title: 'Big Island chef inquiry — written reply | myCHEF',
    description:
      'Inquiry form for west-side Hawaiʻi Island dinners. East side is a different day. We will not fake a live instant-booking button.',
  },
  '/bigisland/legal': {
    title: 'Hawaiʻi Island booking notes — quotes, GET, east-side days | myCHEF',
    description:
      'Hawaiʻi Island booking notes at inquiry: written quote when we can staff, 50% deposit, GET up to 4.712%. West side first. East side is a dedicated day, never a west-side round trip.',
  },
  '/bigisland/thank-you': {
    title: 'Hawaiʻi Island inquiry received | myCHEF',
    description: 'The west-side inquiry list has the address and the dates. East side is a different day. We write back with what we can staff.',
  },
  '/bigisland/journal': {
    title: 'Hawaiʻi Island journal — west side first | myCHEF',
    description:
      'Notes from Hawaiʻi Island west-side kitchens in Kona and Kohala — Ironman weeks, Kona coffee labeling, and why Hilo is quoted as its own day.',
  },
  '/bigisland/blog': {
    title: 'Hawaiʻi Island blog — Kona first | myCHEF',
    description:
      'Short posts from Hawaiʻi Island west-side kitchens in Kona and Kohala. East-side Hilo dinners are quoted as a separate day.',
  },
  '/bigisland/locations': {
    title: 'Hawaiʻi Island towns we cook in — Kona to Kohala | myCHEF',
    description:
      'Every page on our Big Island site: Kona, Waimea, Waikoloa, Kohala, services and occasions.',
  },
  '/bigisland/sitemap': {
    title: 'Hawaiʻi Island HTML sitemap — live URLs on this site | myCHEF',
    description: 'Hawaiʻi Island HTML sitemap: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
  },
};

export function metaForPath(
  pathname: string,
  islandId?: string | null,
  hostMode?: boolean,
): PageMetaRecord {
  return lookupPageMeta(pathname, islandId, hostMode) ?? DEFAULT;
}

/** Explicit title/description if we wrote one — does not fall back to DEFAULT. */
export function lookupPageMeta(
  pathname: string,
  islandId?: string | null,
  hostMode?: boolean,
): PageMetaRecord | undefined {
  const clean = pathname.replace(/\/$/, '') || '/';
  if (hostMode && islandId) {
    const prefixed = clean === '/' ? `/${islandId}` : `/${islandId}${clean}`;
    return PAGE_META[prefixed];
  }
  return PAGE_META[clean];
}
