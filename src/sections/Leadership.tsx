import React from 'react';
import { motion } from 'framer-motion';
import {
  GitPullRequest,
  Gauge,
  Rocket,
  CheckCircle2,
  Workflow,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

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
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden overflow-x-clip"
    >
      {/* Signature Section Marker from Reference */}
      <div className="section-marker">
        <span>06 — PROUD MOMENTS · SYSTEM METRICS</span>
        <span>TECHNICAL LEADERSHIP &amp; ENGINEERING STANDARDS</span>
      </div>

      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-2"
        >
          Milestones that<br />
          <em className="text-slate-900 dark:text-white font-serif font-normal italic">
            moved things forward.
          </em>
        </motion.h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl">
          A Senior Architect delivers more than individual features: they establish sustainable engineering practices, guardrails, and architectural integrity across the entire team.
        </p>
      </div>

      {/* Proud Moments Milestone Cards: Fast Repeat Swipe */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.08 }}
          transition={{ duration: 0.38, delay: 0.02, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-2xl glass-panel border border-slate-200/60 dark:border-white/10 bg-white/35 dark:bg-slate-800/35 backdrop-blur-md shadow-md transform-gpu"
        >
          <div className="text-3xl sm:text-5xl font-black font-mono text-slate-900 dark:text-white mb-2">
            {PERSONAL_INFO.yearsTotal}
          </div>
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1">
            Engineering Excellence
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            From native Java on Android to Staff Cross-Platform Architect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.08 }}
          transition={{ duration: 0.38, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-2xl glass-panel border border-slate-200/60 dark:border-white/10 bg-white/35 dark:bg-slate-800/35 backdrop-blur-md shadow-md transform-gpu"
        >
          <div className="text-3xl sm:text-5xl font-black font-mono text-blue-600 dark:text-cyan-400 mb-2">
            {PERSONAL_INFO.productionPlatforms}
          </div>
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1">
            Production Systems Built
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Delivered for global enterprise and high-growth startups.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.08 }}
          transition={{ duration: 0.38, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-2xl glass-panel border border-slate-200/60 dark:border-white/10 bg-white/35 dark:bg-slate-800/35 backdrop-blur-md shadow-md transform-gpu"
        >
          <div className="text-3xl sm:text-5xl font-black font-mono text-indigo-600 dark:text-indigo-400 mb-2">
            {PERSONAL_INFO.yearsMobile}
          </div>
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1">
            Flutter &amp; Cross-Platform
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Designing 60-120fps compiled mobile and web client platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.08 }}
          transition={{ duration: 0.38, delay: 0.11, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-2xl glass-panel border border-slate-200/60 dark:border-white/10 bg-white/35 dark:bg-slate-800/35 backdrop-blur-md shadow-md transform-gpu"
        >
          <div className="text-3xl sm:text-5xl font-black font-mono text-emerald-600 dark:text-emerald-400 mb-2">
            100%
          </div>
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1">
            CV-Verified Proof
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Every metric backed by production deployments and real users.
          </p>
        </motion.div>
      </div>

      {/* Leadership Themes Grid: Fast Alternate Swipe */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LEADERSHIP_THEMES.map((theme, idx) => {
          const IconComp = theme.icon;
          return (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -120 : 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.08 }}
              transition={{ duration: 0.4, delay: (idx % 2) * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 md:p-8 rounded-2xl glass-panel border border-slate-200/60 dark:border-white/10 hover:border-slate-400 dark:hover:border-cyan-500/30 transition-all duration-300 bg-white/35 dark:bg-slate-800/35 backdrop-blur-md shadow-md hover:shadow-xl transform-gpu"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700/80 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-cyan-400">
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
