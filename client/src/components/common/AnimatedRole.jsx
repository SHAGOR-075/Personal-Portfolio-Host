import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Layers, Sparkles, Terminal } from 'lucide-react';

const roles = [
  {
    id: 'fullstack',
    title: 'Full Stack Web Developer',
    category: 'Architecture & Engineering',
    colorClass: 'text-cyan-600 dark:text-cyan-400',
    borderClass: 'border-cyan-500/30',
    bgClass: 'bg-cyan-500/10',
    Icon: Code2,
  },
  {
    id: 'mern',
    title: 'MERN Stack Developer',
    category: 'MongoDB, Express, React, Node',
    colorClass: 'text-blue-600 dark:text-blue-400',
    borderClass: 'border-blue-500/30',
    bgClass: 'bg-blue-500/10',
    Icon: Layers,
  },
  {
    id: 'ai-prompt',
    title: 'AI Prompt Engineer',
    category: 'Generative AI & LLMs',
    colorClass: 'text-emerald-600 dark:text-emerald-400',
    borderClass: 'border-emerald-500/30',
    bgClass: 'bg-emerald-500/10',
    Icon: Sparkles,
  },
];

export default function AnimatedRole({ size = 'hero', className = '' }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const currentRole = roles[index];
  const Icon = currentRole.Icon;

  if (size === 'compact') {
    return (
      <div className={`inline-flex items-center gap-1.5 h-6 overflow-hidden ${className}`}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentRole.id}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className={`inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-medium ${currentRole.colorClass}`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{currentRole.title}</span>
          </motion.span>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none pt-1 ${className}`}>
      {/* Animated Role Text Container */}
      <div className="relative h-9 sm:h-10 flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRole.id}
            initial={{ y: 22, opacity: 0, filter: 'blur(3px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: -22, opacity: 0, filter: 'blur(3px)' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex items-center gap-2.5"
          >
            {/* Animated Icon badge */}
            <div className={`p-1.5 rounded-lg border ${currentRole.borderClass} ${currentRole.bgClass} ${currentRole.colorClass}`}>
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>

            {/* Dynamic Role Text */}
            <div className="flex items-center">
              <span className={`text-lg sm:text-2xl font-bold font-mono tracking-tight ${currentRole.colorClass}`}>
                {currentRole.title}
              </span>
              {/* Terminal blinking cursor */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                className={`ml-1 inline-block w-2 sm:w-2.5 h-5 sm:h-6 bg-current ${currentRole.colorClass} opacity-80`}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
