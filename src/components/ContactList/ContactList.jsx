// import { useSelector } from 'react-redux';
// import { getContacts,getVisibleContacts } from 'redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({contacts}) => {
  // const contacts = useSelector(getContacts)
  // const visibledContacts = useSelector(getVisibleContacts)

  return (
  <>
    {contacts && (
      <ul>
          {contacts.map(({ name, id, phone }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={phone}
          />
        );
      })}
      </ul>
    )}
  </>)
};

export default ContactList;
