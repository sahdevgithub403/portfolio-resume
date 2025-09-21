import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      name: "Mentor Application",
      desc: "A full-stack mentor-mentee platform with role-based dashboards, mentor search & filtering, session booking, and an AI-powered chatbot for real-time query assistance.",
      github: "https://github.com/sahdevgithub403/mentor-application",
      demo: "#",
      tags: ["React", "Spring Boot", "AI", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      status: "Live",
    },
    {
      name: "E-Commerce App",
      desc: "A full-stack e-commerce platform featuring user authentication, product management, shopping cart, and payment gateway integration using React, Spring Boot, and SQL.",
      github: "https://github.com/sahdevgithub403/ecommerce",
      demo: "#",
      tags: ["React", "Spring Boot", "SQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1522204523234-87295a782f06?q=80&w=2070&auto=format&fit=crop",
      status: "In Progress",
    },
    {
      name: "Portfolio Website",
      desc: "A personal portfolio built with React and Tailwind CSS, showcasing my skills, projects, and experience in an interactive and responsive design.",
      github: "https://github.com/sahdevgithub403/portfolio-resume",
      demo: "#",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "https://images.unsplash.com/photo-1661749870425-4c017ef6c18f?q=80&w=2070&auto=format&fit=crop",
      status: "Live",
    },
    {
      name: "DevOps Dashboard",
      desc: "A monitoring dashboard to visualize application performance metrics, CI/CD pipeline status, and container health, built with Python and Grafana.",
      github: "https://github.com/sahdevgithub403/devops-dashboard",
      demo: "#",
      tags: ["Python", "Grafana", "Docker", "CI/CD"],
      image: "https://images.unsplash.com/photo-1616400619175-5bed4290cd88?q=80&w=2070&auto=format&fit=crop",
      status: "Archived",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Live":
        return "bg-green-500 text-green-50";
      case "In Progress":
        return "bg-yellow-500 text-yellow-50";
      case "Archived":
        return "bg-red-500 text-red-50";
      default:
        return "bg-gray-500 text-gray-50";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-br from-gray-950 via-purple-950 to-black text-white"
    >
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="grid lg:grid-cols-2 gap-12 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="group relative p-8 rounded-[2rem] shadow-xl overflow-hidden
                     border border-gray-800 bg-white/5 hover:border-blue-400 transition-all duration-500
                     perspective-1000"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotateY: 8,
              rotateX: 8,
              boxShadow: "0 0 40px rgba(59,130,246,0.6)",
              transition: { type: "spring", stiffness: 200, damping: 12 },
            }}
          >
            {/* Background Gradient on Hover */}
            <div className="absolute inset-0 z-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-20 blur-2xl rounded-2xl"></div>
            </div>

            {/* Project Image */}
            <div className="relative w-full h-48 rounded-[1.5rem] overflow-hidden mb-6 z-10">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Project Status Badge */}
            <span
              className={`absolute top-12 right-12 z-20 text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(
                project.status
              )}`}
            >
              {project.status}
            </span>

            {/* Content Container */}
            <div className="relative z-10">
              {/* Project Title */}
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {project.name}
              </h3>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-full border border-gray-700 transform transition-transform duration-300 group-hover:scale-105"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-300 text-base leading-relaxed">
                {project.desc}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-blue-400 transition-all duration-300"
                  whileHover={{ y: -2, boxShadow: "0px 5px 10px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} /> Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 shadow-md"
                  whileHover={{ y: -2, boxShadow: "0px 5px 10px rgba(59,130,246,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={20} /> Demo
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