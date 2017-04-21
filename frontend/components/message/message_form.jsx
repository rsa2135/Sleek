import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      channel_id: 1,
    };
    // NOTE pull current channel from state when channels component is up and running

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state);
    this.setState({body: ""});
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  renderMessageBar() {
    let channelType = this.props.is_dm === 'true' ? "dm" : "channel";
    return (
      <form onSubmit={this.handleSubmit} className="message_form">
        <input
          className="message_bar_text"
          type="text"
          placeholder={channelType}
          value={this.state.body}
          onChange={this.handleChange} />

        <input type="submit" className="hidden_submit" />
      </form>
    );
  }

  render() {
    return (
      <div className="message_bar">
        {this.renderMessageBar()}
      </div>
    );
  }
}

export default MessageForm;
