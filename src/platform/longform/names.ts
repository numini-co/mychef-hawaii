/** Human place / topic from an ASCII slug, with diacritics in copy only. */
const NAMED: Record<string, string> = {
  waikiki: 'Waikīkī',
  honolulu: 'Honolulu',
  'kahala-gold-coast': 'Kahala–Gold Coast',
  kahala: 'Kahala',
  'ko-olina': 'Ko Olina',
  kapolei: 'Kapolei',
  'kailua-lanikai': 'Kailua–Lanikai',
  kailua: 'Kailua',
  'north-shore': 'the North Shore',
  'turtle-bay': 'Turtle Bay',
  'hawaii-kai': 'Hawaiʻi Kai',
  wailea: 'Wailea',
  makena: 'Mākena',
  kaanapali: 'Kāʻanapali',
  lahaina: 'Lahaina',
  kapalua: 'Kapalua',
  upcountry: 'Upcountry',
  paia: 'Pāʻia',
  haiku: 'Haʻikū',
  princeville: 'Princeville',
  hanalei: 'Hanalei',
  poipu: 'Poʻipū',
  koloa: 'Kōloa',
  kapaa: 'Kapaʻa',
  lihue: 'Līhuʻe',
  kona: 'Kona',
  'kailua-kona': 'Kailua-Kona',
  kohala: 'the Kohala Coast',
  waikoloa: 'Waikōloa',
  keauhou: 'Keauhou',
  hilo: 'Hilo',
  volcano: 'Volcano',
  'private-chef': 'private chef service',
  catering: 'staffed catering',
  weddings: 'wedding catering',
  'stay-chef': 'Stay Chef',
  'retreat-catering': 'retreat catering',
  pricing: 'the published rate card',
  'wedding-week': 'the wedding week',
  'fee-stack': 'the fee stack',
  'how-it-works': 'how a private chef works',
  tipping: 'tipping a private chef',
  corporate: 'corporate catering',
  'personal-chef-weekly': 'weekly personal chef service',
  'vacation-chef': 'vacation chef service',
  'date-night': 'Date Night',
  'meal-prep': 'meal prep',
  'cooking-classes': 'a private cooking class',
  'omakase-at-home': 'omakase at home',
  'fine-dining': 'fine dining at home',
  'chefs-table': 'the chef’s table',
  'honeymoon-dinners': 'honeymoon dinners',
  'honeymoon-dinner': 'a honeymoon dinner',
  'mobile-bar': 'the mobile bar cart',
  staffing: 'event staffing',
  servers: 'event servers',
  bartenders: 'event bartenders',
  butlers: 'butler service',
  'kids-menus': 'kids’ menus',
  dietary: 'dietary-friendly cooking',
  'convention-dining': 'convention dining',
  'yacht-chef': 'yacht chef service',
  'grocery-provisioning': 'grocery provisioning',
  'in-suite-dining': 'in-suite dining',
  omakase: 'in-suite omakase',
  'corporate-catering': 'corporate catering',
  'wedding-catering': 'wedding catering',
  occasions: 'private-chef occasions',
  birthday: 'a birthday dinner',
  anniversary: 'an anniversary dinner',
  proposal: 'a proposal dinner',
  graduation: 'graduation catering',
  'family-reunion': 'a family reunion',
  holiday: 'a holiday table',
  'holiday-dinner': 'a holiday dinner',
  'celebration-of-life': 'a celebration of life',
  bachelorette: 'a bachelorette dinner',
  'villa-dinner': 'a villa dinner',
  'villa-party': 'a villa party',
  'estate-dinner': 'an estate dinner',
  'estate-events': 'estate events',
  'estate-wedding': 'an estate wedding',
  elopement: 'an elopement dinner',
  'micro-wedding': 'a micro-wedding',
  'welcome-dinner': 'the welcome dinner',
  'rehearsal-dinner': 'the rehearsal dinner',
  'reception-catering': 'reception catering',
  'recovery-brunch': 'the recovery brunch',
  'beach-ceremony-reception': 'a beach ceremony reception',
  venues: 'wedding venues',
  menus: 'the menu catalogue',
  'farm-to-table': 'farm-to-table menus',
  'family-style': 'family-style service',
  'pupu-and-grazing': 'pūpū and grazing',
  'signature-three-course': 'the Signature three-course',
  'tasting-menu': 'a tasting menu',
  'bbq-and-grill': 'BBQ and grill',
  'breakfast-and-brunch': 'breakfast and brunch',
  'luau-style-catering': 'lūʻau-style catering',
  'canoe-crops-island': 'canoe-crop menus',
  'kona-provenance': 'Kona provenance menus',
  'kona-coffee': 'Kona coffee menus',
  'pacific-rim-omakase': 'Pacific-rim omakase',
  'wellness-menus': 'wellness menus',
  'vegetarian-vegan': 'vegetarian and vegan menus',
  'gluten-free': 'gluten-free menus',
  'cost-by-island': 'cost by island',
  'travel-zones': 'travel zones',
  estimate: 'the price estimate',
  'private-chef-vs-restaurant': 'private chef versus restaurant',
  'private-vs-personal-chef': 'private versus personal chef',
  'mychef-vs-marketplaces': 'myCHEF versus marketplaces',
  'marketplace-vs-mychef': 'marketplace versus myCHEF',
  'resort-dining-vs-private-chef': 'resort dining versus a private chef',
  'resort-wedding-vs-estate': 'a resort wedding versus an estate',
  'service-charge-comparison': 'service-charge comparison',
  'freelance-vs-mychef': 'freelance chefs versus myCHEF',
  'stay-chef-cost': 'Stay Chef cost',
  'wedding-cost': 'wedding catering cost',
  'kamaaina-weekly-cost': 'kamaʻāina weekly cost',
  'how-to-hire': 'how to hire a private chef',
  'which-island': 'which island',
  'villa-kitchens': 'villa kitchens',
  'villa-kitchen': 'the villa kitchen',
  'groceries-at-cost': 'groceries at cost',
  'booking-lead-times': 'booking lead times',
  'wedding-guide': 'the wedding catering guide',
  'seasonal-calendar': 'the seasonal calendar',
  'dietary-guide': 'the dietary guide',
  'what-is-included': 'what is included',
  'alcohol-policy': 'the alcohol policy',
  'alcohol-and-bar': 'alcohol and bar service',
  'hanalei-bridge-clause': 'the Hanalei bridge clause',
  'kona-hilo-logistics': 'Kona–Hilo logistics',
  'two-shore-coverage': 'two-shore coverage',
  'condo-load-in-coi': 'condo load-in and COI',
  'cleanup-standard': 'the cleanup standard',
  'east-side-quote': 'the east-side quote',
  'ironman-week': 'Ironman week',
  'surf-retreats': 'surf retreats',
  'yoga-wellness': 'yoga and wellness retreats',
  'corporate-retreats': 'corporate retreats',
  'corporate-offsite': 'a corporate off-site',
  'for-hosts': 'retreat hosts',
  'dietary-protocols': 'dietary protocols',
  'meal-plans': 'retreat meal plans',
  'estate-week-chef': 'the estate-week chef',
  'planner-channel': 'the planner channel',
  'villa-reception-guide': 'the villa reception guide',
  'wedding-week-budget': 'the wedding-week budget',
  'west-maui': 'West Maui',
  'west-maui-visitor-note': 'the West Maui visitor note',
  'wailea-makena': 'Wailea–Mākena',
  'napili-honokowai-kahana': 'Nāpili–Honokōwai–Kahana',
  'kula-upcountry': 'Kula and Upcountry',
  'kapaa-lihue': 'Kapaʻa–Līhuʻe',
  kilauea: 'Kīlauea',
  kihei: 'Kīhei',
  'kohala-coast': 'the Kohala Coast',
  hualalai: 'Hualālai',
  'mauna-lani': 'Mauna Lani',
  'mauna-kea': 'Mauna Kea',
  'waimea-kamuela': 'Waimea / Kamuela',
  'volcano-puna': 'Volcano and Puna',
  'captain-cook': 'Captain Cook',
  'north-shore-drive': 'the North Shore drive',
  'shore-seasonality': 'shore seasonality',
  seasonality: 'seasonality',
  'holiday-peak-calendar': 'the holiday peak calendar',
  'seasonality-whale-season': 'whale season',
  'whale-season-dinner': 'a whale-season dinner',
  'brunch-service': 'brunch service',
  'weather-backup': 'the weather backup',
  'private-jet-catering': 'private-jet catering',
  islands: 'the island chooser',
  'villa-chef': 'villa chef service',
  about: 'about myCHEF',
  trust: 'the honesty register',
  legal: 'booking terms',
  faq: 'the FAQ',
  contact: 'contact',
  coverage: 'the coverage map',
  'reviews-policy': 'the review policy',
  'how-we-vet-chefs': 'how we vet chefs',
  'what-we-dont-do': 'what we will not do',
  partners: 'partner desks',
  'villa-managers': 'villa managers',
  concierges: 'concierges',
  'wedding-planners': 'wedding planners',
  network: 'the sister network',
  careers: 'chef careers',
  'grocery-stocking': 'grocery stocking',
  kids: 'cooking for kids',
};

export function titleCaseToken(token: string): string {
  return token
    .split('-')
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

export function placeFromSlug(slug: string): string {
  if (!slug) return 'this page';
  const parts = slug.split('/').filter(Boolean);
  for (let i = parts.length - 1; i >= 0; i--) {
    const hit = NAMED[parts[i]];
    if (hit) return hit;
  }
  return titleCaseToken(parts[parts.length - 1] ?? slug);
}

export function topicFromSlug(slug: string): string {
  if (!slug) return 'the island home';
  return placeFromSlug(slug);
}

export function travelNote(slug: string, islandEnglish: string): string | null {
  const s = slug.toLowerCase();
  if (s.includes('north-shore') || s.includes('turtle-bay')) {
    return `Travel from $75 applies on the North Shore and Turtle Bay — published on the ${islandEnglish} card, never discovered on the invoice.`;
  }
  if (s.includes('upcountry')) {
    return 'Upcountry carries a published travel fee from $75. The quote shows it on its own line.';
  }
  if (s.includes('paia') || s.includes('haiku')) {
    return 'Pāʻia and Haʻikū are quoted at inquiry — drive time and roster depth make a flat number dishonest here.';
  }
  if (s.includes('hanalei') || s.includes('far-north') || s.includes('haena')) {
    return 'Far-North Kauaʻi needs 72-hour notice. One bridge in and out; the quote prints the operational reason.';
  }
  if (s.includes('hilo') || s.includes('volcano') || s.includes('east-side') || s.includes('puna')) {
    return 'The east side sits 2.5–3 hours from the Kona roster. Those dates are quoted at inquiry — never implied as same-day.';
  }
  if (s.includes('princeville') || s.includes('poipu') || s.includes('koloa') || s.includes('kapaa')) {
    return 'Shore surcharges of $50–$75 may apply. They appear as their own line when they do.';
  }
  if (s.includes('waikiki') || s.includes('in-suite')) {
    return 'Waikīkī towers often need a certificate of insurance and a freight-elevator window. Those constraints print on the quote next to the menu — they are not discovered on the invoice.';
  }
  if (s.includes('ko-olina')) {
    return 'Ko Olina resort residences are built around chef kitchens. Building rules still go on the quote; travel inside the resort belt does not invent a drive fee.';
  }
  return null;
}
