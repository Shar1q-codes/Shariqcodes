import React from "react";
import { SiPython, SiTensorflow, SiUnity, SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";

export default function Focus() {
  return (
    <section id="skills" className="w-full max-w-3xl mx-auto py-16 px-4 flex flex-col items-center text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-sky-300 mb-4 text-glow">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <div className="flex flex-col items-center">
          <SiReact className="w-10 h-10 text-sky-400 mb-2" />
          <span className="text-white font-semibold text-lg text-glow">React</span>
        </div>
        <div className="flex flex-col items-center">
          <SiNodedotjs className="w-10 h-10 text-green-500 mb-2" />
          <span className="text-white font-semibold text-lg text-glow">Node.js</span>
        </div>
        <div className="flex flex-col items-center">
          <SiExpress className="w-10 h-10 text-gray-200 mb-2" />
          <span className="text-white font-semibold text-lg text-glow">Express</span>
        </div>
        <div className="flex flex-col items-center">
          <SiMongodb className="w-10 h-10 text-green-400 mb-2" />
          <span className="text-white font-semibold text-lg text-glow">MongoDB</span>
        </div>
        <div className="flex flex-col items-center">
          <SiPython className="w-10 h-10 text-yellow-400 mb-2" />
          <span className="text-white font-semibold text-lg text-glow">Python</span>
        </div>
        <div className="flex flex-col items-center">
          <SiTensorflow className="w-10 h-10 text-orange-500 mb-2" />
          <span className="text-white font-semibold text-lg text-glow">TensorFlow</span>
        </div>
        <div className="flex flex-col items-center">
          <SiUnity className="w-10 h-10 text-gray-200 mb-2" />
          <span className="text-white font-semibold text-lg text-glow">Unity</span>
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-sky-300 mb-4 text-glow">Current Focus</h2>
      <div className="flex flex-col gap-6 items-center w-full max-w-2xl">
        <div className="bg-slate-800/70 rounded-2xl px-6 py-5 shadow-lg border border-sky-400/30 text-left w-full text-glow">
          <h3 className="font-bold text-lg text-sky-200 mb-2">Data Science</h3>
          <p className="text-gray-100 text-base md:text-lg leading-relaxed">
            Exploring the frontiers of Data Science—experimenting with deep learning, predictive analytics, and turning raw data into real-world impact.
          </p>
        </div>
        <div className="bg-slate-800/70 rounded-2xl px-6 py-5 shadow-lg border border-purple-400/30 text-left w-full text-glow">
          <h3 className="font-bold text-lg text-purple-200 mb-2">Game Development</h3>
          <p className="text-gray-100 text-base md:text-lg leading-relaxed">
            Bringing imagination to life by building my first ever indie game—learning Unity, C#, and game design from the ground up.
          </p>
        </div>
      </div>
    </section>
  );
}
