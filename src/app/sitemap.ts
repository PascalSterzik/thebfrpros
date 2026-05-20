import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/constants";

// Dynamic sitemap served at /sitemap.xml (App Router convention). Replaced the
// hand-maintained public/sitemap.xml on 2026-05-17, which had drifted to 4 URLs
// (/, /get-certified, and the two now-retired concept variants) while the site
// actually ships 22 static routes + 73 blog posts. Blog slugs derive from
// BLOG_POSTS so the sitemap can never fall behind the blog again. Excluded by
// design: the retired concept-variant routes (/get-certified-v1,
// /get-certified-v2 — they 301), the deleted /preview index, every /og/*
// image route, AND the standalone /certification campaign LP (paid traffic
// only, ships noindex+canonical to /get-certified per PLAN.md §8 + §11; the
// duplicate-content guardrail learned from the v1/v2 retirement). next.config
// has trailingSlash:false, so only "/" carries a trailing slash.
//
// Canonical host is the WWW form. The apex https://thebfrpros.com 308-redirects
// to https://www.thebfrpros.com, so emitting the apex form here would force
// Google through an extra hop on every crawled URL. We deliberately do NOT use
// SITE.origin from lib/constants (that is the apex form, consumed with apex
// semantics by lib/schema.ts ~40x + robots.txt — flipping it is a separate
// sitewide decision). Local override to the canonical www host instead.
const ORIGIN = "https://www.thebfrpros.com";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type RouteEntry = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

const STATIC_ROUTES: RouteEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/get-certified", changeFrequency: "weekly", priority: 0.9 },

  // Audience landing pages
  { path: "/for/physical-therapists", changeFrequency: "weekly", priority: 0.8 },
  { path: "/for/athletic-trainers", changeFrequency: "weekly", priority: 0.8 },
  { path: "/for/strength-coaches", changeFrequency: "weekly", priority: 0.8 },

  // Brand mission + instructor-authority bios
  { path: "/about", changeFrequency: "weekly", priority: 0.7 },
  { path: "/about/nicholas-rolnick", changeFrequency: "weekly", priority: 0.7 },
  { path: "/about/nicholas-licameli", changeFrequency: "weekly", priority: 0.7 },
  { path: "/about/marty-rolnick", changeFrequency: "weekly", priority: 0.7 },
  { path: "/about/erica-marcano", changeFrequency: "weekly", priority: 0.7 },

  // Credibility / brand-richness content
  { path: "/research", changeFrequency: "weekly", priority: 0.6 },
  { path: "/research/publications", changeFrequency: "weekly", priority: 0.6 },
  { path: "/reviews", changeFrequency: "weekly", priority: 0.6 },
  { path: "/podcast", changeFrequency: "weekly", priority: 0.6 },
  { path: "/press", changeFrequency: "weekly", priority: 0.6 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.6 },

  // Utility
  { path: "/faq", changeFrequency: "weekly", priority: 0.5 },
  { path: "/contact", changeFrequency: "weekly", priority: 0.5 },

  // Legal
  { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
  { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
  { path: "/disclaimer", changeFrequency: "monthly", priority: 0.3 },
  { path: "/refund-policy", changeFrequency: "monthly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${ORIGIN}${r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // 73 migrated blog posts at /blog/[slug]. Monthly cadence, one priority
  // notch below the /blog index (leaf posts, not the hub).
  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${ORIGIN}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...blogEntries];
}
