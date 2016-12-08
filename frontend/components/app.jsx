import React from 'react';
import GateContainer from './gate/gate_container';

const App = ({children}) => (
  <div className='master'>
    <header className='gate-header'>Inspiral<img className="bulb" src={window.logo}/></header>
    <div className='gate-div'>
      <GateContainer/>
      { children }
    </div>
  </div>
);

export default App;
