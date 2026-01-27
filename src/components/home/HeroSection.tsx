import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Hospital, ShoppingBag, Rocket, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Rotating words for the headline animation
const rotatingWords = [
  "Websites",
  "Apps",
  "Platforms",
  "Dashboards",
  "Systems",
];

// Hero images that will rotate
const heroImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=700&fit=crop",
    alt: "Dashboard analytics",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=700&fit=crop",
    alt: "Analytics dashboard",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=700&fit=crop",
    alt: "Mobile app interface",
  },
];

// Industries we serve
const industries = [
  { icon: Building2, name: "Hotels & Resorts" },
  { icon: Hospital, name: "Hospitals & Clinics" },
  { icon: ShoppingBag, name: "Malls & Retail" },
  { icon: Rocket, name: "Startups & SaaS" },
  { icon: Users, name: "SMBs" },
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Word rotation effect
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-50/80 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-50/60 rounded-full blur-3xl translate-x-1/3" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-[1.1] tracking-tight"
            >
              We Build High-Converting
              <br />
              <span className="inline-block relative min-w-[280px] sm:min-w-[320px] lg:min-w-[400px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.25, 0.46, 0.45, 0.94] 
                    }}
                    className="inline-block text-green-500"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              for Growing Businesses
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Custom websites, SaaS platforms, and business systems that help companies 
              get more <span className="text-primary font-semibold">leads</span>, <span className="text-primary font-semibold">customers</span>, and <span className="text-primary font-semibold">growth</span>.
            </motion.p>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-500"
            >
              📍 Hyderabad, India • 🌍 Working with clients globally
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Get a Free Consultation
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-primary rounded-full font-semibold text-base hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2"
                >
                  View Our Work
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Phone Mockup with Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Background decorative shapes */}
            <div className="absolute -top-10 left-10 w-40 h-40 bg-blue-100/60 rounded-[2rem] rotate-12 animate-float" />
            <div className="absolute -bottom-5 right-10 w-32 h-32 bg-green-100/60 rounded-[1.5rem] -rotate-12 animate-float animation-delay-2000" />

            {/* Phone Frame */}
            <div className="relative z-10">
              {/* Phone outer shell */}
              <div 
                className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl"
                style={{ 
                  width: '320px',
                  transform: 'rotate(-5deg)',
                  transition: 'transform 0.5s ease'
                }}
              >
                {/* Phone notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full z-20" />
                
                {/* Phone screen */}
                <div 
                  className="relative bg-white rounded-[2.5rem] overflow-hidden"
                  style={{ height: '580px' }}
                >
                  {/* Screen content - rotating images */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={heroImages[currentImageIndex].src}
                      alt={heroImages[currentImageIndex].alt}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* Floating UI Card - Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-16 -left-32 bg-white rounded-xl shadow-lg p-3 w-40 border border-gray-100"
              >
                <div className="text-[10px] text-gray-400 mb-1">Website Traffic</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-gray-900">4,567</span>
                  <span className="text-[10px] text-green-500">+127%</span>
                </div>
                <div className="mt-2 flex gap-1">
                  {[40, 65, 45, 80, 55, 70, 60].map((h, i) => (
                    <div 
                      key={i} 
                      className="w-3 bg-blue-100 rounded-sm" 
                      style={{ height: `${h * 0.3}px` }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating UI Card - Right Top */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute top-24 -right-24 bg-white rounded-xl shadow-lg p-3 w-36 border border-gray-100"
              >
                <div className="text-[10px] text-gray-400 mb-1">New Leads</div>
                <div className="text-lg font-bold text-gray-900">+89</div>
                <div className="mt-1 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-green-500 rounded-full" />
                </div>
              </motion.div>

              {/* Floating UI Card - Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-8 -left-20 bg-white rounded-xl shadow-lg p-3 w-44 border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-xs">✅</div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Conversions</div>
                    <div className="text-[10px] text-gray-400">+215 this month</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[9px]">Leads</span>
                  <span className="px-2 py-0.5 bg-green-50 text-green-600 rounded text-[9px]">Sales</span>
                  <span className="px-2 py-0.5 bg-purple-50 text-purple-600 rounded text-[9px]">Growth</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Built For Section - Industries */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 lg:mt-32"
        >
          <p className="text-center text-sm font-semibold text-primary uppercase tracking-wider mb-8">
            Built for Businesses That Want Results
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors cursor-default"
              >
                <industry.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-gray-600">{industry.name}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            className="text-center text-gray-400 text-sm mt-6"
          >
            Whether you're offline or online — we help you go digital the right way.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
