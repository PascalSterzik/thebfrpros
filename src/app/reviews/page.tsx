import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ReviewsHero from "@/components/sections/reviews/ReviewsHero";
import WallOfLove from "@/components/sections/reviews/WallOfLove";
import PullQuoteSection from "@/components/sections/reviews/PullQuoteSection";
import VideoTestimonials from "@/components/sections/reviews/VideoTestimonials";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import { REVIEWS_META, REVIEWS_FINAL_CTA } from "@/content/reviews";
import { TESTIMONIALS } from "@/lib/constants";
import { STUDENT_TESTIMONIALS } from "@/content/student-reviews";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildReviewsSchemaGraph } from "@/lib/schema";

// /reviews. Stage-3/4 trust page. Phase 2c (2026-05-13) rebuild to the
// King-Kong reviews pattern: Hero (locked + 3-excerpts row) -> Wall of
// Love (filtered card grid of all 17 verbatim reviews) -> Standalone
// pull-quote (Lee's competitor-comparison quote in editorial-quote
// serif italic) -> Video testimonials (4 VEED embeds with poster-
// thumbnail facade) -> Soft gateway. The prior ReviewsStatStrip +
// LongFormReviews + StudentReviewsGrid surfaces collapse into the new
// Wall of Love + PullQuoteSection. CollectionPage schema unchanged —
// still carries the canonical AggregateRating + every Review.

export const metadata: Metadata = {
  title: { absolute: REVIEWS_META.title },
  description: REVIEWS_META.description,
  alternates: { canonical: REVIEWS_META.canonicalPath },
  openGraph: {
    title: REVIEWS_META.title,
    description: REVIEWS_META.description,
    url: REVIEWS_META.canonicalPath,
    type: "website",
    images: [
      {
        url: REVIEWS_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Reviews, The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: REVIEWS_META.title,
    description: REVIEWS_META.description,
    images: [REVIEWS_META.ogImagePath],
  },
};

export default function ReviewsPage() {
  const schema = buildReviewsSchemaGraph({
    pageTitle: REVIEWS_META.title,
    pageDescription: REVIEWS_META.description,
    longForm: TESTIMONIALS.map((t) => ({
      name: t.name,
      role: t.role,
      quote: t.quote,
    })),
    shortForm: STUDENT_TESTIMONIALS.map((t) => ({ name: t.name, quote: t.quote })),
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <ReviewsHero />
        <WallOfLove />
        <PullQuoteSection />
        <VideoTestimonials />
        <BioFinalCTA
          eyebrow={REVIEWS_FINAL_CTA.eyebrow}
          headline={REVIEWS_FINAL_CTA.headline}
          body={REVIEWS_FINAL_CTA.body}
          primaryCta={REVIEWS_FINAL_CTA.primaryCta}
          primaryCtaHref={REVIEWS_FINAL_CTA.primaryCtaHref}
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
