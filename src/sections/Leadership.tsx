import React from 'react';
import { motion } from 'framer-motion';
import {
  GitPullRequest,
  Gauge,
  Rocket,
  CheckCircle2,
  Workflow,
} from 'lucide-react';

const LEADERSHIP_THEMES = [
  {
    icon: Workflow,
    title: 'Architectural Governance & Modularity',
    points: [
      'Establishing Clean Architecture standards with decoupled domain use cases and repository contracts.',
      'Enforcing strict boundaries between presentation widgets and application state machines to prevent vendor lock-in.',
      'Extracting reusable SDKs and pub.dev packages (e.g. rz_camera) to standardize enterprise capabilities across products.',
    ],
  },
  {
    icon: GitPullRequest,
    title: 'Code Quality & Engineering Reviews',
    points: [
      'Conducting rigorous pull request reviews focusing on cyclomatic complexity, testability, and memory leak prevention.',
      'Defining strict TypeScript interfaces and Dart immutable state models to eliminate runtime null-pointer crashes.',
      'Promoting automated testing culture utilizing Vitest, React Testing Library, and unit tests across execution paths.',
    ],
  },
  {
    icon: Gauge,
    title: 'Performance Profiling & Smooth UX',
    points: [
      'Profiling Flutter widget rebuild costs and Dart isolates to maintain consistent 60fps/120fps frame budgets.',
      'Designing event-driven caching with SQLite and TanStack Query to eliminate duplicate network roundtrips.',
      'Implementing exponential backoff and message deduplication on real-time WebSocket feeds.',
    ],
  },
  {
    icon: Rocket,
    title: 'Zero-Downtime Delivery & CI/CD',
    points: [
      'Automating multi-platform build and release pipelines utilizing GitHub Actions, Fastlane, and Codemagic.',
      'Managing store governance, app signing, and compliance across Apple App Store Connect and Google Play Console.',
      'Deploying resilient containerized and systemd background daemons with health monitoring and automated recovery.',
    ],
  },
];

export const Leadership: React.FC = () => {
  return (
    <section
      id="leadership"
      aria-label="Technical Leadership and Standards"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5"
    >
      {/* Section Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-widest font-semibold">
          06 — Technical Leadership &amp; Engineering Standards
        </span>
        <div className="h-px bg-blue-500/20 dark:bg-cyan-500/20 flex-1 max-w-[120px]" />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-2">
          Technical Leadership.<br />
          <span className="text-slate-500 dark:text-slate-400 font-light">Enforcing quality, repeatability, and resilience.</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl">
          A Senior Architect delivers more than individual features: they establish sustainable engineering practices, guardrails, and architectural integrity across the entire team.
        </p>
      </div>

      {/* Leadership Themes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LEADERSHIP_THEMES.map((theme, idx) => {
          const IconComp = theme.icon;
          return (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 md:p-8 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-500/30 transition-all duration-300 bg-white/95 dark:bg-slate-900/60 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800/80 border border-blue-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{theme.title}</h3>
              </div>

              <ul className="space-y-3">
                {theme.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
