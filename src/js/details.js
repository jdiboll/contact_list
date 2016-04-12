import React, {Component, PropTypes} from 'react';
import users from './contactAPI';
import Contacts from './contacts';
import { Link } from 'react-router';


export default class contactSpecs extends Component {
  //static propTypes = {
     //specs: React.PropTypes.shape({
      //name: PropTypes.string.isRequired,
      //email: PropTypes.string.isRequired,
      //phone: PropTypes.string.isRequired,
      //location: PropTypes.string.isRequired,
      //photo: PropTypes.string.isRequired,
    //}).isRequired,
    //goBack:PropTypes.func.isRequired
  //}

  render () {
    //console.log(user_name, this.props.params.user_name)
    //console.log(users)
    let {user_name} = this.props.params;
    let user = users.find(currentUser => currentUser.name === user_name);
    // let user = userArr.pop()
    return (
      <div className= "contact-details">
        <div className="heading">
          <Link to="/"><button><i className="fa fa-arrow-circle-left fa-2x"/></button></Link>
          <img src={user.photo} alt={user.name}/>
       </div>
       <ul className="detailList">
        <li><i className="fa fa-user"/>{user.name}</li>
        <li><i className="fa fa-envelope"/>{user.email}</li>
        <li><i className="fa fa-mobile"/>{user.phone}</li>
        <li><i className="fa fa-globe"/>{user.location}</li>
        </ul>
      </div>
     )
  }
};
          // {this.props.specs.photo}
          // {this.props.specs.location}
          // {this.props.specs.phone}
          // {this.props.specs.name}
          // {this.props.specs.name}
          // {this.props.specs.email}
          //<button onClick={this.props.goBack}><i className="fa fa-arrow-circle-left fa-2x"/></button>



