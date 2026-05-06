import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { SectionHeader } from "./Section";
import { useState } from "react";
import { Magnetic, Particles } from "./animations";

export default function Contact() {
  const [sent, setSent] = useState(false);
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    e.currentTarget.reset();
  };

  const socialLinks = [
  {
    icon: Github,
    url: "https://github.com/SHAKTHImsv",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/shakthivishwa-m-994225321?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    icon: Mail,
    url: "mailto:yourmail@gmail.com",
  },
];

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-cosmic opacity-60" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <Particles count={25} color="var(--neon-purple)" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <SectionHeader
          kicker="Contact"
          title={<>Let's <span className="text-gradient">build together</span></>}
          subtitle="Have an idea or opportunity? My inbox is always open."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-7 space-y-5"
          >
            <a href="mailto:shakthivishwa.07@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                   style={{ background: "var(--neon-pink)" }}>
                <Mail className="w-5 h-5 text-background" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Email</div>
                <div className="font-medium group-hover:text-primary transition">shakthivishwa.07@gmail.com</div>
              </div>
            </a>
            <a href="tel:+916382727093" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                   style={{ background: "var(--neon-cyan)" }}>
                <Phone className="w-5 h-5 text-background" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Phone</div>
                <div className="font-medium group-hover:text-primary transition">+91 6382727093</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                   style={{ background: "var(--neon-yellow)" }}>
                <MapPin className="w-5 h-5 text-background" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Location</div>
                <div className="font-medium">Salem, Tamil Nadu — 636010</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex gap-3">
              {socialLinks.map((item, i) => {
  const Icon = item.icon;
  return (
    <motion.a
      key={i}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, rotate: 8 }}
      whileTap={{ scale: 0.9 }}
      className="w-11 h-11 rounded-full glass flex items-center justify-center hover:text-primary"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
})}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-7 space-y-4"
          >
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
              <input
                required
                className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
              <input
                type="email"
                required
                className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required
                rows={4}
                className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <Magnetic strength={0.2}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-primary-foreground flex items-center justify-center gap-2 neon-shadow relative overflow-hidden"
                style={{ background: "var(--gradient-primary)" }}
              >
                <span className="absolute inset-0 animate-shimmer" />
                <span className="relative flex items-center gap-2">
                  {sent ? "Message sent! ✨" : (<>Send Message <Send className="w-4 h-4" /></>)}
                </span>
              </motion.button>
            </Magnetic>
          </motion.form>
        </div>

        <div className="text-center mt-20 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shakthivishwa M 
        </div>
      </div>
    </section>
  );
}