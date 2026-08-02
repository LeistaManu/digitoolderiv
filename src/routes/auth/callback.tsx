import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/auth/callback")({
  component: Callback,
});

function Callback() {
  useEffect(() => {
    async function completeLogin() {
      try {
        const params = new URLSearchParams(window.location.search);

        const code = params.get("code");
        const state = params.get("state");
        const error = params.get("error");

        if (error) {
          console.error("Deriv OAuth error:", error);
          alert(`Login failed: ${error}`);
          return;
        }

        if (!code) {
          alert("Login failed: authorization code is missing.");
          return;
        }

        const savedState = sessionStorage.getItem("oauth_state");

        if (!state || state !== savedState) {
          alert("Login failed: invalid OAuth state.");
          return;
        }

        const verifier =
          sessionStorage.getItem("pkce_verifier");

        if (!verifier) {
          alert("Login failed: PKCE verifier is missing.");
          return;
        }

        const response = await fetch("/api/auth/callback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code,
            verifier,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          console.error("Token exchange failed:", data);

          alert(
            data?.error ||
              "Login failed while exchanging the authorization code."
          );

          return;
        }

        sessionStorage.removeItem("pkce_verifier");
        sessionStorage.removeItem("oauth_state");

        if (!data.access_token) {
          console.error("No access token returned:", data);

          alert("Login failed: no access token was returned.");

          return;
        }

        localStorage.setItem(
          "deriv_token",
          data.access_token
        );

        window.location.replace("/app/dashboard");
      } catch (error) {
        console.error("Login callback error:", error);

        alert("Login failed. Please try again.");
      }
    }

    completeLogin();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0e1a] text-white">
      <div className="text-center">
        <h2 className="text-xl font-semibold">
          Signing you in...
        </h2>

        <p className="mt-2 text-sm text-white/50">
          Please wait while we connect your Deriv account.
        </p>
      </div>
    </div>
  );
}
