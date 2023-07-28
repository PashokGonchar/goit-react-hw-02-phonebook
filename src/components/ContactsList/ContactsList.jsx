import { Component } from 'react';

export class ContactListPage extends Component {
  state = {
    contacts: [],
  };

  renderContacts = () => {
    return this.props.contacts.map(contact => (
      <span key={contact.id}>
        <li>{contact.name}</li>
      </span>
    ));
  };

  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <ul>{this.renderContacts()}</ul>
      </div>
    );
  }
}

export default ContactListPage;
