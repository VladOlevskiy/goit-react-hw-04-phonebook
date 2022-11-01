import React from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box/Box';
import { ContactForm } from './ContactForm/ContactForm ';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import PropTypes from 'prop-types';
import { FcPhoneAndroid } from 'react-icons/fc';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, SetContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, SetFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = values => {
    const id = nanoid();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return alert(`${values.name} is already in contacts.`);
    }

    const newValues = { id: id, ...values };

    SetContacts(prevState => {
      return [newValues, ...prevState];
    });
  };

  const deleteContact = contactID => {
    SetContacts(contacts.filter(contact => contact.id !== contactID));
  };

  const onChange = e => {
    SetFilter(e.currentTarget.value);
  };

  const normalizedFilterSearch = filter.toLowerCase();

  const FoundedContact = contacts.filter(contact =>
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
          <ContactForm onSubmit={onSubmit} />
          <h2>Contacts</h2>
          {contacts.length >= 1 && (
            <Filter value={filter} onChange={onChange} />
          )}
          <ContactList contact={FoundedContact} onDelete={deleteContact} />
        </Box>
      </Box>
    </>
  );
};

App.propTypes = {
  contacts: PropTypes.array,
  value: PropTypes.string,
};
