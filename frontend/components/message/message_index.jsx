import React from 'react';
import ReactDOM from 'react-dom';
import MessageItem from './message_item';

import MessageFormContainer from './message_form_container';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.fetchMessages = this.props.fetchMessages.bind(this);
  }

  componentDidMount() {
    this.fetchMessages();
    this.pusher = new Pusher('a0af77adf5648503636d', {
      encrypted: true
    });
    let channel = this.pusher.subscribe(`${this.props.channel_id}`);
    channel.bind('message_sent', (data) => {
      this.fetchMessages();
    });
  }

  componentWillUnmount() {
    this.pusher.unsubscribe();
  }

  componentWillUpdate() {
    debugger
    let node = ReactDOM.findDOMNode(this);
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }

  componentDidUpdate() {
    debugger
    if (this.shouldScrollBottom) {
      let node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    const { messages } = this.props;
    return (
      <section className="chat_active_window">
        <ul>
          {messages.map((message) => <MessageItem message={message} key={message.id} />)}
        </ul>
        <MessageFormContainer />
      </section>
    );
  }
}

export default MessageIndex;
