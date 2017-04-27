import React from 'react';
import { connect } from 'react-redux';

import ChannelHeader from './channel_header';
import ChannelIndex from './channel_index';
import { openModal } from '../../actions/modal_actions';

class ChannelsWrapper extends React.Component {

  filterBySection() {
    debugger
    if (this.props.channelSection === "channel")
    return this.props.subscriptions.filter(subscription => (subscription.is_dm === false));
    else {
      return this.props.subscriptions.filter(subscription => (subscription.is_dm === true));
    }
  }

  render(props) {
    return(
      <div className="channels-wrapper">
        <ChannelHeader
          channelSection={this.props.channelSection}
          channelCount={this.props.channelCount}
          openModal={this.props.openModal} />

        <ChannelIndex
          channelSection={this.props.channelSection}
          subscriptions={this.filterBySection()} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (content) => dispatch(openModal(content))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ChannelsWrapper);
