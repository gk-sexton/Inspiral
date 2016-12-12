import React from 'react';
import { Link, withRouter, browserHistory } from 'react-router';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.logoutCB = this.logoutCB.bind(this);
    this.render = this.render.bind(this);
  }

  logoutCB () {
    this.props.logout().then(() => this.props.router.push('/gate'));

  }

  render () {
    let welcome;
    if (this.props.currentUser){
      welcome = <p>Hello, {this.props.currentUser.username}</p>;
    }
    return (
      <div>
        {welcome}
        <button onClick={ this.logoutCB }>Logout</button>
      </div>
    );
  }

}
export default withRouter(Home);
