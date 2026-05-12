import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ResearchHero from "@/components/sections/research/ResearchHero";
import ResearchPhilosophy from "@/components/sections/research/ResearchPhilosophy";
import ResearchJournals from "@/components/sections/research/ResearchJournals";
import FeaturedPapers from "@/components/sections/research/FeaturedPapers";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import {
  RESEARCH_META,
  RESEARCH_HERO,
  RESEARCH_FEATURED_PREVIEW,
  RESEARCH_FINAL_CTA,
} from "@/content/research";
import { ROLNICK_FEATURED_PAPERS } from "@/lib/constants";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildResearchSchemaGraph } from "@/lib/schema";

// /research. Brand-level research credentials page. 6 sections: Hero ->
// Philosophy (how the research feeds the curriculum) -> Journals marquee
// -> Featured-papers preview (links to /research/publications) -> Final CTA.
// WebPage schema with a ScholarlyArticle ItemList; Person @id matches the
// canonical Rolnick entity used elsewhere on the site.

export const metadata: Metadata = {
  title: { absolute: RESEARCH_META.title },
  description: RESEARCH_META.description,
  alternates: { canonical: RESEARCH_META.canonicalPath },
  openGraph: {
    title: RESEARCH_META.title,
    description: RESEARCH_META.description,
    url: RESEARCH_META.canonicalPath,
    type: "website",
    images: [
      {
        url: RESEARCH_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Research — The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: RESEARCH_META.title,
    description: RESEARCH_META.description,
    images: [RESEARCH_META.ogImagePath],
  },
};

export default function ResearchPage() {
  const schema = buildResearchSchemaGraph({
    pageTitle: RESEARCH_META.title,
    pageDescription: RESEARCH_META.description,
    papers: ROLNICK_FEATURED_PAPERS.map((p) => ({
      title: p.title,
      abstract: p.abstract,
      url: p.url,
      journal: p.journal,
      year: p.year,
    })),
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <ResearchHero
          eyebrow={RESEARCH_HERO.eyebrow}
          headline={RESEARCH_HERO.headline}
          subhead={RESEARCH_HERO.subhead}
        />
        <ResearchPhilosophy />
        <ResearchJournals />
        <FeaturedPapers
          mode="preview"
          eyebrow={RESEARCH_FEATURED_PREVIEW.eyebrow}
          headline={RESEARCH_FEATURED_PREVIEW.headline}
          intro={RESEARCH_FEATURED_PREVIEW.intro}
          ctaLabel={RESEARCH_FEATURED_PREVIEW.ctaLabel}
          ctaHref={RESEARCH_FEATURED_PREVIEW.ctaHref}
        />
        <BioFinalCTA
          eyebrow={RESEARCH_FINAL_CTA.eyebrow}
          headline={RESEARCH_FINAL_CTA.headline}
          body={RESEARCH_FINAL_CTA.body}
          primaryCta={RESEARCH_FINAL_CTA.primaryCta}
          primaryCtaHref={RESEARCH_FINAL_CTA.primaryCtaHref}
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
