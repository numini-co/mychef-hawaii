import { QuoteCta } from '@/components/Cta';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq } from '@/components/Longform';
import InlineText from '@/components/InlineText';
import QuoteTeaser from '@/components/QuoteTeaser';
import { islands, type IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import type { FeaturePost } from '@/data/islandFeaturePosts';

/** Long-form island blog post: sections, FAQ, BlogPosting + FAQPage schema. */
export function FeaturePostView({ islandId, post }: { islandId: IslandId; post: FeaturePost }) {
  const island = islands[islandId];
  const photo = photos[post.photo];
  const origin = `https://${islandId}.mychef-hawaii.com`;
  const url = `${origin}/blog/${post.slug}`;
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.h1,
            description: post.description,
            image: `${origin}${photo.file}`,
            datePublished: post.datePublished,
            dateModified: post.datePublished,
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            url,
            keywords: post.keyword,
            articleSection: `${island.name} blog`,
            inLanguage: 'en-US',
            author: { '@type': 'Organization', name: `myCHEF ${island.name}`, url: origin },
            publisher: { '@type': 'Organization', name: 'myCHEF Hawaii', url: 'https://mychef-hawaii.com' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: post.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">
          {island.name} · Blog · {post.name}
        </p>
        <LineReveal
          as="h1"
          text={post.h1}
          className="mt-3 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{post.lede}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <QuoteCta island={islandId} variant="light" />
        </div>
      </Hero>

      <article className="bg-paper py-20 lg:py-28">
        <div className="mx-auto w-full max-w-3xl space-y-14 px-5 lg:px-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-[1.15] text-ink">
                {section.heading}
              </h2>
              <div className="mt-6 space-y-6">
                {section.paras.map((p) => (
                  <p key={p.slice(0, 48)} className="text-[17px] leading-[1.7] text-mute">
                    <InlineText text={p} />
                  </p>
                ))}
              </div>
            </section>
          ))}
          <div className="pt-2">
            <QuoteCta island={islandId} />
          </div>
        </div>
      </article>

      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`${island.shortName} · Plan the night`}
        heading="Where to go next."
        columns={3}
        items={post.related.map((link) => ({ path: link.path, label: link.label, detail: link.path }))}
      />

      <LongFaq items={post.faqs} title={`Asked about ${post.name}.`} />
      <QuoteTeaser headline="Send the address, the date and the guest count." island={islandId} />
    </>
  );
}
