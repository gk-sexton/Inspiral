import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { grabCollections, addCollection, updateCollection,
   removeCollection } from '../../actions/collection_actions';
import App from './app';

const mapStateToProps = ({ session, collections }) => {
  return  {
    currentUser: session.currentUser,
    collections: collections.collections,
    errors: session.errors,
    collectionErrors: collections.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    grabCollections: (user) => dispatch(grabCollections(user)),
    addCollection: (collection) => dispatch(addCollection(collection)),
    updateCollection: (collection) => dispatch(updateCollection(collection)),
    removeCollection: (collection) => dispatch(removeCollection(collection)),
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
