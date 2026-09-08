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

print("=== SEO RULES ===")
cur.execute("SELECT rule_code, name, category, severity, description FROM seo_rules;")
for r in cur.fetchall():
    print(f"[{r['rule_code']}] {r['name']} ({r['severity']}): {r['description'][:100]}...")

print("\n=== KEYWORD OWNERSHIP SAMPLE ===")
cur.execute("""
    SELECT ko.site_id, k.keyword, ko.intent_scope, ko.cannibalization_risk
    FROM seo_keyword_ownership ko
    JOIN seo_keywords k ON ko.keyword_id = k.keyword_id
    LIMIT 20;
""")
for r in cur.fetchall():
    print(f"- {r['site_id']}: '{r['keyword']}' (intent: {r['intent_scope']}, risk: {r['cannibalization_risk']})")

cur.close()
conn.close()
