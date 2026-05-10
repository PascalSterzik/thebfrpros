import { STATS } from "@/lib/constants";

// Fractional star rating (§N.2): renders 5 gray stars with a gold-star overlay
// clipped to the exact rating percentage. 4.8 paints the last star ~80% gold,
// not a Math.round-to-5 lie.
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

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div
        role="img"
        aria-label={`${rating} out of 5 stars`}
        className="relative inline-flex items-center"
      >
        <div className="inline-flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} color="#F4B400" opacity={0.25} />
          ))}
        </div>
        <div
          aria-hidden
          className="absolute inset-0 inline-flex items-center gap-0.5 overflow-hidden"
          style={{ clipPath: `inset(0 ${inset} 0 0)` }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} color="#F4B400" />
          ))}
        </div>
      </div>
      <p className={`${textCls} ${labelColor} font-medium tabular-nums`}>
        <span className="font-semibold">{rating}</span>{" "}
        <span className="opacity-70">stars from {count.toLocaleString("en-US")}+ reviews</span>
      </p>
    </div>
  );
}
