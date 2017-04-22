import React from 'react';

import MessageContent from './message_content';
import MessageAvatar from './message_avatar';

class MessageItem extends React.Component {

  render() {
    const { id, author, author_id, created_at, body, image_url} = this.props.message;
    const { deleteMessage, updateMessage } = this.props;
    // debugger
    return (
      <li className="message_body">
        <MessageAvatar userImageUrl={image_url} />
        <MessageContent
          id={id}
          author_id={author_id}
          author={author}
          body={body}
          timestamp={created_at}
          deleteMessage={deleteMessage}
          updateMessage={updateMessage} />
      </li>
    );
  }
}

export default MessageItem;
