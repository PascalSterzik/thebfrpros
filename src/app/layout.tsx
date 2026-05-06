import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const fontDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const fontBody = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thebfrpros.com"),
  title: {
    default: "The BFR Pros | The Gold Standard in Blood Flow Restriction Certification",
    template: "%s | The BFR Pros",
  },
  description:
    "Earn the most research-backed blood flow restriction (BFR) certification in the world. 37 modules, 11.75 CEUs, taught by Dr. Nicholas Rolnick (50+ peer-reviewed publications).",
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
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body>{children}</body>
    </html>
  );
}
