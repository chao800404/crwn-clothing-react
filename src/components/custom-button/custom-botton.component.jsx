/** @format */

import React from "react";
import "./custom-botton.style.scss";
import { CustomButtonContainer } from "./custom-button.styles";

const CustomBotton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);

export default CustomBotton;
