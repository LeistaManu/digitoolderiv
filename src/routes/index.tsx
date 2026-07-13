import { createFileRoute } from "@tanstack/react-router";
import { Bot, LineChart, Copy, Shield, Zap, Star, ArrowRight, Check, Lock, Rocket, Smartphone, Headphones, Wallet, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dollarprinter — Automated Trading Bots, Analysis & Copy Trading" },
      { name: "description", content: "Your all-in-one workspace for automated trading, smart bots, and real-time market insights. Trusted by 50,000+ traders worldwide." },
      { property: "og:title", content: "Dollarprinter — Automated Trading Bots, Analysis & Copy Trading" },
      { property: "og:description", content: "Automate strategies, follow top performers, and manage risk from one dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SIGNUP_URL = "https://track.deriv.com/_SBDSiGetH571hit6RV3zsGNd7ZgqdRLk/1/";
const OLD_LOGIN_URL = "https://www.dollarprinters.site/";

const testimonials = [
  { initials: "MG", quote: "Dollarprinter transformed my trading. The automated bots handle my strategies flawlessly, and I've seen consistent profits.", name: "Mark Gonzales", role: "Professional Day Trader" },
  { initials: "KM", quote: "Copy trading is incredible! I follow top performers and my portfolio has grown steadily over the past few months.", name: "Kelvin Maxwell", role: "Crypto Investor" },
  { initials: "DG", quote: "Lightning-fast execution and professional-grade tools. The risk management features saved me from major losses.", name: "Delvoux Glen", role: "Forex Specialist" },
  { initials: "AK", quote: "The strategy builder let me automate my setups without writing code, and backtests lined up closely with live results.", name: "Aisha Khan", role: "Algorithmic Trader" },
  { initials: "JO", quote: "Having bots and copy trading in one dashboard saves me hours every week. Withdrawals have always been smooth.", name: "James Okoro", role: "Independent Trader" },
  { initials: "SL", quote: "The mobile experience is excellent. I can check signals, adjust risk settings, and monitor my bots from anywhere.", name: "Sophie Laurent", role: "Options Trader" },
];

const features = [
  { icon: Bot, emoji: "🤖", title: "AI-Powered Trading Bots", tag: "Automate Your Success", desc: "Deploy intelligent trading strategies with our advanced bot system. No coding required — configure, test, and let the bots work 24/7." },
  { icon: LineChart, emoji: "📊", title: "Real-Time Market Analysis", tag: "Data-Driven Decisions", desc: "Access professional-grade charts, indicators, and analytics. Track market trends, identify opportunities, and execute with confidence." },
  { icon: Copy, emoji: "📄", title: "Copy Trading Network", tag: "Follow Top Performers", desc: "Mirror successful traders automatically. Transparent performance metrics, full control over your capital, and instant execution." },
  { icon: Shield, emoji: "🛡️", title: "Risk Management Tools", tag: "Protect Your Capital", desc: "Advanced stop-loss, take-profit, and position sizing tools. Set your risk parameters and trade with peace of mind." },
];

const stats = [
  { value: "50K+", label: "Active Traders" },
  { value: "$2.5B+", label: "Trading Volume" },
  { value: "99.9%", label: "Uptime" },
  { value: "150+", label: "Trading Pairs" },
];

const whyChoose = [
  { icon: Lock, text: "Bank-grade security with encrypted sessions" },
  { icon: Zap, text: "Lightning-fast execution under 50ms" },
  { icon: Rocket, text: "Virtual account for risk-free testing" },
  { icon: Headphones, text: "24/7 customer support and trading resources" },
  { icon: TrendingUp, text: "Multi-asset trading across forex, crypto, and indices" },
  { icon: Smartphone, text: "Mobile-friendly workspace for trading on the go" },
];

function Index() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-display font-bold text-gradient-brand">Dollarprinter</a>
          <a href={OLD_LOGIN_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-5 py-2 text-sm font-medium hover:bg-secondary transition">
            Login Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--cyan)]/30 bg-[color:var(--cyan)]/5 px-4 py-1.5 text-sm text-[color:var(--cyan)]">
            <Zap className="w-4 h-4" /> Trusted by 50,000+ Traders Worldwide
          </div>
          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05]">
            <span className="text-gradient-hero">Welcome to Dollarprint</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your all-in-one workspace for automated trading, smart bots, and real-time market insights.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a href={SIGNUP_URL} target="_blank" rel="noopener" className="group inline-flex items-center gap-2 rounded-full bg-gradient-cta px-8 py-4 text-base font-semibold text-white shadow-glow hover:scale-[1.02] transition">
              Start Trading Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <a href={OLD_LOGIN_URL} target="_blank" rel="noopener" className="inline-flex items-center rounded-full bg-gradient-gold px-8 py-3 text-sm font-semibold text-black hover:brightness-110 transition">
              Old Account Login
            </a>
            <a href={SIGNUP_URL} target="_blank" rel="noopener" className="inline-flex items-center rounded-full bg-gradient-cta px-6 py-2.5 text-sm font-semibold text-white hover:scale-[1.02] transition">
              Sign Up
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-[color:var(--cyan)]" /> No Credit Card Required</span>
            <span className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-[color:var(--cyan)]" /> $10,000 Virtual Account</span>
          </div>
        </div>
      </section>

      {/* Testimonials marquee */}
      <section className="py-16 overflow-hidden">
        <div className="relative">
          <div className="flex gap-6 animate-[scroll_45s_linear_infinite] w-max">
            {[...testimonials, ...testimonials].map((t, i) => (
              <article key={i} className="glass-card rounded-2xl p-6 w-[380px] shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center font-semibold text-sm">{t.initials}</div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-[color:var(--cyan)]">{t.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground italic">"{t.quote}"</p>
                <div className="mt-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />)}
                </div>
              </article>
            ))}
          </div>
          <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full border border-border glass-card flex items-center justify-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient-brand">{s.value}</div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[color:var(--cyan)]/30 bg-[color:var(--cyan)]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[color:var(--cyan)]">Platform</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">Powerful Features for <span className="text-gradient-hero">Modern Traders</span></h2>
            <p className="mt-4 text-muted-foreground">Everything you need to succeed in today's fast-paced markets</p>
            <p className="mt-4 max-w-3xl mx-auto text-sm text-muted-foreground">Whether you prefer manual decisions, automated bot execution, or copy trading, Dollarprinter gives you practical tools for finding setups, managing risk, and keeping your trading workflow simple.</p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-6 hover:border-[color:var(--cyan)]/40 transition group">
                <div className="w-14 h-14 rounded-xl bg-gradient-cta flex items-center justify-center text-2xl shadow-glow">{f.emoji}</div>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <div className="mt-1 text-xs uppercase tracking-widest text-[color:var(--cyan)]">{f.tag}</div>
                <p className="mt-3 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block rounded-full border border-[color:var(--cyan)]/30 bg-[color:var(--cyan)]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[color:var(--cyan)]">Community</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold">Trusted by Traders <span className="text-gradient-hero">Worldwide</span></h2>
          <p className="mt-4 text-muted-foreground">Join thousands of successful traders who have transformed their trading with Dollarprinter</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex justify-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[color:var(--gold)] text-[color:var(--gold)]" />)}</div>
              <div className="mt-3 text-3xl font-bold">4.9</div>
              <div className="text-xs text-muted-foreground">average rating</div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <Wallet className="w-6 h-6 mx-auto text-[color:var(--cyan)]" />
              <div className="mt-3 text-3xl font-bold">50,000+</div>
              <div className="text-xs text-muted-foreground">traders</div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <Check className="w-6 h-6 mx-auto text-[color:var(--cyan)]" />
              <div className="mt-3 text-3xl font-bold">Verified</div>
              <div className="text-xs text-muted-foreground">reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[color:var(--cyan)]/30 bg-[color:var(--cyan)]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[color:var(--cyan)]">Why Dollarprinter</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">Why Choose <span className="text-gradient-hero">Dollarprinter?</span></h2>
            <p className="mt-4 text-muted-foreground">Join the platform that's redefining automated trading</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {whyChoose.map((w) => (
              <div key={w.text} className="glass-card rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-cta flex items-center justify-center shrink-0">
                  <w.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">{w.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-12 md:p-16 border border-[color:var(--primary)]/20">
          <span className="inline-block rounded-full border border-[color:var(--cyan)]/30 bg-[color:var(--cyan)]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[color:var(--cyan)]">Get Started</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold">Ready to Transform <br/><span className="text-gradient-hero">Your Trading?</span></h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">Join 50,000+ traders who are already profiting with Dollarprinter. Start with a free virtual account today.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={SIGNUP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-8 py-4 font-semibold text-white shadow-glow hover:scale-[1.02] transition">
              Start Trading Now <ArrowRight className="w-5 h-5" />
            </a>
            <a href={OLD_LOGIN_URL} target="_blank" rel="noopener" className="inline-flex items-center rounded-full bg-gradient-gold px-8 py-4 font-semibold text-black hover:brightness-110 transition">
              Old Account Login
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="text-gradient-brand font-display font-bold text-lg">Dollarprinter</div>
          <div>© {new Date().getFullYear()} Dollarprinter. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
