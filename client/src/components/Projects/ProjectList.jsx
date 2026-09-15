import React from 'react';
import ProjectCard from './ProjectCard';
import ScrollReveal from '../common/ScrollReveal';

export default function ProjectList({ projects, onOpenDetails }) {
  // If filtered down to a subset, let the user see either editorial or grid naturally
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Featured Editorial Layout */}
      {featuredProjects.length > 0 && (
        <div className="space-y-8 sm:space-y-10">
          {featuredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.08}>
              <ProjectCard
                project={project}
                index={idx}
                onOpenDetails={onOpenDetails}
                layout="editorial"
              />
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* Grid Layout for Additional Projects */}
      {otherProjects.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-3">
            <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider font-mono">
              Additional Projects & Utilities
            </h3>
            <div className="h-px bg-slate-800 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx * 0.08}>
                <ProjectCard
                  project={project}
                  index={idx}
                  onOpenDetails={onOpenDetails}
                  layout="grid"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
