import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CollectionReducer from './collection_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  collections: CollectionReducer
});

export default RootReducer;
