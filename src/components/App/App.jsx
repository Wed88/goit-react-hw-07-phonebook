import { useState } from 'react';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

export default function App() {
  const [filter, setFilter] = useState('');

  const { data: contacts, error, isError } = useFetchContactsQuery();
  
  
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  
  return (
    <div style={{ padding: '20px' }}>
       {isError && <p>{error.data }</p>}
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      <Filter value={filter} changeFilter={changeFilter}/>
      {contacts && <ContactList filter={filter} contacts={contacts} />}
     
    </div>
  );
}
