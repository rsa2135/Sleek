import React from 'react';
import FontAwesome from 'react-fontawesome';
import ChannelsModal from '../modal/channels_modal';

const handleClick = (props) => {
  return (e) => {
    e.preventDefault();
    props.openModal(<ChannelsModal channelSection={props.channelSection} />);
  };
};

const renderAdditionalHeaderInfo = (props) => {
  if (props.channelSection === "channel") {
    return (
      <h2 className="channel-header">
        <button className="channel-header-text" onClick={handleClick(props)}>
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
        <button className="channel-header-text" onClick={handleClick(props)}>
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
