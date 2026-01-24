import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Features", path: "/services" },
    { label: "Templates", path: "/portfolio" },
    { label: "Use Cases", path: "/services" },
    { label: "Pricing", path: "/contact" },
    { label: "Integrations", path: "/services" },
  ];

  const resources = [
    { label: "Help Center", path: "/contact" },
    { label: "Blog & Guides", path: "/about" },
    { label: "API Docs", path: "/services" },
    { label: "Status Page", path: "/contact" },
    { label: "Community", path: "/contact" },
  ];

  const company = [
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/about" },
    { label: "Partners", path: "/contact" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/footerlogo.png" 
                alt="DevSpark Studio Logo" 
                className="h-32 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Build smarter websites. Create better digital experiences securely, beautifully,
              and with clean code.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:devsparkstudio12@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                devsparkstudio12@gmail.com
              </a>
              <a
                href="tel:+918106775767"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 8106775767
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Kendrapara, Odisha, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} DevSpark Studio. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              to="/privacy"
              className="text-white/40 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-white/40 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-white/40 hover:text-white transition-colors"
            >
              Cookie Settings
            </Link>
            <Link
              to="/security"
              className="text-white/40 hover:text-white transition-colors"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;