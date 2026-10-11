import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ShieldCheck, RefreshCw, Cpu, Layers } from 'lucide-react';

export const LanyardBadge: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateOffset, setRotateOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      initial={{ y: -80, opacity: 0, rotateZ: -6 }}
      whileInView={{ y: 0, opacity: 1, rotateZ: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ type: 'spring', stiffness: 85, damping: 13, mass: 1 }}
      className="badge-scene select-none"
      aria-label="Interactive 3D Engineering ID Badge"
    >
      {/* Lanyard Cord SVG Ribbon */}
      <svg
        className="badge-cord pointer-events-none"
        viewBox="0 0 320 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 160 0 C 130 20, 110 50, 160 80"
          stroke="rgba(0,0,0,0.12)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 160 0 C 135 25, 115 55, 160 80"
          stroke="#0f172a"
          strokeWidth="4"
          strokeLinecap="round"
          className="dark:stroke-slate-300"
        />
        {/* Metal Clip Ring */}
        <rect
          x="152"
          y="74"
          width="16"
          height="12"
          rx="3"
          fill="#94a3b8"
          stroke="#475569"
          strokeWidth="1.5"
        />
        <circle cx="160" cy="80" r="3" fill="#1e293b" />
      </svg>

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
        aria-label="3D Engineering ID Badge. Click to flip between pass and verified metrics."
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
          {/* FRONT FACE: Physical ID Pass - Clean & Unobstructed */}
          <div className="badge-face badge-front p-3.5 flex flex-col justify-between">
            {/* Top Bar with Slot Hole */}
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-white/10 text-[10px] font-mono">
                <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>VERIFIED ARCHITECT CREDENTIAL</span>
                </div>
                <span className="text-slate-400 dark:text-slate-500 font-mono tracking-wider">#AP-89412</span>
              </div>

              {/* Portrait Photo: Dedicated Frame with ZERO overlapping text */}
              <div className="w-full h-[145px] rounded-xl overflow-hidden border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-slate-800 shadow-inner">
                <img
                  src="/profile.jpg"
                  alt="Afif Pathan - Senior Mobile Architect"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Identity Information: Cleanly Positioned Below Photo */}
            <div className="my-1.5 text-center flex flex-col items-center">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60 text-[9px] font-mono font-bold tracking-wider mb-1">
                PRINCIPAL / SENIOR ARCHITECT
              </span>
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </h2>
              <div className="text-[11px] font-bold text-blue-700 dark:text-cyan-400 font-mono mt-0.5">
                Senior Mobile Architect
              </div>
              <div className="text-[9px] text-slate-500 dark:text-slate-400 font-mono">
                Flutter Tech Lead · Ahmedabad, IN
              </div>
            </div>

            {/* Barcode & Flip Hint Footer */}
            <div className="pt-1.5 border-t border-slate-200 dark:border-white/10">
              {/* Simulated Barcode */}
              <div className="flex items-center justify-center gap-[2px] h-3.5 opacity-70 dark:opacity-60 mb-1" aria-hidden="true">
                {[3, 1, 4, 1, 2, 5, 2, 1, 4, 2, 1, 3, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1].map((w, i) => (
                  <span
                    key={i}
                    className="h-full bg-slate-900 dark:bg-slate-200 inline-block"
                    style={{ width: `${w}px` }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-center gap-1 text-[9px] font-mono text-slate-500 dark:text-slate-400">
                <RefreshCw className="w-2.5 h-2.5 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Tap to flip badge</span>
              </div>
            </div>
          </div>

          {/* BACK FACE: Architectural Credentials & Metrics */}
          <div className="badge-face badge-back p-3.5 flex flex-col justify-between">
            <div className="w-full">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700 text-[10px] font-mono text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-semibold text-white">SYSTEM AUDIT</span>
                </div>
                <span className="text-emerald-400 font-bold">100% VERIFIED</span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-1.5 my-2 text-center font-mono">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-xl font-extrabold text-cyan-400">8+</div>
                  <div className="text-[8px] text-slate-400 uppercase">Years Eng.</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-xl font-extrabold text-amber-400">25+</div>
                  <div className="text-[8px] text-slate-400 uppercase">Systems Built</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-xl font-extrabold text-indigo-400">6+</div>
                  <div className="text-[8px] text-slate-400 uppercase">Cross-Platform</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-xl font-extrabold text-emerald-400">60-120</div>
                  <div className="text-[8px] text-slate-400 uppercase">FPS Engine</div>
                </div>
              </div>

              {/* Core capabilities */}
              <div className="space-y-1.5 text-[9px] font-mono text-slate-300 mt-2">
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>Clean Architecture &amp; SOLID</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3 h-3 text-indigo-400 shrink-0" />
                  <span>BLoC, Cubit, Riverpod</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>FastAPI &amp; Angel One SmartAPI</span>
                </div>
              </div>
            </div>

            {/* Back Footer */}
            <div className="w-full pt-1.5 border-t border-slate-700 flex items-center justify-between text-[9px] font-mono text-slate-400">
              <span>STATUS: PRODUCTION</span>
              <span className="text-cyan-400 font-bold">FLIP BACK ↻</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
