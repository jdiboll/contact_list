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
  getContact(user) {
    let contactSelect = this.props
    let clickHandler = () => onContactSelect(user)
    return (
      <div className="contactList">
        <h3>My Cronies</h3>
          <ul>{user.map(::this.contactSelect)}</ul>
        <li>{user.name} onClick={clickHandler}>{user.name}</li>)
      </div>

      )
  }


};
          //<ul>
            //<li>{user.name}</li>
          //</ul>

