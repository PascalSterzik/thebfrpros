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
import { PT, filterTestimonialsForAudience } from "@/content/audiences";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildAudienceSchemaGraph } from "@/lib/schema";

// /for/physical-therapists. Primary audience tier (Dr. Mia, mid-career
// outpatient ortho PT). Section flow: hero -> problem (4 pains) ->
// solution (3 pillars) -> scope (APTA + state-board approvals) ->
// applications (6 clinical cases) -> CEUs -> testimonials (PT-credentialed)
// -> soft gateway. Locked hero pattern + audience-specific narrative.

export const metadata: Metadata = {
  title: { absolute: PT.meta.title },
  description: PT.meta.description,
  alternates: { canonical: PT.meta.canonicalPath },
  openGraph: {
    title: PT.meta.title,
    description: PT.meta.description,
    url: PT.meta.canonicalPath,
    type: "website",
    images: [
      {
        url: PT.meta.ogImagePath,
        width: 1200,
        height: 630,
        alt: "BFR for Physical Therapists, The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PT.meta.title,
    description: PT.meta.description,
    images: [PT.meta.ogImagePath],
  },
};

export default function PhysicalTherapistsPage() {
  const schema = buildAudienceSchemaGraph({
    path: PT.meta.canonicalPath,
    audienceName: "Physical Therapists",
    pageTitle: PT.meta.title,
    pageDescription: PT.meta.description,
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <AudienceHero
          eyebrow={PT.hero.eyebrow}
          headline={PT.hero.headline}
          highlight={PT.hero.highlight}
          subhead={PT.hero.subhead}
        />
        <AudienceProblem
          eyebrow={PT.problem.eyebrow}
          headline={PT.problem.headline}
          items={PT.problem.items}
        />
        <AudienceSolution
          eyebrow={PT.solution.eyebrow}
          headline={PT.solution.headline}
          highlight={PT.solution.highlight}
          intro={PT.solution.intro}
          pillars={PT.solution.pillars}
        />
        <AudienceScope
          eyebrow={PT.scope.eyebrow}
          headline={PT.scope.headline}
          body={PT.scope.body}
          citationLabel={PT.scope.citationLabel}
        />
        <AreasList
          eyebrow={PT.applications.eyebrow}
          headline={PT.applications.headline}
          items={PT.applications.items}
        />
        <AudienceCEUs
          eyebrow={PT.ceus.eyebrow}
          headline={PT.ceus.headline}
          intro={PT.ceus.intro}
          items={PT.ceus.items}
        />
        <AudienceTestimonials items={filterTestimonialsForAudience(PT)} />
        {/* Light cross-pointer to the clinic team-training lane (spec §7.3) */}
        <TeamTrainingPointer variant="physicalTherapists" />
        <BioFinalCTA
          eyebrow={PT.finalCta.eyebrow}
          headline={PT.finalCta.headline}
          body={PT.finalCta.body}
          primaryCta={PT.finalCta.primaryCta}
          primaryCtaHref={PT.finalCta.primaryCtaHref}
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
