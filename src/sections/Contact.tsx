import React, { useState } from 'react';
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
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative"
    >
      {/* Ambient background light */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          08 — Connect &amp; Engage
        </span>
        <div className="h-px bg-cyan-500/20 flex-1 max-w-[120px]" />
      </div>

      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Let’s architect something exceptional.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            Open for Senior Mobile &amp; Lead Roles.
          </span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Seeking Senior Mobile Architect, Flutter Tech Lead, or Staff Mobile positions. Whether you are scaling an enterprise product, redesigning a multi-platform architecture, or evaluating real-time systems, reach out directly.
        </p>
      </div>

      {/* Direct Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {/* Email Card */}
        <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40 transition-colors">
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase mb-1">Direct Email</div>
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Senior%20Mobile%20Architect%20Inquiry`}
              className="text-sm font-semibold text-white hover:text-cyan-300 break-all transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Senior%20Mobile%20Architect%20Inquiry`}
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <span>Compose</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
              className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 p-1"
              aria-label="Copy email address to clipboard"
            >
              {copiedType === 'email' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Phone Card */}
        <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between group hover:border-indigo-500/40 transition-colors">
          <div>
            <div className="w-10 h-10 rounded-xl bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase mb-1">Direct Phone / Call</div>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
            >
              {PERSONAL_INFO.phone}
            </a>
          </div>

          <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
            >
              <span>Call Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
              className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 p-1"
              aria-label="Copy phone number to clipboard"
            >
              {copiedType === 'phone' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between group hover:border-blue-500/40 transition-colors">
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <Linkedin className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase mb-1">LinkedIn Network</div>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white hover:text-blue-300 transition-colors"
            >
              afif-pathan
            </a>
          </div>

          <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <span>View Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-xs font-mono text-slate-500">Verified</span>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between group hover:border-purple-500/40 transition-colors">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <Github className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase mb-1">GitHub Repositories</div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white hover:text-purple-300 transition-colors"
            >
              afifPathan
            </a>
          </div>

          <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              <span>Inspect Code</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-xs font-mono text-slate-500">22+ Repos</span>
          </div>
        </div>
      </div>

      {/* Location & Timezone Bar */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-2 text-slate-300">
          <MapPin className="w-4 h-4 text-cyan-400" />
          <span>Base: Ahmedabad, Gujarat, India (IST / UTC+05:30)</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-emerald-400" />
          <span>Flexible overlap with US, European, and APAC business hours</span>
        </div>
      </div>
    </section>
  );
};
