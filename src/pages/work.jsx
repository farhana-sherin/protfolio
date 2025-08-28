import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Work = () => {
  const projects = [
    {
      title: "Restaurant App",
      category: "Favorites",
      img: "./src/assets/foodz.png",
      github: "https://github.com/your-username/restaurant-app",
      live: "#",
    },
    {
      title: "Travel Agency",
      category: "Recent",
      img: "./src/assets/travel (1).png",
      github: "https://github.com/your-username/travel-app",
      live: "#",
    },
  
  ];

  return (
    <div className="bg-[#0f0f3d] text-white min-h-screen px-6 md:px-12 py-20">
  
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          A selection of my recent work, favorite projects, and live demos.
        </p>
      </header>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 hover:shadow-purple-500/30 transition-transform duration-300"
          >
            
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />

          
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-5 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-purple-300 font-semibold">
                  {project.category}
                </span>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
