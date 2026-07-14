import { createFileRoute } from "@tanstack/react-router";
import { Layers, Play } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/bulk-trader")({
  head: () => ({ meta: [{ title: "Bulk Trader — Digittool" }] }),
  component: BulkTrader,
});

function BulkTrader() {
  const [rows, setRows] = useState([
    { market: "Volatility 10", type: "Rise", stake: 1, duration: 5, take: 10, stop: 5 },
    { market: "Volatility 25", type: "Fall", stake: 2, duration: 5, take: 12, stop: 5 },
    { market: "Volatility 75", type: "Rise", stake: 1, duration: 3, take: 8, stop: 4 },
    { market: "Boom 500", type: "Rise", stake: 5, duration: 10, take: 20, stop: 10 },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2"><Layers className="w-6 h-6 text-cyan-400" /> Bulk Trader</h1>
          <p className="text-white/60 text-sm">Fire multiple trades simultaneously across markets.</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold text-sm inline-flex items-center gap-2">
          <Play className="w-4 h-4" /> Execute All
        </button>
      </div>

      <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-white/60 text-xs uppercase">
            <tr>
              <th className="text-left p-3">Market</th>
              <th className="text-left p-3">Type</th>
              <th className="text-left p-3">Stake</th>
              <th className="text-left p-3">Duration (t)</th>
              <th className="text-left p-3">Take Profit</th>
              <th className="text-left p-3">Stop Loss</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="p-3">{r.market}</td>
                <td className="p-3">
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${r.type === "Rise" ? "bg-emerald-500/20 text-emerald-300" : "bg-red-500/20 text-red-300"}`}>{r.type}</span>
                </td>
                <td className="p-3">${r.stake}</td>
                <td className="p-3">{r.duration}</td>
                <td className="p-3 text-emerald-400">${r.take}</td>
                <td className="p-3 text-red-400">${r.stop}</td>
                <td className="p-3 text-right">
                  <button onClick={() => setRows(rows.filter((_, x) => x !== i))} className="text-xs text-red-400 hover:underline">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-3 border-t border-white/10">
          <button onClick={() => setRows([...rows, { market: "Volatility 50", type: "Rise", stake: 1, duration: 5, take: 10, stop: 5 }])} className="text-sm text-cyan-400 hover:underline">
            + Add trade row
          </button>
        </div>
      </div>
    </div>
  );
}
