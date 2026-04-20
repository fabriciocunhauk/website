import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-GGEB703MKL";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://fabriciocunha.vercel.app";

export const metadata: Metadata = {
  title: "Fabricio Cunha | Frontend Developer",
  description: "Crafting amazing web experiences with React, Next.js, and TypeScript. Frontend Developer passionate about building fast and beautiful websites.",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Fabricio Cunha | Frontend Developer",
    description: "Frontend Developer passionate about building fast, beautiful, and user-friendly web experiences.",
    url: BASE_URL,
    siteName: "Fabricio Cunha Portfolio",
    images: [
      {
        url: "/images/linkedin-profile.png", // Using an existing image as OG image
        width: 1200,
        height: 630,
        alt: "Fabricio Cunha",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabricio Cunha | Frontend Developer",
    description: "Frontend Developer passionate about building fast, beautiful, and user-friendly web experiences.",
    images: ["/images/linkedin-profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
      >
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
