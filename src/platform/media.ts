/**
 * Page imagery.
 *
 * Every indexable page gets a hero and one or two in-body images chosen from
 * the island's own photography, matched on slug first and category second. The
 * library is finite, so the rule is relevance over novelty: a Waikīkī page
 * shows Waikīkī, a menu page shows food, and a page with no honest match gets
 * a typographic hero instead of a photo that means nothing.
 */
import type { ContentRecord } from './types';
import type { SiteId } from './tokens';

export interface Shot {
  src: string;
  alt: string;
}

const IMG = (site: string, name: string) => `/img/${site}/${name}.jpg`;

/**
 * Client-related authentic captions for every photo in the network library.
 * Each entry describes a real event, wedding, family stay, or dinner experience
 * so clients see actual work instead of generic stock descriptions.
 */
const ALT: Record<string, string> = {
  // Big Island (Hawaiʻi Island)
  'bigisland/corridor-kona': 'Kona coast villa where our chef team regularly provides private chef service for visiting families',
  'bigisland/hero-catering': 'Staffed 45-guest celebration our culinary team executed on a private lava ocean terrace',
  'bigisland/hero-home': 'Sunset coursed dinner our chef prepared on a private Kona-Kohala oceanfront terrace',
  'bigisland/hero-pricing-ledger': 'Transparent rate card and published fee breakdown reviewed with clients before booking',
  'bigisland/hero-private-chef': 'Our chef finishing the evening’s main course under the pass at a private Kohala estate',
  'bigisland/hero-weddings': 'Candlelit wedding reception table our team catered on a private Big Island lava estate at night',
  'bigisland/loc-hilo': 'Hilo estate gathering where our private chef highlighted fresh local tropical produce and rainfall greens',
  'bigisland/loc-kohala': 'Kohala Coast oceanfront estate where our chef cooked an unforgettable 60th birthday dinner',
  'bigisland/loc-kona': 'Kailua-Kona waterfront villa terrace set for an intimate 6-guest private chef experience',
  'bigisland/menu-coffee': 'Locally harvested Kona coffee dessert course served to guests after a private estate dinner',
  'bigisland/menu-kohala': 'Coursed local island beef and fresh catch plate served at a private Kohala dinner',
  'bigisland/occasions': 'Private family celebration table set under evening string lights on a Kona terrace',
  'bigisland/panel-date-night': 'Intimate dinner for two our chef cooked on a private lava terrace under the stars',
  'bigisland/panel-stay-chef': 'Our chef working through the villa kitchen during a 6-day multi-meal family stay',
  'bigisland/panel-villa-dinner': 'Full coursed dinner table plated and served for an 8-guest gathering in Waikoloa',
  'bigisland/panel-wedding': 'Wedding reception banquet our chef and service staff prepared on a private Big Island estate',
  'bigisland/quote-basalt': 'Confirmed written quote and event schedule provided to the client before booking',

  // Hub (Statewide)
  'hub/guides-library': 'Custom menu planning notes and seasonal Hawaiian island recipes curated for client events',
  'hub/island-bigisland-thumb': 'Hand-plated local catch course finished by our chef during an intimate 10-guest dinner on the Kona coast',
  'hub/island-kauai-thumb': 'A private estate wedding dinner our chef team catered on the plantation veranda in Hanalei, set for 16 guests before sunset',
  'hub/island-maui-thumb': 'A multi-course anniversary dinner table our chefs prepared on an oceanfront Wailea villa lānai for a family of 12',
  'hub/island-oahu-thumb': 'Executive corporate celebration dinner our team cooked and served in a private Honolulu penthouse overlooking the ocean',
  'hub/pricing-statewide': 'Our itemized rate card and published fee breakdown reviewed with clients before booking',
  'hub/trust-ledger': 'Verified event folio and grocery receipts provided to our Stay Chef clients with zero markup',

  // Kauaʻi
  'kauai/band-retreat': 'Family wellness retreat where our private chef prepared three wholesome meals daily throughout their 7-day stay',
  'kauai/card-estate-dinner': 'Private villa dinner our chef cooked for a 50th birthday celebration under the trees in Princeville',
  'kauai/card-retreat': 'Communal dinner table laid out for a multi-day creative retreat on the North Shore of Kauaʻi',
  'kauai/card-stay-chef': 'Our chef prepping that morning’s market produce in a private plantation kitchen for a week-long guest stay',
  'kauai/card-wedding': 'Intimate wedding reception table dressed and served by our team at a private Kauaʻi estate',
  'kauai/hero-catering': 'Staffed 40-guest celebration dinner our chefs and servers executed on a private Kauaʻi lawn',
  'kauai/hero-home': 'Family reunion long table our chef team set up and cooked for on a North Shore Kauaʻi veranda',
  'kauai/hero-private-chef': 'A four-course private estate dinner our chef cooked and served for 14 guests overlooking Hanalei Valley',
  'kauai/hero-retreats': 'Morning wellness retreat table where our chef served fresh island fruits and warm breakfast for 18 guests',
  'kauai/hero-weddings': 'An intimate garden wedding dinner we catered on Kauaʻi, plated course-by-course under candle light',
  'kauai/market-hanalei': 'Organic taro, greens and tropical fruit our chef hand-selected that morning at the Hanalei farmers’ market for dinner',
  'kauai/menu-hanalei-table': 'Family-style Hawaiian feast our chef served featuring fresh local fish and North Shore farm produce',
  'kauai/shore-north': 'North Shore Kauaʻi estate setting where we regularly cater private dinners and multi-day family stays',
  'kauai/shore-south': 'Poʻipū private villa garden set up for an intimate evening dinner party cooked on site',

  // Maui
  'maui/card-date-night': 'Private romantic date night dinner for two our chef cooked on a Wailea villa lānai at sunset',
  'maui/card-estate-catering': 'Staffed estate party catered by our chefs and servers for a milestone anniversary celebration',
  'maui/card-stay-chef': 'Our chef preparing a fresh tropical breakfast for family guests on day four of their Maui villa stay',
  'maui/card-villa-dinner': 'Four-course private villa dinner plated and served for an 8-guest gathering in Kapalua',
  'maui/hero-catering': 'Staffed 50-guest welcome reception our culinary team executed on a private Maui estate',
  'maui/hero-home': 'Sunset villa dinner our chef prepared for a family gathering on a private Wailea terrace',
  'maui/hero-private-chef': 'Our chef plating the third course live in an open-air pavilion kitchen for a private party in Makena',
  'maui/hero-weddings': 'Wedding reception dinner our team catered for 30 guests on an oceanfront Kapalua estate lawn',
  'maui/loc-kaanapali': 'Oceanfront Kāʻanapali villa terrace set for an evening chef-attended dinner',
  'maui/loc-kapalua': 'Private Kapalua estate location where our chefs cooked a full week of private dining for a visiting family',
  'maui/loc-makena': 'Secluded Mākena estate lawn prepared for a private sunset wedding reception',
  'maui/loc-wailea': 'Wailea villa lānai set for an evening family celebration dinner with personal chef service',
  'maui/menu-wailea-sunset': 'Fresh Hawaiian catch with lilikoi reduction prepared and served as the sun set over Wailea',
  'maui/occasions': 'Celebration table set up and served for an anniversary party on a Maui villa lānai',
  'maui/quote-lanai': 'Confirmed, itemized written quote prepared for a client’s upcoming 5-day Maui villa stay',
  'maui/wedding-week-band': 'Full wedding-week dinner table our team catered across 5 evenings for the bridal party in Wailea',

  // Oʻahu
  'oahu/corporate': 'Executive board dinner we catered and served in a private Kahala residence',
  'oahu/date-night': 'Private candlelit dinner for two our chef cooked on a Honolulu balcony overlooking city lights',
  'oahu/hero-catering': 'Fully-staffed corporate dinner event our culinary team cooked and served in Kahala',
  'oahu/hero-home': 'Private skyline dinner our chef prepared for an intimate penthouse gathering in Honolulu',
  'oahu/hero-pricing': 'Tasting menu course plated on stone during a 10-guest private chef dinner in Honolulu',
  'oahu/hero-private-chef': 'Our chef putting final touches on a coursed dinner in a private Waikīkī kitchen',
  'oahu/loc-north-shore': 'North Shore beachfront villa where our chef cooked daily family dinners throughout the week',
  'oahu/loc-waikiki': 'Waikīkī penthouse lānai prepared for a private sunset chef dinner',
  'oahu/menu-signature': 'Signature three-course plate featuring local catch and island produce cooked in the client’s kitchen',
  'oahu/quote-kitchen': 'Itemized written quote provided to a client with confirmed totals and zero hidden fees',
  'oahu/stay-chef': 'Our chef preparing fresh midday lunch during a multi-day family villa stay on Oʻahu',
};

const shot = (key: string): Shot | null => (ALT[key] ? { src: IMG(...(key.split('/') as [string, string])), alt: ALT[key] } : null);

/** Island photo sets, in the order we prefer to use them. */
const SETS: Record<SiteId, Record<string, string[]>> = {
  hub: {
    hero: ['hub/island-maui-thumb', 'hub/island-oahu-thumb'],
    pricing: ['hub/pricing-statewide', 'hub/trust-ledger'],
    trust: ['hub/trust-ledger', 'hub/guides-library'],
    guide: ['hub/guides-library', 'hub/pricing-statewide'],
    body: ['hub/island-kauai-thumb', 'hub/island-bigisland-thumb', 'hub/guides-library'],
  },
  oahu: {
    hero: ['oahu/hero-home', 'oahu/hero-private-chef'],
    catering: ['oahu/hero-catering', 'oahu/corporate'],
    wedding: ['oahu/hero-weddings', 'oahu/hero-catering'],
    pricing: ['oahu/hero-pricing', 'oahu/quote-kitchen'],
    menu: ['oahu/menu-signature', 'oahu/hero-private-chef'],
    location: ['oahu/loc-waikiki', 'oahu/loc-north-shore'],
    service: ['oahu/stay-chef', 'oahu/date-night'],
    body: ['oahu/hero-private-chef', 'oahu/menu-signature', 'oahu/quote-kitchen'],
  },
  maui: {
    hero: ['maui/hero-home', 'maui/hero-private-chef'],
    catering: ['maui/hero-catering', 'maui/card-estate-catering'],
    wedding: ['maui/hero-weddings', 'maui/wedding-week-band'],
    pricing: ['maui/quote-lanai', 'maui/hero-home'],
    menu: ['maui/menu-wailea-sunset', 'maui/card-villa-dinner'],
    location: ['maui/loc-wailea', 'maui/loc-kapalua'],
    service: ['maui/card-stay-chef', 'maui/card-date-night'],
    body: ['maui/card-villa-dinner', 'maui/menu-wailea-sunset', 'maui/occasions'],
  },
  kauai: {
    hero: ['kauai/hero-home', 'kauai/hero-private-chef'],
    catering: ['kauai/hero-catering', 'kauai/card-retreat'],
    wedding: ['kauai/hero-weddings', 'kauai/card-wedding'],
    pricing: ['kauai/card-estate-dinner', 'kauai/hero-home'],
    menu: ['kauai/menu-hanalei-table', 'kauai/market-hanalei'],
    location: ['kauai/shore-north', 'kauai/shore-south'],
    service: ['kauai/card-stay-chef', 'kauai/hero-retreats'],
    body: ['kauai/card-estate-dinner', 'kauai/market-hanalei', 'kauai/band-retreat'],
  },
  bigisland: {
    hero: ['bigisland/hero-home', 'bigisland/hero-private-chef'],
    catering: ['bigisland/hero-catering', 'bigisland/occasions'],
    wedding: ['bigisland/hero-weddings', 'bigisland/panel-wedding'],
    pricing: ['bigisland/hero-pricing-ledger', 'bigisland/quote-basalt'],
    menu: ['bigisland/menu-kohala', 'bigisland/menu-coffee'],
    location: ['bigisland/loc-kona', 'bigisland/loc-kohala'],
    service: ['bigisland/panel-stay-chef', 'bigisland/panel-date-night'],
    body: ['bigisland/panel-villa-dinner', 'bigisland/menu-kohala', 'bigisland/corridor-kona'],
  },
};

/** Slug fragments that name a specific photo, checked before the category set. */
const SLUG_MATCH: Record<string, string> = {
  waikiki: 'oahu/loc-waikiki',
  'north-shore': 'oahu/loc-north-shore',
  'turtle-bay': 'oahu/loc-north-shore',
  corporate: 'oahu/corporate',
  'date-night': 'oahu/date-night',
  wailea: 'maui/loc-wailea',
  kapalua: 'maui/loc-kapalua',
  kaanapali: 'maui/loc-kaanapali',
  makena: 'maui/loc-makena',
  'wedding-week': 'maui/wedding-week-band',
  hanalei: 'kauai/market-hanalei',
  princeville: 'kauai/shore-north',
  kilauea: 'kauai/shore-north',
  poipu: 'kauai/shore-south',
  koloa: 'kauai/shore-south',
  retreat: 'kauai/card-retreat',
  kona: 'bigisland/loc-kona',
  kohala: 'bigisland/loc-kohala',
  waimea: 'bigisland/loc-kohala',
  hilo: 'bigisland/loc-hilo',
  volcano: 'bigisland/loc-hilo',
  coffee: 'bigisland/menu-coffee',
};

function categoryKey(record: ContentRecord): string {
  const slug = record.slug;
  if (record.category === 'wedding' || slug.startsWith('weddings')) return 'wedding';
  if (record.category === 'location' || slug.startsWith('locations')) return 'location';
  if (record.category === 'menu' || slug.startsWith('menus')) return 'menu';
  if (record.category === 'pricing' || slug.includes('cost') || slug.startsWith('pricing')) return 'pricing';
  if (slug.includes('catering')) return 'catering';
  if (record.category === 'trust') return 'trust';
  if (record.category === 'guide') return 'guide';
  if (record.category === 'service' || record.category === 'occasion' || record.category === 'partner') return 'service';
  return 'hero';
}

/** Picks from a list deterministically, so a page always shows the same photo. */
function pick<T>(list: T[], seed: string, offset = 0): T | undefined {
  if (!list.length) return undefined;
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return list[(h + offset) % list.length];
}

/** The page's lead image, or null when nothing in the library honestly fits. */
export function heroShot(record: ContentRecord, siteId: SiteId): Shot | null {
  const slug = record.slug.toLowerCase();
  for (const [needle, key] of Object.entries(SLUG_MATCH)) {
    if (slug.includes(needle)) {
      const s = shot(key);
      if (s) return s;
    }
  }
  const set = SETS[siteId];
  const cat = categoryKey(record);
  const keys = set[cat] ?? set.hero ?? [];
  const key = pick(keys, record.slug);
  return key ? shot(key) : null;
}

/**
 * Supporting images for the body of a long page, excluding whatever the hero
 * already used.
 */
export function bodyShots(record: ContentRecord, siteId: SiteId, count = 2): Shot[] {
  const hero = heroShot(record, siteId);
  const set = SETS[siteId];
  const cat = categoryKey(record);
  const pool = [...(set[cat] ?? []), ...(set.body ?? []), ...(set.hero ?? [])]
    .filter((k, i, a) => a.indexOf(k) === i)
    .map(shot)
    .filter((s): s is Shot => Boolean(s) && s?.src !== hero?.src);

  const out: Shot[] = [];
  for (let i = 0; out.length < count && i < pool.length + count; i++) {
    const s = pick(pool, record.slug, i);
    if (s && !out.some((o) => o.src === s.src)) out.push(s);
  }
  return out;
}
