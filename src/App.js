/** @format */
import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/header/header.component";
import Hompage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.components";
import SignInAndSignUpPage from "./page/sign-in-sign-up/sign-in-sign-up.component";
import CheckoutPage from "./page/checkout/checkout.components";

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
    //   const auth = getAuth();
    //   this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
    //     if (userAuth) {
    //       const userRef = await createUserProfileDocument(userAuth);
    //       onSnapshot(userRef, (snapshot) => {
    //         setCurrentUser({
    //           id: snapshot.id,
    //           ...snapshot.data(),
    //         });
    //       });
    //     } else setCurrentUser(userAuth);
    //   });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Hompage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
