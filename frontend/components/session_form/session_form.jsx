import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: '', email: '',password: '' };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate(){
		if(this.props.loggedIn){
			this.props.router.push('/');
		}
	}
	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.processForm(user);
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	render() {
		if (this.props.formType==='login'){
			return (
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						<br/>
						Please {this.props.formType} or {this.navLink()}
							<div className='login-form'>
								<label> Username:
									<input type="text"
										value={this.state.username}
										onChange={this.update("username")}
										className="login-input" />
								</label>
								<br/>
								<label> Password:
									<input type="password"
										value={this.state.password}
										onChange={this.update("password")}
										className="login-input" />
								</label>
								<br/>
								<input type="submit" value="Submit" />
							</div>
					</form>
				</div>
			);
		} else {
			return (
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						<br/>
						Please {this.props.formType} or {this.navLink()}
						<div className="login-form">
							<label> Email:
								<input type="text"
									value={this.state.email}
									onChange={this.update("email")}
									className="login-input" />
							</label>
							<br/>
							<label> Username:
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							</label>
	            <br/>
							<label> Password:
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
							<br/>
							<input type="submit" value='Submit'/>
						</div>
					</form>
				</div>
			);
		}
	}
}

export default withRouter(SessionForm);
