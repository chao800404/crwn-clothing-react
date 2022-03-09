/** @format */

import React, { useState } from "react";
import "./sign-up.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomBotton from "../custom-button/custom-botton.component";
import { connect } from "react-redux";
import { singUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpUser }) => {
  const [userCredentails, setUserCredentails] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentails;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match!");
      return;
    }
    signUpUser({ displayName, email, password, confirmPassword });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentails({ ...userCredentails, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="DisplayName"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomBotton type="submit">SIGN UP</CustomBotton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpUser: (data) => dispatch(singUpStart(data)),
});

export default connect(null, mapDispatchToProps)(SignUp);
