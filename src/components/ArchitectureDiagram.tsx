import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ShieldCheck, Cpu, Database, ArrowDownUp, CheckCircle2, Terminal } from 'lucide-react';

interface LayerInfo {
  id: string;
  name: string;
  badge: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  lightBorderColor: string;
  lightBg: string;
  bgGradient: string;
  components: string[];
  description: string;
  principles: string[];
}

const LAYERS: LayerInfo[] = [
  {
    id: 'presentation',
    name: 'Presentation Layer',
    badge: 'Cross-Platform UI',
    icon: Layers,
    color: 'text-blue-600 dark:text-cyan-400',
    borderColor: 'border-blue-500/40 dark:border-cyan-500/40',
    lightBorderColor: 'border-blue-300',
    lightBg: 'bg-blue-50/60',
    bgGradient: 'from-blue-950/30 to-blue-950/20',
    components: [
      'Flutter (iOS, Android, Web targets)',
      'React 18 + Vite Observability SPA',
      'Material 3 Adaptive Layouts',
      'Native Android (Java/Kotlin)',
    ],
    description:
      'Pure declarative client surfaces. Zero direct database queries or raw protocol logic. All UI widgets react strictly to immutable state streams.',
    principles: [
      'Declarative widget composition',
      'Frame budget optimization (60/120 fps)',
      'Strict separation from business rules',
    ],
  },
  {
    id: 'application',
    name: 'Application & State Layer',
    badge: 'Reactive Orchestration',
    icon: Cpu,
    color: 'text-indigo-600 dark:text-indigo-400',
    borderColor: 'border-indigo-500/40 dark:border-indigo-500/40',
    lightBorderColor: 'border-indigo-300',
    lightBg: 'bg-indigo-50/60',
    bgGradient: 'from-indigo-950/30 to-violet-950/20',
    components: [
      'BLoC / Cubit State Machines',
      'TanStack Query Server State Cache',
      'Native WebSocket Lifecycle Manager',
      'Riverpod Unidirectional Providers',
    ],
    description:
      'Deterministic state orchestration. Manages event streams, transforms user intents into use-case invocations, and handles retry backoffs.',
    principles: [
      'Unidirectional event-to-state stream',
      'Event deduplication & exponential backoff',
      '100% unit-testable state transitions',
    ],
  },
  {
    id: 'domain',
    name: 'Domain Layer (Pure Core)',
    badge: 'Enterprise Business Rules',
    icon: ShieldCheck,
    color: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-emerald-500/40 dark:border-emerald-500/40',
    lightBorderColor: 'border-emerald-300',
    lightBg: 'bg-emerald-50/60',
    bgGradient: 'from-emerald-950/30 to-teal-950/20',
    components: [
      'Pure Business Entities & Value Objects',
      'Transactional Use Cases (Interactors)',
      'Risk Circuit Breakers & Kill-Switches',
      'Repository Contracts (Interfaces)',
    ],
    description:
      'The heart of the system. Has zero dependencies on Flutter, React, databases, or third-party SDKs. Survives any technology migration.',
    principles: [
      'Dependency Inversion Principle (DIP)',
      'Pure Dart / TypeScript / Python logic',
      'Independent from external UI & APIs',
    ],
  },
  {
    id: 'data',
    name: 'Data & Infrastructure Layer',
    badge: 'Cloud & Local Stores',
    icon: Database,
    color: 'text-purple-600 dark:text-purple-400',
    borderColor: 'border-purple-500/40 dark:border-purple-500/40',
    lightBorderColor: 'border-purple-300',
    lightBg: 'bg-purple-50/60',
    bgGradient: 'from-purple-950/30 to-pink-950/20',
    components: [
      'Firebase (Firestore, Storage, Cloud Functions)',
      'FastAPI Microservices & Python Daemons',
      'Angel One SmartAPI & NSE Feeds',
      'SQLite & Hive (Offline-First Storage)',
      'REST & GraphQL Client Adapters',
    ],
    description:
      'Implements domain repository interfaces. Handles serialization, network resilience, local SQLite caching, and external hardware/broker integrations.',
    principles: [
      'Offline-first optimistic updates',
      'Conflict-free schema migrations',
      'Safe broker reconciliation & hardware SDK bridges',
    ],
  },
];

export const ArchitectureDiagram: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('domain');
  const activeLayer = LAYERS.find((l) => l.id === selectedLayerId) || LAYERS[2];

  return (
    <div className="w-full glass-panel rounded-2xl p-6 lg:p-8 relative overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg bg-white/95 dark:bg-[#0c101c]/90">
      {/* Background ambient lighting */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-200 dark:border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Architecture Blueprint</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Enterprise Clean Architecture &amp; System Boundary Model
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Click on any architectural stratum to inspect its boundaries, dependency directions, and invariants.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 self-start md:self-auto">
          <ArrowDownUp className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 animate-pulse" />
          <span>Dependency Inversion: Outward → Inward</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Layer Stack Interactive Visualization */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {LAYERS.map((layer, index) => {
            const isSelected = layer.id === selectedLayerId;
            const IconComponent = layer.icon;

            return (
              <motion.div
                key={layer.id}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`cursor-pointer rounded-xl p-4 transition-all duration-300 border relative ${
                  isSelected
                    ? `${layer.lightBorderColor} dark:${layer.borderColor} ${layer.lightBg} dark:bg-gradient-to-r dark:${layer.bgGradient} shadow-md ring-1 ring-blue-500/20`
                    : 'border-slate-200 dark:border-white/5 bg-slate-50/70 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-100 dark:hover:bg-slate-900/70'
                }`}
              >
                {/* Visual Data Flow Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                        isSelected
                          ? `bg-white dark:bg-slate-950/80 ${layer.lightBorderColor} dark:${layer.borderColor} ${layer.color}`
                          : 'bg-white dark:bg-slate-800/50 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                        <h4 className={`font-semibold text-sm md:text-base ${isSelected ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-700 dark:text-slate-300'}`}>
                          {layer.name}
                        </h4>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{layer.badge}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                        isSelected
                          ? 'bg-blue-100 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 border-blue-300 dark:border-cyan-500/30 font-semibold'
                          : 'bg-white dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-white/5'
                      }`}
                    >
                      {isSelected ? 'INSPECTING' : 'VIEW'}
                    </span>
                  </div>
                </div>

                {/* Sub-component Chips */}
                <div className="mt-3 pt-3 border-t border-slate-200/60 dark:border-white/5 flex flex-wrap gap-1.5">
                  {layer.components.map((comp) => (
                    <span
                      key={comp}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-black/40 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Inspection Drawer */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`p-6 rounded-xl border ${activeLayer.lightBorderColor} dark:${activeLayer.borderColor} bg-slate-50/80 dark:bg-slate-950/70 relative shadow-sm`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${activeLayer.lightBorderColor} dark:${activeLayer.borderColor} ${activeLayer.color} bg-white dark:bg-black/40`}>
                  {activeLayer.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">LAYER CONTRACT</span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{activeLayer.name}</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                {activeLayer.description}
              </p>

              <div className="space-y-3">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Architectural Invariants &amp; Best Practices:
                </h5>
                <ul className="space-y-2">
                  {activeLayer.principles.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${activeLayer.color}`} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span>Production Evidence:</span>
                <span className="text-blue-600 dark:text-cyan-400 font-semibold">Degreed · Buyzaar · Trading Bot</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
