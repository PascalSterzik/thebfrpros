import { ImageResponse } from "next/og";
import { VARIANTS } from "@/content/variants";

export const runtime = "edge";

// Static OG card for the canonical /get-certified certification page.
// Replaced the dynamic /og/[variant] route 2026-05-17 when the v1/v2 concept
// variants were retired — there is one cert page now, so one cert OG card.
// Compacta Bold heading + brand navy gradient + accent rule. Cached at the
// edge by Vercel.
const v = VARIANTS.v3;
const SIZE = { width: 1200, height: 630 };

export async function GET() {
  const fontData = await fetch(
    new URL("../../fonts/CompactaBold.otf", import.meta.url),
  ).then((r) => r.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #0F2547 0%, #193763 55%, #1E4373 100%)",
          padding: "72px 80px",
        }}
      >
        {/* Top eyebrow */}
        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.85)",
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "system-ui",
            fontWeight: 600,
          }}
        >
          The BFR Pros
        </div>

        {/* Headline */}
        <div
          style={{
            marginTop: 28,
            display: "flex",
            color: "white",
            fontFamily: "Compacta",
            fontSize: v.metaTitle.length > 60 ? 76 : 92,
            lineHeight: 0.94,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            maxWidth: 1040,
          }}
        >
          {v.metaTitle}
        </div>

        {/* Bottom strip: accent rule + stats */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              height: 4,
              width: 96,
              background: "#AD1A27",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              display: "flex",
              color: "rgba(255,255,255,0.85)",
              fontSize: 26,
              fontFamily: "system-ui",
              fontWeight: 500,
            }}
          >
            4.8★ from 767+ reviews · 72+ peer-reviewed BFR publications
          </div>
        </div>
      </div>
    ),
    {
      ...SIZE,
      fonts: [
        {
          name: "Compacta",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
