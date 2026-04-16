import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    desc: "Deep immersion into your business, users, and goals. We map real problems before proposing solutions.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    desc: "From wireframe to hi-fi in motion. Every pixel, micro-interaction, and transition is intentional.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Develop",
    desc: "Clean architecture, typed code, and performance as a first-class concern. Zero technical debt handoff.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    desc: "Staged rollout with monitoring, analytics, and feedback loops from day one.",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Scale",
    desc: "Ongoing iteration, growth experiments, and optimization. Your product compounds.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
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
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            From idea to orbit —{" "}
            <span className="text-gradient">in five stages.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical gradient line */}
          <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-[2px] md:-translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
              className="h-full bg-gradient-to-b from-nebula-500 via-cosmic-500 to-electric-500"
            />
          </div>

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative grid grid-cols-[56px_1fr] md:grid-cols-2 items-center gap-6 md:gap-10 ${
                    isEven ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* Node */}
                  <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-10 flex justify-center md:[direction:ltr]">
                    <div className="relative w-14 h-14">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-nebula-500 via-cosmic-500 to-electric-500 blur-md opacity-60" />
                      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-nebula-500 via-cosmic-500 to-electric-500 p-[1.5px] shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)]">
                        <div className="w-full h-full rounded-[15px] bg-background flex items-center justify-center">
                          <Icon className="w-6 h-6 text-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`md:[direction:ltr] ${
                      isEven ? "md:col-start-2 md:pl-16" : "md:col-start-1 md:pr-16 md:text-right"
                    }`}
                  >
                    <div className="inline-block relative group">
                      <div
                        className={`font-mono text-xs tracking-widest text-primary mb-2 ${
                          isEven ? "" : "md:text-right"
                        }`}
                      >
                        {step.number}
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-md text-sm md:text-base">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
