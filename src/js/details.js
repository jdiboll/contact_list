    import React, {Component, Proptypes} from 'react';


export default class details extends Component {
  static Proptypes = {
     user: Proptypes.shape({
      name: Proptypes.string.isRequired,
      email: Proptypes.string.isRequired,
      phone: Proptypes.string.isRequired,
      location: Proptypes.string.isRequired,
      photo: Proptypes.string.isRequired,
    }).isRequired,
    goBack:Proptypes.func.isRequired
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
}