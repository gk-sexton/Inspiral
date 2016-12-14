import { connect } from 'react-redux';
import { resetErrors } from '../../actions/session_actions';
import NewFeed from './newfeed';

const mapStateToProps = ({ session, collections }) => {
  return  {
    collections: collections.collections,
    currentUser: session.currentUser,
    errors: collections.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetErrors: () => dispatch(resetErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeed);
