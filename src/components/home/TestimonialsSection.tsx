import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The team moved faster than any agency we've worked with. Three weeks from kickoff to launch, and the product just works.",
    name: "Aarav Mehta",
    role: "Founder, Healthspan Clinics",
  },
  {
    quote: "The level of craft on motion and interactions is rare. Our conversion jumped 34% after the rebuild.",
    name: "Priya Nair",
    role: "Head of Growth, Oryza Studio",
  },
  {
    quote: "Honest scoping, zero surprise invoices, and they still picked up calls six months post-launch. Top tier.",
    name: "Rahul Iyer",
    role: "CTO, Stackforge",
  },
  {
    quote: "They rebuilt our platform from the ground up. The architecture is clean, the UI is gorgeous, and it's blazing fast.",
    name: "Sneha Reddy",
    role: "Product Lead, Finpulse",
  },
  {
    quote: "Direct access to the developers. No middlemen. No briefs lost in translation. Exactly how I want to work.",
    name: "Arjun Varma",
    role: "Founder, NovaForge",
  },
  {
    quote: "Best design-engineering team I've hired. The motion details alone were worth the investment.",
    name: "Ananya Kapoor",
    role: "Marketing Director, Lumenhaus",
  },
];

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="group relative flex-shrink-0 w-[300px] sm:w-[360px] md:w-[420px] p-6 sm:p-7 md:p-8 mr-4 sm:mr-5 rounded-3xl glass border border-border/60 hover:border-primary/40 transition-all duration-500">
    <Quote className="w-8 h-8 text-primary/40 mb-4" />
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-foreground/90 text-[15px] leading-relaxed mb-6">"{t.quote}"</p>
    <div className="pt-4 border-t border-border/50">
      <div className="font-medium text-foreground text-sm">{t.name}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  // Duplicate for seamless loop
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="container-custom relative">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 glass mb-6"
          >
            <Star className="w-3.5 h-3.5 text-primary fill-primary" />
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Clients say
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            Trusted by teams who <span className="text-gradient">ship fast.</span>
          </motion.h2>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="marquee-mask space-y-6">
        <div className="flex animate-marquee" style={{ animationDuration: "45s" }}>
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
        <div className="flex animate-marquee" style={{ animationDuration: "50s", animationDirection: "reverse" as const }}>
          {row2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
