import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleAuth = () => {
  return (
    <GoogleOAuthProvider clientId="1061189201360-q6ti0g1rnt6spndtq1kaslkqrknkaffr.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      ;
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
