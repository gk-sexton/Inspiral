import React from 'react';
import { Link, withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.logout = this.props.logout.bind(this)
  }

  logoutCB () {
    return () =>  {
      this.props.logout();
    }
  }

  render () {
    return (
      <div>
        HELLO {this.props.currentUser.username}
        <button onClick={ this.logoutCB(this.props.logout) }>Logout</button>
      </div>
    );
  }

  logoutCB () {
    return () =>  {
      this.logout();
      this.props.router.push('/');
    }
  }
}
export default withRouter(Home)
