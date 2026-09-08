#!/usr/bin/env python3
"""
myCHEF SEO OPERATING SYSTEM & CONTROL CENTER (NEO)
Stage 2 Migration & Seeding: Fact Verification, Pricing Registry, Tax Registry, Hero Contracts
"""

import datetime
import os
import sys
import psycopg2
from psycopg2.extras import execute_values, DictCursor

DATABASE_URL = os.environ.get(
    "DATABASE_URL",
    "postgresql://neondb_owner:npg_r9qH8ntGCiep@ep-proud-brook-awiy9e7s-pooler.c-12.us-east-1.aws.neon.tech/neondb?sslmode=require"
)

MIGRATION_PATH = "/Users/openclaw/Downloads/mychef-hawaii-website/app/scripts/seo-center/migrations/002_stage2_governance.sql"

def run_migration():
    print("Connecting to Neon PostgreSQL...")
    conn = psycopg2.connect(DATABASE_URL)
    conn.autocommit = False
    cur = conn.cursor(cursor_factory=DictCursor)
    now = datetime.datetime.now(datetime.timezone.utc)
    today = datetime.date.today()

    try:
        print("Reading migration 002...")
        with open(MIGRATION_PATH, "r", encoding="utf-8") as f:
            sql = f.read()
        cur.execute(sql)
        print("Migration 002 DDL applied successfully.")

        # 1. Seed Tax Registry (§Part 4)
        print("Seeding Tax Registry...")
        tax_records = [
            ("HONOLULU_COUNTY", "oahu", "City and County of Honolulu", 4.0000, 0.5000, 4.7120, "2007-01-01", "2030-12-31", "Hawaiʻi DOTAX Tax Announcement No. 2018-14 & HRS §237-8.6"),
            ("MAUI_COUNTY", "maui", "County of Maui", 4.0000, 0.5000, 4.7120, "2024-01-01", "2030-12-31", "Hawaiʻi DOTAX Tax Announcement No. 2023-03 (Act 247, SLH 2023 / Maui Ord 5537)"),
            ("KAUAI_COUNTY", "kauai", "County of Kauaʻi", 4.0000, 0.5000, 4.7120, "2018-01-01", "2030-12-31", "Hawaiʻi DOTAX Tax Announcement No. 2018-14 & Kauaʻi County Ord No. 1021"),
            ("HAWAII_COUNTY", "bigisland", "County of Hawaiʻi", 4.0000, 0.5000, 4.7120, "2018-07-01", "2030-12-31", "Hawaiʻi DOTAX Tax Announcement No. 2018-14 & Hawaiʻi County Ord No. 18-60"),
        ]
        cur.execute("TRUNCATE TABLE seo_tax_registry CASCADE;")
        execute_values(cur, """
            INSERT INTO seo_tax_registry (
                jurisdiction, island, county_name, base_rate_pct, county_surcharge_pct, max_pass_through_pct, effective_date, expiration_date, source, last_verified
            ) VALUES %s
        """, [
            (r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], now) for r in tax_records
        ])
        print("Seeded 4 county tax jurisdictions.")

        # 2. Seed Central Pricing Registry (§Part 3)
        print("Seeding Central Pricing Registry...")
        pricing_data = [
            # OAHU
            ("oahu", "oahu", "Private Chef", "Signature Plated", 125.00, 190.00, "GUEST", True, True, False, 20.00, 4.7120),
            ("oahu", "oahu", "Private Chef", "Table / Casual", 95.00, 125.00, "GUEST", True, True, False, 20.00, 4.7120),
            ("oahu", "oahu", "Private Chef", "Premium Tasting", 190.00, 275.00, "GUEST", True, True, False, 20.00, 4.7120),
            ("oahu", "oahu", "Stay Chef", "Daily Residency", 850.00, None, "DAY", False, True, False, 20.00, 4.7120),
            ("oahu", "oahu", "Date Night", "Dinner for Two", 450.00, None, "EVENT", True, True, False, 20.00, 4.7120),
            ("oahu", "oahu", "Kamaʻāina Weekly", "Resident Cook Day", 300.00, None, "WEEK", False, True, False, 20.00, 4.7120),
            ("oahu", "oahu", "Wedding Catering", "Reception Line", 125.00, None, "GUEST", True, False, False, 20.00, 4.7120),
            ("oahu", "oahu", "Corporate Catering", "Executive Dining", 135.00, 220.00, "GUEST", True, True, False, 20.00, 4.7120),
            ("oahu", "oahu", "Staffing", "Professional Server", 55.00, None, "HOUR", False, True, False, 0.00, 4.7120),
            ("oahu", "oahu", "Staffing", "Sous Chef", 75.00, None, "HOUR", False, True, False, 0.00, 4.7120),

            # MAUI
            ("maui", "maui", "Private Chef", "Signature Plated", 150.00, 250.00, "GUEST", True, True, False, 20.00, 4.7120),
            ("maui", "maui", "Private Chef", "Premium Tasting", 220.00, 325.00, "GUEST", True, True, False, 20.00, 4.7120),
            ("maui", "maui", "Private Chef", "Chef's Table / Omakase", 275.00, 400.00, "GUEST", True, True, False, 20.00, 4.7120),
            ("maui", "maui", "Stay Chef", "Daily Residency", 1050.00, None, "DAY", False, True, False, 20.00, 4.7120),
            ("maui", "maui", "Date Night", "Sunset Dinner for Two", 500.00, None, "EVENT", True, True, False, 20.00, 4.7120),
            ("maui", "maui", "Wedding Week", "Reception Line", 150.00, None, "GUEST", True, False, False, 20.00, 4.7120),
            ("maui", "maui", "Staffing", "Professional Server", 55.00, None, "HOUR", False, True, False, 0.00, 4.7120),
            ("maui", "maui", "Staffing", "Sous Chef", 75.00, None, "HOUR", False, True, False, 0.00, 4.7120),

            # KAUAI
            ("kauai", "kauai", "Private Chef", "Signature Plated", 150.00, 250.00, "GUEST", True, True, False, 20.00, 4.7120),
            ("kauai", "kauai", "Private Chef", "Table / Casual", 125.00, 150.00, "GUEST", True, True, False, 20.00, 4.7120),
            ("kauai", "kauai", "Stay Chef", "Daily Residency", 1100.00, None, "DAY", False, True, False, 20.00, 4.7120),
            ("kauai", "kauai", "Date Night", "Bluff Sunset for Two", 650.00, 950.00, "EVENT", True, True, False, 20.00, 4.7120),
            ("kauai", "kauai", "Retreat Catering", "Multi-Day Wellness", 150.00, 220.00, "GUEST", True, True, False, 20.00, 4.7120),
            ("kauai", "kauai", "Staffing", "Professional Server", 55.00, None, "HOUR", False, True, False, 0.00, 4.7120),
            ("kauai", "kauai", "Staffing", "Sous Chef", 75.00, None, "HOUR", False, True, False, 0.00, 4.7120),

            # BIG ISLAND
            ("bigisland", "bigisland", "Private Chef", "Signature Plated", 150.00, 225.00, "GUEST", True, True, False, 20.00, 4.7120),
            ("bigisland", "bigisland", "Private Chef", "Entry / Table", 110.00, 150.00, "GUEST", True, True, False, 20.00, 4.7120),
            ("bigisland", "bigisland", "Stay Chef", "Daily Residency", 950.00, None, "DAY", False, True, False, 20.00, 4.7120),
            ("bigisland", "bigisland", "Date Night", "Volcanic Sunset for Two", 550.00, None, "EVENT", True, True, False, 20.00, 4.7120),
            ("bigisland", "bigisland", "Live-Flame BBQ", "Outdoor Lanai Feast", 145.00, 195.00, "GUEST", True, True, False, 20.00, 4.7120),
            ("bigisland", "bigisland", "Staffing", "Professional Server", 55.00, None, "HOUR", False, True, False, 0.00, 4.7120),
            ("bigisland", "bigisland", "Staffing", "Sous Chef", 75.00, None, "HOUR", False, True, False, 0.00, 4.7120),
        ]
        cur.execute("TRUNCATE TABLE seo_pricing_registry CASCADE;")
        execute_values(cur, """
            INSERT INTO seo_pricing_registry (
                site_id, island, service, tier, price_min, price_max, unit,
                groceries_included, staff_included, travel_included, service_charge_pct, tax_pct, valid_from, last_verified
            ) VALUES %s
        """, [
            (p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], today, now) for p in pricing_data
        ])
        print(f"Seeded {len(pricing_data)} central pricing records.")

        # 3. Seed Fact Verification & Claims Registry (§Part 1)
        print("Seeding Fact Verification Registry...")
        claims_data = [
            ("oahu", "Pier 38 Seafood Sourcing", "SOURCING", "Day-catch yellowfin ahi, mahimahi, and opah sourced fresh via certified Honolulu Fish Auction wholesalers and Pier 38 landings.", True, "OPERATIONS_DESK", "VERIFIED"),
            ("oahu", "Named Chef Biographies (Keanu Santos, Maya Lin, Nicole Alana)", "CHEF", "Removed AI-generated chef names and replaced with authentic resident culinary brigade roles until individual chef contracts are signed.", False, "CHIEF_OPERATIONS_OFFICER", "SOFTENED"),
            ("oahu", "Personal 5:30 AM Auction Bidding Claim", "SOURCING", "Soften claim from 'chefs personally bid at auction at 5:30 AM' to certified auction wholesaler procurement.", True, "OPERATIONS_DESK", "SOFTENED"),
            ("maui", "Named Chef Biographies (Mateo Fernandez, Malia Vance)", "CHEF", "Removed unverified individual chef names; replaced with verified resident South/West Maui culinary brigade.", False, "CHIEF_OPERATIONS_OFFICER", "SOFTENED"),
            ("maui", "Maui County GET Tax Rate Consistency", "PRICING", "Standardized on 4.7120% statutory pass-through following Act 247 0.5% county surcharge, removing obsolete 4.166% references.", True, "LEGAL_TAX_AUDIT", "VERIFIED"),
            ("kauai", "Named Chef Biographies (Noah Callahan, Alana Lindsey)", "CHEF", "Removed unverified chef names; replaced with Garden Island Culinary Brigade & shore logistics desk.", False, "CHIEF_OPERATIONS_OFFICER", "SOFTENED"),
            ("kauai", "Competitive Claim ('rates nobody else publishes')", "COMPETITOR", "Removed absolute unverified competitive claim; replaced with transparent published tariff and itemized quotes.", True, "SEO_INTELLIGENCE", "SOFTENED"),
            ("bigisland", "Named Chef Biographies (Kalani Becker, Kainoa Silva)", "CHEF", "Removed unverified names; replaced with Hawaiʻi Island Culinary Brigade and Gated Community Logistics desk.", False, "CHIEF_OPERATIONS_OFFICER", "SOFTENED"),
            ("bigisland", "Gated Estate Clearances (Kūkiʻo, Hualālai, Kohanaiki)", "LOGISTICS", "Stated experience with security gate protocols and vendor coordination across major Kohala Coast communities.", True, "OPERATIONS_DESK", "VERIFIED"),
        ]
        cur.execute("TRUNCATE TABLE seo_claims_registry CASCADE;")
        execute_values(cur, """
            INSERT INTO seo_claims_registry (
                site_id, claim, claim_type, notes, verified, verified_by, verified_date, status
            ) VALUES %s
        """, [
            (c[0], c[1], c[2], c[3], c[4], c[5], now, c[6]) for c in claims_data
        ])
        print(f"Seeded {len(claims_data)} claims verification records.")

        # 4. Seed Hero Visual Contracts (§Part 6)
        print("Seeding Hero Visual Contracts...")
        hero_contracts = [
            (
                "oahu", "Private Chef Oʻahu", "oahu", "Honolulu / Waikīkī Penthouse / Kahala Estate",
                "Private chef plating an oceanfront dinner inside a modern penthouse or luxury villa kitchen",
                True, True, "Modern stone kitchen island, Honolulu city grid or ocean lanai beyond glass",
                "LANDSCAPE", "16/9", "4/3",
                "A chef’s hands plating a course at a stone island in a penthouse kitchen, the Honolulu city grid at blue hour through floor-to-ceiling glass",
                ["generic beach", "empty plate", "random palm trees", "generic tropical jungle", "text overlay"],
                "/img/oahu/hero-home.jpg"
            ),
            (
                "maui", "Private Chef Maui", "maui", "Wailea / Mākena Oceanfront Villa",
                "Oceanfront villa lanai dining table at golden hour sunset with chef visible in active service",
                True, True, "Wailea or Kapalua sunset ocean horizon, natural stone or wood lanai, elegant table setting",
                "LANDSCAPE", "16/9", "4/3",
                "A chef plating a multi-course dinner on an oceanfront Wailea villa lānai at golden sunset",
                ["generic beach", "empty plate", "harsh indoor flash", "restaurant dining room", "unrelated island visuals"],
                "/img/maui/hero-home.jpg"
            ),
            (
                "kauai", "Private Chef Kauaʻi", "kauai", "Hanalei / Princeville Estate",
                "Lush private estate veranda or open kitchen with private chef and Garden Island greenery",
                True, True, "Dramatic North Shore verdant mountains, Princeville bluff, or South Shore covered veranda",
                "LANDSCAPE", "16/9", "4/3",
                "A private chef preparing dinner at an open-air veranda kitchen in Princeville overlooking lush cliffs",
                ["generic ocean sunset without garden greenery", "empty plate", "crowded hotel banquet", "non-Kauai visuals"],
                "/img/kauai/hero-home.jpg"
            ),
            (
                "bigisland", "Private Chef Big Island", "bigisland", "Kona / Kohala Coast Estate",
                "Chef finishing a plated coursed dinner on a modern lava-stone estate terrace with sunset background",
                True, True, "Basalt / black lava stone architecture, Kohala sunset horizon, modern outdoor kitchen",
                "LANDSCAPE", "16/9", "4/3",
                "A private chef finishing a coursed dinner on a modern lava-stone estate terrace, Kona sunset in the background",
                ["isolated plate on rock with no chef", "generic beach", "crowded buffet", "non-volcanic setting"],
                "/img/bigisland/hero-home.jpg"
            ),
        ]
        cur.execute("TRUNCATE TABLE seo_hero_contracts CASCADE;")
        execute_values(cur, """
            INSERT INTO seo_hero_contracts (
                site_id, service, island, location, subject, people_required, food_required,
                environment_required, orientation, desktop_crop, mobile_crop, alt_text,
                forbidden_elements, asset_path, verified, approved
            ) VALUES %s
        """, [
            (h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9], h[10], h[11], h[12], h[13], True, True) for h in hero_contracts
        ])
        print(f"Seeded {len(hero_contracts)} flagship hero visual contracts.")

        # Commit all changes
        conn.commit()
        print("All Stage 2 governance registries committed successfully!")

    except Exception as e:
        conn.rollback()
        print(f"ERROR: {e}")
        sys.exit(1)
    finally:
        cur.close()
        conn.close()

if __name__ == "__main__":
    run_migration()
