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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-blue-500/[0.08] dark:bg-cyan-500/[0.08] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[320px] bg-indigo-500/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Senior Executive Positioning & Photo */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Executive Status Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 w-fit mb-6 shadow-xs backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">Senior Mobile Architect</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-slate-600 dark:text-slate-400">Flutter Tech Lead</span>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-medium hidden sm:inline">Available for Remote / Advisory</span>
          </motion.div>

          {/* Executive Portrait Badge & Name Block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 mb-5">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative group shrink-0 w-fit"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-blue-500/30 dark:border-cyan-400/30 shadow-lg shadow-blue-500/10 bg-slate-100 dark:bg-slate-800 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={PERSONAL_INFO.photo}
                  alt="Afif Pathan - Senior Mobile Architect"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-slate-900" />
              </span>
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05]"
              >
                Afif Pathan
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 mt-1"
              >
                Senior Mobile Architect &amp; Flutter Lead
              </motion.div>
            </div>
          </div>

          {/* Specialties Badges Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 mb-6"
          >
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 font-medium">
              Cross-Platform Systems
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 font-medium">
              Enterprise Clean Architecture
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 font-medium">
              Algorithmic Trading &amp; Real-Time
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 font-medium">
              AI-Assisted Workflows
            </span>
          </motion.div>

          {/* Positioning Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
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

          {/* Action CTAs with Micro-Interactions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 mb-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-cyan-400 dark:hover:bg-cyan-300 dark:text-[#07090e] transition-all duration-200 shadow-lg shadow-blue-600/25 dark:shadow-cyan-400/20"
            >
              <span>Explore 25+ Systems &amp; Work</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-cyan-500/40 shadow-sm transition-all duration-200"
            >
              <Download className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>Download Verified CV</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl font-mono text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <span>Initiate Contact</span>
              <span>↗</span>
            </motion.a>
          </motion.div>

          {/* Verified Direct Channels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-600 dark:text-slate-400"
          >
            <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[11px] font-semibold">
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

        {/* Right Column: Floating Architectural System Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          {/* Architectural System Board with Smooth Floating Motion */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="glass-panel rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-xl relative overflow-hidden bg-white/95 dark:bg-[#0c101c]/90"
          >
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
              <motion.div
                whileHover={{ scale: 1.02, x: 3 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-blue-200 dark:border-cyan-500/30 flex items-center justify-between cursor-default transition-colors hover:border-blue-400 dark:hover:border-cyan-400"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-cyan-950/60 border border-blue-200 dark:border-cyan-500/40 text-blue-700 dark:text-cyan-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Flutter &amp; Native Clients</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Material 3 · Adaptive Viewports · 120Hz</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 dark:bg-cyan-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-800/40 font-medium">
                  Presentation
                </span>
              </motion.div>

              {/* Node 2: State Machines */}
              <motion.div
                whileHover={{ scale: 1.02, x: 3 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-between cursor-default transition-colors hover:border-indigo-400 dark:hover:border-indigo-400"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-500/40 text-indigo-700 dark:text-indigo-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">BLoC / Cubit Reactive Streams</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Unidirectional · Zero Memory Leaks</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/40 font-medium">
                  Application
                </span>
              </motion.div>

              {/* Node 3: Clean Domain Core */}
              <motion.div
                whileHover={{ scale: 1.02, x: 3 }}
                transition={{ duration: 0.2 }}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-between cursor-default transition-colors hover:border-emerald-400 dark:hover:border-emerald-400"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Clean Architecture &amp; Use Cases</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Decoupled Entities · Inversion of Control</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40 font-medium">
                  Domain Core
                </span>
              </motion.div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-3 gap-2 text-center font-mono">
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-cyan-400">{PERSONAL_INFO.yearsTotal}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Years Eng.</div>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <div className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">{PERSONAL_INFO.yearsMobile}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Cross-Platform</div>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <div className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">{PERSONAL_INFO.productionPlatforms}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Systems Built</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
