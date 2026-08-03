import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/auth/callback')({
  component: CallbackPage,
});

function CallbackPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const code = params.get('code');
    const state = params.get('state');
    const savedState = sessionStorage.getItem('oauth_state');

    // Security check
    if (!code || state !== savedState) {
      window.location.href = '/';
      return;
    }

    // Save authorization code
    localStorage.setItem('deriv_auth_code', code);

    // Clear temporary session data
    sessionStorage.removeItem('oauth_state');

    // Redirect to dashboard
    window.location.href = '/app/dashboard';
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0a0e1a',
        color: 'white',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            width: 44,
            height: 44,
            border: '3px solid #22d3ee',
            borderTopColor: 'transparent',
            borderRadius: '9999px',
            margin: '0 auto 16px',
            animation: 'spin 1s linear infinite',
          }}
        />
        <div style={{ fontSize: 18, fontWeight: 600 }}>
          Signing you in to Digittool...
        </div>
        <div style={{ marginTop: 8, color: '#94a3b8', fontSize: 14 }}>
          Connecting your Deriv account
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
