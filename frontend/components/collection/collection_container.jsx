import { connect } from 'react-redux';
import Collection from './collection';
import { displayCollection } from '../../actions/collection_actions';
// import { grabSubscriptions } from '../../actions/subscription_actions'; ADD THESE

const mapStateToProps = ({ session, collections }) => {
  return  {
    currentUser: session.currentUser,
    displayCollectionID: collections.displayCollectionID
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayCollection: (displayCollectionID) => dispatch(displayCollection(displayCollectionID)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);
