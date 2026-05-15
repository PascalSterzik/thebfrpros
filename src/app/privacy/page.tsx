import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import LegalHero from "@/components/sections/legal/LegalHero";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { PRIVACY } from "@/content/legal";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildLegalSchemaGraph } from "@/lib/schema";

// /privacy. Long-form privacy policy adapted from the live site with
// Woocommerce -> Teachable corrections and the contact email fixed. See
// src/content/legal.ts header comment for the full list of adaptations.

export const metadata: Metadata = {
  title: { absolute: PRIVACY.meta.title },
  description: PRIVACY.meta.description,
  alternates: { canonical: PRIVACY.meta.canonicalPath },
  openGraph: {
    title: PRIVACY.meta.title,
    description: PRIVACY.meta.description,
    url: PRIVACY.meta.canonicalPath,
    type: "website",
    images: [
      {
        url: PRIVACY.meta.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Privacy Policy, The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PRIVACY.meta.title,
    description: PRIVACY.meta.description,
    images: [PRIVACY.meta.ogImagePath],
  },
};

export default function PrivacyPage() {
  const schema = buildLegalSchemaGraph({
    path: PRIVACY.meta.canonicalPath,
    pageTitle: PRIVACY.meta.title,
    pageDescription: PRIVACY.meta.description,
    breadcrumbName: "Privacy Policy",
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <LegalHero
          eyebrow={PRIVACY.hero.eyebrow}
          title={PRIVACY.hero.title}
          lastUpdated={PRIVACY.hero.lastUpdated}
        />
        <LegalDocument doc={PRIVACY} />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
