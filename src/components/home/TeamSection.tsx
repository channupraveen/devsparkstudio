import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";

const team = [
  {
    name: "Channu Praveen Kumar",
    role: "Founder & Lead Developer",
    description:
      "Hands-on developer with experience building scalable web applications for healthcare, real estate, and business platforms.",
    skills: ["Angular", "TypeScript", "System Design"],
    email: "praveen@devsparkstudio.com",
    avatar: "/praveen.jpeg",
  },
  {
    name: "Vishnu Vardhan",
    role: "Full Stack Developer",
    description:
      "Expert in Angular and Python, building robust frontend interfaces and powerful backend solutions with clean, maintainable code.",
    skills: ["Angular", "Python", "REST APIs"],
    avatar: "/vishnu.jpeg",
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
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6">
            Meet the Team Behind DevSpark Studio
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-soft-lg transition-all duration-300 h-full border border-transparent hover:border-gray-100">
                {/* Avatar */}
                <div className="relative mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="font-display text-lg font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Skills */}
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

                  {/* Email */}
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
  );
};

export default TeamSection;
