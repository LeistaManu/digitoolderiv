import { createFileRoute } from "@tanstack/react-router";
import { FileBarChart, Download } from "lucide-react";

export const Route = createFileRoute("/app/reports")({
  head: () => ({ meta: [{ title: "Reports — Digittool" }] }),
  component: Reports,
});

const rows = Array.from({ length: 12 }, (_, i) => {
  const win = Math.random() > 0.4;
  return {
    id: `TX-${100234 + i}`,
    date: `2026-07-${(14 - i).toString().padStart(2, "0")} 09:${(10 + i).toString().padStart(2, "0")}`,
    pair: ["EUR/USD", "BTC/USD", "Vol 75", "GBP/JPY", "XAU/USD"][i % 5],
    stake: (Math.random() * 200 + 20).toFixed(2),
    payout: (Math.random() * 400 + 20).toFixed(2),
    pnl: (win ? 1 : -1) * (Math.random() * 100 + 5),
    win,
  };
});

function Reports() {
  const total = rows.reduce((a, r) => a + r.pnl, 0);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2"><FileBarChart className="w-6 h-6 text-cyan-400" /> Reports</h1>
          <p className="text-white/60 text-sm">Detailed transaction history and account statements.</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-sm inline-flex items-center gap-2">
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-3">
        {[
          { l: "Total Trades", v: rows.length },
          { l: "Winners", v: rows.filter((r) => r.win).length },
          { l: "Losers", v: rows.filter((r) => !r.win).length },
          { l: "Net P&L", v: `$${total.toFixed(2)}`, color: total >= 0 ? "text-emerald-400" : "text-red-400" },
        ].map((s) => (
          <div key={s.l} className="p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="text-xs text-white/50">{s.l}</div>
            <div className={`text-xl font-bold ${s.color ?? ""}`}>{s.v}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-white/5 border border-white/10 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-white/60 text-xs uppercase">
            <tr>
              <th className="text-left p-3">Ref</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Pair</th>
              <th className="text-right p-3">Stake</th>
              <th className="text-right p-3">Payout</th>
              <th className="text-right p-3">P&L</th>
              <th className="text-center p-3">Result</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((r) => (
              <tr key={r.id}>
                <td className="p-3 font-mono text-xs">{r.id}</td>
                <td className="p-3 text-white/70">{r.date}</td>
                <td className="p-3">{r.pair}</td>
                <td className="p-3 text-right">${r.stake}</td>
                <td className="p-3 text-right">${r.payout}</td>
                <td className={`p-3 text-right font-semibold ${r.win ? "text-emerald-400" : "text-red-400"}`}>{r.win ? "+" : ""}${r.pnl.toFixed(2)}</td>
                <td className="p-3 text-center">
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${r.win ? "bg-emerald-500/20 text-emerald-300" : "bg-red-500/20 text-red-300"}`}>{r.win ? "WIN" : "LOSS"}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
