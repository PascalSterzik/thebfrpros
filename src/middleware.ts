import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Retired 2026-05-17: the Phase 1A concept variants /get-certified-v1 and
// /get-certified-v2 were removed (duplicate-content SEO problem — both were
// indexed and publicly reachable). They 301 to the canonical /get-certified
// so legacy inbound links and any remaining search-index entries transfer
// cleanly. This is a server-issued 301 at the Vercel edge, not a client
// meta refresh. The matcher is scoped to exactly these two paths so the
// middleware does not run on any other request.
//
// /preview is intentionally NOT redirected — it was an internal noindex
// review index with no SEO value, so it just 404s now (the route folder is
// gone and the new branded not-found.tsx handles it).
const REDIRECTS: Record<string, string> = {
  "/get-certified-v1": "/get-certified",
  "/get-certified-v2": "/get-certified",
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
  matcher: ["/get-certified-v1", "/get-certified-v2"],
};
