import React from 'react';

import TeamMenu from './team_menu';
import ChannelsWrapper from './channels_wrapper';

class ChannelSidebar extends React.component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="channels_sidebar">
        <TeamMenu currentUser={this.props.currentUser} logout={this.props.logout}/>

        <div className="channels_scroller">
          <ChannelsWrapper channelSection={'channel'} channels={this.props.channels} />
          <ChannelsWrapper channelSection={'direct message'} channels={this.props.channels} />
        </div>
      </div>
    );
  }
}

export default ChannelSidebar;
