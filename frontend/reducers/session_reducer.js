import merge from 'lodash/merge';

import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';


const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {currentUser});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {errors});
    default:
      return oldState;
  }
};

export default SessionReducer;
