import React from 'react';
import { Link, withRouter } from 'react-router';

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
									{error}
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

		if (this.props.formType === "login") {
			welcomeTitle = "Sign in to Sleek";
			welcomeMessage = "Enter your email address and password.";
			redirectMessage = "Already have an account?";
			redirectLink = <Link to="/signup">Sign up</Link>;
		} else {
			welcomeTitle = "Join Sleek";
			welcomeMessage = "Enter your email address and password.";
			redirectMessage = "Already have an account?";
			redirectLink = <Link to="/login">Sign in</Link>;
			username = (
				<input
					type="text"
					placeholder = "funky username here"
					value={this.state.username}
					onChange={this.update("username")}
					className="login-input" />
			);
		}

	return(
		<div className="login-form">
			<form onSubmit={this.handleSubmit} className="login-form-box">
				{welcomeTitle}
				<br/>
				{welcomeMessage}
				<div className="login-form">

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

					<input type="submit" value="Submit" />
				</div>
				<p>{redirectMessage} {redirectLink}</p>
			</form>
		</div>
		);
	}

	render() {
		return (
			<div className="login-form-container">
				{this.renderErrors()}
				{this.renderForm()}
			</div>
		);
	}
}

export default withRouter(SessionForm);
