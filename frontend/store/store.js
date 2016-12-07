import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const configureStore = ( preloadState = {} ) => (
  createStore(
    RootReducer,
    preloadState,
    applyMiddleware(thunk)
  )
)

export default configureStore;
