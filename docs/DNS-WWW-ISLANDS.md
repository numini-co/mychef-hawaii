# DNS notes — island www hosts (re-audit §3.6 / handoff #9)

Vercel redirects already 301 `www.{oahu,maui,kauai,bigisland}.mychef-hawaii.com` → non-www.

**DNS (owner):** CNAME (or A/AAAA) for each `www.<island>.mychef-hawaii.com` → Vercel so those redirects can fire. Owner is adding records (2026-09-11); once live, www resolves and forwards to the non-www island host. No app/code change required for the forward.
