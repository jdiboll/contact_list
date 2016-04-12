import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';


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
    //onAdd: PropTypes.func.isRequired
    //add to button, add to render in indexjs
  }
  getContact(user) {
    let {contactSelect} = this.props
     let clickHandler = () => onContactSelect(user)
    return (
      <li key={user.name} onClick = {contactSelect.bind(0,user)}>
      {user.name}
      </li>
      // <div className="contactList">
        // <h3>My Cronies</h3>
          // <ul>{user.map(::this.contactSelect)}</ul>
        // <li>{user.name} onClick={clickHandler}>{user.name}</li>)
      // </div>

      )
  }

  render() {
    //let { onAdd } = this.props;
    return (
    <div className="contactList">
    <Link to="/NewContact">Add a Crony</Link>
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