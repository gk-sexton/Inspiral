import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from './home/home_container';
import Gate from './gate/gate_container';


const checker = (nextState, replace) => {
  if ( !!store.getState().session.currentUser ) {
    replace("/home");
  } else {
    replace("/gate");
  }
};

const onSessionEnter = (nextState, replace) => {
  if ( !!store.getState().session.currentUser ) {
    replace("/home");
  }
  // store.dispatch(clearErrors());
};

const ensureLogin = (nextState, replace) => {
  if ( !store.getState().session.currentUser ) {
    replace("/");
  }
};

const Root = ({ store }) => {
  return (
  <Provider store={ store }>
    <Router history={ hashHistory }>

      <Route path='/'>
        <IndexRoute onEnter={ checker }/>
        <Route component={ App } onEnter={ ensureLogin }>
          <Route path='/home' component={ Home }></Route>
        </Route>
        <Route path='/gate' component={ Gate }></Route>
      </Route>
    </Router>
  </Provider>
)};


export default Root;
