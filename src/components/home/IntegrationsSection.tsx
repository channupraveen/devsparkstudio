import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  { name: "Angular", icon: "🅰️" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "AWS", icon: "☁️" },
  { name: "Figma", icon: "🎨" },
  { name: "TypeScript", icon: "📘" },
];

const tags = ["Google Sheets", "Slack", "Notion", "Zapier", "CRM & Email Platforms", "+5"];

const IntegrationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gray-50/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Connect with Your
              <br />
              Favorite Tools
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Send responses directly to the tools you already use.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 border border-gray-200 hover:border-gray-300 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <p className="font-display text-4xl font-bold text-primary">50+</p>
                <p className="text-gray-500 text-sm mt-1">Projects Completed</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <p className="font-display text-4xl font-bold text-primary">99%</p>
                <p className="text-gray-500 text-sm mt-1">Uptime</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <p className="font-display text-4xl font-bold text-primary">5+</p>
                <p className="text-gray-500 text-sm mt-1">Countries</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Tech Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="aspect-square bg-white rounded-2xl border border-gray-200 flex flex-col items-center justify-center hover:shadow-soft hover:border-gray-300 transition-all cursor-default group"
                >
                  <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-100/50 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100/50 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
