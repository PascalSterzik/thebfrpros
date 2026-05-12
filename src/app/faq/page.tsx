import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FAQPageHero from "@/components/sections/faq/FAQPageHero";
import CategorizedFAQ from "@/components/sections/faq/CategorizedFAQ";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import { FAQ_PAGE_FLAT, FAQ_PAGE_META } from "@/content/faq-page";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildFAQPageSchemaGraph } from "@/lib/schema";

// /faq. Comprehensive cross-page FAQ (the 9-item version on /get-certified
// is cert-mechanics focused; this is the broader set covering eligibility,
// CEUs, equipment, pricing, safety, and implementation). Locked hero pattern
// + categorized accordion + soft gateway to /get-certified.

export const metadata: Metadata = {
  title: { absolute: FAQ_PAGE_META.title },
  description: FAQ_PAGE_META.description,
  alternates: { canonical: FAQ_PAGE_META.canonicalPath },
  openGraph: {
    title: FAQ_PAGE_META.title,
    description: FAQ_PAGE_META.description,
    url: FAQ_PAGE_META.canonicalPath,
    type: "website",
    images: [
      {
        url: FAQ_PAGE_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "FAQ — The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: FAQ_PAGE_META.title,
    description: FAQ_PAGE_META.description,
    images: [FAQ_PAGE_META.ogImagePath],
  },
};

export default function FAQPage() {
  const schema = buildFAQPageSchemaGraph({
    pageTitle: FAQ_PAGE_META.title,
    pageDescription: FAQ_PAGE_META.description,
    items: FAQ_PAGE_FLAT,
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <FAQPageHero />
        <CategorizedFAQ />
        <BioFinalCTA
          eyebrow="Still have questions"
          headline="The answer to most questions is in the curriculum"
          body="37 modules, 11.75 CEUs, 30-day money-back guarantee. The curriculum exists to answer everything above in the depth a clinical decision needs."
          primaryCta="See the certification"
          primaryCtaHref="/get-certified"
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
