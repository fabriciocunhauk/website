import React from "react";
import Card from "./Card";
import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";

export interface Project {
  id: number;
  name: string;
  imgURL: string | StaticImageData;
  links: {
    demo: string;
    github?: string;
  };
  description: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      classes={{
        card: "flex flex-col justify-between group relative rounded-2xl shadow-lg bg-gray-800/90 backdrop-blur-sm transition-transform duration-300 hover:scale-105",
      }}
    >
      <Image
        src={project.imgURL}
        alt={project.name}
        width={500}
        height={300}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105 rounded-md"
      />
      <div className="flex flex-col justify-between pt-4 space-y-5">
        <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
          {project.name}
        </h3>

        {project.description && (
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <Button
            link={project.links.demo}
            icon={<RiPagesFill size="20" />}
            variant="secondary"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
          {project.links?.github && (
            <Button
              link={project.links?.github}
              icon={<FaGithub size="20" />}
              variant="outline"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
