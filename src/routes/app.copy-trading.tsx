import { createFileRoute } from "@tanstack/react-router";
import { Copy, TrendingUp, Users } from "lucide-react";

export const Route = createFileRoute("/app/copy-trading")({
  head: () => ({ meta: [{ title: "Copy Trading — Digittool" }] }),
  component: CopyTrading,
});

const traders = [
  { name: "AlphaWolf", country: "🇺🇸", followers: 3421, roi: "+184%", risk: "Medium", winrate: "72%" },
  { name: "PipHunter", country: "🇬🇧", followers: 2890, roi: "+156%", risk: "Low", winrate: "78%" },
  { name: "CryptoKing", country: "🇦🇪", followers: 5211, roi: "+312%", risk: "High", winrate: "61%" },
  { name: "SwingMaster", country: "🇯🇵", followers: 1897, roi: "+98%", risk: "Low", winrate: "75%" },
  { name: "VolatilityQueen", country: "🇰🇪", followers: 4102, roi: "+201%", risk: "Medium", winrate: "68%" },
  { name: "GoldRush", country: "🇦🇺", followers: 2345, roi: "+145%", risk: "Medium", winrate: "70%" },
];

const riskColor: Record<string, string> = {
  Low: "text-emerald-400", Medium: "text-yellow-400", High: "text-red-400",
};

function CopyTrading() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2"><Copy className="w-6 h-6 text-cyan-400" /> Copy Trading</h1>
        <p className="text-white/60 text-sm">Follow top-performing traders and mirror their positions automatically.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {traders.map((t) => (
          <div key={t.name} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 grid place-items-center font-bold text-lg">
                {t.name[0]}
              </div>
              <div>
                <div className="font-semibold flex items-center gap-1">{t.name} <span>{t.country}</span></div>
                <div className="text-xs text-white/50 flex items-center gap-1"><Users className="w-3 h-3" /> {t.followers.toLocaleString()} followers</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center mb-4">
              <div><div className="text-xs text-white/50">ROI</div><div className="font-bold text-emerald-400 flex items-center justify-center gap-1"><TrendingUp className="w-3 h-3" />{t.roi}</div></div>
              <div><div className="text-xs text-white/50">Win Rate</div><div className="font-bold">{t.winrate}</div></div>
              <div><div className="text-xs text-white/50">Risk</div><div className={`font-bold ${riskColor[t.risk]}`}>{t.risk}</div></div>
            </div>
            <button className="w-full py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-sm">Copy Trader</button>
          </div>
        ))}
      </div>
    </div>
  );
}
