import React from 'react';
import GateContainer from './gate/gate_container';

const App = ({children}) => (
  <div className='master'>
    <header>
      <img className="bulb" src={window.logo}/>
    </header>
      { children }
  </div>
);

export default App;
