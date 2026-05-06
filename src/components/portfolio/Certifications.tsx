import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { SectionHeader } from "./Section";
import { TiltCard } from "./animations";

const certs = [
  { title: "Frontend Developer (React)", by: "HackerRank", color: "var(--neon-cyan)" },
  { title: "Solution Challenge", by: "Google", color: "var(--neon-pink)" },
  { title: "Programming – Python", by: "HackerRank", color: "var(--neon-yellow)" },
  { title: "Programming – JavaScript", by: "DigiLabs", color: "var(--neon-green)" },
  { title: "Programming – Java", by: "DigiLabs", color: "var(--neon-orange)" },
  { title: "Programming – C / C++ / C#", by: "DigiLabs", color: "var(--neon-purple)" },
  { title: "AWS Infrastructure", by: "Guvi", color: "var(--neon-blue)" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          kicker="Certifications"
          title={<>Verified <span className="text-gradient">credentials</span></>}
          subtitle="Continuous learning across frontend, programming languages, and cloud."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <TiltCard className="relative glass rounded-3xl p-6 group overflow-hidden h-full" max={12}>
              <div
                className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition"
                style={{ background: c.color }}
              />
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.div
                  className="absolute top-0 -left-1/2 w-1/2 h-full skew-x-12"
                  style={{ background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 10%), transparent)" }}
                  animate={{ x: ["0%", "400%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: i * 0.5 + 2, ease: "easeInOut" }}
                />
              </div>
              <div className="relative z-10 flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: c.color, boxShadow: `0 0 25px ${c.color}` }}
                >
                  <Award className="w-6 h-6 text-background" />
                </motion.div>
                <div>
                  <h3 className="font-display font-bold text-lg leading-tight">{c.title}</h3>
                  <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
                    <BadgeCheck className="w-4 h-4 text-accent" /> {c.by}
                  </div>
                </div>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}