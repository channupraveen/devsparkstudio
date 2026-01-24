import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Monitor, Search, Palette, Settings, ShoppingCart, Wrench, ArrowRight, Check } from "lucide-react";

const services = [
  {
    id: "web-dev",
    icon: Monitor,
    title: "High-Performance Website Development",
    subtitle: "Your website is often your first impression",
    description:
      "We design and develop fast, secure, mobile-friendly websites that look professional and perform reliably across all devices.",
    bestFor: ["Startup & business websites", "Service-based companies", "Lead-generation websites"],
    features: [
      "Mobile-first responsive design",
      "Fast loading & optimized performance",
      "Conversion-focused layouts",
      "SEO-friendly structure",
    ],
    outcome: "A professional website that builds trust and drives action.",
    color: "blue",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Built for Sustainable Growth",
    subtitle: "Be discoverable. Grow organically.",
    description:
      "We help businesses build strong SEO foundations so their websites are discoverable, structured properly, and ready to grow organically over time.",
    bestFor: ["Local businesses", "E-commerce stores", "Content websites"],
    features: [
      "Technical SEO setup",
      "Keyword research & page optimization",
      "Clean site architecture",
      "Local SEO (for location-based businesses)",
      "Analytics & tracking setup",
    ],
    outcome: "Better visibility, cleaner structure, long-term growth potential.",
    color: "green",
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design & Branding",
    subtitle: "Design that feels simple & works naturally",
    description:
      "Good design is about clarity, not decoration. We focus on user experience, usability, and clean interfaces that guide users naturally.",
    bestFor: ["Product redesigns", "New product launches", "Brand refreshes"],
    features: [
      "User journey planning",
      "Wireframes & UI designs",
      "Brand-consistent layouts",
      "UX improvement recommendations",
    ],
    outcome: "Clear, intuitive designs that keep users engaged.",
    color: "purple",
  },
  {
    id: "apps",
    icon: Settings,
    title: "Custom Web Application Development",
    subtitle: "When ready-made software doesn't fit",
    description:
      "We build custom web applications designed around your exact business process.",
    bestFor: ["Growing businesses", "Healthcare providers", "Real estate companies"],
    features: [
      "Internal dashboards & admin panels",
      "Healthcare & hospital management tools",
      "Real estate portals & CRMs",
      "SaaS MVPs & internal tools",
    ],
    techStack: ["Angular", "React", "Node.js", "Python (FastAPI)", "PostgreSQL"],
    outcome: "Systems that simplify operations and scale with your business.",
    color: "orange",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Website Development",
    subtitle: "Built for performance & growth",
    description:
      "We build clean, fast, and secure online stores that provide smooth shopping experiences and easy management.",
    bestFor: ["Retail businesses", "D2C brands", "Marketplace startups"],
    features: [
      "Payment gateway integration",
      "Product & inventory management",
      "Mobile-optimized checkout",
      "Secure & scalable architecture",
    ],
    outcome: "A reliable online store ready for growth.",
    color: "pink",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Website Maintenance & Support",
    subtitle: "Ongoing care for your digital assets",
    description:
      "Websites need regular updates, monitoring, and maintenance. We ensure your site stays secure, fast, and up to date.",
    bestFor: ["All website owners", "Businesses without IT teams", "Growing companies"],
    features: [
      "Security updates & monitoring",
      "Performance optimization",
      "Regular backups",
      "Content updates",
      "Priority support",
    ],
    outcome: "Peace of mind with flexible monthly maintenance options.",
    color: "teal",
  },
];

const colorClasses: Record<string, { bg: string; icon: string; border: string; light: string }> = {
  blue: { bg: "bg-blue-500", icon: "text-blue-600", border: "border-blue-200", light: "bg-blue-50" },
  green: { bg: "bg-green-500", icon: "text-green-600", border: "border-green-200", light: "bg-green-50" },
  purple: { bg: "bg-purple-500", icon: "text-purple-600", border: "border-purple-200", light: "bg-purple-50" },
  orange: { bg: "bg-orange-500", icon: "text-orange-600", border: "border-orange-200", light: "bg-orange-50" },
  pink: { bg: "bg-pink-500", icon: "text-pink-600", border: "border-pink-200", light: "bg-pink-50" },
  teal: { bg: "bg-teal-500", icon: "text-teal-600", border: "border-teal-200", light: "bg-teal-50" },
};

const Services = () => {
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
              What We Do
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Services Designed for
              <br />
              <span className="text-gray-400">Long-Term Business Growth</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              We don't just build websites. We create reliable digital systems that help
              businesses operate better, grow faster, and scale smoothly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50/50">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => {
              const colors = colorClasses[service.color];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className={`w-14 h-14 ${colors.light} rounded-2xl flex items-center justify-center mb-6`}>
                      <service.icon className={`w-7 h-7 ${colors.icon}`} />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-3">
                      {service.title}
                    </h2>
                    <p className="text-lg text-accent font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-500 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Best For */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Best For:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.bestFor.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1.5 bg-white rounded-full text-sm text-gray-600 border border-gray-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack if available */}
                    {service.techStack && (
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-700 mb-3">Tech Stack:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.techStack.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1.5 ${colors.light} rounded-full text-sm ${colors.icon} font-medium`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Outcome */}
                    <div className={`p-4 ${colors.light} rounded-xl border ${colors.border}`}>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Outcome:</p>
                      <p className={`${colors.icon} font-medium`}>{service.outcome}</p>
                    </div>
                  </div>

                  {/* Features Card */}
                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <div className="bg-white rounded-3xl p-8 shadow-soft-lg border border-gray-100">
                      <h3 className="font-semibold text-primary mb-6">What You Get:</h3>
                      <ul className="space-y-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className={`w-6 h-6 ${colors.light} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <Check className={`w-4 h-4 ${colors.icon}`} />
                            </div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Build Something Solid?
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              Let's discuss your idea and build a reliable, scalable digital solution together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white border border-gray-200 text-primary rounded-full font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                >
                  Schedule a Free Call
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;