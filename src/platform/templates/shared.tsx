import { Link } from 'react-router';
import type { ContentRecord, ContentSection } from '@/platform/types';
import { useSite } from '@/platform/IslandProvider';
import { useSiteContent } from '@/platform/contentContext';
import { heroShot } from '@/platform/media';
import type { SiteId } from '@/platform/tokens';
import { Seo, breadcrumbLd, faqLd, serviceLd } from '@/platform/seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Crumb } from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import QuoteCTA from '@/components/QuoteCTA';
import { RateTable } from '@/components/RateTable';
import SectionReveal from '@/components/SectionReveal';
import {
  MultiIslandCrossSell,
  SiblingGuideCrossSell,
  WeddingMultiIslandCrossSell,
} from '@/components/CrossHostSell';

/** Resolve a content link against the current site base. Absolute URLs pass through. */
export function useResolve() {
  const { link } = useSite();
  return (href: string) => {
    if (/^(https?:|mailto:|tel:)/i.test(href)) return href;
    return href.startsWith('/') ? href : link(href);
  };
}

/** Breadcrumb trail from the record's parent chain. */
export function useCrumbs(record: ContentRecord, all: ContentRecord[]): Crumb[] {
  const { link, basePath, name } = useSite();
  const crumbs: Crumb[] = [{ name: name === 'myCHEF Hawaii' ? 'Home' : name, path: basePath || '/' }];
  const bySlug = new Map(all.map((r) => [r.slug, r]));
  const chain: ContentRecord[] = [];
  let cur = record.parent ? bySlug.get(record.parent) : undefined;
  const guard = new Set<string>();
  while (cur && !guard.has(cur.slug)) {
    guard.add(cur.slug);
    chain.unshift(cur);
    cur = cur.parent ? bySlug.get(cur.parent) : undefined;
  }
  for (const p of chain) crumbs.push({ name: p.h1, path: link(p.slug) });
  if (record.slug !== '') crumbs.push({ name: record.h1, path: link(record.slug) });
  return crumbs;
}

/** The standard SEO wiring for any record-driven page. */
export function PageSeo({ record, crumbs }: { record: ContentRecord; crumbs: Crumb[] }) {
  const { link, name, siteId } = useSite();
  const path = link(record.slug);
  const allFaq = record.faq ?? [];
  const jsonLd = [breadcrumbLd(crumbs, siteId)];
  if (allFaq.length) jsonLd.push(faqLd(allFaq));
  if (record.category === 'core' || record.category === 'service') {
    jsonLd.push(serviceLd(record.h1, record.meta.description, path, name, siteId));
  }
  return <Seo title={record.title} description={record.meta.description} path={path} ogImage={record.meta.ogImage} jsonLd={jsonLd} />;
}

/**
 * Full-screen page hero. Pages whose island library holds a relevant photo get
 * it as the ground; the rest get a typographic hero on the site colour rather
 * than a stock image that says nothing about the page.
 */
export function PageHeader({
  record,
  crumbs,
  eyebrow,
}: {
  record: ContentRecord;
  crumbs: Crumb[];
  eyebrow?: string;
}) {
  const { siteId } = useSite();
  const hero = heroShot(record, siteId as SiteId);

  const copy = (
    <>
      <Breadcrumbs items={crumbs} className="mb-5 sm:mb-8" />
      {eyebrow ? <p className="eyebrow-site mb-3 sm:mb-4">{eyebrow}</p> : null}
      <h1 className="h1-site measure-site">{record.h1}</h1>
      {record.intro ? <p className="measure-site mt-4 text-base text-ink-2 sm:mt-6 sm:text-lg">{record.intro}</p> : null}
      <HeaderCta cta={record.cta} />
    </>
  );

  return (
    <header className="page-hero-site relative isolate flex items-center" data-has-image={hero ? '' : undefined}>
      <PageSeo record={record} crumbs={crumbs} />
      {hero ? (
        <>
          <picture>
            {hero.srcFallback ? <source srcSet={hero.src} type="image/webp" /> : null}
            <img
              src={hero.srcFallback ?? hero.src}
              alt={hero.alt}
              width={hero.width ?? 1920}
              height={hero.height ?? 1080}
              loading="eager"
              fetchPriority="high"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
          </picture>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background:
                'linear-gradient(to top, var(--site-bg) 2%, color-mix(in srgb, var(--site-bg) 97%, transparent) 34%, color-mix(in srgb, var(--site-bg) 90%, transparent) 58%, color-mix(in srgb, var(--site-bg) 65%, transparent) 78%, color-mix(in srgb, var(--site-bg) 40%, transparent) 90%, color-mix(in srgb, var(--site-bg) 22%, transparent) 100%)',
            }}
          />
        </>
      ) : null}
      <div className={`mx-auto w-full max-w-6xl px-6 ${hero ? 'pb-12 pt-20 sm:pb-20 sm:pt-24' : 'py-12 sm:py-16'}`}>{copy}</div>
    </header>
  );
}

/**
 * The record's own CTA, repeated at the top of the page. The tail CTA is a long
 * scroll away on these templates, so the fold has to offer the way in itself.
 */
function HeaderCta({ cta }: { cta: ContentRecord['cta'] }) {
  const resolve = useResolve();
  if (!cta?.label || !cta.href) return null;
  return (
    <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
      <Link to={resolve(cta.href)} className="cta-site">
        {cta.label}
      </Link>
      {cta.secondaryLabel && cta.secondaryHref ? (
        <Link to={resolve(cta.secondaryHref)} className="cta-secondary-site">
          {cta.secondaryLabel} →
        </Link>
      ) : null}
    </div>
  );
}

export function SectionLinks({ section }: { section: ContentSection }) {
  const resolve = useResolve();
  if (!section.links?.length) return null;
  return (
    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
      {section.links.map((l) => {
        const href = resolve(l.href);
        const external = /^(https?:|mailto:|tel:)/i.test(href);
        return (
          <li key={l.href + l.label}>
            {external ? (
              <a
                href={href}
                className="link-site inline-flex min-h-11 items-center"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {l.label} →
              </a>
            ) : (
              <Link to={href} className="link-site inline-flex min-h-11 items-center">
                {l.label} →
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function SectionMedia({ section }: { section: ContentSection }) {
  if (!section.media) return null;
  return (
    <figure className="card-site overflow-hidden">
      <picture>
        {section.media.src.endsWith('.webp') ? (
          <source srcSet={section.media.src} type="image/webp" />
        ) : null}
        <img
          src={section.media.src.replace(/\.webp$/i, '.jpg')}
          alt={section.media.alt}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          style={{ aspectRatio: section.media.ratio ?? '3/2' }}
        />
      </picture>
    </figure>
  );
}

/** Prose block: heading, paragraphs, bullet list, links. */
export function SectionBody({ section, index }: { section: ContentSection; index: number }) {
  return (
    <SectionReveal as="section" delay={Math.min(index, 4) * 40}>
      {section.eyebrow ? <p className="eyebrow-site mb-3">{section.eyebrow}</p> : null}
      {section.heading ? <h2 className="h2-site">{section.heading}</h2> : null}
      {section.body?.map((p, i) => (
        <p key={i} className="measure-site mt-4 text-ink-2">{p}</p>
      ))}
      {section.list?.length ? (
        <ul className="mt-5 space-y-2">
          {section.list.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="text-accent-site">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <SectionLinks section={section} />
    </SectionReveal>
  );
}

/** Sibling and same-category pages — more context without leaving the island. */
export function RelatedPages({ record }: { record: ContentRecord }) {
  const { link } = useSite();
  const all = useSiteContent();
  const related = all
    .filter((r) => r.slug && r.slug !== record.slug)
    .filter((r) => r.parent === record.parent || r.parent === record.slug || r.category === record.category)
    .slice(0, 8);
  if (!related.length) return null;
  return (
    <section className="mx-auto mt-14 max-w-3xl px-6" aria-label="Related pages">
      <h2 className="h2-site mb-5">Keep reading</h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {related.map((r) => (
          <li key={r.slug}>
            <Link to={link(r.slug)} className="card-site block min-h-11 px-4 py-4">
              <span className="eyebrow-site">{r.category}</span>
              <span className="mt-1 block text-ink">{r.h1}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Tail of every template: price table, FAQ, related pages, quote CTA. */
export function PageTail({ record }: { record: ContentRecord }) {
  const { siteId, isHub } = useSite();
  const showMulti =
    !isHub &&
    (record.slug === '' ||
      record.slug === 'quote' ||
      record.category === 'core' ||
      record.category === 'service');
  const showWedding = !isHub && (record.slug === 'weddings' || record.slug.startsWith('weddings/'));
  const showGuide = !isHub && (record.category === 'guide' || record.slug.startsWith('guides'));
  const islandId = siteId === 'hub' ? null : siteId;

  return (
    <>
      {record.priceTable ? (
        <SectionReveal className="mx-auto mt-12 max-w-3xl px-4 sm:mt-16 sm:px-6">
          <RateTable
            rows={record.priceTable.rows}
            title={record.priceTable.title}
            footnote={record.priceTable.footnote}
          />
        </SectionReveal>
      ) : null}
      {record.faq?.length ? (
        <section className="mx-auto mt-12 max-w-3xl px-4 sm:mt-16 sm:px-6" aria-label="Frequently asked questions">
          <h2 className="h2-site mb-6">Questions, answered</h2>
          <FAQAccordion items={record.faq} />
        </section>
      ) : null}
      {showWedding ? <WeddingMultiIslandCrossSell /> : null}
      {showGuide && islandId ? <SiblingGuideCrossSell siteId={islandId} /> : null}
      {showMulti && !showWedding ? <MultiIslandCrossSell /> : null}
      <RelatedPages record={record} />
      <div className="mt-12 sm:mt-20">
        <QuoteCTA cta={record.cta} />
      </div>
    </>
  );
}
