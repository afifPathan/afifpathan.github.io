import React, { useState } from 'react';
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
  Video,
  Camera,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Helper to render customized screen mockups inside the .mini-phone
const renderPhoneScreen = (projectId: string, title: string) => {
  if (projectId.includes('trading')) {
    return (
      <div className="p-2.5 flex flex-col justify-between h-[190px] bg-slate-950 text-white font-mono text-[9px]">
        <div>
          <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-white/10 text-[8px]">
            <span className="text-emerald-400 font-bold">NSE · LIVE</span>
            <span className="text-slate-400">9:35:12</span>
          </div>
          <div className="font-bold text-[10px] text-white">TATAMOTORS</div>
          <div className="text-emerald-400 font-bold text-xs">₹982.40 <span className="text-[8px]">+2.4%</span></div>
          {/* Simulated Candlestick Chart */}
          <div className="h-14 my-2 flex items-end gap-1.5 px-1 bg-white/5 rounded">
            {[30, 45, 40, 60, 55, 75, 70, 90].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div className="w-[1px] h-2 bg-emerald-500/50" />
                <div
                  className="w-full bg-emerald-400 rounded-xs"
                  style={{ height: `${h * 0.4}px` }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-1 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-[8px] flex items-center justify-between">
          <span>EMA 9/21 CROSS</span>
          <span className="font-bold">EXECUTE</span>
        </div>
      </div>
    );
  }

  if (projectId.includes('buyzaar')) {
    return (
      <div className="p-2.5 flex flex-col justify-between h-[190px] bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[9px]">
        <div>
          <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-slate-200 dark:border-white/10 text-[8px]">
            <span className="font-bold text-blue-600 dark:text-cyan-400 flex items-center gap-1">
              <ShoppingBag className="w-2.5 h-2.5" /> Buyzaar
            </span>
            <span className="bg-blue-100 dark:bg-cyan-950 text-blue-700 dark:text-cyan-300 px-1 rounded">Cart (3)</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 my-1">
            <div className="p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 text-center">
              <div className="w-full h-8 bg-slate-100 dark:bg-slate-700 rounded mb-1 flex items-center justify-center text-xs">🍎</div>
              <div className="font-bold text-[8px] truncate">Organic Fresh</div>
              <div className="text-blue-600 dark:text-cyan-400 text-[8px] font-bold">₹140</div>
            </div>
            <div className="p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 text-center">
              <div className="w-full h-8 bg-slate-100 dark:bg-slate-700 rounded mb-1 flex items-center justify-center text-xs">🥛</div>
              <div className="font-bold text-[8px] truncate">Dairy Farm</div>
              <div className="text-blue-600 dark:text-cyan-400 text-[8px] font-bold">₹65</div>
            </div>
          </div>
        </div>
        <div className="p-1.5 rounded-lg bg-emerald-600 text-white text-[8px] text-center font-bold shadow-xs">
          Order via WhatsApp →
        </div>
      </div>
    );
  }

  if (projectId.includes('degreed')) {
    return (
      <div className="p-2.5 flex flex-col justify-between h-[190px] bg-slate-900 text-white font-mono text-[9px]">
        <div>
          <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-white/10 text-[8px]">
            <span className="text-cyan-400 font-bold flex items-center gap-1">
              <BookOpen className="w-2.5 h-2.5" /> Degreed
            </span>
            <span className="text-slate-400">Enterprise</span>
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 mt-1">
            <div className="text-[7px] text-cyan-400 font-bold uppercase tracking-wider">SKILL PATH</div>
            <div className="font-bold text-[9px] text-white mt-0.5">Enterprise Clean Arch</div>
            <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-cyan-400 h-full w-[78%]" />
            </div>
            <div className="flex justify-between text-[7px] text-slate-400 mt-1">
              <span>78% complete</span>
              <span>12 modules</span>
            </div>
          </div>
        </div>
        <div className="p-1 rounded bg-blue-600 text-white text-[8px] text-center font-bold">
          Continue Learning
        </div>
      </div>
    );
  }

  if (projectId.includes('practo')) {
    return (
      <div className="p-2.5 flex flex-col justify-between h-[190px] bg-slate-950 text-white font-mono text-[9px]">
        <div>
          <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-white/10 text-[8px]">
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Video className="w-2.5 h-2.5" /> Practo WebRTC
            </span>
            <span className="text-emerald-400 animate-pulse">● LIVE</span>
          </div>
          <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-center my-2">
            <div className="w-8 h-8 rounded-full bg-emerald-600/30 border border-emerald-400 mx-auto mb-1 flex items-center justify-center text-xs">🩺</div>
            <div className="font-bold text-[9px] text-white">Dr. Mehta, MD</div>
            <div className="text-[7px] text-slate-400">Cardiology Specialist</div>
          </div>
        </div>
        <div className="p-1 rounded bg-rose-600 text-white text-[8px] text-center font-bold">
          End Consult (12:45)
        </div>
      </div>
    );
  }

  if (projectId.includes('camera') || projectId.includes('roadzen')) {
    return (
      <div className="p-2.5 flex flex-col justify-between h-[190px] bg-black text-white font-mono text-[9px] relative overflow-hidden">
        <div className="absolute inset-2 border border-dashed border-cyan-400/50 rounded pointer-events-none" />
        <div>
          <div className="flex items-center justify-between pb-1 mb-1.5 text-[8px] relative z-10">
            <span className="text-cyan-400 font-bold flex items-center gap-1">
              <Camera className="w-2.5 h-2.5" /> rz_camera
            </span>
            <span className="text-slate-400">EDGE AI</span>
          </div>
          <div className="text-center my-6 relative z-10">
            <div className="text-cyan-400 text-[10px] font-bold">[ VEHICLE DETECTED ]</div>
            <div className="text-[7px] text-slate-400 mt-1">Bounding Box: 98.4% Acc</div>
          </div>
        </div>
        <div className="p-1 rounded bg-cyan-500 text-black text-[8px] text-center font-bold relative z-10">
          Capture Frame (60FPS)
        </div>
      </div>
    );
  }

  // Default generic device layout
  return (
    <div className="p-2.5 flex flex-col justify-between h-[190px] bg-slate-900 text-white font-mono text-[9px]">
      <div>
        <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-white/10 text-[8px]">
          <span className="text-cyan-400 font-bold">{title.slice(0, 10)}</span>
          <span className="text-emerald-400">60 FPS</span>
        </div>
        <div className="space-y-1.5 my-2">
          <div className="p-1.5 rounded bg-white/5 border border-white/5">
            <div className="h-1.5 w-12 bg-cyan-400/60 rounded mb-1" />
            <div className="h-1 w-20 bg-slate-600 rounded" />
          </div>
          <div className="p-1.5 rounded bg-white/5 border border-white/5">
            <div className="h-1.5 w-14 bg-indigo-400/60 rounded mb-1" />
            <div className="h-1 w-16 bg-slate-600 rounded" />
          </div>
        </div>
      </div>
      <div className="p-1 rounded bg-white/10 text-slate-300 text-[8px] text-center">
        Clean Arch Client
      </div>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [showArchDetails, setShowArchDetails] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl glass-panel border border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-300 hover:border-slate-400 dark:hover:border-cyan-500/40 hover:shadow-xl flex flex-col justify-between bg-white/95 dark:bg-slate-900/60 shadow-xs ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="p-6 md:p-8">
        {/* Top Header & Tilted Mini Phone Layout */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
          {/* Main Info */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-mono font-medium text-blue-700 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-950/40 border border-blue-200 dark:border-cyan-800/30 px-2.5 py-1 rounded-full">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-xs font-mono font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/30 px-2.5 py-1 rounded-full">
                  Featured Architecture
                </span>
              )}
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-auto md:ml-0">
                {project.period}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-blue-700 dark:text-cyan-300/90 mb-4">
              {project.tagline}
            </p>

            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
              Role: <span className="text-slate-800 dark:text-slate-200 font-semibold">{project.role}</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {project.problem}
            </p>
          </div>

          {/* Reference Tilted Mini-Phone Device Mockup */}
          <div className="mini-phone hidden sm:block shrink-0" aria-hidden="true">
            <span className="phone-speaker" />
            {renderPhoneScreen(project.id, project.title)}
            <div className="p-1 bg-slate-900 dark:bg-slate-950 border-t border-white/10 text-center">
              <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">INTERFACE STUDY</span>
            </div>
          </div>
        </div>

        {/* Architecture Note */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 mb-6 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
          <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-mono font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Architecture &amp; System Design:</span>
          </div>
          <p className="leading-relaxed text-slate-700 dark:text-slate-300">{project.architecture}</p>
        </div>

        {/* Verified Contributions */}
        <div className="space-y-2 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Key Engineering Contributions:
          </div>
          <ul className="space-y-2">
            {project.contributions.map((c, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <span className="text-blue-600 dark:text-cyan-400 font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Layers Toggle (if available) */}
        {project.architectureLayers && (
          <div className="mb-6">
            <button
              onClick={() => setShowArchDetails(!showArchDetails)}
              className="flex items-center gap-2 text-xs font-mono text-blue-700 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-300 transition-colors py-1 font-semibold"
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
                  className="mt-3 p-4 rounded-xl bg-slate-900 text-slate-200 border border-blue-500/30 text-xs space-y-2 font-mono overflow-hidden shadow-inner"
                >
                  <div>
                    <span className="text-cyan-400 font-semibold">[Presentation]: </span>
                    <span className="text-slate-300">{project.architectureLayers.presentation}</span>
                  </div>
                  <div>
                    <span className="text-indigo-400 font-semibold">[Domain Core]: </span>
                    <span className="text-slate-300">{project.architectureLayers.domain}</span>
                  </div>
                  <div>
                    <span className="text-emerald-400 font-semibold">[Data / Sync]: </span>
                    <span className="text-slate-300">{project.architectureLayers.data}</span>
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
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Verified External Links */}
      <div className="px-6 md:px-8 py-4 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-between gap-3">
        {project.metrics ? (
          <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
            {project.metrics}
          </span>
        ) : (
          <span className="text-xs font-mono text-slate-500">
            Verified Production Delivery
          </span>
        )}

        <div className="flex items-center gap-3 ml-auto">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} repository on GitHub`}
              className="flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 shadow-xs"
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
              className="flex items-center gap-1.5 text-xs font-mono text-blue-700 dark:text-cyan-300 hover:text-blue-900 dark:hover:text-white transition-colors bg-blue-50 dark:bg-cyan-500/10 hover:bg-blue-100 dark:hover:bg-cyan-500/20 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-cyan-500/30 shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Application</span>
            </a>
          )}

          {project.links.playStore && (
            <a
              href={project.links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on Google Play Store`}
              className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-white transition-colors bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-500/30 shadow-xs"
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
              className="flex items-center gap-1.5 text-xs font-mono text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 shadow-xs"
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
              className="flex items-center gap-1.5 text-xs font-mono text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-white transition-colors bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 px-3 py-1.5 rounded-lg border border-indigo-200 dark:border-indigo-500/30 shadow-xs"
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
