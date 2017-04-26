import merge from 'lodash/merge';

import { RECEIVE_ALL_USERS, RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';


const _defaultState = {};

const UserReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;

    case RECEIVE_USER:
    debugger
      return merge({}, oldState, {[action.user.id]: action.user});

    case REMOVE_USER:
      let newState = merge({}, oldState);
      delete newState[action.user.id];
      return newState;

    default:
      return oldState;
  }
};

export default UserReducer;
