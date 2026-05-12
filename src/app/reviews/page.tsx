import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ReviewsHero from "@/components/sections/reviews/ReviewsHero";
import ReviewsStatStrip from "@/components/sections/reviews/ReviewsStatStrip";
import LongFormReviews from "@/components/sections/reviews/LongFormReviews";
import StudentReviewsGrid from "@/components/sections/reviews/StudentReviewsGrid";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import { REVIEWS_META, REVIEWS_FINAL_CTA } from "@/content/reviews";
import { STUDENT_TESTIMONIALS, TESTIMONIALS } from "@/lib/constants";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildReviewsSchemaGraph } from "@/lib/schema";

// /reviews. Stage-3/4 trust page. 5 sections: Hero -> Stat strip ->
// Long-form expert reviews (4 clinic-owner / consultant quotes) ->
// Student grid (13 short course-feedback quotes) -> Soft gateway.
// CollectionPage schema carries the canonical AggregateRating linked to
// the Course entity + every Review pulled from the same data the page
// renders on screen.

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
        alt: "Reviews — The BFR Pros",
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
        <ReviewsStatStrip />
        <LongFormReviews />
        <StudentReviewsGrid />
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
