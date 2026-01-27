import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    name: "Channu Praveen Kumar",
    role: "Founder & Lead Developer",
    description:
      "Hands-on developer with experience building scalable web applications for healthcare, real estate, and business platforms.",
    skills: ["Angular", "TypeScript", "System Design"],
    avatar: "/praveen.jpeg",
    linkedin: "https://www.linkedin.com/in/praveen-kumar2001",
  },
  {
    name: "Vishnu Vardhan",
    role: "Full Stack Developer",
    description:
      "Expert in Angular and Python, building robust frontend interfaces and powerful backend solutions with clean, maintainable code.",
    skills: ["Angular", "Python", "REST APIs"],
    avatar: "/vishnu.jpeg",
    linkedin: "https://www.linkedin.com/in/vishnu-vardhan",
  },
  {
    name: "Venkatesh",
    role: "Product Manager",
    description:
      "Drives product strategy and roadmap planning. Expert in translating business requirements into technical solutions.",
    skills: ["Product Strategy", "Agile", "UX Design"],
    avatar: "/venkat.jpeg",
    linkedin: "https://www.linkedin.com/in/godugu-venkatesh-b06a16362",
  },
  {
    name: "Hari",
    role: "Digital Marketing Lead",
    description:
      "Focuses on SEO strategy, website optimization, and content-driven growth.",
    skills: ["SEO", "Analytics", "Content Strategy"],
    avatar: "/harish.jpeg",
    linkedin: "https://www.linkedin.com/in/harish-madigela",
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
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -top-2 -right-2 bg-[#0A66C2] p-1.5 rounded-lg hover:bg-[#004182] transition-colors shadow-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-4 h-4"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
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
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
