import React from 'react';

import ChannelItem from './channel_item';


const ChannelIndex = (props) => {
  return(
    <ul>
      {props.channels.map(channel => <ChannelItem channel={channel} />)}
    </ul>
  );
};

export default Channelndex;
