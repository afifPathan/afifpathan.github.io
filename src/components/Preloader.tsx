import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

/**
 * High-performance branded preloader:
 * - Runs for under 1.2s on first visit.
 * - Instantly skipped on repeat visits (checked via sessionStorage).
 * - Instantly skipped if prefers-reduced-motion is active.
 * - Non-blocking: unmounts cleanly with zero layout shift.
 */
export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      const visited = sessionStorage.getItem('ap_portfolio_intro_v2');
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (visited || prefersReducedMotion) {
        return false;
      }
      return true;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!isVisible) {
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem('ap_portfolio_intro_v2', 'true');
      } catch {
        // Storage restricted
      }
      setIsVisible(false);
      onComplete?.();
    }, 1100);

    return () => clearTimeout(timer);
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="app-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0B14] text-white select-none pointer-events-auto"
          role="status"
          aria-live="polite"
          aria-label="Loading systems architecture portfolio"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-4">
            {/* Monogram Pulse */}
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-primary/30" />
              <div className="w-14 h-14 rounded-2xl bg-[#111320] border border-white/15 flex items-center justify-center font-mono font-black text-xl text-primary shadow-glow-primary">
                AP
              </div>
            </div>

            {/* Status Radar */}
            <div className="flex flex-col items-center gap-1.5 text-center mt-2">
              <span className="font-heading font-bold text-sm tracking-widest uppercase text-white">
                Afif Pathan
              </span>
              <span className="font-mono text-[11px] text-[#22D3EE] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
                SYSTEM INITIALIZING · PRODUCTION KERNEL
              </span>
            </div>

            {/* Quick 1.1s Progress Indicator */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-3">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-to-r from-primary via-accent-violet to-accent-cyan"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
