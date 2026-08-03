const CLIENT_ID = '340fKqgQxBtyfOpYwkRmA';
const REDIRECT_URI = 'https://www.digittoolderiv.site/auth/callback';

function base64UrlEncode(buffer: ArrayBuffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function loginWithDeriv() {
  const random = crypto.getRandomValues(new Uint8Array(64));

  const verifier = Array.from(random)
    .map(v =>
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'[v % 66]
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

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    code_challenge: challenge,
    code_challenge_method: 'S256',
    state,
  });

  window.location.href =
    `https://oauth.deriv.com/oauth2/authorize?${params.toString()}`;
}
