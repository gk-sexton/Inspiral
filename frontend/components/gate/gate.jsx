import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

class sessionLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '', isOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidUpdate(){
    if(this.props.loggedIn){this.props.router.push('/');}
  }

  handleSubmit(e) { //TYPE IS EITHER LOGIN OR SIGNUP
  		e.preventDefault();
  		const user = Object.assign({}, this.state);
  		this.props.processForm(user);
  }

  openModal () {
    this.setState({ isOpen: true });
  }

  closeModal () {
    this.setState({ isOpen: false });
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <h2 className="user-welcome"> {this.props.currentUser.username} is the current user</h2>
          <button className="logout-button" onClick={logoutCB(this.props.logout, this.props.router)}>Log out</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Let's get started with Inspiral</h1>
          <p>Keep all your followed blogs, podcasts, and social media in one, convenient place.</p>
          <button className='modal-button' onClick={ this.openModal }>REGISTER FOR FREE</button>
          <button className='modal-button' onClick={ this.openModal }>SIGN IN</button>
          <img className='splash' src={window.splashimage}/>
          <Modal className='modal-box' contentLabel='' onRequestClose={this.closeModal} isOpen={this.state.isOpen} >
            <h3>Sign Up for Inspiral</h3>
            <form className="login-form" onSubmit={ this.handleSubmit }>
              <div className='login-div'>
    						<input type="text" placeholder='Email'
    						value={this.state.email}
    						onChange={this.update("email")}
    						className="login-input" />
  						<br/>
  						<input type="text" placeholder='Username'
    						value={this.state.username}
    						onChange={this.update("username")}
    						className="login-input" />
              <br/>
    					<input type="password" placeholder='Password'
    						value={this.state.password}
    						onChange={this.update("password")}
    						className="login-input" />
    					<br/>
    					<input type="submit" value='Submit'/>
  						</div>
            </form>
          </Modal>
        </div>
      )
    };
  }
}


const logoutCB = (logout, router) => {
  return () => {
    logout().then(() => {
      router.push('/login');
    })
  }
};






export default withRouter(sessionLinks);
