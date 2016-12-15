import { connect } from 'react-redux';
import Collection from './collection';
import { removeCollection } from '../../actions/collection_actions';
import { grabSubscriptions, addSubscription,
  removeSubscription } from '../../actions/subscription_actions';
// import { grabSubscriptions } from '../../actions/subscription_actions'; ADD THESE

const mapStateToProps = ({ session, collections, subscriptions }) => {
  return  {
    currentUser: session.currentUser,
    displayCollection: collections.displayCollection,
    errors: collections.errors,
    collections: collections.collections,
    subscriptions: subscriptions.subscriptions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
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
