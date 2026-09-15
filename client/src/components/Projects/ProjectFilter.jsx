import React from 'react';
import { motion } from 'motion/react';

export default function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800/80 dark:border-slate-800 light:border-slate-200">
      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mr-2">
        Filter:
      </span>
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              isActive
                ? 'text-white bg-slate-800 border border-slate-700'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/60 border border-transparent'
            }`}
          >
            {cat}
            {isActive && (
              <motion.span
                layoutId="activeFilterIndicator"
                className="absolute inset-0 rounded-lg border border-cyan-500/40 pointer-events-none"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
