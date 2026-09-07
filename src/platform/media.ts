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

/** Alt text is written per file — never generated from the slug. */
const ALT: Record<string, string> = {
  'bigisland/corridor-kona': 'Low resort architecture against a cooled lava field at dusk on the Kona coast',
  'bigisland/hero-catering': 'A staffed evening event on a black lava-rock terrace at night',
  'bigisland/hero-home': 'A single plated course on black lava with the ocean line behind, in golden-hour Kona light',
  'bigisland/hero-pricing-ledger': 'A blank ledger sheet and pen on black basalt under a single hard light',
  'bigisland/hero-private-chef': 'A chef’s hands finishing a plate over a dark stone pass under hard rim light',
  'bigisland/hero-weddings': 'A candlelit wedding table in black-and-bone styling at a lava-coast estate at night',
  'bigisland/loc-hilo': 'Rain-green Hilo side foliage above a quiet bay',
  'bigisland/loc-kohala': 'A Kohala Coast estate lawn running to open ocean in late light',
  'bigisland/loc-kona': 'The Kailua-Kona shoreline with lava rock and calm water',
  'bigisland/menu-coffee': 'Kona coffee cherries and a dark roast service set on stone',
  'bigisland/menu-kohala': 'A coursed plate built on Kohala produce and local fish',
  'bigisland/occasions': 'A private celebration table set on a dark terrace under string light',
  'bigisland/panel-date-night': 'A table for two on a lava terrace at blue hour',
  'bigisland/panel-stay-chef': 'A chef working through a villa kitchen during a multi-day stay',
  'bigisland/panel-villa-dinner': 'A villa dining table plated for a coursed dinner',
  'bigisland/panel-wedding': 'A wedding reception table on a Big Island estate at night',
  'bigisland/quote-basalt': 'A written quote and pen resting on a basalt counter',
  'hub/guides-library': 'A stack of well-used cookbooks and notes on a work surface',
  'hub/island-bigisland-thumb': 'A single plated course on black basalt in low hard Kona sun',
  'hub/island-kauai-thumb': 'A plantation veranda table framed by foliage in soft overcast light',
  'hub/island-maui-thumb': 'A Wailea lānai long table in last-hour golden light, the ocean behind',
  'hub/island-oahu-thumb': 'Honolulu skyline at blue hour through floor-to-ceiling glass',
  'hub/pricing-statewide': 'A printed rate card laid out on a clean counter',
  'hub/trust-ledger': 'An open ledger showing itemised lines under even light',
  'kauai/band-retreat': 'Mist moving through Kauaʻi canopy above a retreat property',
  'kauai/card-estate-dinner': 'An estate dining table set under tree cover',
  'kauai/card-retreat': 'A long retreat table laid for a group meal in a garden',
  'kauai/card-stay-chef': 'A chef prepping produce in a plantation-house kitchen',
  'kauai/card-wedding': 'A garden wedding table dressed in linen and greenery',
  'kauai/hero-catering': 'A staffed garden gathering under tree cover on Kauaʻi',
  'kauai/hero-home': 'A veranda long table set above a green Kauaʻi valley',
  'kauai/hero-private-chef': 'A long wooden table on a veranda looking into rain-forest green',
  'kauai/hero-retreats': 'A retreat house table laid for the whole party',
  'kauai/hero-weddings': 'A Kauaʻi garden ceremony table in soft post-rain light',
  'kauai/market-hanalei': 'Produce stacked at the Hanalei farmers’ market',
  'kauai/menu-hanalei-table': 'A family-style spread built on North Shore produce',
  'kauai/shore-north': 'Morning mist over Hanalei taro fields below waterfall-striped mountains',
  'kauai/shore-south': 'A Poʻipū estate garden in soft post-rain light',
  'maui/card-date-night': 'A table for two on a Maui lānai at sunset',
  'maui/card-estate-catering': 'A staffed estate reception set on a Maui lawn',
  'maui/card-stay-chef': 'A chef cooking breakfast in a villa kitchen',
  'maui/card-villa-dinner': 'A villa dining table plated for a coursed dinner',
  'maui/hero-catering': 'An estate reception under golden-hour light on Maui',
  'maui/hero-home': 'A villa long table at golden hour with the ocean behind',
  'maui/hero-private-chef': 'A chef’s hands finishing a plate in an open-air Maui pavilion kitchen',
  'maui/hero-weddings': 'A wedding-week table dressed on a Maui lawn at dusk',
  'maui/loc-kaanapali': 'The Kāʻanapali shoreline and resort belt in afternoon light',
  'maui/loc-kapalua': 'A Kapalua estate above the water in late light',
  'maui/loc-makena': 'The Mākena coast with open ocean beyond',
  'maui/loc-wailea': 'A Wailea villa lānai looking out to the water',
  'maui/menu-wailea-sunset': 'A coursed plate served as the sun drops behind the water',
  'maui/occasions': 'A celebration table dressed on a Maui lānai',
  'maui/quote-lanai': 'A written quote on a lānai table beside a glass of water',
  'maui/wedding-week-band': 'A long wedding-week table running the length of a lawn',
  'oahu/corporate': 'A boardroom-style dinner plated in a Honolulu residence',
  'oahu/date-night': 'A table for two set against Honolulu lights',
  'oahu/hero-catering': 'A staffed event plated in an Oʻahu residence',
  'oahu/hero-home': 'A dining table set against the Honolulu skyline at blue hour',
  'oahu/hero-pricing': 'A composed plate on a dark stone counter beside a window of city lights',
  'oahu/hero-private-chef': 'A chef finishing a course in a Honolulu kitchen',
  'oahu/loc-north-shore': 'The North Shore coastline in open afternoon light',
  'oahu/loc-waikiki': 'A Waikīkī tower lānai looking along the beach',
  'oahu/menu-signature': 'A signature three-course plate on a dark counter',
  'oahu/quote-kitchen': 'A written quote resting on a clean kitchen counter',
  'oahu/stay-chef': 'A chef working a villa kitchen across a multi-day stay',
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
