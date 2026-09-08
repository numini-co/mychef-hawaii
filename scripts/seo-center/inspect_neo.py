#!/usr/bin/env python3
"""
Inspect NEO database: sites, keyword ownership, rules, claims.
"""
import os
import psycopg2
from psycopg2.extras import DictCursor

DATABASE_URL = os.environ.get(
    "DATABASE_URL",
    "postgresql://neondb_owner:npg_r9qH8ntGCiep@ep-proud-brook-awiy9e7s-pooler.c-12.us-east-1.aws.neon.tech/neondb?sslmode=require"
)

conn = psycopg2.connect(DATABASE_URL)
cur = conn.cursor(cursor_factory=DictCursor)

print("=== SITES & BRAND VOICES ===")
cur.execute("SELECT site_id, name, domain, brand_voice_summary FROM seo_sites;")
for r in cur.fetchall():
    print(f"- [{r['site_id']}] {r['name']} ({r['domain']}): {r['brand_voice_summary']}")

print("\n=== KEYWORD OWNERSHIP SAMPLE ===")
cur.execute("""
    SELECT ko.site_id, k.keyword, ko.intent, ko.cannibalization_risk
    FROM seo_keyword_ownership ko
    JOIN seo_keywords k ON ko.keyword_id = k.keyword_id
    LIMIT 25;
""")
for r in cur.fetchall():
    print(f"- {r['site_id']}: '{r['keyword']}' (intent: {r['intent']}, risk: {r['cannibalization_risk']})")

print("\n=== KEYWORD COUNTS BY SITE ===")
cur.execute("""
    SELECT site_id, COUNT(*) as cnt
    FROM seo_keyword_ownership
    GROUP BY site_id;
""")
for r in cur.fetchall():
    print(f"- {r['site_id']}: {r['cnt']} keywords owned")

cur.close()
conn.close()
