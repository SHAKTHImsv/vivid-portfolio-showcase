import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import { CursorGlow, ScrollProgress, Marquee } from "@/components/portfolio/animations";

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
    <main className="bg-background text-foreground relative">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <div className="relative py-6 border-y border-white/5 bg-card/30 backdrop-blur-sm">
        <Marquee
          items={[
            "React", "TypeScript", "Python", "Generative AI",
            "UI / UX", "Tailwind", "Framer Motion", "Node.js",
            "Full-Stack", "Open to Work",
          ]}
        />
      </div>
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
    </main>
  );
}
