import { OPT_IN_ANCHOR } from "./optInHash";

// Styled anchor that scrolls to the one opt-in form in the hero.
//
// §Pascal-2026-08-08: was opening a modal; now it is a plain jump link. Pascal:
// "if we keep the form on the page, we don't need the pop-up ... the other
// buttons move you to the form." Simpler, and a CTA click is a high-intent move
// TOWARD the form, so being scrolled there is not the disorientation it would
// be for exploratory navigation. Stays a server component with no JS at all.
//
// `source` picks the marker id it lands on, which is how the signup stays
// attributable to the button that produced it. See optInHash.ts.

export default function OptInTrigger({
  label,
  source,
  size = "lg",
  className = "",
}: {
  label: string;
  source: string;
  size?: "sm" | "lg";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg bg-accent font-body font-semibold uppercase tracking-wide text-white shadow-[0_14px_28px_-12px_rgba(173,26,39,0.55)] transition hover:bg-accent-deeper";
  // min-h-11 on the small size: it sits in the 60px header, where the padding
  // alone left a 36px tap target, under the 44px touch guideline.
  const scale =
    size === "sm" ? "min-h-11 px-4 py-2 text-xs sm:px-5 sm:text-sm" : "px-7 py-4 text-base";

  return (
    <a href={`#${OPT_IN_ANCHOR}-${source}`} className={`${base} ${scale} ${className}`}>
      {label}
    </a>
  );
}
