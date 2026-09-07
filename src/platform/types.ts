/**
 * Content record contract — the data model every page on the network renders from.
 * Island agents: fill src/sites/<island>/content.ts with these records.
 * PageFactory resolves slug → bespoke override (if the site registered one)
 * → category template.
 */
import type { ComponentType } from 'react';
import type { SiteId } from './tokens';

export type PageCategory =
  | 'core'      // commercial hubs (private-chef, catering, stay-chef…) → ServicePage
  | 'service'   // service explainers → ServicePage
  | 'pricing'   // rate cards, fee stack, cost anatomy → PricingPage
  | 'wedding'   // wedding cluster → WeddingPage
  | 'location'  // area pages → LocationPage
  | 'menu'      // menu index + menus → MenuPage
  | 'occasion'  // occasion pages → OccasionPage
  | 'guide'     // editorial / decisions / comparisons → GuidePage
  | 'trust'     // trust, legal, faq, contact, about… → TrustPage
  | 'partner';  // partner pages → ServicePage

export interface FaqItem {
  q: string;
  /** Full-prose answer (2–4 sentences). Internal links allowed as { label, href } tail. */
  a: string;
  links?: { label: string; href: string }[];
}

export interface PriceRow {
  label: string;
  value: string;
  note?: string;
}

export interface PriceTable {
  title?: string;
  rows: PriceRow[];
  footnote?: string;
}

export interface SectionLink {
  label: string;
  href: string;
}

export interface SectionMedia {
  src: string;
  alt: string;
  /** CSS aspect-ratio, e.g. '3/2'. Defaults to the site card ratio. */
  ratio?: string;
}

export interface ContentSection {
  id?: string;
  eyebrow?: string;
  heading?: string;
  /** Paragraphs of body copy. */
  body?: string[];
  /** Bullet rows. */
  list?: string[];
  links?: SectionLink[];
  media?: SectionMedia;
  /** Render this section on the site's band ground (max per page per §3). */
  band?: boolean;
}

export interface CtaBlock {
  /** Primary CTA label — never "Book now" (quote.md microcopy law). */
  label: string;
  href: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  note?: string;
}

export interface ContentRecord {
  /** Path relative to the site base, '' for the site home. Hub '/pricing' → slug 'pricing'. */
  slug: string;
  category: PageCategory;
  /** SEO <title> (without brand suffix — the SEO layer appends it). */
  title: string;
  h1: string;
  meta: { description: string; ogImage?: string };
  /** Lede paragraph under the H1. */
  intro?: string;
  sections: ContentSection[];
  faq?: FaqItem[];
  priceTable?: PriceTable;
  cta: CtaBlock;
  /** Parent slug within the same site for breadcrumbs (e.g. 'guides'). */
  parent?: string;
  keywords: string[];
}

/** What each site module exports. */
export interface SiteModule {
  siteId: SiteId;
  content: ContentRecord[];
  /** Path → bespoke component. Checked BEFORE the category template. */
  overrides?: Record<string, ComponentType>;
}
