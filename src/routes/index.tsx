import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Check, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digittool — Trade with better tools" },
      { name: "description", content: "Professional-grade charts, risk controls, and lightning-fast execution built for serious traders." },
      { property: "og:title", content: "Digittool — Trade with better tools" },
      { property: "og:description", content: "Professional-grade charts, risk controls, and lightning-fast execution built for serious traders." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const testimonials = [
  { initials: "KM", name: "Kelvin Maxwell", role: "Crypto Investor", stars: 5, quote: "Copy trading is incredible! I follow top performers and my portfolio has grown steadily over the past few months." },
  { initials: "DG", name: "Delvoux Glen", role: "Forex Specialist", stars: 5, quote: "Lightning-fast execution and professional-grade tools. The risk management features saved me from major losses." },
  { initials: "AK", name: "Aisha Khan", role: "Algorithmic Trader", stars: 5, quote: "The strategy builder let me automate my setups without writing code, and backtests lined up closely with live results." },
  { initials: "JO", name: "James Okoro", role: "Independent Trader", stars: 4.5, quote: "Having bots and copy trading in one dashboard means I book gains every week. Withdrawals have always been smooth." },
];

const stats = [
  { value: "50K+", label: "Active Traders" },
  { value: "$2.5B+", label: "Volume Traded" },
  { value: "99.9%", label: "Uptime" },
  { value: "150+", label: "Markets" },
];

function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-12">
        <div className="text-2xl font-bold font-display">
          <span className="text-gradient-brand">Digit</span>
          <span className="text-foreground/90">tool</span>
        </div>
        <Link
          to="/app/bot-builder"
          className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary transition"
        >
          Login Now <ArrowRight className="h-4 w-4" />
        </Link>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-16 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground bg-card/40">
          <Zap className="h-4 w-4 text-cyan" />
          Trusted by 50,000+ Traders Worldwide
        </div>
        <h1 className="mt-8 text-5xl md:text-7xl font-bold font-display tracking-tight">
          <span className="text-gradient-hero">Trade with better tools</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Professional-grade charts, risk controls, and lightning-fast execution built for serious traders.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            to="/app/bot-builder"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-8 py-4 text-base font-semibold shadow-glow hover:opacity-95 transition"
          >
            Start Trading Now <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://oauth.deriv.com/oauth2/authorize?app_id=36300"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3 text-sm font-semibold text-background hover:opacity-95 transition"
          >
            Old Account Login
          </a>
          <a
            href="https://track.deriv.com/_SBDSiGetH571hit6RV3zsGNd7ZgqdRLk/1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold hover:opacity-95 transition"
          >
            Sign Up
          </a>
        </div>


        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-cyan" /> No Credit Card Required</span>
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-cyan" /> $10,000 Virtual Account</span>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-2xl p-6 pt-12 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 flex items-center justify-center text-sm font-bold border border-border">
                {t.initials}
              </div>
              <p className="text-sm italic text-muted-foreground leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 text-center">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-cyan mt-0.5">{t.role}</div>
                <div className="mt-2 flex justify-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(t.stars) ? "fill-gold text-gold" : i < t.stars ? "fill-gold/50 text-gold" : "text-muted"}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-full aspect-square flex flex-col items-center justify-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-brand">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Digittool. Trading involves risk.
      </footer>
    </div>
  );
}
