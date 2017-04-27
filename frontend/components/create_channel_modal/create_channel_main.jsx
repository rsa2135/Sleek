import React from 'react';
import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions';

class CreateChannelMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      public: true,
      channelName: "",
      channelPurpose: "",
    };

    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  header() {
    let title = this.state.public === true ? "Create a channel" : "Create a private Channel";
    return (
      <div className="create-channel-header-container">
        <h1 className="create-channel-header">
          {title}
        </h1>
        <p className="create-channel-blurb">
          "Channels are where your team communicates. They're best when organized around a topic - #leads, for example"
        </p>
      </div>
    );
  }

  publicPrivate() {
    let privacySettingBlurb;
    if (this.state.public === true) {
      privacySettingBlurb = "Anyone on Sleek can view and join this channel";
    } else {
      privacySettingBlurb = "This channel can only be joined or viewed by invite";
    }
    return (
      <div className="privacy-setting-container">
        <label className="privacy-switch">
          <input type="checkbox" />
            <div className="slider-round">public</div>
        </label>
        <span className="privacy-blurb">
          {privacySettingBlurb}
        </span>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let { state } = this.state
    this.props.createChannel({state});
    this.props.closeModal();
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleClick(e) {
    debugger
    e.preventDefault();
    this.props.closeModal();
  }

  renderForm() {
    return (
      <div className="crate-form-container">
        <form onSubmit={this.handleSubmit} className="create-form">

          <label className="channel-name-label">
            Name
            <input
              type="text"
              placeholder = "# e.g. travel"
              className="channel-name-input"
              onChange={this.update("channelName")} />
            <sapn className="channel-name-instructions">yo</sapn>
          </label>

          <label className="channel-purpose-label">
            <span><strong>Purpose</strong> (optional)</span>
            <input
              type="text"
              className="channel-purpose-input"
              onChange={this.update("channelPurpose")} />
            <sapn className="channel-purpose-instructions">What's this channel about?</sapn>
          </label>
          <button onClick={this.handleClick}>Cancel</button>
          <input type="submit" value="Create Channel" name="submit" className="submit-channel"/>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div className="creat-channel-modal-content">
        {this.header()}
        {this.publicPrivate()}
        {this.renderForm()}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateChannelMain);
