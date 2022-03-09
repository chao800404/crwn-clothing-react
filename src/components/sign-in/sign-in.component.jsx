/** @format */

import React, { useState } from "react";
import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomBotton from "../custom-button/custom-botton.component";
import { connect } from "react-redux";
import {
  googleSingInStart,
  emailSingInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
    // this.setState({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already hava an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          // onChange={this.handleChange}
          id="email"
          name="email"
          type="email"
          value={email}
          required
          label="email"
        />

        <FormInput
          handleChange={handleChange}
          // onChange={this.handleChange}
          id="password"
          name="password"
          type="password"
          value={password}
          required
          label="password"
        />

        <div className="buttons">
          <CustomBotton type="submit">SIGN IN</CustomBotton>
          <CustomBotton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            SIGN IN WITH GOOGLE
          </CustomBotton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSingInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSingInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
