import { motion } from "framer-motion";
import { TrendingDown, Zap, X, Check } from "lucide-react";

const problems = [
  "Slow, bloated sites killing conversions",
  "Designs that don't survive real users",
  "Endless rebuilds from broken handoffs",
  "Teams that disappear after launch",
];

const solutions = [
  "Sub-second loads, 95+ Lighthouse",
  "Research-led, motion-crafted design",
  "One team: design + engineering fused",
  "Long-term partners, not contractors",
];

const ProblemSolutionSection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 glass mb-6">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                The shift
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              Most agencies ship projects.{" "}
              <span className="text-gradient">We ship outcomes.</span>
            </h2>

            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
              The gap between a site that exists and a site that performs is
              usually measured in details. We live in those details.
            </p>
          </motion.div>

          {/* Right: compare card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-nebula-500/20 to-cosmic-500/20 rounded-3xl blur-2xl opacity-60" />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Problems */}
              <div className="rounded-3xl p-6 border border-border/60 glass">
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border/50">
                  <TrendingDown className="w-4 h-4 text-destructive/80" />
                  <span className="text-xs uppercase tracking-wider font-medium text-muted-foreground">Typical</span>
                </div>
                <ul className="space-y-3">
                  {problems.map((p, i) => (
                    <motion.li
                      key={p}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <X className="w-4 h-4 text-destructive/60 mt-0.5 flex-shrink-0" />
                      <span>{p}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="rounded-3xl p-6 border border-primary/40 bg-gradient-to-br from-nebula-500/5 to-cosmic-500/5 relative overflow-hidden shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border/50">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-xs uppercase tracking-wider font-medium text-primary">DevSpark</span>
                  </div>
                  <ul className="space-y-3">
                    {solutions.map((s, i) => (
                      <motion.li
                        key={s}
                        initial={{ opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{s}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
