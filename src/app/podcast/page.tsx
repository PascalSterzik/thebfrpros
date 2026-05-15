import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import PodcastHero from "@/components/sections/podcast/PodcastHero";
import PodcastPlatforms from "@/components/sections/podcast/PodcastPlatforms";
import EpisodeGrid from "@/components/sections/podcast/EpisodeGrid";
import GuestAppearancesStrip from "@/components/sections/podcast/GuestAppearancesStrip";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import { PODCAST_META, PODCAST_FINAL_CTA } from "@/content/podcast";
import { BFR_PODCAST_EPISODES, BFR_PODCAST_PLATFORMS } from "@/lib/constants";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildPodcastSchemaGraph } from "@/lib/schema";

// /podcast. BFR Better-For-Results Podcast hub. 5 sections: Hero ->
// Platforms (3 listen-card CTAs) -> Episode grid (18 episodes) -> Guest-
// appearances marquee (15 shows Rolnick has been on) -> Soft gateway.
// PodcastSeries schema with PodcastEpisode list.

export const metadata: Metadata = {
  title: { absolute: PODCAST_META.title },
  description: PODCAST_META.description,
  alternates: { canonical: PODCAST_META.canonicalPath },
  openGraph: {
    title: PODCAST_META.title,
    description: PODCAST_META.description,
    url: PODCAST_META.canonicalPath,
    type: "website",
    images: [
      {
        url: PODCAST_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "BFR Better-For-Results Podcast, The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PODCAST_META.title,
    description: PODCAST_META.description,
    images: [PODCAST_META.ogImagePath],
  },
};

export default function PodcastPage() {
  const schema = buildPodcastSchemaGraph({
    pageTitle: PODCAST_META.title,
    pageDescription: PODCAST_META.description,
    platforms: BFR_PODCAST_PLATFORMS.map((p) => ({ name: p.name, href: p.href })),
    episodes: BFR_PODCAST_EPISODES.map((ep) => ({
      number: ep.number,
      title: ep.title,
      topic: ep.topic,
    })),
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <PodcastHero />
        <PodcastPlatforms />
        <EpisodeGrid />
        <GuestAppearancesStrip />
        <BioFinalCTA
          eyebrow={PODCAST_FINAL_CTA.eyebrow}
          headline={PODCAST_FINAL_CTA.headline}
          body={PODCAST_FINAL_CTA.body}
          primaryCta={PODCAST_FINAL_CTA.primaryCta}
          primaryCtaHref={PODCAST_FINAL_CTA.primaryCtaHref}
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
