import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box/Box';
import { ContactForm } from './ContactForm/ContactForm ';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import PropTypes from 'prop-types';
import { FcPhoneAndroid } from 'react-icons/fc';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmit = values => {
    const id = nanoid();
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return alert(`${values.name} is already in contacts.`);
    }
    const newValues = { id: id, ...values };
    this.setState(prevState => {
      return { contacts: [newValues, ...prevState.contacts] };
    });
  };

  deleteContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  onChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const normalizedFilterSearch = this.state.filter.toLowerCase();
    const FoundedContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterSearch)
    );
    return (
      <>
        <Box paddingBottom="30px" paddingTop="30px">
          <Box
            paddingBottom="30px"
            display="flex"
            flexDirection="column"
            marginLeft="auto"
            marginRight="auto"
            alignItems="center"
            width="500px"
            boxShadow="0px 1px 7px rgb(0 0 0), 0px 1px 8px rgb(0 0 0 / 67%), 0px 2px 3px rgb(0 0 0 / 47%)"
            borderRadius="0px 0px 4px 4px"
            backgroundColor="#cbcbcb"
            marginBottom="80px"
          >
            <h1>
              <FcPhoneAndroid size={25} />
              Phonebook
            </h1>
            <ContactForm onSubmit={this.onSubmit} />
            <h2>Contacts</h2>
            {this.state.contacts.length >= 1 && (
              <Filter value={this.state.filter} onChange={this.onChange} />
            )}
            <ContactList
              contact={FoundedContact}
              onDelete={this.deleteContact}
            />
          </Box>
        </Box>
      </>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.array,
  value: PropTypes.string,
};
