import React from 'react';
import { withRouter } from 'react-router';
class App extends React.Component{
  constructor(props){
    super(props);
    this.children = this.props.children;
    this.logoutCB = this.logoutCB.bind(this);
  }

  componentDidMount(){
    this.props.grabCollections(this.props.currentUser);
  }
  logoutCB () {
    this.props.logout().then(() => this.props.router.push('/gate'));
  }

  renderCollections(){
    return (
      <ul className='collection-list'>
      { this.props.collections.map((collection) =>
        <li key={`collection-${collection.title}`}>
          {collection.title}
        </li> )}
      </ul>
    );
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
          <button className='recent'>Recent</button>
          <button className='new-feed'> New Feed + </button>
          <p className='feed-head'>Your feeds:</p>
          { collections }
          <div className='sidebar-controls'>
            {welcome}
            <button onClick={ this.logoutCB }>Logout</button>
          </div>
        </div>
        { this.children }
      </div>
    );
  }
}

export default App;
