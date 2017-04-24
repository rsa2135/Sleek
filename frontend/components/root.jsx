import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { IntlProvider } from 'react-intl';

import App from './app';
import Chat from './chat';
import SessionFormContainer from './session_form/session_form_container'
import GreetingContainer from './greeting/greeting_container'

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={ store }>
      <IntlProvider locale="en">
        <Router history={ hashHistory }>
          <Route path='/' components={ App }>
            <IndexRedirect to={`/messages/${window.generalChannelId}`} />
            <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
            <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
            <Route path="/messages/:channelId" component={Chat} onEnter={_ensureLoggedIn} />
          </Route>
        </Router>
      </IntlProvider>
    </Provider>
  );
};

export default Root;

//satisfy heroku
// <Route path="/messages" component={GreetingContainer} onEnter={_ensureLoggedIn} />
