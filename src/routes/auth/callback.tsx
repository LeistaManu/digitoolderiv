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

        // Verify state
        const storedState = sessionStorage.getItem("oauth_state");

        if (!storedState || storedState !== state) {
          throw new Error("Invalid OAuth state.");
        }

        // Get PKCE verifier
        const codeVerifier = sessionStorage.getItem("pkce_verifier");

        if (!codeVerifier) {
          throw new Error("Missing PKCE code verifier.");
        }

        setMessage("Completing login...");

        // Exchange authorization code for access token
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

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Token exchange failed.");
        }

        // Save token
        localStorage.setItem(
          "deriv_access_token",
          data.access_token
        );

        if (data.refresh_token) {
          localStorage.setItem(
            "deriv_refresh_token",
            data.refresh_token
          );
        }

        // Clean up
        sessionStorage.removeItem("oauth_state");
        sessionStorage.removeItem("pkce_verifier");

        setMessage("Login successful!");

        // Redirect to dashboard
        window.location.replace("/app/dashboard");
      } catch (err: any) {
        console.error(err);
        setMessage(err.message || "Login failed.");
      }
    };

    completeLogin();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0e1a] text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">
          Deriv Login
        </h1>

        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
}
