import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Planning",
    description: "Business & goal understanding, requirement analysis, competitor research, technical planning.",
    outcome: "Clear roadmap & scope definition",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & UX",
    description: "UI/UX design in Figma, wireframes & layouts, client feedback & revisions.",
    outcome: "Approved designs ready for development",
  },
  {
    number: "03",
    icon: Code,
    title: "Development & Testing",
    description: "Clean, modular development, regular progress updates, testing across devices & browsers.",
    outcome: "Stable, functional product",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "Production deployment, SEO & analytics setup, knowledge transfer, post-launch support.",
    outcome: "Live product with growth readiness",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Our Simple, Transparent 4-Step Process
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-soft border border-gray-100 hover:shadow-soft-lg transition-all duration-300 h-full">
                  {/* Number Badge */}
                  <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-display font-bold text-lg mb-6">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-gray-600" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Outcome */}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                      Outcome
                    </p>
                    <p className="text-sm font-medium text-accent">
                      {step.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
