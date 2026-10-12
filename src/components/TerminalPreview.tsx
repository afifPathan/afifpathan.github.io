import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, Wifi } from 'lucide-react';

export const TerminalPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bot' | 'telemetry' | 'circuit'>('bot');

  return (
    <div className="terminal-surface w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0F111E] shadow-glass font-mono text-xs transition-colors">
      {/* Terminal Title Bar: Window dots, Service name, and fully visible DEMO badge */}
      <div className="bg-[#171A2C] px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-white/10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-1 sm:ml-2 text-white/60 text-[11px] sm:text-xs truncate max-w-[140px] sm:max-w-none font-semibold">
            systemd://nse-trading-daemon.service
          </span>
        </div>

        {/* Status Badge: Fully visible DEMO label */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-bold shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>DEMO</span>
        </div>
      </div>

      {/* Dedicated Horizontally Scrollable Tabs Row (Zero Titlebar Overlap, Hidden Scrollbar) */}
      <div
        role="tablist"
        aria-label="Terminal Logs and Telemetry Channels"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-black/40 border-b border-white/5 overflow-x-auto no-scrollbar"
      >
        <button
          role="tab"
          aria-selected={activeTab === 'bot'}
          onClick={() => setActiveTab('bot')}
          className={`px-3 py-1 rounded-lg text-[11px] transition-colors font-medium whitespace-nowrap cursor-pointer ${
            activeTab === 'bot'
              ? 'bg-primary text-slate-950 font-bold shadow-glow-primary'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          Live Logs
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'telemetry'}
          onClick={() => setActiveTab('telemetry')}
          className={`px-3 py-1 rounded-lg text-[11px] transition-colors font-medium whitespace-nowrap cursor-pointer ${
            activeTab === 'telemetry'
              ? 'bg-primary text-slate-950 font-bold shadow-glow-primary'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          WebSocket Telemetry
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'circuit'}
          onClick={() => setActiveTab('circuit')}
          className={`px-3 py-1 rounded-lg text-[11px] transition-colors font-medium whitespace-nowrap cursor-pointer ${
            activeTab === 'circuit'
              ? 'bg-primary text-slate-950 font-bold shadow-glow-primary'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          Risk Circuit
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 bg-[#0F111E] text-white/80 min-h-[250px] flex flex-col justify-between transition-colors">
        {activeTab === 'bot' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2 text-[11.5px] leading-relaxed"
          >
            <div className="text-slate-400">
              # Initializing Angel One SmartAPI connection &amp; SQLite local trade journal...
            </div>
            <div className="text-accent-cyan font-semibold">
              [09:15:00] AUTH_SUCCESS: JWT Session active for NSE Segment. Feed ready.
            </div>
            <div className="text-white/90">
              [09:20:05] SCANNER: Monitoring 50 Nifty midcap symbols (5-min intervals).
            </div>
            <div className="text-indigo-300 font-semibold">
              [09:35:12] SIGNAL_TRIGGER: TATAMOTORS - EMA 9/21 Bullish Crossover (EMA9: 982.4, EMA21: 978.1)
            </div>
            <div className="text-emerald-400 font-semibold">
              [09:35:13] RISK_CHECK: Position sizing checked. Max daily loss within limits (Drawdown: 0.00%).
            </div>
            <div className="text-primary font-semibold">
              [09:35:14] EXECUTION: Order submitted via SmartAPI. OrderID: #SAMPLE_ORDER_892 | Paper simulation
            </div>
            <div className="text-slate-300">
              [09:35:15] ALERT: Notification sent to private channel.
            </div>
          </motion.div>
        )}

        {activeTab === 'telemetry' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center">
              <div className="bg-black/30 p-2.5 sm:p-3 rounded-xl border border-white/5">
                <div className="text-[10px] text-slate-300 font-semibold">WS LATENCY</div>
                <div className="text-base font-bold text-accent-cyan">14 ms</div>
              </div>
              <div className="bg-black/30 p-2.5 sm:p-3 rounded-xl border border-white/5">
                <div className="text-[10px] text-slate-300 font-semibold">RECONNECT BACKOFF</div>
                <div className="text-base font-bold text-indigo-300">Exponential (Max 8s)</div>
              </div>
              <div className="bg-black/30 p-2.5 sm:p-3 rounded-xl border border-white/5">
                <div className="text-[10px] text-slate-300 font-semibold">DEDUPLICATION</div>
                <div className="text-base font-bold text-emerald-400">Active (CRC-32)</div>
              </div>
              <div className="bg-black/30 p-2.5 sm:p-3 rounded-xl border border-white/5">
                <div className="text-[10px] text-slate-300 font-semibold">CLIENT STATE</div>
                <div className="text-base font-bold text-primary">TanStack Cache</div>
              </div>
            </div>

            <div className="text-slate-300 text-[11px] pt-2 border-t border-white/5">
              <span>Payload Sample: </span>
              <span className="text-accent-cyan font-semibold">
                {JSON.stringify({
                  event: 'TICK_UPDATE',
                  symbol: 'RELIANCE',
                  ltp: 2942.3,
                  vwap: 2938.8,
                  vol: 1420500,
                  simulated: true,
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
              <span>Broker Risk Circuit Breaker: ARMED &amp; ACTIVE</span>
            </div>
            <p className="text-white/60">
              Autonomous risk engine halts all execution if daily drawdown, duplicate order signatures, or stale broker heartbeats are detected.
            </p>
            <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-300 space-y-1 font-medium">
              <div>✓ Max Daily Drawdown Threshold: Enforced</div>
              <div>✓ Duplicate Order Hash Guard: Active</div>
              <div>✓ Systemd Market Hours Scheduler: Mon-Fri 09:15 - 15:30 IST</div>
              <div>✓ Instant Telegram Admin Kill-Switch: Online</div>
            </div>
          </motion.div>
        )}

        {/* Terminal Footer Bar */}
        <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] text-white/50 gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-white/70 font-medium">
              <Activity className="w-3.5 h-3.5 text-accent-cyan" /> Host: Ubuntu 22.04 LTS
            </span>
            <span className="flex items-center gap-1 text-white/70 font-medium">
              <Wifi className="w-3.5 h-3.5 text-emerald-400" /> Angel One SmartAPI
            </span>
          </div>
          <div className="flex items-center gap-1 text-white/50 text-[10px] font-mono">
            <span>Simulated Telemetry Stream</span>
          </div>
        </div>
      </div>
    </div>
  );
};
