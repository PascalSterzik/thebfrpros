export default function SectionLabel({
  label,
  variant = "accent",
}: {
  label: string;
  variant?: "accent" | "light";
}) {
  return <p className={variant === "light" ? "eyebrow-light" : "eyebrow"}>{label}</p>;
}
