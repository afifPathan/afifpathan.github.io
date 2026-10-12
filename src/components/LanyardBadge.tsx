import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { RefreshCw, Cpu, Layers, Terminal } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const LanyardBadge: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateOffset, setRotateOffset] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    if (typeof window !== 'undefined' && ('ontouchstart' in window || window.matchMedia('(pointer: coarse)').matches)) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = ((e.clientY - centerY) / (rect.height / 2)) * -6;
    const y = ((e.clientX - centerX) / (rect.width / 2)) * 6;
    setRotateOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setRotateOffset({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="badge-scene select-none"
      aria-label="Interactive 3D Engineering ID Pass"
    >
      {/* Physical Clip Mount at Top of Badge */}
      <div className="flex flex-col items-center mb-1">
        <div className="w-8 h-2 rounded-t-sm bg-slate-700 dark:bg-slate-700" />
        <div className="w-12 h-3.5 rounded-full bg-slate-800 border border-slate-600/80 flex items-center justify-center shadow-xs">
          <div className="w-6 h-1 rounded-full bg-slate-950" />
        </div>
      </div>

      {/* 3D Physical Badge Container */}
      <div
        className="badge-body"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsFlipped((prev) => !prev);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="Mobile Systems Pass - 3D Interactive Engineering Pass. Click or press Enter to flip."
      >
        <motion.div
          className="badge-flip"
          animate={{
            rotateY: isFlipped ? 180 : 0,
            rotateX: rotateOffset.x,
            rotateZ: rotateOffset.y * 0.4,
          }}
          transition={{
            rotateY: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] },
            rotateX: { duration: 0.15, ease: 'easeOut' },
            rotateZ: { duration: 0.15, ease: 'easeOut' },
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* FRONT FACE: Clean Engineering ID Pass */}
          <div className="badge-face badge-front p-3.5 flex flex-col justify-between bg-dark-surface/90 border border-white/10 text-white">
            {/* Top Bar with Slot Hole */}
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] font-mono">
                <div className="flex items-center gap-1.5 text-white/80 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="uppercase tracking-wider">Mobile Systems Pass</span>
                </div>
                <span className="text-white/40 font-mono text-[9px]">Ahmedabad, IN</span>
              </div>

              {/* Portrait Photo Frame */}
              <div className="w-full h-[138px] rounded-xl overflow-hidden border border-white/10 bg-slate-900 shadow-inner">
                <img
                  src="/profile.jpg"
                  alt="Afif Pathan - Senior Mobile Architect"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Identity Information */}
            <div className="my-1.5 text-center flex flex-col items-center">
              <h2 className="text-base font-extrabold text-white tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </h2>
              <div className="text-[11px] font-bold text-primary font-mono mt-0.5">
                Senior Mobile Architect
              </div>
              <div className="text-[9px] text-white/50 font-mono mt-0.5">
                Flutter Tech Lead · 8+ Years
              </div>
            </div>

            {/* Flip Hint Footer */}
            <div className="pt-2 pb-0.5 border-t border-white/10 shrink-0">
              <div className="flex items-center justify-center gap-1 text-[9px] font-mono text-white/50">
                <RefreshCw className="w-2.5 h-2.5 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Tap to flip profile</span>
              </div>
            </div>
          </div>

          {/* BACK FACE: Architectural Track Record & Core Metrics */}
          <div className="badge-face badge-back p-3.5 flex flex-col justify-between bg-dark-surfaceElevated border border-white/10 text-dark-text">
            <div className="w-full">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] font-mono text-dark-textMuted">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                  <span className="font-semibold text-dark-text uppercase tracking-wider">Track Record</span>
                </div>
                <span className="text-primary font-mono text-[9px] font-bold">Production Data</span>
              </div>

              {/* Metrics Grid from portfolioData.ts */}
              <div className="grid grid-cols-2 gap-1.5 my-2 text-center font-mono">
                <div className="p-2 rounded-lg bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/5">
                  <div className="text-xl font-extrabold text-primary">8+</div>
                  <div className="text-[8px] text-dark-textMuted uppercase font-medium">Years Total</div>
                </div>
                <div className="p-2 rounded-lg bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/5">
                  <div className="text-xl font-extrabold text-accent-violet">25+</div>
                  <div className="text-[8px] text-dark-textMuted uppercase font-medium">Systems Built</div>
                </div>
                <div className="p-2 rounded-lg bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/5">
                  <div className="text-xl font-extrabold text-accent-cyan">6+</div>
                  <div className="text-[8px] text-dark-textMuted uppercase font-medium">Years Mobile</div>
                </div>
                <div className="p-2 rounded-lg bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/5">
                  <div className="text-xl font-extrabold text-highlight-amber">12+</div>
                  <div className="text-[8px] text-dark-textMuted uppercase font-medium">Case Studies</div>
                </div>
              </div>

              {/* Core capabilities from CV */}
              <div className="space-y-1.5 text-[9px] font-mono text-dark-textMuted mt-2">
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-accent-cyan shrink-0" />
                  <span>Clean Architecture &amp; SOLID</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3 h-3 text-accent-violet shrink-0" />
                  <span>BLoC, Cubit, Riverpod</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-primary shrink-0" />
                  <span>FastAPI &amp; Algorithmic Trading</span>
                </div>
              </div>
            </div>

            {/* Back Footer */}
            <div className="w-full pt-1.5 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-dark-textDim">
              <span>AFIF PATHAN</span>
              <span className="text-primary font-bold">FLIP BACK ↻</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
