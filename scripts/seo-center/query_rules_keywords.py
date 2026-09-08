#!/usr/bin/env python3
import os
import psycopg2
from psycopg2.extras import DictCursor

DATABASE_URL = os.environ.get(
    "DATABASE_URL",
    "postgresql://neondb_owner:npg_r9qH8ntGCiep@ep-proud-brook-awiy9e7s-pooler.c-12.us-east-1.aws.neon.tech/neondb?sslmode=require"
)

conn = psycopg2.connect(DATABASE_URL)
cur = conn.cursor(cursor_factory=DictCursor)

print("=== SEO RULES IN NEO ===")
cur.execute("SELECT code, name, severity, description FROM seo_rules ORDER BY code;")
for r in cur.fetchall():
    print(f"[{r['code']}] {r['name']} ({r['severity']}):\n    {r['description']}\n")

print("\n=== KEYWORD OWNERSHIP MATRIX IN NEO ===")
cur.execute("""
    SELECT 
        p.site_id, 
        p.slug, 
        k.keyword, 
        k.search_volume,
        k.intent, 
        p.h1, 
        ko.role, 
        ko.locked
    FROM seo_keyword_ownership ko
    JOIN seo_keywords k ON ko.keyword_id = k.keyword_id
    JOIN seo_pages p ON ko.owner_page_id = p.page_id
    ORDER BY p.site_id, k.search_volume DESC NULLS LAST
    LIMIT 50;
""")
for r in cur.fetchall():
    print(f"[{r['site_id']}] /{r['slug']} -> '{r['keyword']}' (vol: {r['search_volume']}, intent: {r['intent']}) | H1: {r['h1']}")

cur.close()
conn.close()
