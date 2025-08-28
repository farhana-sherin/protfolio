import React from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ import Link

export const Header = () => {
  return (
    <>
      {/* Desktop Header (Top) */}
      <header className="hidden md:block fixed top-0 left-0 w-full z-50 bg-[#0a0a2f]/60 backdrop-blur-xl shadow-lg">
        <div className="w-[90%] md:w-[85%] mx-auto h-[80px] flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <h1 className="text-white font-extrabold text-xl tracking-wide bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              MyPortfolio
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav>
            <ul className="flex gap-12 text-white font-semibold text-lg relative">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "My Work", path: "/work" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <li key={i} className="group">
                  <Link
                    to={item.path} // ✅ use Link instead of <a>
                    className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 transition relative"
                  >
                    {item.name}
                    {/* Premium underline effect */}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Header (Bottom Navbar) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#040356]/70 backdrop-blur-xl border-t border-indigo-500/30 shadow-lg">
        <ul className="flex justify-around items-center py-3 text-white text-sm font-medium">
          {[
            { name: "Home", path: "/", icon: <Home size={22} /> },
            { name: "About", path: "/about", icon: <User size={22} /> },
            { name: "Work", path: "/work", icon: <Briefcase size={22} /> },
            { name: "Contact", path: "/contact", icon: <Mail size={22} /> },
          ].map((item, i) => (
            <li key={i}>
              <Link
                to={item.path} // ✅ router navigation
                className="flex flex-col items-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 transition relative"
              >
                {item.icon}
                <span className="text-xs">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
