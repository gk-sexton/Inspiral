import React from 'react';
import GateContainer from './gate/gate_container';

const App = ({children}) => (
  <main className='master'>
    <header className='gate-header'> Inspiral Logo</header>
    <section className='gate-sidebar'></section>
    <div className='gate-div'>
      <h1> Let's get started with Inspiral </h1>
      <GateContainer/>
      { children }
    </div>
  </main>
);

export default App;
