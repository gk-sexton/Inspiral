export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS';
export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";
import * as APIUtil from '../util/subscription_api_util';


export function grabSubscriptions(user) {
  return (dispatch) => {
    return APIUtil.grabSubscriptions(user)
      .then(subscriptions => dispatch(receiveSubscriptions(subscriptions)),
        err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function addSubscription(subscription) {
  return (dispatch) => {
    return APIUtil.addSubscription(subscription)
      .then(subscription => dispatch(receiveSubscription(subscription)),
        err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function updateSubscription(subscription) {
  return (dispatch) => {
    return APIUtil.updateSubscription(subscription)
      .then( subscription => dispatch(receiveSubscription(subscription)),
        err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function removeSubscription(subscription, user) {
  return (dispatch) => {
    return APIUtil.removeSubscription(subscription)
      .then( subscriptions => dispatch(receiveSubscriptions(subscriptions)),
        err => {
          dispatch(receiveErrors(err.responseJSON));});
  };
}

export const receiveSubscriptions = subscriptions => {
  return ({
    type: RECEIVE_SUBSCRIPTIONS,
    subscriptions
  });
};

export const receiveSubscription = subscription => ({
  type: RECEIVE_SUBSCRIPTION,
  subscription
});

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const resetErrors = errors => ({
  type: RESET_ERRORS,
  errors
});
