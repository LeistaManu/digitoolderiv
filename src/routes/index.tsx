import { createFileRoute } from "@tanstack/react-router";
import { Bot, LineChart, Copy, Shield, Zap, Star, ArrowRight, Check, Lock, Rocket, Smartphone, Headphones, Wallet, TrendingUp, BarChart3, Cpu, Globe, Users, Award, Clock, DollarSign, Activity, Bitcoin, CandlestickChart, Layers, Target, PlayCircle, ChevronRight, Sparkles, Mail, MessageCircle, Twitter, Send } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digittool — Automated Trading Bots, Analysis & Copy Trading" },
      { name: "description", content: "Your all-in-one workspace for automated trading, smart bots, and real-time market insights. Trusted by 50,000+ traders worldwide." },
      { property: "og:title", content: "Digittool — Automated Trading Bots, Analysis & Copy Trading" },
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
  { initials: "MG", quote: "Digittool transformed my trading. The automated bots handle my strategies flawlessly, and I've seen consistent profits.", name: "Mark Gonzales", role: "Professional Day Trader" },
  { initials: "KM", quote: "Copy trading is incredible! I follow top performers and my portfolio has grown steadily over the past few months.", name: "Kelvin Maxwell", role: "Crypto Investor" },
  { initials: "DG", quote: "Lightning-fast execution and professional-grade tools. The risk management features saved me from major losses.", name: "Delvoux Glen", role: "Forex Specialist" },
  { initials: "AK", quote: "The strategy builder let me automate my setups without writing code, and backtests lined up closely with live results.", name: "Aisha Khan", role: "Algorithmic Trader" },
  { initials: "JO", quote: "Having bots and copy trading in one dashboard saves me hours every week. Withdrawals have always been smooth.", name: "James Okoro", role: "Independent Trader" },
  { initials: "SL", quote: "The mobile experience is excellent. I can check signals, adjust risk settings, and monitor my bots from anywhere.", name: "Sophie Laurent", role: "Options Trader" },
  { initials: "RT", quote: "The analytics dashboard is a game-changer. I finally understand where my edge is and where I lose money.", name: "Ravi Tandon", role: "Swing Trader" },
  { initials: "EC", quote: "Onboarding took minutes. The virtual account let me stress-test my bot before committing a single dollar.", name: "Elena Costa", role: "New Trader" },
];

const features = [
  { emoji: "🤖", title: "AI-Powered Trading Bots", tag: "Automate Your Success", desc: "Deploy intelligent trading strategies with our advanced bot system. No coding required — configure, test, and let the bots work 24/7." },
  { emoji: "📊", title: "Real-Time Market Analysis", tag: "Data-Driven Decisions", desc: "Access professional-grade charts, indicators, and analytics. Track market trends, identify opportunities, and execute with confidence." },
  { emoji: "📄", title: "Copy Trading Network", tag: "Follow Top Performers", desc: "Mirror successful traders automatically. Transparent performance metrics, full control over your capital, and instant execution." },
  { emoji: "🛡️", title: "Risk Management Tools", tag: "Protect Your Capital", desc: "Advanced stop-loss, take-profit, and position sizing tools. Set your risk parameters and trade with peace of mind." },
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

const steps = [
  { n: "01", icon: Users, title: "Create Your Account", desc: "Sign up in under 60 seconds. No credit card required. Instant access to a $10,000 virtual balance to practice with." },
  { n: "02", icon: Cpu, title: "Choose Your Strategy", desc: "Pick from pre-built bots, follow top-ranked copy traders, or build your own strategy with our no-code builder." },
  { n: "03", icon: Activity, title: "Backtest & Optimize", desc: "Run your setup against historical data. Tune parameters, review the equity curve, and validate before going live." },
  { n: "04", icon: Rocket, title: "Go Live & Scale", desc: "Deploy to a live account, monitor from web or mobile, and scale positions once your edge is proven." },
];

const markets = [
  { icon: DollarSign, name: "Forex", desc: "Majors, minors, and exotics with tight spreads across 60+ FX pairs.", pairs: "60+ pairs" },
  { icon: Bitcoin, name: "Crypto", desc: "Trade BTC, ETH, and top altcoins 24/7 with deep liquidity.", pairs: "40+ coins" },
  { icon: CandlestickChart, name: "Indices", desc: "Access global indices including S&P 500, NASDAQ, DAX, and FTSE.", pairs: "20+ indices" },
  { icon: BarChart3, name: "Commodities", desc: "Gold, silver, oil, and agricultural products with competitive pricing.", pairs: "15+ assets" },
  { icon: Layers, name: "Synthetics", desc: "Trade volatility indices available around the clock, even on weekends.", pairs: "30+ synthetics" },
  { icon: Globe, name: "Stocks", desc: "Fractional access to blue-chip US and global equities.", pairs: "100+ stocks" },
];

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "Perfect for testing the waters with a virtual account.",
    features: ["$10,000 virtual balance", "3 active bots", "Basic analytics", "Community support", "Mobile access"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    desc: "For serious traders scaling automated strategies.",
    features: ["Unlimited live bots", "Advanced analytics & backtesting", "Copy trading (follow up to 25)", "Priority execution", "Priority email & chat support", "Advanced risk controls"],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "per month",
    desc: "Institutional-grade tooling for high-volume traders.",
    features: ["Everything in Pro", "Unlimited copy trading slots", "API & webhook access", "Custom strategy builder", "Dedicated account manager", "24/7 phone support"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const faqs = [
  { q: "Is Digittool safe to use?", a: "Yes. We use bank-grade 256-bit encryption, segregated funds, and never take custody of your capital directly — trades execute on regulated broker infrastructure." },
  { q: "Do I need coding skills to build a bot?", a: "No. Our visual strategy builder lets you configure entries, exits, indicators, and risk parameters without writing a line of code." },
  { q: "How does copy trading work?", a: "Browse verified top performers by return, drawdown, and risk score. Allocate any amount to mirror their trades proportionally — you retain full control and can stop anytime." },
  { q: "Can I try before I pay?", a: "Absolutely. The Starter plan is free forever with a $10,000 virtual balance so you can test strategies risk-free before going live." },
  { q: "What markets can I trade?", a: "Forex, crypto, indices, commodities, synthetic indices, and stocks — 150+ instruments in total, all from one dashboard." },
  { q: "How fast are withdrawals?", a: "Most withdrawals process within 24 hours. Crypto withdrawals are typically confirmed on-chain within minutes of approval." },
  { q: "Is there a mobile app?", a: "Yes, our mobile-friendly workspace works on iOS and Android browsers with full parity to the desktop platform — bots, charts, and copy trading included." },
  { q: "Can I cancel anytime?", a: "Yes. Subscriptions are month-to-month with no lock-in. Cancel from your dashboard and continue to use the platform until the end of the period." },
];

const security = [
  { icon: Lock, title: "256-bit Encryption", desc: "Every session and API call is end-to-end encrypted." },
  { icon: Shield, title: "2FA Authentication", desc: "Protect your account with authenticator or SMS-based 2FA." },
  { icon: Wallet, title: "Segregated Funds", desc: "Your capital stays with regulated brokers, never commingled." },
  { icon: Award, title: "Regular Audits", desc: "Third-party security audits keep our infrastructure honest." },
];

function Index() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-display font-bold text-gradient-brand">Digittool</a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#how" className="hover:text-foreground transition">How It Works</a>
            <a href="#markets" className="hover:text-foreground transition">Markets</a>
            <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </nav>
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
            <span className="text-gradient-hero">Welcome to Digittool</span>
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
            <span className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-[color:var(--cyan)]" /> Cancel Anytime</span>
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
      <section id="features" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[color:var(--cyan)]/30 bg-[color:var(--cyan)]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[color:var(--cyan)]">Platform</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">Powerful Features for <span className="text-gradient-hero">Modern Traders</span></h2>
            <p className="mt-4 text-muted-foreground">Everything you need to succeed in today's fast-paced markets</p>
            <p className="mt-4 max-w-3xl mx-auto text-sm text-muted-foreground">Whether you prefer manual decisions, automated bot execution, or copy trading, Digittool gives you practical tools for finding setups, managing risk, and keeping your trading workflow simple.</p>
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

      {/* How It Works */}
      <section id="how" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[color:var(--cyan)]/30 bg-[color:var(--cyan)]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[color:var(--cyan)]">How It Works</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">From Signup to <span className="text-gradient-hero">First Profit</span></h2>
            <p className="mt-4 text-muted-foreground">Four simple steps to start trading smarter</p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="glass-card rounded-2xl p-6 relative">
                <div className="text-5xl font-bold text-gradient-brand opacity-30">{s.n}</div>
                <s.icon className="w-8 h-8 text-[color:var(--cyan)] mt-4" />
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section id="markets" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[color:var(--cyan)]/30 bg-[color:var(--cyan)]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[color:var(--cyan)]">Markets</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">Trade <span className="text-gradient-hero">Every Major Market</span></h2>
            <p className="mt-4 text-muted-foreground">150+ instruments across six asset classes — all from one dashboard</p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((m) => (
              <div key={m.name} className="glass-card rounded-2xl p-6 hover:border-[color:var(--cyan)]/40 transition">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center">
                    <m.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-[color:var(--cyan)] font-semibold">{m.pairs}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{m.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[color:var(--cyan)]/30 bg-[color:var(--cyan)]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[color:var(--cyan)]">Security</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">Your Capital is <span className="text-gradient-hero">Protected</span></h2>
            <p className="mt-4 text-muted-foreground">Institutional-grade security that keeps your funds and data safe</p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {security.map((s) => (
              <div key={s.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-cta flex items-center justify-center shadow-glow">
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
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
          <p className="mt-4 text-muted-foreground">Join thousands of successful traders who have transformed their trading with Digittool</p>
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
            <span className="inline-block rounded-full border border-[color:var(--cyan)]/30 bg-[color:var(--cyan)]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[color:var(--cyan)]">Why Digittool</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">Why Choose <span className="text-gradient-hero">Digittool?</span></h2>
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

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[color:var(--cyan)]/30 bg-[color:var(--cyan)]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[color:var(--cyan)]">Pricing</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">Simple, <span className="text-gradient-hero">Transparent Pricing</span></h2>
            <p className="mt-4 text-muted-foreground">Start free, upgrade when you're ready. No hidden fees.</p>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.name} className={`glass-card rounded-2xl p-8 relative ${p.highlighted ? "border-[color:var(--cyan)]/50 shadow-glow" : ""}`}>
                {p.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-cta px-4 py-1 text-xs font-semibold text-white">Most Popular</div>
                )}
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gradient-brand">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-[color:var(--cyan)] shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <a href={SIGNUP_URL} target="_blank" rel="noopener" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${p.highlighted ? "bg-gradient-cta text-white shadow-glow hover:scale-[1.02]" : "border border-border bg-background hover:bg-secondary"}`}>
                  {p.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[color:var(--cyan)]/30 bg-[color:var(--cyan)]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[color:var(--cyan)]">FAQ</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">Frequently Asked <span className="text-gradient-hero">Questions</span></h2>
            <p className="mt-4 text-muted-foreground">Everything you need to know before getting started</p>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="glass-card rounded-xl p-6 group">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold">
                  {f.q}
                  <ChevronRight className="w-5 h-5 text-[color:var(--cyan)] transition group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-12 md:p-16 border border-[color:var(--primary)]/20">
          <span className="inline-block rounded-full border border-[color:var(--cyan)]/30 bg-[color:var(--cyan)]/5 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-[color:var(--cyan)]">Get Started</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold">Ready to Transform <br/><span className="text-gradient-hero">Your Trading?</span></h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">Join 50,000+ traders who are already profiting with Digittool. Start with a free virtual account today.</p>
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
      <footer className="border-t border-border pt-16 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <div className="text-gradient-brand font-display font-bold text-2xl">Digittool</div>
              <p className="mt-4 text-sm text-muted-foreground max-w-sm">Your all-in-one workspace for automated trading, smart bots, and real-time market insights.</p>
              <div className="mt-6 flex gap-3">
                <a href="#" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition"><Send className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition"><MessageCircle className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition"><Mail className="w-4 h-4" /></a>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold">Platform</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#markets" className="hover:text-foreground transition">Markets</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition">Pricing</a></li>
                <li><a href="#how" className="hover:text-foreground transition">How It Works</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold">Company</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">About</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold">Legal</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Risk Disclosure</a></li>
                <li><a href="#faq" className="hover:text-foreground transition">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>© {new Date().getFullYear()} Digittool. All rights reserved.</div>
            <div className="text-xs">Risk warning: Trading involves substantial risk of loss. Past performance is not indicative of future results.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
