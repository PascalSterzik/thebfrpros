import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ResearchHero from "@/components/sections/research/ResearchHero";
import PublicationsLibrary from "@/components/sections/research/PublicationsLibrary";
import PublicationsExternalLinks from "@/components/sections/research/PublicationsExternalLinks";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import {
  PUBLICATIONS_META,
  PUBLICATIONS_HERO,
  PUBLICATIONS_LIBRARY,
  PUBLICATIONS_FINAL_CTA,
} from "@/content/research";
import {
  PUBLICATIONS,
  formatJournal,
  publicationTypeBadge,
  publicationYears,
  typeCounts,
} from "@/lib/publications";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildPublicationsSchemaGraph } from "@/lib/schema";

// /research/publications. The on-site publications library: all 76 unique
// publications, filterable by type + year and grouped by year, each linking to
// its own detail page. CollectionPage schema with a ScholarlyArticle ItemList
// pointing at the on-site detail pages.

export const metadata: Metadata = {
  title: { absolute: PUBLICATIONS_META.title },
  description: PUBLICATIONS_META.description,
  alternates: { canonical: PUBLICATIONS_META.canonicalPath },
  openGraph: {
    title: PUBLICATIONS_META.title,
    description: PUBLICATIONS_META.description,
    url: PUBLICATIONS_META.canonicalPath,
    type: "website",
    images: [
      {
        url: PUBLICATIONS_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Publications, Dr. Nicholas Rolnick BFR Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PUBLICATIONS_META.title,
    description: PUBLICATIONS_META.description,
    images: [PUBLICATIONS_META.ogImagePath],
  },
};

export default function PublicationsPage() {
  // Light projection for the client list (no abstracts in the bundle).
  const libraryItems = PUBLICATIONS.map((p) => ({
    slug: p.slug,
    title: p.title,
    year: p.year,
    type: p.type,
    typeBadge: publicationTypeBadge(p.type),
    journal: formatJournal(p.journal),
    role: p.rolnickRole,
    hasAbstract: p.abstractStatus === "full",
  }));

  const schema = buildPublicationsSchemaGraph({
    pageTitle: PUBLICATIONS_META.title,
    pageDescription: PUBLICATIONS_META.description,
    items: PUBLICATIONS.map((p) => ({
      slug: p.slug,
      title: p.title,
      year: p.year,
      journal: p.journal,
    })),
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <ResearchHero
          eyebrow={PUBLICATIONS_HERO.eyebrow}
          headline={PUBLICATIONS_HERO.headline}
          highlight={PUBLICATIONS_HERO.highlight}
          subhead={PUBLICATIONS_HERO.subhead}
        />
        <PublicationsLibrary
          eyebrow={PUBLICATIONS_LIBRARY.eyebrow}
          headline={PUBLICATIONS_LIBRARY.headline}
          intro={PUBLICATIONS_LIBRARY.intro}
          items={libraryItems}
          typeFilters={typeCounts()}
          years={publicationYears()}
        />
        <PublicationsExternalLinks />
        <BioFinalCTA
          eyebrow={PUBLICATIONS_FINAL_CTA.eyebrow}
          headline={PUBLICATIONS_FINAL_CTA.headline}
          body={PUBLICATIONS_FINAL_CTA.body}
          primaryCta={PUBLICATIONS_FINAL_CTA.primaryCta}
          primaryCtaHref={PUBLICATIONS_FINAL_CTA.primaryCtaHref}
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
