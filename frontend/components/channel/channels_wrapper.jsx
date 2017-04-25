import React from 'react';

import ChannelHeader from './channel_header';
import ChannelIndex from './channel_index';

const filterBySection = (props) => {
  if (props.channelSection === "channel")
    return props.subscriptions.filter(subscription => (subscription.is_dm === false));
  else {
    return props.subscriptions.filter(subscription => (subscription.is_dm === true));
  }
};

const ChannelsWrapper = (props) => {
  return(
    <div className="channels-wrapper">
      <ChannelHeader channelSection={props.channelSection} channelCount={props.channelCount} />
      <ChannelIndex channelSection={props.channelSection} subscriptions={filterBySection(props)} />
    </div>
  );
};

export default ChannelsWrapper;
