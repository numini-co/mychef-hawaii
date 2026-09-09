# DNS notes — island www hosts (re-audit §3.6 / handoff #9)

Vercel redirects already 301 `www.{oahu,maui,kauai,bigisland}.mychef-hawaii.com` → non-www.

**Owner action required at the DNS registrar:** add CNAME (or A/AAAA) records for each
`www.<island>.mychef-hawaii.com` pointing at Vercel before those redirects can fire.
Until then, www island hosts intentionally do not resolve (curl 000). This is a conscious
trade-off — document here rather than leave ambiguous.
