import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { selectAllChannels } from '../../selectors/channel_selector';
import { selectAllSubscriptions } from '../../selectors/subscription_selector';
import ChannelInfoWrapper from './channel_info_wrapper';
import { fetchChannels } from '../../actions/channel_actions';


class NavbarMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-bar">
        <ChannelInfoWrapper {...this.props} />
      </div>
    );
  }
}

// <Activity />

const mapStateToProps = (state, ownProps) => {
  return {
    channelId: ownProps.params.channelId,
    channels: selectAllChannels(state),
    subscriptions: selectAllSubscriptions(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavbarMain)
);
