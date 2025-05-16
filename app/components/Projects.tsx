import React from "react";
import Container from "./Container";
import Card from "./Card";
import Image from "next/image";
import Button from "./Button";
import { projects } from "../data/card-data";
import { FaGithub } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";

function Projects() {
  return (
    <section id="projects" className="text-white pb-24">
      <Container>
        <div className="space-y-8 text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-base sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed text-gray-300">
            Here are some of the projects I&apos;ve worked on, showcasing my
            expertise in building fast, scalable, and user-friendly web
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              classes={{
                card: "relative rounded-2xl overflow-hidden shadow-lg bg-gray-800/90 backdrop-blur-sm transition-transform duration-300 hover:scale-105",
              }}
            >
              <Image
                src={project.imgURL}
                alt={project.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    link={project.links.demo}
                    icon={<RiPagesFill size="20" />}
                    variant="primary"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                  <Button
                    link={project.links.github}
                    icon={<FaGithub size="20" />}
                    variant="outline"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
