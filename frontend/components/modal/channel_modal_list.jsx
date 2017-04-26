import React from 'react';
import ChannelModalItem from './channel_modal_item';
const listHeader = (props) => {
  let title;
  if (props.channelSection === 'channel') {
    title = 'Channels you can join';
  } else {
    title = 'Start a direct message';
  }

  return (
    <div className="channel-list-header">
      {title}
    </div>
  );
};

const whatToPass = (props) => {
  let arrayOf;
  let singular;
  if (props.channelSection === 'channel') {
    arrayOf = props.channels;
    singular = 'channel';
  } else {
    arrayOf = props.users;
    singular = 'user';
  }

  return (
    <div className="scroller">
      <ul>
        {arrayOf.map(channel => <ChannelModalItem singular={singular} key={singular.id} closeModal={props.closeModal} />)}
      </ul>
    </div>
  );
};


const ChannelModalList = (props) => {
  return (
    <div className="channel-list">
      {listHeader(props)}
      {whatToPass(props)}
    </div>
  );
};

export default ChannelModalList;
