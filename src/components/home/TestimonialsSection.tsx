import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "DevSpark Studio delivered exactly what we needed. Clean code, fast performance, and excellent communication throughout.",
    author: "Rajesh Sharma",
    role: "Business Owner, Hyderabad",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    quote: "Professional, responsive, and technically excellent. Our hospital management portal runs flawlessly. Highly recommended!",
    author: "Dr. Priya Reddy",
    role: "Medical Director",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    quote: "The team understood our requirements perfectly. Our new website has already increased our leads by 150% in just 2 months.",
    author: "Vikram Patel",
    role: "Startup Founder",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

const whyChooseUs = [
  "Clean & modern UI/UX design",
  "Business-focused development (not just design)",
  "Affordable pricing for startups & SMBs",
  "Fast delivery & clear communication",
  "Long-term technical support",
  "No hidden costs or surprises",
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section ref={ref} id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Why DevSpark Studio?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-4">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Client Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-4">
            Trusted by Businesses
            <br />
            Across India
          </h2>
        </motion.div>

        {/* Avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Rating */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              "{testimonials[activeIndex].quote}"
            </p>
            <p className="font-display text-lg font-semibold text-primary mb-1">
              {testimonials[activeIndex].author}
            </p>
            <p className="text-gray-500 text-sm">
              {testimonials[activeIndex].role}
            </p>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
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
