import React from 'react';
import FontAwesome from 'react-fontawesome';
import ChannelsModal from '../channels_dms_modal/channels_modal';
import CreateChannelMain from '../create_channel_modal/create_channel_main';

const HandleShowChannels = (props) => {
  return (e) => {
    e.preventDefault();
    props.openModal(<ChannelsModal channelSection={props.channelSection} />);
  };
};

const HandleCreate = (props) => {
  return (e) => {
    e.preventDefault();
    props.openModal(<CreateChannelMain />);
  };
};

const renderAdditionalHeaderInfo = (props) => {
  if (props.channelSection === "channel") {
    return (
      <h2 className="channel-header">
        <button className="channel-header-text" onClick={HandleShowChannels(props)}>
          {`${props.channelSection}s`}
          <span className="channel_count">
            ({props.channelCount})
          </span>
        </button>
        <button className="add_channel" onClick={HandleCreate(props)}>
          <FontAwesome name='plus-circle' />
        </button>
      </h2>
    );

  } else {
    return (
      <h2 className="channel-header">
        <button className="channel-header-text" onClick={HandleShowChannels(props)}>
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
