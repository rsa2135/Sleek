import React from 'react';

const headerText = (props) => {
  let text;
  if (props.channelSection === "channel") {
    text = `Browse all ${props.channels.length} channels`;
  } else {
    text = 'Direct Messages';
  }

  return (
    <h1 className="channels-modal-header">
      {text}
    </h1>
  );
};

const newChannel = (props) => {
  if (props.channel) {
    return (
      <button className="new-channel">
        New channel
      </button>
    );
  }
};

const ChannelModalHeader = (props) => {
  return (
    <div className="channels-modal">
      {headerText(props)}
      {newChannel(props)}
    </div>
  );
};

export default ChannelModalHeader;
