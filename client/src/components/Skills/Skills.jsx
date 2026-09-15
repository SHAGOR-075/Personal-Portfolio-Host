import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import SkillGroup from './SkillGroup';
import SkillsCarousel from './SkillsCarousel';
import { skillCategories } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            tag="Technical Stack"
            title="Core technologies and toolchains I work with."
            subtitle="Hands-on proficiency across modern full-stack development, server architectures, and deployment pipelines."
          />
        </ScrollReveal>

        {/* Mobile & Tablet Carousel View */}
        <div className="block lg:hidden mt-8">
          <SkillsCarousel categories={skillCategories} />
        </div>

        {/* Desktop Expansive 2-Column Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 lg:gap-12 mt-8">
          {skillCategories.map((category, idx) => (
            <ScrollReveal key={category.id} delay={idx * 0.1}>
              <SkillGroup category={category} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
