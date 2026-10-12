import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { TerminalPreview } from '../components/TerminalPreview';
import { PROJECTS } from '../data/portfolioData';
import { Terminal, Filter, ChevronDown, FolderGit2 } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const CATEGORIES = ['All', 'Mobile', 'Web & Cloud', 'Systems & AI', 'SDK & Architecture'] as const;

export const Projects: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [showAllCases, setShowAllCases] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Featured 4 Case Studies (Shown by default with the Terminal)
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  // Remaining Case Studies (Filtered when expanded)
  const catalogProjects =
    selectedCategory === 'All'
      ? PROJECTS.filter((p) => !p.featured)
      : PROJECTS.filter((p) => !p.featured && p.category === selectedCategory);

  return (
    <section
      id="projects"
      aria-label="Selected Production Projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden overflow-x-clip scroll-mt-24"
    >
      {/* Section Header Tag */}
      <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-primary uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span>Work · Production Systems</span>
      </div>

      {/* Balanced Desktop Header (Left: Heading, Right: Production Footprint Note, Hidden on Mobile) */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.08] mb-3"
          >
            Selected Systems &amp;<br />
            <span className="bg-gradient-to-r from-primary via-accent-violet to-accent-cyan bg-clip-text text-transparent font-normal italic font-serif">
              Case Studies.
            </span>
          </motion.h2>
          <p className="text-dark-textMuted text-sm sm:text-base max-w-2xl font-normal">
            16 featured case studies spanning enterprise mobile apps, high-throughput trading daemons, and hyperlocal cloud platforms delivered over 8+ years.
          </p>
        </div>

        {/* Supporting Header Card (Hidden on Mobile) */}
        <div className="hidden lg:block lg:max-w-xs w-full p-4 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 shadow-glass shrink-0">
          <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Production Footprint</span>
          </div>
          <p className="text-white/80 text-xs font-mono leading-relaxed">
            16 case studies delivered across Degreed, Buyzaar, Roadzen, Webclues, and autonomous trading systems.
          </p>
        </div>
      </div>

      {/* Algorithmic Systems Telemetry Showcase (Labeled Sample / Illustrative) */}
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45 }}
        className="mb-14 p-5 sm:p-7 rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 shadow-glass"
      >
        <div className="max-w-2xl mb-5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan uppercase tracking-wider font-semibold">
              <Terminal className="w-4 h-4 text-accent-cyan" />
              <span>High-Frequency &amp; Algorithmic Systems Observability</span>
            </div>
            {/* Sample Label Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-400 font-semibold">
              Sample output (illustrative)
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-heading">
            Independent Systems: NSE Trading Engine &amp; Terminal
          </h3>
          <p className="text-xs sm:text-sm text-dark-textMuted mt-1">
            Engineered with Angel One SmartAPI, 5-minute candle validation, daily risk circuit breakers, and sub-second WebSocket telemetry on React 18 &amp; TanStack Query.
          </p>
        </div>

        <TerminalPreview />
      </motion.div>

      {/* Featured Tier-1 Flagship Systems (4 by default) */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-heading">
            Featured Tier-1 Case Studies
          </h3>
          <span className="text-xs font-mono text-primary font-medium px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 ml-2">
            4 Core Systems
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Expand / Collapse Toggle for Additional 12 Case Studies */}
      <div className="flex flex-col items-center justify-center my-10 pt-4">
        <button
          onClick={() => setShowAllCases((prev: boolean) => !prev)}
          aria-expanded={showAllCases}
          aria-controls="all-case-studies-catalog"
          className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-dark-surface/90 hover:bg-dark-surfaceElevated border border-white/10 hover:border-primary/40 text-xs sm:text-sm font-mono font-semibold text-white transition-all duration-300 shadow-glass cursor-pointer"
        >
          <FolderGit2 className="w-4 h-4 text-accent-cyan group-hover:scale-110 transition-transform" />
          <span>
            {showAllCases ? 'Collapse Additional Case Studies' : 'Show All 16 Case Studies (12 More)'}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-primary transition-transform duration-300 ${
              showAllCases ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Expandable Catalog of Remaining 12 Case Studies */}
      <div
        id="all-case-studies-catalog"
        role="region"
        aria-label="Additional Case Studies Catalog"
        className={showAllCases ? 'block' : 'hidden'}
      >
        {/* Category Filters Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 pt-6 border-t border-white/10">
          <div>
            <h4 className="text-lg font-bold text-white tracking-tight font-heading flex items-center gap-2">
              <span>Additional Systems Archive</span>
              <span className="text-xs font-mono font-medium text-accent-cyan px-2.5 py-0.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
                {catalogProjects.length} Case Studies
              </span>
            </h4>
            <p className="text-xs text-dark-textMuted font-mono mt-0.5">
              Filter by domain and architectural focus
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-dark-surface/80 p-1.5 rounded-xl border border-white/10 shadow-xs">
            <Filter className="w-3.5 h-3.5 text-accent-cyan ml-1.5 mr-1" />
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-primary text-slate-950 font-bold shadow-glow-primary'
                    : 'text-dark-textMuted hover:text-white hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Grid for Catalog Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch pb-8">
          {catalogProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              compact={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
