import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import LegalHero from "@/components/sections/legal/LegalHero";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { TERMS } from "@/content/legal";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildLegalSchemaGraph } from "@/lib/schema";

// /terms. Ported verbatim from the live /terms-conditions page; see
// src/content/legal.ts header for the adaptations log.

export const metadata: Metadata = {
  title: { absolute: TERMS.meta.title },
  description: TERMS.meta.description,
  alternates: { canonical: TERMS.meta.canonicalPath },
  openGraph: {
    title: TERMS.meta.title,
    description: TERMS.meta.description,
    url: TERMS.meta.canonicalPath,
    type: "website",
    images: [
      {
        url: TERMS.meta.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Terms and Conditions — The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TERMS.meta.title,
    description: TERMS.meta.description,
    images: [TERMS.meta.ogImagePath],
  },
};

export default function TermsPage() {
  const schema = buildLegalSchemaGraph({
    path: TERMS.meta.canonicalPath,
    pageTitle: TERMS.meta.title,
    pageDescription: TERMS.meta.description,
    breadcrumbName: "Terms and Conditions",
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <LegalHero
          eyebrow={TERMS.hero.eyebrow}
          title={TERMS.hero.title}
          lastUpdated={TERMS.hero.lastUpdated}
        />
        <LegalDocument doc={TERMS} />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
