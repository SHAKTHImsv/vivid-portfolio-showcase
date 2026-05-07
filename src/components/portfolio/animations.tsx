import { motion, useMotionValue, useSpring, useTransform, useInView, useScroll, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";

/* Character-by-character reveal */
export function SplitText({ children, className = "", delay = 0 }: { children: string; className?: string; delay?: number }) {
  return (
    <span className={className} aria-label={children}>
      {children.split("").map((c, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + i * 0.03, ease: [0.2, 0.8, 0.2, 1] }}
          className="inline-block"
          style={{ whiteSpace: c === " " ? "pre" : "normal" }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

/* Animated number counter */
export function Counter({ to, suffix = "", duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);
  const isFloat = !Number.isInteger(to);
  return <span ref={ref}>{isFloat ? val.toFixed(2) : Math.round(val)}{suffix}</span>;
}

/* 3D tilt wrapper that responds to cursor */
export function TiltCard({ children, className = "", max = 10 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 200, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Cursor-following spotlight overlay */
export function Spotlight({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r || !ref.current) return;
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`absolute inset-0 spotlight pointer-events-none opacity-0 hover:opacity-100 transition-opacity ${className}`}
    />
  );
}

/* Floating particles field */
export function Particles({ count = 30, color = "var(--neon-cyan)" }: { count?: number; color?: string }) {
  const particles = Array.from({ length: count });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const dur = 6 + Math.random() * 8;
        const delay = Math.random() * 5;
        return (
          <motion.span
            key={i}
            initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0, 0.8, 0],
            }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full blur-[1px]"
            style={{ width: size, height: size, background: color, boxShadow: `0 0 ${size * 3}px ${color}` }}
          />
        );
      })}
    </div>
  );
}

/* Magnetic button — element drifts toward cursor */
export function Magnetic({ children, strength = 0.3, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 15 });
  const y = useSpring(0, { stiffness: 200, damping: 15 });
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Top-of-page scroll progress bar */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[70] bg-aurora"
    />
  );
}

/* Soft aurora blob that follows the cursor */
export function CursorGlow() {
  const x = useSpring(0, { stiffness: 80, damping: 18, mass: 0.6 });
  const y = useSpring(0, { stiffness: 80, damping: 18, mass: 0.6 });
  useEffect(() => {
    const move = (e: globalThis.MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  return (
    <motion.div
      aria-hidden
      style={{ x, y }}
      className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none z-[5] mix-blend-screen blur-3xl opacity-40 hidden md:block"
    >
      <div className="w-full h-full rounded-full bg-aurora" />
    </motion.div>
  );
}

/* Scramble-text reveal: scrambles random chars then resolves */
const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#________";
export function ScrambleText({ text, className = "", duration = 1.2 }: { text: string; className?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = Math.round(duration * 60);
    const id = setInterval(() => {
      frame++;
      const progress = frame / total;
      let s = "";
      for (let i = 0; i < text.length; i++) {
        if (i / text.length < progress) s += text[i];
        else if (text[i] === " ") s += " ";
        else s += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
      setOut(s);
      if (frame >= total) { setOut(text); clearInterval(id); }
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [inView, text, duration]);
  return <span ref={ref} className={className}>{out}</span>;
}

/* Infinite horizontal marquee */
export function Marquee({ items, speed = 30, className = "" }: { items: string[]; speed?: number; className?: string }) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex gap-10 whitespace-nowrap" style={{ animation: `marquee ${speed}s linear infinite` }}>
        {doubled.map((it, i) => (
          <span key={i} className="font-mono-display uppercase tracking-[0.25em] text-sm text-muted-foreground inline-flex items-center gap-10">
            {it}
            <span className="w-1.5 h-1.5 rounded-full bg-aurora" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* Scroll-linked vertical parallax */
export function ParallaxY({ children, offset = 60, className = "" }: { children: ReactNode; offset?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* Animated gradient blob — large, slow, organic */
export function GradientBlob({
  className = "",
  color = "var(--neon-violet)",
  size = 500,
  delay = 0,
}: { className?: string; color?: string; size?: number; delay?: number }) {
  return (
    <motion.div
      aria-hidden
      className={`absolute rounded-full blur-3xl pointer-events-none mix-blend-screen ${className}`}
      style={{ width: size, height: size, background: color, opacity: 0.45 }}
      animate={{
        scale: [1, 1.15, 0.95, 1],
        x: [0, 30, -20, 0],
        y: [0, -25, 20, 0],
      }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}