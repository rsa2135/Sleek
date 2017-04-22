import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

export const receiveAllChannels = (channels) => {
  return {
    type: RECEIVE_ALL_CHANNELS,
    channels
  };
};

export const receiveChannel = (channel) => {
  return {
    type: RECEIVE_CHANNEL,
    channel
  };
};

export const removeChannel = (channel) => {
  return {
    type: RECEIVE_ALL_CHANNELS,
    channel
  };
};

export const fetchChannels = () => {
  return (dispatch) => {
    return ChannelApiUtil.fetchChannels()
      .then(channels => dispatch(receiveAllChannels(channels)));
  };
};

export const fetchChannel = (id) => {
  return (dispatch) => {
    return ChannelApiUtil.fetchChannel(id)
      .then(channel => dispatch(receiveChannel(channel)));
  };
};

export const createChannel = (channel) => {
  return (dispatch) => {
    return ChannelApiUtil.createChannel(channel)
      .then(channel => dispatch(receiveChannel(channel)));
  };
};

export const updateChannel = (channel) => {
  return (dispatch) => {
    return ChannelApiUtil.updateChannel(channel)
      .then(channel => dispatch(receiveChannel(channel)));
  };
};

export const deleteChannel = (id) => {
  return (dispatch) => {
    return ChannelApiUtil.deleteChannel(id)
      .then(channel => dispatch(removeChannel(channel)));
  };
};
