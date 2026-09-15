import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function EducationItem({ item }) {
  return (
    <div className="relative pl-6 sm:pl-8 pb-8 border-l border-slate-800 last:pb-0 group">
      {/* Timeline Node */}
      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-cyan-400 group-hover:bg-cyan-950 transition-colors" />

      <div className="p-5 sm:p-6 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800 light:border-slate-200 hover:border-slate-700 transition-colors space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
          <h4 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900">
            {item.degree}
          </h4>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-500/20 w-fit">
            <Calendar className="w-3 h-3" />
            {item.period}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 font-medium">
          <span className="text-slate-200">{item.institution}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            {item.location}
          </span>
          <span>•</span>
          <span className="text-cyan-400 font-mono">{item.grade}</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          {item.description}
        </p>

        {item.highlights && item.highlights.length > 0 && (
          <ul className="space-y-1.5 pt-1 text-xs text-slate-400">
            {item.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-cyan-400 text-xs mt-0.5 font-bold">›</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
