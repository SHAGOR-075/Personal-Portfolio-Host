import React from 'react';
import { CheckCircle2, Code2, Compass, Layers } from 'lucide-react';

export default function AboutContent() {
  return (
    <div className="space-y-6 text-slate-300 dark:text-slate-300 light:text-slate-700 text-base sm:text-lg leading-relaxed">
      <p>
        I am a developer who genuinely enjoys turning ideas into working software.
        My interest began with understanding how web systems communicate behind the scenes,
        which naturally grew into full-stack application development using JavaScript,
        React, Node.js, and MongoDB.
      </p>

      <p>
        In my day-to-day work, I build full-stack web applications that solve practical tasks—such as
        transparent institutional voting portals, fleet reservation systems, and real estate
        search tools. I believe code should be easy to read, interfaces should be predictable,
        and systems should operate without unnecessary complexity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
          <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm mb-1.5">
            <Layers className="w-4 h-4" />
            <span>Architecture & Principles</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-normal">
            Modular component structure, reusable hooks, semantic HTML, and deterministic state management.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/80">
          <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm mb-1.5">
            <Compass className="w-4 h-4" />
            <span>Current Focus</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-normal">
            Deepening full-stack performance profiling, Next.js server components, and database query optimization.
          </p>
        </div>
      </div>
    </div>
  );
}
