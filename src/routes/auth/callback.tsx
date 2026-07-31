import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/auth/callback")({
  component: Callback,
});

function Callback() {

  useEffect(() => {

    const params=new URLSearchParams(window.location.search);

    const code=params.get("code");

    const state=params.get("state");

    const savedState=sessionStorage.getItem("oauth_state");

    if(state!==savedState){

      alert("Invalid State");

      return;

    }

    const verifier=sessionStorage.getItem("pkce_verifier");

    fetch("/api/auth/callback",{

      method:"POST",

      headers:{

        "Content-Type":"application/json"

      },

      body:JSON.stringify({

        code,

        verifier

      })

    })
    .then(r=>r.json())
    .then(data=>{

      sessionStorage.removeItem("pkce_verifier");
      sessionStorage.removeItem("oauth_state");

      if(data.access_token){

        localStorage.setItem("deriv_token",data.access_token);

        window.location.href="/app/dashboard";

      }else{

        alert("Login failed");

      }

    });

  },[]);

  return <h2>Signing you in...</h2>;

}
