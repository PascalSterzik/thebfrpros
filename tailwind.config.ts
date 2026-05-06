import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#193763",
          deeper: "#0F2547",
          softer: "#2A4F87",
          line: "#1E4373",
        },
        accent: {
          DEFAULT: "#AD1A27",
          deeper: "#8C141F",
          softer: "#C8253A",
        },
        cream: "#F5F7FA",
        ink: "#1F2937",
        muted: "#475569",
        line: "#E2E8F0",
      },
      fontFamily: {
        // Compacta Bold is a heavy condensed sans, so the fallback chain is condensed-sans, not serif.
        display: ["var(--font-display)", "Helvetica Neue Condensed", "Arial Narrow", "Impact", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Compacta Bold ALL CAPS uses the font's natural metrics. No letter-spacing
        // (positive tracking on word-length caps reduces readability).
        // Eyebrow labels at 0.78rem are the exception, they need the tracking for legibility.
        "display-2xl": ["clamp(3rem, 6.4vw, 5.25rem)", { lineHeight: "0.96" }],
        "display-xl": ["clamp(2.4rem, 5vw, 4rem)", { lineHeight: "0.98" }],
        "display-lg": ["clamp(2rem, 3.6vw, 3rem)", { lineHeight: "1.02" }],
        "display-md": ["clamp(1.6rem, 2.8vw, 2.25rem)", { lineHeight: "1.06" }],
        eyebrow: ["0.78rem", { lineHeight: "1.2", letterSpacing: "0.18em" }],
      },
      maxWidth: {
        "prose-narrow": "38rem",
        "prose-wide": "44rem",
      },
      boxShadow: {
        "navy-sm": "0 4px 14px -8px rgba(25, 55, 99, 0.28), 0 1px 3px rgba(25, 55, 99, 0.06)",
        "navy-md": "0 18px 42px -22px rgba(25, 55, 99, 0.32), 0 6px 14px -10px rgba(25, 55, 99, 0.16)",
        "navy-lg": "0 30px 70px -32px rgba(25, 55, 99, 0.4), 0 10px 24px -16px rgba(25, 55, 99, 0.18)",
        "accent-glow": "0 12px 32px -14px rgba(173, 26, 39, 0.42)",
        "inset-line": "inset 0 -1px 0 0 rgba(25, 55, 99, 0.08)",
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.045 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        "navy-gradient": "linear-gradient(135deg, #0F2547 0%, #193763 55%, #1E4373 100%)",
        "navy-radial": "radial-gradient(60% 50% at 50% 0%, rgba(40, 78, 137, 0.6) 0%, rgba(15, 37, 71, 0) 70%), linear-gradient(180deg, #0F2547 0%, #193763 100%)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "stat-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "stat-pulse": "stat-pulse 2.4s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
