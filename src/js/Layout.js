import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
	render () {
		return (
			<div className="layout-wrapper">
				<header><h1>Crony Central</h1></header>
					<nav>
					<div className="friends">
					<Link to="/">Cronies</Link>
					<p>Blue bottle tattooed stumptown four loko, cronut tacos thundercats viral. Fap 3 wolf moon intelligentsia, flannel raw denim ramps lomo offal. Meditation tacos bitters, flexitarian health goth authentic pabst. PBR&B artisan kickstarter pork belly umami, kinfolk seitan ethical organic mustache williamsburg. Slow-carb biodiesel pitchfork chia portland stumptown. Shabby chic pork belly fixie sustainable kitsch health goth scenester iPhone crucifix offal.</p>
					</div>
					<div><Link to="/NewContact">Add a Crony</Link>
					<p>Cold-pressed letterpress 90's retro, whatever +1 photo booth listicle hella salvia offal PBR&B umami butcher hoodie. Franzen blue bottle fixie banjo fanny pack. Drinking vinegar thundercats narwhal mustache 8-bit knausgaard echo park food truck, salvia intelligentsia ethical whatever blue bottle man braid. Locavore cardigan raw denim try-hard chicharrones. Skateboard authentic hammock, cold-pressed neutra gluten-free lumbersexual tofu biodiesel schlitz vice butcher shabby chic meditation. Ugh shabby chic food truck, direct trade narwhal iPhone fanny pack occupy paleo letterpress venmo godard pitchfork jean shorts brooklyn.</p>
					</div>
					</nav>
					{this.props.children}
				<footer>&copy 2016</footer>
			</div>
			)
	}
}	//<Link to="/details/:user_name">Crony Details</Link>