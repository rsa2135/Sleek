import React from 'react';
import { Link } from 'react-router';

const ChannelModalItem = (props) => {
  return(
    <li className="modal-channel-li">
      <Link to={`messages/${props.channel.id}`} className="link-to-modal-channel" activeClassName="selected-modal-channel" >
        {props.channel.name}
      </Link>
    </li>
  );
};

export default ChannelModalItem;
