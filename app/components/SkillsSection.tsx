import React, { JSX } from "react";
import Container from "./Container";
import Card from "./Card";
import Image from "next/image";
import codeBg from "@/public/images/purple-code-bg.jpg";

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
import { LinnworksLogo } from "./LinnworksLogo";

type Skill = {
  name: string;
  icon: JSX.Element;
};

type SkillCategory = {
  title: string;
  description: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building interactive and user-friendly web interfaces.",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400 text-4xl" />,
      },
      { name: "React", icon: <FaReact className="text-sky-400 text-4xl" /> },
      {
        name: "Next.js",
        icon: <TbBrandNextjs className="text-black text-4xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-4xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400 text-4xl" />,
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-purple-500 text-4xl" />,
      },
      {
        name: "GraphQL",
        icon: <SiGraphql className="text-pink-500 text-4xl" />,
      },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing server-side logic and APIs.",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500 text-4xl" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-gray-300 text-4xl" />,
      },
      {
        name: "Postgres",
        icon: <SiPostgresql className="text-blue-600 text-4xl" />,
      },
      { name: "SQLite", icon: <SiSqlite className="text-cyan-500 text-4xl" /> },
      {
        name: "Strapi",
        icon: <SiStrapi className="text-indigo-400 text-4xl" />,
      },
    ],
  },
  {
    title: "E-Commerce & Frameworks",
    description:
      "Building high-performance e-commerce platforms and modern frameworks.",
    skills: [
      {
        name: "Shopify (Hydrogen)",
        icon: <SiShopify className="text-green-500 text-4xl" />,
      },
      {
        name: "Linnworks",
        icon: <LinnworksLogo />,
      },
      {
        name: "Remix JS",
        icon: <SiRemix className="text-purple-500 text-4xl" />,
      },
    ],
  },
  {
    title: "Version Control",
    description: "Managing code changes and collaboration.",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
      {
        name: "GitHub",
        icon: <SiGithub className="text-gray-300 text-4xl" />,
      },
    ],
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="text-white pb-24">
      <Container>
        <Card
          classes={{
            card: "relative grid grid-rows-1 text-white mb-16 bg-gray-800/90 backdrop-blur-sm p-12 rounded-2xl shadow-xl hover:translate-none",
          }}
        >
          <div className="space-y-8 z-20">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              My <span className="text-primary">Technical</span> Skills
            </h2>

            <p className="text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed text-gray-200">
              I&apos;m a{" "}
              <span className="text-primary font-semibold">
                Frontend Developer
              </span>{" "}
              with{" "}
              <span className="text-indigo-400 font-medium">
                commercial experience
              </span>{" "}
              in building intuitive, user-friendly web interfaces. My expertise
              lies in crafting high-performance applications that deliver
              seamless digital experiences. On the backend, I&apos;ve worked on{" "}
              <span className="text-indigo-400 font-medium">
                personal projects
              </span>
              , where I&apos;ve honed my skills in server-side logic, APIs, and
              database management. I&apos;m currently expanding my knowledge to
              become a{" "}
              <span className="text-primary font-semibold">
                Fullstack Developer
              </span>
              , bridging the gap between frontend and backend to create
              end-to-end solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {category.title}
                  </h3>

                  <p className="text-base text-gray-200 mb-4">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="mb-4">{skill.icon}</div>

                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {skill.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Image
            src={codeBg}
            alt="Skills Background"
            className="absolute bottom-0 left-0 right-0 top-0 object-cover opacity-50 rounded-2xl shadow-2xl h-full scale-x-[-1]"
          />
        </Card>
      </Container>
    </section>
  );
}

export default SkillsSection;
