import React from 'react';
import { ExternalLink, Github, Sparkles, ArrowRight, GitFork } from 'lucide-react';

export default function ProjectCard({ project, onOpenDetails }) {
  const visibleTechs = project.technologies.slice(0, 4);
  const remainingCount = project.technologies.length - visibleTechs.length;

  return (
    <div className="group rounded-2xl bg-[#0e1320] border border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-slate-700 hover:shadow-xl transition-all duration-300">
      {/* Top Image Box */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 cursor-pointer"
        onClick={() => onOpenDetails(project)}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-black/75 backdrop-blur-md text-slate-200 border border-white/10">
            {project.category}
          </span>

          <div className="flex items-center gap-1.5">
            {project.featured && (
              <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-emerald-500 text-white flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 text-white" />
                Featured
              </span>
            )}
            <span className="w-5 h-5 rounded-md text-[11px] font-mono bg-black/70 backdrop-blur-md text-slate-400 flex items-center justify-center border border-white/10">
              0
            </span>
          </div>
        </div>

        {/* Bottom Bar Over Image (Role & Year) */}
        <div className="absolute inset-x-0 bottom-0 p-3 pt-6 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex items-center justify-between text-xs font-mono z-10">
          <span className="text-slate-300 font-medium">
            {project.role || 'Full Stack Architect'}
          </span>
          <span className="text-slate-400">
            {project.year || '2025'}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3
            onClick={() => onOpenDetails(project)}
            className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors cursor-pointer line-clamp-1"
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed mt-1.5">
            {project.description}
          </p>
        </div>

        <div className="space-y-3.5 pt-2">
          {/* Tech Badges */}
          <div className="flex flex-wrap items-center gap-1.5">
            {visibleTechs.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="px-2 py-0.5 rounded text-xs font-mono text-slate-500 bg-slate-900 border border-slate-800">
                +{remainingCount}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
            <div className="flex items-center gap-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Source repository for ${project.title}`}
                className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <GitFork className="w-4 h-4" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="p-1.5 rounded-md text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1 text-xs font-mono font-medium text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <span>Deep Dive</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
