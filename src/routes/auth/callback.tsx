import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/auth/callback")({
  component: CallbackPage,
});

function CallbackPage() {
  const [message, setMessage] = useState("Signing you in...");

  useEffect(() => {
    async function finishLogin() {
      try {
        const params = new URLSearchParams(window.location.search);

        const code = params.get("code");
        const state = params.get("state");
        const error = params.get("error");
        const errorDescription = params.get("error_description");

        if (error) {
          throw new Error(errorDescription || error);
        }

        if (!code) {
          throw new Error("Missing authorization code.");
        }

        const savedState = sessionStorage.getItem("oauth_state");

        if (!savedState || savedState !== state) {
          throw new Error("OAuth state verification failed.");
        }

        const codeVerifier = sessionStorage.getItem("pkce_verifier");

        if (!codeVerifier) {
          throw new Error("Missing PKCE code verifier.");
        }

        setMessage("Exchanging authorization code...");

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
          const text = await response.text();
          throw new Error(text || "Token exchange failed.");
        }

        const data = await response.json();

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

        sessionStorage.removeItem("oauth_state");
        sessionStorage.removeItem("pkce_verifier");

        window.location.replace("/app/dashboard");
      } catch (err) {
        console.error(err);

        setMessage(
          err instanceof Error ? err.message : "Login failed."
        );
      }
    }

    finishLogin();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0e1a",
        color: "white",
        display: "grid",
        placeItems: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: 44,
            height: 44,
            border: "3px solid #22d3ee",
            borderTopColor: "transparent",
            borderRadius: "9999px",
            margin: "0 auto 16px",
            animation: "spin 1s linear infinite",
          }}
        />

        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          {message}
        </div>

        <div
          style={{
            marginTop: 8,
            color: "#94a3b8",
            fontSize: 14,
          }}
        >
          Connecting your Deriv account...
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
