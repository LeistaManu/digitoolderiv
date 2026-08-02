import { useEffect } from 'react';

export default function Callback() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');

    if (code) {
      localStorage.setItem('deriv_code', code);

      // Redirect to your app/dashboard
      window.location.href = '/app';
    }
  }, []);

  return <div style={{ padding: 40, color: 'white' }}>Signing you in...</div>;
}
