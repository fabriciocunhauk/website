const DEFAULT_BASE_URL = "https://fabriciocunha.vercel.app";
// Google Analytics measurement IDs are public identifiers, not secrets.
const DEFAULT_GA_ID = "G-GGEB703MKL";

export const SITE_CONFIG = Object.freeze({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_BASE_URL,
  gaId: process.env.NEXT_PUBLIC_GA_ID || DEFAULT_GA_ID,
  name: "Fabricio Cunha",
  siteName: "Fabricio Cunha Portfolio",
  title: "Fabricio Cunha | Frontend Developer",
  jobTitle: "Frontend Developer",
  description:
    "Crafting amazing web experiences with React, Next.js, and TypeScript. Frontend Developer passionate about building fast and beautiful websites.",
  shortDescription:
    "Frontend Developer passionate about building fast, beautiful, and user-friendly web experiences.",
  ogImage: "/images/linkedin-profile.png",
  githubUsername: "fabriciocunhauk",
});
