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
const REDIRECTS: Record<string, string> = {
  "/get-certified": "/certification",
  "/get-certified-v1": "/certification",
  "/get-certified-v2": "/certification",
  "/consulting": "/consultation",
  "/bfr-masters-workshop": "/train-your-team",
};

export function middleware(request: NextRequest) {
  const destination = REDIRECTS[request.nextUrl.pathname];
  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;
    url.search = "";
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
  ],
};
