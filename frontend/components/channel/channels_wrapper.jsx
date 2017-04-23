import React from 'react';

import ChannelHeader from './channel_header';
import ChannelIndex from './channel_index';

const ChannelsWrapper = (props) => {
  return(
    <div className="channels_wrapper">
      <ChannelHeader channelSection={props.channelSection} channelCount={props.channelCount} />
      <ChannelIndex channels={props.channels} />
    </div>
  );
};

export default ChannelsWrapper;
