import React from 'react';
import { Link, hashHistory } from 'react-router';

import ChannelNameRowModal from './channel_name_row_modal';
import CreatedInformationModal from './created_information_modal';
import MemberCountModal from './member_count_modal';
import ChannelPurposeModal from './channel_purpose_modal';


const propIsUserOrChannel = (props) => {
  if (props.channel) {
    if ((!props.channel.is_dm) && (!props.channel.private)) {
      return <ChannelNameRowModal channel={props.channel}/>;
    }
  } else {
    if (props.user.id !== props.currentUser.id) {
      return <ChannelNameRowModal user={props.user} />;
    }
  }
};

const ChannelModalItem = (props) => {
  let liClass;
  if (props.channel) {
    liClass = (!props.channel.is_dm) && (!props.channel.private) ? "modal-channel-li" : "modal-channel-li-hidden";
  } else if (props.user) {
    liClass = (props.user.id !== props.currentUser.id) ? "modal-channel-li" : "modal-channel-li-hidden";
  }
  return(
    <li className={liClass}
      onClick={ props.channel ? props.onChannelClick : props.selectUser }>
      {propIsUserOrChannel(props)}

      {props.channel ? <CreatedInformationModal channel={props.channel} /> : null }
      {props.channel ? <MemberCountModal channel={props.channel} /> : null }
      {props.channel ? <ChannelPurposeModal channel={props.channel} /> : null }

    </li>
  );
};

export default ChannelModalItem;
