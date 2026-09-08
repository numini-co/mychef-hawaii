#!/usr/bin/env python3
"""
seed_expanded_hero_contracts.py
Registers the complete Stage 2 Hero Visual Contracts across all 4 islands
and their primary commercial service pages into the NEO PostgreSQL database.
"""
import os
import psycopg2
from psycopg2.extras import execute_values

DATABASE_URL = os.environ.get(
    "DATABASE_URL",
    "postgresql://neondb_owner:npg_r9qH8ntGCiep@ep-proud-brook-awiy9e7s-pooler.c-12.us-east-1.aws.neon.tech/neondb?sslmode=require"
)

CONTRACTS = [
    # OʻAHU
    (
        "oahu", "Home Flagship", "oahu", "Honolulu / Waikīkī Penthouse / Kahala Estate",
        "Private chef plating an oceanfront dinner inside a modern penthouse or luxury villa kitchen",
        True, True, "Modern stone kitchen island, Honolulu city grid or ocean lanai beyond glass",
        "LANDSCAPE", "16/9", "4/3",
        "A chef’s hands plating a course at a stone island in a penthouse kitchen, the Honolulu city grid at blue hour through floor-to-ceiling glass",
        ["generic beach", "empty plate", "random palm trees", "generic tropical jungle", "text overlay"],
        "/img/oahu/hero-home.jpg"
    ),
    (
        "oahu", "Private Chef", "oahu", "Honolulu Condo / Kahala Estate",
        "Private chef actively finishing courses in a modern Honolulu luxury kitchen",
        True, True, "Modern stone counter, warm residential lighting, coastal Honolulu backdrop",
        "LANDSCAPE", "16/9", "4/3",
        "A chef working at a modern Honolulu condo kitchen in blue-hour light, courses in progress on a stone counter",
        ["generic beach", "empty dining room", "unattended plate"],
        "/img/oahu/hero-private-chef.jpg"
    ),
    (
        "oahu", "Stay Chef", "oahu", "Ko Olina / Kailua / North Shore Villa",
        "Private chef preparing meals in a luxury vacation residence kitchen during a multi-day stay",
        True, True, "Spacious open-concept villa kitchen, fresh tropical produce, warm family environment",
        "LANDSCAPE", "16/9", "4/3",
        "A chef working in a luxury villa kitchen during a multi-day stay on Oʻahu",
        ["sterile commercial kitchen", "isolated food close-up"],
        "/img/oahu/stay-chef.jpg"
    ),
    (
        "oahu", "Corporate Catering", "oahu", "Downtown Honolulu / Kakaʻako / Waikīkī",
        "Executive dinner setup in a luxury private residence overlooking the city skyline",
        True, True, "Plated boardroom-style courses, elegant glassware, city views",
        "LANDSCAPE", "16/9", "4/3",
        "A boardroom-style executive dinner plated in a Honolulu residence with city views",
        ["informal beach party", "empty buffet trays"],
        "/img/oahu/corporate.jpg"
    ),
    (
        "oahu", "Catering", "oahu", "Oʻahu Estate Lawn / Private Venue",
        "Staffed event catering service team executing food presentation for a celebration",
        True, True, "Professional culinary team, outdoor estate dining, passed pupus or buffet",
        "LANDSCAPE", "16/9", "4/3",
        "Staffed celebration catering on an outdoor Oʻahu estate lawn",
        ["generic hotel ballroom", "unattended food warmers"],
        "/img/oahu/hero-catering.jpg"
    ),
    (
        "oahu", "Wedding Catering", "oahu", "Private Oʻahu Oceanfront Estate",
        "Staffed wedding reception tables facing the ocean at golden hour",
        True, True, "Ocean lawn, wedding dinner tables, wine service, elegant linen",
        "LANDSCAPE", "16/9", "4/3",
        "Golden-hour wedding dinner on an Oʻahu estate lawn facing the ocean",
        ["convention ballroom", "generic stock flowers"],
        "/img/oahu/hero-weddings.jpg"
    ),

    # MAUI
    (
        "maui", "Home Flagship", "maui", "Wailea / Mākena Oceanfront Villa",
        "Oceanfront villa lanai dining table at golden hour sunset with chef visible in active service",
        True, True, "Wailea or Kapalua sunset ocean horizon, natural stone or wood lanai, elegant table setting",
        "LANDSCAPE", "16/9", "4/3",
        "A chef plating a multi-course dinner on an oceanfront Wailea villa lānai at golden sunset",
        ["generic beach", "empty plate", "harsh indoor flash", "restaurant dining room"],
        "/img/maui/hero-home.jpg"
    ),
    (
        "maui", "Private Chef", "maui", "Wailea / Kapalua Villa",
        "Chef plating an intimate coursed dinner overlooking the ocean",
        True, True, "Luxury oceanview kitchen counter, chef hands, fine dining plate",
        "LANDSCAPE", "16/9", "4/3",
        "A private chef finishing an island catch course in a Wailea villa kitchen facing the ocean",
        ["empty dining table", "generic beach shot"],
        "/img/maui/hero-private-chef.jpg"
    ),
    (
        "maui", "Stay Chef", "maui", "Wailea / Mākena Villa",
        "Chef plating an oceanfront dinner in a luxury villa during an extended stay",
        True, True, "Spacious lanai kitchen, sunset glow, relaxed luxury vacation vibe",
        "LANDSCAPE", "16/9", "4/3",
        "A chef plating an oceanfront dinner in a luxury Wailea villa during an extended stay",
        ["empty room", "generic tropical foliage"],
        "/img/maui/hero-stay-chef.jpg"
    ),
    (
        "maui", "Date Night & Romance", "maui", "Wailea / Mākena Oceanfront Lānai",
        "Two place settings on a private oceanfront lanai at twilight with candles and sunset horizon",
        True, True, "Intimate candlelit table, ocean horizon, champagne, sunset sky",
        "LANDSCAPE", "16/9", "4/3",
        "Two place settings on a private oceanfront Wailea lānai at twilight with candles and sunset horizon",
        ["crowded dining room", "daytime picnic"],
        "/img/maui/hero-date-night.jpg"
    ),
    (
        "maui", "The Wedding Week", "maui", "Private Maui Oceanfront Estate",
        "Curated wedding reception dinner sequence on a Maui ocean estate lawn",
        True, True, "Full week culinary timeline, outdoor dining, evening string lighting",
        "LANDSCAPE", "16/9", "4/3",
        "Evening wedding reception dining table on a private Maui estate with ocean views",
        ["indoor hotel ballroom", "plastic tableware"],
        "/img/maui/wedding-week-band.jpg"
    ),

    # KAUAʻI
    (
        "kauai", "Home Flagship", "kauai", "Hanalei / Princeville Estate",
        "Lush private estate veranda or open kitchen with private chef and Garden Island greenery",
        True, True, "Dramatic North Shore verdant mountains, Princeville bluff, or South Shore covered veranda",
        "LANDSCAPE", "16/9", "4/3",
        "A private chef preparing dinner at an open-air veranda kitchen in Princeville overlooking lush cliffs",
        ["generic ocean sunset without garden greenery", "empty plate", "crowded hotel banquet"],
        "/img/kauai/hero-home.jpg"
    ),
    (
        "kauai", "Private Chef", "kauai", "Princeville / Hanalei Veranda",
        "Chef plating coursed dinner on a plantation veranda surrounded by lush greenery",
        True, True, "Open-air veranda, soft island light, local produce",
        "LANDSCAPE", "16/9", "4/3",
        "A chef plating a coursed dinner on a Kauaʻi estate veranda in soft light",
        ["arid beach", "generic hotel room"],
        "/img/kauai/hero-private-chef.jpg"
    ),
    (
        "kauai", "Stay Chef", "kauai", "Hanalei Riverfront Estate",
        "Chef preparing a fresh morning tropical fruit spread on a riverfront veranda",
        True, True, "Veranda dining, morning mist, tropical fruit presentation",
        "LANDSCAPE", "16/9", "4/3",
        "Our chef preparing a fresh morning tropical fruit spread on a Hanalei riverfront estate lānai",
        ["busy city kitchen", "dry desert landscape"],
        "/img/kauai/hero-stay-chef.jpg"
    ),
    (
        "kauai", "Retreat Catering", "kauai", "North Shore Plantation Veranda",
        "Communal retreat breakfast spread on a veranda with morning mist and greenery",
        True, True, "Wholesome wellness dishes, steam rising, peaceful nature setting",
        "LANDSCAPE", "16/9", "4/3",
        "A retreat breakfast spread on a plantation veranda, steam rising in morning mist",
        ["junk food", "cramped indoor buffet"],
        "/img/kauai/hero-retreats.jpg"
    ),

    # BIG ISLAND
    (
        "bigisland", "Home Flagship", "bigisland", "Kona–Kohala Coast Lava Oceanfront",
        "Sunset coursed dinner on a black basalt terrace with active chef plating service",
        True, True, "Dramatic black lava basalt, modern oceanfront residence, open fire/grill or sunset rim lighting",
        "LANDSCAPE", "16/9", "4/3",
        "A chef actively plating an oceanfront dinner on a black lava stone terrace on the Kohala Coast at sunset",
        ["generic sandy beach", "rainforest jungle without volcanic context", "indoor ballroom"],
        "/img/bigisland/hero-home.jpg"
    ),
    (
        "bigisland", "Private Chef", "bigisland", "Kohala Estate Stone Pass",
        "Chef finishing plate over a dark stone pass with intense rim lighting",
        True, True, "Dark volcanic stone, focused chef hands, artisanal plating",
        "LANDSCAPE", "16/9", "4/3",
        "Our chef finishing the evening’s main course under the pass at a private Kohala estate",
        ["bright tropical pastel styling", "generic beach shot"],
        "/img/bigisland/hero-private-chef.jpg"
    ),
    (
        "bigisland", "Stay Chef", "bigisland", "Kūkiʻo / Hualālai Villa",
        "Chef working through modern villa kitchen during an extended family stay",
        True, True, "Modern estate kitchen, volcanic stone finishes, multi-meal preparation",
        "LANDSCAPE", "16/9", "4/3",
        "Our chef working through the villa kitchen during a 6-day multi-meal family stay",
        ["crowded restaurant line", "empty plate on sand"],
        "/img/bigisland/panel-stay-chef.jpg"
    ),
    (
        "bigisland", "Catering", "bigisland", "Kohala Coast Ocean Terrace",
        "Staffed celebration dinner on an oceanfront lava terrace under evening string lights",
        True, True, "Staffed tables, black basalt rocks, ocean sunset, candlelit dinner",
        "LANDSCAPE", "16/9", "4/3",
        "Staffed 45-guest celebration our culinary team executed on a private lava ocean terrace",
        ["generic white sand wedding", "hotel ballroom"],
        "/img/bigisland/hero-catering.jpg"
    ),
]

def main():
    print(f"Connecting to Neon PostgreSQL...")
    conn = psycopg2.connect(DATABASE_URL)
    cur = conn.cursor()

    print("Refreshing Hero Visual Contracts...")
    cur.execute("TRUNCATE TABLE seo_hero_contracts CASCADE;")
    execute_values(cur, """
        INSERT INTO seo_hero_contracts (
            site_id, service, island, location, subject,
            people_required, food_required, environment_required,
            orientation, desktop_crop, mobile_crop,
            alt_text, forbidden_elements, asset_path
        ) VALUES %s
    """, CONTRACTS)
    conn.commit()
    print(f"Successfully seeded {len(CONTRACTS)} Stage 2 Hero Visual Contracts in NEO!")
    cur.close()
    conn.close()

if __name__ == "__main__":
    main()
