import React from 'react';
import {
  Code2,
  FileCode,
  Layers,
  Palette,
  Server,
  Network,
  Lock,
  Database,
  GitBranch,
  Github,
  Cloud,
  Globe,
  Terminal,
  Cpu
} from 'lucide-react';

const iconMap = {
  React: Code2,
  JavaScript: FileCode,
  'Next.js': Globe,
  'Tailwind CSS': Palette,
  'Node.js': Server,
  'Express.js': Cpu,
  'REST API': Network,
  JWT: Lock,
  MongoDB: Database,
  Mongoose: Layers,
  Git: GitBranch,
  GitHub: Github,
  Vercel: Cloud,
  Netlify: Terminal
};

export default function SkillItem({ skill }) {
  const Icon = iconMap[skill.name] || Code2;

  return (
    <div className="group relative p-4 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-200 hover:-translate-y-0.5 cursor-default">
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 rounded-lg bg-slate-800/80 dark:bg-slate-800 light:bg-slate-200 text-cyan-400 group-hover:text-cyan-300 group-hover:bg-cyan-950/40 transition-colors shrink-0">
          <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h4 className="text-sm font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors truncate">
              {skill.name}
            </h4>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-500 light:text-slate-400 shrink-0">
              {skill.level}
            </span>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-2 leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  );
}
