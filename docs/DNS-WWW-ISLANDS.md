# DNS notes — island www hosts

Vercel redirects 301 `www.{oahu,maui,kauai,bigisland}.mychef-hawaii.com` → non-www (`vercel.json`).

**Status (2026-09-11):** DNS A records resolve to Vercel; all four `www.<island>` hosts were added to the `mychef-hawaii` project (Numini). Live check: HTTPS redirects to the non-www island host with HTTP 200.

If SSL ever fails again after a DNS change, re-verify with:
`vercel domains inspect www.<island>.mychef-hawaii.com --scope numini`
