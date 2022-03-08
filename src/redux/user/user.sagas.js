/** @format */

import { takeLatest, call, put, all } from "redux-saga/effects";
import UserActionTypes from "./user.type";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  googleProviders,
  createUserProfileDocument,
  auth,
  getCurrentUser,
  signOuts,
  signUpUser,
} from "../../firebase/firebase.utils";
import {
  SingInSuccess,
  SingInFailure,
  singOutSuccess,
  singOutFailure,
  singUpSuccess,
  singUpFailure,
} from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield auth.currentUser;
    yield put(SingInSuccess({ id: userSnapshot.uid, ...userSnapshot }));
  } catch (error) {
    console.log(error);
    yield put(SingInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield googleProviders();
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    console.log(error);
    yield put(SingInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(auth, email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(SingInFailure(error));
  }
}

export function* onUserAuth() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    yield createUserProfileDocument(user);
  } catch (error) {
    yield put(SingInFailure(error));
  }
}

export function* singOut() {
  try {
    yield signOuts();
    yield put(singOutSuccess());
  } catch (error) {
    yield put(singOutFailure(error));
  }
}

export function* signUpSuccess({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield signUpUser(email, password);
    yield put(singUpSuccess({ displayName, email, password }));
    yield createUserProfileDocument(user, { displayName });
  } catch (error) {
    yield put(singUpFailure(error));
  }
}

export function* singInAfterSignUp({
  payload: { displayName, email, password },
}) {
  yield signInWithEmail({ payload: { displayName, email, password } });
}

export function* onGoogleSignInStar() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, onUserAuth);
}

export function* onSingOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, singOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpSuccess);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, singInAfterSignUp);
}

export function* userSaga() {
  yield all([
    call(onGoogleSignInStar),
    call(onEmailSignInStart),
    call(onUserAuth),
    call(onSingOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
