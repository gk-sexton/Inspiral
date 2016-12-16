import { connect } from 'react-redux';
import Collection from './collection';
import { removeCollection } from '../../actions/collection_actions';
import { grabSubscriptions, addSubscription,
  removeSubscription } from '../../actions/subscription_actions';
import { grabArticles, receiveArticles } from '../../actions/article_actions';


const mapStateToProps = ({ session, collections, subscriptions, articles }) => {
  return  {
    currentUser: session.currentUser,
    displayCollection: collections.displayCollection,
    errors: collections.errors,
    collections: collections.collections,
    subscriptions: subscriptions.subscriptions,
    articles: articles.articles
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveArticles: (articles) => dispatch(receiveArticles(articles)),
    grabArticles: (subURL, subID) => dispatch(grabArticles(subURL, subID)),
    grabSubscriptions: (user) => dispatch(grabSubscriptions(user)),
    addSubscription: (collection) => dispatch(addSubscription(collection)),
    removeSubscription: (collectionID)=> dispatch(removeSubscription(collectionID)),
    removeCollection: (collectionID)=> dispatch(removeCollection(collectionID)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);
