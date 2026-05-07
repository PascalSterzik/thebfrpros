import Image from "next/image";

type Logo = { name: string; src: string; w: number; h: number };

// Pure-CSS infinite RTL marquee. Track holds two copies of the logos so the
// translateX(-50%) loop is seamless. OS prefers-reduced-motion freezes it.
export default function Marquee({
  logos,
  ariaLabel,
  variant = "light",
}: {
  logos: ReadonlyArray<Logo>;
  ariaLabel: string;
  variant?: "light" | "dark";
}) {
  const itemClass =
    variant === "dark"
      ? "h-9 sm:h-10 brightness-0 invert opacity-70 hover:opacity-100 transition"
      : "h-9 sm:h-10 grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition";

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className="marquee-mask overflow-hidden"
    >
      <ul className="marquee-track flex w-max items-center gap-12 sm:gap-16 py-2">
        {[...logos, ...logos].map((logo, i) => (
          <li key={`${logo.name}-${i}`} aria-hidden={i >= logos.length}>
            <Image
              src={logo.src}
              alt={i < logos.length ? `${logo.name} logo` : ""}
              width={logo.w}
              height={logo.h}
              className={`${itemClass} w-auto object-contain`}
              style={{ width: "auto", height: "auto", maxHeight: "2.5rem" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
