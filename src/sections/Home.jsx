import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPython, SiTensorflow, SiUnity } from "react-icons/si";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center min-h-[40vh] px-4 sm:px-2 py-16 sm:py-8 w-full"
    >
      <img
        src="https://avatars.githubusercontent.com/u/59678435?v=4"
        alt="Shariq Hussain avatar"
        className="w-28 h-28 rounded-full mb-6 border-4 border-blue-100 shadow-lg object-cover"
      />
      {/* Tech stack icons */}
      <div className="flex flex-row flex-wrap gap-4 justify-center items-center mb-4" aria-label="Tech stack icons">
        <FaReact className="w-7 h-7 text-sky-400" title="React" aria-label="React" />
        <FaNodeJs className="w-7 h-7 text-green-600" title="Node.js" aria-label="Node.js" />
        <SiMongodb className="w-7 h-7 text-green-500" title="MongoDB" aria-label="MongoDB" />
        <SiExpress className="w-7 h-7 text-gray-200" title="Express" aria-label="Express" />
        <SiPython className="w-7 h-7 text-yellow-400" title="Python" aria-label="Python" />
        <SiTensorflow className="w-7 h-7 text-orange-500" title="TensorFlow" aria-label="TensorFlow" />
        <SiUnity className="w-7 h-7 text-gray-200" title="Unity" aria-label="Unity" />
      </div>
      <h1 className="text-4xl sm:text-2xl md:text-5xl font-extrabold text-white mb-2 break-words tracking-tight font-sans text-glow">Shariq Hussain</h1>
      <h2 className="text-lg sm:text-base md:text-2xl font-semibold text-sky-300 mb-4 tracking-wide font-sans text-glow">MERN Stack Developer | Aspiring Data Scientist | Game Dev Enthusiast</h2>
      <hr className="w-16 border-sky-400 mb-6" />
      <p className="text-base sm:text-sm md:text-lg text-gray-100 mb-4 max-w-2xl mx-auto break-words leading-relaxed font-sans text-glow">
        Hi! I'm Shariq, a passionate full-stack developer skilled in the MERN stack, with a love for building robust web apps, exploring the world of data science, and creating games for Android in my spare time. I thrive on learning new technologies and solving real-world problems through code.
      </p>
      <p className="text-base sm:text-sm md:text-lg text-gray-100 mb-8 max-w-2xl mx-auto break-words leading-relaxed font-sans text-glow">
        Whether it's crafting seamless user experiences, analyzing complex datasets, or experimenting with game mechanics, I bring creativity, curiosity, and dedication to every project. Let's build something amazing together!
      </p>
      <button
        type="button"
        onClick={() => {
          const el = document.getElementById('projects');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-10 rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-lg tracking-wide"
      >
        View My Work
      </button>
    </motion.section>
  );
}
