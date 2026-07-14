import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { TrendingUp, TrendingDown, Maximize2, Download, Pencil, LineChart as LineIcon, CandlestickChart, Activity, Plus, Minus, Crosshair } from "lucide-react";

export const Route = createFileRoute("/app/charts")({
  head: () => ({ meta: [{ title: "Charts — Digittool" }] }),
  component: Charts,
});

const symbols = [
  { name: "Volatility 10 (1s) Index", base: 9483.77, vol: 0.4 },
  { name: "Volatility 10 Index", base: 6547.21, vol: 0.6 },
  { name: "Volatility 25 (1s) Index", base: 421.5, vol: 0.8 },
  { name: "Volatility 25 Index", base: 632.4, vol: 1.0 },
  { name: "Volatility 50 (1s) Index", base: 254.1, vol: 1.2 },
  { name: "Volatility 50 Index", base: 258.3, vol: 1.4 },
  { name: "Volatility 75 (1s) Index", base: 152847.12, vol: 40 },
  { name: "Volatility 75 Index", base: 385421.7, vol: 80 },
  { name: "Volatility 100 (1s) Index", base: 1524.3, vol: 3 },
  { name: "Volatility 100 Index", base: 1287.4, vol: 4 },
  { name: "Boom 300 Index", base: 3218.5, vol: 2 },
  { name: "Boom 500 Index", base: 6524.1, vol: 3 },
  { name: "Boom 1000 Index", base: 14587.2, vol: 5 },
  { name: "Crash 300 Index", base: 4218.5, vol: 2 },
  { name: "Crash 500 Index", base: 5624.1, vol: 3 },
  { name: "Crash 1000 Index", base: 9587.2, vol: 5 },
  { name: "Jump 10 Index", base: 12547, vol: 4 },
  { name: "Jump 25 Index", base: 8547, vol: 6 },
  { name: "Jump 50 Index", base: 21547, vol: 10 },
  { name: "Jump 75 Index", base: 15847, vol: 12 },
  { name: "Jump 100 Index", base: 42154, vol: 20 },
];

const intervals = ["1t", "1m", "5m", "15m", "30m", "1h", "4h", "1D"];

type Tick = { t: number; p: number };

function Charts() {
  const [symIdx, setSymIdx] = useState(0);
  const [tf, setTf] = useState("1t");
  const [chartType, setChartType] = useState<"line" | "candle" | "area">("area");
  const sym = symbols[symIdx];
  const [ticks, setTicks] = useState<Tick[]>(() => {
    const arr: Tick[] = [];
    let p = sym.base;
    const now = Date.now();
    for (let i = 120; i > 0; i--) {
      p += (Math.random() - 0.5) * sym.vol;
      arr.push({ t: now - i * 1000, p });
    }
    return arr;
  });

  // reset when symbol changes
  useEffect(() => {
    const arr: Tick[] = [];
    let p = sym.base;
    const now = Date.now();
    for (let i = 120; i > 0; i--) {
      p += (Math.random() - 0.5) * sym.vol;
      arr.push({ t: now - i * 1000, p });
    }
    setTicks(arr);
  }, [symIdx]);

  // live tick simulation
  useEffect(() => {
    const id = setInterval(() => {
      setTicks((prev) => {
        const last = prev[prev.length - 1];
        const next = { t: Date.now(), p: last.p + (Math.random() - 0.5) * sym.vol };
        const arr = [...prev.slice(-179), next];
        return arr;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [symIdx]);

  const last = ticks[ticks.length - 1];
  const first = ticks[0];
  const changeAbs = last.p - first.p;
  const changePct = (changeAbs / first.p) * 100;
  const up = changeAbs >= 0;

  const { path, area, min, max } = useMemo(() => {
    const W = 900;
    const H = 420;
    const prices = ticks.map((t) => t.p);
    const mn = Math.min(...prices);
    const mx = Math.max(...prices);
    const range = mx - mn || 1;
    const step = W / (ticks.length - 1);
    const pts = ticks.map((t, i) => {
      const x = i * step;
      const y = H - ((t.p - mn) / range) * (H - 40) - 20;
      return [x, y];
    });
    const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(" ");
    const a = `${d} L${W},${H} L0,${H} Z`;
    return { path: d, area: a, min: mn, max: mx };
  }, [ticks]);

  const W = 900;
  const H = 420;
  const lastX = W;
  const lastY = H - ((last.p - min) / (max - min || 1)) * (H - 40) - 20;

  const stroke = up ? "#10b981" : "#ef4444";
  const fillId = up ? "gGreen" : "gRed";

  return (
    <div className="grid grid-cols-12 gap-3">
      {/* Symbol sidebar */}
      <aside className="col-span-12 lg:col-span-3 xl:col-span-2">
        <div className="rounded-lg bg-white/5 border border-white/10">
          <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between">
            <span className="text-xs font-bold text-white/80">MARKETS</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">LIVE</span>
          </div>
          <ul className="max-h-[560px] overflow-y-auto text-sm">
            {symbols.map((s, i) => (
              <li key={s.name}>
                <button
                  onClick={() => setSymIdx(i)}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between border-l-2 ${
                    symIdx === i ? "bg-cyan-500/10 border-cyan-400 text-white" : "border-transparent hover:bg-white/5 text-white/70"
                  }`}
                >
                  <span className="truncate">{s.name}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Chart */}
      <section className="col-span-12 lg:col-span-9 xl:col-span-10 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <div>
              <div className="text-lg font-bold flex items-center gap-2">
                {sym.name}
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className={`text-sm font-mono ${up ? "text-emerald-400" : "text-red-400"} flex items-center gap-2`}>
                <span className="text-white text-lg font-bold">{last.p.toFixed(2)}</span>
                {up ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {up ? "+" : ""}{changeAbs.toFixed(2)} ({changePct.toFixed(3)}%)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              {intervals.map((i) => (
                <button
                  key={i}
                  onClick={() => setTf(i)}
                  className={`px-3 py-1.5 text-xs font-semibold ${tf === i ? "bg-cyan-500 text-slate-900" : "hover:bg-white/10"}`}
                >
                  {i}
                </button>
              ))}
            </div>
            <div className="flex bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <button onClick={() => setChartType("area")} className={`p-2 ${chartType === "area" ? "bg-cyan-500 text-slate-900" : "hover:bg-white/10"}`} title="Area"><Activity className="w-4 h-4" /></button>
              <button onClick={() => setChartType("line")} className={`p-2 ${chartType === "line" ? "bg-cyan-500 text-slate-900" : "hover:bg-white/10"}`} title="Line"><LineIcon className="w-4 h-4" /></button>
              <button onClick={() => setChartType("candle")} className={`p-2 ${chartType === "candle" ? "bg-cyan-500 text-slate-900" : "hover:bg-white/10"}`} title="Candles"><CandlestickChart className="w-4 h-4" /></button>
            </div>
            <button className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10"><Pencil className="w-4 h-4" /></button>
            <button className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10"><Download className="w-4 h-4" /></button>
            <button className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10"><Maximize2 className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="rounded-xl bg-[#0d1220] border border-white/10 p-3 relative overflow-hidden">
          {/* Toolbar */}
          <div className="absolute left-3 top-3 z-10 flex flex-col gap-1 bg-black/40 backdrop-blur rounded-lg border border-white/10 p-1">
            <button className="p-1.5 hover:bg-white/10 rounded"><Plus className="w-3.5 h-3.5" /></button>
            <button className="p-1.5 hover:bg-white/10 rounded"><Minus className="w-3.5 h-3.5" /></button>
            <button className="p-1.5 hover:bg-white/10 rounded"><Crosshair className="w-3.5 h-3.5" /></button>
          </div>

          <svg viewBox={`0 0 ${W + 60} ${H}`} className="w-full h-[420px]" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gGreen" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gRed" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* grid */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <line key={i} x1="0" x2={W} y1={(H / 6) * i} y2={(H / 6) * i} stroke="rgba(255,255,255,0.05)" />
            ))}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <line key={i} x1={(W / 8) * i} x2={(W / 8) * i} y1="0" y2={H} stroke="rgba(255,255,255,0.04)" />
            ))}

            {chartType !== "candle" && (
              <>
                {chartType === "area" && <path d={area} fill={`url(#${fillId})`} />}
                <path d={path} fill="none" stroke={stroke} strokeWidth="1.75" />
              </>
            )}

            {chartType === "candle" && ticks.slice(-60).map((t, i, arr) => {
              const prev = arr[i - 1] ?? t;
              const x = (i / arr.length) * W;
              const bw = W / arr.length - 2;
              const open = prev.p;
              const close = t.p;
              const high = Math.max(open, close) + Math.random() * sym.vol * 0.5;
              const low = Math.min(open, close) - Math.random() * sym.vol * 0.5;
              const range = max - min || 1;
              const y = (v: number) => H - ((v - min) / range) * (H - 40) - 20;
              const cUp = close >= open;
              const col = cUp ? "#10b981" : "#ef4444";
              return (
                <g key={i}>
                  <line x1={x + bw / 2} x2={x + bw / 2} y1={y(high)} y2={y(low)} stroke={col} />
                  <rect x={x} y={Math.min(y(open), y(close))} width={bw} height={Math.max(1, Math.abs(y(open) - y(close)))} fill={col} />
                </g>
              );
            })}

            {/* last price dot + label */}
            <circle cx={lastX} cy={lastY} r="4" fill={stroke} />
            <line x1="0" x2={W} y1={lastY} y2={lastY} stroke={stroke} strokeDasharray="3 3" strokeOpacity="0.4" />
            <rect x={W + 4} y={lastY - 10} width="56" height="20" fill="#111827" stroke={stroke} />
            <text x={W + 32} y={lastY + 4} textAnchor="middle" fontSize="11" fill="#fff" fontFamily="monospace">{last.p.toFixed(2)}</text>

            {/* y-axis labels */}
            {[0, 1, 2, 3, 4].map((i) => {
              const v = max - ((max - min) / 4) * i;
              const y = ((H - 40) / 4) * i + 20;
              return <text key={i} x={W + 4} y={y + 3} fontSize="10" fill="rgba(255,255,255,0.4)" fontFamily="monospace">{v.toFixed(2)}</text>;
            })}
          </svg>

          {/* time axis */}
          <div className="flex justify-between text-[10px] text-white/40 font-mono px-2 mt-1">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => {
              const idx = Math.floor((ticks.length - 1) * (i / 6));
              const d = new Date(ticks[idx].t);
              return <span key={i}>{d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</span>;
            })}
          </div>
        </div>

        {/* stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {[
            { l: "Bid", v: (last.p - 0.02).toFixed(2), c: "text-red-400" },
            { l: "Ask", v: (last.p + 0.02).toFixed(2), c: "text-emerald-400" },
            { l: "Spread", v: "0.04" },
            { l: "High", v: max.toFixed(2) },
            { l: "Low", v: min.toFixed(2) },
            { l: "24h Vol", v: (sym.base * 12.4).toFixed(0) },
          ].map((s) => (
            <div key={s.l} className="p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="text-[10px] text-white/50 uppercase tracking-wider">{s.l}</div>
              <div className={`font-bold font-mono ${s.c ?? ""}`}>{s.v}</div>
            </div>
          ))}
        </div>

        {/* Order tickets */}
        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="font-bold text-emerald-400">BUY / RISE</div>
              <div className="text-xs text-white/60">Payout ×1.95</div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><div className="text-white/50 text-xs">Stake (KES)</div><input defaultValue={100} className="w-full mt-1 px-2 py-1.5 bg-white/5 border border-white/10 rounded" /></div>
              <div><div className="text-white/50 text-xs">Duration</div><input defaultValue="5 ticks" className="w-full mt-1 px-2 py-1.5 bg-white/5 border border-white/10 rounded" /></div>
            </div>
            <button className="w-full mt-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold">RISE @ {last.p.toFixed(2)}</button>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="font-bold text-red-400">SELL / FALL</div>
              <div className="text-xs text-white/60">Payout ×1.95</div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><div className="text-white/50 text-xs">Stake (KES)</div><input defaultValue={100} className="w-full mt-1 px-2 py-1.5 bg-white/5 border border-white/10 rounded" /></div>
              <div><div className="text-white/50 text-xs">Duration</div><input defaultValue="5 ticks" className="w-full mt-1 px-2 py-1.5 bg-white/5 border border-white/10 rounded" /></div>
            </div>
            <button className="w-full mt-3 py-2 rounded-lg bg-red-500 hover:bg-red-400 text-slate-900 font-bold">FALL @ {last.p.toFixed(2)}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
