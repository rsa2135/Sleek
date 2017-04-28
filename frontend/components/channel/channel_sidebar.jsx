import React from 'react';

import TeamMenu from './team_menu';
import ChannelsWrapper from './channels_wrapper';

class ChannelSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserSubscriptions(this.props.currentUser.id);
    this.props.fetchChannels();
    this.props.fetchUsers();
  }

  channelCount() {
    let counter = this.props.channels.filter(channel => (!channel.is_dm));
    return counter.length;
  }

  render() {
    return(
      <div className="channels_sidebar">
        <TeamMenu
          currentUser={this.props.currentUser}
          logout={this.props.logout}
          />

        <div className="channels_scroller">
          <ChannelsWrapper
            channelSection={'channel'}
            subscriptions={this.props.subscriptions}
            channelCount={this.channelCount()}
            />

          <ChannelsWrapper
            channelSection={'direct message'}
            subscriptions={this.props.subscriptions}
            />

        </div>
      </div>
    );
  }
}

export default ChannelSidebar;
