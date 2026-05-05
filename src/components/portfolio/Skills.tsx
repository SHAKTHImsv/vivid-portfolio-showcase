import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { TiltCard, Spotlight } from "./animations";

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
            >
              <TiltCard className="relative glass rounded-3xl p-6 overflow-hidden group h-full" max={8}>
                <Spotlight />
                <motion.div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition"
                  style={{ background: g.color }}
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <h3 className="font-display font-bold text-xl mb-4">{g.title}</h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {g.items.map((it, idx) => (
                    <motion.span
                      key={it}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.08 + idx * 0.04, type: "spring" }}
                      whileHover={{ scale: 1.12, y: -3, rotate: -2 }}
                      className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 hover:border-white/30 cursor-default"
                    >
                      {it}
                    </motion.span>
                  ))}
                </div>
              </TiltCard>
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