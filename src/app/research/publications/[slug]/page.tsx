import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import PublicationDetailHero from "@/components/sections/research/PublicationDetailHero";
import PublicationDetailBody from "@/components/sections/research/PublicationDetailBody";
import RelatedPublications from "@/components/sections/research/RelatedPublications";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import { PUBLICATION_DETAIL_FINAL_CTA } from "@/content/research";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildPublicationDetailSchemaGraph } from "@/lib/schema";
import {
  PUBLICATION_SLUGS,
  citationLine,
  getPublicationBySlug,
  getRelatedPublications,
  publicationMetaDescription,
  publicationTypeBadge,
  toListItem,
} from "@/lib/publications";

// /research/publications/[slug] — one statically-generated page per unique
// publication. Mirrors /blog/[slug]: generateStaticParams over every slug,
// generateMetadata for a unique title/description/canonical/OG, and a
// MedicalScholarlyArticle JSON-LD graph injected at the end.

export function generateStaticParams() {
  return PUBLICATION_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pub = getPublicationBySlug(params.slug);
  if (!pub) return { title: "Publication not found" };
  const description = publicationMetaDescription(pub);

  return {
    title: { absolute: `${pub.title} | Dr. Nicholas Rolnick | The BFR Pros` },
    description,
    alternates: { canonical: `/research/publications/${pub.slug}` },
    openGraph: {
      title: pub.title,
      description,
      url: `/research/publications/${pub.slug}`,
      type: "article",
      authors: ["Dr. Nicholas Rolnick"],
      images: [
        {
          url: "/og/home",
          width: 1200,
          height: 630,
          alt: `${pub.title}, Dr. Nicholas Rolnick BFR research`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pub.title,
      description,
      images: ["/og/home"],
    },
  };
}

export default function PublicationDetailPage({ params }: { params: { slug: string } }) {
  const pub = getPublicationBySlug(params.slug);
  if (!pub) notFound();

  const related = getRelatedPublications(pub, 3).map(toListItem);
  const schema = buildPublicationDetailSchemaGraph(pub);

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <PublicationDetailHero
          title={pub.title}
          typeBadge={publicationTypeBadge(pub.type)}
          citation={citationLine(pub)}
          roleLabel={`Dr. Nicholas Rolnick · ${pub.rolnickRole}`}
        />
        <PublicationDetailBody pub={pub} />
        <RelatedPublications items={related} />
        <BioFinalCTA
          eyebrow={PUBLICATION_DETAIL_FINAL_CTA.eyebrow}
          headline={PUBLICATION_DETAIL_FINAL_CTA.headline}
          body={PUBLICATION_DETAIL_FINAL_CTA.body}
          primaryCta={PUBLICATION_DETAIL_FINAL_CTA.primaryCta}
          primaryCtaHref={PUBLICATION_DETAIL_FINAL_CTA.primaryCtaHref}
        />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
