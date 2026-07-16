import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Play, Info, Bot } from "lucide-react";

export const Route = createFileRoute("/app/analysis-tool")({
  head: () => ({ meta: [{ title: "Analysis Tool — Digittool" }] }),
  component: AnalysisTool,
});

const SUBTABS = ["Signals", "Analysis Tool", "DP Tools", "All Analysis", "Tick Analyser", "Xenon AI"];
const MARKETS = [
  "Volatility 10 (1s) Index",
  "Volatility 25 (1s) Index",
  "Volatility 50 (1s) Index",
  "Volatility 75 (1s) Index",
  "Volatility 100 (1s) Index",
  "Boom 500 Index",
  "Crash 500 Index",
];

const DIGIT_COLORS = [
  "bg-slate-200 text-slate-800",
  "bg-emerald-500 text-white",
  "bg-slate-200 text-slate-800",
  "bg-emerald-500 text-white",
  "bg-blue-500 text-white",
  "bg-slate-200 text-slate-800",
  "bg-blue-500 text-white",
  "bg-orange-500 text-white",
  "bg-red-500 text-white",
  "bg-purple-500 text-white",
];

function AnalysisTool() {
  const [sub, setSub] = useState("Analysis Tool");
  const [market, setMarket] = useState(MARKETS[0]);
  const [ticks, setTicks] = useState(1000);
  const [price, setPrice] = useState(9422.46);
  const [current, setCurrent] = useState(6);
  const [dist, setDist] = useState<number[]>(
    [9.8, 11.0, 9.0, 11.0, 10.8, 10.5, 9.9, 8.8, 8.7, 10.5]
  );

  useEffect(() => {
    const id = setInterval(() => {
      setPrice((p) => +(p + (Math.random() - 0.5) * 2).toFixed(2));
      setCurrent(Math.floor(Math.random() * 10));
      setDist((d) => d.map((v) => Math.max(6, Math.min(14, v + (Math.random() - 0.5) * 0.4))));
    }, 1200);
    return () => clearInterval(id);
  }, []);

  const maxIdx = dist.indexOf(Math.max(...dist));
  const minIdx = dist.indexOf(Math.min(...dist));

  return (
    <div className="space-y-6">
      {/* Sub-tabs */}
      <div className="flex flex-wrap gap-2">
        {SUBTABS.map((t) => (
          <button
            key={t}
            onClick={() => setSub(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
              sub === t
                ? "bg-white text-slate-900 border-white"
                : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Action row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold text-sm shadow-lg">
            Wide Eye
          </button>
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm shadow-lg">
            Launch AI
          </button>
          <button className="w-8 h-8 grid place-items-center rounded-full bg-white/10 text-white/70">
            <Info className="w-4 h-4" />
          </button>
        </div>
        <button className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-sm inline-flex items-center gap-2 shadow-lg">
          <Play className="w-4 h-4" /> Run
          <span className="ml-3 text-xs text-slate-900/70 font-medium">Bot is not running</span>
        </button>
      </div>

      {/* Market selector */}
      <div className="space-y-2">
        <div className="text-xs uppercase tracking-wider text-white/50">Select Market:</div>
        <select
          value={market}
          onChange={(e) => setMarket(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-400"
        >
          {MARKETS.map((m) => (
            <option key={m} value={m} className="bg-slate-900">
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* Live price */}
      <div className="rounded-xl bg-white/95 text-slate-900 p-6 flex items-center justify-between">
        <div className="text-4xl font-black tabular-nums">{price.toFixed(2)}</div>
        <div className={`text-5xl font-black tabular-nums ${current % 2 === 0 ? "text-blue-600" : "text-red-500"}`}>
          {current}
        </div>
      </div>

      {/* Ticks window */}
      <div className="grid md:grid-cols-3 gap-4 items-center">
        <div className="text-sm text-white/70">Ticks window:</div>
        <input
          type="number"
          min={50}
          max={5000}
          value={ticks}
          onChange={(e) => setTicks(Number(e.target.value))}
          className="bg-white text-slate-900 text-center font-semibold rounded-lg px-4 py-2 border border-white/10"
        />
        <div className="text-sm text-white/50 text-center md:text-right">(50–5000)</div>
      </div>

      {/* Distribution */}
      <div className="rounded-xl bg-white/5 border border-white/10 p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">Last {ticks} ticks digit distribution</h2>
          <div className="text-xs text-white/60">{ticks}/{ticks}</div>
        </div>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
          {dist.map((pct, d) => {
            const isCurrent = d === current;
            const isMax = d === maxIdx;
            const isMin = d === minIdx;
            return (
              <div key={d} className="flex flex-col items-center gap-2">
                {isCurrent && (
                  <div className="text-cyan-400 text-xs">▼</div>
                )}
                <div
                  className={`relative w-16 h-16 rounded-full grid place-items-center font-black text-xl transition-transform ${DIGIT_COLORS[d]} ${
                    isCurrent ? "ring-4 ring-cyan-400 scale-110" : ""
                  }`}
                >
                  {d}
                </div>
                <div className="text-xs text-white/70">{pct.toFixed(1)}%</div>
                {isMax && <div className="text-[10px] text-emerald-400">most</div>}
                {isMin && <div className="text-[10px] text-red-400">least</div>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Gemini + AI floaters */}
      <button className="fixed bottom-24 right-6 z-40 group">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 grid place-items-center shadow-2xl animate-float">
          <Bot className="w-7 h-7 text-white" />
        </div>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full" />
        <div className="absolute right-0 -top-6 text-[10px] font-bold text-white/80">AI</div>
      </button>

      <button className="px-4 py-2 rounded-lg bg-yellow-400 text-slate-900 font-bold text-xs">
        Risk Disclaimer
      </button>
    </div>
  );
}