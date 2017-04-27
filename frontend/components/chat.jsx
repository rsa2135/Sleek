import React from 'react';
import MessageIndexContainer from './message/message_index_container';
import GreetingContainer from './greeting/greeting_container';
import ChannelSidebarContainer from './channel/channel_sidebar_container';


const Chat = ({ children }) => (
  <div className="chat_container">
    <ChannelSidebarContainer />
    <MessageIndexContainer />
  </div>
);

export default Chat;

// <GreetingContainer />
