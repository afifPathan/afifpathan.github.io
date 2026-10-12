import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types/portfolio';
import {
  ExternalLink,
  Github,
  Play,
  Package,
  Layers,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Smartphone,
  ShoppingBag,
  BookOpen,
  Camera,
  FileText,
  Volume2,
} from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ProjectCardProps {
  project: Project;
  index: number;
  compact?: boolean;
}

// Flagship projects that warrant dedicated architectural deep-dive callout
const ARCH_DEEP_DIVE_IDS = [
  'trading-bot-dashboard',
  'stock-trading-bot',
  'swing-delivery-stock-trading-bot',
  'buyzaar',
  'degreed',
  'practo-doctor-hub',
  'roadzen-mvpex',
  'diversified-maintenance',
];

// Helper to render customized screen mockups inside device frames
const renderDeviceMockup = (project: Project) => {
  const pid = project.id;

  // 1. LIVE PROJECT: Trading Bot Terminal Dashboard -> macOS Browser Model
  if (pid === 'trading-bot-dashboard') {
    return (
      <div className="device-browser hidden sm:block shrink-0 shadow-glass" aria-hidden="true">
        {/* macOS Window Titlebar */}
        <div className="bg-[#171A2C] px-2.5 py-1.5 flex items-center gap-1.5 border-b border-white/10">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <div className="ml-2 flex-1 px-1.5 py-0.5 rounded bg-black/40 text-[7px] font-mono text-accent-cyan truncate">
            dashboard.nseswingtrading.dpdns.org
          </div>
        </div>
        {/* Live Terminal UI */}
        <div className="p-2.5 bg-[#0F111E] text-white font-mono text-[9px] h-[175px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                WS TELEMETRY
              </span>
              <span className="text-emerald-400 font-bold">P&amp;L: +₹18,420</span>
            </div>
            <div className="flex items-center justify-between text-[8px] my-1">
              <span className="font-bold text-white/90">TATAMOTORS (5m)</span>
              <span className="text-emerald-400 font-bold">₹982.40 ▲</span>
            </div>
            {/* Candlestick Visualizer */}
            <div className="h-12 bg-white/5 rounded p-1 flex items-end gap-1 my-1">
              {[30, 45, 38, 62, 54, 78, 68, 92, 85, 98].map((h, i) => (
                <div key={i} className="flex-1 bg-emerald-400 rounded-xs" style={{ height: `${h * 0.44}px` }} />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between text-[7px] text-white/50 pt-1 border-t border-white/10">
            <span>Cloudflare Pages · 32ms</span>
            <span className="text-accent-cyan font-bold">TanStack + WebSocket</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. LIVE PROJECT: Buyzaar -> macOS Browser Model
  if (pid === 'buyzaar') {
    return (
      <div className="device-browser hidden sm:block shrink-0 shadow-glass" aria-hidden="true">
        <div className="bg-[#171A2C] px-2.5 py-1.5 flex items-center gap-1.5 border-b border-white/10">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <div className="ml-2 flex-1 px-1.5 py-0.5 rounded bg-black/40 text-[7px] font-mono text-accent-cyan truncate">
            buyzaar-26379.web.app
          </div>
        </div>
        <div className="p-2.5 bg-gradient-to-b from-[#0F1424] via-[#111320] to-[#0A0B14] text-white font-mono text-[9px] h-[175px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
              <span className="font-bold text-accent-cyan flex items-center gap-1">
                <ShoppingBag className="w-2.5 h-2.5" /> Buyzaar Live
              </span>
              <span className="bg-primary/20 text-accent-cyan px-1 rounded border border-primary/30">Cart (3)</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 my-1">
              <div className="p-1 rounded bg-white/5 border border-white/10 text-center">
                <div className="text-xs">🍎 Fresh Produce</div>
                <div className="text-accent-cyan text-[8px] font-bold mt-0.5">₹140.00</div>
              </div>
              <div className="p-1 rounded bg-white/5 border border-white/10 text-center">
                <div className="text-xs">🥛 Farm Dairy</div>
                <div className="text-accent-cyan text-[8px] font-bold mt-0.5">₹65.00</div>
              </div>
            </div>
          </div>
          <div className="p-1.5 rounded-lg bg-emerald-700 text-white text-[8px] text-center font-bold shadow-xs">
            WhatsApp Order Dispatch →
          </div>
        </div>
      </div>
    );
  }

  // 3. LIVE PROJECT: Degreed -> iPhone 16 Pro (Dynamic Island)
  if (pid.includes('degreed')) {
    return (
      <div className="device-iphone hidden sm:block shrink-0 shadow-glass" aria-hidden="true">
        {/* Dynamic Island */}
        <div className="pt-1.5 pb-1 px-3 flex justify-center bg-[#171A2C]">
          <div className="w-14 h-3 bg-black/60 rounded-full flex items-center justify-center border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
        <div className="p-2.5 flex flex-col justify-between h-[180px] bg-gradient-to-b from-[#0F1424] via-[#111320] to-[#0A0B14] text-white font-mono text-[9px]">
          <div>
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
              <span className="text-accent-cyan font-bold flex items-center gap-1">
                <BookOpen className="w-2.5 h-2.5" /> Degreed
              </span>
              <span className="text-primary font-medium">Enterprise</span>
            </div>
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 mt-1">
              <div className="text-[7px] text-accent-cyan font-bold uppercase">LEARNING PATH</div>
              <div className="font-bold text-[9px] text-white mt-0.5">Clean Architecture in Dart</div>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-primary h-full w-[78%]" />
              </div>
              <div className="flex justify-between text-[7px] text-white/50 mt-1">
                <span>78% complete</span>
                <span>12 modules</span>
              </div>
            </div>
          </div>
          <div className="p-1.5 rounded-lg bg-primary text-slate-950 text-[8px] text-center font-bold">
            Resume Pathway →
          </div>
        </div>
      </div>
    );
  }

  // 4. Python Trading Daemon -> Server Terminal Model
  if (pid.includes('trading-bot') || pid.includes('swing') || pid === 'stock-trading-bot') {
    return (
      <div className="device-terminal hidden sm:block shrink-0 shadow-glass" aria-hidden="true">
        <div className="bg-[#171A2C] px-2.5 py-1.5 flex items-center justify-between border-b border-white/10 text-[8px] text-accent-cyan font-mono">
          <span>systemd://nse-bot</span>
          <span className="text-emerald-400">ACTIVE</span>
        </div>
        <div className="p-2.5 bg-[#0F111E] text-emerald-400 font-mono text-[8px] h-[175px] flex flex-col justify-between">
          <div className="space-y-1">
            <div className="text-white/50">[09:15:00] Angel One SmartAPI Feed Connected</div>
            <div className="text-accent-cyan">[09:20:05] FastAPI Daemon: 50 Symbols Active</div>
            <div className="text-white bg-emerald-950/60 p-1 rounded border border-emerald-500/30">
              [09:35:12] SIGNAL: TATAMOTORS EMA 9/21
            </div>
            <div className="text-amber-400">[09:35:13] Risk Circuit: Drawdown 0.00% OK</div>
          </div>
          <div className="text-[7px] text-white/50 pt-1 border-t border-white/10 flex justify-between">
            <span>FastAPI &amp; SQLite</span>
            <span className="text-emerald-400 font-bold">0 Duplicate Orders</span>
          </div>
        </div>
      </div>
    );
  }

  // 5. LIVE PROJECT: rz_camera / Roadzen -> Server Daemon / SDK Terminal Model
  if (pid.includes('camera') || pid.includes('roadzen')) {
    return (
      <div className="device-terminal hidden sm:block shrink-0 shadow-glass" aria-hidden="true">
        <div className="bg-[#171A2C] px-2.5 py-1.5 flex items-center justify-between border-b border-white/10 text-[8px] text-accent-cyan font-mono">
          <span className="flex items-center gap-1"><Camera className="w-2.5 h-2.5" /> rz_camera</span>
          <span className="text-emerald-400">pub.dev</span>
        </div>
        <div className="p-2.5 bg-[#0F111E] text-white font-mono text-[8px] h-[175px] flex flex-col justify-between relative">
          <div className="absolute inset-2 border border-dashed border-accent-cyan/40 rounded pointer-events-none" />
          <div className="text-center my-auto relative z-10">
            <div className="text-accent-cyan font-bold text-[10px]">[ VEHICLE DETECTED ]</div>
            <div className="text-[7px] text-white/70 mt-1">Bounding Box: 98.4% Confidence</div>
            <div className="text-emerald-400 text-[7px] mt-0.5">60 FPS Isolated Stream</div>
          </div>
          <div className="p-1.5 rounded-lg bg-accent-cyan text-slate-900 text-[7px] text-center font-bold z-10">
            Capture High-Res Image
          </div>
        </div>
      </div>
    );
  }

  // 6. LIVE PROJECT: NewsPod -> Android Flagship (Punch-Hole)
  if (pid.includes('newspod')) {
    return (
      <div className="device-android hidden sm:block shrink-0 shadow-glass" aria-hidden="true">
        <div className="pt-1.5 pb-1 flex justify-center bg-[#171A2C]">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20 ring-1 ring-white/10" />
        </div>
        <div className="p-2.5 flex flex-col justify-between h-[180px] bg-gradient-to-b from-[#1C1335] via-[#111320] to-[#0A0B14] text-white font-mono text-[9px]">
          <div>
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
              <span className="text-accent-violet font-bold flex items-center gap-1">
                <FileText className="w-2.5 h-2.5" /> NewsPod
              </span>
              <span className="text-accent-cyan text-[7px]">OFFLINE CACHE</span>
            </div>
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 mt-1">
              <div className="text-[7px] text-accent-violet font-bold">TECH BRIEFING</div>
              <div className="font-bold text-[9px] text-white mt-0.5 line-clamp-2">Compiled 120Hz Mobile Frameworks</div>
              <div className="flex items-center gap-0.5 mt-2 h-4">
                {[4, 8, 14, 6, 12, 16, 9, 14, 8, 12, 5].map((h, i) => (
                  <div key={i} className="flex-1 bg-accent-violet rounded-full" style={{ height: `${h}px` }} />
                ))}
              </div>
            </div>
          </div>
          <div className="p-1.5 rounded-lg bg-accent-violet text-white text-[8px] text-center font-bold flex items-center justify-center gap-1">
            <Volume2 className="w-2.5 h-2.5" /> <span>Play Audio Brief (14:20)</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, compact = false }) => {
  const cardRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [showArchDetails, setShowArchDetails] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0, active: false });

  const isFlagshipArch = !compact && (ARCH_DEEP_DIVE_IDS.includes(project.id) || project.featured);

  // 3D Tilt & Glow Handler (strictly disabled on touch devices and for reduced motion)
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    const isTouch = 'ontouchstart' in window || window.matchMedia('(pointer: coarse)').matches;
    if (isTouch || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotX = ((y / rect.height) - 0.5) * -8;
    const rotY = ((x / rect.width) - 0.5) * 8;

    setRotate({ x: rotX, y: rotY });
    setGlowPos({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlowPos((prev) => ({ ...prev, active: false }));
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
      style={{
        transform: prefersReducedMotion
          ? 'none'
          : `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.18s ease-out, border-color 0.25s ease',
      }}
      className={`relative rounded-2xl bg-dark-surface/65 backdrop-blur-xl border border-white/10 hover:border-primary/40 shadow-glass overflow-hidden flex flex-col justify-between group transition-colors duration-300 ${
        project.featured && !compact ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Mouse Follow Glow Overlay */}
      {glowPos.active && !prefersReducedMotion && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, rgba(91, 140, 255, 0.15), transparent 60%)`,
          }}
          aria-hidden="true"
        />
      )}

      <div className={`${compact ? 'p-4 sm:p-6' : 'p-6 md:p-8'} relative z-10`}>
        {/* Top Header & Tilted Device Layout */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-4">
          {/* Main Info */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="text-xs font-mono font-medium text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                {project.category}
              </span>
              {project.featured && !compact && (
                <span className="text-xs font-mono font-medium text-accent-violet bg-accent-violet/10 border border-accent-violet/20 px-2.5 py-0.5 rounded-full">
                  Featured Tier-1 System
                </span>
              )}
              <span className="text-xs font-mono text-dark-textMuted ml-auto md:ml-0">
                {project.period}
              </span>
            </div>

            <h3 className={`${compact ? 'text-lg sm:text-xl' : 'text-2xl md:text-3xl'} font-bold text-white tracking-tight mb-1 font-heading`}>
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-accent-cyan mb-2">
              {project.tagline}
            </p>

            <div className="text-xs font-mono text-dark-textMuted mb-2">
              Role: <span className="text-white font-medium">{project.role}</span>
            </div>
            <p className="text-xs sm:text-sm text-dark-textMuted leading-relaxed mb-3 font-normal">
              {project.problem}
            </p>
          </div>

          {/* Individual Device Mockup (Hidden in compact mode or mobile) */}
          {!compact && renderDeviceMockup(project)}
        </div>

        {/* Architecture Note on Flagship Projects */}
        {isFlagshipArch && project.architecture && (
          <div className="p-4 rounded-xl bg-black/25 border border-white/10 mb-5 text-xs text-dark-textMuted space-y-1.5">
            <div className="flex items-center gap-2 text-primary font-mono font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>Architecture &amp; System Design:</span>
            </div>
            <p className="leading-relaxed text-white/90">{project.architecture}</p>
          </div>
        )}

        {/* Production Contributions */}
        <div className="space-y-2 mb-5">
          <div className="text-xs font-mono uppercase tracking-wider text-dark-textMuted">
            Key Engineering Contributions:
          </div>
          <ul className="space-y-2">
            {project.contributions.map((c, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-dark-textMuted">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span className="leading-relaxed text-white/85">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Layers Toggle */}
        {project.architectureLayers && (
          <div className="mb-5">
            <button
              onClick={() => setShowArchDetails(!showArchDetails)}
              className="flex items-center gap-2 text-xs font-mono text-primary hover:text-accent-cyan transition-colors py-1 font-semibold cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{showArchDetails ? 'Hide Layer Architecture' : 'View Clean Architecture Blueprint'}</span>
              {showArchDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <AnimatePresence>
              {showArchDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 p-4 rounded-xl bg-black/40 text-white/90 border border-white/10 text-xs space-y-2 font-mono overflow-hidden shadow-inner"
                >
                  <div>
                    <span className="text-accent-cyan font-semibold">[Presentation]: </span>
                    <span className="text-dark-textMuted">{project.architectureLayers.presentation}</span>
                  </div>
                  <div>
                    <span className="text-accent-violet font-semibold">[Domain Core]: </span>
                    <span className="text-dark-textMuted">{project.architectureLayers.domain}</span>
                  </div>
                  <div>
                    <span className="text-emerald-400 font-semibold">[Data / Sync]: </span>
                    <span className="text-dark-textMuted">{project.architectureLayers.data}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/80 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: External Links */}
      <div className="px-6 md:px-8 py-4 bg-black/20 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 relative z-10">
        {project.metrics ? (
          <span className="text-xs font-mono text-dark-textMuted">
            {project.metrics}
          </span>
        ) : (
          <span className="text-xs font-mono text-dark-textMuted">
            Production Delivery
          </span>
        )}

        <div className="flex items-center gap-2.5 ml-auto">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} repository on GitHub`}
              className="flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Repository</span>
            </a>
          )}

          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live site for ${project.title}`}
              className="flex items-center gap-1.5 text-xs font-mono text-slate-950 bg-primary hover:bg-primary-hover transition-colors px-3 py-1.5 rounded-lg shadow-glow-primary font-bold"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live System</span>
            </a>
          )}

          {project.links.playStore && (
            <a
              href={project.links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on Google Play Store`}
              className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-lg border border-emerald-500/30"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Play Store</span>
            </a>
          )}

          {project.links.appStore && (
            <a
              href={project.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on Apple App Store`}
              className="flex items-center gap-1.5 text-xs font-mono text-white/90 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>App Store</span>
            </a>
          )}

          {project.links.package && (
            <a
              href={project.links.package}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} package on pub.dev`}
              className="flex items-center gap-1.5 text-xs font-mono text-accent-violet hover:text-white transition-colors bg-accent-violet/10 hover:bg-accent-violet/20 px-3 py-1.5 rounded-lg border border-accent-violet/30"
            >
              <Package className="w-3.5 h-3.5" />
              <span>pub.dev Package</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
