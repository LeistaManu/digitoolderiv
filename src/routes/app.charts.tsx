import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/app/charts")({
  head: () => ({ meta: [{ title: "Charts — Digittool" }] }),
  component: Charts,
});

const symbols = ["Volatility 10 Index", "Volatility 25 Index", "Volatility 50 Index", "Volatility 75 Index", "Volatility 100 Index", "Boom 500", "Crash 500", "EUR/USD", "GBP/USD", "BTC/USD", "ETH/USD", "XAU/USD"];
const intervals = ["1t", "1m", "5m", "15m", "1h", "4h", "1D"];

function Charts() {
  const [sym, setSym] = useState(symbols[3]);
  const [tf, setTf] = useState("5m");

  // generate mock candles
  const candles = Array.from({ length: 60 }, (_, i) => {
    const base = 100 + Math.sin(i / 3) * 8 + Math.random() * 4;
    const open = base;
    const close = base + (Math.random() - 0.5) * 4;
    const high = Math.max(open, close) + Math.random() * 2;
    const low = Math.min(open, close) - Math.random() * 2;
    return { open, close, high, low };
  });
  const min = Math.min(...candles.map((c) => c.low));
  const max = Math.max(...candles.map((c) => c.high));
  const range = max - min;
  const y = (v: number) => ((max - v) / range) * 260 + 20;

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-2 space-y-3">
        <div className="rounded-lg bg-white/5 border border-white/10 p-3">
          <div className="text-xs font-semibold mb-2 text-white/70">SYMBOLS</div>
          <ul className="space-y-1 text-sm max-h-[520px] overflow-y-auto">
            {symbols.map((s) => (
              <li key={s}>
                <button onClick={() => setSym(s)} className={`w-full text-left px-2 py-1.5 rounded ${sym === s ? "bg-cyan-500/20 text-cyan-300" : "hover:bg-white/5"}`}>{s}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-10">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <div>
            <div className="text-lg font-bold">{sym}</div>
            <div className="text-xs text-white/60">Live · Deriv Feed</div>
          </div>
          <div className="flex gap-1">
            {intervals.map((i) => (
              <button key={i} onClick={() => setTf(i)} className={`px-3 py-1.5 rounded text-xs font-semibold ${tf === i ? "bg-cyan-500 text-slate-900" : "bg-white/5 hover:bg-white/10"}`}>{i}</button>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-[#0d1220] border border-white/10 p-4">
          <svg viewBox="0 0 700 320" className="w-full">
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1="0" x2="700" y1={20 + i * 65} y2={20 + i * 65} stroke="rgba(255,255,255,0.05)" />
            ))}
            {candles.map((c, i) => {
              const x = i * 11 + 20;
              const up = c.close >= c.open;
              const color = up ? "#22c55e" : "#ef4444";
              return (
                <g key={i}>
                  <line x1={x} x2={x} y1={y(c.high)} y2={y(c.low)} stroke={color} />
                  <rect x={x - 3} y={Math.min(y(c.open), y(c.close))} width="6" height={Math.max(2, Math.abs(y(c.open) - y(c.close)))} fill={color} />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {[
            { l: "Bid", v: (100 + Math.random() * 10).toFixed(3) },
            { l: "Ask", v: (100 + Math.random() * 10).toFixed(3) },
            { l: "Spread", v: "0.6" },
            { l: "24h Change", v: "+1.24%" },
          ].map((s) => (
            <div key={s.l} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-xs text-white/50">{s.l}</div>
              <div className="text-xl font-bold">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
