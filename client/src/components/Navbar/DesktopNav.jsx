import React from 'react';
import { Github, Linkedin, FileText, Sun, Moon } from 'lucide-react';
import Button from '../common/Button';

export default function DesktopNav({
  navLinks,
  activeSection,
  onNavigate,
  theme,
  onToggleTheme,
  onOpenResume
}) {
  return (
    <div className="hidden md:flex items-center gap-8">
      {/* Navigation Links */}
      <nav aria-label="Main Navigation" className="flex items-center gap-1 lg:gap-2">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                isActive
                  ? 'text-cyan-400 font-semibold'
                  : 'text-slate-300 hover:text-white dark:text-slate-300 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900'
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-400 rounded-full" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Action utilities and Socials */}
      <div className="flex items-center gap-3 pl-4 border-l border-slate-700/60 dark:border-slate-800 light:border-slate-300">
        <a
          href="https://github.com/SHAGOR-075"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-2 text-slate-400 hover:text-white transition-colors rounded-md hover:bg-slate-800/50"
        >
          <Github className="w-4 h-4" />
        </a>

        <a
          href="https://www.linkedin.com/in/md-kharul-islam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-2 text-slate-400 hover:text-white transition-colors rounded-md hover:bg-slate-800/50"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        {/* Theme Toggle */}
        <button
          onClick={onToggleTheme}
          aria-label="Toggle Theme"
          className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-md hover:bg-slate-800/50 cursor-pointer"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>

        {/* Resume Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onOpenResume}
          icon={FileText}
          iconPosition="left"
        >
          Resume
        </Button>
      </div>
    </div>
  );
}
