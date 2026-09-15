import React from 'react';
import { ArrowDown, FileText, Send, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../common/Button';

export default function HeroActions({ onNavigate, socialLinks, onOpenResume }) {
  return (
    <div className="space-y-6 pt-2">
      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <Button
          variant="primary"
          size="lg"
          href="#projects"
          onClick={() => onNavigate('projects')}
          icon={ArrowDown}
          iconPosition="right"
        >
          View Projects
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={onOpenResume}
          icon={FileText}
          iconPosition="left"
        >
          Download Resume
        </Button>

        <Button
          variant="ghost"
          size="lg"
          href="#contact"
          onClick={() => onNavigate('contact')}
          icon={Send}
          iconPosition="right"
        >
          Contact Me
        </Button>
      </div>

      {/* Social Links Row */}
      <div className="flex items-center gap-4 pt-1">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
          Connect:
        </span>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/SHAGOR-075"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-md transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-kharul-islam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-md transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:mdkharulislamshagor@gmail.com"
            aria-label="Email"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-md transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
