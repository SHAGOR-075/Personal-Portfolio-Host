import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import ProjectCard from './ProjectCard';

export default function ProjectsCarousel({ projects, onOpenDetails }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(null);

  if (!projects || projects.length === 0) return null;

  // Ensure currentIndex stays within bounds if projects array changes (e.g. search)
  const safeIndex = Math.min(currentIndex, projects.length - 1);
  const currentProject = projects[safeIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleSelect = (idx) => {
    setDirection(idx > safeIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 90 : -90,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.28, ease: 'easeOut' }
    },
    exit: (dir) => ({
      x: dir > 0 ? -90 : 90,
      opacity: 0,
      transition: { duration: 0.22, ease: 'easeIn' }
    })
  };

  return (
    <div className="w-full select-none">
      {/* Quick Project Select Pills on mobile / tablet */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar border-b border-slate-800/80">
        {projects.map((project, idx) => {
          const isActive = idx === safeIndex;
          return (
            <button
              key={project.id}
              onClick={() => handleSelect(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-slate-600'}`} />
              <span>{project.shortTitle || project.title.split(' - ')[0]}</span>
              {project.featured && (
                <Sparkles className="w-3 h-3 text-emerald-400" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Carousel Area with Touch */}
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation bar above card */}
        <div className="flex items-center justify-between gap-2 mb-3 px-1">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>
              Project <strong className="text-white">{safeIndex + 1}</strong> of{' '}
              <strong className="text-white">{projects.length}</strong>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Animated Project Card Slide */}
        <div className="relative overflow-hidden min-h-[460px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <ProjectCard
                project={currentProject}
                onOpenDetails={onOpenDetails}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-4 mt-2">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => handleSelect(idx)}
              aria-label={`Go to project ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                idx === safeIndex
                  ? 'w-6 bg-emerald-400'
                  : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
