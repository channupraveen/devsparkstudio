import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    quote: "DevSpark helped us double our form completion rate. Setup took less than 10 minutes.",
    author: "Nicholas Murdock",
    role: "Growth Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    quote: "The team delivered exactly what we needed. Clean code, fast performance, and excellent support.",
    author: "Sarah Chen",
    role: "CTO, TechStart",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    quote: "Professional, responsive, and technically excellent. Our healthcare portal runs flawlessly.",
    author: "Dr. Ramesh Kumar",
    role: "Medical Director",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            Loved by People
            <br />
            Worldwide
          </h2>
        </motion.div>

        {/* Avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`relative transition-all duration-300 ${
                activeIndex === index
                  ? "scale-110 z-10"
                  : "opacity-60 hover:opacity-80"
              }`}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 transition-all duration-300 ${
                  activeIndex === index
                    ? "border-primary shadow-lg"
                    : "border-white shadow"
                }`}
              />
            </button>
          ))}
        </motion.div>

        {/* Active Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-display text-lg font-semibold text-primary mb-2">
              {testimonials[activeIndex].author}
            </p>
            <p className="text-gray-500 text-sm mb-6">
              {testimonials[activeIndex].role}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              "{testimonials[activeIndex].quote}"
            </p>
          </motion.div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {[
            "Direct communication with developers",
            "Founder-led execution",
            "No outsourcing or junior hand-offs",
            "Honest timelines & clear scope",
            "Clean documentation & handover",
            "Long-term technical support",
          ].map((item, index) => (
            <div
              key={item}
              className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <p className="text-sm text-gray-600">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
