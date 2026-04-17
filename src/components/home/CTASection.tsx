import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { ArrowUpRight, Sparkles, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CTASection = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast.success("Message received! We'll respond within 24 hours.");
      setFormData({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 900);
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="container-custom relative">
        <div className="relative rounded-[2rem] overflow-hidden border border-border/60">
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-nebula-500/10 via-cosmic-500/10 to-electric-500/10" />
          <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-nebula-500/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cosmic-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

          <div className="relative p-6 sm:p-8 md:p-14 lg:p-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/5 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium tracking-wider uppercase text-primary">
                  Let's talk
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.02] tracking-tight">
                Got an idea?
                <br />
                <span className="text-gradient">Let's launch it.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
                Tell us what you're building. We reply within one business day — no funnel,
                no gatekeeping, just a real conversation.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-wrap items-start gap-6 sm:gap-8 text-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1 font-mono">Email</div>
                  <a href="mailto:contact@devsparkstudios.com" className="text-foreground hover:text-primary transition-colors">
                    contact@devsparkstudios.com
                  </a>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1 font-mono">Phone</div>
                  <a href="tel:+918106775767" className="text-foreground hover:text-primary transition-colors">
                    +91 8106 775 767
                  </a>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground group"
                >
                  Full contact page
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>

            {/* Right form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative glass-strong rounded-2xl p-6 md:p-8 border border-border/60 space-y-5"
            >
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono">
                  Your name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full bg-transparent border-0 border-b border-border/70 focus:border-primary focus:outline-none py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors duration-300 focus:shadow-[0_1px_0_0_hsl(var(--primary))]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full bg-transparent border-0 border-b border-border/70 focus:border-primary focus:outline-none py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors duration-300"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono">
                  Tell us about your project
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="We're building..."
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-border/70 focus:border-primary focus:outline-none py-3 text-base text-foreground placeholder:text-muted-foreground/60 resize-none transition-colors duration-300"
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-foreground text-background font-medium text-sm overflow-hidden btn-shimmer shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)] hover:shadow-[0_0_50px_-5px_rgba(168,85,247,0.7)] transition-shadow duration-500 disabled:opacity-50"
              >
                <span className="relative z-10">{submitting ? "Sending..." : "Send message"}</span>
                <Send className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </motion.button>

              <p className="text-[11px] text-muted-foreground text-center font-mono">
                🔒 Your info stays with us. Always.
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
