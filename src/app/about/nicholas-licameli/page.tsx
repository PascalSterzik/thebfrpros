import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BioHero from "@/components/sections/about/BioHero";
import BioBody from "@/components/sections/about/BioBody";
import BioCredentials from "@/components/sections/about/BioCredentials";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import LicameliAreas from "@/components/sections/about/LicameliAreas";
import {
  LICAMELI_META,
  LICAMELI_HERO,
  LICAMELI_BODY,
  LICAMELI_ROLES,
  LICAMELI_FINAL_CTA,
} from "@/content/about";
import { LICAMELI, SITE } from "@/lib/constants";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildPersonPageSchemaGraph } from "@/lib/schema";

// /about/nicholas-licameli. Co-instructor authority page. Shorter than
// the Rolnick page (less material exists publicly), but the same section
// architecture: hero → narrative → role-areas → roles list → soft gateway.
// No BioStats (no published hard counts for Licameli yet — flagged in
// InstructorsSection too). When Pascal supplies hard numbers, drop BioStats
// in between BioBody and LicameliAreas like the Rolnick page does.

export const metadata: Metadata = {
  title: { absolute: LICAMELI_META.title },
  description: LICAMELI_META.description,
  alternates: {
    canonical: LICAMELI_META.canonicalPath,
  },
  openGraph: {
    title: LICAMELI_META.title,
    description: LICAMELI_META.description,
    url: LICAMELI_META.canonicalPath,
    type: "profile",
    images: [
      {
        url: LICAMELI_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: `${LICAMELI.fullName} — co-founder, The BFR Pros`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: LICAMELI_META.title,
    description: LICAMELI_META.description,
    images: [LICAMELI_META.ogImagePath],
  },
};

export default function LicameliPage() {
  const schema = buildPersonPageSchemaGraph({
    path: LICAMELI_META.canonicalPath,
    personId: `${SITE.origin}/about/nicholas-licameli#person`,
    pageTitle: LICAMELI_META.title,
    pageDescription: LICAMELI_META.description,
    personName: LICAMELI.fullName,
    jobTitle: "Doctor of Physical Therapy",
    imageSrc: LICAMELI_HERO.photoSrc,
    parentBreadcrumb: { name: "About", path: "/about" },
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <BioHero
          eyebrow={LICAMELI_HERO.eyebrow}
          name={LICAMELI_HERO.headline}
          credentialsLine={LICAMELI_HERO.credentialsLine}
          tagline={LICAMELI_HERO.tagline}
          subhead={LICAMELI_HERO.subhead}
          photoSrc={LICAMELI_HERO.photoSrc}
        />
        <BioBody
          eyebrow={LICAMELI_BODY.eyebrow}
          headline={LICAMELI_BODY.headline}
          paragraphs={LICAMELI_BODY.paragraphs}
        />
        <LicameliAreas />
        <BioCredentials
          eyebrow={LICAMELI_ROLES.eyebrow}
          headline={LICAMELI_ROLES.headline}
          items={LICAMELI_ROLES.items}
        />
        <BioFinalCTA
          eyebrow={LICAMELI_FINAL_CTA.eyebrow}
          headline={LICAMELI_FINAL_CTA.headline}
          body={LICAMELI_FINAL_CTA.body}
          primaryCta={LICAMELI_FINAL_CTA.primaryCta}
          primaryCtaHref={LICAMELI_FINAL_CTA.primaryCtaHref}
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
