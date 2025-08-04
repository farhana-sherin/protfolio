import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a2f] py-2">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Name */}
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide
                         bg-gradient-to-r from-purple-400 to-pink-500
                         bg-clip-text text-transparent">
                          
            Farhana Sherin
          </h1>
          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Full Stack Developer
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 justify-center">
          {[{
            icon: <FaGithub />,
            link: "https://github.com"
          },{
            icon: <FaLinkedin />,
            link: "https://linkedin.com"
          },{
            icon: <FaEnvelope />,
            link: "mailto:hello@farhanasherin.com"
          }].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 backdrop-blur-sm hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white text-gray-400 transition-all duration-300 text-xl shadow-sm hover:shadow-purple-500/30"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-2 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Farhana Sherin. All rights reserved.
      </div>
    </footer>
  );
};
