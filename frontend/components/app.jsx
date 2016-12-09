import React from 'react';
import GateContainer from './gate/gate_container';

const App = ({children}) => (
  <div className='master'>
      <GateContainer/>
      { children }
  </div>
);

export default App;
