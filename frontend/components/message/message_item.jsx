import React from 'react';

import MessageContent from './message_content';
import MessageAvatar from './message_avatar';

class MessageItem extends React.Component {

  render() {
    const { id, author, author_id, created_at, body, image_url } = this.props.message;
    return (
      <li className="message_body">
        <MessageAvatar userImageUrl={image_url} />
        <MessageContent id={id} author={author} body={body} timestamp={created_at} />
      </li>
    );
  }
}

export default MessageItem;
