import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

/**
 * Minimal, high-contrast Footer.
 * Features dynamic copyright year, back-to-top trigger, and direct social links.
 */
export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="w-full border-t border-white/10 bg-dark-surface/85 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 text-dark-text transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="w-8 h-8 rounded-full bg-primary text-slate-950 flex items-center justify-center font-mono font-black text-xs shadow-glow-primary shrink-0">
            AP
          </div>
          <div>
            <div className="font-bold text-dark-text text-sm">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-xs text-dark-textMuted font-mono">
              Senior Mobile Architect &amp; Flutter Lead
            </div>
          </div>
        </div>

        {/* Social Links & Back to Top Action */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Afif Pathan on GitHub"
            className="flex items-center gap-1.5 text-dark-textMuted hover:text-dark-text transition-colors"
          >
            <Github className="w-4 h-4 text-accent-violet" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Afif Pathan on LinkedIn"
            className="flex items-center gap-1.5 text-dark-textMuted hover:text-dark-text transition-colors"
          >
            <Linkedin className="w-4 h-4 text-accent-cyan" />
            <span>LinkedIn</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Résumé PDF"
            className="text-dark-textMuted hover:text-dark-text transition-colors"
          >
            Résumé
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-dark-text transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary" />
          </button>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="max-w-7xl mx-auto pt-8 mt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 text-[11px] font-mono text-dark-textDim">
        <div>
          © {currentYear} Afif Pathan. All rights reserved. Architected with Clean Architecture &amp; TypeScript.
        </div>
        <div>
          Ahmedabad, India · Remote &amp; Architecture Advisory
        </div>
      </div>
    </footer>
  );
};
