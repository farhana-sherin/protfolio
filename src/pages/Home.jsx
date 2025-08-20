import React from "react";
import { About } from "./About";

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className=" bg-[#0a0a2f] h-screen flex flex-col justify-center items-center text-white overflow-hidden py-20">
        
        {/* Background Animated Glows */}
        <div className="absolute inset-0 -z-10 ">
          {/* Glow 1 */}
          <div className="w-[500px] h-[500px] bg-fuchsia-500/20 blur-[180px] rounded-full absolute -top-20 -left-20 animate-pulse-slow"></div>
          {/* Glow 2 */}
          <div className="w-[600px] h-[600px] bg-indigo-500/20 blur-[200px] rounded-full absolute bottom-0 right-0 animate-bounce-slow"></div>
          {/* Glow 3 */}
          <div className="w-[400px] h-[400px] bg-purple-500/10 blur-[180px] rounded-full absolute top-40 right-40 animate-spin-slow"></div>
        </div>

        {/* Logo */}
        <img
          src="./src/assets/logo.avif"
          className="w-[180px] md:w-[220px] rounded-full border-4 border-purple-500/40 shadow-lg mb-8 hover:scale-105 transition "
          alt="logo"
        />

        {/* Title */}
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
            I'm a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
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

        {/* CTA Buttons */}
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

      {/* About Section */}
      <About />
    </div>
  );
};
