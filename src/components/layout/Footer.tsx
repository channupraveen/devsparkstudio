import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Website Development", path: "/services" },
    { label: "SaaS & Web Apps", path: "/services" },
    { label: "E-commerce", path: "/services" },
    { label: "UI/UX Design", path: "/services" },
    { label: "SEO & Performance", path: "/services" },
  ];

  const industries = [
    { label: "Hotels & Resorts", path: "/services" },
    { label: "Hospitals & Clinics", path: "/services" },
    { label: "Malls & Retail", path: "/services" },
    { label: "Startups & SaaS", path: "/services" },
    { label: "Small Businesses", path: "/services" },
  ];

  const company = [
    { label: "About Us", path: "/about" },
    { label: "Our Work", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
    { label: "Blog", path: "/about" },
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
                alt="DevSpark Studio - Web Development Agency Hyderabad" 
                className="h-32 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              We build high-converting websites, SaaS platforms, and business systems 
              for hotels, hospitals, and growing businesses. Based in Hyderabad, India.
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
                Hyderabad, Telangana, India
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
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

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Industries</h4>
            <ul className="space-y-3">
              {industries.map((link) => (
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

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/devspark-studios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0077B5] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/918106775767"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#25D366] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/devsparkstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#E4405F] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/devsparkstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View our GitHub"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Quick CTA */}
            <div className="mt-6">
              <a
                href="https://wa.me/918106775767?text=Hi%20DevSpark%20Studio!%20I'm%20interested%20in%20discussing%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-sm font-medium rounded-full hover:bg-[#20BD5A] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} DevSpark Studio. All rights reserved. Made with ❤️ in Hyderabad, India.
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
