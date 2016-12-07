export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as APIUtil from '../util/session_api_util';


export function login(user) {
  return (dispatch) => {
    return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)));
  }
}

export function logout() {
  return (dispatch) => {
    return APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)));
  }
}

export function signup(user) {
  return (dispatch) => {
    return APIUtil.signup(user)
      .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)));
  }
}

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
