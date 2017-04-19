import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import App from './app';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' components={ App }>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;


// <IndexRedirect to="/messages" />
