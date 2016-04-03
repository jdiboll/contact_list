import React, {Component, PropTypes} from 'react';
import contactAPI from './contactAPI';


export default class contactSpecs extends Component {
  static propTypes = {
     specs: React.PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }).isRequired,
    goBack:PropTypes.func.isRequired
  }

  render () {
    console.log(this.props.specs)
    return (
      <div className= "contact-details">
        <div className="heading">
          <button onClick={this.props.goBack}></button>
          <img src={this.props.specs.photo} alt={this.props.specs.name}/>
       </div>
       <ul className="detailList">
        <li><i className="fa fa-user"/>{this.props.specs.name}</li>
        <li><i className="fa fa-envelope"/>{this.props.specs.email}</li>
        <li><i className="fa fa-mobile"/>{this.props.specs.phone}</li>
        <li><i className="fa fa-globe"/>{this.props.specs.location}</li>
        </ul>
      </div>
     )
  }
};




