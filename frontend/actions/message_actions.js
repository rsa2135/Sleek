import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export const receiveAllMessages = (messages) => {
  return {
    type: RECEIVE_ALL_MESSAGES,
    messages
  };
};

export const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

export const removeMessage = (message) => {
  return {
    type: REMOVE_MESSAGE,
    message
  };
};

export const fetchMessages = (channel_id) => {
  return (dispatch) => {
    return MessageApiUtil.fetchMessages(channel_id)
      .then(messages => dispatch(receiveAllMessages(messages)));
  };
};

export const fetchMessage = (id) => {
  return (dispatch) => {
    return MessageApiUtil.fetchMessage(id)
      .then(message => dispatch(receiveMessage(message)));
  };
};

export const createMessage = (message) => {
  return (dispatch) => {
    return MessageApiUtil.createMessage(message)
      .then(message => dispatch(receiveMessage(message)));
  };
};

export const updateMessage = (message) => {
  return (dispatch) => {
    return MessageApiUtil.updateMessage(message)
      .then(message => dispatch(receiveMessage(message)));
  };
};

export const deleteMessage = (id) => {
  return (dispatch) => {
    return MessageApiUtil.deleteMessage(id)
      .then(message => dispatch(removeMessage(message)));
  };
};
