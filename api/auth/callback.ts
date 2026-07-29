import type { VercelRequest, VercelResponse } from "@vercel/node";

const APP_ID = "33Vxdb9YF1exXgyW3vms1";
const CLIENT_SECRET = process.env.pat_5907d7ea5dd518319b00b74ff885e9d1c828d2be673b06528305a2e818417f4b!;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(400).json({
        error: "Missing authorization code",
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
          code,
          app_id: APP_ID,
          client_secret: CLIENT_SECRET,
          redirect_uri: "https://www.digittoolderiv.site/auth/callback",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(400).json(data);
    }

    return res.redirect(
      `https://www.digittoolderiv.site/app/dashboard?access_token=${data.access_token}`
    );
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "OAuth exchange failed",
    });
  }
}
