// import { useState } from 'react';
import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

export default function App() {
  const { data: contacts, error, isFetching } = useFetchContactsQuery();
  const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      <Filter />
      {contacts && <ContactList contacts={contacts} onDelete={deleteContact} deleting={isDeleting} />}
    </div>
  );
}
