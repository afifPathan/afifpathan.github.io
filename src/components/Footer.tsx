import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-[#05070b] py-12 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-slate-900 border border-cyan-500/30 text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
              AP
            </span>
            <span className="text-white font-semibold text-sm tracking-tight">{PERSONAL_INFO.name}</span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Senior Mobile Architect · Flutter Lead · Software Architect
          </p>
        </div>

        {/* Verified Social & Contact Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email Afif Pathan"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            aria-label="Call Afif Pathan"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Dynamic Year & Back to top */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <span>© {new Date().getFullYear()} Afif Pathan</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
