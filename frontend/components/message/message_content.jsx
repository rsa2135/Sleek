import React from 'react';
import {FormattedDate} from 'react-intl';
import {FormattedTime} from 'react-intl';

class MessageContent extends React.Component {

  render() {
    let {id, author, timestamp, body} = this.props;
    return (
      <div className="message_content_container">

        <div className="message_header_container">
          <p>{author}</p>

          <FormattedTime value={timestamp} />

        </div>

        <span className="body">{body}</span>

      </div>
    );
  }
}

export default MessageContent;
// <span className="time_stamp">
// </span>
