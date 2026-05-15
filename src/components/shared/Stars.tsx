import Link from "next/link";
import { STATS } from "@/lib/constants";

// Fractional star rating (§N.2): renders 5 gray stars with a gold-star overlay
// clipped to the exact rating percentage. 4.8 paints the last star ~80% gold,
// not a Math.round-to-5 lie.
//
// Phase 1e (2026-05-13): optional `linkTo` prop wraps the rating in a
// next/link <Link>. Used below every soft CTA (hero CTAs, FinalCTAs, pricing,
// testimonials, footer) to make the "4.8 stars from 767+ reviews" caption
// navigable to /reviews. Smooth hover, NOT button-styled — the wrapper
// inherits the parent flow and reads as a quiet click affordance.
export default function Stars({
  rating = STATS.ratingValue,
  count = STATS.reviewCount,
  variant = "light",
  size = "md",
  className = "",
  linkTo,
}: {
  rating?: number;
  count?: number;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  linkTo?: string;
}) {
  const starPx = size === "sm" ? 14 : size === "lg" ? 22 : 18;
  const textCls =
    size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";
  const labelColor = variant === "dark" ? "text-white/85" : "text-ink/80";

  const fillRatio = Math.max(0, Math.min(1, rating / 5));
  const inset = `${(1 - fillRatio) * 100}%`;

  const Star = ({ color, opacity = 1 }: { color: string; opacity?: number }) => (
    <svg width={starPx} height={starPx} viewBox="0 0 20 20" aria-hidden>
      <polygon
        points="10,1.6 12.6,7 18.5,7.9 14.2,12.1 15.2,18 10,15.2 4.8,18 5.8,12.1 1.5,7.9 7.4,7"
        fill={color}
        opacity={opacity}
      />
    </svg>
  );

  const inner = (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        role="img"
        aria-label={`${rating} out of 5 stars`}
        className="relative inline-flex items-center"
      >
        <span className="inline-flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} color="#F4B400" opacity={0.25} />
          ))}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 inline-flex items-center gap-0.5 overflow-hidden"
          style={{ clipPath: `inset(0 ${inset} 0 0)` }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} color="#F4B400" />
          ))}
        </span>
      </span>
      <span className={`${textCls} ${labelColor} font-medium tabular-nums`}>
        <span className="font-semibold">{rating}</span>{" "}
        <span className="opacity-70">stars from {count.toLocaleString("en-US")}+ reviews</span>
      </span>
    </span>
  );

  if (linkTo) {
    return (
      <Link
        href={linkTo}
        className="inline-flex items-center transition-opacity hover:opacity-80 underline-offset-4 hover:underline decoration-line decoration-1"
        aria-label={`${rating} stars from ${count.toLocaleString("en-US")}+ reviews. Read all reviews.`}
      >
        {inner}
      </Link>
    );
  }
  return <div className="inline-flex items-center">{inner}</div>;
}
