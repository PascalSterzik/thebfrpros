import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutPrinciples from "@/components/sections/about/AboutPrinciples";
import AboutTeam from "@/components/sections/about/AboutTeam";
import AboutFinalCTA from "@/components/sections/about/AboutFinalCTA";
import { ABOUT_META } from "@/content/about";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildAboutSchemaGraph } from "@/lib/schema";

// /about parent page. Stage 2-3 awareness traffic: a visitor who knows BFR
// is real, wants to know who's behind this cert before evaluating it on the
// /get-certified page. Sections sell the MISSION (equipment-agnostic, research-
// led, implementation-first); the two team cards hand off to deep bio sub-
// pages. One soft gateway at the end → /get-certified. No pricing, no
// curriculum preview, no FAQ on this page (those live at /get-certified
// per brand-guide.md Principle 6).

export const metadata: Metadata = {
  title: { absolute: ABOUT_META.title },
  description: ABOUT_META.description,
  alternates: {
    canonical: ABOUT_META.canonicalPath,
  },
  openGraph: {
    title: ABOUT_META.title,
    description: ABOUT_META.description,
    url: ABOUT_META.canonicalPath,
    type: "website",
    images: [
      {
        url: ABOUT_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "About The BFR Pros: equipment-agnostic BFR certification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ABOUT_META.title,
    description: ABOUT_META.description,
    images: [ABOUT_META.ogImagePath],
  },
};

export default function AboutPage() {
  const schema = buildAboutSchemaGraph({
    pageTitle: ABOUT_META.title,
    pageDescription: ABOUT_META.description,
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <AboutHero />
        <AboutStory />
        <AboutPrinciples />
        <AboutTeam />
        <AboutFinalCTA />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
