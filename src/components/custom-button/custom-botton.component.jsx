/** @format */

import React from "react";
import "./custom-botton.style.scss";

const CustomBotton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomBotton;
