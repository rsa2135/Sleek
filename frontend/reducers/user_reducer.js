import merge from 'lodash/merge';

import { RECEIVE_ALL_USERS, RECIEVE_USER } from '../actions/user_actions';


const _defaultState = {};

const UserReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
    debugger
      return action.users;

    case RECIEVE_USER:
      return merge({}, oldState, {[action.user.id]: action.user});

    default:
      return oldState;
  }
};

export default UserReducer;
