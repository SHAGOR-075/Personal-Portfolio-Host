import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

export default function Hero({ onNavigate, socialLinks, onOpenResume }) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 order-1">
            <HeroContent onNavigate={onNavigate} socialLinks={socialLinks} onOpenResume={onOpenResume} />
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-5 order-2 flex justify-center lg:justify-end">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
