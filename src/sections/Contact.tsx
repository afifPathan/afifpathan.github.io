import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
  Clock,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information and Direct Channels"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-x-hidden overflow-x-clip"
    >
      {/* Ambient background light */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Signature Section Marker from Reference */}
      <div className="section-marker">
        <span>08 — CONNECT &amp; ENGAGE</span>
        <span>OPEN FOR SENIOR MOBILE &amp; TECH LEAD ROLES</span>
      </div>

      <div className="max-w-3xl mb-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-4"
        >
          Let’s architect something<br />
          <em className="text-slate-900 dark:text-white font-serif font-normal italic">
            exceptional together.
          </em>
        </motion.h2>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Seeking Senior Mobile Architect, Flutter Tech Lead, or Staff Mobile positions. Whether you are scaling an enterprise product, redesigning a multi-platform architecture, or evaluating real-time systems, reach out directly.
        </p>
      </div>

      {/* Direct Contact Cards Grid: Fast Repeat Swipe */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.08 }}
          transition={{ duration: 0.38, delay: 0.02, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 flex flex-col justify-between group hover:border-slate-400 dark:hover:border-cyan-500/40 transition-colors bg-white/35 dark:bg-slate-800/35 backdrop-blur-md shadow-md hover:shadow-xl transform-gpu"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-cyan-950/50 border border-slate-200 dark:border-cyan-500/30 flex items-center justify-center text-slate-800 dark:text-cyan-400 mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase mb-1">Direct Email</div>
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Senior%20Mobile%20Architect%20Inquiry`}
              className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-300 break-all transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Senior%20Mobile%20Architect%20Inquiry`}
              className="text-xs font-mono text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 flex items-center gap-1 font-semibold"
            >
              <span>Compose</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
              className="text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 p-1"
              aria-label="Copy email address to clipboard"
            >
              {copiedType === 'email' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.08 }}
          transition={{ duration: 0.38, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 flex flex-col justify-between group hover:border-slate-400 dark:hover:border-indigo-500/40 transition-colors bg-white/35 dark:bg-slate-800/35 backdrop-blur-md shadow-md hover:shadow-xl transform-gpu"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-indigo-950/50 border border-slate-200 dark:border-indigo-500/30 flex items-center justify-center text-slate-800 dark:text-indigo-400 mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase mb-1">Direct Phone / Call</div>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
            >
              {PERSONAL_INFO.phone}
            </a>
          </div>

          <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 font-semibold"
            >
              <span>Call Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
              className="text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 p-1"
              aria-label="Copy phone number to clipboard"
            >
              {copiedType === 'phone' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* LinkedIn Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.08 }}
          transition={{ duration: 0.38, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 flex flex-col justify-between group hover:border-slate-400 dark:hover:border-blue-500/40 transition-colors bg-white/35 dark:bg-slate-800/35 backdrop-blur-md shadow-md hover:shadow-xl transform-gpu"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-blue-950/50 border border-slate-200 dark:border-blue-500/30 flex items-center justify-center text-slate-800 dark:text-blue-400 mb-4">
              <Linkedin className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase mb-1">LinkedIn Network</div>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
            >
              afif-pathan
            </a>
          </div>

          <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 font-semibold"
            >
              <span>View Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-xs font-mono text-slate-400">Verified</span>
          </div>
        </motion.div>

        {/* GitHub Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.08 }}
          transition={{ duration: 0.38, delay: 0.11, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 flex flex-col justify-between group hover:border-slate-400 dark:hover:border-purple-500/40 transition-colors bg-white/35 dark:bg-slate-800/35 backdrop-blur-md shadow-md hover:shadow-xl transform-gpu"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-purple-950/50 border border-slate-200 dark:border-purple-500/30 flex items-center justify-center text-slate-800 dark:text-purple-400 mb-4">
              <Github className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase mb-1">GitHub Repositories</div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
            >
              afifPathan
            </a>
          </div>

          <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 font-semibold"
            >
              <span>Inspect Code</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-xs font-mono text-slate-400">22+ Repos</span>
          </div>
        </motion.div>
      </div>

      {/* Location & Timezone Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.08 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="p-6 rounded-2xl bg-white/35 dark:bg-slate-800/35 backdrop-blur-md border border-slate-200/60 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-600 dark:text-slate-400 shadow-md transform-gpu"
      >
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <MapPin className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
          <span>Base: Ahmedabad, Gujarat, India (IST / UTC+05:30)</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Flexible overlap with US, European, and APAC business hours</span>
        </div>
      </motion.div>
    </section>
  );
};
