import React from 'react';

import ChannelItem from './channel_item';


const ChannelIndex = (props) => {
  debugger
  return(
    <ul>
      {props.subscriptions.map(subscription => <ChannelItem subscription={subscription} />)}
    </ul>
  );
};

export default ChannelIndex;
