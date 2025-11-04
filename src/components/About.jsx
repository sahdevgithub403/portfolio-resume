// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CheckCircle, Circle } from "lucide-react";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/sahdevpuran",
  github: "https://github.com/sahdevpuran",
  email: "mailto:sahdev.puran@email.com",
};

const About = () => {
  const steps = [
    {
      title: "About Me",
      desc: "Full Stack Developer skilled in React.js, Spring Boot, and MySQL, with hands-on experience in building scalable web applications, REST APIs, and CI/CD pipelines using Jenkins and Docker. Strong foundation in Data Structures & Algorithms with a passion for DevOps automation and problem-solving.",
      done: true,
    },
    {
      title: "Skills",
      desc: "Java, React, Spring Boot, MySQL, Docker, Kubernetes, CI/CD, Git & GitHub.",
      done: true,
      skills: [
        {
          name: "Java",
          level: 90,
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "Spring Boot",
          level: 85,
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "React",
          level: 75,
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Docker",
          level: 70,
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Kubernetes",
          level: 65,
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        },
        {
          name: "Git & GitHub",
          level: 80,
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "CI/CD (Jenkins)",
          level: 60,
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        },
      ],
    },
    {
      title: "Education",
      desc: "B.Tech in Computer Science, Centurion University of Technology and Management, Bhubaneswar, 2025.",
      done: true,
    },
    {
      title: "Projects",
      desc: "Mentor Application, Banking Application, Portfolio.",
      done: true,
    },
    {
      title: "Get in Touch",
      desc: "Connect via social links or email.",
      done: true,
      contact: true,
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-23 overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-black text-gray-200"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-black"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 40,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          backgroundSize: "200% 200%",
          zIndex: 0,
        }}
      />

      {/* Floating Light Glows */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -60, 60, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "15%", left: "10%", zIndex: 0 }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 80, -80, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "10%", right: "15%", zIndex: 0 }}
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
      >
        My Journey
      </motion.h2>

      {/* Timeline */}
      <div className="relative z-10 w-full max-w-5xl mx-auto space-y-10">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="flex items-start relative pb-12"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: idx * 0.25, duration: 1, ease: "easeOut" }}
          >
            {/* Connecting Line */}
            {idx !== steps.length - 1 && (
              <motion.div
                className="absolute left-[1.125rem] top-8 w-px h-full bg-gradient-to-b from-blue-700 to-cyan-500"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  delay: idx * 0.25 + 0.3,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "top" }}
              />
            )}

            {/* Step Icon */}
            <motion.div
              className={`z-10 w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full border-2 ${
                step.done
                  ? "bg-blue-900 border-blue-500"
                  : "bg-gray-800 border-gray-600"
              }`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: idx * 0.25 + 0.15,
                duration: 0.8,
                ease: "backOut",
              }}
            >
              {step.done ? (
                <CheckCircle className="text-blue-400" size={20} />
              ) : (
                <Circle className="text-gray-500" size={20} />
              )}
            </motion.div>

            {/* Step Content */}
            <motion.div
              className="ml-6 w-full bg-blue-950/20 backdrop-blur-md border border-blue-900/40 rounded-xl p-5 hover:shadow-blue-800/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: idx * 0.25 + 0.4,
                duration: 1.2,
                ease: "easeOut",
              }}
            >
              <h3
                className={`text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${
                  step.done
                    ? "from-blue-400 to-cyan-400"
                    : "from-gray-500 to-gray-400"
                }`}
              >
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 mt-2 leading-relaxed">
                {step.desc}
              </p>

              {/* ✅ Skill Bars with Circle Logos */}
              {step.skills && (
                <div className="mt-5 space-y-4">
                  {step.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex items-center gap-3">
                      {/* Circle around logo */}
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900/30 border border-blue-700/50">
                        <img
                          src={skill.img}
                          alt={`${skill.name} logo`}
                          className="w-6 h-6 object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,
                              delay: skillIdx * 0.15,
                              ease: "easeInOut",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Contact Icons */}
              {step.contact && (
                <div className="flex mt-6 gap-6 text-blue-400 text-2xl">
                  {Object.entries(socialLinks).map(([key, link], i) => (
                    <motion.a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <i className={`ri-${key}-fill`}></i>
                    </motion.a>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
