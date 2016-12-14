import { RECEIVE_COLLECTIONS, RECEIVE_COLLECTION, RECEIVE_ERRORS, RESET_ERRORS,
  DISPLAY_COLLECTION } from '../actions/collection_actions';

const noCollections = {
    collections: [],
    displayCollectionID: null,
    errors: []
  };

const CollectionReducer = (state = noCollections, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COLLECTIONS:
      return {collections: action.collections, errors: []};

    case RECEIVE_COLLECTION:
      return Object.assign( {}, state, {[action.collection.id]: action.collection.title});

    case DISPLAY_COLLECTION:
      return Object.assign( {}, state, {displayCollectionID: action.collection_id});

    case RECEIVE_ERRORS:
      debugger
      return Object.assign( {}, state, {errors: action.errors});

    case RESET_ERRORS:
      return Object.assign( {}, state, {errors: []});

    default:
      return state;
  }
};

export default CollectionReducer;
