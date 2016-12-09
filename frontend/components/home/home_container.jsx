import { connect } from 'react-redux';
import { logout, login, signup } from '../../actions/session_actions';
import Home from './home';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
  return {
    login,
    signup,
    logout: () => dispatch(logout()),
    processForm: (type, user) => dispatch(type(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
