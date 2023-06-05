import React from "react";
import LoginFormWithOAuth from "../../../forms/LoginFormWithOAuth";

// Logos
import ubitsLogo from "../../../assets/logos/ubits-logo.svg";
import googleLogo from "../../../assets/icons/google.svg";
import facebookLogo from "../../../assets/icons/facebook.svg";

// Images
import loginImage from "../../../assets/images/login-img.svg";

function LoginPage() {
  return (
    <div className="w-full min-h-screen flex">
      {/* Left part */}
      <div className="xl:w-1/2 min-h-screen bg-[#061727] lg:px-14 w-full px-0">
        {/* Company Logo */}
        <img
          src={ubitsLogo}
          alt="UBITS Logo"
          className="w-28 h-28 mx-auto"
          style={{ objectFit: "contain" }}
        />

        {/* Welcome message */}
        <h2 className="text-2xl text-white font-semibold text-center">
          WELCOME TO UBITS
        </h2>

        <LoginFormWithOAuth />
      </div>
      {/* Right part */}
      <div className="xl:min-h-screen xl:w-1/2 hidden xl:inline-block bg-gradient-to-br from-[#157bb2] to-[#0B001A]">
        <img src={loginImage} alt="UBITS" className="w-full h-full" />
      </div>
    </div>
  );
}

export default LoginPage;
