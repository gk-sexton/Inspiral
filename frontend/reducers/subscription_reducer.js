import { RECEIVE_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION, RECEIVE_ERRORS,
   RESET_ERRORS } from '../actions/subscription_actions';

const noSubscriptions = {
    subscriptions: {},
    errors: []
  };

const SubscriptionReducer = (state = noSubscriptions, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SUBSCRIPTIONS:
      return {subscriptions: action.subscriptions, errors: []};

    case RECEIVE_SUBSCRIPTION:
      return Object.assign( {}, state, {[action.subscription.id]: action.subscription.title});

    case RECEIVE_ERRORS:
      return Object.assign( {}, state, {errors: action.errors});

    case RESET_ERRORS:
      return Object.assign( {}, state, {errors: []});

    default:
      return state;
  }
};

export default SubscriptionReducer;
