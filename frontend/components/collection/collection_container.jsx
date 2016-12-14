import { connect } from 'react-redux';
import Collection from './collection';
import { displayCollection, removeCollection } from '../../actions/collection_actions';
// import { grabSubscriptions } from '../../actions/subscription_actions'; ADD THESE

const mapStateToProps = ({ session, collections }) => {
  return  {
    currentUser: session.currentUser,
    displayCollection: collections.displayCollection,
    errors: collections.errors,
    collections: collections.collections
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayCollection: (displayCollection) => dispatch(displayCollection(displayCollection)),
    removeCollection: (collectionID)=> dispatch(removeCollection(collectionID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);
