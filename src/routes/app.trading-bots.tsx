import { createFileRoute } from "@tanstack/react-router";
import { Play, Pause, Settings, Plus } from "lucide-react";

export const Route = createFileRoute("/app/trading-bots")({
  head: () => ({ meta: [{ title: "Trading Bots — Digittool" }] }),
  component: TradingBots,
});

const bots = [
  { name: "Rise/Fall Pro", market: "Volatility 75", status: "running", trades: 142, roi: "+24.3%", winrate: "72%" },
  { name: "Even/Odd Master", market: "Volatility 100", status: "running", trades: 89, roi: "+12.4%", winrate: "64%" },
  { name: "Matches/Differs", market: "Volatility 50", status: "paused", trades: 240, roi: "+9.7%", winrate: "58%" },
  { name: "Over/Under 5", market: "Volatility 25", status: "paused", trades: 178, roi: "-2.1%", winrate: "48%" },
  { name: "Higher/Lower", market: "Boom 500", status: "running", trades: 66, roi: "+18.9%", winrate: "69%" },
  { name: "Touch/No Touch", market: "Crash 1000", status: "stopped", trades: 12, roi: "+3.2%", winrate: "55%" },
];

const statusColor: Record<string, string> = {
  running: "bg-emerald-500/20 text-emerald-300",
  paused: "bg-yellow-500/20 text-yellow-300",
  stopped: "bg-red-500/20 text-red-300",
};

function TradingBots() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Trading Bots</h1>
          <p className="text-white/60 text-sm">Deploy, monitor and manage your automated strategies.</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-sm inline-flex items-center gap-2">
          <Plus className="w-4 h-4" /> New Bot
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bots.map((b) => (
          <div key={b.name} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="font-semibold">{b.name}</div>
                <div className="text-xs text-white/50">{b.market}</div>
              </div>
              <span className={`px-2 py-0.5 rounded text-xs font-semibold ${statusColor[b.status]}`}>{b.status}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center mb-4">
              <div><div className="text-xs text-white/50">Trades</div><div className="font-bold">{b.trades}</div></div>
              <div><div className="text-xs text-white/50">Win Rate</div><div className="font-bold">{b.winrate}</div></div>
              <div><div className="text-xs text-white/50">ROI</div><div className={`font-bold ${b.roi.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>{b.roi}</div></div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded bg-white/5 hover:bg-white/10 text-sm inline-flex items-center justify-center gap-1">
                {b.status === "running" ? <><Pause className="w-3 h-3" /> Pause</> : <><Play className="w-3 h-3" /> Start</>}
              </button>
              <button className="w-9 h-9 grid place-items-center rounded bg-white/5 hover:bg-white/10">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
