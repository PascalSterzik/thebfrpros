import type { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BlogHero from "@/components/sections/blog/BlogHero";
import BlogPostsList from "@/components/sections/blog/BlogPostsList";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import { BLOG_META, BLOG_FINAL_CTA } from "@/content/blog";
import { BLOG_POSTS } from "@/lib/constants";
import { BLOG_POST_BODIES } from "@/content/blog-posts";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildBlogSchemaGraph } from "@/lib/schema";

// /blog. 3 sections: Hero -> BlogPostsList (20 cards linking out to the
// legacy URLs during the migration window) -> Soft gateway. Phase 4 will
// migrate full post content to /blog/[slug] on this site; until then the
// transition state is honestly explained in BlogPostsList's dashed notice.

export const metadata: Metadata = {
  title: { absolute: BLOG_META.title },
  description: BLOG_META.description,
  alternates: { canonical: BLOG_META.canonicalPath },
  openGraph: {
    title: BLOG_META.title,
    description: BLOG_META.description,
    url: BLOG_META.canonicalPath,
    type: "website",
    images: [
      {
        url: BLOG_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Blog, The BFR Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_META.title,
    description: BLOG_META.description,
    images: [BLOG_META.ogImagePath],
  },
};

export default function BlogPage() {
  const schema = buildBlogSchemaGraph({
    pageTitle: BLOG_META.title,
    pageDescription: BLOG_META.description,
    posts: BLOG_POSTS.map((p) => ({
      title: p.title,
      externalUrl: p.externalUrl,
      category: p.category,
    })),
  });

  // Resolved server-side so the heavy BLOG_POST_BODIES module stays out
  // of the /blog client bundle (BlogPostsList only needs the heroImage).
  const heroBySlug = Object.fromEntries(
    BLOG_POSTS.map((p) => [p.slug, BLOG_POST_BODIES[p.slug]?.heroImage]),
  );

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <BlogHero />
        <BlogPostsList heroBySlug={heroBySlug} />
        <BioFinalCTA
          eyebrow={BLOG_FINAL_CTA.eyebrow}
          headline={BLOG_FINAL_CTA.headline}
          body={BLOG_FINAL_CTA.body}
          primaryCta={BLOG_FINAL_CTA.primaryCta}
          primaryCtaHref={BLOG_FINAL_CTA.primaryCtaHref}
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
