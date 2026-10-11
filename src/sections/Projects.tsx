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
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5"
    >
      {/* Section Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-widest font-semibold">
          03 — Production Systems &amp; Case Studies ({PROJECTS.length})
        </span>
        <div className="h-px bg-blue-500/20 dark:bg-cyan-500/20 flex-1 max-w-[120px]" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Production Systems.<br />
            <span className="text-slate-500 dark:text-slate-400 font-light">From architecture to store release.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
            Complete showcase of {PROJECTS.length} cross-platform applications, reactive terminals, algorithmic execution engines, and published SDKs delivered throughout 8+ years.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-900/60 p-1.5 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
          <Filter className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 ml-1.5 mr-1" />
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white dark:bg-cyan-500/20 dark:text-cyan-300 font-semibold shadow-sm'
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

      {/* Live Algorithmic Systems Telemetry Showcase */}
      <div className="mt-8 pt-12 border-t border-slate-200 dark:border-white/5">
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
    </section>
  );
};
