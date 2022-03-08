/** @format */

import React from "react";
import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomBotton from "../custom-button/custom-botton.component";
import { connect } from "react-redux";
import {
  googleSingInStart,
  emailSingInStart,
} from "../../redux/user/user.actions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
    // this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already hava an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            // onChange={this.handleChange}
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            required
            label="email"
          />

          <FormInput
            handleChange={this.handleChange}
            // onChange={this.handleChange}
            id="password"
            name="password"
            type="password"
            value={this.state.password}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSingInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSingInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
