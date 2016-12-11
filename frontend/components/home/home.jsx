import React from 'react';
import { Link, withRouter } from 'react-router';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <div>
        HELLO
        <button onClick>Logout</button>
      </div>
    );
  }

  logoutCB () {
    return () =>  {
      this.props.logout();
      this.props.router.push('/');
    }
  }
}
export default withRouter(Home)
