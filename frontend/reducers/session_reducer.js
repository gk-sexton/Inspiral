import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, RESET_ERRORS } from '../actions/session_actions';

const noUser = {
    currentUser: null,
    errors: []
  };

const SessionReducer = (state = noUser, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_CURRENT_USER:
    return {currentUser: action.user, errors: []};

    case RECEIVE_ERRORS:
      return Object.assign( {}, state, {errors: action.errors});

    case RESET_ERRORS:
      return Object.assign( {}, state, {errors: []});

    default:
      return state;
  }
};

export default SessionReducer;
