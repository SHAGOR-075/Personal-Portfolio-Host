import React from 'react';
import SkillItem from './SkillItem';

export default function SkillGroup({ category }) {
  return (
    <div className="space-y-4">
      <div className="border-b border-slate-800/80 dark:border-slate-800 light:border-slate-200 pb-3">
        <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          {category.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {category.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
