import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Marketing sites ship in 3–5 weeks. Full SaaS platforms usually run 8–16 weeks depending on scope. We share a week-by-week plan before kickoff so you always know what's next.",
  },
  {
    q: "Do I own the source code?",
    a: "Always. Full repo access, clean commits, and documented architecture — from day one. No vendor lock-in, no licensing traps.",
  },
  {
    q: "What's your pricing model?",
    a: "Fixed-scope, fixed-price by default. We scope together upfront so you know exact cost before we write a line of code. No surprise invoices.",
  },
  {
    q: "Can you take over an existing project?",
    a: "Yes. We regularly rescue stalled builds, refactor messy codebases, and inherit projects from other teams. We'll audit first and give you an honest path forward.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Retainers from 10 hrs/month up to embedded engineering. Most of our long-term clients stay for continuous iteration, growth experiments, and scaling work.",
  },
  {
    q: "What tech stack do you work with?",
    a: "React/Next.js, Angular, Node, Python (FastAPI/Django), Postgres, and modern AI tooling. We pick what fits the problem, not what's trending.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 glass mb-6">
                <HelpCircle className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                  FAQ
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
                Questions,<br />
                <span className="text-gradient">answered.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-base max-w-sm">
                Still curious? Send us a message — we reply personally within one business day.
              </p>
            </div>
          </motion.div>

          {/* Right accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <motion.div
                    key={f.q}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                      isOpen
                        ? "border-primary/40 bg-gradient-to-br from-nebula-500/5 to-cosmic-500/5 shadow-[0_0_40px_-15px_rgba(99,102,241,0.4)]"
                        : "border-border/60 glass hover:border-border"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-base md:text-lg font-medium tracking-tight text-foreground">
                        {f.q}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          isOpen
                            ? "bg-primary text-primary-foreground"
                            : "border border-border text-muted-foreground"
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm md:text-[15px]">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
