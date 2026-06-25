import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import TeamTrainingHero from "@/components/sections/team-training/TeamTrainingHero";
import TeamTrainingCategoryGap from "@/components/sections/team-training/TeamTrainingCategoryGap";
import TeamTrainingShift from "@/components/sections/team-training/TeamTrainingShift";
import TeamTrainingLegitimacy from "@/components/sections/team-training/TeamTrainingLegitimacy";
import TeamTrainingHowItWorks from "@/components/sections/team-training/TeamTrainingHowItWorks";
import TeamTrainingOffers from "@/components/sections/team-training/TeamTrainingOffers";
import TeamTrainingLaunch from "@/components/sections/team-training/TeamTrainingLaunch";
import TeamTrainingAuthority from "@/components/sections/team-training/TeamTrainingAuthority";
import TeamTrainingEconomics from "@/components/sections/team-training/TeamTrainingEconomics";
import TeamTrainingProof from "@/components/sections/team-training/TeamTrainingProof";
import TeamTrainingFaq from "@/components/sections/team-training/TeamTrainingFaq";
import TeamTrainingCloser from "@/components/sections/team-training/TeamTrainingCloser";
import TeamTrainingFormOverlay from "@/components/sections/team-training/TeamTrainingFormOverlay";
import { TEAM_TRAINING_META, TEAM_TRAINING_FAQ } from "@/content/team-training";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildTeamTrainingSchemaGraph } from "@/lib/schema";

// /train-your-team. The clinic team-training lane (Phase 4). Sells a NEW category
// (team capability, not individual credential): "Train the clinic, not the
// clinician." Two flat-priced offers (In-Person $11,000 / Live Virtual $5,000),
// core -> price -> bonus -> CEU total, plus on-page proof. Installs Beliefs 1 to 3
// (legitimacy, the team lever, whole-team consistency); Beliefs 4 to 6 (device,
// format/logistics, this-provider) are carried on the qualify call.
//
// Awareness posture (spec §5.1): visitors self-IDed as clinic decision-makers
// (they clicked "Train Your Team"), so the hero is direct about the category.
// Indexable (canonical organic team-training page; inherits the site default
// robots index:true, no noindex). Every CTA opens the qualify form via the
// #start hash; the form overlay (TeamTrainingFormOverlay) is wired in Phase 4b.

export const metadata: Metadata = {
  title: { absolute: TEAM_TRAINING_META.title },
  description: TEAM_TRAINING_META.description,
  alternates: {
    canonical: TEAM_TRAINING_META.canonicalPath,
  },
  openGraph: {
    title: TEAM_TRAINING_META.title,
    description: TEAM_TRAINING_META.description,
    url: TEAM_TRAINING_META.canonicalPath,
    type: "website",
    images: [
      {
        url: TEAM_TRAINING_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Train your whole clinic team in BFR with Dr. Nicholas Rolnick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TEAM_TRAINING_META.title,
    description: TEAM_TRAINING_META.description,
    images: [TEAM_TRAINING_META.ogImagePath],
  },
};

export default function TeamTrainingPage() {
  const schema = buildTeamTrainingSchemaGraph({
    pageTitle: TEAM_TRAINING_META.title,
    pageDescription: TEAM_TRAINING_META.description,
    faq: TEAM_TRAINING_FAQ.items,
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        {/* Hero — reveal the category, direct (self-IDed traffic) */}
        <TeamTrainingHero />

        {/* The category gap — why BFR isn't already a team capability */}
        <TeamTrainingCategoryGap />

        {/* The shift — the Big Idea in full (team, not seat) */}
        <TeamTrainingShift />

        {/* Is it legit — 20-year evidence base, counts only */}
        <TeamTrainingLegitimacy />

        {/* Why it sticks — the two-part (course + live application) model */}
        <TeamTrainingHowItWorks />

        {/* The two offers + comparison (core -> price -> bonus -> CEU total) */}
        <TeamTrainingOffers />

        {/* Launch band — opens the qualify overlay (#start) */}
        <TeamTrainingLaunch />

        {/* Why this provider — Rolnick authority + CAPEX freedom */}
        <TeamTrainingAuthority />

        {/* The economics — three ways it pays for itself */}
        <TeamTrainingEconomics />

        {/* Proof — in-person history + named clinic networks + market evidence */}
        <TeamTrainingProof />

        {/* FAQ — the owner's objections + honest limits (FAQPage schema) */}
        <TeamTrainingFaq />

        {/* Closer — first-person Nick + the staff-champion P.S. */}
        <TeamTrainingCloser />
      </main>

      <Footer />

      {/* Full-screen qualify overlay; mounted once, opens on the #start hash from
          the hero, per-card, launch-band, authority, and closer CTAs. */}
      <TeamTrainingFormOverlay />

      {/* JSON-LD @graph: Organization, WebSite, Person (Rolnick), Service
          (hasOfferCatalog of two Offers), BreadcrumbList, FAQPage, WebPage.
          No course AggregateRating on the team Service/Offers (spec §7.4). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
