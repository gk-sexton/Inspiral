import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Home from './home';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
