import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Portfolio/Work items - can be updated as you complete projects
const portfolioItems = [
  {
    title: "Hospital Operations Portal",
    category: "SaaS / Healthcare",
    description: "Complete hospital management system with ticket tracking, department workflows, and QR-based service requests.",
    status: "In Development",
    technologies: ["Angular", "FastAPI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Hotel Service Management",
    category: "SaaS / Hospitality",
    description: "Guest request system with real-time notifications, staff dashboards, and performance analytics.",
    status: "MVP Ready",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  },
  {
    title: "TechFacilityHub Website",
    category: "Corporate Website",
    description: "Modern facility management company website with service showcase and lead generation.",
    status: "Completed",
    technologies: ["React", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
];

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

const IntegrationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="portfolio" className="section-padding bg-gray-50/50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Projects We're Building
          </h2>
          <p className="text-lg text-gray-500">
            We're currently working with startups and businesses on MVPs, internal tools, 
            and custom websites. Here's what we're building.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === "Completed" 
                      ? "bg-green-100 text-green-700"
                      : item.status === "MVP Ready"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-orange-100 text-orange-700"
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                  {item.category}
                </p>
                <h3 className="font-display text-xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-20"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Technologies & Stats Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
              Technologies We Use
            </h3>
            <p className="text-gray-500 text-lg mb-8">
              Modern, scalable, and maintainable tech stack for every project.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <p className="font-display text-4xl font-bold text-primary">15+</p>
                <p className="text-gray-500 text-sm mt-1">Projects Delivered</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <p className="font-display text-4xl font-bold text-primary">99%</p>
                <p className="text-gray-500 text-sm mt-1">Client Satisfaction</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <p className="font-display text-4xl font-bold text-primary">5+</p>
                <p className="text-gray-500 text-sm mt-1">Industries Served</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Tech Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            <div className="grid grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
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
