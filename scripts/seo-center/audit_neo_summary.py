#!/usr/bin/env python3
import psycopg2
from psycopg2.extras import DictCursor

DATABASE_URL = "postgresql://neondb_owner:npg_r9qH8ntGCiep@ep-proud-brook-awiy9e7s-pooler.c-12.us-east-1.aws.neon.tech/neondb?sslmode=require&connect_timeout=10"

conn = psycopg2.connect(DATABASE_URL)
cur = conn.cursor(cursor_factory=DictCursor)

print("=== SITES IN NEO ===")
cur.execute("SELECT site_id, name, domain FROM seo_sites ORDER BY site_id;")
for r in cur.fetchall():
    print(f"- [{r['site_id']}] {r['name']} ({r['domain']})")

print("\n=== PAGE COUNTS BY SITE ===")
cur.execute("SELECT site_id, count(*), sum(case when url_locked then 1 else 0 end) as locked_count FROM seo_pages GROUP BY site_id ORDER BY site_id;")
for r in cur.fetchall():
    print(f"- [{r['site_id']}]: {r['count']} pages ({r['locked_count']} locked)")

print("\n=== TOTAL KEYWORDS IN REGISTRY ===")
cur.execute("SELECT count(*) as kw_count FROM seo_keywords;")
print(f"Keywords: {cur.fetchone()['kw_count']}")

print("\n=== TOTAL OWNERSHIP RECORDS ===")
cur.execute("SELECT site_id, count(*) as count FROM seo_keyword_ownership GROUP BY site_id ORDER BY site_id;")
for r in cur.fetchall():
    print(f"- [{r['site_id']}]: {r['count']} owned keywords")

print("\n=== SAMPLES OF HIGH-PRIORITY COMMERCIAL PAGES & INTENT ===")
cur.execute("""
    SELECT p.site_id, p.slug, p.h1, p.primary_intent, k.keyword, k.search_volume
    FROM seo_pages p
    LEFT JOIN seo_keyword_ownership ko ON p.page_id = ko.owner_page_id AND ko.role = 'PRIMARY'
    LEFT JOIN seo_keywords k ON ko.keyword_id = k.keyword_id
    WHERE p.slug IN ('', 'private-chef', 'pricing', 'catering', 'weddings', 'stay-chef', 'corporate', 'services/date-night', 'retreat-catering')
    ORDER BY p.site_id, p.slug;
""")
for r in cur.fetchall():
    print(f"[{r['site_id']}] /{r['slug'] or '(home)'} -> kw='{r['keyword'] or 'NONE'}' (vol: {r['search_volume']}) | intent={r['primary_intent']} | H1: {r['h1']}")

cur.close()
conn.close()
