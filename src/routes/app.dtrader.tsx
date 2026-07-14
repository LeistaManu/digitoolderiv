import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/dtrader")({
  head: () => ({ meta: [{ title: "DTrader — Digittool" }] }),
  component: DTrader,
});

function DTrader() {
  const [stake, setStake] = useState(10);
  const [duration, setDuration] = useState(5);
  const [tab, setTab] = useState<"Up/Down" | "Digits" | "In/Out">("Up/Down");

  const candles = Array.from({ length: 50 }, (_, i) => {
    const base = 950 + Math.sin(i / 4) * 20 + Math.random() * 8;
    const open = base;
    const close = base + (Math.random() - 0.5) * 6;
    return { open, close, high: Math.max(open, close) + Math.random() * 3, low: Math.min(open, close) - Math.random() * 3 };
  });
  const min = Math.min(...candles.map((c) => c.low));
  const max = Math.max(...candles.map((c) => c.high));
  const y = (v: number) => ((max - v) / (max - min)) * 260 + 20;

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-8">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-lg font-bold">Volatility 100 Index</div>
            <div className="text-xs text-white/60">1s • Live</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-400">973.12</div>
            <div className="text-xs text-emerald-400">+0.24%</div>
          </div>
        </div>
        <div className="rounded-xl bg-[#0d1220] border border-white/10 p-4">
          <svg viewBox="0 0 700 320" className="w-full">
            {candles.map((c, i) => {
              const x = i * 13 + 20;
              const up = c.close >= c.open;
              const color = up ? "#22c55e" : "#ef4444";
              return (
                <g key={i}>
                  <line x1={x} x2={x} y1={y(c.high)} y2={y(c.low)} stroke={color} />
                  <rect x={x - 4} y={Math.min(y(c.open), y(c.close))} width="8" height={Math.max(2, Math.abs(y(c.open) - y(c.close)))} fill={color} />
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4">
        <div className="rounded-xl bg-white/5 border border-white/10 p-5 space-y-4">
          <div className="flex gap-1 text-xs">
            {(["Up/Down", "Digits", "In/Out"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`flex-1 py-2 rounded ${tab === t ? "bg-cyan-500 text-slate-900 font-semibold" : "bg-white/5"}`}>{t}</button>
            ))}
          </div>

          <label className="block">
            <span className="text-xs text-white/70">Duration (ticks)</span>
            <input type="number" value={duration} onChange={(e) => setDuration(+e.target.value)} className="mt-1 w-full px-3 py-2 rounded bg-white/5 border border-white/10" />
          </label>

          <label className="block">
            <span className="text-xs text-white/70">Stake ($)</span>
            <input type="number" value={stake} onChange={(e) => setStake(+e.target.value)} className="mt-1 w-full px-3 py-2 rounded bg-white/5 border border-white/10" />
          </label>

          <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div className="p-2 rounded bg-white/5">
              <div className="text-white/50">Payout</div>
              <div className="font-bold">${(stake * 1.85).toFixed(2)}</div>
            </div>
            <div className="p-2 rounded bg-white/5">
              <div className="text-white/50">Profit</div>
              <div className="font-bold text-emerald-400">+${(stake * 0.85).toFixed(2)}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold inline-flex items-center justify-center gap-1">
              <TrendingUp className="w-4 h-4" /> RISE
            </button>
            <button className="py-3 rounded-lg bg-red-500 hover:bg-red-400 text-white font-bold inline-flex items-center justify-center gap-1">
              <TrendingDown className="w-4 h-4" /> FALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
