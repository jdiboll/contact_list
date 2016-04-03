import React, {Component, PropTypes} from 'react';

export default class Contacts extends Component {
  static propTypes = {
    users: React.PropTypes.array,
    //Of(PropTypes.shape({
    //   name: PropTypes.string.isRequired,
    //   email: PropTypes.string.isRequired,
    //   phone: PropTypes.string.isRequired,
    //   location: PropTypes.string.isRequired,
    //   photo: PropTypes.string.isRequired,
    // }).isRequired),
    contactSelect: PropTypes.func.isRequired
  }
  getContact(user) {
    let {contactSelect} = this.props
    // let clickHandler = () => onContactSelect(user)
    return (
      <li onClick = {contactSelect.bind(0,user)}>
      {user.name}
      </li>
      //<div className="contactList">
        //<h3>My Cronies</h3>
          //<ul>{user.map(::this.contactSelect)}</ul>
        //<li>{user.name} onClick={clickHandler}>{user.name}</li>)
      //</div>

      )
  }
  render() {
    return (
    <div className="contactList">
        <h1>My Cronies</h1>
          <ul>
          {this.props.users.map(::this.getContact)}
          </ul>
      </div>
      )
}


};
          //<ul>
            //<li>{user.name}</li>
          //</ul>