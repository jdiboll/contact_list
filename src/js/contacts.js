import React, {Component, Proptypes} from 'react';

export default class Contacts extends Component {
  static Proptypes = {
    users: React.Proptypes.arrayOf(Proptypes.shape({
      name: Proptypes.string.isRequired,
      email: Proptypes.string.isRequired,
      phone: Proptypes.string.isRequired,
      location: Proptypes.string.isRequired,
      photo: Proptypes.string.isRequired,
        }).isRequired,
    )
    contactSelect: Proptypes.func.isRequired
  }
}


