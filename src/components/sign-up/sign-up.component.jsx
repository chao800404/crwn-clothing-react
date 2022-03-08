/** @format */

import React from "react";
import "./sign-up.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomBotton from "../custom-button/custom-botton.component";
import { createUserProfileDocument } from "../../firebase/firebase.utils";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { connect } from "react-redux";
import { singUpStart } from "../../redux/user/user.actions";
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpUser } = this.props;
    if (password !== confirmPassword) {
      alert("password do not match!");
      return;
    }
    signUpUser({ displayName, email, password, confirmPassword });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="DisplayName"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomBotton type="submit">SIGN UP</CustomBotton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpUser: (data) => dispatch(singUpStart(data)),
});

export default connect(null, mapDispatchToProps)(SignUp);
