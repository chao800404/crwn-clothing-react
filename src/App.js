/** @format */
import React, { useEffect, lazy, Suspense, StrictMode } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/header/header.component";
import Spinner from "./components/with-spinner/spinner.component";

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global.styles";
import ErrorBoundary from "./components/errorBoundary/errorBoundary.component";

const Hompage = lazy(() => import("./page/homepage/homepage.component"));
const ShopPage = lazy(() => import("./page/shop/shop.components"));
const SignInAndSignUpPage = lazy(() =>
  import("./page/sign-in-sign-up/sign-in-sign-up.component")
);
const CheckoutPage = lazy(() => import("./page/checkout/checkout.components"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />

      <StrictMode>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={Hompage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </StrictMode>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
