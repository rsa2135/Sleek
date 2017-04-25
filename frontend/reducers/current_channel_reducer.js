import merge from 'lodash/merge';

import { RECEIVE_CHANNEL } from '../actions/channel_actions';


const _defaultState = {};

const CurrentChannelReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return action.channel;

    default:
      return oldState;
  }
};

export default CurrentChannelReducer;
