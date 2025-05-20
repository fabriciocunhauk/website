import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import RevolvingIcons from "./components/RevolvingIcons";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <RevolvingIcons />
      <About />
      <SkillsSection />
      <Projects />
    </main>
  );
}
