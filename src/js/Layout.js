import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
	render () {
		return (
			<div className="layout-wrapper">
				<h1>Crony Central</h1>
					<nav>
						<Link to="/">Cronies</Link>
						<Link to="/NewContact">Add a Crony</Link>
						<Link to="/details/:user_name">Crony Details</Link>
					</nav>
					{this.props.children};
				<footer>&copy 2016</footer>
			</div>
			)
	}
}