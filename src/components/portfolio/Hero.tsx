import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { SplitText, Magnetic, Particles, GradientBlob, ScrambleText, ParallaxY } from "./animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmic grid-bg pt-24"
    >
      {/* Aurora gradient blobs */}
      <GradientBlob className="-top-32 -left-20" color="var(--neon-violet)" size={520} />
      <GradientBlob className="top-1/3 -right-32" color="var(--neon-teal)" size={520} delay={3} />
      <GradientBlob className="-bottom-32 left-1/3 hidden md:block" color="var(--neon-coral)" size={520} delay={6} />
      <Particles count={36} color="var(--neon-mint)" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </motion.div>

        <ParallaxY offset={30} className="md:[transform:none]">
          <h1 className="font-display font-bold text-[2rem] sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] md:leading-[0.95] mb-6">
            <SplitText delay={0.1}>Hi, I'm </SplitText>
            <span className="text-aurora"><SplitText delay={0.3}>Shakthivishwa</SplitText></span>
            <br />
            <span className="text-gradient"><SplitText delay={0.7}>Building the future</SplitText></span>
          </h1>
        </ParallaxY>

        <div className="font-mono-display text-sm md:text-base uppercase tracking-[0.3em] text-accent mb-6">
          <ScrambleText text="Full-Stack · UI/UX · Generative AI" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
        >
          Full-stack developer, UI/UX enthusiast & Generative AI explorer crafting
          scalable, user-centric web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <Magnetic>
            <a
              href="#projects"
              className="inline-block px-7 py-3 rounded-full font-semibold text-primary-foreground bg-aurora animate-pulse-glow"
            >
              View My Work
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-block px-7 py-3 rounded-full font-semibold glass hover:bg-white/10 transition"
            >
              Get in Touch
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { Icon: Github, href: "https://github.com/SHAKTHImsv" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/shakthivishwa-m-994225321?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
            { Icon: Mail, href: "mailto:shakthivishwa.07@gmail.com" },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              whileHover={{ scale: 1.15, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:text-primary"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}