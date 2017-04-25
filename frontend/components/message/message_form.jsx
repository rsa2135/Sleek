import React from 'react';
import Scroll from 'react-scroll';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const channel_id = this.props.params.channelId;
    const { body } = this.state;
    e.preventDefault();
    this.props.createMessage({channel_id, body});
    this.setState({body: ""});
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  isDm() {
    let { subscriptions, params } = this.props;
    for (let i = 0; i < subscriptions.length; i++) {
      if (subscriptions[i].channel_id === parseInt(params.channelId)) {
        if (subscriptions[i].is_dm === true) {
          if (subscriptions[i].channel_name.split() > 2) {
            return subscriptions[i].channel_name;
          } else {
            return "@"+subscriptions[i].channel_name;
          }
        } else {
          return "#"+subscriptions[i].channel_name;
        }
      }
    }
  }

  renderMessageBar() {
    let channelTypeAndName = this.props.subscriptions.length > 0 ? this.isDm() : "";
    return (
      <form onSubmit={this.handleSubmit} className="message_form">
        <input
          className="message_bar_text"
          type="text"
          placeholder={`Message ${channelTypeAndName}`}
          value={this.state.body}
          onChange={this.handleChange} />

        <input type="submit" className="hidden_submit" />
      </form>
    );
  }

  render() {
    let Element = Scroll.Element;
    return (
      <div className="message_bar" name="bottom">
        {this.renderMessageBar()}
      </div>
    );
  }
}

export default MessageForm;
