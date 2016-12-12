import React from 'react';
import { Link, withRouter} from 'react-router';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className='feed'>
      </div>
    );
  }

}
export default withRouter(Home);
