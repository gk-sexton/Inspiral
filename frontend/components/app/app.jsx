// import React from 'react';
// import GateContainer from './gate/gate_container';
// import { logout } from '../actions/session_actions';
//
// const App = ({children}) => {
//   let welcome;
//   debugger
//     welcome = <p className='heller'>{currentUser.username}</p>;
//   function logoutCB() {
//
//   }
//   return (
//     <div className='master'>
//       <header >
//         <img className="bulb" src={window.logo}/>
//       </header>
//       <div className='sidebar'>
//         <button className='recent'>Recent</button>
//         <button className='new-feed'> New Feed + </button>
//         <ul className='collection-list'>
//           <li className= 'collection-title'>
//             <ul className='subscription-title'>Demo Collection</ul>
//           </li>
//         </ul>
//         <div className='sidebar-controls'>
//           {welcome}
//           <button onClick={ this.logoutCB }>Logout</button>
//         </div>
//       </div>
//       { children }
//     </div>
//   )
// };

// export default App;

import React from 'react';
import { withRouter } from 'react-router';
class App extends React.Component{
  constructor(props){
    super(props);
    this.children = this.props.children;
    this.logoutCB = this.logoutCB.bind(this);
  }

  logoutCB () {
    this.props.logout().then(() => this.props.router.push('/gate'));
  }

  render(){
    let welcome;
    if(this.props.currentUser){
      welcome = <p className='heller'>Signed in as {this.props.currentUser.username}</p>;
    }

    return (
      <div className='master'>
        <header >
          <img className="bulb" src={window.logo}/>
        </header>
        <div className='sidebar'>
          <button className='recent'>Recent</button>
          <button className='new-feed'> New Feed + </button>
          <ul className='collection-list'>
            <li className= 'collection-title'>
              <ul className='subscription-title'>Demo Collection</ul>
            </li>
          </ul>
          <div className='sidebar-controls'>
            {welcome}
            <button onClick={ this.logoutCB }>Logout</button>
          </div>
        </div>
        { this.children }
      </div>
    );
  }
}

export default App;
