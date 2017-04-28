import React from 'react';
import {FormattedDate} from 'react-intl';
import {FormattedTime} from 'react-intl';
import FontAwesome from 'react-fontawesome';

class MessageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        id: this. props.id,
        body: this.props.body,
        author_id: this.props.author_id,
      },
      additionalInfo: {
        timestamp: this.props.timestamp,
        author: this.props.author,
        renderClass: false
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    if (this.props.currentUser.id === parseInt(this.props.author_id)) {
      this.props.deleteMessage(this.state.message.id);
    } else {
    }
  }

  handleUpdate(e) {
    e.preventDefault();
    if (this.props.currentUser.id === parseInt(this.props.author_id)) {
      let addInfo = this.state.additionalInfo;
      addInfo.renderClass = true;
      this.setState({additionalInfo: addInfo});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateMessage(this.state.message);
    let addInfo = this.state.additionalInfo;
    addInfo.renderClass = false;
    this.setState({additionalInfo: addInfo});
  }

  handleChange(e) {
    let updateBody = this.state.message;
    updateBody.body = e.target.value;
    this.setState({ message: updateBody });
  }

  messageActions(e) {
    if ((this.props.currentUser) && (this.props.currentUser.id === parseInt(this.props.author_id))) {
      return (
        <div className="message-actions">
          <button onClick={this.handleUpdate}>
            <FontAwesome name='pencil-square-o' />
          </button>
          <button onClick={this.handleDelete}>
            <FontAwesome name='trash-o' />
          </button>
        </div>
      );
    } else {
      return null;
    }
  }

  renderForm() {
    if(this.state.additionalInfo.renderClass === true) {
      return (
        <form onSubmit={this.handleSubmit} className="edit_form">
          <input
            className = "edit_input"
            type="text"
            value={this.state.message.body}
            onChange={this.handleChange}
            />
          <input type="submit" className="hidden_submit" />
        </form>
      );
    } else {
      return (
        <span className="body">{this.state.message.body}</span>
      );
    }
  }

  render() {
    return (
      <div className="message_content_container">

        <div className="message_header_container">
          <p>{this.state.additionalInfo.author}</p>

          <FormattedTime value={this.state.additionalInfo.timestamp} />

        </div>

        {this.renderForm()}

        {this.messageActions()}
      </div>
    );
  }
}

export default MessageContent;

// <button><FontAwesome name='smile-o' /></button>
