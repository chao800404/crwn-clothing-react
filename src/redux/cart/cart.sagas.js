/** @format */

import { call, takeLatest, all, put } from "redux-saga/effects";
import UserActionTypes from "../user/user.type";
import { clearCart } from "./cart.action";

export function* clearCartOnsignOut() {
  yield put(clearCart());
}

export function* onSingOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnsignOut);
}

export function* cartSagas() {
  yield all([call(onSingOutSuccess)]);
}
