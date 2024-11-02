import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}