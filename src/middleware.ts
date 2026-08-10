import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 301 redirects for renamed/retired routes, issued at the Vercel edge (a real
// server 301, not a client meta refresh). The matcher is scoped to exactly
// these paths so the middleware never runs on any other request.
//
// 2026-06-06 slug refactor (single-noun URLs): the main cert sales page moved
// /get-certified -> /certification and the consult page /consulting ->
// /consultation. Old URLs 301 to the new ones so inbound links + the search
// index transfer cleanly. The retired Phase-1A concept variants
// (/get-certified-v1, /get-certified-v2) now 301 to /certification as well.
// (/preview is intentionally NOT redirected; it 404s.)
//
// The paid campaign LP moved /certification -> /bfr-certification, but it is
// noindex/paid-only with no organic inbound links, so it needs no redirect, and
// /certification is now the main sales page. (If ads still point at
// /certification, repoint them to /bfr-certification, or they land on the main
// page.)
// Phase 4 (2026-06): the legacy clinic/team-hosting page /bfr-masters-workshop
// 301s to the new /train-your-team lane. (Confirmed via archive grep that the
// legacy page is the CLINIC/team page, "HOST THIS" / "your team / staff /
// clinic", so the redirect is audience-correct; spec §7.5. Pre-cutover the old
// site still serves the legacy page, so this is for post-cutover inbound links
// and bookmarks.)
//
// 2026-07-01 Squarespace-migration cleanup: GSC reported 100 old Squarespace
// URLs as "Not found (404)" (~20% of all pageviews were landing on the 404
// page). These 301 the survivors to their new-site equivalents. Audience of the
// old "BFR Masters" pages confirmed via the archived Squarespace nav: the
// "For Practitioners" menu (BFR Masters Series/Webinars, Accelerate Performance
// & Recovery, live-workshop) is INDIVIDUAL education -> /certification, while
// the standalone "BFR Masters Workshop" is the CLINIC/team page ->
// /train-your-team (already above). The store is discontinued -> homepage
// (Pascal, 2026-07-01). Blog/store/media families are handled by prefix
// branches below, not this exact-match map.
const REDIRECTS: Record<string, string> = {
  "/get-certified": "/certification",
  "/get-certified-v1": "/certification",
  "/get-certified-v2": "/certification",
  "/consulting": "/consultation",
  "/bfr-masters-workshop": "/train-your-team",

  // Team / about / policy pages
  "/nick-rolnick": "/about/nicholas-rolnick",
  "/marty-rolnick": "/about/marty-rolnick",
  "/mathias-thoelen": "/about",
  "/our-team": "/about",
  "/our-method": "/about",
  "/testimonials": "/reviews",
  "/workshop-graduates": "/reviews",
  "/published-research": "/research/publications",
  "/video-interviews": "/press",
  "/privacy-policy1": "/privacy",

  // Individual practitioner education (old "For Practitioners" menu) -> cert
  "/on-demand-bfr-courses": "/certification",
  "/accelerate-performance-recovery": "/certification",
  "/bfr-masters-series": "/certification",
  "/bfr-masters-webinars": "/certification",
  "/live-workshop": "/certification",
  "/live-workshop-registration": "/certification",
  "/live-workshop-reg-": "/certification",
  "/workshop-information": "/certification",
  "/bfrtraining-armmanual": "/certification",

  // 2026-07-02: further legacy URLs surfaced in GSC "Crawled - currently not
  // indexed". /for-practitioners was the individual-education hub -> cert;
  // /for-companies was the clinic/team hub -> team lane.
  "/erica-marcano": "/about/erica-marcano",
  "/for-practitioners": "/certification",
  "/for-companies": "/train-your-team",
  "/home-1": "/",
  "/about-us2": "/about",

  // 2026-08: still-404 after the July fix (GSC recrawl). Plural typo of /faq
  // and an old mission page.
  "/faqs": "/faq",
  "/mission-vision": "/about",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();
  url.search = "";

  // Exact renamed/retired routes.
  const destination = REDIRECTS[pathname];
  if (destination) {
    url.pathname = destination;
    return NextResponse.redirect(url, 301);
  }

  // Legacy Squarespace blog: /bfr-blog (incl. ?author= filter pages) and
  // /bfr-blog/<slug> -> /blog[/<slug>]. The migration preserved slugs 1:1
  // (verified against the live sitemap, incl. Squarespace suffixes like -pl2ln
  // / -akrx7 / -wzpm8), so a straight prefix swap is correct. A slug with no
  // matching post falls through to /blog/<slug>, which 404s the same as today.
  if (pathname === "/bfr-blog") {
    url.pathname = "/blog";
    return NextResponse.redirect(url, 301);
  }
  if (pathname.startsWith("/bfr-blog/")) {
    const slug = pathname.slice("/bfr-blog/".length).replace(/\/$/, "");
    url.pathname = slug ? `/blog/${slug}` : "/blog";
    return NextResponse.redirect(url, 301);
  }

  // Discontinued store -> homepage (all /the-bfr-pros-store and /product-page).
  if (
    pathname === "/the-bfr-pros-store" ||
    pathname.startsWith("/the-bfr-pros-store/") ||
    pathname.startsWith("/product-page/")
  ) {
    url.pathname = "/";
    return NextResponse.redirect(url, 301);
  }

  // Legacy media coverage -> press.
  if (pathname === "/bfr-in-the-media" || pathname.startsWith("/bfr-in-the-media/")) {
    url.pathname = "/press";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/get-certified",
    "/get-certified-v1",
    "/get-certified-v2",
    "/consulting",
    "/bfr-masters-workshop",
    "/nick-rolnick",
    "/marty-rolnick",
    "/mathias-thoelen",
    "/our-team",
    "/our-method",
    "/testimonials",
    "/workshop-graduates",
    "/published-research",
    "/video-interviews",
    "/privacy-policy1",
    "/on-demand-bfr-courses",
    "/accelerate-performance-recovery",
    "/bfr-masters-series",
    "/bfr-masters-webinars",
    "/live-workshop",
    "/live-workshop-registration",
    "/live-workshop-reg-",
    "/workshop-information",
    "/bfrtraining-armmanual",
    "/erica-marcano",
    "/for-practitioners",
    "/for-companies",
    "/home-1",
    "/about-us2",
    "/faqs",
    "/mission-vision",
    "/bfr-blog",
    "/bfr-blog/:path*",
    "/the-bfr-pros-store",
    "/the-bfr-pros-store/:path*",
    "/product-page/:path*",
    "/bfr-in-the-media",
    "/bfr-in-the-media/:path*",
  ],
};
