import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactFormPage from './ContactForm/ContactForm';
import ContactListPage from './ContactsList/ContactsList';
import Filter from './ContactFilters/ContactFilters';
import { HeaderDiv, HeaderH1, HeaderH2 } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    const isContactListEmpty = this.state.contacts.length === 0;

    return (
      <HeaderDiv>
        <HeaderH1>Phonebook</HeaderH1>
        <ContactFormPage onSubmit={this.handleSubmit} />
        <HeaderH2>Contacts</HeaderH2>
        {!isContactListEmpty && (
          <Filter value={this.filter} onChange={this.handleFilterChange} />
        )}
        <ContactListPage
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </HeaderDiv>
    );
  }
}
