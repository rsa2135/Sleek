import React from 'react';
import FontAwesome from 'react-fontawesome';

const renderAdditionalHeaderInfo = (props) => {
  if (props.channelSection === "channel") {
    return (
      <h2 className="channel-header">
        <button className="channel-header-text">
          {`${props.channelSection}s`}
          <span className="channel_count">
            ({props.channelCount})
          </span>
        </button>
      </h2>
    );

  } else {
    return (
      <h2 className="channel-header">
        <button className="channel-header-text">
          {`${props.channelSection}s`}
        </button>
        <button className="add_dm">
          <FontAwesome name='plus-circle' />
        </button>
      </h2>
    );
  }
};

const ChannelHeader = (props) => {
  return(
    renderAdditionalHeaderInfo(props)
  );
};

export default ChannelHeader;
