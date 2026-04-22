import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

// ─── Base URL ────────────────────────────────────────────────────────────────
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wayfinder.intopie.com";

// ─── Default / Global Metadata ───────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Title ──────────────────────────────────────────────────────────────────
  title: {
    default: "Wayfinder — Enterprise Indoor Navigation | Into Pie Pvt Ltd",
    template: "%s | Wayfinder by Into Pie",
  },

  // ── Description ────────────────────────────────────────────────────────────
  description:
    "Wayfinder by Into Pie Pvt Ltd is an enterprise-grade indoor GPS and navigation system for hospitals, malls, airports, and corporate campuses. 1-meter accuracy, deployed in 2 weeks.",

  // ── Keywords ───────────────────────────────────────────────────────────────
  keywords: [
    "indoor GPS",
    "indoor navigation system",
    "wayfinder navigation",
    "indoor positioning",
    "hospital navigation software",
    "mall wayfinding kiosk",
    "campus indoor navigation",
    "graph algorithm pathfinding",
    "Into Pie Tech Agency",
    "Next.js developer portfolio",
    "Next.js indoor navigation",
    "enterprise wayfinding",
    "blue dot navigation",
    "indoor maps India",
    "wayfinder intopie",
  ],

  // ── Authors & Publisher ────────────────────────────────────────────────────
  authors: [
    { name: "Akash Kumar", url: BASE_URL },
    { name: "Into Pie Pvt Ltd", url: BASE_URL },
  ],
  creator: "Into Pie Pvt Ltd",
  publisher: "Into Pie Pvt Ltd",

  // ── Canonical & Robots ────────────────────────────────────────────────────
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },

  // ── OpenGraph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Wayfinder by Into Pie",
    title: "Wayfinder — Enterprise Indoor Navigation | Into Pie Pvt Ltd",
    description:
      "1-meter accurate indoor GPS for hospitals, malls & airports. Built with graph algorithms. Deployed in 2 weeks. A product by Into Pie Pvt Ltd, Bangalore.",
    images: [
      {
        url: "/og-image.png",  // 1200×630 — place in /public/og-image.png
        width: 1200,
        height: 630,
        alt: "Wayfinder — Indoor Navigation by Into Pie Pvt Ltd",
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@IntoPieTech",
    creator: "@IntoPieTech",
    title: "Wayfinder — Indoor GPS by Into Pie",
    description:
      "Enterprise indoor navigation for hospitals, malls & airports. 1-meter precision, 2-week deployment.",
    images: ["/og-image.png"],
  },

  // ── App / Icons ───────────────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ── Verification (add real IDs when you have them) ─────────────────────────
  verification: {
    google: "REPLACE_WITH_GOOGLE_SITE_VERIFICATION_ID",
    // yandex: "...",
    // bing: "...",
  },
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        {children}
      </body>
    </html>
  );
}