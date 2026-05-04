import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";
import { SectionHeader } from "./Section";

const stats = [
  { value: "8.25", label: "Current CGPA" },
  { value: "10+", label: "Projects Built" },
  { value: "2", label: "Internships" },
  { value: "5+", label: "Awards Won" },
];

const timeline = [
  {
    Icon: GraduationCap,
    title: "B.E. Computer Science",
    where: "KSR Institute for Engineering and Technology",
    when: "2023 — Present",
    color: "var(--neon-pink)",
  },
  {
    Icon: Briefcase,
    title: "AI & Machine Learning Intern",
    where: "United IT and CAD Divisions, Salem",
    when: "Internship",
    color: "var(--neon-cyan)",
  },
  {
    Icon: Code2,
    title: "Data Analytics Intern",
    where: "Stack Queue Education Center, Salem",
    when: "Internship",
    color: "var(--neon-yellow)",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-cosmic opacity-50" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeader
          kicker="About Me"
          title={<>Crafting code with <span className="text-gradient">passion</span></>}
          subtitle="Motivated Computer Science student blending full-stack development, UI/UX design, and Generative AI to build experiences that matter."
        />

        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="font-display text-4xl font-bold text-rainbow">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6">
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: i % 2 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-6 flex items-start gap-5 group hover:bg-white/10 transition"
            >
              <div
                className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition"
                style={{ background: t.color, boxShadow: `0 0 30px ${t.color}` }}
              >
                <t.Icon className="w-6 h-6 text-background" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display font-bold text-xl">{t.title}</h3>
                  <span className="text-xs font-mono-display text-muted-foreground">{t.when}</span>
                </div>
                <p className="text-muted-foreground mt-1">{t.where}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}