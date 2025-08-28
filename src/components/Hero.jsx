import React, { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const message = "Full-Stack Developer | Problem Solver | Tech Enthusiast";
  let i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setText(message.slice(0, i));
      i++;
      if (i > message.length) {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 md:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Left: Text Section */}
      <div className="flex-1 animate-fadeIn space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-md">
            Sahdev Puran
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 animate-slideIn min-h-[40px] font-light tracking-wide">
          {text}
        </p>

        <a
          href="#projects"
          className="inline-block mt-6 px-8 py-3 rounded-xl text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-lg hover:shadow-blue-500/50 transition-transform duration-300 hover:scale-110"
        >
          🚀 View My Work
        </a>
      </div>

      {/* Right: Image Section */}
     <div className="flex-1 flex justify-center mt-10 md:mt-0">
  <div className="relative group">
    {/* Glow behind image */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-3xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

    {/* Profile Image */}
    <img
      src="sahdevpuran.jpg"
      alt="Profile"
      className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full 
      border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.6)] 
      transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
    />
  </div>
</div>

    </div>
  );
};

export default Hero;
