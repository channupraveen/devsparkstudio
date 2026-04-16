import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Website Development", path: "/services" },
    { label: "SaaS & Web Apps", path: "/services" },
    { label: "AI & Automation", path: "/services" },
    { label: "UI/UX Design", path: "/services" },
    { label: "SEO & Performance", path: "/services" },
  ];

  const company = [
    { label: "About", path: "/about" },
    { label: "Work", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
  ];

  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/devspark-studios", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/918106775767", label: "WhatsApp" },
    { icon: Instagram, href: "https://instagram.com/devsparkstudio", label: "Instagram" },
    { icon: Github, href: "https://github.com/devsparkstudio", label: "GitHub" },
  ];

  return (
    <footer className="relative mt-24 border-t border-border/50 overflow-hidden">
      {/* Aurora backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-nebula-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-cosmic-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative container-custom py-20">
        {/* Giant wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 glass mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">Let's build something legendary</span>
          </div>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-semibold leading-none tracking-tight">
            <span className="text-gradient">DevSpark</span>
            <span className="text-foreground/90"> Studio</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left: brand + contact */}
          <div className="md:col-span-5 space-y-6">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              A premium digital agency building intelligent products, immersive web experiences,
              and scalable SaaS platforms for ambitious teams worldwide.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:devsparkstudio12@gmail.com"
                className="group inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="w-8 h-8 rounded-lg border border-border/60 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                devsparkstudio12@gmail.com
              </a>
              <a
                href="tel:+918106775767"
                className="group inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="w-8 h-8 rounded-lg border border-border/60 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                +91 8106 775 767
              </a>
              <div className="inline-flex items-center gap-3 text-sm text-muted-foreground">
                <span className="w-8 h-8 rounded-lg border border-border/60 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                Hyderabad · India
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.path}
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {s.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Studio</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    to={c.path}
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {c.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Social</h4>
            <div className="grid grid-cols-2 gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-lg border border-border/60 glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <p>© {currentYear} DevSpark Studio · All systems nominal.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
