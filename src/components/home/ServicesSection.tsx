import { motion } from "framer-motion";
import { Brain, Cloud, Code2, Palette, Workflow, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "AI Development",
    desc: "LLM-powered features, custom agents, RAG pipelines, and AI-native product experiences built to scale.",
    tags: ["OpenAI", "Claude", "Vector DB"],
    color: "from-nebula-500 to-cosmic-500",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    desc: "Multi-tenant platforms, dashboards, and internal tooling engineered with clean architecture and solid DX.",
    tags: ["FastAPI", "Postgres", "Angular"],
    color: "from-cosmic-500 to-electric-500",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "High-converting marketing sites and web apps — fast, accessible, and obsessively pixel-perfect.",
    tags: ["React", "Next.js", "Vite"],
    color: "from-electric-500 to-nebula-500",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Interfaces that feel weightless. Deep craft on motion, typography, and micro-interactions.",
    tags: ["Figma", "Motion", "Systems"],
    color: "from-nebula-500 to-electric-500",
  },
  {
    icon: Workflow,
    title: "Automation",
    desc: "Workflow automation, integrations, and AI-driven processes that quietly compound time savings.",
    tags: ["n8n", "Zapier", "Make"],
    color: "from-cosmic-500 to-nebula-500",
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
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            Services engineered for{" "}
            <span className="text-gradient">outcomes</span>, not hours.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl"
          >
            Full-stack capability end-to-end. Every discipline we offer compounds
            the next — design fuels engineering, engineering sharpens growth.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                className={`group relative overflow-hidden rounded-3xl p-8 glass border border-border/60 hover:border-primary/40 transition-all duration-500 ease-premium hover-lift ${
                  i === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
                }`}
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none`}
                />

                {/* Top row */}
                <div className="flex items-start justify-between mb-12">
                  <div className="relative">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} p-[1.5px] shadow-[0_0_30px_-8px_rgba(99,102,241,0.6)] group-hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.7)] transition-all duration-500`}
                    >
                      <div className="w-full h-full rounded-[15px] bg-background/90 flex items-center justify-center group-hover:bg-background/70 transition-colors">
                        <Icon className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                    {/* Orbit dot */}
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all duration-500" />
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mb-8">
                  {s.desc}
                </p>

                <div className="flex flex-wrap gap-2">
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
                    className={`h-full bg-gradient-to-r ${s.color} -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-premium`}
                  />
                </div>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div
            custom={services.length}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="relative overflow-hidden rounded-3xl p-8 border border-border/60 bg-gradient-to-br from-nebula-500/10 via-cosmic-500/10 to-electric-500/10 flex flex-col justify-between min-h-[260px]"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight mb-3">
                Not sure what you need?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Book a free 20-minute call. We'll map your goals to the shortest
                path to launch — even if that's not us.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group/cta"
            >
              Start the conversation
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </Link>
            {/* deco */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-nebula-500 to-cosmic-500 opacity-20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
