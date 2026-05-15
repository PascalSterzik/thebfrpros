import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import LegalHero from "@/components/sections/legal/LegalHero";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { DISCLAIMER } from "@/content/legal";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildLegalSchemaGraph } from "@/lib/schema";

// /disclaimer. Ported verbatim from the live /disclaimer page; this is the
// health/medical-advice disclaimer that's critical for a clinical-cert site.
// See src/content/legal.ts header for the adaptations log.

export const metadata: Metadata = {
  title: { absolute: DISCLAIMER.meta.title },
  description: DISCLAIMER.meta.description,
  alternates: { canonical: DISCLAIMER.meta.canonicalPath },
  openGraph: {
    title: DISCLAIMER.meta.title,
    description: DISCLAIMER.meta.description,
    url: DISCLAIMER.meta.canonicalPath,
    type: "website",
    images: [
      {
        url: DISCLAIMER.meta.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Disclaimer, The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DISCLAIMER.meta.title,
    description: DISCLAIMER.meta.description,
    images: [DISCLAIMER.meta.ogImagePath],
  },
};

export default function DisclaimerPage() {
  const schema = buildLegalSchemaGraph({
    path: DISCLAIMER.meta.canonicalPath,
    pageTitle: DISCLAIMER.meta.title,
    pageDescription: DISCLAIMER.meta.description,
    breadcrumbName: "Disclaimer",
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <LegalHero
          eyebrow={DISCLAIMER.hero.eyebrow}
          title={DISCLAIMER.hero.title}
          lastUpdated={DISCLAIMER.hero.lastUpdated}
        />
        <LegalDocument doc={DISCLAIMER} />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
