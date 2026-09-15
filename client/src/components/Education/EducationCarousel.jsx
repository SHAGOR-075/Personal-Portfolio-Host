import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, GraduationCap, Award, FileText, ExternalLink, Calendar, MapPin, BookOpen } from 'lucide-react';
import AcademicCard from './AcademicCard';

export default function EducationCarousel({ degrees, fellowships, certifications }) {
  const [activeTab, setActiveTab] = useState('degrees'); // 'degrees' | 'distinctions'
  const [degreeIndex, setDegreeIndex] = useState(0);
  const [distinctionIndex, setDistinctionIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(null);

  const distinctionsList = useMemo(() => {
    const list = [];
    if (fellowships) {
      fellowships.forEach((f) => list.push({ ...f, itemType: 'fellowship' }));
    }
    if (certifications) {
      certifications.forEach((c) => list.push({ ...c, itemType: 'certification' }));
    }
    return list;
  }, [fellowships, certifications]);

  const isDegrees = activeTab === 'degrees';
  const currentList = isDegrees ? degrees : distinctionsList;
  const currentIndex = isDegrees ? degreeIndex : distinctionIndex;

  const handleNext = () => {
    setDirection(1);
    if (isDegrees) {
      setDegreeIndex((prev) => (prev + 1) % degrees.length);
    } else {
      setDistinctionIndex((prev) => (prev + 1) % distinctionsList.length);
    }
  };

  const handlePrev = () => {
    setDirection(-1);
    if (isDegrees) {
      setDegreeIndex((prev) => (prev - 1 + degrees.length) % degrees.length);
    } else {
      setDistinctionIndex((prev) => (prev - 1 + distinctionsList.length) % distinctionsList.length);
    }
  };

  const handleSelect = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    if (isDegrees) {
      setDegreeIndex(idx);
    } else {
      setDistinctionIndex(idx);
    }
  };

  const handleSwitchTab = (tab) => {
    if (tab === activeTab) return;
    setDirection(tab === 'distinctions' ? 1 : -1);
    setActiveTab(tab);
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

  const currentItem = currentList[currentIndex];

  return (
    <div className="w-full select-none">
      {/* Category Tabs: Academic Degrees vs Fellowships & Certs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar border-b border-slate-800/80">
        <button
          onClick={() => handleSwitchTab('degrees')}
          className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'degrees'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
              : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-emerald-400" />
          <span>Academic Degrees</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
            {degrees.length}
          </span>
        </button>

        <button
          onClick={() => handleSwitchTab('distinctions')}
          className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'distinctions'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
              : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200'
          }`}
        >
          <Award className="w-4 h-4 text-amber-400" />
          <span>Fellowships &amp; Certs</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
            {distinctionsList.length}
          </span>
        </button>
      </div>

      {/* Carousel Container */}
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Top Header */}
        <div className="flex items-center justify-between gap-2 mb-3 px-1">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>
              {isDegrees ? 'Degree' : 'Credential'}{' '}
              <strong className="text-white">{currentIndex + 1}</strong> of{' '}
              <strong className="text-white">{currentList.length}</strong>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              aria-label="Previous item"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next item"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Animated Card Slide */}
        <div className="relative overflow-hidden min-h-[300px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={`${activeTab}-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              {isDegrees ? (
                <AcademicCard degree={currentItem} />
              ) : currentItem.itemType === 'fellowship' ? (
                /* Fellowship Card */
                <div className="rounded-2xl bg-[#0e1320] border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300">
                  <div className="flex items-start gap-3.5">
                    {currentItem.logo || currentItem.logoUrl || currentItem.image ? (
                      <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-slate-700 flex items-center justify-center p-1.5 shrink-0 overflow-hidden shadow-sm">
                        <img src={currentItem.logo || currentItem.logoUrl || currentItem.image} alt={currentItem.issuer} className="w-full h-full object-contain rounded-lg" loading="lazy" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-amber-950/40 border border-amber-800/50 flex items-center justify-center text-amber-400 shrink-0">
                        <Award className="w-6 h-6" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {currentItem.title}
                        </h4>
                        <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium text-amber-400 bg-amber-950/50 border border-amber-800/60 self-start sm:self-auto">
                          {currentItem.year || currentItem.period}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                        {currentItem.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4 pt-3 border-t border-slate-800/70">
                    {currentItem.description}
                  </p>
                </div>
              ) : (
                /* Certification Card */
                <div className="rounded-2xl bg-[#0e1320] border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300">
                  <div className="flex items-start gap-3.5">
                    {currentItem.logo || currentItem.logoUrl || currentItem.image ? (
                      <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-slate-700 flex items-center justify-center p-1.5 shrink-0 overflow-hidden shadow-sm">
                        <img src={currentItem.logo || currentItem.logoUrl || currentItem.image} alt={currentItem.issuer} className="w-full h-full object-contain rounded-lg" loading="lazy" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-blue-950/50 border border-blue-800/60 flex items-center justify-center text-blue-400 shrink-0">
                        <svg viewBox="0 0 48 48" className="w-6 h-6 fill-blue-400">
                          <circle cx="24" cy="24" r="20" fill="#1e40af" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
                          <circle cx="24" cy="24" r="5" fill="#60a5fa" />
                          <path d="M24 10V18M24 30V38M12 24H20M28 24H36M15 15L20 20M28 28L33 33M15 33L20 28M28 20L33 15" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {currentItem.title}
                        </h4>
                        <span className="px-2 py-0.5 rounded text-xs font-mono font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 self-start sm:self-auto">
                          {currentItem.year}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                        {currentItem.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Skills tags */}
                  {currentItem.skills && currentItem.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800/70">
                      {currentItem.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Verification link */}
                  {currentItem.verifyUrl && (
                    <div className="mt-4">
                      <a
                        href={currentItem.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <span>Verify Credential on Issuer Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-4 mt-2">
          {currentList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              aria-label={`Go to item ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                idx === currentIndex
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
