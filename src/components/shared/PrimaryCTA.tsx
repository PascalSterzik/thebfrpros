import Stars from "@/components/shared/Stars";
import { ENROLL_URL } from "@/lib/constants";

type Props = {
  label?: string;
  /** Small DM-Sans line shown UNDER the primary label INSIDE the button. */
  secondary?: string;
  size?: "default" | "lg";
  className?: string;
  hint?: string;
  variant?: "primary" | "secondary" | "secondary-on-navy";
  href?: string;
  /** Whether to render the 4.8★ stars line under the button. Default: true. */
  showStars?: boolean;
  /** Stars variant — "light" for white/cream backgrounds, "dark" for navy. */
  starsVariant?: "light" | "dark";
  /** Horizontal alignment of the button + stars + hint stack. Default: center. */
  align?: "center" | "left";
};

// §Pascal-2026-05-08 v6: every CTA renders the same:
// 1) the button (full-width on mobile, ~80px desktop horizontal padding)
// 2) optional secondary line INSIDE the button (DM Sans, smaller, lighter)
// 3) the 4.8★ stars line under the button
// 4) optional hint paragraph below stars
export default function PrimaryCTA({
  label = "Get BFR Certified From Home",
  secondary = "At your own pace",
  size = "default",
  className = "",
  hint,
  variant = "primary",
  href,
  showStars = true,
  starsVariant = "light",
  align = "center",
}: Props) {
  const cls =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary-on-navy"
      ? "btn-secondary btn-on-navy"
      : "btn-secondary";
  const sizeCls = size === "lg" ? "!py-[1.55rem] !text-[2.25rem] sm:!px-[70px]" : "";
  const alignCls = align === "left" ? "items-start" : "items-center";

  const target = href ?? ENROLL_URL;
  const isExternal = !target.startsWith("#") && !target.startsWith("/");

  return (
    <div className={`flex flex-col gap-3 w-full ${alignCls} ${className}`}>
      <a
        href={target}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`${cls} ${sizeCls}`}
      >
        <span>{label}</span>
        {secondary && <span className="btn-sub">{secondary}</span>}
      </a>
      {showStars && <Stars variant={starsVariant} size="md" />}
      {hint && (
        <p
          className={`text-xs ${
            starsVariant === "dark" ? "text-white/70" : "text-muted"
          } ${align === "center" ? "text-center" : "text-left"} max-w-md`}
        >
          {hint}
        </p>
      )}
    </div>
  );
}
