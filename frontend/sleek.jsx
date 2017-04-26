import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { addUser, removeUser, clearList } from './actions/pending_dms_actions';
import { unsubscribe } from './actions/subscription_actions';
import { createChannel } from './actions/channel_actions';

document.addEventListener('DOMContentLoaded', () => {

  window.addUser = addUser;
  window.removeUser = removeUser;
  window.clearList = clearList;
  window.unsubscribe = unsubscribe;
  window.createChannel = createChannel;

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
