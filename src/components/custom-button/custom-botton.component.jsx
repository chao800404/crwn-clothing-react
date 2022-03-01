/** @format */

import React from "react";
import "./custom-botton.style.scss";

const CustomBotton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={` 
    ${inverted ? "inverted" : ""} 
    ${isGoogleSignIn ? "google-sign-in" : ""} 
    custom-button
    `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomBotton;
