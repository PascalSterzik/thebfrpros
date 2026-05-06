import { ENROLL_URL } from "@/lib/constants";

type Props = {
  label?: string;
  size?: "default" | "lg";
  className?: string;
  hint?: string;
  variant?: "primary" | "secondary" | "secondary-on-navy";
  href?: string;
};

export default function PrimaryCTA({
  label = "Enroll Now for $449",
  size = "default",
  className = "",
  hint,
  variant = "primary",
  href,
}: Props) {
  const cls =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary-on-navy"
      ? "btn-secondary btn-on-navy"
      : "btn-secondary";
  const sizeCls = size === "lg" ? "!px-8 !py-4 text-base" : "";

  const target = href ?? ENROLL_URL;
  const isExternal = !target.startsWith("#") && !target.startsWith("/");

  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      <a
        href={target}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`${cls} ${sizeCls}`}
      >
        {label}
      </a>
      {hint && <p className="text-xs text-muted">{hint}</p>}
    </div>
  );
}
