import React from 'react';
import GreetingContainer from './greeting/greeting_container'

const App = ({ children }) => (
  <div className="appContainer">
    { children }
  </div>
);

export default App;
