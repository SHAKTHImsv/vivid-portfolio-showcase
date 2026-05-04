import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = { kicker: string; title: ReactNode; subtitle?: ReactNode };

export function SectionHeader({ kicker, title, subtitle }: Props) {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1 rounded-full glass text-xs font-mono-display uppercase tracking-widest text-accent mb-4"
      >
        {kicker}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display font-bold text-4xl md:text-6xl mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}