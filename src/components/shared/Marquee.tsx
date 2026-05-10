import Image from "next/image";

type Logo = { name: string; src: string; w: number; h: number; href?: string };

// Pure-CSS infinite RTL marquee. Track holds two copies of the logos so the
// translateX(-50%) loop is seamless. No hover effect (nothing to click unless
// href is set), no grayscale (logos render in full brand color). On dark
// backgrounds we still need brightness-0 invert so the colored logos read.
export default function Marquee({
  logos,
  ariaLabel,
  variant = "light",
  itemHeight = "h-14 sm:h-16",
}: {
  logos: ReadonlyArray<Logo>;
  ariaLabel: string;
  variant?: "light" | "dark";
  itemHeight?: string;
}) {
  const imgClass =
    variant === "dark"
      ? `${itemHeight} brightness-0 invert opacity-90`
      : `${itemHeight}`;

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className="marquee-mask overflow-hidden"
    >
      <ul className="marquee-track flex w-max items-center gap-7 sm:gap-9 py-2">
        {[...logos, ...logos].map((logo, i) => {
          const isAriaVisible = i < logos.length;
          const img = (
            <Image
              src={logo.src}
              alt={isAriaVisible ? `${logo.name} logo` : ""}
              width={logo.w}
              height={logo.h}
              className={`${imgClass} w-auto object-contain`}
              // §Pascal-2026-05-08 v8: bumped maxHeight 3rem → 4rem so logos
              // (featured-in, partners, published-in marquees) read bigger and
              // pull more weight as social proof.
              style={{ width: "auto", height: "100%", maxHeight: "4rem" }}
            />
          );
          return (
            <li key={`${logo.name}-${i}`} aria-hidden={!isAriaVisible}>
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={isAriaVisible ? `${logo.name} (opens in new tab)` : undefined}
                  tabIndex={isAriaVisible ? 0 : -1}
                  className="block"
                >
                  {img}
                </a>
              ) : (
                img
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
