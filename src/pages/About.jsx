import React from 'react'
import { Code2, Server, Workflow, Palette } from "lucide-react"; // icons

export const About = () => {
  return (
    <section className="relative py-24 bg-[#0a0a2f] text-white overflow-hidden ">
      {/* Gradient background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[500px] h-[500px] bg-fuchsia-500/20 blur-[180px] rounded-full absolute -top-20 -left-20"></div>
        <div className="w-[600px] h-[600px] bg-indigo-500/20 blur-[200px] rounded-full absolute bottom-0 right-0"></div>
      </div>

      <div className="w-[90%] md:w-[75%] mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
          About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl text-center max-w-3xl mx-auto mb-20 leading-relaxed">
          Hi, I’m a <span className="text-white font-semibold">Python Full-Stack Developer</span> who loves building clean, scalable, and engaging web applications.  
          With expertise in <span className="font-bold text-purple-300">React, Tailwind CSS, and Django</span>, I combine sleek UI/UX with strong backend logic to craft impactful digital products.
        </p>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Frontend */}
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2 transition">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-7 h-7 text-purple-400" />
              <h3 className="font-semibold text-xl">Frontend Development</h3>
            </div>
            <div className="flex items-center gap-4">
              <img src="./src/assets/react.svg" alt="React" className="w-10 h-10 hover:scale-110 transition" />
              <img src="./src/assets/tailwind.png" alt="Tailwind" className="w-10 h-10 hover:scale-110 transition" />
            </div>
          </div>

          {/* Backend */}
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2 transition">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-7 h-7 text-purple-400" />
              <h3 className="font-semibold text-xl">Backend Development</h3>
            </div>
            <p className="text-gray-300 text-base">Django, REST APIs</p>
          </div>

          {/* Tools */}
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2 transition">
            <div className="flex items-center gap-3 mb-4">
              <Workflow className="w-7 h-7 text-purple-400" />
              <h3 className="font-semibold text-xl">Tools & Workflow</h3>
            </div>
            <p className="text-gray-300 text-base">GitHub, Postman, Deployment (Vercel)</p>
          </div>

          {/* UI/UX */}
          <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2 transition">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-7 h-7 text-purple-400" />
              <h3 className="font-semibold text-xl">UI/UX Design</h3>
            </div>
            <p className="text-gray-300 text-base">Figma</p>
          </div>

        </div>
      </div>
    </section>
  )
}
