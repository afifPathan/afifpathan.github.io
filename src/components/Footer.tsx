import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Download, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-300 dark:border-white/10 bg-[#ede8dc] dark:bg-[#06080e] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-700 dark:text-slate-300 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-300/80 dark:border-white/10 items-start">
          {/* Author Brand Column with Photo */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-4">
              {/* Photo with Online Status */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-slate-400 dark:border-cyan-400 shadow-md shrink-0 bg-slate-200 dark:bg-slate-800">
                <img
                  src="/profile.jpg"
                  alt="Afif Pathan - Senior Mobile Architect"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <div className="text-sm font-mono font-bold text-blue-700 dark:text-cyan-400 mt-0.5">
                  Senior Mobile Architect &amp; Flutter Lead
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                  Software Architect · AI &amp; Full-Stack Systems
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              Architecting production-grade cross-platform platforms, deterministic reactive state machines, and real-time execution telemetry across global startups and enterprise ecosystems.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="/resume.pdf"
                download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium text-slate-900 dark:text-white bg-white dark:bg-white/10 border border-slate-300 dark:border-white/10 hover:border-slate-800 dark:hover:border-white transition-all shadow-2xs"
              >
                <Download className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>Verified CV PDF</span>
                <span>↓</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold text-white bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 transition-colors shadow-2xs"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-2">
              Sections
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#snapshot" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  01 — The Architect (Overview)
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  02 — Technical Arsenal (Toolkit)
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  03 — System Philosophy
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  04 — Selected Work (25+ Systems)
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  05 — Career Timeline
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  06 — Proud Milestones
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  07 — Direct Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Verified Channels */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-2">
              Direct Channels
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-2 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-800 dark:text-slate-300 shrink-0" />
                  <span>github.com/afifPathan</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                  <span>linkedin.com/in/afif-pathan</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} Afif Pathan · Senior Mobile Architect · All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/10 hover:border-slate-800 dark:hover:border-white text-slate-800 dark:text-slate-200 transition-colors shadow-2xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
