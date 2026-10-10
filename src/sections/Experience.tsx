import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/portfolioData';
import {
  MapPin,
  Calendar,
  ExternalLink,
  Github,
  Play,
  Package,
  Sparkles,
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Professional Experience Timeline"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      {/* Section Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          04 — Professional Track Record
        </span>
        <div className="h-px bg-cyan-500/20 flex-1 max-w-[120px]" />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
          Career Trajectory.<br />
          <span className="text-slate-400 font-light">From native Android to Mobile Architect.</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
          8+ years of engineering leadership across high-growth startups and global enterprise platforms in India and the United States.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <motion.article
            key={exp.id}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="relative group"
          >
            {/* Timeline Node Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#07090e] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-sm shadow-cyan-400/50" />

            <div className="p-6 md:p-8 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              {/* Header Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-lg md:text-xl font-bold text-white">
                      {exp.role}
                    </span>
                    {exp.partner && (
                      <span className="text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/30 px-2 py-0.5 rounded">
                        {exp.partner}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="text-cyan-400 font-semibold">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </span>
                </div>
              </div>

              {/* Highlight Pill if present */}
              {exp.highlight && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-950/30 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{exp.highlight}</span>
                </div>
              )}

              {/* Responsibilities list */}
              <ul className="space-y-2 mb-6">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <span className="text-cyan-400 mt-1 shrink-0 font-bold">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-black/40 text-slate-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Verified Links (if available) */}
              {exp.links && (
                <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-white/5">
                  {exp.links.repo && (
                    <a
                      href={exp.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-white bg-white/5 px-2.5 py-1 rounded border border-white/10 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repo</span>
                    </a>
                  )}
                  {exp.links.live && (
                    <a
                      href={exp.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-cyan-300 hover:text-white bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live App</span>
                    </a>
                  )}
                  {exp.links.playStore && (
                    <a
                      href={exp.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-emerald-300 hover:text-white bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Play Store</span>
                    </a>
                  )}
                  {exp.links.appStore && (
                    <a
                      href={exp.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-slate-200 hover:text-white bg-white/5 px-2.5 py-1 rounded border border-white/10 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>App Store</span>
                    </a>
                  )}
                  {exp.links.package && (
                    <a
                      href={exp.links.package}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-indigo-300 hover:text-white bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20 transition-colors"
                    >
                      <Package className="w-3.5 h-3.5" />
                      <span>rz_camera pub.dev</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Additional Exposure Footer from CV */}
      <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
            Broad Domain Exposure
          </span>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Web3 &amp; fintech integrations, healthcare systems, automated AI search and content pipelines.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span>Continuous delivery since 2017</span>
        </div>
      </div>
    </section>
  );
};
