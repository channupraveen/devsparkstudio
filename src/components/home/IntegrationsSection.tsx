import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Hospital CMMS Platform",
    category: "SaaS · Healthcare",
    year: "2026",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
    tags: ["Angular", "FastAPI", "Postgres"],
    gradient: "from-nebula-500/30 to-cosmic-500/30",
  },
  {
    title: "SwarmAI Distributed Runtime",
    category: "AI Infrastructure",
    year: "2026",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=800&fit=crop",
    tags: ["Python", "FastAPI", "Ollama"],
    gradient: "from-cosmic-500/30 to-electric-500/30",
  },
  {
    title: "V-OnePrep Aviation Training",
    category: "Web Experience",
    year: "2025",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=800&fit=crop",
    tags: ["Next.js", "Tailwind", "Framer"],
    gradient: "from-electric-500/30 to-nebula-500/30",
  },
  {
    title: "Hotel Guest Experience Platform",
    category: "SaaS · Hospitality",
    year: "2025",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
    tags: ["React", "QR Flow", "Realtime"],
    gradient: "from-nebula-500/30 to-electric-500/30",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative section-padding overflow-hidden">
      <div className="container-custom relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 glass mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                Selected work
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight"
              >
              Case studies from <span className="text-gradient">the field.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-border/60 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 text-sm font-medium"
            >
              All work <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-3xl border border-border/60 glass hover-lift ${
                i % 3 === 0 ? "md:translate-y-0" : i % 3 === 1 ? "md:translate-y-8" : "md:translate-y-4"
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.06]"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.gradient} mix-blend-overlay opacity-70 group-hover:opacity-40 transition-opacity duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />

                {/* Arrow */}
                <div className="absolute top-5 right-5 w-11 h-11 rounded-full glass border border-white/20 flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Meta */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {p.category}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">{p.year}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-4 group-hover:text-gradient transition-all duration-500">
                  {p.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] rounded-full border border-border/70 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
