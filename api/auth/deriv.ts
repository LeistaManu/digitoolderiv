import type { VercelRequest, VercelResponse } from "@vercel/node";

const CLIENT_ID = "340fKqgQxBtyfOpYwkRmA";
const REDIRECT_URI =
  "https://digitoolderiv.vercel.app/auth/callback";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { code, codeVerifier } = req.body;

    if (!code) {
      return res.status(400).json({
        error: "Missing authorization code",
      });
    }

    if (!codeVerifier) {
      return res.status(400).json({
        error: "Missing PKCE code verifier",
      });
    }

    const body = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      code,
      code_verifier: codeVerifier,
      redirect_uri: REDIRECT_URI,
    });

    console.log("Exchanging authorization code...");

    const derivResponse = await fetch(
      "https://auth.deriv.com/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      }
    );

    const data = await derivResponse.json();

    console.log("Deriv Response:", data);

    if (!derivResponse.ok) {
      return res.status(derivResponse.status).json({
        success: false,
        deriv: data,
      });
    }

    return res.status(200).json({
      success: true,
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_in: data.expires_in,
      token_type: data.token_type,
    });
  } catch (err) {
    console.error("OAuth Error:", err);

    return res.status(500).json({
      success: false,
      error:
        err instanceof Error ? err.message : "Unknown server error",
    });
  }
}
