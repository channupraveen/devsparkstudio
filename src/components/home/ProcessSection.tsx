import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    desc: "Deep immersion into your business, users, and goals. We map real problems before proposing solutions.",
    iconColor: "text-nebula-300",
    glow: "rgba(99,102,241,0.45)",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    desc: "From wireframe to hi-fi in motion. Every pixel, micro-interaction, and transition is intentional.",
    iconColor: "text-cosmic-400",
    glow: "rgba(168,85,247,0.45)",
  },
  {
    icon: Code2,
    number: "03",
    title: "Develop",
    desc: "Clean architecture, typed code, and performance as a first-class concern. Zero technical debt handoff.",
    iconColor: "text-electric-400",
    glow: "rgba(56,189,248,0.45)",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    desc: "Staged rollout with monitoring, analytics, and feedback loops from day one.",
    iconColor: "text-nebula-300",
    glow: "rgba(129,141,255,0.45)",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Scale",
    desc: "Ongoing iteration, growth experiments, and optimization. Your product compounds.",
    iconColor: "text-cosmic-400",
    glow: "rgba(192,132,252,0.45)",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Ambient universe backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-nebula-500/5 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-cosmic-500/5 blur-[120px] animate-float-slow animation-delay-2000" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 glass mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Process
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            From idea to orbit —{" "}
            <span className="text-gradient">in five stages.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical gradient line — left on mobile, center on desktop */}
          <div className="absolute left-[21px] sm:left-[27px] md:left-1/2 top-4 bottom-4 w-[2px] md:-translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
              className="h-full bg-gradient-to-b from-nebula-500 via-cosmic-500 to-electric-500"
            />
          </div>

          <div className="space-y-12 sm:space-y-16 md:space-y-24">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0; // alternate sides on desktop

              return (
                <div
                  key={step.number}
                  className="relative grid grid-cols-[44px_1fr] sm:grid-cols-[56px_1fr] md:grid-cols-[1fr_56px_1fr] items-center gap-4 sm:gap-6 md:gap-10"
                >
                  {/* LEFT content (desktop only, only for even steps) */}
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.9,
                        delay: i * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="hidden md:block text-right pr-8"
                    >
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.4,
                        }}
                      >
                        <div className="font-mono text-xs tracking-widest text-primary mb-2">
                          {step.number}
                        </div>
                        <h3 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base ml-auto max-w-md">
                          {step.desc}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Spacer so right-side steps keep grid alignment on desktop */}
                  {!isLeft && <div className="hidden md:block" />}

                  {/* CENTER node — icon */}
                  <div className="relative z-10 flex justify-center col-start-1 md:col-start-2">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.7,
                        delay: i * 0.05 + 0.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center"
                    >
                      {/* Pulsing glow halo */}
                      <motion.div
                        animate={{
                          scale: [1, 1.25, 1],
                          opacity: [0.5, 0.9, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                        className="absolute inset-0 rounded-full blur-xl"
                        style={{ background: step.glow }}
                      />
                      {/* Floating icon */}
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2,
                        }}
                        className="relative bg-background rounded-full flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14"
                      >
                        <Icon
                          className={`w-7 h-7 sm:w-10 sm:h-10 ${step.iconColor}`}
                          strokeWidth={1.5}
                        />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* RIGHT content — always on mobile, only for odd steps on desktop */}
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.9,
                      delay: i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`col-start-2 md:col-start-3 md:pl-8 ${
                      isLeft ? "md:hidden" : ""
                    }`}
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4 + 1,
                      }}
                    >
                      <div className="font-mono text-xs tracking-widest text-primary mb-2">
                        {step.number}
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-2 md:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-md text-sm sm:text-base">
                        {step.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
