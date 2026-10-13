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
  ],
};

export function getFeaturePost(islandId: IslandId, slug: string): FeaturePost | undefined {
  return islandFeaturePosts[islandId].find((row) => row.slug === slug);
}
