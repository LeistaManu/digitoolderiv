// src/utils/pkce.ts

function base64UrlEncode(buffer: ArrayBuffer): string {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function generatePKCE() {
  // Generate code verifier
  const random = crypto.getRandomValues(new Uint8Array(64));

  const verifier = Array.from(random)
    .map(
      (x) =>
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"[
          x % 66
        ]
    )
    .join("");

  // Generate code challenge
  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(verifier)
  );

  const challenge = base64UrlEncode(hash);

  // Generate random state
  const state = crypto.randomUUID();

  // Save for callback
  sessionStorage.setItem("pkce_verifier", verifier);
  sessionStorage.setItem("oauth_state", state);

  return {
    verifier,
    challenge,
    state,
  };
}

export async function loginWithDeriv() {
  try {
    const { challenge, state } = await generatePKCE();

    const params = new URLSearchParams({
      response_type: "code",
      client_id: "340fKqgQxBtyfOpYwkRmA",
      redirect_uri: `${window.location.origin}/auth/callback`,
      scope: "trade account_manage application_read payment",
      state,
      code_challenge: challenge,
      code_challenge_method: "S256",
    });

    const url = `https://auth.deriv.com/oauth2/auth?${params.toString()}`;

    console.log("Redirecting to:", url);

    window.location.href = url;
  } catch (error) {
    console.error("Deriv OAuth Error:", error);
    alert("Unable to start Deriv login.");
  }
}
