import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

class Gate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '', isOpen: false,
       modalType: '' };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openSignup = this.openSignup.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleSubmit(e) {
  		e.preventDefault();
      const type = (this.state.modalType === 'login') ? this.props.login : this.props.signup;
  		const user = Object.assign({}, this.state);
  		this.props.processForm(type,user).then(() => this.props.router.push('/'));
  }

  guestLogin(){
    const type = this.props.login;
    const user = {username: 'Guest', password: 'youllneverguestit'};
    this.props.processForm(type,user).then(() => this.props.router.push('/'));
  }

  renderErrors() {
    return (
      <ul className='error-list'>
        {this.props.errors.map((error, i)=>
          <li key={`error-${i}`}>
            {error}
          </li>)}
      </ul>
    );
  }
  openModal (type) {
    this.props.resetErrors();
    this.setState({ isOpen: true , modalType: type });
  }

  openSignup () {
    this.openModal('signup');
  }

  openLogin () {
    this.openModal('login');
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
    let prompt;
    let emailField;
    let switchLink;
    if (this.state.modalType === 'signup'){
      emailField = <input type='text' placeholder='Email'
          value={this.state.email}
          onChange={this.update('email')}
          className='login-input' />;
      prompt = <h3>Sign up for Inspiral!</h3>;
      switchLink = <button className='switch-link' onClick={ this.openLogin }>
       Already a user? Log in instead</button>;
    } else {
        emailField = "";
        prompt = <h3>Log in to Inspiral!</h3>;
        switchLink = <button className='switch-link' onClick={ this.openSignup }>
        Dont have an account? Sign up instead</button>;
    }
    return (
      <div>
        <header className='gate-header'>Inspiral<img className="bulb" src={window.logo}/>
          <button className='login-button' onClick={ this.openLogin }>SIGN IN</button>
        </header>
        <div  className='gate-body'>
          <h1>Lets get started with Inspiral</h1>
          <p>Keep all your followed blogs, podcasts, and social media in one, convenient place.</p>
          <button className='signup-button' onClick={ this.openSignup }>REGISTER FOR FREE</button>
          <p>Alternatively, you can demo the site, no sign-up reqired:</p>
          <button className='signup-button' onClick={ this.guestLogin }>TAKE A SPIN</button>
          <Modal className='modal-box' overlayClassName='modal-box-overlay'
            contentLabel='' onRequestClose={this.closeModal} isOpen={this.state.isOpen} >
            { prompt }
            <form className="login-form" onSubmit={ this.handleSubmit }>
              <div className='login-div'>
                { emailField }
                <input type='text' placeholder='Username'
                      value={this.state.username}
                      onChange={this.update('username')}
                      className='login-input' />
                <br/>
                <input type='password' placeholder='Password'
                      onChange={this.update('password')}
                      className='login-input' />
                <br/>
                <input className='login-button' type="submit" value='Submit'/>
              </div>
            </form>
            { this.renderErrors() }
            { switchLink }
          </Modal>
        </div>
      </div>
    );
    }
  }

export default withRouter(Gate);
