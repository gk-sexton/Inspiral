import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { collection_title: '', isOpen: false };
    this.children = this.props.children;
    this.logoutCB = this.logoutCB.bind(this);
    this.newCollectionCB = this.newCollectionCB.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buttonCB = this.buttonCB.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount(){
    this.props.grabCollections(this.props.currentUser);
  }

  logoutCB () {
    this.props.logout().then(() => this.props.router.push('/gate'));
  }

  buttonCB(e){
    const path = e.currentTarget.value;
    this.props.router.push(path);
  }

  renderCollections(){
    return (
      <ul className='collection-list'>
      { this.props.collections.map((collection) =>
        <li key={`collection-${collection.title}`}>
          <button id={collection.id} onClick={ this.buttonCB } className='collection-link'
            value={`/home/collections/${collection.id}`}>{collection.title}</button>
        </li> )}
      </ul>
    );
  }

  renderErrors() {
    return (
      <ul className='collection-errors'>
        {this.props.errors.map((error, i)=>
          <li key={`error-${i}`}>
            {error}
          </li>)}
      </ul>
    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addCollection({title: this.state.collection_title,
      user_id: this.props.currentUser.id}).then( ()=> {
        this.props.grabCollections();
        this.closeModal();
      });
  }

  newCollectionCB(){
    this.props.resetErrors();
    this.setState({isOpen: true});
  }

  closeModal(){
    this.setState({isOpen: false, collection_title: ''});
  }

  render(){
    let welcome;
    if(this.props.currentUser){
      welcome = <p className='heller'>Signed in as {this.props.currentUser.username}</p>;
    }
    const collections = this.renderCollections();
    return (
      <div className='master'>
        <header >
          <img className="bulb" src={window.logo}/>
        </header>
        <div className='sidebar'>
          <button value='/home' className='recent'onClick={ this.buttonCB }>Recent</button>
          <button value='/home/newfeed' className='new-feed'onClick={ this.buttonCB }>New Feed</button>
          <p className='feed-head'>Your feeds:</p>
          <button className='new-collection' onClick={ this.newCollectionCB }>Add a new collection</button>
          { collections }
          <div className='sidebar-controls'>
            {welcome}
            <button onClick={ this.logoutCB }>Logout</button>
          </div>

          <Modal className='collection-modal' overlayClassName='collection-modal-overlay'
            contentLabel='' onRequestClose={this.closeModal} isOpen={this.state.isOpen} >
            <form className="collection-form" onSubmit={ this.handleSubmit }>
              <input type='text' placeholder='Collection title'
                value={this.state.collection_title}
                onChange={this.update('collection_title')}
                className='title-input' />
              <input className='title-button' type="submit" value='Add collection'/>
            </form>
            { this.renderErrors() }
          </Modal>

        </div>
        { this.props.children }
      </div>
    );
  }
}

export default withRouter(App);
