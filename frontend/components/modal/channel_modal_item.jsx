import React from 'react';
import { Link, hashHistory } from 'react-router';

import ChannelNameRowModal from './channel_name_row_modal';
import CreatedInformationModal from './created_information_modal';
import MemberCountModal from './member_count_modal';
import ChannelPurposeModal from './channel_purpose_modal';


const propIsUserOrChannel = (props) => {
  if (props.channel) {
    return <ChannelNameRowModal channel={props.channel}/>;
  } else {
    return <ChannelNameRowModal user={props.user} />;
  }
};

const ChannelModalItem = (props) => {
  return(
    <li className="modal-channel-li"
      onClick={ props.channel ? props.onChannelClick : props.selectUser }>
      {propIsUserOrChannel(props)}

      {props.channel ? <CreatedInformationModal channel={props.channel} /> : null }
      {props.channel ? <MemberCountModal channel={props.channel} /> : null }
      {props.channel ? <ChannelPurposeModal channel={props.channel} /> : null }

    </li>
  );
};

export default ChannelModalItem;
