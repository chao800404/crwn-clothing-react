/** @format */

import React from "react";
import "./cart-dropdowns.style.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import CustomBotton from "../custom-button/custom-botton.component";
import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
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
};

export default CartDropdown;
