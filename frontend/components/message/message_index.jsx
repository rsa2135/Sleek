import React from 'react';
import MessageItem from './message_item';

import MessageFormContainer from './message_form_container';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messages } = this.props;
    return (
      <section>
        <ul>
          {messages.map((message) => <MessageItem message={message} key={message.id} />)}
        </ul>
        <MessageFormContainer />
      </section>
    );
  }
}

export default MessageIndex;
