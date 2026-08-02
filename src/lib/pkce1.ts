// src/utils/pkce.ts

function base64UrlEncode(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function generatePKCE() {
  const random = crypto.getRandomValues(new Uint8Array(64));

  const verifier = Array.from(random)
    .map(
      x =>
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'[x % 66]
    )
    .join('');

  const hash = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(verifier)
  );

  const challenge = base64UrlEncode(hash);
  const state = crypto.randomUUID();

  sessionStorage.setItem('pkce_verifier', verifier);
  sessionStorage.setItem('oauth_state', state);

  return { verifier, challenge, state };
}

export async function getDerivAuthUrl() {
  const { challenge, state } = await generatePKCE();

  const APP_ID = '340fKqgQxBtyfOpYwkRmA';
  const REDIRECT_URI = window.location.origin + '/callback';

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: APP_ID,
    redirect_uri: REDIRECT_URI,
    code_challenge: challenge,
    code_challenge_method: 'S256',
    state,
    scope: 'trade',
  });

  return `https://oauth.deriv.com/oauth2/authorize?${params.toString()}`;
}

export async function loginWithDeriv() {
  const url = await getDerivAuthUrl();
  window.location.href = url;
}
