import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import users from './contactAPI';


export default class Contacts extends Component {
  //static propTypes = {
    //users: React.PropTypes.array,
    //Of(PropTypes.shape({
    //   name: PropTypes.string.isRequired,
    //   email: PropTypes.string.isRequired,
    //   phone: PropTypes.string.isRequired,
    //   location: PropTypes.string.isRequired,
    //   photo: PropTypes.string.isRequired,
    // }).isRequired),
    //contactSelect: PropTypes.func.isRequired,
    //onAdd: PropTypes.func.isRequired
    //add to button, add to render in indexjs
  //}
 getContact(user) {
    ////let {contactSelect} = this.props
     //let clickHandler = () => onContactSelect(user)
    return (
      <li key={user.name}>
      <Link to={`/details/${user.name}`}>{user.name}></Link></li>
      //console.log(user);
      //<div className="contactList">
        //<h3>My Cronies</h3>
          //<ul>{user.map(::this.contactSelect)}</ul>
        //<li>{user.name} onClick={clickHandler}>{user.name}</li>)
      //</div>

      )
  }

  render() {
    //let { onAdd } = this.props;
    return (
    <div className="contactList">
        <h1>My Cronies</h1>
          <ul>
          {users.map(::this.getContact)}
          </ul>
      </div>
      )
}


};
  //<Link to="/NewContact">Add a Crony</Link>
          //<ul>
            //<li>{user.name}</li>
          //</ul>