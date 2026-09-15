import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, Layers, Sparkles } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import ProjectCard from './ProjectCard';
import ProjectsCarousel from './ProjectsCarousel';
import ProjectModal from './ProjectModal';
import { projects } from '../../data/projects';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Search filtering across title, description, category, and technologies
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects;
    const q = searchQuery.toLowerCase();
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Display either first 3 or all matching projects
  const displayedProjects = useMemo(() => {
    if (showAll || searchQuery.trim().length > 0) {
      return filteredProjects;
    }
    return filteredProjects.slice(0, 3);
  }, [filteredProjects, showAll, searchQuery]);

  const hasMoreThanThree = filteredProjects.length > 3;

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Header matching Screenshot 2 */}
          <div className="space-y-2 mb-8">
            <div className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-emerald-400 uppercase">
              // FEATURED SYSTEMS &amp; FULL-STACK ARTIFACTS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight">
              Projects &amp; Utilities
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
              Selected full-stack web applications, AI prompt engineering studios, microservices, and real-time distributed platforms.
            </p>
          </div>
        </ScrollReveal>

        {/* Project Meta Bar: Showing count & Search Input */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-3 mb-8 border-b border-slate-800/80">
            {/* Status indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>
                Showing <strong className="text-white">{displayedProjects.length}</strong> of{' '}
                <strong className="text-white">{filteredProjects.length}</strong> projects
              </span>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects & tech stack..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 font-mono transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile & Tablet Carousel View */}
        {filteredProjects.length > 0 && (
          <div className="block lg:hidden">
            <ProjectsCarousel
              projects={filteredProjects}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          </div>
        )}

        {/* Desktop 3-Column Projects Grid matching Screenshot 2 */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.08}>
              <ProjectCard
                project={project}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* No Search Results Fallback */}
        {displayedProjects.length === 0 && (
          <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/30 border border-slate-800">
            <p className="text-slate-400 text-sm">No projects matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-cyan-400 hover:underline font-mono"
            >
              Clear search query
            </button>
          </div>
        )}

        {/* See More / See Less Button on Desktop */}
        {hasMoreThanThree && !searchQuery && (
          <div className="hidden lg:flex justify-center mt-10 sm:mt-12">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-cyan-500/50 shadow-lg text-xs sm:text-sm font-mono font-medium transition-all duration-200 cursor-pointer group"
            >
              <span>{showAll ? 'Show Less Projects' : `See More Projects (${filteredProjects.length - 3} more)`}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
