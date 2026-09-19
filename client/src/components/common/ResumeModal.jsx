import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X, ShieldAlert, Send, MessageSquare, Copy, Check } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const email = 'mdkharulislamshagor@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Dialog Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-[#0e1320] border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-2xl z-10 overflow-hidden"
          >
            {/* Top Bar: Icon + Title + Close button */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Download Resume
                  </h3>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                    Direct Verification &amp; Authorization
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Amber Alert Notice Box matching Screenshot (9).png */}
            <div className="mt-5 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300/80 dark:border-amber-500/30 text-amber-900 dark:text-amber-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 dark:text-amber-400">
                <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
                <span>Contact Admin to Download Resume</span>
              </div>
              <p className="text-xs text-amber-800/90 dark:text-amber-200/90 leading-relaxed mt-2">
                To protect personal privacy and references, please connect with the
                administrator via <strong className="text-amber-950 dark:text-amber-100 font-semibold">Telegram</strong> or{' '}
                <strong className="text-amber-950 dark:text-amber-100 font-semibold">WhatsApp</strong> to receive the latest unredacted PDF resume and academic transcripts.
              </p>
            </div>

            {/* Section Tag */}
            <div className="font-mono text-[11px] font-semibold text-slate-500 tracking-wider uppercase mt-6 mb-3">
              // INSTANT DIRECT CHANNELS
            </div>

            {/* Direct Channel Cards (Telegram & WhatsApp) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Telegram */}
              <a
                href="https://t.me/ShAgOr075"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/30 hover:bg-sky-100 dark:hover:bg-sky-950/50 border border-sky-200 dark:border-sky-600/40 hover:border-sky-400 dark:hover:border-sky-500 transition-all duration-200 flex items-center justify-between group cursor-pointer shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Send className="w-4 h-4 -rotate-12 translate-x-0.5" />
                  </div>
                  <div className="min-w-0 text-left">
                    <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      Telegram
                    </div>
                    <div className="text-[11px] font-mono text-sky-600 dark:text-sky-300 truncate">
                      @ShAgOr075
                    </div>
                  </div>
                </div>
                <span className="text-slate-400 dark:text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400 text-xs font-mono ml-2">↗</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.link/jpfxl2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 hover:bg-emerald-100 dark:hover:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-600/40 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-200 flex items-center justify-between group cursor-pointer shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 text-left">
                    <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      WhatsApp
                    </div>
                    <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-300">
                      Direct Message
                    </div>
                  </div>
                </div>
                <span className="text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 text-xs font-mono ml-2">↗</span>
              </a>
            </div>

            {/* Bottom Email Strip with Copy button */}
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 truncate">
                <span className="text-slate-400 dark:text-slate-500">✉</span>
                <span className="text-slate-700 dark:text-slate-300 font-medium truncate">{email}</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
