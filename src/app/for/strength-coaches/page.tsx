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
import { SC, filterTestimonialsForAudience } from "@/content/audiences";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildAudienceSchemaGraph } from "@/lib/schema";

// /for/strength-coaches. Tertiary audience tier. Performance-focused
// framing; same locked section flow as the other two audience pages.

export const metadata: Metadata = {
  title: { absolute: SC.meta.title },
  description: SC.meta.description,
  alternates: { canonical: SC.meta.canonicalPath },
  openGraph: {
    title: SC.meta.title,
    description: SC.meta.description,
    url: SC.meta.canonicalPath,
    type: "website",
    images: [
      {
        url: SC.meta.ogImagePath,
        width: 1200,
        height: 630,
        alt: "BFR for Strength and Conditioning Coaches, The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SC.meta.title,
    description: SC.meta.description,
    images: [SC.meta.ogImagePath],
  },
};

export default function StrengthCoachesPage() {
  const schema = buildAudienceSchemaGraph({
    path: SC.meta.canonicalPath,
    audienceName: "Strength and Conditioning Coaches",
    pageTitle: SC.meta.title,
    pageDescription: SC.meta.description,
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <AudienceHero
          eyebrow={SC.hero.eyebrow}
          headline={SC.hero.headline}
          highlight={SC.hero.highlight}
          subhead={SC.hero.subhead}
        />
        <AudienceProblem
          eyebrow={SC.problem.eyebrow}
          headline={SC.problem.headline}
          items={SC.problem.items}
        />
        <AudienceSolution
          eyebrow={SC.solution.eyebrow}
          headline={SC.solution.headline}
          highlight={SC.solution.highlight}
          intro={SC.solution.intro}
          pillars={SC.solution.pillars}
        />
        <AudienceScope
          eyebrow={SC.scope.eyebrow}
          headline={SC.scope.headline}
          body={SC.scope.body}
          citationLabel={SC.scope.citationLabel}
        />
        <AreasList
          eyebrow={SC.applications.eyebrow}
          headline={SC.applications.headline}
          items={SC.applications.items}
        />
        <AudienceCEUs
          eyebrow={SC.ceus.eyebrow}
          headline={SC.ceus.headline}
          intro={SC.ceus.intro}
          items={SC.ceus.items}
        />
        <AudienceTestimonials items={filterTestimonialsForAudience(SC)} />
        {/* Light cross-pointer to the clinic team-training lane (spec §7.3, optional) */}
        <TeamTrainingPointer variant="strengthCoaches" />
        <BioFinalCTA
          eyebrow={SC.finalCta.eyebrow}
          headline={SC.finalCta.headline}
          body={SC.finalCta.body}
          primaryCta={SC.finalCta.primaryCta}
          primaryCtaHref={SC.finalCta.primaryCtaHref}
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
