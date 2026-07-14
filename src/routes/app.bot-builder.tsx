import { createFileRoute } from "@tanstack/react-router";
import { Play, Save, Download, Upload, RotateCcw, RotateCw, ZoomIn, ZoomOut, ChevronDown, Search, Trash2 } from "lucide-react";

export const Route = createFileRoute("/app/bot-builder")({
  head: () => ({ meta: [{ title: "Bot Builder — Digittool" }] }),
  component: BotBuilder,
});

const blockCategories = ["Trade parameters", "Purchase conditions", "Sell conditions (optional)", "Restart trading conditions", "Analysis", "Utility"];

function BotBuilder() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Left panel */}
      <aside className="col-span-12 lg:col-span-3 space-y-3">
        <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold">Quick strategy</button>
        <div className="rounded-lg bg-white/5 border border-white/10 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">Blocks menu</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="relative mb-3">
            <Search className="w-4 h-4 absolute left-2 top-2.5 text-white/40" />
            <input className="w-full pl-8 pr-2 py-2 rounded bg-white/5 border border-white/10 text-sm" placeholder="Search" />
          </div>
          <ul className="space-y-1 text-sm">
            {blockCategories.map((c) => (
              <li key={c} className="flex items-center justify-between px-2 py-2 rounded hover:bg-white/5 cursor-pointer">
                {c}
                <ChevronDown className="w-3 h-3 text-white/40" />
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Canvas */}
      <section className="col-span-12 lg:col-span-6">
        <div className="flex items-center gap-2 mb-3">
          {[RotateCcw, Upload, Download, Save, RotateCw, ZoomIn, ZoomOut].map((I, i) => (
            <button key={i} className="w-9 h-9 grid place-items-center rounded bg-white/5 hover:bg-white/10 border border-white/10">
              <I className="w-4 h-4" />
            </button>
          ))}
        </div>

        <div className="relative min-h-[600px] rounded-xl bg-[#0d1220] border border-white/10 p-6 overflow-auto"
             style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
          <BlockGroup title="1. Trade parameters">
            <Row label="Market:" values={["Derived", ">", "Continuous Indices", ">", "Volatility 10 (1s) Index"]} />
            <Row label="Trade Type:" values={["Up/Down", ">", "Rise/Fall"]} />
            <Row label="Contract Type:" values={["Both"]} />
            <Row label="Default Candle Interval:" values={["1 minute"]} />
            <div className="text-xs text-white/70 py-1">Restart buy/sell on error (disable for better performance):  <span className="ml-2">☐</span></div>
            <div className="text-xs text-white/70 py-1">Restart last trade on error (bot ignores the unsuccessful trade):  <span className="ml-2">☑</span></div>
            <div className="mt-3 border-t border-white/10 pt-3">
              <div className="text-xs font-semibold mb-2">Run once at start:</div>
              <div className="text-xs font-semibold mb-2">Trade options:</div>
              <Row label="Duration:" values={["Ticks", "1", "Stake:", "AUD", "1"]} />
            </div>
          </BlockGroup>

          <BlockGroup title="2. Purchase conditions">
            <Row label="Purchase" values={["Rise"]} />
          </BlockGroup>

          <BlockGroup title="3. Sell conditions" side>
            <div className="text-xs text-white/80">if <span className="px-2 py-0.5 rounded bg-white/10">Sell is available</span> then</div>
            <div className="h-10" />
          </BlockGroup>

          <BlockGroup title="4. Restart trading conditions" side>
            <Row label="" values={["Trade again"]} />
          </BlockGroup>

          <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500/30 grid place-items-center">
            <Trash2 className="w-4 h-4 text-red-400" />
          </button>
        </div>
      </section>

      {/* Right panel */}
      <aside className="col-span-12 lg:col-span-3">
        <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
          <div className="flex items-center gap-2 p-3 border-b border-white/10">
            <button className="flex items-center gap-1 px-3 py-1.5 rounded bg-emerald-500/20 text-emerald-300 text-sm font-semibold">
              <Play className="w-4 h-4" /> Run
            </button>
            <span className="text-xs text-white/60">Bot is not running</span>
          </div>
          <div className="flex text-sm border-b border-white/10">
            {["Summary", "Transactions", "Journal"].map((t, i) => (
              <button key={t} className={`px-4 py-2 ${i === 0 ? "border-b-2 border-cyan-400 font-semibold" : "text-white/60"}`}>{t}</button>
            ))}
          </div>
          <div className="p-6 text-center text-sm text-white/70 min-h-[220px] grid place-items-center">
            <div>
              When you're ready to trade, hit <strong>Run</strong>.<br />
              You'll be able to track your bot's performance here.
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 p-4 border-t border-white/10 text-xs">
            <div><div className="text-white/50">Total stake</div><div className="font-semibold">0.00 KES</div></div>
            <div><div className="text-white/50">Total payout</div><div className="font-semibold">0.00 KES</div></div>
            <div><div className="text-white/50">No.</div><div className="font-semibold">0</div></div>
            <div><div className="text-white/50">Contracts lost</div><div className="font-semibold">0</div></div>
            <div><div className="text-white/50">Contracts won</div><div className="font-semibold">0</div></div>
            <div><div className="text-white/50">Total profit/loss</div><div className="font-semibold">0.00 KES</div></div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function BlockGroup({ title, children, side }: { title: string; children: React.ReactNode; side?: boolean }) {
  return (
    <div className={`mb-4 rounded-lg overflow-hidden border border-blue-500/40 ${side ? "ml-auto max-w-md" : "max-w-xl"}`}>
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-3 py-2 text-sm font-semibold">{title}</div>
      <div className="bg-blue-900/40 p-3 space-y-1">{children}</div>
    </div>
  );
}

function Row({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="flex items-center flex-wrap gap-1.5 text-xs">
      {label && <span className="text-white/80">{label}</span>}
      {values.map((v, i) => (
        <span key={i} className={v === ">" ? "text-white/50" : "px-2 py-1 rounded bg-white/10 border border-white/10"}>{v}</span>
      ))}
    </div>
  );
}
