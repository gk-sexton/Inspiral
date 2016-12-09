import { connect } from 'react-redux';
import { logout, login, signup, resetErrors } from '../../actions/session_actions';
import displaySwitch from './gate';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    resetErrors: () => dispatch(resetErrors()),
    login,
    signup,
    logout: () => dispatch(logout()),
    processForm: (type, user) => dispatch(type(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(displaySwitch);
