import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/auth/callback")({
  component: CallbackPage,
});

function CallbackPage() {
  const [message, setMessage] = useState("Signing you in...");

  useEffect(() => {
    const completeLogin = async () => {
      try {
        const params = new URLSearchParams(window.location.search);

        const code = params.get("code");
        const state = params.get("state");
        const error = params.get("error");

        if (error) {
          throw new Error(error);
        }

        if (!code) {
          throw new Error("Authorization code missing.");
        }

        const storedState = sessionStorage.getItem("oauth_state");

        if (!storedState || storedState !== state) {
          throw new Error("Invalid OAuth state.");
        }

        const codeVerifier =
          sessionStorage.getItem("pkce_code_verifier");

        if (!codeVerifier) {
          throw new Error("Missing PKCE code verifier.");
        }

        setMessage("Completing login...");

        const response = await fetch("/api/auth/deriv", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code,
            codeVerifier,
          }),
        });

        if (!response.ok) {
          throw new Error("Token exchange failed.");
        }

        const data = await response.json();

        localStorage.setItem("deriv_access_token", data.access_token);

        sessionStorage.removeItem("oauth_state");
        sessionStorage.removeItem("pkce_code_verifier");

        window.location.replace("/app/dashboard");
      } catch (err: any) {
        console.error(err);
        setMessage(err.message || "Login failed.");
      }
    };

    completeLogin();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-[#0a0e1a]">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">
          Deriv Login
        </h1>

        <p>{message}</p>
      </div>
    </div>
  );
}
