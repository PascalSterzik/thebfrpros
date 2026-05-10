import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { DM_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";

// Compacta Bold is The BFR Pros' brand display font (self-hosted from Assets/Fonts).
const fontDisplay = localFont({
  src: [
    {
      path: "./fonts/CompactaBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Helvetica Neue Condensed", "Arial Narrow", "Impact", "sans-serif"],
});

const fontBody = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// EB Garamond Italic is the editorial-quote-only exception to the brand type
// system. Used exclusively in `.editorial-quote` (BridgeBlock and any future
// pull quotes). Loaded weight 400 italic only to keep payload minimal.
const fontQuote = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-quote",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thebfrpros.com"),
  title: {
    default: "The BFR Pros | The Gold Standard in Blood Flow Restriction Certification",
    template: "%s | The BFR Pros",
  },
  description:
    "Online BFR certification taught by Dr. Nicholas Rolnick, author of 72+ peer-reviewed BFR publications. 37 modules, 11.75 CEUs, equipment-agnostic, 30-day money-back guarantee.",
  applicationName: "The BFR Pros",
  authors: [{ name: "Dr. Nicholas Rolnick" }],
  keywords: [
    "BFR certification",
    "blood flow restriction certification",
    "BFR course for physical therapists",
    "BFR certification for athletic trainers",
    "BFR certification for strength coaches",
    "Dr. Nicholas Rolnick",
    "evidence-based BFR training",
  ],
  openGraph: {
    type: "website",
    siteName: "The BFR Pros",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@thebfrpros",
    creator: "@thebfrpros",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#193763",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable} ${fontQuote.variable}`}>
      <body>{children}</body>
    </html>
  );
}
