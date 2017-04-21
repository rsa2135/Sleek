import React from 'react';
import MessageIndexContainer from './message/message_index_container'

const Chat = ({ children }) => (
  <div className="chat_container">
    <MessageIndexContainer />
  </div>
);

export default Chat;
