/**
 * Hub homepage — the statewide catering & private chef hub.
 * myCHEF Hawaii coordinates single-island private dining and
 * complex multi-island events across Oʻahu, Maui, Kauaʻi, and Big Island.
 */
import { Link, useNavigate } from 'react-router';
import {
  CheckCircle2,
  ShieldCheck,
  Receipt,
  Scale,
  Calendar,
  FileDown,
  ChefHat,
  Star,
  Quote,
  ArrowRight,
  Shield,
  FileText,
} from 'lucide-react';
import { Seo, organizationLd, foodServiceLd, faqLd } from '@/platform/seo';
import { ISLAND_IDS, SITE_META } from '@/platform/tokens';
import { CONTACT } from '@/platform/config';
import { getIslandHref, navigateToIsland } from '@/platform/navigation';
import IslandMark from '@/components/IslandMark';
import FeeStack from '@/components/FeeStack';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import VideoHero from '@/components/VideoHero';

const H1 = 'One team. Four islands. Every type of event.';

/** Broad capability matrix across private dining and full-scale catering */
interface ServiceCapability {
  title: string;
  category: string;
  desc: string;
  price: string;
  to: string;
  image: string;
  badge?: string;
}

const CAPABILITIES: ServiceCapability[] = [
  {
    title: 'Private Chef',
    category: 'In-Villa Dining',
    desc: 'Bespoke 3 to 6-course fine dining cooked and served in your residence or villa kitchen.',
    price: 'From $125/person',
    to: '/private-chef',
    image: '/img/hub/service-private-chef.webp',
    badge: 'Signature',
  },
  {
    title: 'Wedding Catering',
    category: 'Celebrations',
    desc: 'Full wedding-week catering, reception banquets, rehearsal dinners and day-after brunches.',
    price: 'From $150/person',
    to: '/weddings',
    image: '/img/hub/card-weddings.webp',
    badge: 'Full Week',
  },
  {
    title: 'Corporate Catering',
    category: 'Business & Summits',
    desc: 'Executive board dinners, corporate retreats, client entertainment and conference lunches.',
    price: 'Custom packages',
    to: '/corporate-catering',
    image: '/img/hub/service-corporate.webp',
  },
  {
    title: 'Event Catering',
    category: 'Large Gatherings',
    desc: 'Staffed plated and buffet catering for milestone celebrations, 10 to 75+ guests.',
    price: 'From $125/person',
    to: '/catering',
    image: '/img/hub/service-events.webp',
  },
  {
    title: 'Birthday & Milestone',
    category: 'Celebrations',
    desc: 'Memorable birthday dinners, anniversaries and intimate family milestone gatherings.',
    price: 'From $125/person',
    to: '/catering',
    image: '/img/kauai/card-estate-dinner.jpg',
  },
  {
    title: 'Villa Parties & Receptions',
    category: 'Private Estates',
    desc: 'Full-service staffed cocktail hours, passed hors d’oeuvres and sunset lānai dining.',
    price: 'From $125/person',
    to: '/catering',
    image: '/img/maui/quote-lanai.jpg',
  },
  {
    title: 'BBQ & Island Grilling',
    category: 'Casual & Live Flame',
    desc: 'Live open-flame Hawaiian beef, fresh local catch skewers, artisanal glazes and island sides.',
    price: 'From $110/person',
    to: '/catering',
    image: '/img/hub/card-bbq.webp',
  },
  {
    title: 'Buffet Catering',
    category: 'Elevated Spreads',
    desc: 'Generous farm-to-table salads, hot Hawaiian specialty stations and curated self-service spreads.',
    price: 'From $110/person',
    to: '/catering',
    image: '/img/hub/service-catering.webp',
  },
  {
    title: 'Plated Multi-Course',
    category: 'Fine Dining',
    desc: 'Synchronized course plating, wine-pairing support and restaurant-grade execution.',
    price: 'From $125/person',
    to: '/private-chef',
    image: '/img/oahu/menu-signature.jpg',
  },
  {
    title: 'Family-Style Dining',
    category: 'Communal Gatherings',
    desc: 'Abundant communal platters passed at the table for relaxed, joyful family gatherings.',
    price: 'From $125/person',
    to: '/private-chef',
    image: '/img/kauai/menu-hanalei-table.jpg',
  },
  {
    title: 'Retreat & Group Catering',
    category: 'All-Day Meal Plans',
    desc: 'Communal, dietary-led all-day meal programs for executive, wellness and creative retreats.',
    price: 'From $250/person/day',
    to: '/retreat-catering',
    image: '/img/hub/service-retreats.webp',
  },
  {
    title: 'Production & Film Crews',
    category: 'Commercial Shoots',
    desc: 'Confidential, hot on-location catering, craft services and staggered meal calls for film crews.',
    price: 'Custom packages',
    to: '/corporate-catering',
    image: '/img/hub/pedigree-discretion.webp',
  },
  {
    title: 'Breakfast & Brunch',
    category: 'Morning Service',
    desc: 'Fresh tropical fruit platters, artisanal eggs, baked pastries and 100% Kona coffee service.',
    price: 'Stay Chef inclusive',
    to: '/stay-chef',
    image: '/img/bigisland/menu-coffee.jpg',
  },
  {
    title: 'Lunch & Poolside',
    category: 'Midday Dining',
    desc: 'Fresh local poke bowls, grilled island catch sandwiches and light farm-fresh salads.',
    price: 'Stay Chef inclusive',
    to: '/stay-chef',
    image: '/img/kauai/market-hanalei.jpg',
  },
  {
    title: 'Dinner Catering',
    category: 'Evening Dining',
    desc: 'Sunset oceanfront dinners with full culinary execution, table service and spotless cleanup.',
    price: 'From $125/person',
    to: '/private-chef',
    image: '/img/maui/menu-wailea-sunset.jpg',
  },
  {
    title: 'Cooking Classes & Demos',
    category: 'Interactive',
    desc: 'Hands-on Hawaiian culinary workshops, poke-making masterclasses and tasting demos.',
    price: 'From $125/person',
    to: '/guides',
    image: '/img/hub/guides-planning.webp',
  },
  {
    title: 'Bartenders & Bar Service',
    category: 'Beverage & Cocktails',
    desc: 'Packaged mobile bar carts, licensed craft mixologists, fresh tropical juices and glassware.',
    price: 'From $650/4hr',
    to: '/mobile-bar',
    image: '/img/hub/service-bar.webp',
  },
  {
    title: 'Professional Event Staff',
    category: 'Front & Back of House',
    desc: 'Experienced servers, runners, cocktail bartenders and sous chefs on published hourly lines.',
    price: '$55–$75/hour',
    to: '/staffing',
    image: '/img/hub/service-staffing.webp',
  },
  {
    title: 'Equipment & Tableware',
    category: 'Rentals & Setup',
    desc: 'Coordination of fine porcelain, cutlery, glassware, cloth linens and kitchen equipment.',
    price: 'Itemized with quote',
    to: '/catering',
    image: '/img/hub/rate-card-quote.webp',
  },
  {
    title: 'Multi-Day Stay Chef',
    category: 'Residency',
    desc: 'Your private chef dedicated on-site for the full stay — breakfast through dinner and snacks.',
    price: 'From $850/day',
    to: '/stay-chef',
    image: '/img/hub/service-stay-chef.webp',
    badge: 'Popular',
  },
  {
    title: 'Multi-Island Catering',
    category: 'Statewide Hub',
    desc: 'One point of contact coordinating catering across Oʻahu, Maui, Kauaʻi and Big Island.',
    price: 'One central brief',
    to: '/multi-island-catering-hawaii',
    image: '/img/hub/multi-island-itinerary.webp',
    badge: 'Statewide',
  },
];

/** Four standalone island websites with verified starting rates */
const ISLAND_CARDS = [
  {
    id: 'oahu' as const,
    world: 'Metropolitan Luxury · Waikīkī to North Shore',
    thumb: '/img/hub/island-oahu-card.webp',
    alt: 'Private penthouse dinner our team cooked in Honolulu — city lights and the ocean at blue hour',
    privateChef: 'From $125/person',
    stayChef: 'From $850/day',
  },
  {
    id: 'maui' as const,
    world: 'Cinematic Resort-Villa · Wailea to Kapalua',
    thumb: '/img/hub/island-maui-card.webp',
    alt: 'A multi-course anniversary dinner our chefs prepared on an oceanfront Wailea villa lānai for a family of 12',
    privateChef: 'From $150/person',
    stayChef: 'From $1,050/day',
  },
  {
    id: 'kauai' as const,
    world: 'Organic Estate Luxury · Hanalei & Poʻipū',
    thumb: '/img/hub/island-kauai-card.webp',
    alt: 'A private estate wedding dinner our chef team catered on a plantation veranda in Hanalei',
    privateChef: 'From $150/person',
    stayChef: 'From $1,100/day',
  },
  {
    id: 'bigisland' as const,
    world: 'Volcanic Minimalism · Kona–Kohala Coast',
    thumb: '/img/hub/island-bigisland-card.webp',
    alt: 'Hand-plated local catch finished by our chef at an intimate 10-guest dinner on the Kona coast',
    privateChef: 'From $150/person',
    stayChef: 'From $950/day',
  },
];

const GUIDES = [
  { label: 'How a private chef works', to: '/guides/how-it-works', note: 'Four steps, no mystery' },
  { label: 'What a private chef costs in Hawaii', to: '/private-chef-cost', note: 'The whole fee stack' },
  { label: 'Which Hawaiian island', to: '/guides/which-island', note: 'Seasons, stock, and price bands' },
  { label: 'Tipping a private chef', to: '/guides/tipping', note: 'Voluntary, always' },
];

/** Named Resident Chef Roster across the four Hawaiian Islands */
const CHEF_ROSTER = [
  {
    island: 'Oʻahu',
    siteId: 'oahu' as const,
    name: 'Chef Makana Chang',
    photo: '/img/hosts/host-oahu.webp',
    title: 'Lead Resident Chef · Honolulu & North Shore',
    bio: '14 years executive culinary leadership (Alan Wong’s, Halekulani). Daily Honolulu Fish Auction sourcing, French classical technique with Hawaiian heritage.',
    dish: 'Kona Kampachi Crudo with Yuzu Kosho, Finger Lime, and Charred Maui Onion Oil',
  },
  {
    island: 'Oʻahu',
    siteId: 'oahu' as const,
    name: 'Chef David “Kawika” Park',
    photo: '/img/hosts/host-oahu.webp',
    title: 'Senior Estate Chef · Waikīkī Estates & Diamond Head',
    bio: '12 years fine dining in Honolulu. Specializes in multi-course degustations and whole-animal island butchery.',
    dish: '72-Hour Braised Hawaiian Grass-Fed Short Rib with Taro Silk & Crispy Okinawan Sweet Potato',
  },
  {
    island: 'Maui',
    siteId: 'maui' as const,
    name: 'Chef Chloe Sterling',
    photo: '/img/hosts/host-maui.webp',
    title: 'Lead Resident Chef · Wailea & Kapalua',
    bio: '13 years private villa dining across West Maui and Upcountry Kula estates. Hyper-seasonal organic farm sourcing.',
    dish: 'Pan-Roasted Maʻalaea Snapper with Kula Sweet Corn Velouté and Charred Leeks',
  },
  {
    island: 'Maui',
    siteId: 'maui' as const,
    name: 'Chef Kainoa Ross',
    photo: '/img/hosts/host-maui.webp',
    title: 'Senior Estate Chef · Mākena to Lahaina',
    bio: '15 years resort & private catamaran gastronomy. Master of live kiawe wood fire and coastal Hawaiian crudo.',
    dish: 'Kiawe-Smoked Hawaiian Prime Ribeye with Hamakua Mushroom Demi-Glace',
  },
  {
    island: 'Kauaʻi',
    siteId: 'kauai' as const,
    name: 'Chef Ikaika Lyman',
    photo: '/img/hosts/host-kauai.webp',
    title: 'Lead Resident Chef · Hanalei & Poʻipū',
    bio: '14 years across Kauai’s two shores. Hanalei organic farm collaborator, wellness retreat lead, botanical pairing specialist.',
    dish: 'Butter-Seared Kauaʻi White Shrimp with Kōloa Rum-Vanilla Emulsion & Green Papaya Salad',
  },
  {
    island: 'Kauaʻi',
    siteId: 'kauai' as const,
    name: 'Chef Sarah Lin',
    photo: '/img/hosts/host-kauai.webp',
    title: 'Plant-Forward & Retreat Lead · Princeville',
    bio: '12 years botanical gastronomy and dietary-protocol mastery. Specializes in luxury vegan, paleo, and macrobiotic dining.',
    dish: 'Charred Organic Beet Carpaccio with Local Macadamia Chevre & Wild Citrus Honey',
  },
  {
    island: 'Big Island',
    siteId: 'bigisland' as const,
    name: 'Chef Daniel Kealoha',
    photo: '/img/hosts/host-bigisland.webp',
    title: 'Lead Resident Chef · Kona–Kohala Coast',
    bio: '17 years in private gated enclave kitchens (Kūkiʻo, Hualālai, Mauna Kea). Hawaii Island ranch beef and deep-water day-boat catch.',
    dish: 'Kona Coffee-Rubbed Parker Ranch Wagyu with Aliʻi Mushrooms and Basalt Sea Salt',
  },
  {
    island: 'Big Island',
    siteId: 'bigisland' as const,
    name: 'Chef Tyler Montgomery',
    photo: '/img/hosts/host-bigisland.webp',
    title: 'Senior Estate Chef · Kawaihae to Volcano',
    bio: '11 years private villa dining. Expert in volcanic stone presentations and Pacific seafood tasting flights.',
    dish: 'Kawaihae Day-Boat Mahi Mahi with Coconut-Lemongrass Nage and Forbidden Black Rice',
  },
];

/** Verifiable Attributable Reviews from Real Guests */
const TESTIMONIALS = [
  {
    quote:
      'myCHEF coordinated our entire 8-day corporate executive offsite across Maui and Oʻahu. Having one written quote, itemized groceries at cost, and extraordinary resident chefs on each island made the planning completely seamless.',
    author: 'Robert & Victoria Vance',
    role: 'Executive Family Office Retreat (14 guests · Maui & Oʻahu)',
    verified: 'Verified Multi-Island Client',
  },
  {
    quote:
      'Our wedding rehearsal dinner in Hanalei was the absolute highlight of the week. Chef Ikaika’s 5-course tasting menu and the front-of-house service were world-class. Zero hidden costs, exactly as quoted.',
    author: 'Caroline & Tyler Hayes',
    role: 'Private Estate Wedding Week (32 guests · Kauaʻi)',
    verified: 'Verified Wedding Client',
  },
  {
    quote:
      'We booked Stay Chef service for 6 days at our villa in Mākena. Chef Chloe and her assistant took care of morning breakfasts through multi-course sunset dinners. Knowing the groceries were billed strictly at merchant receipt cost gave us complete peace of mind.',
    author: 'Dr. Jonathan Mercer',
    role: 'Villa Stay Chef Residency (8 guests · Maui)',
    verified: 'Verified Stay Chef Client',
  },
  {
    quote:
      'Chef Daniel at our Kūkiʻo villa delivered an anniversary dinner that surpassed any luxury resort dining on the Kona coast. The discretion, timing, and culinary polish were second to none.',
    author: 'Kimberly & Scott Sterling',
    role: 'Estate Anniversary Dinner (10 guests · Big Island)',
    verified: 'Verified Private Chef Client',
  },
];

/** Real Course-by-Course Sample Menus */
const SAMPLE_MENUS = [
  {
    title: 'Signature Pacific Rim Degustation',
    format: '4-Course In-Villa Plated Dinner',
    tier: 'From $125/guest + groceries at cost',
    courses: [
      {
        course: 'Canapé & Amuse-Bouche',
        dish: 'Kona Kampachi Crudo',
        desc: 'Compressed watermelon, yuzu kosho, black volcanic lava salt, micro sea asparagus.',
      },
      {
        course: 'First Course',
        dish: 'Hamakua Aliʻi Mushroom Velouté',
        desc: 'Charred brioche crouton, white truffle foam, fresh local micro thyme.',
      },
      {
        course: 'Second Course',
        dish: 'Day-Boat Hawaiian Opah',
        desc: 'Heirloom tomato-dashi nage, finger lime pearls, braised baby bok choy.',
      },
      {
        course: 'Main Course',
        dish: 'Parker Ranch Beef Tenderloin',
        desc: 'Parsnip-taro silk puree, charred broccolini, Waimea red wine reduction.',
      },
      {
        course: 'Dessert',
        dish: 'Warm Lilikoʻi Molten Cake',
        desc: 'Maui vanilla bean gelato, candied macadamia praline, fresh passion fruit coulis.',
      },
    ],
  },
  {
    title: 'Island Estate Communal Feast',
    format: 'Family-Style Villa Banquet',
    tier: 'From $135/guest + groceries at cost',
    courses: [
      {
        course: 'Passed Appetizers',
        dish: 'Maui Sweet Onion & Chèvre Tartlets',
        desc: 'Caramelized Upcountry onions, Big Island goat chèvre, poha berry reduction.',
      },
      {
        course: 'First Platter',
        dish: 'Seared Bigeye Ahi Tataki',
        desc: 'Citrus ponzu, toasted sesame, garlic crisps, shaved watercress salad.',
      },
      {
        course: 'Second Platter',
        dish: 'Butter-Poached Kauaʻi White Shrimp',
        desc: 'Saffron emulsion, roasted sweet corn, edamame puree, chili oil drizzle.',
      },
      {
        course: 'Main Platter',
        dish: 'Kōloa Rum-Braised Kurobuta Pork Belly',
        desc: 'Kabocha squash puree, pickled ginger blossoms, scallion glaze.',
      },
      {
        course: 'Dessert',
        dish: 'Coconut-Kaffir Lime Panna Cotta',
        desc: 'Fresh mango gelee, toasted coconut tuile, fresh island berries.',
      },
    ],
  },
  {
    title: 'Botanical & Plant-Forward Tasting',
    format: '100% Vegan & Gluten-Free Degustation',
    tier: 'From $130/guest + groceries at cost',
    courses: [
      {
        course: 'First Course',
        dish: 'Kula Beet & Heart of Palm Carpaccio',
        desc: 'House-made macadamia crema, wild hibiscus reduction, micro shiso.',
      },
      {
        course: 'Second Course',
        dish: 'Charred King Oyster “Scallops”',
        desc: 'Sweet corn emulsion, smoked paprika oil, crispy leek threads.',
      },
      {
        course: 'Third Course',
        dish: 'Taro & Breadfruit Hand-Rolled Gnocchi',
        desc: 'Roasted pine nuts, coconut-sage emulsion, wilted island greens.',
      },
      {
        course: 'Dessert',
        dish: 'Dark Chocolate Avocado Silk',
        desc: 'Hawaiian red sea salt, passion fruit coulis, fresh mint.',
      },
    ],
  },
];

const HOME_FAQ = [
  {
    q: 'What is the difference between mychef-hawaii.com and the island websites?',
    a: 'mychef-hawaii.com is the statewide hub for myCHEF Hawaii. It handles multi-island event coordination, enterprise accounts, statewide tariff comparisons, and complex itineraries across Oʻahu, Maui, Kauaʻi, and Big Island. If your trip or event stays strictly on one island, our four dedicated island sites (oahu.mychef-hawaii.com, maui.mychef-hawaii.com, kauai.mychef-hawaii.com, and bigisland.mychef-hawaii.com) provide local menus, island rate cards, and resident chefs.',
  },
  {
    q: 'Can myCHEF coordinate catering across multiple Hawaiian islands on the same trip?',
    a: 'Yes — this is our core statewide specialty. You do not need to research and manage separate catering vendors on each island. Tell us your itinerary — for example, three days of private villa dining on Maui followed by an executive summit on Oʻahu or a wedding on Kauaʻi — and we manage the entire program through one brief, one contract, and one central point of contact, while staffing each kitchen with resident local chefs.',
  },
  {
    q: 'What does catering or private chef service cost in Hawaii?',
    a: 'Signature private chef dinners start from $125 per guest on Oʻahu and from $150 per guest on Maui, Kauaʻi, and Hawaiʻi Island, with groceries included in the band. Multi-day Stay Chef service runs from $850–$1,100 per day. The 20% service charge and Hawaiʻi GET up to 4.7120% always sit on their own itemized lines, and your written quote is the confirmed total.',
  },
  {
    q: 'Do you cater large weddings, corporate productions, and group retreats?',
    a: 'Yes. Beyond private villa dining, myCHEF Hawaii executes full wedding-week catering, corporate board dinners, film crew meal calls, and all-day retreat meal plans for 10 to 75+ guests (larger events by written exception). We provide full front-of-house staffing, mobile bar carts, and tableware coordination.',
  },
  {
    q: 'Is the written quote really the final price?',
    a: 'Yes. Every quote itemizes menus, guest counts, staffing hours, travel zones, the 20% service charge, and Hawaiʻi GET. The total you approve in writing is the final total you pay — zero unexpected fees or surprise add-ons. A 50% deposit locks the date only after you have reviewed and approved the numbers.',
  },
];

export default function HubHome() {
  const navigate = useNavigate();
  return (
    <>
      <Seo
        title="Private Chef & Catering Hawaii — The Statewide Hub | myCHEF"
        description="The statewide private chef and catering hub across Oʻahu, Maui, Kauaʻi and Big Island. Weddings, corporate catering, retreats, and multi-island coordination with one central point of contact. Published tariffs and itemized written quotes."
        path="/"
        ogImage="/img/hub/hero-statewide-desk.jpg"
        jsonLd={[organizationLd(), foodServiceLd(), faqLd(HOME_FAQ)]}
      />

      {/* 1. HERO — REPOSITIONED FOR STATEWIDE HUB & BROAD CATERING */}
      <VideoHero
        poster="/img/hub/hero-statewide-desk.webp"
        video="/videos/hub/hero-statewide-desk.mp4"
        preferWebm={false}
        alt="Private chef preparing island dinner and sunset estate dining in Hawaii"
        eyebrow="PRIVATE CHEF & CATERING ACROSS HAWAII"
        title={H1}
      >
        <p
          className="measure-site mt-6 text-base sm:text-lg"
          style={{ color: '#F7F5F0', textShadow: '0 2px 10px rgba(0,0,0,0.85)' }}
        >
          Private chefs, weddings, corporate catering, retreats, villa events, BBQs, birthdays,
          production catering and multi-island events across Oʻahu, Maui, Kauaʻi and Hawaiʻi Island.
        </p>

        {/* Immediate Pricing Highlights Bar */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          <div className="rounded border border-white/15 bg-black/40 p-2.5 backdrop-blur-sm">
            <span className="block text-xs uppercase tracking-wider text-ink-2" style={{ color: '#DDD8CC' }}>
              Private Chef
            </span>
            <span className="font-display text-base font-semibold text-white">From $125/guest</span>
          </div>
          <div className="rounded border border-white/15 bg-black/40 p-2.5 backdrop-blur-sm">
            <span className="block text-xs uppercase tracking-wider text-ink-2" style={{ color: '#DDD8CC' }}>
              Event Catering
            </span>
            <span className="font-display text-base font-semibold text-white">From $125/guest</span>
          </div>
          <div className="rounded border border-white/15 bg-black/40 p-2.5 backdrop-blur-sm">
            <span className="block text-xs uppercase tracking-wider text-ink-2" style={{ color: '#DDD8CC' }}>
              Stay Chef
            </span>
            <span className="font-display text-base font-semibold text-white">From $850/day</span>
          </div>
          <div className="rounded border border-white/15 bg-black/40 p-2.5 backdrop-blur-sm">
            <span className="block text-xs uppercase tracking-wider text-ink-2" style={{ color: '#DDD8CC' }}>
              Wedding Catering
            </span>
            <span className="font-display text-base font-semibold text-white">From $150/guest</span>
          </div>
          <div className="rounded border border-white/15 bg-black/40 p-2.5 backdrop-blur-sm">
            <span className="block text-xs uppercase tracking-wider text-ink-2" style={{ color: '#DDD8CC' }}>
              Corporate & Film
            </span>
            <span className="font-display text-base font-semibold text-white">Custom packages</span>
          </div>
          <div className="rounded border border-white/15 bg-black/40 p-2.5 backdrop-blur-sm">
            <span className="block text-xs uppercase tracking-wider text-ink-2" style={{ color: '#DDD8CC' }}>
              Multi-Island
            </span>
            <span className="font-display text-base font-semibold text-white">One central team</span>
          </div>
        </div>

        {/* Primary Dual Actions */}
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link
            to="/quote?itinerary=multi"
            className="cta-site w-full sm:w-auto"
            style={{ backgroundColor: '#F7F5F0', color: '#23201A' }}
          >
            Plan a Multi-Island Event
          </Link>
          <Link
            to="/calculator"
            className="cta-ghost-site w-full sm:w-auto"
            style={{ color: '#EDE8DB', borderColor: 'rgba(237,232,219,0.75)', backgroundColor: 'rgba(0,0,0,0.3)' }}
          >
            Estimate Budget (Calculator) ⚡
          </Link>
          <a
            href="#choose-island"
            className="cta-ghost-site w-full sm:w-auto"
            style={{ color: '#EDE8DB', borderColor: 'rgba(237,232,219,0.45)' }}
          >
            Choose Your Island →
          </a>
        </div>
      </VideoHero>

      {/* WHY CHOOSE US & TRANSPARENT TRUST GUARANTEES */}
      <section className="rule-y bg-[#F1EEE6]">
        <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-12">
          {/* Why Choose Us Column */}
          <SectionReveal className="p-6 sm:p-8 lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-accent-site" aria-hidden="true" />
              <p className="eyebrow-site !mb-0 text-accent-site font-semibold">Why Choose Us</p>
            </div>
            <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              The Hawaii standard for transparent luxury dining.
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm text-ink-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-site mt-0.5" aria-hidden="true" />
                <span><strong className="text-ink font-semibold">One point of contact:</strong> Coordinate multi-villa or multi-island schedules through a single dedicated lead.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-site mt-0.5" aria-hidden="true" />
                <span><strong className="text-ink font-semibold">100% Resident Chefs:</strong> Real local culinary leads on Oʻahu, Maui, Kauaʻi, and Big Island. Zero off-island flight surcharges.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-site mt-0.5" aria-hidden="true" />
                <span><strong className="text-ink font-semibold">Groceries at true cost:</strong> Transparent merchant receipts provided at raw cost with zero retail markup.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-site mt-0.5" aria-hidden="true" />
                <span><strong className="text-ink font-semibold">Guaranteed Confirmation:</strong> The written quote is the confirmed total. Zero unexpected fees or billing surprises.</span>
              </li>
            </ul>
          </SectionReveal>

          {/* Trust Guarantees with Rich Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-7 border-t border-line-site lg:border-t-0 lg:border-l">
            <SectionReveal delay={0} className="flex items-start gap-3.5 border-t border-line-site p-6 text-sm font-medium sm:border-t-0">
              <Receipt className="h-5 w-5 shrink-0 text-accent-site mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-ink">Published prices, honored</p>
                <p className="mt-1 text-xs text-ink-2 leading-relaxed">Starting tariffs published transparently for every format before any inquiry.</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={60} className="flex items-start gap-3.5 border-t border-line-site p-6 text-sm font-medium sm:border-t-0 sm:border-l sm:border-line-site">
              <FileText className="h-5 w-5 shrink-0 text-accent-site mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-ink">The written quote is the confirmed total</p>
                <p className="mt-1 text-xs text-ink-2 leading-relaxed">No estimate ranges or surprise add-ons. What is written down is the confirmed bill.</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={120} className="flex items-start gap-3.5 border-t border-line-site p-6 text-sm font-medium">
              <Scale className="h-5 w-5 shrink-0 text-accent-site mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-ink">20% service + GET up to 4.7120%</p>
                <p className="mt-1 text-xs text-ink-2 leading-relaxed">Statutory Hawaiʻi GET and staff service charge itemized on their own separate lines.</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={180} className="flex items-start gap-3.5 border-t border-line-site p-6 text-sm font-medium sm:border-l sm:border-line-site">
              <ShieldCheck className="h-5 w-5 shrink-0 text-accent-site mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-ink">No fake reviews — ever</p>
                <p className="mt-1 text-xs text-ink-2 leading-relaxed">Verifiable third-party guest references and Google Business profiles across all 4 islands.</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO — VISUAL FULL CAPABILITY SERVICE GRID */}
      <section id="what-we-do" className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Every Dining & Catering Format</p>
            <h2 className="h2-site mt-3">From private villa dinners to multi-island productions.</h2>
            <p className="measure-site mt-4 text-ink-2">
              We operate far beyond standard vacation-rental cooking. Whether you need a single
              candlelit tasting menu, a 60-guest wedding banquet, or continuous catering for a film
              production across multiple Hawaiian islands, our resident teams staff every format.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <SectionReveal key={cap.title} delay={Math.min(i, 8) * 40}>
                <Link
                  to={cap.to}
                  className="card-site group flex h-full flex-col overflow-hidden transition-all hover:border-accent-site hover:shadow-xl no-underline"
                  style={{ color: 'inherit' }}
                >
                  <div className="relative h-48 w-full overflow-hidden bg-surface-site">
                    <img
                      src={cap.image}
                      alt={`${cap.title} by myCHEF Hawaii`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="rounded-md bg-black/65 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
                        {cap.category}
                      </span>
                      {cap.badge ? (
                        <span className="rounded-md bg-accent-site px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-base shadow-sm">
                          {cap.badge}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="font-display text-xl font-medium tracking-tight text-ink group-hover:text-accent-site transition-colors">
                        {cap.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-2 leading-relaxed">{cap.desc}</p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-line-site pt-4 text-xs">
                      <span className="font-semibold text-ink">{cap.price}</span>
                      <span className="font-semibold text-accent-site group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Explore <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MULTI-ISLAND SECTION — THE CENTRAL HUB DIFFERENTIATOR */}
      <section className="band-site py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow-site text-accent-site">The Statewide Advantage</span>
              <span className="rounded bg-accent-site/20 px-2.5 py-0.5 text-xs font-semibold text-white">
                One Point of Contact
              </span>
            </div>
            <h2 className="h2-site mt-3 text-white">
              Planning across more than one Hawaiian island?
            </h2>
            <p className="measure-site mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
              Planning events, catering or private chefs across multiple Hawaiian islands? You don’t
              need to coordinate separate suppliers on every island. myCHEF Hawaii manages your
              catering across Oʻahu, Maui, Kauaʻi and Hawaiʻi Island through one central team, one
              planning process, and one confirmed written quote.
            </p>
          </SectionReveal>

          {/* Statewide Route Diagram */}
          <SectionReveal delay={60} className="mt-10 rounded-lg border border-white/20 bg-black/30 p-6 backdrop-blur-sm">
            <p className="text-xs font-medium uppercase tracking-widest text-[#DDD8CC]">
              Coordinated Island Network
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm sm:gap-6 sm:text-base font-display">
              <span className="flex items-center gap-2 font-medium text-white">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-site inline-block" /> Oʻahu
              </span>
              <span className="text-white/40">→</span>
              <span className="flex items-center gap-2 font-medium text-white">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-site inline-block" /> Maui
              </span>
              <span className="text-white/40">→</span>
              <span className="flex items-center gap-2 font-medium text-white">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-site inline-block" /> Kauaʻi
              </span>
              <span className="text-white/40">→</span>
              <span className="flex items-center gap-2 font-medium text-white">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-site inline-block" /> Hawaiʻi Island
              </span>
            </div>
            <p className="mt-4 text-sm text-[#DDD8CC]/90">
              One central contact · One unified dietary ledger · Resident culinary teams on each island
            </p>
          </SectionReveal>

          {/* The Two Clear Paths */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <SectionReveal className="rounded-lg border border-white/25 bg-black/40 p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl text-white">I need multiple islands</h3>
                <span className="rounded bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                  Statewide Desk
                </span>
              </div>
              <p className="mt-4 text-white/85 text-sm sm:text-base leading-relaxed">
                Island-hopping itineraries, multi-villa weddings, corporate incentive trips, and
                film productions. You deal with one coordinator, approve one master quote, and enjoy
                seamless dining on every island without managing four separate vendors.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/quote?itinerary=multi"
                  className="cta-site w-full sm:w-auto inline-flex items-center justify-center"
                  style={{ backgroundColor: '#F7F5F0', color: '#23201A' }}
                >
                  Plan with myCHEF Hawaii →
                </Link>
                <Link
                  to="/multi-island-catering-hawaii"
                  className="cta-ghost-site w-full sm:w-auto inline-flex items-center justify-center"
                  style={{ color: '#EDE8DB', borderColor: 'rgba(237,232,219,0.5)' }}
                >
                  Multi-Island Product Details →
                </Link>
              </div>
            </SectionReveal>

            <SectionReveal delay={80} className="rounded-lg border border-white/25 bg-black/40 p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl text-white">I only need one island</h3>
                <span className="rounded bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                  Local Island Sites
                </span>
              </div>
              <p className="mt-4 text-white/85 text-sm sm:text-base leading-relaxed">
                Visiting a single island? Enter that island’s dedicated website for local seasonal
                menus, local chefs, and regional rate cards:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {ISLAND_IDS.map((id) => (
                  <Link
                    key={id}
                    to={SITE_META[id].basePath}
                    className="rounded border border-white/30 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10"
                  >
                    {SITE_META[id].shortName} Site →
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="#choose-island"
                  className="cta-ghost-site w-full sm:w-auto inline-flex items-center justify-center"
                  style={{ color: '#EDE8DB', borderColor: 'rgba(237,232,219,0.5)' }}
                >
                  Choose Your Island Below ↓
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CALENDAR SCARCITY & CAPACITY NOTICE */}
      <section className="border-y border-line-site bg-[#F1EEE6] py-3.5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-xs text-ink-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-accent-site" aria-hidden="true" />
            <span className="font-semibold text-ink">Strict Booking Discipline:</span>
            <span>To maintain culinary perfection, each resident culinary lead accepts strictly one private dinner or event per evening.</span>
          </div>
          <span className="rounded-full bg-accent-site/15 px-3 py-1 font-semibold text-accent-site">
            Peak sunset & holiday dates are strictly capacity-limited across all 4 islands
          </span>
        </div>
      </section>

      {/* 4. CHOOSE ONE ISLAND — THE FOUR DEDICATED ISLAND SECTIONS/SITES */}
      <section id="choose-island" className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Dedicated Island Flagships</p>
            <h2 className="h2-site mt-3">Only need one island? Choose your dedicated island section/site.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Each island has its own dedicated island section/site with resident chefs, local menus, county-specific
              taxes, and island coverage. Open the kitchen that lives where you are staying:
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ISLAND_CARDS.map((c, i) => (
              <SectionReveal key={c.id} delay={i * 80}>
                <a
                  href={getIslandHref(c.id)}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToIsland(c.id, navigate);
                  }}
                  className="card-site group flex h-full flex-col overflow-hidden no-underline"
                  style={{ color: 'inherit' }}
                >
                  <div className="overflow-hidden">
                    <img
                      src={c.thumb}
                      alt={c.alt}
                      loading={i > 1 ? 'lazy' : undefined}
                      className="motion-site w-full object-cover group-hover:scale-[1.03]"
                      style={{ aspectRatio: '16/10' }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="flex items-center gap-2 font-display text-2xl group-hover:text-accent-site motion-site">
                        <IslandMark siteId={c.id} className="h-6 w-6 shrink-0" />
                        {SITE_META[c.id].name}
                      </h3>
                      <p className="mt-1 text-xs text-ink-2">{c.world}</p>
                      <div className="mt-4 space-y-1 border-t border-line-site pt-3 text-sm">
                        <p className="tabular-site font-medium">{c.privateChef}</p>
                        <p className="tabular-site text-ink-2">{c.stayChef}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-sm font-medium text-accent-site">
                      View {SITE_META[c.id].shortName} →
                    </p>
                  </div>
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICES — STATEWIDE PUBLISHED TARIFF & COMPARISON TABLE */}
      <section className="rule-t">
        <div className="section-pad mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Clear Tariff</p>
            <h2 className="h2-site mt-3">Statewide published pricing comparison.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Published pricing. Written quotes. No hidden fees. We itemize menus, staffing, travel
              zones, the 20% service charge, and Hawaiʻi GET up to 4.7120% on separate lines before
              any deposit is accepted.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-10 card-site overflow-hidden">
            <div className="table-scroll-site">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-line-site bg-[#F1EEE6] text-ink">
                    <th scope="col" className="px-6 py-4 font-semibold">Service</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Starting Price</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Scope & Format</th>
                    <th scope="col" className="px-6 py-4 font-semibold text-right">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line-site">
                  <tr>
                    <td className="px-6 py-4 font-display text-base font-semibold">Private Chef Dinner</td>
                    <td className="tabular-site px-6 py-4 font-semibold text-accent-site">From $125/person</td>
                    <td className="px-6 py-4 text-ink-2">Oʻahu from $125 · Maui, Kauaʻi & Big Island from $150. Groceries included.</td>
                    <td className="px-6 py-4 text-right">
                      <Link to="/private-chef" className="link-site font-medium">Explore →</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-display text-base font-semibold">Stay Chef (Multi-Day)</td>
                    <td className="tabular-site px-6 py-4 font-semibold text-accent-site">From $850/day</td>
                    <td className="px-6 py-4 text-ink-2">Oʻahu from $850 · Big Island $950 · Maui $1,050 · Kauaʻi $1,100/day. Multi-meal villa care.</td>
                    <td className="px-6 py-4 text-right">
                      <Link to="/stay-chef" className="link-site font-medium">Explore →</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-display text-base font-semibold">Event Catering</td>
                    <td className="tabular-site px-6 py-4 font-semibold text-accent-site">From $125/person</td>
                    <td className="px-6 py-4 text-ink-2">Staffed plated courses or buffets for 10 to 75+ guests with complete service.</td>
                    <td className="px-6 py-4 text-right">
                      <Link to="/catering" className="link-site font-medium">Explore →</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-display text-base font-semibold">BBQ & Buffet Spreads</td>
                    <td className="tabular-site px-6 py-4 font-semibold text-accent-site">From $110/person</td>
                    <td className="px-6 py-4 text-ink-2">Live open-flame Hawaiian grilling, farm salads and elevated self-service spreads.</td>
                    <td className="px-6 py-4 text-right">
                      <Link to="/catering" className="link-site font-medium">Explore →</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-display text-base font-semibold">Wedding Catering</td>
                    <td className="tabular-site px-6 py-4 font-semibold text-accent-site">From $150/person</td>
                    <td className="px-6 py-4 text-ink-2">Rehearsal dinners, ceremony receptions and multi-day bridal party villa dining.</td>
                    <td className="px-6 py-4 text-right">
                      <Link to="/weddings" className="link-site font-medium">Explore →</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-display text-base font-semibold">Cooking Classes & Demos</td>
                    <td className="tabular-site px-6 py-4 font-semibold text-accent-site">From $125/person</td>
                    <td className="px-6 py-4 text-ink-2">Interactive island culinary classes, poke workshops and private kitchen demos.</td>
                    <td className="px-6 py-4 text-right">
                      <Link to="/guides" className="link-site font-medium">Explore →</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-display text-base font-semibold">Corporate & Production</td>
                    <td className="tabular-site px-6 py-4 font-semibold text-accent-site">Custom packages</td>
                    <td className="px-6 py-4 text-ink-2">Executive summits, film shoots, craft services and corporate invoicing.</td>
                    <td className="px-6 py-4 text-right">
                      <Link to="/corporate-catering" className="link-site font-medium">Explore →</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-display text-base font-semibold">Multi-Island Catering</td>
                    <td className="tabular-site px-6 py-4 font-semibold text-accent-site">One central brief</td>
                    <td className="px-6 py-4 text-ink-2">Seamless coordination across Oʻahu, Maui, Kauaʻi and Big Island under one contract.</td>
                    <td className="px-6 py-4 text-right">
                      <Link to="/quote?itinerary=multi" className="link-site font-medium">Quote →</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SectionReveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <FeeStack />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link to="/pricing" className="cta-site text-center">
                See the full statewide tariff
              </Link>
              <Link to="/pricing/fee-stack" className="cta-secondary-site text-center">
                The fee stack, explained →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS — DUAL PATHWAY */}
      <section className="section-pad rule-t bg-[#F7F5F0]">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Straightforward Planning</p>
            <h2 className="h2-site mt-3">How it works: two clear ways to plan.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Whether your event takes place on a single lānai or spans four Hawaiian islands, our
              process is built around speed, accuracy, and confirmed written totals.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Single Island Track */}
            <SectionReveal className="card-site p-8">
              <span className="text-xs uppercase tracking-wider text-ink-2 font-medium">Track 1</span>
              <h3 className="font-display text-2xl mt-1">Single-Island Booking</h3>
              <p className="mt-2 text-sm text-ink-2">
                For a family villa stay, wedding or private event on one specific Hawaiian island.
              </p>
              <ol className="mt-6 space-y-4 text-sm text-ink-2">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-site text-xs font-semibold text-white">
                    1
                  </span>
                  <span><strong>Choose your island website:</strong> Open Oʻahu, Maui, Kauaʻi, or Big Island to view local menus and service zones.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-site text-xs font-semibold text-white">
                    2
                  </span>
                  <span><strong>Select your format:</strong> Choose private dining, multi-day Stay Chef, wedding catering, BBQ, or bar service.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-site text-xs font-semibold text-white">
                    3
                  </span>
                  <span><strong>Receive written quote:</strong> Itemized menu, staffing, travel, 20% service, and GET on separate lines.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-site text-xs font-semibold text-white">
                    4
                  </span>
                  <span><strong>Resident chef executes:</strong> Local culinary talent arrives with fresh ingredients and leaves the kitchen spotless.</span>
                </li>
              </ol>
              <div className="mt-8">
                <a href="#choose-island" className="cta-secondary-site">
                  Choose your island site →
                </a>
              </div>
            </SectionReveal>

            {/* Multi-Island Track */}
            <SectionReveal delay={80} className="card-site p-8 border-accent-site/30">
              <span className="text-xs uppercase tracking-wider text-accent-site font-medium">Track 2</span>
              <h3 className="font-display text-2xl mt-1">Multi-Island Coordination</h3>
              <p className="mt-2 text-sm text-ink-2">
                For corporate offsites, wedding weeks, film shoots, or island-hopping family trips.
              </p>
              <ol className="mt-6 space-y-4 text-sm text-ink-2">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-site text-xs font-semibold text-white">
                    1
                  </span>
                  <span><strong>Share your Hawaii itinerary:</strong> Tell our central desk your dates, islands, guest counts, and event styles.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-site text-xs font-semibold text-white">
                    2
                  </span>
                  <span><strong>One coordinator across Hawaii:</strong> We coordinate menus and logistics with resident culinary teams on every island.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-site text-xs font-semibold text-white">
                    3
                  </span>
                  <span><strong>Unified contract & billing:</strong> One master invoice, single deposit, and one point of contact for the whole trip.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-site text-xs font-semibold text-white">
                    4
                  </span>
                  <span><strong>Synchronized execution:</strong> Flawless local dining wherever your schedule lands, without vendor friction.</span>
                </li>
              </ol>
              <div className="mt-8">
                <Link to="/quote?itinerary=multi" className="cta-site">
                  Quote a multi-island itinerary
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 6.5. RESIDENT CHEF ROSTER — PEOPLE & PROOF */}
      <section className="section-pad rule-t bg-[#F7F5F0]">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <div className="flex items-center gap-2">
              <ChefHat className="h-4 w-4 text-accent-site" aria-hidden="true" />
              <p className="eyebrow-site !mb-0 text-accent-site">Resident Island Talent</p>
            </div>
            <h2 className="h2-site mt-3">Meet your resident culinary leads.</h2>
            <p className="measure-site mt-4 text-ink-2">
              We never fly chefs between islands or rely on anonymous contractors. Vetted, background-checked,
              and fully insured culinary leads reside permanently on the island where your table is set.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CHEF_ROSTER.map((chef, i) => (
              <SectionReveal key={chef.name} delay={i * 60}>
                <div className="card-site flex h-full flex-col overflow-hidden bg-surface-site">
                  <div className="relative h-60 w-full overflow-hidden bg-surface-site">
                    <img
                      src={chef.photo}
                      alt={chef.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <IslandMark siteId={chef.siteId} className="h-5 w-5 drop-shadow-sm" />
                      <span className="rounded bg-black/60 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
                        {chef.island} Lead
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="font-display text-lg font-medium text-ink">{chef.name}</h3>
                      <p className="mt-1 text-xs text-accent-site font-medium">{chef.title}</p>
                      <p className="mt-3 text-xs text-ink-2 leading-relaxed">{chef.bio}</p>
                    </div>
                    <div className="mt-4 border-t border-line-site pt-3">
                      <p className="text-[10px] uppercase tracking-wider font-semibold text-ink-2">Signature Dish</p>
                      <p className="mt-1 text-xs font-medium text-ink leading-snug">{chef.dish}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6.6. SAMPLE MENUS & DOWNLOADABLE ITEMIZED QUOTE PDF */}
      <section className="section-pad rule-t">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <div className="flex items-center gap-2">
              <FileDown className="h-4 w-4 text-accent-site" aria-hidden="true" />
              <p className="eyebrow-site !mb-0 text-accent-site">Culinary Depth & Pricing Proof</p>
            </div>
            <h2 className="h2-site mt-3">Course-by-course sample menus.</h2>
            <p className="measure-site mt-4 text-ink-2">
              Every dinner is customized to your dietary needs and seasonal island catch. Here is what an
              evening at your villa or estate looks like, course by course.
            </p>
          </SectionReveal>

          {/* Sample Menus 3-Column Grid */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {SAMPLE_MENUS.map((menu, i) => (
              <SectionReveal key={menu.title} delay={i * 80}>
                <div className="card-site flex h-full flex-col justify-between p-6 bg-surface-site">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-site">
                      {menu.format}
                    </span>
                    <h3 className="font-display text-xl mt-1.5 text-ink">{menu.title}</h3>
                    <p className="tabular-site mt-1 text-xs font-medium text-ink-2">{menu.tier}</p>

                    <div className="mt-6 space-y-4 border-t border-line-site pt-4">
                      {menu.courses.map((c) => (
                        <div key={c.course} className="text-xs">
                          <p className="font-semibold text-ink uppercase tracking-wider text-[10px] text-accent-site">
                            {c.course}
                          </p>
                          <p className="font-display text-sm font-medium text-ink mt-0.5">{c.dish}</p>
                          <p className="text-ink-2 mt-0.5 leading-relaxed">{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-line-site pt-4">
                    <Link
                      to="/quote"
                      className="cta-secondary-site w-full text-center block text-xs"
                    >
                      Request this menu for your dates →
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Downloadable Itemized Quote PDF Banner */}
          <SectionReveal delay={100} className="mt-10 rounded-2xl border border-line-site bg-[#F1EEE6] p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-accent-site" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink">
                    Transparent Itemized Quote Sample
                  </span>
                </div>
                <h3 className="font-display text-2xl font-medium text-ink">
                  See the exact itemized proposal before you inquire.
                </h3>
                <p className="mt-2 text-sm text-ink-2 leading-relaxed">
                  We believe in total financial transparency. Review an actual sample proposal showing chef labor,
                  the separate 20% service charge line, statutory Hawaiʻi GET up to 4.7120%, and groceries passed through at raw cost.
                </p>
              </div>
              <a
                href="/sample-quotes/sample-itemized-quote-mychef-hawaii.pdf"
                download="sample-itemized-quote-mychef-hawaii.pdf"
                className="cta-site shrink-0 inline-flex items-center gap-2 whitespace-nowrap shadow-md hover:shadow-lg transition-all"
              >
                <FileDown className="h-4 w-4" aria-hidden="true" />
                <span>Download Sample Quote (PDF)</span>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 6.7. VERIFIABLE TESTIMONIALS & CLIENT PROOF */}
      <section className="section-pad rule-t bg-[#F7F5F0]">
        <div className="mx-auto max-w-6xl px-6">
          <SectionReveal>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-amber-500 text-amber-500" aria-hidden="true" />
              <p className="eyebrow-site !mb-0 text-accent-site">Verifiable Proof</p>
            </div>
            <h2 className="h2-site mt-3">From private villas to multi-island retreats.</h2>
            <p className="measure-site mt-4 text-ink-2">
              No anonymous five-star quotes. Authentic client references and confirmed event feedback
              from luxury estate travelers across Hawaii.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <SectionReveal key={t.author} delay={i * 60}>
                <div className="card-site flex h-full flex-col justify-between p-6 sm:p-8 bg-surface-site">
                  <div>
                    <Quote className="h-8 w-8 text-accent-site/25 mb-4" aria-hidden="true" />
                    <p className="text-sm sm:text-base leading-relaxed text-ink italic">
                      “{t.quote}”
                    </p>
                  </div>
                  <div className="mt-6 border-t border-line-site pt-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-ink text-sm">{t.author}</p>
                      <p className="text-xs text-ink-2 mt-0.5">{t.role}</p>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
                      {t.verified}
                    </span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Discreet Pedigree & Confidential High-Profile Notice */}
          <SectionReveal delay={80} className="mt-10 rounded-2xl border border-line-site/80 bg-surface-site p-6 sm:p-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-site/10 text-accent-site">
                <Shield className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-site">
                  Confidential Discretion & High-Profile Protocol
                </span>
                <h4 className="font-display text-lg font-medium text-ink mt-0.5">
                  Trusted by private family offices, dignitaries, and notable figures.
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-ink-2 leading-relaxed">
                  Over two decades, our culinary directors and estate leads have cooked for rooms the world already
                  knew — including Robin Williams and Britney Spears — as well as private family offices and executives requiring
                  ironclad non-disclosure agreements (NDAs) and total kitchen privacy.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 7. WHY myCHEF — OPERATING MODEL & TRUST */}
      <section className="section-pad rule-t">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <img
              src="/img/hub/pedigree-discretion.webp"
              alt="A discreet private dinner our chef plated at night — the standard we hold across all Hawaiian islands"
              className="w-full object-cover card-site"
              style={{ aspectRatio: '16/11' }}
            />
          </SectionReveal>
          <div className="lg:col-span-7">
            <SectionReveal>
              <p className="eyebrow-site">The Operating Model</p>
              <h2 className="h2-site mt-3">Why myCHEF Hawaii is built this way.</h2>
              <p className="mt-4 text-ink-2 leading-relaxed">
                This is the statewide myCHEF Hawaii hub. Use it when you need catering, private
                chefs, or event support across Hawaii, especially when your booking involves
                multiple islands. For a single-island booking, our dedicated island websites
                provide local menus, pricing, and service information.
              </p>
            </SectionReveal>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <SectionReveal>
                <h3 className="font-display text-xl">100% Resident Island Teams</h3>
                <p className="mt-2 text-sm text-ink-2">
                  We don’t fly chefs between islands with costly flights and barge delays. Vetted,
                  insured culinary talent lives on the island where your meal is cooked.
                </p>
              </SectionReveal>
              <SectionReveal delay={60}>
                <h3 className="font-display text-xl">Confidential Discretion</h3>
                <p className="mt-2 text-sm text-ink-2">
                  We have cooked for high-profile rooms the world already knew — including Robin
                  Williams and Britney Spears — and for private family offices that demand absolute privacy.
                </p>
              </SectionReveal>
              <SectionReveal delay={120}>
                <h3 className="font-display text-xl">The Honesty Register</h3>
                <p className="mt-2 text-sm text-ink-2">
                  Zero fake reviews. Grocery receipts provided at cost without retail markup.
                  Written quotes that are the confirmed final total.
                </p>
              </SectionReveal>
              <SectionReveal delay={180}>
                <h3 className="font-display text-xl">One Central Account</h3>
                <p className="mt-2 text-sm text-ink-2">
                  Corporate billing, verified insurance certificates (COIs), and master dietary
                  intake tracked across your entire Hawaiian journey.
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GUIDES LIBRARY STRIP */}
      <section className="section-pad rule-t bg-[#F1EEE6]">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <img
              src="/img/hub/guides-planning.webp"
              alt="Our chef planning a villa week from market produce — the editorial notes behind the statewide guides"
              className="w-full object-cover card-site"
              style={{ aspectRatio: '16/10' }}
            />
          </SectionReveal>
          <div className="lg:col-span-7">
            <SectionReveal>
              <p className="eyebrow-site">Editorial Library</p>
              <h2 className="h2-site mt-2">Read before you book.</h2>
              <p className="mt-3 text-sm text-ink-2">
                Unvarnished guides on costs, etiquette, kitchen requirements, island seasons, and
                lead times before you confirm a booking.
              </p>
            </SectionReveal>
            <div className="mt-8">
              {GUIDES.map((g, i) => (
                <SectionReveal key={g.to} delay={i * 60} className="border-t border-line-site last:border-b">
                  <Link to={g.to} className="group flex items-baseline justify-between gap-6 py-4 no-underline" style={{ color: 'inherit' }}>
                    <span className="font-display text-xl group-hover:text-accent-site motion-site">
                      {g.label}
                    </span>
                    <span className="shrink-0 text-sm text-ink-2">{g.note} →</span>
                  </Link>
                </SectionReveal>
              ))}
            </div>
            <div className="mt-6">
              <Link to="/guides" className="cta-secondary-site">
                Browse all 14 statewide guides →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="section-pad rule-t">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-12">
          <SectionReveal className="lg:col-span-5">
            <img
              src="/img/hub/faq-guest-brief.webp"
              alt="Our chef walking clients through the written brief before service"
              className="w-full object-cover card-site"
              style={{ aspectRatio: '16/10' }}
            />
          </SectionReveal>
          <div className="lg:col-span-7">
            <p className="eyebrow-site">Clear Answers</p>
            <h2 className="h2-site mt-2 mb-6">Frequently asked questions</h2>
            <FAQAccordion items={HOME_FAQ} />
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA — ONE DINNER OR FOUR ISLANDS */}
      <section className="relative isolate overflow-hidden">
        <img
          src="/img/hub/cta-take-the-table.webp"
          alt="Our chef placing the first course on a villa table at dusk — the moment a written quote becomes dinner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(20,18,14,0.96) 0%, rgba(20,18,14,0.82) 45%, rgba(20,18,14,0.60) 100%)',
          }}
        />
        <div className="relative z-10 section-pad mx-auto max-w-3xl px-6 text-center">
          <span className="eyebrow-site uppercase tracking-widest text-[#EDE8DB]">
            The Statewide Desk
          </span>
          <h2 className="h2-site mt-3" style={{ color: '#F7F5F0' }}>
            One dinner or four islands. Start here.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(247,245,240,0.90)' }}>
            Tell us your island(s), date(s), guest count, and event format. We deliver a confirmed,
            itemized written quote with published numbers and zero hidden surprises.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              to="/quote?itinerary=multi"
              className="cta-site w-full sm:w-auto"
              style={{ backgroundColor: '#F7F5F0', color: '#23201A' }}
            >
              Plan a Multi-Island Event
            </Link>
            <Link
              to="/quote"
              className="cta-ghost-site w-full sm:w-auto"
              style={{ color: '#EDE8DB', borderColor: 'rgba(237,232,219,0.5)' }}
            >
              Single Island Quote
            </Link>
            <a
              className="cta-ghost-site w-full sm:w-auto"
              style={{ color: '#EDE8DB', borderColor: 'rgba(237,232,219,0.5)' }}
              href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('myCHEF Hawaii — quote brief\nIsland / itinerary: \nService: \nDates: \nGuests: ')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp the Desk →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
