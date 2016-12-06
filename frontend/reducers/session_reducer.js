import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS }

const noUser = {
  currentUser: null,
  errors: []
}

const SessionReducer = (state = noUser, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_CURRENT_USER:
    return Object.assign({}, state, {action.currentUser});

    case RECEIVE_ERRORS:
      return Object.assign({}, noUser, { action.errors });

    default:
      return state;
  }
};

export default SessionReducer;
