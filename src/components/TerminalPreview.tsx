import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, Wifi, RefreshCw } from 'lucide-react';

export const TerminalPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bot' | 'telemetry' | 'circuit'>('bot');

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#06080d] shadow-2xl font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="bg-[#0b0e17] px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-slate-400 text-xs hidden sm:inline">
            systemd://nse-trading-daemon.service
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-black/50 p-1 rounded-lg border border-white/5">
          <button
            onClick={() => setActiveTab('bot')}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
              activeTab === 'bot'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Live Logs
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
              activeTab === 'telemetry'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            WebSocket Telemetry
          </button>
          <button
            onClick={() => setActiveTab('circuit')}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
              activeTab === 'circuit'
                ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Risk Circuit
          </button>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="hidden md:inline">SYSTEM ONLINE</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 text-slate-300 min-h-[260px] flex flex-col justify-between">
        {activeTab === 'bot' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2 text-[11.5px] leading-relaxed"
          >
            <div className="text-slate-500">
              # Initializing Angel One SmartAPI connection & SQLite local trade journal...
            </div>
            <div className="text-cyan-400">
              [09:15:00] AUTH_SUCCESS: JWT Session verified for NSE Segment. Feed active.
            </div>
            <div className="text-slate-300">
              [09:20:05] SCANNER: Monitoring 50 Nifty midcap symbols (5-min intervals).
            </div>
            <div className="text-indigo-300">
              [09:35:12] SIGNAL_TRIGGER: TATAMOTORS - EMA 9/21 Bullish Crossover (EMA9: 982.4, EMA21: 978.1)
            </div>
            <div className="text-emerald-400">
              [09:35:13] RISK_CHECK: Position sizing verified. Max daily loss within limits (Drawdown: 0.00%).
            </div>
            <div className="text-cyan-300">
              [09:35:14] EXECUTION: Order submitted via SmartAPI. OrderID: #ANGEL_89412 | Paper mode: Live-ready
            </div>
            <div className="text-slate-400">
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
              <div className="bg-slate-900/60 p-3 rounded-lg border border-white/5">
                <div className="text-[10px] text-slate-400">WS LATENCY</div>
                <div className="text-base font-bold text-cyan-400">14 ms</div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-white/5">
                <div className="text-[10px] text-slate-400">RECONNECT BACKOFF</div>
                <div className="text-base font-bold text-indigo-400">Exponential (Max 8s)</div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-white/5">
                <div className="text-[10px] text-slate-400">DEDUPLICATION</div>
                <div className="text-base font-bold text-emerald-400">Active (CRC-32)</div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-white/5">
                <div className="text-[10px] text-slate-400">CLIENT STATE</div>
                <div className="text-base font-bold text-purple-400">TanStack Cache</div>
              </div>
            </div>

            <div className="text-slate-400 text-[11px] pt-2 border-t border-white/5">
              <span>Payload: </span>
              <span className="text-cyan-300">
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
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <Shield className="w-4 h-4" />
              <span>Broker Risk Circuit Breaker: ARMED & ACTIVE</span>
            </div>
            <p className="text-slate-400">
              Autonomous risk engine halts all execution if daily drawdown, duplicate order signatures, or stale broker heartbeats are detected.
            </p>
            <div className="p-3 rounded bg-emerald-950/20 border border-emerald-500/20 text-emerald-300 space-y-1">
              <div>✓ Max Daily Drawdown Threshold: Enforced</div>
              <div>✓ Duplicate Order Hash Guard: Active</div>
              <div>✓ Systemd Market Hours Scheduler: Mon-Fri 09:15 - 15:30 IST</div>
              <div>✓ Instant Telegram Admin Kill-Switch: Online</div>
            </div>
          </motion.div>
        )}

        {/* Terminal Footer Bar */}
        <div className="pt-4 mt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-slate-400">
              <Activity className="w-3.5 h-3.5 text-cyan-400" /> Host: Ubuntu 22.04 LTS
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Wifi className="w-3.5 h-3.5 text-emerald-400" /> Angel One SmartAPI
            </span>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <RefreshCw className="w-3 h-3 text-cyan-400" /> Real-time stream verified
          </div>
        </div>
      </div>
    </div>
  );
};
