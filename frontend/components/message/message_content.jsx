import React from 'react';
import {FormattedDate} from 'react-intl';
import {FormattedTime} from 'react-intl';

class MessageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.body,
      className: ""
    };

    this.handleAction = this.handleAction.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAction(action) {
    if (action === "delete") {
      this.props.deleteMessage(this.props.id);
    } else {
      this.props.updateMessage(this.props.id);
    }
  }

  handleSubmit() {
    e.preventDefault();
    this.props.updateMessage(this.state);
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  renderForm() {
    if(this.state.form == true) {
      return (
        <form onSubmit={this.handleSubmit} className="edit_form">
          <input
            type="text",
            value={this.state.body},
            onChange={this.handleChange}
            />
      )
    }
  }


  render() {
    let {id, author, timestamp, body} = this.props;
    return (
      <div className="message_content_container">

        <div className="message_header_container">
          <p>{author}</p>

          <FormattedTime value={timestamp} />

        </div>

        <span className="body">{body}</span>

        <div className="message_actions">
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    );
  }
}

export default MessageContent;
