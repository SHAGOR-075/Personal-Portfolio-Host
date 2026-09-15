import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle, Copy, Check, Clock } from 'lucide-react';
import { personalInfo } from '../../data/socialLinks';

export default function ContactInfo() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Let's discuss your next project.
        </h3>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          I am currently open to new opportunities, freelance contracts, and software engineering roles.
          Feel free to reach out directly via email or the form.
        </p>
      </div>

      <div className="space-y-3.5 pt-2">
        {/* Email Card with Copy button */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-slate-500 font-mono">Email Address</div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors truncate block"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
            className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Location */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-slate-800 text-slate-400 shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-mono">Location</div>
            <div className="text-sm font-medium text-slate-200">
              {personalInfo.location} (Open to Remote Worldwide)
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-mono">Current Status</div>
            <div className="text-sm font-medium text-emerald-400">
              {personalInfo.availability}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
