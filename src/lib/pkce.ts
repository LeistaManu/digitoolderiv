function base64UrlEncode(buffer: ArrayBuffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function generatePKCE() {
  const random = crypto.getRandomValues(new Uint8Array(64));

  const verifier = Array.from(random)
    .map(
      x =>
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"[x % 66]
    )
    .join("");

  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(verifier)
  );

  const challenge = base64UrlEncode(hash);

  const state = crypto.randomUUID();

  sessionStorage.setItem("pkce_verifier", verifier);
  sessionStorage.setItem("oauth_state", state);

  return {
    verifier,
    challenge,
    state,
  };
}
