export const RECEIVE_COLLECTIONS = 'RECEIVE_COLLECTIONS';
export const RECEIVE_COLLECTION = 'RECEIVE_COLLECTION';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";
import * as APIUtil from '../util/collection_api_util';


export function grabCollections(user) {
  return (dispatch) => {
    return APIUtil.grabCollections(user)
      .then(collections => dispatch(receiveCollections(collections)),
        err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function addCollection(collection) {
  return (dispatch) => {
    return APIUtil.addCollection(collection)
      .then(collection => dispatch(receiveCollection(collection)),
        err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function updateCollection(collection) {
  return (dispatch) => {
    return APIUtil.updateCollection(collection)
      .then(collection => dispatch(receiveCollection(collection)),
        err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function removeCollection(collection) {
  return (dispatch) => {
    return APIUtil.updateCollection(collection)
      .then(collections => dispatch(receiveCollections(collections)),
        err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export const receiveCollections = collections => ({
  type: RECEIVE_COLLECTIONS,
  collections
});

export const receiveCollection = collection => ({
  type: RECEIVE_COLLECTION,
  collections
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const resetErrors = errors => ({
  type: RESET_ERRORS,
  errors
});
