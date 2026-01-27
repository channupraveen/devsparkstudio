import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const trustNotes = [
    "Free consultation",
    "No obligation",
    "Clear scope & pricing",
    "Quick response",
  ];

  return (
    <section ref={ref} id="contact-cta" className="section-padding bg-gray-50/50 overflow-hidden">
      <div className="container-custom">
        <div className="relative bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-soft-lg overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-100/20 rounded-full blur-2xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Decorative shapes */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="absolute -top-4 left-1/4 w-6 h-6 bg-green-200 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute top-8 right-1/4 w-4 h-4 bg-pink-200 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-12 left-1/3 w-8 h-8 bg-blue-100 rounded-full"
            />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
            >
              Let's Build Something
              <br />
              <span className="text-accent">That Grows Your Business</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-500 text-lg mb-8"
            >
              Have an idea or need a website? Let's discuss and turn it into reality.
              <br />
              <span className="font-semibold text-primary">No commitment, just a conversation.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Book Free Call
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <a
                href="https://wa.me/918106775767?text=Hi%20DevSpark%20Studio!%20I'm%20interested%20in%20discussing%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#20BD5A] transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact on WhatsApp
                </motion.button>
              </a>
            </motion.div>

            {/* Trust Notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            >
              {trustNotes.map((note) => (
                <div
                  key={note}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <Check className="w-4 h-4 text-accent" />
                  {note}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
