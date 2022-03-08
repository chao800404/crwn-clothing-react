/** @format */

import { all, call } from "redux-saga/effects";
import { shopSagas } from "./shop/shop.sagas";
import { userSaga } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSaga), call(cartSagas)]);
}
