import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Check, ArrowRight, Mail, Building2, Globe, Code2 } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Fixed Pricing",
    description: "No surprises. Clear scope and pricing from day one.",
  },
  {
    icon: Building2,
    title: "Full Source-Code Ownership",
    description: "You own everything we build. No lock-ins or hidden fees.",
  },
  {
    icon: Mail,
    title: "Direct Access to Developers",
    description: "Talk directly to the people building your product.",
  },
  {
    icon: Globe,
    title: "No Hidden Costs",
    description: "Transparent pricing with no surprise charges.",
  },
];

const industries = [
  "Healthcare",
  "Real Estate",
  "E-commerce",
  "Startups",
  "SaaS",
  "Service Businesses",
];

const team = [
  {
    name: "Channu Praveen Kumar",
    role: "Founder & Lead Developer",
    description:
      "Hands-on developer with experience building scalable web applications for healthcare, real estate, and business platforms. Focused on clean architecture and long-term maintainability.",
    skills: ["Angular", "TypeScript", "System Design"],
    email: "praveen@devsparkstudio.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Govaradhan",
    role: "Senior Full Stack Developer",
    description:
      "Specializes in React, Node.js, and API-driven systems. Experienced in building performance-focused web applications.",
    skills: ["React", "Node.js", "Backend APIs"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Hari",
    role: "Digital Marketing Lead",
    description:
      "Focuses on SEO strategy, website optimization, and content-driven growth.",
    skills: ["SEO", "Analytics", "Content Strategy"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Veena Kalluri",
    role: "UI/UX Developer",
    description:
      "Designs intuitive user interfaces that improve usability and engagement.",
    skills: ["UI/UX", "Figma", "User Research"],
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img 
                src="/logo.png" 
                alt="DevSpark Studio" 
                className="h-20 w-auto mx-auto object-contain"
              />
            </motion.div>
            
            <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Built by Engineers,
              <br />
              <span className="text-gray-400">Not Sales Teams</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              DevSpark Studio is founded and run by developers who enjoy building real products.
              Every project is handled with care, clarity, and technical responsibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Work With Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-soft-lg transition-all"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-white rounded-3xl p-8 shadow-soft border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-primary mb-6">
                  What Sets Us Apart
                </h3>
                <ul className="space-y-4">
                  {[
                    "Senior developer-led projects",
                    "Clean, scalable, future-ready code",
                    "SEO-ready from day one",
                    "Transparent process & honest timelines",
                    "Post-launch support included",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-primary mb-6">
                  Industries We Work With
                </h3>
                <div className="flex flex-wrap gap-3">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="px-4 py-2 bg-gray-50 rounded-full text-gray-600 font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-4">
              Meet the Team Behind DevSpark Studio
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-soft-lg transition-all duration-300 h-full border border-transparent hover:border-gray-100">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl object-cover mx-auto mb-6 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="text-center">
                    <h3 className="font-display text-lg font-bold text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              Let's discuss your idea and build something great together.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mx-auto"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;