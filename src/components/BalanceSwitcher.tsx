import { useEffect, useState } from 'react';

type DerivAccount = {
  loginid: string;
  currency: string;
  balance: number;
  is_demo: boolean;
};

export default function BalanceSwitcher() {
  const [accounts, setAccounts] = useState<DerivAccount[]>([]);
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    // Connect to Deriv WebSocket
    const ws = new WebSocket('wss://ws.derivws.com/websockets/v3?app_id=1089');

    ws.onopen = () => {
      // Replace this later with your real access token
      const token = localStorage.getItem('deriv_token');

      if (token) {
        ws.send(JSON.stringify({ authorize: token }));
      }
    };

    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);

      if (data.authorize) {
        const accs = data.authorize.account_list.map((a: any) => ({
          loginid: a.loginid,
          currency: a.currency,
          balance: a.balance,
          is_demo: a.loginid.startsWith('VRTC'),
        }));

        setAccounts(accs);
        setSelected(accs[0]?.loginid || '');
      }
    };

    return () => ws.close();
  }, []);

  const current = accounts.find(a => a.loginid === selected);

  return (
    <div className="flex items-center gap-3">
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="bg-[#111827] border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
      >
        {accounts.map(acc => (
          <option key={acc.loginid} value={acc.loginid}>
            {acc.is_demo ? 'Demo' : 'Real'} • {acc.currency}
          </option>
        ))}
      </select>

      <div className="rounded-lg bg-[#111827] border border-white/10 px-4 py-2">
        <div className="text-xs text-white/50">
          {current?.is_demo ? 'Demo Balance' : 'Real Balance'}
        </div>

        <div className="text-lg font-bold text-white">
          {current?.currency} {current?.balance?.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
