import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import AudienceHero from "@/components/sections/audience/AudienceHero";
import AudienceProblem from "@/components/sections/audience/AudienceProblem";
import AudienceSolution from "@/components/sections/audience/AudienceSolution";
import AudienceScope from "@/components/sections/audience/AudienceScope";
import AreasList from "@/components/sections/about/AreasList";
import AudienceCEUs from "@/components/sections/audience/AudienceCEUs";
import AudienceTestimonials from "@/components/sections/audience/AudienceTestimonials";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import TeamTrainingPointer from "@/components/sections/team-training/TeamTrainingPointer";
import { AT, filterTestimonialsForAudience } from "@/content/audiences";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildAudienceSchemaGraph } from "@/lib/schema";

// /for/athletic-trainers. Secondary audience tier. Same locked section
// flow as the PT page; sideline-focused content + BOC Category A CEU
// framing.

export const metadata: Metadata = {
  title: { absolute: AT.meta.title },
  description: AT.meta.description,
  alternates: { canonical: AT.meta.canonicalPath },
  openGraph: {
    title: AT.meta.title,
    description: AT.meta.description,
    url: AT.meta.canonicalPath,
    type: "website",
    images: [
      {
        url: AT.meta.ogImagePath,
        width: 1200,
        height: 630,
        alt: "BFR for Athletic Trainers, The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: AT.meta.title,
    description: AT.meta.description,
    images: [AT.meta.ogImagePath],
  },
};

export default function AthleticTrainersPage() {
  const schema = buildAudienceSchemaGraph({
    path: AT.meta.canonicalPath,
    audienceName: "Athletic Trainers",
    pageTitle: AT.meta.title,
    pageDescription: AT.meta.description,
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <AudienceHero
          eyebrow={AT.hero.eyebrow}
          headline={AT.hero.headline}
          highlight={AT.hero.highlight}
          subhead={AT.hero.subhead}
        />
        <AudienceProblem
          eyebrow={AT.problem.eyebrow}
          headline={AT.problem.headline}
          items={AT.problem.items}
        />
        <AudienceSolution
          eyebrow={AT.solution.eyebrow}
          headline={AT.solution.headline}
          highlight={AT.solution.highlight}
          intro={AT.solution.intro}
          pillars={AT.solution.pillars}
        />
        <AudienceScope
          eyebrow={AT.scope.eyebrow}
          headline={AT.scope.headline}
          body={AT.scope.body}
          citationLabel={AT.scope.citationLabel}
        />
        <AreasList
          eyebrow={AT.applications.eyebrow}
          headline={AT.applications.headline}
          items={AT.applications.items}
        />
        <AudienceCEUs
          eyebrow={AT.ceus.eyebrow}
          headline={AT.ceus.headline}
          intro={AT.ceus.intro}
          items={AT.ceus.items}
        />
        <AudienceTestimonials items={filterTestimonialsForAudience(AT)} />
        {/* Light cross-pointer to the clinic team-training lane (spec §7.3, bucket C) */}
        <TeamTrainingPointer variant="athleticTrainers" />
        <BioFinalCTA
          eyebrow={AT.finalCta.eyebrow}
          headline={AT.finalCta.headline}
          body={AT.finalCta.body}
          primaryCta={AT.finalCta.primaryCta}
          primaryCtaHref={AT.finalCta.primaryCtaHref}
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
