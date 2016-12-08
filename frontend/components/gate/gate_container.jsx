import { connect } from 'react-redux';
import { logout, login, signup } from '../../actions/session_actions';
import displaySwitch from './gate';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    processForm: (type, user) => dispatch(type(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(displaySwitch);
