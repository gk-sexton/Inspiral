import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import { values } from 'lodash';

class Collection extends React.Component{
  constructor(props){
    super(props);
    this.state = {id: null, collection_title: null};
    this.removeCollectionCB = this.removeCollectionCB.bind(this);
    this.renderSubscriptions = this.renderSubscriptions.bind(this);
    this.generateRelatedSubs = this.generateRelatedSubs.bind(this);
    this.renderArticles = this.renderArticles.bind(this);
  }

  componentDidMount(){
    this.props.grabSubscriptions();
  }

  componentDidUpdate(){
    debugger
    this.props.grabSubscriptions();
  }
  idGrab(){
    return this.props.router.params.id;
  }
  titleGrab(){
    let collection = this.props.collections[this.props.router.params.id]
    return (collection ? collection.title : null);
  }

  generateRelatedSubs(){
    const collID = parseInt(this.props.router.params.id);
    return values(this.props.subscriptions).filter((subscription) => {
      return subscription.collection_ids.includes(collID);
      }
    );
  }
  renderArticles(){
    if (this.props.router.params.id && values(this.props.articles).length > 0){
      const collID = parseInt(this.props.router.params.id);
      const coll = this.props.collections[collID];
      const subIDs = coll.subscription_ids;
      const ids = Object.keys(this.props.articles)
      const neededSubs = []
      const that = this
      coll.subscriptions.forEach( obj => {
        if (subIDs.includes(obj.id)){
          neededSubs.push(that.props.articles[obj.id]);
        }
      })
      const arrays = neededSubs.map( obj => {
        let entryArray = obj.responseData.feed.entries;
        let entryContents = entryArray.map( article => {
          return <li className='article'>
            <span className='article-title' >{article.title}</span>
            <p className= 'article-body' dangerouslySetInnerHTML={{ __html: article.content }}></p>
          </li>
          }
        )
        return entryContents
        }

      )
      const totalArray = [].concat.apply([], arrays)
      return (
        <ul className='collection-feed-list'>
          { totalArray.map( content =>
              <li> {content}</li>
            )
          }
        </ul>
      )
    }
  }

  renderSubscriptions(){
  const selectedSubs = this.generateRelatedSubs();
    return (
      <ul className='subscription-list'>
        { selectedSubs.map((subscription) =>
          <li key={`subscription-${subscription.feed_title}`}>
            <button id={subscription.id} className='subscription-link'
              value={`/home/subscriptions/${subscription.id}`}>{subscription.feed_title}</button>
          </li> )
        }
    </ul>
    );
  }

  removeCollectionCB(){
    this.props.removeCollection({ id: this.props.router.params.id }).then( this.props.router.push('/home'));
  }

  render(){
    const subscriptions = this.renderSubscriptions();
    return(
      <div className='collection-div'>
        <div className='stack'>
          <div className='collection-title'>{ this.titleGrab() }</div>
          { this.renderArticles() }
        </div>
        <div className='right-sidebar'>
          <span className='subs-leader'>Associated feeds:</span>
          { subscriptions }
          <button className='collection-delete-button' onClick={ this.removeCollectionCB }>DELETE COLLECTION</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Collection);
