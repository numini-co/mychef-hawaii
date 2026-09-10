# GSC property status — myCHEF Hawaii

## Verified (2026-09-10) — URL-prefix properties

| Property | Permission | Sitemap submitted |
| --- | --- | --- |
| `https://mychef-hawaii.com/` | siteOwner | `sitemap-index.xml` + `sitemap.xml` |
| `https://oahu.mychef-hawaii.com/` | siteOwner | `sitemap.xml` |
| `https://maui.mychef-hawaii.com/` | siteOwner | `sitemap.xml` |
| `https://kauai.mychef-hawaii.com/` | siteOwner | `sitemap.xml` |
| `https://bigisland.mychef-hawaii.com/` | siteOwner | `sitemap.xml` |

Verification method: Google Site Verification **META** tag already in `index.html`
(`google-site-verification=swMGOCkpucnENwTCkvm2gV4vCk0uVvpvHhUPqL7-_B8`).

Service account owner: `googlenay@trusty-bearing-489316-k1.iam.gserviceaccount.com`

## Pending — Domain property (covers all hosts in one)

| Property | Status |
| --- | --- |
| `sc-domain:mychef-hawaii.com` | `siteUnverifiedUser` — needs DNS |

Add **one** TXT record at apex `mychef-hawaii.com` (Vercel DNS / Numini team):

```
Type: TXT
Name: @
Value: google-site-verification=swMGOCkpucnENwTCkvm2gV4vCk0uVvpvHhUPqL7-_B8
```

Or CNAME:

```
Name: soaah2wtv6wf
Value: gv-j5dadicciqahjk.dv.googlehosted.com
```

Then run:

```bash
python3 - <<'PY'
from pathlib import Path
from google.oauth2 import service_account
from googleapiclient.discovery import build
SA = Path.home() / '.config/claude-seo/service-account.json'
creds = service_account.Credentials.from_service_account_file(str(SA), scopes=['https://www.googleapis.com/auth/siteverification','https://www.googleapis.com/auth/webmasters'])
sv = build('siteVerification', 'v1', credentials=creds)
print(sv.webResource().insert(verificationMethod='DNS_TXT', body={
  'site': {'type': 'INET_DOMAIN', 'identifier': 'mychef-hawaii.com'},
  'owner': 'googlenay@trusty-bearing-489316-k1.iam.gserviceaccount.com',
}).execute())
PY
```

The agent could not write Vercel DNS under the Numini team (token scope blocked).
With the five URL-prefix properties verified, island coverage is already live in GSC.
