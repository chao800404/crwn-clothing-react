/** @format */

import React from "react";
import "./cart-dropdowns.style.scss";

import CustomBotton from "../custom-button/custom-botton.component";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomBotton>CHECKOUT </CustomBotton>
  </div>
);

export default CartDropdown;
