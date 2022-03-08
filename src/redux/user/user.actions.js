/** @format */
import UserActionTypes from "./user.type";

export const googleSingInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const SingInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const SingInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSingInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const singOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const singOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const singOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const singUpStart = (data) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: data,
});

export const singUpSuccess = (data) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: data,
});

export const singUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILUER,
  payload: error,
});
