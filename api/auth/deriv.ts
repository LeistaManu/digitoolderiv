import type { VercelRequest, VercelResponse } from "@vercel/node";

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

    if (!code || !codeVerifier) {
      return res.status(400).json({
        error: "Missing code or codeVerifier",
      });
    }

    const params = new URLSearchParams();

    params.append("grant_type", "authorization_code");
    params.append("client_id", "340fKqgQxBtyfOpYwkRmA");
    params.append("code", code);
    params.append("code_verifier", codeVerifier);
    params.append(
      "redirect_uri",
      "https://digitoolderiv.vercel.app/auth/callback"
    );

    const response = await fetch(
      "https://auth.deriv.com/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
