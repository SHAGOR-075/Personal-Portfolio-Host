import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            tag="Get In Touch"
            title="Start a conversation."
            subtitle="Have a question or interested in collaborating? Let's talk about what you're building."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.1}>
              <ContactInfo />
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
