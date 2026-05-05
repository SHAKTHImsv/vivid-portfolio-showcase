import { motion } from "framer-motion";
import { Trophy, Users } from "lucide-react";
import { SectionHeader } from "./Section";
import { TiltCard } from "./animations";

const items = [
  { place: "2nd Place", title: "Web Designing", where: "AVS Engineering College" },
  { place: "2nd Place", title: "Traceback Coding", where: "Dhirajlal Gandhi College of Technology" },
  { place: "2nd Place", title: "Web Designing", where: "Muthayammal Engineering College" },
  { place: "2nd Place", title: "Web Vision", where: "Sona College of Engineering" },
  { place: "Active Member", title: "Google Developer Groups", where: "2024 — 2025", Icon: Users },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-cosmic opacity-40" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeader
          kicker="Achievements"
          title={<>Wins & <span className="text-gradient">recognition</span></>}
          subtitle="A track record of competing — and placing — across coding & design events."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const Ic = it.Icon || Trophy;
            return (
              <motion.div
                key={it.title + i}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
              >
                <TiltCard className="relative glass rounded-3xl p-6 overflow-hidden h-full group" max={10}>
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-50"
                  style={{ background: "var(--neon-yellow)" }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                       style={{ background: "var(--gradient-primary)" }}>
                    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }}>
                      <Ic className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                  </div>
                  <div className="text-xs font-mono-display uppercase tracking-widest text-accent mb-1">
                    {it.place}
                  </div>
                  <h3 className="font-display font-bold text-xl">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{it.where}</p>
                </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}