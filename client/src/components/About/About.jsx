import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import AnimatedRole from '../common/AnimatedRole';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Narrative Content matching Screenshot 1 */}
            <div className="lg:col-span-7 space-y-5">
              <div className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-emerald-400 uppercase">
                // BACKGROUND &amp; ENGINEERING
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white dark:text-white light:text-slate-900 tracking-tight leading-tight">
                Full Stack &amp; MERN Stack Developer | AI Prompt Engineer
              </h2>

              <div className="space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a Computer Science &amp; Engineering graduate and full-stack software developer passionate about crafting modern, ultra-fast web applications and AI prompt solutions. My work focuses on scalable full-stack architectures, intuitive user interfaces, and generative AI integrations.
                </p>

                <p>
                  I have engineered robust backend microservices, real-time dashboards with WebSockets, and modern responsive frontend applications using React, Next.js, and Tailwind CSS. I prioritize clean code craftsmanship, reliable APIs, and delightful user experiences.
                </p>

                <p>
                  When I'm not developing web applications, I explore latest advancements in AI models, prompt engineering, and open-source software development.
                </p>
              </div>
            </div>

            {/* Right Profile Card matching Screenshot 1 */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-2xl group transition-all duration-300 hover:border-slate-700">
                {/* Image Container with Badges */}
                <div className="relative aspect-[4/3.5] sm:aspect-[4/3.8] w-full overflow-hidden bg-slate-950">
                  <img
                    src="https://i.ibb.co.com/1YFxvzDk/Whats-App-Image-2026-09-15-at-8-15-38-PM.jpg"
                    alt="Md. Kharul Islam Shagor"
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-102 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Top Left: Available for Hire Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/60 shadow-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-200">
                      Available for Hire
                    </span>
                  </div>

                  {/* Top Right: Full Stack Dev Badge */}
                  <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-white text-xs font-semibold shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    <span>Full Stack Dev</span>
                  </div>

                  {/* Bottom Gradient with Name & Title */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 pt-12 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                    <h3 className="text-xl sm:text-2xl font-bold !text-white tracking-tight">
                      Md. Kharul Islam Shagor
                    </h3>
                    <div className="mt-0.5">
                      <AnimatedRole size="compact" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
