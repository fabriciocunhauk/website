import React from "react";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/card-data";

function Projects() {
  return (
    <section id="projects" className="text-white pb-40">
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
            <ProjectCard key={project.id || index} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
