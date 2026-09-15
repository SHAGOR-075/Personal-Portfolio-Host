import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 950);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0f19]"
        >
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <span className="text-2xl sm:text-3xl font-bold tracking-widest text-white">
                SHAGOR
              </span>
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
            </motion.div>

            {/* Minimal progress bar */}
            <div className="w-36 h-[2px] bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                className="h-full bg-cyan-400"
              />
            </div>

            <p className="text-[11px] font-mono text-slate-500 tracking-wider uppercase">
              Full Stack Developer
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
