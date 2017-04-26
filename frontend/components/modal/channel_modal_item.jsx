import React from 'react';
import { Link } from 'react-router';
import {FormattedDate} from 'react-intl';
import FontAwesome from 'react-fontawesome';

const ChannelModalItem = (props) => {
  debugger
  return(
    <li className="modal-channel-li">
      <Link to={`messages/${props.channel.id}`} className="link-to-modal-channel" activeClassName="selected-modal-channel" >
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

        <div className="memeber-count">
          <FontAwesome name='user-o' />
          <span className="count">{props.channel.count}</span>
        </div>
      </Link>
    </li>
  );
};

export default ChannelModalItem;
