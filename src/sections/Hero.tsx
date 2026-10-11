import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Cpu,
  Layers,
  Activity,
  Terminal,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction and Senior Engineering Profile"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-blueprint-grid overflow-hidden"
    >
      {/* Ambient Lighting Cones */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left Column: Senior Executive Positioning & Photo */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Executive Header Row with Photo & Status */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            {/* Professional Profile Portrait */}
            <div className="relative group shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-blue-500/40 dark:border-cyan-400/40 shadow-xl shadow-blue-500/10 bg-slate-100 dark:bg-slate-800">
                <img
                  src={PERSONAL_INFO.photo}
                  alt="Afif Pathan - Senior Mobile Architect"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-slate-900" />
              </span>
            </div>

            {/* Badges & Status */}
            <div className="flex flex-col gap-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-slate-900/90 border border-blue-200 dark:border-cyan-500/30 text-xs font-mono font-semibold text-blue-700 dark:text-cyan-300 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>STAFF / SENIOR MOBILE ARCHITECT</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Available for Architect &amp; Lead Roles · Remote</span>
              </div>
              <div className="text-[11px] font-mono text-slate-500">
                Ahmedabad, India · 8+ Years Production Experience
              </div>
            </div>
          </motion.div>

          {/* Main Name & Authoritative Role Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-2">
              Afif Pathan
            </h1>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400">
              Senior Mobile Architect &amp; Flutter Lead
            </div>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">
              Cross-Platform Systems · Clean Architecture · Algorithmic Trading · AI Workflows
            </p>
          </motion.div>

          {/* Positioning Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal"
          >
            {PERSONAL_INFO.yearsTotal} of software engineering excellence, including{' '}
            <span className="text-slate-900 dark:text-white font-semibold">
              {PERSONAL_INFO.yearsMobile} delivering production-grade cross-platform platforms
            </span>{' '}
            and <span className="text-blue-700 dark:text-cyan-300 font-semibold">{PERSONAL_INFO.productionPlatforms} production systems</span>.
            Specializing in enterprise <span className="text-blue-700 dark:text-cyan-300 font-medium">Clean Architecture</span>, deterministic{' '}
            <span className="text-indigo-600 dark:text-indigo-300 font-medium">BLoC/Cubit state machines</span>, real-time WebSocket telemetry, and AI-enabled workflows across EdTech, e-commerce, healthcare, and algorithmic trading.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 mb-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-cyan-400 dark:hover:bg-cyan-300 dark:text-[#07090e] transition-all duration-200 shadow-lg shadow-blue-600/25 dark:shadow-cyan-400/20 hover:scale-[1.02]"
            >
              <span>Explore 25+ Systems &amp; Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-cyan-500/40 shadow-sm transition-all duration-200"
            >
              <Download className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>Download Verified CV</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <span>Initiate Contact ↗</span>
            </a>
          </motion.div>

          {/* Verified Links & Quick Facts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-600 dark:text-slate-400"
          >
            <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[11px]">
              Direct Channels:
            </span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/afifPathan</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>linkedin.com/in/afif-pathan</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Architectural System Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          {/* Architectural System Board */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-xl relative overflow-hidden bg-white/90 dark:bg-[#0c101c]/90">
            {/* Visual Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-semibold">
                <Terminal className="w-4 h-4" />
                <span>ARCHITECTURAL STACK CORE</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                <Activity className="w-3 h-3 animate-pulse" />
                <span>60 FPS COMPILED</span>
              </div>
            </div>

            {/* Architectural Nodes Grid */}
            <div className="space-y-3 font-mono text-xs">
              {/* Node 1: Mobile UI Surface */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-blue-200 dark:border-cyan-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-cyan-950/60 border border-blue-200 dark:border-cyan-500/40 text-blue-700 dark:text-cyan-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Flutter &amp; Native Clients</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Material 3 · Adaptive Viewports · 120Hz</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 dark:bg-cyan-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-800/40">
                  Presentation
                </span>
              </div>

              {/* Node 2: State Machines */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-500/40 text-indigo-700 dark:text-indigo-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">BLoC / Cubit Reactive Streams</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Unidirectional · Zero Memory Leaks</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/40">
                  Application
                </span>
              </div>

              {/* Node 3: Clean Domain Core */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Clean Architecture &amp; Use Cases</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Decoupled Entities · Inversion of Control</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                  Domain Core
                </span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-3 gap-2 text-center font-mono">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-cyan-400">{PERSONAL_INFO.yearsTotal}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">Years Eng.</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">{PERSONAL_INFO.yearsMobile}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">Cross-Platform</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">{PERSONAL_INFO.productionPlatforms}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">Systems Built</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
