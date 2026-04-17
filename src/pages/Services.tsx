import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import {
  Brain,
  Cloud,
  Code2,
  Palette,
  Workflow,
  TrendingUp,
  ShoppingBag,
  ArrowUpRight,
  Sparkles,
  Check,
} from "lucide-react";

const services = [
  {
    id: "web-dev",
    icon: Code2,
    title: "Website Development",
    tagline: "Fast, elegant, conversion-focused.",
    description:
      "Marketing sites and business websites engineered for speed, SEO, and polish. Every pixel intentional, every interaction smooth.",
    features: [
      "Sub-second load times",
      "95+ Lighthouse scores",
      "SEO-ready architecture",
      "Mobile-first responsive design",
      "CMS integration (Sanity/Strapi/WP)",
    ],
    gradient: "from-nebula-500 to-cosmic-500",
  },
  {
    id: "apps",
    icon: Cloud,
    title: "SaaS & Web Apps",
    tagline: "Custom platforms built to scale.",
    description:
      "Multi-tenant SaaS, internal dashboards, and complex web applications engineered with clean architecture and real-world performance.",
    features: [
      "Multi-tenant architecture",
      "Typed end-to-end (TypeScript)",
      "Auth, billing, roles out of the box",
      "Real-time features (WebSockets)",
      "Production-grade DevOps",
    ],
    gradient: "from-cosmic-500 to-electric-500",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Automation",
    tagline: "Intelligent workflows that compound.",
    description:
      "LLM-powered features, custom agents, RAG pipelines, and automation that quietly save hours every week.",
    features: [
      "LLM integration (OpenAI, Claude)",
      "RAG & vector search",
      "Custom AI agents",
      "Workflow automation",
      "Data pipelines",
    ],
    gradient: "from-electric-500 to-nebula-500",
  },
  {
    id: "seo-optimization",
    icon: TrendingUp,
    title: "SEO Optimization",
    tagline: "Organic growth, simplified.",
    description:
      "Technical SEO, on-page optimization, and strategic content planning that drives qualified organic traffic and boosts your search rankings.",
    features: [
      "Technical SEO audit",
      "Keyword research & strategy",
      "On-page optimization",
      "Core Web Vitals improvement",
      "Monthly SEO reporting",
    ],
    gradient: "from-cosmic-500 to-electric-500",
  },
  {
    id: "design",
    icon: Palette,
    title: "UI / UX Design",
    tagline: "Interfaces with soul.",
    description:
      "Design systems, motion, and pixel-perfect interfaces. We think in states, transitions, and micro-interactions.",
    features: [
      "Research-led discovery",
      "Design systems & tokens",
      "Motion & micro-interactions",
      "Accessibility (WCAG AA)",
      "Prototype-to-code handoff",
    ],
    gradient: "from-nebula-500 to-electric-500",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce",
    tagline: "Stores that actually convert.",
    description:
      "Custom storefronts, Shopify builds, and headless commerce engineered around the full purchase journey.",
    features: [
      "Custom storefronts",
      "Shopify & Shopify Plus",
      "Headless commerce (Next.js)",
      "Payment integrations",
      "Inventory & analytics",
    ],
    gradient: "from-cosmic-500 to-nebula-500",
  },
  {
    id: "seo",
    icon: TrendingUp,
    title: "SEO & Performance",
    tagline: "Organic traffic, compounding.",
    description:
      "Technical SEO audits, on-page optimization, and Core Web Vitals work that drives real rank improvements.",
    features: [
      "Technical SEO audit",
      "Core Web Vitals optimization",
      "Schema & structured data",
      "Content strategy",
      "Monthly reporting",
    ],
    gradient: "from-nebula-500 to-cosmic-500",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Automation Solutions",
    tagline: "Less busywork, more output.",
    description:
      "Workflow automation, third-party integrations, and internal tooling that removes repetitive work from your team.",
    features: [
      "Zapier / n8n / Make",
      "API integrations",
      "Internal admin tools",
      "Data sync & ETL",
      "Custom webhooks",
    ],
    gradient: "from-electric-500 to-cosmic-500",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60 pointer-events-none" />
        <div className="aurora-bg" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 glass mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                Services
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.02] tracking-tight">
              What we <span className="text-gradient">actually do.</span>
            </h1>
            <p className="mt-8 text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Seven disciplines. One opinionated team. Pick what you need, or let
              us help you figure it out — we'll tell you honestly if you don't
              need all of them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service blocks */}
      <section className="relative py-8 md:py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
                  className="relative overflow-hidden rounded-3xl border border-border/80 glass hover:border-primary/40 transition-colors duration-300 p-8 md:p-10 flex flex-col scroll-mt-32 min-h-full"
                >
                  {/* Glow - Enhanced */}
                  <div className={`absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br ${s.gradient} opacity-15 blur-3xl rounded-full pointer-events-none`} />

                  <div className="relative flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} p-[2px] shadow-[0_0_40px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_0_50px_-5px_rgba(99,102,241,0.8)] transition-shadow duration-300`}>
                          <div className="w-full h-full rounded-[16px] bg-background flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary font-bold">
                          0{i + 1}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl md:text-3xl font-bold leading-[1.15] tracking-tight mb-2">
                        {s.title}
                      </h3>
                      <p className="text-primary font-semibold text-sm mb-3">{s.tagline}</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {s.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/50 flex-1">
                      <div className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-4">
                        What's included
                      </div>
                      <ul className="space-y-2.5">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-xs md:text-sm">
                            <span className="w-4 h-4 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-primary" />
                            </span>
                            <span className="text-foreground/85 leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/contact"
                      className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-primary transition-colors duration-300"
                    >
                      Let's talk
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2rem] overflow-hidden border border-border/60 p-12 md:p-16 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-nebula-500/15 via-cosmic-500/10 to-electric-500/15" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Not sure which service you need?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                Book a 20-minute call. We'll scope the right package — or send you somewhere better.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-medium text-sm btn-shimmer shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)]"
              >
                Book a call <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
