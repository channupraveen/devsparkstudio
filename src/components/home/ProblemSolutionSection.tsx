import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProblemSolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    "Hard to customize",
    "Poor user experience",
    "Limited integrations",
    "Weak data insights",
  ];

  const solutions = [
    "Drag & drop builder",
    "Smart logic & conditions",
    "Mobile-first design",
    "Real-time analytics",
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Problem
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Most web development agencies are either too complex or too limited.{" "}
              <span className="underline decoration-gray-300">
                You end up wasting time
              </span>{" "}
              losing responses, or compromising on design.
            </p>
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <motion.li
                  key={problem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  {problem}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Solutions
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              DevSpark gives you{" "}
              <span className="font-semibold text-primary">full control</span> — from
              design to data — without writing a single line of code.
            </p>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <motion.li
                  key={solution}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {solution}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
