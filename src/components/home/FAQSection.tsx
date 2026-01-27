import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on scope and complexity. Basic business websites start from ₹30,000 - ₹75,000, while custom SaaS applications and complex platforms are priced based on requirements. We provide a detailed quote after understanding your needs — no hidden costs or surprises.",
  },
  {
    question: "How long does development take?",
    answer:
      "Simple websites take 2–3 weeks. Custom web applications and SaaS platforms typically take 6–12 weeks depending on features and complexity. We always provide realistic timelines and keep you updated throughout.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Absolutely! We regularly work with startups, founders building MVPs, and growing SMBs. We understand budget constraints and offer flexible engagement models. Many of our best client relationships started with small projects.",
  },
  {
    question: "Do you provide maintenance and support after launch?",
    answer:
      "Yes. All projects include a free support period after launch (typically 30 days). We also offer affordable monthly maintenance plans that include security updates, performance monitoring, bug fixes, and priority support.",
  },
  {
    question: "Will my website be SEO-ready and mobile-friendly?",
    answer:
      "Yes. Every website we build is mobile-first, SEO-optimized, and follows Google's best practices. This includes clean code, fast loading times, proper meta tags, and structured data — all included in the base price.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, scalable technologies: Angular, React, and Next.js for frontends; Python FastAPI and Node.js for backends; PostgreSQL and MongoDB for databases. We choose the right stack based on your project requirements.",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "You'll have direct communication with developers (no account managers in between). We use WhatsApp/Email for quick updates, weekly progress calls if needed, and share live preview links so you can see progress in real-time.",
  },
  {
    question: "Can you work with clients outside India?",
    answer:
      "Yes! We work with clients globally. We're flexible with time zones and communication. Payments can be made via international transfers or PayPal for overseas clients.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} id="faq" className="section-padding bg-gray-50/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Everything you need to know about working with DevSpark Studio.
              Can't find what you're looking for?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all"
            >
              Contact Us Directly
            </Link>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-soft"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-primary pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
