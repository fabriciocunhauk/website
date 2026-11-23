import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { SITE_CONFIG } from "./lib/site-config";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.shortDescription,
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.siteName,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.shortDescription,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-900">
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <GoogleAnalytics gaId={SITE_CONFIG.gaId} />
      </body>
    </html>
  );
}
