import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BlogPostHero from "@/components/sections/blog/BlogPostHero";
import BlogPostBody from "@/components/sections/blog/BlogPostBody";
import BioFinalCTA from "@/components/sections/about/BioFinalCTA";
import { BLOG_POSTS } from "@/lib/constants";
import { BLOG_POST_BODIES, BLOG_POST_SLUGS } from "@/content/blog-posts";
import { SITE_MENU_LINKS } from "@/lib/menus";
import { buildBlogPostSchemaGraph } from "@/lib/schema";

// /blog/[slug] dynamic route, statically generated at build time via
// generateStaticParams. One file renders all 20 posts. Content body
// comes from BLOG_POST_BODIES (fetched verbatim from the legacy site)
// and meta (category + legacy URL) from the BLOG_POSTS index const.

export function generateStaticParams() {
  return BLOG_POST_SLUGS.map((slug) => ({ slug }));
}

function getPostData(slug: string) {
  const body = BLOG_POST_BODIES[slug];
  const indexEntry = BLOG_POSTS.find((p) => p.slug === slug);
  if (!body || !indexEntry) return null;
  return { body, indexEntry };
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const data = getPostData(params.slug);
  if (!data) return { title: "Post not found" };
  const { body, indexEntry } = data;
  const description =
    body.paragraphs.find((p) => p.tag === "p" && p.text.length > 80)?.text?.slice(0, 200) ??
    `${body.title}, a BFR Pros blog post by ${body.author}.`;

  return {
    title: { absolute: `${body.title} | The BFR Pros` },
    description,
    alternates: { canonical: `/blog/${body.slug}` },
    openGraph: {
      title: body.title,
      description,
      url: `/blog/${body.slug}`,
      type: "article",
      authors: [body.author],
      images: [
        {
          url: "/og/home",
          width: 1200,
          height: 630,
          alt: `${body.title}, The BFR Pros blog`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: body.title,
      description,
      images: ["/og/home"],
    },
    other: indexEntry.externalUrl
      ? { "x-legacy-url": indexEntry.externalUrl }
      : undefined,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = getPostData(params.slug);
  if (!data) notFound();
  const { body, indexEntry } = data;

  const articleBody = body.paragraphs
    .map((p) => p.text)
    .join("\n\n");
  const description =
    body.paragraphs.find((p) => p.tag === "p" && p.text.length > 80)?.text?.slice(0, 200) ??
    `${body.title}, a BFR Pros blog post by ${body.author}.`;

  const schema = buildBlogPostSchemaGraph({
    slug: body.slug,
    title: body.title,
    description,
    author: body.author,
    date: body.date,
    category: indexEntry.category,
    articleBody,
    heroImageSrc: body.heroImage?.src,
  });

  return (
    <>
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        <BlogPostHero
          title={body.title}
          category={indexEntry.category}
          author={body.author}
          date={body.date}
          heroImage={body.heroImage}
        />
        <BlogPostBody post={body} />
        <BioFinalCTA
          eyebrow="From the page to the practice"
          headline="Ready to apply BFR yourself?"
          body="Every post on the blog points at one thing: applying BFR with the patient in front of you. The Complete BFR Certification is where the protocols, screening, and pressure science are taught."
          primaryCta="Explore the certification"
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
