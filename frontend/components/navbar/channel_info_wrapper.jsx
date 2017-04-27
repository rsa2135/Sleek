import React from 'react';
import FontAwesome from 'react-fontawesome';

const channelName = (props) => {
  let currentChannel = props.subscriptions.filter((subscription) => (
    subscription.channel_id === parseInt(props.channelId)
  ));
  let displayText;
  if (currentChannel[0].is_dm === false) {
    displayText = `#${currentChannel[0].channel_name}`;
  } else {
    let channelName;
    if (currentChannel[0].users.length === 2) {
      channelName = currentChannel[0].users.filter(user => (
        user !== currentUser.username
      ));
      displayText = `@${channelName}`;
    } else {
      channelName = currentChannel[0].users.filter(user => (
        user !== currentUser.username
      )).join(', ');
      displayText = channelName;
    }
  }
  return displayText;
};

const channelInfo = (props) => {
  let currentChannel = props.subscriptions.filter((subscription) => (
    subscription.channel_id === parseInt(props.channelId)
  ));
  return currentChannel[0].channel_description;
};


const ChannelInfoWrapper = (props) => {

  return (
    <div className="channel-info-section-navbar">
      <div className="channel-info-and-name">
        <div className="channel_name_container">
          <span>{props.subscriptions.length > 0 ? channelName(props) : null }</span>
        </div>

        <div className="channel_header_info">

          <div className="navbar-member-count">
            <span className="user-logo"><FontAwesome name='user-o' /></span>
            <span className="count">{props.subscriptions.length}</span>
          </div>

          <div className="navbar-channel-description-container">
            <span className="navbar-channel-description">{props.subscriptions.length > 0 ? channelInfo(props) : null }</span>
          </div>

        </div>
      </div>

      <div className="channel-settings-container">

        <button className="gear-dropdown-icon">
          <FontAwesome name='cog' />
        </button>

      </div>
    </div>
  );
};


export default ChannelInfoWrapper;
