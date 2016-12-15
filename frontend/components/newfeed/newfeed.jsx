import React from 'react';
import { withRouter } from 'react-router';
import { values } from 'lodash';
class NewFeed extends React.Component {
  constructor(props){
    super(props);
    this.state = {url: '', feed_title: '', checked: {}, user_id: this.props.currentUser.id};
    this.renderErrors = this.renderErrors.bind(this);
    this.renderCollections = this.renderCollections.bind(this);
    this.submitCB = this.submitCB.bind(this);
    this.update = this.update.bind(this);
    this.boxHandler = this.boxHandler.bind(this);
  }

  renderErrors(){
    return(<div></div>);
  }
  renderCollections(){
    return(
      <ul className='collection-box-list'>
      {
        values(this.props.collections).map((collection) => {
        if (this.state.checked[collection.id]) {
          return (
            <li key={`collection-check-${collection.title}`}>
              <label className='box-label'>
                {collection.title}
                <input type='checkbox' checked value={collection.id}
                  onChange={ this.boxHandler }
                  className='collection-box'/>
              </label>
            </li> );
          } else {
            return (
              <li key={`collection-check-${collection.title}`}>
                <label className='box-label'>
                  {collection.title}
                  <input type='checkbox' value={collection.id}
                    onChange={ this.boxHandler }
                    className='collection-box'/>
                </label>
              </li>);
          }
        })
      }
      </ul>
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  boxHandler(e){
    const id = parseInt(e.currentTarget.value);
    this.setState({checked: Object.assign(this.state.checked,
      {[id]: !this.state.checked[id]})});
  }

  submitCB(e){
    e.preventDefault();
    const collIDs = [];
    for (let id in this.state.checked){
      if(this.state.checked[id]){
        collIDs.push(id);
      }
    }
    const subObj = {url: this.state.url, feed_title: this.state.feed_title,
      user_id: this.props.currentUser.id, collection_ids: collIDs}
    this.props.addSubscription(subObj).then( () =>
      this.props.router.push('/home')
    )
  }

  render(){
    return (
      <div className='new-feed-div'>
        <div className='new-feed-title'>Enter the RSS feed:</div>
        <div className='right-sidebar'>
          <span className='subs-leader'>Suggested feeds:</span>
        </div>
        <form className='feed-form'>
          <span><input value={ this.state.url } className='url-input' type='text' placeholder='URL'
            onChange= { this.update('url') }></input>
          <input value={ this.state.feed_title } className='feed-title-input' type='text'
             placeholder='Choose a feed nickname'
            onChange= { this.update('feed_title') }></input>
          <input className='submit-button' type='submit' value='Add'
            onClick={ this.submitCB }></input></span>
          { this.renderCollections() }
        </form>
      </div>
    );
  }
}

export default NewFeed;
