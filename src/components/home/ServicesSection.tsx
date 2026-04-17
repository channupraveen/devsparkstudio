import { motion } from "framer-motion";
import { Brain, Cloud, Code2, Palette, Workflow, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "AI Development",
    desc: "LLM-powered features, custom agents, RAG pipelines, and AI-native product experiences built to scale.",
    tags: ["OpenAI", "Claude", "Vector DB"],
    gradient: "from-nebula-500 to-cosmic-500",
    iconColor: "text-nebula-300",
    glow: "rgba(99,102,241,0.35)",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    desc: "Multi-tenant platforms, dashboards, and internal tooling engineered with clean architecture and solid DX.",
    tags: ["FastAPI", "Postgres", "Angular"],
    gradient: "from-cosmic-500 to-electric-500",
    iconColor: "text-cosmic-400",
    glow: "rgba(168,85,247,0.35)",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "High-converting marketing sites and web apps — fast, accessible, and obsessively pixel-perfect.",
    tags: ["React", "Next.js", "Vite"],
    gradient: "from-electric-500 to-nebula-500",
    iconColor: "text-electric-400",
    glow: "rgba(56,189,248,0.35)",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Interfaces that feel weightless. Deep craft on motion, typography, and micro-interactions.",
    tags: ["Figma", "Motion", "Systems"],
    gradient: "from-nebula-500 to-electric-500",
    iconColor: "text-nebula-300",
    glow: "rgba(129,141,255,0.35)",
  },
  {
    icon: Workflow,
    title: "Automation",
    desc: "Workflow automation, integrations, and AI-driven processes that quietly compound time savings.",
    tags: ["n8n", "Zapier", "Make"],
    gradient: "from-cosmic-500 to-nebula-500",
    iconColor: "text-cosmic-400",
    glow: "rgba(192,132,252,0.35)",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative section-padding overflow-hidden">
      {/* soft backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-nebula-500/5 blur-[100px]" />
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 glass mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
              What we do
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            Services engineered for{" "}
            <span className="text-gradient">outcomes</span>, not hours.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-6 text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl"
          >
            Full-stack capability end-to-end. Every discipline we offer compounds
            the next — design fuels engineering, engineering sharpens growth.
          </motion.p>
        </div>

        {/* Grid — uniform 3-col layout, equal-height cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-3xl p-7 md:p-8 glass border border-border/60 hover:border-primary/40 transition-all duration-500 ease-premium hover-lift flex flex-col h-full min-h-[320px]"
              >
                {/* Hover glow backdrop */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none`}
                />

                {/* Top row: icon + arrow */}
                <div className="flex items-start justify-between mb-8">
                  <Icon
                    className={`w-10 h-10 ${s.iconColor} transition-transform duration-500 group-hover:scale-110`}
                    strokeWidth={1.5}
                  />
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground/70 group-hover:text-foreground group-hover:rotate-45 transition-all duration-500" />
                </div>

                {/* Title + description */}
                <h3 className="font-display text-2xl font-semibold tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>

                {/* Tags pinned to bottom so every card has identical footer alignment */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full border border-border/70 text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-colors duration-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom hover bar */}
                <div className="absolute left-0 right-0 bottom-0 h-[2px] overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${s.gradient} -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-premium`}
                  />
                </div>
              </motion.div>
            );
          })}

          {/* CTA card — same dimensions as service cards */}
          <motion.div
            custom={services.length}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-3xl p-7 md:p-8 border border-border/60 bg-gradient-to-br from-nebula-500/10 via-cosmic-500/10 to-electric-500/10 flex flex-col h-full min-h-[320px] hover:border-primary/40 transition-colors duration-500"
          >
            <div className="mb-8">
              <Sparkles className="w-10 h-10 text-cosmic-400" strokeWidth={1.5} />
            </div>

            <h3 className="font-display text-2xl font-semibold tracking-tight mb-3">
              Not sure what you need?
            </h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Book a free 20-minute call. We'll map your goals to the shortest
              path to launch — even if that's not us.
            </p>

            <Link
              to="/contact"
              className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group/cta"
            >
              Start the conversation
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </Link>

            {/* deco */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-nebula-500 to-cosmic-500 opacity-20 blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
