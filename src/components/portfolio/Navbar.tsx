import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Home,
  User,
  Sparkles,
  Rocket,
  Trophy,
  Award,
  Mail,
  Menu,
  X,
} from "lucide-react";

const links = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "skills", label: "Skills", Icon: Sparkles },
  { id: "projects", label: "Projects", Icon: Rocket },
  { id: "achievements", label: "Achievements", Icon: Trophy },
  { id: "certifications", label: "Certifications", Icon: Award },
  { id: "contact", label: "Contact", Icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 140 && r.bottom >= 140) {
          setActive(l.id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
        style={{
          scaleX: progress,
          background: "var(--gradient-rainbow)",
          backgroundSize: "200% 100%",
        }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1180px)]"
      >
        {/* Animated gradient border wrapper */}
        <div className="relative rounded-full p-[1.5px] overflow-hidden">
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full opacity-90"
            style={{
              background:
                "conic-gradient(from 0deg, oklch(0.72 0.25 350), oklch(0.6 0.27 300), oklch(0.65 0.22 260), oklch(0.78 0.18 200), oklch(0.78 0.22 150), oklch(0.85 0.2 95), oklch(0.75 0.22 50), oklch(0.72 0.25 350))",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 14, ease: "linear", repeat: Infinity }}
          />

          <motion.div
            animate={{
              backgroundColor: scrolled
                ? "oklch(0.16 0.05 280 / 80%)"
                : "oklch(0.2 0.05 280 / 50%)",
              paddingTop: scrolled ? 8 : 12,
              paddingBottom: scrolled ? 8 : 12,
            }}
            transition={{ duration: 0.3 }}
            className="relative rounded-full px-4 md:px-5 flex items-center justify-between backdrop-blur-xl border border-white/10"
          >
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <motion.span
                className="relative inline-flex w-9 h-9 rounded-full items-center justify-center font-display font-extrabold text-sm text-background"
                style={{ background: "var(--gradient-primary)" }}
                whileHover={{ rotate: 360, scale: 1.08 }}
                transition={{ duration: 0.6 }}
              >
                <span className="relative z-10">SV</span>
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{ boxShadow: "0 0 24px oklch(0.72 0.25 350 / 80%)" }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                />
              </motion.span>
              <span className="hidden sm:inline font-display font-bold text-base text-rainbow">
                Shakthivishwa
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {links.map((l, i) => {
                const isActive = active === l.id;
                return (
                  <motion.a
                    key={l.id}
                    href={`#${l.id}`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    whileHover={{ y: -2 }}
                    className={`group relative px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors ${
                      isActive
                        ? "text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "var(--gradient-primary)",
                          boxShadow: "0 6px 24px -6px oklch(0.72 0.25 350 / 70%)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <l.Icon className="w-3.5 h-3.5 relative z-10" />
                    <span className="relative z-10">{l.label}</span>
                    {/* underline shimmer on hover */}
                    {!isActive && (
                      <span
                        className="absolute left-3 right-3 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                        style={{ background: "var(--gradient-rainbow)" }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex relative items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-background overflow-hidden group"
              style={{ background: "var(--gradient-primary)" }}
            >
              <span className="relative z-10">Let's Talk</span>
              <Mail className="w-3.5 h-3.5 relative z-10" />
              <motion.span
                aria-hidden
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(1 0 0 / 40%), transparent)",
                }}
              />
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-full hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="glass mt-3 rounded-3xl p-3 lg:hidden flex flex-col gap-1 border border-white/10"
            >
              {links.map((l, i) => {
                const isActive = active === l.id;
                return (
                  <motion.a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm transition-colors ${
                      isActive
                        ? "text-background font-semibold"
                        : "hover:bg-white/5"
                    }`}
                    style={
                      isActive ? { background: "var(--gradient-primary)" } : undefined
                    }
                  >
                    <l.Icon className="w-4 h-4" />
                    {l.label}
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
