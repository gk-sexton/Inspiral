import { connect } from 'react-redux';
import Collection from './collection';
import { displayCollection, removeCollection } from '../../actions/collection_actions';
// import { grabSubscriptions } from '../../actions/subscription_actions'; ADD THESE

const mapStateToProps = ({ session, collections }) => {
  return  {
    currentUser: session.currentUser,
    displayCollectionID: collections.displayCollectionID,
    errors: collections.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayCollection: (displayCollectionID) => dispatch(displayCollection(displayCollectionID)),
    removeCollection: (collectionID, user)=> dispatch(removeCollection(collectionID, user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);
