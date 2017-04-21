import React from 'react';
import MessageIndexContainer from './message/message_index_container'
import GreetingContainer from './greeting/greeting_container'

const Chat = ({ children }) => (
  <div className="chat_container">
    <GreetingContainer />
    <MessageIndexContainer />
  </div>
);

export default Chat;
