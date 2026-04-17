import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Channu Praveen",
    role: "Founder · Lead Engineer",
    bio: "Full-stack architect. SaaS, distributed systems, AI tooling.",
    img: "/praveen.jpeg",
    linkedin: "https://www.linkedin.com/in/praveen-kumar2001",
  },
  {
    name: "Vishnu Vardhan",
    role: "Full-Stack Developer",
    bio: "Ships polished product UIs end-to-end with taste and speed.",
    img: "/vishnu.jpeg",
  },
  {
    name: "Harish",
    role: "Design Engineer",
    bio: "Lives in the space between Figma and code. Motion obsessive.",
    img: "/harish.jpeg",
  },
  {
    name: "Venkat",
    role: "Backend Engineer",
    bio: "Clean architecture, performance tuning, data-heavy systems.",
    img: "/venkat.jpeg",
  },
];

const TeamSection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="container-custom relative">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 glass mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
              The crew
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            Small team,{" "}
            <span className="text-gradient">loud craft.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl"
          >
            A tightly-knit studio where the person you pitch is the person building.
            No agency layers, no account managers, no ghosting after kickoff.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border/60 glass hover-lift">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1200ms] ease-premium group-hover:scale-[1.05]"
                  />
                  {/* Gradient tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-nebula-500/20 via-transparent to-cosmic-500/20 opacity-60 group-hover:opacity-0 transition-opacity duration-700" />

                  {/* Socials overlay */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} LinkedIn`}
                        className="w-9 h-9 rounded-full glass-strong border border-white/20 flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href="mailto:contact@devsparkstudios.com"
                      aria-label={`Email ${m.name}`}
                      className="w-9 h-9 rounded-full glass-strong border border-white/20 flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{m.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-primary mt-1 font-mono">{m.role}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
