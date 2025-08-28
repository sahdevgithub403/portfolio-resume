import { Github, ExternalLink } from "lucide-react"; 

const Projects = () => {
  const projectList = [
    {
      name: "Portfolio Website",
      desc: "A personal portfolio built with React & Tailwind CSS showcasing my skills and projects.",
      github: "https://github.com/yourusername/portfolio",
      demo: "#",
    },
    {
      name: "E-Commerce App",
      desc: "Full-stack shopping application with authentication, product management, and payment integration.",
      github: "https://github.com/yourusername/ecommerce",
      demo: "#",
    },
    {
      name: "Chatbot",
      desc: "AI-powered chatbot using Node.js & React that can answer queries in real time.",
      github: "https://github.com/yourusername/chatbot",
      demo: "#",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gray-950 text-white"
    >
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-12">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="group relative p-6 bg-gray-900/60 border border-gray-700 rounded-2xl shadow-lg 
            backdrop-blur-md hover:border-blue-400 transition-all duration-500 hover:scale-105"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-bold text-blue-400 group-hover:text-cyan-300 transition">
              {project.name}
            </h3>

            {/* Description */}
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">
              {project.desc}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 
                text-gray-300 hover:text-blue-400 transition"
              >
                <Github size={18} /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 
                text-white transition shadow-md"
              >
                <ExternalLink size={18} /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
