import merge from 'lodash/merge';

import { RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE, REMOVE_MESSAGE } from '../actions/message_actions';


const _defaultState = {};

const MessageReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.messages;

    case RECEIVE_MESSAGE:
      return merge({}, oldState, {[action.message.id]: action.message});

    case REMOVE_MESSAGE:
      const newState = merge({}, oldState);
      delete newState[action.message.id];
      return newState;

    default:
      return oldState;
  }
};

export default MessageReducer;
