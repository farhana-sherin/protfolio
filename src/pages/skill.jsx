import React, { useEffect, useState } from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiPython, SiDjango, SiReact, SiTailwindcss
} from "react-icons/si";

export const Skill = () => {
  const skills = [
    { name: "HTML", level: 90, icon: <SiHtml5 className="w-10 h-10 text-orange-500" /> },
    { name: "CSS", level: 95, icon: <SiCss3 className="w-10 h-10 text-blue-500" /> },
    { name: "JavaScript", level: 80, icon: <SiJavascript className="w-10 h-10 text-yellow-400" /> },
    { name: "Python", level: 85, icon: <SiPython className="w-10 h-10 text-yellow-300" /> },
    { name: "Django", level: 90, icon: <SiDjango className="w-10 h-10 text-green-500" /> },
    { name: "React", level: 90, icon: <SiReact className="w-10 h-10 text-blue-400" /> },
    { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="w-10 h-10 text-sky-400" /> },
  ];

  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
   <section className="bg-[#0a0a2f] relative min-h-[100vh] flex flex-col justify-center py-32">

      
   
      <div className="absolute inset-0 -z-10">
        <div className="w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full absolute -top-20 -left-20"></div>
        <div className="w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full absolute bottom-0 right-0"></div>
      </div>

      
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16
                     bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        My Skills
      </h2>

     
      <div className="w-[90%] md:w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-xl border border-white/20 
                       rounded-3xl shadow-lg hover:shadow-pink-500/40 hover:-translate-y-2 transition-all duration-300"
          >
   
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 shadow-md">
              {skill.icon}
            </div>

         
            <h3 className="font-bold text-xl mb-5 text-white text-center">{skill.name}</h3>

            
            <div className="relative w-24 h-24 mb-2">
              <svg className="transform -rotate-90 w-24 h-24">
                <circle
                  className="text-white/10"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="44"
                  cx="48"
                  cy="48"
                />
                <circle
                  className="text-pink-500"
                  strokeWidth="8"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="44"
                  cx="48"
                  cy="48"
                  strokeDasharray={276}
                  strokeDashoffset={loaded ? 276 - (276 * skill.level) / 100 : 276}
                  style={{ transition: "stroke-dashoffset 1.2s ease-in-out" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
