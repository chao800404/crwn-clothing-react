/** @format */

import React from "react";
import "./cart-dropdowns.style.scss";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";
import CustomBotton from "../custom-button/custom-botton.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomBotton>CHECKOUT </CustomBotton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
