import type { VercelRequest, VercelResponse } from "@vercel/node";

const APP_ID = "33Vxdb9YF1exXgyW3vms1";
const REDIRECT_URI =
  "https://www.digittoolderiv.site/auth/callback";

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
    const { code, verifier } = req.body;

    if (!code) {
      return res.status(400).json({
        error: "Missing authorization code",
      });
    }

    if (!verifier) {
      return res.status(400).json({
        error: "Missing PKCE verifier",
      });
    }

    const response = await fetch(
      "https://api.deriv.com/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          grant_type: "authorization_code",
          client_id: APP_ID,
          code,
          redirect_uri: REDIRECT_URI,
          code_verifier: verifier,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Deriv OAuth error:", data);

      return res.status(response.status).json({
        error: "Deriv OAuth token exchange failed",
        details: data,
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("OAuth callback error:", error);

    return res.status(500).json({
      error: "OAuth exchange failed",
    });
  }
}
