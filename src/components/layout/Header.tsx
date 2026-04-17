import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Solutions",
    path: "/services",
    dropdown: [
      { name: "Website Development", path: "/services#web-dev", desc: "Fast, conversion-focused sites" },
      { name: "SaaS & Web Apps", path: "/services#apps", desc: "Custom platforms & dashboards" },
      { name: "UI/UX Design", path: "/services#design", desc: "Pixel-perfect interfaces" },
      { name: "AI & Automation", path: "/services#ai", desc: "Intelligent workflows" },
      { name: "SEO & Performance", path: "/services#seo", desc: "Speed + organic growth" },
    ],
  },
  { name: "Work", path: "/portfolio" },
  { name: "Studio", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsScrolled(scrolled > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleDropdownClick = (path: string) => {
    setActiveDropdown(null);
    const [basePath, hash] = path.split("#");
    if (location.pathname === basePath && hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(path);
    }
  };

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container-custom">
          <div
            className={`relative flex items-center justify-between gap-6 rounded-full transition-all duration-500 ${
              isScrolled
                ? "glass-strong px-4 py-2 shadow-[0_8px_40px_-12px_rgba(99,102,241,0.25)]"
                : "px-4 py-2"
            }`}
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group flex-shrink-0"
              aria-label="DevSpark Studio home"
            >
              <img
                src="/headerlogo.png"
                alt="DevSpark Studio"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-[0_0_28px_-10px_rgba(99,102,241,0.85)]"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors duration-300 ${
                      isActive(link.path)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive(link.path) && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-foreground/5 border border-border/50 rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.name}</span>
                    {link.dropdown && (
                      <ChevronDown
                        className={`relative w-3.5 h-3.5 transition-transform duration-300 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 mt-3 w-80 glass-strong rounded-2xl p-2 shadow-[0_20px_60px_-10px_rgba(99,102,241,0.2)]"
                      >
                        {link.dropdown.map((item) => (
                          <button
                            key={item.path}
                            onClick={() => handleDropdownClick(item.path)}
                            className="group w-full text-left p-3 rounded-xl hover:bg-foreground/5 transition-colors flex items-start gap-3"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-nebula-500/20 to-cosmic-500/20 border border-border/50 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:border-primary/50 transition-colors">
                              <ArrowUpRight className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-foreground">{item.name}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 btn-shimmer shadow-[0_0_30px_-10px_rgba(99,102,241,0.5)]"
              >
                Get Started
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                className="lg:hidden w-10 h-10 rounded-full glass border border-border/60 flex items-center justify-center"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Scroll progress bar */}
          <div className="absolute left-4 right-4 -bottom-[1px] h-[1px] overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-nebula-500 via-cosmic-500 to-electric-500 transition-[width] duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden bg-background/95 backdrop-blur-xl pt-24 pb-8 px-6 overflow-y-auto"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
              className="flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-4 border-b border-border/50 font-display text-2xl font-medium transition-colors ${
                      isActive(link.path) ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                    <ArrowUpRight className="w-5 h-5 opacity-60" />
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 py-2 space-y-1 border-b border-border/50">
                      {link.dropdown.map((item) => (
                        <button
                          key={item.path}
                          onClick={() => {
                            handleDropdownClick(item.path);
                            setIsMobileMenuOpen(false);
                          }}
                          className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                }}
                className="mt-8 flex items-center justify-end"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium"
                >
                  Get Started <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
