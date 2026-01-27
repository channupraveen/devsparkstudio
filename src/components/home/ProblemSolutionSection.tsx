import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

const ProblemSolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    "Customers calling for every small issue",
    "No online presence or outdated website",
    "No tracking of issues, services, or requests",
    "Manual processes eating up your time",
    "Losing customers to competitors with better websites",
  ];

  const solutions = [
    "QR-based service requests & self-service portals",
    "Modern, professional websites that build trust",
    "Smart ticket management & tracking dashboards",
    "Automated workflows that save hours daily",
    "Conversion-focused design that wins customers",
  ];

  return (
    <section ref={ref} id="problems-we-solve" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Real Problems We Solve
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Stop Losing Time & Money on Outdated Systems
          </h2>
          <p className="text-lg text-gray-500">
            We build smart digital systems like QR-based service requests, ticket management, 
            and business dashboards that save time and money.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-red-50/50 rounded-2xl p-8 border border-red-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">
                Common Problems
              </h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={problem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-green-50/50 rounded-2xl p-8 border border-green-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">
                Our Solutions
              </h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={solution}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Use Case Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 border border-gray-100"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="font-display text-xl lg:text-2xl font-bold text-primary mb-4">
                Perfect for Hotels, Hospitals & Commercial Buildings
              </h3>
              <p className="text-gray-600 mb-6">
                Imagine guests scanning a QR code in their room to request room service, housekeeping, 
                or maintenance — without calling anyone. Staff get instant notifications, managers 
                see real-time dashboards, and you save hours every day.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                Learn how this works
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex-shrink-0 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-soft text-center">
                <p className="text-2xl font-bold text-primary">70%</p>
                <p className="text-xs text-gray-500">Less phone calls</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-soft text-center">
                <p className="text-2xl font-bold text-primary">3x</p>
                <p className="text-xs text-gray-500">Faster response</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-soft text-center">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-gray-500">Request tracking</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-soft text-center">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-xs text-gray-500">Self-service</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
