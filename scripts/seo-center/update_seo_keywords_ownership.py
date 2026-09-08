#!/usr/bin/env python3
"""
update_seo_keywords_ownership.py
Populates and locks clean, high-value commercial keywords across the statewide hub
and all 4 island subdomains according to NEO Rule 001, Rule 002, Rule 003, Rule 005, Rule 011.
"""
import os
import psycopg2
from psycopg2.extras import execute_values, DictCursor

DATABASE_URL = os.environ.get(
    "DATABASE_URL",
    "postgresql://neondb_owner:npg_r9qH8ntGCiep@ep-proud-brook-awiy9e7s-pooler.c-12.us-east-1.aws.neon.tech/neondb?sslmode=require&connect_timeout=15"
)

# [site_id, slug, keyword, intent, volume, cpc, kd]
MAPPINGS = [
    # MAIN STATEWIDE HUB
    ("hub", "", "private chef hawaii", "COMMERCIAL", 2400, 4.50, 42),
    ("hub", "pricing", "catering prices hawaii", "COMMERCIAL", 720, 3.80, 28),
    ("hub", "multi-island", "multi-island catering hawaii", "TRANSACTIONAL", 210, 5.20, 18),
    ("hub", "calculator", "private chef hawaii cost calculator", "TRANSACTIONAL", 320, 3.50, 20),

    # OʻAHU FLAGSHIP
    ("oahu", "", "private chef oahu", "COMMERCIAL", 1900, 4.20, 38),
    ("oahu", "private-chef", "hire private chef oahu", "TRANSACTIONAL", 880, 4.80, 32),
    ("oahu", "catering", "catering oahu", "COMMERCIAL", 1600, 3.90, 35),
    ("oahu", "weddings", "wedding catering oahu", "TRANSACTIONAL", 1100, 5.10, 40),
    ("oahu", "stay-chef", "stay chef oahu", "TRANSACTIONAL", 390, 4.60, 22),
    ("oahu", "corporate", "corporate catering honolulu", "TRANSACTIONAL", 480, 5.50, 25),
    ("oahu", "pricing", "private chef oahu cost", "COMMERCIAL", 590, 3.70, 24),
    ("oahu", "locations/waikiki", "private chef waikiki", "COMMERCIAL", 720, 4.10, 26),
    ("oahu", "locations/honolulu", "private chef honolulu", "COMMERCIAL", 1300, 4.30, 34),
    ("oahu", "locations/kahala-gold-coast", "private chef kahala", "COMMERCIAL", 260, 4.90, 18),
    ("oahu", "locations/ko-olina", "private chef ko olina", "COMMERCIAL", 480, 4.40, 21),
    ("oahu", "locations/kailua-lanikai", "private chef kailua", "COMMERCIAL", 390, 4.30, 20),
    ("oahu", "locations/north-shore", "private chef north shore oahu", "COMMERCIAL", 590, 4.50, 23),
    ("oahu", "locations/turtle-bay", "private chef turtle bay", "COMMERCIAL", 210, 4.20, 15),
    ("oahu", "services/date-night", "date night private chef oahu", "TRANSACTIONAL", 320, 4.10, 19),
    ("oahu", "services/vacation-chef", "vacation chef oahu", "TRANSACTIONAL", 290, 4.30, 17),

    # MAUI FLAGSHIP
    ("maui", "", "private chef maui", "COMMERCIAL", 2200, 4.80, 41),
    ("maui", "private-chef", "hire private chef maui", "TRANSACTIONAL", 950, 5.20, 35),
    ("maui", "catering", "catering maui", "COMMERCIAL", 1400, 4.10, 36),
    ("maui", "weddings", "wedding catering maui", "TRANSACTIONAL", 1300, 5.40, 42),
    ("maui", "weddings/wedding-week", "wedding week catering maui", "TRANSACTIONAL", 420, 5.80, 24),
    ("maui", "stay-chef", "stay chef maui", "TRANSACTIONAL", 480, 4.90, 23),
    ("maui", "services/date-night", "private chef maui for two", "TRANSACTIONAL", 510, 4.60, 21),
    ("maui", "pricing", "private chef maui cost", "COMMERCIAL", 680, 3.90, 26),
    ("maui", "locations/wailea", "private chef wailea", "COMMERCIAL", 890, 5.10, 29),
    ("maui", "locations/makena", "private chef makena", "COMMERCIAL", 310, 5.30, 18),
    ("maui", "locations/kapalua", "private chef kapalua", "COMMERCIAL", 520, 4.90, 22),
    ("maui", "locations/kaanapali", "private chef kaanapali", "COMMERCIAL", 610, 4.70, 24),
    ("maui", "locations/kihei", "private chef kihei", "COMMERCIAL", 450, 4.20, 20),
    ("maui", "locations/kula-upcountry", "private chef upcountry maui", "COMMERCIAL", 220, 4.30, 16),

    # KAUAʻI FLAGSHIP
    ("kauai", "", "private chef kauai", "COMMERCIAL", 1600, 4.40, 36),
    ("kauai", "private-chef", "hire private chef kauai", "TRANSACTIONAL", 720, 4.90, 30),
    ("kauai", "catering", "catering kauai", "COMMERCIAL", 980, 4.00, 32),
    ("kauai", "weddings", "wedding catering kauai", "TRANSACTIONAL", 850, 5.10, 38),
    ("kauai", "retreat-catering", "retreat catering kauai", "TRANSACTIONAL", 340, 4.80, 21),
    ("kauai", "stay-chef", "stay chef kauai", "TRANSACTIONAL", 380, 4.70, 20),
    ("kauai", "pricing", "private chef kauai cost", "COMMERCIAL", 490, 3.80, 22),
    ("kauai", "locations/hanalei", "private chef hanalei", "COMMERCIAL", 410, 4.80, 21),
    ("kauai", "locations/poipu", "private chef poipu", "COMMERCIAL", 550, 4.60, 23),
    ("kauai", "locations/princeville", "private chef princeville", "COMMERCIAL", 480, 4.70, 22),
    ("kauai", "locations/koloa", "private chef koloa", "COMMERCIAL", 240, 4.30, 17),

    # BIG ISLAND FLAGSHIP
    ("bigisland", "", "private chef big island", "COMMERCIAL", 1800, 4.50, 37),
    ("bigisland", "private-chef", "hire private chef big island", "TRANSACTIONAL", 790, 5.00, 31),
    ("bigisland", "catering", "catering big island", "COMMERCIAL", 1100, 4.10, 33),
    ("bigisland", "weddings", "wedding catering big island", "TRANSACTIONAL", 920, 5.20, 39),
    ("bigisland", "stay-chef", "stay chef big island", "TRANSACTIONAL", 410, 4.80, 22),
    ("bigisland", "pricing", "private chef big island cost", "COMMERCIAL", 530, 3.90, 24),
    ("bigisland", "locations/kona", "private chef kona", "COMMERCIAL", 1200, 4.60, 32),
    ("bigisland", "locations/kohala-coast", "private chef kohala coast", "COMMERCIAL", 640, 5.10, 25),
    ("bigisland", "locations/hualalai", "private chef hualalai", "COMMERCIAL", 380, 5.40, 19),
    ("bigisland", "locations/waikoloa", "private chef waikoloa", "COMMERCIAL", 510, 4.70, 22),
    ("bigisland", "locations/mauna-lani", "private chef mauna lani", "COMMERCIAL", 430, 5.00, 20),
    ("bigisland", "locations/mauna-kea", "private chef mauna kea", "COMMERCIAL", 320, 5.20, 18),
    ("bigisland", "locations/hilo", "private chef hilo", "COMMERCIAL", 390, 4.00, 20),
    ("bigisland", "locations/waimea-kamuela", "private chef waimea big island", "COMMERCIAL", 260, 4.20, 17),
]

def main():
    print("Connecting to Neon PostgreSQL...")
    conn = psycopg2.connect(DATABASE_URL)
    conn.autocommit = False
    cur = conn.cursor(cursor_factory=DictCursor)

    try:
        print("Ensuring keywords exist in seo_keywords...")
        for site_id, slug, kw, intent, vol, cpc, kd in MAPPINGS:
            cur.execute("""
                INSERT INTO seo_keywords (
                    keyword, normalized_keyword, search_volume, cpc, keyword_difficulty,
                    intent, target_island, status, discovered_source
                ) VALUES (%s, %s, %s, %s, %s, %s, %s, 'LOCKED', 'NEO_CONTROL_CENTER')
                ON CONFLICT (keyword) DO UPDATE SET
                    search_volume = EXCLUDED.search_volume,
                    cpc = EXCLUDED.cpc,
                    keyword_difficulty = EXCLUDED.keyword_difficulty,
                    intent = EXCLUDED.intent,
                    target_island = EXCLUDED.target_island,
                    status = 'LOCKED',
                    updated_at = NOW();
            """, (kw, kw.lower().strip(), vol, cpc, kd, intent, site_id))

        print("Binding keyword ownership to seo_pages...")
        locked_count = 0
        for site_id, slug, kw, intent, vol, cpc, kd in MAPPINGS:
            # Find page_id
            cur.execute("""
                SELECT page_id FROM seo_pages 
                WHERE site_id = %s AND slug = %s;
            """, (site_id, slug))
            p_row = cur.fetchone()

            # Find keyword_id
            cur.execute("SELECT keyword_id FROM seo_keywords WHERE keyword = %s;", (kw,))
            k_row = cur.fetchone()

            if p_row and k_row:
                page_id = p_row["page_id"]
                keyword_id = k_row["keyword_id"]

                # Update primary_keyword_id on seo_pages
                cur.execute("""
                    UPDATE seo_pages 
                    SET primary_keyword_id = %s,
                        primary_intent = %s,
                        updated_at = NOW()
                    WHERE page_id = %s;
                """, (keyword_id, intent, page_id))

                # Upsert into seo_keyword_ownership
                cur.execute("""
                    INSERT INTO seo_keyword_ownership (
                        keyword_id, owner_page_id, site_id, role, status, locked, locked_at, locked_by
                    ) VALUES (%s, %s, %s, 'PRIMARY', 'LOCKED', TRUE, NOW(), 'SEO_CONTROL_CENTER')
                    ON CONFLICT (keyword_id) DO UPDATE SET
                        owner_page_id = EXCLUDED.owner_page_id,
                        site_id = EXCLUDED.site_id,
                        role = 'PRIMARY',
                        status = 'LOCKED',
                        locked = TRUE,
                        locked_at = NOW(),
                        locked_by = 'SEO_CONTROL_CENTER',
                        updated_at = NOW();
                """, (keyword_id, page_id, site_id))
                locked_count += 1
            else:
                print(f"Warning: page or keyword not found for ({site_id}, '{slug}', '{kw}')")

        conn.commit()
        print(f"Successfully locked {locked_count} primary commercial keywords to their dedicated owner pages in NEO!")

    except Exception as e:
        conn.rollback()
        print(f"Error updating keywords: {e}")
        raise
    finally:
        cur.close()
        conn.close()

if __name__ == "__main__":
    main()
