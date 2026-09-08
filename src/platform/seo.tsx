/**
 * SEO layer (design.md §2.1): per-page title/meta/OG + JSON-LD.
 * Organization, FoodService, Service, BreadcrumbList, FAQPage where FAQs exist.
 * NEVER AggregateRating / Review (trust posture — no fake reviews).
 */
import { useEffect } from 'react';
import { SITE_URL } from './config';
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
  /** Absolute path, e.g. '/oahu/pricing'. */
  path: string;
  ogImage?: string;
  /** JSON-LD blocks to inject. */
  jsonLd?: JsonLd[];
}

export function Seo({ title, description, path, ogImage, jsonLd = [] }: SeoProps) {
  const fullTitle = title.includes('myCHEF') ? title : `${title} | myCHEF Hawaii`;
  const url = `${SITE_URL}${path}`;
  const imgUrl = ogImage ? (ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`) : undefined;
  const jsonLdContent = jsonLd.length > 0 ? (jsonLd.length === 1 ? jsonLd[0] : jsonLd) : null;

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', 'website');
    if (imgUrl) upsertMeta('property', 'og:image', imgUrl);
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
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      {imgUrl && <meta property="og:image" content={imgUrl} />}
      {jsonLdContent && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContent) }}
        />
      )}
    </>
  );
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

export function serviceLd(name: string, description: string, path: string, areaName?: string): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { '@type': 'Organization', name: 'myCHEF Hawaii', url: SITE_URL },
    ...(areaName ? { areaServed: { '@type': 'AdministrativeArea', name: areaName } } : {}),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
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
