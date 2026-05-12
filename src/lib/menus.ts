// Shared site navigation menus.
//
// SITE_MENU_LINKS is the full multi-page nav used on any page that is NOT the
// /get-certified long-form sales page. Homepage, /about, /about/[bio], and
// every future non-cert route (/contact, /research, /reviews, /faq, /podcast,
// legal pages) all pass this same menu through Header.tsx's menuLinks prop.
// Phase-2 / Phase-3 routes are rendered as visibly disabled "Coming soon"
// pills until they ship; the nav reads as complete without breaking links.
//
// The Header.tsx DEFAULT_MENU_LINKS (anchor-style #curriculum, #pricing, etc.)
// stays in Header.tsx and continues to serve only the /get-certified variants,
// where the entire page is one long scroll and anchors are the correct UX.
//
// When a Phase-2 route ships:
//   1. Remove the `comingSoon: true` from its entry below.
//   2. Add the same removal to any page-specific menu overrides that still
//      hard-code Coming Soon for that route.
//   3. Update WEBSITE-PROJECT.md "Live routes" / "Pending routes" tables.

import type { HeaderMenuLink } from "@/components/shared/Header";
import { ENROLL_URL } from "@/lib/constants";

export const SITE_MENU_LINKS: HeaderMenuLink[] = [
  // "Certification" stays descriptive (not action-led) because non-cert pages
  // serve Stage-2/3 traffic that should not be hit with an action verb.
  { href: "/get-certified", label: "Certification" },
  { href: "/for/physical-therapists", label: "For Physical Therapists" },
  { href: "/for/athletic-trainers", label: "For Athletic Trainers" },
  { href: "/for/strength-coaches", label: "For Strength Coaches" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research", comingSoon: true },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "https://bfrproviders.com", label: "Find a Provider", external: true },
  { href: ENROLL_URL, label: "Enroll Now", external: true },
];
