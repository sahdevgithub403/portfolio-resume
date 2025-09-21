import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Yahan aap apna backend API call add kar sakte hain.
    // Jaise ki, EmailJS ya ek custom serverless function.
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const socialLinks = {
    github: "https://github.com/sahdevgithub403",
    linkedin: "https://linkedin.com/in/sahdevpuran",
    email: "mailto:sahdev.puran@email.com"
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-br from-gray-950 via-purple-950 to-black text-white"
    >
      {/* Main Container for Animations */}
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-16 text-center"
        >
          Get In Touch
        </motion.h2>

        {/* Contact Form & Info Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold text-gray-300">Let's connect!</h3>
            <p className="text-gray-400 leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you. Feel free to use the form or reach out directly.
            </p>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail size={24} className="text-blue-400" />
              <span className="text-lg">sahdev.puran@email.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone size={24} className="text-cyan-400" />
              <span className="text-lg">+91 62021 57680</span>
            </div>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-blue-400 transition transform hover:scale-110 shadow-md"
                whileHover={{ y: -2 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-blue-400 transition transform hover:scale-110 shadow-md"
                whileHover={{ y: -2 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href={socialLinks.email}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-blue-400 transition transform hover:scale-110 shadow-md"
                whileHover={{ y: -2 }}
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>
          
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full p-8 rounded-3xl bg-white/5 border border-gray-800 shadow-xl backdrop-blur-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700 
              focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700 
              focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-3 h-40 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700
              focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300 resize-none"
            ></textarea>
            <motion.button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl text-lg font-semibold text-white shadow-lg"
              whileHover={{ scale: 1.02, boxShadow: "0px 8px 20px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
