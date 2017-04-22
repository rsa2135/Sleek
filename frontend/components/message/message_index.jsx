import React from 'react';
import ReactDOM from 'react-dom';
import MessageItem from './message_item';
import Scroll from 'react-scroll';
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

    let scroll = Scroll.animateScroll;
    scroll.scrollTo(10000, {delay: 0});
  }

  componentWillReceiveProps() {
    let scroll = Scroll.animateScroll;
    scroll.scrollTo(10000, {delay: 0});
  }

  componentWillUnmount() {
    this.pusher.unsubscribe();
  }

  render() {
    const { messages, updateMessage, deleteMessage } = this.props;
    return (
      <section className="chat_active_window">
        <ul>
          {messages.map((message) => <MessageItem
                                        message={message}
                                        updateMessage={updateMessage}
                                        deleteMessage={deleteMessage}
                                        key={message.id} />)}
        </ul>
        <MessageFormContainer />
      </section>
    );
  }
}

export default MessageIndex;
