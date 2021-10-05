import axios from "axios";
import {
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_FAIL,
  AUTH_START,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,

} from '../types/authTypes';
import { returnErrors } from './messages';
import {loginURL} from '../constants';



export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const authSuccess = user => {
  return {
    type: AUTH_SUCCESS,
    user
  };
};

export const authFail = error => {
  return {
    type: AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem("user");
  return {
    type: AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post(loginURL, {
        email: email,
        password: password
      })
      .then(res => {
        console.log(res.data)
        const user = {
          token: res.data.token,
          email,
          userRole: res.data.user.type,
          userID: res.data.user.id,
          userName: res.data.user.username,
          expirationDate: new Date(new Date().getTime() + 3600 * 1000)
        };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(authSuccess(user));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch(authFail(err));
      });
  };
};


export const authCheckState = () => {
  return dispatch => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === undefined || user === null) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(user.expirationDate);
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(user));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};


// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};

// CHECK TOKEN & LOAD USER
// export const loadUser = (token, email) => (dispatch, getState) => {
//   // User Loading
//   dispatch({ type: USER_LOADING });
//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: `Token ${token}`
//   };
//   axios
//     .get(`http://127.0.0.1:8000/api/people/user/?email=${email}`, headers)
//     .then((res) => {
//       dispatch({
//         type: USER_LOADED,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch(returnErrors(err.response.data, err.response.status));
//       dispatch({
//         type: AUTH_ERROR,
//       });
//     });
// };
