import { Component } from 'react';
import { Title, Form, Input, Label, SubmitButton } from './app.styled';
import ContactListPage from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleInputName = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleInputNumber = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { contacts, name, number } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Title>Phonebook</Title>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleInputName}
            id={nanoid()}
          />
          <Label htmlFor="number">Number</Label>
          <Input
            type="tel"
            name="number"
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleInputNumber}
          />
          <SubmitButton type="submit">Add Contacts</SubmitButton>
        </Form>
        <ContactListPage contacts={contacts} />
      </div>
    );
  }
}
