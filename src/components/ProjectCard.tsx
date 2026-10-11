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
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [showArchDetails, setShowArchDetails] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.08 }}
      className={`rounded-2xl glass-panel border border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-300 hover:border-blue-400 dark:hover:border-cyan-500/30 hover:shadow-lg flex flex-col justify-between bg-white/95 dark:bg-slate-900/60 shadow-sm ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="p-6 md:p-8">
        {/* Card Header & Category Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-blue-700 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-950/40 border border-blue-200 dark:border-cyan-800/30 px-2.5 py-1 rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-xs font-mono font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/30 px-2.5 py-1 rounded-full">
                Featured Architecture
              </span>
            )}
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{project.period}</span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
          {project.title}
        </h3>
        <p className="text-sm font-semibold text-blue-700 dark:text-cyan-300/90 mb-4">{project.tagline}</p>

        {/* Role & Problem Statement */}
        <div className="space-y-3 mb-6">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Role: <span className="text-slate-800 dark:text-slate-200 font-semibold">{project.role}</span>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{project.problem}</p>
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
              className="flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 shadow-sm"
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
              className="flex items-center gap-1.5 text-xs font-mono text-blue-700 dark:text-cyan-300 hover:text-blue-900 dark:hover:text-white transition-colors bg-blue-50 dark:bg-cyan-500/10 hover:bg-blue-100 dark:hover:bg-cyan-500/20 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-cyan-500/30 shadow-sm"
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
              className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-white transition-colors bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-500/30 shadow-sm"
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
              className="flex items-center gap-1.5 text-xs font-mono text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 shadow-sm"
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
              className="flex items-center gap-1.5 text-xs font-mono text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-white transition-colors bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 px-3 py-1.5 rounded-lg border border-indigo-200 dark:border-indigo-500/30 shadow-sm"
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
