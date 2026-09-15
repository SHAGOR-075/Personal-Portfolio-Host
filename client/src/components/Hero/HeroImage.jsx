import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Terminal } from 'lucide-react';

export default function HeroImage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 10, y: y * 10 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative flex items-center justify-center py-4 lg:py-0 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Very subtle ambient light behind profile */}
      <div className="absolute inset-0 max-w-sm mx-auto bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Profile Container */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
        className="relative z-10 w-64 sm:w-72 md:w-80 aspect-square"
      >
        {/* Subtle border outline */}
        <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-700/80 dark:border-slate-800 bg-slate-900 shadow-xl relative group">
          <img
            src="https://i.ibb.co.com/G3BpN2Ns/IMG-4119-copy.jpg"
            alt="Md. Kharul Islam Shagor - Full Stack Developer"
            className="w-full h-full object-cover object-center  contrast-105 group-hover:grayscale-0 transition-all duration-500 ease-out"
            loading="eager"
          />

          {/* Minimal developer corner badge */}
          <div className="absolute bottom-3 left-3 right-3 py-2 px-3 bg-slate-950/90 backdrop-blur-xs border border-slate-800 rounded-lg flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-mono">stack: MERN + React</span>
            </div>
            <span className="text-[10px] uppercase tracking-wider font-mono text-cyan-400">
              Active
            </span>
          </div>
        </div>

        {/* Small decorative geometry accent */}
        <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r-2 border-b-2 border-cyan-500/30 rounded-br-xl pointer-events-none" />
        <div className="absolute -top-2 -left-2 w-16 h-16 border-l-2 border-t-2 border-slate-700/40 rounded-tl-xl pointer-events-none" />
      </motion.div>
    </div>
  );
}
