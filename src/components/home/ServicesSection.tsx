import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Search, Palette, Settings, ShoppingCart, Wrench } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    description:
      "Fast, secure, mobile-friendly websites that look professional and perform reliably across all devices.",
    features: [
      "Mobile-first responsive design",
      "Fast loading & optimized performance",
      "Conversion-focused layouts",
      "SEO-friendly structure",
    ],
    color: "blue",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Build strong SEO foundations so your websites are discoverable, structured properly, and ready to grow.",
    features: [
      "Technical SEO setup",
      "Keyword research & optimization",
      "Clean site architecture",
      "Analytics & tracking setup",
    ],
    color: "green",
  },
  {
    icon: Palette,
    title: "UI/UX Design & Branding",
    description:
      "Design that's about clarity, not decoration. Focus on user experience and clean interfaces.",
    features: [
      "User journey planning",
      "Wireframes & UI designs",
      "Brand-consistent layouts",
      "UX improvement recommendations",
    ],
    color: "purple",
  },
  {
    icon: Settings,
    title: "Custom Web Applications",
    description:
      "Custom web applications designed around your exact business process when ready-made software doesn't fit.",
    features: [
      "Internal dashboards & admin panels",
      "Healthcare management tools",
      "Real estate portals & CRMs",
      "SaaS MVPs & internal tools",
    ],
    color: "orange",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "Clean, fast, and secure online stores that provide smooth shopping experiences and easy management.",
    features: [
      "Payment gateway integration",
      "Product & inventory management",
      "Mobile-optimized checkout",
      "Secure & scalable architecture",
    ],
    color: "pink",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Regular updates, monitoring, and maintenance to keep your site secure, fast, and up to date.",
    features: [
      "Security updates & monitoring",
      "Performance optimization",
      "Regular backups",
      "Priority support",
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
    <section ref={ref} className="section-padding bg-gray-50/50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Services Designed for Long-Term Business Growth
          </h2>
          <p className="text-lg text-gray-500">
            We don't just build websites. We create reliable digital systems that help
            businesses operate better, grow faster, and scale smoothly.
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
