import React from 'react';
import ReactDOM from 'react-dom';
import MessageItem from './message_item';
import Scroll from 'react-scroll';
import MessageFormContainer from './message_form_container';
import NavbarMain from '../navbar/navbar_main';

class MessageIndex extends React.Component {

  componentDidMount() {
    this.props.fetchMessages(this.props.params.channelId);
    this.pusher = new Pusher('a0af77adf5648503636d', {
      encrypted: true
    });
    let channel = this.pusher.subscribe(`${this.props.params.channelId}`);
    channel.bind('message_sent', (data) => {
      this.props.fetchMessages(this.props.params.channelId);
    });

  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.channelId !== newProps.params.channelId) {
      this.props.fetchMessages(newProps.params.channelId);
    }
  }

  componentDidUpdate() {
    this.autoScroll();
  }

  componentWillUnmount() {
    this.pusher.unsubscribe();
  }

  autoScroll () {
    const node = ReactDOM.findDOMNode(this.scrollTarget);
    node.scrollIntoView({behavior: "smooth"});
  }

  render() {
    const { messages, updateMessage, deleteMessage, channelId, currentUser } = this.props;
    return (
      <section className="chat_active_window">
        <NavbarMain />
        <ul>
          {messages.map((message) => <MessageItem
                                        message={message}
                                        updateMessage={updateMessage}
                                        deleteMessage={deleteMessage}
                                        key={message.id}
                                        currentUser={currentUser} />)}
        </ul>
        <MessageFormContainer />
        <div ref={(bottom) => { this.scrollTarget = bottom; }}></div>
      </section>
    );
  }
}

export default MessageIndex;
