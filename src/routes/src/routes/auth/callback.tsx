import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/auth/callback")({
  component: AuthCallback,
});

function AuthCallback() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const code = params.get("code");
    const state = params.get("state");
    const scope = params.get("scope");

    if (code) {
      // Save OAuth data
      localStorage.setItem("deriv_oauth_code", code);

      if (state) {
        localStorage.setItem("deriv_oauth_state", state);
      }

      if (scope) {
        localStorage.setItem("deriv_oauth_scope", scope);
      }

      // Redirect into your app
      window.location.replace("/app/dashboard");
    } else {
      // No code received
      window.location.replace("/");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0e1a] text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Connecting your Deriv account...
        </h2>

        <p className="text-white/70">
          Please wait while we complete your login.
        </p>
      </div>
    </div>
  );
}
