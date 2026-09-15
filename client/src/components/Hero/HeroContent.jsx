import React from 'react';
import { motion } from 'motion/react';
import HeroActions from './HeroActions';
import AnimatedRole from '../common/AnimatedRole';

export default function HeroContent({ onNavigate, socialLinks, onOpenResume }) {
  return (
    <div className="flex flex-col justify-center space-y-6 max-w-2xl">
      {/* Availability Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium w-fit"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Available for full-time & freelance projects</span>
      </motion.div>

      {/* Main Title & Role */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-2"
      >
        <p className="text-sm sm:text-base font-medium text-slate-400 tracking-wide uppercase">
          Hello, my name is
        </p>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1]">
          Md. Kharul Islam <span className="text-cyan-400">Shagor</span>
        </h1>
        <AnimatedRole size="hero" />
      </motion.div>

      {/* Natural developer copy */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-xl"
      >
        I build practical web applications with clean interfaces and reliable functionality.
        Specializing in the React and Node.js ecosystem, I focus on clean architectural
        decisions, responsive design, and performant web experiences.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <HeroActions onNavigate={onNavigate} socialLinks={socialLinks} onOpenResume={onOpenResume} />
      </motion.div>
    </div>
  );
}
