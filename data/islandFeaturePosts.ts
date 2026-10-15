import type { IslandId } from './islands';
import type { BlogArticle } from './blogArticles';

/**
 * Long-form island feature posts (Oct 2026). Each targets one informational
 * keyword that no commercial page owns (see /workspace/hawaii-keyword-lock-2026-10.md)
 * and links up to the owner pages with the owner's locked keyword as anchor.
 * Prices quoted here must match data/rateCard.ts. Titles must not use money keywords.
 */

export interface FeatureSection {
  heading: string;
  paras: string[];
}

export interface FeaturePost extends BlogArticle {
  feature: true;
  keyword: string;
  datePublished: string;
  sections: FeatureSection[];
}

export const islandFeaturePosts: Record<IslandId, FeaturePost[]> = {
  oahu: [
    {
      feature: true,
      slug: 'private-luau-oahu',
      keyword: 'private luau oahu',
      datePublished: '2026-10-14',
      name: 'Private luau on Oʻahu',
      h1: 'Private luau on Oʻahu — what you can host at your own house.',
      title: 'Private Luau on Oahu — Hosting One at Your House | myCHEF',
      description:
        'Planning a private luau on Oʻahu? What a backyard luau really needs: menu, imu vs grill, guest count, permits, staff and rain plans, house by house.',
      lede:
        'A private luau on Oʻahu usually means one of two things: seats at a resort show, or island food served at your own house. This guide is about the second one.',
      photo: 'cateringOahu',
      body: [],
      sections: [
        {
          heading: 'Two very different things called a “private luau”',
          paras: [
            'Search for a private luau on Oʻahu and you get a mix of results. Most are commercial shows at resorts and cultural venues, where you buy seats, sometimes in a reserved section, and the venue runs the food, the program and the parking. Those are well-run evenings, and if you want hula, fire knife dancing and a big shared buffet, a show is the right call.',
            'The other meaning is a party at the house you are already staying in: a Kahala lawn, a Ko Olina villa terrace, a Kailua backyard or a North Shore rental. Here nobody sells you a ticket. You are the host, the menu is yours, and the guest list is family, friends or a wedding party. That is the kind of evening myCHEF cooks. We are a kitchen, not a show company, so this guide is honest about which parts we handle and which parts you would book separately.',
          ],
        },
        {
          heading: 'What a backyard luau actually needs',
          paras: [
            'Strip away the program and a luau is a long, generous meal shared outdoors. On a villa lawn that means four things: food that can sit on a buffet line or come out family-style without wilting in trade-wind heat, enough hands to keep it moving, somewhere to cook that is not the guests’ dining space, and a plan for when the Koʻolau clouds roll over the ridge at six o’clock.',
            'Group size changes everything. Up to about a dozen guests, a chef and the house kitchen can cook and serve family-style platters. Past that, you are into staffed catering: a lead chef, cooks, servers and a cleanup crew, with rentals for tables, linens and serving equipment if the house does not have them. Our [Oahu catering](/catering) page covers staffed events from 10 to 75 guests, and that is the right starting point for most backyard luau requests.',
          ],
        },
        {
          heading: 'Imu or grill: the honest answer for rental houses',
          paras: [
            'Kālua pig is traditionally cooked in an imu, an underground oven of hot stones, banana stumps and ti leaves, over many hours. It is a skill passed down in families, and the result is beautiful. It is also rarely possible at a vacation rental: most owners and associations do not allow digging on the lawn, and fire rules vary by property and by district.',
            'What we do instead is cook over a grill and in the house oven, using island fish, island pork and local produce where we can verify it. The menu reads like a table on Oʻahu, not like a theme party. If a true imu matters to you, ask your rental host first and book a specialist who does it properly. We will happily build the rest of the meal around it.',
          ],
        },
        {
          heading: 'Building an Oʻahu menu that feels local',
          paras: [
            'A good luau-style table on Oʻahu leans on what the island does best. Fish comes through Honolulu, so the chef can plan around what is landing that week rather than promising a species months ahead. Poke-style starters, grilled whole fish or fillets, slow-cooked pork shoulder finished on the grill, sweet potato, rice, bright salads with local greens, and fruit for dessert all travel well on a buffet.',
            'Dietary needs belong in the brief, not as a surprise on the night. Shellfish allergies, vegetarian guests and kids’ plates are easy to plan when they are written into the quote. We name fish as what it is and do not invent farm names or claim a catch we cannot verify.',
          ],
        },
        {
          heading: 'Guest count, staff and timing',
          paras: [
            'For a dinner-sized group, a single chef can shop, cook, serve and leave the kitchen clean. Our [private chef Oahu](/) service covers that kind of evening, with dinner bands published on the site. For a party of 20, 40 or 60 people, plan on a staffed team. The written quote lists chef and staff hours, rentals, groceries and travel as separate lines, so you can see where the money goes.',
            'Timing on Oʻahu is mostly about traffic. A Saturday party in Kahala or Hawaiʻi Kai is very different from one at Ko Olina or on the North Shore, where the drive in and out can double at rush hour. We plan load-in around it, and that is why the address goes on the quote form first.',
          ],
        },
        {
          heading: 'Entertainment, permits and the neighbours',
          paras: [
            'If you want music or hula, book local performers directly. Ask them about amplified sound, because many neighbourhoods and associations have quiet hours, and a residential street in Kailua is not a resort lawn. If the party is on a public beach or in a park rather than at the house, check City and County of Honolulu park rules and permits before you plan any cooking there. Most of our backyard events stay at the house for exactly that reason.',
            'Lighting and rain matter more than people expect. A covered lānai or a rented tent keeps the buffet dry when a shower passes over. We plan a weather backup into every outdoor event quote.',
          ],
        },
        {
          heading: 'How a backyard luau evening runs, hour by hour',
          paras: [
            'Here is how a typical staffed backyard evening on Oʻahu unfolds for around 40 guests. Early in the afternoon the team arrives, parks where the host has agreed, and sets up the cooking area away from the lawn: grills, prep tables and a hand-wash station. Rentals arrive and the buffet line goes up under cover, facing the view but out of the wind.',
            'Around an hour before guests arrive, cold starters go on ice and drinks are set out. As people arrive, servers carry passed bites while the grill starts on the fish and pork. Dinner usually opens as the light starts to go, family-style or as a buffet, with a server keeping the line moving and refilling platters so nothing sits out too long.',
            'Dessert comes out after the speeches or the music. Then the team clears the buffet, breaks down the cooking area and leaves the kitchen and the lawn the way they found them. Leftovers are packed and labelled in the fridge if you want them. The whole plan, including arrival times and quiet hours, is written down before the date so the host and the neighbours know what to expect.',
          ],
        },
        {
          heading: 'What it costs, and how to get a real number',
          paras: [
            'For a dinner-sized group cooked by a single chef, the published Oʻahu bands apply. The CORE band is $195–$290 a guest with groceries included, and the full breakdown is on [Oahu private chef cost](/pricing). Larger luau-style events are quoted as catering, because staff, rentals and the guest count drive the number more than the menu does.',
            'The fastest way to a real price is to send the address, the date, the guest count and two lines about the evening you have in mind. If the house in question is in town, our [private chef Honolulu](/private-chef) page explains how in-house dinners run from Waikīkī to Kahala.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you run a luau show with hula and fire dancing?',
          a: 'No. We cook and staff the meal. If you want performers, book local entertainers directly, and we will plan the food service around their set.',
        },
        {
          q: 'Can you cook kālua pig in an imu at our rental?',
          a: 'Most rentals do not allow digging an imu. We cook pork and fish over a grill and in the house oven instead. If your host approves an imu, book a specialist for it and we can cook the rest of the menu.',
        },
        {
          q: 'How many guests can a backyard luau on Oʻahu have?',
          a: 'Up to about a dozen guests is a private chef dinner. From 10 to 75 guests we quote it as staffed catering with servers and cleanup.',
        },
        {
          q: 'What happens if it rains?',
          a: 'Every outdoor quote includes a weather plan, such as a covered lānai, an indoor dining room or a rented tent, agreed before the date.',
        },
        {
          q: 'Can we hold the party on a public beach instead?',
          a: 'Public beaches and parks on Oʻahu have their own rules and permits. Check them with the City and County of Honolulu first. Most of our events stay at the house.',
        },
      ],
      related: [
        { path: '/catering', label: 'Oahu catering' },
        { path: '/', label: 'Private chef Oahu' },
        { path: '/pricing', label: 'Oahu private chef cost' },
        { path: '/blog/family-reunions', label: 'Family reunions' },
      ],
    },

    {
      feature: true,
      slug: 'oahu-farmers-market-villa-week',
      keyword: 'oahu farmers market',
      datePublished: '2026-10-15',
      name: 'Oʻahu farmers markets for a villa week',
      h1: 'Oahu farmers market — shopping for a villa week, the chef’s way.',
      title: 'Oahu Farmers Market — Shopping for a Villa Week | myCHEF',
      description:
        'A chef’s guide to an Oahu farmers market week: Kailua, Kakaʻako, KCC and North Shore, what to buy, and how market produce becomes dinner at the house.',
      lede:
        'An Oahu farmers market morning is one of the best parts of a villa week. This is how a chef uses the markets, and how to shop if you are cooking some meals yourself.',
      photo: 'blogGroceryOahu',
      body: [],
      sections: [
        {
          heading: 'Why the markets matter on Oʻahu',
          paras: [
            'Oʻahu grows more than a lot of visitors expect. Windward farms around Waimānalo and Kailua grow greens, herbs and tropical fruit. Central and North Shore stands sell produce from across the island. Fishing boats work the harbours, and Honolulu’s fish counters move what landed that morning. An Oahu farmers market is where a lot of that meets the people cooking it.',
            'For a villa week in Kahala, Ko Olina, Kailua or on the North Shore, the markets do two jobs. They put better produce on the table than a resort grocery shelf, and they are a genuinely good morning out. Plan which of those jobs comes first, because a long browse and a focused shop are different mornings.',
            'Traffic matters as much as the stalls. A Saturday run to KCC from Ko Olina is a different morning than walking to a Kailua market from a house on Kalaheo Avenue. Build the market into the day’s plan the same way you would a snorkel trip: leave early, bring water, and do not schedule a hard lunch reservation right after.',
          ],
        },
        {
          heading: 'When and where to go',
          paras: [
            'Oʻahu markets run on a weekly rhythm rather than every day. Well-known stops include the Saturday market at Kapiʻolani Community College near Diamond Head, weekday and weekend markets in Kakaʻako and around Honolulu, the popular Kailua markets on the windward side, and North Shore markets near Haleʻiwa. Days and hours change with the season and the organisers, so check the current schedule before you drive.',
            'Go early. The best greens, avocados and fruit sell out first, parking fills up, and the morning is cooler for walking the stalls. Bring cash, because not every stall takes cards, and bring a cooler bag if your drive back to Ko Olina or the North Shore is long.',
            'If you only have one market morning in the week, pick the one closest to where you sleep and go with a short list: greens, fruit, herbs, something for breakfast. A second run midweek can fill in fish and whatever you used up. Trying to do the entire island’s market circuit in one day usually means warm produce in the car and a tired group.',
          ],
        },
        {
          heading: 'What is in season, roughly',
          paras: [
            'Oʻahu has a long growing season, but it still has one. Mangoes, lychee and other tropical fruit peak in the warmer months. Citrus and avocado varieties take over toward winter. Lettuces, herbs and flowers appear for most of the year, while specialty crops come and go with the weather.',
            'Do not plan a menu around a fruit you saw on a list online. Plan around what is actually on the tables that week. That is how a chef works on Oʻahu, and it is the main reason a villa dinner built from market shopping tastes different from one built from a supermarket run.',
          ],
        },
        {
          heading: 'How a chef shops the market for a villa',
          paras: [
            'When we cook a villa week, the chef writes the menu with you first, in broad strokes: a fish night, a grill night, a long Saturday dinner, lighter lunches by the pool. The specific vegetables, fruit and fish are then filled in from what is good that week, which is why a week-long menu often reads “catch of the day” or “market greens” rather than naming a species months ahead.',
            'Groceries are billed at cost against receipts, and the chef keeps the shopping separate from the cooking fee so you can see both. We name produce and fish as what they are. We only name a farm once we have verified it in writing. Our [private chef Honolulu](/private-chef) page explains how an in-house dinner runs from shop to cleanup between Waikīkī and Kahala.',
          ],
        },
        {
          heading: 'Shopping for yourself on a self-catered day',
          paras: [
            'Many villa weeks mix chef nights with self-catered days. If you are shopping for those, keep it simple: avocados, a bag of greens, papaya or pineapple for breakfast, local eggs if you find them, and bread from a town bakery. Ask the stallholders what is best that morning and how to store it.',
            'If a chef is cooking later that week, tell them what you already bought so nothing goes to waste. Leftover market produce is easy to fold into a lunch or a breakfast service. The [private chef Oahu](/) page covers how a full week of dinners can be planned around those days.',
          ],
        },
        {
          heading: 'Fish: the market, the harbour and the counter',
          paras: [
            'Fish is the one thing that rarely comes from a weekend produce stall. Most of what a chef cooks on Oʻahu comes through a fish counter or a supplier that buys from the harbours. Species change with season and weather. Ahi, ono, mahi-mahi, opah and bottomfish all appear, but no honest cook can promise one particular fish on a particular night.',
            'For a group dinner, the chef will plan the fish course with a backup. For a staffed party, it is part of the written menu. Our [Oahu catering](/catering) page covers how larger villa events from 10 to 75 guests are cooked and served.',
          ],
        },
        {
          heading: 'A sample market-led week on Oʻahu',
          paras: [
            'Here is the kind of outline a chef might write for six guests staying a week in Kahala or Kailua. Night one is a welcome dinner: a market salad of greens and herbs, grilled island fish with a citrus dressing, rice, and sliced tropical fruit. Night three is a grill night on the lānai: marinated chicken or beef, charred vegetables from the market, and a bright slaw.',
            'Midweek there is a self-catered day. The chef leaves a labelled tray of cut fruit, a grain salad and a sauce or two in the fridge so lunch is easy. Night five is the longer Saturday dinner after a morning market run, with a raw fish starter, a slow-cooked main and a dessert built around whatever fruit looked best that morning. Breakfasts can be added on any day.',
            'Nothing in that outline names a species or a farm ahead of time. The structure is fixed and the ingredients are filled in that week.',
            'On inquiry islands like Kauaʻi, that outline only becomes a confirmed plan once a chef is assigned in writing. Send dates early in peak months, because North Shore and South Shore demand both rise around holidays and summer weeks. That is how you get a menu that tastes like Oʻahu in October, not like a printed card from last spring.',
          ],
        },
        {
          heading: 'Condo kitchens, villas and what the chef needs',
          paras: [
            'Not every Oʻahu rental kitchen is equal. A Kahala house with a full range and counter space is a different cook from a Waikīkī condo with a galley and a building freight elevator. When you send a quote request, the address tells us which kind of night we are planning. Freight windows, COIs and parking rules belong in that note when the building requires them.',
            'Market shopping still helps in a small kitchen, but the menu has to match the space. A grill night needs outdoor cooking rights. A big buffet needs somewhere to stage platters that is not the only hallway. We plan the menu around the kitchen you actually have, not the kitchen in a brochure photo.',
            'If the group is larger than the dining table, say so early. Staffed [Oahu catering](/catering) can set a buffet on the lawn or lanai while the private chef model stays at the dinner table for smaller nights.',
          ],
        },
        {
          heading: 'From market bag to dinner table',
          paras: [
            'A practical week often looks like this. The chef shops on the first day, drops off breakfast and lunch basics, and cooks the welcome dinner. Midweek they top up the fish and greens. A second market run before the weekend sets up the big dinner. Between visits the fridge stays labelled and organised, so self-catered meals are easy.',
            'For a single dinner, the published Oʻahu bands apply. The CORE band is $195–$290 a guest with groceries included, and the full rate card, including Stay Chef days from $1,250 a day, is on [Oahu private chef cost](/pricing). Send your dates, the house address and the size of the group and we will reply with a written quote.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Which Oahu farmers market is best for a villa week?',
          a: 'It depends where you are staying. KCC on a Saturday is a strong Honolulu-side stop; Kailua markets suit the windward side; North Shore markets suit Haleʻiwa and beyond. Check current days and hours before you go.',
        },
        {
          q: 'Will the chef shop at the farmers market for us?',
          a: 'Yes, when the timing works. The chef shops markets and stores to fit the menu, and groceries are billed at cost against receipts.',
        },
        {
          q: 'Can you promise a specific fish for our dinner?',
          a: 'No honest cook can. Fish depends on season and weather, so the chef plans the fish course with a named backup.',
        },
        {
          q: 'Do you name the farms on the menu?',
          a: 'Only after we have verified the farm in writing. Otherwise produce is named as what it is.',
        },
        {
          q: 'What should we buy ourselves for self-catered days?',
          a: 'Keep it simple: avocados, greens, fruit for breakfast, eggs and bread. Tell the chef what you bought so it can be used later in the week.',
        },
        {
          q: 'Do markets take cards?',
          a: 'Some stalls do, many do not. Bring cash as a backup, and a cooler bag for the drive home.',
        },
      ],
      related: [
        { path: '/', label: 'Private chef Oahu' },
        { path: '/private-chef', label: 'Private chef Honolulu' },
        { path: '/catering', label: 'Oahu catering' },
        { path: '/pricing', label: 'Oahu private chef cost' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
      ],
    },
    {
      feature: true,
      slug: 'ko-olina-restaurants-dining-guide',
      keyword: 'ko olina restaurants',
      datePublished: '2026-10-16',
      name: 'Ko Olina restaurants dining guide',
      h1: 'Ko Olina restaurants — resort tables, marina nights and when to cook at the villa.',
      title: 'Ko Olina Restaurants — Dining Guide for Villa Weeks | myCHEF',
      description:
        'Ko Olina restaurants for a villa week: resort rooms, marina tables, reservations and when a private chef night at the house is the better plan.',
      lede:
        'Ko Olina restaurants sit inside a compact west-side resort pocket: hotel dining rooms, marina-facing tables and a short loop of walkable options. This guide is for villa and condo guests who want to know when to book a table and when dinner at the house makes more sense.',
      photo: 'dinKoOlina',
      body: [],
      sections: [
        {
          heading: 'What “Ko Olina restaurants” usually means',
          paras: [
            'Search for Ko Olina restaurants and you mostly get resort dining: rooms inside the hotels, a few marina and shopping-village tables, and the occasional poolside or casual spot. That is a different kind of dining map from Honolulu’s Chinatown or Waikīkī. Distances are short on foot or by resort shuttle, but the calendar fills early in winter and over holiday weeks.',
            'Most of our guests are not collecting restaurant stamps. They are hosting family in a villa or a multi-bedroom condo, juggling kids’ bedtimes, mixed diets and a desire to watch the west-side sunset from their own lānai. The restaurants still matter for date nights and special occasions. The house kitchen matters for the rest of the week.',
          ],
        },
        {
          heading: 'Resort rooms, marina tables and the walkable loop',
          paras: [
            'Inside the resort pocket you will find sit-down rooms with ocean or lagoon views, casual spots for lunch after the beach, and a small set of marina-facing tables where the evening feels like a night out without a long drive. Menus lean seafood, steaks and island produce; dress codes are usually smart casual rather than black tie.',
            'We do not invent ratings, chef names or “best of” lists. Book the room that fits your night: celebration, quiet dinner for two, or a bigger family table. Call ahead for high chairs, dietary notes and ocean-view seating. Peak season (roughly mid-December through March) and long weekends fill first.',
          ],
        },
        {
          heading: 'Reservations, timing and the Honolulu drive',
          paras: [
            'For sit-down Ko Olina restaurants, reserve as soon as your villa dates are firm. Same-week tables still appear, but sunset slots and weekend dinners go first. If you are flying in the same day, plan a lighter first night at the house and save the reservation for a rested evening.',
            'Going into town for Honolulu restaurants is a real choice, not a quick hop. Afternoon traffic on H-1 westbound on the return can stretch a dinner downtown into a late night for kids. Many villa weeks keep weeknights at Ko Olina and treat Honolulu as a planned day trip with lunch, not a last-minute dinner run.',
          ],
        },
        {
          heading: 'When a private chef night beats going out',
          paras: [
            'A private chef night wins when the guest list is larger than a standard restaurant table, when someone in the group needs a quiet house after a long flight, or when you want one menu that covers allergies, kids and a celebration cake without splitting across three restaurants. Our [private chef Oahu](/) service covers dinner-sized groups in the villa kitchen, with the published CORE band on [Oahu private chef cost](/pricing).',
            'For parties of about ten and up — reunions, welcome dinners, rehearsal weeks — you are into staffed events. That is [Oahu catering](/catering): a lead chef, cooks and servers, with load-in planned around the resort’s parking and quiet hours. The written quote lists chef hours, staff, rentals, groceries and any drive line separately.',
          ],
        },
        {
          heading: 'Building a Ko Olina villa week that mixes both',
          paras: [
            'A practical pattern for a seven-night stay: two reserved restaurant nights (one celebration, one quieter), three chef or Stay Chef dinners at the house, and the remaining evenings left flexible for leftovers, takeout inside the resort, or a spontaneous table if one opens. Market and grocery runs feed the house nights; the chef can shop for those dinners or work from a list you already bought.',
            'If the house is a weekly cook rather than a single dinner, Stay Chef days start from $1,250 a day with groceries at cost and receipts. Signature dinners sit in the published Oʻahu band of $195–$290 a guest with groceries inside that band. Town and Ko Olina are base coverage on the rate card; North Shore adds a published drive surcharge. Details stay on the pricing page, not invented here.',
            'West-side logistics are simpler than they look once the address is on the quote. Lagoon villas and multi-unit buildings differ on freight elevators, loading docks and association quiet hours. We confirm those with the host before the team arrives. If you want the Honolulu in-house dinner model explained side by side, the [private chef Honolulu](/private-chef) page covers how town evenings run from Waikīkī to Kahala.',
          ],
        },
        {
          heading: 'Kids, dietary notes and the condo kitchen reality',
          paras: [
            'Ko Olina weeks often mix ages. Restaurant kids’ menus help for one night; they do not solve a week of early bedtimes. A house dinner lets the chef plate a simpler pasta or grilled fish for the children while the adults get a longer menu at the same table. High chairs, strollers and quiet hours are easier to manage when nobody is waiting on a pager in a lobby.',
            'Dietary notes belong in the quote brief: shellfish allergy, vegetarian guests, no pork, gluten-free bread. We plan those into the shop list. We do not invent a “farm-to-table” claim for a product we cannot verify at the market or the store. Fish is named as the species on the ticket that day.',
            'Condo kitchens vary. Some lagoon villas have full ranges and outdoor grills; some stacked units have a cooktop and a small fridge. Tell us what is in the kitchen when you send the address. If the kitchen cannot support a plated dinner for twelve, we say so and quote catering with extra gear instead of forcing a Signature night into the wrong room.',
          ],
        },
        {
          heading: 'A sample evening timeline at a Ko Olina villa',
          paras: [
            'For a Signature dinner of eight to ten, the chef typically arrives in the afternoon, confirms the fridge space and the outdoor table, and starts mise en place away from the living room. Guests can still use the pool. Passed bites go out as people gather; the main courses follow as the light softens over the lagoons.',
            'Cleanup is part of the evening: dishes washed, counters wiped, trash tied for the building’s schedule. Leftovers are labelled in the fridge if you want them for lunch. The written quote sets arrival and finish windows so the association’s quiet hours are respected.',
            'For a staffed catering night of thirty, the timeline stretches: earlier load-in, a separate prep zone, servers for the buffet or family-style pass, and a longer breakdown. That is why catering and Signature dinners are different products on [Oahu catering](/catering) and [private chef Oahu](/), not a single blended package.',
          ],
        },
        {
          heading: 'How to get a real number for a Ko Olina week',
          paras: [
            'Send the villa or condo address, the dates, the guest count and which nights you want cooked versus reserved at restaurants. We reply with a written quote — Signature dinner, Stay Chef day or staffed catering — never a blended guess. Use the quote form on the site; contact stays there until you have a confirmed booking thread.',
            'If you are still comparing options, start with [private chef Oahu](/) for the overview, then [Oahu catering](/catering) if the headcount is already past a single dining table. Pricing bands and what prints as its own line live on [Oahu private chef cost](/pricing).',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do I need reservations at Ko Olina restaurants?',
          a: 'For sit-down and sunset rooms, yes — especially in winter and over holidays. Casual spots are more flexible, but a villa week still plans better with at least one or two tables held.',
        },
        {
          q: 'Are Ko Olina restaurants only for hotel guests?',
          a: 'Many rooms welcome outside reservations. Policies vary by property, so book directly and ask about dress code, parking and kids’ menus when you hold the table.',
        },
        {
          q: 'When is a private chef better than going out in Ko Olina?',
          a: 'For larger groups, mixed diets, early bedtimes, or any night you want everyone at one villa table without a shuttle or a dress code. Signature dinners and Stay Chef days are quoted on the pricing page.',
        },
        {
          q: 'Can you cater a welcome dinner at a Ko Olina villa?',
          a: 'Yes. Staffed events from about 10 to 75 guests are quoted as catering, with load-in and quiet hours agreed with the host first.',
        },
        {
          q: 'How far is Honolulu dining from Ko Olina?',
          a: 'It is a real drive, longer at rush hour. Most villa weeks keep dinners on the west side and treat Honolulu as a planned day trip.',
        },
        {
          q: 'What does a Ko Olina villa chef dinner cost?',
          a: 'The published Oʻahu CORE band is $195–$290 a guest with groceries included. Stay Chef days start from $1,250 a day. Full details are on the pricing page.',
        },
      ],
      related: [
        { path: '/', label: 'Private chef Oahu' },
        { path: '/private-chef', label: 'Private chef Honolulu' },
        { path: '/catering', label: 'Oahu catering' },
        { path: '/pricing', label: 'Oahu private chef cost' },
        { path: '/blog/dining-in-ko-olina', label: 'Ko Olina kitchen notes' },
      ],
    },
  ],
  maui: [
    {
      feature: true,
      slug: 'maui-farmers-market-villa-week',
      keyword: 'maui farmers market',
      datePublished: '2026-10-14',
      name: 'Maui farmers markets for a villa week',
      h1: 'Maui farmers markets — shopping for a villa week, the chef’s way.',
      title: 'Maui Farmers Markets — Shopping for a Villa Week | myCHEF',
      description:
        'A chef’s guide to Maui farmers markets for a villa week: what is in season, when to go, what to buy and how market produce turns into dinner at home.',
      lede:
        'Maui farmers markets are one of the best parts of a villa week. This is how a chef uses them, and how to shop if you are cooking some meals yourself.',
      photo: 'blogGroceryMaui',
      body: [],
      sections: [
        {
          heading: 'Why the markets matter on Maui',
          paras: [
            'Maui grows more than most visitors expect. Upcountry slopes around Kula and Makawao grow greens, onions, herbs and flowers in cool air. The wetter windward side grows tropical fruit. Fishing boats work out of Māʻalaea, Lahaina and Kahului harbours. A farmers market is where a lot of that meets the people cooking it.',
            'For a villa week in Wailea, Kāʻanapali or Kapalua, the markets do two jobs. They put better produce on the table than a resort grocery shelf, and they are a genuinely good morning out. The two goals pull in slightly different directions, so it helps to know what you are going for.',
          ],
        },
        {
          heading: 'When and where to go',
          paras: [
            'Maui markets run on a weekly rhythm. The best-known is the Saturday-morning Upcountry market in Kula, which draws farmers from across the slopes and is worth the drive up the mountain if you are staying on the south or west side. Smaller town markets in South Maui, West Maui and Central Maui run on weekday mornings or afternoons.',
            'Schedules change with the seasons and with the vendors, so check the current day and hours before you drive. Go early. The best greens, avocados and fish sell out first, and the morning is cooler for the walk around. Bring cash, because not every stall takes cards, and bring a cooler bag if your drive back to the coast is longer than half an hour.',
          ],
        },
        {
          heading: 'What is in season, roughly',
          paras: [
            'Maui has a long growing season, but it still has one. Mangoes, lychee and stone-fruit-style tropical fruit peak in the warmer months. Citrus and avocado varieties take over toward winter. Kula onions, lettuces and herbs appear for most of the year, while flowers and specialty crops come and go.',
            'Do not plan a menu around a fruit you saw on a list. Plan around what is actually on the table that week. That is how a chef works on Maui, and it is the main reason a villa dinner built from market shopping tastes different from one built from a supermarket run.',
          ],
        },
        {
          heading: 'How a chef shops the market for a villa',
          paras: [
            'When we cook a villa week, the chef writes the menu with you first, in broad strokes: a fish night, a grill night, a long Saturday dinner, lighter lunches by the pool. The specific vegetables, fruit and fish are then filled in from what is good that week, which is why a week-long menu often reads “catch of the day” or “market greens” rather than naming a species months ahead.',
            'Groceries are billed at cost against receipts, and the chef keeps the shopping separate from the cooking fee so you can see both. We name produce and fish as what they are. We only name a farm once we have verified it in writing, and we will not decorate a menu with farm names to make it sound local. Our [personal chef Maui](/private-chef) page explains how a villa night runs from shop to cleanup.',
          ],
        },
        {
          heading: 'Shopping for yourself on a self-catered day',
          paras: [
            'Many villa weeks mix chef nights with self-catered days. If you are shopping for those, keep it simple: a few avocados, a bag of greens, papaya or pineapple for breakfast, local eggs if you find them, and bread from a town bakery. Ask the stallholders what is best that morning and how to store it. Most are happy to tell you.',
            'If a chef is cooking later that week, tell them what you already bought so nothing goes to waste. Leftover market produce is easy to fold into a lunch or a breakfast service.',
          ],
        },
        {
          heading: 'Fish: the market, the harbour and the counter',
          paras: [
            'Fish is the one thing that rarely comes from a weekend market stall. Most of what a chef cooks on Maui comes through a fish counter or a supplier that buys from the harbours. Species change with season and weather. Ahi, ono, mahi-mahi, opah and bottomfish all appear, but no honest cook can promise one particular fish on a particular night.',
            'For a group dinner, the chef will plan the fish course with a backup. For a staffed party, it is part of the written menu. Our [Maui catering](/catering) page covers how larger villa events are cooked and served.',
          ],
        },
        {
          heading: 'A sample market-led week on Maui',
          paras: [
            'To show how this works in practice, here is the kind of outline a chef might write for six guests staying a week in Wailea. Night one is a welcome dinner: a market salad of Kula greens and herbs, grilled island fish with a citrus dressing, rice, and sliced tropical fruit with a simple cake. Night three is a grill night on the lānai: marinated chicken or beef, charred vegetables from the market, and a bright slaw.',
            'Midweek there is a self-catered day. The chef leaves a labelled tray of cut fruit, a grain salad and a sauce or two in the fridge so lunch is easy. Night five is the long Saturday dinner after the Upcountry market run, with a raw fish starter, a slow-cooked main and a dessert built around whatever fruit looked best that morning. Breakfasts can be added on any day.',
            'Nothing in that outline names a species or a farm ahead of time. The structure is fixed and the ingredients are filled in that week. That is how you get a menu that tastes like Maui in October, not like a printed card from last spring.',
          ],
        },
        {
          heading: 'From market bag to dinner table',
          paras: [
            'A practical week often looks like this. The chef shops on the first day, drops off breakfast and lunch basics, and cooks the welcome dinner. Midweek they top up the fish and greens. A second market run before the weekend sets up the big dinner. Between visits the fridge stays labelled and organised, so self-catered meals are easy.',
            'For a single dinner, the published Maui bands apply. The CORE band is $225–$375 a guest with groceries included, and the full rate card, including Stay Chef days for a whole week, is on [Maui private chef cost](/pricing). Send your dates, the villa address and the size of the group and we will reply with a written quote. If you would rather start with the overview, the [private chef Maui](/) page covers every island service in one place.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Which Maui farmers market is best for a villa week?',
          a: 'The Saturday-morning Upcountry market in Kula is the largest and worth the drive. Smaller town markets run during the week. Check current days and hours before you go.',
        },
        {
          q: 'Will the chef shop at the farmers market for us?',
          a: 'Yes, when the timing works. The chef shops markets and stores to fit the menu, and groceries are billed at cost against receipts.',
        },
        {
          q: 'Can you promise a specific fish for our dinner?',
          a: 'No honest cook can. Fish depends on season and weather, so the chef plans the fish course with a named backup.',
        },
        {
          q: 'Do you name the farms on the menu?',
          a: 'Only after we have verified the farm in writing. Otherwise produce is named as what it is.',
        },
        {
          q: 'What should we buy ourselves for self-catered days?',
          a: 'Keep it simple: avocados, greens, fruit for breakfast, eggs and bread. Tell the chef what you bought so it can be used later in the week.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'Personal chef Maui' },
        { path: '/catering', label: 'Maui catering' },
        { path: '/pricing', label: 'Maui private chef cost' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
      ],
    },

    {
      feature: true,
      slug: 'wailea-restaurants-dining-guide',
      keyword: 'wailea restaurants',
      datePublished: '2026-10-15',
      name: 'Wailea restaurants dining guide',
      h1: 'Wailea restaurants — resort dining, reservations and villa nights.',
      title: 'Wailea Restaurants — Dining Guide for Villa Weeks | myCHEF',
      description:
        'How Wailea restaurants work for a villa week: resort dining, Shops at Wailea, reservations, sunset rush, and when a chef at the villa is the better night.',
      lede:
        'Wailea restaurants are a big part of a South Maui week. Here is how dining works along the Wailea coast, and how to plan evenings around it without fighting for every table.',
      photo: 'dinWailea',
      body: [],
      sections: [
        {
          heading: 'Why Wailea dining takes planning',
          paras: [
            'Wailea is South Maui’s resort corridor: hotels along the coast, residences and villas behind them, and a shopping village with restaurants in the middle. The food is good, the views are the point, and a lot of visitors want the same sunset tables on the same nights. That is why a week of dinners works better when you plan which nights you go out and which nights you stay in.',
            'None of that is a problem if you treat restaurant nights as the special ones. A good Wailea week mixes a few reserved dining rooms, a few easy dinners at the villa, and one or two evenings where someone else does the cooking at the house.',
            'Wailea also sits next to Mākena and a short drive from Kīhei. That gives you options when every ocean-view room is booked: a quieter South Maui table, a takeout night on the lanai, or a chef night at the house so the whole group eats together without a split seating.',
          ],
        },
        {
          heading: 'What kinds of restaurants you will find',
          paras: [
            'Expect a mix of hotel dining rooms, open-air terraces with ocean views, and more casual spots in and around the Shops at Wailea. Many of the best-known rooms sit inside the resorts, so you do not always need to be a hotel guest to book, but you do need a reservation in peak season. Dress codes are usually resort-casual rather than formal, but check before you go.',
            'Menus change, kitchens close for private events, and a room that was easy last April may be fully booked this December. Treat any restaurant list you find online as a starting point, then confirm hours and availability for your exact dates.',
            'There are also quieter options a short drive toward Mākena or into Kīhei for a more local, less resort-paced night. Use those when you want a break from the Wailea strip without a long West Maui drive.',
          ],
        },
        {
          heading: 'Reservations, the sunset rush and kids',
          paras: [
            'Book sit-down Wailea restaurants as soon as you know your dates, especially from December through March, over the holidays and around spring break. Walk-in waits at popular rooms can be long at sunset, and many kitchens keep earlier hours than a city restaurant. An early table is often easier to get and kinder on jet lag.',
            'If you have children, ask about kids’ plates and earlier seatings when you book. A villa dinner with a chef is often the simpler night for a mixed-age group, because nobody has to rush a tired toddler through a resort lobby at eight o’clock.',
            'Large groups should call, not just click. Many rooms will not take an eight-top online at peak times, and some will not combine tables on the terrace. If the reservation system only offers twos and fours, that is a signal to plan a villa dinner for the big night instead of hoping the host stand can rework the floor plan.',
          ],
        },
        {
          heading: 'Views, parking and getting around',
          paras: [
            'Ocean-view tables are the prize in Wailea, and they go first. If the view matters, say so when you reserve and be willing to eat a little earlier. Parking at the resorts and the shops is usually straightforward compared with West Maui, but traffic still stacks up on the Piʻilani Highway at busy times, so leave a buffer.',
            'If you are staying in a Wailea or Mākena villa, a restaurant night often means a short drive or a resort shuttle rather than a long haul. That makes it easy to go out two or three times a week without turning every evening into logistics.',
          ],
        },
        {
          heading: 'When a chef at the villa is the better night',
          paras: [
            'There are a few evenings where cooking at the house simply works better. The first is the big group dinner, because few dining rooms can seat twelve or sixteen people together at sunset without splitting the party. The second is the celebration — anniversary, birthday, welcome night, or the evening before a wedding — when you would rather stay on your own lānai. The third is the night after a long beach day, when nobody wants a dress code.',
            'Our [personal chef Maui](/private-chef) service covers Wailea, Mākena and the rest of South Maui. The [private chef Maui](/) page explains how a villa dinner runs from shopping to cleanup, and what the kitchen needs. Groceries for chef nights are billed at cost against receipts when you are on a Stay Chef week; on a single Signature dinner they sit inside the published band.',
          ],
        },
        {
          heading: 'Larger gatherings in Wailea',
          paras: [
            'For family reunions, retreats and wedding weeks, a staffed event at the villa is often easier than finding a private dining room for the whole group. Lawn and terrace dinners work well in Wailea when the weather holds, and a covered or indoor backup belongs in every outdoor plan. Our [Maui catering](/catering) page covers staffed villa events from 10 to 75 guests.',
            'Plan load-in, parking and quiet hours with your host or building before the date. Those details go into the written quote so nobody is surprised on the night.',
          ],
        },
        {
          heading: 'A sample Wailea week of dinners',
          paras: [
            'Here is a pattern that works well for a family or a group of friends staying a week in Wailea. Night one, after the flight, is a simple dinner at the villa or an early casual table you booked ahead. You are tired, and a long resort dinner can wait. Night two is a reserved ocean-view restaurant, timed for sunset.',
            'Night three is a beach day with a late lunch and something easy at the house. Night four is a chef night at the villa, everyone at one table, nobody driving. Night five stays flexible: another restaurant if you still want to go out, or leftovers and a movie if the trade winds pick up. Night six is the celebration dinner, either at the house with a chef again or at the nicest table you could book.',
            'Planned this way, you get the best of Wailea restaurants without fighting for a table every evening, and you keep a few nights that feel like a home rather than a hotel.',
            'If the week includes a wedding rehearsal or a big family night, put that on the villa calendar first and book restaurant tables around it. The celebration night is usually the one where a single long table at the house beats three smaller tables in a dining room.',
          ],
        },
        {
          heading: 'Groceries, self-catered nights and the market',
          paras: [
            'Even a restaurant-heavy Wailea week usually includes a few meals at the house. South Maui groceries cover the basics; a farmers market run still helps for fruit, greens and something better than a resort tomato. If a chef is cooking later in the week, tell them what you already bought so it gets used.',
            'Alcohol is its own line on our quotes, whether you are in a dining room or at the villa. Resort restaurants have their own wine lists and corkage rules — ask when you book if you want to bring a special bottle.',
            'For a mixed week, a useful split is two or three reserved restaurant nights, two easy self-catered nights, and one or two chef nights for the whole group. That pattern keeps Wailea restaurants special instead of turning every evening into a logistics problem.',
          ],
        },
        {
          heading: 'What a villa night costs on Maui',
          paras: [
            'For a single dinner, the published Maui CORE band is $225–$375 a guest, with groceries included. Stay Chef days for a full week start from $1,550 a day. The full breakdown is on [Maui private chef cost](/pricing).',
            'Send your dates, the villa address and the group size, and we will reply with a written quote. If you would rather start with the overview, the [private chef Maui](/) page covers every island service in one place.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do I need reservations at Wailea restaurants?',
          a: 'For sit-down and ocean-view dining rooms, yes. Book as soon as you know your dates, especially in winter and over the holidays. Casual spots are more flexible.',
        },
        {
          q: 'Are Wailea restaurants only inside the hotels?',
          a: 'Many of the best-known rooms are in the resorts, and others sit in and around the Shops at Wailea. You usually do not need to be a hotel guest to book, but you do need a reservation in peak season.',
        },
        {
          q: 'When is a private chef better than going out in Wailea?',
          a: 'For big groups, celebrations, mixed-age families, or any night you would rather stay on your own lānai. A chef night keeps everyone at one table without a dress code or a drive.',
        },
        {
          q: 'Can you cater a family reunion at a Wailea villa?',
          a: 'Yes. Staffed villa events from 10 to 75 guests are quoted with a weather backup in the plan. Load-in and quiet hours are agreed with the host first.',
        },
        {
          q: 'How far is Wailea from West Maui restaurants?',
          a: 'It is a real drive, especially at busy times. Most Wailea weeks stay on the south side for dinner and save West Maui for a planned day trip.',
        },
        {
          q: 'What does a Wailea villa chef dinner cost?',
          a: 'The published Maui CORE band is $225–$375 a guest with groceries included. Stay Chef days start from $1,550 a day. Full details are on the pricing page.',
        },
      ],
      related: [
        { path: '/', label: 'Private chef Maui' },
        { path: '/private-chef', label: 'Personal chef Maui' },
        { path: '/catering', label: 'Maui catering' },
        { path: '/pricing', label: 'Maui private chef cost' },
        { path: '/blog/dining-in-wailea', label: 'Wailea kitchen notes' },
      ],
    },
    {
      feature: true,
      slug: 'kihei-restaurants-dining-guide',
      keyword: 'kihei restaurants',
      datePublished: '2026-10-16',
      name: 'Kīhei restaurants dining guide',
      h1: 'Kīhei restaurants — South Maui tables, condo weeks and when to cook at home.',
      title: 'Kihei Restaurants — South Maui Dining Guide | myCHEF',
      description:
        'Kihei restaurants for a South Maui condo week: casual strips, Wailea drives and when a private chef night at the house is the smarter plan.',
      lede:
        'Kīhei restaurants cover a long South Maui strip of casual plates, fresh-fish counters and family-friendly rooms. This guide is for condo and vacation-home guests who want to know when to book a table and when dinner in the kitchen is the calmer plan.',
      photo: 'dinKihei',
      body: [],
      sections: [
        {
          heading: 'What people mean by “Kīhei restaurants”',
          paras: [
            'Kīhei is South Maui’s residential and condo corridor: a stretch of ocean-facing roads, shopping centers and walkable dinner options that feel more local-week than resort-lobby. Searches for Kīhei restaurants usually return casual seafood, pizza and plate-lunch spots, a few sit-down rooms with ocean views, and plenty of takeout that travels well back to a condo kitchen.',
            'Guests who stay here are often multi-generational: grandparents, kids, and a few friends sharing two or three linked units. Restaurant tables for eight or twelve are hard to hold on a Saturday in peak season. That is why many weeks mix a couple of reserved nights with house dinners cooked in the condo kitchen.',
          ],
        },
        {
          heading: 'Casual strips, ocean-view rooms and takeout',
          paras: [
            'Along South Kihei Road and the nearby centers you will find counter-service fish, family booths and a smaller set of reservation rooms. Lunch is often easier than dinner. Sunset ocean-view seats book out first in winter. We do not invent restaurant rankings or claim farm partnerships we cannot verify — book the room that fits the night and ask directly about high chairs, gluten-free options and parking.',
            'Takeout is part of the Kīhei rhythm. Poke bowls, grilled fish and salads travel back to a lanai table without drama. Keep a cooler bag in the car if you are shopping the strip before an afternoon beach run. For a longer stay, one grocery stock-up plus two chef nights usually beats seven restaurant bills for a family of eight.',
          ],
        },
        {
          heading: 'Wailea, Mākena and the short South Maui drive',
          paras: [
            'Wailea is a short drive south: resort dining rooms, the Shops at Wailea and a different dress-code feel. Many Kīhei weeks keep weeknights local and save one Wailea reservation for a celebration. Our longer [Wailea restaurants](/blog/wailea-restaurants-dining-guide) guide covers resort tables and when a villa chef night is the better call on that side of the coast.',
            'West Maui is a longer commitment from Kīhei. Sunset traffic toward Kāʻanapali can turn a dinner reservation into a late return for kids. If the villa is in South Maui, plan West Maui as a day trip with lunch, not a same-evening round trip, unless the celebration truly requires it.',
            'North toward Mākena and the state park, dinner options thin out. Plan those evenings at the house or back in Kīhei rather than hunting a last-minute table after a long beach day. Saturday traffic on Piʻilani Highway and South Kihei Road still matters — leave early for any reserved time.',
          ],
        },
        {
          heading: 'When a private chef night is the better plan',
          paras: [
            'Choose a chef night when the group is bigger than a standard booth, when someone needs an early dinner after snorkeling, or when dietary needs would force three different restaurant stops. Our [private chef Maui](/) service covers dinner-sized groups in the condo or villa kitchen. The published Maui CORE band is on [Maui private chef cost](/pricing): $225–$375 a guest with groceries inside the band.',
            'For reunions, welcome dinners and wedding-week feeds past about ten guests, use [Maui catering](/catering). Staff, rentals and a weather backup print as their own lines on the quote. Load-in for condo buildings needs freight and quiet-hour notes from the host — we confirm those before the team arrives.',
          ],
        },
        {
          heading: 'A practical Kīhei week that mixes restaurants and the house',
          paras: [
            'A workable seven-night pattern: two reserved restaurant nights (one casual Kīhei, one Wailea celebration if you want it), three Signature or Stay Chef dinners at the house, and flexible evenings for leftovers or takeout. Stay Chef days on Maui start from $1,550 a day with groceries at cost and receipts. Signature dinners stay in the $225–$375 guest band.',
            'South Maui coverage treats Wailea and the Kīhei corridor as the everyday base for villa weeks. West Maui is a different drive and a different traffic story — save Kāʻanapali or Lahaina for a planned day if the house is in Kīhei, rather than a same-evening round trip. For how in-house dinners are framed on this island, see [personal chef Maui](/private-chef).',
            'Send dates and the exact condo or villa address on the quote form. We reply with Signature, Stay Chef or catering — never a blended guess — and keep contact on that form until the booking thread is open.',
          ],
        },
        {
          heading: 'Condo kitchens, parking and association rules',
          paras: [
            'South Maui condo kitchens range from full residential setups to compact cooktops. Before we quote a Signature dinner, we need to know whether there is a real oven, outdoor grill access and enough counter space for plating. If the unit cannot support the headcount, we say so and move the night to catering with rented gear rather than overselling the kitchen.',
            'Parking and load-in matter more than guests expect. Many complexes limit vendor parking and have quiet hours after a set evening time. Freight elevators, if they exist, need a reservation with the front desk. Those details go on the quote once the host shares the house rules — we do not invent building policies.',
            'Grocery runs for a condo week usually combine a big-box stop with a smaller market shop for fish and produce. Our [Maui farmers markets](/blog/maui-farmers-market-villa-week) guide covers the market side; Signature dinners keep that shop inside the guest band, and Stay Chef days show receipts at cost.',
          ],
        },
        {
          heading: 'A sample Kīhei evening that stays at the house',
          paras: [
            'Late afternoon: the chef arrives, checks the fridge and the lanai table, and starts cold starters. Guests can still rinse off from the beach. As the trade wind picks up, grilled fish and a vegetable main come off the stove family-style. Kids eat first if that is the house rhythm; adults linger.',
            'After dessert the kitchen is reset: dishes done, surfaces wiped, trash sorted for the complex’s pickup rules. Leftovers are packed for beach lunches the next day. That cleanup standard is part of every dinner we publish — it is not an optional add-on invented for this post.',
            'Scale that to a reunion of forty and you need servers, a buffet line under cover and a longer load-out. That evening lives on [Maui catering](/catering), with the same honesty about weather backup and quiet hours. The [personal chef Maui](/private-chef) page is the right starting point when the list is still dinner-sized.',
          ],
        },
        {
          heading: 'How to get a written number',
          paras: [
            'Put the street address, dates, headcount and which nights you want cooked versus reserved. Start with [private chef Maui](/) for the overview, [Maui catering](/catering) if the list is already past a single table, and [Maui private chef cost](/pricing) for the published bands. The quote is the confirmed total; the blog never invents a package price.',
            'If you already hold a Wailea restaurant reservation for one night, say so on the form. We will plan the chef nights around it so the week has a clear rhythm instead of three competing dinners on the same evening.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do I need reservations at Kīhei restaurants?',
          a: 'For sit-down and ocean-view rooms in peak season, yes. Casual counters are more flexible. Large groups should plan house dinners for most nights.',
        },
        {
          q: 'Are Kīhei restaurants good for big family tables?',
          a: 'Some rooms can take six to eight with notice; twelve-plus is usually a stretch. That is when a condo chef night or staffed catering is the calmer option.',
        },
        {
          q: 'When is a private chef better than going out in Kīhei?',
          a: 'Mixed diets, early bedtimes, celebration cakes, or any night you want one table on your own lanai without hunting parking on South Kihei Road.',
        },
        {
          q: 'Can you cater a reunion at a Kīhei condo?',
          a: 'Yes, when the building allows load-in. Staffed events from about 10 to 75 guests are quoted as Maui catering, with quiet hours confirmed first.',
        },
        {
          q: 'How far is Wailea dining from Kīhei?',
          a: 'A short South Maui drive in light traffic; longer at sunset rush. Many weeks keep weeknights in Kīhei and save one Wailea table for a celebration.',
        },
        {
          q: 'What does a Kīhei condo chef dinner cost?',
          a: 'The published Maui CORE band is $225–$375 a guest with groceries included. Stay Chef days start from $1,550 a day. Details are on the pricing page.',
        },
      ],
      related: [
        { path: '/', label: 'Private chef Maui' },
        { path: '/private-chef', label: 'Personal chef Maui' },
        { path: '/catering', label: 'Maui catering' },
        { path: '/pricing', label: 'Maui private chef cost' },
        { path: '/blog/dining-in-kihei', label: 'Kīhei kitchen notes' },
      ],
    },
  ],
  kauai: [
    {
      feature: true,
      slug: 'north-shore-kauai-dining-guide',
      keyword: 'north shore kauai dining',
      datePublished: '2026-10-14',
      name: 'North Shore Kauaʻi dining guide',
      h1: 'North Shore Kauaʻi dining — restaurants, reservations and villa nights.',
      title: 'North Shore Kauai Dining — Hanalei & Princeville | myCHEF',
      description:
        'How dining works on Kauaʻi’s North Shore: restaurant hours, reservations, the Hanalei bridge, rain, and when a chef at the villa is the better night.',
      lede:
        'Dining on Kauaʻi’s North Shore is wonderful and a little limited. Here is how it works in Hanalei and Princeville, and how to plan a week of dinners around it.',
      photo: 'dinHanalei',
      body: [],
      sections: [
        {
          heading: 'Why North Shore dining takes planning',
          paras: [
            'The North Shore is the quiet end of Kauaʻi. Princeville sits on the bluff, Hanalei in the valley below, and the road continues over one-lane bridges toward Wainiha and Hāʻena. That quiet is the point of staying there, and it also shapes dinner. There are fewer restaurants than on the South Shore or in Kapaʻa, many keep early hours, and a lot of visitors want the same tables at the same sunset time.',
            'None of that is a problem if you plan for it. A good North Shore week mixes a few restaurant nights, a few easy dinners at home, and one or two evenings where someone else does the cooking at the villa.',
          ],
        },
        {
          heading: 'Restaurants: hours, reservations and the sunset rush',
          paras: [
            'Expect a mix of casual spots, food trucks and a smaller number of sit-down dining rooms, some in Princeville resorts and some along the Hanalei main road. Book the sit-down nights as soon as you know your dates, especially in summer, over the holidays and around spring break. Walk-in waits at popular places can be long, and kitchens tend to close earlier than in a city.',
            'Food trucks and takeout are a real part of North Shore dining, and they are often excellent. Plan them for lunch or for an early dinner on the beach, because many close well before nine. If you have kids or jet lag, an early table is easier to get anyway.',
          ],
        },
        {
          heading: 'The Hanalei bridge, the weather and the road',
          paras: [
            'The single-lane Hanalei bridge and the road beyond it are part of the charm, but they matter for dinner. Heavy rain can slow or close the road, and traffic stacks up at the bridge at busy times. If you are staying past Hanalei, a restaurant dinner in Princeville means driving back over the bridge in the dark.',
            'Hāʻena State Park at the end of the road also runs on advance reservations for entry and parking, so a day out to Keʻe Beach or the trailhead needs booking ahead. Build those days around an easy dinner at the house, because by the time you drive back over the bridges most guests would rather eat on the lānai than go out again. A labelled fridge, a simple grill dinner or a chef night all work well after a long day at the far end of the island.',
            'The North Shore is also the wetter side of the island, especially in winter. A sunset table on a terrace can turn into a rainy drive. It is worth keeping one or two nights flexible, so you can stay in when the weather turns.',
          ],
        },
        {
          heading: 'Groceries and cooking for yourself',
          paras: [
            'Most North Shore rentals have full kitchens, and many guests cook breakfast and a few simple dinners. Grocery choice on the North Shore is smaller than in Līhuʻe or Kapaʻa, so a bigger shop on the way in from the airport saves trips. Town farmers markets and roadside fruit stands fill in the gaps, and their days and hours change, so check locally.',
            'Fish on Kauaʻi depends on weather and season, like everywhere in Hawaiʻi. Buy what the counter says is fresh that day rather than hunting for a particular species.',
          ],
        },
        {
          heading: 'When a chef at the villa is the better night',
          paras: [
            'There are a few evenings where cooking at the house simply works better. The first is the big group dinner, because few North Shore dining rooms can seat twelve or sixteen people together at sunset without a long wait. The second is the celebration, such as an anniversary, a birthday or the night before a wedding, when you would rather stay on your own lānai than drive. The third is the rainy night, when the road is slow and nobody wants to leave.',
            'Our [private chef Kauai](/) service covers both shores. Princeville and Hanalei-side villas are quoted by inquiry, because chef travel to the North Shore is a real part of the plan. The [personal chef Kauai](/private-chef) page explains how a villa dinner runs, from shopping to cleanup, and what the kitchen needs.',
          ],
        },
        {
          heading: 'Larger gatherings on the North Shore',
          paras: [
            'For family reunions, retreats and wedding weeks, a staffed event at the house is often easier than finding a venue. Estate lawns and covered terraces in Princeville can host a seated dinner or a buffet with a weather backup. Our [Kauai catering](/catering) page covers staffed estate events from 10 to 75 guests on both shores.',
            'Plan load-in, parking and quiet hours with your host before the date, and tell us about any road or bridge issues near the house. Those details go into the written quote.',
          ],
        },
        {
          heading: 'A sample North Shore week of dinners',
          paras: [
            'Here is a pattern that works well for a family or a group of friends staying a week in Princeville or Hanalei. Night one, after the flight, is takeout or a simple dinner at home. You are tired, and the grocery shop on the way in covers it. Night two is an early restaurant dinner you booked weeks ahead, before the sunset rush.',
            'Night three is a beach day with food trucks for a late lunch and something easy at the house. Night four is a chef night at the villa, a long dinner on the lānai with the group together and nobody driving. Night five stays flexible: a restaurant if the weather is clear, or leftovers and a movie if the rain comes in over the mountains.',
            'Night six is the celebration dinner, either at the house with a chef again or at the best table you could book. On the last night you clear the fridge. Planned this way, you get the best of North Shore restaurants without fighting for tables every evening, and you are never stuck on the wrong side of the bridge in a downpour.',
          ],
        },
        {
          heading: 'What a villa night costs on Kauaʻi',
          paras: [
            'For a single dinner, the published Kauaʻi CORE band is $225–$375 a guest, with groceries included. Stay Chef days for a full week start from $1,650 a day. The full breakdown, including travel to the North Shore, is on [Kauai private chef cost](/pricing).',
            'Every Kauaʻi date is quoted before a chef is confirmed. Send your dates, the villa address and the group size, and we will tell you plainly what we can cover.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do I need restaurant reservations on Kauaʻi’s North Shore?',
          a: 'For sit-down dinners, yes. Book as soon as you know your dates, especially in summer and over the holidays. Casual spots and food trucks are usually walk-in.',
        },
        {
          q: 'Do North Shore restaurants close early?',
          a: 'Many do, compared with a city. Plan sit-down dinners for early evening and check hours before you drive.',
        },
        {
          q: 'Will you cook at a villa past the Hanalei bridge?',
          a: 'Often, yes, by inquiry. Chef travel and road conditions are part of the North Shore quote.',
        },
        {
          q: 'Is the North Shore rainy in winter?',
          a: 'It is the wetter side of Kauaʻi, especially in winter. Keep a night or two flexible, and plan a covered or indoor backup for outdoor dinners.',
        },
        {
          q: 'Can you cater a big family dinner in Princeville?',
          a: 'Yes. Staffed estate events from 10 to 75 guests are quoted by inquiry on both shores, with a weather backup in the plan.',
        },
      ],
      related: [
        { path: '/', label: 'Private chef Kauai' },
        { path: '/catering', label: 'Kauai catering' },
        { path: '/pricing', label: 'Kauai private chef cost' },
        { path: '/blog/dining-in-hanalei', label: 'Dining in Hanalei' },
      ],
    },

    {
      feature: true,
      slug: 'kauai-farmers-market-villa-week',
      keyword: 'kauai farmers market',
      datePublished: '2026-10-15',
      name: 'Kauaʻi farmers markets for a villa week',
      h1: 'Kauai farmers market — shopping for a villa week, the chef’s way.',
      title: 'Kauai Farmers Market — Shopping for a Villa Week | myCHEF',
      description:
        'A chef’s guide to a Kauai farmers market week: Poʻipū, Kapaʻa, Līhuʻe and North Shore, what to buy, and how market produce becomes dinner at the villa.',
      lede:
        'A Kauai farmers market morning is one of the best parts of a villa week. This is how a chef uses the markets on both shores, and how to shop if you are cooking some meals yourself.',
      photo: 'blogGroceryKauai',
      body: [],
      sections: [
        {
          heading: 'Why the markets matter on Kauaʻi',
          paras: [
            'Kauaʻi grows a lot in a small space. The wetter North Shore and east side push tropical fruit and greens. The sunnier South Shore and west side grow different crops. Roadside stands and weekly town markets are where a lot of that produce meets visitors cooking in rental kitchens. A Kauai farmers market is both a grocery stop and a morning out.',
            'For a villa week in Poʻipū, Princeville or Kapaʻa, the markets put better produce on the table than a resort grocery shelf. They also fill the gaps between the island’s smaller grocery selection and a full chef-provisioned week.',
            'Kauaʻi is also an island of drives. A South Shore market morning does not combine cleanly with a North Shore beach day unless you like spending the afternoon in the car. Pick the market that matches the shore you are sleeping on, and save the cross-island run for a day when that is already the plan.',
          ],
        },
        {
          heading: 'When and where to go',
          paras: [
            'Kauaʻi markets run on a weekly rhythm. South Shore guests often look first at Poʻipū-area markets. East-side guests look at Kapaʻa and Līhuʻe. North Shore guests use smaller local markets and roadside stands when the road is open. Days and hours change with the season and the organisers, so check the current Kauai farmers market schedule before you drive.',
            'Go early. The best greens, avocados and fruit sell out first, and parking fills up. Bring cash, because not every stall takes cards, and bring a cooler bag if you are driving from Poʻipū to the North Shore or the other way around.',
            'Schedules shift. A market that was Saturday-only last year may add a weekday, or pause for a holiday week. Treat any printed list as a starting point and confirm the morning you intend to go. That habit saves more villa weeks than any secret stall tip.',
          ],
        },
        {
          heading: 'What is in season, roughly',
          paras: [
            'Kauaʻi has a long growing season, but fruit still comes in waves. Mangoes, lychee and other tropical fruit peak in the warmer months. Citrus and avocado varieties take over toward winter. Greens, herbs and flowers appear for most of the year when the weather cooperates.',
            'Do not lock a menu to a fruit you saw on a list. Plan around what is actually on the tables that week. That is how a chef works on Kauaʻi, and it is why a villa dinner built from market shopping tastes different from one built from a single supermarket run in Līhuʻe.',
          ],
        },
        {
          heading: 'How a chef shops the market for a villa',
          paras: [
            'When we can staff a Kauaʻi villa week, the chef writes the menu with you first in broad strokes: a fish night, a grill night, a longer Saturday dinner, lighter lunches. The specific vegetables, fruit and fish are filled in from what is good that week. A week-long menu often reads “catch of the day” or “market greens” rather than naming a species months ahead.',
            'Groceries are billed at cost against receipts when we shop. We name produce and fish as what they are, and we only name a farm once we have verified it in writing. Our [personal chef Kauai](/private-chef) page explains how a villa dinner runs from shop to cleanup on both shores.',
          ],
        },
        {
          heading: 'Shopping for yourself on a self-catered day',
          paras: [
            'Many villa weeks mix chef nights with self-catered days. If you are shopping for those, keep it simple: avocados, greens, fruit for breakfast, eggs and bread. A bigger grocery stop in Līhuʻe on the way from the airport still helps, because North Shore and South Shore selection is smaller.',
            'If a chef is cooking later that week, tell them what you already bought so nothing goes to waste. Leftover market produce is easy to fold into a lunch or a breakfast service. The [private chef Kauai](/) page covers how inquiry dates and villa nights are planned.',
          ],
        },
        {
          heading: 'Fish, both shores and the weather',
          paras: [
            'Fish on Kauaʻi depends on weather and season, like everywhere in Hawaiʻi. Most of what a chef cooks comes through a fish counter or a supplier, not a produce stall. Species change. No honest cook can promise one particular fish on a particular night.',
            'For a group dinner, the chef plans the fish course with a backup. For a staffed party, it is part of the written menu. Our [Kauai catering](/catering) page covers how larger estate events from 10 to 75 guests are cooked and served on both shores.',
            'If you are shopping fish yourself on a self-catered day, buy what the counter says is fresh that morning and cook it the same day. Kauaʻi is not the place to stock a week of raw fish in a rental fridge and hope for the best.',
          ],
        },
        {
          heading: 'A sample market-led week on Kauaʻi',
          paras: [
            'Here is the kind of outline that works for six guests staying a week in Poʻipū or Princeville. Night one is a welcome dinner after the flight: a market salad, grilled island fish, rice, and sliced fruit. Night three is a grill night on the lānai. Midweek is self-catered, with labelled leftovers in the fridge.',
            'Night five is the longer dinner after a morning market run, with a raw fish starter, a slow-cooked main and a dessert built around whatever fruit looked best. Breakfasts can be added on any day. On the North Shore, keep one night flexible for rain and the Hanalei bridge; on the South Shore, keep one night flexible for trade-wind showers.',
            'Nothing in that outline names a species or a farm ahead of time. The structure is fixed and the ingredients are filled in that week. On inquiry islands like Kauaʻi, that outline only becomes a confirmed plan once a chef is assigned in writing. Send dates early in peak months, because North Shore and South Shore demand both rise around holidays and summer weeks.',
          ],
        },
        {
          heading: 'Villa kitchens on both shores',
          paras: [
            'Poʻipū and Princeville rentals vary widely. Some estates have professional ranges and outdoor kitchens; some condos have a galley and a small fridge. Send the address when you ask for a quote so the menu matches the space. Outdoor grilling needs host approval. A big buffet needs staging space that is not the only hallway.',
            'North Shore travel time, the Hanalei bridge and rain all belong in the plan. South Shore evenings are usually drier, but trade-wind showers still happen. Either way, a covered lanai or indoor table should be part of any outdoor dinner plan.',
            'If the group is larger than the dining table, staffed [Kauai catering](/catering) can run a buffet on the lawn while smaller nights stay at the private chef table. Inquiry dates are confirmed in writing before a chef is assigned.',
          ],
        },
        {
          heading: 'From market bag to dinner table',
          paras: [
            'A practical week often looks like this. The chef shops on the first day when the date is confirmed, drops off breakfast and lunch basics, and cooks the welcome dinner. Midweek they top up fish and greens. A second market run before the weekend sets up the big dinner. Between visits the fridge stays labelled so self-catered meals are easy.',
            'For a single dinner, the published Kauaʻi CORE band is $225–$375 a guest with groceries included. Stay Chef days start from $1,650 a day. The full breakdown, including travel to either shore, is on [Kauai private chef cost](/pricing). Every Kauaʻi date is quoted before a chef is confirmed — send your dates, the villa address and the group size.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Which Kauai farmers market is best for a villa week?',
          a: 'It depends which shore you are on. Poʻipū-area markets suit the South Shore; Kapaʻa and Līhuʻe suit the east side; smaller North Shore markets and stands suit Princeville and Hanalei. Check the current schedule before you drive.',
        },
        {
          q: 'Will the chef shop at the farmers market for us?',
          a: 'Yes, when we can staff the date and the timing works. Groceries are billed at cost against receipts.',
        },
        {
          q: 'Can you promise a specific fish for our dinner?',
          a: 'No honest cook can. Fish depends on season and weather, so the chef plans the fish course with a named backup.',
        },
        {
          q: 'Do you name the farms on the menu?',
          a: 'Only after we have verified the farm in writing. Otherwise produce is named as what it is.',
        },
        {
          q: 'What should we buy ourselves for self-catered days?',
          a: 'Keep it simple: avocados, greens, fruit for breakfast, eggs and bread. A bigger Līhuʻe shop on arrival still helps. Tell the chef what you bought.',
        },
        {
          q: 'Does the Hanalei bridge affect market shopping?',
          a: 'It can. Heavy rain can slow or close the road, so North Shore shopping and chef travel are planned around conditions and quoted by inquiry.',
        },
      ],
      related: [
        { path: '/', label: 'Private chef Kauai' },
        { path: '/private-chef', label: 'Personal chef Kauai' },
        { path: '/catering', label: 'Kauai catering' },
        { path: '/pricing', label: 'Kauai private chef cost' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
      ],
    },
    {
      feature: true,
      slug: 'poipu-restaurants-dining-guide',
      keyword: 'poipu restaurants',
      datePublished: '2026-10-16',
      name: 'Poʻipū restaurants dining guide',
      h1: 'Poʻipū restaurants — South Shore tables, resort nights and when to cook at the villa.',
      title: 'Poipu Restaurants — South Shore Dining Guide | myCHEF',
      description:
        'Poipu restaurants for a Kauaʻi South Shore villa week: resort rooms, reservations and when a private chef night at the house is better.',
      lede:
        'Poʻipū restaurants cluster along Kauaʻi’s sunny South Shore: resort dining rooms, ocean-view decks and a walkable strip near the beaches. This guide helps villa guests decide when to book a table and when dinner at the house is the wiser plan.',
      photo: 'dinPoipu',
      body: [],
      sections: [
        {
          heading: 'What “Poʻipū restaurants” covers on the South Shore',
          paras: [
            'Poʻipū is the South Shore’s main dining pocket: hotel rooms with sunset decks, casual spots near the beaches, and a short drive to Old Kōloa Town for a different pace. Searches for Poʻipū restaurants mix resort fine dining with family-friendly plates. Peak winter weeks and wedding weekends fill first.',
            'Most of our South Shore guests are in vacation rentals or multi-bedroom villas, not collecting every resort restaurant. They want one or two special nights out and a quiet house for the rest — especially with kids, elders or a wedding party that already has a long daytime schedule.',
          ],
        },
        {
          heading: 'Resort decks, Kōloa town and the walkable strip',
          paras: [
            'Inside the Poʻipū resort pocket you will find sit-down rooms with ocean or garden views, poolside casual options and a few spots that take walk-ins earlier in the evening. Dress codes are usually resort casual. We do not invent chef names, ratings or partner restaurants — book directly, ask about dietary notes and hold sunset seats early.',
            'Beach days shape the dinner clock. After a long morning at Poʻipū Beach Park, many groups want an early house dinner more than a late resort seating. Hold the restaurant for a rested night mid-week, and let the villa kitchen cover the sandy, sun-tired evenings.',
            'Old Kōloa Town adds bakeries, casual dinners and a short historic-street stroll. It is close enough for a planned evening without a North Shore commitment. Parking and wait times grow on weekend nights; a reservation still beats hope.',
          ],
        },
        {
          heading: 'North Shore drives and why South Shore weeks stay south',
          paras: [
            'Hanalei and Princeville are a real cross-island drive, longer when the Wailua corridor is slow or when you are aiming for a sunset table. Our [North Shore Kauaʻi dining](/blog/north-shore-kauai-dining-guide) guide covers that side of the island. For a Poʻipū-based week, treat the North Shore as a day trip with lunch, not a same-evening dinner round trip with tired kids in the car.',
            'Līhuʻe airport runs and grocery stops fit the South Shore loop more cleanly than a North Shore dinner dash. If half the group wants a Hanalei day, keep dinner that night at the Poʻipū villa so nobody is driving the byway in the dark after a long meal.',
            'South Shore weather is often drier, but trade showers still pass. Covered lānai space and a weather backup matter as much for a house dinner as for an outdoor restaurant deck.',
          ],
        },
        {
          heading: 'When a private chef night beats a restaurant table',
          paras: [
            'Book a chef night when the guest list will not fit a standard reservation, when the wedding week already has enough logistics, or when you want one menu that covers shellfish allergies and kids’ plates without three stops. Our [private chef Kauai](/) service covers dinner-sized villa groups. Published bands live on [Kauai private chef cost](/pricing): Signature dinners $225–$375 a guest with groceries inside the band; Stay Chef from $1,650 a day with groceries at cost.',
            'Past about ten guests — welcome dinners, rehearsal feeds, family reunions — use [Kauai catering](/catering). Staff, rentals and travel print as separate lines. South Shore and North Shore add their own shore notes on the rate card; the written quote is the confirmed total. For how in-house dinners are framed on this island, see [personal chef Kauai](/private-chef).',
          ],
        },
        {
          heading: 'A South Shore week that mixes restaurants and the villa',
          paras: [
            'A practical pattern: two reserved restaurant nights (one resort sunset, one Kōloa casual), three chef or Stay Chef dinners at the villa, and flexible evenings for leftovers or a last-minute walk-in. Inquiry staffing on Kauaʻi means we confirm crew before we lock the date — a published band is not an instant-booking button.',
            'Market shopping on the South Shore feeds the house nights. If you want the market-to-dinner path spelled out, our [Kauai farmers markets](/blog/kauai-farmers-market-villa-week) guide covers Poʻipū-area shopping that turns into a chef night. Groceries for Signature dinners stay inside the guest band; Stay Chef days show receipts at cost.',
            'Send the villa address, dates and headcount on the quote form. We reply with Signature, Stay Chef or catering. Contact stays on that form until the booking thread is open.',
            'If you already know the house has a weak kitchen, say so up front. We would rather quote catering gear for a Poʻipū address than discover on arrival that the cooktop cannot feed twelve.',
          ],
        },
        {
          heading: 'Wedding weeks, welcome dinners and the South Shore calendar',
          paras: [
            'Poʻipū and the wider South Shore host many wedding weeks. The reception may be elsewhere; the welcome dinner and day-after brunch often land at the villa. Those nights are separate lines on the quote, not a single “wedding package” invented for the blog. See [wedding catering](/weddings) when the reception itself is the question.',
            'Inquiry staffing on Kauaʻi means we confirm a crew before we lock the date. Peak winter and holiday weeks book out. If your dates are firm, send them early even if the menu is still open. A published Signature band of $225–$375 a guest is a floor for planning, not a live instant-booking button.',
            'Quiet hours and neighbor distance matter on residential streets behind the resort strip. Amplified music is a separate booking with performers who know County rules. We cook and serve; we do not invent entertainment partners in this guide.',
          ],
        },
        {
          heading: 'A sample Poʻipū villa dinner timeline',
          paras: [
            'Mid-afternoon arrival for a Signature dinner: confirm grill access, fridge space and where guests will sit when the wind picks up. Cold starters first. Fish and a second main as the light goes. Dessert on the lānai if the evening stays dry; indoors if a shower band arrives.',
            'Cleanup finishes before quiet hours. Leftovers labelled. The team leaves the kitchen the way they found it. For a staffed catering night the same address gets an earlier load-in, more hands and a written weather backup — that product is [Kauai catering](/catering), not a stretched Signature dinner.',
            'If the group is still deciding between a resort restaurant and the villa for the celebration night, hold the restaurant table if you can cancel, and send us the headcount for a parallel chef quote. You can release whichever option loses once the RSVPs settle.',
          ],
        },
        {
          heading: 'How to get a real quote for Poʻipū',
          paras: [
            'Start with [private chef Kauai](/) for the overview, [Kauai catering](/catering) if the list is already a party, and [Kauai private chef cost](/pricing) for the published floors. Put shore, dates and guest count on the form so the shore line and staffing reality show up before anyone packs a knife roll.',
            'Mention whether the house is Poʻipū, Kōloa or farther west toward Kalaheo. Shore lines and drive notes print honestly on the quote; we do not bury them inside a fake package price.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do I need reservations at Poʻipū restaurants?',
          a: 'For sunset and sit-down resort rooms, yes — especially in winter and over wedding weekends. Casual spots are more flexible earlier in the evening.',
        },
        {
          q: 'Are Poʻipū restaurants only inside the hotels?',
          a: 'Many well-known rooms are in the resorts; others sit nearby or in Old Kōloa Town. Book directly and ask about parking and dress code.',
        },
        {
          q: 'When is a private chef better than going out in Poʻipū?',
          a: 'Large groups, mixed diets, early bedtimes, or any night you want everyone on your own lānai without a drive after a beach day.',
        },
        {
          q: 'Can you cater a wedding-week dinner in Poʻipū?',
          a: 'Yes, when staffing is confirmed. Events from about 10 to 75 guests are quoted as Kauai catering, with quiet hours and load-in agreed first.',
        },
        {
          q: 'How far is the North Shore from Poʻipū for dinner?',
          a: 'It is a cross-island drive. Most South Shore weeks keep dinners south and save Hanalei or Princeville for a planned day trip.',
        },
        {
          q: 'What does a Poʻipū villa chef dinner cost?',
          a: 'Signature dinners are $225–$375 a guest with groceries included. Stay Chef days start from $1,650 a day. Full details are on the pricing page; Kauaʻi is by inquiry.',
        },
      ],
      related: [
        { path: '/', label: 'Private chef Kauai' },
        { path: '/private-chef', label: 'Personal chef Kauai' },
        { path: '/catering', label: 'Kauai catering' },
        { path: '/pricing', label: 'Kauai private chef cost' },
        { path: '/blog/dining-in-poipu', label: 'Poʻipū kitchen notes' },
      ],
    },
  ],
  bigisland: [
    {
      feature: true,
      slug: 'kona-beach-party-catering-guide',
      keyword: 'beach party catering',
      datePublished: '2026-10-14',
      name: 'Kona beach party catering',
      h1: 'Beach party catering on the Kona side — how to plan it properly.',
      title: 'Beach Party Catering in Kona — A Planning Guide | myCHEF',
      description:
        'Planning beach party catering on the Kona–Kohala coast? Sun, wind, permits, food safety, staff and a villa backup for a beach party that actually works.',
      lede:
        'A beach party on the Kona side sounds simple until you are carrying a buffet across hot sand at noon. This guide covers what works on the west coast of Hawaiʻi Island.',
      photo: 'cateringBigisland',
      body: [],
      sections: [
        {
          heading: 'The west side is made for it — mostly',
          paras: [
            'The Kona–Kohala coast is the dry, sunny side of Hawaiʻi Island. Lava fields run down to white-sand coves, the afternoons are reliably bright and the sunsets are long. That makes it one of the best places in Hawaiʻi for an outdoor party. It also means hard sun, strong afternoon wind on parts of the Kohala coast, and very little shade on many beaches.',
            'Good beach party catering here starts with those conditions, not with the menu. Where is the shade, where is the power, how far is the walk from the car, and what happens if the wind picks up just as the food goes out?',
          ],
        },
        {
          heading: 'Public beach, resort beach or the villa lawn',
          paras: [
            'Where you hold the party decides most of the logistics. Public beach parks are run by the County of Hawaiʻi or the State, and each has its own rules on group size, tents, cooking, amplified sound and alcohol. Many larger gatherings need a permit, and some sites do not allow open flames or catering setups at all. Check the rules for the exact beach before you plan the food.',
            'Resort beaches often require you to work through the resort. The simplest option, and the one we usually recommend, is a villa or estate with ocean frontage or a lawn near the water. You get the view and the breeze, plus a kitchen, power, shade, restrooms and an easy backup if the weather turns.',
          ],
        },
        {
          heading: 'Food that survives sun, sand and wind',
          paras: [
            'Food safety is the first job. Cold dishes need ice and shade, hot dishes need to be held hot, and nothing should sit in the sun for long. That favours grilled fish and meat cooked to order, rice and grain salads that hold well, and sturdy salads dressed at the last minute. Delicate plated courses and anything with cream or mayonnaise are harder to manage on a beach.',
            'The west side has excellent ingredients for this kind of menu. Kanpachi and other island fish, Big Island beef, local greens and fruit, and Kona coffee for dessert all suit a grill-and-platter table. We name fish and produce as what they are and only make origin claims, coffee included, when we can document them.',
          ],
        },
        {
          heading: 'Staff, equipment and the walk from the car',
          paras: [
            'A beach party needs more hands than the same party indoors. Everything has to be carried in and out: grills, tables, shade, ice, water, serving equipment and trash. Many Kohala beaches involve a walk from the parking area, sometimes across sand or lava. Plan staff for setup and breakdown as well as service, and pack out everything you bring.',
            'Our [Big Island catering](/catering) page covers staffed villa and estate events on the Kona and Kohala coasts, from 10 to 75 guests. The written quote lists staff hours, rentals, groceries and travel as separate lines.',
          ],
        },
        {
          heading: 'Timing: beat the heat, catch the sunset',
          paras: [
            'Midday on a Kohala beach is hot and bright. Most successful beach parties start in late afternoon, eat around sunset and wrap up soon after dark, before you are packing out by headlamp. Sunrise and early-morning gatherings, such as a breakfast after a vow renewal, are another good option.',
            'Wind tends to build in the afternoon on parts of the Kohala coast. Weighted tents, wind-safe serving ware and a menu that does not depend on candles help a lot. Always agree a backup location, which is another reason a villa with beach access works well.',
          ],
        },
        {
          heading: 'Smaller groups: a chef instead of catering',
          paras: [
            'Not every beach day needs a staffed event. For a family or a group of friends, a chef can cook a long lunch or a sunset dinner at the villa after a day on the beach, or pack a picnic for the sand and cook dinner at home. Our [private chef Big Island](/) service covers villa dinners on the west side, and the [private chef Kona](/private-chef) page explains how an evening runs on the Kona–Kohala coast.',
            'East-side Hilo events are quoted as a separate day, because the drive across the island is a real part of the plan.',
          ],
        },
        {
          heading: 'A beach party checklist for the west side',
          paras: [
            'Before you lock in a date, run through this list. Site: which beach or villa, who manages it, and do they require a permit or approval? Access: how far is the walk from parking, and is it over sand or lava? Shade: tents or umbrellas that are weighted for wind. Power and water: is there any, or does everything need to be brought in?',
            'Food: a menu built for heat, with ice for cold dishes, a way to hold hot food, and enough drinking water for every guest. Staff: enough people for setup, service and breakdown, not just service. Waste: bags and a plan to pack out everything you carry in, leaving the beach cleaner than you found it.',
            'Comfort: reef-safe sunscreen, a first-aid kit and a plan for sunset lighting if the party runs late. Backup: a confirmed indoor or covered location in case of wind, rain or a closed beach. Neighbours and rules: check quiet hours, alcohol rules and any limits on amplified music. With those answered, the food is the easy part.',
          ],
        },
        {
          heading: 'What it costs, and what to send us',
          paras: [
            'For a villa dinner cooked by one chef, the published Hawaiʻi Island CORE band is $210–$325 a guest, with groceries included. Stay Chef days start from $1,450 a day. Full details are on [Big Island private chef cost](/pricing). Beach and larger events are quoted as catering, because the site, staff and rentals drive the price.',
            'To get a written quote, send the date, the guest count, the exact beach or villa address, and whether you already have a permit. We will tell you plainly what the site allows and what we would change.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do I need a permit for a beach party on the Big Island?',
          a: 'Often, for larger groups. Rules depend on whether the beach is a County of Hawaiʻi park, a State park or resort land. Check the exact site before planning food.',
        },
        {
          q: 'Can you cook on a public beach?',
          a: 'Only where the site rules allow it. Many beach parks restrict open flames and catering setups, which is why we usually recommend a villa with beach access.',
        },
        {
          q: 'What food works best for a beach party in Kona?',
          a: 'Grilled island fish and meat, rice and grain salads, sturdy greens dressed at the last minute and fruit. Cold dishes stay on ice and in shade.',
        },
        {
          q: 'What time should a Kona beach party start?',
          a: 'Late afternoon is usually best. You avoid the midday heat, eat at sunset and pack out soon after dark.',
        },
        {
          q: 'How many guests can you cater on the Kona–Kohala coast?',
          a: 'Staffed villa and estate events run from 10 to 75 guests. Smaller groups are usually a private chef dinner instead.',
        },
        {
          q: 'Do you cater in Hilo too?',
          a: 'East-side Hilo events are quoted as a separate day because of the drive across the island.',
        },
      ],
      related: [
        { path: '/catering', label: 'Big Island catering' },
        { path: '/', label: 'Private chef Big Island' },
        { path: '/pricing', label: 'Big Island private chef cost' },
        { path: '/blog/weather-backup', label: 'Weather backup' },
      ],
    },

    {
      feature: true,
      slug: 'kona-catering-planning-guide',
      keyword: 'kona catering',
      datePublished: '2026-10-15',
      name: 'Kona catering planning guide',
      h1: 'Kona catering — how to plan a staffed villa event on the west side.',
      title: 'Kona Catering — Planning a Villa Event | myCHEF',
      description:
        'Planning Kona catering for a villa event? Guest counts, menus, Kohala travel, sun and wind, staffing and how a west-side catering quote is built.',
      lede:
        'Kona catering usually means a staffed meal at the house you are already staying in — not a ballroom. This guide explains how that works on the Kona–Kohala coast.',
      photo: 'cateringBigisland',
      body: [],
      sections: [
        {
          heading: 'What “Kona catering” usually means',
          paras: [
            'Search for Kona catering and you get a mix of restaurant takeout, hotel banquet desks and small teams who cook in private homes. This guide is about the third kind: a staffed meal at a villa or vacation rental on the west side of Hawaiʻi Island, from Kailua-Kona up through the Kohala Coast resorts and residential enclaves.',
            'We are a kitchen, not a venue. We bring the cook team, the service and the cleanup to the house you already have. If you need a ballroom, a hotel banquet or a public beach permit party, those are different products and different vendors.',
            'Most west-side requests are family reunions, wedding-week dinners, corporate villa evenings and birthday gatherings. The common thread is a house with a kitchen or a workable outdoor cook space, parking for the team, and a host who can approve load-in times and quiet hours before the date.',
          ],
        },
        {
          heading: 'Guest count changes everything',
          paras: [
            'Up to about a dozen guests, a chef and the house kitchen can cook and serve family-style. That is a private chef dinner, not catering. Past that, you are into staffed catering: a lead chef, cooks, servers and a cleanup crew, with rentals for tables, linens and serving equipment if the house does not have them.',
            'Our [Big Island catering](/catering) page covers staffed events from 10 to 75 guests on the west side. Larger formats are quoted carefully, not promised from a template. Tell us the headcount early — it drives staff hours, rentals and the shape of the menu more than any other single detail.',
            'A useful rule of thumb: if everyone needs to sit down at the same time for speeches, plan seating and a plated or family-style pass. If guests will drift between the pool, the lawn and the terrace, a buffet line under cover usually works better. Say which kind of evening you want when you send the quote form.',
          ],
        },
        {
          heading: 'Menus that work in Kona heat and wind',
          paras: [
            'West-side afternoons are bright and often windy. Buffet lines and plated courses both work, but the food has to handle sun and trade winds. Grilled island fish, slow-cooked meats, bright salads, rice and fruit all travel well. Cream sauces and delicate garnishes do not love an open lava-rock terrace at four o’clock.',
            'Dietary needs belong in the brief, not as a surprise on the night. Shellfish allergies, vegetarian guests and kids’ plates are easy to plan when they are written into the quote. We name fish as what it is and do not invent farm names or claim a catch we cannot verify.',
            'A good west-side menu also plans for timing. Guests drift between the pool and the terrace. Passed bites cover the first hour. The main service should start before the trade winds cool the plates too fast. Dessert can wait until after speeches without the kitchen going cold if the team stages it properly.',
          ],
        },
        {
          heading: 'Where on the west side we cook',
          paras: [
            'Most Kona catering requests sit in Kailua-Kona, Keauhou, the Kohala Coast resort corridor and residential pockets around Waikoloa and Mauna Lani. Those are west-side days. East-side Hilo and Volcano are a different day and a different quote, because the drive across the island is not a quick hop. Say so early if any guests are staying on the east side and want to join a west-side dinner — travel time belongs in the plan.',
            'For a smaller dinner rather than a staffed party, our [private chef Kona](/private-chef) page explains how in-house evenings run on the west side. The island home page for [private chef Big Island](/) covers the wider picture.',
          ],
        },
        {
          heading: 'Sun, wind, shade and a weather backup',
          paras: [
            'Kona evenings are usually dry compared with the east side, but afternoon sun on a lava terrace is fierce, and evening wind can move napkins and buffet cards. Plan shade for the service line, weight for the table settings, and a covered lānai or indoor dining room as backup.',
            'Every outdoor catering quote should include a weather plan agreed before the date. That is not pessimism — it is how you avoid moving fifty plates in the dark when the wind comes up.',
          ],
        },
        {
          heading: 'How a staffed Kona evening runs',
          paras: [
            'Here is how a typical staffed villa evening for around forty guests unfolds. Early in the afternoon the team arrives, parks where the host has agreed, and sets up the cooking area away from the main gathering: grills, prep tables and a hand-wash station. Rentals arrive and the buffet or plated pass is staged under cover.',
            'Around an hour before guests arrive, cold starters go on ice and drinks are set out. As people arrive, servers carry passed bites while the grill starts on the fish and meats. Dinner opens as the light softens, family-style or as a buffet, with someone keeping the line moving so nothing sits out too long in the heat.',
            'Dessert comes after speeches or a toast. Then the team clears, breaks down the cooking area and leaves the kitchen and terrace the way they found them. Leftovers are packed and labelled if you want them. Arrival times, quiet hours and parking are written down before the date.',
            'If speeches or a cake presentation are part of the night, tell us the timing so service can pause cleanly. A good catering evening on the Kona side feels calm to the guests even when the cook line is busy behind the scenes.',
          ],
        },
        {
          heading: 'What goes on the written quote',
          paras: [
            'A real Kona catering quote lists chef and staff hours, rentals, groceries, travel and any west-side surcharges as separate lines. It also names the guest count, the service style, the weather backup and the quiet hours agreed with the host. That is how you compare apples to apples when you are looking at more than one option.',
            'We do not invent reviews, partner venues or package prices that are not already published. If a number is not on the rate card or the quote, it is not a promise.',
          ],
        },
        {
          heading: 'Rentals, parking and quiet hours',
          paras: [
            'West-side villas often need tables, linens, glassware and extra serving pieces beyond what the house owns. Those rentals appear as their own lines on the quote. Parking for the cook team and the rental truck should be agreed with the host before the date — Kohala Coast driveways and resort gates have different rules.',
            'Quiet hours matter on residential streets and in resort-residential enclaves. Amplified music is usually a separate vendor and a separate approval. We plan food service around the host’s rules rather than inventing a party the neighbours will shut down.',
            'If your event is closer to a beach gathering than a villa dinner, read the beach party catering guide as well. Public sand has county rules that a private lawn does not.',
          ],
        },
        {
          heading: 'What it costs, and how to get a real number',
          paras: [
            'For a dinner-sized group cooked by a single chef, the published Hawaiʻi Island bands apply. The CORE band is $210–$325 a guest with groceries included, and Stay Chef days start from $1,450 a day. The full breakdown is on [Big Island private chef cost](/pricing).',
            'Larger Kona catering events are quoted as staffed catering, because staff, rentals and the guest count drive the number more than the menu does. West-side catering food starts from published per-person staffing rates on the rate card; the written quote is the confirmed total. Send the address, the date, the guest count and two lines about the evening you have in mind.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do you cater hotel banquet rooms in Kona?',
          a: 'No. We cook and staff meals at private homes and villas. Hotel banquet desks handle their own ballrooms.',
        },
        {
          q: 'How many guests can a Kona villa catering event have?',
          a: 'Up to about a dozen guests is usually a private chef dinner. From 10 to 75 guests we quote staffed catering with servers and cleanup.',
        },
        {
          q: 'Do you cater on the Hilo side as well?',
          a: 'East-side dates are a separate day and a separate quote. Most of our catering work sits on the Kona–Kohala west side.',
        },
        {
          q: 'What happens if the wind comes up on the terrace?',
          a: 'Every outdoor quote includes a weather plan — covered lānai, indoor dining room or similar — agreed before the date.',
        },
        {
          q: 'Can you do a beach party instead of a villa?',
          a: 'Public beaches have their own rules and permits. Most of our events stay at the house. See our beach party catering guide for what that involves.',
        },
        {
          q: 'How do we get a price for Kona catering?',
          a: 'Send the address, date, guest count and a short note about the evening. Dinner-sized groups use the published private chef bands; larger events are quoted as staffed catering.',
        },
      ],
      related: [
        { path: '/catering', label: 'Big Island catering' },
        { path: '/', label: 'Private chef Big Island' },
        { path: '/private-chef', label: 'Private chef Kona' },
        { path: '/pricing', label: 'Big Island private chef cost' },
        { path: '/blog/kona-beach-party-catering-guide', label: 'Kona beach party guide' },
      ],
    },
    {
      feature: true,
      slug: 'kona-farmers-market-villa-week',
      keyword: 'kona farmers market',
      datePublished: '2026-10-16',
      name: 'Kona farmers markets for a villa week',
      h1: 'Kona farmers markets — shopping for a west-side villa week, the chef’s way.',
      title: 'Kona Farmers Market — Shopping for a Villa Week | myCHEF',
      description:
        'A chef’s guide to Kona farmers markets for a villa week: what to buy, timing, west-side logistics and how market shopping turns into a private chef dinner.',
      lede:
        'A Kona farmers market run is how many west-side villa weeks start: fruit, greens, coffee and the catch of the morning, then dinner planned around what actually showed up — not a menu written months ahead.',
      photo: 'blogFarmsBigisland',
      body: [],
      sections: [
        {
          heading: 'Why Kona farmers markets matter for a villa kitchen',
          paras: [
            'Search for a Kona farmers market and you will find weekend and midweek gatherings along the west side where growers, bakers and fish vendors set up under tents. For a vacation rental, that market is not a sightseeing stop only. It is the fastest way to cook island food without pretending every ingredient is “estate grown” when you cannot verify the farm.',
            'We shop for what we will cook that day or the next. Fruit that ripens on the counter, sturdy greens, tomatoes, herbs, and fish when the cooler is honest about the morning’s catch. We name species as what they are. We do not invent farm partnerships or claim a label we cannot show on a receipt.',
          ],
        },
        {
          heading: 'Timing, cash and what travels well back to the villa',
          paras: [
            'Go early. The best fish and greens move first, and parking near popular west-side markets fills before mid-morning on weekends. Bring reusable bags, a small cooler for seafood and cash plus a card — vendor preferences vary. Ask before you photograph a stall; many growers are working, not posing.',
            'If you are staying in Waikoloa or Mauna Lani, build the market into a morning loop with a single iced cooler and a plan to be back at the villa before the midday heat. Do not leave seafood in a hot trunk while you add three more errands. The chef would rather start with a shorter, colder haul than a long list that spoiled on the highway.',
            'What travels well: citrus, avocados that will ripen in a day or two, sturdy lettuce, cucumbers, sweet potato, bananas, and baked goods for breakfast. What needs a plan: delicate herbs in the heat of a parked car, and any seafood that must stay iced until it hits the villa fridge. If the house is in Waikoloa or farther up the Kohala Coast, pack the cooler before you leave the market lot.',
          ],
        },
        {
          heading: 'West-side markets versus a Hilo day',
          paras: [
            'West-side villa weeks usually shop Kona-side. Hilo’s markets are excellent and well known, but they are not a casual add-on to a Kailua-Kona dinner the same evening. The Saddle Road or the longer coastal loop makes Hilo a dedicated day. Our east-side dinners are quoted as a separate day on the rate card for exactly that reason.',
            'If your itinerary already includes Volcano or Hilo, shop there for that day’s picnic or lodge kitchen and keep the west-side villa stocked from Kona markets and west-side grocery runs. Do not plan a round trip for a single bag of greens.',
          ],
        },
        {
          heading: 'Turning market bags into a private chef dinner',
          paras: [
            'A Signature dinner on the west side starts with what the market and the fish counter actually offered. The chef builds a short menu around that: a raw or seared starter, a grilled or pan-roasted fish, a pork or vegetable main if the group wants one, bright salads and fruit for dessert. Our [private chef Big Island](/) page covers dinner-sized groups; [private chef Kona](/private-chef) explains how west-side in-house evenings run.',
            'Published bands live on [Big Island private chef cost](/pricing): Signature dinners $210–$325 a guest with groceries inside the band, table dinners from $165, and Stay Chef from $1,450 a day with groceries at cost and receipts. Market produce for a Signature night sits inside that guest band. On a Stay Chef week, market and grocery receipts print at cost with zero markup.',
          ],
        },
        {
          heading: 'When the market run becomes catering instead',
          paras: [
            'Past about ten guests — beach birthdays, welcome dinners, reunion weeks — you need staff, not only a shopping list. That is [Big Island catering](/catering): a lead chef, cooks and servers, with a weather backup for west-side outdoor tables. The market still feeds the menu; the quote adds staff hours and rentals as their own lines.',
            'For beach-adjacent parties, read our [beach party catering](/blog/kona-beach-party-catering-guide) notes on permits, wind and cleanup. For a full planning pass on guest counts and west-side staffing, see the [Kona catering](/blog/kona-catering-planning-guide) guide. Neither post invents venue partners; both point back to the catering and pricing pages for real numbers.',
          ],
        },
        {
          heading: 'Coffee, fruit and what not to overbuy',
          paras: [
            'West-side markets are strong on tropical fruit, greens and baked goods. Coffee is easy to romanticize; buy what you will brew that week, not a suitcase of bags you will not finish. Ask vendors how ripe the fruit is today versus tomorrow so the villa counter is not a science experiment by Wednesday.',
            'Fish is the item that punishes a slow drive. If you buy seafood at the market, iced cooler first, villa fridge second, cook plan the same day when you can. We would rather adjust a menu after seeing the cooler than promise a species that never made it into the bag.',
            'Do not overbuy herbs and delicate greens on a hot morning if the villa is an hour up the coast. Shop the sturdy items first, then make one last pass for herbs when the car is ready to leave. That habit matters as much as any recipe.',
          ],
        },
        {
          heading: 'A sample west-side day built around the market',
          paras: [
            'Early morning: market run with a cooler. Midday: beach or a rest at the villa while produce settles in the fridge. Late afternoon: chef arrival for a Signature dinner built around the day’s fish and greens. Evening: dinner on the lānai, cleanup, leftovers labelled for tomorrow’s lunch.',
            'On a Stay Chef day the same market haul can feed breakfast prep and a dinner later, with receipts at cost. That is a different product from a single Signature night — see [Big Island private chef cost](/pricing) so the models stay unblended. Multi-day groups often alternate a chef night with a simple leftover lunch rather than cooking every meal.',
            'If the headcount jumps because cousins arrive mid-week, say so early. Crossing from a dinner-sized group into catering territory changes staff and gear. Our [Kona catering](/blog/kona-catering-planning-guide) guide walks through guest counts; [Big Island catering](/catering) is the booking page when you are already there.',
          ],
        },
        {
          heading: 'How to brief a chef after a market morning',
          paras: [
            'Send the villa address, dates, headcount and any allergies on the quote form before the trip when you can. If you already shopped, a photo of the counter haul helps the chef plan around what is in the fridge. We still confirm species and quantities before cooking — a bag of mangoes is not a menu by itself.',
            'Start with [private chef Big Island](/) for the overview, [Big Island catering](/catering) if the list is already a party, and [Big Island private chef cost](/pricing) for the published bands. Contact stays on the quote form until the booking thread is open.',
            'If your week mixes west-side villa nights with a Hilo or Volcano day, keep the market shopping tied to the kitchen you will cook in that evening. We will not invent a same-day cross-island grocery loop.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Which day should I go to a Kona farmers market?',
          a: 'Weekend mornings are the busiest and often the fullest. Midweek markets exist on the west side too — check current hours locally before you drive, and go early either way.',
        },
        {
          q: 'Can a private chef shop the market for us?',
          a: 'Yes. On Signature dinners, shopping sits inside the guest band. On Stay Chef days, market and grocery receipts print at cost. Tell us dietary needs before the run.',
        },
        {
          q: 'Should I shop Hilo markets on a Kona villa week?',
          a: 'Only if Hilo is already on the day’s itinerary. It is not a same-evening round trip from a west-side villa dinner.',
        },
        {
          q: 'What should I buy if I shop myself?',
          a: 'Fruit that will ripen, sturdy greens, herbs, and fish only if you have a cooler and a fridge ready. Leave the menu flexible until you see what is on the tables.',
        },
        {
          q: 'Can market produce feed a catered villa party?',
          a: 'Yes. For roughly 10 to 75 guests we quote Big Island catering, with staff and rentals as separate lines and a weather backup for outdoor service.',
        },
        {
          q: 'What does a west-side chef dinner cost after a market run?',
          a: 'Signature dinners are $210–$325 a guest with groceries included. Stay Chef days start from $1,450 a day. Full details are on the pricing page.',
        },
      ],
      related: [
        { path: '/', label: 'Private chef Big Island' },
        { path: '/private-chef', label: 'Private chef Kona' },
        { path: '/catering', label: 'Big Island catering' },
        { path: '/pricing', label: 'Big Island private chef cost' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
      ],
    },
  ],
};

export function getFeaturePost(islandId: IslandId, slug: string): FeaturePost | undefined {
  return islandFeaturePosts[islandId].find((row) => row.slug === slug);
}
