import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {

  if(req.method!=="POST"){

    return res.status(405).end();

  }

  const {code,verifier}=req.body;

  const body=new URLSearchParams({

    grant_type:"authorization_code",

    client_id:"33Vxdb9YF1exXgyW3vms1",

    code,

    code_verifier:verifier,

    redirect_uri:"https://www.digittoolderiv.site/auth/callback"

  });

  const response=await fetch(

    "https://auth.deriv.com/oauth2/token",

    {

      method:"POST",

      headers:{

        "Content-Type":"application/x-www-form-urlencoded"

      },

      body

    }

  );

  const data=await response.json();

  if(!response.ok){

    return res.status(400).json(data);

  }

  return res.json({

    access_token:data.access_token,

    expires_in:data.expires_in,

    token_type:data.token_type

  });

}
