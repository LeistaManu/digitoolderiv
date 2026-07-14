import { createFileRoute } from "@tanstack/react-router";
import { Activity } from "lucide-react";

export const Route = createFileRoute("/app/analysis-tool")({
  head: () => ({ meta: [{ title: "Analysis Tool — Digittool" }] }),
  component: AnalysisTool,
});

function AnalysisTool() {
  const digits = Array.from({ length: 10 }, (_, i) => ({
    d: i,
    pct: 5 + Math.random() * 15,
  }));
  const max = Math.max(...digits.map((d) => d.pct));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2"><Activity className="w-6 h-6 text-cyan-400" /> Analysis Tool</h1>
        <p className="text-white/60 text-sm">Real-time digit distribution, patterns, and probability signals.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="text-xs text-white/50">Symbol</div>
          <div className="text-lg font-bold">Volatility 100 (1s)</div>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="text-xs text-white/50">Last 1000 ticks</div>
          <div className="text-lg font-bold">Analyzed</div>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="text-xs text-white/50">Signal</div>
          <div className="text-lg font-bold text-emerald-400">Buy Over 4</div>
        </div>
      </div>

      <div className="p-5 rounded-xl bg-white/5 border border-white/10">
        <h2 className="font-semibold mb-4">Digit Distribution</h2>
        <div className="flex items-end gap-3 h-56">
          {digits.map((d) => (
            <div key={d.d} className="flex-1 flex flex-col items-center gap-2">
              <div className="text-xs text-white/60">{d.pct.toFixed(1)}%</div>
              <div className="w-full rounded-t bg-gradient-to-t from-cyan-500 to-blue-500" style={{ height: `${(d.pct / max) * 100}%` }} />
              <div className={`w-full text-center py-1 rounded text-xs font-bold ${d.d % 2 === 0 ? "bg-blue-500/20" : "bg-purple-500/20"}`}>{d.d}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-semibold mb-3">Even / Odd</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded bg-emerald-500/10 text-center"><div className="text-2xl font-bold text-emerald-400">52.4%</div><div className="text-xs">Even</div></div>
            <div className="p-4 rounded bg-red-500/10 text-center"><div className="text-2xl font-bold text-red-400">47.6%</div><div className="text-xs">Odd</div></div>
          </div>
        </div>
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-semibold mb-3">Rise / Fall</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded bg-emerald-500/10 text-center"><div className="text-2xl font-bold text-emerald-400">54.1%</div><div className="text-xs">Rise</div></div>
            <div className="p-4 rounded bg-red-500/10 text-center"><div className="text-2xl font-bold text-red-400">45.9%</div><div className="text-xs">Fall</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
