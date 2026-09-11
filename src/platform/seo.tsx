/**
 * SEO layer (design.md §2.1): per-page title/meta/OG + JSON-LD.
 * Organization, FoodService, Service, BreadcrumbList, FAQPage where FAQs exist.
 * NEVER AggregateRating / Review (trust posture — no fake reviews).
 */
import { useEffect } from 'react';
import { SITE_URL, absoluteUrl } from './config';
import { useSite } from './IslandProvider';
import type { SiteId } from './tokens';
import type { FaqItem } from './types';

type JsonLd = Record<string, unknown>;

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export interface SeoProps {
  /** Page title without brand suffix. */
  title: string;
  description: string;
  /** Absolute path, e.g. '/oahu/pricing' or subdomain-bare '/pricing'. */
  path: string;
  ogImage?: string;
  /** JSON-LD blocks to inject. */
  jsonLd?: JsonLd[];
  /** Optional hreflang alternates (EN ↔ JA for Oʻahu). */
  alternates?: { hreflang: string; href: string }[];
}

export function Seo({ title, description, path, ogImage, jsonLd = [], alternates }: SeoProps) {
  const { siteId } = useSite();
  const fullTitle = title.includes('myCHEF') ? title : `${title} | myCHEF Hawaii`;
  const url = absoluteUrl(path, siteId);
  const imgUrl = ogImage ? (ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`) : undefined;
  const jsonLdContent = jsonLd.length > 0 ? (jsonLd.length === 1 ? jsonLd[0] : jsonLd) : null;
  const autoAlternates = alternates ?? oahuHreflang(path, siteId);

  useEffect(() => {
    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', 'website');
    if (imgUrl) upsertMeta('property', 'og:image', imgUrl);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    if (imgUrl) upsertMeta('name', 'twitter:image', imgUrl);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [fullTitle, description, url, imgUrl]);

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {autoAlternates?.map((a) => (
        <link key={a.hreflang} rel="alternate" hrefLang={a.hreflang} href={a.href} />
      ))}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      {imgUrl && <meta property="og:image" content={imgUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {imgUrl && <meta name="twitter:image" content={imgUrl} />}
      {jsonLdContent && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContent) }}
        />
      )}
    </>
  );
}

/** EN ↔ JA pairs for Oʻahu pages that have a Japanese cluster twin. */
function oahuHreflang(path: string, siteId: SiteId): { hreflang: string; href: string }[] | undefined {
  if (siteId !== 'oahu') return undefined;
  const raw = path.replace(/^\/oahu/, '') || '/';
  const isJa = raw === '/ja' || raw.startsWith('/ja/');
  const enPath = isJa ? raw.replace(/^\/ja/, '') || '/' : raw;
  const jaPath = isJa ? raw : enPath === '/' ? '/ja' : `/ja${enPath}`;
  // Only advertise pairs for the JA index and a few known twins — avoid inventing JA URLs.
  const jaKnown = new Set(['/ja', '/ja/omakase-at-home', '/ja/waikiki-private-chef', '/ja/stay-chef', '/ja/weddings', '/']);
  if (!isJa && !jaKnown.has(jaPath) && enPath !== '/') return undefined;
  if (isJa && !jaKnown.has(raw) && raw !== '/ja') return undefined;
  return [
    { hreflang: 'en', href: absoluteUrl(enPath === '/' ? '/oahu' : `/oahu${enPath}`, 'oahu') },
    { hreflang: 'ja', href: absoluteUrl(jaPath === '/' ? '/oahu/ja' : `/oahu${jaPath}`, 'oahu') },
    { hreflang: 'x-default', href: absoluteUrl(enPath === '/' ? '/oahu' : `/oahu${enPath}`, 'oahu') },
  ];
}

/* ---------------- JSON-LD builders ---------------- */

export function organizationLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'myCHEF Hawaii',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description:
      'A network of vetted independent private chefs on Oʻahu, Maui, Kauaʻi, and the Big Island. Published per-guest prices; the written quote is the confirmed total.',
  };
}

export function foodServiceLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FoodService',
    name: 'myCHEF Hawaii',
    url: SITE_URL,
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Oʻahu' },
      { '@type': 'AdministrativeArea', name: 'Maui' },
      { '@type': 'AdministrativeArea', name: 'Kauaʻi' },
      { '@type': 'AdministrativeArea', name: 'Hawaiʻi Island' },
    ],
  };
}

/** Per-island FoodService + LocalBusiness for subdomain homes. */
export function islandFoodServiceLd(
  siteId: Exclude<SiteId, 'hub'>,
  opts: { name: string; description: string; sameAs?: string[] },
): JsonLd[] {
  const url = absoluteUrl('/', siteId);
  const area =
    siteId === 'oahu'
      ? 'Oʻahu'
      : siteId === 'maui'
        ? 'Maui'
        : siteId === 'kauai'
          ? 'Kauaʻi'
          : 'Hawaiʻi Island';
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'FoodService',
      name: opts.name,
      description: opts.description,
      url,
      areaServed: { '@type': 'AdministrativeArea', name: area },
      provider: { '@type': 'Organization', name: 'myCHEF Hawaii', url: SITE_URL },
      ...(opts.sameAs?.length ? { sameAs: opts.sameAs } : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: opts.name,
      description: opts.description,
      url,
      areaServed: area,
      parentOrganization: { '@type': 'Organization', name: 'myCHEF Hawaii', url: SITE_URL },
      ...(opts.sameAs?.length ? { sameAs: opts.sameAs } : {}),
    },
  ];
}

export function serviceLd(
  name: string,
  description: string,
  path: string,
  areaName?: string,
  siteId?: SiteId,
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    description,
    url: absoluteUrl(path, siteId),
    provider: { '@type': 'Organization', name: 'myCHEF Hawaii', url: SITE_URL },
    ...(areaName ? { areaServed: { '@type': 'AdministrativeArea', name: areaName } } : {}),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[], siteId?: SiteId): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path, siteId),
    })),
  };
}

export function faqLd(faq: FaqItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Statewide tariff OfferCatalog — published /pricing table numbers only (no invented bands). */
export function offerCatalogLd(): JsonLd {
  const dinnerDesc =
    'Per-guest signature private chef dinner band. Includes chef on-site, custom menu, grocery shopping & procurement, food & ingredients inside the chosen tier, cooking, plating, and kitchen cleanup. 20% service charge and Hawaiʻi GET up to 4.7120% itemized on their own lines.';
  const stayDesc =
    'Daily Stay Chef residency fee plus groceries at cost with original merchant receipts. 20% service charge and Hawaiʻi GET up to 4.7120% itemized on their own lines.';

  const dinnerOffers = [
    { island: 'Oʻahu', siteId: 'oahu' as const, low: 125, high: 190 },
    { island: 'Maui', siteId: 'maui' as const, low: 150, high: 250 },
    { island: 'Kauaʻi', siteId: 'kauai' as const, low: 150, high: 250 },
    { island: 'Hawaiʻi Island', siteId: 'bigisland' as const, low: 150, high: 225 },
  ].map((row) => ({
    '@type': 'Offer',
    name: `Private Chef Dinner — ${row.island}`,
    description: `${dinnerDesc} Food and groceries included inside the published band.`,
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: row.low,
      maxPrice: row.high,
      priceCurrency: 'USD',
      unitText: 'GUEST',
    },
    areaServed: { '@type': 'AdministrativeArea', name: row.island },
    url: absoluteUrl('/', row.siteId),
    availability: 'https://schema.org/InStock',
  }));

  const stayOffers = [
    { island: 'Oʻahu', siteId: 'oahu' as const, price: 850 },
    { island: 'Maui', siteId: 'maui' as const, price: 1050 },
    { island: 'Kauaʻi', siteId: 'kauai' as const, price: 1100 },
    { island: 'Hawaiʻi Island', siteId: 'bigisland' as const, price: 950 },
  ].map((row) => ({
    '@type': 'Offer',
    name: `Stay Chef (Multi-Day) — ${row.island}`,
    description: stayDesc,
    price: String(row.price),
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: row.price,
      priceCurrency: 'USD',
      unitText: 'DAY',
    },
    areaServed: { '@type': 'AdministrativeArea', name: row.island },
    url: absoluteUrl('/stay-chef', row.siteId),
    availability: 'https://schema.org/InStock',
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'myCHEF Hawaii Statewide Tariff',
    description:
      'Published statewide rate card: signature dinners include food inside the per-guest band; Stay Chef bills daily chef fee plus groceries at cost with receipts.',
    url: absoluteUrl('/pricing'),
    itemListElement: [...dinnerOffers, ...stayOffers],
  };
}
