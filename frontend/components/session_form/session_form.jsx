import React from 'react';
import { Link, withRouter } from 'react-router';
import FontAwesome from 'react-fontawesome'

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	componentWillReceiveProps(newProps) {
    if (newProps.formType !== this.props.formType) {
      this.props.clearErrors();
    }
	}
	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	renderErrors() {
		return(
			<ul>
				{
					this.props.errors.map((error, i) => {
						if (error !== "Password digest can't be blank") {
							return (
								<li key={`error-${i}`}>
									<FontAwesome name='exclamation-triangle' />{error}
								</li>
							);
						}
					}
				)
			}
			</ul>
		);
	}

	renderForm() {
		let username;
		let welcomeTitle;
		let welcomeMessage;
		let redirectMessage;
		let redirectLink;
		let submitValue;

		if (this.props.formType === "login") {
			welcomeTitle = "Sign in to Sleek";
			welcomeMessage = <p className="welcomeMessage">
												Enter your
												<strong> email address </strong>
												and
												<strong> password. </strong>
											</p>;
			redirectMessage = "Already have an account?";
			redirectLink = <Link to="/signup" className="userStatus">Sign up</Link>;
			submitValue = "Sign in";
		} else {
			welcomeTitle = "Join Sleek";
			welcomeMessage = <p className="welcomeMessage">
												Enter your
												<strong> email address, </strong>
												choose a
												<strong> password </strong>
												and
												<strong> username.</strong>
											</p>;
			redirectMessage = "Already have an account?";
			redirectLink = <Link to="/login" className="userStatus">Sign in</Link>;
			username = (
				<input
					type="text"
					placeholder = "funky username here"
					value={this.state.username}
					onChange={this.update("username")}
					className="login-input" />
			);
			submitValue = "Sign up";
		}

	return(
		<div className="login-form">
			<form onSubmit={this.handleSubmit} className="login-form-box">
				<h1 className="welcomeTitle">{welcomeTitle}</h1>
				{welcomeMessage}

				{username}

				<input
					type="text"
					placeholder="email goes here"
					value={this.state.email}
					onChange={this.update("email")}
					className="login-input" />

				<input
					placeholder="password"
					type="password"
					value={this.state.password}
					onChange={this.update("password")}
					className="login-input" />

				<input type="submit" value={submitValue} className="submit"/>
				<p className="redirect">{redirectMessage} {redirectLink}</p>
			</form>
		</div>
		);
	}

	render() {
		return (
			<div className="login-form-container">
				{this.props.errors.length === 0 ? "" : this.renderErrors()}
				{this.renderForm()}
			</div>
		);
	}
}

export default withRouter(SessionForm);