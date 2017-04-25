import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import Modal from './modal';

const App = ({ children }) => (
  <div className="appContainer">
    <Modal />
    { children }
  </div>
);

export default App;
