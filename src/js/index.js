// Javascript Entry Point
import React, {Component, Proptypes} from 'react';
import { render } from 'react-dom';
import contactAPI from './contactAPI';
import Contacts from './contacts';
import ContactSpecs from './details';
import NewContact from './NewContact';
import cookie from 'js-cookie';
import { Router, Route, hashHistory } from 'react-router';

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
	<Route path="/" component={Contacts}/>
	<Route path="/NewContact" component={NewContact}/>
	<Route path="/details" component={ContactSpecs}/>
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