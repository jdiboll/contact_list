import React, {Component, PropTypes} from 'react';

export default class Contacts extends Component {
  static PropTypes = {
    users: React.PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }).isRequired),
    contactSelect: PropTypes.func.isRequired
  }
  ///click function
  render () {
    return (
      <div className="contactList">
        <h3>My Cronies</h3>
          <ul>
            <li>{user.name}</li>
          </ul>
      </div>

      )
  }


};


