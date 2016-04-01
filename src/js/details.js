import React, {Component, PropTypes} from 'react';
import contactAPI from './contactAPI';


export default class details extends Component {
  static PropTypes = {
     user: React.PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }).isRequired,
    goBack:PropTypes.func.isRequired
  }

  render () {
    return (
      <div className= "contact-details">
        <div className="heading">
          <button onClick={this.props.goBack}></button>
          <img src={user.photo} alt={user.name}/>
       </div>
      </div>
     )
  }
};




