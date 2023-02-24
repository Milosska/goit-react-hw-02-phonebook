import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import 'modern-normalize';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    let newContact = e;
    newContact.id = nanoid();

    this.setState(prevState => {
      console.log(prevState);
      // ...prevState,
      prevState.contacts.push(newContact);
    });
  };

  render() {
    return (
      <div>
        <GlobalStyles />
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        {/* <Filter ... />
  <ContactList ... /> */}
      </div>
    );
  }
}
