import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BioHero from "@/components/sections/about/BioHero";
import BioBody from "@/components/sections/about/BioBody";
import BioCredentials from "@/components/sections/about/BioCredentials";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import {
  MARTY_META,
  MARTY_HERO,
  MARTY_BODY,
  MARTY_ROLES,
  MARTY_FINAL_CTA,
} from "@/content/about";
import { SITE } from "@/lib/constants";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildPersonPageSchemaGraph } from "@/lib/schema";

// /about/marty-rolnick. Philosopher and brand voice. Shorter than the
// other bio pages (less public material exists), but the same locked
// architecture: BioHero -> BioBody -> BioCredentials -> BioFinalCTA.
// No areas-covered section (no curriculum-side role to enumerate).

export const metadata: Metadata = {
  title: { absolute: MARTY_META.title },
  description: MARTY_META.description,
  alternates: {
    canonical: MARTY_META.canonicalPath,
  },
  openGraph: {
    title: MARTY_META.title,
    description: MARTY_META.description,
    url: MARTY_META.canonicalPath,
    type: "profile",
    images: [
      {
        url: MARTY_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Marty Rolnick, philosopher and brand voice at The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: MARTY_META.title,
    description: MARTY_META.description,
    images: [MARTY_META.ogImagePath],
  },
};

export default function MartyPage() {
  const schema = buildPersonPageSchemaGraph({
    path: MARTY_META.canonicalPath,
    personId: `${SITE.origin}/about/marty-rolnick#person`,
    pageTitle: MARTY_META.title,
    pageDescription: MARTY_META.description,
    personName: "Marty Rolnick",
    jobTitle: "Philosopher and brand voice",
    imageSrc: MARTY_HERO.photoSrc,
    affiliation: ["The BFR Pros"],
    parentBreadcrumb: { name: "About", path: "/about" },
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <BioHero
          eyebrow={MARTY_HERO.eyebrow}
          name={MARTY_HERO.headline}
          credentialsLine={MARTY_HERO.credentialsLine}
          tagline={MARTY_HERO.tagline}
          subhead={MARTY_HERO.subhead}
          photoSrc={MARTY_HERO.photoSrc}
        />
        <BioBody
          eyebrow={MARTY_BODY.eyebrow}
          headline={MARTY_BODY.headline}
          paragraphs={MARTY_BODY.paragraphs}
        />
        <BioCredentials
          eyebrow={MARTY_ROLES.eyebrow}
          headline={MARTY_ROLES.headline}
          items={MARTY_ROLES.items}
        />
        <BioFinalCTA
          eyebrow={MARTY_FINAL_CTA.eyebrow}
          headline={MARTY_FINAL_CTA.headline}
          body={MARTY_FINAL_CTA.body}
          primaryCta={MARTY_FINAL_CTA.primaryCta}
          primaryCtaHref={MARTY_FINAL_CTA.primaryCtaHref}
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
