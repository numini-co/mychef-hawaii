/**
 * Interactive Hawaii Event Pricing Calculator
 *
 * Provides real-time, transparent cost forecasting for private chefs and catering
 * across Oʻahu, Maui, Kauaʻi, and Hawaiʻi Island.
 *
 * Features:
 * - Island selector with live county-specific baseline rates, freight factors, and GET taxes
 * - Format selector (Signature Coursed Dinner, Family Style Feast, Fine Dining/Chef's Table, Live-Flame BBQ, Stay Chef)
 * - Guest count slider (2 to 75 guests)
 * - Staffing calculation (servers, sous chefs) with 4-hour minimums
 * - Beverage & bar cart add-ons
 * - Surcharge zone modeling (North Shore / Turtle Bay / Hāna / Poʻipū / Kohala Coast)
 * - Itemized fee stack (Food & Chef, Staffing, Bar, Travel, 20% Service, Hawaiʻi GET)
 * - 1-Click transfer to QuoteFlow with all parameters pre-populated
 */

import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router';
import { Seo, faqLd, breadcrumbLd } from '@/platform/seo';
import SectionReveal from '@/components/SectionReveal';
import FAQAccordion from '@/components/FAQAccordion';
import type { IslandId } from '@/platform/tokens';
import IslandMark from '@/components/IslandMark';
import { formatMoney, RATES } from '@/platform/config';

interface IslandPricingConfig {
  id: IslandId;
  name: string;
  taxRate: number; // GET tax rate
  taxLabel: string;
  foodBands: {
    signature: { min: number; max: number; label: string };
    family: { min: number; max: number; label: string };
    premium: { min: number; max: number; label: string };
    bbq: { min: number; max: number; label: string };
    stayChefDaily: number;
    dateNightFixed: number;
  };
  zones: { id: string; name: string; travelFee: number }[];
}

const ISLAND_CONFIGS: Record<IslandId, IslandPricingConfig> = {
  oahu: {
    id: 'oahu',
    name: 'Oʻahu',
    taxRate: 0.04712,
    taxLabel: '4.7120% (Honolulu County)',
    foodBands: {
      signature: { min: RATES.oahu.coreLow, max: RATES.oahu.coreHigh, label: `${RATES.oahu.coreBand}/guest` },
      family: { min: RATES.oahu.coreLow, max: RATES.oahu.coreHigh, label: `Signature ${RATES.oahu.coreBand}/guest` },
      premium: { min: 190, max: 275, label: 'Premium $190–$275/guest' },
      bbq: { min: 95, max: 125, label: 'Table $95–$125/guest' },
      stayChefDaily: RATES.oahu.stayChefDay,
      dateNightFixed: 450,
    },
    zones: [
      { id: 'base', name: 'Metro Honolulu / Waikīkī / Kahala / Ko Olina / Kailua (Base Zone)', travelFee: 0 },
      { id: 'north-shore', name: 'North Shore (Haleiwa, Waialua, Sunset Beach)', travelFee: 75 },
      { id: 'turtle-bay', name: 'Turtle Bay / Kahuku Coast', travelFee: 95 },
    ],
  },
  maui: {
    id: 'maui',
    name: 'Maui',
    taxRate: 0.04712,
    taxLabel: '4.7120% (Maui County)',
    foodBands: {
      signature: { min: RATES.maui.coreLow, max: RATES.maui.coreHigh, label: `${RATES.maui.coreBand}/guest` },
      family: { min: RATES.maui.coreLow, max: RATES.maui.coreHigh, label: `Signature ${RATES.maui.coreBand}/guest` },
      premium: { min: 190, max: 275, label: 'Premium $190–$275/guest' },
      bbq: { min: RATES.maui.coreLow, max: RATES.maui.coreHigh, label: `Signature from ${formatMoney(RATES.maui.coreLow)}/guest` },
      stayChefDaily: RATES.maui.stayChefDay,
      dateNightFixed: 500,
    },
    zones: [
      { id: 'south-west', name: 'Wailea / Mākena / Kihei / Kāʻanapali / Kapalua (Base Zone)', travelFee: 0 },
      { id: 'upcountry', name: 'Upcountry / Kula / Makawao', travelFee: 65 },
      { id: 'hana', name: 'Hāna Highway / East Maui Coast', travelFee: 150 },
    ],
  },
  kauai: {
    id: 'kauai',
    name: 'Kauaʻi',
    taxRate: 0.04712,
    taxLabel: '4.7120% (Kauaʻi County)',
    foodBands: {
      signature: { min: RATES.kauai.coreLow, max: RATES.kauai.coreHigh, label: `${RATES.kauai.coreBand}/guest` },
      family: { min: RATES.kauai.coreLow, max: RATES.kauai.coreHigh, label: `Signature ${RATES.kauai.coreBand}/guest` },
      premium: { min: 190, max: 275, label: 'Premium $190–$275/guest' },
      bbq: { min: RATES.kauai.coreLow, max: RATES.kauai.coreHigh, label: `Signature from ${formatMoney(RATES.kauai.coreLow)}/guest` },
      stayChefDaily: RATES.kauai.stayChefDay,
      dateNightFixed: 650,
    },
    zones: [
      { id: 'south-east', name: 'Poʻipū / Kōloa / Līhuʻe / Kapaʻa (Base Zone)', travelFee: 0 },
      { id: 'north-shore', name: 'North Shore (Princeville, Hanalei, Haena)', travelFee: 95 },
      { id: 'west-side', name: 'Waimea / Kekaha / Kōkeʻe', travelFee: 75 },
    ],
  },
  bigisland: {
    id: 'bigisland',
    name: 'Hawaiʻi Island',
    taxRate: 0.04712,
    taxLabel: '4.7120% (Hawaiʻi County)',
    foodBands: {
      signature: { min: RATES.bigisland.coreLow, max: RATES.bigisland.coreHigh, label: `${RATES.bigisland.coreBand}/guest` },
      family: { min: RATES.bigisland.coreLow, max: RATES.bigisland.coreHigh, label: `Signature ${RATES.bigisland.coreBand}/guest` },
      premium: { min: 190, max: 275, label: 'Premium $190–$275/guest' },
      bbq: { min: 110, max: RATES.bigisland.coreLow, label: `Entry from $110 · Signature from ${formatMoney(RATES.bigisland.coreLow)}` },
      stayChefDaily: RATES.bigisland.stayChefDay,
      dateNightFixed: 550,
    },
    zones: [
      { id: 'kona-kohala', name: 'Kona Coast / Waikoloa / Mauna Lani / Mauna Kea (Base Zone)', travelFee: 0 },
      { id: 'south-kona', name: 'South Kona / Captain Cook', travelFee: 65 },
      { id: 'hilo-hamakua', name: 'Hilo / Hāmākua Coast / Waimea', travelFee: 85 },
      { id: 'volcano', name: 'Volcano / Kaʻū District', travelFee: 120 },
    ],
  },
};

const FORMATS = [
  {
    id: 'signature',
    name: 'Signature Plated Dinner',
    tag: '3–5 Coursed Dining',
    desc: 'Bespoke coursed dinner cooked and served in your residence. Groceries included.',
    isPerGuest: true,
  },
  {
    id: 'family',
    name: 'Family-Style Passed Feast',
    tag: 'Communal Luxury',
    desc: 'Artisan communal platters passed at the table: seafood, beef, and farm sides. Groceries included.',
    isPerGuest: true,
  },
  {
    id: 'premium',
    name: 'Chef’s Table & Tasting Menu',
    tag: 'Pier 38 Sashimi & Caviar',
    desc: 'Ultra-premium ingredients: daily dock auction catch, wagyu, specialty pairings. Groceries included.',
    isPerGuest: true,
  },
  {
    id: 'bbq',
    name: 'Live-Flame Outdoor BBQ',
    tag: 'Lanai & Lawn Grilling',
    desc: 'Chef-attended grill station: marinated catch, ribs, grilled island vegetables. Groceries included.',
    isPerGuest: true,
  },
  {
    id: 'stay-chef',
    name: 'Stay Chef (Multi-Day)',
    tag: 'Villa Culinary Residency',
    desc: 'Dedicated private chef for breakfast, lunch, and dinner. Daily chef fee + groceries at cost.',
    isPerGuest: false,
  },
];

const CALCULATOR_FAQ = [
  {
    q: 'How accurate is this pricing calculator?',
    a: 'The calculator uses our exact published rate cards, current county General Excise Tax (GET) rates, and standardized staffing ratios. Because menus are customized to your group dietary preferences and seasonality, the low-to-high spread reflects menu protein selections. The written quote you receive after inquiry is the confirmed final total — never an estimate.',
  },
  {
    q: 'Are groceries included in the calculator numbers?',
    a: 'Yes, for all single-event formats (Signature, Family-Style, Chef’s Table, and BBQ), all groceries and fresh ingredients inside the chosen tier are 100% included. For Stay Chef multi-day residency, the calculator shows the chef’s professional daily fee plus an estimated $60–$90/person/day grocery allocation billed at cost with original receipts provided.',
  },
  {
    q: 'Why does staffing add additional charges?',
    a: 'For intimate groups under 8 guests, a private chef handles both cooking and table presentation seamlessly. For 10+ guests or plated multi-course formats, a dedicated front-of-house server ($55/hr, 4-hour minimum) is required to ensure wine service, synchronized dish presentation, and rapid table clearing. For 25+ guests, a sous chef ($75/hr) is added.',
  },
  {
    q: 'What is the 20% service charge?',
    a: 'The 20% service charge appears on its own line on every myCHEF quote. It covers kitchen operational equipment, administrative coordination, licensing, commercial general liability insurance naming your residence, and emergency chef substitution coverage. It is not a gratuity; tips remain 100% voluntary.',
  },
];

export default function CalculatorPage() {
  const navigate = useNavigate();

  const [islandId, setIslandId] = useState<IslandId>('oahu');
  const [formatId, setFormatId] = useState('signature');
  const [guests, setGuests] = useState(8);
  const [stayDays, setStayDays] = useState(3);
  const [selectedZoneId, setSelectedZoneId] = useState('base');
  const [includeBarCart, setIncludeBarCart] = useState(false);

  const cfg = ISLAND_CONFIGS[islandId];
  const format = FORMATS.find((f) => f.id === formatId) || FORMATS[0];

  // Auto-calculated staffing requirements based on group size
  const recommendedServers = useMemo(() => {
    if (formatId === 'stay-chef') return 0;
    if (guests < 8) return 0;
    if (guests <= 14) return 1;
    if (guests <= 26) return 2;
    if (guests <= 40) return 3;
    return Math.ceil(guests / 12);
  }, [guests, formatId]);

  const recommendedSousChefs = useMemo(() => {
    if (formatId === 'stay-chef') return 0;
    if (guests < 16) return 0;
    if (guests <= 35) return 1;
    return 2;
  }, [guests, formatId]);

  const activeServers = recommendedServers;

  // Selected Zone
  const currentZone = cfg.zones.find((z) => z.id === selectedZoneId) || cfg.zones[0];
  const travelFee = currentZone.travelFee;

  // Pricing arithmetic
  const math = useMemo(() => {
    let foodMin = 0;
    let foodMax = 0;

    if (formatId === 'stay-chef') {
      const dailyChef = cfg.foodBands.stayChefDaily * stayDays;
      const groceryEstMin = guests * 65 * stayDays;
      const groceryEstMax = guests * 95 * stayDays;
      foodMin = dailyChef + groceryEstMin;
      foodMax = dailyChef + groceryEstMax;
    } else {
      const band =
        formatId === 'family'
          ? cfg.foodBands.family
          : formatId === 'premium'
            ? cfg.foodBands.premium
            : formatId === 'bbq'
              ? cfg.foodBands.bbq
              : cfg.foodBands.signature;

      if (guests === 2) {
        foodMin = cfg.foodBands.dateNightFixed;
        foodMax = cfg.foodBands.dateNightFixed + 100;
      } else {
        foodMin = guests * band.min;
        foodMax = guests * band.max;
      }
    }

    // Staffing lines (4-hour floor standard)
    const serverRate = 55;
    const sousRate = 75;
    const staffHours = 4;
    const serverTotal = activeServers * serverRate * staffHours;
    const sousTotal = recommendedSousChefs * sousRate * staffHours;
    const staffingCost = serverTotal + sousTotal;

    // Bar Cart line ($650 base + $45/guest for glassware/ice/mixers/garnishes)
    const barCost = includeBarCart ? 650 + guests * 45 : 0;

    // Subtotal before tax & service
    const subtotalMin = foodMin + staffingCost + barCost + travelFee;
    const subtotalMax = foodMax + staffingCost + barCost + travelFee;

    // 20% Service Charge
    const serviceMin = subtotalMin * 0.20;
    const serviceMax = subtotalMax * 0.20;

    // Hawaiʻi GET
    const taxMin = (subtotalMin + serviceMin) * cfg.taxRate;
    const taxMax = (subtotalMax + serviceMax) * cfg.taxRate;

    // Total Confirmed Range
    const totalMin = subtotalMin + serviceMin + taxMin;
    const totalMax = subtotalMax + serviceMax + taxMax;

    const perGuestMin = totalMin / guests;
    const perGuestMax = totalMax / guests;

    return {
      foodMin,
      foodMax,
      staffingCost,
      serverTotal,
      sousTotal,
      barCost,
      travelFee,
      subtotalMin,
      subtotalMax,
      serviceMin,
      serviceMax,
      taxMin,
      taxMax,
      totalMin,
      totalMax,
      perGuestMin,
      perGuestMax,
    };
  }, [cfg, formatId, guests, stayDays, activeServers, recommendedSousChefs, includeBarCart, travelFee]);

  const handleTransferToQuote = () => {
    const params = new URLSearchParams({
      island: islandId,
      service: formatId === 'stay-chef' ? 'stay-chef' : formatId === 'bbq' ? 'event-catering' : 'signature',
      guests: guests.toString(),
      area: currentZone.name.split('(')[0].trim(),
    });
    navigate(`/quote?${params.toString()}`);
  };

  return (
    <>
      <Seo
        title="Hawaii Private Chef &amp; Catering Pricing Calculator | myCHEF"
        description="Interactive Hawaii private chef cost calculator. Compare published rates across Oʻahu, Maui, Kauaʻi, and Big Island. See itemized food, staffing, 20% service, and GET tax."
        path="/calculator"
        ogImage="/img/hub/rate-card-quote.jpg"
        jsonLd={[
          faqLd(CALCULATOR_FAQ),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Pricing Tariff', path: '/pricing' },
            { name: 'Calculator', path: '/calculator' },
          ]),
        ]}
      />

      {/* Header */}
      <section className="relative isolate overflow-hidden bg-[#181613] pt-24 pb-16 sm:pt-32 sm:pb-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <span className="eyebrow-site text-accent-site uppercase tracking-widest text-xs font-semibold">
            Live Tariff Modeler · Transparent Accounting
          </span>
          <h1 className="h1-site mt-4 max-w-4xl">
            Hawaii Event Pricing Calculator
          </h1>
          <p className="measure-site mt-6 text-base sm:text-lg text-[#F7F5F0]/90 leading-relaxed">
            Estimate your private chef or catering budget across Oʻahu, Maui, Kauaʻi, and the Big Island. All calculations reflect our published rates, honest grocery inclusions, required service staffing, the 20% service charge, and Hawaiʻi GET.
          </p>
        </div>
      </section>

      {/* Main Interactive Tool Section */}
      <section className="section-pad bg-[#F7F5F0]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            
            {/* Input Controls (Left Column) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* 1. Island Selection */}
              <div className="card-site p-6 sm:p-7 bg-white">
                <span className="text-xs uppercase tracking-wider text-ink-2 font-semibold">Step 1</span>
                <h3 className="font-display text-xl font-medium text-ink mt-1">Select your Hawaiian Island</h3>
                <p className="text-xs text-ink-2 mt-1">
                  Each island maintains independent grocery freight lines and county General Excise Tax.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {(['oahu', 'maui', 'kauai', 'bigisland'] as IslandId[]).map((id) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => {
                        setIslandId(id);
                        setSelectedZoneId('base');
                      }}
                      className={`motion-site flex flex-col items-center justify-center p-3.5 rounded-lg border text-center transition-all ${
                        islandId === id
                          ? 'border-accent-site bg-accent-site/10 shadow-sm ring-1 ring-accent-site'
                          : 'border-line-site bg-white hover:border-[#8A6D3B]/40'
                      }`}
                    >
                      <IslandMark siteId={id} className="h-6 w-6 text-ink" />
                      <span className="font-display mt-2 text-sm font-semibold text-ink">
                        {ISLAND_CONFIGS[id].name}
                      </span>
                      <span className="text-[10px] text-ink-2 mt-0.5">
                        {id === 'oahu' ? 'From $125' : 'From $150'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Format Selection */}
              <div className="card-site p-6 sm:p-7 bg-white">
                <span className="text-xs uppercase tracking-wider text-ink-2 font-semibold">Step 2</span>
                <h3 className="font-display text-xl font-medium text-ink mt-1">Dining Format</h3>
                <p className="text-xs text-ink-2 mt-1">
                  All single dinners include chef preparation, grocery shopping, fresh ingredients, and kitchen cleanup.
                </p>

                <div className="mt-4 space-y-2.5">
                  {FORMATS.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFormatId(f.id)}
                      className={`motion-site w-full text-left p-4 rounded-lg border transition-all ${
                        formatId === f.id
                          ? 'border-accent-site bg-accent-site/10 ring-1 ring-accent-site'
                          : 'border-line-site bg-white hover:border-[#8A6D3B]/40'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="font-display text-base font-semibold text-ink">{f.name}</span>
                        <span className="rounded bg-black/5 px-2 py-0.5 text-[10px] font-semibold text-accent-site uppercase tracking-wider">
                          {f.tag}
                        </span>
                      </div>
                      <p className="text-xs text-ink-2 mt-1">{f.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Guest Count & Duration */}
              <div className="card-site p-6 sm:p-7 bg-white">
                <span className="text-xs uppercase tracking-wider text-ink-2 font-semibold">Step 3</span>
                <h3 className="font-display text-xl font-medium text-ink mt-1">
                  {formatId === 'stay-chef' ? 'Guests & Number of Days' : 'Guest Count'}
                </h3>

                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ink">Number of Guests</span>
                    <span className="font-display tabular-site text-2xl font-bold text-accent-site">
                      {guests} {guests === 1 ? 'Guest' : 'Guests'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={75}
                    step={1}
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                    className="mt-3 w-full accent-[#8A6D3B] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-ink-2 mt-1">
                    <span>2 (Date Night)</span>
                    <span>10 (Plated Standard)</span>
                    <span>25 (Staffed Event)</span>
                    <span>50+ (Catering)</span>
                    <span>75 (Ceiling)</span>
                  </div>
                </div>

                {formatId === 'stay-chef' && (
                  <div className="mt-6 border-t border-line-site pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-ink">Duration (Days in Residence)</span>
                      <span className="font-display tabular-site text-2xl font-bold text-accent-site">
                        {stayDays} {stayDays === 1 ? 'Day' : 'Days'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={14}
                      step={1}
                      value={stayDays}
                      onChange={(e) => setStayDays(parseInt(e.target.value, 10))}
                      className="mt-3 w-full accent-[#8A6D3B] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-ink-2 mt-1">
                      <span>1 Day</span>
                      <span>3 Days (Long Weekend)</span>
                      <span>7 Days (Full Week)</span>
                      <span>14 Days (Extended Stay)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Travel Corridor & Location */}
              <div className="card-site p-6 sm:p-7 bg-white">
                <span className="text-xs uppercase tracking-wider text-ink-2 font-semibold">Step 4</span>
                <h3 className="font-display text-xl font-medium text-ink mt-1">Location &amp; Travel Zone</h3>
                <p className="text-xs text-ink-2 mt-1">
                  We cook across all parts of {cfg.name}. Travel surcharges only apply where real highway transit distances exist.
                </p>

                <div className="mt-4 space-y-2">
                  {cfg.zones.map((zone) => (
                    <label
                      key={zone.id}
                      className={`motion-site flex items-center justify-between p-3.5 rounded-lg border cursor-pointer transition-all ${
                        selectedZoneId === zone.id
                          ? 'border-accent-site bg-accent-site/5 ring-1 ring-accent-site'
                          : 'border-line-site hover:border-[#8A6D3B]/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="travel-zone"
                          checked={selectedZoneId === zone.id}
                          onChange={() => setSelectedZoneId(zone.id)}
                          className="accent-[#8A6D3B]"
                        />
                        <span className="text-xs sm:text-sm text-ink font-medium">{zone.name}</span>
                      </div>
                      <span className="tabular-site text-xs font-semibold text-ink-2 whitespace-nowrap">
                        {zone.travelFee === 0 ? 'Base Zone ($0)' : `+$${zone.travelFee} Travel`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 5. Event Add-ons */}
              <div className="card-site p-6 sm:p-7 bg-white">
                <span className="text-xs uppercase tracking-wider text-ink-2 font-semibold">Step 5</span>
                <h3 className="font-display text-xl font-medium text-ink mt-1">Staffing &amp; Bar Add-Ons</h3>

                <div className="mt-4 space-y-4">
                  {/* Bar Cart */}
                  <label className="flex items-start gap-3 p-3.5 rounded-lg border border-line-site cursor-pointer hover:border-[#8A6D3B]/40">
                    <input
                      type="checkbox"
                      checked={includeBarCart}
                      onChange={(e) => setIncludeBarCart(e.target.checked)}
                      className="accent-[#8A6D3B] mt-0.5"
                    />
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-ink">Packaged Mobile Bar Cart Service</span>
                      </div>
                      <p className="text-xs text-ink-2 mt-0.5">
                        Includes premium bar glassware, cooler chest, craft mixers, tropical garnishes, and artisan ice. Alcohol client-supplied or licensed referral bartender.
                      </p>
                      <span className="tabular-site text-xs font-semibold text-accent-site mt-1 inline-block">
                        From $650 / 4 hours + $45/guest
                      </span>
                    </div>
                  </label>

                  {/* Staffing adjustment info */}
                  <div className="p-3.5 rounded-lg bg-[#F7F5F0] text-xs text-ink-2 space-y-1">
                    <p className="font-semibold text-ink">Automatic Staffing Rules Applied:</p>
                    <p>• Dedicated Lead Chef: 1 included in food band</p>
                    <p>
                      • Service Associates: {activeServers} server{activeServers === 1 ? '' : 's'} included in quote ({activeServers > 0 ? `$55/hr, 4-hr floor ($${activeServers * 55 * 4})` : 'Self-served table under 8 guests'})
                    </p>
                    {recommendedSousChefs > 0 && (
                      <p>• Sous Chefs: {recommendedSousChefs} sous chef ({recommendedSousChefs * 75 * 4} for large scale prep)</p>
                    )}
                  </div>
                </div>
              </div>

            </div>

            {/* Live Arithmetic Output (Sticky Right Column) */}
            <div className="lg:col-span-5 sticky top-24 space-y-6">
              
              <div className="card-site overflow-hidden bg-white shadow-md border-line-site">
                <div className="p-6 bg-[#23201A] text-white">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow-site text-accent-site uppercase tracking-wider text-xs">
                      Instant Written Estimate
                    </span>
                    <span className="rounded bg-white/10 px-2.5 py-0.5 text-xs text-[#EDE8DB] font-medium">
                      {cfg.name}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-[#EDE8DB]/80 uppercase tracking-wider">Estimated Total Investment</p>
                    <p className="font-display tabular-site text-3xl sm:text-4xl font-bold mt-1 text-[#F7F5F0]">
                      {formatMoney(math.totalMin)} – {formatMoney(math.totalMax)}
                    </p>
                    <p className="tabular-site text-xs text-[#EDE8DB]/80 mt-1">
                      Approximately {formatMoney(math.perGuestMin)} – {formatMoney(math.perGuestMax)} per guest (all taxes &amp; fees included)
                    </p>
                  </div>
                </div>

                {/* Itemized Line Breakdown */}
                <div className="p-6 divide-y divide-line-site text-xs sm:text-sm">
                  
                  {/* Food & Chef Line */}
                  <div className="py-2.5 flex justify-between items-start">
                    <div>
                      <span className="font-medium text-ink block">{format.name}</span>
                      <span className="text-xs text-ink-2">
                        {formatId === 'stay-chef'
                          ? `${stayDays} days chef fee + groceries at cost`
                          : `${guests} guests · Groceries included`}
                      </span>
                    </div>
                    <span className="tabular-site font-semibold text-ink whitespace-nowrap">
                      {formatMoney(math.foodMin)} – {formatMoney(math.foodMax)}
                    </span>
                  </div>

                  {/* Staffing */}
                  <div className="py-2.5 flex justify-between items-start">
                    <div>
                      <span className="font-medium text-ink block">Service Staffing</span>
                      <span className="text-xs text-ink-2">
                        {activeServers > 0 || recommendedSousChefs > 0
                          ? `${activeServers} Server${activeServers === 1 ? '' : 's'} (${activeServers * 4}h)${recommendedSousChefs > 0 ? ` + ${recommendedSousChefs} Sous` : ''}`
                          : 'Chef sole service (< 8 guests)'}
                      </span>
                    </div>
                    <span className="tabular-site font-semibold text-ink whitespace-nowrap">
                      {math.staffingCost > 0 ? formatMoney(math.staffingCost) : '$0'}
                    </span>
                  </div>

                  {/* Bar Cart */}
                  {includeBarCart && (
                    <div className="py-2.5 flex justify-between items-start">
                      <div>
                        <span className="font-medium text-ink block">Mobile Bar Cart</span>
                        <span className="text-xs text-ink-2">Glassware, ice, craft mixers</span>
                      </div>
                      <span className="tabular-site font-semibold text-ink whitespace-nowrap">
                        {formatMoney(math.barCost)}
                      </span>
                    </div>
                  )}

                  {/* Travel Zone */}
                  <div className="py-2.5 flex justify-between items-start">
                    <div>
                      <span className="font-medium text-ink block">Travel Zone Surcharge</span>
                      <span className="text-xs text-ink-2">{currentZone.name.split('(')[0]}</span>
                    </div>
                    <span className="tabular-site font-semibold text-ink whitespace-nowrap">
                      {math.travelFee > 0 ? `+$${math.travelFee}` : '$0 (Base Zone)'}
                    </span>
                  </div>

                  {/* 20% Service Charge */}
                  <div className="py-2.5 flex justify-between items-start bg-[#F7F5F0] -mx-6 px-6">
                    <div>
                      <span className="font-medium text-ink block">20% Service Charge</span>
                      <span className="text-xs text-ink-2">Operations, COI &amp; culinary equipment</span>
                    </div>
                    <span className="tabular-site font-semibold text-ink whitespace-nowrap">
                      {formatMoney(math.serviceMin)} – {formatMoney(math.serviceMax)}
                    </span>
                  </div>

                  {/* Hawaiʻi GET Tax */}
                  <div className="py-2.5 flex justify-between items-start">
                    <div>
                      <span className="font-medium text-ink block">Hawaiʻi GET</span>
                      <span className="text-xs text-ink-2">{cfg.taxLabel}</span>
                    </div>
                    <span className="tabular-site font-semibold text-ink whitespace-nowrap">
                      {formatMoney(math.taxMin)} – {formatMoney(math.taxMax)}
                    </span>
                  </div>

                  {/* Confirmed Total */}
                  <div className="pt-4 flex justify-between items-baseline font-bold text-base text-ink">
                    <span>Confirmed Quote Range</span>
                    <span className="tabular-site text-accent-site text-lg">
                      {formatMoney(math.totalMin)} – {formatMoney(math.totalMax)}
                    </span>
                  </div>

                </div>

                {/* Direct Action Buttons */}
                <div className="p-6 bg-[#F1EEE6] border-t border-line-site space-y-3">
                  <button
                    type="button"
                    onClick={handleTransferToQuote}
                    className="cta-site w-full text-center motion-site py-3.5 text-sm font-semibold"
                  >
                    Lock This Estimate in a Written Quote →
                  </button>

                  <a
                    href={`https://wa.me/18084687748?text=${encodeURIComponent(
                      `myCHEF Hawaii Calculator Estimate:\nIsland: ${cfg.name}\nFormat: ${format.name}\nGuests: ${guests}\nEstimate: ${formatMoney(math.totalMin)} - ${formatMoney(math.totalMax)}\nPlease provide formal written availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-secondary-site w-full text-center block py-2.5 text-xs font-semibold"
                  >
                    Send to WhatsApp Concierge Desk →
                  </a>

                  <p className="text-[11px] text-ink-2 text-center mt-2 leading-relaxed">
                    Written quotes are guaranteed. A 50% deposit locks your date on the chef’s calendar only after you approve the exact menu and numbers.
                  </p>
                </div>

              </div>

              {/* Trust Badge */}
              <div className="card-site p-5 bg-[#F7F5F0] text-xs space-y-2 text-ink-2">
                <p className="font-semibold text-ink">The myCHEF Transparency Pledge</p>
                <p>• Zero hidden fees discovered on the invoice.</p>
                <p>• 100% voluntary gratuity — never added automatically.</p>
                <p>• Groceries at cost with original receipts on Stay Chef bookings.</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad rule-t bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <SectionReveal>
            <p className="eyebrow-site">Calculator Guidance</p>
            <h2 className="h2-site mt-2 mb-6">Frequently asked questions about Hawaii culinary pricing</h2>
            <FAQAccordion items={CALCULATOR_FAQ} />
          </SectionReveal>
        </div>
      </section>

      {/* Cross Links to Tariff and Multi-Island */}
      <section className="section-pad rule-t bg-[#F1EEE6]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-site p-8 bg-white">
              <span className="text-xs uppercase tracking-wider text-ink-2 font-medium">Statewide Tariff</span>
              <h3 className="font-display text-2xl mt-1">Review the Full Rate Cards</h3>
              <p className="mt-3 text-sm text-ink-2 leading-relaxed">
                Explore our side-by-side 4-island comparison matrix, inclusion specifications, and hourly staff fee schedules:
              </p>
              <Link to="/pricing" className="cta-site mt-6 inline-block text-xs">
                View Statewide Tariff →
              </Link>
            </div>

            <div className="card-site p-8 bg-white">
              <span className="text-xs uppercase tracking-wider text-accent-site font-medium">Statewide Logistics</span>
              <h3 className="font-display text-2xl mt-1">Multi-Island Itineraries</h3>
              <p className="mt-3 text-sm text-ink-2 leading-relaxed">
                Planning across Oʻahu, Maui, Kauaʻi, or Big Island? Coordinate all islands under one master brief, one point of contact, and unified billing:
              </p>
              <Link to="/multi-island-catering-hawaii" className="cta-secondary-site mt-6 inline-block text-xs">
                Explore Multi-Island Catering →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
