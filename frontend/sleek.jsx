import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { fetchMessages, fetchMessage, createMessage, updateMessage, deleteMessage } from './actions/message_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchMessages = fetchMessages;
  window.fetchMessage = fetchMessage;
  window.createMessage = createMessage;
  window.updateMessage = updateMessage;
  window.deleteMessage = deleteMessage;

  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
