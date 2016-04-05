// Javascript Entry Point
import React, {Component, Proptypes} from 'react';
import ReactDOM from 'react-dom';
import contactAPI from './contactAPI';
import Contacts from './contacts';
import ContactSpecs from './details';
import NewContact from './NewContact';

//let Asher = {
	//photo: 'http:www.american.edu/uploads/profiles/large/streitmatter_profile.jpg',
	//name: "Asher Riley",
	//email: 'quietguy1@yahoo.com',
	//phone: "404-345-7652",
	//location: 'Smuteye, AL'
//}//
//let tempOnBack = alert('onBack was clicked');





//check this!!!
let showDetails = (user) => {
ReactDOM.render (
		<ContactSpecs specs={user} goBack={showContacts}/>,
		document.querySelector('.app'))
}

let showContacts = () => {
	ReactDOM.render (
		<Contacts users={contactAPI} contactSelect={showDetails} onAdd={renderNewForm}/>,
		document.querySelector('.app'))
} 

function addItemAndRender (newform) {
	console.log(newform);
	contactAPI.push(newform);
	showContacts();
}

function renderNewForm() {
	ReactDOM.render (
		<NewContact onAdd={addItemAndRender}/>
		,document.querySelector('.app'))
}

 showContacts();
//let contactList = ReactDOM.render (
	//, document.querySelector('.app'))


//showDetails({name:'ben', email: "bbb", phone: 'hey', location: 'boop', photo: 'woah'})