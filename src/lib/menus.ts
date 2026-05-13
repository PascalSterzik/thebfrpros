// Shared site navigation menus.
//
// SITE_MENU_LINKS is the full multi-page nav used on every page sitewide,
// INCLUDING /get-certified. Pascal-2026-05-13 Phase 1d: the cert page now
// uses the same global header as every other page; the in-page anchor
// sub-nav (#curriculum, #pricing, #faq, #testimonials) is rendered as a
// SECONDARY bar below the header via CertAnchorNav, not as a competing
// primary menu.
//
// Phase 1d scope cut: the primary menu trimmed to 6 items. Audience pages
// (For PTs / ATs / S&C), Blog, Podcast, Reviews, and FAQ moved off the
// header into the footer (Phase 1h). Visitors who want those surfaces
// find them in the footer; the header is reserved for the funnel-critical
// six.

import type { HeaderMenuLink } from "@/components/shared/Header";
import { ENROLL_URL } from "@/lib/constants";

export const SITE_MENU_LINKS: HeaderMenuLink[] = [
  // "Certification" stays descriptive (not action-led) because non-cert pages
  // serve Stage-2/3 traffic that should not be hit with an action verb.
  { href: "/get-certified", label: "Certification" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
  { href: "https://bfrproviders.com", label: "Find a Provider", external: true },
  { href: ENROLL_URL, label: "Enroll Now", external: true },
];
