import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/socialLinks';

export default function Footer({ onScrollToTop }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand & Brief */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.shortName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
            <p className="text-xs text-slate-400">
              {personalInfo.name} — Full Stack Developer
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={onScrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom copyright & socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {personalInfo.name}. Designed & coded with clean standards.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/shagor-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/shagor-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:shagor.workstation@gmail.com"
              className="hover:text-slate-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
