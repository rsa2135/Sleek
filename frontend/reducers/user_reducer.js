import merge from 'lodash/merge';

import { RECEIVE_ALL_USERS, RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';


const _defaultState = {};

const UserReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      // newState = action.users;
      // delete newState[currentUser.id];
      // return newState;
      return action.users;

    case RECEIVE_USER:

      return merge({}, oldState, {[action.user.id]: action.user});

    case REMOVE_USER:
      newState = merge({}, oldState);
      delete newState[action.user.id];
      return newState;

    default:
      return oldState;
  }
};

export default UserReducer;
