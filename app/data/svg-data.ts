import type { StaticImageData } from "next/image";
import javascript from "@/public/images/svg/javascript-4.svg";
import html from "@/public/images/svg/html5.svg";
import css from "@/public/images/svg/css3.svg";
import typescript from "@/public/images/svg/typescript.svg";
import node from "@/public/images/svg/node-js-logo.svg";
import react from "@/public/images/svg/react.svg";
import redux from "@/public/images/svg/redux.svg";
import git from "@/public/images/svg/git.svg";
import github from "@/public/images/svg/github-octocat.svg";
import sql from "@/public/images/svg/sql.svg";
import graphQL from "@/public/images/svg/graphql.svg";
import tailwind from "@/public/images/svg/tailwindcss-icon.svg";

type TechIconLink = Readonly<{
  id: number;
  name: string;
  path: StaticImageData;
  link: string;
}>;

export const TECH_ICON_LINKS: ReadonlyArray<TechIconLink> = [
  { id: 1, name: "JavaScript", path: javascript, link: "https://www.javascript.com" },
  { id: 2, name: "TypeScript", path: typescript, link: "https://www.typescriptlang.org" },
  { id: 3, name: "React", path: react, link: "https://reactjs.org" },
  { id: 4, name: "HTML", path: html, link: "https://www.w3schools.com/html" },
  { id: 5, name: "CSS", path: css, link: "https://www.w3schools.com/css/default.asp" },
  { id: 6, name: "Tailwind CSS", path: tailwind, link: "https://tailwindcss.com/" },
  { id: 7, name: "Git", path: git, link: "https://git-scm.com" },
  { id: 8, name: "GitHub", path: github, link: "https://github.com" },
  { id: 9, name: "Redux", path: redux, link: "https://redux.js.org" },
  { id: 10, name: "GraphQL", path: graphQL, link: "https://graphql.org" },
  { id: 11, name: "Node.js", path: node, link: "https://nodejs.org/en" },
  { id: 12, name: "SQL", path: sql, link: "https://www.mysql.com" },
];
