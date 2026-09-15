import React from 'react';
import { Award, FileText, ExternalLink, Sparkles } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import AcademicCard from './AcademicCard';
import EducationCarousel from './EducationCarousel';
import { academicDegrees, fellowshipsData, cloudCertifications } from '../../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Header matching Screenshot 3 */}
          <div className="space-y-2 mb-10">
            <div className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-emerald-400 uppercase">
              // ACADEMIC TRAJECTORY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight">
              Education &amp; Graduate Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
              Formal degrees, doctoral &amp; graduate systems coursework, research labs, and academic recognitions.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile & Tablet Carousel View */}
        <div className="block lg:hidden mb-4">
          <EducationCarousel
            degrees={academicDegrees}
            fellowships={fellowshipsData}
            certifications={cloudCertifications}
          />
        </div>

        {/* Desktop View: 3 Academic Degree Cards + 2 Distinction/Cert Columns */}
        <div className="hidden lg:block">
          {/* 3 Academic Degree Cards in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {academicDegrees.map((degree, idx) => (
              <ScrollReveal key={degree.id} delay={idx * 0.08}>
                <AcademicCard degree={degree} />
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom Section: 2 Columns (Fellowships & Certifications) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Left Column: Graduate Fellowships & Grants */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2 text-base sm:text-lg font-bold text-white">
                    <Award className="w-5 h-5 text-amber-400" />
                    <span>Graduate Fellowships &amp; Grants</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {fellowshipsData.length} Distinctions
                  </span>
                </div>

                {fellowshipsData.map((item) => {
                  const logoSrc = item.logo || item.logoUrl || item.image;
                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-[#0e1320] border border-slate-800/90 p-5 sm:p-6 flex items-start gap-4 hover:border-slate-700 transition-all duration-300"
                    >
                      {/* Logo Box / Amber Medal Box */}
                      {logoSrc ? (
                        <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-slate-700 flex items-center justify-center p-1.5 shrink-0 overflow-hidden shadow-sm">
                          <img src={logoSrc} alt={item.issuer} className="w-full h-full object-contain rounded-lg" loading="lazy" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-amber-950/40 border border-amber-800/50 flex items-center justify-center text-amber-400 shrink-0">
                          <Award className="w-6 h-6" />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                            {item.title}
                          </h4>
                          <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium text-amber-400 bg-amber-950/50 border border-amber-800/60 self-start sm:self-auto">
                            {item.year || item.period}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                          {item.issuer}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Right Column: Industry Cloud Certifications */}
            <ScrollReveal delay={0.15}>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2 text-base sm:text-lg font-bold text-white">
                    <FileText className="w-5 h-5 text-emerald-400" />
                    <span>Industry Cloud Certifications</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {cloudCertifications.length} Credentials
                  </span>
                </div>

                {cloudCertifications.map((item) => {
                  const logoSrc = item.logo || item.logoUrl || item.image;
                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-[#0e1320] border border-slate-800/90 p-5 sm:p-6 flex items-start gap-4 hover:border-slate-700 transition-all duration-300"
                    >
                      {/* Logo Box / Blue Kubernetes Wheel Box */}
                      {logoSrc ? (
                        <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-slate-700 flex items-center justify-center p-1.5 shrink-0 overflow-hidden shadow-sm">
                          <img src={logoSrc} alt={item.issuer} className="w-full h-full object-contain rounded-lg" loading="lazy" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-blue-950/50 border border-blue-800/60 flex items-center justify-center text-blue-400 shrink-0">
                          <svg viewBox="0 0 48 48" className="w-6 h-6 fill-blue-400">
                            <circle cx="24" cy="24" r="20" fill="#1e40af" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
                            <circle cx="24" cy="24" r="5" fill="#60a5fa" />
                            <path d="M24 10V18M24 30V38M12 24H20M28 24H36M15 15L20 20M28 28L33 33M15 33L20 28M28 20L33 15" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                            {item.title}
                          </h4>
                          <span className="px-2 py-0.5 rounded text-xs font-mono font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 self-start sm:self-auto">
                            {item.year}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                          {item.issuer}
                        </p>

                        {/* Skill Tags */}
                        {item.skills && item.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {item.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Verification Link */}
                        {item.verifyUrl && (
                          <div className="mt-4">
                            <a
                              href={item.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                            >
                              <span>Verify Credential on Issuer Site</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
