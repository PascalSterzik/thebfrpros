"use client";

// Shared Framer Motion variants. Tuned to the BUILD-BRIEF "trade/professional tier":
// 0.6-0.9s duration, 0.08-0.12s stagger. Editorial easing (cubic-bezier(0.22, 1, 0.36, 1)).
// All animations target opacity + transform only. Motion respects prefers-reduced-motion
// at the browser level via Framer Motion's MotionConfig in the root layout.

import type { Variants } from "framer-motion";

export const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: editorialEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: editorialEase } },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: editorialEase } },
};

// Gentle parallax on hero photo. Capped at 60px translateY (BUILD-BRIEF rule).
export const heroPhotoParallax: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: editorialEase } },
};

// Stat reveal pulse used after a stat lands in viewport.
export const statReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: editorialEase } },
};

// Re-usable viewport prop so all sections trigger at the same scroll fraction.
export const inViewOnce = { once: true, margin: "-15% 0px -10% 0px" } as const;
