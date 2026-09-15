import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

export default function Certification({ item }) {
  return (
    <div className="p-5 sm:p-6 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between space-y-4">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded">
            {item.date}
          </span>
        </div>

        <div>
          <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900 leading-snug">
            {item.title}
          </h4>
          <p className="text-xs font-medium text-cyan-400 mt-0.5">
            {item.issuer}
          </p>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="space-y-2 pt-3 border-t border-slate-800/80">
        <div className="text-[11px] font-mono text-slate-500">
          ID: {item.credentialId}
        </div>
        <div className="flex flex-wrap gap-1">
          {item.skillsCovered.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/80 text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
