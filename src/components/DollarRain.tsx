import { useEffect, useState } from "react";

export function DollarRain({ duration = 1600 }: { duration?: number }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(t);
  }, [duration]);
  if (!show) return null;
  const bills = Array.from({ length: 24 });
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden bg-[#0a0e1a]/70 backdrop-blur-sm">
      {bills.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 1.2;
        const dur = 3 + Math.random() * 3;
        const size = 22 + Math.random() * 26;
        return (
          <span
            key={i}
            className="absolute animate-dollar-fall select-none"
            style={{
              left: `${left}%`,
              top: "-40px",
              fontSize: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${dur}s`,
              filter: "drop-shadow(0 4px 12px rgba(16,185,129,0.5))",
            }}
          >
            💵
          </span>
        );
      })}
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-full border-4 border-emerald-400/30 border-t-emerald-400 animate-spin-slow" />
          <div className="mt-4 font-black text-2xl bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            Loading Digittool…
          </div>
        </div>
      </div>
    </div>
  );
}