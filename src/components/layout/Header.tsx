import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Solutions",
      path: "/services",
      dropdown: [
        { name: "Website Development", path: "/services#web-dev" },
        { name: "SEO Services", path: "/services#seo" },
        { name: "UI/UX Design", path: "/services#design" },
        { name: "Custom Web Apps", path: "/services#apps" },
        { name: "E-commerce", path: "/services#ecommerce" },
      ],
    },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom h-full relative">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0 min-w-[120px]">
            <img 
              src="/headerlogo.png" 
              alt="DevSpark Studio Logo" 
              className="h-28 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-1 transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-soft-lg border border-gray-100 py-2 overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign In
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                Get Started
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                  →
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors mr-4"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 overflow-hidden"
            >
              <div className="space-y-1 bg-white rounded-2xl p-4 shadow-soft-lg border border-gray-100">
                {navLinks.map((link) => (
                  <div key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                        isActive(link.path)
                          ? "bg-gray-900 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-100 space-y-2">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-3 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block"
                  >
                    <button className="w-full px-6 py-3 bg-gray-900 text-white rounded-full font-medium">
                      Get Started →
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;