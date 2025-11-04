// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const socialLinks = {
  github: "https://github.com/sahdevpuran",
  linkedin: "https://www.linkedin.com/in/sahdevpuran",
  email: "mailto:sahdevpuran192@gmail.com",
};

const Contact = () => {
  const [sent, setSent] = useState(false);
  const controls = useAnimation();

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  });

  const handleSend = async (e) => {
    e.preventDefault();
    // Start animation
    await controls.start({
      x: ["0%", "100%"],
      transition: { duration: 1.2, ease: "easeInOut" },
    });
    setSent(true);

    // Reset after delay
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden bg-white dark:bg-gradient-to-br from-gray-950 via-blue-950 to-black text-gray-900 dark:text-gray-200 transition-colors duration-300"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-950 dark:via-blue-950 dark:to-black"
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

      {/* Floating Glow Effects */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "15%", left: "10%", zIndex: 0 }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 80, -80, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "15%", right: "10%", zIndex: 0 }}
      />

      {/* Section Title */}
      <motion.h2
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400 mb-16"
      >
        Contact Me
      </motion.h2>

      {/* Contact Info + Form */}
      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-semibold text-blue-500 dark:text-blue-400">
            Let's Talk
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Have a question, project idea, or collaboration in mind? Feel free
            to reach out — I’d love to connect!
          </p>

          <div className="flex items-center gap-4">
            <Mail className="text-blue-500" />
            <p className="text-gray-600 dark:text-gray-300">
              sahdevpuran192@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-blue-500" />
            <p className="text-gray-600 dark:text-gray-300">+91 6202157680</p>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-500" />
            <p className="text-gray-600 dark:text-gray-300">
              Jharkhand, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 sm:gap-6 mt-6">
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-3 rounded-full bg-white/30 dark:bg-gray-800 hover:bg-white/40 dark:hover:bg-gray-700 
              text-gray-900 dark:text-gray-300 shadow-lg transition"
            >
              <Github size={22} />
            </motion.a>

            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-3 rounded-full bg-white/30 dark:bg-gray-800 hover:bg-white/40 dark:hover:bg-gray-700 
              text-gray-900 dark:text-gray-300 shadow-lg transition"
            >
              <Linkedin size={22} />
            </motion.a>

            <motion.a
              href={socialLinks.email}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="p-3 rounded-full bg-white/30 dark:bg-gray-800 hover:bg-white/40 dark:hover:bg-gray-700 
              text-gray-900 dark:text-gray-300 shadow-lg transition"
            >
              <Mail size={22} />
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          variants={fadeIn(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={handleSend}
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-blue-900/10 backdrop-blur-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-blue-900/10 backdrop-blur-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-blue-900/10 backdrop-blur-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-gray-100"
            ></textarea>
          </div>

          {/* 🔥 Slider Animation Send Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full py-3 rounded-xl font-semibold overflow-hidden text-white bg-gradient-to-r from-blue-600 to-blue-600 shadow-lg"
          >
            <motion.div
              animate={controls}
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600"
              style={{
                x: sent ? "100%" : "0%",
                width: "100%",
                opacity: 0.3,
              }}
            />
            <div className="relative z-10 flex justify-center items-center gap-2">
              {sent ? (
                <>
                  <span>Message Sent</span> ✅
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} className="mt-0.5" />
                </>
              )}
            </div>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
