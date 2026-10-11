import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const NAV_ITEMS = [
  { id: 'snapshot', label: 'About' },
  { id: 'philosophy', label: 'Architecture' },
  { id: 'projects', label: 'Work (25+)' },
  { id: 'experience', label: 'Journey' },
  { id: 'skills', label: 'Toolkit' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const activeSection = useScrollSpy(
    NAV_ITEMS.map((item) => item.id),
    120
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 280);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Accessible Skip Link - completely off-screen unless focused via keyboard */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Floating Centered Pill Header (exact yaseenmuhammed.com look) */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 pointer-events-none px-3 sm:px-4 flex justify-center">
        <div className="pill-nav pointer-events-auto flex items-center justify-between gap-2 sm:gap-3 px-3 py-1.5 sm:py-2 rounded-full border border-slate-300/80 dark:border-white/10 bg-[#fcfaf4]/92 dark:bg-[#0d111a]/92 backdrop-blur-xl shadow-lg max-w-5xl transition-all duration-300">
          {/* Identity Monogram / Scrolled Avatar */}
          <a
            href="#hero"
            className="group flex items-center gap-2 pl-1 pr-1.5 py-0.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors shrink-0"
            aria-label="Afif Pathan - Back to top"
          >
            <AnimatePresence mode="wait">
              {!scrolledPastHero ? (
                <motion.div
                  key="top-monogram"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-7 h-7 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center font-mono font-bold text-[11px] shadow-xs">
                    AP
                  </div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white hidden sm:inline tracking-tight">
                    Afif
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="scrolled-identity"
                  initial={{ opacity: 0, x: -10, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -10, scale: 0.92 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-400 dark:border-cyan-400 shrink-0">
                    <img
                      src="/profile.jpg"
                      alt="Afif Pathan"
                      className="w-full h-full object-cover object-top"
                    />
                    <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-white dark:border-slate-900" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900 dark:text-white leading-none">
                      Afif Pathan
                    </span>
                    <span className="text-[9px] text-blue-600 dark:text-cyan-400 font-mono hidden md:inline leading-tight">
                      Architect
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-1 px-1"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-1.5 sm:p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-800" />}
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/10 hover:border-slate-800 dark:hover:border-white transition-all shadow-2xs"
            >
              <Download className="w-3 h-3 text-blue-600 dark:text-cyan-400" />
              <span className="hidden sm:inline">Résumé</span>
              <span>↓</span>
            </a>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-white bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 transition-colors shadow-2xs"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-3 top-16 z-50 bg-[#fcfaf4]/98 dark:bg-[#0d111a]/98 backdrop-blur-2xl border border-slate-300 dark:border-white/10 rounded-3xl p-6 md:hidden shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-white/10">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-mono transition-colors ${
                    activeSection === item.id
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-mono text-slate-800 dark:text-slate-200 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Download Verified Résumé PDF</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-slate-900 dark:text-slate-950 dark:bg-white"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
