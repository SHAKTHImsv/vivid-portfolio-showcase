import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shakthivishwa M — Full-Stack Developer & UI/UX Designer" },
      {
        name: "description",
        content:
          "Portfolio of Shakthivishwa M — Computer Science student and full-stack developer building modern, AI-powered web experiences with React, Python, and Generative AI.",
      },
      { property: "og:title", content: "Shakthivishwa M — Portfolio" },
      {
        property: "og:description",
        content: "Full-stack developer, UI/UX enthusiast & Generative AI explorer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
    </main>
  );
}
