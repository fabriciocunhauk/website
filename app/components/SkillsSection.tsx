import Image from "next/image";
import Container from "./Container";
import Card from "./Card";
import SectionHeading from "./SectionHeading";
import codeBg from "@/public/images/purple-code-bg.jpg";
import { SKILL_CATEGORIES } from "@/app/data/skill-categories";

export default function SkillsSection() {
  return (
    <section id="skills" className="text-white pb-24">
      <Container>
        <Card
          classes={{
            card: "relative grid grid-rows-1 text-white mb-16 bg-gray-800/90 backdrop-blur-sm p-12 rounded-2xl shadow-xl hover:translate-none",
          }}
        >
          <div className="space-y-8 z-20">
            <SectionHeading>
              My <span className="text-primary">Technical</span> Skills
            </SectionHeading>

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
              {SKILL_CATEGORIES.map((category) => (
                <div key={category.title}>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {category.title}
                  </h3>

                  <p className="text-base text-gray-200 mb-4">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
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
            alt=""
            className="absolute bottom-0 left-0 right-0 top-0 object-cover opacity-50 rounded-2xl shadow-2xl h-full scale-x-[-1]"
          />
        </Card>
      </Container>
    </section>
  );
}
