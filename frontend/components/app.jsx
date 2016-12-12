import React from 'react';
import GateContainer from './gate/gate_container';

const App = ({children}) => (
  <div className='master'>
      { children }
  </div>
);

export default App;
