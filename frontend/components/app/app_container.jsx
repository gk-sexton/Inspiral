import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { grabCollections, addCollection, updateCollection,
   removeCollection, resetErrors} from '../../actions/collection_actions';
import App from './app';

const mapStateToProps = ({ session, collections, subscriptions }) => {
  return  {
    currentUser: session.currentUser,
    collections: collections.collections,
    errors: collections.errors,
    displayCollectionID: collections.displayCollectionID,
    subscriptions: subscriptions.subscriptions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    grabCollections: (user) => dispatch(grabCollections(user)),
    addCollection: (collection) => dispatch(addCollection(collection)),
    updateCollection: (collection) => dispatch(updateCollection(collection)),
    removeCollection: (collection) => dispatch(removeCollection(collection)),
    logout: () => dispatch(logout()),
    resetErrors: () => dispatch(resetErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
