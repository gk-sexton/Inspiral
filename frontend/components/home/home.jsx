import React from 'react';
import { withRouter} from 'react-router';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.children = this.props.children;
  }

  render () {
    return (
      <div className='feed'>
        { this.children }
      </div>
    );
  }

}
export default withRouter(Home);
