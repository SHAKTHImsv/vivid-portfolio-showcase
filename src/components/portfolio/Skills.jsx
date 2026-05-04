import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const groups = [
  {
    title: "Languages",
    color: "var(--neon-pink)",
    items: ["Python", "JavaScript", "Java", "C", "C++", "C#"],
  },
  {
    title: "Web",
    color: "var(--neon-cyan)",
    items: ["React.js", "Node.js", "Express.js", "FastAPI", "HTML", "CSS"],
  },
  {
    title: "Database",
    color: "var(--neon-yellow)",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Mobile & Cloud",
    color: "var(--neon-green)",
    items: ["React Native", "AWS (Basics)"],
  },
  {
    title: "Tools",
    color: "var(--neon-orange)",
    items: ["Git", "GitHub", "Figma", "BrowserStack", "Power BI", "DAX"],
  },
  {
    title: "Domains",
    color: "var(--neon-purple)",
    items: ["Generative AI", "ML / DL", "UI/UX", "Data Analytics"],
  },
];

const marquee = [
  "React", "Python", "FastAPI", "Gemini API", "Node.js", "MongoDB",
  "Figma", "MySQL", "Power BI", "React Native", "Express", "AWS",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          kicker="Skills & Stack"
          title={<>My <span className="text-gradient">toolbox</span></>}
          subtitle="A versatile mix of languages, frameworks, and tools I use to ship products."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="relative glass rounded-3xl p-6 overflow-hidden group"
            >
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition"
                style={{ background: g.color }}
              />
              <h3 className="font-display font-bold text-xl mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {g.items.map((it) => (
                  <motion.span
                    key={it}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 hover:border-white/30 cursor-default"
                  >
                    {it}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 relative overflow-hidden py-6 border-y border-white/10">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...marquee, ...marquee].map((m, i) => (
              <span
                key={i}
                className="font-display font-bold text-3xl md:text-5xl text-rainbow opacity-80"
              >
                {m} •
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}