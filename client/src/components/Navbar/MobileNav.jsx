import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, FileText, X } from 'lucide-react';
import Button from '../common/Button';

export default function MobileNav({
  isOpen,
  onClose,
  navLinks,
  activeSection,
  onNavigate,
  onOpenResume
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />

          {/* Right-side Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col bg-slate-950 border-l border-slate-800 shadow-2xl md:hidden overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
              <span className="text-lg font-bold tracking-tight text-white">
                SHAGOR<span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1 mb-1 align-middle" />
              </span>
              <button
                onClick={onClose}
                aria-label="Close Menu"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-4 py-6 flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      onNavigate(link.id);
                      onClose();
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-left text-base font-medium transition-all duration-150 ${
                      isActive
                        ? 'bg-cyan-950/50 text-cyan-400 border border-cyan-500/25'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Footer Actions */}
            <div className="px-4 pb-8 pt-4 border-t border-slate-800 flex flex-col gap-3">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={FileText}
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
              >
                Download Resume
              </Button>

              <div className="flex items-center justify-center gap-3 pt-1">
                <a
                  href="https://github.com/shagor-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/shagor-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:shagor.workstation@gmail.com"
                  aria-label="Email"
                  className="p-2.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
