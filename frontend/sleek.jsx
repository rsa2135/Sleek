import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { fetchChannels, createChannel, updateChannel, deleteChannel } from './actions/channel_actions';
import { fetchUserSubscriptions, fetchChannelSubscriptions } from './actions/subscription_actions';

document.addEventListener('DOMContentLoaded', () => {

  window.fetchChannels = fetchChannels;
  window.createChannel = createChannel;
  window.updateChannel = updateChannel;
  window.deleteChannel = deleteChannel;

  window.fetchUserSubscriptions = fetchUserSubscriptions;
  window.fetchChannelSubscriptions = fetchChannelSubscriptions;

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
