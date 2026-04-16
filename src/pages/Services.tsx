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
        <div className="container-custom space-y-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isOdd = i % 2 === 1;
            return (
              <motion.div
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden rounded-[2rem] border border-border/60 glass p-8 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-32 ${
                  isOdd ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Glow */}
                <div className={`absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br ${s.gradient} opacity-10 blur-3xl rounded-full`} />

                <div className={`relative lg:[direction:ltr] ${isOdd ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} p-[1.5px] shadow-[0_0_30px_-8px_rgba(99,102,241,0.5)]`}>
                      <div className="w-full h-full rounded-[15px] bg-background flex items-center justify-center">
                        <Icon className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>

                  <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight mb-4">
                    {s.title}
                  </h2>
                  <p className="text-primary font-medium mb-4">{s.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>

                  <Link
                    to="/contact"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    Let's talk
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                <div className={`relative lg:[direction:ltr] ${isOdd ? "lg:col-start-1" : ""}`}>
                  <div className="rounded-2xl border border-border/60 bg-background/40 p-6 md:p-8">
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono mb-5">
                      What's included
                    </div>
                    <ul className="space-y-3">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm md:text-[15px]">
                          <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </span>
                          <span className="text-foreground/85">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
