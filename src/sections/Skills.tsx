import React from 'react';
import { TechCluster } from '../components/TechCluster';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      aria-label="Technical Skills and Stack"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5"
    >
      {/* Section Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-widest font-semibold">
          05 — Technical Arsenal &amp; Stack
        </span>
        <div className="h-px bg-blue-500/20 dark:bg-cyan-500/20 flex-1 max-w-[120px]" />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-2">
          Technical Capabilities.<br />
          <span className="text-slate-500 dark:text-slate-400 font-light">Cross-platform depth, systems rigor.</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl">
          Organized across mobile client platforms, enterprise architectural paradigms, reactive state patterns, cloud backends, and algorithmic trading systems.
        </p>
      </div>

      {/* Tech Cluster Matrix */}
      <TechCluster />
    </section>
  );
};
