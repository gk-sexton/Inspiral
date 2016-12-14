import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';


class Collection extends React.Component{
  constructor(props){
    super(props);
    this.props.displayCollection(this.props.displayCollectionID);
  }



  render(){
    return(<div> Collection {this.props.displayCollectionID}</div>);
  }
}

export default withRouter(Collection);
