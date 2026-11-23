import type { ReactNode } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiExpress,
  SiPostgresql,
  SiSqlite,
  SiTypescript,
  SiGithub,
  SiTailwindcss,
  SiStrapi,
  SiShopify,
  SiRemix,
  SiGraphql,
  SiRedux,
} from "react-icons/si";
import LinnworksLogo from "../components/LinnworksLogo";

type Skill = Readonly<{
  name: string;
  icon: ReactNode;
}>;

export type SkillCategory = Readonly<{
  title: string;
  description: string;
  skills: ReadonlyArray<Skill>;
}>;

export const SKILL_CATEGORIES: ReadonlyArray<SkillCategory> = [
  {
    title: "Frontend Development",
    description: "Building interactive and user-friendly web interfaces.",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
      { name: "React", icon: <FaReact className="text-sky-400 text-4xl" /> },
      { name: "Next.js", icon: <TbBrandNextjs className="text-black text-4xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-4xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500 text-4xl" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-500 text-4xl" /> },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing server-side logic and APIs.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300 text-4xl" /> },
      { name: "Postgres", icon: <SiPostgresql className="text-blue-600 text-4xl" /> },
      { name: "SQLite", icon: <SiSqlite className="text-cyan-500 text-4xl" /> },
      { name: "Strapi", icon: <SiStrapi className="text-indigo-400 text-4xl" /> },
    ],
  },
  {
    title: "E-Commerce & Frameworks",
    description:
      "Building high-performance e-commerce platforms and modern frameworks.",
    skills: [
      { name: "Shopify (Hydrogen)", icon: <SiShopify className="text-green-500 text-4xl" /> },
      { name: "Linnworks", icon: <LinnworksLogo /> },
      { name: "Remix JS", icon: <SiRemix className="text-purple-500 text-4xl" /> },
    ],
  },
  {
    title: "Version Control",
    description: "Managing code changes and collaboration.",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
      { name: "GitHub", icon: <SiGithub className="text-gray-300 text-4xl" /> },
    ],
  },
];
