import { motion } from "framer-motion";
import { CheckCircle, Circle } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const About = () => {
  const steps = [
    { title: "About Me", desc: "Full-Stack Developer building modern apps with React & Spring Boot.", done: true },
    {
      title: "Skills",
      desc: "React, Spring Boot, Docker, Kubernetes, CI/CD, Git, AWS.",
      done: true,
      skills: [
        { name: "React", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
      ],
    },
    { title: "Experience", desc: "Worked on multiple full-stack & cloud projects.", done: false },
    { title: "Education", desc: "B.Tech in Computer Science, XYZ University, 2025.", done: false },
    { title: "Projects", desc: "ERP, E-commerce, Portfolio & social apps.", done: false },
    { title: "Get in Touch", desc: "Connect via social links or email.", done: false, contact: true },
  ];

  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/sahdevpuran",
    github: "https://github.com/sahdevpuran",
    email: "mailto:sahdev.puran@email.com",
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-br from-gray-950 via-purple-950 to-black text-gray-200">
      <div className="w-full max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          My Journey
        </h2>

        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="flex items-start relative pb-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            {idx !== steps.length - 1 && (
              <motion.div
                className="absolute left-[1.125rem] top-8 w-px h-full bg-pink-700"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: idx * 0.2 + 0.3, duration: 0.8 }}
                style={{ transformOrigin: "top" }}
              />
            )}

            <motion.div
              className={`z-10 w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full border-2 ${
                step.done ? "bg-purple-800 border-pink-500" : "bg-gray-700 border-gray-500"
              }`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: idx * 0.2 + 0.1, duration: 0.5 }}
            >
              {step.done ? (
                <CheckCircle className="text-pink-400" size={20} />
              ) : (
                <Circle className="text-gray-500" size={20} />
              )}
            </motion.div>

            <motion.div
              className="ml-6 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: idx * 0.2 + 0.3, duration: 0.6 }}
            >
              <h3 className={`text-xl font-bold ${step.done ? "text-pink-400" : "text-gray-300"}`}>
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 mb-2">{step.desc}</p>

              {/* Skills Progress Bars */}
              {step.skills && (
                <div className="mt-4 space-y-3">
                  {step.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-pink-500 h-full rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.2 + 0.5 + skillIdx * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Social Media Icons */}
              {step.contact && (
                <div className="flex mt-6 gap-6 text-pink-400 text-2xl">
                  <motion.a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#0A66C2" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#FFFFFF" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href={socialLinks.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#EA4335" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaEnvelope />
                  </motion.a>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;