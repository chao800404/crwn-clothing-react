/** @format */
import UserActionTypes from "./user.type";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        currentUser: null,
        errorMessage: null,
      };

    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILUER:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
