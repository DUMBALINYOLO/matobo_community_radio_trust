
import { updateObject } from "../utility";
import {
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_FAIL,
  AUTH_START,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,

} from '../types/authTypes';




const initialState = {
  token: null,
  email: null,
  userRole: null,
  userName: null,
  error: null,
  loading: false,
  user: null,
  isAuthenticated:null,
  isLoading: null,
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};


const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.user.token,
    email: action.user.email,
    userRole: action.user.userRole,
    userName: action.user.userName,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action);
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    case AUTH_FAIL:
      return authFail(state, action);
    case AUTH_LOGOUT:
      return authLogout(state, action);
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
