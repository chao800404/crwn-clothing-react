/** @format */

import React from "react";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdowns/cart-dropdowns.component";

const Header = ({ currentUser, hidden }) => (
  <header className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <ul className="options">
      <li>
        {" "}
        <Link className="option" to="/shop">
          SHOP
        </Link>
      </li>

      <li>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </li>
      <li>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              const auth = getAuth();
              signOut(auth);
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
            {console.log(currentUser)}
          </Link>
        )}
      </li>
      <CartIcon />
    </ul>
    {hidden ? null : <CartDropdown />}
  </header>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
