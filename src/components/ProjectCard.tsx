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
  MapPin,
  Globe,
  Radio,
  FileText,
  Calendar,
  Volume2,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Flagship projects that warrant dedicated architectural deep-dive callout
const ARCH_DEEP_DIVE_IDS = [
  'trading-bot-dashboard',
  'swing-delivery-stock-trading-bot',
  'buyzaar',
  'degreed',
  'practo-doctor-hub',
  'roadzen-fleet',
  'rz-camera-package',
  'diversified-maintenance',
];

// Helper to render customized screen mockups inside device frames
const renderDeviceMockup = (project: Project) => {
  const pid = project.id;

  // 1. DESKTOP / WEB PROJECTS -> Mini Browser Window Mockup
  if (pid === 'trading-bot-dashboard') {
    return (
      <div className="mini-browser hidden sm:block shrink-0" aria-hidden="true">
        {/* macOS Window Titlebar */}
        <div className="bg-slate-800 px-2.5 py-1.5 flex items-center gap-1.5 border-b border-white/10">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <div className="ml-2 flex-1 px-1.5 py-0.5 rounded bg-black/40 text-[7px] font-mono text-slate-300 truncate">
            dashboard.nseswingtrading.dpdns.org
          </div>
        </div>
        {/* Desktop Web Dashboard UI */}
        <div className="p-2.5 bg-slate-950 text-white font-mono text-[9px] h-[175px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                WS TELEMETRY
              </span>
              <span className="text-slate-400">P&amp;L: +₹18,420</span>
            </div>
            <div className="flex items-center justify-between text-[8px] my-1">
              <span className="font-bold text-slate-200">TATAMOTORS (5m)</span>
              <span className="text-emerald-400 font-bold">₹982.40</span>
            </div>
            {/* Candlestick Wave */}
            <div className="h-12 bg-white/5 rounded p-1 flex items-end gap-1 my-1">
              {[25, 40, 35, 55, 50, 70, 65, 85, 80, 95].map((h, i) => (
                <div key={i} className="flex-1 bg-emerald-400 rounded-xs" style={{ height: `${h * 0.45}px` }} />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between text-[7px] text-slate-400 pt-1 border-t border-white/10">
            <span>Sub-second Feed</span>
            <span className="text-cyan-400 font-bold">TanStack + WebSocket</span>
          </div>
        </div>
      </div>
    );
  }

  if (pid === 'buyzaar') {
    return (
      <div className="mini-browser hidden sm:block shrink-0" aria-hidden="true">
        <div className="bg-slate-200 dark:bg-slate-800 px-2.5 py-1.5 flex items-center gap-1.5 border-b border-slate-300 dark:border-white/10">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <div className="ml-2 flex-1 px-1.5 py-0.5 rounded bg-white dark:bg-black/40 text-[7px] font-mono text-slate-700 dark:text-slate-300 truncate">
            buyzaar-26379.web.app
          </div>
        </div>
        <div className="p-2.5 bg-[#fdfcf9] dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-[9px] h-[175px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-200 dark:border-white/10 text-[8px]">
              <span className="font-bold text-blue-600 dark:text-cyan-400 flex items-center gap-1">
                <ShoppingBag className="w-2.5 h-2.5" /> Buyzaar Web
              </span>
              <span className="bg-blue-100 dark:bg-cyan-950 text-blue-700 dark:text-cyan-300 px-1 rounded">Cart (3)</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 my-1">
              <div className="p-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 text-center">
                <div className="text-xs">🍎 Fresh Produce</div>
                <div className="text-blue-600 dark:text-cyan-400 text-[8px] font-bold mt-0.5">₹140.00</div>
              </div>
              <div className="p-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 text-center">
                <div className="text-xs">🥛 Dairy Farm</div>
                <div className="text-blue-600 dark:text-cyan-400 text-[8px] font-bold mt-0.5">₹65.00</div>
              </div>
            </div>
          </div>
          <div className="p-1 rounded bg-emerald-600 text-white text-[8px] text-center font-bold">
            WhatsApp Order Dispatch →
          </div>
        </div>
      </div>
    );
  }

  // 2. SYSTEMS & HARDWARE / DAEMON / SDK PROJECTS -> Mini SDK Terminal Mockup
  if (pid.includes('trading-bot') || pid.includes('swing')) {
    return (
      <div className="mini-sdk hidden sm:block shrink-0" aria-hidden="true">
        <div className="bg-slate-950 px-2.5 py-1.5 flex items-center justify-between border-b border-white/10 text-[8px] text-cyan-400 font-mono">
          <span>systemd://nse-bot</span>
          <span className="text-emerald-400">ACTIVE</span>
        </div>
        <div className="p-2.5 bg-slate-950 text-emerald-400 font-mono text-[8px] h-[175px] flex flex-col justify-between">
          <div className="space-y-1">
            <div className="text-slate-400">[09:15:00] Angel One SmartAPI Feed Verified</div>
            <div className="text-cyan-400">[09:20:05] FastAPI Daemon: 50 Symbols Active</div>
            <div className="text-white bg-emerald-950/60 p-1 rounded border border-emerald-500/30">
              [09:35:12] SIGNAL: TATAMOTORS EMA 9/21 Bullish Cross
            </div>
            <div className="text-amber-400">[09:35:13] Risk Circuit: Drawdown 0.00% OK</div>
          </div>
          <div className="text-[7px] text-slate-400 pt-1 border-t border-white/10 flex justify-between">
            <span>FastAPI &amp; SQLite</span>
            <span>Sub-second Exec</span>
          </div>
        </div>
      </div>
    );
  }

  if (pid.includes('camera') || pid.includes('roadzen')) {
    return (
      <div className="mini-sdk hidden sm:block shrink-0" aria-hidden="true">
        <div className="bg-black px-2.5 py-1.5 flex items-center justify-between border-b border-white/10 text-[8px] text-cyan-400 font-mono">
          <span className="flex items-center gap-1"><Camera className="w-2.5 h-2.5" /> rz_camera</span>
          <span className="text-amber-400">pub.dev</span>
        </div>
        <div className="p-2.5 bg-black text-white font-mono text-[8px] h-[175px] flex flex-col justify-between relative">
          <div className="absolute inset-2 border border-dashed border-cyan-400/40 rounded pointer-events-none" />
          <div className="text-center my-auto relative z-10">
            <div className="text-cyan-400 font-bold text-[10px]">[ VEHICLE DETECTED ]</div>
            <div className="text-[7px] text-slate-300 mt-1">Bounding Box: 98.4% Confidence</div>
            <div className="text-emerald-400 text-[7px] mt-0.5">60 FPS Isolated Stream</div>
          </div>
          <div className="p-1 rounded bg-cyan-400 text-black text-[7px] text-center font-bold z-10">
            High-Res Insurance Capture
          </div>
        </div>
      </div>
    );
  }

  if (pid.includes('smart-gate')) {
    return (
      <div className="mini-sdk hidden sm:block shrink-0" aria-hidden="true">
        <div className="bg-slate-900 px-2.5 py-1.5 flex items-center justify-between border-b border-white/10 text-[8px] text-amber-400 font-mono">
          <span>Android POS / VMS</span>
          <span className="text-emerald-400">READY</span>
        </div>
        <div className="p-2.5 bg-slate-950 text-white font-mono text-[8px] h-[175px] flex flex-col justify-between">
          <div className="p-1.5 rounded bg-white/5 border border-white/10 text-center">
            <div className="text-xs">💳</div>
            <div className="text-[8px] text-cyan-300 font-bold mt-0.5">MiFare RFID Tap</div>
            <div className="text-[7px] text-slate-400">Scan Card / QR Code</div>
          </div>
          <div className="p-1 rounded bg-white/10 border border-white/10 text-[7px]">
            <div className="text-emerald-400 font-bold">PASS: #GATE-04</div>
            <div className="text-slate-300">Thermal Print: Authorized</div>
          </div>
        </div>
      </div>
    );
  }

  // 3. MOBILE PROJECTS -> Mini Phone Mockup with Distinct Individual Screens
  let screenContent: React.ReactNode = null;

  if (pid.includes('degreed')) {
    screenContent = (
      <div className="p-2.5 flex flex-col justify-between h-[185px] bg-slate-900 text-white font-mono text-[9px]">
        <div>
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
            <span className="text-cyan-400 font-bold flex items-center gap-1">
              <BookOpen className="w-2.5 h-2.5" /> Degreed
            </span>
            <span className="text-slate-400">Global EdTech</span>
          </div>
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 mt-1">
            <div className="text-[7px] text-cyan-400 font-bold uppercase">ENTERPRISE SKILL</div>
            <div className="font-bold text-[9px] text-white mt-0.5">Clean Architecture in Dart</div>
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
  } else if (pid.includes('practo')) {
    screenContent = (
      <div className="p-2.5 flex flex-col justify-between h-[185px] bg-slate-950 text-white font-mono text-[9px]">
        <div>
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Video className="w-2.5 h-2.5" /> Practo WebRTC
            </span>
            <span className="text-emerald-400 animate-pulse">● LIVE</span>
          </div>
          <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-center my-1.5">
            <div className="w-7 h-7 rounded-full bg-emerald-600/30 border border-emerald-400 mx-auto mb-1 flex items-center justify-center text-xs">🩺</div>
            <div className="font-bold text-[9px] text-white">Dr. Mehta, MD</div>
            <div className="text-[7px] text-slate-400">Audio/Video Teleconsult</div>
          </div>
        </div>
        <div className="p-1 rounded bg-rose-600 text-white text-[8px] text-center font-bold">
          End Consult (12:45)
        </div>
      </div>
    );
  } else if (pid.includes('diversified')) {
    screenContent = (
      <div className="p-2.5 flex flex-col justify-between h-[185px] bg-slate-950 text-white font-mono text-[9px]">
        <div>
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
            <span className="text-blue-400 font-bold flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5" /> Geofence
            </span>
            <span className="text-emerald-400">GPS LOCKED</span>
          </div>
          <div className="p-2 rounded bg-blue-950/40 border border-blue-500/30 text-center my-2">
            <div className="text-xs">📍</div>
            <div className="font-bold text-[9px] text-white">Facility #104 Verified</div>
            <div className="text-[7px] text-slate-400">Background GPS Sync: Active</div>
          </div>
        </div>
        <div className="p-1 rounded bg-emerald-600 text-white text-[8px] text-center font-bold">
          Shift Clocked In (08:00)
        </div>
      </div>
    );
  } else if (pid.includes('kaizen')) {
    screenContent = (
      <div className="p-2.5 flex flex-col justify-between h-[185px] bg-slate-900 text-white font-mono text-[9px]">
        <div>
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
            <span className="text-teal-400 font-bold flex items-center gap-1">
              <Calendar className="w-2.5 h-2.5" /> Kaizen Dental
            </span>
            <span className="text-slate-400">Ohio, USA</span>
          </div>
          <div className="p-1.5 rounded bg-white/5 border border-white/10 mt-1">
            <div className="text-[7px] text-teal-400 font-bold">NEXT VISIT</div>
            <div className="font-bold text-[9px] text-white mt-0.5">Oral Care &amp; Cleaning</div>
            <div className="text-[7px] text-emerald-400 mt-1">✓ Approved: Mon, 10:30 AM</div>
          </div>
        </div>
        <div className="p-1 rounded bg-teal-600 text-white text-[8px] text-center font-bold">
          Confirm Appointment
        </div>
      </div>
    );
  } else if (pid.includes('newspod')) {
    screenContent = (
      <div className="p-2.5 flex flex-col justify-between h-[185px] bg-slate-900 text-white font-mono text-[9px]">
        <div>
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
            <span className="text-amber-400 font-bold flex items-center gap-1">
              <FileText className="w-2.5 h-2.5" /> NewsPod
            </span>
            <span className="text-cyan-400">OFFLINE SYNC</span>
          </div>
          <div className="p-1.5 rounded bg-white/5 border border-white/10 mt-1">
            <div className="text-[7px] text-amber-400 font-bold">TECH ARCHITECTURE</div>
            <div className="font-bold text-[9px] text-white mt-0.5 line-clamp-2">Compiled 120Hz Mobile Frameworks</div>
            <div className="text-[7px] text-slate-400 mt-1">SQLite Cache: 42 Stories Saved</div>
          </div>
        </div>
        <div className="p-1 rounded bg-amber-600 text-white text-[8px] text-center font-bold flex items-center justify-center gap-1">
          <Volume2 className="w-2.5 h-2.5" /> Listen Audio Brief
        </div>
      </div>
    );
  } else if (pid.includes('road-roaders')) {
    screenContent = (
      <div className="p-2.5 flex flex-col justify-between h-[185px] bg-slate-950 text-white font-mono text-[9px]">
        <div>
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
            <span className="text-rose-400 font-bold flex items-center gap-1">
              <Radio className="w-2.5 h-2.5" /> Road RoDer
            </span>
            <span className="text-amber-400 animate-pulse">DISPATCHED</span>
          </div>
          <div className="p-2 rounded bg-rose-950/40 border border-rose-500/30 text-center my-2">
            <div className="text-xs">🚗 ➔ 🚚</div>
            <div className="font-bold text-[9px] text-white">Tow Truck ETA: 8 Mins</div>
            <div className="text-[7px] text-slate-400">Live GPS Coordinates Transmitted</div>
          </div>
        </div>
        <div className="p-1 rounded bg-rose-600 text-white text-[8px] text-center font-bold">
          Call Dispatcher
        </div>
      </div>
    );
  } else if (pid.includes('tajweed')) {
    screenContent = (
      <div className="p-2.5 flex flex-col justify-between h-[185px] bg-slate-900 text-white font-mono text-[9px]">
        <div>
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
            <span className="text-emerald-400 font-bold">Tajweed Lesson</span>
            <span className="text-slate-400">Lesson 04</span>
          </div>
          <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/30 text-center my-2">
            <div className="text-base text-amber-300">بِسْمِ اللَّهِ</div>
            <div className="text-[7px] text-slate-300 mt-1">Listen &amp; Record Pronunciation</div>
          </div>
        </div>
        <div className="p-1 rounded bg-emerald-600 text-white text-[8px] text-center font-bold">
          🎙 Record Audio Answer
        </div>
      </div>
    );
  } else if (pid.includes('prohoff')) {
    screenContent = (
      <div className="p-2.5 flex flex-col justify-between h-[185px] bg-slate-900 text-white font-mono text-[9px]">
        <div>
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
            <span className="text-indigo-400 font-bold flex items-center gap-1">
              <Globe className="w-2.5 h-2.5" /> ProHOff
            </span>
            <span className="text-slate-400">Multi-Currency</span>
          </div>
          <div className="p-1.5 rounded bg-white/5 border border-white/10 mt-1">
            <div className="text-[7px] text-indigo-400 font-bold">RENTAL WORKPLACE</div>
            <div className="font-bold text-[9px] text-white mt-0.5">Executive Suite Desk</div>
            <div className="text-[7px] text-emerald-400 mt-1">$25/hr · €22/hr · ₹1,800/day</div>
          </div>
        </div>
        <div className="p-1 rounded bg-indigo-600 text-white text-[8px] text-center font-bold">
          Reserve Desk Now
        </div>
      </div>
    );
  } else if (pid.includes('mamta')) {
    screenContent = (
      <div className="p-2.5 flex flex-col justify-between h-[185px] bg-slate-900 text-white font-mono text-[9px]">
        <div>
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
            <span className="text-purple-400 font-bold">Mamta Textiles</span>
            <span className="text-slate-400">B2B Wholesale</span>
          </div>
          <div className="grid grid-cols-2 gap-1 my-1">
            <div className="p-1 rounded bg-white/5 border border-white/10 text-center">
              <div className="text-xs">🧵 Cotton</div>
              <div className="text-[7px] text-slate-300">₹85/meter</div>
            </div>
            <div className="p-1 rounded bg-white/5 border border-white/10 text-center">
              <div className="text-xs">🧶 Hosiery</div>
              <div className="text-[7px] text-slate-300">₹110/meter</div>
            </div>
          </div>
        </div>
        <div className="p-1 rounded bg-purple-600 text-white text-[8px] text-center font-bold">
          1-Tap Social Share →
        </div>
      </div>
    );
  } else {
    // bbc-connect or other default
    screenContent = (
      <div className="p-2.5 flex flex-col justify-between h-[185px] bg-slate-900 text-white font-mono text-[9px]">
        <div>
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10 text-[8px]">
            <span className="text-cyan-400 font-bold truncate">{project.title.slice(0, 12)}</span>
            <span className="text-emerald-400">60 FPS</span>
          </div>
          <div className="p-1.5 rounded bg-white/5 border border-white/10 mt-1">
            <div className="text-[7px] text-cyan-400 font-bold uppercase">PROD ENGINE</div>
            <div className="font-bold text-[9px] text-white mt-0.5 truncate">{project.tagline.slice(0, 24)}...</div>
            <div className="text-[7px] text-slate-400 mt-1">Clean Arch BLoC Stream</div>
          </div>
        </div>
        <div className="p-1 rounded bg-blue-600 text-white text-[8px] text-center font-bold">
          View Pipeline
        </div>
      </div>
    );
  }

  return (
    <div className="mini-phone hidden sm:block shrink-0" aria-hidden="true">
      <span className="phone-speaker" />
      {screenContent}
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [showArchDetails, setShowArchDetails] = useState(false);
  const isFlagshipArch = ARCH_DEEP_DIVE_IDS.includes(project.id) || project.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl glass-panel border border-slate-300 dark:border-white/10 overflow-hidden transition-all duration-300 hover:border-slate-500 dark:hover:border-cyan-500/40 hover:shadow-xl flex flex-col justify-between bg-white/95 dark:bg-slate-900/60 shadow-xs ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="p-6 md:p-8">
        {/* Top Header & Tilted Device Layout */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-5">
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
            <p className="text-sm font-semibold text-blue-700 dark:text-cyan-300/90 mb-3">
              {project.tagline}
            </p>

            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
              Role: <span className="text-slate-800 dark:text-slate-200 font-semibold">{project.role}</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {project.problem}
            </p>
          </div>

          {/* Individual Device Mockup (Browser for Web, Phone for Mobile, Terminal for SDK) */}
          {renderDeviceMockup(project)}
        </div>

        {/* Architecture Note: ONLY ON FLAGSHIP / DEEP-DIVE PROJECTS (Addresses User Point 11) */}
        {isFlagshipArch && project.architecture && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 mb-5 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-mono font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Architecture &amp; System Design:</span>
            </div>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">{project.architecture}</p>
          </div>
        )}

        {/* Verified Contributions */}
        <div className="space-y-2 mb-5">
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
          <div className="mb-5">
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
              className="flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 shadow-2xs"
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
              className="flex items-center gap-1.5 text-xs font-mono text-blue-700 dark:text-cyan-300 hover:text-blue-900 dark:hover:text-white transition-colors bg-blue-50 dark:bg-cyan-500/10 hover:bg-blue-100 dark:hover:bg-cyan-500/20 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-cyan-500/30 shadow-2xs"
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
              className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-white transition-colors bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-500/30 shadow-2xs"
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
              className="flex items-center gap-1.5 text-xs font-mono text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 shadow-2xs"
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
              className="flex items-center gap-1.5 text-xs font-mono text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-white transition-colors bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 px-3 py-1.5 rounded-lg border border-indigo-200 dark:border-indigo-500/30 shadow-2xs"
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
