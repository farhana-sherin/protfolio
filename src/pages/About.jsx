import React from 'react';

export const About = () => {
  return (
    <section className="relative py-56 bg-[#0a0a2f] text-white flex flex-col items-center gap-12">

     
      <div className="absolute inset-0 -z-10">
        <div className="w-[400px] h-[400px] bg-purple-500/10 blur-[150px] rounded-full absolute -top-16 -left-16"></div>
        <div className="w-[400px] h-[400px] bg-pink-500/10 blur-[150px] rounded-full absolute bottom-0 right-16"></div>
      </div>


     <div className="max-w-3xl text-center space-y-6 px-4 md:px-0">
  <h2 className="text-4xl md:text-5xl font-extrabold">
    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">About</span>{' '}
    <span className="text-white">Me</span>
  </h2>
   <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            I am a <span className="text-white font-semibold">Python Full-Stack Developer</span> passionate about building scalable, modern, and visually engaging web applications. 
            I excel in <span className="font-bold text-purple-300">React, Tailwind CSS, Django</span> and other modern technologies to craft seamless digital experiences.
    </p>
  <p className="text-gray-400 italic md:text-lg leading-relaxed">
    “I love turning ideas into simple, beautiful, and usable solutions.”
  </p>
</div>
    </section>
  );
};
