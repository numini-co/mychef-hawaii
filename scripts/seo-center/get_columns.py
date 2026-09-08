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

for table in ["seo_sites", "seo_rules", "seo_keyword_ownership", "seo_keywords", "seo_pages"]:
    cur.execute("""
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_name = %s 
        ORDER BY ordinal_position;
    """, (table,))
    cols = [f"{r['column_name']} ({r['data_type']})" for r in cur.fetchall()]
    print(f"\nTABLE {table}:\n  " + ", ".join(cols))

cur.close()
conn.close()
