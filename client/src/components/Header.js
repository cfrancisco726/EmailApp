import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			// produced by auth reducer
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">log in with google</a>
					</li>
				);
			default:
				return [
					<li key="1">
						<Payments />
					</li>,
					<li key="3" style={{ margin: '0 10px' }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key="2">
						<a href="/api/logout">log out</a>
					</li>
				];
		}
	}

	render() {
		console.log(this.props);
		return (
			<nav>
				<div className="nav wrapper">
					<Link
						to={this.props.auth ? '/surveys' : '/'}
						className="left-brand-log"
					>
						Email App
					</Link>
					<ul className="right">
						<li>{this.renderContent()}</li>
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}
// function mapStateToProps(state) {
// 	return { auth: state.auth };
// }
export default connect(mapStateToProps)(Header);
