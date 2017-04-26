import React from 'react';
import { connect } from 'react-redux';

import { selectAllChannels } from '../../selectors/channel_selector';
import { selectAllUsers } from '../../selectors/user_selector';
import { closeModal } from '../../actions/modal_actions';
import ChannelModalItem from './channel_modal_item';
import ChannelModalHeader from './channel_modal_header';
import ChannelModalList from './channel_modal_list';
import DmsSelected from './dm_selected';


const ChannelsModal = (props) => {
  return(
    <div className='modal-content'>

      <ChannelModalHeader
        channels={props.channels}
        channelSection={props.channelSection}
        />

      <DmsSelected />

      <ChannelModalList
        channels={props.channels}
        users={props.users}
        channelSection={props.channelSection}
        closeModal={props.closeModal}
        />

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    channels: selectAllChannels(state),
    users: selectAllUsers(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelsModal);
