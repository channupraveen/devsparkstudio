import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Code2, Wrench, Search, Globe, Palette } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    description:
      "Fast, modern, mobile-friendly websites built to convert visitors into customers. SEO-ready and designed for growth.",
    features: [
      "Mobile-first responsive design",
      "Fast loading & optimized performance",
      "Conversion-focused layouts",
      "SEO-friendly structure",
    ],
    color: "blue",
  },
  {
    icon: Code2,
    title: "SaaS & Business Applications",
    description:
      "Custom SaaS platforms, dashboards, and internal systems tailored to your business needs. From MVPs to enterprise solutions.",
    features: [
      "Admin panels & dashboards",
      "Ticket management systems",
      "QR-based service requests",
      "Multi-tenant architecture",
    ],
    color: "green",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing updates, performance optimization, and technical support to keep your site secure, fast, and up to date.",
    features: [
      "Regular security updates",
      "Performance monitoring",
      "Bug fixes & enhancements",
      "Priority support",
    ],
    color: "orange",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description:
      "Optimized websites that rank better and load faster. Build a strong SEO foundation for organic growth.",
    features: [
      "Technical SEO setup",
      "Core Web Vitals optimization",
      "Clean site architecture",
      "Analytics & tracking setup",
    ],
    color: "purple",
  },
  {
    icon: Globe,
    title: "E-commerce Development",
    description:
      "Clean, fast, and secure online stores that provide smooth shopping experiences and easy management.",
    features: [
      "Payment gateway integration",
      "Product & inventory management",
      "Mobile-optimized checkout",
      "Secure transactions",
    ],
    color: "pink",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Design that's about clarity, not decoration. Focus on user experience and clean interfaces that convert.",
    features: [
      "User journey planning",
      "Wireframes & prototypes",
      "Brand-consistent layouts",
      "Figma design handoff",
    ],
    color: "teal",
  },
];

const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
  blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-100" },
  green: { bg: "bg-green-50", icon: "text-green-600", border: "border-green-100" },
  purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-100" },
  orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-100" },
  pink: { bg: "bg-pink-50", icon: "text-pink-600", border: "border-pink-100" },
  teal: { bg: "bg-teal-50", icon: "text-teal-600", border: "border-teal-100" },
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="services" className="section-padding bg-gray-50/50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Everything You Need to Grow Online
          </h2>
          <p className="text-lg text-gray-500">
            From simple websites to complex business systems — we deliver solutions 
            that drive real results for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className={`w-1 h-1 rounded-full ${colors.icon.replace('text', 'bg')} mt-2 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
