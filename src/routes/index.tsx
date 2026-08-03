import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  Zap,
  Check,
  Star,
  Bot,
  BarChart3,
  Users,
  Shield,
  Sparkles,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Digittool — Trade with better tools' },
      {
        name: 'description',
        content:
          'Professional-grade charts, risk controls, and lightning-fast execution built for serious traders.',
      },
    ],
  }),
  component: LandingPage,
});

const typewriterPhrases = [
  'Digittool',
  'smarter trading',
  'automated bots',
  'your edge',
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wi % words.length];
    const speed = deleting ? 55 : 110;

    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);

        if (next === word) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);

        if (next === '') {
          setDeleting(false);
          setWi(i => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, wi, words]);

  return text;
}

function LandingPage() {
  const typed = useTypewriter(typewriterPhrases);

  // Deriv Login
  const startDerivLogin = () => {
    window.location.href =
      'https://deriv.com/?app_id=340fKqgQxBtyfOpYwkRmA&l=EN&brand=deriv&redirect_uri=https://www.digittoolderiv.site/app/dashboard';
  };

  // Deriv Sign Up
  const startDerivSignup = () => {
    window.location.href =
      'https://deriv.com/signup/?app_id=340fKqgQxBtyfOpYwkRmA&l=EN&brand=deriv&redirect_uri=https://www.digittoolderiv.site/app/dashboard';
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-12">
        <div className="text-2xl font-bold">
          <span className="text-cyan-400">Digit</span>
          <span>tool</span>
        </div>

        <button
          onClick={startDerivLogin}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-5 py-2.5 text-sm font-semibold hover:bg-white/20 transition-all duration-300"
        >
          Login Now <ArrowRight className="h-4 w-4" />
        </button>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-16 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 bg-white/5">
          <Zap className="h-4 w-4 text-cyan-400" />
          Trusted by 50,000+ Traders Worldwide
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Welcome to {typed}
          </span>
          <span className="inline-block w-1 h-[0.9em] align-middle bg-cyan-400 ml-1 animate-pulse" />
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
          Your all-in-one workspace for automated trading, smart bots, and real-time market insights.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            to="/app/bot-builder"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start Trading Now <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            onClick={startDerivLogin}
            className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-3 text-sm font-semibold text-black hover:scale-105 transition-all duration-300"
          >
            Old Account Login
          </button>

          <button
            onClick={startDerivSignup}
            className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-8 py-3 text-sm font-semibold hover:scale-105 transition-all duration-300"
          >
            Sign Up
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <span className="inline-flex items-center gap-2">
            <Check className="h-4 w-4 text-cyan-400" />
            No Credit Card Required
          </span>

          <span className="inline-flex items-center gap-2">
            <Check className="h-4 w-4 text-cyan-400" />
            $10,000 Virtual Account
          </span>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            ['50K+', 'Active Traders'],
            ['$2.5B+', 'Volume Traded'],
            ['99.9%', 'Uptime'],
            ['150+', 'Markets'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center"
            >
              <div className="text-3xl font-bold text-cyan-400">{value}</div>
              <div className="mt-2 text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            Platform
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold">
            Powerful Features for Modern Traders
          </h2>

          <p className="mt-3 text-gray-400">
            Everything you need to succeed in today's fast-paced markets
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Bot,
              title: 'AI-Powered Trading Bots',
              desc: 'Deploy intelligent trading strategies with our advanced bot system.',
            },
            {
              icon: BarChart3,
              title: 'Real-Time Market Analysis',
              desc: 'Access professional-grade charts, indicators, and analytics.',
            },
            {
              icon: Users,
              title: 'Copy Trading Network',
              desc: 'Mirror successful traders automatically with transparent metrics.',
            },
            {
              icon: Shield,
              title: 'Risk Management Tools',
              desc: 'Advanced stop-loss, take-profit, and position sizing tools.',
            },
          ].map(feature => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-cyan-400" />
                </div>

                <h3 className="mt-5 text-2xl font-bold">{feature.title}</h3>

                <p className="mt-3 text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Transform Your Trading?
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Join thousands of traders who are already using Digittool to trade smarter and faster.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={startDerivLogin}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Login with Deriv <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={startDerivSignup}
              className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 text-base font-semibold text-black hover:scale-105 transition-all duration-300"
            >
              Create Free Account
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Digittool. Trading involves risk.
      </footer>
    </div>
  );
}

export default LandingPage;
