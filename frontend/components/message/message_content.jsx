import React from 'react';

class MessageContent extends React.Component {

  render() {
    let {id, author, timestamp, body} = this.props;
    debugger
    return (
      <div className="message_content_container">

        <div className="message_header_container">
          <p>{author}</p>
          <span>{timestamp}</span>
        </div>

        <span>{body}</span>

      </div>
    );
  }
}

export default MessageContent;
