import { STATS } from "@/lib/constants";

// Inline SVG star group + numeric rating + review count.
// Reused in hero CTA, pricing card, testimonials, final CTA, footer.
export default function Stars({
  rating = STATS.ratingValue,
  count = STATS.reviewCount,
  variant = "light",
  size = "md",
  className = "",
}: {
  rating?: number;
  count?: number;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const filled = Math.round(rating);
  const starPx = size === "sm" ? 14 : size === "lg" ? 22 : 18;
  const textCls =
    size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";
  const fillColor = "#F4B400"; // gold star
  const unfilledOpacity = 0.25;
  const labelColor =
    variant === "dark" ? "text-white/85" : "text-ink/80";

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div
        role="img"
        aria-label={`${rating} out of 5 stars`}
        className="inline-flex items-center gap-0.5"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width={starPx}
            height={starPx}
            viewBox="0 0 20 20"
            aria-hidden
          >
            <polygon
              points="10,1.6 12.6,7 18.5,7.9 14.2,12.1 15.2,18 10,15.2 4.8,18 5.8,12.1 1.5,7.9 7.4,7"
              fill={fillColor}
              opacity={i < filled ? 1 : unfilledOpacity}
            />
          </svg>
        ))}
      </div>
      <p className={`${textCls} ${labelColor} font-medium tabular-nums`}>
        <span className="font-semibold">{rating}</span>{" "}
        <span className="opacity-70">stars from {count.toLocaleString("en-US")}+ reviews</span>
      </p>
    </div>
  );
}
