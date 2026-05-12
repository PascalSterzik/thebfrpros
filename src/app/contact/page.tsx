import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactWays from "@/components/sections/contact/ContactWays";
import ContactForm from "@/components/sections/contact/ContactForm";
import { CONTACT_META } from "@/content/contact";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildContactSchemaGraph } from "@/lib/schema";

// /contact. Stage-4/5 traffic that already knows who we are and wants to
// reach out. Architecture: hero (locked pattern) -> direct contact ways
// (phone + email, tap-to-act on mobile) -> async form. No soft gateway to
// /get-certified at the end — this page's job is contact, not selling.
// The footer already links to /get-certified for anyone who shifts intent.

export const metadata: Metadata = {
  title: { absolute: CONTACT_META.title },
  description: CONTACT_META.description,
  alternates: {
    canonical: CONTACT_META.canonicalPath,
  },
  openGraph: {
    title: CONTACT_META.title,
    description: CONTACT_META.description,
    url: CONTACT_META.canonicalPath,
    type: "website",
    images: [
      {
        url: CONTACT_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Contact The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: CONTACT_META.title,
    description: CONTACT_META.description,
    images: [CONTACT_META.ogImagePath],
  },
};

export default function ContactPage() {
  const schema = buildContactSchemaGraph({
    pageTitle: CONTACT_META.title,
    pageDescription: CONTACT_META.description,
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <ContactHero />
        <ContactWays />
        <ContactForm />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
