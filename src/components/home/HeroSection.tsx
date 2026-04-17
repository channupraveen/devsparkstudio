import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import HeroUniverseBackground from "./HeroUniverseBackground";

const rotatingWords = ["AI-powered", "award-winning", "intelligent", "immersive", "unforgettable"];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse-driven parallax for content (very subtle)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 0.4 });

  const textX = useTransform(smoothX, (v) => v * -8);
  const textY = useTransform(smoothY, (v) => v * -6);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((p) => (p + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    const onLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* ==== UNIVERSE BACKGROUND ==== */}
      <HeroUniverseBackground />

      {/* Additional CSS layers for depth */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid behind stars */}
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30 dark:opacity-40" />

        {/* Centered vignette for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, transparent 40%, hsl(var(--background) / 0.35) 100%)",
          }}
        />

        {/* Soft bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background/80 to-transparent" />

        {/* Big drifting orbs */}
        <motion.div
          aria-hidden
          className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full blur-[120px] opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)",
          }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-32 -right-24 w-[520px] h-[520px] rounded-full blur-[120px] opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.35), transparent 70%)",
          }}
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="hidden md:block absolute top-1/4 right-1/3 w-[300px] h-[300px] rounded-full blur-[100px] opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(56,189,248,0.3), transparent 70%)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, 20, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ==== CONTENT ==== */}
      <motion.div
        style={{ x: textX, y: textY }}
        className="relative container-custom z-10 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-border/60 mb-8"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium tracking-wide text-muted-foreground">
            Digital studio · Accepting Q2 projects
          </span>
        </motion.div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-semibold leading-[1.02] tracking-tight text-foreground max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="block"
          >
            We build
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block h-[1.1em] align-bottom overflow-hidden min-w-[7ch]"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex]}
                initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="inline-block text-gradient italic font-medium"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            digital products.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          AI-powered solutions, SaaS platforms, and modern web experiences —
          engineered with obsessive attention to motion, craft, and performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-medium text-sm btn-shimmer shadow-[0_10px_40px_-10px_rgba(99,102,241,0.5)] hover:shadow-[0_10px_50px_-5px_rgba(168,85,247,0.6)] transition-shadow duration-500"
          >
            Get Started
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass border border-border/60 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 text-sm font-medium"
          >
            <span className="w-5 h-5 rounded-full bg-gradient-to-br from-nebula-500 to-cosmic-500 flex items-center justify-center">
              <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
            </span>
            View Work
          </Link>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-3 gap-8 md:gap-12"
        >
          {[
            { n: "40+", l: "Projects shipped" },
            { n: "4.9★", l: "Client rating" },
            { n: "<50ms", l: "Response time" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-semibold text-foreground">{s.n}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground pointer-events-none z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-3 bg-foreground"
            animate={{ y: ["0%", "400%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
