import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ theme, onToggleTheme, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }

      // Track active section
      const sectionIds = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent">
        <div
          className="h-full bg-cyan-500 transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-slate-950/85 dark:bg-slate-950/90 light:bg-white/90 backdrop-blur-md border-b border-slate-800/80 dark:border-slate-800 light:border-slate-200 shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <span className="text-xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
              SHAGOR
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </a>

          {/* Desktop Navigation */}
          <DesktopNav
            navLinks={navLinks}
            activeSection={activeSection}
            onNavigate={scrollToSection}
            theme={theme}
            onToggleTheme={onToggleTheme}
            onOpenResume={onOpenResume}
          />

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className="p-2 text-slate-300 hover:text-cyan-400 transition-colors rounded-lg bg-slate-900/80 border border-slate-800"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2 text-slate-300 hover:text-white transition-colors rounded-lg bg-slate-900/80 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenResume={onOpenResume}
      />
    </>
  );
}
