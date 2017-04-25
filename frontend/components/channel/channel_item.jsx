import React from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

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
        <span className="channel-name">{subscription.channel_name}</span>
      );
    } else {
      return (
        <span className="channel-name">{subscription.channel_name}</span>
      );
    }
  }

  renderStatus(props) {
    let {subscription} = this.props;
    if (subscription.private === true) {
      return(
        <span className="status">
          <FontAwesome name='lock' />
        </span>
      );
    } else if (subscription.is_dm === true ) {
      return (
        <span className="status">
          <FontAwesome name='circle-o' />
        </span>
      );
    } else {
      return (
        <span className="status">
          #
        </span>
      );
    }
  }

  handleDmDelete(e) {
    if (e !== undefined) {
      e.preventDefault();
      this.props.deleteChannel(this.props.channel.id);
    }
  }

  renderDmDeleteButton() {
    let {subscription} = this.props;
    if (subscription && (subscription.is_dm === true)) {
      return (
        <button className="remove-dm" onClick={this.handleDmDelete()}>
          <FontAwesome name='times-circle-o' />
        </button>
      );
    }
  }

  isSelected() {
    let {subscription, currentUser} = this.props;
    if (currentUser.channel_id === subscription.current_channel) {
      return("current_channel");
    } else {
      return("unselected_channel");
    }
  }

  render() {
    let { subscription } = this.props;
    return(
      <li className="channel-li">
        <Link to={`messages/${subscription.channel_id}`} activeClassName="selected-channel" >
          {this.renderStatus()}
          {this.props.currentUser ? this.renderChannel() : null }
          {this.renderDmDeleteButton()}
        </Link>
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
