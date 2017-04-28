import React from 'react';
import FontAwesome from 'react-fontawesome';
import ChannelActionsModal from '../channel_actions_modal/channel_actions_modal';

const channelName = (props) => {
  let currentChannel = props.subscriptions.filter((subscription) => (
    subscription.channel_id === parseInt(props.channelId)
  ));
  let displayText;
  if ((currentChannel.length > 0) && (currentChannel[0].is_dm === false)) {
    displayText = `#${currentChannel[0].channel_name}`;
  } else {
    let channelName;
    if ((currentChannel.length > 0) && (currentChannel[0].users.length === 2)) {
      channelName = currentChannel[0].users.filter(user => (
        user !== currentUser.username
      ));
      displayText = `@${channelName}`;
    } else if (currentChannel.length > 0){
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
  if (currentChannel.length > 0) {
    return currentChannel[0].channel_description;
  }
};

const navBarMemberLogic = (props) => {
  let currentChannel = props.subscriptions.filter((subscription) => (
    subscription.channel_id === parseInt(props.channelId)
  ));
  let cssSelector;
  if ((currentChannel[0] !== undefined) && (currentChannel[0].channel_description === null)) {
    cssSelector = "count-no-border";
  } else {
    cssSelector = "count";
  }

  return (
    <div className="navbar-member-count">
      <span className="user-logo"><FontAwesome name='user-o' /></span>
      <span className={cssSelector}>{props.subscriptions.length}</span>
    </div>
  );

};

const handleClick = (props) => {
  return (e) => {
    e.preventDefault();
    props.openModal(<ChannelActionsModal name={"ChannelActionsModal"}/>);
  };
};


const ChannelInfoWrapper = (props) => {
  return (
    <div className="channel-info-section-navbar">
      <div className="channel-info-and-name">
        <div className="channel_name_container">
          <span>{props.subscriptions.length > 0 ? channelName(props) : null }</span>
        </div>

        <div className="channel_header_info">

        {navBarMemberLogic(props)}

          <div className="navbar-channel-description-container">
            <span className="navbar-channel-description">{props.subscriptions.length > 0 ? channelInfo(props) : null }</span>
          </div>

        </div>
      </div>

      <div className="channel-settings-container">

        <button className="gear-dropdown-icon" onClick={handleClick(props)}>
          <FontAwesome name='cog' />
        </button>

      </div>
    </div>
  );
};


export default ChannelInfoWrapper;
