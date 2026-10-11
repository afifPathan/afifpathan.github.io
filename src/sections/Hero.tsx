import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LanyardBadge } from '../components/LanyardBadge';

const TICKER_ITEMS = [
  'ENTERPRISE CLEAN ARCHITECTURE',
  '25+ PRODUCTION SYSTEMS DELIVERED',
  'DETERMINISTIC BLOC / CUBIT',
  '6+ YEARS CROSS-PLATFORM & FLUTTER',
  'FASTAPI & PYTHON TRADING DAEMONS',
  'REAL-TIME WEBSOCKET TELEMETRY',
  'WEBRTC VIDEO TELECONSULTATION',
  'OFFLINE-FIRST (SQLITE / HIVE)',
  'GEMINI & OPENAI AI WORKFLOWS',
  'COMPILED 60-120 FPS CLIENTS',
  'ZERO MEMORY LEAKS',
];

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction and Senior Engineering Profile"
      className="relative min-h-[96vh] flex flex-col justify-between pt-20 sm:pt-22 pb-8 px-4 sm:px-6 lg:px-8 bg-blueprint-grid overflow-hidden"
    >
      {/* Ambient Lighting Cones */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/[0.06] dark:bg-cyan-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[320px] bg-amber-500/[0.04] dark:bg-indigo-500/[0.05] rounded-full blur-[130px] pointer-events-none" />

      {/* Animated Kinetic Watermark Track (Never Clipped, Infinite Fluid Motion) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 overflow-hidden pointer-events-none select-none z-0">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
          className="flex whitespace-nowrap text-[clamp(4.5rem,11vw,9.5rem)] font-black uppercase tracking-tight text-slate-900/[0.04] dark:text-white/[0.035] leading-none select-none font-mono"
        >
          <span className="mr-12">SENIOR MOBILE ARCHITECT &amp; FLUTTER LEAD · AFIF PATHAN · SOFTWARE ARCHITECT · 25+ SYSTEMS ·</span>
          <span className="mr-12">SENIOR MOBILE ARCHITECT &amp; FLUTTER LEAD · AFIF PATHAN · SOFTWARE ARCHITECT · 25+ SYSTEMS ·</span>
        </motion.div>
      </div>

      {/* Top Status & Verification Header Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200/60 dark:border-white/10 relative z-10"
      >
        <div className="flex items-center gap-2 font-mono text-xs text-slate-600 dark:text-slate-400">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 dark:bg-cyan-400" />
          </span>
          <span className="font-bold uppercase tracking-wider text-[11px] text-slate-800 dark:text-slate-200">
            Principal Mobile Systems &amp; Cross-Platform Architecture
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 self-end sm:self-auto">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-800 dark:text-emerald-300 backdrop-blur-md shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold">Available for Remote &amp; Architecture Advisory</span>
          </div>

          {/* Verified Identity Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200/70 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-xs">
            <span className="font-bold text-slate-900 dark:text-white">Afif Pathan</span>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <span className="text-slate-500 dark:text-slate-400 font-medium">8+ Years in Production · 25+ Systems</span>
          </div>
        </div>
      </motion.div>

      {/* Main Hero Content Grid (Balanced 2-Column Architecture Layout) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10 flex-1 my-auto py-2">
        {/* Left Column: Big Role Headline, Tags, Positioning & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          {/* Primary Editorial Heading: SENIOR MOBILE ARCHITECT & FLUTTER LEAD (Cinematic Blur-Scale Reveal) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 pt-0"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.06] mb-2.5">
              Senior Mobile Architect &amp;{' '}
              <em className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-300">
                Flutter Lead.
              </em>
            </h1>

            <div className="text-base sm:text-xl font-bold tracking-tight text-slate-700 dark:text-slate-300 font-mono">
              Software Architect
            </div>
          </motion.div>

          {/* Specialization Chips Bar: Fast Swipe from Left */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 mb-6 transform-gpu"
          >
            <span className="px-3 py-1.5 rounded-xl bg-white/45 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/60 dark:border-white/10 font-medium shadow-xs">
              ✦ Cross-Platform Systems
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/45 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/60 dark:border-white/10 font-medium shadow-xs">
              ✦ Enterprise Clean Architecture
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/45 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/60 dark:border-white/10 font-medium shadow-xs">
              ✦ FastAPI &amp; Trading Daemons
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/45 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/60 dark:border-white/10 font-medium shadow-xs">
              ✦ Google Antigravity &amp; Codex
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/45 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/60 dark:border-white/10 font-medium shadow-xs">
              ✦ AI Agentic Automation
            </span>
          </motion.div>

          {/* Positioning Statement Card: Fast Swipe from Left with Shadow & Blur */}
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="p-5 sm:p-6 rounded-2xl bg-white/45 dark:bg-slate-800/35 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-md mb-6 transform-gpu"
          >
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              <span className="text-slate-900 dark:text-white font-semibold">
                8+ years of software engineering excellence
              </span>
              , including{' '}
              <span className="text-slate-900 dark:text-white font-semibold">
                6+ years architecting production-grade cross-platform platforms
              </span>{' '}
              and{' '}
              <span className="text-blue-700 dark:text-cyan-400 font-semibold">
                {PERSONAL_INFO.productionPlatforms} production systems
              </span>
              . Specializing in enterprise{' '}
              <span className="text-blue-700 dark:text-cyan-400 font-medium">Clean Architecture &amp; SOLID</span>
              , deterministic{' '}
              <span className="text-indigo-600 dark:text-indigo-300 font-medium">
                BLoC/Cubit &amp; Riverpod state machines
              </span>
              , real-time{' '}
              <span className="text-slate-900 dark:text-white font-medium">
                WebSocket telemetry &amp; WebRTC teleconsultation
              </span>
              , offline-first SQLite/Hive engines, Python/FastAPI algorithmic trading daemons, and{' '}
              <span className="text-blue-700 dark:text-cyan-400 font-medium">AI Automation (Google Antigravity, OpenAI Codex, Gemini &amp; Claude)</span> across EdTech, InsurTech, e-commerce, healthcare &amp; telemedicine, algorithmic fintech, enterprise facility geofencing, hardware POS access control, audio streaming, and automotive telematics.
            </p>
          </motion.div>

          {/* Action CTAs: Fast Swipe from Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3.5 mb-2 transform-gpu"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-semibold text-white bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-100 dark:text-[#0e121d] transition-all duration-200 shadow-md cursor-pointer"
            >
              <span>Explore 25+ Systems &amp; Work</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Afif_Pathan_Senior_Mobile_Architect_CV.pdf"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-medium text-slate-800 dark:text-slate-200 bg-white/70 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 border border-slate-300 dark:border-white/10 hover:border-slate-500 shadow-xs transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>Download Verified CV</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl font-mono text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>Initiate Contact</span>
              <span>↗</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: 3D Lanyard ID Badge + Balanced Architecture Telemetry Pod */}
        <div className="lg:col-span-5 flex flex-col items-center justify-start relative w-full">
          <div className="w-full flex justify-center mb-3">
            <LanyardBadge />
          </div>

          {/* Telemetry & Direct Channels Pod (Fast Swipe from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[340px] rounded-2xl bg-white/45 dark:bg-slate-800/35 backdrop-blur-md border border-slate-200/80 dark:border-white/10 p-4 shadow-md transform-gpu"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-200/70 dark:border-white/10 text-xs font-mono">
              <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
                Architecture Telemetry
              </span>
              <span className="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/25">
                ● VERIFIED
              </span>
            </div>

            {/* 2x2 Telemetry Metric Grid */}
            <div className="grid grid-cols-2 gap-2 font-mono mb-3">
              <div className="p-2 rounded-xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/5 text-center shadow-2xs">
                <div className="text-lg font-extrabold text-blue-700 dark:text-cyan-400 leading-tight">
                  8+ Years
                </div>
                <div className="text-[9px] text-slate-500 dark:text-slate-400 uppercase tracking-tight mt-0.5">
                  Engineering Depth
                </div>
              </div>
              <div className="p-2 rounded-xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/5 text-center shadow-2xs">
                <div className="text-lg font-extrabold text-indigo-600 dark:text-indigo-400 leading-tight">
                  25+ Systems
                </div>
                <div className="text-[9px] text-slate-500 dark:text-slate-400 uppercase tracking-tight mt-0.5">
                  Delivered in Prod
                </div>
              </div>
              <div className="p-2 rounded-xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/5 text-center shadow-2xs">
                <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 leading-tight">
                  60–120 FPS
                </div>
                <div className="text-[9px] text-slate-500 dark:text-slate-400 uppercase tracking-tight mt-0.5">
                  Compiled Runtime
                </div>
              </div>
              <div className="p-2 rounded-xl bg-white/50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/5 text-center shadow-2xs">
                <div className="text-lg font-extrabold text-amber-600 dark:text-amber-400 leading-tight">
                  0% Leaks
                </div>
                <div className="text-[9px] text-slate-500 dark:text-slate-400 uppercase tracking-tight mt-0.5">
                  Deterministic Mem
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="pt-2 border-t border-slate-200/70 dark:border-white/10 flex flex-col gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400">
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                <span>Direct Channels</span>
                <span className="text-[9px] text-blue-600 dark:text-cyan-400 font-mono">24h SLA</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[11px]">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-slate-950 dark:hover:text-cyan-300 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/afifPathan</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-slate-950 dark:hover:text-cyan-300 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>linkedin.com/in/afif-pathan</span>
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1.5 hover:text-slate-950 dark:hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Cue & Continuous Marquee Ticker */}
      <div className="relative z-10 mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
        <div className="flex items-center justify-between pb-3 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
            <span className="uppercase tracking-widest text-[10px]">SCROLL TO EXPLORE ARCHITECTURE</span>
          </div>
          <a href="#snapshot" className="flex items-center gap-1 text-[11px] hover:text-slate-900 dark:hover:text-white transition-colors">
            <span>Scroll</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>

        {/* Continuous Marquee Ticker */}
        <div className="overflow-hidden py-2 bg-slate-100/70 dark:bg-slate-800/50 rounded-xl border border-slate-200/80 dark:border-white/5 select-none">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            className="flex items-center gap-8 whitespace-nowrap text-[11px] font-mono text-slate-700 dark:text-slate-300 uppercase tracking-widest"
          >
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
              <span key={idx} className="flex items-center gap-4">
                <span>{item}</span>
                <span className="text-blue-500 dark:text-cyan-400 font-bold">·</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
