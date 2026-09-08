#!/usr/bin/env python3
import psycopg2

DATABASE_URL = "postgresql://neondb_owner:npg_r9qH8ntGCiep@ep-proud-brook-awiy9e7s-pooler.c-12.us-east-1.aws.neon.tech/neondb?sslmode=require&connect_timeout=10"

conn = psycopg2.connect(DATABASE_URL)
cur = conn.cursor()

cur.execute("""
    SELECT pid, state, query, age(clock_timestamp(), query_start) as duration
    FROM pg_stat_activity
    WHERE datname = 'neondb' AND pid <> pg_backend_pid();
""")

rows = cur.fetchall()
print(f"Found {len(rows)} other connections:")
for r in rows:
    print(f"PID: {r[0]} | State: {r[1]} | Duration: {r[3]} | Query: {r[2][:60] if r[2] else 'None'}")
    if r[1] == 'idle in transaction' or (r[3] and r[3].total_seconds() > 30):
        print(f"Terminating stale PID {r[0]}...")
        cur.execute("SELECT pg_terminate_backend(%s);", (r[0],))

conn.commit()
cur.close()
conn.close()
print("Done cleanup.")
