// import { useSelector } from 'react-redux';
// import { getContacts,getVisibleContacts } from 'redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({filter,contacts, onDelete,deleting}) => {
  const normalizedFilter = filter.toLowerCase();
  const visibledContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
  <>
    {visibledContacts && (
      <ul>
          {visibledContacts.map(({ name, id, phone }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={phone}
            onDelete={onDelete}
            deleting={deleting}
          />
        );
      })}
      </ul>
    )}
  </>)
};

export default ContactList;
