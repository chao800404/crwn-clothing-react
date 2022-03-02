/** @format */

import React from "react";
import "./cart-dropdowns.style.scss";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";
import CustomBotton from "../custom-button/custom-botton.component";
import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message"> Your cart is emty</span>
      )}
    </div>
    <CustomBotton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      CHECKOUT
    </CustomBotton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
