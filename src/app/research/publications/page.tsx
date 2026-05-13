import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ResearchHero from "@/components/sections/research/ResearchHero";
import FeaturedPapers from "@/components/sections/research/FeaturedPapers";
import ResearchJournals from "@/components/sections/research/ResearchJournals";
import PublicationsExternalLinks from "@/components/sections/research/PublicationsExternalLinks";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import {
  PUBLICATIONS_META,
  PUBLICATIONS_HERO,
  PUBLICATIONS_INTRO,
  PUBLICATIONS_FINAL_CTA,
} from "@/content/research";
import { ROLNICK_FEATURED_PAPERS } from "@/lib/constants";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildPublicationsSchemaGraph } from "@/lib/schema";

// /research/publications. Deep publication list with full abstracts and
// outbound article links. CollectionPage schema with ScholarlyArticle
// ItemList. External links to Google Scholar + ResearchGate cover the
// remainder of the 72+ paper trail beyond the 6 featured here.

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
        alt: "Publications — Dr. Nicholas Rolnick BFR Research",
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
  const schema = buildPublicationsSchemaGraph({
    pageTitle: PUBLICATIONS_META.title,
    pageDescription: PUBLICATIONS_META.description,
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
          eyebrow={PUBLICATIONS_HERO.eyebrow}
          headline={PUBLICATIONS_HERO.headline}
          highlight={PUBLICATIONS_HERO.highlight}
          subhead={PUBLICATIONS_HERO.subhead}
        />
        <FeaturedPapers
          mode="full"
          eyebrow={PUBLICATIONS_INTRO.eyebrow}
          headline={PUBLICATIONS_INTRO.headline}
          intro={PUBLICATIONS_INTRO.paragraphs.join(" ")}
        />
        <ResearchJournals />
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
