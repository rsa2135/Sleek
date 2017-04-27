import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import { createChannel, fetchChannels } from '../../actions/channel_actions';
import { selectAllChannels } from '../../selectors/channel_selector';
import { fetchUserSubscriptions } from '../../actions/subscription_actions';

class CreateChannelMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      private: false,
      name: "",
      description: "",
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changePrivacy = this.changePrivacy.bind(this);
  }

  header() {
    let title = this.state.private === false ? "Create a channel" : "Create a private Channel";
    return (
      <div className="create-channel-header-container">
        <h1 className="create-channel-header">
          {title}
        </h1>
        <p className="create-channel-blurb">
          {"Channels are where your team communicates. They're best when organized around a topic - #leads, for example."}
        </p>
      </div>
    );
  }

  changePrivacy(e) {
    this.state.private === false ? this.setState({private: true}) : this.setState({private: false});
  }

  publicPrivate() {
    let privacySettingBlurb;
    let switchText;
    if (this.state.private === false) {
      privacySettingBlurb = "Anyone on Sleek can view and join this channel.";
      switchText = <span className="switch-text-public">Public</span>;
    } else {
      privacySettingBlurb = "This channel can only be joined or viewed by invite.";
      switchText = <span className="switch-text-private">Private</span>;
    }
    return (
      <div className="privacy-setting-container">
        <label className="privacy-switch" >
          <input type="checkbox" onClick={this.changePrivacy}/>
            <div className="slider" >{switchText}</div>
        </label>
        <span className="privacy-blurb">
          {privacySettingBlurb}
        </span>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let channel = this.state;
    let { subscriptions } = this.props;
    this.props.createChannel(channel)
      .then((action) => hashHistory.push(`messages/${action.channel.id}`))
      .then(() => this.props.fetchUserSubscriptions(currentUser.id));
    this.props.closeModal();
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleClick(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  renderForm() {
    return (
      <div className="create-form-container">
        <form onSubmit={this.handleSubmit} className="create-form">

          <label className="channel-name-label">
            <p className="channel-name-title">Name</p>
            <input
              type="text"
              placeholder = "# e.g. travel"
              className="channel-name-input"
              onChange={this.update("name")} />
            <span className="channel-name-instructions">Names must be lowercase, without spaces or periods, and shorter than 22 characters.</span>
          </label>

          <label className="channel-purpose-label">
            <span className="channel-description"><strong>Purpose</strong> (optional)</span>
            <input
              type="text"
              className="channel-purpose-input"
              onChange={this.update("description")} />
            <span className="channel-purpose-instructions">What's this channel about?</span>
          </label>
          <div className="submission">
            <button className="cancel-creation" onClick={this.handleClick}>Cancel</button>
            <input type="submit" value="Create Channel" name="submit" className="submit-channel"/>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div className="create-channel-modal-content">
        {this.header()}
        {this.publicPrivate()}
        {this.renderForm()}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    channels: selectAllChannels(state),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    createChannel: channel => dispatch(createChannel(channel)),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchUserSubscriptions: (user_id) => dispatch(fetchUserSubscriptions(user_id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateChannelMain);
