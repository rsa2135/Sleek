import React from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import { deleteChannel } from '../../actions/channel_actions';


class ChannelItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDmDelete = this.handleDmDelete.bind(this);
  }

  renderChannel() {
    let {subscription, currentUser} = this.props;
    if (currentUser.channel_id === subscription.current_channel) {
      return(
        <span className="current_channel">{subscription.channel_name}</span>
      );
    } else {
      return (
        <span className="unselected_channel">{subscription.channel_name}</span>
      );
    }
  }

  renderStatus(props) {
    let {subscription} = this.props;
    if (subscription.private === true) {
      return(
        <span>
          <FontAwesome name='lock' />
        </span>
      );
    } else if (subscription.is_dm === true ) {
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

  renderDmDeleteButton() {
    let {subscription} = this.props;
    if (subscription.is_dm === true) {
      return (
        <button onClick={handleDmDelete()}>
          <FontAwesome name='times-circle-o' />
        </button>
      );
    }
  }

  render() {
    return(
      <li>
        <a href="#">
          {this.renderStatus()}
          {this.renderChannel()}
          {this.renderDmDeleteButton()}
        </a>
      </li>
    );
  }

}

function mapStateToProps(state) {
  return {
    currentUser: state.session.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteChannel: id => dispatch(deleteChannel(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelItem);
