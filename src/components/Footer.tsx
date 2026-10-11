import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-300 dark:border-white/10 bg-[#ede8dc] dark:bg-[#05070b] py-12 px-4 sm:px-6 lg:px-8 text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-blue-50 dark:bg-slate-900 border border-blue-200 dark:border-cyan-500/30 text-blue-600 dark:text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
              AP
            </span>
            <span className="text-slate-900 dark:text-white font-semibold text-sm tracking-tight">{PERSONAL_INFO.name}</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
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
            className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email Afif Pathan"
            className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            aria-label="Call Afif Pathan"
            className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors"
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors shadow-sm"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
