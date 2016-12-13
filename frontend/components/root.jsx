import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import App from './app/app_container';
import Home from './home/home_container';
import Gate from './gate/gate_container';
import NewFeed from './newfeed/newfeed_container';
import Collection from './collection/collection_container';

const ensureLogin = (nextState, replace) => {
  if ( !store.getState().session.currentUser ) {
    replace("/gate");
  }
};

const ensureLoggedout = (nextState, replace) => {
  if ( store.getState().session.currentUser ) {
    replace("/");
  }
};

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App } >
          <IndexRedirect to='/home'/>
          <Route path='/home' component={ Home } onEnter={ ensureLogin }>
            <Route path='newfeed' component={ NewFeed } onEnter={ ensureLogin }></Route>
            <Route path='collections'>
              <Route path=':id' component={ Collection } onEnter={ ensureLogin }></Route>
            </Route>
            <Route path='subscriptions'></Route>
          </Route>
      </Route>
        <Route path='/gate' component={ Gate } onEnter={ ensureLoggedout }></Route>
      </Router>
    </Provider>
  )
};

export default Root;
