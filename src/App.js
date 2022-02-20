/** @format */
import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Hompage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.components";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Hompage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
