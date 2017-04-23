import React from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import { deleteChannel } from '../../actions/channel_actions';


class ChannelItem extends React.Component {
  constructor(props) {
    props(super);
    this.handleDmDelete = this.handleDmDelete.bind(this);
  }


  renderChannel({current_channel}) {
    if (channel_id === current_channel) {
      return(
        <span className="current_channel">{channel_name}</span>
      );
    } else {
      return (
        <span className="unselected_channel">{channel_name}</span>
      );
    }
  }

  renderStatus({channel_type}) {
    if (channel_type.private === true) {
      return(
        <span>
          <FontAwesome name='lock' />
        </span>
      );
    } else if (channel_type.is_dm === true ) {
      return (
        <span>
          <FontAwesome name='circle-o' />
        </span>
      );
    } else {
      return (
        <span>
          #
        </span>
      );
    }
  }

  handleDmDelete(e) {
    e.preventDefault();
    this.props.deleteChannel(this.props.channel.id);
  }

  renderDmDeleteButton(channel) {
    if (this.props.channel.is_dm === true) {
      return (
        <button onClick={handleDmDelete()}>
          <FontAwesome name='times-circle-o' />
        </button>
      );
    }
  }

  ChannelItem() {
    return(
      <li>
        <a href="#">
          {renderChannel()}
          {renderStatus()}
          {renderDmDeleteButton()}
        </a>
      </li>
    );
  }

}

// Do i need t oconnect state?
// mapStateToProps = (state) => {
//
// };

mapDispatchToProps = (dispatch) => {
  return {
    deleteChannel: id => dispatch(deleteChannel(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ChannelItem);
