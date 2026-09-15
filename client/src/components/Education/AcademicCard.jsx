import React, { useState } from 'react';
import { Calendar, MapPin, BookOpen, GraduationCap } from 'lucide-react';

export function InstitutionLogo({ type, logo, logoUrl, image, alt = 'Institution logo' }) {
  const [imgError, setImgError] = useState(false);
  const src = logo || logoUrl || image;

  // If a custom logo image URL is provided and hasn't errored, render the image
  if (src && !imgError) {
    return (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0f172a] border border-slate-700 flex items-center justify-center p-1.5 shadow-sm shrink-0 overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain rounded-lg"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      </div>
    );
  }

  // Fallback: WUB Emblem SVG
  if (type === 'wub') {
    return (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0f172a] border border-slate-700 flex flex-col items-center justify-center p-1 shadow-sm shrink-0">
        <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
          <circle cx="24" cy="24" r="22" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M24 8L36 15V27C36 34 24 40 24 40C24 40 12 27V15L24 8Z" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
          <text x="24" y="27" textAnchor="middle" fill="#f8fafc" fontSize="8" fontWeight="bold" fontFamily="monospace">WUB</text>
        </svg>
      </div>
    );
  }

  // Fallback: School Emblem SVG
  if (type === 'school') {
    return (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0f172a] border border-slate-700 flex items-center justify-center p-1 shadow-sm shrink-0">
        <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
          <circle cx="24" cy="24" r="21" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
          <circle cx="24" cy="24" r="14" fill="#991b1b" />
          <path d="M24 14L26 21H33L27 25L29 32L24 28L19 32L21 25L15 21H22L24 14Z" fill="#fbbf24" />
        </svg>
      </div>
    );
  }

  // Generic Academic Fallback
  return (
    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0f172a] border border-slate-700 flex items-center justify-center p-1 shadow-sm shrink-0 text-emerald-400">
      <GraduationCap className="w-6 h-6" />
    </div>
  );
}

export default function AcademicCard({ degree }) {
  const logoSrc = degree?.logo || degree?.logoUrl || degree?.image;

  return (
    <div className="rounded-2xl bg-[#0e1320] border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300">
      <div>
        {/* Top row: Emblem and Date Badge */}
        <div className="flex items-start justify-between gap-3">
          <InstitutionLogo
            logo={logoSrc}
            type={degree?.logoType}
            alt={degree?.institution || degree?.degree}
          />

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>{degree?.period}</span>
          </div>
        </div>

        {/* Degree Title & Institution */}
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-4 leading-snug">
          {degree?.degree}
        </h3>

        <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
          <span>{degree?.institution}</span>
          {degree?.hasThesis ? ' •' : ''}
        </div>

        <div className="flex items-start gap-1 text-xs text-slate-400 mt-1">
          <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
          <span>{degree?.location}</span>
        </div>
      </div>

      {/* Thesis Box if present */}
      {degree?.hasThesis && (
        <div className="mt-5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Research Focus / Thesis:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 italic mt-1 font-sans">
            "{degree.thesisTitle}"
          </p>
        </div>
      )}
    </div>
  );
}
