import React from 'react';
import { connect } from 'react-redux';
import { withRouter, hashHistory } from 'react-router';

import { closeModal } from '../../actions/modal_actions';
import { deleteChannel } from '../../actions/channel_actions';
import { selectAllChannels } from '../../selectors/channel_selector';
import { selectAllSubscriptions } from '../../selectors/subscription_selector';
import { fetchUserSubscriptions, unsubscribe } from '../../actions/subscription_actions';

class ChannelActionsModal extends React.Component {
  constructor(props) {
    super(props);

    this.leaveOrDeleteLogic = this.leaveOrDeleteLogic.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  leaveOrDeleteLogic() {
    let channelCreator = false;
    this.props.channels.forEach(channel => {
      if (channel.id === parseInt(this.props.currentChannel)) {
        if (channel.creator === currentUser.username) {
          channelCreator = true;
        }
      }
    });

    if (channelCreator) {
      return (
        <li className="deleteChannel" onClick={this.handleDelete}>
          Delete Channel
        </li>
      );
    } else {
      return (
        <li className="leaveChannel" onClick={this.handleLeave}>
          Leave Channel
        </li>
      );
    }
  }

  handleDelete(e) {

    let remainingChannels = this.props.subscriptions.filter((sub) => sub.channel_id !== parseInt(this.props.currentChannel));
    this.props.deleteChannel(this.props.currentChannel)
      .then(() => hashHistory.push(`messages/${remainingChannels[0].channel_id}`))
      .then(() => this.props.fetchUserSubscriptions(this.props.currentUser.id));

    this.props.closeModal();
  }

  handleLeave(e) {
    let subId = this.props.subscriptions.filter((sub) => sub.channel_id === parseInt(this.props.currentChannel));
    let remainingChannels = this.props.subscriptions.filter((sub) => sub.channel_id !== parseInt(this.props.currentChannel));
    this.props.unsubscribe(subId[0].id)
      .then(() => hashHistory.push(`messages/${remainingChannels[0].channel_id}`))
      .then(() => this.props.fetchUserSubscriptions(this.props.currentUser.id));

    this.props.closeModal();
  }

  render() {
    return (
      <div className="actions-dropdown">
        <ul>
          {this.leaveOrDeleteLogic()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownParams) => {
  debugger
  return {
    currentChannel: ownParams.params.channelId,
    channels: selectAllChannels(state),
    currentUser: state.session.currentUser,
    subscriptions: selectAllSubscriptions(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    createChannel: channel => dispatch(createChannel(channel)),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchUserSubscriptions: (user_id) => dispatch(fetchUserSubscriptions(user_id)),
    deleteChannel: (channel_id) => dispatch(deleteChannel(channel_id)),
    unsubscribe: (subscription_id) => dispatch(unsubscribe(subscription_id))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChannelActionsModal)
);
