import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Palette, Code, Rocket, Check } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "Free consultation to understand your business, goals, and requirements. We ask the right questions to build the right solution.",
    outcome: "Clear project scope & quote",
    duration: "1-2 days",
    color: "blue",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Planning",
    description: "UI/UX design in Figma, wireframes, and user flow planning. You'll see exactly how your project will look before we code.",
    outcome: "Approved designs ready for build",
    duration: "1-2 weeks",
    color: "purple",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "Clean, modular code with regular progress updates. You get live preview links to see your project come to life.",
    outcome: "Stable, tested product",
    duration: "2-8 weeks",
    color: "green",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "Production deployment, SEO setup, analytics integration, and training. Plus ongoing support to keep things running smoothly.",
    outcome: "Live product + peace of mind",
    duration: "Ongoing",
    color: "orange",
  },
];

const colorClasses: Record<string, { bg: string; icon: string; accent: string }> = {
  blue: { bg: "bg-blue-50", icon: "text-blue-600", accent: "bg-blue-500" },
  purple: { bg: "bg-purple-50", icon: "text-purple-600", accent: "bg-purple-500" },
  green: { bg: "bg-green-50", icon: "text-green-600", accent: "bg-green-500" },
  orange: { bg: "bg-orange-50", icon: "text-orange-600", accent: "bg-orange-500" },
};

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="process" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            How We Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Simple, Transparent Process
          </h2>
          <p className="text-lg text-gray-500">
            No surprises, no hidden steps. Here's exactly how we'll work together 
            to bring your project to life.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-soft border border-gray-100 hover:shadow-soft-lg transition-all duration-300 h-full">
                    {/* Number Badge with Icon */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
                        <step.icon className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                      <div className={`w-8 h-8 ${colors.accent} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Outcome */}
                    <div className="pt-4 border-t border-gray-100 space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium text-primary">
                          {step.outcome}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Timeline: {step.duration}
                      </p>
                    </div>
                  </div>

                  {/* Arrow connector - Desktop only */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 w-8 h-0.5 bg-gray-300 z-20">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-gray-300 rotate-45" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            Average project completion: <span className="font-semibold text-primary">4-6 weeks</span> • 
            100% of projects delivered on time
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
