import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/auth/callback")({
  component: CallbackPage,
});

function CallbackPage() {
  const [message, setMessage] = useState("Signing you in...");

  useEffect(() => {
    async function completeLogin() {
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
          throw new Error("Authorization code missing.");
        }

        const savedState = sessionStorage.getItem("oauth_state");

        if (!savedState) {
          throw new Error("OAuth state not found.");
        }

        if (savedState !== state) {
          throw new Error("Invalid OAuth state.");
        }

        const codeVerifier = sessionStorage.getItem("pkce_verifier");

        if (!codeVerifier) {
          throw new Error("PKCE verifier missing.");
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

        const data = await response.json();

        console.log("Backend response:", data);

        if (!response.ok) {
          throw new Error(
            data.error_description ||
              data.error ||
              JSON.stringify(data)
          );
        }

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

        setMessage("Success! Redirecting...");

        window.location.replace("/app/dashboard");
      } catch (err) {
        console.error(err);

        if (err instanceof Error) {
          setMessage(err.message);
        } else {
          setMessage("Login failed.");
        }
      }
    }

    completeLogin();
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
      <div style={{ textAlign: "center", maxWidth: 600 }}>
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

        <h2
          style={{
            fontSize: 22,
            marginBottom: 10,
          }}
        >
          Deriv Login
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            wordBreak: "break-word",
          }}
        >
          {message}
        </p>
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
