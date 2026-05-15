import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ResearchHero from "@/components/sections/research/ResearchHero";
import PressFeatures from "@/components/sections/press/PressFeatures";
import LongFormInterviews from "@/components/sections/press/LongFormInterviews";
import PressPodcasts from "@/components/sections/press/PressPodcasts";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import { PRESS_META, PRESS_HERO, PRESS_FINAL_CTA } from "@/content/press";
import { SITE_MENU_LINKS } from "@/lib/menus";

// /press. Brand-richness hub combining 3 buckets of Nick-personal media:
// 18 mainstream/clinical press features (ROLNICK_PERSONAL_MEDIA), 4 long
// -form video interviews (ROLNICK_INTERVIEWS), and 15 podcast guest
// appearances (ROLNICK_PODCASTS). Stage-2/3 awareness — supports the
// "is this person legit?" beat without selling the cert. Linked from
// the footer Resources column (not the primary header — header stays
// lean at 5 items per the Phase 1d trim).
//
// Schema graph: skipped on this build per chip scope. The hero pattern
// is shared (ResearchHero) and the data sections are content-driven, so
// adding ProfilePage / WebPage schema is a separate increment if Pascal
// wants /press to feed AI-discovery surfaces later.

export const metadata: Metadata = {
  title: { absolute: PRESS_META.title },
  description: PRESS_META.description,
  alternates: { canonical: PRESS_META.canonicalPath },
  openGraph: {
    title: PRESS_META.title,
    description: PRESS_META.description,
    url: PRESS_META.canonicalPath,
    type: "website",
    images: [
      {
        url: PRESS_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Press, The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PRESS_META.title,
    description: PRESS_META.description,
    images: [PRESS_META.ogImagePath],
  },
};

export default function PressPage() {
  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <ResearchHero
          eyebrow={PRESS_HERO.eyebrow}
          headline={PRESS_HERO.headline}
          highlight={PRESS_HERO.highlight}
          subhead={PRESS_HERO.subhead}
        />
        <PressFeatures />
        <LongFormInterviews />
        <PressPodcasts />
        <BioFinalCTA
          eyebrow={PRESS_FINAL_CTA.eyebrow}
          headline={PRESS_FINAL_CTA.headline}
          body={PRESS_FINAL_CTA.body}
          primaryCta={PRESS_FINAL_CTA.primaryCta}
          primaryCtaHref={PRESS_FINAL_CTA.primaryCtaHref}
        />
      </main>

      <Footer />
    </>
  );
}
