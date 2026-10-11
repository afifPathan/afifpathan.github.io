import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, Wifi, RefreshCw } from 'lucide-react';

export const TerminalPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bot' | 'telemetry' | 'circuit'>('bot');

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50/90 dark:bg-[#1e2538] shadow-lg font-mono text-xs transition-colors">
      {/* Terminal Title Bar */}
      <div className="bg-slate-100/90 dark:bg-[#283248] px-4 py-3 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-slate-600 dark:text-slate-400 text-xs hidden sm:inline font-semibold">
            systemd://nse-trading-daemon.service
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-white dark:bg-slate-700/60 p-1 rounded-lg border border-slate-200 dark:border-white/5 shadow-xs">
          <button
            onClick={() => setActiveTab('bot')}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors font-medium ${
              activeTab === 'bot'
                ? 'bg-blue-600 text-white dark:bg-cyan-500/20 dark:text-cyan-300 font-semibold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
            }`}
          >
            Live Logs
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors font-medium ${
              activeTab === 'telemetry'
                ? 'bg-blue-600 text-white dark:bg-cyan-500/20 dark:text-cyan-300 font-semibold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
            }`}
          >
            WebSocket Telemetry
          </button>
          <button
            onClick={() => setActiveTab('circuit')}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors font-medium ${
              activeTab === 'circuit'
                ? 'bg-blue-600 text-white dark:bg-cyan-500/20 dark:text-cyan-300 font-semibold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
            }`}
          >
            Risk Circuit
          </button>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="hidden md:inline">SYSTEM ONLINE</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 bg-white dark:bg-[#1e2538] text-slate-700 dark:text-slate-300 min-h-[260px] flex flex-col justify-between transition-colors">
        {activeTab === 'bot' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2 text-[11.5px] leading-relaxed"
          >
            <div className="text-slate-500">
              # Initializing Angel One SmartAPI connection &amp; SQLite local trade journal...
            </div>
            <div className="text-blue-700 dark:text-cyan-400 font-semibold">
              [09:15:00] AUTH_SUCCESS: JWT Session verified for NSE Segment. Feed active.
            </div>
            <div className="text-slate-800 dark:text-slate-300">
              [09:20:05] SCANNER: Monitoring 50 Nifty midcap symbols (5-min intervals).
            </div>
            <div className="text-indigo-700 dark:text-indigo-300 font-semibold">
              [09:35:12] SIGNAL_TRIGGER: TATAMOTORS - EMA 9/21 Bullish Crossover (EMA9: 982.4, EMA21: 978.1)
            </div>
            <div className="text-emerald-700 dark:text-emerald-400 font-semibold">
              [09:35:13] RISK_CHECK: Position sizing verified. Max daily loss within limits (Drawdown: 0.00%).
            </div>
            <div className="text-sky-700 dark:text-cyan-300 font-semibold">
              [09:35:14] EXECUTION: Order submitted via SmartAPI. OrderID: #ANGEL_89412 | Paper mode: Live-ready
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              [09:35:15] TELEGRAM: Signal dispatch transmitted to private broadcast channel.
            </div>
          </motion.div>
        )}

        {activeTab === 'telemetry' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-200 dark:border-white/5">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">WS LATENCY</div>
                <div className="text-base font-bold text-blue-700 dark:text-cyan-400">14 ms</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-200 dark:border-white/5">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">RECONNECT BACKOFF</div>
                <div className="text-base font-bold text-indigo-700 dark:text-indigo-400">Exponential (Max 8s)</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-200 dark:border-white/5">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">DEDUPLICATION</div>
                <div className="text-base font-bold text-emerald-700 dark:text-emerald-400">Active (CRC-32)</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-200 dark:border-white/5">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">CLIENT STATE</div>
                <div className="text-base font-bold text-purple-700 dark:text-purple-400">TanStack Cache</div>
              </div>
            </div>

            <div className="text-slate-600 dark:text-slate-400 text-[11px] pt-2 border-t border-slate-200 dark:border-white/5">
              <span>Payload: </span>
              <span className="text-blue-700 dark:text-cyan-300 font-semibold">
                {JSON.stringify({
                  event: 'TICK_UPDATE',
                  symbol: 'RELIANCE',
                  ltp: 2942.3,
                  vwap: 2938.8,
                  vol: 1420500,
                  verified: true,
                })}
              </span>
            </div>
          </motion.div>
        )}

        {activeTab === 'circuit' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3 text-[11.5px]"
          >
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold">
              <Shield className="w-4 h-4" />
              <span>Broker Risk Circuit Breaker: ARMED &amp; ACTIVE</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              Autonomous risk engine halts all execution if daily drawdown, duplicate order signatures, or stale broker heartbeats are detected.
            </p>
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-300 space-y-1 font-medium">
              <div>✓ Max Daily Drawdown Threshold: Enforced</div>
              <div>✓ Duplicate Order Hash Guard: Active</div>
              <div>✓ Systemd Market Hours Scheduler: Mon-Fri 09:15 - 15:30 IST</div>
              <div>✓ Instant Telegram Admin Kill-Switch: Online</div>
            </div>
          </motion.div>
        )}

        {/* Terminal Footer Bar */}
        <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-slate-700 dark:text-slate-400 font-medium">
              <Activity className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" /> Host: Ubuntu 22.04 LTS
            </span>
            <span className="flex items-center gap-1 text-slate-700 dark:text-slate-400 font-medium">
              <Wifi className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Angel One SmartAPI
            </span>
          </div>
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
            <RefreshCw className="w-3 h-3 text-blue-600 dark:text-cyan-400" /> Real-time stream verified
          </div>
        </div>
      </div>
    </div>
  );
};
