import merge from 'lodash/merge';

import { RECEIVE_ALL_CHANNELS, REMOVE_CHANNEL, RECEIVE_CHANNEL } from '../actions/channel_actions';


const _defaultState = {};

const ChannelReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return action.channels;

    case RECEIVE_CHANNEL:
      return merge({}, oldState, {[action.channel.id]: action.channel});

    case REMOVE_CHANNEL:
      let newState = merge({}, oldState);
      delete newState[action.channel.id];
      return newState;

    default:
      return oldState;
  }
};

export default ChannelReducer;
