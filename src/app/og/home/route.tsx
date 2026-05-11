import { ImageResponse } from "next/og";

export const runtime = "edge";

// Homepage OG card. Same brand visual language as the variant cards (navy
// gradient + Compacta + red rule + supporting stats), with the homepage hero
// headline as the primary text.
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
          The BFR Pros · BFR Training for Licensed Clinicians
        </div>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            color: "white",
            fontFamily: "Compacta",
            fontSize: 96,
            lineHeight: 0.94,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            maxWidth: 1040,
          }}
        >
          BFR builds the same strength as heavy lifting. At 30% of the load.
        </div>

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
            72+ peer-reviewed BFR publications · 11.75 CEUs · 4.8★ from 767+ reviews
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
