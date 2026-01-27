import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { ExternalLink, ArrowRight } from "lucide-react";

const categories = ["All", "Web Apps", "E-commerce", "Healthcare", "Real Estate", "SaaS"];

const projects = [
  {
    id: 1,
    title: "Swiss Castle Online",
    category: "E-commerce",
    description:
      "Online cake booking and ordering platform for Swiss Castle Bakery with 32+ outlets across India. Features product catalog, online ordering, and delivery management.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
    tags: ["E-commerce", "Online Ordering", "Cake Booking"],
    type: "E-commerce",
    liveUrl: "https://online.swisscastle.in/",
  },
  {
    id: 2,
    title: "TechFacilityHub",
    category: "SaaS",
    description:
      "Smart facility management platform for hospitals. Complete solution for managing hospital facilities, assets, maintenance, and operations efficiently.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    tags: ["SaaS", "Facility Management", "Healthcare"],
    type: "SaaS",
    liveUrl: "https://www.techfacilityhub.com/",
  },
  {
    id: 3,
    title: "TechFacilityHub Admin",
    category: "SaaS",
    description:
      "SaaS admin portal for hospital maintenance management. Features work order tracking, asset management, preventive maintenance scheduling, and team coordination.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    tags: ["SaaS", "Maintenance", "Admin Portal"],
    type: "SaaS",
    liveUrl: "https://admin.techfacilityhub.com/auth/login",
  },
  {
    id: 4,
    title: "NuShift Connect",
    category: "Healthcare",
    description:
      "Comprehensive hospital management system with multi-department workflow, asset tracking, and real-time analytics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    tags: ["Angular", "FastAPI", "PostgreSQL"],
    type: "Web Apps",
    liveUrl: "https://nushiftconnect.com/",
  },
  {
    id: 5,
    title: "Real Estate Portal",
    category: "Real Estate",
    description:
      "Full-featured property listing platform with advanced search, virtual tours, and agent management.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    type: "Web Apps",
  },
  {
    id: 6,
    title: "E-commerce Dashboard",
    category: "E-commerce",
    description:
      "Admin dashboard for online stores with inventory management, order tracking, and sales analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "TypeScript", "Tailwind"],
    type: "E-commerce",
  },
  {
    id: 7,
    title: "Healthcare CRM",
    category: "Healthcare",
    description:
      "Patient relationship management system with appointment scheduling and medical records.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    tags: ["Angular", "Python", "AWS"],
    type: "Healthcare",
  },
  {
    id: 8,
    title: "SaaS Landing Page",
    category: "SaaS",
    description:
      "High-converting landing page with modern design, animations, and optimized for conversions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "Framer Motion", "SEO"],
    type: "SaaS",
  },
  {
    id: 9,
    title: "Property Management",
    category: "Real Estate",
    description:
      "Complete property management solution for landlords with tenant portal and maintenance tracking.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    type: "Real Estate",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.type === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
              Our Work
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Selected Work
              <br />
              <span className="text-gray-400">& Case Studies</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Each project focuses on real-world use cases, performance, and maintainability.
              From MVPs to enterprise solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50/50">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div
                        className={`absolute inset-0 bg-primary/80 flex items-center justify-center transition-opacity duration-300 ${
                          hoveredProject === project.id ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white text-primary rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
                          >
                            View Project
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <button className="px-6 py-3 bg-white text-primary rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
                            View Project
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-xl font-bold text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* More Projects Coming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-gray-100 max-w-2xl mx-auto">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                More Projects in Progress
              </h3>
              <p className="text-gray-500 mb-6">
                We're constantly working on new and exciting projects. Stay tuned for more
                case studies and portfolio updates.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mx-auto"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;