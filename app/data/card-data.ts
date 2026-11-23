import type { StaticImageData } from "next/image";
import smartlist from "@/public/images/smartlist-desktop-home.jpeg";
import spacegoogles from "@/public/images/space-googles-homepage.jpeg";
import invoicePro from "@/public/images/invoicepro-homepage.jpeg";
import outdoors from "@/public/images/outdoors-homepage.jpg";
import proffy from "@/public/images/proffy-homepage.jpg";

export type Project = Readonly<{
  id: number;
  name: string;
  imgURL: string | StaticImageData;
  links: Readonly<{
    demo: string;
    github?: string;
  }>;
  description: string;
  technologies: ReadonlyArray<string>;
}>;

export const projects: ReadonlyArray<Project> = [
  {
    id: 1,
    name: "Invoice Pro PWA",
    imgURL: invoicePro,
    links: {
      demo: "https://invoice-pro.co.uk",
    },
    description: "",
    technologies: ["Laravel", "Inertia.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    name: "SmartList PWA",
    imgURL: smartlist,
    links: {
      demo: "https://smart-list.co.uk/",
      github: "https://github.com/fabriciocunhauk/smartlist",
    },
    description: "",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js", "Express"],
  },
  {
    id: 3,
    name: "Space Googles",
    imgURL: spacegoogles,
    links: {
      demo: "https://space-googles.co.uk",
      github: "https://github.com/fabriciocunhauk/space-googles",
    },
    description: "",
    technologies: ["Next Js", "Typescript", "Tailwind Css"],
  },
  {
    id: 4,
    name: "Colonia Malhada",
    imgURL: "https://github.com/fabriciocunhauk/Projeto-chacara-colonia-malhada/raw/master/src/images/front-page.PNG",
    links: {
      demo: "https://projeto-chacara-colonia-malhada.vercel.app",
      github: "https://github.com/fabriciocunhauk/Projeto-chacara-colonia-malhada",
    },
    description: "",
    technologies: ["React", "JavaScript ", "Styled-Components"],
  },
  {
    id: 5,
    name: "Todo React",
    imgURL: "https://github.com/fabriciocunhauk/react-to-do-list/raw/master/src/assets/images/desktop-preview.jpg",
    links: {
      demo: "https://react-to-do-list-fabriciocunhauk.vercel.app/",
      github: "https://github.com/fabriciocunhauk/react-to-do-list",
    },
    description: "",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    id: 6,
    name: "E-Comerce",
    imgURL: "https://github.com/fabriciocunhauk/React-crown-clothing/raw/master/src/assets/Readme%20img.png",
    links: {
      demo: "https://crown-clothing-woad-omega.vercel.app/",
      github: "https://github.com/fabriciocunhauk/React-crown-clothing",
    },
    description: "",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    id: 7,
    name: "Interflix",
    imgURL: "https://github.com/fabriciocunhauk/React.js-interflix/raw/master/src/assets/imagens/Front-photo.PNG",
    links: {
      demo: "https://interflix.vercel.app/",
      github: "https://github.com/fabriciocunhauk/React.js-interflix",
    },
    description: "",
    technologies: ["React", "JavaScript", "Styled-Components"],
  },
  {
    id: 8,
    name: "Loopstudios",
    imgURL: "https://github.com/fabriciocunhauk/LOOPSTUDIO-LANDING-PAGE/raw/master/public/assets/design/desktop-preview.jpg",
    links: {
      demo: "https://fabriciocunhauk.github.io/LOOPSTUDIO-LANDING-PAGE",
      github: "https://github.com/fabriciocunhauk/LOOPSTUDIO-LANDING-PAGE",
    },
    description: "",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 9,
    name: "A touch of angels",
    imgURL: "https://github.com/fabriciocunhauk/a-touch-of-angels/raw/master/assets/images/a%20touch%20of%20angels%20cleaning.PNG",
    links: {
      demo: "https://fabriciocunhauk.github.io/a-touch-of-angels",
      github: "https://github.com/fabriciocunhauk/a-touch-of-angels",
    },
    description: "",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 10,
    name: "Outdoors",
    imgURL: outdoors,
    links: {
      demo: "https://fabriciocunhauk.github.io/natours-with-css-and-sass/",
      github: "https://github.com/fabriciocunhauk/natours-with-css-and-sass",
    },
    description: "",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 11,
    name: "Proffy",
    imgURL: proffy,
    links: {
      demo: "https://nlw-02-proffy.vercel.app/",
      github: "https://github.com/fabriciocunhauk/NLW-02-proffy",
    },
    description: "",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
];
