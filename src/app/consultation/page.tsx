import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ConsultingHero from "@/components/sections/consulting/ConsultingHero";
import ConsultingWho from "@/components/sections/consulting/ConsultingWho";
import ConsultingAbout from "@/components/sections/consulting/ConsultingAbout";
import ConsultingHowItWorks from "@/components/sections/consulting/ConsultingHowItWorks";
import ConsultingPricing from "@/components/sections/consulting/ConsultingPricing";
import ConsultingLaunch from "@/components/sections/consulting/ConsultingLaunch";
import ConsultingFormOverlay from "@/components/sections/consulting/ConsultingFormOverlay";
import ConsultingFaq from "@/components/sections/consulting/ConsultingFaq";
import ConsultingCloser from "@/components/sections/consulting/ConsultingCloser";
import { CONSULTING_META, CONSULTING_FAQ } from "@/content/consulting";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildConsultingSchemaGraph } from "@/lib/schema";

// /consultation. Nick-personal 1:1 BFR clinical mentorship offer (Stage 4-5).
// Sells the "BFR Case Review": bring a real patient case to the author of the
// BFR literature, book an hour, leave with a plan. The qualification form is
// the ONLY conversion path (it gates the calendar), and it opens as a
// full-screen overlay (ConsultingFormOverlay, triggered by the #start hash from
// the hero, the launch band, and the closer). Price ($275/hour) is shown on
// this page on purpose (the budget qualifier needs the number).

export const metadata: Metadata = {
  title: { absolute: CONSULTING_META.title },
  description: CONSULTING_META.description,
  alternates: {
    canonical: CONSULTING_META.canonicalPath,
  },
  openGraph: {
    title: CONSULTING_META.title,
    description: CONSULTING_META.description,
    url: CONSULTING_META.canonicalPath,
    type: "website",
    images: [
      {
        url: CONSULTING_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "1:1 BFR consulting with Dr. Nicholas Rolnick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: CONSULTING_META.title,
    description: CONSULTING_META.description,
    images: [CONSULTING_META.ogImagePath],
  },
};

export default function ConsultingPage() {
  const schema = buildConsultingSchemaGraph({
    pageTitle: CONSULTING_META.title,
    pageDescription: CONSULTING_META.description,
    faq: CONSULTING_FAQ.items,
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        {/* Hero — destination headline + Nick credibility + dual CTA */}
        <ConsultingHero />

        {/* Who it's for / what a session delivers */}
        <ConsultingWho />

        {/* About Nick (consulting authority) */}
        <ConsultingAbout />

        {/* How it works — 3 steps */}
        <ConsultingHowItWorks />

        {/* Pricing — $275/hour, plainly */}
        <ConsultingPricing />

        {/* Launch band: opens the full-screen qualification overlay (#start) */}
        <ConsultingLaunch />

        {/* Small FAQ */}
        <ConsultingFaq />

        {/* Founder closer (Nick, first person) */}
        <ConsultingCloser />
      </main>

      <Footer />

      {/* Full-screen qualification overlay; mounted once, opens on the #start hash */}
      <ConsultingFormOverlay />

      {/* JSON-LD @graph: Organization, WebSite, Person (Rolnick), Service
          (hourly Offer), BreadcrumbList, FAQPage, WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
