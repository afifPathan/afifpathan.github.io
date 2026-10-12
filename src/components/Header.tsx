import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'philosophy', label: 'Architecture' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const activeSection = useScrollSpy(NAV_ITEMS.map((item) => item.id));

  // Focus trap, Escape key listener, and body scroll lock
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the first interactive element inside drawer
    const focusTimer = setTimeout(() => {
      if (drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length > 0) {
          focusables[0].focus();
        }
      }
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMobileMenuOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusables = Array.from(
          drawerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      {/* Accessible Skip Link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Floating Centered Glass Header (Permanently Anchored) */}
      <header
        className="fixed top-3 sm:top-5 left-0 right-0 z-50 pointer-events-none px-3 sm:px-4 flex justify-center transition-all duration-300 transform-gpu translate-y-0 opacity-100"
      >
        <div className="pointer-events-auto flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-[#111320]/85 backdrop-blur-xl shadow-glass max-w-5xl transition-all duration-300">
          {/* Identity Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-2 pl-1 pr-1.5 py-0.5 rounded-full hover:bg-white/5 transition-colors shrink-0"
            aria-label="AP Afif Pathan - Back to top"
          >
            <div className="w-7 h-7 rounded-full bg-primary text-slate-950 flex items-center justify-center font-mono font-black text-[11px] shadow-glow-primary shrink-0">
              AP
            </div>
            <span className="text-xs font-bold text-white tracking-tight hidden sm:inline">
              Afif Pathan
            </span>
            <span className="text-xs font-bold text-white tracking-tight sm:hidden">
              Afif
            </span>
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
                      ? 'bg-primary text-slate-950 font-bold shadow-glow-primary'
                      : 'text-dark-textMuted hover:text-white hover:bg-white/5'
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
              className="p-1.5 rounded-full text-dark-textMuted hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-300" />
              )}
            </button>

            {/* Direct Résumé Download Action */}
            <a
              href="/resume.pdf"
              download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
              aria-label="Download Resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-accent-cyan" />
              <span className="hidden sm:inline">Résumé</span>
            </a>

            {/* Primary Connect CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-slate-950 bg-primary hover:bg-primary-hover shadow-glow-primary transition-all duration-200 cursor-pointer"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              ref={triggerRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden p-1.5 rounded-full text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={drawerRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeMenu();
            }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-2xl flex flex-col justify-center px-6 md:hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 max-w-sm mx-auto w-full"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary">
                  Navigation Menu
                </span>
                <button
                  autoFocus
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="p-1 rounded-lg text-white/70 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className={`flex items-center justify-between p-3.5 rounded-2xl text-base font-mono transition-all ${
                      isActive
                        ? 'bg-primary text-slate-950 font-bold shadow-glow-primary'
                        : 'text-white hover:bg-white/5 border border-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs opacity-50">→</span>
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="/resume.pdf"
                  download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
                  aria-label="Download Resume"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-medium text-white"
                >
                  <Download className="w-4 h-4 text-accent-cyan" />
                  <span>Download Résumé</span>
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-slate-950 text-xs font-mono font-bold shadow-glow-primary"
                >
                  <span>Connect &amp; Collaborate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
