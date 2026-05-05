import { motion } from "framer-motion";
import { ArrowUpRight, Database, Bot, FileText } from "lucide-react";
import { SectionHeader } from "./Section";
import { TiltCard, Spotlight } from "./animations";

const projects = [
  {
    Icon: Bot,
    title: "AI Data Assistant for Google Sheets",
    desc: "A Python (Gemini API + Uvicorn) and React.js system enabling natural-language analysis of Google Sheets without altering source data.",
    tags: ["Python", "Gemini API", "React.js", "Uvicorn"],
    gradient: "linear-gradient(135deg, oklch(0.72 0.25 350), oklch(0.6 0.27 300))",
  },
  {
    Icon: FileText,
    title: "Hostel Outpass Management System",
    desc: "A secure role-based online outpass platform with real-time updates, built with a React.js frontend for a smooth student & warden experience.",
    tags: ["React.js", "Node.js", "Auth", "Realtime"],
    gradient: "linear-gradient(135deg, oklch(0.65 0.22 260), oklch(0.78 0.18 200))",
  },
  {
    Icon: Database,
    title: "AI-Powered SQL Assistant",
    desc: "Converts natural-language prompts into SQL queries using Python and React.js, accelerating data exploration for non-technical users.",
    tags: ["Python", "React.js", "LLM", "SQL"],
    gradient: "linear-gradient(135deg, oklch(0.78 0.22 150), oklch(0.85 0.2 95))",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          kicker="Selected Work"
          title={<>Recent <span className="text-gradient">projects</span></>}
          subtitle="A few things I've designed and built recently."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <TiltCard className="relative glass rounded-3xl p-7 overflow-hidden group h-full" max={6}>
                <Spotlight />
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition"
                  style={{ background: p.gradient }}
                />
                <motion.div
                  className="absolute -top-1 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 60%), transparent)" }}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: p.gradient, boxShadow: "0 10px 30px -5px oklch(0 0 0 / 50%)" }}
                  >
                    <p.Icon className="w-7 h-7 text-background" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition" />
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <motion.span
                      key={t}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 rounded-full text-xs font-mono-display bg-white/10 border border-white/10"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}