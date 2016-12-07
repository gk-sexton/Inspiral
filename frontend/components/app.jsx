import React from 'react';
import GateContainer from './gate/gate_container';

const App = ({children}) => (
  <div>
    <h2> Let's get started with </h2>
    <h1> Inspiral </h1>
    <GateContainer/>
    { children }
  </div>
);

export default App;
