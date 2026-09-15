import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Education from '../../components/Education/Education';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Preloader from '../../components/common/Preloader';
import ResumeModal from '../../components/common/ResumeModal';
import { personalInfo, socialLinks } from '../../data/socialLinks';

export default function Home() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('shagor_portfolio_theme') || 'dark';
  });

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Sync theme with document element and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('shagor_portfolio_theme', theme);
  }, [theme]);

  // Scroll listener for floating back to top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Short 1s Preloader */}
      <Preloader onComplete={() => setLoadingDone(true)} />

      {/* Primary Sticky Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          onNavigate={scrollToSection}
          socialLinks={socialLinks}
          onOpenResume={() => setResumeModalOpen(true)}
        />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onScrollToTop={scrollToTop} />

      {/* Download Resume Pop-up Modal matching Screenshot (9) */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Floating Back-to-Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 shadow-xl hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-200 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 text-cyan-400" />
        </button>
      )}
    </div>
  );
}
