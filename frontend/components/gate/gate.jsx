import React from 'react';
import { Link, withRouter } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to='/login' activeClassName='current'>Log in!</Link>
    <br/>
    <Link to='/signup' activeClassName='current'>Sign up!</Link>
  </nav>
);

const logoutCB = (logout, router) => {
  return () => {
    logout().then(() => {
      router.push('/login');
    })
  }
};

const welcomeUser = (currentUser, logout, router) => {
  return (
    <div>
      <h2 className="user-welcome"> {currentUser.username} is the current user</h2>
      <button className="logout-button" onClick={logoutCB(logout, router)}>Log out</button>
    </div>
  );
};

const displaySwitch = ({currentUser, logout, router}) => (
  currentUser ? welcomeUser(currentUser, logout, router) : sessionLinks()
);


export default withRouter(displaySwitch);
