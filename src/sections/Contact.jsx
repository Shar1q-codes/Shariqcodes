import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="min-h-[20vh] px-4 sm:px-2 py-8 sm:py-4 w-full flex flex-col items-center"
    >
      <h2 className="text-xl sm:text-lg md:text-2xl font-bold text-sky-300 mb-4 break-words">Contact</h2>
      <hr className="w-16 border-sky-400 mb-8 mx-auto" />
      <p className="text-base sm:text-sm md:text-lg text-gray-300 mb-8 text-center max-w-lg">
        Interested in working together or want to connect? Reach out via email or find me on the platforms below.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-center">
        <a href="mailto:shariqhussain691@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2.5 px-8 rounded-full shadow-lg transition text-sm flex items-center gap-2">
          <FaEnvelope className="w-5 h-5 text-white" title="Email" aria-label="Email" />
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/syed-shariq-hussain-307610349/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white font-bold py-2.5 px-8 rounded-full shadow-lg transition text-sm flex items-center gap-2">
          <FaLinkedin className="w-5 h-5 text-white" title="LinkedIn" aria-label="LinkedIn" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/Shar1q-codes" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="bg-gradient-to-r from-gray-800 to-gray-600 hover:from-black hover:to-gray-700 text-white font-bold py-2.5 px-8 rounded-full shadow-lg transition text-sm flex items-center gap-2">
          <FaGithub className="w-5 h-5 text-white" title="GitHub" aria-label="GitHub" />
          <span>GitHub</span>
        </a>
      </div>
      {/* Plaintext email for copy-paste */}
      <div className="mb-6 text-center">
        <span className="text-gray-300 text-sm select-all">Email: <span className="font-mono">shariqhussain691@gmail.com</span></span>
      </div>
      {/* Download Resume Button */}
      <div className="flex justify-center mb-8">
        <a href="/resume.pdf" download className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition text-sm" aria-label="Download Resume">
          Download Resume
        </a>
      </div>
      {/* Contact Form */}
      <ContactForm />
      <span className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Shariq Hussain. All rights reserved.</span>
    </motion.section>
  );
}
