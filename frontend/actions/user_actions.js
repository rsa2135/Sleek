import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const removeUser = (user) => {
  return {
    type: REMOVE_USER,
    user
  };
};



export const fetchUsers = () => {
  return (dispatch) => {
    return UserApiUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)));
  };
};

export const fetchUser = (id) => {
  return (dispatch) => {
    return UserApiUtil.fetchUser(id)
      .then(user => dispatch(receiveUser(user)));
  };
};
