import React, {Component, PropTypes} from 'react';
import contactAPI from './contactAPI';
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
    //console.log(this.props.specs)
    return (
      <div className= "contact-details">
        <div className="heading">
          <Link to="/"><button><i className="fa fa-arrow-circle-left fa-2x"/></button></Link>
          <img src="{contactAPI[0].photo}" alt="{contactAPI[0].name}"/>
       </div>
       <ul className="detailList">
        <li><i className="fa fa-user"/>{contactAPI[0].name}</li>
        <li><i className="fa fa-envelope"/>{contactAPI[0].email}</li>
        <li><i className="fa fa-mobile"/>{contactAPI[0].phone}</li>
        <li><i className="fa fa-globe"/>{contactAPI[0].location}</li>
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



