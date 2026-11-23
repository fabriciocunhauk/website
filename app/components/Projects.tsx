import Container from "./Container";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { projects } from "@/app/data/card-data";

export default function Projects() {
  return (
    <section id="projects" className="text-white pb-40">
      <Container>
        <div className="space-y-8 text-center mb-16">
          <SectionHeading>
            My <span className="text-primary">Projects</span>
          </SectionHeading>
          <p className="text-base sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed text-gray-300">
            Here are some of the projects I&apos;ve worked on, showcasing my
            expertise in building fast, scalable, and user-friendly web
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
