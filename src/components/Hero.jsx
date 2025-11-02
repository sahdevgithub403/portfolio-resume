import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Full-Stack Developer",
  "DevOps Enthusiast",
  "Problem Solver",
  "Tech Explorer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const currentRole = roles[index];
    setText("");

    const typingInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setText(currentRole.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [index]);

  // Particle background (only blue tones)
  useEffect(() => {
    const createParticles = () => {
      const container = document.getElementById("particles-container");
      if (!container) return;

      container.innerHTML = "";
      const particleCount = 60;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 5 + 10;

        particle.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: linear-gradient(to right, rgba(37,99,235,0.8), rgba(29,78,216,0.8));
          border-radius: 50%;
          top: ${y}%;
          left: ${x}%;
          animation: move-particles ${duration}s linear infinite;
          animation-delay: -${delay}s;
        `;
        container.appendChild(particle);
      }
    };

    createParticles();
    window.addEventListener("resize", createParticles);
    return () => window.removeEventListener("resize", createParticles);
  }, []);

  const cardVariants = {
    initial: { opacity: 0, y: 50, rotateX: 10 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    exit: { opacity: 0, y: -50, rotateX: -10 },
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen 
      bg-gradient-to-br from-gray-950 via-blue-950 to-black 
      text-gray-900 dark:text-white overflow-hidden p-6 transition-colors duration-300"
    >
      <style>
        {`
          @keyframes move-particles {
            0% { transform: translateY(0); opacity: 0.5; }
            50% { opacity: 1; }
            100% { transform: translateY(-100vh); opacity: 0; }
          }
        `}
      </style>

      <div id="particles-container" className="absolute inset-0 z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-12">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
              Sahdev Puran
            </span>
          </h1>

          <div className="min-h-[60px] md:min-h-[80px] flex items-center justify-center md:justify-start">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.7 }}
                className="text-xl md:text-3xl font-medium text-gray-300 flex items-center"
              >
                {text}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="inline-block w-2 h-8 md:h-10 bg-gradient-to-r from-blue-500 to-blue-400 ml-2"
                ></motion.span>
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(37,99,235,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 
              text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              Explore Projects
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1aGvnVmgICAE_0OzI9POGiuzPN1K3zmFn/view?usp=drive_link"
              download="Sahdev_Puran_Resume.pdf"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59,130,246,0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border-2 border-blue-500 
              text-blue-400 font-semibold hover:bg-blue-900 hover:text-white 
              shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 70, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex justify-center mt-12 md:mt-0 perspective-1000"
        >
          <motion.div
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full 
            bg-gradient-to-br from-blue-500 to-blue-400 p-1 shadow-2xl"
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
              boxShadow: "0 0 60px rgba(37,99,235,0.6)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src="sahdev1.png"
              alt="Sahdev Puran Profile"
              className="w-full h-full object-cover rounded-full"
              style={{ transform: "translateZ(20px)" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-40 blur-md"
              style={{ transform: "translateZ(-10px)" }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
