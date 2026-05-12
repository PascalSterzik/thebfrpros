import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BioHero from "@/components/sections/about/BioHero";
import BioBody from "@/components/sections/about/BioBody";
import BioCredentials from "@/components/sections/about/BioCredentials";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import AreasList from "@/components/sections/about/AreasList";
import {
  MARCANO_META,
  MARCANO_HERO,
  MARCANO_BODY,
  MARCANO_CERTIFICATIONS,
  MARCANO_ROLES,
  MARCANO_FINAL_CTA,
} from "@/content/about";
import { SITE } from "@/lib/constants";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildPersonPageSchemaGraph } from "@/lib/schema";

// /about/erica-marcano. ATC, CSCS, Associate Professor at LIU Brooklyn,
// Northeast Regional Coordinator with The Rugby Research and Injury
// Prevention Group. Locked bio-page architecture:
// BioHero -> BioBody -> AreasList (certifications) -> BioCredentials (roles)
// -> BioFinalCTA.

export const metadata: Metadata = {
  title: { absolute: MARCANO_META.title },
  description: MARCANO_META.description,
  alternates: {
    canonical: MARCANO_META.canonicalPath,
  },
  openGraph: {
    title: MARCANO_META.title,
    description: MARCANO_META.description,
    url: MARCANO_META.canonicalPath,
    type: "profile",
    images: [
      {
        url: MARCANO_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Erica Marcano, Consultant at The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: MARCANO_META.title,
    description: MARCANO_META.description,
    images: [MARCANO_META.ogImagePath],
  },
};

export default function MarcanoPage() {
  const schema = buildPersonPageSchemaGraph({
    path: MARCANO_META.canonicalPath,
    personId: `${SITE.origin}/about/erica-marcano#person`,
    pageTitle: MARCANO_META.title,
    pageDescription: MARCANO_META.description,
    personName: "Erica Marcano",
    jobTitle: "Athletic Trainer, Strength & Conditioning Specialist, Associate Professor",
    imageSrc: MARCANO_HERO.photoSrc,
    alumniOf: [{ name: "LIU Brooklyn" }],
    affiliation: [
      "LIU Brooklyn",
      "The Rugby Research and Injury Prevention Group",
      "Northeast Rugby Academy",
      "The BFR Pros",
    ],
    parentBreadcrumb: { name: "About", path: "/about" },
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <BioHero
          eyebrow={MARCANO_HERO.eyebrow}
          name={MARCANO_HERO.headline}
          credentialsLine={MARCANO_HERO.credentialsLine}
          tagline={MARCANO_HERO.tagline}
          subhead={MARCANO_HERO.subhead}
          photoSrc={MARCANO_HERO.photoSrc}
        />
        <BioBody
          eyebrow={MARCANO_BODY.eyebrow}
          headline={MARCANO_BODY.headline}
          paragraphs={MARCANO_BODY.paragraphs}
        />
        <AreasList
          eyebrow={MARCANO_CERTIFICATIONS.eyebrow}
          headline={MARCANO_CERTIFICATIONS.headline}
          items={MARCANO_CERTIFICATIONS.items}
        />
        <BioCredentials
          eyebrow={MARCANO_ROLES.eyebrow}
          headline={MARCANO_ROLES.headline}
          items={MARCANO_ROLES.items}
        />
        <BioFinalCTA
          eyebrow={MARCANO_FINAL_CTA.eyebrow}
          headline={MARCANO_FINAL_CTA.headline}
          body={MARCANO_FINAL_CTA.body}
          primaryCta={MARCANO_FINAL_CTA.primaryCta}
          primaryCtaHref={MARCANO_FINAL_CTA.primaryCtaHref}
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
