import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    You are logged out
  </nav>
);


const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout, router }) => {
  const logOutAndRedirect = () => {
    logout().then(() => router.push('/login'))
  }

  return (
    currentUser ? personalGreeting(currentUser, logOutAndRedirect) : sessionLinks()
  )
};

export default Greeting;
