import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CollectionReducer from './collection_reducer';
import SubscriptionReducer from './subscription_reducer';
const RootReducer = combineReducers({
  session: SessionReducer,
  collections: CollectionReducer,
  subscriptions: SubscriptionReducer
});

export default RootReducer;
