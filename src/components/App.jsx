import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import 'modern-normalize';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = (values, { resetForm }) => {
    let newContact = values;
    newContact.id = nanoid();

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    resetForm({
      name: '',
    });
  };

  render() {
    return (
      <div>
        <GlobalStyles />
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
