import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import { values } from 'lodash';

class Collection extends React.Component{
  constructor(props){
    super(props);
    this.state = {id: null, collection_title: null};
    this.removeCollectionCB = this.removeCollectionCB.bind(this);
  }

  idGrab(){
    return this.props.router.params.id;
  }
  titleGrab(){
    let collection = this.props.collections[this.props.router.params.id]
    return (collection ? collection.title : null);
  }

  removeCollectionCB(){
    this.props.removeCollection({ id: this.state.id }, this.props.currentUser).then( this.props.router.push('/home'));
  }

  render(){
    return(
      <div className='collection-div'>
        <span className='collection-title'> { this.titleGrab() }</span>
        <button onClick={ this.removeCollectionCB }>Delete collection</button>
      </div>
  );
  }
}

export default withRouter(Collection);