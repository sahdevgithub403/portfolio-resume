import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen flex flex-col justify-center items-center px-6 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 relative animate-fadeIn">
        About Me
        <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full transform -translate-x-1/2"></span>
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-lg text-gray-300 leading-relaxed animate-slideIn">
        I am a passionate <span className="text-blue-400 font-semibold">Full-Stack Developer</span> 
        who loves building modern, responsive, and interactive web applications.  
        My expertise includes <span className="text-cyan-300">React</span>, <span className="text-cyan-300">Node.js</span>,  
        and DevOps tools like <span className="text-cyan-300">Docker</span> & <span className="text-cyan-300">Kubernetes</span>.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
        {["⚡ React", "⚡ Node.js", "⚡ Docker", "⚡ Kubernetes"].map(
          (skill, idx) => (
            <div
              key={idx}
              className="skill-card px-6 py-4 bg-white/5 border border-gray-700 rounded-xl shadow-lg text-gray-200 font-semibold text-lg 
              hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-400/20 hover:text-white transition-transform duration-300 transform hover:scale-110 hover:shadow-blue-500/30"
            >
              {skill}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default About;
