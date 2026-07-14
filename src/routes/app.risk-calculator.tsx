import { createFileRoute } from "@tanstack/react-router";
import { Calculator } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/risk-calculator")({
  head: () => ({ meta: [{ title: "Risk Calculator — Digittool" }] }),
  component: RiskCalc,
});

function RiskCalc() {
  const [balance, setBalance] = useState(1000);
  const [risk, setRisk] = useState(2);
  const [sl, setSl] = useState(30);
  const [pip, setPip] = useState(10);

  const riskAmount = (balance * risk) / 100;
  const positionSize = sl > 0 ? riskAmount / (sl * (pip / 10000)) : 0;

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2"><Calculator className="w-6 h-6 text-cyan-400" /> Risk Calculator</h1>
        <p className="text-white/60 text-sm">Calculate optimal position size based on your risk tolerance.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-4">
          <Field label="Account Balance ($)" value={balance} onChange={setBalance} />
          <Field label="Risk per Trade (%)" value={risk} onChange={setRisk} step={0.1} />
          <Field label="Stop Loss (pips)" value={sl} onChange={setSl} />
          <Field label="Pip Value ($ per lot)" value={pip} onChange={setPip} />
        </div>

        <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-400/30 space-y-4">
          <div>
            <div className="text-xs text-white/60">Risk Amount</div>
            <div className="text-3xl font-bold text-cyan-300">${riskAmount.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-xs text-white/60">Position Size</div>
            <div className="text-3xl font-bold">{positionSize.toFixed(2)} lots</div>
          </div>
          <div>
            <div className="text-xs text-white/60">Max Loss</div>
            <div className="text-xl font-bold text-red-400">-${riskAmount.toFixed(2)}</div>
          </div>
          <div className="pt-4 border-t border-white/10 text-xs text-white/60">
            Never risk more than 1-2% of your account balance on a single trade. Consistent risk management is the #1 predictor of long-term success.
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, step = 1 }: { label: string; value: number; onChange: (v: number) => void; step?: number }) {
  return (
    <label className="block">
      <span className="text-xs text-white/70">{label}</span>
      <input type="number" step={step} value={value} onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="mt-1 w-full px-3 py-2 rounded bg-white/5 border border-white/10 focus:border-cyan-400 outline-none" />
    </label>
  );
}
