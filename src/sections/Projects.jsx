import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPython, SiTensorflow, SiUnity, SiAndroid } from "react-icons/si";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="min-h-[30vh] px-4 sm:px-2 py-8 sm:py-4 w-full"
    >
      <h2 className="text-xl sm:text-lg md:text-2xl font-bold text-sky-300 mb-6 break-words">Featured Projects</h2>
      <hr className="w-16 border-sky-400 mb-8 mx-auto" />
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
        {/* Project 1 */}
        <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-7 shadow-lg flex flex-col items-start border-2 border-sky-400/40 transition-transform hover:-translate-y-2 hover:shadow-xl group">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition">Portfolio Website</h3>
          <p className="text-gray-300 mb-2">Personal portfolio built with React, Tailwind CSS, and Framer Motion. Responsive, themeable, and lightning fast.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <FaReact className="w-5 h-5 text-sky-400" title="React" aria-label="React" />
            <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">React</span>
            <span className="bg-green-600 text-white text-xs font-medium px-2 py-1 rounded">Tailwind</span>
            <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">Framer Motion</span>
          </div>
          <a href="https://shariqcodes.com/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline text-sm font-semibold mt-1" aria-label="Live Demo">Live Demo</a>
        </div>
        {/* Project 2 */}
        <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-7 shadow-lg flex flex-col items-start border-2 border-sky-400/40 transition-transform hover:-translate-y-2 hover:shadow-xl group">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition">MERN Blog Platform</h3>
          <p className="text-gray-300 mb-2">A full-stack blog platform with authentication, markdown support, and RESTful APIs. Built with MERN stack.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <SiMongodb className="w-5 h-5 text-green-500" title="MongoDB" aria-label="MongoDB" />
            <SiExpress className="w-5 h-5 text-gray-200" title="Express" aria-label="Express" />
            <FaReact className="w-5 h-5 text-sky-400" title="React" aria-label="React" />
            <FaNodeJs className="w-5 h-5 text-green-600" title="Node.js" aria-label="Node.js" />
          </div>
          <a href="#" className="text-sky-400 hover:underline text-sm font-semibold mt-1" aria-label="GitHub Repo">GitHub Repo</a>
        </div>
        {/* Project 3: Data Science */}
        <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-7 shadow-lg flex flex-col items-start border-2 border-sky-400/40 transition-transform hover:-translate-y-2 hover:shadow-xl group">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition">Data Science Pipeline</h3>
          <p className="text-gray-300 mb-2">End-to-end ML pipeline for predictive analytics: data cleaning, feature engineering, model training, and interactive visualization.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <SiPython className="w-5 h-5 text-yellow-400" title="Python" aria-label="Python" />
            <SiTensorflow className="w-5 h-5 text-orange-500" title="TensorFlow" aria-label="TensorFlow" />
          </div>
          <a href="#" className="text-sky-400 hover:underline text-sm font-semibold mt-1" aria-label="GitHub Repo">GitHub Repo</a>
        </div>
        {/* Project 4: Game Dev */}
        <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-7 shadow-lg flex flex-col items-start border-2 border-purple-400/40 transition-transform hover:-translate-y-2 hover:shadow-xl group">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition">Android Game: Sky Dodger</h3>
          <p className="text-gray-300 mb-2">A fast-paced arcade game for Android, built with Unity and C#. Features custom physics, leaderboards, and vibrant graphics.</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <SiUnity className="w-5 h-5 text-gray-200" title="Unity" aria-label="Unity" />
            <span className="bg-blue-900 text-white text-xs font-medium px-2 py-1 rounded" title="C#" aria-label="C#">C#</span>
            <SiAndroid className="w-5 h-5 text-green-400" title="Android" aria-label="Android" />
          </div>
          <a href="#" className="text-purple-400 hover:underline text-sm font-semibold mt-1" aria-label="GitHub Repo">GitHub Repo</a>
        </div>
      </div>
      {/* View All Projects Button */}
      <div className="flex justify-center mt-8">
        <a href="#" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-10 rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-lg tracking-wide" aria-label="View All Projects">
          View All Projects
        </a>
      </div>
    </motion.section>
  );
}
