import * as APIUtil from '../util/session_api_util';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
})

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const signup = user => dispatch => APIUtil.signup(user)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const login = user => dispatch => APIUtil.login(user)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const logout = () => dispatch => APIUtil.logout()
  .then(user => dispatch(logoutCurrentUser()))

export const clearErrors = () => dispatch => dispatch(removeErrors())