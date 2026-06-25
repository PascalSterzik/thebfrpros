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

// Pascal-2026-05-13: trimmed to 5 items. "Enroll Now" external link
// removed from the header (the hard-conversion verb belongs on the
// /get-certified cert page only). "Find a Provider" stays as an
// external link but renders in the standard navy color, not red —
// red is reserved for the ACTIVE menu item (the page the visitor is
// currently on) per Header.tsx.
//
// 2026-06-06: "Contact" removed from the header (footer-only now; the contact
// form was retired and /contact is phone + email only). "Get Consulting" added
// as the 2nd item for visibility of the new 1:1 offer.
//
// Phase 4 (2026-06): "Train Your Team" added as the 3rd item (Pascal-confirmed,
// spec §7.1), taking the header from 5 to 6 items. The three "Get X / Train Y"
// items (Get BFR Certified, Get Consulting, Train Your Team) are the active
// offers; Research / About / Find BFR Providers stay deliberately passive. Final
// 6: Get BFR Certified, Get Consulting, Train Your Team, Research, About, Find
// BFR Providers.
export const SITE_MENU_LINKS: HeaderMenuLink[] = [
  { href: "/certification", label: "Get BFR Certified" },
  { href: "/consultation", label: "Get Consulting" },
  { href: "/train-your-team", label: "Train Your Team" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
  { href: "https://bfrproviders.com", label: "Find BFR Providers", external: true },
];
