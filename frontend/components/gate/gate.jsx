import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to='/login' activeClassName='current'>Log in!</Link>
    <br/>
    <Link to='/signup' activeClassName='current'>Sign up!</Link>
  </nav>
);

const welcomeUser = (currentUser, logout) => (
  <div>
    <h2 className="user-welcome"> {currentUser.username} is the current user</h2>
    <button className="logout-button" onClick={logout}>Log out</button>
  </div>
);

const displaySwitch = ({currentUser, logout}) => (
  currentUser ? welcomeUser(currentUser, logout) : sessionLinks()
);

export default displaySwitch;
