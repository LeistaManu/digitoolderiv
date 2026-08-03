import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Blocks,
  LineChart,
  Bot,
  Layers,
  Activity,
  FileBarChart,
  Calculator,
  Copy,
  TrendingUp,
  Phone,
  LogIn,
  UserPlus,
} from "lucide-react";
import { DollarRain } from "@/components/DollarRain";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      {
        title: "Digittool App — Trading Workspace",
      },
      {
        name: "description",
        content:
          "The Digittool trading workspace: bots, charts, analysis, reports, risk tools and copy trading.",
      },
    ],
  }),
  component: AppLayout,
});

const nav = [
  { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/app/bot-builder", label: "Bot Builder", icon: Blocks },
  { to: "/app/charts", label: "Charts", icon: LineChart },
  { to: "/app/trading-bots", label: "Trading Bots", icon: Bot },
  { to: "/app/bulk-trader", label: "Bulk Trader", icon: Layers },
  { to: "/app/analysis-tool", label: "Analysis Tool", icon: Activity },
  { to: "/app/reports", label: "Reports", icon: FileBarChart },
  { to: "/app/risk-calculator", label: "Risk Calculator", icon: Calculator },
  { to: "/app/copy-trading", label: "Copy Trading", icon: Copy },
  { to: "/app/dtrader", label: "DTrader", icon: TrendingUp },
];

async function login() {
  try {
    const { challenge, state } = await generatePKCE();

    const params = new URLSearchParams({
      response_type: "code",
      client_id: "340fKqgQxBtyfOpYwkRmA",
      redirect_uri: "https://digittoolderiv.site/auth/callback",
      scope: "trade account_manage application_read payment",
      state,
      code_challenge: challenge,
      code_challenge_method: "S256",
    });

    window.location.href =
      `https://auth.deriv.com/oauth2/auth?${params.toString()}`;
  } catch (err) {
    console.error(err);
  }
}
function AppLayout() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <DollarRain />

      {/* Marquee banner */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-xs md:text-sm font-semibold overflow-hidden whitespace-nowrap py-2">
        <div className="inline-block animate-[scroll_30s_linear_infinite] px-4">
          🔥 TRADE SMARTER WITH DIGITTOOL • AUTOMATED BOTS • REAL-TIME ANALYSIS • COPY TOP TRADERS • 24/7 SUPPORT • VIRTUAL ACCOUNT AVAILABLE • JOIN 50,000+ TRADERS AND MORE •&nbsp;
          🔥 TRADE SMARTER WITH DIGITTOOL • AUTOMATED BOTS • REAL-TIME ANALYSIS • COPY TOP TRADERS • 24/7 SUPPORT • VIRTUAL ACCOUNT AVAILABLE • JOIN 50,000+ TRADERS AND MORE •&nbsp;
        </div>
      </div>

      {/* Top Bar */}
      <header className="border-b border-white/10 bg-[#0f1424]/80 backdrop-blur">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-4 py-3">

          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 grid place-items-center font-black">
              D
            </div>
            <span className="font-bold text-lg tracking-tight">
              Digittool
            </span>
          </Link>

          <div className="flex items-center gap-2">

            <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10 text-xs">
              <span className="font-semibold text-yellow-400">
                KSH
              </span>
              <span className="text-white/40">/</span>
              <span className="font-semibold">
                USD
              </span>
            </div>

            <a
              href="tel:+254700000000"
              className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
            </a>

            <button
  onClick={login}
  className="px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-semibold inline-flex items-center gap-1.5"
>
  <LogIn className="w-4 h-4" />
  Login
</button>

            {/* Signup */}
            <a
              href="https://track.deriv.com/_SBDSiGetH571hit6RV3zsGNd7ZgqdRLk/1/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-pink-100 text-pink-900 hover:bg-white text-sm font-semibold inline-flex items-center gap-1.5"
            >
              <UserPlus className="w-4 h-4" />
              Sign up
            </a>

          </div>
        </div>

        {/* Navigation */}
        <nav className="max-w-[1600px] mx-auto px-2 overflow-x-auto">
          <ul className="flex items-center gap-1 min-w-max">
            {nav.map((n) => {
              const active = pathname === n.to;
              const Icon = n.icon;

              return (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      active
                        ? "border-cyan-400 text-white"
                        : "border-transparent text-white/70 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <main className="max-w-[1600px] mx-auto p-4 md:p-6">
        <div key={pathname} className="animate-page-in">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-white/10 mt-10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Digittool. Trading involves risk.
        Past performance is not indicative of future results.
      </footer>
    </div>
  );
}
