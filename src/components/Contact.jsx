import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react"; // icons

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gray-950 text-white"
    >
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-10">
        Contact Me
      </h2>

      {/* Contact Form */}
      <form
        className="flex flex-col gap-5 w-full max-w-lg p-8 rounded-2xl bg-gray-900/70 border border-gray-700 shadow-lg backdrop-blur-lg animate-slideIn"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 
          border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 
          border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
        <textarea
          placeholder="Your Message"
          className="px-4 py-3 h-32 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 
          border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
        ></textarea>

        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl text-lg font-semibold text-white 
          hover:from-blue-600 hover:to-cyan-500 transition transform hover:scale-105 shadow-md"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info + Socials */}
      <div className="mt-10 flex flex-col md:flex-row gap-8 items-center text-gray-300">
        <div className="flex items-center gap-3">
          <Mail className="text-blue-400" /> <span>yourmail@example.com</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-cyan-400" /> <span>+91 98765 43210</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-blue-400 transition"
        >
          <Github size={22} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-blue-400 transition"
        >
          <Linkedin size={22} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
