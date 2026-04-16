import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Check, ArrowUpRight, Linkedin, Sparkles } from "lucide-react";

const values = [
  { title: "Fixed Pricing", description: "No surprises. Clear scope and pricing from day one." },
  { title: "Source-Code Ownership", description: "You own everything we build. No lock-ins or hidden fees." },
  { title: "Developer Access", description: "Talk directly to the people building your product." },
  { title: "No Hidden Costs", description: "Transparent pricing with no surprise charges, ever." },
];

const stats = [
  { n: "40+", l: "Projects shipped" },
  { n: "8+", l: "Years combined" },
  { n: "12", l: "Industries" },
  { n: "4.9★", l: "Avg. rating" },
];

const industries = ["Healthcare", "Hospitality", "Real Estate", "E-commerce", "Startups", "SaaS", "Retail", "Aviation"];

const team = [
  {
    name: "Channu Praveen Kumar",
    role: "Founder · Lead Developer",
    description: "Full-stack architect. Scalable web apps across healthcare, real estate, and SaaS.",
    skills: ["Angular", "FastAPI", "System Design"],
    avatar: "/praveen.jpeg",
    linkedin: "https://www.linkedin.com/in/praveen-kumar2001",
  },
  {
    name: "Vishnu Vardhan",
    role: "Full Stack Developer",
    description: "Angular + Python. Clean frontends and robust backend APIs shipped at speed.",
    skills: ["Angular", "Python", "REST APIs"],
    avatar: "/vishnu.jpeg",
    linkedin: "https://www.linkedin.com/in/vishnu-badeti-18644421b",
  },
  {
    name: "Venkatesh",
    role: "Product Manager",
    description: "Strategy and roadmap. Translates business goals into shippable technical plans.",
    skills: ["Product", "Agile", "UX"],
    avatar: "/venkat.jpeg",
    linkedin: "https://www.linkedin.com/in/godugu-venkatesh-b06a16362",
  },
  {
    name: "Hari",
    role: "Growth & SEO Lead",
    description: "SEO, analytics, and content strategy that compound into organic growth.",
    skills: ["SEO", "Analytics", "Content"],
    avatar: "/harish.jpeg",
    linkedin: "https://www.linkedin.com/in/harish-madigela",
  },
];

const About = () => {
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
                Studio
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.02] tracking-tight">
              Built by engineers,
              <br />
              <span className="text-gradient">not sales teams.</span>
            </h1>
            <p className="mt-8 text-muted-foreground text-lg max-w-2xl leading-relaxed">
              DevSpark Studio is founded and run by developers who enjoy building real products.
              Every project is handled with care, clarity, and technical responsibility —
              no account managers, no middlemen, no ghosting.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl glass border border-border/60 p-6">
                <div className="font-display text-4xl font-semibold text-foreground">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-16 max-w-2xl"
          >
            What we believe in — <span className="text-gradient">out loud.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-7 rounded-2xl glass border border-border/60 hover:border-primary/40 hover-lift transition-all duration-500"
              >
                <div className="font-mono text-xs text-primary mb-4">0{i + 1}</div>
                <h3 className="font-display text-xl font-semibold tracking-tight mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Compact benefits/industries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 rounded-3xl glass border border-border/60 p-8 md:p-12 grid md:grid-cols-2 gap-10"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight mb-6">
                What sets us apart
              </h3>
              <ul className="space-y-3.5">
                {[
                  "Senior developer-led projects",
                  "Clean, scalable, future-ready code",
                  "SEO and performance from day one",
                  "Transparent process, honest timelines",
                  "Post-launch support included",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-foreground/85 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight mb-6">
                Industries we work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="px-3.5 py-1.5 rounded-full border border-border/70 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="relative section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 glass mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                The team
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Meet the people behind <span className="text-gradient">the craft.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-3xl border border-border/60 glass overflow-hidden hover-lift"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={m.avatar}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1200ms] ease-premium group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} LinkedIn`}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full glass-strong border border-white/20 flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{m.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-primary mt-1 font-mono">{m.role}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {m.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 text-[11px] rounded-full border border-border/60 text-muted-foreground">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
            <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Ready to start building?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                Tell us what you have in mind. We'll reply in under a business day.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-medium text-sm btn-shimmer shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)] hover:shadow-[0_0_50px_-5px_rgba(168,85,247,0.7)] transition-shadow duration-500"
              >
                Get in touch <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
