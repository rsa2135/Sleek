import React from 'react';

import TeamMenu from './team_menu';
import ChannelsWrapper from './channels_wrapper';

class ChannelSidebar extends React.Component {
  constructor(props) {
    super(props);
    // props.fetchUserSubscriptions(props.currentUser.id);
    // props.fetchChannels();
  }

  componentDidMount() {
    this.props.fetchUserSubscriptions(this.props.currentUser.id);
    this.props.fetchChannels();
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
            channelCount={this.props.channels.length}
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
