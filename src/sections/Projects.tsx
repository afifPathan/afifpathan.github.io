import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { TerminalPreview } from '../components/TerminalPreview';
import { PROJECTS } from '../data/portfolioData';
import { Terminal, Filter } from 'lucide-react';

const CATEGORIES = ['All', 'Mobile', 'Web & Cloud', 'Systems & AI', 'SDK & Architecture'] as const;

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      aria-label="Selected Production Projects"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5"
    >
      {/* Signature Section Marker from Reference */}
      <div className="section-marker">
        <span>04 — SELECTED WORK · PROVEN AT SCALE</span>
        <span>25+ PRODUCTION SYSTEMS DELIVERED</span>
      </div>

      <div className="mb-10">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-2">
          Selected Systems &amp;<br />
          <em className="text-slate-900 dark:text-white font-serif font-normal italic">
            Case Studies.
          </em>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
          Complete showcase of {PROJECTS.length} cross-platform applications, reactive terminals, algorithmic execution engines, and published SDKs delivered throughout 8+ years.
        </p>
      </div>

      {/* Live Algorithmic Systems Telemetry Showcase (PLACED ABOVE PROJECTS) */}
      <div className="mb-14 p-6 sm:p-8 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-900/40 shadow-xs transition-colors">
        <div className="max-w-2xl mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
            <Terminal className="w-4 h-4" />
            <span>High-Frequency &amp; Algorithmic Systems Observability</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Independent Systems: NSE Trading Engine &amp; Terminal
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            Engineered with Angel One SmartAPI, 5-minute candle validation, daily risk circuit breakers, and sub-second WebSocket telemetry on React 18 &amp; TanStack Query.
          </p>
        </div>

        <TerminalPreview />
      </div>

      {/* Category Filters Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 pt-4 border-t border-slate-200 dark:border-white/5">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Curated Systems Catalog ({filteredProjects.length})
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
            Filter platforms by domain and architectural focus
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-900/60 p-1.5 rounded-xl border border-slate-200 dark:border-white/10 shadow-xs">
          <Filter className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 ml-1.5 mr-1" />
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white dark:bg-cyan-500/20 dark:text-cyan-300 font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured & Additional Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
