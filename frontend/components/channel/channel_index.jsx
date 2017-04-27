import React from 'react';

import ChannelItem from './channel_item';

const ChannelIndex = (props) => {
  return(
    <ul>
      {props.subscriptions.map(subscription =>
        <ChannelItem
          subscription={subscription}
          key={subscription.id} />)}
    </ul>
  );
};

export default ChannelIndex;
