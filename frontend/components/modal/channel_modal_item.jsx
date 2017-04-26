import React from 'react';
import { Link, hashHistory } from 'react-router';
import {FormattedDate} from 'react-intl';
import FontAwesome from 'react-fontawesome';

const handleClick = (props) => {
  return e => {
    e.preventDefault();
    props.closeModal();
    hashHistory.push(`messages/${props.channel.id}`);
  };
};

const ChannelModalItem = (props) => {
  return(
    <li className="modal-channel-li" onClick={handleClick(props)}>
        <div className="channel-name-row-modal">
          <span className="status-modal">
            #
          </span>
          <span className="modal-channel-name">
            {props.channel.name}
          </span>
        </div>

        <div className="created-information-modal">
          Created by
          <span className="creator-id"> {props.channel.creator} </span>
          on
          <span className="date-created"> <FormattedDate
                                            value={props.channel.created_at}
                                            month='long'
                                            day='2-digit'
                                            year='numeric'
                                            />
            </span>
        </div>

        <div className="member-count">
          <FontAwesome name='user-o' />
          <span className="count">{props.channel.count}</span>
        </div>

        <div className="purpose">
          {props.channel.description}
        </div>
    </li>
  );
};

export default ChannelModalItem;
