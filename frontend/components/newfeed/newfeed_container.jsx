import { connect } from 'react-redux';
import { resetErrors } from '../../actions/subscription_actions';
import { addSubscription } from '../../actions/subscription_actions';
import NewFeed from './newfeed';

const mapStateToProps = ({ session, collections, subscriptions }) => {
  return  {
    collections: collections.collections,
    currentUser: session.currentUser,
    errors: subscriptions.errors,
    subscriptions: subscriptions.subscriptions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetErrors: () => dispatch(resetErrors()),
    addSubscription: (subscription) => dispatch(addSubscription(subscription))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeed);
