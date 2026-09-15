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
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
            aria-hidden="true"
          />

          {/* Menu Drawer */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-16 inset-x-4 z-50 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl md:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      onNavigate(link.id);
                      onClose();
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-left text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
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

              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href="https://github.com/shagor-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 rounded-lg"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/shagor-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 rounded-lg"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:shagor.workstation@gmail.com"
                  aria-label="Email"
                  className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 rounded-lg"
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
