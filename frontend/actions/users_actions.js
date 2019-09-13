import * as APIUsers from '../util/users_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const receiveUser = userId => ({
  type: RECEIVE_USER,
  userId
})

export const fetchUsers = () => dispatch => APIUsers.fetchUsers()
  .then(users => dispatch(receiveUsers(users)))

export const fetchUser = user => dispatch => APIUsers.fetchUser(user)
  .then(user => dispatch(receiveUser(user)))