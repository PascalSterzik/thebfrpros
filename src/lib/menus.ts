// Shared site navigation menus.
//
// SITE_MENU_LINKS is the full multi-page nav used on every page that is NOT
// the /get-certified long-form sales page. Homepage, /about, /about/[bio],
// /contact, /research, /reviews, /faq, /podcast, /blog, /blog/[slug], legal
// pages — all pass this same menu through Header.tsx's menuLinks prop. One
// source of truth, no inline duplicates anywhere.
//
// The Header.tsx DEFAULT_MENU_LINKS (anchor-style #curriculum, #pricing, etc.)
// stays in Header.tsx and continues to serve only the /get-certified variants,
// where the entire page is one long scroll and anchors are the correct UX.
//
// FAQ is intentionally NOT in this menu. Per SITE-ARCHITECTURE §3 and how
// FAQ pages actually work in practice, FAQ is a utility surface (visitors
// don't browse it, they look something up). It lives in the footer Resources
// column only.

import type { HeaderMenuLink } from "@/components/shared/Header";
import { ENROLL_URL } from "@/lib/constants";

export const SITE_MENU_LINKS: HeaderMenuLink[] = [
  // Primary funnel
  // "Certification" stays descriptive (not action-led) because non-cert pages
  // serve Stage-2/3 traffic that should not be hit with an action verb.
  { href: "/get-certified", label: "Certification" },

  // Audience pages
  { href: "/for/physical-therapists", label: "For Physical Therapists" },
  { href: "/for/athletic-trainers", label: "For Athletic Trainers" },
  { href: "/for/strength-coaches", label: "For Strength Coaches" },

  // Org info
  { href: "/about", label: "About" },

  // Content / trust cluster — research depth, social proof, brand voice
  { href: "/research", label: "Research" },
  { href: "/reviews", label: "Reviews" },
  { href: "/podcast", label: "Podcast" },
  { href: "/blog", label: "Blog" },

  // Utility
  { href: "/contact", label: "Contact" },

  // External
  { href: "https://bfrproviders.com", label: "Find a Provider", external: true },
  { href: ENROLL_URL, label: "Enroll Now", external: true },
];
