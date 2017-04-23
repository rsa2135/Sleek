import React from 'react';
import FontAwesome from 'react-fontawesome';

const renderAdditionalHeaderInfo = (props) => {
  debugger
  if (props.channelSection === "channel") {
    return (
      <span className="channel_count">
        {props.channelCount}
      </span>
    );

  } else {
    return (
      <button className="add_dm">
        <FontAwesome name='plus-circle' />
      </button>
    );
  }
};

const ChannelHeader = (props) => {
  return(
    <h2>
      {`${props.channelSection}s`}
      {renderAdditionalHeaderInfo(props)}
    </h2>
  );
};

export default ChannelHeader;
