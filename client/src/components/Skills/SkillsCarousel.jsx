import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Layers, Sparkles } from 'lucide-react';
import SkillItem from './SkillItem';

export default function SkillsCarousel({ categories }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(null);

  const activeCategory = categories[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const handleSelectCategory = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      // Swiped left -> next
      handleNext();
    } else if (diff < -45) {
      // Swiped right -> prev
      handlePrev();
    }
    touchStartX.current = null;
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.28, ease: 'easeOut' }
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.22, ease: 'easeIn' }
    })
  };

  return (
    <div className="w-full">
      {/* Category Pills Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar border-b border-slate-800/80">
        {categories.map((cat, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(idx)}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-cyan-400' : 'bg-slate-600'}`} />
              <span>{cat.title}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                {cat.skills.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Carousel Card Container */}
      <div
        className="relative rounded-2xl bg-slate-900/50 border border-slate-800 p-4 sm:p-6 overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header with category title and arrows */}
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {activeCategory.title}
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-1 line-clamp-1">
              {activeCategory.description}
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous skill group"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400 px-1">
              {currentIndex + 1}/{categories.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next skill group"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Animated Slide Content */}
        <div className="relative min-h-[220px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeCategory.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {activeCategory.skills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-4 mt-4 border-t border-slate-800/60">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                idx === currentIndex
                  ? 'w-6 bg-cyan-400'
                  : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
