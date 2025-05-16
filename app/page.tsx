import About from "./components/About";
import Hero from "./components/Hero";
import RevolvingIcons from "./components/RevolvingIcons";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <RevolvingIcons />
      <About />
    </main>
  );
}
