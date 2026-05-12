import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BioHero from "@/components/sections/about/BioHero";
import BioBody from "@/components/sections/about/BioBody";
import BioCredentials from "@/components/sections/about/BioCredentials";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import AreasList from "@/components/sections/about/AreasList";
import {
  THOELEN_META,
  THOELEN_HERO,
  THOELEN_BODY,
  THOELEN_AREAS,
  THOELEN_ROLES,
  THOELEN_FINAL_CTA,
} from "@/content/about";
import { SITE } from "@/lib/constants";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildPersonPageSchemaGraph } from "@/lib/schema";

// /about/mathias-thoelen. Belgian Sports PT, Clinical Instructor for The
// BFR Pros across Belgium and The Netherlands. Same locked bio-page
// architecture as /about/nicholas-rolnick and /about/nicholas-licameli:
// BioHero -> BioBody -> ThoelenAreas -> BioCredentials -> BioFinalCTA.

export const metadata: Metadata = {
  title: { absolute: THOELEN_META.title },
  description: THOELEN_META.description,
  alternates: {
    canonical: THOELEN_META.canonicalPath,
  },
  openGraph: {
    title: THOELEN_META.title,
    description: THOELEN_META.description,
    url: THOELEN_META.canonicalPath,
    type: "profile",
    images: [
      {
        url: THOELEN_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Mathias Thoelen, Clinical Instructor at The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: THOELEN_META.title,
    description: THOELEN_META.description,
    images: [THOELEN_META.ogImagePath],
  },
};

export default function ThoelenPage() {
  const schema = buildPersonPageSchemaGraph({
    path: THOELEN_META.canonicalPath,
    personId: `${SITE.origin}/about/mathias-thoelen#person`,
    pageTitle: THOELEN_META.title,
    pageDescription: THOELEN_META.description,
    personName: "Mathias Thoelen",
    jobTitle: "Sports Physical Therapist",
    imageSrc: THOELEN_HERO.photoSrc,
    alumniOf: [{ name: "Hasselt University" }],
    affiliation: ["Anna TopSupport Eindhoven", "The BFR Pros"],
    parentBreadcrumb: { name: "About", path: "/about" },
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <BioHero
          eyebrow={THOELEN_HERO.eyebrow}
          name={THOELEN_HERO.headline}
          credentialsLine={THOELEN_HERO.credentialsLine}
          tagline={THOELEN_HERO.tagline}
          subhead={THOELEN_HERO.subhead}
          photoSrc={THOELEN_HERO.photoSrc}
        />
        <BioBody
          eyebrow={THOELEN_BODY.eyebrow}
          headline={THOELEN_BODY.headline}
          paragraphs={THOELEN_BODY.paragraphs}
        />
        <AreasList
          eyebrow={THOELEN_AREAS.eyebrow}
          headline={THOELEN_AREAS.headline}
          items={THOELEN_AREAS.items}
        />
        <BioCredentials
          eyebrow={THOELEN_ROLES.eyebrow}
          headline={THOELEN_ROLES.headline}
          items={THOELEN_ROLES.items}
        />
        <BioFinalCTA
          eyebrow={THOELEN_FINAL_CTA.eyebrow}
          headline={THOELEN_FINAL_CTA.headline}
          body={THOELEN_FINAL_CTA.body}
          primaryCta={THOELEN_FINAL_CTA.primaryCta}
          primaryCtaHref={THOELEN_FINAL_CTA.primaryCtaHref}
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
