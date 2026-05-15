import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import LegalHero from "@/components/sections/legal/LegalHero";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { REFUND } from "@/content/legal";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildLegalSchemaGraph } from "@/lib/schema";

// /refund-policy. Rewritten end-to-end for the digital certification model
// (the live policy covers physical products + live workshops). The 30-day
// money-back guarantee matches what is claimed on /get-certified and in
// brand-guide.md. See src/content/legal.ts header for the adaptations log;
// the file's header note flags this as a section Pascal should have counsel
// review before relying on it for disputes.

export const metadata: Metadata = {
  title: { absolute: REFUND.meta.title },
  description: REFUND.meta.description,
  alternates: { canonical: REFUND.meta.canonicalPath },
  openGraph: {
    title: REFUND.meta.title,
    description: REFUND.meta.description,
    url: REFUND.meta.canonicalPath,
    type: "website",
    images: [
      {
        url: REFUND.meta.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Refund Policy, The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: REFUND.meta.title,
    description: REFUND.meta.description,
    images: [REFUND.meta.ogImagePath],
  },
};

export default function RefundPage() {
  const schema = buildLegalSchemaGraph({
    path: REFUND.meta.canonicalPath,
    pageTitle: REFUND.meta.title,
    pageDescription: REFUND.meta.description,
    breadcrumbName: "Refund Policy",
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <LegalHero
          eyebrow={REFUND.hero.eyebrow}
          title={REFUND.hero.title}
          lastUpdated={REFUND.hero.lastUpdated}
        />
        <LegalDocument doc={REFUND} />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
