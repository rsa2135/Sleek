import merge from 'lodash/merge';

import { ADD_PENDING_USER, REMOVE_PENDING_USER, CLEAR_LIST } from '../actions/pending_dms_actions';


const _defaultState = [];

const PendingDmsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case ADD_PENDING_USER:
      return [...oldState, action.user];

    case REMOVE_PENDING_USER:
      let newState = [];
      oldState.forEach(el => {
        if (el.id !== action.user.id) {
          newState.push(el);
        }
      });
      return newState;

    case CLEAR_LIST:
      return _defaultState;

    default:
      return oldState;
  }
};

export default PendingDmsReducer;
