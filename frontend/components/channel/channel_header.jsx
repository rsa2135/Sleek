import React from 'react';
import FontAwesome from 'react-fontawesome';

const renderAdditionalHeaderInfo = () => {
  if (props.channelSection === "channel") {
    return (
      <span className="head_count">
        {props.headCount}
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


const ChannelHeader = () => {
  return(
    <h2>
      {`${props.channelSection}s`}
      {renderAdditionalHeaderInfo()}
    </h2>
  );
};

export default ChannelHeader;
