import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CollectionReducer from './collection_reducer';
import SubscriptionReducer from './subscription_reducer';
import ArticleReducer from './article_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  collections: CollectionReducer,
  subscriptions: SubscriptionReducer,
  articles: ArticleReducer
});

export default RootReducer;
