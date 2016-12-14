import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';


class Collection extends React.Component{
  constructor(props){
    super(props);
    this.state = {id: this.idGrab()};
    this.removeCollectionCB = this.removeCollectionCB.bind(this);
    // this.idGrab = this.idGrab.bind(this);
  }

  idGrab(){
    const idFinder = /\d*$/;
    return parseInt(this.props.router.location.pathname.match(idFinder)[0]);
  }

  componentWillReceiveProps(){
    this.setState({id: this.idGrab()});
  }

  removeCollectionCB(){
    this.props.removeCollection({ id: this.state.id }, this.props.currentUser).then( this.props.router.push('/home'));
  }

  render(){
    return(
      <div>
        <span> Collection </span>
        <button onClick={ this.removeCollectionCB }>Delete collection {this.state.id}</button>
      </div>
  );
  }
}

export default withRouter(Collection);
