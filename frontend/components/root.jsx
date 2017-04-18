import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'

import App from './app'

const root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' components={app}>
          <IndexRedirect to="/messages" />
        </Route>
      </Router>
    </Provider>
  );
};
