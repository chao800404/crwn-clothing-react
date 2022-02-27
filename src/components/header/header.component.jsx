/** @format */

import React from "react";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
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
    </ul>
  </header>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
