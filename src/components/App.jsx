import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import 'modern-normalize';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = (values, { resetForm }) => {
    let newContact = values;

    const check = this.state.contacts.filter(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (check.length) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      newContact.id = nanoid();

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));

      resetForm({
        name: '',
        number: '',
      });
    }
  };

  handleFilter = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleDelete = EvtId => {
    this.setState({
      contacts: this.state.contacts.filter(({ id }) => id !== EvtId),
    });
  };

  render() {
    return (
      <div>
        <GlobalStyles />
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
