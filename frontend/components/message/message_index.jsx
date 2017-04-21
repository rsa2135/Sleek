import React from 'react';
import MessageItem from './message_item';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    debugger
    const { messages } = this.props;
    return (
      <section>
        <ul>
          {messages.map((message, idx) => <MessageItem message={message} key={message.id} />)}
        </ul>
      </section>
    );
  }
}

export default MessageIndex;
