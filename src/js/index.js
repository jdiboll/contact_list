// Javascript Entry Point
import React, {Component, Proptypes} from 'react';
import ReactDOM from 'react-dom';
import contactAPI from './contactAPI';
import Contacts from './contacts';
import contactSpecs from './details';

//let Asher = {
	//photo: 'http:www.american.edu/uploads/profiles/large/streitmatter_profile.jpg',
	//name: "Asher Riley",
	//email: 'quietguy1@yahoo.com',
	//phone: "404-345-7652",
	//location: 'Smuteye, AL'
//}//
//let tempOnBack = alert('onBack was clicked');





//check this!!!
function showDetails() {
ReactDOM.render (
		<contactSpecs user={user.name} goBack={user.list}/>,
		document.querySelector('.app'))
}

function showContacts () {
	ReactDOM.render (
		<Contacts user={user.name} getContact={showDetails}/>,
		document.querySelector('.app'))
}

showContacts();
//let contactList = ReactDOM.render (
	//, document.querySelector('.app'))