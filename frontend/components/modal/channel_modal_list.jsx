import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import ChannelModalItem from './channel_modal_item';
import { addPendingUser, removePendingUser } from '../../actions/pending_dms_actions';
import { addUser, removeUser } from '../../actions/user_actions';
import { receiveChannel } from '../../actions/channel_actions';
import { subscribe } from '../../actions/subscription_actions';
import { selectAllChannels } from '../../selectors/channel_selector';
import { selectAllSubscriptions } from '../../selectors/subscription_selector';
import { selectAllUsers } from '../../selectors/user_selector';


class ChannelModalList extends React.Component {
  constructor(props) {
    super(props);

    this.onChannelClick = this.onChannelClick.bind(this);
    this.selectUser = this.selectUser.bind(this);
    // this.deselectUser = this.deselectUser.bind(this);
    // this.updateState = this.updateState.bind(this);
  }

  listHeader() {
    let title;
    if (this.props.channelSection === 'channel') {
      title = 'Channels you can join';
    } else {
      title = 'Start a direct message';
    }

    return (
      <div className="channel-list-header">
        {title}
      </div>
    );
  }

  onChannelClick(channel) {
    return e => {
      debugger
      e.preventDefault();
      let { subscriptions } = this.props;
      let subscriptionsIds = subscriptions.map(subscription => subscription.channel_id);

      if (subscriptionsIds.includes(channel.id)) {
        hashHistory.push(`messages/${channel.id}`);
      } else {

        this.props.subscribe(channel.id);
        hashHistory.push(`messages/${channel.id}`);
      }
        this.props.closeModal();
    };
  }

  selectUser(user) {
    return e => {
      e.preventDefault();
      debugger
      this.props.addPendingUser(user);
      this.props.removeUser(user);
    };
  }


  whatToPass() {
    let { channels, users } = this.props;
    if (this.props.channelSection === 'channel') {
      return (
        <div className="scroller">
          <ul>
            { channels.map(channel =>
              <ChannelModalItem
                channel={channel}
                key={channel.id}
                closeModal={this.props.closeModal}
                onChannelClick={this.onChannelClick(channel)}
                />)}
          </ul>
        </div>
      );

    } else {
      debugger
      return (
        <div className="scroller">
          <ul>
            {users.map(user =>
              <ChannelModalItem
                user={user}
                key={user.id}
                closeModal={this.props.closeModal}
                selectUser={this.selectUser(user)}
                />)}
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="channel-list">
        {this.listHeader()}
        {this.whatToPass()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pendingDms: state.pendingDms,
  channels: selectAllChannels(state),
  subscriptions: selectAllSubscriptions(state),
  users: selectAllUsers(state),
});

const mapDispatchToProps = (dispatch) => ({
  addPendingUser: user => dispatch(addPendingUser(user)),
  removePendingUser: user => dispatch(removePendingUser(user)),
  addUser: user => dispatch(addUser(user)),
  removeUser: user => dispatch(removeUser(user)),
  subscribe: channel => dispatch(subscribe(channel)),
  receiveChannel: channel => dispatch(receiveChannel(channel)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelModalList);

// updateState={this.updateState(user)}
