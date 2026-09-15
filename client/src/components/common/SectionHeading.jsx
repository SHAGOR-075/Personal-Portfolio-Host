import React from 'react';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  centered = false,
  className = ''
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {tag && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase rounded-md border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 dark:text-cyan-300 ${centered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span>{tag}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
