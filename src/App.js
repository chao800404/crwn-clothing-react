/** @format */
import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Hompage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.components";
import SignInAndSignUpPage from "./page/sign-in-sign-up/sign-in-sign-up.component";
import { getAuth, onAuthStateChanged } from "firebase/auth";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const auth = getAuth();
    this.unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Hompage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
