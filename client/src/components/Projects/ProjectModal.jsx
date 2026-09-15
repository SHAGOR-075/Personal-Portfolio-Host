import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Star } from 'lucide-react';
import Button from '../common/Button';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 my-auto text-left"
          >
            {/* Header & Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 sticky top-0 z-20 backdrop-blur-xs">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-xs font-mono rounded bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                  {project.category}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Overview</span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close project modal"
                className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
              {/* Media banner */}
              <div className="aspect-16/9 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Title & Tagline */}
              <div>
                <h3
                  id="modal-project-title"
                  className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight"
                >
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-cyan-600 dark:text-cyan-400 mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Detailed Description */}
              <div className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed space-y-3">
                <p>{project.longDescription || project.description}</p>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider font-mono">
                    Architectural &amp; Functional Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-950/40 p-3 rounded-lg border border-slate-200 dark:border-slate-800/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Applied */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider font-mono">
                  Stack &amp; Tooling
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/80 flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-20 backdrop-blur-xs">
              <div className="flex items-center gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  href={project.liveUrl}
                  target="_blank"
                  icon={ExternalLink}
                  iconPosition="right"
                >
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  href={project.githubUrl}
                  target="_blank"
                  icon={Github}
                  iconPosition="left"
                >
                  View Code
                </Button>
              </div>

              <Button variant="ghost" size="sm" onClick={onClose}>
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
