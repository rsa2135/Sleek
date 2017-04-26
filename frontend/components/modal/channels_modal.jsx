import React from 'react';
import { connect } from 'react-redux';

import { selectAllChannels } from '../../selectors/channel_selector';
import ChannelModalItem from './channel_modal_item';


const ChannelsModal = (props) => {
  debugger
  return(
    <div className='modal-content'>
      <div className="channels-modal">
        <h1 className="channels-modal-header">
          Browse all {props.channels.length} channels
        </h1>

        <button className="new-channel">
          New channel
        </button>
      </div>

      <div className="future-search-functionality">

      </div>

      <div className="channel-list">
        <div className="channel-list-header">
          Channels you can join
        </div>

        <ul>
          {props.channels.map(channel => <ChannelModalItem channel={channel} key={channel.id} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    channels: selectAllChannels(state)
  };
};

export default connect(
  mapStateToProps,
  null
)(ChannelsModal);
