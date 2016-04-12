// Javascript Entry Point
import React, {Component, Proptypes} from 'react';
import { render } from 'react-dom';
import users from './contactAPI';
import Contacts from './contacts';
import ContactSpecs from './details';
import NewContact from './NewContact';
import cookie from 'js-cookie';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Layout from './Layout';

// function activeUser () {
// 	return !!cookie.get("user.name");
// }

// function mustSignIn (state, replace) {
// 	if (!activeUser()) {
// 	replace ('/contacts');
// 	}
// }

// function signedIn (state, replace) {
// 	if (activeUser()) {
// 		replace ('/contacts')
// 	}
// }

render ((
	<Router history = {hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Contacts}/>
			<Route path="/NewContact" component={NewContact}/>
			<Route path="/details/:user_name" component={ContactSpecs}/>
		</Route>
	</Router>
	), document.querySelector('.app'));

//check this!!!
// let showDetails = (user) => {
// ReactDOM.render (
// 		<ContactSpecs specs={user} goBack={showContacts}/>,
// 		document.querySelector('.app'))
// }

// let showContacts = () => {
// 	ReactDOM.render (
// 		<Contacts users={contactAPI} contactSelect={showDetails} onAdd={renderNewForm}/>,
// 		document.querySelector('.app'))
// } 

// function addItemAndRender (newform) {
// 	console.log(newform);
// 	contactAPI.push(newform);//<---no more push, put in loading screen, then insert ajax list .then renderNewForm
// 	showContacts();
// }

// function renderNewForm() {
// 	ReactDOM.render (
// 		<NewContact onAdd={addItemAndRender}/>
// 		,document.querySelector('.app'))
// }

 //showContacts();
//let contactList = ReactDOM.render (
	//, document.querySelector('.app'))


//showDetails({name:'ben', email: "bbb", phone: 'hey', location: 'boop', photo: 'woah'})