import { Github, ExternalLink, Code } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      name: "Mentor Application",
      desc: "A mentor-mentee platform with role-based dashboards, mentor search, session booking, and AI chatbot.",
      github: "https://github.com/sahdevgithub403/mentor-application",
      demo: "#",
      tags: ["React", "Spring Boot", "Tailwind CSS", "MySQL", "JWT", "AI"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      status: "In Progress",
    },
    {
      name: "Bank Application",
      desc: "A full-stack designed a modular banking system supporting deposit, withdrawal, and balance-tracking operations..",
      github: "https://github.com/sahdevgithub403/ecommerce",
      demo: "#",
      tags: ["Java", "JDBC", "MySQL", "JSP"],
      image:
        "https://plus.unsplash.com/premium_photo-1684179639963-e141ce2f8074?w=600&auto=format&fit=crop&q=60",
      status: "Live",
    },
    {
      name: "Face Recognition Attendance System",
      desc: "An interactive personal portfolio showcasing skills, projects, and achievements.",
      github: "https://github.com/sahdevgithub403/portfolio-resume",
      demo: "#",
      tags: ["React With Vite", "Tailwind CSS", "Python", "OpenCv"],
      image:
        "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*E5rexDhotCqksxqT4LKwyQ.jpeg",
      status: "Live",
    },
  ];

  const statusColor = {
    Live: "from-green-500 to-emerald-400",
    "In Progress": "from-yellow-500 to-orange-400",
    Active: "from-blue-500 to-cyan-400",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Floating Animation Icon (Center) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 0.2,
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Code size={200} className="text-blue-700 opacity-20" />
      </motion.div>

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500"
        >
          Projects & Work Experience
        </motion.h2>
        <p className="mt-3 text-gray-400 text-sm">
          A showcase of my best work in full-stack and front-end development
        </p>
      </div>

      {/* Projects */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10"
      >
        {projectList.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{
              x: index % 2 === 0 ? -100 : 100,
              opacity: 0,
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            whileHover={{ scale: 1.03 }}
            className="relative group rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              <span
                className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${statusColor[project.status]} text-white shadow-md`}
              >
                {project.status}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-blue-900/40 border border-blue-700 text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gray-800 hover:bg-gray-700 transition"
                >
                  <Github size={16} /> Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
                >
                  <ExternalLink size={16} /> Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
