import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  GitBranch,
  Workflow,
  Layers,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const SNAPSHOT_PILLARS = [
  {
    icon: Layers,
    title: 'Cross-Platform & Native Architecture',
    description:
      '6+ years architecting enterprise Flutter applications and native Android services. Deep focus on modularization, memory profiling, and smooth 60fps/120fps client experiences.',
    tags: ['Flutter', 'Dart', 'Android (Java/Kotlin)', 'Material 3'],
  },
  {
    icon: Workflow,
    title: 'Enterprise Clean Architecture',
    description:
      'Designing strict feature-based modular systems adhering to SOLID principles and Inversion of Control. Keeping domain business logic immune to third-party SDK deprecation.',
    tags: ['Clean Architecture', 'SOLID', 'BLoC / Cubit', 'Riverpod'],
  },
  {
    icon: GitBranch,
    title: 'Full-Stack & Systems Automation',
    description:
      'Building real-time observability SPAs (React 18, Vite, WebSocket), automated Python algorithmic trading daemons with risk circuit breakers, and Gemini AI data workflows.',
    tags: ['React 18', 'TypeScript', 'Python', 'Angel One SmartAPI', 'Gemini AI'],
  },
  {
    icon: Code2,
    title: 'Offline-First & Cloud Infrastructure',
    description:
      'Engineering persistent local caching engines (SQLite, Hive) paired with Firebase (Auth, Firestore, Cloud Functions) and robust REST/GraphQL client communication.',
    tags: ['Firebase Suite', 'SQLite', 'GraphQL / REST', 'CI/CD Pipelines'],
  },
];

export const Snapshot: React.FC = () => {
  return (
    <section
      id="snapshot"
      aria-label="Engineering Profile and Summary"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5"
    >
      {/* Section Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-widest font-semibold">
          01 — Engineering Snapshot
        </span>
        <div className="h-px bg-blue-500/20 dark:bg-cyan-500/20 flex-1 max-w-[120px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
        <div className="lg:col-span-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Production Track Record.<br />
            <span className="text-slate-500 dark:text-slate-400 font-light">Architected for longevity.</span>
          </h2>
        </div>
        <div className="lg:col-span-6">
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>
        </div>
      </div>

      {/* Verified Metrics Counter Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-cyan-500/30 transition-colors bg-white/90 dark:bg-slate-900/40">
          <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-cyan-400 font-mono mb-1">
            {PERSONAL_INFO.yearsTotal}
          </div>
          <div className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-1">
            Total Engineering Experience
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            Delivering software across mobile, web, backend &amp; systems since 2017.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 transition-colors bg-white/90 dark:bg-slate-900/40">
          <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono mb-1">
            {PERSONAL_INFO.yearsMobile}
          </div>
          <div className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-1">
            Cross-Platform Focus
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            Architecting production Flutter &amp; Android platforms for global users.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 transition-colors bg-white/90 dark:bg-slate-900/40">
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono mb-1">
            {PERSONAL_INFO.productionPlatforms}
          </div>
          <div className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-1">
            Production Systems Delivered
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            Delivered across e-commerce, EdTech, insurance, healthcare &amp; fintech.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 hover:border-purple-500/30 transition-colors bg-white/90 dark:bg-slate-900/40">
          <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 dark:text-purple-400 font-mono mb-1">
            100%
          </div>
          <div className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-1">
            Verified In CV
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            Zero fabricated numbers or unsupported claims. Authentic production evidence.
          </p>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SNAPSHOT_PILLARS.map((pillar, idx) => {
          const IconComp = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{pillar.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {pillar.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-white/5">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-black/40 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recognition Card from CV */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-950/20 dark:via-slate-900/40 dark:to-slate-900/40 border border-amber-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider font-semibold">
              Formal Industry Recognition
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.award.title}</h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">{PERSONAL_INFO.award.description}</p>
          </div>
        </div>
        <span className="text-xs font-mono text-slate-600 dark:text-slate-400 px-3 py-1 rounded bg-white dark:bg-black/40 border border-slate-200 dark:border-white/5 self-start sm:self-auto shadow-sm">
          Webclues Infotech (2020)
        </span>
      </div>
    </section>
  );
};
