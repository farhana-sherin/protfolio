import React from "react";
import { About } from "./About";
import { Skill } from "./skill";

export const Home = () => {
  return (
    <div>
    
      <section className=" bg-[#0a0a2f] h-screen flex flex-col justify-center items-center text-white overflow-hidden relative top-12">
      

        
        <img
          src="./src/assets/logo.avif"
          className="w-[180px] md:w-[220px] rounded-full border-4 border-purple-500/40 shadow-lg mb-8 hover:scale-105 transition "
          alt="logo"
        />

        <div className="text-center max-w-3xl px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
            I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium mb-12">
            Full-Stack Developer skilled in{" "}
            <span className="text-purple-300 font-semibold">React</span>,{" "}
            <span className="text-purple-300 font-semibold">Tailwind CSS</span>, and{" "}
            <span className="text-purple-300 font-semibold">Django / Node.js</span>.  
            I build <span className="text-indigo-300">scalable</span>,{" "}
            <span className="text-pink-300">modern</span> and{" "}
            <span className="text-purple-300">engaging</span> applications.
          </p>
        </div>

      
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-md hover:shadow-purple-500/30 hover:-translate-y-1 transition font-semibold"
          >
            Hire Me
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 shadow-md hover:shadow-purple-500/40 hover:-translate-y-1 transition font-semibold"
          >
            Download CV
          </a>
        </div>
      </section>

  
      <About />
      <Skill />
    </div>
  );
};
