import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BioHero from "@/components/sections/about/BioHero";
import BioBody from "@/components/sections/about/BioBody";
import BioStats from "@/components/sections/about/BioStats";
import BioCredentials from "@/components/sections/about/BioCredentials";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import RolnickJournals from "@/components/sections/about/RolnickJournals";
import RolnickMedia from "@/components/sections/about/RolnickMedia";
import RolnickPodcasts from "@/components/sections/about/RolnickPodcasts";
import {
  ROLNICK_META,
  ROLNICK_HERO,
  ROLNICK_BODY,
  ROLNICK_STATS,
  ROLNICK_CREDENTIALS,
  ROLNICK_FINAL_CTA,
} from "@/content/about";
import { ROLNICK, SITE } from "@/lib/constants";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildPersonPageSchemaGraph } from "@/lib/schema";

// /about/nicholas-rolnick. Stage 3-4 traffic that came in on an authority-led
// search ("who is Nicholas Rolnick", "Nicholas Rolnick BFR", a CNN article
// click). Section flow installs Belief 5 (research authority) by stacking
// publications, education, media features, and the active clinical practice.
// One soft gateway at the end → /get-certified.

export const metadata: Metadata = {
  title: { absolute: ROLNICK_META.title },
  description: ROLNICK_META.description,
  alternates: {
    canonical: ROLNICK_META.canonicalPath,
  },
  openGraph: {
    title: ROLNICK_META.title,
    description: ROLNICK_META.description,
    url: ROLNICK_META.canonicalPath,
    type: "profile",
    images: [
      {
        url: ROLNICK_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: `${ROLNICK.fullName}, co-founder, The BFR Pros`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ROLNICK_META.title,
    description: ROLNICK_META.description,
    images: [ROLNICK_META.ogImagePath],
  },
};

export default function RolnickPage() {
  const schema = buildPersonPageSchemaGraph({
    path: ROLNICK_META.canonicalPath,
    personId: `${SITE.origin}/about/nicholas-rolnick#person`,
    pageTitle: ROLNICK_META.title,
    pageDescription: ROLNICK_META.description,
    personName: ROLNICK.fullName,
    jobTitle: "Doctor of Physical Therapy",
    imageSrc: ROLNICK_HERO.photoSrc,
    alumniOf: ROLNICK.alumniOf,
    affiliation: ROLNICK.affiliations,
    sameAs: [
      "https://www.researchgate.net/profile/Nicholas-Rolnick",
      "https://podcasts.apple.com/de/podcast/bfr-better-for-results-podcast/id1726669945",
      SITE.social.instagram,
    ],
    parentBreadcrumb: { name: "About", path: "/about" },
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <BioHero
          eyebrow={ROLNICK_HERO.eyebrow}
          name={ROLNICK_HERO.headline}
          credentialsLine={ROLNICK_HERO.credentialsLine}
          tagline={ROLNICK_HERO.tagline}
          subhead={ROLNICK_HERO.subhead}
          photoSrc={ROLNICK_HERO.photoSrc}
        />
        <BioStats stats={ROLNICK_STATS} />
        <BioBody
          eyebrow={ROLNICK_BODY.eyebrow}
          headline={ROLNICK_BODY.headline}
          paragraphs={ROLNICK_BODY.paragraphs}
        />
        <BioCredentials
          eyebrow={ROLNICK_CREDENTIALS.eyebrow}
          headline={ROLNICK_CREDENTIALS.headline}
          items={ROLNICK_CREDENTIALS.items}
        />
        <RolnickJournals />
        <RolnickMedia />
        <RolnickPodcasts />
        <BioFinalCTA
          eyebrow={ROLNICK_FINAL_CTA.eyebrow}
          headline={ROLNICK_FINAL_CTA.headline}
          body={ROLNICK_FINAL_CTA.body}
          primaryCta={ROLNICK_FINAL_CTA.primaryCta}
          primaryCtaHref={ROLNICK_FINAL_CTA.primaryCtaHref}
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
