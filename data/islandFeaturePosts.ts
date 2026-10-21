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
        { path: '/blog/waikiki-restaurants-dining-guide', label: 'Waikīkī restaurants guide' },
        { path: '/', label: 'Private chef Oahu' },
        { path: '/private-chef', label: 'Private chef Honolulu' },
        { path: '/catering', label: 'Oahu catering' },
        { path: '/pricing', label: 'Oahu private chef cost' },
        { path: '/blog/dining-in-ko-olina', label: 'Ko Olina kitchen notes' },
      ],
    },

    {
      feature: true,
      slug: 'thanksgiving-dinner-oahu',
      keyword: 'thanksgiving dinner oahu',
      datePublished: '2026-10-19',
      name: 'Thanksgiving dinner on Oʻahu',
      h1: 'Thanksgiving dinner on Oahu — the holiday table, cooked at your house.',
      title: 'Thanksgiving Dinner Oahu — a Chef at Your House | myCHEF',
      description:
        'Planning Thanksgiving dinner on Oahu? Restaurant buffet or a chef at the house, turkey and oven limits, island sides, timing and the published prices.',
      lede:
        'Thanksgiving 2026 falls on Thursday 26 November. If your family is spending it in an Oʻahu house rather than a hotel room, this is how to plan the dinner so nobody spends the holiday in the kitchen.',
      photo: 'kailua',
      body: [],
      sections: [
        {
          heading: 'Thanksgiving week on Oʻahu: why the planning starts in October',
          paras: [
            'Every November the same questions come up on travel forums: which restaurants are open on Thanksgiving, which Waikīkī rooms still have a holiday table, and where to buy a pre-cooked meal. That tells you two things. Plenty of families fly in for the long weekend, and the good restaurant and resort tables go early. If you wait until the week itself, you are choosing from what is left.',
            'There are really three ways to do the meal. You can reserve a holiday menu or buffet in town, you can pick up a cooked meal and reheat it, or you can have the dinner cooked in the house you are staying in. Each one suits a different group, so it is worth deciding early which one is yours.',
          ],
        },
        {
          heading: 'Restaurant buffet or dinner at the house?',
          paras: [
            'A restaurant makes sense for a couple or a small group staying in a Waikīkī hotel without a real kitchen. Someone else handles everything, and you walk back to the room afterwards. The trade-off is a fixed seating time, a set menu, and no leftovers, which for many families are half the point of the day.',
            'A dinner at the house suits bigger groups: grandparents, small children, two or three families sharing a Kahala, Kailua or Ko Olina rental. Nobody has to drive home after the wine, the kids can leave the table when they are done, and you choose the hour. That is the evening a [private chef Honolulu](/private-chef) night is built for, whether the house is in town or out on the Gold Coast.',
            'The pick-up option sits in between. It can work well, but someone still has to reheat several dishes in an unfamiliar oven at the same time, carve, serve and clean up. If that someone is you, it is not really a day off.',
          ],
        },
        {
          heading: 'What a chef-cooked Thanksgiving at the house includes',
          paras: [
            'On our published Oʻahu dinners, the chef plans the menu with you, does the shopping, cooks in your kitchen, serves the meal and leaves the kitchen clean. Groceries sit inside the per-guest band on a Signature dinner, so you are not handed a separate supermarket bill at the end of the night.',
            'For Thanksgiving that also means the unglamorous parts: thawing or brining the bird, making stock for the gravy the day before if the menu needs it, and packing the leftovers into labelled containers so Friday lunch is already done. If you want to see how a normal villa night runs on the island, start with [private chef Oahu](/).',
          ],
        },
        {
          heading: 'Turkey on an island: ordering, oven size and timing',
          paras: [
            'The bird is the part that catches visitors out. Whole turkeys get scarce close to the holiday, so we order as soon as the date is confirmed rather than hoping the shelf is full on Wednesday. If a frozen bird is the only option, it needs days in the fridge to thaw safely, which is another reason the shopping cannot wait until you land.',
            'Then there is the oven. Many rental and condo ovens are standard home size, and some are smaller. A very large turkey plus stuffing, sweet potatoes and pie all competing for one oven is a recipe for a late dinner. A chef will often roast two smaller birds, split the turkey so it cooks faster, or roast breast and legs separately and use the stovetop and grill for sides. Our [condo load-in notes](/blog/condo-load-in) cover the practical side of cooking in a high-rise kitchen.',
            'Tell us what the kitchen has when you send the brief: oven size, number of burners, a grill on the lānai, and how many plates and serving dishes the house provides. A photo of the kitchen is genuinely helpful.',
          ],
        },
        {
          heading: 'An Oʻahu Thanksgiving menu that still tastes like home',
          paras: [
            'Most families want the classics on the table: roast turkey, gravy, stuffing, mashed potatoes, cranberry sauce, green beans and pumpkin pie. We cook those properly, and we do not swap them out to make the menu look more exotic.',
            'Where Oʻahu comes in is around the edges. Plenty of local tables put rice next to the stuffing, and purple Okinawan sweet potato is a common island side. Poke or a fish crudo makes an easy pūpū while the turkey rests, slow-cooked pork can sit beside the bird for the guests who want it, and a coconut haupia dessert can share the table with the pumpkin pie. We name fish as what it is on the day and do not invent farm names; our [fish species notes](/blog/fish-species) explain how we handle that.',
            'Dietary needs belong in the first message. A gluten-free stuffing, a vegetarian main and a nut-free dessert are easy to plan in advance and hard to improvise on the afternoon.',
          ],
        },
        {
          heading: 'Group size: a chef dinner or staffed catering',
          paras: [
            'For a family table of six to about a dozen, one chef cooking and serving family-style is usually right. Platters go down the middle, people help themselves, and the chef keeps the kitchen moving.',
            'Past that, or when two or three families combine, it becomes a staffed event. Our [Oahu catering](/catering) page covers 10 to 75 guests, with servers at $80 an hour and a sous-chef at $105 an hour on four- to five-hour minimums, listed as their own lines. For a big Thanksgiving crowd a [buffet](/catering/buffet) or [family-style](/catering/family-style) service usually works better than plated courses, because people want seconds.',
          ],
        },
        {
          heading: 'Timing the day around traffic and the house',
          paras: [
            'Decide the dinner hour first and work backwards. A Thanksgiving dinner served at four in the afternoon needs the chef in the kitchen from late morning, with the turkey in the oven early. An evening dinner gives the family a beach afternoon and moves the kitchen work later.',
            'Location matters on Oʻahu. A house in Kahala or Hawaiʻi Kai is a short drive from the Honolulu shops, while a North Shore or Turtle Bay rental is a longer haul, and the published travel line for that zone starts from $75. Ko Olina and Kailua sit in between. We plan the shopping and arrival around the address, which is why the address goes on the quote form first.',
          ],
        },
        {
          heading: 'What Thanksgiving dinner on Oʻahu costs with us',
          paras: [
            'Signature dinners on Oʻahu are published at $195–$290 a guest with groceries included, for a minimum party of six. A simpler table runs $145–$195 a guest for eight or more. If you would rather have a chef and an assistant for the day, Stay Chef starts from $1,250 a day for one meal, with groceries billed at cost and receipts handed over.',
            'A 20% service charge and Hawaiʻi GET are added as their own lines, a 50% deposit locks the date, and gratuity is voluntary. The full rate card is on [Oahu private chef cost](/pricing). The written quote is the confirmed total for your date, so there is nothing to guess.',
          ],
        },
        {
          heading: 'How to get Thanksgiving on the calendar',
          paras: [
            'Send the house address, the date, the number of adults and children, any allergies and the dinner time you have in mind. Two lines about the family helps too: whether it is a quiet table for eight or a loud one for thirty. You can use the quote form or message us on WhatsApp at +1 808-468-7748.',
            'If you are still choosing between a dinner at the house and a staffed party, start with the guest count. Up to about a dozen is a chef dinner, and beyond that we quote it as catering. Either way, the sooner the date is in, the easier the turkey is to find.',
          ],
        },
      ],
      faqs: [
        {
          q: 'When is Thanksgiving in 2026?',
          a: 'Thanksgiving 2026 is Thursday 26 November. Send your date and guest count as early as you can, because holiday dates fill first.',
        },
        {
          q: 'Can a private chef cook Thanksgiving dinner at our Oʻahu rental?',
          a: 'Yes. The chef plans the menu, shops, cooks in the house kitchen, serves and cleans up. Leftovers are packed and labelled if you want them.',
        },
        {
          q: 'Will a whole turkey fit in a vacation-rental oven?',
          a: 'Sometimes not with all the sides. The chef may roast two smaller birds or cook breast and legs separately and use the stovetop and grill. Tell us the oven size in the brief.',
        },
        {
          q: 'How much does a chef-cooked Thanksgiving on Oʻahu cost?',
          a: 'Signature dinners are $195–$290 a guest with groceries included, minimum six. Stay Chef starts from $1,250 a day with groceries at cost. Service charge and GET are separate lines.',
        },
        {
          q: 'Can you add island dishes such as poke or Okinawan sweet potato?',
          a: 'Yes. We cook the classic menu and add island sides or pūpū you want, with fish named honestly on the day.',
        },
        {
          q: 'We have 30 people. Is that still a chef dinner?',
          a: 'No. From about 10 to 75 guests we quote it as Oahu catering, with servers and a sous-chef as separate hourly lines and a buffet or family-style service.',
        },
      ],
      related: [
        { path: '/blog/christmas-in-honolulu-dinner', label: 'Christmas in Honolulu' },
        { path: '/blog/new-years-eve-honolulu-dinner', label: 'New Year’s Eve in Honolulu' },
        { path: '/private-chef', label: 'Private chef Honolulu' },
        { path: '/catering', label: 'Oahu catering' },
        { path: '/', label: 'Private chef Oahu' },
        { path: '/pricing', label: 'Oahu private chef cost' },
        { path: '/blog/family-reunions', label: 'Family reunions' },
      ],
    },
    {
      feature: true,
      slug: 'new-years-eve-honolulu-dinner',
      keyword: 'new years eve honolulu',
      datePublished: '2026-10-20',
      name: 'New Year’s Eve in Honolulu',
      h1: 'New Year’s Eve in Honolulu — dinner at the house, midnight on the lānai.',
      title: 'New Year’s Eve Honolulu — Dinner at Your House | myCHEF',
      description:
        'New Year’s Eve in Honolulu: restaurant night or dinner at your rental, Oʻahu firecracker rules, a local-style menu, timing around midnight and real prices.',
      lede:
        'New Year’s Eve 2026 is a Thursday, and 1 January 2027 is a Friday, so many families get a long weekend on Oʻahu. If you are spending it in a house or a residence rather than a hotel room, this is how to plan the night without anyone stuck in traffic at eleven o’clock.',
      photo: 'dinHonolulu',
      body: [],
      sections: [
        {
          heading: 'What New Year’s Eve in Honolulu is really like',
          paras: [
            'Search for New Year’s Eve in Honolulu and you mostly find event listings: hotel galas, fireworks cruises, rooftop parties and threads asking whether Waikīkī or Ko Olina is the better place to be at midnight. Those are real options, and for a couple who want a dance floor they can be the right one.',
            'What the listings rarely mention is how the night feels away from the ticketed events. On Oʻahu, New Year’s Eve is also a family holiday at home. Seafood counters get long lines on the 31st as people collect poke and sashimi for the table, families gather in backyards, and once firecrackers are allowed the neighbourhoods get loud and smoky. Knowing that helps you decide where your group should spend the evening.',
          ],
        },
        {
          heading: 'A ticketed event or a dinner at the house?',
          paras: [
            'A restaurant or hotel event suits a small group staying in Waikīkī within walking distance. You get a set menu, a countdown and no dishes. The trade-offs are fixed seating times, holiday menus priced for the night, and a walk or ride back through crowded streets after midnight.',
            'A dinner at the house suits families and groups of friends sharing a Kahala, Diamond Head, Kailua or Ko Olina rental. Children can eat early and still be awake for midnight, grandparents do not have to move, nobody drives after the champagne, and the lānai becomes your viewing spot. That is the evening a [private chef Honolulu](/private-chef) night is built for: the chef shops, cooks in your kitchen, serves and leaves the kitchen clean before the countdown.',
          ],
        },
        {
          heading: 'Oʻahu firecracker rules every visitor should know',
          paras: [
            'Fireworks rules on Oʻahu are stricter than many visitors expect. According to the Honolulu Fire Department, fountains, sparklers, aerial fireworks and other consumer fireworks are illegal on the island. Firecrackers are allowed only with a permit, which must be bought online by someone 18 or older with matching photo ID, at least ten days before use. For New Year’s Eve that makes 21 December the last day to buy one. The permit fee is $25 plus a small service fee, and each permit covers up to 5,000 firecrackers.',
            'On New Year’s Eve, permitted firecrackers may be used only from 9 p.m. on 31 December until 1 a.m. on 1 January. New Year’s Eve permits are picked up in person at a Satellite City Hall, and a permit does not guarantee that firecrackers will be in stock. For most visiting families the simpler answer is to skip them, watch the public displays and leave the noise to the neighbours. Rules change, so check the Honolulu Fire Department’s own pages before you plan anything.',
            'Two practical notes for a dinner at the house. Pets and small children may need a quiet room after nine, and if the neighbourhood gets smoky, plan dessert indoors rather than on the lānai.',
          ],
        },
        {
          heading: 'Where to watch midnight from an Oʻahu house',
          paras: [
            'Public fireworks displays are announced by hotels and organisers closer to the date, so we do not guess this year’s schedule. What we can tell you is that the address decides the view. A high-floor residence in Waikīkī or Kakaʻako looks across the city, a Diamond Head or Kahala house sees its own neighbourhood’s firecrackers, and a Ko Olina or North Shore rental is a quieter night altogether.',
            'If watching a particular display matters to you, check which way the lānai faces before you book the house, and plan the dinner around the hour rather than around a drive into town. Traffic and parking near the busiest viewing spots are hard work on the 31st.',
          ],
        },
        {
          heading: 'A New Year’s Eve menu that tastes like Oʻahu',
          paras: [
            'Local New Year’s tables lean on seafood, and that is a good place to start. Poke and sashimi make an easy first course while people arrive, followed by a grilled fish or a slow-roasted main, rice, island greens and something sweet for midnight. Many families on Oʻahu keep Japanese New Year traditions too, so mochi or a pot of ozoni soup for New Year’s morning is a lovely addition if your group wants it.',
            'Fish is named as what it is on the day, never promised months ahead. Seafood demand is high on the 31st, so the chef plans the order early and keeps a second option ready. Our [fish species notes](/blog/fish-species) explain how we handle that.',
            'Dietary needs belong in the first message: shellfish allergies, vegetarian guests and children’s plates are easy to plan in advance and hard to improvise on the busiest food night of the year.',
          ],
        },
        {
          heading: 'Timing the night around midnight',
          paras: [
            'Decide when you want dinner and work back from it. An early family seating, with food on the table around six and dessert at eight, lets the youngest guests sleep before midnight. A later dinner for adults can run as a long, slow tasting menu with a pause before the countdown. Either way the chef’s work finishes before the firecracker hours start, so the kitchen is calm by the time you want to be outside.',
            'If the night is a party rather than a dinner, a bartender helps. The Oʻahu [mobile bar](/mobile-bar) is published from $975 for four hours plus $65 a guest, with spirits billed at cost or brought by you, and it stacks with a chef dinner.',
          ],
        },
        {
          heading: 'Group size: a chef dinner or staffed catering',
          paras: [
            'For six to about a dozen guests, one chef cooking and serving family-style or plated courses is usually right. If you are hosting twenty, forty or more friends for a New Year’s party, it becomes a staffed event. Our [Oahu catering](/catering) page covers 10 to 75 guests, with servers at $80 an hour and a sous-chef at $105 an hour on four- to five-hour minimums, shown as their own lines.',
            'Bigger groups often want food that people can graze between conversations rather than a seated meal. Ask about a [buffet](/catering/buffet) or family-style service and a late-night snack round after midnight.',
          ],
        },
        {
          heading: 'What a New Year’s Eve dinner on Oʻahu costs with us',
          paras: [
            'Signature dinners on Oʻahu are published at $195–$290 a guest with groceries included, for a minimum party of six. A simpler table runs $145–$195 a guest for eight or more, and the premium band is $290–$425 a guest for a longer menu. If you want a chef and an assistant for the day, Stay Chef starts from $1,250 a day for one meal, with groceries at cost and receipts handed over. Houses on the North Shore or at Turtle Bay add a published travel line from $75.',
            'A 20% service charge and Hawaiʻi GET are added as their own lines, a 50% deposit locks the date, and gratuity is voluntary. The full rate card is on [Oahu private chef cost](/pricing), and the written quote is the confirmed total for your date.',
          ],
        },
        {
          heading: 'How to get New Year’s Eve on the calendar',
          paras: [
            'Holiday dates are the first to fill, so send the house address, the number of adults and children, any allergies, the dinner time and whether you want a bar as early as you can. You can use the quote form or message us on WhatsApp at +1 808-468-7748.',
            'If you are still choosing between an event in town and a night at the house, start with [private chef Oahu](/) for how a villa evening runs on the island, and plan New Year’s Day too: a [day-after brunch](/blog/day-after-brunch) at the house is a good way to start 2027.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What day is New Year’s Eve 2026?',
          a: 'New Year’s Eve is Thursday 31 December 2026, and New Year’s Day is Friday 1 January 2027.',
        },
        {
          q: 'Are sparklers or fireworks legal at an Oʻahu rental?',
          a: 'The Honolulu Fire Department says fountains, sparklers and aerial fireworks are illegal on Oʻahu. Firecrackers need a permit bought at least ten days ahead and may be used from 9 p.m. on 31 December to 1 a.m. on 1 January.',
        },
        {
          q: 'Can a private chef cook New Year’s Eve dinner at our Honolulu house?',
          a: 'Yes. The chef plans the menu, shops, cooks in your kitchen, serves and leaves the kitchen clean, usually before the firecracker hours begin.',
        },
        {
          q: 'How much does a New Year’s Eve chef dinner on Oʻahu cost?',
          a: 'Signature dinners are $195–$290 a guest with groceries included, minimum six. Stay Chef starts from $1,250 a day with groceries at cost. Service charge and GET are separate lines.',
        },
        {
          q: 'Can you add a bartender for midnight?',
          a: 'Yes. The Oʻahu mobile bar is from $975 for four hours plus $65 a guest, with spirits billed at cost or brought by you.',
        },
        {
          q: 'We are hosting 40 people. Is that still a chef dinner?',
          a: 'No. From about 10 to 75 guests we quote it as Oahu catering, with servers and a sous-chef as separate hourly lines.',
        },
      ],
      related: [
        { path: '/blog/christmas-in-honolulu-dinner', label: 'Christmas in Honolulu' },
        { path: '/private-chef', label: 'Private chef Honolulu' },
        { path: '/catering', label: 'Oahu catering' },
        { path: '/', label: 'Private chef Oahu' },
        { path: '/pricing', label: 'Oahu private chef cost' },
        { path: '/blog/thanksgiving-dinner-oahu', label: 'Thanksgiving dinner on Oʻahu' },
      ],
    },
    {
      feature: true,
      slug: 'christmas-in-honolulu-dinner',
      keyword: 'christmas in honolulu',
      datePublished: '2026-10-21',
      name: 'Christmas in Honolulu',
      h1: 'Christmas in Honolulu — City Lights, a beach morning and dinner at the house.',
      title: 'Christmas in Honolulu — Dinner at Your Rental | myCHEF',
      description:
        'Christmas in Honolulu 2026: City Lights dates, what Christmas Day is really like, and how to plan a chef-cooked Christmas dinner at your Oʻahu rental.',
      lede:
        'Christmas in Honolulu means warm evenings, the City Lights at Honolulu Hale and a beach morning on the 25th. Christmas Day 2026 is a Friday, so many families get a long weekend on Oʻahu. If you are staying in a house or a residence, this guide covers the season, the busy days and how to get a proper Christmas dinner on the table.',
      photo: 'dinKahala',
      body: [],
      sections: [
        {
          heading: 'What is Christmas in Honolulu really like?',
          paras: [
            'It is warm, it is busy and it is more festive than first-timers expect. Hotels put up trees in their lobbies, Waikīkī gets holiday events, and downtown Honolulu runs its own month-long display at Honolulu Hale. December is one of the busiest stretches of the year for visitors, so flights, rental cars, restaurant tables and private chef dates all fill earlier than in autumn.',
            'For locals, Christmas is mostly a family day at home. Many people spend the morning at the beach or in the backyard, and the table often mixes a roast or ham with sushi, poke and rice. A visiting family can borrow that rhythm: the day outside, the evening at the house.',
          ],
        },
        {
          heading: 'Honolulu City Lights 2026: dates and how to fit it in',
          paras: [
            'Honolulu City Lights is the island’s best-known Christmas display, and it is free. According to the City and County of Honolulu, the 2026 season opens on Saturday 5 December with a block party from 4 p.m. on Punchbowl Street and the Frank F. Fasi Civic Center Grounds. The Public Workers’ Electric Light Parade leaves ʻAʻala Park at 6 p.m., and the holiday tree at Honolulu Hale is lit as the parade passes. This year’s theme is “Christmas in the Country”.',
            'After opening night the displays stay up through December. The Friends of Honolulu City Lights list the Civic Center grounds as open daily from 8 a.m. to 10 p.m., with the big tree and outdoor lights switched on nightly at about 6 p.m. Opening night is crowded, and streets in Chinatown and downtown close for the parade. A family with small children may prefer a weeknight visit, then dinner back at the house rather than a late table in town. Check hnlcitylights.com for this year’s schedule before you go.',
          ],
        },
        {
          heading: 'Where to stay for Christmas on Oʻahu',
          paras: [
            'Your address shapes the whole holiday. A Waikīkī residence puts you on foot for hotel events and the beach, but the kitchen is usually compact and parking is tight. Kahala and Diamond Head houses are close to town and quieter at night. Kailua and Lanikai rentals feel like a neighbourhood Christmas on the windward side, and Ko Olina is calm and sunny, though it is a longer drive into Honolulu at rush hour.',
            'Whichever you choose, plan the busy days around traffic. The H-1 and the roads into town are slow at peak times, and a family that has spent the afternoon at Honolulu Hale or the beach does not want an hour in the car before a restaurant booking. That is one reason so many groups keep Christmas Eve and Christmas night at the house.',
          ],
        },
        {
          heading: 'Christmas dinner in Honolulu: restaurant or the house?',
          paras: [
            'A hotel buffet or a set Christmas menu suits a couple or a small group staying in Waikīkī. You get the decorations, no dishes and a short walk home. The trade-offs are fixed sittings, holiday pricing, and tables that go early. Tables for the 24th and 25th go early, and large families are hard to seat together.',
            'A dinner at the house suits families and friends sharing a rental. Grandparents stay put, children open presents in the afternoon and eat when they are hungry, and nobody drives after dinner. That is the evening a [private chef Honolulu](/private-chef) dinner is built for. The chef writes the menu with you, shops, cooks in your kitchen, serves at the table and leaves the kitchen clean.',
          ],
        },
        {
          heading: 'A Christmas menu with Oʻahu in it',
          paras: [
            'Most families want the dish they eat at home plus something they can only get here. A roast, a glazed ham or a prime rib fits alongside a poke course, local fish, sweet potato and a salad with island greens. We name fish as what it is on the day rather than promising a species weeks ahead; our [fish species notes](/blog/fish-species) explain why.',
            'Tell us about allergies, children’s plates and any family recipe you want on the table. If the rental has a small oven, the chef will plan around it with the stovetop and the lānai grill. Christmas morning can be its own booking too: our [day-after brunch notes](/blog/day-after-brunch) cover a slower breakfast or brunch at the house.',
          ],
        },
        {
          heading: 'Bigger groups: a chef dinner or staffed catering',
          paras: [
            'A family of eight to twelve is a chef dinner. Once Christmas becomes a reunion or a party of twenty or more, with a buffet, servers and a bar, it is a staffed event. [Oahu catering](/catering) covers villa and residence events from Honolulu to Ko Olina, with servers at $80 an hour and a sous-chef at $105 an hour on four- to five-hour minimums, each listed as its own line.',
            'A holiday cocktail hour on the lānai works well before dinner. Our mobile bar on Oʻahu starts from $975 for a four-hour package plus $65 a guest, with spirits billed at cost or brought by you.',
          ],
        },
        {
          heading: 'What a Christmas dinner on Oʻahu costs with us',
          paras: [
            'Signature dinners on Oʻahu are published at $195–$290 a guest with groceries included, for a minimum party of six. A simpler menu runs $145–$195 a guest for eight or more, and a premium menu $290–$425. If you want a chef for several holiday meals, Stay Chef days for a chef and an assistant start from $1,250 a day for one meal, with groceries billed at cost and receipts handed over. North Shore and Turtle Bay houses add a published travel line from $75.',
            'A 20% service charge and Hawaiʻi GET are added as their own lines, a 50% deposit locks the date, and gratuity is voluntary. The full breakdown is on [Oahu private chef cost](/pricing), and the written quote is the confirmed total.',
          ],
        },
        {
          heading: 'How to get Christmas dates on the calendar',
          paras: [
            'Christmas Eve and Christmas Day are among the first dates to fill on Oʻahu. Send the rental address, the date, the number of adults and children, any allergies and the dinner time you have in mind. You can use the quote form or message us on WhatsApp at +1 808-468-7748, and we reply with a written quote.',
            'If you are on the island for the whole holiday week, ask about Christmas and New Year’s Eve together. Our [New Year’s Eve in Honolulu guide](/blog/new-years-eve-honolulu-dinner) covers the second big night. For the full picture of villa dinners across the island, start with [private chef Oahu](/).',
          ],
        },
      ],
      faqs: [
        {
          q: 'When does Honolulu City Lights start in 2026?',
          a: 'Opening night is Saturday 5 December 2026, with a block party from 4 p.m., the Electric Light Parade from 6 p.m. and the tree lighting at Honolulu Hale. Displays stay up through December.',
        },
        {
          q: 'Is Honolulu busy at Christmas?',
          a: 'Yes. Late December is one of the busiest periods for visitors, so restaurant tables, rental cars and chef dates book earlier than usual.',
        },
        {
          q: 'Can a private chef cook Christmas dinner at our Honolulu rental?',
          a: 'Yes. The chef plans the menu with you, shops, cooks in your kitchen, serves and cleans up. Send the address, date, headcount and allergies for a written quote.',
        },
        {
          q: 'How much does a chef-cooked Christmas dinner cost on Oʻahu?',
          a: 'Signature dinners are $195–$290 a guest with groceries included, minimum six. Service charge and GET are separate lines and a 50% deposit holds the date.',
        },
        {
          q: 'Can you include local dishes in a Christmas menu?',
          a: 'Yes. Poke, local fish, sweet potato and island greens sit well beside a roast or a ham. Fish is named as what is available on the day.',
        },
        {
          q: 'We have 25 people for Christmas. Is that still a chef dinner?',
          a: 'A group that size is usually quoted as Oʻahu catering, with servers and a sous-chef as separate hourly lines.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'Private chef Honolulu' },
        { path: '/catering', label: 'Oahu catering' },
        { path: '/', label: 'Private chef Oahu' },
        { path: '/pricing', label: 'Oahu private chef cost' },
        { path: '/blog/new-years-eve-honolulu-dinner', label: 'New Year’s Eve in Honolulu' },
      ],
    },
    {
      feature: true,
      slug: 'waikiki-restaurants-dining-guide',
      keyword: 'waikiki restaurants',
      datePublished: '2026-10-22',
      name: 'Waikīkī restaurants guide',
      h1: 'Waikīkī restaurants — where to eat, when to book and when to stay in.',
      title: 'Waikiki Restaurants — Where to Eat & Book | myCHEF',
      description:
        'Waikiki restaurants for visitors: oceanfront and sunset tables, where locals eat nearby, booking busy weeks and when a chef dinner in your condo is better.',
      lede:
        'Waikīkī has more restaurants packed into a few walkable blocks than anywhere else in Hawaiʻi, from beachfront hotel dining rooms to noodle counters and food courts. This guide explains how the neighbourhood works for visitors, where people who live on Oʻahu go to eat nearby, how to book in the busy weeks, and when a dinner cooked in your condo or rental is the easier night.',
      photo: 'waikiki',
      body: [],
      sections: [
        {
          heading: 'What “Waikīkī restaurants” really covers',
          paras: [
            'Most of Waikīkī’s dining sits along two streets. Kalākaua Avenue runs beside the beach and carries the hotel restaurants, oceanfront terraces and shopping-centre dining rooms. Kūhiō Avenue, a block inland, has more casual places, ramen and izakaya-style counters, and the late-night food that keeps the neighbourhood busy. At the Diamond Head end, near Kapiʻolani Park, things get quieter; at the other end, the road leads toward Ala Moana and Kakaʻako.',
            'For a visitor, the honest summary is: you will never be short of somewhere to eat in Waikīkī. The harder questions are which tables are worth booking, how to avoid an hour-long wait at seven o’clock, and what to do with a group of ten that wants to sit together.',
          ],
        },
        {
          heading: 'Oceanfront and sunset tables',
          paras: [
            'The most searched Waikīkī tables are the ones with the ocean in front of them, mostly in the beachfront hotels along Kalākaua. They are worth booking for one special night. Ask for an outdoor or front-row table when you reserve, and time it for sunset: in late November and December the sun sets before six, in summer closer to seven, so a 5:30 booking in winter is a different evening from one in July.',
            'Expect to pay for the view, and expect those rooms to be full in holiday weeks. If the view is the point, consider breakfast or an early cocktail at the water and dinner somewhere less crowded.',
          ],
        },
        {
          heading: 'Where do locals eat near Waikīkī?',
          paras: [
            'Mostly just outside it. Kapahulu Avenue, which starts at the Diamond Head end of Waikīkī, and Kaimukī a few minutes further up have long been neighbourhood eating streets. Kakaʻako and downtown Honolulu, including Chinatown, are a short ride west and have newer restaurants, bars and markets. Our short notes on [Kakaʻako](/blog/dining-in-kakaako) and [downtown Honolulu](/blog/dining-in-downtown) cover the kitchens there.',
            'Parking is the main reason many residents avoid Waikīkī for dinner: garages are expensive and street spaces are scarce. If you are staying in Waikīkī that works in your favour, because the neighbourhoods next door are a short taxi or rideshare away.',
          ],
        },
        {
          heading: 'Booking in busy weeks and with a big group',
          paras: [
            'Waikīkī is busy most of the year, and the weeks around Thanksgiving, Christmas and New Year are the busiest. Book the dinners that matter before you fly, especially for Friday and Saturday nights. Walk-in tables are easier before six and after eight thirty.',
            'Large groups are the real challenge. A table for ten at seven on a Saturday is the hardest booking in the neighbourhood, and once you add small children, a late flight or a guest who needs a strict allergy menu, a restaurant night gets complicated. That is where a dinner at your place starts to make sense.',
          ],
        },
        {
          heading: 'Can a chef cook in a Waikīkī hotel room?',
          paras: [
            'Usually not. Most Waikīkī hotel rooms have no cooktop, and a chef cannot cook a proper dinner on a coffee maker. We cook in residences, condos and rentals that have a working cooktop or range and a table for your group, and we say no before a deposit when the kitchen is not there. Our [private chef Waikīkī](/waikiki) page and [Waikīkī residence notes](/blog/dining-in-waikiki) explain how freight elevators, quiet hours and building paperwork are arranged with the tower before anyone shops.',
            'If your group is in a hotel, the better plan is often one dinner at a house nearby, for example in Kahala or Diamond Head, rented for the occasion or belonging to a friend or family member.',
          ],
        },
        {
          heading: 'When a dinner at the condo beats going out',
          paras: [
            'Big families, mixed diets, children who eat at five, a birthday, a first night after a long flight, or a day that ends late after the North Shore all point the same way. A [private chef Honolulu](/private-chef) dinner brings the restaurant to your table: the chef plans the menu with you, shops, cooks in your kitchen, serves and leaves the kitchen clean, and nobody has to find a taxi at ten o’clock.',
            'Most visitors mix the two. Book one or two Waikīkī restaurants you really want, then keep the group nights at home. Birthdays work especially well this way; our [birthday dinners](/events/birthdays) page shows how a house birthday runs.',
          ],
        },
        {
          heading: 'Parties, reunions and wedding-week dinners',
          paras: [
            'A welcome dinner for twenty, a reunion buffet or a party on a Kahala lawn is a staffed event rather than a chef dinner. [Oahu catering](/catering) covers staffed villa and residence events, with servers at $80 an hour and a sous-chef at $105 an hour on four- to five-hour minimums, each shown as its own line. For a celebration with cocktails, the Oʻahu mobile bar is published from $975 for four hours plus $65 a guest, with spirits billed at cost or brought by you. Wedding weekends have their own page: [wedding catering Oahu](/weddings).',
          ],
        },
        {
          heading: 'What a dinner at your Waikīkī residence costs with us',
          paras: [
            'Signature dinners on Oʻahu are published at $195–$290 a guest with groceries included in that band, for a minimum party of six, and a simpler menu runs $145–$195 a guest for eight or more. Dinner for two starts from $675. If you want a chef for several days of your stay, Stay Chef days for a chef and an assistant start from $1,250 a day for one meal, with groceries billed at cost and receipts handed over.',
            'Waikīkī and Honolulu are base coverage; only the North Shore adds a published surcharge from $75. A 20% service charge and Hawaiʻi GET up to 4.712% are added as their own lines, a 50% deposit locks the date and gratuity is voluntary. The full rate card is on [Oahu private chef cost](/pricing).',
          ],
        },
        {
          heading: 'How to plan your Waikīkī nights',
          paras: [
            'Decide which nights are restaurant nights and which are house nights before you fly. Then send us the residence address and tower name, the dates, the number of adults and children, allergies and the nights you want cooked. Use the quote form or message us on WhatsApp at +1 808-468-7748, and we reply with a written quote. For villa dinners across the island, from the Gold Coast to Ko Olina, see [private chef Oahu](/).',
          ],
        },
      ],
      faqs: [
        {
          q: 'Where do locals eat near Waikīkī?',
          a: 'Many go to Kapahulu Avenue and Kaimukī next door, or to Kakaʻako, downtown and Chinatown a short ride west. Parking in Waikīkī keeps many residents away at night.',
        },
        {
          q: 'Do I need reservations for Waikīkī restaurants?',
          a: 'For oceanfront and popular dinner rooms, yes, especially on weekends and in holiday weeks. Walk-in tables are easier before six and after eight thirty.',
        },
        {
          q: 'When is sunset in Waikīkī?',
          a: 'In late November and December the sun sets before 6 p.m.; in summer it is closer to 7 p.m. Book sunset tables around that time.',
        },
        {
          q: 'Can a private chef cook in my Waikīkī hotel room?',
          a: 'Usually not, because most hotel rooms have no cooktop. We cook in residences, condos and rentals with a working range and a table, and decline before a deposit when there is no kitchen.',
        },
        {
          q: 'How much does a chef dinner in a Waikīkī condo cost?',
          a: 'Signature dinners on Oʻahu are $195–$290 a guest with groceries included, minimum six. Service charge and GET are separate lines and a 50% deposit holds the date.',
        },
        {
          q: 'Is Waikīkī good for a big group dinner?',
          a: 'It can be hard. Large tables at peak hours are the toughest booking, so many groups book one restaurant night and have a chef cook the other group dinners at their rental.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'Private chef Honolulu' },
        { path: '/catering', label: 'Oahu catering' },
        { path: '/', label: 'Private chef Oahu' },
        { path: '/pricing', label: 'Oahu private chef cost' },
        { path: '/blog/ko-olina-restaurants-dining-guide', label: 'Ko Olina restaurants guide' },
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
        { path: '/blog/kaanapali-restaurants-dining-guide', label: 'Kāʻanapali restaurants guide' },
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

    {
      feature: true,
      slug: 'thanksgiving-dinner-maui',
      keyword: 'thanksgiving dinner maui',
      datePublished: '2026-10-19',
      name: 'Thanksgiving dinner on Maui',
      h1: 'Thanksgiving dinner on Maui — cooked in your villa, not a buffet line.',
      title: 'Thanksgiving Dinner Maui — Cooked at Your Villa | myCHEF',
      description:
        'Thanksgiving dinner on Maui: resort buffet, pick-up meal or a chef in your villa. Wailea, Kīhei and West Maui logistics, menus, timing and real prices.',
      lede:
        'Thanksgiving 2026 is Thursday 26 November. If your family has a Maui villa or condo for the week, here is how to get a proper holiday dinner on the table without anyone giving up the beach to cook it.',
      photo: 'kaanapali',
      body: [],
      sections: [
        {
          heading: 'What people planning Thanksgiving on Maui actually ask',
          paras: [
            'Search for Thanksgiving dinner on Maui and the results are mostly the same few threads: which places are open on the day, which resorts run a buffet, and whether anyone sells a pre-prepared meal you can collect. Those are good questions, and the answers change every year. The common thread is that holiday tables on Maui fill early, and visitors who leave it until they land often end up eating late or eating somewhere they did not choose.',
            'If you are staying in a house with a real kitchen, there is a fourth option that rarely shows up in those threads: having the dinner cooked where you are staying. That is what we do, so this guide is honest about when it is the right call and when a restaurant is simpler.',
          ],
        },
        {
          heading: 'Three ways to do the meal on Maui',
          paras: [
            'A resort or restaurant holiday menu is easiest for couples and small groups, especially if you are staying in Kāʻanapali or Wailea and can walk to dinner. You get a fixed seating and a set menu, and there are no leftovers to take home.',
            'A pick-up meal works if somebody in the group enjoys reheating and serving. Bear in mind that the house oven has to warm several trays at once, and someone still carves, plates and washes up.',
            'A chef at the villa suits larger family groups, multi-generation trips and anyone who would rather not drive after dinner. On Maui that last point matters: the roads between South Maui and West Maui are long after dark, and a holiday evening is not the night to be on them. A [personal chef Maui](/private-chef) dinner keeps everyone at the table for as long as they like.',
          ],
        },
        {
          heading: 'Where you are staying changes the plan',
          paras: [
            'Wailea and Mākena villas usually have generous kitchens, outdoor space and room for a long table, which makes them the easiest houses to cook a full Thanksgiving in. Kīhei is more often condos and vacation homes, where the kitchen is smaller and the menu needs to be planned around one oven. Our [Kīhei restaurants guide](/blog/kihei-restaurants-dining-guide) covers that part of the coast if you are splitting the week between eating out and eating in.',
            'West Maui houses in Kāʻanapali, Nāpili and Kapalua are further from the larger grocery stores in central Maui, so the shopping is planned a day ahead rather than on the morning. Upcountry houses carry a published travel line from $75. None of this is a problem; it just means the address shapes the schedule, which is why we ask for it first.',
          ],
        },
        {
          heading: 'A Maui Thanksgiving menu',
          paras: [
            'Start with what the family expects: roast turkey, gravy, stuffing, mashed potatoes, cranberry, a green vegetable and pie. Those dishes are the reason people book a Thanksgiving dinner, and we cook them straight.',
            'Maui adds a lot around them. Upcountry greens and herbs make a better salad than anything flown in, sweet onions grown on the slopes of Haleakalā are a natural fit for stuffing and gravy, and a crudo or poke made with fish landed that week is an easy starter while the bird rests. If you plan to visit a market during the week, our [Maui farmers market guide](/blog/maui-farmers-market-villa-week) explains how a chef uses what you bring back, and the markets are worth checking the days before the holiday because hours can change.',
            'Tell us about dietary needs in the first message. A vegetarian main that is more than a plate of sides, gluten-free gravy and a nut-free dessert are easy when they are planned, and difficult to improvise on Thursday afternoon.',
          ],
        },
        {
          heading: 'The bird, the oven and the kitchen kit',
          paras: [
            'Whole turkeys get harder to find the closer you get to the holiday, so we order once the date is confirmed. A frozen bird needs several days to thaw in a fridge, which is one more reason to send the date before you fly.',
            'Rental ovens vary from generous to small. If the oven cannot hold a large bird and the sides together, the chef will roast two smaller turkeys, split the bird so it cooks faster, or move sides to the stovetop and the grill. Let us know what the house has: oven size, burners, a lānai grill, and enough plates and platters for the group. A quick photo of the kitchen saves a lot of questions.',
          ],
        },
        {
          heading: 'Family-style at the table, or a staffed party',
          paras: [
            'For six to about a dozen people, one chef cooking and serving family-style is the classic Thanksgiving: platters down the middle, second helpings, nobody standing in a line.',
            'When the group is bigger, or two families are combining in one house, we quote it as [Maui catering](/catering) for roughly 10 to 75 guests. Food is published from $225 a guest, and servers at $80 an hour and a sous-chef at $105 an hour are listed separately on four- to five-hour minimums, so you can see what the staff cost.',
          ],
        },
        {
          heading: 'A sample Thanksgiving day at a Wailea villa',
          paras: [
            'Morning: the family heads to the beach. The chef has already shopped the day before, the turkey has been brining overnight, and stock for the gravy is in the fridge.',
            'Late morning to mid-afternoon: the chef arrives, the bird goes in, and the sides are prepped in order so the oven is never fighting itself. Pūpū go out on the lānai as people come back sandy and hungry.',
            'Late afternoon: dinner is carved and served family-style as the light drops toward the west. Pie comes out after a break. The kitchen is cleaned, leftovers are packed and labelled, and Friday is free. If the family wants a slow morning after the big meal, our [day-after brunch notes](/blog/day-after-brunch) cover that one too.',
          ],
        },
        {
          heading: 'What Thanksgiving dinner on Maui costs with us',
          paras: [
            'Signature dinners on Maui are published at $225–$375 a guest with groceries included, for a minimum party of six. A simpler table runs $190–$225 a guest. If you would rather have a chef and an assistant for the day, Stay Chef starts from $1,550 a day for one meal, with groceries billed at cost.',
            'A 20% service charge and Hawaiʻi GET are their own lines, a 50% deposit locks the date and gratuity is voluntary. The full card is on [Maui private chef cost](/pricing), and the written quote is the confirmed total for your date.',
          ],
        },
        {
          heading: 'How to book Thanksgiving on Maui',
          paras: [
            'Send the villa address, the date, the number of adults and children, allergies and the dinner time you want. If you are not sure yet whether it is a chef dinner or a catered party, tell us the guest count and we will say which it is. Use the quote form, or message us on WhatsApp at +1 808-468-7748.',
            'For the overview of how a villa night works on the island, start with [private chef Maui](/). For Thanksgiving, the main thing is simple: the earlier the date is in, the more choice you have.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is it hard to find Thanksgiving dinner on Maui?',
          a: 'Popular restaurant and resort holiday tables fill early, so plan ahead. If your villa has a kitchen, a chef-cooked dinner at the house is another option.',
        },
        {
          q: 'Can a chef cook Thanksgiving dinner in our Maui condo?',
          a: 'Usually, yes. Condo kitchens are smaller, so the chef plans the menu around one oven, the stovetop and a grill if there is one. Tell us what the kitchen has.',
        },
        {
          q: 'Do you include island dishes in a Maui Thanksgiving?',
          a: 'If you want them. We cook the classic menu and can add Upcountry greens, sweet Maui onions in the stuffing, or a fish crudo as a starter.',
        },
        {
          q: 'How much does Thanksgiving dinner with a Maui chef cost?',
          a: 'Signature dinners are $225–$375 a guest with groceries included, minimum six. Stay Chef starts from $1,550 a day with groceries at cost. Service charge and GET are separate.',
        },
        {
          q: 'What if 25 people are coming?',
          a: 'That is a staffed event. We quote it as Maui catering, from $225 a guest plus servers and a sous-chef as separate hourly lines.',
        },
        {
          q: 'Do you travel to West Maui and Upcountry on Thanksgiving?',
          a: 'Yes. West Maui shopping is planned a day ahead, and Upcountry carries a published travel line from $75 on the quote.',
        },
      ],
      related: [
        { path: '/blog/new-years-eve-maui-villa-dinner', label: 'New Year’s Eve in Maui' },
        { path: '/blog/christmas-in-maui-villa-dinner', label: 'Christmas in Maui' },
        { path: '/private-chef', label: 'Personal chef Maui' },
        { path: '/catering', label: 'Maui catering' },
        { path: '/', label: 'Private chef Maui' },
        { path: '/pricing', label: 'Maui private chef cost' },
        { path: '/blog/day-after-brunch', label: 'Day-after brunch' },
      ],
    },
    {
      feature: true,
      slug: 'christmas-in-maui-villa-dinner',
      keyword: 'christmas in maui',
      datePublished: '2026-10-20',
      name: 'Christmas in Maui',
      h1: 'Christmas in Maui — the holiday dinner, cooked in your villa.',
      title: 'Christmas in Maui — Holiday Dinner at Your Villa | myCHEF',
      description:
        'Planning Christmas in Maui? Resort dinner or a chef at the villa, Wailea to Kapalua logistics, whale season, a Maui holiday menu, timing and real prices.',
      lede:
        'Christmas Day 2026 is a Friday, so Christmas week on Maui runs straight into a long weekend and then New Year. If your family has a villa or condo for the holidays, here is how to get a proper Christmas dinner on the table without anyone missing the beach.',
      photo: 'dinMakena',
      body: [],
      sections: [
        {
          heading: 'What families planning Christmas in Maui actually ask',
          paras: [
            'Look at what people search for around a Maui Christmas and the same questions come back every year: is Christmas a good time to visit, what is open on Christmas Day, which area is best for the holidays, and where to eat on the 25th. The honest answers are yes, it is a busy and popular week; plenty is open but tables go early; and the best area is the one where your house is, because nobody wants to drive far on Christmas night.',
            'Most of the guides that rank for Christmas in Maui are lists of activities and resort events. This one is about the meal, because for a family in a rental house that is the part that takes the most planning and causes the most stress if it is left late.',
          ],
        },
        {
          heading: 'Three ways to do Christmas dinner on Maui',
          paras: [
            'The first is a resort or restaurant holiday menu. It works well for couples and small groups staying in a hotel, and it comes with a fixed seating, a set menu and a drive or walk back afterwards. The second is a pick-up or pre-ordered meal that you reheat at the house, which saves the shopping but still leaves someone carving, serving and washing up on Christmas night.',
            'The third is a chef cooking in the villa. The chef plans the menu with you, shops, cooks in your kitchen, serves and leaves the kitchen clean, and the family stays on the lānai. That is the evening a [personal chef Maui](/private-chef) booking is built for, from Wailea and Mākena to Kāʻanapali and Kapalua.',
          ],
        },
        {
          heading: 'Christmas week on Maui: plan the days, then the dinner',
          paras: [
            'Christmas falls at the start of whale season. NOAA’s Hawaiian Islands Humpback Whale National Marine Sanctuary says humpbacks are generally seen in Hawaiʻi from November, with the peak from January through March, so a late-December boat trip may or may not find many whales yet. Morning whale-watching or snorkel trips make for a hungry, sun-tired group by late afternoon, which is exactly when an early dinner at the house is easiest.',
            'If someone in the family wants Haleakalā at sunrise, the National Park Service requires a reservation for each vehicle entering the summit district between 3 a.m. and 7 a.m. These are booked on Recreation.gov up to 60 days ahead, with some released two days before, and they sell out quickly over the holidays. A 3 a.m. start is not the morning to plan a late Christmas dinner, so put the big meal on another day.',
            'Christmas Eve and Christmas Day both work for the main dinner. Many families do a lighter seafood night on the 24th and the big meal on the 25th, or the other way round. Decide early, because the chef’s shopping and the oven plan depend on it.',
          ],
        },
        {
          heading: 'A Maui Christmas menu that still feels like home',
          paras: [
            'Most families want the classics: a roast, whether that is turkey, prime rib or a glazed ham, with potatoes, greens, a gravy or jus and a proper dessert. We cook those properly and do not swap them for something exotic just because you are on an island.',
            'Maui comes in around the edges. Island fish makes a beautiful starter while the roast rests, and Upcountry vegetables and herbs, local citrus and tropical fruit brighten the sides and dessert when the chef can verify them that week. We name fish as what it is on the day and do not invent farm names; our [fish species notes](/blog/fish-species) explain how we handle it.',
            'Tell us about allergies and preferences in the first message. A gluten-free dessert, a vegetarian main and a children’s plate are easy to plan in advance and hard to improvise on Christmas afternoon.',
          ],
        },
        {
          heading: 'Villa kitchens, ovens and holiday shopping',
          paras: [
            'Rental kitchens vary a lot. A large Wailea or Kapalua villa may have a double oven and a grill, while a Kīhei condo often has one standard oven and four burners. A whole bird plus sides plus a pie all competing for one oven is the classic recipe for a late dinner, so the chef will plan around what the house really has: a smaller roast, the grill for vegetables, the stovetop for sides. Our [condo load-in notes](/blog/condo-load-in) cover the practical side of cooking in smaller kitchens.',
            'Shopping is the other reason to book early. Supermarkets on Maui are busy in Christmas week and some keep holiday hours, so the chef orders the main roast and buys the key ingredients ahead rather than hoping the shelf is full on the 24th. Send a photo of the kitchen with the brief if you can. It genuinely helps.',
          ],
        },
        {
          heading: 'Wailea, Kīhei or West Maui: logistics by area',
          paras: [
            'South Maui houses in Wailea, Mākena and Kīhei are close together, and the chef can shop and arrive without a long drive. West Maui houses in Kāʻanapali, Nāpili and Kapalua are a longer haul on the Honoapiʻilani Highway, where a single slow stretch adds real time, so we plan arrival around it.',
            'Upcountry houses in Kula or Makawao add a published travel line from $75, and Pāʻia and the North Shore are quoted with the menu. Put the full address on the quote form first; it changes the timing more than the menu does.',
          ],
        },
        {
          heading: 'Group size: a chef dinner or staffed catering',
          paras: [
            'For a family table of six to about a dozen, one chef cooking and serving family-style is usually right. When two or three families share a big estate for the holidays, or you invite friends over for a Christmas party, it becomes a staffed event. Our [Maui catering](/catering) page covers staffed villa events, with servers at $80 an hour and a sous-chef at $105 an hour on four- to five-hour minimums, listed as their own lines.',
            'For a holiday party, a bartender takes a job off the host. The Maui [mobile bar](/mobile-bar) is published from $1,200 for four hours plus $85 a guest, with spirits billed at cost or brought by you.',
          ],
        },
        {
          heading: 'What Christmas dinner on Maui costs with us',
          paras: [
            'Signature dinners on Maui are published at $225–$375 a guest with groceries included, for a minimum party of six. A simpler table runs $190–$225 a guest. If you would rather have a chef and an assistant for the day, or for the whole holiday week, Stay Chef starts from $1,550 a day for one meal, with groceries billed at cost and receipts handed over.',
            'A 20% service charge and Hawaiʻi GET are their own lines, a 50% deposit locks the date and gratuity is voluntary. The full card is on [Maui private chef cost](/pricing), and the written quote is the confirmed total for your date.',
          ],
        },
        {
          heading: 'How to get Christmas on the calendar',
          paras: [
            'Christmas Eve, Christmas Day and New Year’s Eve are the first dates to fill. Send the villa address, the date, the number of adults and children, allergies and the dinner time you have in mind. You can use the quote form or message us on WhatsApp at +1 808-468-7748.',
            'If you are still deciding how the week should run, start with [private chef Maui](/) for how a villa night works on the island. Many families book Christmas dinner first and then add a [breakfast in the villa](/blog/breakfast-in-the-villa) for Christmas morning, so the presents get opened before anyone thinks about cooking.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is Christmas a good time to visit Maui?',
          a: 'Yes, but it is one of the busiest weeks of the year. Restaurant tables, rental cars and chef dates go early, so plan the main dinner as soon as your house is booked.',
        },
        {
          q: 'Can a private chef cook Christmas dinner at our Maui villa?',
          a: 'Yes. The chef plans the menu, shops, cooks in your kitchen, serves and cleans up. Leftovers are packed and labelled if you want them.',
        },
        {
          q: 'Will we see whales over Christmas?',
          a: 'Possibly. NOAA says humpbacks are generally seen in Hawaiʻi from November, with the peak from January through March.',
        },
        {
          q: 'How much does a chef-cooked Christmas dinner on Maui cost?',
          a: 'Signature dinners are $225–$375 a guest with groceries included, minimum six. Stay Chef starts from $1,550 a day with groceries at cost. Service charge and GET are separate lines.',
        },
        {
          q: 'Can you cook in a Kīhei condo kitchen?',
          a: 'Yes. Tell us the oven size and number of burners. The chef plans a menu that fits one oven, using the stovetop and grill for sides.',
        },
        {
          q: 'We have 30 people for a holiday party. Is that a chef dinner?',
          a: 'No. A group that size is quoted as Maui catering, with servers and a sous-chef as separate hourly lines, and a bar if you want one.',
        },
      ],
      related: [
        { path: '/blog/new-years-eve-maui-villa-dinner', label: 'New Year’s Eve in Maui' },
        { path: '/private-chef', label: 'Personal chef Maui' },
        { path: '/catering', label: 'Maui catering' },
        { path: '/', label: 'Private chef Maui' },
        { path: '/pricing', label: 'Maui private chef cost' },
        { path: '/blog/thanksgiving-dinner-maui', label: 'Thanksgiving dinner on Maui' },
      ],
    },
    {
      feature: true,
      slug: 'kaanapali-restaurants-dining-guide',
      keyword: 'kaanapali restaurants',
      datePublished: '2026-10-21',
      name: 'Kaanapali restaurants dining guide',
      h1: 'Kaanapali restaurants — the beach walk, Black Rock at sunset and nights at the villa.',
      title: 'Kaanapali Restaurants — Beach Walk Dining Guide | myCHEF',
      description:
        'Kaanapali restaurants for a villa week: the beach walk, Whalers Village, Black Rock sunsets, Lahaina today, and the nights a chef at the villa makes sense.',
      lede:
        'Kaanapali restaurants line a three-mile beach on West Maui: oceanfront hotel rooms, the open-air Whalers Village centre and casual spots along the beach walk. This guide helps families in a Kāʻanapali condo or villa choose which nights to book a table and which to keep at home.',
      photo: 'dinKaanapali',
      body: [],
      sections: [
        {
          heading: 'What “Kaanapali restaurants” really covers',
          paras: [
            'Kāʻanapali is a resort area rather than a town. The Hawaiʻi Tourism Authority describes it as the state’s first planned resort, with hotels and condominium villages facing about three miles of white sand. Most of the restaurants sit inside those hotels, along the paved beach walk that links them, or in Whalers Village, the open-air shopping and dining centre on the sand.',
            'That layout is the useful part for a visitor. You can walk to dinner from most beachfront condos, which is a real advantage on Maui. It also means most Kāʻanapali dinners are resort dining, priced and paced like it, and the same handful of rooms fill at sunset every night.',
          ],
        },
        {
          heading: 'The beach walk and Whalers Village',
          paras: [
            'Whalers Village has everything from quick counters to full-service oceanfront restaurants, so it is the easy answer for lunch after the beach or an early family dinner. Hotel restaurants along the walk range from poolside grills to dressier dining rooms. Walk the path once in daylight and you will know which rooms look over the water and which look over a car park.',
            'We do not publish rankings, ratings or partner restaurants, and the search results already carry plenty of top-ten lists. Book directly, mention allergies when you reserve, and ask for the table you actually want, whether that is the ocean side, a quieter corner or space for a high chair.',
          ],
        },
        {
          heading: 'Sunset at Black Rock: plan dinner around it',
          paras: [
            'At the north end of the beach, Puʻu Kekaʻa, known as Black Rock, hosts a cliff-diving ceremony at sunset that re-enacts a leap by Maui’s chief Kahekili. Go Hawaiʻi lists it as a daily evening event, and it is free to watch from the public beach. It is short, and it is the moment most visitors want to see once.',
            'That timing matters for dinner. Restaurants with a sunset view are fullest in the hour around the ceremony, so book early or plan to eat after it. Some families watch from the sand, then walk back to the condo for a dinner that is already being cooked. If your rental has an ocean-facing lānai, that can be the best table on the beach.',
          ],
        },
        {
          heading: 'Lahaina, Kāʻanapali and getting around West Maui',
          paras: [
            'Lahaina town, just south of Kāʻanapali, was largely destroyed by the August 2023 wildfire, and recovery is ongoing. Older guides that send you to Front Street for dinner are out of date, so check what is open before you plan a night there. Our [Lahaina](/lahaina) page explains how we handle dinners on that stretch of coast.',
            'North of Kāʻanapali, Honokōwai, Kahana, Nāpili and Kapalua have their own restaurants and a slower pace. Go Hawaiʻi puts Kāʻanapali about 50 minutes from Kahului Airport, and the Honoapiʻilani Highway is slower at peak hours than the map suggests. Our [West Maui](/west-maui) notes cover timing on that side of the island.',
          ],
        },
        {
          heading: 'Is Kāʻanapali good for families who want to eat out?',
          paras: [
            'Yes for walking distance, less so for a group of ten at seven o’clock. Resort dining rooms seat couples and families of four easily. A reunion, a multi-generation group or anyone with toddlers who eat at five will spend much of the week waiting for tables, splitting the party or eating early because that is what was free.',
            'Kitchens help. Many Kāʻanapali condos and villas have full kitchens, and a mix of breakfasts at home, lunch by the pool and two or three special dinners is the pattern that works for most families. Our [breakfast in the villa notes](/blog/breakfast-in-the-villa) cover slower mornings at the house.',
          ],
        },
        {
          heading: 'When a chef night at the villa beats a restaurant',
          paras: [
            'Some nights a restaurant is the wrong plan: a birthday, an anniversary, mixed diets, a long day on a boat or a family that wants to linger after dessert. That is the evening a [personal chef Maui](/private-chef) booking is built for. The chef plans the menu, shops, cooks in your kitchen, serves at your table and leaves the kitchen clean, and the sunset stays on your own lānai.',
            'Local fish is named as what it is on the day, and our [fish species notes](/blog/fish-species) explain how we handle that. Our [Kāʻanapali](/kaanapali) page covers villa dinners on this stretch of the coast, and the wider picture of villa dinners across the island is on [private chef Maui](/).',
          ],
        },
        {
          heading: 'Groups, celebrations and wedding weeks',
          paras: [
            'A welcome dinner for twenty, a reunion buffet or a rehearsal dinner on a villa lawn is a staffed event rather than a chef dinner. [Maui catering](/catering) covers staffed villa events, with servers at $80 an hour and a sous-chef at $105 an hour on four- to five-hour minimums, listed as their own lines.',
            'A cocktail hour before dinner works well at Kāʻanapali. Our mobile bar on Maui starts from $1,200 for a four-hour package plus $85 a guest, with spirits billed at cost or brought by you.',
          ],
        },
        {
          heading: 'What a Kāʻanapali villa dinner costs with us',
          paras: [
            'Signature dinners in Wailea and West Maui are published at $225–$375 a guest with groceries included, for a minimum party of six, and a simpler menu runs $190–$225 a guest. Stay Chef days for a chef and an assistant start from $1,550 a day for one meal, with groceries billed at cost and receipts handed over.',
            'A 20% service charge and Hawaiʻi GET are added as their own lines, a 50% deposit locks the date, and gratuity is voluntary. The full rate card is on [Maui private chef cost](/pricing), and the written quote is the confirmed total.',
          ],
        },
        {
          heading: 'How to plan your Kāʻanapali nights',
          paras: [
            'Send the condo or villa address, your dates, the number of adults and children, any allergies and the nights you already have restaurant tables for. We will suggest which evenings suit a chef dinner and reply with a written quote. Use the quote form or message us on WhatsApp at +1 808-468-7748.',
            'Winter and holiday weeks fill first on West Maui, for restaurants and for chef dates alike. If your dates are firm, send them early even if the menu is still open.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do I need reservations at Kaanapali restaurants?',
          a: 'For sunset tables and hotel dining rooms, yes, especially in winter and holiday weeks. Counters and casual spots in Whalers Village are usually walk-in.',
        },
        {
          q: 'What time is the Black Rock cliff dive?',
          a: 'It takes place at sunset at Puʻu Kekaʻa at the north end of Kāʻanapali Beach and is free to watch from the beach. Sunset time changes through the year, so check it on the day.',
        },
        {
          q: 'Are Lahaina restaurants open again?',
          a: 'Lahaina town was largely destroyed in the August 2023 wildfire and recovery is ongoing. Check each restaurant directly before planning a night there.',
        },
        {
          q: 'When is a private chef better than a Kāʻanapali restaurant?',
          a: 'Large groups, small children, mixed diets, celebrations, or any night you want sunset on your own lānai without waiting for a table.',
        },
        {
          q: 'What does a chef dinner at a Kāʻanapali condo cost?',
          a: 'Signature dinners are $225–$375 a guest with groceries included, minimum six. Service charge and GET are separate lines and a 50% deposit holds the date.',
        },
        {
          q: 'Can you cook in a condo kitchen?',
          a: 'Yes. Tell us the oven, burners and whether there is a grill, and the chef plans the menu around the kitchen you have.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'Personal chef Maui' },
        { path: '/catering', label: 'Maui catering' },
        { path: '/', label: 'Private chef Maui' },
        { path: '/pricing', label: 'Maui private chef cost' },
        { path: '/blog/dining-in-kaanapali', label: 'Kāʻanapali kitchen notes' },
      ],
    },
    {
      feature: true,
      slug: 'new-years-eve-maui-villa-dinner',
      keyword: 'new years eve maui',
      datePublished: '2026-10-22',
      name: 'New Year’s Eve in Maui',
      h1: 'New Year’s Eve in Maui — fireworks rules, sunset timing and dinner at the villa.',
      title: 'New Year’s Eve in Maui — Dinner at Your Villa | myCHEF',
      description:
        'New Year’s Eve in Maui 2026: fireworks rules and hours, resort galas vs a villa night, sunset timing, a midnight menu and real private chef prices.',
      lede:
        'New Year’s Eve 2026 falls on a Thursday, and on Maui it is one of the busiest nights of the year. Resort galas sell out, restaurants run set menus and the neighbourhoods light up at midnight. If your group has a villa or condo for the holidays, this guide covers the rules, the timing and how to have a proper New Year’s Eve dinner at the house.',
      photo: 'barMaui',
      body: [],
      sections: [
        {
          heading: 'What New Year’s Eve on Maui is like',
          paras: [
            'There are three common ways to spend it. Resorts in Wailea and West Maui hold dinners and parties with music. Many restaurants serve a fixed New Year’s Eve menu at set seating times. Evening cruises leave the harbour for a few hours on the water. All three book out well before December, and all three end with a drive or a shuttle back to where you are staying, on roads that are busy that night.',
            'The fourth option, and the one families with a villa often choose, is to keep the night at the house: a long dinner, the children awake for midnight or asleep down the hall, and fireworks from the lānai.',
          ],
        },
        {
          heading: 'Fireworks on Maui: the rules and the hours',
          paras: [
            'Under Hawaiʻi law and Maui County rules, fireworks may be set off on New Year’s Eve only between 9 p.m. on 31 December and 1 a.m. on 1 January. For the 2025–26 season, the Maui Fire Department said consumer fireworks such as sparklers and fountains did not need a permit during those hours, firecrackers needed a $25 permit sold at listed stores, and aerial fireworks were illegal without a permit. Fireworks are not allowed on public roads, in county parks or within 500 feet of a hotel without a permit.',
            'The department publishes the new season’s details each December, including any public display, so check the 2026 notice before you plan. Leeward Maui can be very dry, and many rental agreements ban fireworks outright. If you want a midnight moment at the villa without the risk, a champagne toast and dessert on the lānai works just as well.',
          ],
        },
        {
          heading: 'Resort party, restaurant or a villa night',
          paras: [
            'A resort party suits couples who want to dress up and dance and do not mind the price or the crowd. A restaurant set menu works for a small group that books early. A villa dinner suits families, friends sharing a house and anyone who wants the evening to run on their own clock.',
            'A [personal chef Maui](/private-chef) booking turns the villa into the venue. The chef plans the menu with you, shops, cooks in your kitchen, serves the courses and leaves the kitchen clean before midnight, so the evening is yours.',
          ],
        },
        {
          heading: 'Timing the evening: sunset to midnight',
          paras: [
            'At the end of December the sun sets around six on Maui. Many villa groups start with drinks on the lānai at sunset, sit down for dinner around seven, and keep dessert and a toast for later. Families with young children often serve the children first and let them sleep before the late part of the night.',
            'If you want a late dessert course, a midnight snack or a staffed bar running until after midnight, say so when you ask, because it changes the staffing and the quote. Check your rental’s quiet hours too; many condo buildings enforce them even on New Year’s Eve.',
          ],
        },
        {
          heading: 'A New Year’s Eve menu at the villa',
          paras: [
            'A Maui New Year’s Eve menu often starts light and builds: local fish crudo or poke, a warm course, a main of fish or meat cooked on the villa grill, and a dessert that can wait until the toast. Fish is named as what is caught and available on the day rather than promised weeks ahead; our [fish species notes](/blog/fish-species) explain why.',
            'Tell us about allergies, vegetarian guests and children’s plates early. And if you want the morning after to be easy, our [day-after brunch](/blog/day-after-brunch) notes cover a late breakfast at the house on New Year’s Day.',
          ],
        },
        {
          heading: 'Wailea, Kīhei or West Maui: logistics by area',
          paras: [
            'Wailea, Mākena, Kīhei, Kāʻanapali, Nāpili and Kapalua are base zones for us. Upcountry houses in Kula or Makawao add a published travel line from $75, and Pāʻia and the North Shore are quoted with the menu. On New Year’s Eve the team arrives early and leaves the roads before the busiest hours.',
            'If you are deciding whether to eat out on one of the other nights of the holiday week, our [Wailea restaurants guide](/blog/wailea-restaurants-dining-guide) and [Kāʻanapali restaurants guide](/blog/kaanapali-restaurants-dining-guide) cover the two main resort areas.',
          ],
        },
        {
          heading: 'Group size: a chef dinner or a staffed party',
          paras: [
            'For a table of six to about a dozen, one chef cooking and serving is usually right. A party for twenty or more, a buffet across two houses or a wedding-week celebration is a staffed event, and [Maui catering](/catering) covers that, with servers at $80 an hour and a sous-chef at $105 an hour on four- to five-hour minimums, shown as their own lines.',
            'On New Year’s Eve a bartender takes a job off the host. The Maui mobile bar is published from $1,200 for four hours plus $85 a guest, with spirits billed at cost or brought by you.',
          ],
        },
        {
          heading: 'What New Year’s Eve dinner on Maui costs with us',
          paras: [
            'Signature dinners on Maui are published at $225–$375 a guest with groceries included, for a minimum party of six, and a simpler table runs $190–$225 a guest. Dinner for two starts from $750. Stay Chef days for a chef and an assistant start from $1,550 a day for one meal, with groceries billed at cost and receipts handed over, which suits a group that wants the whole holiday week covered.',
            'A 20% service charge and Hawaiʻi GET up to 4.712% are added as their own lines, a 50% deposit locks the date and gratuity is voluntary. The full rate card is on [Maui private chef cost](/pricing).',
          ],
        },
        {
          heading: 'How to get New Year’s Eve on the calendar',
          paras: [
            'New Year’s Eve is one of the first dates to fill on Maui, along with Christmas Eve and Christmas Day. Send the villa address, the number of adults and children, allergies and the time you want to eat. Use the quote form or message us on WhatsApp at +1 808-468-7748, and we reply with a written quote.',
            'Staying for Christmas as well? Our [Christmas in Maui guide](/blog/christmas-in-maui-villa-dinner) covers that night. For villa dinners across the island, see [private chef Maui](/).',
          ],
        },
      ],
      faqs: [
        {
          q: 'When is New Year’s Eve 2026?',
          a: 'Thursday 31 December 2026, so New Year’s Day is a Friday and many groups stay for a long weekend.',
        },
        {
          q: 'What time can you set off fireworks on Maui on New Year’s Eve?',
          a: 'Only from 9 p.m. on 31 December to 1 a.m. on 1 January. Firecrackers need a permit, aerial fireworks are illegal without one, and many rentals ban fireworks.',
        },
        {
          q: 'Where can I see fireworks on Maui on New Year’s Eve?',
          a: 'Neighbourhood fireworks are common across the island. The Maui Fire Department lists any public display each December, so check its notice for 2026.',
        },
        {
          q: 'Is it rainy in Maui in December?',
          a: 'December is in Maui’s wetter season, but leeward areas such as Wailea, Kīhei and West Maui are usually drier. Plan a covered table as the backup.',
        },
        {
          q: 'Can a private chef cook New Year’s Eve dinner at our villa?',
          a: 'Yes. The chef plans the menu, shops, cooks in your kitchen, serves and cleans up. Book early, because New Year’s Eve fills first.',
        },
        {
          q: 'How much does a chef-cooked New Year’s Eve dinner on Maui cost?',
          a: 'Signature dinners are $225–$375 a guest with groceries included, minimum six. Service charge and GET are separate lines and a 50% deposit holds the date.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'Personal chef Maui' },
        { path: '/catering', label: 'Maui catering' },
        { path: '/', label: 'Private chef Maui' },
        { path: '/pricing', label: 'Maui private chef cost' },
        { path: '/blog/christmas-in-maui-villa-dinner', label: 'Christmas in Maui' },
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
        { path: '/blog/kapaa-restaurants-dining-guide', label: 'Kapaʻa restaurants guide' },
        { path: '/', label: 'Private chef Kauai' },
        { path: '/private-chef', label: 'Personal chef Kauai' },
        { path: '/catering', label: 'Kauai catering' },
        { path: '/pricing', label: 'Kauai private chef cost' },
        { path: '/blog/dining-in-poipu', label: 'Poʻipū kitchen notes' },
      ],
    },

    {
      feature: true,
      slug: 'kauai-elopement-dinner-guide',
      keyword: 'kauai elopement',
      datePublished: '2026-10-19',
      name: 'Kauaʻi elopement planning',
      h1: 'Kauai elopement — planning the day, the permits and the dinner after.',
      title: 'Kauai Elopement — Planning the Day and the Dinner | myCHEF',
      description:
        'Planning a Kauai elopement? License and officiant rules, beach permits, North or South Shore, rain plans, and the private dinner after the vows.',
      lede:
        'Most Kauaʻi elopement guides stop when the photographer packs up. This one covers the whole day, including the part nobody puts in the package: where and what you eat afterwards.',
      photo: 'svcHoneymoonKauai',
      body: [],
      sections: [
        {
          heading: 'What a Kauaʻi elopement package covers, and what it leaves out',
          paras: [
            'A typical Kauaʻi elopement package is built around the ceremony. An officiant, a photographer, the beach permit and sometimes flowers or a lei, all scheduled into a short window at a beach, a garden or a lookout. That is the right focus. The ceremony is the reason you came.',
            'What packages rarely include is the evening. After two hours of vows and photos, you are hungry, possibly sandy, and often a long drive from a restaurant that still has a table. On a holiday week the good dining rooms on both shores fill early. That is the gap a private dinner at your rental fills, and it is the part of the day we cook.',
          ],
        },
        {
          heading: 'The legal part: license and officiant',
          paras: [
            'Hawaiʻi marriage licenses come from the state Department of Health. You apply online, then both of you meet a licensing agent together, in person, with government photo ID, no more than 30 days before the ceremony. There is no waiting period once the license is issued, it is valid for 30 days and only in Hawaiʻi, and there is no residency or blood-test requirement. The fee at the time of writing is $65. Check the Department of Health site before you fly, because procedures can change.',
            'Your officiant must hold a current Hawaiʻi license to perform marriages. Professional Kauaʻi officiants already do; if a friend is marrying you, they need to apply to the state in advance, and the Department of Health asks for at least two weeks.',
          ],
        },
        {
          heading: 'Beach, garden or the house: where to say the words',
          paras: [
            'Sandy beaches on Kauaʻi are generally state shoreline, even when a county park sits behind them. A paid ceremony there needs a right-of-entry permit from the Department of Land and Natural Resources, normally obtained by your officiant, planner or photographer. The conditions are strict: no alcohol in the permit area, no tables, tents, arches or amplified sound, chairs only where needed for elderly or disabled guests, and set-up, ceremony and clean-up within two hours. State parks need their own special use permit, requested at least 45 days ahead.',
            'Those rules are a good reason to split the day. Keep the beach for the vows and the photographs, and move the champagne, the food and the long table to the house. A private rental lawn or terrace needs only your host’s permission, and that is where a chef can actually set a table.',
          ],
        },
        {
          heading: 'North Shore or South Shore',
          paras: [
            'The North Shore around Hanalei and Princeville is the dramatic, green Kauaʻi of the postcards: fluted mountains, waterfalls after rain, and soft light. It is also wetter, especially in the winter months, and heavy rain can close the Hanalei bridge. If you elope there, plan an indoor or covered backup and keep the dinner close to where you are staying. Our [North Shore Kauai dining guide](/blog/north-shore-kauai-dining-guide) covers the restaurant side of that coast.',
            'The South Shore around Poʻipū and Kōloa is usually sunnier and drier, with easier access and more rentals with outdoor dining space. Many couples who want a sure sunset choose it for that reason. The [Poʻipū restaurants guide](/blog/poipu-restaurants-dining-guide) is useful if you are deciding between a dinner out and a dinner at the house.',
            'Whichever shore you choose, the weather plan belongs in the first conversation with every vendor, not the night before.',
          ],
        },
        {
          heading: 'Timing the day: ceremony, photos, then dinner',
          paras: [
            'Most photographers will steer you toward late afternoon for the softest light, with portraits running into sunset. Work backwards from that. Hair and make-up in the early afternoon, ceremony an hour or so before sunset, photos until the light goes, then back to the house.',
            'While you are at the ceremony, the chef is at the house: shopping done, the kitchen set up, the table laid on the terrace. When you walk in, there is something cold to drink and a first bite ready, and dinner follows when you are ready, not when a reservation says so. A [personal chef Kauai](/private-chef) dinner is built for exactly that kind of evening on either shore.',
          ],
        },
        {
          heading: 'The elopement dinner: two seats or a small table',
          paras: [
            'For the two of you, we publish dinner for two and elopement dinners on Kauaʻi as a fixed event at $975–$1,425. That covers a chef cooking and serving a menu planned with you in the house kitchen, then leaving it clean. Fish is whatever is good that week, named honestly, and dessert can be the chef’s or a small cake you have ordered from a bakery you like, plated on the night.',
            'If parents or a few friends have flown in, it becomes a small dinner party. Signature dinners on Kauaʻi are $225–$375 a guest with groceries included, for six or more. Either way, tell us about allergies and anything you do not eat when you first get in touch.',
          ],
        },
        {
          heading: 'When the guest list grows past a dinner',
          paras: [
            'Some elopements quietly turn into small weddings. Once you are past about ten guests, the evening needs servers and a planned service, and we quote it as [Kauai catering](/catering) for roughly 10 to 75 guests, with staff as separate hourly lines.',
            'If there is a welcome dinner, a reception and a recovery brunch across the week, that is a wedding week, and [Kauai wedding catering](/weddings) covers it from $260 a guest plus staffing, with each event as its own line so you can cut one without renegotiating the rest.',
          ],
        },
        {
          heading: 'Prices and how inquiry works on Kauaʻi',
          paras: [
            'Kauaʻi is an inquiry island for us. You send the details, we confirm in writing whether a chef is available for your date and shore, and only then is it booked. A published band is not an instant-booking button, and we would rather tell you early than promise a date we cannot cover.',
            'On every quote, a 20% service charge and Hawaiʻi GET are their own lines, a 50% deposit locks the date and gratuity is voluntary. A Princeville or Poʻipū travel line runs $50–$75 where it applies. The full rate card is on [Kauai private chef cost](/pricing), and the island overview is [private chef Kauai](/).',
          ],
        },
        {
          heading: 'A short Kauaʻi elopement checklist',
          paras: [
            'Choose the shore and the house first, then the date. Book the officiant and photographer, and confirm who holds the beach permit. Apply for the license online, and plan the in-person agent meeting inside the 30-day window. Agree a rain plan with everyone.',
            'Then send us the address, the date, the number of people at dinner and two lines about the evening you want. Use the inquiry form or WhatsApp at +1 808-468-7748, and we will come back with a written answer.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do we need a permit to elope on a Kauaʻi beach?',
          a: 'For a paid ceremony on state shoreline, yes. Your vendor usually holds a right-of-entry permit from the Department of Land and Natural Resources, with rules on alcohol, furniture and a two-hour limit.',
        },
        {
          q: 'How do we get a marriage license for Kauaʻi?',
          a: 'Apply online with the state Department of Health, then meet a licensing agent together in person within 30 days of the ceremony. There is no waiting period or residency requirement.',
        },
        {
          q: 'Can we drink champagne at a beach ceremony?',
          a: 'Not in a permitted beach area, because alcohol is not allowed there. Most couples toast at the house afterwards, where a chef dinner can be waiting.',
        },
        {
          q: 'How much does a private elopement dinner on Kauaʻi cost?',
          a: 'Dinner for two or an elopement dinner is published at $975–$1,425 as a fixed event. Service charge and GET are separate lines, and Kauaʻi bookings are confirmed by inquiry.',
        },
        {
          q: 'Is the North Shore or the South Shore better for an elopement?',
          a: 'The North Shore is greener and more dramatic but wetter, especially in winter. The South Shore around Poʻipū is usually sunnier. Plan a rain backup either way.',
        },
        {
          q: 'Can our families join the dinner?',
          a: 'Yes. With six or more guests it becomes a Signature dinner at $225–$375 a guest with groceries included. Past about ten, we quote it as catering.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'Personal chef Kauai' },
        { path: '/weddings', label: 'Kauai wedding catering' },
        { path: '/catering', label: 'Kauai catering' },
        { path: '/pricing', label: 'Kauai private chef cost' },
        { path: '/blog/proposal-dinners', label: 'Proposal dinners' },
      ],
    },
    {
      feature: true,
      slug: 'christmas-in-kauai-holiday-dinners',
      keyword: 'christmas in kauai',
      datePublished: '2026-10-20',
      name: 'Christmas in Kauaʻi',
      h1: 'Christmas in Kauai — holiday dinners at the villa, North Shore or South.',
      title: 'Christmas in Kauai — Holiday Dinners at the Villa | myCHEF',
      description:
        'Christmas in Kauai: North or South Shore for the holidays, winter weather, Christmas and New Year’s Eve dinners at the villa, menus and published prices.',
      lede:
        'Christmas Day 2026 is a Friday and New Year’s Eve is the Thursday after, so a Kauaʻi holiday week usually takes in both. Here is how to plan the two big dinners at your rental, and which shore suits a December stay.',
      photo: 'dinPrinceville',
      body: [],
      sections: [
        {
          heading: 'What a Kauaʻi Christmas is really like',
          paras: [
            'Most of what you find when you search for Christmas in Kauai is forum threads and holiday lists: what is open on Christmas Day, where to stay in December, whether the weather is good and which local events are on. The short version is that Kauaʻi in late December is busy, green and relaxed. It is not a big-city holiday with crowded streets, and that is exactly why many families choose it.',
            'Kauaʻi has its own holiday traditions too. The Kauaʻi Festival of Lights in Līhuʻe is a long-running community favourite with hand-made decorations, and craft fairs and concerts fill the December calendar. Check the festival’s own site for this year’s venue and dates rather than relying on an old listing.',
          ],
        },
        {
          heading: 'North Shore or South Shore for the holidays',
          paras: [
            'December is winter on Kauaʻi, and the two shores behave differently. The North Shore around Princeville and Hanalei is lush and often wet, and winter swells make many north-facing beaches rough. The South Shore around Poʻipū is usually drier and sunnier, which is one reason it is popular for holiday weeks. Neither is wrong; it depends whether you want misty mountains or reliable beach afternoons.',
            'Road access matters more on the North Shore. Past Princeville the highway crosses the one-lane Hanalei bridge, and heavy rain can slow or close the road. Our [Hanalei bridge notes](/hanalei-bridge) explain how we plan around it. If your house is beyond the bridge, a holiday dinner needs a weather plan in writing, not just a hopeful arrival time.',
            'Whale season is starting too. Hawaiʻi’s Division of State Parks lists the north coast of Kauaʻi among the places with the highest concentrations of humpback sightings, and NOAA puts the peak from January through March, so late-December sightings are possible but not guaranteed.',
          ],
        },
        {
          heading: 'Restaurant, pick-up or a chef at the house',
          paras: [
            'Kauaʻi has fewer restaurants than Oʻahu or Maui, and holiday menus at the resorts and best-known rooms fill early. For a couple staying in a resort that may be the easiest Christmas dinner. For a family in a rental house it often means a drive on a dark, wet road after a long meal.',
            'A chef at the house keeps everyone home. The chef plans the menu, shops, cooks in your kitchen, serves and leaves the kitchen clean. That is the evening a [personal chef Kauai](/private-chef) booking covers on both shores. Kauaʻi is by inquiry: we confirm a chef for your date in writing before we lock it, so the earlier you ask, the better your chances over Christmas.',
          ],
        },
        {
          heading: 'Two dinners: Christmas and New Year’s Eve',
          paras: [
            'Many families book both holiday nights together. Christmas is the classic family table: a roast turkey, prime rib or ham with the trimmings, and a dessert that the children will remember. New Year’s Eve is often a lighter, later meal built around fish and shared plates, with a pause for midnight on the lānai.',
            'If you are booking both, say so in the first message. One chef across both nights, or a Stay Chef for the holiday week, keeps the menus from repeating and makes the shopping simpler. Fireworks rules differ by county, so check with the Kauaʻi Fire Department before you buy anything for midnight.',
          ],
        },
        {
          heading: 'A Kauaʻi holiday menu',
          paras: [
            'Kauaʻi tables suit generous, simple food. Fish landed that week makes a good first course, and island greens, sweet potato, local citrus and tropical fruit can sit alongside the holiday classics when the chef can verify them. We name fish as what it is on the day and do not invent farm names or catch stories. Our [fish species notes](/blog/fish-species) explain how we handle that.',
            'Allergies and preferences belong in the brief. A gluten-free stuffing, a vegetarian main or a nut-free dessert is easy to plan in advance. It is much harder to find the ingredients on Christmas Eve on an island with fewer shops, which is another reason the chef shops early.',
          ],
        },
        {
          heading: 'Kitchens, ovens and rain plans',
          paras: [
            'Kauaʻi rentals range from big Princeville and Poʻipū estates to compact condos. Tell us the oven size, the number of burners, whether there is a grill on the lānai and how many plates the house provides. A photo of the kitchen helps more than you would think.',
            'Rain is part of December on Kauaʻi, especially on the North Shore. A covered lānai or an indoor table is the backup for every outdoor dinner we quote, and our [weather backup notes](/blog/weather-backup) set out how we decide on the day. If the house has a weak kitchen, say so early, and we will plan the menu around it rather than discover it on Christmas afternoon.',
          ],
        },
        {
          heading: 'Bigger groups and family reunions',
          paras: [
            'For six to about a dozen guests, one chef cooking and serving family-style is usually right. When several families share an estate for the holidays, it becomes a staffed event. [Kauai catering](/catering) covers staffed estate events on both shores, with servers at $80 an hour and a sous-chef at $105 an hour on four- to five-hour minimums, shown as their own lines.',
            'Holiday reunions often need more than one big dinner: a welcome night, Christmas itself, a casual lunch and a send-off. Our [family reunions notes](/blog/family-reunions) cover how to plan a multi-day group.',
          ],
        },
        {
          heading: 'What a holiday dinner on Kauaʻi costs with us',
          paras: [
            'Signature dinners on Kauaʻi are published at $225–$375 a guest with groceries included, for a minimum party of six. A simpler table runs $190–$225 a guest. For the holiday week, Stay Chef starts from $1,650 a day for a chef and an assistant cooking one meal, with groceries billed at cost and receipts handed over. Princeville and Poʻipū houses carry a published travel line of $50–$75, and the far North Shore is quoted case by case.',
            'A 20% service charge and Hawaiʻi GET are added as their own lines, a 50% deposit locks the date, and gratuity is voluntary. The full rate card is on [Kauai private chef cost](/pricing), and the written quote is the confirmed total once a chef is confirmed for your date.',
          ],
        },
        {
          heading: 'How to ask for Christmas dates on Kauaʻi',
          paras: [
            'Send the house address, the shore, the dates you want covered, the number of adults and children and any allergies. Tell us whether you want Christmas, New Year’s Eve or both. You can use the inquiry form or message us on WhatsApp at +1 808-468-7748, and we reply plainly about what we can cover.',
            'If you are still choosing a house, start with [private chef Kauai](/) for how villa dinners work on each shore. Holiday dates on Kauaʻi are limited, so an early inquiry is the single most useful thing you can do.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is Kauaʻi a good place to spend Christmas?',
          a: 'Yes, if you want a relaxed, green holiday rather than a big-city one. It is a busy week, so book the house, the car and any dinners early.',
        },
        {
          q: 'Which shore is better for a December stay?',
          a: 'The South Shore around Poʻipū is usually drier and sunnier. The North Shore is greener and often wetter, with winter surf on many beaches.',
        },
        {
          q: 'Can a private chef cook Christmas dinner at our Kauaʻi rental?',
          a: 'Yes, by inquiry. We confirm a chef in writing before we lock the date. The chef shops, cooks, serves and cleans up in your house.',
        },
        {
          q: 'Can you cover both Christmas and New Year’s Eve?',
          a: 'Often, yes. Ask for both in the first message. A Stay Chef for the week keeps menus varied and the shopping simple.',
        },
        {
          q: 'How much does a holiday dinner on Kauaʻi cost?',
          a: 'Signature dinners are $225–$375 a guest with groceries included, minimum six. Stay Chef starts from $1,650 a day with groceries at cost. Service charge and GET are separate lines.',
        },
        {
          q: 'What happens if it rains?',
          a: 'Every outdoor dinner has a covered or indoor backup in the quote. On the North Shore we plan around the Hanalei bridge; if the road closes, the dinner is rescheduled rather than forfeited.',
        },
      ],
      related: [
        { path: '/blog/thanksgiving-dinner-kauai', label: 'Thanksgiving on Kauaʻi' },
        { path: '/private-chef', label: 'Personal chef Kauai' },
        { path: '/catering', label: 'Kauai catering' },
        { path: '/', label: 'Private chef Kauai' },
        { path: '/pricing', label: 'Kauai private chef cost' },
        { path: '/blog/peak-season', label: 'Kauaʻi peak months' },
      ],
    },
    {
      feature: true,
      slug: 'thanksgiving-dinner-kauai',
      keyword: 'thanksgiving kauai',
      datePublished: '2026-10-21',
      name: 'Thanksgiving on Kauaʻi',
      h1: 'Thanksgiving on Kauaʻi — the turkey, the shore you pick and dinner at the house.',
      title: 'Thanksgiving Kauai — Dinner at Your Rental | myCHEF',
      description:
        'Thanksgiving on Kauai 2026: resort buffet, pick-up or a chef at your rental, turkey and grocery logistics, North vs South Shore, menus and real prices.',
      lede:
        'Thanksgiving on Kauai falls on Thursday 26 November 2026, and many families turn it into a long weekend on the island. If you are staying in a house or condo rather than a hotel, this guide covers where to stay, how to get a turkey on the table and when a chef at the house is the easier plan.',
      photo: 'fmtFamilyKauai',
      body: [],
      sections: [
        {
          heading: 'Is Kauaʻi a good place for Thanksgiving?',
          paras: [
            'For a family who wants the holiday without the rush of Christmas week, yes. Late November is quieter than December on most of the island, the evenings are warm, and the long weekend gives you Thursday to cook and three days to recover on the beach. The trade-off is weather: November sits at the start of the wetter part of the year, especially on the North Shore, so a rain plan belongs in every outdoor idea.',
            'Most visitors search for which restaurants are open on Thanksgiving. Several resorts and restaurants run holiday buffets or set menus, and they book early. If your group is staying in a rental with a decent kitchen and a lānai, the other option is to keep the whole day at the house.',
          ],
        },
        {
          heading: 'North Shore or South Shore for Thanksgiving week',
          paras: [
            'Princeville and Hanalei are green, dramatic and wetter, and the road beyond Hanalei is narrow and slow. A North Shore Thanksgiving suits a family that wants a quiet house with a view and does not mind showers. Our [North Shore](/north-shore) notes cover the practical side, including the bridge and the drive.',
            'Poʻipū and Kōloa on the South Shore are usually drier and sunnier, with more condos and resort houses close together. That makes the South Shore the easier choice if Thanksgiving dinner is meant to be outdoors, or if guests are spread across several units. The east side around Kapaʻa sits between the two and is closest to the airport at Līhuʻe.',
          ],
        },
        {
          heading: 'Resort buffet, pick-up meal or a chef at the house',
          paras: [
            'A resort Thanksgiving buffet works for a couple or a small family staying at that resort. You get turkey and the trimmings with no dishes, but you sit when the room has space, and the drive back after dinner can be long on Kauaʻi’s two-lane roads. Some restaurants also sell pre-ordered holiday meals to take away; they sell out and still leave someone reheating in an unfamiliar oven.',
            'A dinner at the house suits multi-generation families and friends sharing a rental. The children play, grandparents stay put and the meal arrives when the food is ready, not when a seating opens. That is the evening a [personal chef Kauai](/private-chef) booking is built for. The chef plans the menu with you, shops, cooks in your kitchen, serves and leaves the kitchen clean.',
          ],
        },
        {
          heading: 'Turkey and groceries on an island with fewer stores',
          paras: [
            'Kauaʻi has fewer large supermarkets than Oʻahu, and most of them are around Līhuʻe and Kapaʻa. Whole turkeys, fresh cranberries and specialty items can run short in the days before the holiday, and a North Shore or Poʻipū house is a real drive from the bigger stores. We place the turkey order as soon as your date is confirmed instead of hoping the shelf is full on Wednesday afternoon.',
            'Rental ovens vary from generous estate ranges to compact condo units. Tell us the oven size, burners and whether there is a grill on the lānai when you send the brief, and the chef will plan the cooking around it, for example two smaller birds or a turkey roasted in parts. Local produce from the week can go into the sides; our [Kauai farmers market guide](/blog/kauai-farmers-market-villa-week) shows what the markets carry.',
          ],
        },
        {
          heading: 'A Thanksgiving menu with Kauaʻi on the table',
          paras: [
            'Most families want the classics: turkey, stuffing, gravy, mashed potatoes and pie. A Kauaʻi table can add local fish as a starter, purple sweet potato, island greens and a lilikoʻi or coconut dessert next to the pumpkin pie. Taro grown in the Hanalei valley shows up in local cooking, and the chef can work it in if you want to try it.',
            'Tell us about allergies, vegetarian guests and children’s plates early. Fish is named as what it is on the day rather than promised weeks ahead, and our [fish species notes](/blog/fish-species) explain why we work that way.',
          ],
        },
        {
          heading: 'Rain plans and timing the day',
          paras: [
            'Plan the table under cover. A covered lānai or an indoor dining room is the backup for every outdoor dinner we quote on Kauaʻi, and our [weather backup notes](/blog/weather-backup) set out how the call is made on the day. An afternoon meal, served while there is still light, suits most families with young children and leaves the evening free.',
            'If part of the group wants a morning hike or a boat trip on Thursday, tell us. The chef can shop and prep around it, but a dinner time that everyone agrees on in advance keeps the day calm.',
          ],
        },
        {
          heading: 'Bigger families and reunion weekends',
          paras: [
            'A family of eight to twelve is a chef dinner. Twenty or more, a buffet across two houses or a weekend of meals is a staffed event, and [Kauai catering](/catering) covers that on both shores, with servers at $80 an hour and a sous-chef at $105 an hour on four- to five-hour minimums, listed as their own lines. Our [family reunions notes](/blog/family-reunions) cover the rest of a big-group week.',
          ],
        },
        {
          heading: 'What Thanksgiving dinner on Kauaʻi costs with us',
          paras: [
            'Signature dinners on Kauaʻi are published at $225–$375 a guest with groceries included, for a minimum party of six, and a simpler menu runs $190–$225 a guest. If you want a chef for the whole long weekend, Stay Chef days for a chef and an assistant start from $1,650 a day for one meal, with groceries billed at cost and receipts handed over. Princeville and Poʻipū houses carry a published travel line of $50–$75, and the far North Shore is quoted separately.',
            'A 20% service charge and Hawaiʻi GET are added as their own lines, a 50% deposit locks the date, and gratuity is voluntary. The full rate card is on [Kauai private chef cost](/pricing). Kauaʻi is by inquiry, so the written quote is the confirmed total once a chef is confirmed for your date.',
          ],
        },
        {
          heading: 'How to ask for Thanksgiving on Kauaʻi',
          paras: [
            'Send the rental address, the date, the number of adults and children, allergies and the time you want to eat. Use the inquiry form or message us on WhatsApp at +1 808-468-7748, and we reply with a written quote. Thanksgiving is five weeks away, so the earlier the better.',
            'Staying through December too? Our [Christmas in Kauai guide](/blog/christmas-in-kauai-holiday-dinners) covers the next holiday. For an overview of villa dinners on both shores, see [private chef Kauai](/).',
          ],
        },
      ],
      faqs: [
        {
          q: 'When is Thanksgiving in 2026?',
          a: 'Thanksgiving Day is Thursday 26 November 2026, so most families get a four-day weekend.',
        },
        {
          q: 'Which side of Kauaʻi is better in late November?',
          a: 'The South Shore around Poʻipū is usually drier and sunnier. The North Shore is greener and wetter, so plan a covered table there.',
        },
        {
          q: 'Can a private chef cook Thanksgiving at our Kauaʻi rental?',
          a: 'Yes, by inquiry. The chef plans the menu, orders the turkey, shops, cooks in your kitchen, serves and cleans up.',
        },
        {
          q: 'Will a turkey fit in a vacation-rental oven?',
          a: 'Often, but not always. Tell us the oven size and the chef will plan around it, for example with two smaller birds or a turkey roasted in parts.',
        },
        {
          q: 'How much does a chef-cooked Thanksgiving on Kauaʻi cost?',
          a: 'Signature dinners are $225–$375 a guest with groceries included, minimum six. Service charge and GET are separate lines and a 50% deposit holds the date.',
        },
        {
          q: 'What if it rains on Thanksgiving?',
          a: 'Every outdoor dinner we quote on Kauaʻi has a covered lānai or indoor table as the backup, decided on the day.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'Personal chef Kauai' },
        { path: '/catering', label: 'Kauai catering' },
        { path: '/', label: 'Private chef Kauai' },
        { path: '/pricing', label: 'Kauai private chef cost' },
        { path: '/blog/christmas-in-kauai-holiday-dinners', label: 'Christmas in Kauaʻi' },
      ],
    },
    {
      feature: true,
      slug: 'kapaa-restaurants-dining-guide',
      keyword: 'kapaa restaurants',
      datePublished: '2026-10-22',
      name: 'Kapaʻa restaurants guide',
      h1: 'Kapaʻa restaurants — eating on Kauaʻi’s east side, and when to stay in.',
      title: 'Kapaa Restaurants — East Side Kauai Dining Guide | myCHEF',
      description:
        'Kapaa restaurants on Kauai’s east side: old town, food trucks and Wailua, traffic and timing, sunrise not sunset, and when a chef at your rental is better.',
      lede:
        'Kapaʻa is the busiest town on Kauaʻi’s east side, between Līhuʻe and the North Shore, and its restaurants are mostly relaxed: food trucks, plate lunch, poke, cafés and a handful of sit-down dinner rooms. This guide explains how eating in Kapaʻa works, how to time it around the traffic, and when a dinner cooked at your rental is the better plan.',
      photo: 'locKapaa',
      body: [],
      sections: [
        {
          heading: 'Is Kapaʻa a good place to stay on Kauaʻi?',
          paras: [
            'For many visitors, yes. Kapaʻa and neighbouring Wailua sit on the east side, often called the Coconut Coast, roughly halfway between the North Shore and the South Shore and closer to the airport at Līhuʻe than either. That makes day trips in both directions easier. Condos and rentals here are generally more modest than the resort houses of Princeville or Poʻipū.',
            'The weather sits between the two shores: wetter than Poʻipū, drier than Hanalei, with passing showers carried in on the trade winds. If you plan dinners outdoors, a covered lānai is worth having.',
          ],
        },
        {
          heading: 'Old town, the highway and the food trucks',
          paras: [
            'Most of Kapaʻa’s restaurants line Kūhiō Highway as it runs through old Kapaʻa town, with more in the shopping areas toward Wailua. Expect counters and casual rooms rather than resort dining: fish tacos, plate lunch, poke from a market counter, shave ice, coffee and a few places with cocktails. Food trucks gather in town and are a good way to eat the way the island does.',
            'The coastal path that runs north of town is the easiest way to work up an appetite, and it puts you within walking or cycling distance of several places to eat.',
          ],
        },
        {
          heading: 'Wailua and dinner further down the coast',
          paras: [
            'Wailua, just south of Kapaʻa around the mouth of the Wailua River, has its own restaurants, many tied to the hotels and shopping centres along the highway. If you are looking for a more formal dinner, many visitors drive to Līhuʻe, or further to Poʻipū; our [Poʻipū restaurants guide](/blog/poipu-restaurants-dining-guide) covers the South Shore, and the [North Shore dining guide](/blog/north-shore-kauai-dining-guide) covers Princeville and Hanalei.',
          ],
        },
        {
          heading: 'Sunrise, not sunset',
          paras: [
            'Kapaʻa faces east, so the sun rises over the ocean and sets behind the mountains. If a sunset dinner on the water is high on the list, plan that night on the South or West side. On the east side, the best light is in the morning: breakfast on the lānai or a beach walk at sunrise is the Kapaʻa equivalent of a sunset table.',
          ],
        },
        {
          heading: 'Traffic, timing and closing hours',
          paras: [
            'Kūhiō Highway is the main road between Līhuʻe and Kapaʻa, and it is often slow at rush hour in both directions. If you are driving back from the North Shore or the South Shore for dinner, add time. Many casual places in Kapaʻa close early in the evening, so a seven-thirty arrival after a long beach day can leave fewer choices than you expect.',
            'Small rooms also make big groups difficult. A family of ten that wants to sit together will find few Kapaʻa restaurants that can take them at short notice.',
          ],
        },
        {
          heading: 'When a chef night at the rental beats eating out',
          paras: [
            'Big families, mixed diets, small children who eat early, a birthday, or a long day on the road all point the same way. A [personal chef Kauai](/private-chef) dinner brings the meal to your table: the chef plans the menu with you, shops, cooks in your kitchen, serves and leaves the kitchen clean. Kapaʻa is a base zone for us, so no travel line applies; our [private chef Kapaʻa](/kapaa) page has the local details.',
            'Most visitors mix the two. Eat lunch from the trucks and counters, book one or two dinners out, and keep the group nights at the house.',
          ],
        },
        {
          heading: 'Groceries and markets on the east side',
          paras: [
            'Most of Kauaʻi’s larger supermarkets are around Līhuʻe and Kapaʻa, which makes the east side an easy place to stock a rental. Weekly farmers markets add local fruit, greens and flowers; our [Kauai farmers market guide](/blog/kauai-farmers-market-villa-week) explains which markets run when and how to use them in a villa week.',
          ],
        },
        {
          heading: 'A sample east-side week that mixes both',
          paras: [
            'A week based in Kapaʻa often looks like this. Arrival night is simple: poke and plate lunch picked up on the way from Līhuʻe, eaten on the lānai. Two or three evenings go to restaurants, one of them a drive to the South Shore for a sunset table. Mornings start early with the sunrise and coffee at the house.',
            'The group dinners, usually the first full evening and the last night, stay at the rental with a chef cooking, so everyone sits at one table and nobody drives home on the highway after dark. If a birthday or anniversary falls in the week, that is the night to book first. Tell us which nights you want cooked and which you are eating out, and the quote follows that plan.',
          ],
        },
        {
          heading: 'Reunions and bigger groups',
          paras: [
            'A reunion dinner for twenty, a celebration across two rentals or a wedding-week party is a staffed event rather than a chef dinner. [Kauai catering](/catering) covers that on the east side and both shores, with servers at $80 an hour and a sous-chef at $105 an hour on four- to five-hour minimums, shown as their own lines.',
          ],
        },
        {
          heading: 'What a dinner at your Kapaʻa rental costs with us',
          paras: [
            'Signature dinners on Kauaʻi are published at $225–$375 a guest with groceries included, for a minimum party of six, and a simpler menu runs $190–$225 a guest. Dinner for two is $975–$1,425. Stay Chef days for a chef and an assistant start from $1,650 a day for one meal, with groceries billed at cost and receipts handed over.',
            'A 20% service charge and Hawaiʻi GET up to 4.712% are added as their own lines, a 50% deposit locks the date and gratuity is voluntary. The full rate card is on [Kauai private chef cost](/pricing). Kauaʻi is by inquiry, so the written quote is the confirmed total once a chef is confirmed for your date.',
          ],
        },
        {
          heading: 'How to ask for a Kapaʻa dinner',
          paras: [
            'Send the rental address, the dates, the number of adults and children, allergies and the nights you want cooked. Use the inquiry form or message us on WhatsApp at +1 808-468-7748, and we reply in writing. For villa dinners across the island, see [private chef Kauai](/).',
          ],
        },
      ],
      faqs: [
        {
          q: 'Is Kapaʻa a good place to stay on Kauaʻi?',
          a: 'For many visitors, yes. It is central, closer to Līhuʻe airport than either shore, and makes day trips north and south easier.',
        },
        {
          q: 'What kind of restaurants are in Kapaʻa?',
          a: 'Mostly casual: food trucks, plate lunch, poke counters, cafés and a handful of sit-down dinner rooms along Kūhiō Highway.',
        },
        {
          q: 'Can you watch the sunset from Kapaʻa?',
          a: 'Not over the ocean. Kapaʻa faces east, so the sun rises over the water. For a sunset dinner on the water, go to the South or West side.',
        },
        {
          q: 'Do Kapaʻa restaurants close early?',
          a: 'Many casual places close early in the evening, and large groups can be hard to seat, so plan dinner times and book where you can.',
        },
        {
          q: 'Can a private chef cook at our Kapaʻa rental?',
          a: 'Yes, by inquiry. Kapaʻa is a base zone for us, so no travel line applies. The chef shops, cooks in your kitchen, serves and cleans up.',
        },
        {
          q: 'How much does a chef dinner in Kapaʻa cost?',
          a: 'Signature dinners on Kauaʻi are $225–$375 a guest with groceries included, minimum six. Service charge and GET are separate lines and a 50% deposit holds the date.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'Personal chef Kauai' },
        { path: '/catering', label: 'Kauai catering' },
        { path: '/', label: 'Private chef Kauai' },
        { path: '/pricing', label: 'Kauai private chef cost' },
        { path: '/blog/poipu-restaurants-dining-guide', label: 'Poʻipū restaurants guide' },
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
        { path: '/blog/kona-restaurants-dining-guide', label: 'Kona restaurants guide' },
        { path: '/', label: 'Private chef Big Island' },
        { path: '/private-chef', label: 'Private chef Kona' },
        { path: '/catering', label: 'Big Island catering' },
        { path: '/pricing', label: 'Big Island private chef cost' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
      ],
    },

    {
      feature: true,
      slug: 'big-island-elopement-guide',
      keyword: 'big island elopement',
      datePublished: '2026-10-19',
      name: 'Big Island elopement planning',
      h1: 'Big Island elopement — the Kona–Kohala day, start to dinner.',
      title: 'Big Island Elopement — Plan the Day and Dinner | myCHEF',
      description:
        'Big Island elopement planning: Kona or Hilo side, license and beach permit rules, sun and wind, a sample Kohala day, and a private dinner after the vows.',
      lede:
        'The Big Island gives you lava coast, ranch country and rainforest on one island, which is wonderful for photographs and tricky for logistics. Here is how to plan an elopement day that ends at a table, not in a car.',
      photo: 'svcHoneymoonBigisland',
      body: [],
      sections: [
        {
          heading: 'Why couples elope on Hawaiʻi Island',
          paras: [
            'Couples choose the Big Island for range. In a single day you can be on a black lava shoreline on the Kohala Coast, in green upland pasture around Waimea, or on the rainy, forested east side near Hilo and Volcano. Elopement photographers and planners on the island build their packages around those settings, and their guides are worth reading for the ceremony itself.',
            'This guide is about the rest of the day: which side of the island to base yourselves on, what the rules allow, and how to finish with a proper dinner. That last part is what we do, cooking in rentals along the Kona–Kohala coast.',
          ],
        },
        {
          heading: 'Choose a side of the island first',
          paras: [
            'The Big Island is large, and the drive from the Kohala Coast to Hilo takes hours, not minutes. Most elopement days work best when the ceremony, the photographs and the dinner sit on the same side.',
            'The west side, from Kailua-Kona up through Waikoloa, Mauna Lani and the Kohala Coast, is dry and sunny with reliable sunsets over the ocean. It is also where most resorts and vacation rentals are, and it is our home corridor for dinners. The east side around Hilo and Volcano is greener and much wetter, with a different beauty and a different weather plan. We quote east-side dinners case by case, and we will not plan a same-evening round trip from a Kohala villa to Hilo.',
          ],
        },
        {
          heading: 'License, officiant and permits — the short version',
          paras: [
            'Hawaiʻi marriage licenses are issued through the state Department of Health. Apply online, then meet a licensing agent together in person with photo ID, no sooner than 30 days before your date. The license is valid for 30 days in Hawaiʻi only, there is no waiting period, and the fee at the time of writing is $65. Your officiant must hold a current Hawaiʻi license; a friend officiating needs to register with the state in advance.',
            'If the ceremony is on a sandy state beach, your vendor needs a right-of-entry permit from the Department of Land and Natural Resources. That permit bans alcohol, tables, tents, arches and amplified sound in the permit area and limits the whole event, set-up included, to two hours. State parks require a special use permit requested at least 45 days ahead. A ceremony on the lawn of your rental only needs the owner’s approval, so check the house rules before you book.',
          ],
        },
        {
          heading: 'Sun, wind and lava underfoot',
          paras: [
            'West-side sun is strong in the middle of the day, and the Kohala Coast can be windy in the afternoon. Most couples schedule the ceremony in the late afternoon, which gives softer light, cooler air and sunset portraits over the water. Ask your photographer how they handle wind for veils and hair.',
            'Lava rock is sharp and uneven. Bring shoes you can actually walk in for the path to the shoreline, and change for photographs if you want to. Water and shade matter more than people expect, especially for older family members.',
          ],
        },
        {
          heading: 'Where the dinner happens',
          paras: [
            'After the ceremony you have three choices: a resort restaurant, a private room somewhere, or dinner at the house. The first two work, but they mean a reservation time, a drive and a set menu on the one night you least want to be rushed.',
            'Dinner at the rental is the quiet option. While you are at the ceremony, the chef shops, sets up the kitchen and lays the table on the lānai. You arrive back to cold drinks and a first bite, and dinner is served when you are ready. That is what a [private chef Kona](/private-chef) evening looks like, from a Kailua-Kona condo to a Kohala Coast estate.',
          ],
        },
        {
          heading: 'Dinner for two, or a small family table',
          paras: [
            'For the two of you, dinner for two and elopement dinners on the Big Island are published from $825 per event. A chef plans the menu with you, cooks and serves it at the house and leaves the kitchen clean. West-side menus lean on fish landed that week, named honestly, along with island fruit and produce, and dessert can be the chef’s or a small cake you have ordered elsewhere.',
            'If parents or a few friends have come, it becomes a dinner party. Signature dinners on the Big Island are $210–$325 a guest with groceries included for six or more, and a simpler table starts from $165 a guest. Tell us about allergies in your first message.',
          ],
        },
        {
          heading: 'A sample elopement day on the Kohala Coast',
          paras: [
            'Morning: a slow breakfast and a swim. Midday: rest out of the sun, while the chef shops on the west side. Early afternoon: hair, make-up and the drive to the ceremony site.',
            'Late afternoon: ceremony, then portraits along the coast until the light goes. Meanwhile, the chef sets up the house, chills the champagne you could not have on the beach and lays the table.',
            'Evening: you come back to a quiet house, a toast, and a plated dinner for two or a long table for the family. The kitchen is cleaned when the evening ends, and there is nothing to drive to.',
          ],
        },
        {
          heading: 'When it is more than an elopement',
          paras: [
            'If the guest list grows past about ten, the dinner needs servers, and we quote it as [Big Island catering](/catering) for roughly 10 to 75 guests, with staff as separate hourly lines.',
            'If there is a welcome dinner, a reception and a brunch the morning after, that is a wedding week. [Wedding catering Big Island](/weddings) covers it from $225 a guest plus staffing, with each event as its own line.',
          ],
        },
        {
          heading: 'Prices, inquiry and how to start',
          paras: [
            'The Big Island is an inquiry island for us. Send the details, we confirm in writing whether a chef is available for your date and address, and then it is booked. A 20% service charge and Hawaiʻi GET are their own lines on every quote, a 50% deposit locks the date and gratuity is voluntary. Travel outside the Kona–Kohala corridor starts from a published $75 line.',
            'The full rate card is on [Big Island private chef cost](/pricing), and the island overview is [private chef Big Island](/). To start, send the rental address, the date, how many will be at dinner and two lines about the evening. Use the inquiry form or WhatsApp at +1 808-468-7748.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do we need a permit to elope on a Big Island beach?',
          a: 'For a paid ceremony on a state beach, yes. Your vendor normally holds a right-of-entry permit from the Department of Land and Natural Resources, with a two-hour limit and no alcohol or furniture.',
        },
        {
          q: 'When should we meet the marriage license agent?',
          a: 'Apply online first, then meet the agent together in person no sooner than 30 days before the ceremony. The license is valid for 30 days in Hawaiʻi.',
        },
        {
          q: 'Should we base ourselves in Kona or Hilo?',
          a: 'Pick one side for the ceremony and dinner. The west side is drier and sunnier with ocean sunsets. The east side is greener and wetter, and the drive between them is long.',
        },
        {
          q: 'How much does an elopement dinner on the Big Island cost?',
          a: 'Dinner for two or an elopement dinner is published from $825 per event. Service charge and GET are separate lines, and bookings are confirmed by inquiry.',
        },
        {
          q: 'Can you cook our elopement dinner near Hilo?',
          a: 'We cook west-side first. East-side dinners are quoted case by case, and we do not plan a same-evening round trip from the Kohala Coast.',
        },
        {
          q: 'Can family join the dinner?',
          a: 'Yes. With six or more guests it is a Signature dinner at $210–$325 a guest with groceries included. Past about ten, we quote it as catering.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'Private chef Kona' },
        { path: '/weddings', label: 'Wedding catering Big Island' },
        { path: '/catering', label: 'Big Island catering' },
        { path: '/pricing', label: 'Big Island private chef cost' },
        { path: '/blog/proposal-dinners', label: 'Proposal dinners' },
      ],
    },
    {
      feature: true,
      slug: 'kona-restaurants-dining-guide',
      keyword: 'kona restaurants',
      datePublished: '2026-10-20',
      name: 'Kona restaurants dining guide',
      h1: 'Kona restaurants — Aliʻi Drive, the harbour and when to eat at the rental.',
      title: 'Kona Restaurants — Where to Eat and When to Stay In | myCHEF',
      description:
        'Kona restaurants for a villa week: Aliʻi Drive sunset tables, Keauhou, the harbour, local plate-lunch spots, Kohala resorts and when a chef night wins.',
      lede:
        'Kona restaurants range from oceanfront rooms on Aliʻi Drive to plate-lunch counters up the hill and resort dining along the Kohala Coast. This guide helps families in a Kona rental decide which nights to book a table and which to keep at the house.',
      photo: 'dinKona',
      body: [],
      sections: [
        {
          heading: 'What “Kona restaurants” really covers',
          paras: [
            'Kona is both a town and a whole coast. When people search for Kona restaurants they usually mean Kailua-Kona, the west-side town where Aliʻi Drive runs along the water. The wider Kona district also takes in Keauhou to the south, the coffee country upslope around Hōlualoa, and the harbour and airport stretch to the north. Beyond that, the Kohala Coast resorts at Waikoloa and Mauna Lani have their own dining rooms.',
            'For a villa week, that geography matters more than any ranked list. Most of our guests stay in a rental somewhere along this coast and want two or three good nights out, plus easy dinners at the house on the days that start with an early snorkel or end with a long drive.',
          ],
        },
        {
          heading: 'Aliʻi Drive and Kailua Village: sunset tables',
          paras: [
            'The oceanfront restaurants on and just off Aliʻi Drive are what most visitors picture: open-air rooms, a mai tai and the sun dropping into the Pacific on the west-facing coast. They are busy at sunset, especially in winter and over holiday weeks, so a reservation for the table you actually want is worth making early. Ask for an ocean-side seat when you book and expect a crowd in the village on weekend evenings.',
            'We do not publish rankings, ratings or partner restaurants. Search results are full of top-ten lists already. Book directly, mention dietary needs when you reserve, and check parking, because Kailua Village is compact and the evening rush is real.',
          ],
        },
        {
          heading: 'Where locals eat in Kona',
          paras: [
            'A common question is where locals eat, and the honest answer is that it is not only the oceanfront rooms. Plate lunch, poke from a grocery-store counter, saimin, food trucks and casual family places in town and up the hill feed most of the west side. They are the right call for a lunch between beaches, and they are a good way to taste the island without a reservation.',
            'Market mornings fit the same pattern. Our [Kona farmers market guide](/blog/kona-farmers-market-villa-week) covers west-side shopping that turns into a dinner at the house.',
          ],
        },
        {
          heading: 'Keauhou, the harbour and the coffee country',
          paras: [
            'South of town, Keauhou is a quieter resort area with its own restaurants and a bay that many evening manta ray snorkel trips use. If your group has a manta trip booked, dinner either needs to be early or needs to be waiting at the house when everyone comes back wet and hungry. Our [Keauhou](/keauhou) page covers villa dinners in that pocket.',
            'North of town, the boat harbour has casual waterfront spots, and the drive past the airport leads to the Kohala resorts. Upslope, Hōlualoa is a small coffee village with galleries and a slower pace, better for an afternoon than a late dinner on winding roads.',
          ],
        },
        {
          heading: 'Kohala Coast resort dining: worth the drive?',
          paras: [
            'The Waikoloa and Mauna Lani resorts have full-service restaurants, and some are among the most polished rooms on the island. From a Kailua-Kona rental they are a real drive up the coast, which is fine for one special night and tiring for a family every evening. If you are staying at Waikoloa, our [Waikoloa](/waikoloa) page covers dinners at the house up there.',
            'A practical rule: book the resort night on a rest day, not after a volcano trip or a full day in the water. The Hilo side and Volcano are a different day entirely, and our [east-side notes](/east-side) explain why we quote that side separately.',
          ],
        },
        {
          heading: 'When a chef night at the rental beats a restaurant',
          paras: [
            'Some nights a table in town is the wrong plan. A group of ten or twelve rarely gets a good sunset table without booking far ahead. Mixed diets, toddlers who eat at five, grandparents who do not want to drive after dark, or a day that ends late from a manta trip all point the same way: dinner at the house.',
            'That is the evening a [private chef Kona](/private-chef) booking is built for. The chef plans the menu, shops, cooks in your kitchen, serves on the lānai and leaves the kitchen clean, and the sunset is still yours. Fish is named as what it is on the day, and our [fish species notes](/blog/fish-species) explain how we handle that. For the bigger picture of villa dinners on the island, see [private chef Big Island](/).',
          ],
        },
        {
          heading: 'A Kona week that mixes restaurants and the house',
          paras: [
            'A pattern that works for most families: two reserved nights out, one sunset room on Aliʻi Drive and one resort or special-occasion dinner, plus two or three chef dinners at the rental and a couple of easy evenings with plate lunch or leftovers. That keeps the week relaxed and the budget clear.',
            'Bigger occasions change the plan. A birthday for twenty, a reunion dinner or a wedding-week welcome party is a staffed event rather than a chef dinner. [Big Island catering](/catering) covers staffed villa events on the Kona–Kohala coast, with servers at $80 an hour and a sous-chef at $105 an hour on four- to five-hour minimums, listed as their own lines.',
          ],
        },
        {
          heading: 'What a Kona villa dinner costs with us',
          paras: [
            'Signature dinners on Hawaiʻi Island are published at $210–$325 a guest with groceries included, for a minimum party of six, and a simpler table starts from $165 a guest. Stay Chef days for a chef and an assistant start from $1,450 a day for one meal, with groceries billed at cost and receipts handed over. Houses outside the Kona–Kohala corridor add a published travel line from $75, and the east side is quoted separately.',
            'A 20% service charge and Hawaiʻi GET are added as their own lines, a 50% deposit locks the date, and gratuity is voluntary. The full rate card is on [Big Island private chef cost](/pricing). Hawaiʻi Island is by inquiry, so the written quote is the confirmed total once a chef is confirmed for your date.',
          ],
        },
        {
          heading: 'How to plan your Kona nights',
          paras: [
            'Send the rental address, your dates, the number of adults and children, any allergies and which nights you already have restaurant tables for. We will suggest which evenings suit a chef dinner and reply with a written quote. You can use the inquiry form or message us on WhatsApp at +1 808-468-7748.',
            'Winter and holiday weeks fill first on the west side, for restaurants and for chef dates alike. If your dates are firm, send them early even if the menu is still open.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Do I need reservations at Kona restaurants?',
          a: 'For sunset tables on Aliʻi Drive and resort dining rooms, yes, especially in winter and over holidays. Casual places and plate-lunch counters are walk-in.',
        },
        {
          q: 'Where do locals eat in Kona?',
          a: 'Mostly casual places: plate lunch, poke counters, food trucks and family restaurants in town and up the hill, not only the oceanfront rooms.',
        },
        {
          q: 'Is it worth driving to the Kohala Coast resorts for dinner?',
          a: 'For one special night, yes. From a Kailua-Kona rental it is a real drive, so book it on a rest day rather than after a long day out.',
        },
        {
          q: 'When is a private chef better than a Kona restaurant?',
          a: 'Large groups, mixed diets, small children, a late manta trip or any night you want sunset on your own lānai without driving afterwards.',
        },
        {
          q: 'What does a chef dinner at a Kona rental cost?',
          a: 'Signature dinners are $210–$325 a guest with groceries included, minimum six. Stay Chef starts from $1,450 a day with groceries at cost. Service charge and GET are separate lines.',
        },
        {
          q: 'Can you cook for a group of 25 in Kona?',
          a: 'Yes, by inquiry. A group that size is quoted as Big Island catering, with servers and a sous-chef as separate hourly lines.',
        },
      ],
      related: [
        { path: '/blog/thanksgiving-dinner-kona', label: 'Thanksgiving dinner in Kona' },
        { path: '/blog/waikoloa-restaurants-dining-guide', label: 'Waikoloa restaurants guide' },
        { path: '/private-chef', label: 'Private chef Kona' },
        { path: '/catering', label: 'Big Island catering' },
        { path: '/', label: 'Private chef Big Island' },
        { path: '/pricing', label: 'Big Island private chef cost' },
        { path: '/blog/dining-in-kona', label: 'Kona kitchen notes' },
      ],
    },
    {
      feature: true,
      slug: 'waikoloa-restaurants-dining-guide',
      keyword: 'waikoloa restaurants',
      datePublished: '2026-10-21',
      name: 'Waikoloa restaurants dining guide',
      h1: 'Waikoloa restaurants — the beach resort, the village up the hill and nights at the rental.',
      title: 'Waikoloa Restaurants — Resort, Village or Villa | myCHEF',
      description:
        'Waikoloa restaurants for a Kohala Coast stay: beach resort dining, Waikoloa Village, Waikoloa vs Kona, sunset timing and when a chef at the rental wins.',
      lede:
        'Waikoloa restaurants fall into two places that share a name: the Waikoloa Beach Resort on the Kohala Coast, with hotel dining rooms and a shopping centre, and Waikoloa Village, the residential town up the hill. This guide helps families in a Waikoloa rental choose where to eat out and which nights to keep at the house.',
      photo: 'dinWaikoloa',
      body: [],
      sections: [
        {
          heading: 'Waikoloa Beach Resort or Waikoloa Village?',
          paras: [
            'Most visitors who search for Waikoloa restaurants mean the Waikoloa Beach Resort, the coastal resort area north of Kona International Airport off Queen Kaʻahumanu Highway. It groups hotels, condos, golf courses and the Queens’ Marketplace shopping centre, and the resort lists free entertainment and cultural activities each month. Its restaurants sit inside the hotels, around the golf clubhouses and in the shopping areas.',
            'Waikoloa Village is a separate residential community inland and upslope, reached by Waikoloa Road. It has its own everyday shops and places to eat, and it feels like a neighbourhood rather than a resort. Search results often mix the two, so check which one an address is in before you plan dinner around it.',
          ],
        },
        {
          heading: 'Resort dining on the Kohala Coast',
          paras: [
            'The resort restaurants range from poolside grills and casual counters to dressier dining rooms with ocean views. They are convenient if you are staying on the resort, and they are busiest at sunset, in winter and over holiday weeks. Reserve the table you want, mention allergies when you book, and expect resort pricing.',
            'We do not publish rankings, ratings or partner restaurants, and there are already plenty of top-ten lists. The useful question is not which room is best but which nights you want to be in one. The Mauna Lani resort, just up the coast, has its own restaurants too, and our [Mauna Lani](/mauna-lani) page covers dinners at the house there.',
          ],
        },
        {
          heading: 'Where do locals eat around Waikoloa?',
          paras: [
            'Mostly outside the resort dining rooms. Casual places, plate lunch, poke from a grocery counter and food trucks feed much of the west side, in Waikoloa Village, down the coast in Kailua-Kona and up the hill in Waimea. They are the right call for lunch between beaches and a good way to eat like the island does.',
            'Shopping for the house follows the same logic. Our [Kona farmers market guide](/blog/kona-farmers-market-villa-week) covers west-side markets and how to keep produce cool on the drive back up the coast.',
          ],
        },
        {
          heading: 'Is it better to stay in Waikoloa or Kona?',
          paras: [
            'It depends on how your family wants to eat. Kailua-Kona has a walkable town with many more restaurants, from oceanfront rooms on Aliʻi Drive to local spots, and our [Kona restaurants guide](/blog/kona-restaurants-dining-guide) covers them. Waikoloa is quieter and more resort-like, with fewer choices within walking distance and dry, sunny weather that suits outdoor dinners.',
            'In practice, a Waikoloa stay means more dinners at the house or the resort and fewer evenings driving into town. That is a good fit for families who want calm nights, and it is where a chef at the rental makes the most difference.',
          ],
        },
        {
          heading: 'Sunsets and timing on the Kohala Coast',
          paras: [
            'The Kohala Coast faces west across lava fields, so sunset over the water is the main event of most evenings. Restaurants with a view fill in the hour around it. If you book a table, book early; if you want the sunset from your own lānai, plan dinner at the house to start as the light goes.',
            'The coast is also a real distance from the rest of the island. Volcano and Hilo are a full day out, and our [east-side notes](/east-side) explain why we treat that side separately. After a long day out, a dinner waiting at the rental is often what tired families want.',
          ],
        },
        {
          heading: 'When a chef night at the rental beats a restaurant',
          paras: [
            'Large groups, mixed diets, small children who eat at five, a birthday or anniversary, or a day that ends late after a boat trip all point the same way. That is the evening a [private chef Kona](/private-chef) booking is built for, and the Waikoloa resort area is a base zone inside our Kona–Kohala corridor. The chef plans the menu, shops, cooks in your kitchen, serves and leaves the kitchen clean.',
            'Our [Waikoloa](/waikoloa) page covers dinners at the house in the resort area, and our [fish species notes](/blog/fish-species) explain how we name fish as what is available on the day. For an overview of villa dinners across the island, see [private chef Big Island](/).',
          ],
        },
        {
          heading: 'Groups, reunions and celebrations',
          paras: [
            'A welcome dinner for twenty, a reunion buffet or a wedding-week party at a Waikoloa or Mauna Lani house is a staffed event rather than a chef dinner. [Big Island catering](/catering) covers staffed villa events on the Kona–Kohala coast, with servers at $80 an hour and a sous-chef at $105 an hour on four- to five-hour minimums, listed as their own lines.',
          ],
        },
        {
          heading: 'What a Waikoloa villa dinner costs with us',
          paras: [
            'Signature dinners on Hawaiʻi Island are published at $210–$325 a guest with groceries included, for a minimum party of six, and a simpler table starts from $165 a guest. Stay Chef days for a chef and an assistant start from $1,450 a day for one meal, with groceries billed at cost and receipts handed over. The Waikoloa resort area is a base zone, so the published travel line from $75 applies only to houses outside the Kona–Kohala corridor.',
            'A 20% service charge and Hawaiʻi GET are added as their own lines, a 50% deposit locks the date, and gratuity is voluntary. The full rate card is on [Big Island private chef cost](/pricing). Hawaiʻi Island is by inquiry, so the written quote is the confirmed total once a chef is confirmed for your date.',
          ],
        },
        {
          heading: 'How to plan your Waikoloa nights',
          paras: [
            'Send the rental address, your dates, the number of adults and children, any allergies and the nights you already have restaurant tables for. We will suggest which evenings suit a chef dinner and reply with a written quote. Use the inquiry form or message us on WhatsApp at +1 808-468-7748.',
            'Winter and holiday weeks fill first on the Kohala Coast, for restaurants and chef dates alike. If your dates are firm, send them early even if the menu is still open.',
          ],
        },
      ],
      faqs: [
        {
          q: 'What restaurants are at Waikoloa Beach Resort?',
          a: 'Dining is inside the resort hotels, at the golf clubhouses and around the Queens’ Marketplace shopping centre, from casual counters to ocean-view dining rooms.',
        },
        {
          q: 'Is Waikoloa Village the same as Waikoloa Beach Resort?',
          a: 'No. Waikoloa Village is a residential town inland and upslope, reached by Waikoloa Road. The beach resort is on the coast off Queen Kaʻahumanu Highway.',
        },
        {
          q: 'Is it better to stay in Waikoloa or Kona for restaurants?',
          a: 'Kailua-Kona has far more restaurants within walking distance. Waikoloa is quieter and resort-style, so more families eat at the house or the resort.',
        },
        {
          q: 'Do I need reservations at Waikoloa restaurants?',
          a: 'For sunset tables and resort dining rooms, yes, especially in winter and over holidays. Casual counters are usually walk-in.',
        },
        {
          q: 'What does a chef dinner at a Waikoloa rental cost?',
          a: 'Signature dinners are $210–$325 a guest with groceries included, minimum six. Service charge and GET are separate lines and a 50% deposit holds the date.',
        },
        {
          q: 'Do you cook at Waikoloa rentals?',
          a: 'Yes, by inquiry. The Waikoloa resort area is a base zone inside our Kona–Kohala corridor, so no travel line applies there.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'Private chef Kona' },
        { path: '/catering', label: 'Big Island catering' },
        { path: '/', label: 'Private chef Big Island' },
        { path: '/pricing', label: 'Big Island private chef cost' },
        { path: '/blog/dining-in-waikoloa', label: 'Waikoloa kitchen notes' },
      ],
    },
    {
      feature: true,
      slug: 'thanksgiving-dinner-kona',
      keyword: 'thanksgiving dinner kona',
      datePublished: '2026-10-22',
      name: 'Thanksgiving dinner in Kona',
      h1: 'Thanksgiving dinner in Kona — the turkey, the coast and dinner at the rental.',
      title: 'Thanksgiving Dinner in Kona — At Your Rental | myCHEF',
      description:
        'Thanksgiving dinner in Kona 2026: resort buffet, to-go meal or a chef at your rental, turkey and grocery logistics, sunset timing and Big Island prices.',
      lede:
        'Thanksgiving falls on Thursday 26 November 2026, and the Kona side of Hawaiʻi Island is a popular place to spend the long weekend: dry, sunny and quieter than Christmas week. If your family has a house or condo rather than a hotel room, this guide covers how to get a turkey on the table in Kona, where to stay, and when a chef cooking at the rental is the easier plan.',
      photo: 'fmtFamilyBigisland',
      body: [],
      sections: [
        {
          heading: 'Is Kona a good place for Thanksgiving?',
          paras: [
            'For families who want warm weather and a slower pace, yes. The west side of the island is usually dry and sunny, the long weekend leaves time for the beach and the boat trips, and late November is calmer than the weeks around Christmas. Resorts and restaurants in Kailua-Kona and along the Kohala Coast run Thanksgiving buffets and set menus, and they book early.',
            'If your group is staying in a rental with a proper kitchen and a lānai, there is another option: keep the whole day at the house and let someone else cook.',
          ],
        },
        {
          heading: 'Resort buffet, to-go meal or a chef at the rental',
          paras: [
            'A resort buffet suits a couple or a small family staying at that resort. You get turkey and the trimmings with no dishes, but you sit when the room has space, and the drive back along the coast after dinner can be long. Some restaurants and markets sell pre-ordered holiday meals to take away; they sell out and still leave someone reheating in an unfamiliar oven.',
            'A dinner at the house suits multi-generation families and friends sharing a rental. That is the evening a [private chef Kona](/private-chef) booking is built for. The chef plans the menu with you, shops, cooks in your kitchen, serves and leaves the kitchen clean.',
          ],
        },
        {
          heading: 'Where you stay changes the plan',
          paras: [
            'Kailua-Kona town, Keauhou to the south and the coffee country of Hōlualoa above town are all inside our Kona–Kohala corridor, and so are the Waikoloa and Mauna Lani resort areas up the coast. Hōlualoa evenings are cooler, which suits a heavier holiday meal. Our [Kona restaurants guide](/blog/kona-restaurants-dining-guide) and [Waikoloa restaurants guide](/blog/waikoloa-restaurants-dining-guide) cover the other nights of the week.',
            'Hilo and Volcano are on the other side of the island, two and a half to three hours from Kona. We quote them separately with their own team day and never fit them into a west-side day.',
          ],
        },
        {
          heading: 'Turkey and groceries on the west side',
          paras: [
            'Kona has the west side’s larger supermarkets, but whole turkeys, fresh cranberries and specialty items can run short in the days before the holiday, and a Kohala house is a real drive from town. We place the turkey order as soon as your date is confirmed instead of hoping the shelf is full on Wednesday afternoon.',
            'Rental ovens vary from large estate ranges to compact condo units. Tell us the oven size, the burners and whether there is a grill on the lānai when you send the brief, and the chef will plan around it, for example two smaller birds or a turkey roasted in parts. Local produce from the week can go into the sides; our [Kona farmers market guide](/blog/kona-farmers-market-villa-week) shows what the markets carry.',
          ],
        },
        {
          heading: 'A Thanksgiving menu with Kona on the table',
          paras: [
            'Most families want the classics: turkey, stuffing, gravy, mashed potatoes and pie. A Kona table can add local fish as a starter, sweet potato, island greens and a lilikoʻi or coconut dessert next to the pumpkin pie. Many local Thanksgiving tables in Hawaiʻi also carry rice, sushi or poke beside the turkey, and the chef can work those in.',
            'Kona coffee after dinner is a natural finish. We only name a coffee with its origin labelled correctly, and our [coffee labeling notes](/blog/coffee-labeling) explain why. Tell us about allergies, vegetarian guests and children’s plates early.',
          ],
        },
        {
          heading: 'Timing the day on the Kona coast',
          paras: [
            'In late November the sun sets before six on the Kona side. Many families eat in the afternoon, while there is still light on the lānai, and keep the evening for pie and sunset. If part of the group wants a morning snorkel or a boat trip on Thursday, tell us; the chef can shop and prep around it, but a dinner time everyone agrees on keeps the day calm.',
            'Plan a covered spot or an indoor table as the backup. Kona is dry, but afternoon clouds and showers do roll down the slopes, and wind can pick up on the coast.',
          ],
        },
        {
          heading: 'Bigger families and reunion weekends',
          paras: [
            'A family of eight to twelve is a chef dinner. Twenty or more, a buffet across two houses or a weekend of meals is a staffed event, and [Big Island catering](/catering) covers that on the Kona–Kohala coast, with servers at $80 an hour and a sous-chef at $105 an hour on four- to five-hour minimums, listed as their own lines. Our [family reunions notes](/blog/family-reunions) cover the rest of a big-group week.',
            'Many families also want the Friday covered: leftovers turned into a late lunch, or a second, simpler dinner after a day out. Stay Chef days, priced below, cover that without booking a new dinner each night.',
          ],
        },
        {
          heading: 'What Thanksgiving dinner in Kona costs with us',
          paras: [
            'Signature dinners on Hawaiʻi Island are published at $210–$325 a guest with groceries included, for a minimum party of six, and a simpler table starts from $165 a guest. If you want a chef for the whole long weekend, Stay Chef days for a chef and an assistant start from $1,450 a day for one meal, with groceries billed at cost and receipts handed over. The published travel line from $75 applies only to houses outside the Kona–Kohala corridor.',
            'A 20% service charge and Hawaiʻi GET up to 4.712% are added as their own lines, a 50% deposit locks the date and gratuity is voluntary. The full rate card is on [Big Island private chef cost](/pricing). Hawaiʻi Island is by inquiry, so the written quote is the confirmed total once a chef is confirmed for your date.',
          ],
        },
        {
          heading: 'How to ask for Thanksgiving in Kona',
          paras: [
            'Send the rental address, the number of adults and children, allergies and the time you want to eat. Use the inquiry form or message us on WhatsApp at +1 808-468-7748, and we reply with a written quote. Thanksgiving is about five weeks away, so the earlier the better. For villa dinners across the west side, see [private chef Big Island](/).',
          ],
        },
      ],
      faqs: [
        {
          q: 'When is Thanksgiving in 2026?',
          a: 'Thanksgiving Day is Thursday 26 November 2026, so most families get a four-day weekend.',
        },
        {
          q: 'Is Hawaiʻi crowded at Thanksgiving?',
          a: 'It is busier than early November but usually calmer than Christmas week. Resort buffets and restaurant set menus in Kona still book early.',
        },
        {
          q: 'What do people in Hawaiʻi eat for Thanksgiving?',
          a: 'Turkey and the usual sides, often with rice, sushi, poke or other local dishes beside them. A chef can add those to a Kona menu.',
        },
        {
          q: 'Can a private chef cook Thanksgiving at our Kona rental?',
          a: 'Yes, by inquiry. The chef plans the menu, orders the turkey, shops, cooks in your kitchen, serves and cleans up.',
        },
        {
          q: 'How much does a chef-cooked Thanksgiving in Kona cost?',
          a: 'Signature dinners on Hawaiʻi Island are $210–$325 a guest with groceries included, minimum six. Service charge and GET are separate lines and a 50% deposit holds the date.',
        },
        {
          q: 'Do you cook Thanksgiving in Hilo?',
          a: 'Hilo and Volcano are quote-only, with their own team day, because they are two and a half to three hours from Kona.',
        },
      ],
      related: [
        { path: '/private-chef', label: 'Private chef Kona' },
        { path: '/catering', label: 'Big Island catering' },
        { path: '/', label: 'Private chef Big Island' },
        { path: '/pricing', label: 'Big Island private chef cost' },
        { path: '/blog/kona-restaurants-dining-guide', label: 'Kona restaurants guide' },
      ],
    },
  ],
};

export function getFeaturePost(islandId: IslandId, slug: string): FeaturePost | undefined {
  return islandFeaturePosts[islandId].find((row) => row.slug === slug);
}
